---
title: Resuelva problemas comunes en su código JavaScript
slug: Learn/JavaScript/Howto
---

{{LearnSidebar}}

Los siguientes enlaces apuntan a soluciones a problemas comunes de todos los días que deberá solucionar para que su código JavaScript se ejecute correctamente..

## Errores comunes de principiante

### Correcta ortografía y casing

Si su código no funciona y / o el navegador se queja de que algo no está definido, verifique que haya escrito todos sus nombres de variables, nombres de funciones, etc. correctamente.

Algunas funciones comunes del navegador incorporado que causan problemas son:

| Correcto                   | Incorrecto                |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementbyTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### Posición de punto y coma

Debes estar seguro de no colocar ningún punto y coma incorrectamente. Por ejemplo:

| Correcto                    | Incorrecto                  |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### Funciones

Hay una serie de cosas que pueden salir mal con la funciones.

Uno de los errores más comunes es declarar una función, pero no llamarla a ninguna parte, Por ejemplo:

```js
function miFuncion() {
  alert("Esta es mi funcion.");
}
```

Este código no hará nada a menos que lo llame, por ejemplo con

```js
miFuncion();
```

#### Alcance de la función

Recuerda que las [funciones tienen su propio alcance](/es/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts) — no puedes acceder a un valor de variable establecido dentro de una función desde fuera de la función, a menos que haya declarado la variable globalmente (es decir, no dentro de ninguna función), o [retornar el valor](/es/docs/Learn/JavaScript/Building_blocks/Return_values) fuera de la función.

#### Ejecución de código después de una declaración de retorno (Return)

Recuerde también que cuando devuelve un valor de una función, el intérprete de JavaScript sale de la función — ningún código declarado después de que se ejecute la declaración de devolución (Return).

De hecho, algunos navegadores (como Firefox) le darán un mensaje de error en la consola del desarrollador si tiene código después de una declaración de devolución. Firefox te ofrece "código inalcanzable después de la declaración de devolución".

Mas abajo podemos observar una función de saludo, posterior a retornar intentamos asignar a la variable x, el valor de la propiedad que viene en la función. Esto nunca ocurrira ya que posterior a retornar un valor se sale del contexto función. En pocas palabras jamas ocurrira la asignación.

Ejemplo de una declaración posterior a una declaración de retorno:

```
function saludo(nombre){
 return "Hola, " + nombre + " que bueno que volviste";
 var x = nombre; //Esta linea jamas se ejecutara ya que viene despues de un retorno
}
```

### Notación de objetos versus asignación normal

Cuando asigna algo normalmente en JavaScript, utiliza un solo signo igual, por ejemplo:

```js
const miNumero = 0;
```

Esto no funciona en los [Objetos](/es/docs/Learn/JavaScript/Objects), sin embargo, con los objetos, debe separar los nombres de los miembros de sus valores mediante dos puntos y separar cada miembro con una coma, por ejemplo:

```js
const miObjeto = {
  nombre: "Felipe",
  edad: 27,
};
```

## Definiciones básicas

