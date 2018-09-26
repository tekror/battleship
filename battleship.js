// Player 1 assets
// The board that holds the locations of Player 1's ships
let boardOne = {
  a: ['A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  b: ['B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  c: ['C', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  d: ['D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  e: ['E', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  f: ['F', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  g: ['G', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  h: ['H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  i: ['I', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  j: ['J', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
}
// The board that holds the locations of attacks on Player 1's ships
let attackBoardOne = {
  a: ['A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  b: ['B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  c: ['C', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  d: ['D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  e: ['E', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  f: ['F', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  g: ['G', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  h: ['H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  i: ['I', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  j: ['J', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
}
// Array holding the locations of Player 1's ships (which are also arrays of coordinates)
let boardOneShips = []
// Array holding the ships that have been placed during setup
let boardOneShipsPlaced = []

// Player 2 assets
// The board that holds the locations of Player 2's ships
let boardTwo = {
  a: ['A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  b: ['B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  c: ['C', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  d: ['D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  e: ['E', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  f: ['F', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  g: ['G', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  h: ['H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  i: ['I', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  j: ['J', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
}
// The board that holds the locations of attacks on Player 2's ships
let attackBoardTwo = {
  a: ['A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  b: ['B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  c: ['C', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  d: ['D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  e: ['E', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  f: ['F', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  g: ['G', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  h: ['H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  i: ['I', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  j: ['J', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
}
// Array holding the locations of Player 2's ships (which are also arrays of coordinates)
let boardTwoShips = []
// Array holding the ships that have been placed during setup
let boardTwoShipsPlaced = []

// Initialises the type of ship to be placed during setup
let shipType = ''
// Makes the default ship placement orientation to horizontal
let shipOri = 'h'
// Initialises the delete mode which is activated if the Delete button is pressed
let deleteMode = false
// Sets the initially selected board to Player 1's board
let currentBoard = boardOne
// Selects the initially selected attack board to Player 2's
let currentAttackBoard = attackBoardTwo
// Sets the current player to player 1
let currentPlayer = 1
// Sets the current array of ships to work with as Player 1's
let currentShips = boardOneShips
// Sets the current array of ships placed during setup to Player 1's
let currentShipsPlaced = boardOneShipsPlaced
// Initialises the success/outcome of a player's attack
let currentAttackStatus = ''

function makeElement(tag, loc, options) {
  let element = document.createElement(tag)

  Object.keys(options).forEach((attribute, index) => {
    element[attribute] = options[attribute]
  })

  document.getElementById(loc).append(element)
}

function clickBoardClear(item, board, boardShipsPlaced) {
  // Sets the position as the ID. Eg. A4
  pos = item.target.className

  // If shipTwo has been selected, it will attempt to place it
  if (shipType === 'shipTwo') {
    // The placement returns either true or false based on it's success
    let invalidPlacement = placeShip(board, 2, currentShips, currentPlayer, pos, shipOri)

    // If successful, it adds the shipType to the boardShipsPlaced array
    if (invalidPlacement === false) {
      boardShipsPlaced.push(shipType)
    }

    // Once done, it refreshes the display of the board
    displaySetupBoard(board, boardShipsPlaced)
    // The ship type and orientation are also reset
    shipType = ''
    shipOri = 'h'
  }
  // If shipThreeOne has been selected, it will attempt to place it
  else if (shipType === 'shipThreeOne') {
    // The placement returns either true or false based on it's success
    let invalidPlacement = placeShip(board, 3, currentShips, currentPlayer, pos, shipOri)

    // If successful, it adds the shipType to the boardShipsPlaced array
    if (invalidPlacement === false) {
      boardShipsPlaced.push(shipType)
    }

    // Once done, it refreshes the display of the board
    displaySetupBoard(board, boardShipsPlaced)
    // The ship type and orientation are also reset
    shipType = ''
    shipOri = 'h'
  }
  // If shipThreeTwo has been selected, it will attempt to place it
  else if (shipType === 'shipThreeTwo') {
    // The placement returns either true or false based on it's success
    let invalidPlacement = placeShip(board, 3, currentShips, currentPlayer, pos, shipOri)

    // If successful, it adds the shipType to the boardShipsPlaced array
    if (invalidPlacement === false) {
      boardShipsPlaced.push(shipType)
    }

    // Once done, it refreshes the display of the board
    displaySetupBoard(board, boardShipsPlaced)
    // The ship type and orientation are also reset
    shipType = ''
    shipOri = 'h'
  }
  // If shipFour has been selected, it will attempt to place it
  else if (shipType === 'shipFour') {
    // The placement returns either true or false based on it's success
    let invalidPlacement = placeShip(board, 4, currentShips, currentPlayer, pos, shipOri)

    // If successful, it adds the shipType to the boardShipsPlaced array
    if (invalidPlacement === false) {
      boardShipsPlaced.push(shipType)
    }

    // Once done, it refreshes the display of the board
    displaySetupBoard(board, boardShipsPlaced)
    // The ship type and orientation are also reset
    shipType = ''
    shipOri = 'h'
  }
  // If shipFive has been selected, it will attempt to place it
  else if (shipType === 'shipFive') {
    // The placement returns either true or false based on it's success
    let invalidPlacement = placeShip(board, 5, currentShips, currentPlayer, pos, shipOri)

    // If successful, it adds the shipType to the boardShipsPlaced array
    if (invalidPlacement === false) {
      boardShipsPlaced.push(shipType)
    }

    // Once done, it refreshes the display of the board
    displaySetupBoard(board, boardShipsPlaced)
    // The ship type and orientation are also reset
    shipType = ''
    shipOri = 'h'
  }
}

function clickBoardShip(item, board, boardShipsPlaced) {
  pos = item.target.className
  let shipSize

  // Iterates through and determines the size of the ship being dealt with
  currentShips.forEach((ship) => {
    ship.forEach((part) => {
      if (pos === part) {
        shipSize = ship.length
      }
    })
  })

  // If delete has been clicked, it will attempt to remove the ship
  if (deleteMode === true) {
    deleteShip(board, currentShips, currentPlayer, pos, boardShipsPlaced)
    // Afterwards deleteMode is reset
    deleteMode = false
  }
  // If delete has not been clicked, it will attempt to rotate the ship
  else {
    rotateShip(board, shipSize, currentShips, currentPlayer, pos, boardShipsPlaced)
  }

  // The board is refreshed again
  displaySetupBoard(board, boardShipsPlaced)
}

// Displays the board during setup time
// Ran many times to 'refresh' what is displayed on the screen
function displaySetupBoard(board, boardShipsPlaced) {
  // Creates the board div
  document.body.innerHTML = ''
  let boardDiv = document.createElement('div')
  boardDiv.id = 'board'
  document.body.append(boardDiv)

  // Creates the banner displaying which player's turn it is
  makeElement('div', 'board', { id: 'player', innerHTML: 'PLAYER ' + currentPlayer})

  // Creates a div for whenever whitespace is required
  makeElement('div', 'board', { className: 'blank'} )

  for (let i = 1; i < 11; i++) {
    makeElement('div', 'board', { className: 'blank', innerHTML: i })
  }

  // Initialises the letter used for the ID's of each grid item
  letter = 'a'

  // Iterates through the rows from A to J
  for (let i = 0; i < 10; i++) {
    makeElement('div', 'board', { className: 'blank', innerHTML: letter.toUpperCase() })

    // Iterates through the elements of the row from 1 to 10
    for (let j = 1; j < 11; j++) {
      // If there is no ship on the board at this location, the div ID
      // is created with the appropriate letter+number combination
      if (board[letter][j] === ' ') {
        id = letter + j
        makeElement('div', 'board', { id: id, className: id, onclick: (item) => clickBoardClear(item, board, boardShipsPlaced) })
      }
      // If the board contains a ship at the location, the ID is set as 'ship'
      // and the CSS makes the square black
      else if (board[letter][j] === 'S') {
        id = letter + j
        makeElement('div', 'board', { id: 'ship', className: id, onclick: (item) => clickBoardShip(item, board, boardShipsPlaced) })
      }
    }

    // This changes the letter to the next letter of the alphabet
    letter = String.fromCharCode(letter.charCodeAt(0) + 1)
  }

  // This displays the sidebar containing the ships to be placed
  displayAvailableShips(boardShipsPlaced)
}

// Generates the sidebar during setup that shows available ships etc
function displayAvailableShips(boardShipsPlaced) {
  // Creates the sidebar div that houses everything
  let shipsDiv = document.createElement('div')
  shipsDiv.id = 'availableShips'
  document.body.append(shipsDiv)

  // Creates the heading of the sidebar
  makeElement('div', 'availableShips', { className: 'headingDiv', innerHTML: '<h3>PLACE YOUR SHIPS</h3>' })

  for (let i = 0; i < 5; i++) {
    makeElement('div', 'availableShips', { className: 'blankDiv' })
  }

  const makeShipGreen = (item) => {
    shipType = item.target.id
    document.getElementById(shipType).setAttribute('style','background-color: green');
    return shipType
  }

  // If shipTwo hasn't already been placed, this makes it appear
  if (boardShipsPlaced.indexOf('shipTwo') <= -1) {
    makeElement('div', 'availableShips', {id: 'shipTwo', className: 'shipSelection', onclick: (item) => makeShipGreen(item) })

    for (let i = 0; i < 8; i++) {
      makeElement('div', 'availableShips', {className: 'blankDiv' })
    }
  }

  // If shipThreeOne hasn't already been placed, this makes it appear
  if (boardShipsPlaced.indexOf('shipThreeOne') <= -1) {
    makeElement('div', 'availableShips', {id: 'shipThreeOne', className: 'shipSelection', onclick: (item) => makeShipGreen(item) })

    for (let i = 0; i < 7; i++) {
      makeElement('div', 'availableShips', {className: 'blankDiv' })
    }
  }

  // If shipThreeTwo hasn't already been placed, this makes it appear
  if (boardShipsPlaced.indexOf('shipThreeTwo') <= -1) {
    makeElement('div', 'availableShips', {id: 'shipThreeTwo', className: 'shipSelection', onclick: (item) => makeShipGreen(item) })

    for (let i = 0; i < 7; i++) {
      makeElement('div', 'availableShips', {className: 'blankDiv' })
    }
  }

  // If shipFour hasn't already been placed, this makes it appear
  if (boardShipsPlaced.indexOf('shipFour') <= -1) {
    makeElement('div', 'availableShips', {id: 'shipFour', className: 'shipSelection', onclick: (item) => makeShipGreen(item) })

    for (let i = 0; i < 6; i++) {
      makeElement('div', 'availableShips', {className: 'blankDiv' })
    }
  }

  // If shipFive hasn't already been placed, this makes it appear
  if (boardShipsPlaced.indexOf('shipFive') <= -1) {
    makeElement('div', 'availableShips', {id: 'shipFive', className: 'shipSelection', onclick: (item) => makeShipGreen(item) })
  }

  // Creates the div to house the radio elements
  makeElement('div', 'availableShips', { id: 'radioDiv' })

  // Creates the radio button for making ships horizontal
  makeElement('input', 'radioDiv', { type: 'radio', id: 'h', checked: 'checked', name: 'orientation', onclick: (item) => { shipOri = item.target.id } })

  // Creates the label for the horizontal button
  makeElement('label', 'radioDiv', { for: 'horizontal', innerHTML: 'Horizontal' })

  // Creates the radio button for making ships vertical
  makeElement('input', 'radioDiv', { type: 'radio', id: 'v', name: 'orientation', onclick: (item) => { shipOri = item.target.id } })

  // Creates the label for the vertical button
  makeElement('label', 'radioDiv', { for: 'vertical', innerHTML: 'Vertical' })

  const toggleDeleteMode = (item) => {
    let divId = item.target.id
    
    if (deleteMode === false) {
      document.getElementById(divId).setAttribute('style','background-color: maroon')
      deleteMode = true
    }
    else if (deleteMode === true) {
      document.getElementById(divId).setAttribute('style','background-color: red')
      deleteMode = false
    }
  }

  // Creates the button that activates deleteMode
  makeElement('div', 'availableShips', { id: 'delete', innerHTML: 'DELETE SHIP', onclick: (item) => { toggleDeleteMode(item) } })

  const setupSubmit = (item) => {
    if (currentPlayer === 1) {
      changePlayerSetup()
      displaySetupBoard(currentBoard, currentShipsPlaced)
    }
    // If player 2 presses the button, it switches to player 1 and enters Attack mode
    else if (currentPlayer === 2) {
      changePlayerAttack()
    }

    return
  }

  // If all 5 ships are placed, the Submit button will appear
  if (boardShipsPlaced.length === 5) {
    makeElement('div', 'availableShips', { className: 'submit', innerHTML: '<h1>Continue</h1>', onclick: (item) => setupSubmit(item) })
  }
}

// Changes from player 1 to player 2 during setup mode
function changePlayerSetup() {
    shipType = ''
    shipOri = 'h'
    deleteMode = false
    currentBoard = boardTwo
    currentPlayer = 2;
    currentShips = boardTwoShips
    currentShipsPlaced = boardTwoShipsPlaced
}

// Changes back and forth between player 1 and 2 during attack mode
function changePlayerAttack() {
  if (currentPlayer === 1) {
    currentPlayer = 2;
    currentBoard = boardOne
    currentAttackBoard = attackBoardOne
    currentShips = boardOneShips
    displayAttackBoard(currentAttackBoard)
  }
  else if (currentPlayer === 2) {
    currentPlayer = 1;
    currentBoard = boardTwo
    currentAttackBoard = attackBoardTwo
    currentShips = boardTwoShips
    displayAttackBoard(currentAttackBoard)
  }
}

// Deletes the selected ship during Setup mode
function deleteShip(board, boardShips, player, pos, boardShipsPlaced) {
  // Iterates through each ship in boardShips
  boardShips.forEach((ship, index) => {
    let shipLength = ship.length

    // Iterates through positions of current ship to see if any match
    // the selected location
    ship.forEach((part) => {
      // If it matches, the correct ship has been located
      if (pos === part) {
        // Checks whether ship is horizontal
        if (ship[0][0] === ship[1][0]) {
          // Sets the position as the start of the ship
          let newPos = ship[0]
          // Sets the orientation to horizontal
          let ori = 'h'
          // Removes the ship from boardShips array
          boardShips.splice(index, 1)
          // Removes the ship from boardShipsPlaced array
          boardShipsPlaced.splice(index, 1)
          // Calls the function to remove the ship from the board
          clearShipFromBoard(board, shipLength, boardShips, player, newPos, ori)
          // Refreshes the display
          displaySetupBoard(board, boardShipsPlaced)
          return
        }
        // If it reaches here, the ship is deemed as vertical
        else {
          // Sets the position as the start of the ship
          let newPos = ship[0]
          // Sets the orientation to vertical
          let ori = 'v'
          // Removes the ship from boardShips array
          boardShips.splice(index, 1)
          // Removes the ship from boardShipsPlaced array
          boardShipsPlaced.splice(index, 1)
          // Calls the function to remove the ship from the board
          clearShipFromBoard(board, shipLength, boardShips, player, newPos, ori)
          // Refreshes the display
          displaySetupBoard(board, boardShipsPlaced)
          return
        }
      }
    })
  })
}

// Rotates the selected ship during setup mode
function rotateShip(board, shipSize, boardShips, player, pos, boardShipsPlaced) {
  // Iterates through each ship in boardShips
  boardShips.forEach((ship, index) => {
    let shipLength = ship.length

    // Iterates through positions of current ship to see if any match
    // the selected location
    ship.forEach((part) => {
      // If it matches, the correct ship has been located
      if (pos === part) {
        // Checks whether ship is horizontal
        if (ship[0][0] === ship[1][0]) {
          // Sets the position as the start of the ship
          let newPos = ship[0]
          // Grabs the letter from the selected pos
          let posLetter = newPos[0]
          let posNumber

          // If the number in the pos is two digits, it grabs both for the posNumber
          if (newPos.length > 2) {
            posNumber = parseInt(newpos[1] + newPos[2])
          }
          // Else it just grabs the single digit
          else {
            posNumber = parseInt(newPos[1])
          }

          let endLetter = posLetter

          // Finds out what the letter of the pos will be at the new end of the ship
          for (let letter = 0; letter < shipSize-1; letter++) {
            endLetter = String.fromCharCode(endLetter.charCodeAt(0) + 1)
          }

          shipObstruction = false
          posLetter = String.fromCharCode(posLetter.charCodeAt(0) + 1)

          // Checks whether any of the squares in the new location are currently
          // occupied by a ship
          for (k = 0; k < shipSize-1; k++) {
            if (board[posLetter][posNumber] === 'S') {
              shipObstruction = true
            }

            // Iterates to the next letter of the alphabet
            posLetter = String.fromCharCode(posLetter.charCodeAt(0) + 1)
          }

          // If the end of the ship isn't out of bounds and there are no ships
          // in the way, the rotation can take place
          if (/[a-j]/.test(endLetter) && shipObstruction === false) {
            // The current ship is removed from boardShips
            boardShips.splice(index, 1)
            // The current orientation is set for clearing ship from the board
            let ori = 'h'
            // The current ship is removed from the board
            clearShipFromBoard(board, shipSize, boardShips, player, newPos, ori)
            // The new orientation is set
            ori = 'v'
            // The ship is replaced with one in the new orientation
            placeShip(board, shipSize, boardShips, player, newPos, ori)
          }

          // The display is refreshed
          displaySetupBoard(board, boardShipsPlaced)
          return
        }
        else {
          // Sets the position as the start of the ship
          let newPos = ship[0]
          // Grabs the letter from the selected pos
          let posLetter = newPos[0]
          let posNumber

          // If the number in the pos is two digits, it grabs both for the posNumber
          if (newPos.length > 2) {
            posNumber = parseInt(newpos[1] + newPos[2])
          }
          // Else it just grabs the single digit
          else {
            posNumber = parseInt(newPos[1])
          }

          shipObstruction = false

          // Checks whether any ships are at new location, or if the ship is
          // going out of bounds
          for (k = 1; k < shipSize; k++) {
            if (board[posLetter][posNumber + k] === 'S' || posNumber + k > 10) {
              shipObstruction = true
            }
          }

          // If there are no problems, the rotating goes ahead
          if (shipObstruction === false) {
            // The current ship is removed from boardShips
            boardShips.splice(index, 1)
            // The current orientation is set for clearing ship from the board
            let ori = 'v'
            // The current ship is removed from the board
            clearShipFromBoard(board, shipSize, boardShips, player, newPos, ori)
            // The new orientation is set
            ori = 'h'
            // The ship is replaced with one in the new orientation
            placeShip(board, shipSize, boardShips, player, newPos, ori)
          }

          // The display is refreshed
          displaySetupBoard(board, boardShipsPlaced)
          return
        }
      }
    })
  })
}

// Removes a selected ship from the board. Generally called by functions
// like deleteShip and rotateShip
function clearShipFromBoard(board, shipSize, boardShips, player, pos, ori) {
  // Splits the pos into individual characters
  pos = pos.split('')
  // Stores the letter as a key
  let posKey = pos[0]
  let posValue;

  // Puts the number as the value, whether is 1 or 2 digits
  if (pos.length === 2) {
    posValue = parseInt(pos[1])
  }
  else if (pos.length > 2) {
    posValue = parseInt(pos[1] + pos[2])
  }

  // Used if ship is horizontal
  if (ori === 'h') {
    // Checks each row of the board
    for (let property in board) {
      // Check if the key matches the row
      if (posKey === property) {
        // If so, searches through the entire row
        board[property].forEach((square, index) => {
          // If the value also matches, the ship has been found
          if (posValue === index) {
            // Sets the size of the ship
            let shipLength = index + shipSize

            // Each part of the ship is replaced with a blank
            for (let i = index; i < shipLength; i++) {
              board[property][i] = ' '
            }

            return board
          }
        })
      }
    }
  }
  // Used if ship is vertical
  else if (ori === 'v') {
    // Checks each row of the board
    for (let property in board) {
      // Checks if key matches the row
      if (posKey === property) {
        // If so, searches through the entire row
        board[property].forEach((square, index) => {
          // If the value also matches, the ship has been found
          if (posValue === index) {
            // Sets the length of the ship
            shipLength = index + shipSize;

            // Each part of the ship is replaced with a blank
            for (let i = index; i < shipLength; i++) {
              board[property][index] = ' '
              // The letter is then iterated to the next in the alphabet
              property = String.fromCharCode(property.charCodeAt(0) + 1)
            }

            return board
          }
        })
      }
    }
  }
}

// During attack mode, only blank squares can be clicked on
// for player attacks
function clickBoardAttack(item, board) {
  // Gets the pos from the ID of the div
  pos = item.target.id
  // Runs the attack function based on the current player's assets
  // and the selected pos
  attack(currentBoard, currentAttackBoard, currentShips, currentPlayer, pos)
  // // Refreshes the display quickly for user feedback
  displayAttackBoard(currentAttackBoard)
  // Checks again if victory has been achieved so that the screen
  // isn't refreshed for no reason
  victory = allShipsDestroyed(currentShips, currentAttackBoard)

  // If victory has not been achieved, the current player is changed
  // and a half second timeout is used for usability feedback
  if (!victory) {
    setTimeout(function() {
      changePlayerAttack()
    }, 500)
  }
  // If victory is achieved, the current player is not changed so
  // that the correct player is shown as the winner. Still uses
  // half second delay for usability feedback
  else {
    setTimeout(function() {}, 500)
  }

  // Refreshes the display
  displayAttackBoard(currentAttackBoard)
}

// This displays the players hits and misses during the attack mode
function displayAttackBoard(board) {
  // As this function is called constantly to refresh the screen, the first
  // thing that is checked is whether all the ships have been destroyed
  let victory = allShipsDestroyed(currentShips, currentAttackBoard)
  // This creates the main board div
  document.body.innerHTML = ''
  let boardDiv = document.createElement('div')
  boardDiv.id = 'board'
  document.body.append(boardDiv)

  // If victory has been achieved, a message is displayed and a button is
  // created to start a new game

  if (victory) {
    makeElement('div', 'board', { id: 'victory', innerHTML: '<h1>Player ' + currentPlayer + ' wins!</h1><button onclick=startGame()>Start new game!</button>' })
  }
  // Else, the regular board is displayed
  else {
    // Creates the div stating which player's turn it is currently
    makeElement('div', 'board', { id: 'player', innerHTML: 'PLAYER ' + currentPlayer })

    // Creates div used to represent whitespace
    makeElement('div', 'board', { className: 'blank' })

    for (let i = 1; i < 11; i++) {
      makeElement('div', 'board', { className: 'blank', innerHTML: i })
    }

    // Creates the row letter for which the board iterates through
    letter = 'a'

    // Iterates through the rows of the board
    for (let i = 0; i < 10; i++) {
      makeElement('div', 'board', { className: 'blank', innerHTML: letter.toUpperCase() })

      // Iterates through each element of the row
      for (let j = 1; j < 11; j++) {
        // If the square on the board is blank, this is displayed
        if (currentAttackBoard[letter][j] === ' ') {
          // Creates the square ID out of the letter and number
          id = letter + j

          // Creates the div based on the ID
          makeElement('div', 'board', { id: id, onclick: (item) => { clickBoardAttack(item, board) } })
        }
        // If the board has an 'O', then a ship has been hit here
        else if (currentAttackBoard[letter][j] === 'O') {
          // The ID is set to 'hit' to allow for appropriate CSS
          makeElement('div', 'board', { id: 'hit' })
        }
        // If the board has an 'X', then an attack has missed here
        else if (currentAttackBoard[letter][j] === 'X') {
          // The ID is set to 'miss' to allow for appropriate CSS
          makeElement('div', 'board', { id: 'miss' })
        }
      }

      // Iterates to the next letter of the alphabet
      letter = String.fromCharCode(letter.charCodeAt(0) + 1)
    }

    // This displays the sidebar to represent text information about player attacks
    displayAttackStatus()
  }
}

// Displays the sidebar to represent text information about player attacks
function displayAttackStatus() {
  // Creates the attackStatus div
  let attackStatusDiv = document.createElement('div')
  attackStatusDiv.id = 'attackStatus'
  // Sets the HTML to the appropriate status based on the player's attack
  attackStatusDiv.innerHTML = currentAttackStatus
  document.body.append(attackStatusDiv)
}

// This function is called whenever a player tries to place a ship on
// to the board during setup mode
function placeShip(board, shipSize, boardShips, player, pos, ori) {
  // The result is deemed to be invalid unless success proves otherwise
  invalidSelection = true
  // Ships are stored as an array of positions the ship takes up (Eg. [A4, A5, A6])
  let newShip = []
  // Splits the pos into individual characters
  pos = pos.split('')
  // The letter in the pos is stored as posKey
  let posKey = pos[0]
  let posValue;

  // Stores the number in posValue based on whether it is 1 or 2 digits
  if (pos.length === 2) {
    posValue = parseInt(pos[1])
  }
  else if (pos.length > 2) {
    posValue = parseInt(pos[1] + pos[2])
  }

  // By default, ship placement is successful unless evaluated otherwise
  let success = true

  // Code to follow if ship placement is to be horizontal
  if (ori === 'h') {
    // Searches through each row of the board
    for (let property in board) {
      // If the pos letter matches the row letter, more searching is done
      if (posKey === property) {
        // Searches through the entire row
        board[property].forEach((square, index) => {
          // If the pos number matches the square, the correct location has been found
          if (posValue === index) {
            // Sets the length of the ship to place
            let shipLength = index + shipSize

            // If any of the squares are not blank, then success is changed to false
            for (let i = index; i < shipLength; i++) {
              if (board[property][i] != ' ') {
                success = false
              }
            }

            // If success is true, all the associated blank squares are
            // replaced with 'S' to respresent the ship
            if (success === true) {
              for (let i = index; i < shipLength; i++) {
                board[property][i] = 'S'
                // Each location is also put in the newShip array
                newShip.push('' + property + i)
              }

              // The array representing the ship is then placed in the array
              // containing all of the player's ships
              boardShips.push(newShip)
              // The invalidSelection is changed to false as the ship placement
              // was successful
              return invalidSelection = false
            }
          }
        })
      }
    }
  }
  // Code to follow if ship placement is to be horizontal
  else if (ori === 'v') {
    // Searches through each row of the board
    for (let property in board) {
      // If the pos letter matches the row letter, more searching is done
      if (posKey === property) {
        // Searches through the entire row
        board[property].forEach((square, index) => {
          // If the pos number matches the square, the correct location has been found
          if (posValue === index) {
            // Sets the length of the ship to place
            let shipLength = index + shipSize

            // It then searches down each row of the board
            for (let i = index; i < shipLength; i++) {
              // If the selected row doesn't exist, or the space isn't blank,
              // the ship placement fails
              if (board[property] === undefined || board[property][index] != ' ') {
                success = false
              }

              // This iterates to the next letter of the alphabet
              property = String.fromCharCode(property.charCodeAt(0) + 1)
            }

            // The board row is reset to the location of the pos
            property = posKey

            // If success is true, the blank squares are replaced with 'S'
            // to represent the ship
            if (success === true) {
              for (let i = index; i < shipLength; i++) {
                board[property][index] = 'S'
                // The location of the ship parts are placed in the newShip array
                newShip.push('' + property + index)
                // This iterates to the next letter of the alphabet
                property = String.fromCharCode(property.charCodeAt(0) + 1)
              }

              // The newShip array is added to the array of player ships
              boardShips.push(newShip)
              // The invalidSelection is changed to false as the ship placement
              // was successful
              return invalidSelection = false
            }
          }
        })
      }
    }
  }

  // Returns the invalidSelection as true as the placement has failed
  return invalidSelection
}

// This function is used to attack locations on the board, and determine
// the result based on whether a ship is there or not
function attack(board, attackBoard, boardShips, player, pos) {
  // Splits the pos into individual characters
  pos.split('')
  // Stores the letter of the pos
  posKey = pos[0]

  // Stores the number of the pos based on whether it is 1 or 2 digits
  if (pos.length === 2) {
    posValue = parseInt(pos[1])
  }
  else if (pos.length > 2) {
    posValue = parseInt(pos[1] + pos[2])
  }

  // The attack is deemed successful unless determined otherwise
  success = true

  // Searches through each row of the board
  for (let property in board) {
    // Checks if the pos letter matches the row letter
    if (posKey === property) {
      // Checks each item in the row
      board[property].forEach((square, index) => {
        // If the pos letter matches the square in the row, and the
        // square is blank, the attack is deemed a miss
        if (posValue === index && square === ' ') {
          // The square on the attackBoard is changed to an 'X'
          attackBoard[property][index] = 'X'
          // The currentAttackStatus is updated to reflect the attack missing
          currentAttackStatus = '<h1>Attack Missed!</h1>'
        }
        // If the pos letter matches the square in the row, and the
        // square contains 'S', the attack is deemed a hit
        else if (posValue === index && square === 'S') {
          // The square on the attackBoard is changed to an 'O'
          attackBoard[property][index] = 'O'
          // The currentAttackStatus is updated to reflect the attack hitting
          currentAttackStatus = '<h1>Attack hit!</h1>'

          // The pos is searched for in the player's ships, and that part is
          // removed from the array to indicate that ship is no longer viable
          boardShips.forEach((ship) => {
            ship.forEach((part, partIndex) => {
              if (part === property + index) {
                ship.splice(partIndex, 1)
              }
            })
          })

          // This function is called to see if the entire ship has been hit
          // and therefore the array needs to be removed
          destroyShip(boardShips, attackBoard)
        }
      })
    }
  }
}

// This function checks if any of the arrays in boardShips are empty,
// indicating a ship has been destroyed and the array needs to be removed
function destroyShip(boardShips, attackBoard) {
  // Runs through the boardShips array
  boardShips.forEach((ship, index) => {
    if (!ship.length) {
      // Refreshes the screen
      displayAttackBoard(attackBoard)
      // Removes the array for the blank ship
      boardShips.splice(index, 1)
      // Updates the currentAttackStatus to reflect the ship being destroyed
      currentAttackStatus = '<h1>Ship destroyed!</h1>'
    }
  })
}

// This function checks if all ships are destroyed, and returns a boolean
// to see if the game is over
function allShipsDestroyed(boardShips, attackBoard) {
  // Checks if the players ships array is empty
  if (!boardShips.length) {
    // Updates the currentAttackStatus to reflect that all the player's
    // ships have been destroyed
    currentAttackStatus = '<h1>All ships have been destroyed! Player ' + currentPlayer + ' wins!</h1>'
    return true
  }
  // If the array is not empty, not all the ships have been destroyed
  else {
    return false
  }
}

// This function displays the initial setup board and begins the game
function startGame() {
  boardOne = {
    a: ['A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    b: ['B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    c: ['C', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    d: ['D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    e: ['E', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    f: ['F', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    g: ['G', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    h: ['H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    i: ['I', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    j: ['J', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  }
  attackBoardOne = {
    a: ['A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    b: ['B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    c: ['C', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    d: ['D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    e: ['E', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    f: ['F', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    g: ['G', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    h: ['H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    i: ['I', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    j: ['J', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  }
  boardOneShips = []
  boardOneShipsPlaced = []

  boardTwo = {
    a: ['A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    b: ['B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    c: ['C', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    d: ['D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    e: ['E', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    f: ['F', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    g: ['G', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    h: ['H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    i: ['I', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    j: ['J', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  }
  attackBoardTwo = {
    a: ['A', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    b: ['B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    c: ['C', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    d: ['D', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    e: ['E', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    f: ['F', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    g: ['G', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    h: ['H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    i: ['I', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    j: ['J', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  }
  boardTwoShips = []
  boardTwoShipsPlaced = []

  shipType = ''
  shipOri = 'h'
  deleteMode = false
  currentBoard = boardOne
  currentAttackBoard = attackBoardTwo
  currentPlayer = 1
  currentShips = boardOneShips
  currentShipsPlaced = boardOneShipsPlaced
  currentAttackStatus = ''

  displaySetupBoard(currentBoard, currentShipsPlaced)
}
