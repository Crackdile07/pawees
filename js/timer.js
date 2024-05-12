var countdownDate = new Date("Oct 22, 2024 23:59:59").getTime();

  // 更新倒计时的函数
  var countdownFunction = setInterval(function() {
    // 获取当前时间
    var now = new Date().getTime();

    // 计算倒计时剩余时间
    var distance = countdownDate - now;

    // 计算剩余时间的天、时、分和秒
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 更新倒计时器的值
    document.querySelector('.days').innerText = days;
    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minutes').innerText = minutes;
    document.querySelector('.seconds').innerText = seconds;

    // 如果倒计时结束，则显示消息并清除倒计时
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "倒计时结束";
    }
  }, 1000); // 每秒钟更新一次