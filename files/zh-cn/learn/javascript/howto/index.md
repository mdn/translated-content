---
title: 在 JavaSctript 中解决问题
slug: Learn/JavaScript/Howto
---
{{LearnSidebar}}

以下链接指向您需要修复的日常常见问题的解决方案，以使您的 JavaScript 代码正确运行。

## 初学者常见的错误

### 正确的拼写和使用

如果你的代码不工作或浏览器抱怨某些东西是未定义的，请检查你是否正确拼写了所有的变量名称，函数名称等。

导致问题的一些常见的内置浏览器函数有：

| 正确                       | 错误                      |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementbyTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### 分号位置

必须确保没有错误的放置分号，例如：

| 正确                        | 错误                        |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### 函数

函数有很多容易出错的地方。

最常见的错误之一是函数被声明了却没有被调用。例如：

```js
function myFunction() {
  alert('This is my function.');
};
```

这个函数不会执行，除非你调用它，例如：

```js
myFunction();
```

#### 函数作用域

记住[函数拥有自己的作用域](/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts)——你不能从函数外部访问一个函数内的变量值，除非你在全局声明了该变量（即不在任何函数内），或者从函数外部获得它的[返回值](/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)。

#### 在 return 语句之后运行代码

还要记住，当你向一个函数外部返回一个值时，JavaScript 解释器会退出这个函数——在 return 语句运行之后，没有声明任何代码。

事实上，如果您在返回语句之后有代码，某些浏览器（如 Firefox）会在开发人员控制台中给您一条错误消息。Firefox 在返回语句后给你提示“无法访问的代码”。

### 对象标记法与正常赋值

当你在 JavaScript 中正常赋值时，使用等号：

```js
var myNumber = 0;
```

但是在[对象](/en-US/docs/Learn/JavaScript/Objects)中，你需要使用冒号来分隔成员名称和值，并用逗号分隔每个成员，例如：

```js
var myObject = {
  name : 'Chris',
  age : 38
}
```

## 基本定义

