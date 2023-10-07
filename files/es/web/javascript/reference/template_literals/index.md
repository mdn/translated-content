---
title: Plantillas literales (plantillas de cadenas)
slug: Web/JavaScript/Reference/Template_literals
---

{{JsSidebar("More")}}

Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.

En ediciones anteriores de la especificación ES2015, solían llamarse "plantillas de cadenas de caracteres".

## Sintaxis

```
`texto de cadena de caracteres`

`línea 1 de la cadena de caracteres
  línea 2 de la cadena de caracteres`

`texto de cadena de caracteres ${expresión} texto adicional`

etiqueta`texto de cadena de caracteres ${expresión} texto adicional`
```

## Descripción

Las plantillas literales se delimitan con el caracter de comillas o tildes invertidas (\` \`) ([grave accent](http://en.wikipedia.org/wiki/Grave_accent)), en lugar de las comillas sencillas o dobles.

Las plantillas de cadena de caracteres pueden contener marcadores, identificados por el signo de dólar y envueltos en llaves (`${expresión}`). Las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una función.

La función por defecto sencillamente concatena las partes para formar una única cadena de caracteres. Si hay una expresión antes de la plantilla literal (aquí indicada mediante _`etiqueta`_), se le conoce como "plantilla etiquetada". En este caso, la expresión de etiqueta (típicamente una función) es llamada con la plantilla literal como parámetro, que luego puede ser manipulada antes de ser devuelta.

En caso de querer escapar una comilla o tilde invertida en una plantilla literal, se debe poner una barra invertida (`\`) antes de la comilla o tilde invertida.

```js
`\`` === "`"; // --> true (cierto)
```

### Cadenas de más de una línea

Los caracteres de fin de línea encontrados forman parte de la plantilla literal.

Utilizando cadenas de caracteres normales, sería necesario utilizar la siguiente sintaxes para producir cadenas de más de una línea:

```js
console.log("línea 1 de cadena de texto\n" + "línea 2 de cadena de texto");
// "línea 1 de cadena de texto
// línea 2 de cadena de texto"
```

Utilizando plantillas literales, se puede obtener el mismo resultado de la siguiente forma:

```js
console.log(`línea 1 de la cadena de texto
línea 2 de la cadena de texto`);
// "línea 1 de la cadena de texto
// línea 2 de la cadena de texto"
```

### Interpolación de expresiones

Para insertar expresiones dentro de cadenas de caracteres normales, se utilizaría la siguiente sintaxis:

```js
let a = 5;
let b = 10;
console.log("Quince es " + (a + b) + " y\nno " + (2 * a + b) + ".");
// "Quince es 15 y
// no 20."
```

Ahora, con las plantillas literales, se pueden utilizar sus nuevas capacidades (es decir, insertar expresiones con `${ }` e incluir caracteres de fin de linea literales dentro de la cadena) para simplificar la sintaxis:

```js
let a = 5;
let b = 10;
console.log(`Quince es ${a + b} y
no ${2 * a + b}.`);
// "Quince es 15 y
// no 20."
```

### Anidamiento de plantillas

En ciertos casos, anidar una plantilla es la forma más fácil, e incluso más legible, de tener cadenas configurables. Dentro de una plantilla con tildes invertidas, es sencillo permitir tildes invertidas interiores simplemente usándolas dentro de un marcador de posición `${ }` dentro de la plantilla.

Por ejemplo, si la condición a es `true` (cierta): entonces `return` (devuelva) este literal con plantilla.

En ES5:

```js
let classes = "header";
classes += isLargeScreen()
  ? ""
  : item.isCollapsed
  ? " icon-expander"
  : " icon-collapser";
```

En ES2015 con plantillas literales y sin anidamiento:

```js
const classes = `header ${
  isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`;
```

En ES5 con plantillas literales anidadas:

```js
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```

### Plantillas etiquetadas

Una forma más avanzada de plantillas literales son las plantillas _etiquetadas_.

Con ellas es posible modificar la salida de las plantillas utilizando una función. El primer argumento contiene un array con una o más cadenas de caracteres. El segundo y subsiguientes argumentos se asocian con las expresiones de la plantilla.

La función de etiqueta puede ejecutar cualesquiera operaciones deseadas con estos argumentos, y luego devolver la cadena manipulada. (También puede devolver algo totalmente distinto, como se muestra en uno de los siguientes ejemplos.)

El nombre de la función utilizada con la etiqueta no es nada especial, se puede utilizar cualquier nombre de función en su lugar.

```js
let persona = "Mike";
let edad = 28;

function myTag(strings, expPersona, expEdad) {
  let str0 = strings[0]; // "Ese "
  let str1 = strings[1]; // " es un "

  // Tecnicamente, hay una cadena de
  // caracteres después de la expresión
  // final (en nuestro ejemplo) pero
  // está vacia (""), asi que se ignora.
  // let str2 = strings[2];

  let strEdad;
  if (expEdad > 99) {
    strEdad = "viejo";
  } else {
    strEdad = "joven";
  }

  // Podemos incluso retornar una cadena de
  // caracteres utilizando una plantilla literal.
  return `${str0}${expPersona}${str1}${strEdad}`;
}

var salida = myTag`Ese ${persona} es un ${edad}`;

console.log(salida);
// Ese Mike es un joven
```

Las funciones de etiqueta incluso pueden devolver valores que no sean cadenas de caracteres:

```js
function plantilla(cadenas, ...claves) {
  return function (...valores) {
    let diccio = valores[valores.length - 1] || {};
    let resultado = [cadenas[0]];
    claves.forEach(function (clave, i) {
      let valor = Number.isInteger(clave) ? valores[clave] : diccio[clave];
      resultado.push(valor, cadenas[i + 1]);
    });
    return resultado.join("");
  };
}

let t1Closure = plantilla`¡${0}${1}${2}${2}${3}!`;
//let t1Closure = plantilla(["¡","","","","","","!"],0,1,2,3);
t1Closure("H", "U", "R", "A"); // "¡HURRA!"

let t2Closure = plantilla`${0} ${"foo"}!`;
//let t2Closure = plantilla(["¡",""," ","!"],0,"foo");
t2Closure("Hola", { foo: "Mundo" }); // "¡Hola Mundo!"

let t3Closure = plantilla`Me llamo ${"nombre"}. Tengo casi ${"edad"} años.`;
//let t3Closure = plantilla(["Me llamo ", ". Tengo casi ", " años."], "nombre", "edad");
t3Closure("foo", { nombre: "MDN", edad: 30 }); //"Me llamo MDN. Tengo casi 30 años."
t3Closure({ nombre: "MDN", edad: 30 }); //"Me llamo MDN. Tengo casi 30 años."
```

### Cadenas en crudo (raw)

La propiedad especial `raw`, disponible en el primer argumento de la función de etiqueta, permite acceso a las cadenas de caracteres tal como fueron ingresadas, sin procesar [secuencias de escape](/es/docs/Web/JavaScript/Guide/Grammar_and_types#Literales_String).

```js
function etiqueta(cadenas) {
  console.log(cadenas.raw[0]);
}

etiqueta`texto de cadena de caracteres 1 \n texto de cadena de caracteres 2`;
// muestra "texto de cadena de caracteres 1 \n texto de cadena de caracteres 2" ,
// incluyendo los caracteres '\' y 'n'
```

Adicionalmente, el método {{jsxref("String.raw()")}} permite crear cadenas de caracteres en crudo tal como serían generadas por la función por defecto de plantilla, concatenando sus partes.

```js
let cadena = String.raw`¡Hola\n${2 + 3}!`;
// "¡Hola\n5!"

cadena.length;
// 9

Array.from(cadena).join(",");
// "¡,H,o,l,a,\,n,5,!"
```

### Plantillas etiquetadas y secuencias de escape

#### Comportamiento en ES2016

Comenzando con ECMAScript 2016, las plantillas etiquetadas se comportan de acuerdo con las normas de las siguientes secuencias de escape:

- Secuencias de escape de formato Unicode comenzando con "`\u`", como `\u00A9`
- Secuencias de escape de formato Unicode de punto de código, indicadas con "`\u{}`", como `\u{2F804}`
- Secuencias de escape de numeros hexadecimales comenzando con "`\x`", como `\xA9`
- Secuencias de escape de octales literales comenzando con "`\0o`" seguidas de uno o más dígitos, como `\0o251`

Esto significa que una plantilla etiquetada como la siguiente podría causar problemas, dado que, de acuerdo con la gramática de ECMAScript, un analizador buscará secuencias de escape de formato Unicode válidas pero encontrará sintaxis equivocado:

```js
latex`\unicode`;
// En ECMAScript 2016 y versiones anteriores, lanza
// SyntaxError: malformed Unicode character escape sequence
```

### Revision de secuencias de escape no permitidas en ES2018

Las plantillas etiquetadas deberías permitir la inserción de lenguages (como los [DSL](https://en.wikipedia.org/wiki/Domain-specific_language), o [LaTeX](https://en.wikipedia.org/wiki/LaTeX)), en donde otras secuencias de escape se ven comúnmente. La propuesta para ECMAScript [Template Literal Revision](https://tc39.es/proposal-template-literal-revision/) (Revisión de Plantilla Literal) (Cuarta Etapa, en camino a ser integrada al estándar de ECMAScript 2018) elimina la restricción de las secuencias de escape en ECMAScript para las plantillas etiquetadas.

Aún así, las secuencias de escape no permitidas deben ser representadas en la representación "cocinada" de la cadena. Aparecerán como elementos [no definidos](/es/docs/Glossary/undefined) en el array llamado "cocinado" en el siguiente ejemplo.

```js
function latex(str) {
  return { cocinado: str[0], "en crudo": str.raw[0] };
}

latex`\unicode`;

// { cocinado: undefined, en crudo: "\\unicode" }
```

Cabe destacar que la restricción para secuencias de escape solo ha sido eliminada para plantillas _etiquetadas_. Aún permanece para plantillas literales sin etiqueta:

```js example-bad
let bad = `bad escape sequence: \unicode`;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Lexical grammar](/es/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Template-like strings in ES3 compatible syntax](https://gist.github.com/WebReflection/8f227532143e63649804)
