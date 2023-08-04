---
title: Expresiones Regulares
slug: Web/JavaScript/Guide/Regular_expressions
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}

Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas. En JavaScript, las expresiones regulares también son objetos. Estos patrones se utilizan con los métodos {{jsxref("RegExp.exec", "exec()")}} y {{jsxref("RegExp.test", "test()")}} de {{jsxref("RegExp")}}, y con {{jsxref("String.match", "match()")}}, {{jsxref("String.matchAll", "matchAll()")}}, {{jsxref("String.replace", "replace()")}}, {{jsxref("String.replaceAll", "replaceAll()")}}, {{jsxref("String.search", "search()")}} y {{jsxref("String.split", "split()")}} métodos de {{jsxref("String")}}. Este capítulo describe las expresiones regulares de JavaScript.

## Crear una expresión regular

Construyes una expresión regular en una de estas dos formas:

- Usando una expresión regular literal, que consiste en un patrón encerrado entre barras, como sigue:

  ```js
  let re = /ab+c/;
  ```

  Las expresiones regulares literales proporcionan la compilación de la expresión regular cuando se carga el script. Si la expresión regular permanece constante, su uso puede mejorar el rendimiento.

- O llamando a la función constructora del objeto {{jsxref("RegExp")}}, de la siguiente manera:

  ```js
  let re = new RegExp("ab+c");
  ```

  El uso de la función constructora proporciona una compilación en tiempo de ejecución de la expresión regular. Usa la función constructora cuando sepas que el patrón de la expresión regular cambiará, o no conoces el patrón y lo obtienes de otra fuente, como la entrada del usuario.

## Escribir un patrón de expresión regular

Un patrón de expresión regular se compone de caracteres simples, como `/abc/`, o una combinación de caracteres simples y especiales, como `/ab*c/` o `/Capítulo (\d)\.\d*/`. El último ejemplo incluye paréntesis, que se utilizan como dispositivos de memoria. La coincidencia realizada con esta parte del patrón se recuerda para su uso posterior, como se describe en [Uso de grupos](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#Using_groups).

> **Nota:** Si ya estás familiarizado con las formas de una expresión regular, también puedes leer [la hoja de referencia](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet) para una búsqueda rápida de un patrón/construcción específica.

### Usar patrones simples

Los patrones simples se construyen con caracteres para los que deseas encontrar una coincidencia directa. Por ejemplo, el patrón `/abc/` coincide con combinaciones de caracteres en cadenas solo cuando ocurre la secuencia exacta `"abc"` (todos los caracteres juntos y en ese orden). Tal coincidencia tendría éxito en las cadenas `"Hola, ¿conoces tu abc?"` y `"Los últimos diseños de aviones evolucionaron a partir de slabcraft"`. En ambos casos, la coincidencia es con la subcadena `"abc"`. No hay ninguna coincidencia en la cadena `"Grab crab"` porque aunque contiene la subcadena `"ab c"`, no contiene la subcadena `"abc"` exacta.

### Usar caracteres especiales

Cuando la búsqueda de una coincidencia requiere algo más que una coincidencia exacta, como por ejemplo buscar una o más 'b', o encontrar espacios en blanco, puedes incluir caracteres especiales en el patrón. Por ejemplo, para hacer coincidir _una sola `"a"` seguida de cero o más `"b"`s seguidas de `"c"`_, usarías el patrón `/ab*c/`: el `*` después de `"b"` significa "0 o más apariciones del elemento anterior". En la cadena `"cbbabbbbcdebc"`, este patrón coincidirá con la subcadena `"abbbbc"`.

Las siguientes páginas proporcionan listas de los diferentes caracteres especiales que encajan en cada categoría, junto con descripciones y ejemplos.

- [Aserciones](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  - : Las aserciones incluyen límites, que indican el comienzo y el final de líneas y palabras, y otros patrones que indican de alguna manera que el reconocimiento es posible (incluidas las expresiones anticipadas, inversas y condicionales).
- [Clases de caracteres](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
  - : Distingue diferentes tipos de caracteres. Por ejemplo, distinguir entre letras y dígitos.
- [Grupos y rangos](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
  - : Indica grupos y rangos de caracteres de expresión.
- [Cuantificadores](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
  - : Indica el número de caracteres o expresiones que deben coincidir.
- [Escapes de propiedades Unicode](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)
  - : Distinguir según las propiedades de los caracteres Unicode, por ejemplo, letras mayúsculas y minúsculas, símbolos matemáticos y de puntuación.

Si deseas ver todos los caracteres especiales que se pueden usar en expresiones regulares en una sola tabla, consulta lo siguiente:

| Caracteres/construcciones                                                                                                    | Artículo correspondiente                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `\`, `.`, `\cX`, `\d`, `\D`, `\f`, `\n`, `\r`, `\s`, `\S`, `\t`, `\v`, `\w`, `\W`, `\0`, `\xhh`, `\uhhhh`, `\uhhhhh`, `[\b]` | [Clases de caracteres](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)                  |
| `^`, `$`, `x(?=y)`, `x(?!y)`, `(?<=y)x`, `(?<!y)x`, `\b`, `\B`                                                               | [Aserciones](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)                                   |
| `(x)`, `(?:x)`, `(?<Name>x)`, `x\|y`, `[xyz]`, `[^xyz]`, `\Number`                                                           | [Grupos y rangos](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)                       |
| `*`, `+`, `?`, `x{n}`, `x{n,}`, `x{n,m}`                                                                                     | [Cuantificadores](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)                             |
| `\p{UnicodeProperty}`, `\P{UnicodeProperty}`                                                                                 | [Escapes de propiedades Unicode](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) |

> **Nota:** [También está disponible una hoja de referencia más grande](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet) (solo agregando partes de esos artículos individuales).

### Escapando

Si necesitas usar literalmente cualquiera de los caracteres especiales (en realidad buscando un `"*"`, por ejemplo), lo debes escapar colocando una barra invertida delante de él. Por ejemplo, para buscar `"a"` seguido de `"*"` seguido de `"b"`, usarías `/a\*b/` — la barra invertida "escapa" de `"*"`, volviéndola literal en lugar de especial.

De manera similar, si estás escribiendo un literal de expresión regular y necesitas buscar una barra inclinada ("/"), la debes escapar (de lo contrario, esta termina el patrón). Por ejemplo, para buscar la cadena "/ejemplo/" seguida de uno o más caracteres alfabéticos, usarías `/\/ejemplo\/[a-z]+/i`: las barras invertidas antes de cada barra, las hace literales.

Para hacer coincidir una barra invertida literal, debes escapar de la barra invertida. Por ejemplo, para encontrar la cadena "C:\\" donde "C" puede ser cualquier letra, usarías `/[A-Z]:\\/` — la primera barra invertida escapa a la que sigue, por lo que la expresión busca una sola barra invertida literal.

Si usas el constructor `RegExp` con un literal de cadena, recuerda que la barra invertida es un escape en los literales de cadena, por lo que para usarlo en la expresión regular, debes escapar en el nivel del literal de cadena. `/a\*b/` y `new RegExp("a\\*b")` crean la misma expresión, que busca "a" seguida de un "\*" literal seguido de "b".

Si las cadenas de escape aún no forman parte de tu patrón, puedes agregarlas usando {{jsxref('String.replace')}}:

```js
function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); // $& significa toda la cadena coincidente
}
```

La "g" después de la expresión regular es una opción o indicador que realiza una búsqueda global, buscando en toda la cadena y devolviendo todas las coincidencias. Se explica en detalle a continuación en [Búsqueda avanzada con indicadores](/es/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags).

_¿Por qué no está integrada en JavaScript?_ Existe una propuesta para agregar esta función a RegExp, pero fue [rechazada por TC39.](https://github.com/benjamingr/RegExp.escape/issues/37)

### Usando paréntesis

Los paréntesis alrededor de cualquier parte del patrón de expresión regular hacen que se recuerde esa parte de la subcadena coincidente. Una vez reconocida, la subcadena se puede recuperar para otro uso. Consulta [Grupos y rangos](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#Using_groups) para obtener más detalles.

## Usar expresiones regulares en JavaScript

Las expresiones regulares se utilizan con los métodos `RegExp` `test()` y `exec()` y con los métodos de `String`, `match()`, `replace()`, `search()` y `split()`. Estos métodos se explican en detalle en la [referencia de JavaScript](/es/docs/Web/JavaScript/Reference).

| Método                                          | Descripción                                                                                                                                  |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp.exec", "exec()")}}             | Ejecuta una búsqueda por una coincidencia en una cadena. Devuelve un arreglo de información o `null` en una discrepancia.                    |
| {{jsxref("RegExp.test", "test()")}}             | Prueba una coincidencia en una cadena. Devuelve `true` o `false`.                                                                            |
| {{jsxref("String.match", "match()")}}           | Devuelve un arreglo que contiene todas las coincidencias, incluidos los grupos de captura, o `null` si no se encuentra ninguna coincidencia. |
| {{jsxref("String.matchAll", "matchAll()")}}     | Devuelve un iterador que contiene todas las coincidencias, incluidos los grupos de captura.                                                  |
| {{jsxref("String.search", "search()")}}         | Prueba una coincidencia en una cadena. Devuelve el índice de la coincidencia, o `-1` si la búsqueda falla.                                   |
| {{jsxref("String.replace", "replace()")}}       | Ejecuta una búsqueda por una coincidencia en una cadena y reemplaza la subcadena coincidente con una subcadena de reemplazo.                 |
| {{jsxref("String.replaceAll", "replaceAll()")}} | Ejecuta una búsqueda de todas las coincidencias en una cadena y reemplaza las subcadenas coincidentes con una subcadena de reemplazo.        |
| {{jsxref("String.split", "split()")}}           | Utiliza una expresión regular o una cadena fija para dividir una cadena en un arreglo de subcadenas.                                         |

Cuando desees saber si un patrón se encuentra en una cadena, utiliza los métodos `test()` o `search()`; para obtener más información (pero una ejecución más lenta) utiliza los métodos `exec()` o `match()`. Si usas `exec()` o `match()` y si la búsqueda tiene éxito, estos métodos devuelven un arreglo y actualizan las propiedades del objeto expresión regular asociado y también del objeto de expresión regular predefinido, el objeto `RegExp`. Si la búsqueda falla, el método `exec()` devuelve `null` (que coacciona a `false`).

En el siguiente ejemplo, el script utiliza el método `exec()` para encontrar una coincidencia en una cadena.

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
```

Si no necesitas acceder a las propiedades de la expresión regular, una forma alternativa de crear `myArray` es con este script:

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
// similar a "cdbbdbsbz" .match(/d(b+)d/g); sin embargo,
// "cdbbdbsbz" .match (/d(b+)d/g) genera Array ["dbbd"], mientras
// /d(b+)d/g.exec('cdbbdbsbz ') produce Array ['dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ].
```

(Consulta [diferentes comportamientos](#g-diferentes-comportamientos) para obtener más información sobre los diferentes comportamientos).

Si deseas construir la expresión regular a partir de una cadena, otra alternativa más es este script:

```js
var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");
```

Con estos scripts, la búsqueda se realiza correctamente, devuelve el arreglo y actualiza las propiedades que se muestran en la siguiente tabla.

<table class="standard-table">
  <caption>
    Resultado de la ejecución de expresiones regulares.
  </caption>
  <thead>
    <tr>
      <th scope="col">Objeto</th>
      <th scope="col">Propiedad o índice</th>
      <th scope="col">Descripción</th>
      <th scope="col">En este ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>myArray</code></td>
      <td></td>
      <td>La cadena coincidente y todas las subcadenas recordadas.</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>índice</code></td>
      <td>El índice basado en 0 de la coincidencia en la cadena de entrada.</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>entrada</code></td>
      <td>La cadena original.</td>
      <td><code>'cdbbdbsbz'</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>Los últimos caracteres encontrados.</td>
      <td><code>'dbbd'</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>
        El índice en el que comenzará la siguiente búsqueda. (Esta propiedad se
        establece solo si la expresión regular usa la opción <code>g</code>,
        descrita en
        <a href="#Búsqueda_avanzada_con_banderas"
          >Búsqueda avanzada con banderas</a
        >).
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>fuente</code></td>
      <td>
        El texto del patrón. Actualizado en el momento en que se crea la
        expresión regular, no se ejecuta.
      </td>
      <td><code>'d(b+)d'</code></td>
    </tr>
  </tbody>
</table>

Como se muestra en la segunda forma de este ejemplo, puedes usar una expresión regular creada con un iniciador de objeto sin asignarla a una variable. Sin embargo, si lo hace, cada aparición es una nueva expresión regular. Por este motivo, si utilizas esta forma sin asignarla a una variable, no podrás acceder posteriormente a las propiedades de esa expresión regular. Por ejemplo, supongamos que tienes este script:

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log("El valor de lastIndex es " + myRe.lastIndex);

// "El valor de lastIndex es 5"
```

Sin embargo, si tienes este script:

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log("El valor de lastIndex es " + /d(b+)d/g.lastIndex);

// "El valor de lastIndex es 0"
```

Las apariciones de `/d(b+)d/g` en las dos declaraciones son objetos de expresión regular diferentes y, por lo tanto, tienen valores diferentes para su propiedad `lastIndex`. Si necesitas acceder a las propiedades de una expresión regular creada con un iniciador de objeto, primero debes asignarla a una variable.

### Búsqueda avanzada con banderas

Las expresiones regulares tienen seis indicadores opcionales que permiten funciones como la búsqueda global y que no distinga entre mayúsculas y minúsculas. Estos indicadores se pueden usar por separado o juntos en cualquier orden y se incluyen como parte de la expresión regular.

| Bandera | Descripción                                                                                                                                          | Propiedad correspondiente                                                                           |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `g`     | Búsqueda global.                                                                                                                                     | [`RegExp.prototype.global`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)         |
| `i`     | Búsqueda que no distingue entre mayúsculas y minúsculas.                                                                                             | [`RegExp.prototype.ignoreCase`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) |
| `m`     | Búsqueda multilínea.                                                                                                                                 | [`RegExp.prototype.multiline`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)   |
| `s`     | Permite que el `.` coincida con caracteres de nueva línea.                                                                                           | [`RegExp.prototype.dotAll`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)         |
| `u`     | "unicode"; tratar un patrón como una secuencia de puntos de código Unicode.                                                                          | [`RegExp.prototype.unicode`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)       |
| `y`     | Realiza una búsqueda "pegajosa" que coincida a partir de la posición actual en la cadena de destino. Consulta {{jsxref("RegExp.sticky", "sticky")}}. | [`RegExp.prototype.sticky`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)         |

Para incluir una bandera con la expresión regular, usa esta sintaxis:

```js
var re = /patrón/banderas;
```

o

```js
var re = new RegExp("patrón", "banderas");
```

Ten en cuenta que las banderas son parte integral de una expresión regular. No se pueden agregar ni eliminar más tarde.

Por ejemplo, `re = /\w+\s/g` crea una expresión regular que busca uno o más caracteres seguidos de un espacio y busca esta combinación en toda la cadena.

```js
var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
```

Podrías reemplazar la línea:

```js
var re = /\w+\s/g;
```

con:

```js
var re = new RegExp("\\w+\\s", "g");
```

y obtener el mismo resultado.

El comportamiento asociado con el indicador `g` es diferente cuando se usa el método `.exec()`. Los roles de "clase" y "argumento" se invierten: En el caso de `.match()`, la clase cadena (o tipo de datos) posee el método y la expresión regular es solo un argumento, mientras que en el caso de `.exec()`, es la expresión regular la que posee el método, siendo la cadena el argumento. Compara esto _`str.match(re)`_ con _`re.exec(str)`_. El indicador `g` se usa con el método **`.exec()`** para obtener una progresión iterativa.

```js
var xArray;
while ((xArray = re.exec(str))) {
  console.log(xArray);
}
// produce:
// ["fee ", index: 0, input: "fee fi fo fum"]
// ["fi ", index: 4, input: "fee fi fo fum"]
// ["fo ", index: 7, input: "fee fi fo fum"]
```

La bandera `m` se utiliza para especificar que una cadena de entrada de varias líneas se debe tratar como varias líneas. Si se usa el indicador `m`, `^` y `$` coinciden al principio o al final de cualquier línea dentro de la cadena de entrada en lugar del inicio o el final de toda la cadena.

## Ejemplos

> **Nota:** También hay varios ejemplos disponibles en:
>
> - Las páginas de referencia para {{jsxref("RegExp.exec", "exec()")}}, {{jsxref("RegExp.test", "test()")}}, {{jsxref("String.match", "match()")}}, {{jsxref("String.matchAll", "matchAll()")}}, {{jsxref("String.search", "search()")}}, {{jsxref("String.replace", "replace()")}}, {{jsxref("String.split", "split()")}}
> - Artículos de esta guía: [clases de caracteres](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes), [aserciones](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions), [grupos y rangos](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges), [cuantificadores](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers), [escapes de propiedades Unicode](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

### Usar caracteres especiales para verificar la entrada

En el siguiente ejemplo, se espera que el usuario ingrese un número de teléfono. Cuando el usuario presiona el botón "Comprobar", el script verifica la validez del número. Si el número es válido (encuentra la secuencia de caracteres especificada por la expresión regular), la secuencia de comandos muestra un mensaje agradeciendo al usuario y confirmando el número. Si el número no es válido, el guión informa al usuario que el número de teléfono no es válido.

Entre paréntesis que no capturan `(?:`, la expresión regular busca tres caracteres numéricos `\d{3}` O `|` un paréntesis izquierdo `\(` seguido de tres dígitos `\d{3}`, seguido de un paréntesis cerrado `\)`, (finaliza el paréntesis no capturador `)`), seguido de un guión, una barra diagonal o un punto decimal y cuando lo encuentre, recuerde el carácter `([-\/\.])`, seguido de tres dígitos `\d{3}`, seguido de la coincidencia recordada de un guión, una barra diagonal o un punto decimal `\1`, seguida de cuatro dígitos `\d{4}`.

El evento `Change` activado cuando el usuario presiona <kbd>Enter</kbd> establece el valor de `RegExp.input`.

#### HTML

```html
<p>
  Ingresa tu número de teléfono (con el código de área) y luego haz clic en
  "Comprobar".
  <br />
  El formato esperado es como ###-###-####.
</p>
<form action="#">
  <input id="phone" />
  <button onclick="testInfo(document.getElementById('phone'));">
    Comprobar
  </button>
</form>
```

#### JavaScript

```js
var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
function testInfo(phoneInput) {
  var OK = re.exec(phoneInput.value);
  if (!OK) {
    console.error(phoneInput.value + " isn't a phone number with area code!");
  } else {
    console.log("Gracias, tu número de teléfono es " + OK[0]);
  }
}
```

#### Resultado

{{EmbedLiveSample('', '', '')}}

## Herramientas

- [Probador de expresiones regulares](https://regex101.com/)
  - : Un constructor/depurador de expresiones regulares en línea
- [Visualizador de expresiones regulares](https://extendsclass.com/regex-tester.html)
  - : Un probador de expresiones regulares visual en línea.

{{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}
