function squareDigits(num) {
  var a = ('' + num).split("").map(x => Math.pow(x, 2)).join("")
  return a
}
squareDigits(4114)


function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
validatePIN('-32q')


function longest(s1, s2) {
  var newString = (s1 + s2)
  var best = newString.split('').sort();
  i = 0;
  var last = best.filter(function (cut, index, self) {
    return index === self.indexOf(cut);
  });
  console.log(last)
  return last.join('');
}
longest("aretheyhere", "yestheyarehere")


function findShort(s) {
  var b = s.split(' ')
  var c = b.reduce((short, newshort) => {
    if (newshort.length < short.length) {
      return newshort
    }
    return short
  }, b[0])
  return c.length
}
findShort("bitcoin take over the world maybe who knows perhaps")


function isIsogram(str) {

  var result = true;

  if (str.length == 0) {
    result = true;
  } else {
    var words = str.split('');

    for (var i = 0; i <= words.length - 1; i++) {
      var count = 0;
      word = words[i].toLowerCase();
      for (var a = 0; a <= words.length - 1; a++) {
        if (word === words[a].toLowerCase()) {
          count += 1;
        }
      }
      if (count == 2 || count > 2) {
        result = false;
        break;
      }
    }
  }

  return result;
}

isIsogram('isIsogram')
console.log(isIsogram('Dermatoglyphics'));

function fibonacci(n, length) {
  if (n < 2) {
    return [1];
  }
  if (n < 3) {
    return [1, 1];
  }

  let a = fibonacci(n - 1);
  a.push(a[n - 2] + a[n - 3]);
  return (a.length === length) ? a.map(val => console.log(val)) : a;
};
console.log(fibonacci(10, 2))
fibonacci(5, 10)



function tFib(sig, name) {
  var s = sig
  if (name < 3) {
    return s.slice(0, name)
  }
  for (var i = 3; i < name; i++) {
    s.push(s[i - 1] + s[i - 2] + s[i - 3])
  }
  return s
}
console.log(tFib([0, 0, 2], 20))


function GetSum(a, b) {
  var arr = []
  if (a < b) {

    for (var i = a; i <= b; i++) {
      arr.push(i)
    }
  } else if (b < a) {
    for (var i = b; i <= a; i++) {
      arr.push(i)
    }
  } else {
    return a
  }
  var m = arr.reduce(function (w, q) {
    return w + q
  })
  return m
}
GetSum(15, 5)

function solution(roman) {
  var map =
  {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  console.log(roman.split("").map(numeral => function () {
    console.log(map[numeral])
    return map[numeral]
  }))
  roman = roman.split("").map(numeral => map[numeral]);
  console.log(roman)
  var total = 0;
  for (var counter = 0, n1, n2; counter < roman.length - 1; counter++)  total += ((n1 = roman[counter]) < (n2 = roman[counter + 1])) ? -n1 : n1;
  return total + roman[roman.length - 1];
}
console.log(solution('XXV'))

const users = [{
  name: 'Vadim'
}, {
  name: 'Vova'
}, {
  name: 'Edgar'
}, {
  name: 'Sasha'
}, {
  name: 'Edik'
}, {
  name: 'Jonia'
}];
var obj = {}
for (var i = 0; i < users.length; i++) {
  var name = users[i].name
  if (obj[name.charAt(0)]) {
    obj[name.charAt(0)].push(name)
  } else {
    var arr = []
    arr.push(name)
    obj[name.charAt(0)] = arr
  }
}
console.log(obj)


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 8];

let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

const unique = unique1.concat(unique2);

console.log(unique);
// >> [ 2, 4, 5, 8]

function array_diff(a, b) {
  var arrA = a.slice()
  var arrB = b.slice()
  var res = []
  for (var i = 0; i < arrA.length; i++) {
    var found = false
    for (var j = 0; j < arrB.length; j++) {
      if (arrA[i] == arrB[i]) {
        found = true
        break
      }
    }
    if (found == false) {
      res.push(arrA[i])
    }
  }
  console.log(res)
  return res
}

array_diff([3, 4, 3], [3])



function test_prime(n) {

  if (n === 1) {
    return false;
  }
  else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(test_prime(37));



var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();


bird.src = "img/flappy_bird_bird.png"
bg.src = "img/flappy_bird_bg.png"
fg.src = "img/flappy_bird_fg.png"
pipeUp.src = "img/flappy_bird_pipeUp.png"
pipeBottom.src = "img/flappy_bird_pipeBottom.png"

var gap = 90;

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);

function moveUp() {
  yPos -= 25;
}

// Создание блоков
var pipe = [];

pipe[0] = {
  x: cvs.width,
  y: 0
}

var score = 0;
// Позиция птички
var xPos = 10;
var yPos = 150;
var grav = 1.5;

function draw() {
  ctx.drawImage(bg, 0, 0);

  for (var i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

    pipe[i].x--;

    if (pipe[i].x == 125) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
      });
    }

    // Отслеживание прикосновений
    if (xPos + bird.width >= pipe[i].x
      && xPos <= pipe[i].x + pipeUp.width
      && (yPos <= pipe[i].y + pipeUp.height
        || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
          // setInterval(location.reload(),10)
    }

    if (pipe[i].x == 5) {
      score++;
    }
  }

  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(bird, xPos, yPos);

  yPos += grav;

  ctx.fillStyle = "#000";
  ctx.font = "24px Verdana";
  ctx.fillText("Счет: " + score, 10, cvs.height - 20);

  requestAnimationFrame(draw);
}

pipeBottom.onload = draw;



function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];
    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

validBraces( "([]" )

// function solution(str, ending){
//   return str.slice(0 - ending.length) === ending;
// }
// solution('abcde', 'cde')


function findMaxSubArrayBruteForce(arr) {
  let currentSum = 0;
  let maxSum = 0;
  for (var i = 0; i < arr.length; i++) {
     let currentNum = arr[i];
     currentSum = Math.max((currentSum + currentNum),0)
     maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum
}

findMaxSubArrayBruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4]);


function diamond(n){
  if (n < 0 || n % 2 == 0) return null;
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}

diamond(5)


