---
title: Решите общие проблемы в вашем JavaScript-коде
slug: Learn_web_development/Howto/Solve_JavaScript_problems
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

Помните, что [functions have their own scope](/ru/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts) —вы не можете получить доступ к значению переменной, установленному внутри функции извне функции, если вы не объявили переменную глобально (т. е. не внутри каких-либо функций), или [return the value](/ru/docs/Learn_web_development/Core/Scripting/Return_values) из функции.

#### Запуск кода после оператора возврата

Помните также, что когда вы возвращаете значение из функции, интерпретатор JavaScript выходит из функции - никакой код после выполнения оператора return не выполняется.

Фактически, некоторые браузеры (например, Firefox) выдадут вам сообщение об ошибке в консоли разработчика, если у вас есть код после оператора return. Firefox даёт вам «недостижимый код после оператора возврата».

### Обозначение объекта по сравнению с обычным назначением

Когда вы назначаете что-то в JavaScript, вы используете один знак равенства, например:

```js
var myNumber = 0;
```

Это не работает в [Objects](/ru/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects), однако - с объектами, вам нужно отделить имена членов от их значений, используя двоеточия, и разделить каждый элемент запятой, например:

```js
var myObject = {
  name: "Chris",
  age: 38,
};
```

## Основные определения

