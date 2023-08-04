---
title: Solve common problems in your JavaScript code
slug: Learn/JavaScript/Howto
---

{{LearnSidebar}}

Os links a seguir apontam soluções para problemas comuns do dia a dia, você precisará consertar em ordem para que seu código javascript execute corretamente.

## Erros comuns de iniciantes

### Digitação correta and casing

Se o seu código não funciona e/ou se seu navegador indicar que algo está indefinido, verifique se você declarou todas os nomes de suas variáveis, nomes de funções, etc. corretamente.

Algumas funções comuns dos navegadores que causam problema são:

| Correto                    | Incorreto                 |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementbyTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### Posições de ponto e vírgula

Você precisa ter certeza que você não colocou nenhum ponto e vírgula incorretamente. Por exemplo:

| Correct                     | Wrong                       |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### Funções

Há uma série de coisas que podem dar errado com funções

Um dos erros mais comuns é declarar a função, mas não chama-la em lugar nenhum. Por exemplo:

```js
function myFunction() {
  alert("This is my function.");
}
```

Este código não fará nada a menos que você o chame, por exemplo com

```js
myFunction();
```

#### Escopo da função

Lembre-se que [funções tem seu próprio escopo](/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts) — você não pode acessar um conjunto de valores de variáveis dentro de uma função fora da função, a não ser que você tenha declarado a variável globalmente (i.e. não dentro de nenhuma função), ou retorne o valor or [retorne o valor](/pt-BR/docs/Learn/JavaScript/Building_blocks/Return_values) fora da função

#### Executar o código antes de uma declaração de retorno

Remember also that when you return a value out of a function, the JavaScript interpreter exits the function — no code declared after the return statement will run.

In fact, some browsers (like Firefox) will give you an error message in the developer console if you have code after a return statement. Firefox gives you "unreachable code after return statement".

### Object notation versus normal assignment

When you assign something normally in JavaScript, you use a single equals sign, e.g.:

```js
var myNumber = 0;
```

This doesn't work in [Objects](/pt-BR/docs/Learn/JavaScript/Objects), however — with objects you need to separate member names from their values using colons, and separate each member with a comma, for example:

```js
var myObject = {
  name: "Chris",
  age: 38,
};
```

## Definições básicas

