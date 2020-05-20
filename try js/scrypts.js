let menu = document.querySelector(".menu_nav"),
  show_btn = document.querySelector(".btn"),
  hide_btn = document.querySelector(".hide");

// show_btn.addEventListener('click',function() {
//     menu.classList.toggle('show')
// })

//---------------- Для слепых

let body = document.querySelector("body"),
  input = document.querySelector(".input"),
  blind = document.querySelector(".blind");

blind.onclick = bigge;
function bigge() {
  body.classList.toggle("for_blind");
  for (let i of document.querySelectorAll("button")) {
    i.classList.toggle("for_blind");
  }
  input.classList.toggle("higher");
}

//------------- Для печати

let printing = document.querySelector(".printing");

printing.onclick = hide_all_tegs;
function hide_all_tegs() {
  document.querySelector("link ").href = "styles2.css";
}

//-------------- Вывод персональных данных

let log_btn = (document.querySelector(".personal_info").onclick = function () {
  document.querySelector(".num").innerHTML = "";
  console.log(document.querySelector(".log_in").value);
  console.log(document.querySelector(".password").value);
  let a = document.querySelector(".range").value;
  document.querySelector(
    ".wrapper"
  ).style.backgroundColor = document.querySelector(".color").value;
  console.log(a);
  document.querySelector(".num").insertAdjacentHTML("beforeend", a);
});

//--------------------- Radio button

// document.querySelector('.travel').onclick = function(){
//     for(let i of document.querySelectorAll('.radio')) {
//         if ( i.checked === true ) {
//             console.log(i.value)
//         }

//     };
// }

let radio = document.querySelectorAll(".radio");

document.querySelector(".travel").onclick = radio_def;
function radio_def() {
  for (let i = 0; i < radio.length; i = i + 1) {
    if (radio[i].checked === true) {
      console.log(radio[i].value);
    }
  }
}

//---------------# 1 2 3 4

let mass1 = [],
  summ = 0,
  mass_text = document.querySelector(".massive0_100"),
  mass_btn = document.querySelector(".mass_btn");

mass_btn.onclick = function () {
  for (let i = 0; i <= 100; i = i + 1) {
    mass1.push(i);
    summ = summ + i;
    mass_text.innerText = summ;
  }
  for (let a of mass1) {
    if (!(a % 2)) {
      // console.log(a)
    }
  }
  for (let a of mass1) {
    if (a % 2) {
      // console.log(a)
    }
  }
};

// ----------- task # 5

let btn5 = document.querySelector(".task5"),
  number = document.querySelector(".number"),
  stepen = document.querySelector(".stepen");

btn5.onclick = function () {
  console.log(number.value);
  console.log(stepen.value);

  if (
    isNaN(number.value) ||
    isNaN(stepen.value) ||
    number.value == 0 ||
    stepen.value == 0
  ) {
    alert("Введите число");
  } else {
    mass_text.innerText = Math.round(number.value) ** Math.round(stepen.value);
  }
};

// ----------- task # 6

let btn6 = document.querySelector(".task6"),
  tab = document.querySelector(".tab"),
  tab_massiv = [];

btn6.onclick = function () {
  for (let i = 1; i <= 10; i++) {
    let a = i * tab.value;
    tab_massiv.push(`<p class="tabl">${i} * ${tab.value} = ${a}</p>`);
    tab_massiv2 = tab_massiv.join(" "); // удаляем запятые при выводе массива
    mass_text.innerHTML = tab_massiv2;
  }
};

// ----------- task # 7

let task7 = document.querySelector(".task7"),
  mass_st = document.querySelector(".mass_start"),
  mass3 = [];
summ2 = 1;
mass_fn = document.querySelector(".mass_finish");

task7.onclick = function () {
  for (let i = mass_st.value; i <= mass_fn.value; i++) {
    // console.log(i)
    summ2 *= i;
    console.log(summ2);
  }
};

// ----------- task # 9

let sale_btn = document.querySelector(".show_parag"),
  span = [],
  sale = document.querySelectorAll(".sale");

sale_btn.onclick = function () {
  if (span != 0) {
    alert("Все абзаци пронумерованы!!");
  } else {
    let summ = 1;
    for (let i of sale) {
      i.insertAdjacentHTML("afterbegin", `<span class='span'>${summ++}</span>`);
      span.push(summ);
      console.log(i.children[0]);
      console.log(span);
    }
  }
};

// ----------- task # 10 zodiak

let day = document.querySelector(".day"),
  month = document.querySelector(".month"),
  zodiak = document.querySelector(".zodiak"),
  zodiak_day = [],
  zodiak_month = [],
  zodiak_btn = document.querySelector(".zodiak_btn");

