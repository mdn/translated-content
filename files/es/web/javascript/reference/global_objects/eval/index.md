---
title: eval
slug: Web/JavaScript/Reference/Global_Objects/eval
---

{{jsSidebar("Objects")}}

## Resumen

La función `eval()` evalúa un código JavaScript representado como una cadena de caracteres (string), sin referenciar a un objeto en particular.

## Sintaxis

```js
eval(cadena de caracteres o string)
```

### Parámetros

- `cadena de caracteres (string)`
  - : Una cadena de caracteres (string) que representa una expresión, sentencia o secuencia de sentencias en JavaScript. La expresión puede incluir variables y propiedades de objetos existentes.

### Valores retornados o devueltos

El valor que resulta de la evaluación del código proporcionado. Si este valor está vacío. {{jsxref("undefined")}} (artículo en inglés) es devuelto.

## Descripción

`eval()` es una propiedad de la función del objeto global.

El argumento de la función `eval` es una cadena de caracteres. Si la cadena de caracteres representa una expresión, `eval()` evalúa la expresión. Si el argumento representa una o más sentencias JavaScript, `eval()` evalúa las sentencias. No se debe llamar a `eval()` para evaluar una expresión aritmética; ya que JavaScript evalúa las expresiones aritméticas automáticamente.

Si construye una expresión aritmética como una cadena de caracteres, puede usar `eval()` para evaluarla más tarde. Por ejemplo, suponga que tiene la variable `x`. Puede posponer la evaluación de una expresión que involucre a `x` mediante la asignación del valor de la cadena de caracteres de la expresión, asignando "`3 * x + 2`" a la variable, y entonces llamar a `eval()` posteriormente en el script.

Si el argumento de `eval()` no es una cadena de caracteres, `eval()` devuelve el argumento sin cambio. En el siguiente ejemplo, el constructor `String` es especificado, y `eval()` devuelve un objeto `String` en lugar de evaluar la cadena de caracteres.

```
eval(new String("2 + 2")); // devuelve un objeto String que contiene "2 + 2"
eval("2 + 2");             // devuelve 4
```

Puede trabajar sobre esta limitación de una manera genérica utilizando `toString()`.

```
var expresion = new String("2 + 2");
eval(expresion.toString());
```

Si utiliza la función `eval()` _indirectamente_, invocándola a través de una referencia distinta de `eval`, a partir de ECMAScript 5, ésta funciona en el ámbito global en lugar de hacerlo en el ámbito local; esto quiere decir, por ejemplo, que las declaraciones de función crean funciones globales, y que el código siendo evaluado no tiene acceso a las variables locales dentro del ámbito en donde está siendo llamada.

```js
function test() {
  var x = 2,
    y = 4;
  console.log(eval("x + y")); // Llamada directa, utiliza el ámbito local, el resultado es 6
  var geval = eval;
  console.log(geval("x + y")); // Llamada indirecta, utiliza el ámbito global, através de ReferenceError por que `x` es indefinida
}
```

## No utilice `eval` innecesariamente

`eval()` es una función peligrosa, quel ejecuta el código el cual es pasado con los privilegios de quien llama. Si ejecuta `eval()` con una cadena de caracteres que podría ser afectada por un elemento malicioso, podría terminar ejecutando código malicioso dentro de la computadora del usuario con los permisos de su página o extensión web . Más importante aún, una parte del código de terceros podría accesar al ámbito en el cual `eval()` fue invocada, lo que puede permitir la entrada a posibles ataques de formas a las que el constructor {{jsxref("Global_Objects/Function", "Function")}} (art. en inglés) el cual es similar, no es susceptible.

`eval()` es generalmente también más lenta que otras alternativas desde que se invoca en el intérprte de JS, mientras que otros muchos constructores son optimizados por los motores JS modernos.

Existen alternativas más seguras (y rápidas) que `eval()` para casos de uso común.

### Accediendo a propiedades de los miembros

No debería utilizar `eval()` con el fin de convertir nombres de propiedades en propiedades. Observe el siguiente ejemplo en el cual la función `getNombreCampo(n)` devuelve el nombre del elemento del formulario especificado como una cadena. La primera sentencia asigna el valor de cadena del tercer elemento del formulario a la variable `campo`. La segunda sentencia utiliza `eval` para mostrar el valor del elemento del formulario.

```
var campo = getNombreCampo(3);
document.write("El campo llamado ", campo, " tiene un valor de ", eval(campo + ".value"));
```

Sin embargo, `eval()` no es necesario en este código. De hecho, su uso aquí no se recomienda. En su lugar, utilice los [operadores de miembro](/es/Web/JavaScript/Referencia/Operadores/Miembros) (art. en inglés), que son mucho más rápidos y seguros:

```js
var campo = getFieldName(3);
document.write("El campo llamado ", campo, " tiene un valor de ", campo[valor]);
```

Considere ahora este nuevo ejemplo, en donde la propiedad del objeto a ser accesado no es conocida hasta que el código es ejecutado. Esto puede hacerse con eval:

```js
var obj = { a: 20, b: 30 };
var nombreProp = obtenerNombreProp(); // devuelve "a" o "b"

eval("var resultado = obj." + nombreProp);
```

Y con el uso de los [accesores de propiedades](/es/docs/Web/JavaScript/Reference/Operators/Property_Accessors) (artículo en inglés), el cual es mucho más rápido y seguro, sería así:

```js
var obj = { a: 20, b: 30 };
var nombreProp = obtenerNombreProp(); // devuelve "a" o "b"
var resultado = obj[nombreProp]; //  obj[ "a" ] es el mismo que obj.a
```

Puede incluso utilizar este método para acceder a las propiedades de los descendientes. Utilizando `eval()` esto sería de la siguiente forma:

