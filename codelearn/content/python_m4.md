# Module 4: Strings and String Manipulation

## 1. Introduction
In almost any application you build, you'll need to work with text data. Whether it's displaying a user's name, processing the contents of an email, or parsing data from a file, text is everywhere. In Python, text is represented by the **String** (`str`) data type.

In this module, we will explore everything you can do with Strings. You will learn how to slice them, modify them, search within them, and format them beautifully using modern Python techniques like f-strings.

## 2. Theory

### What is a String?
A string is an ordered sequence of characters. In Python, anything enclosed within single quotes (`'...'`), double quotes (`"..."`), or triple quotes (`'''...'''` or `"""..."""` for multiline strings) is considered a string. Because strings are "ordered sequences," every character has an index number, starting from `0`.

### String Immutability
A crucial concept in Python is that **strings are immutable**. This means once a string is created, you cannot change its contents in place. If you try to change a character, Python actually creates a brand new string in memory.

### String Slicing
You can extract a substring from a string using slicing syntax: `[start:stop:step]`.
- `start`: The index where the slice begins (inclusive).
- `stop`: The index where the slice ends (exclusive).
- `step`: How many characters to jump forward.

### String Formatting
Formatting is the process of injecting variables into a string.
- **Older way**: Using `.format()` method.
- **Modern way (Python 3.6+)**: Using **f-strings** (formatted string literals). This is the best practice!

## 3. Detailed Explanation

### Core String Methods
Python provides dozens of built-in methods to manipulate strings. Since strings are objects, you call these methods using dot notation (`string_name.method()`).
- `upper()`, `lower()`, `title()`: Changes casing.
- `strip()`, `lstrip()`, `rstrip()`: Removes whitespace.
- `replace(old, new)`: Replaces occurrences of a substring.
- `split(delimiter)`: Splits a string into a List of substrings.
- `join(list)`: Joins a list of strings into a single string.
- `find(substring)`: Returns the lowest index where the substring is found (-1 if not found).

## 4. Real World Example
Imagine you are building a user registration system. Users often accidentally type extra spaces when entering their email (e.g., `"  user@codelearn.com "` or type it in capital letters `"USER@CodeLearn.com"`). If you save this directly to your database, you'll have duplicate accounts and login issues. You can use string methods like `.strip()` and `.lower()` to clean the data before saving it!

## 5. Code Example

```python
# String Basics
greeting = "Welcome to CodeLearn!"
print("Length of string:", len(greeting)) # Output: 21

# Indexing and Slicing
word = "Python"
print("First letter:", word[0])    # P
print("Last letter:", word[-1])   # n (negative indexing starts from the end)
print("First 3 letters:", word[0:3]) # Pyt (index 3 is excluded)
print("Reversed:", word[::-1])    # nohtyP

# Immutability
name = "John"
# name[0] = "D"  <-- This would cause a TypeError!
name = "D" + name[1:] # We must create a new string instead.

# Useful Methods
dirty_data = "   hello, WORLD!   "
clean_data = dirty_data.strip().lower()
print("Cleaned:", clean_data)

csv_line = "apple,banana,orange"
fruits = csv_line.split(",")
print("List of fruits:", fruits)

# f-strings (Modern Formatting)
user = "Alice"
score = 95.5
# Notice the 'f' before the quotes!
message = f"Hello {user}, your final score is {score}%."
print(message)
```

## 6. Output
```text
Length of string: 21
First letter: P
Last letter: n
First 3 letters: Pyt
Reversed: nohtyP
Cleaned: hello, world!
List of fruits: ['apple', 'banana', 'orange']
Hello Alice, your final score is 95.5%.
```

## 7. Practice Questions
1. Write a script that takes a user's full name as input and prints just their last name (assuming space separates first and last name).
2. Create a variable containing a paragraph of text. Use a string method to count how many times the word "the" appears.
3. Ask the user for a string and check if it is a palindrome (reads the same forwards and backwards).

## 8. Quiz Questions
**Q1: What will `print("Hello"[1:4])` output?**
A) Hell
B) ell
C) Hello
D) el

**Q2: Which string method would you use to remove spaces from the beginning and end of a string?**
A) `.clean()`
B) `.remove()`
C) `.strip()`
D) `.trim()`

*Answers: Q1 (B - index 1, 2, 3), Q2 (C)*

## 9. Interview Questions
- **Interviewer**: "What does it mean that strings are immutable in Python?"
  - *Your Answer*: "Immutability means the state of a string object cannot be modified after it is created. Any operation that appears to modify a string (like `.upper()` or concatenation) actually allocates memory for a brand new string and returns a reference to that new object."
- **Interviewer**: "How do you reverse a string in Python without using a loop?"
  - *Your Answer*: "The most Pythonic and efficient way is to use slicing with a step of -1: `my_string[::-1]`."

## 10. Common Errors
- **IndexError: string index out of range**: You tried to access an index that doesn't exist (e.g., `word[10]` on a 5-letter word).
- **TypeError: 'str' object does not support item assignment**: You forgot that strings are immutable and tried to do `word[0] = 'X'`.

## 11. Best Practices
- **Always use f-strings**: Stop using `%s` formatting or `.format()`. F-strings (`f"..."`) are faster to execute, easier to read, and less prone to errors.
- **Use triple quotes for documentation**: When writing docstrings (documentation) for functions, always use `"""` triple double-quotes.

## 12. Summary
In this module, we mastered Python Strings. We learned that strings are immutable sequences of characters, and we can access individual characters or chunks using indexing and slicing. We explored powerful built-in methods for cleaning and transforming text, such as `.strip()`, `.split()`, and `.replace()`. Finally, we saw how to dynamically inject variables into strings using elegant f-strings.

## 13. Mini Project
**Project Name**: The Data Cleaner
**Goal**: Create a script that normalizes chaotic user input.

**Task**: 
Write a Python script that asks the user to input a sentence. The script should:
1. Remove any leading/trailing spaces.
2. Capitalize only the very first letter of the sentence.
3. Convert all other letters to lowercase.
4. Replace the word "bad" with "good".
5. Print the "Cleaned up" sentence.
