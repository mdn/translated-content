---
title: Решите общие проблемы в вашем JavaScript-коде
slug: Learn/JavaScript/Howto
---

{{LearnSidebar}}

Следующие ссылки указывают на решение общих повседневных проблем, которые вам нужно будет исправить, чтобы код JavaScript работал правильно.

## Частые ошибки начинающих

### Правильное написание и оболочка

Если ваш код не работает и / или браузер жалуется, что что-то не определено, убедитесь, что вы правильно указали все имена переменных, имена функций и т. д.

Некоторые общие встроенные функции браузера, которые вызывают проблемы:

| Correct                    | Wrong                     |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementbyTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### Положение двоеточия / точки с запятой

Вам нужно убедиться, что вы не помещаете точки с запятой неправильно. Например:

| Correct                     | Wrong                       |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### Функции

Есть ряд вещей, которые могут пойти не так с функциями.

Одна из наиболее распространённых ошибок - объявить функцию, но нигде ее не вызвать. Например

:

```js
function myFunction() {
  alert("This is my function.");
}
```

Этот код ничего не сделает, если вы его не вызовете, например

```js
myFunction();
```

#### Область действия

Помните, что [functions have their own scope](/ru/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts) —вы не можете получить доступ к значению переменной, установленному внутри функции извне функции, если вы не объявили переменную глобально (т. е. не внутри каких-либо функций), или [return the value](/ru/docs/Learn/JavaScript/Building_blocks/Return_values) из функции.

#### Запуск кода после оператора возврата

Помните также, что когда вы возвращаете значение из функции, интерпретатор JavaScript выходит из функции - никакой код после выполнения оператора return не выполняется.

Фактически, некоторые браузеры (например, Firefox) выдадут вам сообщение об ошибке в консоли разработчика, если у вас есть код после оператора return. Firefox даёт вам «недостижимый код после оператора возврата».

### Обозначение объекта по сравнению с обычным назначением

Когда вы назначаете что-то в JavaScript, вы используете один знак равенства, например:

```js
var myNumber = 0;
```

Это не работает в [Objects](/ru/docs/Learn/JavaScript/Objects), однако - с объектами, вам нужно отделить имена членов от их значений, используя двоеточия, и разделить каждый элемент запятой, например:

```js
var myObject = {
  name: "Chris",
  age: 38,
};
```

## Basic definitions

