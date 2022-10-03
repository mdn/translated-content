---
title: Aserciones
slug: Web/JavaScript/Guide/Regular_Expressions/Assertions
tags:
  - Aserciones
  - Expresiones Regulares
  - Guía
  - JavaScript
  - Referencia
  - regex
translation_of: Web/JavaScript/Guide/Regular_Expressions/Assertions
original_slug: Web/JavaScript/Guide/Regular_Expressions/Aserciones
---
<p>{{jsSidebar("JavaScript Guide")}}</p>

<p>Las aserciones incluyen límites, que indican el comienzo y el final de líneas y palabras, y otros patrones que indican de alguna manera que el reconocimiento es posible (incluidas las expresiones anticipadas, condicionales e inversas).</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-assertions.html", "taller")}}</div>

<h2 id="Tipos">Tipos</h2>

<div>La siguiente sección también está duplicada en {{JSxRef("../Guide/Regular_Expressions/Hoja_de_referencia", "esta hoja de trucos")}}. No olvides editarla también, ¡gracias!</div>

<h3 id="Aserciones_de_tipo_límite">Aserciones de tipo límite</h3>

«Tabla»

<h3 id="Otras_aserciones">Otras aserciones</h3>

<div class="blockIndicator note">
<p><strong>Nota</strong>: El caracter <code>?</code> también se puede utilizar como cuantificador.</p>
</div>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Caracteres</th>
   <th scope="col">Significado</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>x(?=y)</code></td>
   <td>
    <p><strong>Aserción anticipada</strong>: Coincide con "x" solo si "x" va seguida de "y". Por ejemplo, <code>/Jack(?=Sprat)/</code> coincide con "Jack" solo si va seguido de "Sprat".<br>
     <code>/Jack(?=Sprat|Frost)/</code> coincide con "Jack" solo si va seguido de "Sprat" o "Frost". Sin embargo, ni "Sprat" ni "Frost" forman parte del resultado.</p>
   </td>
  </tr>
  <tr>
   <td><code>x(?!y)</code></td>
   <td>
    <p><strong>Aserción anticipada negativa</strong>: Coincide con "x" solo si "x" <span> no está seguida de </span>"y"<span>.</span> Por ejemplo, <code>/\d+(?!\.)/</code><span> coincide con un número solo si no va seguido de un punto decimal. </span><code>/\d+(?!\.)/.exec('3.141')</code> coincide con "141" pero no con "3."</p>
   </td>
  </tr>
  <tr>
   <td><code>(?&lt;=y)x</code></td>
   <td>
    <p><strong>Aserción de búsqueda inversa</strong>: coincide con "x" solo si "x" está precedida por "y". Por ejemplo, <code>/(?&lt;=Jack)Sprat/</code><span> coincide con "Sprat" sólo si va precedida de "Jack". </span><code>/(?&lt;=Jack|Tom)Sprat/</code> coincide con "Sprat" solo si va precedido de "Jack" o "Tom". Sin embargo, ni "Jack" ni "Tom" forman parte del resultado.</p>
   </td>
  </tr>
  <tr>
   <td><code>(?&lt;!y)x</code></td>
   <td>
    <p><strong>Aserción de búsqueda inversa negativa</strong>: coincide con "x" solo si "x" <em>no</em> está precedida por "y". Por ejemplo, <code>/(?&lt;!-)\d+/</code><span> coincide con un número solo si no está precedido por un signo de menos. </span><code>/(? coincide con "3". <code>/(?&lt;!-)\d+/.exec('-3')</code> no se encuentra la coincidencia porque el número está precedido por el signo menos.</code></p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Ejemplo_de_descripción_de_tipo_límite">Ejemplo de descripción de tipo límite</h3>

<pre class="brush: js notranslate">// Usa límites Regex para arreglar cadenas con errores.
let multilineaIncorrecta = `tey, la brillante manzena vered
toy cuelga en una rama del arbol vered`;

// 1) Usa ^ para corregir la coincidencia al principio de la cadena y justo después de la nueva línea.
multilineaIncorrecta = multilineaIncorrecta.replace(/^t/gim,'h');
console.log(1, multilineaIncorrecta); // corrige 'tey', 'toy' =&gt; 'hey', 'hoy'.

// 2) Usa $ para arreglar el reconocimiento al final del texto.
multilineaIncorrecta = multilineaIncorrecta.replace(/ed$/gim,'de');
console.log(2, multilineaIncorrecta); // corrige  'vered' =&gt; 'verde'.

// 3) Usa \b para encontrar los caracteres justo en el borde entre una palabra y un espacio.
multilineaIncorrecta = multilineaIncorrecta.replace(/\ba/gim,'á');
console.log(3, multilineaIncorrecta); // corrige  'arbol' sin tocar nada más.

// 4) Usa \B para encontrar los caracteres dentro de los bordes de una entidad.
multilineaCorrecta = multilineaIncorrecta.replace(/\Ben/gim,'an');
console.log(4, multilineaCorrecta); // corrige  'manzena' pero no toca 'en'.
</pre>

<h3 id="Busca_al_comienzo_de_la_entrada_usando_un_caracter_de_control">Busca al comienzo de la entrada usando un caracter de control <code>^</code></h3>

<p>Usa <code>^</code> para hacer coincidir al comienzo de la entrada. En este ejemplo, podemos obtener las frutas que comienzan con 'A' con una expresión regular <code>/^A/</code>. Para seleccionar las frutas adecuadas, podemos utilizar el método {{JSxRef("Objetos_globales/Array/filter", "filter")}} con un {{JSxRef("Funciones/Arrow_functions", "función flecha")}}.</p>

<pre class="brush: js notranslate">let frutas = ["Manzana", "Sandía", "Naranja", "Aguacate", "Fresa", "Melón"];

// Selecciona frutas que comiencen con 'M' por la Regex /^M/.
// Aquí se usa el símbolo de control '^' solo en un rol: Reconocer desde el inicio una entrada.

let frutasEmpiezanConM = frutas.filter(fruta =&gt; /^M/.test(fruta));
console.log(frutasEmpiezanConM); // [ 'Manzana', 'Melón' ]</pre>

<p>En el segundo ejemplo, <code>^</code> se usa tanto para hacer coincidir al comienzo de la entrada como para crear conjuntos de caracteres negados o complementados cuando se usa dentro de {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "grupos")}}.</p>

