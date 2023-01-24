---
title: JavaScript 解決常見的問題
slug: Learn/JavaScript/Howto
---

{{LearnSidebar}}
以下連結針對你需要修復的常見問題提供解決方案，以便讓你的 JavaScript 正確執行。

## **初學者常見的錯誤**

### 糾正語法與程式碼

如果你的程式碼毫無反應或瀏覽器回應某些內容「未定義（undefined）」，請檢查你是否「正確輸入」所有變數名稱，函式名稱等。

以下為常見造成問題的預設瀏覽器功能比較：

| **正確**                   | **錯誤**                  |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementbyTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### 分號位置

你必須確定所有分號都放置在正確的位置。例如：

| **正確**                    | **錯誤**                    |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### 功能內容

有很多種錯誤能造成函式無法正確執行，其中一個最常見的錯誤是宣告完函式後卻從未呼叫它。舉一個例子：

```js
function myFunction() {
  alert('這是我的功能。');
};
```

這段程式碼不會做任何事，直到它被呼叫，例如：

```js
myFunction();
```

#### **功能範圍**

記得[函式有自己的作用域](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts)──你無法從函式外部存取函式內部宣告的變數，除非你將該變數設為全域變數（也就是不在任何函式內部），或是[回傳變數的值](/zh-TW/docs/Learn/JavaScript/Building_blocks/Return_values)。

#### 在 return 敘述後執行語法

同樣記得當你把一個值從函式回傳出去後，JavaScript 編譯器便離開該函式──在 return 敘述之後的程式碼皆不會執行。

其實，當有程式碼出現在 return 敘述後時，某些瀏覽器會在開發人員工具的主控台中顯示 error 訊息，像是 Firefox 瀏覽器會顯示「unreachable code after return statement」。

### 物件表示法與正確的指定

通常當你在 JavaScript 指定某個值給一個變數時，你只會用到一個等號，例如：

```js
const myNumber = 0;
```

然而，這在[物件](/zh-TW/docs/Learn/JavaScript/Objects)裡是行不通的──此時你需要用冒號區隔物件成員的名稱與值，再用逗號區隔每個成員，例如：

```js
const myObject = {
  name: 'Chris',
  age: 38
}
```

## **基本定義**