- [What is JavaScript?](/ru/docs/Learn/JavaScript/First_steps/What_is_JavaScript#A_high-level_definition)
- [What is a variable?](/ru/docs/Learn/JavaScript/First_steps/Variables#What_is_a_variable)
- [What are strings?](/ru/docs/Learn/JavaScript/First_steps/Strings)
- [What is an array?](/ru/docs/Learn/JavaScript/First_steps/Arrays#What_is_an_Array)
- [What is a loop?](/ru/docs/Learn/JavaScript/Building_blocks/Looping_code)

<!---->

- [What is a function?](/ru/docs/Learn/JavaScript/Building_blocks/Functions)
- [What is an event?](/ru/docs/Learn/JavaScript/Building_blocks/Events)
- [What is an object?](/ru/docs/Learn/JavaScript/Objects/Basics#Object_basics)
- [What is JSON?](/ru/docs/Learn/JavaScript/Objects/JSON#No_really_what_is_JSON)
- [What is a web API?](/ru/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#What_are_APIs)
- [What is the DOM?](/ru/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model)

## Basic use cases

### General

- [How do you add JavaScript to your page?](/ru/docs/Learn/JavaScript/First_steps/What_is_JavaScript#How_do_you_add_JavaScript_to_your_page)
- [How do you add comments to JavaScript code?](/ru/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Comments)

### Variables

- [How do you declare a variable?](/ru/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable)
- [How do you initialize a variable with a value?](/ru/docs/Learn/JavaScript/First_steps/Variables#Initializing_a_variable)
- [How do you update a variable's value?](/ru/docs/Learn/JavaScript/First_steps/Variables#Updating_a_variable) (also see [Assignment operators](/ru/docs/Learn/JavaScript/First_steps/Math#Assignment_operators))
- [What data types can values have in JavaScript?](/ru/docs/Learn/JavaScript/First_steps/Variables#Variable_types)
- [What does 'loosely typed' mean?](/ru/docs/Learn/JavaScript/First_steps/Variables#Loose_typing)

### Math

- [What types of number do you have to deal with in web development?](/ru/docs/Learn/JavaScript/First_steps/Math#Types_of_numbers)
- [How do you do basic math in JavaScript?](/ru/docs/Learn/JavaScript/First_steps/Math#Arithmetic_operators)
- [What is operator precedence, and how is it handled in JavaScript?](/ru/docs/Learn/JavaScript/First_steps/Math#Operator_precedence)
- [How do you increment and decrement values in JavaScript?](/ru/docs/Learn/JavaScript/First_steps/Math#Increment_and_decrement_operators)
- [How do you compare values in JavaScript?](/ru/docs/Learn/JavaScript/First_steps/Math#Comparison_operators) (e.g. to see which one is bigger, or to see if one value is equal to another).

### Strings

- [How do you create a string in JavaScript?](/ru/docs/Learn/JavaScript/First_steps/Strings#Creating_a_string)
- [Do you have to use single quotes or double quotes?](/ru/docs/Learn/JavaScript/First_steps/Strings#Single_quotes_versus_double_quotes)
- [How do you escape characters in strings?](/ru/docs/Learn/JavaScript/First_steps/Strings#Escaping_characters_in_a_string)
- [How do you join strings together?](/ru/docs/Learn/JavaScript/First_steps/Strings#Concatenating_strings)
- [Can you join strings and numbers together?](/ru/docs/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings)
- [How do you find the length of a string?](/ru/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_the_length_of_a_string)
- [How you find what character is at a certain position in a string?](/ru/docs/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character)
- [How do you find and extract a specific substring from a string?](/ru/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_a_substring_inside_a_string_and_extracting_it)
- [How do you change the case of a string?](/ru/docs/Learn/JavaScript/First_steps/Useful_string_methods#Changing_case)
- [How do you replace one specific substring with another?](/ru/docs/Learn/JavaScript/First_steps/Useful_string_methods#Updating_parts_of_a_string)

### Arrays

- [How do you create an array?](/ru/docs/Learn/JavaScript/First_steps/Arrays#Creating_an_array)
- [How do you access and modify the items in an array?](/ru/docs/Learn/JavaScript/First_steps/Arrays#Accessing_and_modifying_array_items) (this includes multidimensional arrays)
- [How do you find the length of an array?](/ru/docs/Learn/JavaScript/First_steps/Arrays#Finding_the_length_of_an_array)
- [How you add and remove array items?](/ru/docs/Learn/JavaScript/First_steps/Arrays#Adding_and_removing_array_items)
- [How do you split a string into array items, or join array items into a string?](/ru/docs/Learn/JavaScript/First_steps/Arrays#Converting_between_strings_and_arrays)

### Debugging JavaScript

- [What are the basic types of error?](/ru/docs/Learn/JavaScript/First_steps/What_went_wrong#Types_of_error)
- [What are browser developer tools, and how do you access them?](/ru/docs/Learn/Common_questions/What_are_browser_developer_tools)
- [How do you log a value to the JavaScript console?](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#The_Console_API)
- [How do you use breakpoints, and other JavaScript debugging features?](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_the_JavaScript_debugger)

For more information on JavaScript debugging, see [Handling common JavaScript problems](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript); also see [Other common errors](/ru/docs/Learn/JavaScript/First_steps/What_went_wrong#Other_common_errors) for a description of common errors.

### Making decisions in code

- [How do you execute different blocks of code, depending on a variable's value or other condition?](/ru/docs/Learn/JavaScript/Building_blocks/conditionals)
- [How do you use if ...else statements?](/ru/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements)
- [How do nest one decision block inside another?](/ru/docs/Learn/JavaScript/Building_blocks/conditionals#Nesting_if_..._else)
- [How do you use AND, OR, and NOT operators in JavaScript?](/ru/docs/Learn/JavaScript/Building_blocks/conditionals#Logical_operators_AND_OR_and_NOT)
- [How do you conveniently handle a large number of choices for one condition?](/ru/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)
- [How do you use a ternary operator to make a quick choice between two options based on a true or false test?](/ru/docs/Learn/JavaScript/Building_blocks/conditionals#Ternary_operator)

### Looping/iteration

- [How do you run the same bit of code over and over again?](/ru/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [How do you exit a loop before the end if a certain condition is met?](/ru/docs/Learn/JavaScript/Building_blocks/Looping_code#Exiting_loops_with_break)
- [How do you skip to the next iteration of a loop if a certain condition is met?](/ru/docs/Learn/JavaScript/Building_blocks/Looping_code#Skipping_iterations_with_continue)
- [How do you use while and do ... while loops?](/ru/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while)
- How to iterate over the elements in an array
- How to iterate over the elements in a multidimensional array
- How to iterate over the members in an object
- How to iterate over the members of an object nested inside an array

## Intermediate use cases

### Functions

- [How do you find functions in the browser?](/ru/docs/Learn/JavaScript/Building_blocks/Functions#Built-in_browser_functions)
- [What is the difference between a function and a method?](/ru/docs/Learn/JavaScript/Building_blocks/Functions#Functions_versus_methods)
- [How do you create your own functions?](/ru/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [How do you run (call, or invoke) a function?](/ru/docs/Learn/JavaScript/Building_blocks/Functions#Invoking_functions)
- [What is an anonymous function?](/ru/docs/Learn/JavaScript/Building_blocks/Functions#Anonymous_functions)
- [How do you specify parameters (or arguments) when invoking a function?](/ru/docs/Learn/JavaScript/Building_blocks/Functions#Function_parameters)
- [What is function scope?](/ru/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts)
- [What are return values, and how do you use them?](/ru/docs/Learn/JavaScript/Building_blocks/Return_values)

### Objects

- [How do you create an object?](/ru/docs/Learn/JavaScript/Objects/Basics#Object_basics)
- [What is dot notation?](/ru/docs/Learn/JavaScript/Objects/Basics#Dot_notation)
- [What is bracket notation?](/ru/docs/Learn/JavaScript/Objects/Basics#Bracket_notation)
- [How do you get and set the methods and properties of an object?](/ru/docs/Learn/JavaScript/Objects/Basics#Setting_object_members)
- [What is `this`, in the context of an object?](/ru/docs/Learn/JavaScript/Objects/Basics#What_is_this)
- [What is object-oriented programming?](/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters)
- [What are constructors and instances, and how do you create them?](/ru/docs/Learn/JavaScript/Objects/Object-oriented_JS#Constructors_and_object_instances)
- [What different ways are there to create objects in JavaScript?](/ru/docs/Learn/JavaScript/Objects/Object-oriented_JS#Other_ways_to_create_object_instances)

### JSON

- [How do you structure JSON data, and read it from JavaScript?](/ru/docs/Learn/JavaScript/Objects/JSON#JSON_structure)
- [How can you load a JSON file into a page?](/ru/docs/Learn/JavaScript/Objects/JSON#Loading_our_JSON)
- [How do you convert a JSON object to a text string, and back again?](/ru/docs/Learn/JavaScript/Objects/JSON#Converting_between_objects_and_text)

### Events

- [What are event handlers and how do you use them?](/ru/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties)
- [What are inline event handlers?](/ru/docs/Learn/JavaScript/Building_blocks/Events#Inline_event_handlers_%E2%80%94_don%27t_use_these)
- [What does the `addEventListener()` function do, and how do you use it?](</ru/docs/Learn/JavaScript/Building_blocks/Events#addEventListener()_and_removeEventListener()>)
- [Which mechanism should I use to add event code to my web pages?](/ru/docs/Learn/JavaScript/Building_blocks/Events#What_mechanism_should_I_use)
- [What are event objects, and how do you use them?](/ru/docs/Learn/JavaScript/Building_blocks/Events#Event_objects)
- [How do you prevent default event behaviour?](/ru/docs/Learn/JavaScript/Building_blocks/Events#Preventing_default_behaviour)
- [How do events fire on nested elements? (event propagation, also related — event bubbling and capturing)](/ru/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
- [What is event delegation, and how does it work?](/ru/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation)

### Object-oriented JavaScript

- [What are object prototypes?](/ru/docs/Learn/JavaScript/Objects/Object_prototypes)
- [What is the constructor property, and how can you use it?](/ru/docs/Learn/JavaScript/Objects/Object_prototypes#The_constructor_property)
- [How do you add methods to the constructor?](/ru/docs/Learn/JavaScript/Objects/Object_prototypes#Modifying_prototypes)
- [How do you create a new constructor that inherits its members from a parent constructor?](/ru/docs/Learn/JavaScript/Objects/Inheritance)
- [When should you use inheritance in JavaScript?](/ru/docs/Learn/JavaScript/Objects/Inheritance#Object_member_summary)

### Web APIs

- [How do you manipulate the DOM (e.g. adding or removing elements) using JavaScript?](/ru/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#Active_learning_Basic_DOM_manipulation)
