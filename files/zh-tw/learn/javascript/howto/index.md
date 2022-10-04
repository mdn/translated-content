---
title: JavaScript 解決常見的問題
slug: Learn/JavaScript/Howto
---

{{LearnSidebar}}
以下鏈接針對您需要修復的常見問題的解決方案，以便讓您的 JavaScript 語法正確執行。

## **初學者常見的錯誤**

### 糾正語法和代碼

如果您的代碼毫無反映或瀏覽器反饋某些內容「未定義」，請檢查您是否「正確輸入」所有變量名稱，函數名稱等。

以下的常見造成問題的內置瀏覽器功能比對：

| **正確**                   | **錯誤**                  |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementbyTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### 分號位置

You need to make sure you don't place any semi-colons incorrectly. For example:

| Correct                     | Wrong                       |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### 功能內容

There are a number of things that can go wrong with functions.

One of the most common errors is to declare the function, but not call it anywhere. For example:

```js
function myFunction() {
  alert('This is my function.');
};
```

This code won't do anything unless you call it, for example with

```js
myFunction();
```

#### **功能範圍**

Remember that [functions have their own scope](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts) — you can't access a variable value set inside a function from outside the function, unless you declared the variable globally (i.e. not inside any functions), or [return the value](/zh-TW/docs/Learn/JavaScript/Building_blocks/Return_values) out of the function.

#### 在 return 語句後執行語法

Remember also that when you return a value out of a function, the JavaScript interpreter exits the function — no code declared after the return statement will run.

In fact, some browsers (like Firefox) will give you an error message in the developer console if you have code after a return statement. Firefox gives you "unreachable code after return statement".

### 對象表示法與正確的指派

When you assign something normally in JavaScript, you use a single equals sign, e.g.:

```js
const myNumber = 0;
```

This doesn't work in [Objects](/zh-TW/docs/Learn/JavaScript/Objects), however — with objects you need to separate member names from their values using colons, and separate each member with a comma, for example:

```js
const myObject = {
  name: 'Chris',
  age: 38
}
```

## **基本定義**

