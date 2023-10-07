---
title: Solve common problems in your JavaScript code
slug: Learn/JavaScript/Howto
---

{{LearnSidebar}}

다음의 링크들은 당신의 자바스크립트 코드가 정상적으로 작동할 수 있게 고쳐야되는 흔한 문제들의 해결책을 제시한다.

## 초보자들의 흔한 실수들

### 스펠링과 대소문자를 제대로 해라

코드가 작동하지 않거나 브라우저가 무언가가 undefined라고 불평하면 모든 변수 이름, 함수 이름 등을 정확하게 입력했는지 확인하십시오.

문제를 일으키는 몇 가지 일반적인 내장 브라우저 함수는 다음과 같습니다.

| 올바른                     | 잘못된                    |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementbyTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### 세미콜론의 위치

세미콜론의 위치가 잘못 되지 않았는지 확인하세요. 예를들어:

| 올바른                      | 잘못된                      |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### 함수

함수와 관련하여 실수할 수 있는 것들이 많이 있습니다.

가장 흔한 실수는 함수를 선언하고 어디서도 호출하지 않는 것입니다. 예를 들어:

```js
function myFunction() {
  alert("This is my function.");
}
```

위 코드는 호출하지 않는 이상 아무것도 하지 않습니다.

```js
myFunction();
```

#### 함수 스코프

[함수는 각자의 스코프가 있음](/ko/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts)을 명심하세요 — 변수를 전역으로 선언하거나 함수에서 [값을 리턴](/ko/docs/Learn/JavaScript/Building_blocks/Return_values)하지 않는한 함수 밖에서 함수 내부에 설정된 변수 값에 접근 할 수 없습니다. (즉, 어떠한 함수 내에서도 접근 안됨)

#### 리턴 문 이후 코드 실행

함수 밖으로 값을 리턴할 때, 자바스크립트 인터프리터가 함수를 완전히 빠져나감을 명심하세요. — 리턴 문 이후에 선언된 코드는 절대로 실행되지 않습니다.

사실, 몇몇 브라우저들은 (파이어폭스 처럼) 리턴 문 이후에 코드가 있다면 개발자 콘솔에 에러 메세지를 줍니다. 파이어폭스는 "unreachable code after return statement" 라고 알려줍니다.

### 오브젝트 표기 vs 일반적 할당

보통 자바스크립테어서 무언가를 할당하려고 할때, 단일 등호 기호를 사용합니다. 예:

```js
const myNumber = 0;
```

하지만, 이 방법은 [오브젝트](/ko/docs/Learn/JavaScript/Objects)에선 동작하지 않습니다. — 오브젝트에선 멤버와 값 사이를 콜론으로 구분하고, 각 멤버들은 콤마로 구분합니다, 예를 들어:

```js
const myObject = {
  name: "Chris",
  age: 38,
};
```

## 기본 정의

