function updateClock(){
  const now=new Date();
  const time=now.toLocaleTimeString();
  const date=now.toLocaleDateString();
  document.getElementById('time').innerText=time;
  document.getElementById('date').innerText=date;
  let hour=now.getHours();
  document.body.style.background=hour>=6&&hour<18?'#3498db':'#2c3e50';
}
setInterval(updateClock,1000);
updateClock();