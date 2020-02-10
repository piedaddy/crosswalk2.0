const walk_off = document.querySelector('.walk_off');
const stop_on = document.querySelector('.stop_on');
const button = document.querySelector('.button');

const timer1 = document.querySelector('.timer1');
const timer2 = document.querySelector('.timer2');

timer1.textContent = Number(Math.round((Math.random()* 4) + 2));

button.addEventListener('click', () => {
  setInterval(() => {
    if (Number(timer1.textContent) === 0){
      walk_off.className = 'walk_on';
      stop_on.className = 'stop_off';
      clearInterval();
      timer1.style.display = 'none';
      timer2.textContent = 5;
      setInterval(() => {
        if (Number(timer2.textContent) === 0){
        walk_off.className = 'walk_off';
        stop_on.className = 'stop_on';
        } else {
          timer2.textContent = Number(timer2.textContent) - 1;
        }
      }, 1000 )
  } else {
    timer1.textContent = Number(timer1.textContent) - 1;
  }
}, 1000) 

});





// button.addEventListener('click', () => {
//   setInterval(() => {
//     if (Number(timer.textContent) === 0){
//       walk_off.className = 'walk_on';
//       stop_on.className = 'stop_off';
//       clearInterval();
//   } else {
//     timer.textContent = Number(timer.textContent) - 1;
//   }
// }, 1000) 


// setTimeout(() => {
//   walk_off.className = 'walk_off';
//   stop_on.className = 'stop_on';
// }, 8000 );
// });



  // setInterval(()=>{
  //   timer.textContent = Number(timer.textContent) - 1;
  //   setTimeout(() => {
  //     walk_off.className = 'walk_off';
  //     stop_on.className = 'stop_on';
  //   }, 5000 )
  // }, 1000)