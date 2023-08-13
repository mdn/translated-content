---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
---

{{JSRef}}

El objeto **`RegExp`** se utiliza para hacer coincidir texto con un patrón.

Para obtener una introducción a las expresiones regulares, lee el {{JSxRef("Guide/Regular_Expressions", "capítulo sobre expresiones regulares")}} en la {{JSxRef("Guide/Regular_Expressions", "Guía de JavaScript")}}.

## Descripción

### Notación literal y constructor

Hay dos formas de crear un objeto `RegExp`: una _notación literal_ y un _constructor_.

- Los parámetros de **la notación literal** se encierran entre barras y no utilizan comillas.
- Los parámetros de **la función constructora** no se encierran entre barras, pero utilizan comillas.

Las siguientes tres expresiones crean el mismo objeto de expresión regular:

```js
let er = /ab+c/i; // notación literal
let er = new RegExp("ab+c", "i"); // constructor con patrón de cadena como primer argumento
let er = new RegExp(/ab+c/, "i"); // constructor con expresión regular literal como primer argumento (a partir de ECMAScript 6)
```

La notación literal da como resultado la compilación de la expresión regular cuando se evalúa la expresión. Utiliza la notación literal cuando la expresión regular permanecerá constante. Por ejemplo, si usas notación literal para construir una expresión regular usada en un bucle, la expresión regular no se volverá a compilar en cada iteración.

El constructor del objeto de expresión regular, por ejemplo, `new RegExp('ab+c')`, da como resultado la compilación en tiempo de ejecución de la expresión regular. Utiliza la función constructora cuando sepas que el patrón de expresión regular cambiará, o no conozcas el patrón y lo obtienes de otra fuente, tal como la entrada del usuario.

### Banderas en el constructor

A partir de ECMAScript 6, `new RegExp(/ab+c/, 'i')` ya no arroja un {{JSxRef("TypeError")}} (`"no puedes proporcionar banderas cuando construyes una expresión regular a partir de otra"`) cuando el primer argumento es una `RegExp` y el segundo argumento `flags` está presente. En su lugar, se crea una nueva `RegExp` a partir de los argumentos.

Cuando se utiliza la función constructora, las reglas de escape de cadenas normales (antes de los caracteres especiales con `\` cuando se incluyen en una cadena) son necesarias.

Por ejemplo, los siguientes son equivalentes:

```js
let er = /\w+/;
let er = new RegExp("\\w+");
```

### Propiedades de expresiones regulares similares a Perl

Ten en cuenta que varias de las propiedades de {{JSxRef("RegExp")}} tienen nombres largos y cortos (tipo Perl). Ambos nombres siempre se refieren al mismo valor. (Perl es el lenguaje de programación a partir del cual JavaScript modeló sus expresiones regulares). Consulta también las propiedades {{JSxRef("Características_Desaprobadas", "en desuso de RegExp", "#Propiedades_de_RegExp")}}

## Constructor

- {{JSxRef("Objetos_globales/RegExp/RegExp", "RegExp()")}}
  - : Crea un nuevo objeto `RegExp`.

## Propiedades estáticas

- {{JSxRef("RegExp.@@species", "get RegExp[@@species]")}}
  - : La función constructora utilizada para crear objetos derivados.
- {{JSxRef("RegExp.lastIndex")}}
  - : El índice en el que comenzará la siguiente búsqueda.

## Propiedades de la instancia

- {{JSxRef("RegExp.prototype.flags")}}
  - : Una cadena que contiene las banderas del objeto `RegExp`.
- {{JSxRef("RegExp.prototype.dotAll")}}
  - : Si el "`.`" coincide con nuevas líneas o no.
- {{JSxRef("RegExp.prototype.global")}}
  - : Si se debe probar o no la expresión regular con todas las posibles ocurrencias en una cadena, o solo con la primera.
- {{JSxRef("RegExp.prototype.ignoreCase")}}
  - : Si se deben o no ignorar las mayúsculas/minúsculas al buscar en una cadena.
- {{JSxRef("RegExp.prototype.multiline")}}
  - : Si buscar o no en cadenas multilínea.
- {{JSxRef("RegExp.prototype.source")}}
  - : El texto del patrón.
- {{JSxRef("RegExp.prototype.sticky")}}
  - : Si la búsqueda es pegajosa o no.
- {{JSxRef("RegExp.prototype.unicode")}}
  - : Si las funciones Unicode están habilitadas o no.

## Métodos de instancia

- {{JSxRef("RegExp.prototype.compile()")}}
  - : (Re)compila una expresión regular durante la ejecución de un script.
- {{JSxRef("RegExp.prototype.exec()")}}
  - : Ejecuta una búsqueda de una coincidencia en su parámetro de cadena.
- {{JSxRef("RegExp.prototype.test()")}}
  - : Prueba una coincidencia en su parámetro de cadena.
- {{JSxRef("RegExp.prototype.toString()")}}
  - : Devuelve una cadena que representa el objeto especificado. Redefine el método {{JSxRef("Object.prototype.toString()")}}.
- {{JSxRef("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
  - : Realiza la coincidencia con la cadena dada y devuelve el resultado de la coincidencia.
- {{JSxRef("RegExp.prototype.@@matchAll()", "RegExp.prototype[@@matchAll]()")}}
  - : Devuelve todas las coincidencias de la expresión regular con una cadena.
- {{JSxRef("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
  - : Reemplaza las coincidencias en una cadena dada con una nueva subcadena.
- {{JSxRef("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
  - : Busca la coincidencia en la cadena dada y devuelve el índice del patrón encontrado en la cadena.
- {{JSxRef("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
  - : Divide la cadena dada en un arreglo separando la cadena en subcadenas.

## Ejemplos

### Usar una expresión regular para cambiar el formato de los datos

El siguiente script usa el método {{JSxRef("String.prototype.replace()", "replace()")}} de la instancia {{JSxRef("Objetos_globales/String", "String")}} para hacer coincidir una nombre en el formato _primero último_ y enviarlo en el formato _último, primero_.

En el texto de reemplazo, el script usa `$1` y `$2` para indicar los resultados de los correspondientes paréntesis coincidentes en el patrón de expresión regular.

```js
let er = /(\w+)\s(\w+)/;
let str = "John Smith";
let newstr = str.replace(er, "$2, $1");
console.log(newstr);
```

Esto muestra `"Smith, John"`.

### Uso de expresiones regulares para dividir líneas con diferentes finales de línea/saltos de línea

El final de línea predeterminado varía según la plataforma (Unix, Windows, etc.). La división de líneas proporcionada en este ejemplo funciona en todas las plataformas.

```js
let texto = "Un poco de texto\ny un poco más\r\ny aún\reste es el final";
let lineas = texto.split(/\r\n|\r|\n/);
console.log(lineas); // logs [ 'Un poco de texto', 'y un poco más', 'y aún', 'este es el final' ]
```

Ten en cuenta que el orden de los patrones en la expresión regular es importante.

### Usar expresiones regulares en varias líneas

```js
let s = "¡Por favor, sí\nhazme el día!";

s.match(/sí.*día/);
// Devuelve null

s.match(/sí[^]*día/);
// Devuelve ["sí\nhazme el día"]
```

### Usar una expresión regular con la bandera pegajosa

La bandera {{JSxRef("Objetos_globales/RegExp/sticky", "sticky")}} indica que la expresión regular realiza una coincidencia permanente en la cadena de destino al intentar hacer coincidir a partir de {{JSxRef("RegExp.prototype.lastIndex")}}.

```js
let str = "#foo#";
let regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex se tiene en cuenta con una bandera pegajosa)
regex.lastIndex; // 0 (restablecer después de un error de coincidencia)
```

### La diferencia entre la bandera pegajosa y la bandera global

Con la bandera pegajosa `y`, la siguiente coincidencia tiene que ocurrir en la posición `lastIndex`, mientras que con la bandera global `g`, la coincidencia puede ocurrir en la posición `lastIndex` o posterior:

```js
er = /\d/y;
while ((r = re.exec("123 456"))) console.log(r, "Y er.lastIndex", er.lastIndex);

