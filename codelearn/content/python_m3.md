# Module 3: Control Flow

## 1. Introduction
So far, our Python programs have been executing line by line, from top to bottom. But what if we want the computer to make decisions? What if we want it to skip some lines of code if a certain condition is met, or repeat a block of code 100 times?

This is where **Control Flow** comes in. In this module, we will learn how to use Conditional Statements (`if`, `elif`, `else`) to make decisions, and Loops (`for`, `while`) to repeat actions. This is where programming starts to become truly powerful.

## 2. Theory

### Conditional Statements (`if`, `elif`, `else`)
- **`if`**: Tells Python to execute a block of code *only if* a specific condition evaluates to `True`.
- **`elif` (Else If)**: If the previous conditions were `False`, check this new condition. You can have as many `elif` statements as you want.
- **`else`**: The catch-all. If *none* of the previous conditions were `True`, execute this block.

### Comparison Operators
To create conditions, we use comparison operators:
- `==` (Equal to) - Notice the double equals! Single equals `=` is for assignment.
- `!=` (Not equal to)
- `>` (Greater than)
- `<` (Less than)
- `>=` (Greater than or equal to)
- `<=` (Less than or equal to)

### Logical Operators
You can combine multiple conditions using logical operators:
- `and`: True if BOTH conditions are true.
- `or`: True if AT LEAST ONE condition is true.
- `not`: Reverses the result (True becomes False).

### Loops
- **`while` loop**: Repeats a block of code as long as a condition remains `True`. Useful when you don't know exactly how many times you need to loop.
- **`for` loop**: Iterates over a sequence (like a string, a list, or a range of numbers). Useful when you know exactly how many times you want to loop.

### Loop Control Statements
- **`break`**: Instantly exits the loop completely.
- **`continue`**: Skips the rest of the current iteration and jumps to the next iteration of the loop.
- **`pass`**: A null operation. It does nothing. It's used as a placeholder when a statement is syntactically required but you don't want any code to execute.

## 3. Detailed Explanation

### Indentation is Everything
In languages like C++ or Java, curly braces `{}` are used to define blocks of code (like what belongs inside an `if` statement). **Python uses indentation (spaces) instead.**

```python
if True:
    print("This is inside the if block.")
    print("This is also inside.")
print("This is OUTSIDE the if block.")
```
If you forget to indent, Python will throw an `IndentationError`. The standard practice is to use **4 spaces** for one level of indentation.

## 4. Real World Example
**Conditionals**: An ATM machine uses conditionals. `IF` the entered PIN matches the database AND the requested withdrawal amount is less than or equal to the account balance, dispense cash. `ELSE`, show an error message.

**Loops**: Netflix uses loops. When displaying a row of movies, it essentially says: `FOR` every movie in the "Action" category, display the thumbnail on the screen.

## 5. Code Example

```python
# --- Conditionals ---
age = int(input("Enter your age: "))

if age >= 18:
    print("You are an adult. You can vote.")
elif age >= 13:
    print("You are a teenager.")
else:
    print("You are a child.")

# Combining conditions
temperature = 25
is_raining = False

if temperature > 20 and not is_raining:
    print("It's a beautiful day for a walk!")

# --- Loops ---
print("\n--- While Loop ---")
count = 5
while count > 0:
    print("Countdown:", count)
    count -= 1  # Important: Without this, the loop runs forever!
print("Blastoff!")

print("\n--- For Loop with Range ---")
# range(start, stop_before, step)
for i in range(1, 6):
    print("Iteration number:", i)

print("\n--- Loop Control Statements ---")
for num in range(1, 10):
    if num == 3:
        print("Skipping 3 using continue")
        continue  # Skips printing 3
    if num == 7:
        print("Breaking the loop at 7")
        break     # Exits loop entirely before reaching 8 or 9
    print("Number:", num)
```

## 6. Output
```text
Enter your age: 15
You are a teenager.
It's a beautiful day for a walk!

--- While Loop ---
Countdown: 5
Countdown: 4
Countdown: 3
Countdown: 2
Countdown: 1
Blastoff!

--- For Loop with Range ---
Iteration number: 1
Iteration number: 2
Iteration number: 3
Iteration number: 4
Iteration number: 5

--- Loop Control Statements ---
Number: 1
Number: 2
Skipping 3 using continue
Number: 4
Number: 5
Number: 6
Breaking the loop at 7
```

## 7. Practice Questions
1. Write a program that asks for a test score (0-100) and prints out the corresponding letter grade (A, B, C, D, F).
2. Write a `for` loop that prints all even numbers from 1 to 20.
3. Write a program using a `while` loop that keeps asking the user to type the word "stop". It should not exit the loop until they type it exactly.

## 8. Quiz Questions
**Q1: What will be printed by this code?**
```python
x = 5
if x = 5:
    print("Five")
```
A) Five
B) Nothing
C) SyntaxError
D) True

**Q2: Which statement is used to skip the rest of the current loop iteration?**
A) break
B) skip
C) pass
D) continue

*Answers: Q1 (C - `x = 5` is assignment, not comparison `==`), Q2 (D)*

## 9. Interview Questions
- **Interviewer**: "What is an infinite loop and how can it occur?"
  - *Your Answer*: "An infinite loop occurs when the loop's exit condition is never met, causing the code block to run continuously until the program crashes or is manually terminated. In a `while` loop, this usually happens if you forget to increment/decrement the counter variable inside the loop body."
- **Interviewer**: "What is the purpose of the `pass` statement?"
  - *Your Answer*: "`pass` is a null operation. It's primarily used as a structural placeholder when designing code. If you create an `if` statement or a function but aren't ready to write the logic inside it yet, you put `pass` so Python doesn't throw an IndentationError."

## 10. Common Errors
- **IndentationError**: Mixing spaces and tabs, or forgetting to indent after a colon `:`.
- **Infinite Loops**: Forgeting to update the loop variable in a `while` loop, forcing you to use `Ctrl+C` in the terminal to kill the program.
- **Using `=` instead of `==` in if statements**: Python will raise a SyntaxError because you are trying to assign a value inside a conditional check.

## 11. Best Practices
- **Avoid deeply nested code**: Having `if` inside `if` inside `if` (nested conditionals) makes code very hard to read. Try to use logical operators (`and`/`or`) or return early to keep code "flat".
- **Use `for` when you can, `while` when you must**: A `for` loop over a range is generally safer and less prone to infinite loop bugs than manually managing a `while` loop.

## 12. Summary
Module 3 introduced Control Flow, the brain of programming. We learned how to make our programs make decisions based on specific conditions using `if`, `elif`, and `else` statements alongside comparison and logical operators. We also learned how to automate repetitive tasks using `while` and `for` loops, and how to fine-tune their behavior using `break` and `continue`.

## 13. Mini Project
**Project Name**: The Guessing Game
**Goal**: Create a game where the computer picks a secret number, and the user has to guess it.

**Task**: 
Write a Python script that:
1. Hardcodes a secret number (e.g., `secret_number = 42`).
2. Uses a `while` loop to continuously ask the user for a guess.
3. If the guess is too high, print "Too high! Try again."
4. If the guess is too low, print "Too low! Try again."
5. If they guess correctly, print "Congratulations! You guessed the number!" and `break` out of the loop.
6. *Bonus*: Keep track of how many guesses it took and print the total at the end.
