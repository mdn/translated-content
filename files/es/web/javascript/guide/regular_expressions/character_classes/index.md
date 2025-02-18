---
title: Clases de caracteres
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
---

{{JsSidebar("Guía de JavaScript")}}

Las clases de caracteres distinguen tipos de caracteres como, por ejemplo, distinguen entre letras y dígitos.

{{InteractiveExample("JavaScript Demo: RegExp Character classes")}}

```js interactive-example
const chessStory = "He played the King in a8 and she moved her Queen in c2.";
const regexpCoordinates = /\w\d/g;
console.log(chessStory.match(regexpCoordinates));
// Expected output: Array [ 'a8', 'c2']

const moods = "happy 🙂, confused 😕, sad 😢";
const regexpEmoticons = /[\u{1F600}-\u{1F64F}]/gu;
console.log(moods.match(regexpEmoticons));
// Expected output: Array ['🙂', '😕', '😢']
```

## Tipos

La siguiente tabla también está duplicada en {{JSxRef("../Guide/Regular_Expressions/Cheatsheet", "esta hoja de referencia")}}. No olvides editarla también, ¡gracias!

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
        <li>Coincide con cualquier carácter único <em>excepto</em> terminadores de línea: <code>\n</code>, <code>\r</code>, <code>\u2028</code> o <code>\u2029</code>. Por ejemplo, <code>/.i/</code> coincide con "mi" y "si", pero no con "día", en "si alegra mi día".</li>
        <li>Dentro de un juego de caracteres, el punto pierde su significado especial y concuerda con un punto literal.</li>
       </ul>
       <p>Ten en cuenta que el indicador multilínea <code>m</code> no cambia el comportamiento del punto. Por lo tanto, para hacer coincidir un patrón en varias líneas, se puede utilizar el conjunto de caracteres <code>[^]</code> — coincidirá con cualquier carácter, incluidas las nuevas líneas.</p>
       <p>ES2018 agregó el indicador <code>s</code> "<em>dotAll</em>", el cual permite que el punto también coincida con los terminadores de línea.</p>
      </td>
     </tr>
     <tr>
      <td><code>\d</code></td>
      <td>
       <p>Busca cualquier dígito (número arábigo). Equivalente a <code>[0-9]</code>. Por ejemplo, <code>/\d/</code> o <code>/[0-9]/</code> coincide con "2" en "B2 es el número de suite".</p>
      </td>
     </tr>
     <tr>
      <td><code>\D</code></td>
      <td>
       <p>Busca cualquier caracter que <em>no</em> sea un dígito (número arábigo). Equivalente a <code>[^0-9]</code>. Por ejemplo, <code>/\D/</code> o <code>/[^0-9]/</code> coincide con "B" en "B2 es el número de suite".</p>
      </td>
     </tr>
     <tr>
      <td><code>\w</code></td>
      <td>
       <p>Busca cualquier caracter alfanumérico del alfabeto latino básico, incluido el caracter de subrayado. Equivalente a <code>[A-Za-z0-9_]</code>. Por ejemplo, <code>/\w/</code> coincide con "m" en "manzana", "5" en "$5.28", "3" en "3D" y "m" en "Émanuel".</p>
      </td>
     </tr>
     <tr>
      <td><code>\W</code></td>
      <td>
       <p>Busca cualquier caracter que no sea un caracter de palabra del alfabeto latino básico. Equivalente a <code>[^A-Za-z0-9_]</code>. Por ejemplo, <code>/\W/</code> o <code>/[^A-Za-z0-9_]/</code> coincide con "%" en "50%" y "É" en "Émanuel".</p>
      </td>
     </tr>
     <tr>
      <td><code>\s</code></td>
      <td>
       <p>Busca un solo caracter de espacio en blanco, incluido el espacio, tabulación, avance de página, avance de línea y otros espacios Unicode. Equivalente a <code>[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Por ejemplo, <code>/\s\w*/</code> encuentra " bar" en "foo bar".</p>
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
      <td>Coincide con un caracter de retroceso. Si estás buscando el carácter de límite de palabra (<code>\b</code>), consulta {{JSxRef("../Guide/Regular_Expressions/Boundaries", "Límites")}}.</td>
     </tr>
     <tr>
      <td><code>\0</code></td>
      <td>Coincide con un caracter <code>NUL</code>. No sigue a este con otro dígito.</td>
     </tr>
     <tr>
      <td><code>\c<em>X</em></code></td>
      <td>
       <p>Coincide con un caracter de control mediante [notación de intercalación](https://es.wikipedia.org/wiki/Caret_notation), donde "X" es una letra de la A a la Z (correspondiente a los puntos de código <code>U+0001</code><em>-</em><code>U+001F</code>). Por ejemplo, <code>/\cM/</code> encuentra "\r" en "\r\n".</p>
      </td>
     </tr>
     <tr>
      <td><code>\x<em>hh</em></code></td>
      <td>Coincide con el carácter con el código <code><em>hh</em></code> (dos dígitos hexadecimales).</td>
     </tr>
     <tr>
      <td><code>\u<em>hhhh</em></code></td>
      <td>Coincide con una unidad de código UTF-16 con el valor <code><em>hhhh</em></code> (cuatro dígitos hexadecimales).</td>
     </tr>
     <tr>
      <td><code>\u<em>{hhhh}</em> o <em>\u{hhhhh}</em></code></td>
      <td>(Solo cuando se establece el indicador <code>u</code>). Hace coincidir el carácter con el valor Unicode <code>U+<em>hhhh</em></code> o <code>U+<em>hhhhh</em></code> (dígitos hexadecimales).</td>
     </tr>
     <tr>
      <td><code>\</code></td>
      <td>
       <p>Indica que el siguiente caracter se debe tratar de manera especial o "escaparse". Se comporta de dos formas.</p>
       <ul>
        <li>Para los caracteres que generalmente se tratan literalmente, indica que el siguiente caracter es especial y no se debe interpretar literalmente. Por ejemplo, <code>/b/</code> coincide con el carácter "b". Al colocar una barra invertida delante de "b", es decir, usando <code>/\b/</code>, el carácter se vuelve especial para significar que coincide con el límite de una palabra.</li>
        <li>Para los caracteres que generalmente se tratan de manera especial, indica que el siguiente caracter no es especial y se debe interpretar literalmente. Por ejemplo, "*" es un carácter especial que significa que deben coincidir 0 o más ocurrencias del carácter anterior; por ejemplo, <code>/a*/</code> significa coincidir con 0 o más "<em>a</em>"es. Para hacer coincidir <code>*</code> literalmente, precede con una barra invertida; por ejemplo, <code>/a\*/</code> coincide con "a*".</li>
       </ul>
       <div class="blockIndicator note">
       <p>Para reconocer este caracter literalmente, escápalo consigo mismo. En otras palabras, para buscar <code>\</code> usa <code>/\\/</code>.</p>
       </div>
      </td>
     </tr>
    </tbody>
   </table>

## Ejemplos

### Buscar una serie de dígitos

```js
var datosAleatorios = "015 354 8787 687351 3512 8735";
var regexpCuatroDigitos = /\b\d{4}\b/g;
// \b indica un límite (es decir, no empieza a coincidir en medio de una palabra)
// \d{4} indica un dígito, cuatro veces
// \b indica otro límite (es decir, no termina la coincidencia en medio de una palabra)

console.table(datosAleatorios.match(regexpCuatroDigitos));
// ['8787', '3512', '8735']
```

### Busca una palabra (del alfabeto latino) que comience con A

```js
var extractoAlicia =
  "Estoy segura de que no soy Ada, dijo, 'porque su cabello se hace en rizos tan largos, y el mío no se riza en absoluto'.";
var regexpPalabraEmpiezaConA = /\b[aA]\w+/g;
// \b indica un límite (es decir, no empieza a coincidir en medio de una palabra)
// [aA] indica las letras a o A
// \w+ indica cualquier carácter *del alfabeto latino*, varias veces

console.table(extractoAlicia.match(regexpPalabraEmpiezaConA));
// ["Ada", "absoluto"]
```

### Busca una palabra (de caracteres Unicode)

En lugar del alfabeto latino, podemos usar una variedad de caracteres Unicode para identificar una palabra (de modo que podamos tratar con texto en otros idiomas, tal como Ruso o Árabe). El "Plano multilingüe básico" de Unicode contiene la mayoría de los caracteres que se utilizan en todo el mundo y podemos utilizar clases y rangos de caracteres para reconocer las palabras escritas con esos caracteres.

```js
var textoNoEs = "Приключения Алисы в Стране чудес";
var regexpPalabraBMP = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP pasa por U+0000 a U+FFFF pero el espacio es U+0020

console.table(textoNoEs.match(regexpPalabraBMP));
["Приключения", "Алисы", "в", "Стране", "чудес"];
```

Nota para los editores de MDN: no intentes agregar ejemplos divertidos con emojis, ya que esos caracteres no los maneja la plataforma (Kuma).

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

Para obtener información sobre la compatibilidad del navegador, consulta la {{JSxRef("../Guide/Regular_Expressions", "tabla principal de compatibilidad de expresiones regulares", "#Compatibilidad_del_navegador")}}.

## Ve también

- {{JSxRef("../Guide/Regular_Expressions", "Guía de expresiones regulares")}}

  - {{JSxRef("../Guide/Regular_Expressions/Assertions", "Aserciones")}}
  - {{JSxRef("../Guide/Regular_Expressions/Cuantificadores", "Cuantificadores")}}
  - {{JSxRef("../Guide/Regular_Expressions/Escapes_de_propiedades_Unicode", "Escapes de propiedades Unicode")}}
  - {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "Grupos y rangos")}}

- {{JSxRef("Objetos_globales/RegExp", "El constructor RegExp()")}}
