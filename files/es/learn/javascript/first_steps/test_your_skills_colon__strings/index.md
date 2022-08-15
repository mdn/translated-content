---
title: 'Prueba tus habilidades: Strings'
slug: Learn/JavaScript/First_steps/Test_your_skills:_Strings
tags:
  - Cadenas
  - JavaScript
  - Novato
  - Principiante
  - Prueba tus habilidades
  - aprende
  - strings
translation_of: Learn/JavaScript/First_steps/Test_your_skills:_Strings
original_slug: Learn/JavaScript/First_steps/Prueba_tus_habilidades:_Strings
---
<div>{{learnsidebar}}</div>

<p>El objetivo de esta prueba de habilidad es evaluar si has entendido nuestros artículos <a href="/es/docs/Learn/JavaScript/First_steps/Strings">Manejo de texto — cadenas en JavaScript</a> y <a href="/es/docs/Learn/JavaScript/First_steps/Useful_string_methods">Métodos de cadena útiles</a>.</p>

<div class="blockIndicator note">
<p><strong>Nota</strong>: Puedes probar las soluciones en los editores interactivos a continuación, sin embargo, puede ser útil descargar el código y usar una herramienta en línea como <a href="https://codepen.io/">CodePen</a>, <a href="https://jsfiddle.net/">jsFiddle</a>, o <a href="https://glitch.com/">Glitch</a> para trabajar en las tareas.<br>
 <br>
 Si te quedas atascado, pídenos ayuda — consulta la sección <a href="#evaluación_o_ayuda_adicional">Evaluación o ayuda adicional</a> en la parte inferior de esta página.</p>
</div>

<div class="blockIndicator note">
<p><strong>Nota</strong>: En los siguientes ejemplos, si hay un error en tu código, se mostrará en el panel de resultados de la página, para ayudarte a intentar averiguar la respuesta (o en la consola JavaScript del navegador, en el caso de la versión descargable).</p>
</div>

<h2 id="Cadenas_1">Cadenas 1</h2>

<p>En nuestra primera tarea de cadenas, comenzaremos con algo pequeño. Ya tienes la mitad de una cita famosa dentro de una variable llamada <code>quoteStart</code>; nos gustaría que:</p>

<ol>
 <li>Busques la otra mitad de la cita y la agregues al ejemplo dentro de una variable llamada <code>quoteEnd</code>.</li>
 <li>Concatenes las dos cadenas para hacer una sola cadena que contenga la cita completa. Guardes el resultado dentro de una variable llamada <code>finalQuote</code>.</li>
</ol>

<p>Verás que obtienes un error en este punto. ¿Puedes solucionar el problema con <code>quoteStart</code> para que la cita completa se muestre correctamente?</p>

<p>Intenta actualizar el código en vivo a continuación para recrear el ejemplo terminado:</p>