- [JavaScript 是什么？](/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#A_high-level_definition)
- [变量是什么？](/en-US/docs/Learn/JavaScript/First_steps/Variables#What_is_a_variable)
- [字符串是什么？](/en-US/docs/Learn/JavaScript/First_steps/Strings)
- [数组是什么？](/en-US/docs/Learn/JavaScript/First_steps/Arrays#What_is_an_Array)
- [循环是什么？](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [函数是什么？](/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
- [事件是什么？](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [对象是什么？](/en-US/docs/Learn/JavaScript/Objects/Basics#Object_basics)
- [JSON 是什么？](/en-US/docs/Learn/JavaScript/Objects/JSON#No_really_what_is_JSON)
- [web API 是什么？](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#What_are_APIs)
- [DOM 是什么？](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model)

## 基本用例

### 常见

- [怎么在页面中添加 JavaScript?](/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#How_do_you_add_JavaScript_to_your_page)
- [怎么在 JavaScript 中添加注释？](/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Comments)

### 变量

- [如何声明一个变量？](/en-US/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable)
- [如何初始化一个变量的值？](/en-US/docs/Learn/JavaScript/First_steps/Variables#Initializing_a_variable)
- [如何更新变量的值？](/en-US/docs/Learn/JavaScript/First_steps/Variables#Updating_a_variable) (参见 [赋值操作符](/en-US/docs/Learn/JavaScript/First_steps/Math#Assignment_operators))
- [JavaScript 中有哪些数据类型？](/en-US/docs/Learn/JavaScript/First_steps/Variables#Variable_types)
- ['弱类型'是什么意思？](/en-US/docs/Learn/JavaScript/First_steps/Variables#Loose_typing)

### 数字

- [What types of number do you have to deal with in web development?](/en-US/docs/Learn/JavaScript/First_steps/Math#Types_of_numbers)
- [How do you do basic math in JavaScript?](/en-US/docs/Learn/JavaScript/First_steps/Math#Arithmetic_operators)
- [What is operator precedence, and how is it handled in JavaScript?](/en-US/docs/Learn/JavaScript/First_steps/Math#Operator_precedence)
- [How do you increment and decrement values in JavaScript?](/en-US/docs/Learn/JavaScript/First_steps/Math#Increment_and_decrement_operators)
- [How do you compare values in JavaScript?](/en-US/docs/Learn/JavaScript/First_steps/Math#Comparison_operators) (e.g. to see which one is bigger, or to see if one value is equal to another).

### 字符串

- [How do you create a string in JavaScript?](/en-US/docs/Learn/JavaScript/First_steps/Strings#Creating_a_string)
- [Do you have to use single quotes or double quotes?](/en-US/docs/Learn/JavaScript/First_steps/Strings#Single_quotes_versus_double_quotes)
- [How do you escape characters in strings?](/en-US/docs/Learn/JavaScript/First_steps/Strings#Escaping_characters_in_a_string)
- [How do you join strings together?](/en-US/docs/Learn/JavaScript/First_steps/Strings#Concatenating_strings)
- [Can you join strings and numbers together?](/en-US/docs/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings)
- [How do you find the length of a string?](/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_the_length_of_a_string)
- [How you find what character is at a certain position in a string?](/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character)
- [How do you find and extract a specific substring from a string?](/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_a_substring_inside_a_string_and_extracting_it)
- [How do you change the case of a string?](/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Changing_case)
- [How do you replace one specific substring with another?](/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Updating_parts_of_a_string)

### 数组

- [怎么创建数组？](/en-US/docs/Learn/JavaScript/First_steps/Arrays#Creating_an_array)
- [如何访问和修改数组中的元素？](/en-US/docs/Learn/JavaScript/First_steps/Arrays#Accessing_and_modifying_array_items) (包括多维数组)
- [怎么获取数组的长度？](/en-US/docs/Learn/JavaScript/First_steps/Arrays#Finding_the_length_of_an_array)
- [怎么添加和移除数组中的元素？](/en-US/docs/Learn/JavaScript/First_steps/Arrays#Adding_and_removing_array_items)
- [如何将一个字符串拆分为数组，或将数组拼接成一个字符串？](/en-US/docs/Learn/JavaScript/First_steps/Arrays#Converting_between_strings_and_arrays)

### JavaScript 调试

- [什么是错误的基本类型？](/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong#Types_of_error)
- [什么是浏览器开发工具，如何使用它？](/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)
- [怎么在 JavaScript 控制台打印值？](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#The_Console_API)
- [怎么使用断点和其他 JavaScript 调试工具？](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_the_JavaScript_debugger)

For more information on JavaScript debugging, see [Handling common JavaScript problems](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript); also see [Other common errors](/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong#Other_common_errors) for a description of common errors.

### Making decisions in code

- [How do you execute different blocks of code, depending on a variable's value or other condition?](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [How do you use if ...else statements?](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements)
- [How do nest one decision block inside another?](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#Nesting_if_..._else)
- [How do you use AND, OR, and NOT operators in JavaScript?](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#Logical_operators_AND_OR_and_NOT)
- [How do you conveniently handle a large number of choices for one condition?](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)
- [How do you use a ternary operator to make a quick choice between two options based on a true or false test?](/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#Ternary_operator)

### 循环/迭代

- [How do you run the same bit of code over and over again?](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [How do you exit a loop before the end if a certain condition is met?](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#Exiting_loops_with_break)
- [How do you skip to the next iteration of a loop if a certain condition is met?](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#Skipping_iterations_with_continue)
- [How do you use while and do ... while loops?](/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while)
- How to iterate over the elements in an array
- How to iterate over the elements in a multidimensional array
- How to iterate over the members in an object
- How to iterate over the members of an object nested inside an array

## 中级用例

### 函数

- [How do you find functions in the browser?](/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Built-in_browser_functions)
- [What is the difference between a function and a method?](/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Functions_versus_methods)
- [How do you create your own functions?](/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [How do you run (call, or invoke) a function?](/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Invoking_functions)
- [What is an anonymous function?](/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Anonymous_functions)
- [How do you specify parameters (or arguments) when invoking a function?](/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Function_parameters)
- [What is function scope?](/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts)
- [What are return values, and how do you use them?](/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)

### 对象

- [How do you create an object?](/en-US/docs/Learn/JavaScript/Objects/Basics#Object_basics)
- [What is dot notation?](/en-US/docs/Learn/JavaScript/Objects/Basics#Dot_notation)
- [What is bracket notation?](/en-US/docs/Learn/JavaScript/Objects/Basics#Bracket_notation)
- [How do you get and set the methods and properties of an object?](/en-US/docs/Learn/JavaScript/Objects/Basics#Setting_object_members)
- [What is `this`, in the context of an object?](/en-US/docs/Learn/JavaScript/Objects/Basics#What_is_this)
- [What is object-oriented programming?](/zh-CN/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters)
- [What are constructors and instances, and how do you create them?](/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Constructors_and_object_instances)
- [What different ways are there to create objects in JavaScript?](/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Other_ways_to_create_object_instances)

### JSON

- [How do you structure JSON data, and read it from JavaScript?](/en-US/docs/Learn/JavaScript/Objects/JSON#JSON_structure)
- [How can you load a JSON file into a page?](/en-US/docs/Learn/JavaScript/Objects/JSON#Loading_our_JSON)
- [How do you convert a JSON object to a text string, and back again?](/en-US/docs/Learn/JavaScript/Objects/JSON#Converting_between_objects_and_text)

### 事件

- [What are event handlers and how do you use them?](/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties)
- [What are inline event handlers?](/en-US/docs/Learn/JavaScript/Building_blocks/Events#Inline_event_handlers_%E2%80%94_don%27t_use_these)
- [What does the `addEventListener()` function do, and how do you use it?](</en-US/docs/Learn/JavaScript/Building_blocks/Events#addEventListener()_and_removeEventListener()>)
- [Which mechanism should I use to add event code to my web pages?](/en-US/docs/Learn/JavaScript/Building_blocks/Events#What_mechanism_should_I_use)
- [What are event objects, and how do you use them?](/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_objects)
- [How do you prevent default event behaviour?](/en-US/docs/Learn/JavaScript/Building_blocks/Events#Preventing_default_behaviour)
- [How do events fire on nested elements? (event propagation, also related — event bubbling and capturing)](/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
- [What is event delegation, and how does it work?](/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation)

### 面向对象的 JavaScript

- [What are object prototypes?](/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [What is the constructor property, and how can you use it?](/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#The_constructor_property)
- [How do you add methods to the constructor?](/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#Modifying_prototypes)
- [How do you create a new constructor that inherits its members from a parent constructor?](/en-US/docs/Learn/JavaScript/Objects/Inheritance)
- [When should you use inheritance in JavaScript?](/en-US/docs/Learn/JavaScript/Objects/Inheritance#Object_member_summary)

### Web APIs

- [How do you manipulate the DOM (e.g. adding or removing elements) using JavaScript?](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#Active_learning_Basic_DOM_manipulation)
