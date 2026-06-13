# Module 5: Lists and Tuples

## 1. Introduction
While variables can hold a single piece of data (like one string or one integer), we often need to store collections of data. Imagine trying to store the names of 100 students using 100 separate variables (`student1`, `student2`...)—it would be a nightmare!

Enter Data Structures. In this module, we will explore **Lists** and **Tuples**. These are fundamental sequence types in Python that allow you to group multiple items together into a single, ordered container.

## 2. Theory

### What is a List?
A List is a collection of items that is **ordered** and **mutable** (changeable). Lists allow duplicate members. You create a list by placing items inside square brackets `[]`, separated by commas.
- Lists can contain items of different data types (e.g., `[1, "apple", True]`), though normally you'll store items of the same type.

### What is a Tuple?
A Tuple is almost identical to a List, with one massive difference: Tuples are **immutable** (unchangeable). Once you create a tuple, you cannot add, remove, or change its elements. You create a tuple by placing items inside parentheses `()`.

### Why use Tuples if Lists are more flexible?
1. **Safety**: If you have data that should *never* change (like the coordinates of your office building, or RGB color values), storing them in a tuple guarantees they won't be accidentally altered by a bug in your code.
2. **Performance**: Because they are immutable, tuples are slightly faster and consume less memory than lists.

## 3. Detailed Explanation

### List Operations & Methods
Since lists are mutable, Python provides many methods to modify them:
- `append(item)`: Adds an item to the very end of the list.
- `insert(index, item)`: Adds an item at a specific index.
- `pop()`: Removes and returns the *last* item. `pop(index)` removes an item at a specific index.
- `remove(value)`: Removes the *first occurrence* of a specific value.
- `sort()`: Sorts the list in place (modifies original).
- `reverse()`: Reverses the list in place.

Because Lists and Tuples are "sequences", they support the exact same indexing and slicing syntax `[start:stop:step]` that we learned with Strings!

## 4. Real World Example
**Lists**: A shopping cart on an e-commerce website is a List. As you click "Add to Cart", the website `appends` the item to your list. If you change your mind, it `removes` it.
**Tuples**: The geographic coordinates (Latitude, Longitude) of a city like Paris `(48.8566, 2.3522)`. Paris isn't going to move, so this data should never change!

## 5. Code Example

```python
# --- LISTS ---
programming_languages = ["Python", "JavaScript", "C++"]
print("Original List:", programming_languages)

# Adding elements
programming_languages.append("Java")
programming_languages.insert(1, "Ruby") # Inserts at index 1
print("After adding:", programming_languages)

# Removing elements
removed_item = programming_languages.pop() # Removes "Java"
programming_languages.remove("C++")
print(f"Removed '{removed_item}'. Current list:", programming_languages)

# Changing elements (Lists are mutable!)
programming_languages[0] = "Python 3"
print("After mutation:", programming_languages)

# Sorting
numbers = [42, 8, 15, 16, 23, 4]
numbers.sort()
print("Sorted numbers:", numbers)

# --- TUPLES ---
rgb_red = (255, 0, 0)
print("Tuple:", rgb_red)
print("First value:", rgb_red[0])

# rgb_red[0] = 100  <-- This would cause a TypeError! Tuples are immutable.

# --- Iterating over Sequences ---
print("\nIterating over the list:")
for language in programming_languages:
    print(f"- {language}")
```

## 6. Output
```text
Original List: ['Python', 'JavaScript', 'C++']
After adding: ['Python', 'Ruby', 'JavaScript', 'C++', 'Java']
Removed 'Java'. Current list: ['Python', 'Ruby', 'JavaScript']
After mutation: ['Python 3', 'Ruby', 'JavaScript']
Sorted numbers: [4, 8, 15, 16, 23, 42]
Tuple: (255, 0, 0)
First value: 255

Iterating over the list:
- Python 3
- Ruby
- JavaScript
```

## 7. Practice Questions
1. Create a list of your 5 favorite movies. Add a new movie to the end, remove the first movie, and print the final list.
2. Given the list `nums = [1, 5, 10, 15]`, write a `for` loop that calculates the total sum of all the numbers in the list.
3. Write a script that checks if a specific element exists within a tuple (Hint: use the `in` keyword).

## 8. Quiz Questions
**Q1: Which brackets are used to define a List and a Tuple, respectively?**
A) {} and []
B) [] and ()
C) () and {}
D) [] and []

**Q2: Which method removes and returns the last element of a list?**
A) `remove()`
B) `delete()`
C) `pop()`
D) `drop()`

*Answers: Q1 (B), Q2 (C)*

## 9. Interview Questions
- **Interviewer**: "What is the primary difference between a List and a Tuple in Python?"
  - *Your Answer*: "Lists are mutable, meaning their contents can be changed after creation (you can add, remove, or modify elements). Tuples are immutable, meaning once they are created, their structure and contents cannot be altered. Because of this immutability, tuples are generally more memory-efficient."
- **Interviewer**: "How can you remove duplicates from a Python list?"
  - *Your Answer*: "The fastest way is to convert the list to a Set (which naturally removes duplicates) and then convert it back to a list: `unique_list = list(set(my_list))`."

## 10. Common Errors
- **IndexError: list index out of range**: You tried to access an element at an index that is higher than the list's length. Remember, a list of length 5 has indices 0 through 4.
- **ValueError: list.remove(x): x not in list**: You tried to remove a value that doesn't exist in the list. Always check if the item is in the list before removing it, or use a `try...except` block.

## 11. Best Practices
- **List Comprehensions**: When you get more advanced, you'll learn "list comprehensions" to create lists in a single, elegant line of code.
- **Use Tuples for heterogeneous data**: Conventionally, tuples are used to store a collection of different data types (like a database record), while lists are used to store homogeneous data (like a list of 100 names).

## 12. Summary
In Module 5, we explored collections of data. We learned that Lists `[]` are ordered, mutable sequences perfect for managing dynamic data that needs to be added, removed, or sorted. We learned that Tuples `()` are ordered, immutable sequences used for safeguarding data that should never change. We also saw how easily we can loop through these sequences using `for` loops.

## 13. Mini Project
**Project Name**: The Task Manager
**Goal**: Build a simple terminal-based To-Do list manager.

**Task**: 
Write a script with a `while` loop that asks the user what they want to do:
1. "Add" a task.
2. "View" all tasks.
3. "Remove" a task.
4. "Quit"

If they type "Add", prompt them for the task and `.append()` it to a list.
If they type "View", use a `for` loop to print all tasks in the list.
If they type "Remove", ask for the task name and `.remove()` it from the list.
If they type "Quit", `break` the loop.
