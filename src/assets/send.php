<?php 
  // формируем URL, на который будем отправлять запрос в битрикс24
	$queryURL = "https://prostoprocrm.bitrix24.ru/rest/76/x64yy69l3yy1r010/crm.lead.add.json";	

  //собираем данные из формы
  $sPhone = htmlspecialchars($_POST["PHONE"]);
  $sName = htmlspecialchars($_POST["NAME"]);
  $sEmail = htmlspecialchars($_POST["EMAIL"]);

  $arPhone = (!empty($sPhone)) ? array(array('VALUE' => $sPhone, 'VALUE_TYPE' => 'MOBILE')) : array();
  $arEmail = (!empty($sPhone)) ? array(array('VALUE' => $sEmail, 'VALUE_TYPE' => 'WORK')) : array();

	
	// формируем параметры для создания лида	
	$queryData = http_build_query(array(
		"fields" => array(
      "TITLE" => "Заявка с сайта",
			"NAME" => $sName,	// имя
			"EMAIL" => $arEmail,	// email
			"PHONE" => $arPhone, // телефон
		),
		'params' => array("REGISTER_SONET_EVENT" => "Y")	// Y = произвести регистрацию события добавления лида в живой ленте. Дополнительно будет отправлено уведомление ответственному за лид.	
	));

	// отправляем запрос в Б24 и обрабатываем ответ
	$curl = curl_init();
	curl_setopt_array($curl, array(
		CURLOPT_SSL_VERIFYPEER => 0,
		CURLOPT_POST => 1,
		CURLOPT_HEADER => 0,
		CURLOPT_RETURNTRANSFER => 1,
		CURLOPT_URL => $queryURL,
		CURLOPT_POSTFIELDS => $queryData,
	));
	$result = curl_exec($curl);
	curl_close($curl);
	$result = json_decode($result,1); 
 
	// если произошла какая-то ошибка - выведем её
  if(!empty($result['result'])){
    header('Location: ' . "/thanks.html", true, 301);
    exit();
  }elseif(!empty($result['error_description'])){
     json_encode(['message' => 'Lead not added: '.$result['error_description']]);
     echo "Заявка не отправлена";
  }else{
     json_encode(['message' => 'Lead not added']);
     echo "Заявка не отправлена";
  }
?>