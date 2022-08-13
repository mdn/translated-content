---
title: Resuelva problemas comunes en su código JavaScript
slug: Learn/JavaScript/Howto
tags:
  - Aprendizaje
  - JavaScript
  - Principante
translation_of: Learn/JavaScript/Howto
---
<div>{{LearnSidebar}}</div>

<p class="summary"></p>

<p class="summary">Los siguientes enlaces apuntan a soluciones a problemas comunes de todos los días que deberá solucionar para que su código JavaScript se ejecute correctamente..</p>

<h2 id="Errores_comunes_de_principiante">Errores comunes de principiante</h2>

<h3 id="Correcta_ortografía_y_casing">Correcta ortografía y casing</h3>



<p>Si su código no funciona y / o el navegador se queja de que algo no está definido, verifique que haya escrito todos sus nombres de variables, nombres de funciones, etc. correctamente.  </p>



<p>Algunas funciones comunes del navegador incorporado que causan problemas son:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Correcto</th>
   <th scope="col">Incorrecto</th>
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

<h3 id="Posición_de_punto_y_coma">Posición de punto y coma</h3>

<p>Debes estar seguro de no colocar ningún punto y coma incorrectamente. Por ejemplo:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Correcto</th>
   <th scope="col">Incorrecto</th>
  </tr>
  <tr>
   <td><code>elem.style.color = 'red';</code></td>
   <td><code>elem.style.color = 'red;'</code></td>
  </tr>
 </thead>
</table>

<h3 id="Funciones">Funciones</h3>

<p>Hay una serie de cosas que pueden salir mal con la funciones.</p>

<p>Uno de los errores más comunes es declarar una función, pero no llamarla a ninguna parte, Por ejemplo:</p>

<pre class="brush: js">function miFuncion() {
  alert('Esta es mi funcion.');
};</pre>

<p>Este código no hará nada a menos que lo llame, por ejemplo con</p>

<pre class="brush: js">miFuncion();</pre>

<h4 id="Alcance_de_la_función">Alcance de la función</h4>



<p>Recuerda que las <a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts">funciones tienen su propio alcance</a> — no puedes acceder a un valor de variable establecido dentro de una función desde fuera de la función, a menos que haya declarado la variable globalmente (es decir, no dentro de ninguna función), o <a href="/en-US/docs/Learn/JavaScript/Building_blocks/Return_values">retornar el valor</a> fuera de la función.</p>

<h4 id="Ejecución_de_código_después_de_una_declaración_de_retorno_(Return)">Ejecución de código después de una declaración de retorno (Return)</h4>



<p>Recuerde también que cuando devuelve un valor de una función, el intérprete de JavaScript sale de la función — ningún código declarado después de que se ejecute la declaración de devolución (Return).</p>

<p>De hecho, algunos navegadores (como Firefox) le darán un mensaje de error en la consola del desarrollador si tiene código después de una declaración de devolución. Firefox te ofrece "código inalcanzable después de la declaración de devolución".</p>

<p>Mas abajo podemos observar una función de saludo, posterior a retornar intentamos asignar a la variable x, el valor de la propiedad que viene en la función. Esto nunca ocurrira ya que posterior a retornar un valor se sale del contexto función. En pocas palabras jamas ocurrira la asignación.</p>

<p>Ejemplo de una declaración posterior a una declaración de retorno:</p>

<pre><code>function saludo(nombre){</code>
 return "Hola, " + nombre + " que bueno que volviste";
 var x = nombre; //Esta linea jamas se ejecutara ya que viene despues de un retorno
<code>}</code></pre>

<h3 id="Notación_de_objetos_versus_asignación_normal">Notación de objetos versus asignación normal</h3>



<p>Cuando asigna algo normalmente en JavaScript, utiliza un solo signo igual, por ejemplo:</p>

<pre class="brush: js">const miNumero= 0;</pre>

<p>Esto no funciona en los <a href="/en-US/docs/Learn/JavaScript/Objects">Objetos</a>, sin embargo, con los objetos, debe separar los nombres de los miembros de sus valores mediante dos puntos y separar cada miembro con una coma, por ejemplo:</p>

<pre class="brush: js">const miObjeto= {
  nombre: 'Felipe',
  edad: 27
}</pre>

<h2 id="Definiciones_básicas">Definiciones básicas</h2>

<div class="column-container">
<div class="column-half">
<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#A_high-level_definition">¿Qué es JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Variables#What_is_a_variable">¿Qué es una variable?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings">¿Qué son los Strings?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays#What_is_an_Array">¿Qué es una matriz?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code">¿Qué es un bucle?</a></li>
</ul>
</div>

