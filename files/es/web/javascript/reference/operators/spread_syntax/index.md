---
title: Sintaxis Spread
slug: Web/JavaScript/Reference/Operators/Spread_syntax
---

{{jsSidebar("Operators")}}**La sintaxis extendida o spread** **syntax** permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de función) o elementos (para [Array literales](/es/docs/Web/JavaScript/Guide/Grammar_and_types#Literales_Array)) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para [literales Tipo Objeto](/es/docs/Web/JavaScript/Guide/Grammar_and_types#Literales)) son esperados.{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

La fuente para este ejemplo interactivo está almacenada en el repositorio de GitHub. Si quieres contribuir al proyecto interactivo de ejemplos, por favor clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud de descarga (pull).

## Sintaxis

Para llamadas de funciones:

```
myFunction(...iterableObj);
```

Para arreglos literales o cadenas de caracteres:

```
[...iterableObj, '4', 'five', 6];
```

Para objetos literales (nuevo en ECMAScript 2018):

```
let objClone = { ...obj };
```

## Ejemplos

### Spread en llamadas de función

#### Reemplaza "apply"

Es frecuente usar {{jsxref( "Function.prototype.apply")}} en casos donde quieres usar los elementos de un arreglo como argumentos de una función.

```js
function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction.apply(null, args);
```

Con la sintaxis expandida (spread syntax), el código anterior puede ser escrito como:

```js
function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction(...args);
```

Cualquier argumento en la lista de argumentos puede usar la sintáxis expandida y esto puede ser usado varias veces.

```js
function myFunction(v, w, x, y, z) {}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### "Apply" para "new"

Cuando se llama un constructor con `new`, no es posible usar **directamente** un arreglo y `apply` (`apply` hace un `[[Call]]` y no un `[[Construct]]`). Sin embargo, un arreglo puede ser fácilmente usado con un new gracias a la sintáxis expandida:

```js
var dateFields = [1970, 0, 1]; // 1 Jan 1970
var d = new Date(...dateFields);
```

Para usar **new** con un arreglo de parámetros sin la sintáxis expandida, podrías tener que hacerlo **indirectamente** a través de una aplicación parcial:

```js
function applyAndNew(constructor, args) {
  function partial() {
    return constructor.apply(this, args);
  }
  if (typeof constructor.prototype === "object") {
    partial.prototype = Object.create(constructor.prototype);
  }
  return partial;
}

function myConstructor() {
  console.log("arguments.length: " + arguments.length);
  console.log(arguments);
  this.prop1 = "val1";
  this.prop2 = "val2";
}

var myArguments = ["hi", "how", "are", "you", "mr", null];
var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments());
// (internal log of myConstructor):           arguments.length: 6
// (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
// (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}
```

### Expandir Array literales

#### Un literal Array más poderoso

Sin **`sintaxis expandida (spread syntax)`**, para crear un nuevo arreglo usando un arreglo existente como parte de él,no es suficiente la sintaxis de Array literal y en su lugar se debe usar código imperativo con una combinación de `push`, `splice`, `concat`, etc. Con la sintaxis expandida, esto se vuelve mucho mas práctico:

```js
var parts = ["shoulders", "knees"];
var lyrics = ["head", ...parts, "and", "toes"];
// ["head", "shoulders", "knees", "and", "toes"]
```

Así como para expandir listas de argumentos, `...` puede ser usado en cualquier parte dentro del Array literal, y múltiples veces.

#### Copiar un arreglo

```js
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

**Nota:** La sintaxis expandida efectivamente va a un nivel de profundidad mientras copia un arreglo. Por lo tanto, esto no permite copiar arreglos multidimensionales como se muestra en los siguientes ejemplos (es lo mismo con {{jsxref("Object.assign()")}} y sintaxis spread).

```js
var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
// Now array a is affected as well: [[], [2], [3]]
```

#### Una forma mejor para concatenar arreglos

{{jsxref("Array.concat")}} es usada a menudo para concatenar un arreglo al final de un arreglo ya existente. Sin la sintaxis spread se realiza:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

Con la sintaxis spread se transforma en:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
```

{{jsxref("Array.unshift")}} es a menudo usada para insertar un arreglo de valores al inicio de un arreglo existente. Sin la sintáxis spread, esto es hecho como:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2); // arr1 is now [3, 4, 5, 0, 1, 2]
```

Con la sintaxis spread se convierte en \[Observa, sin embargo, que esto crea un nuevo arreglo `arr1`. Diferente a {{jsxref("Array.unshift")}}, esto no modifica el arreglo original en sitio `arr1`]:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]
```

### Spread en literales tipo Objeto

La propuesta [Propiedades Rest/Spread para ECMAScript](https://github.com/tc39/proposal-object-rest-spread) (etapa 4) agrega propiedades spread a los [literales Tipo Objeto](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer). Esto copia sus propiedades enumerables desde un objeto provisto dentro de un nuevo objeto.

Shallow-cloning (excluyendo prototype) o la combinación de objetos es ahora posible usando una sintaxis más corta que {{jsxref("Object.assign()")}}.

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

Observa que {{jsxref("Object.assign()")}} desencadena [setters](/es/docs/Web/JavaScript/Reference/Functions/set) mientras que la sintaxis spread no lo hace.

Observa que tú no puedes reemplazar o replicar la función {{jsxref("Object.assign()")}}:

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

var mergedObj = merge(obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

var mergedObj = merge({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

En el ejemplo de arriba, el operador spread no trabaja como uno podría esperar: este dispersa un _arreglo_ de argumentos en el literal Tipo Objeto, debido al parámetro rest.

### Sólo para iterables

La sintaxis Spread (otra que en el caso de las propiedades spread) puede ser aplicada sólo a los objetos [iterables](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator):

```js
var obj = { key1: "value1" };
var array = [...obj]; // TypeError: obj is not iterable
```

### Spread con muchos valores

Cuando se usa la sintaxis spread para llamados de funciones, tenga en cuenta la posibilidad de exceder el límite de longitud de argumentos del motor de JavaScript. Vea [`apply()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) para más detalles.

## Sintaxis Rest (parámetros)

La sintaxis Rest luce exactamente como la sintaxis spread, pero esto es usado por la desestructuración de arreglos y objetos. De cierta forma, la sintaxis rest es la opuesta a la sintaxis spread: spread 'expande' un arreglo en sus elementos, mientras rest agrupa múltiples elementos y los 'condensa' en un único elemento. Consulta [parámetros rest.](/es/docs/Web/JavaScript/Reference/Functions_and_function_scope/rest_parameters)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [Rest parameters](/es/docs/Web/JavaScript/Reference/Functions_and_function_scope/rest_parameters) (también '`...`')
