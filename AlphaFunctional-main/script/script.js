let daysArray= [];
let monday = daysArray.push(document.getElementById('monday-schedule'));
let tuesday = daysArray.push(document.getElementById('tuesday-schedule'));
let wednesday = daysArray.push(document.getElementById('wednesday-schedule'));
let thursday = daysArray.push(document.getElementById('thursday-schedule'));
let friday = daysArray.push(document.getElementById('friday-schedule'));
let saturday = daysArray.push(document.getElementById('saturday-schedule'));

function toggleSchedule(day){
  daysArray.forEach(element => {
    element.classList.remove('active');
  });
  document.getElementById(day).classList.add('active');  
}

function closeScheduleMobile(element){
  document.getElementById(element).classList.toggle('active');
}


  document.getElementById("openMenu").addEventListener('click',function (e){
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });










