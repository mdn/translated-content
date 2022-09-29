---
title: Решите общие проблемы в вашем JavaScript-коде
slug: Learn/JavaScript/Howto
tags:
  - Начинающий
translation_of: Learn/JavaScript/Howto
---
<div>{{LearnSidebar}}</div>

<p class="summary">Следующие ссылки указывают на решение общих повседневных проблем, которые вам нужно будет исправить, чтобы код  JavaScript  работал правильно.</p>

<h2 id="Частые_ошибки_начинающих">Частые ошибки начинающих</h2>

<h3 id="Правильное_написание_и_оболочка">Правильное написание и оболочка</h3>

<p> </p>

<p>Если ваш код не работает и / или браузер жалуется, что что-то не определено, убедитесь, что вы правильно указали все имена переменных, имена функций и т. д.</p>

<p>Некоторые общие встроенные функции браузера, которые вызывают проблемы:</p>

<p> </p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Correct</th>
   <th scope="col">Wrong</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>getElementsByTagName()</code></td>
   <td><code>getElementbyTagName()</code></td>
  </tr>
  <tr>
   <td><code>getElementsByName()</code></td>
   <td><code>getElementByName()</code></td>
  </tr>
  <tr>
   <td><code>getElementsByClassName()</code></td>
   <td><code>getElementByClassName()</code></td>
  </tr>
  <tr>
   <td><code>getElementById()</code></td>
   <td><code>getElementsById()</code></td>
  </tr>
 </tbody>
</table>

<h3 id="Положение_двоеточия_точки_с_запятой">Положение двоеточия / точки с запятой</h3>

<p>Вам нужно убедиться, что вы не помещаете точки с запятой неправильно. Например:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Correct</th>
   <th scope="col">Wrong</th>
  </tr>
  <tr>
   <td><code>elem.style.color = 'red';</code></td>
   <td><code>elem.style.color = 'red;'</code></td>
  </tr>
 </thead>
</table>

<h3 id="Функции">Функции</h3>

<p> </p>

<p>Есть ряд вещей, которые могут пойти не так с функциями.</p>

<p>Одна из наиболее распространённых ошибок - объявить функцию, но не называть её нигде. Например</p>

<p>:</p>

<pre class="brush: js">function myFunction() {
  alert('This is my function.');
};</pre>

<p>Этот код ничего не сделает, если вы его не назовёте, например</p>

<pre class="brush: js">myFunction();</pre>

<h4 id="Область_действия">Область действия</h4>

<p>Помните, что <a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts">functions have their own scope</a> —вы не можете получить доступ к значению переменной, установленному внутри функции извне функции, если вы не объявили переменную глобально (т. е. не внутри каких-либо функций), или <a href="/en-US/docs/Learn/JavaScript/Building_blocks/Return_values">return the value</a> из функции.</p>

<h4 id="Запуск_кода_после_оператора_возврата">Запуск кода после оператора возврата</h4>

<p> </p>

<p>Помните также, что когда вы возвращаете значение из функции, интерпретатор JavaScript выходит из функции - никакой код  после выполнения оператора return не выполняется.</p>

<p>Фактически, некоторые браузеры (например, Firefox) выдадут вам сообщение об ошибке в консоли разработчика, если у вас есть код после оператора return. Firefox даёт вам «недостижимый код после оператора возврата».</p>

<p> </p>

<h3 id="Обозначение_объекта_по_сравнению_с_обычным_назначением">Обозначение объекта по сравнению с обычным назначением</h3>

<p>Когда вы назначаете что-то в JavaScript, вы используете один знак равенства, например:</p>

<pre class="brush: js">var myNumber = 0;</pre>

<p>Это не работает в <a href="/en-US/docs/Learn/JavaScript/Objects">Objects</a>, однако - с объектами, вам нужно отделить имена членов от их значений, используя двоеточия, и разделить каждый элемент запятой, например:</p>

<pre class="brush: js">var myObject = {
  name : 'Chris',
  age : 38
}</pre>

<h2 id="Basic_definitions">Basic definitions</h2>

<div class="column-container">
<div class="column-half">
<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#A_high-level_definition">What is JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Variables#What_is_a_variable">What is a variable?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings">What are strings?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays#What_is_an_Array">What is an array?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code">What is a loop?</a></li>
</ul>
</div>

<div class="column-half">
<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions">What is a function?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events">What is an event?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics#Object_basics">What is an object?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/JSON#No_really_what_is_JSON">What is JSON?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#What_are_APIs">What is a web API?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model">What is the DOM?</a></li>
</ul>
</div>
</div>

<h2 id="Basic_use_cases">Basic use cases</h2>

<div class="column-container">
<div class="column-half">
<h3 id="General">General</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#How_do_you_add_JavaScript_to_your_page">How do you add JavaScript to your page?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Comments">How do you add comments to JavaScript code?</a></li>
</ul>

<h3 id="Variables">Variables</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable">How do you declare a variable?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Variables#Initializing_a_variable">How do you initialize a variable with a value?</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#Updating_a_variable">How do you update a variable's value?</a> (also see <a href="/en-US/docs/Learn/JavaScript/First_steps/Math#Assignment_operators">Assignment operators</a>)</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#Variable_types">What data types can values have in JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Variables#Loose_typing">What does 'loosely typed' mean?</a></li>
</ul>

<h3 id="Math">Math</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Math#Types_of_numbers">What types of number do you have to deal with in web development?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Math#Arithmetic_operators">How do you do basic math in JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Math#Operator_precedence">What is operator precedence, and how is it handled in JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Math#Increment_and_decrement_operators">How do you increment and decrement values in JavaScript?</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#Comparison_operators">How do you compare values in JavaScript?</a> (e.g. to see which one is bigger, or to see if one value is equal to another).</li>
</ul>