- [¿Qué es JavaScript?](/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript#A_high-level_definition)
- [¿Qué es una variable?](/es/docs/Learn/JavaScript/First_steps/Variables#What_is_a_variable)
- [¿Qué son los Strings?](/es/docs/Learn/JavaScript/First_steps/Strings)
- [¿Qué es una matriz?](/es/docs/Learn/JavaScript/First_steps/Arrays#What_is_an_Array)
- [¿Qué es un bucle?](/es/docs/Learn/JavaScript/Building_blocks/Looping_code)

<!---->

- [¿Qué es una función?](/es/docs/Learn/JavaScript/Building_blocks/Functions)
- [¿Qué es un evento?](/es/docs/Learn/JavaScript/Building_blocks/Events)
- [¿Qué es un objeto?](/es/docs/Learn/JavaScript/Objects/Basics#Object_basics)
- [¿Qué es JSON?](/es/docs/Learn/JavaScript/Objects/JSON#No_really_what_is_JSON)
- [¿Qué es una API web?](/es/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#What_are_APIs)
- [¿Qué es el DOM?](/es/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model)

## Casos de uso básico

### General

- [¿Cómo agrega JavaScript a su página?](/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript#How_do_you_add_JavaScript_to_your_page)
- [¿Cómo agrega comentarios al código JavaScript?](/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Comments)

### Variables

- [¿Cómo se declara una variable?](/es/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable)
- [¿Cómo se inicializa una variable con un valor?](/es/docs/Learn/JavaScript/First_steps/Variables#Initializing_a_variable)
- [¿Cómo se actualiza el valor de una variable?](/es/docs/Learn/JavaScript/First_steps/Variables#Updating_a_variable) (ver también [Operadores de asignación](/es/docs/Learn/JavaScript/First_steps/Math#Assignment_operators))
- [¿Qué tipos de datos pueden tener los valores en JavaScript?](/es/docs/Learn/JavaScript/First_steps/Variables#Variable_types)
- [¿Qué significa 'tipeado libremente' (loosely typed)?](/es/docs/Learn/JavaScript/First_steps/Variables#Loose_typing)

### Matemáticas (MATH)

- [¿Con qué tipos de números tiene que lidiar en el desarrollo web?](/es/docs/Learn/JavaScript/First_steps/Math#Types_of_numbers)
- [¿Cómo haces matemáticas básicas en JavaScript?](/es/docs/Learn/JavaScript/First_steps/Math#Arithmetic_operators)
- [¿Qué es la precedencia del operador y cómo se maneja en JavaScript?](/es/docs/Learn/JavaScript/First_steps/Math#Operator_precedence)
- [¿Cómo se incrementan y disminuyen los valores en JavaScript?](/es/docs/Learn/JavaScript/First_steps/Math#Increment_and_decrement_operators)
- [¿Cómo se comparan los valores en JavaScript?](/es/docs/Learn/JavaScript/First_steps/Math#Comparison_operators) (por ejemplo, para ver cuál es más grande o para ver si un valor es igual a otro).

### Cadenas de texto (Strings)

- [¿Cómo se crea una cadena de texto en JavaScript?](/es/docs/Learn/JavaScript/First_steps/Strings#Creating_a_string)
- [¿Tienes que usar comillas simples o comillas dobles?](/es/docs/Learn/JavaScript/First_steps/Strings#Single_quotes_versus_double_quotes)
- [How do you escape characters in strings?](/es/docs/Learn/JavaScript/First_steps/Strings#Escaping_characters_in_a_string)
- [¿Cómo se unen las cadenas de texto?](/es/docs/Learn/JavaScript/First_steps/Strings#Concatenating_strings)
- [¿Puedes unir cadenas de texto y números juntos?](/es/docs/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings)
- [¿Cómo encuentras la longitud de una cadena de texto (String)?](/es/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_the_length_of_a_string)
- [¿Cómo encuentras qué carácter está en una posición determinada en una cadena de texto?](/es/docs/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character)
- [¿Cómo encontrar y extraer una subcadena específica de una cadena de texto?](/es/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_a_substring_inside_a_string_and_extracting_it)
- [¿Cómo se cambia el caso de una cadena de texto?](/es/docs/Learn/JavaScript/First_steps/Useful_string_methods#Changing_case)
- [¿Cómo se reemplaza una subcadena específica por otra?](/es/docs/Learn/JavaScript/First_steps/Useful_string_methods#Updating_parts_of_a_string)

### Matrices (Arrays)

- [¿Cómo se crea una matriz?](/es/docs/Learn/JavaScript/First_steps/Arrays#Creating_an_array)
- [¿Cómo accede y modifica los elementos en una matriz?](/es/docs/Learn/JavaScript/First_steps/Arrays#Accessing_and_modifying_array_items) (esto incluye matrices multidimensionales)
- [¿Cómo encuentras la longitud de una matriz?](/es/docs/Learn/JavaScript/First_steps/Arrays#Finding_the_length_of_an_array)
- [¿Cómo agrega y elimina elementos de la matriz?](/es/docs/Learn/JavaScript/First_steps/Arrays#Adding_and_removing_array_items)
- [¿Cómo se divide una cadena en elementos de la matriz, o se unen los elementos de la matriz en una cadena?](/es/docs/Learn/JavaScript/First_steps/Arrays#Converting_between_strings_and_arrays)

### Depuración de JavaScript

- [¿Cuáles son los tipos básicos de error?](/es/docs/Learn/JavaScript/First_steps/What_went_wrong#Types_of_error)
- [¿Qué son las herramientas de desarrollo del navegador y cómo se accede a ellas?](/es/docs/Learn/Common_questions/What_are_browser_developer_tools)
- [¿Cómo se registra un valor en la consola de JavaScript?](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#The_Console_API)
- [¿Cómo se usan los puntos de interrupción y otras funciones de depuración de JavaScript?](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_the_JavaScript_debugger)

Para obtener más información sobre la depuración de JavaScript, consulte [Manejo de problemas comunes de JavaScript](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript); Consulte también [Otros errores comunes](/es/docs/Learn/JavaScript/First_steps/What_went_wrong#Other_common_errors) para obtener una descripción de los errores comunes.

### Tomar decisiones en el código

- [¿Cómo ejecuta diferentes bloques de código, dependiendo del valor de una variable u otra condición?](/es/docs/Learn/JavaScript/Building_blocks/conditionals)
- [¿Cómo se usan las declaraciones if ... else?](/es/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements)
- [¿Cómo anidan un bloque de decisión dentro de otro?](/es/docs/Learn/JavaScript/Building_blocks/conditionals#Nesting_if_..._else)
- [¿Cómo se usan los operadores AND, OR y NOT en JavaScript?](/es/docs/Learn/JavaScript/Building_blocks/conditionals#Logical_operators_AND_OR_and_NOT)
- [¿Cómo maneja convenientemente una gran cantidad de opciones para una condición?](/es/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)
- [¿Cómo utiliza un operador ternario para hacer una elección rápida entre dos opciones basadas en una prueba verdadera o falsa?](/es/docs/Learn/JavaScript/Building_blocks/conditionals#Ternary_operator)

### Bucle / Iteración

- [¿Cómo ejecutas el mismo código una y otra vez?](/es/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [¿Cómo sale de un bucle antes del final si se cumple una determinada condición?](/es/docs/Learn/JavaScript/Building_blocks/Looping_code#Exiting_loops_with_break)
- [¿Cómo saltas a la siguiente iteración de un ciclo si se cumple una determinada condición?](/es/docs/Learn/JavaScript/Building_blocks/Looping_code#Skipping_iterations_with_continue)
- [¿Cómo usas while y do ... while loops?](/es/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while)
- Cómo iterar sobre los elementos en una matriz
- Cómo iterar sobre los elementos en una matriz multidimensional
- Cómo iterar sobre los miembros en un objeto
- Cómo iterar sobre los miembros de un objeto anidado dentro de una matriz

## Casos de uso intermedio

### Funciones

- [¿Cómo encuentras funciones en el navegador?](/es/docs/Learn/JavaScript/Building_blocks/Functions#Built-in_browser_functions)
- [¿Cuál es la diferencia entre una función y un método?](/es/docs/Learn/JavaScript/Building_blocks/Functions#Functions_versus_methods)
- [¿Cómo creas tus propias funciones?](/es/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [¿Cómo ejecuta (llama o invoca) una función?](/es/docs/Learn/JavaScript/Building_blocks/Functions#Invoking_functions)
- [¿Qué es una función anónima?](/es/docs/Learn/JavaScript/Building_blocks/Functions#Anonymous_functions)
- [¿Cómo se especifican los parámetros (o argumentos) al invocar una función?](/es/docs/Learn/JavaScript/Building_blocks/Functions#Function_parameters)
- [¿Qué es el alcance de la función?](/es/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts)
- [¿Qué son los valores de retorno y cómo los usa?](/es/docs/Learn/JavaScript/Building_blocks/Return_values)

### Objetos

- [¿Cómo se crea un objeto?](/es/docs/Learn/JavaScript/Objects/Basics#Object_basics)
- [¿Qué es la notación de puntos?](/es/docs/Learn/JavaScript/Objects/Basics#Dot_notation)
- [¿Qué es la notación de corchetes?](/es/docs/Learn/JavaScript/Objects/Basics#Bracket_notation)
- [¿Cómo se obtienen y establecen los métodos y propiedades de un objeto?](/es/docs/Learn/JavaScript/Objects/Basics#Setting_object_members)
- [¿Qué es `this`, en el contexto de un objeto?](/es/docs/Learn/JavaScript/Objects/Basics#What_is_this)
- [¿Qué es la programación orientada a objetos?](/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters)
- [¿Qué son los constructores y las instancias y cómo se crean?](/es/docs/Learn/JavaScript/Objects/Object-oriented_JS#Constructors_and_object_instances)
- [¿Qué formas diferentes hay para crear objetos en JavaScript?](/es/docs/Learn/JavaScript/Objects/Object-oriented_JS#Other_ways_to_create_object_instances)

### JSON

- [¿Cómo estructuran los datos JSON y los leen desde JavaScript?](/es/docs/Learn/JavaScript/Objects/JSON#JSON_structure)
- [¿Cómo se puede cargar un archivo JSON en una página?](/es/docs/Learn/JavaScript/Objects/JSON#Loading_our_JSON)
- [¿Cómo convierte un objeto JSON en una cadena de texto y viceversa?](/es/docs/Learn/JavaScript/Objects/JSON#Converting_between_objects_and_text)

### Eventos

- [¿Qué son los controladores de eventos y cómo los usa?](/es/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties)
- [¿Qué son los controladores de eventos en línea?](/es/docs/Learn/JavaScript/Building_blocks/Events#Inline_event_handlers_%E2%80%94_don%27t_use_these)
- [¿Qué hace la función `addEventListener()` y cómo la usa?](/es/docs/Learn/JavaScript/Building_blocks/Events#addEventListener_and_removeEventListener)
- [¿Qué mecanismo debo usar para agregar código de evento a mis páginas web?](/es/docs/Learn/JavaScript/Building_blocks/Events#What_mechanism_should_I_use)
- [¿Qué son los objetos de evento y cómo los usa?](/es/docs/Learn/JavaScript/Building_blocks/Events#Event_objects)
- [¿Cómo se previene el comportamiento de evento predeterminado?](/es/docs/Learn/JavaScript/Building_blocks/Events#Preventing_default_behaviour)
- [¿Cómo se disparan los eventos en elementos anidados? (propagación de eventos, también relacionada - burbujeo y captura de eventos)](/es/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
- [¿Qué es la delegación de eventos y cómo funciona?](/es/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation)

### JavaScript Orientado a Objetos

- [¿Qué son los prototipos de objetos?](/es/docs/Learn/JavaScript/Objects/Object_prototypes)
- [¿Cuál es la propiedad del constructor y cómo puede usarla?](/es/docs/Learn/JavaScript/Objects/Object_prototypes#The_constructor_property)
- [¿Cómo se agregan métodos al constructor?](/es/docs/Learn/JavaScript/Objects/Object_prototypes#Modifying_prototypes)
- [¿Cómo se crea un nuevo constructor que herede sus miembros de un constructor principal?](/es/docs/Learn/JavaScript/Objects/Inheritance)
- [¿Cuándo deberías usar la herencia en JavaScript?](/es/docs/Learn/JavaScript/Objects/Inheritance#Object_member_summary)

### Web APIs

- [¿Cómo se manipula el DOM (por ejemplo, agregar o eliminar elementos) usando JavaScript?](/es/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#Active_learning_Basic_DOM_manipulation)