```js
var obj = { a: { b: { c: 0 } } };
var propPath = getPropPath(); // returns e.g. "a.b.c"

eval("var result = obj." + propPath);
```

Evitando `eval()`, esto podría hacerse dividiendo la ruta de propiedad y haciendo un bucle a través de las diferentes propiedades:

```js
function getDescendantProp(obj, desc) {
  var arr = desc.split(".");
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

var obj = { a: { b: { c: 0 } } };
var propPath = getPropPath(); // returns e.g. "a.b.c"
var result = getDescendantProp(obj, propPath);
```

Estableciendo una propiedad que funcione de modo similar:

```js
function setDescendantProp(obj, desc, value) {
  var arr = desc.split(".");
  while (arr.length > 1) {
    obj = obj[arr.shift()];
  }
  obj[arr[0]] = value;
}

var obj = { a: { b: { c: 0 } } };
var propPath = getPropPath(); // returns e.g. "a.b.c"
var result = setDescendantProp(obj, propPath, 1); // test.a.b.c will now be 1
```

### Utilice funciones en lugar de evaluar fragmentos de código

JavaScript tiene [funciones de primera clase](http://en.wikipedia.org/wiki/First-class_function)(artículo en inglés), lo que quiere decir que usted puede pasar funciones como argumentos a otras APIs, almacenarlas en variables y propiedades de objetos, etc. Muchas APIs de DOM están diseñadas con esto en mente, o sea que usted puede (y debería) escribir:

```js
// instead of setTimeout(" ... ", 1000) use:
setTimeout(function() { ... }, 1000);

// instead of elt.setAttribute("onclick", "...") use:
elt.addEventListener("click", function() { ... } , false);
```

Las [clausuras o cierres](/es/docs/Web/JavaScript/Closures)(art. en inglés) son muy útiles como forma de crear funciones parametrizadas sin la concatenación de cadenas de caracteres o strings.

### Analizando JSON (convirtiendo cadenas de caracteres (strings) hacia objetos de JavaScript)

Si la cadena de caracteres que usted esta llamando `eval()` contiene datos (por ejemplo, un array: `"[1, 2, 3]"`), en contraposición al código, debería considerar un cambio a [JSON](/es/docs/Glossary/JSON) (art. en inglés), el cual permite a la cadena de caracteres utilizar un subconjunto de sintaxis de JavaScript para representar los datos. Vea también [Descargando JSON y JavaScript en extensiones](/es/docs/Downloading_JSON_and_JavaScript_in_extensions) (art. en inglés).

Observe, que ya que la sintaxis de JSON es limitada en comparación con la sintaxis de JavaScript, muchas literales válidas de JavaScript no serán analizadas como JSON. Por ejemplo, seguir comas no está permitido en JSON, y los nombres de propiedades (keys) en literales de objeto deben ser entrecomilladas. Asegúrese de utilizar un serializados de JSON para generar cadenas de caracteres que posteriormente sean analizadas como JSON.

### Pasar datos en lugar de código

Por ejemplo, una extensión diseñada para arrastar contenido de páginas web podría tener reglas de arrastre definidas en [XPath](/es/docs/XPath) (art. en inglés) en lugar de código JavaScript.

### Ejecutar código sin privilegos limitados

Si usted debe ejecutar código, considere ejecutarlo con privilegios reducidos. Este consejo aplica principalmente para las extensiones y las aplicaciones XUL, para lo cual puede utilizar [Components.utils.evalInSandbox](/es/docs/Components.utils.evalInSandbox) (art. en inglés).

## Ejemplos

Los siguientes ejemplos muestran el resultado usando `document.write`. En JavaScript del lado servidor, puede mostrar el mismo resultado llamando a la función `write` en vez de `document.write`.

### Utlizando `eval`

En el siguiente código, las dos sentencias que contienen `eval` devuelven 42. La primera evalúa la cadena "`x + y + 1`"; la segunda evalúa la cadena "`42`".

```
var x = 2;
var y = 39;
var z = "42";
eval("x + y + 1"); // returns 42
eval(z);           // returns 42
```

### Utilizando `eval` para evaluar una cadena de caracteres (string) como sentencias de JavaScript

El siguiente ejemplo utiliza `eval` para evaluar una cadena de caracteres `str`. Esta cadena consiste de sentencias de JavaScript que abren un diálogo `Alert` y asignan a `z` un valor de 42 si `x` es cinco, y asigna 0 a `z` en caso contrario. Cuando se ejecuta la segunda sentencia, `eval` ocasionará que estas sentencias sean ejecutadas, y también evaluará el conjunto de sentencias y devolverá que el valor es asignado a `z`.

```js
var x = 5;
var str = "if (x == 5) {alert('z is 42'); z = 42;} else z = 0; ";

document.write("<P>z es ", eval(str));
```

### La última expresión es evaluada

`eval()` devuelve el valor de la última expresión evaluada

```js
var str = "if ( a ) { 1+1; } else { 1+2; }";
var a = true;
var b = eval(str); // devuelve 2

console.log("b is : " + b);

a = false;
b = eval(str); // devuelve 3

console.log("b is : " + b);
```

### `eval` como una cadena de caracteres (string) definiendo funciones requiere "(" y ")" como prefijo y sufijo

```js
var fctStr1 = "function a() {}";
var fctStr2 = "(function a() {})";
var fct1 = eval(fctStr1); // devuelve undefined
var fct2 = eval(fctStr2); // deuelve una función
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea También

- {{jsxref("Objetos_globales/uneval", "uneval()")}}
- [Miembros de operadores](/es/docs/Web/JavaScript/Referencia/Operadores/Miembros)
