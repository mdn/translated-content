---
title: Formato de texto
slug: Web/JavaScript/Guide/Text_formatting
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}

Este capítulo presenta cómo trabajar con cadenas de caracteres (`String`) y texto en JavaScript.

## Cadenas de caracteres (`String`)

El tipo {{Glossary("String")}} de JavaScript se utiliza para representar datos textuales. Es un conjunto de "elementos" de valores enteros sin signo de 16 bits (unidades de código UTF-16). Cada elemento de la cadena de caracteres ocupa una posición en la cadena. El primer elemento está en el índice 0, el siguiente en el índice 1, y así sucesivamente. La longitud de una cadena es el número de elementos que contiene. Puedes crear cadenas utilizando cadena literales u objetos **string**.

PRECAUCIÓN: si editas esta página, no incluyas ningún caracter por encima de U+FFFF, hasta que se solucione el ([Error 857438 en Firefox](https://bugzil.la/857438) de MDN).

### Cadenas literales

Puedes crear cadenas simples utilizando comillas simples o dobles:

```js-nolint
'foo';
"bar";
```

Se pueden crear cadenas más avanzadas usando secuencias de escape:

#### Secuencias de escape hexadecimales

El número después de \x se interpreta como un número del [Sistema_hexadecimal](https://es.wikipedia.org/wiki/Sistema_hexadecimal).

```js
"\xA9"; // "©"
```

#### Secuencias de escape Unicode

Las secuencias de escape Unicode requieren al menos cuatro dígitos hexadecimales después de `\u`.

```js
"\u00A9"; // "©"
```

#### Puntos de escape de código Unicode

Nuevo en ECMAScript 2015. Con el código de puntos de escape Unicode, cualquier carácter se puede escapar usando números hexadecimales para que sea posible usar puntos de código Unicode hasta `0x10FFFF`. Con simples escapes Unicode, a menudo es necesario escribir las mitades sustitutas por separado para lograr el mismo resultado.

Consulta también {{JSxRef("String.fromCodePoint()")}} o {{JSxRef("String.prototype.codePointAt()")}}.

```js
"\u{2F804}";

// lo mismo con los escapes Unicode simples
"\uD87E\uDC04";
```

### Objetos `String`

El objeto {{JSxRef("String")}} es una envoltura alrededor del tipo de dato primitivo `string`.

```js
const foo = new String("foo"); // Crea un objeto String
console.log(foo); // Muestra: [String: 'foo']
typeof foo; // Devuelve 'object'
```

Puedes llamar a cualquiera de los métodos del objeto `String` en un valor de cadena literal: JavaScript automáticamente convierte la cadena literal en un objeto `String` temporal, llama al método y luego descarta el objeto `String` temporal. También puedes usar la propiedad `String.length` con una cadena literal:

Debes usar cadenas literales a menos que necesites específicamente usar un objeto `String`, porque los objetos `String` pueden tener un comportamiento contrario a la intuición. Por ejemplo:

```js
const firstString = "2 + 2"; // Crea un valor de cadena literal
const secondString = new String("2 + 2"); // Crea un objeto String
eval(firstString); // Devuelve el número 4
eval(secondString); // Devuelve la cadena "2 + 2"
```

Un objeto `String` tiene una propiedad, `length`, que indica el número de unidades de código UTF-16 en la cadena. Por ejemplo, el siguiente código asigna a `helloLength` el valor 13, porque "¡Hola, mundo!" tiene 13 caracteres, cada uno representado por una unidad de código UTF-16. Puedes acceder a cada unidad de código utilizando la notación de corchete de los arreglos. No puedes cambiar caracteres individuales porque las cadenas son objetos inmutables similares a los arreglos:

```js
const hello = "¡Hola, mundo!";
const helloLength = hello.length;
hello[0] = "L"; // Esto no tiene ningún efecto, porque las cadenas son inmutables
hello[1]; // Esto devuelve "H"
```

Los caracteres cuyos valores escalares Unicode son mayores que U+FFFF (tal como algunos caracteres chinos/japoneses/coreanos/vietnamitas raros y algunos «emoji»s) se almacenan en UTF-16 con dos unidades de código sustituto cada uno. Por ejemplo, una cadena que contenga el caracter único U+1F600 "Cara sonriente de emoji" tendrá una longitud de 2. El acceso a las unidades de código individual en una cadena de este tipo utilizando corchetes puede tener consecuencias indeseables, como la formación de cadenas con diferentes unidades de código suplente, violando el estándar Unicode. (Se deben agregar ejemplos a esta página después de que se corrija el error MDN [Error 857438 en Firefox](https://bugzil.la/857438)). Consulta también {{JSxRef("String.fromCodePoint()")}} o {{JSxRef("String.prototype.codePointAt()")}}.

Un objeto `String` tiene una variedad de métodos: por ejemplo, aquellos que devuelven una variación de la cadena en sí, como `substring` y `toUpperCase`.

La siguiente tabla resume los métodos de los objetos {{JSxRef("String")}}.

| Método                                                                                                                                                                                                        | Descripción                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{JSxRef("String.charAt", "charAt")}}, {{JSxRef("String.charCodeAt", "charCodeAt")}}, {{JSxRef("String.codePointAt", "codePointAt")}}                                                                         | Devuelve el caracter o código de caracter en la posición especificada en la cadena.                                                                  |
| {{JSxRef("String.indexOf", "indexOf")}}, {{JSxRef("String.lastIndexOf", "lastIndexOf")}}                                                                                                                      | Devuelve la posición de la subcadena especificada en la cadena o la última posición de la subcadena especificada, respectivamente.                   |
| {{JSxRef("String.startsWith", "startsWith")}}, {{JSxRef("String.endsWith", "endsWith")}}, {{JSxRef("String.includes", "includes")}}                                                                           | Devuelve si o no la cadena comienza, termina o contiene una subcadena especificada.                                                                  |
| {{JSxRef("String.concat", "concat")}}                                                                                                                                                                         | Combina el texto de dos cadenas y devuelve una nueva cadena.                                                                                         |
| {{JSxRef("String.fromCharCode", "fromCharCode")}}, {{JSxRef("String.fromCodePoint", "fromCodePoint")}}                                                                                                        | Construye una cadena a partir de la secuencia especificada de valores Unicode. Este es un método de la clase `String`, no una instancia de `String`. |
| {{JSxRef("String.split", "split")}}                                                                                                                                                                           | Divide un objeto `String` en un arreglo de cadenas separando la cadena en subcadenas.                                                                |
| {{JSxRef("String.slice", "slice")}}                                                                                                                                                                           | Extrae una sección de una cadena y devuelve una nueva cadena.                                                                                        |
| {{JSxRef("String.substring", "substring")}}, {{JSxRef("String.substr", "substr")}}                                                                                                                            | Devuelve el subconjunto especificado de la cadena, ya sea especificando los índices inicial y final o el índice inicial y una longitud.              |
| {{JSxRef("String.match", "match")}}, {{JSxRef("String.matchAll", "matchAll")}}, {{JSxRef("String.replace", "replace")}}, {{JSxRef("String.replaceAll", "replaceAll")}}, {{JSxRef("String.search", "search")}} | Trabaja con expresiones regulares.                                                                                                                   |
| {{JSxRef("String.toLowerCase", "toLowerCase")}}, {{JSxRef("String.toUpperCase", "toUpperCase")}}                                                                                                              | Devuelve la cadena en minúsculas o mayúsculas, respectivamente.                                                                                      |
| {{JSxRef("String.normalize", "normalize")}}                                                                                                                                                                   | Devuelve la forma de normalización Unicode del valor de la cadena llamada.                                                                           |
| {{JSxRef("String.repeat", "repeat")}}                                                                                                                                                                         | Devuelve una cadena que consta de los elementos del objeto repetidos las veces indicadas.                                                            |
| {{JSxRef("String.trim", "trim")}}                                                                                                                                                                             | Recorta los espacios en blanco desde el principio y el final de la cadena.                                                                           |

### Plantillas literales multilínea

Las {{JSxRef("template_strings", "plantillas literales")}} son cadena literales que permiten expresiones incrustadas. Puedes utilizar cadenas de varias líneas y funciones de interpolación de cadenas con ellas.

Las plantillas literales están encerradas por el carácter (` `` `) ([acento grave](https://es.wikipedia.org/wiki/Acento_grave)) en lugar de comillas simples o dobles. Las plantillas literales pueden contener marcadores de posición. Estos se indican mediante el signo de dólar y llaves (`${expresión}`).

#### Multilíneas

Cualquier caracter de nueva línea insertado en la fuente es parte de la plantilla literal. Usando cadenas normales, tendrías que usar la siguiente sintaxis para obtener cadenas multilínea:

```js
console.log(
  "cadena de texto línea 1\n\
cadena de texto línea 2",
);
// "cadena de texto línea 1
// cadena de texto línea 2"
```

Para obtener el mismo efecto con cadenas multilínea, ahora puedes escribir:

```js
console.log(`cadena de texto línea 1
cadena de texto línea 2`);
// "cadena de texto línea 1
// cadena de texto línea 2"
```

#### Expresiones incrustadas

Para incrustar expresiones dentro de cadenas normales, usarías la siguiente sintaxis:

```js
const five = 5;
const ten = 10;
console.log("Quince es " + (five + ten) + " y no " + (2 * five + ten) + ".");
// "Quince es 15 y no 20."
```

Ahora, con las plantillas literales, puedes hacer uso del azúcar sintáctica haciendo que las sustituciones como esta sean más legibles:

```js
const five = 5;
const ten = 10;
console.log(`Quince es ${five + ten} y no ${2 * five + ten}.`);
// "Quince es 15 y no 20."
```

Para obtener más información, lee acerca de {{JSxRef("template_strings", "plantillas literales")}} en la {{JSxRef("../Referencia", "Referencia de JavaScript")}}.

## Internacionalización

El objeto {{JSxRef("Intl")}} es el espacio de nombres para la API de internacionalización de ECMAScript, que proporciona comparación de cadenas sensible al idioma, formato de números y formato de fecha y hora. Los constructores de los objetos {{JSxRef("Collator")}}, {{JSxRef("NumberFormat")}} y {{JSxRef("DateTimeFormat")}} son propiedades del objeto `Intl`.

### Formato de fecha y hora

El objeto {{JSxRef("DateTimeFormat")}} es útil para formatear la fecha y la hora. El siguiente formato es una fecha para el Inglés como se usa en los Estados Unidos. (El resultado es diferente en otra zona horaria).

```js
const msPerDay = 24 * 60 * 60 * 1000;

// July 17, 2014 00:00:00 UTC.
const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT
```

### Formato de número

El objeto {{JSxRef("NumberFormat")}} es útil para formatear números, por ejemplo, monedas.

```js
const gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3,
});

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
```

### Colación

El objeto {{JSxRef("Collator")}} es útil para comparar y ordenar cadenas.

Por ejemplo, en realidad hay dos órdenes de clasificación diferentes en Alemán, «_phonebook_» y «_dictionary_». La clasificación «_phonebook_» enfatiza el sonido, y es como si "ä", "ö", etc. se expandieran a "ae", "oe", etc. antes de la clasificación.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// como ordenando ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// registra "Hochberg, Hönigswald, Holzman"
```

Algunas palabras alemanas se conjugan con diéresis adicionales, por lo que en los diccionarios es sensato ordenar ignorando diéresis (excepto cuando se ordenan palabras que difieren _solo_ por las diéresis: «_schon_» antes de «_schön_»).

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// como si ordenara ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// registra "Hochberg, Holzman, Hönigswald"
```

Para obtener más información sobre la API de {{JSxRef("Intl")}}, consulta también la [Introducción a la API de internacionalización de JavaScript](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/).

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}