- [What is JavaScript?](/zh-TW/docs/Learn/JavaScript/First_steps/What_is_JavaScript#A_high-level_definition)
- [What is a variable?](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#What_is_a_variable)
- [What are strings?](/zh-TW/docs/Learn/JavaScript/First_steps/Strings)
- [What is an array?](/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#What_is_an_Array)
- [What is a loop?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [What is a function?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions)
- [What is an event?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events)
- [What is an object?](/zh-TW/docs/Learn/JavaScript/Objects/Basics#Object_basics)
- [What is JSON?](/zh-TW/docs/Learn/JavaScript/Objects/JSON#No_really_what_is_JSON)
- [What is a web API?](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#What_are_APIs)
- [What is the DOM?](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model)

## 基本使用例子

### 概括

- [How do you add JavaScript to your page?](/zh-TW/docs/Learn/JavaScript/First_steps/What_is_JavaScript#How_do_you_add_JavaScript_to_your_page)
- [How do you add comments to JavaScript code?](/zh-TW/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Comments)

### 變量

- [How do you declare a variable?](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable)
- [How do you initialize a variable with a value?](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#Initializing_a_variable)
- [How do you update a variable's value?](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#Updating_a_variable) (also see [Assignment operators](/zh-TW/docs/Learn/JavaScript/First_steps/Math#Assignment_operators))
- [What data types can values have in JavaScript?](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#Variable_types)
- [What does 'loosely typed' mean?](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#Loose_typing)

### 數學運算

- [What types of number do you have to deal with in web development?](/zh-TW/docs/Learn/JavaScript/First_steps/Math#Types_of_numbers)
- [How do you do basic math in JavaScript?](/zh-TW/docs/Learn/JavaScript/First_steps/Math#Arithmetic_operators)
- [What is operator precedence, and how is it handled in JavaScript?](/zh-TW/docs/Learn/JavaScript/First_steps/Math#Operator_precedence)
- [How do you increment and decrement values in JavaScript?](/zh-TW/docs/Learn/JavaScript/First_steps/Math#Increment_and_decrement_operators)
- [How do you compare values in JavaScript?](/zh-TW/docs/Learn/JavaScript/First_steps/Math#Comparison_operators) (e.g. to see which one is bigger, or to see if one value is equal to another).

### 字串

- [How do you create a string in JavaScript?](/zh-TW/docs/Learn/JavaScript/First_steps/Strings#Creating_a_string)
- [Do you have to use single quotes or double quotes?](/zh-TW/docs/Learn/JavaScript/First_steps/Strings#Single_quotes_versus_double_quotes)
- [How do you escape characters in strings?](/zh-TW/docs/Learn/JavaScript/First_steps/Strings#Escaping_characters_in_a_string)
- [How do you join strings together?](/zh-TW/docs/Learn/JavaScript/First_steps/Strings#Concatenating_strings)
- [Can you join strings and numbers together?](/zh-TW/docs/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings)
- [How do you find the length of a string?](/zh-TW/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_the_length_of_a_string)
- [How you find what character is at a certain position in a string?](/zh-TW/docs/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character)
- [How do you find and extract a specific substring from a string?](/zh-TW/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_a_substring_inside_a_string_and_extracting_it)
- [How do you change the case of a string?](/zh-TW/docs/Learn/JavaScript/First_steps/Useful_string_methods#Changing_case)
- [How do you replace one specific substring with another?](/zh-TW/docs/Learn/JavaScript/First_steps/Useful_string_methods#Updating_parts_of_a_string)

### 序列

- [How do you create an array?](/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#Creating_an_array)
- [How do you access and modify the items in an array?](/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#Accessing_and_modifying_array_items) (this includes multidimensional arrays)
- [How do you find the length of an array?](/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#Finding_the_length_of_an_array)
- [How you add and remove array items?](/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#Adding_and_removing_array_items)
- [How do you split a string into array items, or join array items into a string?](/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#Converting_between_strings_and_arrays)

### Debugging JavaScript

- [What are the basic types of error?](/zh-TW/docs/Learn/JavaScript/First_steps/What_went_wrong#Types_of_error)
- [What are browser developer tools, and how do you access them?](/zh-TW/docs/Learn/Common_questions/What_are_browser_developer_tools)
- [How do you log a value to the JavaScript console?](/zh-TW/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#The_Console_API)
- [How do you use breakpoints, and other JavaScript debugging features?](/zh-TW/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_the_JavaScript_debugger)

For more information on JavaScript debugging, see [Handling common JavaScript problems](/zh-TW/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript); also see [Other common errors](/zh-TW/docs/Learn/JavaScript/First_steps/What_went_wrong#Other_common_errors) for a description of common errors.

### Making decisions in code

- [How do you execute different blocks of code, depending on a variable's value or other condition?](/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals)
- [How do you use if ...else statements?](/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements)
- [How do nest one decision block inside another?](/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals#Nesting_if_..._else)
- [How do you use AND, OR, and NOT operators in JavaScript?](/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals#Logical_operators_AND_OR_and_NOT)
- [How do you conveniently handle a large number of choices for one condition?](/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)
- [How do you use a ternary operator to make a quick choice between two options based on a true or false test?](/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals#Ternary_operator)

### Looping/iteration

- [How do you run the same bit of code over and over again?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [How do you exit a loop before the end if a certain condition is met?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Looping_code#Exiting_loops_with_break)
- [How do you skip to the next iteration of a loop if a certain condition is met?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Looping_code#Skipping_iterations_with_continue)
- [How do you use while and do ... while loops?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while)
- How to iterate over the elements in an array
- How to iterate over the elements in a multidimensional array
- How to iterate over the members in an object
- How to iterate over the members of an object nested inside an array

## 進階使用例子

### Functions

- [How do you find functions in the browser?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Built-in_browser_functions)
- [What is the difference between a function and a method?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Functions_versus_methods)
- [How do you create your own functions?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [How do you run (call, or invoke) a function?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Invoking_functions)
- [What is an anonymous function?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Anonymous_functions)
- [How do you specify parameters (or arguments) when invoking a function?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Function_parameters)
- [What is function scope?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts)
- [What are return values, and how do you use them?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Return_values)

### 對向

- [How do you create an object?](/zh-TW/docs/Learn/JavaScript/Objects/Basics#Object_basics)
- [What is dot notation?](/zh-TW/docs/Learn/JavaScript/Objects/Basics#Dot_notation)
- [What is bracket notation?](/zh-TW/docs/Learn/JavaScript/Objects/Basics#Bracket_notation)
- [How do you get and set the methods and properties of an object?](/zh-TW/docs/Learn/JavaScript/Objects/Basics#Setting_object_members)
- [What is `this`, in the context of an object?](/zh-TW/docs/Learn/JavaScript/Objects/Basics#What_is_this)
- [What is object-oriented programming?](/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters)
- [What are constructors and instances, and how do you create them?](/zh-TW/docs/Learn/JavaScript/Objects/Object-oriented_JS#Constructors_and_object_instances)
- [What different ways are there to create objects in JavaScript?](/zh-TW/docs/Learn/JavaScript/Objects/Object-oriented_JS#Other_ways_to_create_object_instances)

### JSON

- [How do you structure JSON data, and read it from JavaScript?](/zh-TW/docs/Learn/JavaScript/Objects/JSON#JSON_structure)
- [How can you load a JSON file into a page?](/zh-TW/docs/Learn/JavaScript/Objects/JSON#Loading_our_JSON)
- [How do you convert a JSON object to a text string, and back again?](/zh-TW/docs/Learn/JavaScript/Objects/JSON#Converting_between_objects_and_text)

### 任務

- [What are event handlers and how do you use them?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties)
- [What are inline event handlers?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Inline_event_handlers_%E2%80%94_don%27t_use_these)
- [What does the `addEventListener()` function do, and how do you use it?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#example_using_event_listeners)
- [Which mechanism should I use to add event code to my web pages?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#What_mechanism_should_I_use)
- [What are event objects, and how do you use them?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Event_objects)
- [How do you prevent default event behaviour?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Preventing_default_behaviour)
- [How do events fire on nested elements? (event propagation, also related — event bubbling and capturing)](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
- [What is event delegation, and how does it work?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation)

### Object-oriented JavaScript

- [What are object prototypes?](/zh-TW/docs/Learn/JavaScript/Objects/Object_prototypes)
- [What is the constructor property, and how can you use it?](/zh-TW/docs/Learn/JavaScript/Objects/Object_prototypes#The_constructor_property)
- [How do you add methods to the constructor?](/zh-TW/docs/Learn/JavaScript/Objects/Object_prototypes#Modifying_prototypes)
- [How do you create a new constructor that inherits its members from a parent constructor?](/zh-TW/docs/Learn/JavaScript/Objects/Inheritance)
- [When should you use inheritance in JavaScript?](/zh-TW/docs/Learn/JavaScript/Objects/Inheritance#Object_member_summary)

### 網頁 Web APIs

- [How do you manipulate the DOM (e.g. adding or removing elements) using JavaScript?](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#Active_learning_Basic_DOM_manipulation)
