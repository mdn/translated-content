---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
---

{{JSRef}}
El objeto **`Array`** de JavaScript es un objeto global que es usado en la construcción de _arrays_, que son objetos tipo lista de alto nivel.

## Descripción

Los _arrays_ son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un _array_ son variables. Dado que la longitud de un _array_ puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los _arrays_ de JavaScript sean densos; esto depende de cómo el programador elija usarlos. En general estas características son cómodas, pero si, en su caso particular, no resultan deseables, puede considerar el uso de _arrays_ con tipo.

### Operaciones habituales

**Crear un Array**

```js
let frutas = ["Manzana", "Banana"];

console.log(frutas.length);
// 2
```

**Acceder a un elemento de Array mediante su índice**

```js
let primero = frutas[0];
// Manzana

let ultimo = frutas[frutas.length - 1];
// Banana
```

**Recorrer un Array**

```js
frutas.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});
// Manzana 0
// Banana 1
```

**Añadir un elemento al final de un Array**

```js
let nuevaLongitud = frutas.push("Naranja"); // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]
```

**Eliminar el último elemento de un Array**

```js
let ultimo = frutas.pop(); // Elimina "Naranja" del final
// ["Manzana", "Banana"]
```

**Añadir un elemento al principio de un Array**

```js
let nuevaLongitud = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]
```

**Eliminar el primer elemento de un Array**

```js
let primero = frutas.shift(); // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]
```

**Encontrar el índice de un elemento del Array**

```js
frutas.push("Fresa");
// ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf("Banana"); // (pos) es la posición para abreviar
// 1
```

**Eliminar un único elemento mediante su posición**

- Ejemplo:
  - : Eliminamos "Banana" del _array_ pasándole dos parámetros: la posición del primer elemento que se elimina y el número de elementos que queremos eliminar. De esta forma, `.splice(pos, 1)` empieza en la posición que nos indica el valor de la variable `pos` y elimina 1 elemento. En este caso, como `pos` vale 1, elimina un elemento comenzando en la posición 1 del _array,_ es decir "Banana".

```js
let elementoEliminado = frutas.splice(pos, 1);
// ["Manzana", "Fresa"]
```

**Eliminar varios elementos a partir de una posición**

- Nota:
  - : Con `.splice()` no solo se puede eliminar elementos del array, si no que también podemos extraerlos guardándolo en un nuevo array. ¡Ojo! que al hacer esto estaríamos modificando el array de origen.

```js
let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log(vegetales);
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos = 1,
  numElementos = 2;

let elementosEliminados = vegetales.splice(pos, numElementos);
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales);
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"
```

**Copiar un Array**

```js
let copiaArray = vegetales.slice();
// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"
```

### Acceso a elementos de un array

Los índices de los _arrays_ de JavaScript comienzan en cero, es decir, el índice del primer elemento de un _array_ es `0`, y el del último elemento es igual al valor de la propiedad `length` del _array_ restándole 1.

Si se utiliza un número de índice no válido, se obtendrá `undefined`.

```js
let arr = [
  "este es el primer elemento",
  "este es el segundo elemento",
  "este es el último elemento",
];
console.log(arr[0]); // escribe en consola 'este es el primer elemento'
console.log(arr[1]); // escribe en consola 'este es el segundo elemento'
console.log(arr[arr.length - 1]); // escribe en consola 'este es el último elemento'
```

Los elementos de un _array_ pueden considerarse propiedades del objeto tanto como `toString` (sin embargo, para ser precisos, `toString()` es un método). Sin embargo, se obtendrá un error de sintaxis si se intenta acceder a un elemento de un _array_ de la forma siguiente, ya que el nombre de la propiedad no sería válido:

```js
console.log(arr.0) // error de sintaxis
```

No hay nada especial ni en los _arrays_ de JavaScript ni en sus propiedades que ocasione esto. En JavaScript, las propiedades cuyo nombre comienza con un dígito no pueden referenciarse con la notación punto y debe accederse a ellas mediante la notación corchete.

Por ejemplo, dado un objeto con una propiedad de nombre `'3d'`, sólo podría accederse a dicha propiedad con la notación corchete.