<div class="column-half">
<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions">¿Qué es una función?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events">¿Qué es un evento?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics#Object_basics">¿Qué es un objeto?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/JSON#No_really_what_is_JSON">¿Qué es JSON?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#What_are_APIs">¿Qué es una API web?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model">¿Qué es el DOM?</a></li>
</ul>
</div>
</div>

<h2 id="Casos_de_uso_básico">Casos de uso básico</h2>

<div class="column-container">
<div class="column-half">
<h3 id="General">General</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#How_do_you_add_JavaScript_to_your_page">¿Cómo agrega JavaScript a su página?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Comments">¿Cómo agrega comentarios al código JavaScript?</a></li>
</ul>

<h3 id="Variables">Variables</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable">¿Cómo se declara una variable?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Variables#Initializing_a_variable">¿Cómo se inicializa una variable con un valor?</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#Updating_a_variable">¿Cómo se actualiza el valor de una variable?</a> (ver también <a href="/en-US/docs/Learn/JavaScript/First_steps/Math#Assignment_operators">Operadores de asignación</a>) </li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#Variable_types">¿Qué tipos de datos pueden tener los valores en JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Variables#Loose_typing">¿Qué significa 'tipeado libremente' (loosely typed)?</a></li>
</ul>

<h3 id="Matemáticas_(MATH)">Matemáticas (MATH)</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Math#Types_of_numbers">¿Con qué tipos de números tiene que lidiar en el desarrollo web?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Math#Arithmetic_operators">¿Cómo haces matemáticas básicas en JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Math#Operator_precedence">¿Qué es la precedencia del operador y cómo se maneja en JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Math#Increment_and_decrement_operators">¿Cómo se incrementan y disminuyen los valores en JavaScript?</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#Comparison_operators">¿Cómo se comparan los valores en JavaScript?</a> (por ejemplo, para ver cuál es más grande o para ver si un valor es igual a otro).</li>
</ul>

<h3 id="Cadenas_de_texto_(Strings)">Cadenas de texto (Strings)</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings#Creating_a_string">¿Cómo se crea una cadena de texto en JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings#Single_quotes_versus_double_quotes">¿Tienes que usar comillas simples o comillas dobles?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings#Escaping_characters_in_a_string">How do you escape characters in strings?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings#Concatenating_strings">¿Cómo se unen las cadenas de texto?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings">¿Puedes unir cadenas de texto y números juntos?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_the_length_of_a_string">¿Cómo encuentras la longitud de una cadena de texto (String)?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character">¿Cómo encuentras qué carácter está en una posición determinada en una cadena de texto?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_a_substring_inside_a_string_and_extracting_it">¿Cómo encontrar y extraer una subcadena específica de una cadena de texto?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Changing_case">¿Cómo se cambia el caso de una cadena de texto?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods#Updating_parts_of_a_string">¿Cómo se reemplaza una subcadena específica por otra?</a></li>
</ul>
</div>

<div class="column-half">
<h3 id="Matrices_(Arrays)">Matrices (Arrays)</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays#Creating_an_array">¿Cómo se crea una matriz?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays#Accessing_and_modifying_array_items">¿Cómo accede y modifica los elementos en una matriz?</a> (esto incluye matrices multidimensionales)</li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays#Finding_the_length_of_an_array">¿Cómo encuentras la longitud de una matriz?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays#Adding_and_removing_array_items">¿Cómo agrega y elimina elementos de la matriz?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/Arrays#Converting_between_strings_and_arrays">¿Cómo se divide una cadena en elementos de la matriz, o se unen los elementos de la matriz en una cadena?</a></li>
</ul>

<h3 id="Depuración_de_JavaScript">Depuración de JavaScript</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong#Types_of_error">¿Cuáles son los tipos básicos de error?</a></li>
 <li><a href="/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools">¿Qué son las herramientas de desarrollo del navegador y cómo se accede a ellas?</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#The_Console_API">¿Cómo se registra un valor en la consola de JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_the_JavaScript_debugger">¿Cómo se usan los puntos de interrupción y otras funciones de depuración de JavaScript?</a></li>
</ul>



<p>Para obtener más información sobre la depuración de JavaScript, consulte <a href="/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript">Manejo de problemas comunes de JavaScript </a>; Consulte también <a href="/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong#Other_common_errors">Otros errores comunes</a> para obtener una descripción de los errores comunes.</p>

<h3 id="Tomar_decisiones_en_el_código">Tomar decisiones en el código</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/conditionals">¿Cómo ejecuta diferentes bloques de código, dependiendo del valor de una variable u otra condición?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements">¿Cómo se usan las declaraciones if ... else?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#Nesting_if_..._else">¿Cómo anidan un bloque de decisión dentro de otro?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#Logical_operators_AND_OR_and_NOT">¿Cómo se usan los operadores AND, OR y NOT en JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements">¿Cómo maneja convenientemente una gran cantidad de opciones para una condición?</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#Ternary_operator">¿Cómo utiliza un operador ternario para hacer una elección rápida entre dos opciones basadas en una prueba verdadera o falsa?</a></li>
</ul>