<pre class="brush: js notranslate">let frutas = ["Manzana", "Sandía", "Naranja", "Aguacate", "Fresa", "Melón"];

// Seleccionar frutas que no comiencen por 'M' con la regexp /^[^M]/.
// En este ejemplo, se representan dos significados del símbolo de control '^':
// 1) Inicio coincidente de la entrada
// 2) Un conjunto de caracteres negado o complementado: [^M]
// Es decir, coincide con cualquier cosa que no esté encerrado entre los corchetes.

let frutasNoEmpiezanConM = frutas.filter(fruta =&gt; /^[^M]/.test(fruta));

console.log(frutasNoEmpiezanConM); // [ "Sandía", "Naranja", "Aguacate", "Fresa" ]</pre>

<h3 id="Reconoce_el_límite_de_palabra">Reconoce el límite de palabra</h3>

<pre class="brush: js notranslate">let frutasConDescripcion = ["Manzana roja", "Piña amarilla", "Aguacate verde"];

// Selecciona descripciones que contengan terminaciones de palabras 'ja' o 'de':
let deJaSeleccion = frutasConDescripcion.filter(descr =&gt; /(de|ja)\b/.test(descr));

console.log(deJaSeleccion); // ["Manzana roja", "Aguacate verde"]</pre>

<h3 id="Aserción_anticipada">Aserción anticipada</h3>

<pre class="brush: js notranslate">// JS aserción anticipada x(?=Y)

let regex = /Primer(?= prueba)/g;

console.log('Primer prueba'.match(regex)); // [ 'Primer' ]
console.log('Primer melocotón'.match(regex)); // null
console.log('Esta es mi Primer prueba en un año.'.match(regex)); // [ 'Primer' ]
console.log('Este es mi Primer melocotón en un mes.'.match(regex)); // null
</pre>

<h3 id="Aserción_anticipada_negativa_básica">Aserción anticipada negativa básica</h3>

<p>Por ejemplo, <code>/\d+(?!\.)/</code><span> coincide con un número solo si no va seguido de un punto decimal. </span><code>/\d+(?!\.)/.exec('3.141')</code> coincide con "141" pero no con "3."</p>

<pre class="brush: js notranslate">console.log(/\d+(?!\.)/g.exec('3.141')); // [ '141', index: 2, input: '3.141' ]
</pre>

<h3 id="Diferente_significado_del_uso_de_la_combinación_!_en_aserciones_y_rangos">Diferente significado del uso de la combinación '?!' en aserciones y rangos</h3>

<p>Diferente significado del uso de la combinación <code>?!</code> en {{JSxRef("../Guide/Regular_Expressions/Aserciones", "Aserciones")}} <code>/x(?!y)/</code> y de <code>[^?!]</code> en {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "Rangos")}}.</p>

<pre class="brush: js notranslate">let naranjaNoLimon = "¿Quieres beber jugo de naranja? ¡Sí, no quiero tomar jugo de limón!";

// Diferente significado del uso de la combinación '?!' en Aserciones /x(?!y)/ y [^?!] en Rangos.
let regexNoSeleccionaLimon = /[^?!]+beber(?! de limón)[^?!]+[?!]/gi
console.log(naranjaNoLimon.match(regexNoSeleccionaLimon)); // [ '¿Quieres beber jugo de naranja?' ]

let regexNoSeleccionaNaranja = /[^?!]+tomar(?! de naranja)[^?!]+[?!]/gi
console.log(naranjaNoLimon.match(regexNoSeleccionaNaranja)); // [ ' ¡Sí, no quiero tomar jugo de limón!' ]
</pre>

<h3 id="Aserción_inversa">Aserción inversa</h3>

<pre class="brush: js notranslate">let naranjas = ['naranja madura A', 'naranja verde B', 'naranja madura C',];

let naranjas_maduras = naranjas.filter(fruta =&gt; fruta.match(/(?&lt;=naranja) madura/));
console.log(naranjas_maduras); // [ 'naranja madura A ', 'naranja madura C' ]
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-assertion', 'RegExp: Aserciones')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_del_navegador">Compatibilidad del navegador</h2>

<p>Para obtener información sobre la compatibilidad del navegador, consulta la {{JSxRef("../Guide/Regular_Expressions", "tabla principal de compatibilidad de expresiones regulares", "#Compatibilidad_del_navegador")}}.</p>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li>{{JSxRef("../Guide/Regular_Expressions", "Guía de expresiones regulares")}}
  <ul>
   <li>{{JSxRef("../Guide/Regular_Expressions/Character_Classes", "Clases de caracteres")}}</li>
   <li>{{JSxRef("../Guide/Regular_Expressions/Cuantificadores", "Cuantificadores")}}</li>
   <li>{{JSxRef("../Guide/Regular_Expressions/Escapes_de_propiedades_Unicode", "Escapes de propiedades Unicode")}}</li>
   <li>{{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "Grupos y rangos")}}</li>
  </ul>
 </li>
 <li>{{JSxRef("Objetos_globales/RegExp", "El constructor RegExp()")}}</li>
</ul>
