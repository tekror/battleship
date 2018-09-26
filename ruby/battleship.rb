def battleship
  board_one = {
    a: ["A", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    b: ["B", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    c: ["C", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    d: ["D", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    e: ["E", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    f: ["F", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    g: ["G", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    h: ["H", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    i: ["I", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    j: ["J", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  }

  attack_board_one = {
    a: ["A", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    b: ["B", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    c: ["C", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    d: ["D", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    e: ["E", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    f: ["F", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    g: ["G", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    h: ["H", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    i: ["I", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    j: ["J", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  }

  board_one_ships = []
  player_one_victory = false

  board_two = {
    a: ["A", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    b: ["B", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    c: ["C", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    d: ["D", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    e: ["E", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    f: ["F", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    g: ["G", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    h: ["H", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    i: ["I", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    j: ["J", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  }

  attack_board_two = {
    a: ["A", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    b: ["B", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    c: ["C", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    d: ["D", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    e: ["E", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    f: ["F", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    g: ["G", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    h: ["H", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    i: ["I", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    j: ["J", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  }

  board_two_ships = []
  player_two_victory = false

  def display_board(board)
    puts "     1   2   3   4   5   6   7   8   9   10"
    puts "--------------------------------------------"

    board.each do |key, value|
      value.each do |square|
        print " #{square} |"
      end
      puts ""
      puts "--------------------------------------------"
    end

    puts ""
  end

  def place_ship(board, ship_size, board_ships, player)
    invalid_selection = true

    while invalid_selection == true
      system "cls"
      display_board(board)

      if player == 1
        puts "PLAYER ONE"
      elsif player == 2
        puts "PLAYER TWO"
      end

      new_ship = []
      puts "Where would you like to place your #{ship_size}-length ship?"
      pos = gets.chomp
      pos.downcase!

      while !/^[a-j]{1}([1-9]|1[0])$/.match?(pos) do
        system "cls"
        display_board(board)

        if player == 1
          puts "PLAYER ONE"
        elsif player == 2
          puts "PLAYER TWO"
        end

        puts "Please enter a letter from A-J followed immediately by a number between 1 and 10"
        pos = gets.chomp
        pos.downcase!
      end

      pos = pos.split("")
      posKey = pos[0]

      if pos.length == 2
        posValue = pos[1].to_i
      elsif pos.length > 2
        posValue = pos[1] + pos[2]
        posValue = posValue.to_i
      end

      system "cls"
      display_board(board)

      if player == 1
        puts "PLAYER ONE"
      elsif player == 2
        puts "PLAYER TWO"
      end

      puts "Would you like it horizontal (h) or vertical (v)?"
      ori = gets.chomp
      ori.downcase!

      while ori != "h" && ori != "v" do
        system "cls"
        display_board(board)

        if player == 1
          puts "PLAYER ONE"
        elsif player == 2
          puts "PLAYER TWO"
        end

        puts "Please make sure you enter 'h' or 'v'"
        ori = gets.chomp
        ori.downcase!
        puts ori
      end

      success = true
      system "cls"

      if ori == "h"
        board.each do |key, value|
          if posKey == key.to_s
            value.each_with_index do |square, index|
              if posValue == index
                ship_length = index + ship_size - 1

                for i in index..ship_length do
                  if value[i] != " "
                    success = false
                  end
                end

                if success == true
                  for i in index..ship_length do
                    value[i] = "S"
                    new_ship.push(key.to_s + i.to_s)
                  end

                  invalid_selection = false
                  puts "new ship: #{new_ship}"
                  board_ships.push(new_ship)
                end
              end
            end
          end
        end
      elsif ori == "v"
        board.each do |key, value|
          if posKey == key.to_s
            puts "#{key} #{value}"
            value.each_with_index do |square, index|
              if posValue == index
                ship_length = index + ship_size - 1

                for i in index..ship_length do
                  if board[key][index] != " "
                    success = false
                  end

                  key = key.to_s
                  key.next!
                  key = key.to_sym
                end

                key = posKey.to_sym

                if success == true
                  for i in index..ship_length do
                    board[key][index] = "S"
                    new_ship.push(key.to_s + index.to_s)
                    key = key.to_s
                    key.next!
                    key = key.to_sym
                  end

                  invalid_selection = false
                  puts "new ship #{new_ship}"
                  board_ships.push(new_ship)
                end
              end
            end
          end
        end
      end
      if success == false
        puts "The location you have selected already has a ship,"
        puts "or the ship is going out of bounds"
        puts "Press ENTER to try again"
        gets.chomp
      end
    end
    return board
  end

  def add_to_ships(board_ships, new_ship)
    board_ships.push(new_ship)
  end

  def attack(board, attack_board, board_ships, player)
    system "cls"
    display_board(attack_board)

    if player == 1
      puts "PLAYER ONE"
    elsif player == 2
      puts "PLAYER TWO"
    end

    puts "Where would you like to strike?"
    pos = gets.chomp
    pos.downcase!

    while !/^[a-j]{1}([1-9]|1[0])$/.match?(pos) do
      system "cls"
      display_board(attack_board)

      if player == 1
        puts "PLAYER ONE"
      elsif player == 2
        puts "PLAYER TWO"
      end

      puts "Please enter a letter from A-J followed immediately by a number between 1 and 10"
      pos = gets.chomp
      pos.downcase!
    end

    pos = pos.split("")
    posKey = pos[0]

    if pos.length == 2
      posValue = pos[1].to_i
    elsif pos.length > 2
      posValue = pos[1] + pos[2]
      posValue = posValue.to_i
    end

    success = true

    board.each do |key, value|
      if posKey == key.to_s
        value.each_with_index do |square, index|
          if posValue.to_i == index.to_i && square == " "
            attack_board[key][index] = "X"
            system "cls"
            display_board(attack_board)
            puts "The attack missed!"
            puts ""
            puts "Press ENTER to continue"
            gets.chomp
            system "cls"
          elsif posValue == index && square == "S"
            attack_board[key][index] = "O"
            system "cls"
            display_board(attack_board)
            puts "The attack hit!"
            puts ""
            puts "Press ENTER to continue"
            gets.chomp
            system "cls"

            board_ships.each_with_index do |ship, i|
              ship.each_with_index do |part, j|
                if part == key.to_s + index.to_s
                  board_ships[i] -= [part]
                end
              end
            end

            destroy_ship(board_ships, attack_board)
          end
        end
      end
    end

    return board
  end

  def destroy_ship(board_ships, attack_board)
    board_ships.each_with_index do |ship, i|
      if ship == []
        system "cls"
        display_board(attack_board)
        puts "Ship is destroyed!"
        board_ships.delete([])
        puts ""
        puts "Press ENTER to continue"
        gets.chomp
        system "cls"
      end
    end
  end

  def all_ships_destroyed(board_ships, attack_board)
    if board_ships == []
      system "cls"
      display_board(attack_board)
      puts "All ships have been destroyed"
      puts ""
      return true
    else
      return false
    end
  end

  def setup_board(board, board_ships, player)
    place_ship(board, 5, board_ships, player)
    place_ship(board, 4, board_ships, player)
    place_ship(board, 3, board_ships, player)
    place_ship(board, 3, board_ships, player)
    place_ship(board, 2, board_ships, player)
  end

  system "cls"
  setup_board(board_one, board_one_ships, 1)
  setup_board(board_two, board_two_ships, 2)
  system "cls"

  while player_one_victory == false && player_two_victory == false
    attack(board_two, attack_board_two, board_two_ships, 2)
    player_one_victory = all_ships_destroyed(board_two_ships, attack_board_two)

    if player_one_victory == true
      puts "                            __  __"
      puts "\\    /\\    / | |\\  | |\\  | |   |  \\  |  |  |"
      puts " \\  /  \\  /  | | \\ | | \\ | |-- |--/  |  |  |"
      puts "  \\/    \\/   | |  \\| |  \\| |__ |  \\  O  O  O"
      puts ""
      puts "Player one wins!"
      return
    end

    display_board(attack_board_one)
    puts "PLAYER TWO"
    puts ""
    attack(board_one, attack_board_one, board_one_ships, 1)
    player_two_victory = all_ships_destroyed(board_one_ships, attack_board_one)

    if player_two_victory == true
      puts "                            __  __"
      puts "\\    /\\    / | |\\  | |\\  | |   |  \\  |  |  |"
      puts " \\  /  \\  /  | | \\ | | \\ | |-- |--/  |  |  |"
      puts "  \\/    \\/   | |  \\| |  \\| |__ |  \\  O  O  O"
      puts ""
      puts "Player two wins!"
      return
    end
  end
end

battleship