zodiak_btn.addEventListener("click", function () {
  for (let i = 1; i <= 31; i = i + 1) {
    zodiak_day.push(i);
    // console.log(zodiak_day)
  }
  for (let m = 1; m <= 12; m++) {
    zodiak_month.push(m);
    // console.log(zodiak_month)
  }
  if (
    isNaN(day.value) ||
    isNaN(month.value) ||
    day.value == 0 ||
    month.value == 0
  ) {
    alert("Заполните все поля");
  } else if (
    (day.value >= zodiak_day[20] && month.value == zodiak_month[2]) ||
    (day.value <= zodiak_day[19] && month.value == zodiak_month[3])
  ) {
    zodiak.innerHTML = "Вы по гороскопу: Овен";
  } else if (
    (day.value >= zodiak_day[20] && month.value == zodiak_month[3]) ||
    (day.value <= zodiak_day[20] && month.value == zodiak_month[4])
  ) {
    zodiak.innerHTML = "Вы по гороскопу: Телец ";
  } else if (
    (day.value >= zodiak_day[21] && month.value == zodiak_month[4]) ||
    (day.value <= zodiak_day[20] && month.value == zodiak_month[5])
  ) {
    zodiak.innerHTML = "Вы по гороскопу: Близнецы";
  } else if (
    (day.value >= zodiak_day[21] && month.value == zodiak_month[5]) ||
    (day.value <= zodiak_day[21] && month.value == zodiak_month[6])
  ) {
    zodiak.innerHTML = "Вы по гороскопу: Рак";
  } else if (
    (day.value >= zodiak_day[22] && month.value == zodiak_month[6]) ||
    (day.value <= zodiak_day[22] && month.value == zodiak_month[7])
  ) {
    zodiak.innerHTML = "Вы по гороскопу: Лев";
  } else if (
    (day.value >= zodiak_day[23] && month.value == zodiak_month[7]) ||
    (day.value <= zodiak_day[22] && month.value == zodiak_month[8])
  ) {
    zodiak.innerHTML = "Вы по гороскопу: Дева";
  } else if (
    (day.value >= zodiak_day[23] && month.value == zodiak_month[8]) ||
    (day.value <= zodiak_day[22] && month.value == zodiak_month[9])
  ) {
    zodiak.innerHTML = "Вы по гороскопу: Весы";
  } else if (
    (day.value >= zodiak_day[23] && month.value == zodiak_month[9]) ||
    (day.value <= zodiak_day[21] && month.value == zodiak_month[10])
  ) {
    zodiak.innerHTML = "Вы по гороскопу: Скорпион";
  } else if (
    (day.value >= zodiak_day[22] && month.value == zodiak_month[10]) ||
    (day.value <= zodiak_day[20] && month.value == zodiak_month[11])
  ) {
    zodiak.innerHTML = "Вы по гороскопу: Стрелец";
  } else if (
    (day.value >= zodiak_day[21] && month.value == zodiak_month[11]) ||
    (day.value <= zodiak_day[19] && month.value == zodiak_month[0])
  ) {
    zodiak.innerHTML = "Вы по гороскопу: Козерог";
  } else if (
    (day.value >= zodiak_day[20] && month.value == zodiak_month[0]) ||
    (day.value <= zodiak_day[17] && month.value == zodiak_month[1])
  ) {
    zodiak.innerHTML = "Вы по гороскопу:Водолей";
  } else if (
    (day.value >= zodiak_day[18] && month.value == zodiak_month[1]) ||
    (day.value <= zodiak_day[19] && month.value == zodiak_month[2])
  ) {
    zodiak.innerHTML = "Вы по гороскопу: Рыбы";
  }
});

//------------ task 13 drag the figure inside the massive

let massive4 = [1, 0, 0, 0, 0, 0, 0, 0],
  massive4_show = (document.querySelector(
    ".massive_drag"
  ).innerHTML = massive4),
  drag_btn = document.querySelector(".drag");

drag_btn.onclick = function () {
  console.log(massive4);
  massive4.unshift(massive4.pop());
  massive4_show = document.querySelector(".massive_drag").innerHTML = massive4;
};

let massive5 = [5, 2, 5, 75, 101, 5, 2, 148, 75, 60, 5, 532, 77],
  newMassive6 = massive5.sort((a, b) => a - b),
  p = 1;

let item = document.querySelectorAll(".item");
item.forEach(function (i) {
  i.onclick = one;
});

function one() {
  this.style.backgroundColor = "green";
}
// document.querySelector('.repite').onclick = function(){
//   // for (let i of newMassive6) {
//   //   console.log(i)
//     if( newMassive6[0] === newMassive6[1] ) {
//       console.log(newMassive6)
//       console.log(newMassive6[0])
//       console.log(newMassive6[1])

//       p = p + 1