- [O que é Javascript?](/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#A_high-level_definition)
- [O que é uma variável?](/pt-BR/docs/Learn/JavaScript/First_steps/Variables#What_is_a_variable)
- [O que são strings?](/pt-BR/docs/Learn/JavaScript/First_steps/Strings)
- [O que é um vetor?](/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#What_is_an_Array)
- [O que é um laço?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [O que é uma função?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
- [O que é um evento?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
- [O que é um objeto?](/pt-BR/docs/Learn/JavaScript/Objects/Basics#Object_basics)
- [O que é JSON?](/pt-BR/docs/Learn/JavaScript/Objects/JSON#No_really_what_is_JSON)
- [O que é uma web API?](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#What_are_APIs)
- [O que é o DOM?](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model)

## Casos de uso básicos

### Geral

- [Como adicionar JavasScript para sua página?](/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#How_do_you_add_JavaScript_to_your_page)
- [Como adicionar comentários em um código Javascript?](/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Comments)

### Variáveis

- [Como você declara uma variável?](/pt-BR/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable)
- [Como você inicializa uma variável com um valor?](/pt-BR/docs/Learn/JavaScript/First_steps/Variables#Initializing_a_variable)
- [Como você atualiza o valor de uma variável](/pt-BR/docs/Learn/JavaScript/First_steps/Variables#Updating_a_variable) (ver também [Operadores de atribuição](/pt-BR/docs/Learn/JavaScript/First_steps/Math#Assignment_operators))
- [Quais tipos de dados os valores podem ter em JavaScript?](/pt-BR/docs/Learn/JavaScript/First_steps/Variables#Variable_types)
- [O que 'fracamente tipada' significa?](/pt-BR/docs/Learn/JavaScript/First_steps/Variables#Loose_typing)

### Matemática

- [Quais tipos de números você tem que lidar no desenvolvimento web?](/pt-BR/docs/Learn/JavaScript/First_steps/Math#Types_of_numbers)
- [Como você faz matemática básica em JavaScript?](/pt-BR/docs/Learn/JavaScript/First_steps/Math#Arithmetic_operators)
- [Qual a precedência do operador, e como isso é tratado em JavaScript?](/pt-BR/docs/Learn/JavaScript/First_steps/Math#Operator_precedence)
- [Como você incrementa e decrementa valores em JavaScript?](/pt-BR/docs/Learn/JavaScript/First_steps/Math#Increment_and_decrement_operators)
- [Como você compara valores em JavaScript?](/pt-BR/docs/Learn/JavaScript/First_steps/Math#Comparison_operators) (por exemplo, para ver qual é o maior, ou para ver se um valor é igual ao outro).

### Strings

- [Como você cria uma string em JavaScript?](/pt-BR/docs/Learn/JavaScript/First_steps/Strings#Creating_a_string)
- [Do you have to use single quotes or double quotes?](/pt-BR/docs/Learn/JavaScript/First_steps/Strings#Single_quotes_versus_double_quotes)
- [How do you escape characters in strings?](/pt-BR/docs/Learn/JavaScript/First_steps/Strings#Escaping_characters_in_a_string)
- [How do you join strings together?](/pt-BR/docs/Learn/JavaScript/First_steps/Strings#Concatenating_strings)
- [Can you join strings and numbers together?](/pt-BR/docs/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings)
- [How do you find the length of a string?](/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_the_length_of_a_string)
- [How you find what character is at a certain position in a string?](/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character)
- [How do you find and extract a specific substring from a string?](/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_a_substring_inside_a_string_and_extracting_it)
- [How do you change the case of a string?](/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#Changing_case)
- [How do you replace one specific substring with another?](/pt-BR/docs/Learn/JavaScript/First_steps/Useful_string_methods#Updating_parts_of_a_string)

### Arrays

- [How do you create an array?](/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#Creating_an_array)
- [How do you access and modify the items in an array?](/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#Accessing_and_modifying_array_items) (this includes multidimensional arrays)
- [How do you find the length of an array?](/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#Finding_the_length_of_an_array)
- [How you add and remove array items?](/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#Adding_and_removing_array_items)
- [How do you split a string into array items, or join array items into a string?](/pt-BR/docs/Learn/JavaScript/First_steps/Arrays#Converting_between_strings_and_arrays)

### Debugging JavaScript

- [What are the basic types of error?](/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#Types_of_error)
- [What are browser developer tools, and how do you access them?](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools)
- [How do you log a value to the JavaScript console?](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#The_Console_API)
- [How do you use breakpoints, and other JavaScript debugging features?](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_the_JavaScript_debugger)

For more information on JavaScript debugging, see [Handling common JavaScript problems](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript); also see [Other common errors](/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong#Other_common_errors) for a description of common errors.

### Making decisions in code

- [How do you execute different blocks of code, depending on a variable's value or other condition?](/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
- [How do you use if ...else statements?](/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements)
- [How do nest one decision block inside another?](/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals#Nesting_if_..._else)
- [How do you use AND, OR, and NOT operators in JavaScript?](/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals#Logical_operators_AND_OR_and_NOT)
- [How do you conveniently handle a large number of choices for one condition?](/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)
- [How do you use a ternary operator to make a quick choice between two options based on a true or false test?](/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals#Ternary_operator)

### Looping/iteration

- [How do you run the same bit of code over and over again?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [How do you exit a loop before the end if a certain condition is met?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Looping_code#Exiting_loops_with_break)
- [How do you skip to the next iteration of a loop if a certain condition is met?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Looping_code#Skipping_iterations_with_continue)
- [How do you use while and do ... while loops?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while)
- How to iterate over the elements in an array
- How to iterate over the elements in a multidimensional array
- How to iterate over the members in an object
- How to iterate over the members of an object nested inside an array

## Intermediate use cases

### Functions

- [How do you find functions in the browser?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions#Built-in_browser_functions)
- [What is the difference between a function and a method?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions#Functions_versus_methods)
- [How do you create your own functions?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [How do you run (call, or invoke) a function?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions#Invoking_functions)
- [What is an anonymous function?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions#Anonymous_functions)
- [How do you specify parameters (or arguments) when invoking a function?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions#Function_parameters)
- [What is function scope?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts)
- [What are return values, and how do you use them?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Return_values)

### Objects

- [How do you create an object?](/pt-BR/docs/Learn/JavaScript/Objects/Basics#Object_basics)
- [What is dot notation?](/pt-BR/docs/Learn/JavaScript/Objects/Basics#Dot_notation)
- [What is bracket notation?](/pt-BR/docs/Learn/JavaScript/Objects/Basics#Bracket_notation)
- [How do you get and set the methods and properties of an object?](/pt-BR/docs/Learn/JavaScript/Objects/Basics#Setting_object_members)
- [What is `this`, in the context of an object?](/pt-BR/docs/Learn/JavaScript/Objects/Basics#What_is_this)
- [What is object-oriented programming?](/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters)
- [What are constructors and instances, and how do you create them?](/pt-BR/docs/Learn/JavaScript/Objects/Object-oriented_JS#Constructors_and_object_instances)
- [What different ways are there to create objects in JavaScript?](/pt-BR/docs/Learn/JavaScript/Objects/Object-oriented_JS#Other_ways_to_create_object_instances)

### JSON

- [How do you structure JSON data, and read it from JavaScript?](/pt-BR/docs/Learn/JavaScript/Objects/JSON#JSON_structure)
- [How can you load a JSON file into a page?](/pt-BR/docs/Learn/JavaScript/Objects/JSON#Loading_our_JSON)
- [How do you convert a JSON object to a text string, and back again?](/pt-BR/docs/Learn/JavaScript/Objects/JSON#Converting_between_objects_and_text)

### Eventos

- [What are event handlers and how do you use them?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties)
- [What are inline event handlers?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Events#Inline_event_handlers_%E2%80%94_don%27t_use_these)
- [What does the `addEventListener()` function do, and how do you use it?](</pt-BR/docs/Learn/JavaScript/Building_blocks/Events#addEventListener()_and_removeEventListener()>)
- [Which mechanism should I use to add event code to my web pages?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Events#What_mechanism_should_I_use)
- [What are event objects, and how do you use them?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Events#Event_objects)
- [How do you prevent default event behaviour?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Events#Preventing_default_behaviour)
- [How do events fire on nested elements? (event propagation, also related — event bubbling and capturing)](/pt-BR/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
- [What is event delegation, and how does it work?](/pt-BR/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation)

### Javascript Orientado a objetos

- [Quais são protótipos de objetos?](/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Qual é a propriedade do construtor, e como você pode usa-la?](/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes#The_constructor_property)
- [Como você adiciona métodos para o construtor?](/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes#Modifying_prototypes)
- [Como você cria um novo constructor que herda os membros do construtor pai?](/pt-BR/docs/Learn/JavaScript/Objects/Inheritance)
- [Quando você deve usar herança em Javascript?](/pt-BR/docs/Learn/JavaScript/Objects/Inheritance#Object_member_summary)

### Web APIs

- [Como você manipula o DOM (por exemplo, adicionando e removendo elementos) usando Javascript?](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#Active_learning_Basic_DOM_manipulation)