<h3 id="Bucle_Iteración">Bucle / Iteración</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code">¿Cómo ejecutas el mismo código una y otra vez?</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#Exiting_loops_with_break">¿Cómo sale de un bucle antes del final si se cumple una determinada condición?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#Skipping_iterations_with_continue">¿Cómo saltas a la siguiente iteración de un ciclo si se cumple una determinada condición?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while">¿Cómo usas while y do ... while loops?</a></li>
 <li>Cómo iterar sobre los elementos en una matriz</li>
 <li>Cómo iterar sobre los elementos en una matriz multidimensional</li>
 <li>Cómo iterar sobre los miembros en un objeto</li>
 <li>Cómo iterar sobre los miembros de un objeto anidado dentro de una matriz</li>
</ul>
</div>
</div>

<h2 id="Casos_de_uso_intermedio">Casos de uso intermedio</h2>

<div class="column-container">
<div class="column-half">
<h3 id="Funciones_2">Funciones</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Built-in_browser_functions">¿Cómo encuentras funciones en el navegador?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Functions_versus_methods">¿Cuál es la diferencia entre una función y un método?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function">¿Cómo creas tus propias funciones?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Invoking_functions">¿Cómo ejecuta (llama o invoca) una función?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Anonymous_functions">¿Qué es una función anónima?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Function_parameters">¿Cómo se especifican los parámetros (o argumentos) al invocar una función?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts">¿Qué es el alcance de la función?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Return_values">¿Qué son los valores de retorno y cómo los usa?</a></li>
</ul>

<h3 id="Objetos">Objetos</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics#Object_basics">¿Cómo se crea un objeto?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics#Dot_notation">¿Qué es la notación de puntos?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics#Bracket_notation">¿Qué es la notación de corchetes?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics#Setting_object_members">¿Cómo se obtienen y establecen los métodos y propiedades de un objeto?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Basics#What_is_this">¿Qué es <code>this</code>, en el contexto de un objeto?</a></li>
 <li><a href="/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters">¿Qué es la programación orientada a objetos?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Constructors_and_object_instances">¿Qué son los constructores y las instancias y cómo se crean?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS#Other_ways_to_create_object_instances">¿Qué formas diferentes hay para crear objetos en JavaScript?</a></li>
</ul>

<h3 id="JSON">JSON</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/JSON#JSON_structure">¿Cómo estructuran los datos JSON y los leen desde JavaScript?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/JSON#Loading_our_JSON">¿Cómo se puede cargar un archivo JSON en una página?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/JSON#Converting_between_objects_and_text">¿Cómo convierte un objeto JSON en una cadena de texto y viceversa?</a></li>
</ul>
</div>

<div class="column-half">
<h3 id="Eventos">Eventos</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties">¿Qué son los controladores de eventos y cómo los usa?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#Inline_event_handlers_%E2%80%94_don%27t_use_these">¿Qué son los controladores de eventos en línea?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#addEventListener()_and_removeEventListener()">¿Qué hace la función <code>addEventListener() </code>y cómo la usa?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#What_mechanism_should_I_use">¿Qué mecanismo debo usar para agregar código de evento a mis páginas web?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_objects">¿Qué son los objetos de evento y cómo los usa?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#Preventing_default_behaviour">¿Cómo se previene el comportamiento de evento predeterminado?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture">¿Cómo se disparan los eventos en elementos anidados? (propagación de eventos, también relacionada - burbujeo y captura de eventos)</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation">¿Qué es la delegación de eventos y cómo funciona?</a></li>
</ul>

<h3 id="JavaScript_Orientado_a_Objetos">JavaScript Orientado a Objetos</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object_prototypes">¿Qué son los prototipos de objetos?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#The_constructor_property">¿Cuál es la propiedad del constructor y cómo puede usarla?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#Modifying_prototypes">¿Cómo se agregan métodos al constructor?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Inheritance">¿Cómo se crea un nuevo constructor que herede sus miembros de un constructor principal?</a></li>
 <li><a href="/en-US/docs/Learn/JavaScript/Objects/Inheritance#Object_member_summary">¿Cuándo deberías usar la herencia en JavaScript?</a></li>
</ul>

<h3 id="Web_APIs">Web APIs</h3>

<ul>
 <li><a href="/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#Active_learning_Basic_DOM_manipulation">¿Cómo se manipula el DOM (por ejemplo, agregar o eliminar elementos) usando JavaScript?</a></li>
</ul>


</div>
</div>
