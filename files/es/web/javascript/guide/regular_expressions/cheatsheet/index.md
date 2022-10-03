---
title: Hoja de referencia de sintaxis de expresiones regulares
slug: Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
tags:
  - Cheatsheet
  - Expresiones Regulares
  - Guía
  - Hoja de referencia
  - JavaScript
  - RegExp
translation_of: Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
original_slug: Web/JavaScript/Guide/Regular_Expressions/Hoja_de_referencia
---
<div>{{jsSidebar("Guía de JavaScript")}}</div>

<p><span class="seoSummary">Esta página proporciona una hoja de referencia general de todas las capacidades de la sintaxis de <code>RegExp</code> agregando el contenido de los artículos en la guía <code>RegExp</code>. Si necesitas más información sobre un tema específico, sigue el enlace del título correspondiente para acceder al artículo completo o dirígete a <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/">la guía</a>.</span></p>

<h2 id="Clases_de_caracteres"><a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">Clases de caracteres</a></h2>

<div>Si deseas contribuir a este documento, edita también <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">el artículo original</a></div>

«Tabla»

<h2 id="Aserciones"><a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions">Aserciones</a></h2>

<div>Si deseas contribuir a este documento, edita también <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions">el artículo original</a></div>

<h3 id="Aserciones_de_tipo_límite">Aserciones de tipo límite</h3>

«Tabla»

<h3 id="Otras_aserciones">Otras aserciones</h3>

<div class="blockIndicator note">
<p><strong>Nota</strong>: El caracter <code>?</code> también se puede utilizar como cuantificador.</p>
</div>

«Tabla»

<h2 id="Grupos_y_rangos"><a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">Grupos y rangos</a></h2>

<div>Si deseas contribuir a este documento, edita también <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">el artículo original</a></div>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Caracteres</th>
   <th scope="col">Significado</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><em>x</em>|<em>y</em></code></td>
   <td>
    <p>Coincide con "x" o "y". Por ejemplo, <code>/verde|roja/</code> reconoce el "verde" en "manzana verde" y "roja" en "manzana roja".</p>
   </td>
  </tr>
  <tr>
   <td><code>[xyz]<br>
    [a-c]</code></td>
   <td>
    <p>Un juego de caracteres. Coincide con cualquiera de los caracteres incluidos. Puedes especificar un rango de caracteres mediante el uso de un guión, pero si el guión aparece como el primero o último caracter entre corchetes, se toma como un guión literal para incluirse en el juego de caracteres como un caracter normal. También es posible incluir una clase de caracteres en un juego de caracteres.</p>

    <p>Por ejemplo, <code>[abcd]</code> es lo mismo que <code>[a-d]</code>. Coincide con la "b" en "brisket" y la "c" en "chop".</p>

    <p>Por ejemplo, <code>[abcd-]</code> y <code>[-abcd]</code> reconoce la "b" en "brisket", la "c" en "chop" y el "-" (guión) en "non-profit".</p>

    <p>Por ejemplo, <code>[\w-]</code> es lo mismo que <code>[A-Za-z0-9_-]</code>. Ambos reconocen la "b" en "brisket", la "c" en "chop" y la "n" en "non-profit".</p>
   </td>
  </tr>
  <tr>
   <td>
    <p><code>[^xyz]<br>
     [^a-c]</code></p>
   </td>
   <td>
    <p>Un juego de caracteres negado o complementado. Es decir, hallan cualquier cosa que no esté encerrada entre corchetes. Puedes especificar un rango de caracteres mediante el uso de un guión, pero si el guión aparece como el primero o último caracter entre corchetes, se toma como un guión literal para incluirse en el juego de caracteres como un caracter normal. Por ejemplo, <code>[^abc]</code> es lo mismo que <code>[^a-c]</code>. Inicialmente halla la "o" en "bacon" y la "h" en "chuleta".</p>

    <div>
    <p>El caracter ^ además puede indicar el <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Boundaries">comienzo de la entrada</a>.</p>
    </div>
   </td>
  </tr>
  <tr>
   <td><code>(<em>x</em>)</code></td>
   <td>
    <p><strong>Grupo de captura</strong>: Encuentra la <code><em>x</em></code> y la recuerda. Por ejemplo, <code>/(foo)/</code> encuentra y recuerda "foo" en "foo bar". </p>

    <p>Una expresión regular puede tener varios grupos de captura. En los resultados, coincide con los grupos capturados normalmente en un arreglo cuyos miembros están en el mismo orden que los paréntesis de la izquierda en el grupo capturado. Este suele ser solo el orden de los propios grupos capturados. Esto se vuelve importante cuando los grupos capturados están anidados. Se accede a las coincidencias utilizando el índice de los elementos del resultado (<code>[1], ..., [n]</code>) o desde las propiedades predefinidas del objeto <code>RegExp</code> (<code>$1, ..., $9</code>).</p>

    <p>Los grupos de captura tienen una penalización de rendimiento. Si no necesitas que se recupere la subcadena coincidente, prefiere los paréntesis que no capturen (ve más abajo).</p>

    <p><code><a href="/es/docs/Web/JavaScript/Reference/Global_Objects/String/match">String.match()</a></code> no devolverá grupos si el indicador <code>/.../g</code> está configurado. Sin embargo, aún puedes usar <code><a href="/es/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll">String.matchAll()</a></code> para obtener todas los encontrados.</p>
   </td>
  </tr>
  <tr>
   <td><code>\<em>n</em></code></td>
   <td>
    <p>Donde "n" es un número entero positivo. Una referencia posterior a la última subcadena que coincide con el paréntesis n en la expresión regular (contando los paréntesis izquierdos). Por ejemplo, <code>/apple(,)\sorange\1/</code> coincide con "apple, orange" en "apple, orange, cherry, peach".</p>
   </td>
  </tr>
  <tr>
   <td>\k&lt;Name&gt;</td>
   <td>
    <p>Una referencia inversa a la última subcadena encontrada con el grupo de captura <strong>N</strong><strong>ombrado</strong> especificado por <code>&lt;Name&gt;</code>.</p>

    <p>Por ejemplo, <code>/(?&lt;title&gt;\w+), yes \k&lt;title&gt;/</code> concuerda con "Sir, yes Sir" en "Do you copy? Sir, yes Sir!".</p>

    <div>
    <p><code>\k</code> aquí se usa literalmente para indicar el comienzo de una referencia a un grupo de captura nombrado.</p>
    </div>
   </td>
  </tr>
  <tr>
   <td><code>(?&lt;Name&gt;x)</code></td>
   <td>
    <p><strong>Grupo de captura nombrado</strong>: reconoce la "x" y la almacena en la propiedad <code>group</code> del resultado devuelto bajo el nombre especificado por <code>&lt;Name&gt;</code>. Los corchetes angulares (<code>&lt;</code> y <code>&gt;</code>) son obligatorios para el nombre del grupo.</p>

    <p>Por ejemplo, para extraer el código de área de Estados Unidos de un número de teléfono, podríamos usar <code>/\((?&lt;area&gt;\d\d\d)\)/</code>. El número resultante debería aparecer en <code>matches.groups.area</code>.</p>
   </td>
  </tr>
  <tr>
   <td><code>(?:<em>x</em>)</code></td>
   <td><strong>Grupo sin captura</strong>: reconoce la "x" pero no recuerda el resultado. La subcadena encontrada no se puede recuperar de los elementos del arreglo resultante (<code>[1], ..., [n]</code>) o de las propiedades predefinidas del objeto <code>RegExp</code> (<code>$1, ..., $9</code>).</td>
  </tr>
 </tbody>