<p>{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings1.html", '100%', 400)}}</p>

<div class="blockIndicator note">
<p><a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/strings/strings1-download.html">Descarga el punto de partida de esta tarea</a> para trabajar en tu propio editor o en un editor en línea.</p>
</div>

<h2 id="Cadenas_2">Cadenas 2</h2>

<p>En esta tarea, se te proporcionan dos variables, <code>quote</code> y <code>substring</code>, que contienen dos cadenas. Nos gustaría que:</p>

<ol>
 <li>Recuperes la longitud de la cita y la guardes en una variable llamada <code>quoteLength</code>.</li>
 <li>Busques la posición del índice donde aparece <code>substring</code> en <code>quote</code>, y almacenes ese valor en una variable llamada <code>index</code>.</li>
 <li>Uses una combinación de las variables que tienes y las propiedades/métodos de cadena disponibles para recortar la cita original a "No me gustan los huevos verdes y el jamón", y la guardes en una variable llamada <code>revisedQuote</code>.</li>
</ol>

<p>Intenta actualizar el código en vivo a continuación para recrear el ejemplo terminado:</p>

<p>{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings2.html", '100%', 400)}}</p>

<div class="blockIndicator note">
<p><a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/strings/strings2-download.html">Descarga el punto de partida de esta tarea</a> para trabajar en tu propio editor o en un editor en línea.</p>
</div>

<h2 id="Cadenas_3">Cadenas 3</h2>

<p>En la siguiente tarea de cadenas, se te da la misma cita con la que terminaste en la tarea anterior, ¡pero está algo rota! Queremos que la arregles y actualices, así:</p>

<ol>
 <li>Cambia la letra mayúscula para corregir con mayúscula inicial la oración (todo en minúsculas, excepto la primera letra mayúscula). Almacena la nueva cita en una variable llamada <code>fixedQuote</code>.</li>
 <li>En <code>fixedQuote</code>, reemplaza "huevos verdes con jamón" con otro alimento que realmente no te guste.</li>
 <li>Hay una pequeña solución más por hacer: agrega un punto al final de la cita y guarda la versión final en una variable llamada <code>finalQuote</code>.</li>
</ol>

<p>Intenta actualizar el código en vivo a continuación para recrear el ejemplo terminado:</p>

<p>{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings3.html", '100%', 400)}}</p>

<div class="blockIndicator note">
<p><a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/strings/strings3-download.html">Descarga el punto de partida de esta tarea</a> para trabajar en tu propio editor o en un editor en línea.</p>
</div>

<h2 id="Cadenas_4">Cadenas 4</h2>

<p>En la tarea de cadena final, te hemos dado el nombre de un teorema, dos valores numéricos y una cadena incompleta (los bits que se deben agregar están marcados con asteriscos (<code>*</code>)). Queremos que cambies el valor de la cadena de la siguiente manera:</p>

<ol>
 <li>Cámbiala de un literal de cadena normal a una plantilla literal.</li>
 <li>Reemplaza los cuatro asteriscos con cuatro marcadores de posición en la plantilla literal. Estos deben ser:
  <ol>
   <li>El nombre del teorema.</li>
   <li>Los dos valores numéricos que tenemos.</li>
   <li>La longitud de la hipotenusa de un triángulo rectángulo, dado que las longitudes de los otros dos lados son iguales a los dos valores que tenemos. Deberás buscar cómo calcular esto a partir de lo que tienes. Haz el cálculo dentro del marcador de posición.</li>
  </ol>
 </li>
</ol>

<p>Intenta actualizar el código en vivo a continuación para recrear el ejemplo terminado:</p>

<p>{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/tasks/strings/strings4.html", '100%', 400)}}</p>

<div class="blockIndicator note">
<p><a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/tasks/strings/strings4-download.html">Descarga el punto de partida de esta tarea</a> para trabajar en tu propio editor o en un editor en línea.</p>
</div>

<h2 id="Evaluación_o_ayuda_adicional">Evaluación o ayuda adicional</h2>

<p>Puedes practicar estos ejemplos en los editores interactivos anteriores.</p>

<p>Si deseas que se evalúe tu trabajo o estás atascado y deseas pedir ayuda:</p>

<ol>
 <li>Coloca tu trabajo en un editor que se pueda compartir en línea, como <a href="https://codepen.io/">CodePen</a>, <a href="https://jsfiddle.net/">jsFiddle</a> o <a href="https://glitch.com/">Glitch</a>. Puedes escribir el código tú mismo o utilizar los archivos de punto de partida vinculados en las secciones anteriores.</li>
 <li>Escribe una publicación solicitando evaluación y/o ayuda en la <a href="https://discourse.mozilla.org/c/mdn/learn">categoría de aprendizaje del foro de discusión de MDN</a>. Tu publicación debe incluir:
  <ul>
   <li>Un título descriptivo como "Se busca evaluación para la prueba de habilidad de Cadenas 1".</li>
   <li>Detalles de lo que ya has probado y lo que te gustaría que hiciéramos, p. ej. si estás atascado y necesitas ayuda, o quiere una evaluación.</li>
   <li>Un enlace al ejemplo que deseas evaluar o con el que necesitas ayuda, en un editor que se pueda compartir en línea (como se mencionó en el paso 1 anterior). Esta es una buena práctica para entrar — es muy difícil ayudar a alguien con un problema de codificación si no puedes ver su código.</li>
   <li>Un enlace a la página de la tarea o evaluación real, para que podamos encontrar la pregunta con la que deseas ayuda.</li>
  </ul>
 </li>
</ol>
