# Lab 5 - JavaScript DOM Basics and GitHub Actions

**Name(s) of those that worked on this lab:** 
- Anna Doan

**GitHub Pages Links:**
- `expose.html`: https://annadoannn.github.io/Lab5_Starter/expose.html 
- `explore.html`: 

## Part 3 - Unit Testing with Jest
**1. Would you use a unit test to test the "message" feature of a messaging application? Why or why not? *Assume the "message" feature allows a user to write and send a message to another***
> I would not rely solely on a unit test to test the complete "message" feature. While unit tests are useful for verifying specific parts of this feature like composing a message or triggering the send button, but they can't verify the entire process of sending and receiving a message. Other types of tests are needed to ensure how different parts work together correctly. 

**2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? *Assume the “max message length” feature prevents the user from typing more than 80 characters.***
> Yes, I would use a unit test to test the "max message length" feature because the length check can be encapsulated in a small, independent function. A unit test can easily verify that the input is limited to 80 characters and behaves correctly for both valid and invalid cases.