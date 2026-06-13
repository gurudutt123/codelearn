# Module 2: Python Basics

## 1. Introduction
Now that we have Python installed and we've written our first program, it's time to learn the fundamental building blocks of the language. Just like learning a spoken language requires learning vocabulary and grammar, learning Python requires understanding Variables, Data Types, and Operators. 

In this module, we will explore how Python stores information, how we can manipulate that information, and how we can get input from a user to make our programs interactive.

## 2. Theory

### Variables
A variable is like a labeled box in your computer's memory where you can store data. You can put something in the box, look at what's inside, or change what's inside. In Python, you create a variable the moment you assign a value to it using the `=` sign. 

### Data Types
Every piece of data stored in a variable has a "type". Python has several built-in data types:
- **Integers (`int`)**: Whole numbers without a decimal point (e.g., `5`, `-10`, `400`).
- **Floating-Point Numbers (`float`)**: Numbers with a decimal point (e.g., `3.14`, `-0.01`).
- **Strings (`str`)**: Text data enclosed in single (`'`) or double (`"`) quotes (e.g., `"Hello"`, `'CodeLearn'`).
- **Booleans (`bool`)**: Represents logical truth values. They can only be `True` or `False`.

### Type Conversion
Sometimes you need to change a variable from one type to another. This is called Type Casting or Type Conversion. For example, converting the string `"10"` into the integer `10` so you can do math with it. You use functions like `int()`, `float()`, and `str()`.

### Input and Output
- **Output**: We've already seen `print()`, which sends data *out* to the screen.
- **Input**: The `input()` function pauses the program and waits for the user to type something *in* via the keyboard. **Note**: `input()` always returns a string.

### Operators
Operators are special symbols that carry out arithmetic or logical computation.
- **Arithmetic**: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `//` (floor division - division that rounds down), `%` (modulus - returns the remainder), `**` (exponentiation).
- **Assignment**: `=` (assigns value), `+=` (adds and assigns), `-=` (subtracts and assigns).

## 3. Detailed Explanation
Let's look deeper into variable naming rules. 
- A variable name must start with a letter or the underscore character `_`.
- A variable name cannot start with a number.
- A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ ).
- Variable names are case-sensitive (`age`, `Age` and `AGE` are three different variables).

Python uses **snake_case** for variable names by convention. This means words are written in lowercase and separated by underscores (e.g., `student_first_name`, `total_price`).

## 4. Real World Example
Imagine you are building a simple cash register program. You need to store the `item_name` (String), the `item_price` (Float), and the `quantity` (Integer). You then need to calculate the `total_cost` (Float). You will use variables to store these values and arithmetic operators to calculate the total.

## 5. Code Example

```python
# Variables and Data Types
student_name = "Guru Mishra"      # String (str)
student_age = 25                  # Integer (int)
is_enrolled = True                # Boolean (bool)
course_fee = 99.99                # Float (float)

print("Student:", student_name)
print("Age:", student_age)

# Type Conversion
# Let's say we have a number stored as a string
string_number = "50"
real_number = int(string_number)
result = real_number + 20
print("Result of math with converted string:", result)

# Input from the user
# Note: input() always returns a string.
user_name = input("Please enter your name: ")
user_birth_year = input("Enter your birth year: ")

# We must convert the string birth year to an integer to do math
current_year = 2026
calculated_age = current_year - int(user_birth_year)

print("Hello " + user_name + "! You turn " + str(calculated_age) + " this year.")

# Operators
x = 10
y = 3

print("Addition:", x + y)
print("Division:", x / y)
print("Floor Division:", x // y) # Returns 3 (drops the .333)
print("Modulus (Remainder):", x % y) # Returns 1 because 10 = (3*3) + 1
```

## 6. Output
```text
Student: Guru Mishra
Age: 25
Result of math with converted string: 70
Please enter your name: Alice
Enter your birth year: 2000
Hello Alice! You turn 26 this year.
Addition: 13
Division: 3.3333333333333335
Floor Division: 3
Modulus (Remainder): 1
```

## 7. Practice Questions
1. Create variables to store the details of a book (Title, Author, Year Published, Price). Print them out nicely formatted.
2. Ask the user for two numbers. Multiply them together and print the result.
3. Use the modulus operator `%` to determine if a number is even or odd (Hint: think about dividing by 2).

## 8. Quiz Questions
**Q1: Which of the following is a valid variable name in Python?**
A) `1st_name`
B) `first-name`
C) `first_name`
D) `first name`

**Q2: What is the result of `type("100")`?**
A) `<class 'int'>`
B) `<class 'float'>`
C) `<class 'str'>`
D) `<class 'bool'>`

*Answers: Q1 (C), Q2 (C)*

## 9. Interview Questions
- **Interviewer**: "Is Python statically typed or dynamically typed?"
  - *Your Answer*: "Python is dynamically typed. This means you do not need to declare the type of a variable when you create one. The Python interpreter infers the type at runtime based on the value assigned to it, and a variable can even change its type during execution."
- **Interviewer**: "What is the difference between `/` and `//` in Python?"
  - *Your Answer*: "`/` performs standard true division and always returns a float (e.g., 5 / 2 = 2.5). `//` performs floor division, which drops the decimal portion and rounds down to the nearest whole integer (e.g., 5 // 2 = 2)."

## 10. Common Errors
- **TypeError: can only concatenate str (not "int") to str**: You are trying to add a string and a number together. 
  - *Fix*: Convert the number to a string first using `str(number)`.
- **ValueError: invalid literal for int()**: You tried to convert a string to an integer, but the string didn't contain a valid whole number (e.g., `int("hello")` or `int("3.14")`).

## 11. Best Practices
- **Descriptive Variables**: Don't use `x`, `y`, `a`, `b`. Use `total_score`, `user_input`, `days_elapsed`. The extra typing saves hours of debugging later.
- **Avoid Reserved Words**: Don't use Python keywords like `print`, `int`, `str`, `list`, or `def` as variable names. This overrides their built-in functionality.

## 12. Summary
In Module 2, we covered the absolute basics of programming logic in Python. We learned how to create variables and follow naming conventions. We explored the four primitive data types (`int`, `float`, `str`, `bool`) and how to convert between them. We also learned how to make our programs interactive using the `input()` function and perform calculations using arithmetic operators.

## 13. Mini Project
**Project Name**: The Bill Splitter Calculator
**Goal**: Create a program that helps a group of friends split a restaurant bill.

**Task**: 
Write a Python script that:
1. Asks the user for the total bill amount (e.g., 150.50).
2. Asks the user what percentage tip they want to leave (e.g., 15).
3. Asks how many people are splitting the bill.
4. Calculates the total tip amount.
5. Calculates the total bill including the tip.
6. Calculates how much each person needs to pay.
7. Prints a nicely formatted receipt showing all the calculations.