</table>

<h2 id="Cuantificadores"><a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers">Cuantificadores</a></h2>

<div>Si deseas contribuir a este documento, edita también <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers">el artículo original</a></div>

<div class="blockIndicator note">
<p><strong>Nota</strong>: A continuación, <em>elemento</em> se refiere no solo a caracteres singulares, sino que también incluye <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">clases de caracteres</a>, <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes">escapes de propiedad Unicode</a>, <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">grupos y rangos</a>.</p>
</div>

«Tabla»

<h2 id="Escapa_la_propiedad_Unicode"><a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes">Escapa la propiedad Unicode</a></h2>

<div>Si deseas contribuir a este documento, edita también <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes">el artículo original</a></div>

<pre class="brush: js notranslate">// Valores no binarios
\p{<em>UnicodePropertyValue</em>}
\p{<em>UnicodePropertyName</em>=<em>UnicodePropertyValue</em>}

// Valores binarios y no binarios
\p{<em>UnicodeBinaryPropertyName</em>}

// Negación: \P is negado \p
\P{<em>UnicodePropertyValue</em>}
\P{<em>UnicodeBinaryPropertyName</em>}
</pre>

<dl>
 <dt>UnicodeBinaryPropertyName</dt>
 <dd>El nombre de una <a href="https://tc39.es/ecma262/#table-binary-unicode-properties">propiedad binaria</a>. Por ejemplo: <code><a href="https://unicode.org/reports/tr18/#General_Category_Property">ASCII</a></code>, <code><a href="https://unicode.org/reports/tr44/#Alphabetic">Alpha</a></code>, <code>Math</code>, <code><a href="https://unicode.org/reports/tr44/#Diacritic">Diacrítica</a></code>, <code><a href="https://unicode.org/reports/tr51/#Emoji_Properties">Emoji</a></code>, <code><a href="https://unicode.org/reports/tr44/#Hex_Digit">Hex_Digit</a></code>, <code>Math</code>, <code><a href="https://unicode.org/reports/tr44/#White_Space">Espacio_blanco</a></code>, etc. Consulta <a href="https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt">Unicode Data PropList.txt</a> para obtener más información.</dd>
 <dt>UnicodePropertyName</dt>
 <dd>El nombre de una propiedad <a href="https://tc39.es/ecma262/#table-nonbinary-unicode-properties">no binaria</a>:

<ul>
 <li><a href="https://unicode.org/reports/tr18/#General_Category_Property">General_Category</a> (<code>gc</code>)</li>
 <li><a href="https://unicode.org/reports/tr24/#Script">Script</a> (<code>sc</code>)</li>
 <li><a href="https://unicode.org/reports/tr24/#Script_Extensions">Script_Extensions</a> (<code>scx</code>)</li>
</ul>
</dd>
</dl>

<p>Consulta también <a href="https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt">PropertyValueAliases.txt</a></p>

<dl>
 <dt>UnicodePropertyValue</dt>
 <dd>Uno de los fragmentos enumerados en la sección Valores, más adelante. Muchos valores tienen alias o abreviaturas (por ejemplo, el valor <code>Decimal_Number</code> para la propiedad <code>General_Category</code> se puede escribir cómo <code>Nd</code>, <code>digit</code>, o <code>Decimal_number</code>). Para la mayoría de los valores, la parte <em><code>UnicodePropertyName</code> </em> y el signo igual se pueden omitir. Si se especifica un <em><code>UnicodePropertyName</code></em>, el valor debe corresponder al tipo de propiedad proporcionado.</dd>
</dl>

<div class="blockIndicator note">
<p><strong>Nota</strong>: Puesto que hay muchas propiedades y valores disponibles, no las describiremos exhaustivamente aquí, sino que proporcionaremos varios ejemplos.</p>
</div>
