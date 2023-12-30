function getOTP() {
    var randomNumber = Math.random();
    var otp = (Math.round(randomNumber * 1000) + 1000)
    document.querySelector('#otp').innerHTML = "OTP is "+otp;
}