import random


def main():
    answer = random.randint(1, 100)
    attempts = 0

    print("I'm thinking of a number from 1 to 100.")

    while True:
        try:
            guess = int(input("Enter your guess: "))
        except ValueError:
            print("Please enter a whole number.")
            continue

        if not 1 <= guess <= 100:
            print("Please enter a number from 1 to 100.")
            continue

        attempts += 1

        if guess < answer:
            print("Too low!")
        elif guess > answer:
            print("Too high!")
        else:
            print(f"Correct! You guessed the number in {attempts} attempts.")
            break


if __name__ == "__main__":
    main()