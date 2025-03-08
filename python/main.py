FILEPATH = '../numbers.txt'


total_sum = 0
with open(FILEPATH, 'r') as file:           # open file
    for line in file:                       # iterate over lines
        number = line[1:-3]                 # extract number
        if number == number[::-1]:          # check if palindrome
            total_sum += int(number, 2)     # add dezimal value to total sum


print(f"Der Gesamtwert aller Palindrom-Binärzahlen beträgt: {total_sum}") # Lösung: 75709
#       Der Gesamtwert aller Palindrom-Binärzahlen beträgt: 75709 