- [자바스크립트란 무엇인가?](/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript#a_high-level_definition)
- [변수는 무엇인가?](/ko/docs/Learn/JavaScript/First_steps/Variables#what_is_a_variable)
- [문자열은 무엇인가?](/ko/docs/Learn/JavaScript/First_steps/Strings)
- [배열은 무엇인가?](/ko/docs/Learn/JavaScript/First_steps/Arrays#what_is_an_array)
- [루프는 무엇인가?](/ko/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [함수는 무엇인가?](/ko/docs/Learn/JavaScript/Building_blocks/Functions)
- [이벤트는 무엇인가?](/ko/docs/Learn/JavaScript/Building_blocks/Events)
- [오브젝트는 무엇인가?](/ko/docs/Learn/JavaScript/Objects/Basics#object_basics)
- [JSON은 무엇인가?](/ko/docs/Learn/JavaScript/Objects/JSON#no_really_what_is_json)
- [web API는 무엇인가?(en-US)](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#what_are_apis)
- [DOM은 무엇인가?](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model)

## Basic use cases

### General

- [How do you add JavaScript to your page?](/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript#how_do_you_add_javascript_to_your_page)
- [How do you add comments to JavaScript code?](/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript#comments)

### Variables

- [How do you declare a variable?](/ko/docs/Learn/JavaScript/First_steps/Variables#declaring_a_variable)
- [How do you initialize a variable with a value?](/ko/docs/Learn/JavaScript/First_steps/Variables#initializing_a_variable)
- [How do you update a variable's value?](/ko/docs/Learn/JavaScript/First_steps/Variables#updating_a_variable) (also see [Assignment operators](/ko/docs/Learn/JavaScript/First_steps/Math#assignment_operators))
- [What data types can values have in JavaScript?](/ko/docs/Learn/JavaScript/First_steps/Variables#variable_types)
- [What does 'loosely typed' mean?](/ko/docs/Learn/JavaScript/First_steps/Variables#loose_typing)

### Math

- [What types of number do you have to deal with in web development?](/ko/docs/Learn/JavaScript/First_steps/Math#types_of_numbers)
- [How do you do basic math in JavaScript?](/ko/docs/Learn/JavaScript/First_steps/Math#arithmetic_operators)
- [What is operator precedence, and how is it handled in JavaScript?](/ko/docs/Learn/JavaScript/First_steps/Math#operator_precedence)
- [How do you increment and decrement values in JavaScript?](/ko/docs/Learn/JavaScript/First_steps/Math#increment_and_decrement_operators)
- [How do you compare values in JavaScript?](/ko/docs/Learn/JavaScript/First_steps/Math#comparison_operators) (e.g. to see which one is bigger, or to see if one value is equal to another).

### Strings

- [How do you create a string in JavaScript?](/ko/docs/Learn/JavaScript/First_steps/Strings#creating_a_string)
- [Do you have to use single quotes or double quotes?](/ko/docs/Learn/JavaScript/First_steps/Strings#single_quotes_versus_double_quotes)
- [How do you escape characters in strings?](/ko/docs/Learn/JavaScript/First_steps/Strings#escaping_characters_in_a_string)
- [How do you join strings together?](/ko/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings)
- [Can you join strings and numbers together?](/ko/docs/Learn/JavaScript/First_steps/Strings#numbers_versus_strings)
- [How do you find the length of a string?](/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods#finding_the_length_of_a_string)
- [How you find what character is at a certain position in a string?](/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods#retrieving_a_specific_string_character)
- [How do you find and extract a specific substring from a string?](/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods#finding_a_substring_inside_a_string_and_extracting_it)
- [How do you change the case of a string?](/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods#changing_case)
- [How do you replace one specific substring with another?](/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods#updating_parts_of_a_string)

### Arrays

- [How do you create an array?](/ko/docs/Learn/JavaScript/First_steps/Arrays#creating_an_array)
- [How do you access and modify the items in an array?](/ko/docs/Learn/JavaScript/First_steps/Arrays#accessing_and_modifying_array_items) (this includes multidimensional arrays)
- [How do you find the length of an array?](/ko/docs/Learn/JavaScript/First_steps/Arrays#finding_the_length_of_an_array)
- [How you add and remove array items?](/ko/docs/Learn/JavaScript/First_steps/Arrays#adding_and_removing_array_items)
- [How do you split a string into array items, or join array items into a string?](/ko/docs/Learn/JavaScript/First_steps/Arrays#converting_between_strings_and_arrays)

### Debugging JavaScript

- [What are the basic types of error?](/ko/docs/Learn/JavaScript/First_steps/What_went_wrong#types_of_error)
- [What are browser developer tools, and how do you access them?(en-US)](/ko/docs/Learn/Common_questions/What_are_browser_developer_tools)
- [How do you log a value to the JavaScript console?(en-US)](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#the_console_api)
- [How do you use breakpoints, and other JavaScript debugging features?(en-US)](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#using_the_javascript_debugger)

For more information on JavaScript debugging, see [Handling common JavaScript problems(en-US)](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript); also see [Other common errors](/ko/docs/Learn/JavaScript/First_steps/What_went_wrong#other_common_errors) for a description of common errors.

### Making decisions in code

- [How do you execute different blocks of code, depending on a variable's value or other condition?](/ko/docs/Learn/JavaScript/Building_blocks/conditionals)
- [How do you use if ...else statements?](/ko/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements)
- [How do nest one decision block inside another?](/ko/docs/Learn/JavaScript/Building_blocks/conditionals#nesting_if_..._else)
- [How do you use AND, OR, and NOT operators in JavaScript?](/ko/docs/Learn/JavaScript/Building_blocks/conditionals#logical_operators_and_or_and_not)
- [How do you conveniently handle a large number of choices for one condition?](/ko/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)
- [How do you use a ternary operator to make a quick choice between two options based on a true or false test?](/ko/docs/Learn/JavaScript/Building_blocks/conditionals#ternary_operator)

### Looping/iteration

- [How do you run the same bit of code over and over again?](/ko/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [How do you exit a loop before the end if a certain condition is met?](/ko/docs/Learn/JavaScript/Building_blocks/Looping_code#exiting_loops_with_break)
- [How do you skip to the next iteration of a loop if a certain condition is met?](/ko/docs/Learn/JavaScript/Building_blocks/Looping_code#skipping_iterations_with_continue)
- [How do you use while and do ... while loops?](/ko/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while)
- How to iterate over the elements in an array
- How to iterate over the elements in a multidimensional array
- How to iterate over the members in an object
- How to iterate over the members of an object nested inside an array

## Intermediate use cases

### Functions

- [How do you find functions in the browser?](/ko/docs/Learn/JavaScript/Building_blocks/Functions#built-in_browser_functions)
- [What is the difference between a function and a method?](/ko/docs/Learn/JavaScript/Building_blocks/Functions#functions_versus_methods)
- [How do you create your own functions?](/ko/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [How do you run (call, or invoke) a function?](/ko/docs/Learn/JavaScript/Building_blocks/Functions#invoking_functions)
- [What is an anonymous function?](/ko/docs/Learn/JavaScript/Building_blocks/Functions#anonymous_functions)
- [How do you specify parameters (or arguments) when invoking a function?](/ko/docs/Learn/JavaScript/Building_blocks/Functions#function_parameters)
- [What is function scope?](/ko/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts)
- [What are return values, and how do you use them?](/ko/docs/Learn/JavaScript/Building_blocks/Return_values)

### Objects

- [How do you create an object?](/ko/docs/Learn/JavaScript/Objects/Basics#object_basics)
- [What is dot notation?](/ko/docs/Learn/JavaScript/Objects/Basics#dot_notation)
- [What is bracket notation?](/ko/docs/Learn/JavaScript/Objects/Basics#bracket_notation)
- [How do you get and set the methods and properties of an object?](/ko/docs/Learn/JavaScript/Objects/Basics#setting_object_members)
- [What is `this`, in the context of an object?](/ko/docs/Learn/JavaScript/Objects/Basics#what_is_this)
- [What is object-oriented programming?](/ko/docs/Learn/JavaScript/Objects/Object-oriented_JS#object-oriented_programming_from_10000_meters)
- [What are constructors and instances, and how do you create them?](/ko/docs/Learn/JavaScript/Objects/Object-oriented_JS#constructors_and_object_instances)
- [What different ways are there to create objects in JavaScript?](/ko/docs/Learn/JavaScript/Objects/Object-oriented_JS#other_ways_to_create_object_instances)

### JSON

- [How do you structure JSON data, and read it from JavaScript?](/ko/docs/Learn/JavaScript/Objects/JSON#json_structure)
- [How can you load a JSON file into a page?](/ko/docs/Learn/JavaScript/Objects/JSON#loading_our_json)
- [How do you convert a JSON object to a text string, and back again?](/ko/docs/Learn/JavaScript/Objects/JSON#converting_between_objects_and_text)

### Events

- [What are event handlers and how do you use them?](/ko/docs/Learn/JavaScript/Building_blocks/Events#event_handler_properties)
- [What are inline event handlers?](/ko/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_%e2%80%94_don%27t_use_these)
- [What does the `addEventListener()` function do, and how do you use it?](</ko/docs/Learn/JavaScript/Building_blocks/Events#addeventlistener()_and_removeeventlistener()>)
- [Which mechanism should I use to add event code to my web pages?](/ko/docs/Learn/JavaScript/Building_blocks/Events#what_mechanism_should_i_use)
- [What are event objects, and how do you use them?](/ko/docs/Learn/JavaScript/Building_blocks/Events#event_objects)
- [How do you prevent default event behaviour?](/ko/docs/Learn/JavaScript/Building_blocks/Events#preventing_default_behaviour)
- [How do events fire on nested elements? (event propagation, also related — event bubbling and capturing)](/ko/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)
- [What is event delegation, and how does it work?](/ko/docs/Learn/JavaScript/Building_blocks/Events#event_delegation)

### Object-oriented JavaScript

- [What are object prototypes?](/ko/docs/Learn/JavaScript/Objects/Object_prototypes)
- [What is the constructor property, and how can you use it?](/ko/docs/Learn/JavaScript/Objects/Object_prototypes#the_constructor_property)
- [How do you add methods to the constructor?](/ko/docs/Learn/JavaScript/Objects/Object_prototypes#modifying_prototypes)
- [How do you create a new constructor that inherits its members from a parent constructor?](/ko/docs/Learn/JavaScript/Objects/Inheritance)
- [When should you use inheritance in JavaScript?](/ko/docs/Learn/JavaScript/Objects/Inheritance#object_member_summary)

### Web APIs

- [How do you manipulate the DOM (e.g. adding or removing elements) using JavaScript?](/ko/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation)