//       console.log(`Чисел:${newMassive6[0]} = ${p} раза`)
//       console.log(newMassive6.shift(0))
//       console.log(newMassive6.shift(1))
//     }
//      else if(newMassive6[0] !== newMassive6[1] ){
//       console.log(newMassive6)
//       console.log(newMassive6[0])
//       console.log(newMassive6[1])
//       p = 1
//       let k = 1;

//       console.log(`Чиселo:${newMassive6[0]} = ${k} раз`)
//       console.log(newMassive6.shift(0))

//     }

//   // }
// }

//-------------- Task 16-17
let lengh_mass = document.querySelector(".lengh_mass"),
  massive7 = [];

document.querySelector(".show_mass7_btn").onclick = function () {
  console.log(massive7);
  console.log(lengh_mass.value);
  for (
    let i = 0;
    i <= lengh_mass.value;
    i = massive7.push(Math.round(Math.random() * lengh_mass.value))
  ) {
    // massive7.push(i)
    document.querySelector(".show_mass7").innerHTML = massive7;
  }
};

//-------------- Блок меню

function show() {
  menu.classList.add("show");
  menu.style.backgroundColor = "pink";
  menu.style.borderRadius = "15px";
  // menu.hidden = false;
}
function hide() {
  menu.classList.remove("show");
  // menu.hidden = true;
}
show_btn.onclick = show;
hide_btn.onclick = hide;

//----------------  Игра - угадай число

let rand = document.querySelector(".rand"),
  got_btn = document.querySelector(".choose");

got_btn.onclick = check;

function check() {
  let r = Math.round(Math.random() * 10);
  let inpVal = input.value;
  inpVal = Math.round(inpVal);
  console.log(r);
  console.log(inpVal);
  if (isNaN(inpVal) || inpVal == null || inpVal < 0) {
    console.log("Вы ввели не число или отрицательное число");
  } else if (inpVal > 10) {
    console.log("Введите число меньше 10");
  } else if (inpVal == r) {
    alert("You win!");
    location.reload();
    rand.innerHTML = r;
  } else {
    console.log("You lose");
    rand.innerHTML = r;
  }
}

//---------------------------------------------------- mouse events --------

document.querySelector(".pink_square").ondblclick = function () {
  alert("Подтвердите действие");
};

document.querySelector(".item_item").onmouseenter = function () {
  for (let i of document.querySelectorAll(".item")) {
    i.classList.remove("hidden");
    color();
  }
};
document.querySelector(".drop_menu").onmouseleave = function () {
  for (let i of document.querySelectorAll(".item")) {
    i.classList.add("hidden");
    colorBack();
  }
};
function color() {
  for (let i of document.querySelectorAll(".item")) {
    i.addEventListener("mouseenter", function () {
      i.style.backgroundColor = "red";
    });
  }
}

function colorBack() {
  for (let i of document.querySelectorAll(".item")) {
    i.addEventListener("mouseleave", function () {
      i.style.backgroundColor = "rgb(138, 68, 230)";
    });
  }
}

//----------------------- Tabs ----------------------------

// document.querySelectorAll('.tab').forEach(function(elem){
//   elem.onclick = tabs
// })

// function tabs(){
//   for (let i of document.querySelectorAll('.text_tab')){
//     i.style.display = 'none'
//   }
//  let data = this.getAttribute('data');
//  document.querySelector(`.text_tab[data="${data}"]`).style.display = 'block';
//   // console.log( this.getAttribute('data'))
// }

for (let i of document.querySelectorAll(".tab")) {
  i.addEventListener("click", function () {
    let data = i.getAttribute("data");
    for (let i of document.querySelectorAll(".text_tab")) {
      i.style.display = "none";
    }
    document.querySelector(`.text_tab[data='${data}']`).style.display = "block";
  });
}

//-------------------- keyboard event ----------------

// document.querySelector('.leters_only').onkeypress = function(e){
//   // console.log(e)
//   if (e.keyCode <=97 || e.keyCode >= 122 || e.altKey == true || e.ctrlKey == true){
//     console.log('wrong')
//     return false
//   }
//   else {
//     console.log(e.value = e.key )
//   }

// }

//-------------- Только в верхнем регистре или нижнем ----

