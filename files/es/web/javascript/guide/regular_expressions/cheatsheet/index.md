---
title: Hoja de referencia de sintaxis de expresiones regulares
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
---

{{jsSidebar("Guía de JavaScript")}}

Esta página proporciona una hoja de referencia general de todas las capacidades de la sintaxis de `RegExp` agregando el contenido de los artículos en la guía `RegExp`. Si necesitas más información sobre un tema específico, sigue el enlace del título correspondiente para acceder al artículo completo o dirígete a [la guía](/es/docs/Web/JavaScript/Guide/Regular_Expressions/).

## [Clases de caracteres](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)

Si deseas contribuir a este documento, edita también [el artículo original](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)

<table class="standard-table">
    <thead>
     <tr>
      <th scope="col">Caracteres</th>
      <th scope="col">Significado</th>
     </tr>
    </thead>
    <tbody>
    </tbody>
    <tbody>
     <tr>
      <td><code>.</code></td>
      <td>
       <p>Tiene uno de los siguientes significados:</p>
       <ul>
        <li>Encuentra cualquier caracter único <em>excepto</em> terminadores de línea: <code>\n</code>, <code>\r</code>, <code>\u2028</code> o <code>\u2029</code>. Por ejemplo, <code>/.y/</code> reconoce "my" y "ay", pero no "yes", en "yes make my day".</li>
        <li>Dentro de un juego de caracteres, el punto pierde su significado especial y concuerda con un punto literal.</li>
       </ul>
       <p>Ten en cuenta que el indicador multilínea <code>m</code> no cambia el comportamiento del punto. Por lo tanto, para buscar en un patrón multilínea, puedes usar el juego de caracteres <code>[^]</code> — este encontrará con cualquier caracter, incluidas las nuevas líneas.</p>
       <p>ES2018 agregó el indicador <code>s</code> "<em>dotAll</em>", que permite que el punto también concuerde con los terminadores de línea.</p>
      </td>
     </tr>
     <tr>
      <td><code>\d</code></td>
      <td>
       <p>Busca cualquier dígito (número arábigo). Equivalente a <code>[0-9]</code>. Por ejemplo, <code>/\d/</code> o <code>/[0-9]/</code> encuentra el "2" en "B2 es el número de suite".</p>
      </td>
     </tr>
     <tr>
      <td><code>\D</code></td>
      <td>
       <p>Busca cualquier caracter que no sea un dígito (número arábigo). Equivalente a <code>[^0-9]</code>. Por ejemplo, <code>/\D/</code> o <code>/[^0-9]/</code> encuentra la "B" en "B2 es el número de suite".</p>
      </td>
     </tr>
     <tr>
      <td><code>\w</code></td>
      <td>
       <p>Busca cualquier caracter alfanumérico del alfabeto latino básico, incluido el caracter de subrayado. Equivalente a <code>[A-Za-z0-9_]</code>. Por ejemplo, <code>/\w/</code> encuentra la "m" en "manzana", el "5" en "$5.28" y el "3" en "3D".</p>
      </td>
     </tr>
     <tr>
      <td><code>\W</code></td>
      <td>
       <p>Busca cualquier caracter que no sea un caracter de palabra del alfabeto latino básico. Equivalente a <code>[^A-Za-z0-9_]</code>. Por ejemplo, <code>/\W/</code> o <code>/[^A-Za-z0-9_]/</code> encuentra el caracter "%" en "50%".</p>
      </td>
     </tr>
     <tr>
      <td><code>\s</code></td>
      <td>
       <p>Busca un solo caracter de espacio en blanco, incluido el espacio, tabulación, avance de página, avance de línea y otros espacios Unicode. Equivalente a <code>[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Por ejemplo, <code>/\s\w*/</code> reconoce " bar" en "foo bar".</p>
      </td>
     </tr>
     <tr>
      <td><code>\S</code></td>
      <td>
       <p>Busca un solo caracter que no sea un espacio en blanco. Equivalente a <code>[^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Por ejemplo, <code>/\S\w*/</code> encuentra "foo" en "foo bar".</p>
      </td>
     </tr>
     <tr>
      <td><code>\t</code></td>
      <td>Coincide con una tabulación horizontal.</td>
     </tr>
     <tr>
      <td><code>\r</code></td>
      <td>Coincide con un retorno de carro.</td>
     </tr>
     <tr>
      <td><code>\n</code></td>
      <td>Coincide con un salto de línea.</td>
     </tr>
     <tr>
      <td><code>\v</code></td>
      <td>Coincide con una tabulación vertical.</td>
     </tr>
     <tr>
      <td><code>\f</code></td>
      <td>Coincide con un caracter de avance de página.</td>
     </tr>
     <tr>
      <td><code>[\b]</code></td>
      <td>Coincide con un caracter de retroceso. Si estás buscando el caracter de límite de palabra (<code>\b</code>), consulta <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Boundaries">Límites</a>.</td>
     </tr>
     <tr>
      <td><code>\0</code></td>
      <td>Coincide con un caracter <code>NUL</code>. No sigue a este con otro dígito.</td>
     </tr>
     <tr>
      <td><code>\c<em>X</em></code></td>
      <td>
       <p>Coincide con un caracter de control usando <a href="https://en.wikipedia.org/wiki/Caret_notation">notación de acento circunflejo</a>, donde "X" es una letra de la A a la Z (correspondiente a los puntos de código <code>U+0001</code><em>-</em><code>U+001F</code>). Por ejemplo, <code>/\cM/</code> reconoce el caracter "\r" en "\r\n".</p>
      </td>
     </tr>
     <tr>
      <td><code>\x<em>hh</em></code></td>
      <td>Busca el caracter con el código <code><em>hh</em></code> (dos dígitos hexadecimales).</td>
     </tr>
     <tr>
      <td><code>\u<em>hhhh</em></code></td>
      <td>Busca una unidad de código UTF-16 con el valor <code><em>hhhh</em></code> (cuatro dígitos hexadecimales).</td>
     </tr>
     <tr>
      <td><code>\u<em>{hhhh}</em> o <em>\u{hhhhh}</em></code></td>
      <td>(Solo cuando se establece el indicador <code>u</code>). Busca el caracter con el valor Unicode <code>U+<em>hhhh</em></code> o <code>U+<em>hhhhh</em></code> (dígitos hexadecimales).</td>
     </tr>
     <tr>
      <td><code>\</code></td>
      <td>
       <p>Indica que el siguiente caracter se debe tratar de manera especial o "escaparse". Se comporta de dos formas.</p>
       <ul>
        <li>Para los caracteres que generalmente se tratan literalmente, indica que el siguiente caracter es especial y no se debe interpretar literalmente. Por ejemplo, <code>/b/</code> reconoce el caracter "b". Al colocar una barra invertida delante de "b", es decir, usando <code>/\b/</code>, el caracter se vuelve especial para significar que concuerda con el límite de una palabra.</li>
        <li>Para los caracteres que generalmente se tratan de manera especial, indica que el siguiente caracter no es especial y se debe interpretar literalmente. Por ejemplo, "*" es un caracter especial que significa que deben reconocer 0 o más ocurrencias del caracter anterior; por ejemplo, <code>/a*/</code> significa reconocer 0 o más "a"s. Para emparejar el <code>*</code> literal, precédelo con una barra invertida; por ejemplo, <code>/a\*/</code> concuerda con "a*".</li>
       </ul>
       <p>Ten en cuenta que algunos caracteres como <code>:</code>, <code>-</code>, <code>@</code>, etc. no tienen un significado especial cuando se escapan ni cuando no se escapan. Las secuencias de escape como <code>\:</code>, <code>\-</code>, <code>\@</code> serán equivalentes a sus equivalentes de caracteres literales sin escapar en expresiones regulares. Sin embargo, en las expresiones regulares con <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags_2">indicador Unicode</a>, esto provocará un error de <em>escape de identidad no válido</em>. Esto se hace para asegurar la compatibilidad con el código existente que usa nuevas secuencias de escape como <code>\p</code> o <code>\k</code>.</p>
       <div class="blockIndicator note">
       <p>Para reconocer este caracter literalmente, escápalo consigo mismo. En otras palabras, para buscar <code>\</code> usa <code>/\\/</code>.</p>
       </div>
      </td>
     </tr>
    </tbody>
   </table>

## [Aserciones](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

Si deseas contribuir a este documento, edita también [el artículo original](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

### Aserciones de tipo límite

   <table class="standard-table">
    <thead>
     <tr>
      <th scope="col">Caracteres</th>
      <th scope="col">Significado</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td><code>^</code></td>
      <td>
       <p>Coincide con el comienzo de la entrada. Si el indicador multilínea se establece en <code>true</code>, también busca inmediatamente después de un caracter de salto de línea. Por ejemplo, <code>/^A/</code> no reconoce la "A" en "an A", pero encuentra la primera "A" en "An A".</p>
       <div class="blockIndicator note">
       <p>Este caracter tiene un significado diferente cuando aparece al comienzo de un <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">grupo</a>.</p>
       </div>
      </td>
     </tr>
     <tr>
      <td><code>$</code></td>
      <td>
       <p>Coincide con el final de la entrada. Si el indicador multilínea se establece en <code>true</code>, también busca hasta inmediatamente antes de un caracter de salto de línea. Por ejemplo, <code>/a$/</code> no reconoce la "t" en "eater", pero sí en "eat".</p>
      </td>
     </tr>
     <tr>
      <td><code>\b</code></td>
      <td>
       <p>Marca el límite de una palabra. Esta es la posición en la que un caracter de palabra no va seguido o precedido por otro caracter de palabra, por ejemplo, entre una letra y un espacio. Ten en cuenta que el límite de una palabra encontrada no se incluye en el resultado. En otras palabras, la longitud de un límite de palabra encontrada es cero.</p>
       <p>Ejemplos:</p>
       <ul>
        <li><code>/\bm/</code> reconoce la "m" en "moon".</li>
        <li><code>/oo\b/</code> no reconoce "oo" en "moon", porque "oo" va seguido de "n", que es un caracter de palabra.</li>
        <li><code>/oon\b/</code> encuentra "oon" en "moon", porque "oon" es el final de la cadena, por lo que no va seguido de un caracter de palabra.</li>
        <li><code>/\w\b\w/</code> nunca encontrará nada, porque un caracter de palabra nunca puede ir seguido de un caracter que no sea de palabra y otro de palabra.</li>
       </ul>
       <p>Para encontrar un caracter de retroceso (<code>[\b]</code>), consulta <a href="/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">Clases de caracteres</a>.</p>
      </td>
     </tr>
     <tr>
      <td><code>\B</code></td>
      <td>
       <p>Coincide con un límite sin palabra. Esta es una posición en la que el caracter anterior y siguiente son del mismo tipo: ambos deben ser palabras o ambos deben ser no palabras, por ejemplo, entre dos letras o entre dos espacios. El principio y el final de una cadena se consideran no palabras. Igual que el límite de palabras encontradas, el límite sin palabras reconocidas tampoco se incluye en el resultado. Por ejemplo, <code>/\Bon/</code> reconoce "on" en "at noon", y <code>/ye\B/</code> encuentra "ye" en "possibly yesterday".</p>
      </td>
     </tr>
    </tbody>
   </table>

### Otras aserciones

> **Nota:** El caracter `?` también se puede utilizar como cuantificador.

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
       <p><strong>Aserción anticipada</strong>: Coincide con "x" solo si "x" va seguida de "y". Por ejemplo, /<code>Jack(?=Sprat)/</code> reconocerá a "Jack" solo si va seguida de "Sprat".<br>
        <code>/Jack(?=Sprat|Frost)/</code> encontrará a "Jack" solo si va seguida de "Sprat" o "Frost". Sin embargo, ni "Sprat" ni "Frost" forman parte del resultado.</p>
      </td>
     </tr>
     <tr>
      <td><code>x(?!y)</code></td>
      <td>
       <p><strong>Aserción de búsqueda anticipada negativa</strong>: reconoce la "x" solo si la "x" no va seguida de "y". Por ejemplo, <code>/\d+(?!\.)/</code> reconoce un número solo si no va seguido de un punto decimal. <code>/\d+(?!\.)/.exec('3.141')</code> halla el "141" pero no el "3".</p>
      </td>
     </tr>
     <tr>
      <td><code>(?&lt;=y)x</code></td>
      <td>
       <p><strong>Aserción de búsqueda inversa</strong>: encontrará "x" solo si "x" está precedida por "y". Por ejemplo, <code>/(?&lt;=Jack)Sprat/</code> reconoce a "Sprat" solo si está precedido por "Jack". <code>/(?&lt;=Jack|Tom)Sprat/</code> empareja "Sprat" solo si está precedido por "Jack" o "Tom". Sin embargo, ni "Jack" ni "Tom" forman parte del resultado.</p>
      </td>
     </tr>
     <tr>
      <td><code>(?&lt;!y)x</code></td>
      <td>
       <p><strong>Aserción de búsqueda inversa negativa</strong>: Reconoce la "x" solo si "x" no está precedida por "y". Por ejemplo, <code>/(?&lt;!-)\d+/</code> encuentra un número solo si no está precedido por un signo menos. <code>/(?&lt;!-)\d+/.exec('3')</code> encuentra el "3". <code>/(?&lt;!-)\d+/.exec('-3')</code> no lo reconoce porque el número está precedido por el signo menos.</p>
      </td>
     </tr>
    </tbody>
   </table>

## [Grupos y rangos](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)

Si deseas contribuir a este documento, edita también [el artículo original](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)

| Caracteres      | Significado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `x\|y`          | Coincide con "x" o "y". Por ejemplo, `/verde\|roja/` reconoce el "verde" en "manzana verde" y "roja" en "manzana roja".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `[xyz] [a-c]`   | Un juego de caracteres. Coincide con cualquiera de los caracteres incluidos. Puedes especificar un rango de caracteres mediante el uso de un guión, pero si el guión aparece como el primero o último caracter entre corchetes, se toma como un guión literal para incluirse en el juego de caracteres como un caracter normal. También es posible incluir una clase de caracteres en un juego de caracteres.Por ejemplo, `[abcd]` es lo mismo que `[a-d]`. Coincide con la "b" en "brisket" y la "c" en "chop".Por ejemplo, `[abcd-]` y `[-abcd]` reconoce la "b" en "brisket", la "c" en "chop" y el "-" (guión) en "non-profit".Por ejemplo, `[\w-]` es lo mismo que `[A-Za-z0-9_-]`. Ambos reconocen la "b" en "brisket", la "c" en "chop" y la "n" en "non-profit".                                                                                                                                                                                                                                                                                                                                                                                                      |
| `[^xyz] [^a-c]` | Un juego de caracteres negado o complementado. Es decir, hallan cualquier cosa que no esté encerrada entre corchetes. Puedes especificar un rango de caracteres mediante el uso de un guión, pero si el guión aparece como el primero o último caracter entre corchetes, se toma como un guión literal para incluirse en el juego de caracteres como un caracter normal. Por ejemplo, `[^abc]` es lo mismo que `[^a-c]`. Inicialmente halla la "o" en "bacon" y la "h" en "chuleta".El caracter ^ además puede indicar el [comienzo de la entrada](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Boundaries).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `(x)`           | **Grupo de captura**: Encuentra la `x` y la recuerda. Por ejemplo, `/(foo)/` encuentra y recuerda "foo" en "foo bar".Una expresión regular puede tener varios grupos de captura. En los resultados, coincide con los grupos capturados normalmente en un arreglo cuyos miembros están en el mismo orden que los paréntesis de la izquierda en el grupo capturado. Este suele ser solo el orden de los propios grupos capturados. Esto se vuelve importante cuando los grupos capturados están anidados. Se accede a las coincidencias utilizando el índice de los elementos del resultado (`[1], ..., [n]`) o desde las propiedades predefinidas del objeto `RegExp` (`$1, ..., $9`).Los grupos de captura tienen una penalización de rendimiento. Si no necesitas que se recupere la subcadena coincidente, prefiere los paréntesis que no capturen (ve más abajo).[`String.match()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/match) no devolverá grupos si el indicador `/.../g` está configurado. Sin embargo, aún puedes usar [`String.matchAll()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) para obtener todas los encontrados. |
| `\n`            | Donde "n" es un número entero positivo. Una referencia posterior a la última subcadena que coincide con el paréntesis n en la expresión regular (contando los paréntesis izquierdos). Por ejemplo, `/apple(,)\sorange\1/` coincide con "apple, orange" en "apple, orange, cherry, peach".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| \k\<Name>       | Una referencia inversa a la última subcadena encontrada con el grupo de captura **Nombrado** especificado por `<Name>`.Por ejemplo, `/(?<title>\w+), yes \k<title>/` concuerda con "Sir, yes Sir" en "Do you copy? Sir, yes Sir!". `\k` aquí se usa literalmente para indicar el comienzo de una referencia a un grupo de captura nombrado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `(?<Name>x)`    | **Grupo de captura nombrado**: reconoce la "x" y la almacena en la propiedad `group` del resultado devuelto bajo el nombre especificado por `<Name>`. Los corchetes angulares (`<` y `>`) son obligatorios para el nombre del grupo.Por ejemplo, para extraer el código de área de Estados Unidos de un número de teléfono, podríamos usar `/\((?<area>\d\d\d)\)/`. El número resultante debería aparecer en `matches.groups.area`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `(?:x)`         | **Grupo sin captura**: reconoce la "x" pero no recuerda el resultado. La subcadena encontrada no se puede recuperar de los elementos del arreglo resultante (`[1], ..., [n]`) o de las propiedades predefinidas del objeto `RegExp` (`$1, ..., $9`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## [Cuantificadores](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)

Si deseas contribuir a este documento, edita también [el artículo original](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)

> **Nota:** A continuación, _elemento_ se refiere no solo a caracteres singulares, sino que también incluye [clases de caracteres](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes), [escapes de propiedad Unicode](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes), [grupos y rangos](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges).

   <table class="standard-table">
    <thead>
     <tr>
      <th scope="col">Caracteres</th>
      <th scope="col">Significado</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td><code><em>x</em>*</code></td>
      <td>
       <p>Concuerda 0 o más veces con el elemento "x" anterior. Por ejemplo, <code>/bo*/</code> reconoce a "boooo" en "Un fantasma booooed" y "b" en "A bird warbled", pero nada en "Una cabra gruñó".</p>
      </td>
     </tr>
     <tr>
      <td><code><em>x</em>+</code></td>
      <td>
       <p>Encuentra 1 o más veces el elemento "x" anterior Equivalente a <code>{1,}</code>. Por ejemplo, <code>/a+/</code> encuentra la "a" en "candy" y todas las "a"es en "caaaaaaandy".</p>
      </td>
     </tr>
     <tr>
      <td><code><em>x</em>?</code></td>
      <td>
       <p>Halla 0 o 1 vez el elemento "x" anterior. Por ejemplo, <code>/e?Le?/</code> reconoce a "el" en "ángel" y a "le" en "angle".</p>
       <p>Si se usa inmediatamente después de cualquiera de los cuantificadores <code>*</code>, <code>+</code>, <code>?</code>o <code>{}</code>, hace que el cuantificador no codicioso (que reconoce el número mínimo de veces), a diferencia del predeterminado, que es codicioso (que reconoce el número máximo de veces).</p>
      </td>
     </tr>
     <tr>
      <td><code><em>x</em>{<em>n</em>}</code></td>
      <td>
       <p>Donde "n" es un número entero positivo, concuerda exactamente con "n" apariciones del elemento "x" anterior. Por ejemplo, <code>/a{2}/</code> no reconoce la "a" en "candy", pero reconoce todas las "a"s en "caandy" y las dos primeras "a"s en "caaandy ".</p>
      </td>
     </tr>
     <tr>
      <td><code><em>x</em>{<em>n</em>,}</code></td>
      <td>
       <p>Donde "n" es un número entero positivo, concuerda con al menos "n" apariciones del elemento "x". Por ejemplo, <code>/a{2,}/</code> no reconoce la "a" en "candy", pero reconoce todas las "a" en "caandy" y en "caaaaaaandy".</p>
      </td>
     </tr>
     <tr>
      <td><code><em>x</em>{<em>n</em>,<em>m</em>}</code></td>
      <td>
       <p>Donde "n" es 0 o un número entero positivo, "m" es un número entero positivo y <code><em>m</em> &gt; <em>n</em></code>, reconoce por lo menos "n" y como máximo "m" apariciones del elemento "x" anterior. Por ejemplo, <code>/a{1,3}/</code> no reconoce nada en "cndy", la "a" en "caramelo", las dos "a" en "caandy" y las tres primeras "a" está en "caaaaaaandy". Observa que al comparar "caaaaaaandy", las "aaa" encontradas, aunque la cadena original tenía más "a" s.</p>
      </td>
     </tr>
     <tr>
      <td>
       <p><code><em>x</em>*?</code><br>
        <code><em>x</em>+?</code><br>
        <code><em>x</em>??</code><br>
        <code><em>x</em>{n}?</code><br>
        <code><em>x</em>{n,}?</code><br>
        <code><em>x</em>{n,m}?</code></p>
      </td>
      <td>
       <p>De manera predeterminada, los cuantificadores como <code>*</code> y <code>+</code> son "codiciosos", lo cual significa que intentan hacer coincidir la mayor cantidad de cadena posible. El carácter <code>?</code> después del cuantificador hace que este sea "no codicioso": lo cual significa que se detendrá tan pronto como encuentre una concordancia. Por ejemplo, dada una cadena "algo como &lt;foo&gt; &lt;bar&gt; new &lt;/bar&gt; &lt;/foo&gt;":</p>
       <ul>
        <li><code>/&lt;.*&gt;/</code> reconocerá "&lt;foo&gt; &lt;bar&gt; nuevo &lt;/bar&gt; &lt;/foo&gt;"</li>
        <li><code>/&lt;.*?&gt;/</code> encajará "&lt;foo&gt;"</li>
       </ul>
      </td>
     </tr>
    </tbody>
   </table>

## [Escapa la propiedad Unicode](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

Si deseas contribuir a este documento, edita también [el artículo original](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

```js
// Valores no binarios
\p{UnicodePropertyValue}
\p{UnicodePropertyName=UnicodePropertyValue}

// Valores binarios y no binarios
\p{UnicodeBinaryPropertyName}

// Negación: \P is negado \p
\P{UnicodePropertyValue}
\P{UnicodeBinaryPropertyName}
```

- UnicodeBinaryPropertyName
  - : El nombre de una [propiedad binaria](https://tc39.es/ecma262/#table-binary-unicode-properties). Por ejemplo: [`ASCII`](https://unicode.org/reports/tr18/#General_Category_Property), [`Alpha`](https://unicode.org/reports/tr44/#Alphabetic), `Math`, [`Diacrítica`](https://unicode.org/reports/tr44/#Diacritic), [`Emoji`](https://unicode.org/reports/tr51/#Emoji_Properties), [`Hex_Digit`](https://unicode.org/reports/tr44/#Hex_Digit), `Math`, [`Espacio_blanco`](https://unicode.org/reports/tr44/#White_Space), etc. Consulta [Unicode Data PropList.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt) para obtener más información.
- UnicodePropertyName

  - : El nombre de una propiedad [no binaria](https://tc39.es/ecma262/#table-nonbinary-unicode-properties):

    - [General_Category](https://unicode.org/reports/tr18/#General_Category_Property) (`gc`)
    - [Script](https://unicode.org/reports/tr24/#Script) (`sc`)
    - [Script_Extensions](https://unicode.org/reports/tr24/#Script_Extensions) (`scx`)

Consulta también [PropertyValueAliases.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt)

- UnicodePropertyValue
  - : Uno de los fragmentos enumerados en la sección Valores, más adelante. Muchos valores tienen alias o abreviaturas (por ejemplo, el valor `Decimal_Number` para la propiedad `General_Category` se puede escribir cómo `Nd`, `digit`, o `Decimal_number`). Para la mayoría de los valores, la parte `UnicodePropertyName` y el signo igual se pueden omitir. Si se especifica un `UnicodePropertyName`, el valor debe corresponder al tipo de propiedad proporcionado.

> **Nota:** Puesto que hay muchas propiedades y valores disponibles, no las describiremos exhaustivamente aquí, sino que proporcionaremos varios ejemplos.