- [什麼是 JavaScript？](/zh-TW/docs/Learn/JavaScript/First_steps/What_is_JavaScript#A_high-level_definition)
- [什麼是變數？](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#What_is_a_variable)
- [什麼是字串？](/zh-TW/docs/Learn/JavaScript/First_steps/Strings)
- [什麼是陣列？](/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#What_is_an_Array)
- [什麼是迴圈？](/zh-TW/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [什麼是函式？](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions)
- [什麼是事件？](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events)
- [什麼是物件？](/zh-TW/docs/Learn/JavaScript/Objects/Basics#Object_basics)
- [什麼是 JSON？](/zh-TW/docs/Learn/JavaScript/Objects/JSON#No_really_what_is_JSON)
- [什麼是 Web API？](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#What_are_APIs)
- [什麼是 DOM？](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model)

## 基本使用例子

### 概括

- [如何將 JavaScript 加到網頁裡？](/zh-TW/docs/Learn/JavaScript/First_steps/What_is_JavaScript#How_do_you_add_JavaScript_to_your_page)
- [如何在 JavaScript 裡新增註解？](/zh-TW/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Comments)

### 變數

- [如何宣告變數？](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable)
- [如何初始化變數的值？](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#Initializing_a_variable)
- [如何改變變數的值？](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#Updating_a_variable)（更多請看[指定運算子](/zh-TW/docs/Learn/JavaScript/First_steps/Math#Assignment_operators)）
- [JavaScript 有哪些資料型態？](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#Variable_types)
- [「弱型別」是什麼意思？](/zh-TW/docs/Learn/JavaScript/First_steps/Variables#Loose_typing)

### 數學運算

- [What types of number do you have to deal with in web development？](/zh-TW/docs/Learn/JavaScript/First_steps/Math#Types_of_numbers)
- [如何在 JavaScript 中進行基本數學運算？](/zh-TW/docs/Learn/JavaScript/First_steps/Math#Arithmetic_operators)
- [什麼是運算次序，以及它在 JavaScript 中是如何運作的？](/zh-TW/docs/Learn/JavaScript/First_steps/Math#Operator_precedence)
- [如何在 JavaScript 中遞增與遞減值？](/zh-TW/docs/Learn/JavaScript/First_steps/Math#Increment_and_decrement_operators)
- [如何在 JavaScript 比較不同的值？](/zh-TW/docs/Learn/JavaScript/First_steps/Math#Comparison_operators)（例如比較哪一個值比較大，或是比較該值是否等同於另一個值）

### 字串

- [如何在 JavaScript 中建立字串？](/zh-TW/docs/Learn/JavaScript/First_steps/Strings#Creating_a_string)
- [要使用單引號還是雙引號？](/zh-TW/docs/Learn/JavaScript/First_steps/Strings#Single_quotes_versus_double_quotes)
- [如何在字串中處理跳脫字元？](/zh-TW/docs/Learn/JavaScript/First_steps/Strings#Escaping_characters_in_a_string)
- [如何串接字串？](/zh-TW/docs/Learn/JavaScript/First_steps/Strings#Concatenating_strings)
- [可以將字串和數字串接在一起嗎？](/zh-TW/docs/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings)
- [如何獲得字串長度？](/zh-TW/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_the_length_of_a_string)
- [如何獲得位於字串特定位置的字元？](/zh-TW/docs/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character)
- [如何從字串裡找到並擷取指定子字串？](/zh-TW/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_a_substring_inside_a_string_and_extracting_it)
- [如何改變字串大小寫？](/zh-TW/docs/Learn/JavaScript/First_steps/Useful_string_methods#Changing_case)
- [如何替換指定子字串？](/zh-TW/docs/Learn/JavaScript/First_steps/Useful_string_methods#Updating_parts_of_a_string)

### 陣列

- [如何建立陣列？](/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#Creating_an_array)
- [如何存取與修改陣列元素？](/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#Accessing_and_modifying_array_items)（此篇文章包含多維陣列）
- [如何獲得陣列長度？](/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#Finding_the_length_of_an_array)
- [如何新增與移除陣列元素？](/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#Adding_and_removing_array_items)
- [如何將字串分割成陣列元素，或將陣列元素串接成字串？](/zh-TW/docs/Learn/JavaScript/First_steps/Arrays#Converting_between_strings_and_arrays)

### JavaScript 除錯

- [What are the basic types of error?](/zh-TW/docs/Learn/JavaScript/First_steps/What_went_wrong#Types_of_error)
- [What are browser developer tools, and how do you access them?](/zh-TW/docs/Learn/Common_questions/What_are_browser_developer_tools)
- [How do you log a value to the JavaScript console?](/zh-TW/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#The_Console_API)
- [How do you use breakpoints, and other JavaScript debugging features?](/zh-TW/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_the_JavaScript_debugger)

For more information on JavaScript debugging, see [Handling common JavaScript problems](/zh-TW/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript); also see [Other common errors](/zh-TW/docs/Learn/JavaScript/First_steps/What_went_wrong#Other_common_errors) for a description of common errors.

### 程式碼的條件判斷

- [How do you execute different blocks of code, depending on a variable's value or other condition?](/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals)
- [How do you use if ...else statements?](/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements)
- [How do nest one decision block inside another?](/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals#Nesting_if_..._else)
- [How do you use AND, OR, and NOT operators in JavaScript?](/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals#Logical_operators_AND_OR_and_NOT)
- [How do you conveniently handle a large number of choices for one condition?](/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)
- [How do you use a ternary operator to make a quick choice between two options based on a true or false test?](/zh-TW/docs/Learn/JavaScript/Building_blocks/conditionals#Ternary_operator)

### 循環/迭代

- [How do you run the same bit of code over and over again?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [How do you exit a loop before the end if a certain condition is met?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Looping_code#Exiting_loops_with_break)
- [How do you skip to the next iteration of a loop if a certain condition is met?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Looping_code#Skipping_iterations_with_continue)
- [How do you use while and do ... while loops?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while)
- How to iterate over the elements in an array
- How to iterate over the elements in a multidimensional array
- How to iterate over the members in an object
- How to iterate over the members of an object nested inside an array

## 進階使用例子

### 函式

- [How do you find functions in the browser?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Built-in_browser_functions)
- [What is the difference between a function and a method?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Functions_versus_methods)
- [How do you create your own functions?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [How do you run (call, or invoke) a function?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Invoking_functions)
- [What is an anonymous function?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Anonymous_functions)
- [How do you specify parameters (or arguments) when invoking a function?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Function_parameters)
- [What is function scope?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts)
- [What are return values, and how do you use them?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Return_values)

### 物件

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

### 事件

- [What are event handlers and how do you use them?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties)
- [What are inline event handlers?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Inline_event_handlers_%E2%80%94_don%27t_use_these)
- [What does the `addEventListener()` function do, and how do you use it?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#example_using_event_listeners)
- [Which mechanism should I use to add event code to my web pages?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#What_mechanism_should_I_use)
- [What are event objects, and how do you use them?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Event_objects)
- [How do you prevent default event behaviour?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Preventing_default_behaviour)
- [How do events fire on nested elements? (event propagation, also related — event bubbling and capturing)](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
- [What is event delegation, and how does it work?](/zh-TW/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation)

### JavaScript 物件導向

- [What are object prototypes?](/zh-TW/docs/Learn/JavaScript/Objects/Object_prototypes)
- [What is the constructor property, and how can you use it?](/zh-TW/docs/Learn/JavaScript/Objects/Object_prototypes#The_constructor_property)
- [How do you add methods to the constructor?](/zh-TW/docs/Learn/JavaScript/Objects/Object_prototypes#Modifying_prototypes)
- [How do you create a new constructor that inherits its members from a parent constructor?](/zh-TW/docs/Learn/JavaScript/Objects/Inheritance)
- [When should you use inheritance in JavaScript?](/zh-TW/docs/Learn/JavaScript/Objects/Inheritance#Object_member_summary)

### 網頁 Web API

- [How do you manipulate the DOM (e.g. adding or removing elements) using JavaScript?](/zh-TW/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#Active_learning_Basic_DOM_manipulation)