// [ '1', index: 0, input: '123 456', groups: undefined ] AND er.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] AND er.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] AND er.lastIndex 3
//   ... y no más coincidencias.
```

Con la bandera global `g`, coincidirían los 6 dígitos, no solo 3.

### Expresión regular y caracteres Unicode

`\w` y `\W` solo coincide con caracteres basados en ASCII; por ejemplo, `a` a `z`, `A` a `Z`, `0` a `9` y `_`.

Para hacer coincidir caracteres de otros idiomas como Cirílico o Hebreo, usa `\uhhhh`, donde `hhhh` es el Valor Unicode en hexadecimal.

Este ejemplo demuestra cómo se pueden separar los caracteres Unicode de una palabra.

```js
let texto = "Образец texto на русском языке";
let regex = /[\u0400-\u04FF]+/g;

let match = regex.exec(text);
console.log(match[0]); // registra 'Образец'
console.log(regex.lastIndex); // registra '7'

let match2 = regex.exec(texto);
console.log(match2[0]); // registra 'на' [no registró 'texto']
console.log(regex.lastIndex); // registra '15'

// y así sucesivamente
```

La función {{JSxRef("Guide/Regular_Expressions/Unicode_Property_Escapes", "Escapes de propiedad Unicode")}} presenta una solución, al permitir una declaración tan simple como `\p{scx=Cyrl}`.

### Extraer el nombre de subdominio de la URL

```js
let url = "http://xxx.dominio.com";
console.log(/[^.]+/.exec(url)[0].substr(7)); // registra 'xxx'
```

> **Nota:** En lugar de utilizar expresiones regulares para analizar las URL, normalmente es mejor utilizar el analizador de URL integrado en los navegadores mediante la [API URL](/es/docs/Web/API/URL_API).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

### Notas específicas de Firefox

A partir de Firefox 34, en el caso de un grupo de captura con cuantificadores que impiden su ejercicio, el texto coincidente para un grupo de captura ahora es `undefined` en lugar de una cadena vacía:

```js
// Firefox 33 o anterior
"x".replace(/x(.)?/g, function (m, group) {
  console.log("'grupo: " + group + "'");
});
// 'grupo: '

// Firefox 34 o más reciente
"x".replace(/x(.)?/g, function (m, group) {
  console.log("'grupo: " + group + "'");
});
// 'grupo: undefined'
```

Ten en cuenta que, debido a la compatibilidad web, `RegExp.$N` seguirá devolviendo una cadena vacía en lugar de `undefined` ([Error 1053944 en Firefox](https://bugzil.la/1053944)).

## Ve también

- El capítulo de {{JSxRef("Guide/Regular_Expressions", "Expresiones regulares")}} en la {{JSxRef("Guide", "Guía de JavaScript")}}
- {{JSxRef("String.prototype.match()")}}
- {{JSxRef("String.prototype.replace()")}}
- {{JSxRef("String.prototype.split()")}}