let input_gir = document.querySelector(".leters_only");
input_gir.onkeypress = function (e) {
  console.log(e);
  let nmass = []; // массив из ключ-кодов букв клавиатуры в нижнем регистре
  for (let m = 97; m <= 122; m++) {
    nmass.push(m); // создаем массив из ключ-кодов букв клавиатуры
  }
  let bmass = []; // массив из ключ-кодов букв клавиатуры в вехнем регистре
  for (let f = 65; f <= 90; f++) {
    bmass.push(f); // создаем массив из ключ-кодов букв клавиатуры
  }
  // if (e.keyCode >= 65 || e.keyCode <= 90) {
  nmass.forEach(function (item, i, nmass) {
    // перебираем массив ( элемент, номер элем., сам массив )
    if (item == e.keyCode) {
      // совпадает ли элем. из массива с ketCode буквы клавиатуры
      let a = i; // записываем номер совпавшей цифры в переменную
      nmass = bmass; // обновляем ввесь массив на keyCode в букв клавиатуры в вехнем регистре
      e.returnValue = false; // блокируем вывод букв с клавиатуры в поле input
      input_gir.value += String.fromCharCode(nmass[a]); // вписываем в поле input букву равную keyCode в массиве в вехнем регистре
    }
  });
  // }
};

// let taskInp3 = document.querySelector('.leters_only');
//     taskInp3.onkeypress = function (e) {
//       if (e.keyCode == 93) {
//         this.value += String.fromCharCode(113);
//         return false;
//       }
//       else if (e.keyCode == 39) {
//         this.value += String.fromCharCode(97);
//         return false;
//       }
//       else if (e.keyCode == 47) {
//         this.value += String.fromCharCode(122);
//         return false;
//       }
//       this.value += String.fromCharCode(e.keyCode+1);
//       return false;
//     }

//---------------------------- play with red square -----

let square = document.querySelector(".red_block");
let count_left_rigth = 200;

let count_down_up = 0;

document.onkeydown = function (e) {
  // if(count_left_rigth == 650){
  //   if(e.key == "ArrowRight"){
  //       count_left_rigth = -50;
  //       square.style.marginLeft = `${count_left_rigth}px`
  //   }
  // }
  // if(count_left_rigth == 0){
  //   if(e.key == "ArrowLeft"){
  //       count_left_rigth = 700;
  //       square.style.marginLeft = `${count_left_rigth}px`
  //   }
  // }
  if (count_down_up == 650) {
    if (e.key == "ArrowDown") {
      count_down_up = -50;
      square.style.marginTop = `${count_down_up}px`;
    }
  }
  if (count_down_up == 0) {
    if (e.key == "ArrowUp") {
      count_down_up = 700;
      square.style.marginTop = `${count_down_up}px`;
    }
  }

  if (e.key == "ArrowRight") {
    if (count_left_rigth != 650) {
      function goRight() {
        count_left_rigth += 50;
        square.style.marginLeft = `${count_left_rigth}px`;
        console.log(count_left_rigth);
        if (count_left_rigth == 700) {
          if (e.key == "ArrowRight") {
            count_left_rigth = 0;
            square.style.marginLeft = `${count_left_rigth}px`;
          }
        }
      }
      var setRight = setInterval(goRight, 300);
      console.log(setRight);
    }
  } else if (e.key == "ArrowLeft") {
    if (count_left_rigth != 0) {
      function goLeft() {
        count_left_rigth -= 50;
        square.style.marginLeft = `${count_left_rigth}px`;
        console.log(count_left_rigth);
        if (count_left_rigth == -50) {
          if (e.key == "ArrowLeft") {
            count_left_rigth = 650;
            square.style.marginLeft = `${count_left_rigth}px`;
          }
        }
      }

      setInterval(goLeft, 300);
    }
  } else if (e.key == "ArrowDown") {
    if (count_down_up != 650) {
      count_down_up += 50;
      square.style.marginTop = `${count_down_up}px`;
    }
  } else if (e.key == "ArrowUp") {
    if (count_down_up != 0) {
      count_down_up -= 50;
      square.style.marginTop = `${count_down_up}px`;
    }
  }
};

//------------- modal window ------------

let modal_window = document.querySelector(".modal_window"),
    modal_block = document.querySelector(".modal_block"),
    modal_bg = document.querySelector(".modal_bg"),
    modal_rules_back = document.querySelectorAll('.modal_rules_back'),
    modal_rules = document.querySelector('.modal_rules');

function modal_close() {
  modal_block.classList.toggle("visible");
  modal_bg.classList.toggle("visible");
}
document.querySelector(".modal_show").addEventListener("click", function () {
  modal_close()
});

document.querySelector(".modal_close").addEventListener("click", function () {
  modal_close();
});

document.querySelector(".modal_bg").addEventListener("click", function () {
  modal_close();
});

document.addEventListener("keydown", function (eventEsc) {
  if (eventEsc.key == "Escape" && modal_block.classList[1] == "visible" && modal_bg.classList[1] == "visible") {
    modal_close();
  } else {
    return false;
  }
});
modal_rules.addEventListener('click',function(){
  modal_window.style.marginLeft = '-500px'
})
for(let i of modal_rules_back){
  i.onclick = function(){
    modal_window.style.marginLeft = '0px'
  }
}