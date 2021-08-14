const circles = Array.from(document.querySelectorAll('.front')) // inner holes
const holes = Array.from(document.querySelectorAll('.fronts')) // outer holes
const result = document.querySelector('#result')
const displayCurrentPlayer = document.querySelector('#currentPlayer')
const reset = document.getElementById('reset')
let currentPlayer = 1
var prev = []
const winningArray = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [28, 29, 30, 31],
  [20, 19, 18, 17],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34]
]
reset.addEventListener('click', () => location.reload())
holes.forEach(hole => hole.addEventListener('click', myFunction))

function myFunction (x) {
  var y = x.target
  var i = parseInt(y.id) // index of outer circles === circles
  if (circles[i + 7].classList.contains('taken') && !circles[i].classList.contains('taken')) {
    if (currentPlayer === 1) {
      prev.push(i)
      circles[i].classList.add('taken')
      circles[i].classList.add('player-one')
      holes[i].classList.add('current')
      currentPlayer = 2
      displayCurrentPlayer.innerHTML = currentPlayer
      if (prev.length > 1) {
        holes[prev[prev.length - 2]].classList.remove('current')
      }
    } else if (currentPlayer === 2) {
      prev.push(i)
      circles[i].classList.add('taken')
      circles[i].classList.add('player-two')
      holes[i].classList.add('current')
      currentPlayer = 1
      displayCurrentPlayer.innerHTML = currentPlayer
      if (prev.length > 1) {
        holes[prev[prev.length - 2]].classList.remove('current')
      }
    }
  } else {
    alert('cant go here')
  }
  checkBoard()
}

function checkBoard () {
  for (let i = 0; i < winningArray.length; i++) {
    const circle1 = circles[winningArray[i][0]]
    const circle2 = circles[winningArray[i][1]]
    const circle3 = circles[winningArray[i][2]]
    const circle4 = circles[winningArray[i][3]]

    if (
      circle1.classList.contains('player-one') &&
      circle2.classList.contains('player-one') &&
      circle3.classList.contains('player-one') &&
      circle4.classList.contains('player-one')) {
      result.innerHTML = 'PLAYER ONE WINS!'
      holes[winningArray[i][0]].classList.add('win')
      holes[winningArray[i][1]].classList.add('win')
      holes[winningArray[i][2]].classList.add('win')
      holes[winningArray[i][3]].classList.add('win')
      alert('PLAYER ONE WINS!')
      location.reload()
    }

    if (
      circle1.classList.contains('player-two') &&
      circle2.classList.contains('player-two') &&
      circle3.classList.contains('player-two') &&
      circle4.classList.contains('player-two')) {
      result.innerHTML = 'PLAYER TWO WINS!'
      holes[winningArray[i][0]].classList.add('win')
      holes[winningArray[i][1]].classList.add('win')
      holes[winningArray[i][2]].classList.add('win')
      holes[winningArray[i][3]].classList.add('win')
      alert('PLAYER TWO WINS!')
      location.reload()
    }
  }
}