```js
let decadas = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
console.log(decadas.0)  // error de sintaxis
console.log(decadas[0]) // funciona correctamente
```

```js
renderizador.3d.usarTextura(modelo, 'personaje.png')
renderizador['3d'].usarTextura(modelo, 'personaje.png')
```

Obsérvese que, en el último ejemplo, ha sido necesario poner `'3d'` entre comillas. Es posible usar también comillas con los índices del los _arrays_ de JavaScript (p. ej., `decadas['2']` en vez de `decadas[2]`), aunque no es necesario.

El motor de JavaScript transforma en un string el 2 de `decadas[2]` a través de una conversión implícita mediante `toString`. Por tanto, `'2'` y `'02'` harían referencia a dos posiciones diferentes en el objeto `decadas`, y el siguiente ejemplo podría dar `true` como resultado:

```js
console.log(decadas["2"] != decadas["02"]);
```

### Relación entre `length` y las propiedades numéricas

La propiedad `length` de un _array_ de JavaScript está conectada con algunas otras de sus propiedades numéricas.

Varios de los métodos propios de un _array_ (p. ej., `join()`, `slice()`, `indexOf()`, etc.) tienen en cuenta el valor de la propiedad `length` de un array cuando se les llama.

Otros métodos (p. ej., `push()`, `splice()`, etc.) modifican la propiedad `length` de un array.

```js
const frutas = [];
frutas.push("banana", "manzana", "pera");

console.log(frutas.length); // 3
```

Cuando se le da a una propiedad de un _array_ JavaScript un valor que corresponda a un índice válido para el _array_ pero que se encuentre fuera de sus límites, el motor actualizará el valor de la propiedad `length` como corresponda:

```js
frutas[5] = "fresa";
console.log(frutas[5]); // 'fresa'
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log(frutas.length); // 6
```

Si se aumenta el valor de `length`:

```js
frutas.length = 10;
console.log(frutas); // ['banana', 'manzana', 'pera', <2 empty items>, 'fresa', <4 empty items>]
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log(frutas.length); // 10
console.log(frutas[8]); // undefined
```

Si se disminuye el valor de la propiedad `length` pueden eliminarse elementos:

```js
frutas.length = 2;
console.log(Object.keys(frutas)); // ['0', '1']
console.log(frutas.length); // 2
```

Hay más información sobre este tema en la página sobre [`Array.length`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/length).

### Creación de un array a partir de una expresión regular

El resultado de una búsqueda con una `RegExp` en un string puede crear un _array_ de JavaScript. Este array tendrá propiedades y elementos que proporcionan información sobre la correspondencia encontrada. Para obtener un _array_ de esta forma puede utilizarse `RegExp.exec()`, `String.match()` o `String.replace()`.

El siguiente ejemplo, y la tabla que le sigue, pueden ayudar a comprender mejor las propiedades y elementos a los que nos referimos:

```js
// Buscar una d seguida de una o más b y, al final, de otra d
// Recordar las b y la d final
// No distinguir mayúsculas y minúsculas

const miRe = /d(b+)(d)/i;
const miArray = miRe.exec("cdbBdbsbz");
```

Las propiedades y elementos que se obtienen de esta búsqueda son los siguientes:

| Propiedad/Elemento               | Descripción                                                                                                                                                                                            | Ejemplo              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| `input` {{ReadOnlyInline}}       | El string original sobre el que se ha realizado la búsqueda con la expresión regular                                                                                                                   | `"cdbBdbsbz"`        |
| `index` {{ReadOnlyInline}}       | El índice de la correspondencia en el string, siendo cero el de la primera posición.                                                                                                                   | `1`                  |
| `[0]` {{ReadOnlyInline}}         | Los últimos caracteres que cumplen la correspondencia                                                                                                                                                  | `"dbBd"`             |
| `[1], ...[n]` {{ReadOnlyInline}} | Elementos que indican las correspondencias de substrings entre paréntesis (si se han incluido) de la expresión regular. No hay límite al número de substrings entre paréntesis que se puedan utilizar. | `[1]: "bB" [2]: "d"` |

## Constructor