- [What is JavaScript?](/ru/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#a_high-level_definition)
- [What is a variable?](/ru/docs/Learn_web_development/Core/Scripting/Variables#what_is_a_variable)
- [What are strings?](/ru/docs/Learn_web_development/Core/Scripting/Strings)
- [What is an array?](/ru/docs/Learn_web_development/Core/Scripting/Arrays#what_is_an_array)
- [What is a loop?](/ru/docs/Learn_web_development/Core/Scripting/Loops)

<!---->

- [What is a function?](/ru/docs/Learn_web_development/Core/Scripting/Functions)
- [What is an event?](/ru/docs/Learn_web_development/Core/Scripting/Events)
- [What is an object?](/ru/docs/Learn_web_development/Core/Scripting/Object_basics#object_basics)
- [What is JSON?](/ru/docs/Learn_web_development/Core/Scripting/JSON#no_really_what_is_json)
- [What is a web API?](/ru/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#what_are_apis)
- [What is the DOM?](/ru/docs/Learn_web_development/Core/Scripting/DOM_scripting#the_document_object_model)

## Basic use cases

### General

- [How do you add JavaScript to your page?](/ru/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#how_do_you_add_javascript_to_your_page)
- [How do you add comments to JavaScript code?](/ru/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#comments)

### Variables

- [How do you declare a variable?](/ru/docs/Learn_web_development/Core/Scripting/Variables#declaring_a_variable)
- [How do you initialize a variable with a value?](/ru/docs/Learn_web_development/Core/Scripting/Variables#initializing_a_variable)
- [How do you update a variable's value?](/ru/docs/Learn_web_development/Core/Scripting/Variables#updating_a_variable) (also see [Assignment operators](/ru/docs/Learn_web_development/Core/Scripting/Math#assignment_operators))
- [What data types can values have in JavaScript?](/ru/docs/Learn_web_development/Core/Scripting/Variables#variable_types)
- [What does 'loosely typed' mean?](/ru/docs/Learn_web_development/Core/Scripting/Variables#loose_typing)

### Math

- [What types of number do you have to deal with in web development?](/ru/docs/Learn_web_development/Core/Scripting/Math#types_of_numbers)
- [How do you do basic math in JavaScript?](/ru/docs/Learn_web_development/Core/Scripting/Math#arithmetic_operators)
- [What is operator precedence, and how is it handled in JavaScript?](/ru/docs/Learn_web_development/Core/Scripting/Math#operator_precedence)
- [How do you increment and decrement values in JavaScript?](/ru/docs/Learn_web_development/Core/Scripting/Math#increment_and_decrement_operators)
- [How do you compare values in JavaScript?](/ru/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) (e.g. to see which one is bigger, or to see if one value is equal to another).

### Strings

- [How do you create a string in JavaScript?](/ru/docs/Learn_web_development/Core/Scripting/Strings#creating_a_string)
- [Do you have to use single quotes or double quotes?](/ru/docs/Learn_web_development/Core/Scripting/Strings#single_quotes_versus_double_quotes)
- [How do you escape characters in strings?](/ru/docs/Learn_web_development/Core/Scripting/Strings#escaping_characters_in_a_string)
- [How do you join strings together?](/ru/docs/Learn_web_development/Core/Scripting/Strings#concatenating_strings)
- [Can you join strings and numbers together?](/ru/docs/Learn_web_development/Core/Scripting/Strings#numbers_versus_strings)
- [How do you find the length of a string?](/ru/docs/Learn_web_development/Core/Scripting/Useful_string_methods#finding_the_length_of_a_string)
- [How you find what character is at a certain position in a string?](/ru/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character)
- [How do you find and extract a specific substring from a string?](/ru/docs/Learn_web_development/Core/Scripting/Useful_string_methods#finding_a_substring_inside_a_string_and_extracting_it)
- [How do you change the case of a string?](/ru/docs/Learn_web_development/Core/Scripting/Useful_string_methods#changing_case)
- [How do you replace one specific substring with another?](/ru/docs/Learn_web_development/Core/Scripting/Useful_string_methods#updating_parts_of_a_string)

### Arrays

- [How do you create an array?](/ru/docs/Learn_web_development/Core/Scripting/Arrays#creating_an_array)
- [How do you access and modify the items in an array?](/ru/docs/Learn_web_development/Core/Scripting/Arrays#accessing_and_modifying_array_items) (this includes multidimensional arrays)
- [How do you find the length of an array?](/ru/docs/Learn_web_development/Core/Scripting/Arrays#finding_the_length_of_an_array)
- [How you add and remove array items?](/ru/docs/Learn_web_development/Core/Scripting/Arrays#adding_and_removing_array_items)
- [How do you split a string into array items, or join array items into a string?](/ru/docs/Learn_web_development/Core/Scripting/Arrays#converting_between_strings_and_arrays)

### Debugging JavaScript

- [What are the basic types of error?](/ru/docs/Learn_web_development/Core/Scripting/What_went_wrong#types_of_error)
- [What are browser developer tools, and how do you access them?](/ru/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
- [How do you log a value to the JavaScript console?](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#The_Console_API)
- [How do you use breakpoints, and other JavaScript debugging features?](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_the_JavaScript_debugger)

For more information on JavaScript debugging, see [Handling common JavaScript problems](/ru/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript); also see [Other common errors](/ru/docs/Learn_web_development/Core/Scripting/What_went_wrong#other_common_errors) for a description of common errors.

### Making decisions in code

- [How do you execute different blocks of code, depending on a variable's value or other condition?](/ru/docs/Learn_web_development/Core/Scripting/Conditionals)
- [How do you use if ...else statements?](/ru/docs/Learn_web_development/Core/Scripting/Conditionals#if_..._else_statements)
- [How do nest one decision block inside another?](/ru/docs/Learn_web_development/Core/Scripting/Conditionals#nesting_if_..._else)
- [How do you use AND, OR, and NOT operators in JavaScript?](/ru/docs/Learn_web_development/Core/Scripting/Conditionals#logical_operators_and_or_and_not)
- [How do you conveniently handle a large number of choices for one condition?](/ru/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements)
- [How do you use a ternary operator to make a quick choice between two options based on a true or false test?](/ru/docs/Learn_web_development/Core/Scripting/Conditionals#ternary_operator)

### Looping/iteration

- [How do you run the same bit of code over and over again?](/ru/docs/Learn_web_development/Core/Scripting/Loops)
- [How do you exit a loop before the end if a certain condition is met?](/ru/docs/Learn_web_development/Core/Scripting/Loops#exiting_loops_with_break)
- [How do you skip to the next iteration of a loop if a certain condition is met?](/ru/docs/Learn_web_development/Core/Scripting/Loops#skipping_iterations_with_continue)
- [How do you use while and do ... while loops?](/ru/docs/Learn_web_development/Core/Scripting/Loops#while_and_do_..._while)
- How to iterate over the elements in an array
- How to iterate over the elements in a multidimensional array
- How to iterate over the members in an object
- How to iterate over the members of an object nested inside an array

## Intermediate use cases

### Functions

- [How do you find functions in the browser?](/ru/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions)
- [What is the difference between a function and a method?](/ru/docs/Learn_web_development/Core/Scripting/Functions#functions_versus_methods)
- [How do you create your own functions?](/ru/docs/Learn_web_development/Core/Scripting/Build_your_own_function)
- [How do you run (call, or invoke) a function?](/ru/docs/Learn_web_development/Core/Scripting/Functions#invoking_functions)
- [What is an anonymous function?](/ru/docs/Learn_web_development/Core/Scripting/Functions#anonymous_functions)
- [How do you specify parameters (or arguments) when invoking a function?](/ru/docs/Learn_web_development/Core/Scripting/Functions#function_parameters)
- [What is function scope?](/ru/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)
- [What are return values, and how do you use them?](/ru/docs/Learn_web_development/Core/Scripting/Return_values)

### Objects

- [How do you create an object?](/ru/docs/Learn_web_development/Core/Scripting/Object_basics#object_basics)
- [What is dot notation?](/ru/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation)
- [What is bracket notation?](/ru/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation)
- [How do you get and set the methods and properties of an object?](/ru/docs/Learn_web_development/Core/Scripting/Object_basics#setting_object_members)
- [What is `this`, in the context of an object?](/ru/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this)
- [What is object-oriented programming?](/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters)
- [What are constructors and instances, and how do you create them?](/ru/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#constructors_and_object_instances)
- [What different ways are there to create objects in JavaScript?](/ru/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#other_ways_to_create_object_instances)

### JSON

- [How do you structure JSON data, and read it from JavaScript?](/ru/docs/Learn_web_development/Core/Scripting/JSON#json_structure)
- [How can you load a JSON file into a page?](/ru/docs/Learn_web_development/Core/Scripting/JSON#loading_our_json)
- [How do you convert a JSON object to a text string, and back again?](/ru/docs/Learn_web_development/Core/Scripting/JSON#converting_between_objects_and_text)

### Events

- [What are event handlers and how do you use them?](/ru/docs/Learn_web_development/Core/Scripting/Events#event_handler_properties)
- [What are inline event handlers?](/ru/docs/Learn_web_development/Core/Scripting/Events#Inline_event_handlers_%E2%80%94_don%27t_use_these)
- [What does the `addEventListener()` function do, and how do you use it?](</ru/docs/Learn_web_development/Core/Scripting/Events#addEventListener()_and_removeEventListener()>)
- [Which mechanism should I use to add event code to my web pages?](/ru/docs/Learn_web_development/Core/Scripting/Events#what_mechanism_should_i_use)
- [What are event objects, and how do you use them?](/ru/docs/Learn_web_development/Core/Scripting/Events#event_objects)
- [How do you prevent default event behaviour?](/ru/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behaviour)
- [How do events fire on nested elements? (event propagation, also related — event bubbling and capturing)](/ru/docs/Learn_web_development/Core/Scripting/Events#event_bubbling_and_capture)
- [What is event delegation, and how does it work?](/ru/docs/Learn_web_development/Core/Scripting/Events#event_delegation)

### Object-oriented JavaScript

- [What are object prototypes?](/ru/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [What is the constructor property, and how can you use it?](/ru/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#the_constructor_property)
- [How do you add methods to the constructor?](/ru/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#modifying_prototypes)
- [How do you create a new constructor that inherits its members from a parent constructor?](/ru/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
- [When should you use inheritance in JavaScript?](/ru/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#object_member_summary)

### Web APIs

- [How do you manipulate the DOM (e.g. adding or removing elements) using JavaScript?](/ru/docs/Learn_web_development/Core/Scripting/DOM_scripting#active_learning_basic_dom_manipulation)
