
<?php
//get data from form  
$name = $_POST['Fname' + 'LName'];
$phone= $_POST['InputPhone'];
$email= $_POST['InputEmail1'];
$message= $_POST['formControlTextarea1'];
$to = "namansharma1234@gmail.com";
$subject = "Mail From pizza diet website";
$txt ="Name = ". $name. "\r\n  Phone = " . $phone  . "\r\n  Email = " . $email . "\r\n About =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" 
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
// header("Location:thankyou.html");
?>