- **[`Array()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)**
  - : Crea un nuevo objeto `Array`.

## Propiedades estáticas

- [`get Array[@@species]`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/@@species)
  - : La función del constructor se utiliza para crear objetos derivados.

## Métodos estáticos

- [`Array.from()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/from)
  - : Crea una nueva instancia de `Array` a partir de `similarAUnArray`, un objeto iterable o parecido a un _array._
- [`Array.isArray()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray)
  - : Devuelve `true` si `valor` es un _array_, y `false` en caso contrario.
- [`Array.of()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/of)
  - : Crea una nueva instancia de `Array` con un número variable de parámetros, independientemente del número y del tipo de dichos parámetros.

## Propiedades de instancia

- [`Array.prototype.length`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/length)
  - : Indica el número de elementos de un _array_.
- [`Array.prototype[@@unscopables]`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/@@unscopables)
  - : Símbolo que contiene todos los nombres de las propiedades que se excluyen de un ámbito de enlace [`with`](/es/docs/Web/JavaScript/Referencia/Sentencias/with).

## Métodos de instancia

- [`Array.prototype.concat()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/concat)
  - : Devuelve un nuevo _array_ que es la concatenación de aquél sobre el que se invoca, seguido de otros _array(s)_ o valor(es).
- [`Array.prototype.copyWithin()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/copyWithin)
  - : Copia una secuencia de elementos de un _array_ dentro del propio _array_.
- [`Array.prototype.entries()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/entries)
  - : Devuelve un nuevo objeto `Array Iterator` que contiene los pares clave/valor para cada índice del _array_.
- [`Array.prototype.every()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/every)
  - : Devuelve `true` si todos los elementos del _array_ cumplen el predicado que recibe como parámetro.