<h3 id="Strings">Strings</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings#Creating_a_string">How do you create a string in JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings#Single_quotes_versus_double_quotes">Do you have to use single quotes or double quotes?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings#Escaping_characters_in_a_string">How do you escape characters in strings?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings#Concatenating_strings">How do you join strings together?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings">Can you join strings and numbers together?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_the_length_of_a_string">How do you find the length of a string?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character">How you find what character is at a certain position in a string?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_a_substring_inside_a_string_and_extracting_it">How do you find and extract a specific substring from a string?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Changing_case">How do you change the case of a string?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Updating_parts_of_a_string">How do you replace one specific substring with another?</a></li>
</ul>
</div>

<div class="column-half">
<h3 id="Arrays">Arrays</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays#Creating_an_array">How do you create an array?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays#Accessing_and_modifying_array_items">How do you access and modify the items in an array?</a> (this includes multidimensional arrays)</li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays#Finding_the_length_of_an_array">How do you find the length of an array?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays#Adding_and_removing_array_items">How you add and remove array items?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays#Converting_between_strings_and_arrays">How do you split a string into array items, or join array items into a string?</a></li>
</ul>

<h3 id="Debugging_JavaScript">Debugging JavaScript</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong#Types_of_error">What are the basic types of error?</a></li>
 <li><a href="/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools">What are browser developer tools, and how do you access them?</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#The_Console_API">How do you log a value to the JavaScript console?</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_the_JavaScript_debugger">How do you use breakpoints, and other JavaScript debugging features?</a></li>
</ul>

<p>For more information on JavaScript debugging, see <a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript">Handling common JavaScript problems</a>; also see <a href="/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong#Other_common_errors">Other common errors</a> for a description of common errors.</p>

<h3 id="Making_decisions_in_code">Making decisions in code</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/conditionals">How do you execute different blocks of code, depending on a variable's value or other condition?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements">How do you use if ...else statements?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#Nesting_if_..._else">How do nest one decision block inside another?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#Logical_operators_AND_OR_and_NOT">How do you use AND, OR, and NOT operators in JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements">How do you conveniently handle a large number of choices for one condition?</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#Ternary_operator">How do you use a ternary operator to make a quick choice between two options based on a true or false test?</a></li>
</ul>

<h3 id="Loopingiteration">Looping/iteration</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code">How do you run the same bit of code over and over again?</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#Exiting_loops_with_break">How do you exit a loop before the end if a certain condition is met?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#Skipping_iterations_with_continue">How do you skip to the next iteration of a loop if a certain condition is met?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while">How do you use while and do ... while loops?</a></li>
 <li>How to iterate over the elements in an array</li>
 <li>How to iterate over the elements in a multidimensional array</li>
 <li>How to iterate over the members in an object</li>
 <li>How to iterate over the members of an object nested inside an array</li>
</ul>
</div>
</div>

<h2 id="Intermediate_use_cases">Intermediate use cases</h2>

<div class="column-container">
<div class="column-half">
<h3 id="Functions">Functions</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Built-in_browser_functions">How do you find functions in the browser?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Functions_versus_methods">What is the difference between a function and a method?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function">How do you create your own functions?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Invoking_functions">How do you run (call, or invoke) a function?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Anonymous_functions">What is an anonymous function?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Function_parameters">How do you specify parameters (or arguments) when invoking a function?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts">What is function scope?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Return_values">What are return values, and how do you use them?</a></li>
</ul>

<h3 id="Objects">Objects</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics#Object_basics">How do you create an object?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics#Dot_notation">What is dot notation?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics#Bracket_notation">What is bracket notation?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics#Setting_object_members">How do you get and set the methods and properties of an object?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics#What_is_this">What is <code>this</code>, in the context of an object?</a></li>
 <li><a href="/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters">What is object-oriented programming?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Constructors_and_object_instances">What are constructors and instances, and how do you create them?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Other_ways_to_create_object_instances">What different ways are there to create objects in JavaScript?</a></li>
</ul>

<h3 id="JSON">JSON</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/JSON#JSON_structure">How do you structure JSON data, and read it from JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/JSON#Loading_our_JSON">How can you load a JSON file into a page?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/JSON#Converting_between_objects_and_text">How do you convert a JSON object to a text string, and back again?</a></li>
</ul>
</div>

<div class="column-half">
<h3 id="Events">Events</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties">What are event handlers and how do you use them?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#Inline_event_handlers_%E2%80%94_don%27t_use_these">What are inline event handlers?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#addEventListener()_and_removeEventListener()">What does the <code>addEventListener()</code> function do, and how do you use it?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#What_mechanism_should_I_use">Which mechanism should I use to add event code to my web pages?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_objects">What are event objects, and how do you use them?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#Preventing_default_behaviour">How do you prevent default event behaviour?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture">How do events fire on nested elements? (event propagation, also related — event bubbling and capturing)</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation">What is event delegation, and how does it work?</a></li>
</ul>

<h3 id="Object-oriented_JavaScript">Object-oriented JavaScript</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object_prototypes">What are object prototypes?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#The_constructor_property">What is the constructor property, and how can you use it?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#Modifying_prototypes">How do you add methods to the constructor?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Inheritance">How do you create a new constructor that inherits its members from a parent constructor?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Inheritance#Object_member_summary">When should you use inheritance in JavaScript?</a></li>
</ul>

<h3 id="Web_APIs">Web APIs</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#Active_learning_Basic_DOM_manipulation">How do you manipulate the DOM (e.g. adding or removing elements) using JavaScript?</a></li>
</ul>

<p> </p>
</div>
</div>