- [`Array.prototype.fill()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/fill)
  - : Asigna un _`valor`_ estático a todos los elementos del _array_ entre las posiciones `inicio` y `fin`.
- [`Array.prototype.filter()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
  - : Devuelve un nuevo _array_ que contiene todos los elementos de aquél para el cual se llama que cumplan el predicado que se le pasa como parámetro.
- [`Array.prototype.find()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find)
  - : Devuelve el primer _`elemento`_ del _array_ que cumpla el predicado que se pasa como parámetro, o `undefined` si ninguno lo cumple.
- [`Array.prototype.findIndex()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/findIndex)
  - : Devuelve el índice del primer elemento del _array_ que cumpla el predicado que se pasa como parámetro, o `-1` si nunguno lo cumple.
- [`Array.prototype.forEach()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
  - : Llama a la función pasada como parámetro para todos los elementos del _array._
- [`Array.prototype.includes()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/includes)
  - : Determina si el _array_ contiene el `valorBuscado` y devuelve `true` o `false` según sea el caso.
- [`Array.prototype.indexOf()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/indexOf)
  - : Devuelve el índice del primer elemento del _array_ que sea igual a `elementoBuscado`, o `-1` si no existe.
- [`Array.prototype.join()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join)
  - : Concatena en un string todos los elementos de un _array._
- [`Array.prototype.keys()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/keys)
  - : Devuelve un nuevo `Array Iterator` que contiene las claves de cada índice del _array._
- [`Array.prototype.lastIndexOf()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/lastIndexOf)
  - : Devuelve el índice del último elemento del _array_ que sea igual a `elementoBuscado`, o `-1` si no existe.
- [`Array.prototype.map()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
  - : Devuelve un nuevo _array_ que contiene el resultado de llamar a la función pasada como parámetro a todos los elementos del _array_ sobre el que se invoca.
- [`Array.prototype.pop()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/pop)
  - : Elimina el último elemento de un _array_, y devuelve dicho elemento.
- [`Array.prototype.push()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push)
  - : Añade uno o más elementos al final de un _array_ y devuelve el nuevo valor de su propiedad `length`.
- [`Array.prototype.reduce()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
  - : Aplica la función pasada como parámetro a un `acumulador` y a cada valor del _array_, que se recorre de izquierda a derecha, para reducirlo a un único valor.
- [`Array.prototype.reduceRight()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduceRight)
  - : Aplica la función pasada como parámetro a un _`acumulador`_ y a cada valor del _array_, que se recorre de derecha a izquierda, para reducirlo a un único valor.
- [`Array.prototype.reverse()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reverse)
  - : Invierte el orden de los elementos de un _array_ (el primero pasa a ser el último y el último a ser el primero) en el propio _array._ Este método modifica el array.
- [`Array.prototype.shift()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/shift)
  - : Elimina el primer elemento de un _array_, y devuelve dicho elemento.
- [`Array.prototype.slice()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/slice)
  - : Extrae una porción del _array_ sobre el que se llama y devuelve un nuevo _array_.
- [`Array.prototype.some()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/some)
  - : Devuelve `true` si al menos un elemento del _array_ cumple con el predicado que se pasa como parámetro.
- [`Array.prototype.sort()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
  - : Ordena los elementos de un _array_, modificando éste, y devuelve el array ordenado.
- [`Array.prototype.splice()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice)
  - : Añade, borra o modifica elementos de un _array_.
- [`Array.prototype.toLocaleString()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/toLocaleString)
  - : Devuelve un string adaptado a la configuración regional que representa el _array_ y sus elementos. Redefine el método [`Object.prototype.toLocaleString()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/toLocaleString).
- [`Array.prototype.toString()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/toString)
  - : Devuelve un string que representa el _array_ y sus elementos. Redefine el método [`Object.prototype.toString()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/toString).
- [`Array.prototype.unshift()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/unshift)
  - : Añada uno o más elementos al inicio de un _array_ y devuelve el nuevo valor de `length` para el _array_ resultante.
- [`Array.prototype.values()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/values)
  - : Devuelve un nuevo objeto `Array Iterator` que contiene los valores para cada índice del _array_.
- [`Array.prototype[@@iterator]()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/@@iterator)
  - : Devuelve un nuevo objeto `Array Iterator` que contiene los valores para cada índice del _array_.

Ejemplos

### Creación de una matriz unidimensional

El siguiente ejemplo crea un _array_ `mensajes` con una longitud de 0, y luego asigna valores a `mensajes[0]` y a `mensajes[99]`, con lo que la longitud del _array_ pasa a ser 100.

```js
let mensajes = [];
mensajes[0] = "Hola";
mensajes[99] = "mundo";

if (mensajes.length === 100) {
  console.log("La longitud es de 100.");
}
```

### Creación de una matriz de dos dimensiones

El siguiente ejemplo crea una matriz bidimensional que representa un tablero de ajedrez. El primer movimiento se realiza copiando la `'p'` de `tablero[6][4]` en `tablero[4][4]`. La posición `[6][4]` se limpia.

```js
let tablero = [
  ["T", "C", "A", "D", "R", "A", "C", "T"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["t", "c", "a", "d", "r", "a", "c", "t"],
];

console.log(tablero.join("\n") + "\n\n");

// Adelantar dos posiciones el peón de rey
tablero[4][4] = tablero[6][4];
tablero[6][4] = " ";
console.log(tablero.join("\n"));
```

Este es el resultado:

```
T,C,A,D,R,A,C,T
P,P,P,P,P,P,P,P
  , , , , , , ,
  , , , , , , ,
  , , , , , , ,
  , , , , , , ,
p,p,p,p,p,p,p,p
t,c,a,d,r,a,c,t

P,P,P,P,P,P,P,P
  , , , , , , ,
  , , , , , , ,
  , , , ,p, , ,
  , , , , , , ,
p,p,p,p, ,p,p,p
t,c,a,d,r,a,c,t
```

### Uso de un array para tabular un conjunto de valores

```js
valores = [];
for (let x = 0; x < 10; x++) {
  valores.push([2 ** x, 2 * x ** 2]);
}
console.table(valores);
```

da como resultado:

```
0  1  0
1  2  2
2  4  8
3  8  18
4  16  32
5  32  50
6  64  72
7  128  98
8  256  128
9  512  162
```

(La primera columna es el índice).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- En la Guía de JavaScript:

  - ["Propiedades indexadas de un objeto"](/es/docs/Web/JavaScript/Guide/Working_with_Objects#Indexing_object_properties)
  - ["Colecciones con índice: objeto Array"](/es/docs/Web/JavaScript/Guide/Indexed_collections#Array_object)

- [Arrays tipados](/es/docs/JavaScript_typed_arrays)
