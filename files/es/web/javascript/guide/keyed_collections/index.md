---
title: Colecciones con clave
slug: Web/JavaScript/Guide/Keyed_collections
---

{{jsSidebar("JavaScript Guide", "Guía de JavaScript")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}

Este capítulo presenta colecciones de datos que están indexadas por una clave; los objetos `Map` y `Set` contienen elementos que son iterables en el orden de inserción.

## Mapas

### Objeto `map`

ECMAScript 2015 introduce una nueva estructura de datos para asociar claves con valores. Un objeto {{JSxRef("Map")}} es un mapa de clave/valor simple y puedes iterar sobre sus elementos en el orden en que fueron insertados.

El siguiente código muestra algunas operaciones básicas con un `Map`. Consulta también la página de referencia de {{JSxRef("Map")}} para obtener más ejemplos y la API completa. Puedes usar un bucle {{JSxRef("Sentencias/for...of", "for...of")}} para devolver un arreglo de `[key, value]` para cada iteración.

```js
let sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (let [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

### Comparar `Object` y `map`

Tradicionalmente, los {{JSxRef("Object", "objetos", "", 1)}} se han utilizado para asignar cadenas a valores. Los objetos te permiten establecer claves a valores, recuperar esos valores, eliminar claves y detectar si algo está almacenado en una clave. Los objetos `Map`, sin embargo, tienen algunas ventajas más que los hacen mejores mapas.

- Las claves de un `Object` son {{JSxRef("Global_Objects/String", "Cadenas")}} o {{JSxRef("Global_Objects/Symbol", "Símbolos")}}, donde pueden tener cualquier valor para un `Map`.
- Puedes obtener el `size` de un `Map` fácilmente, mientras que tienes que realizar un seguimiento manual del tamaño de un `Object`.
- La iteración de mapas está en el orden de inserción de los elementos.
- Un `Object` tiene un prototipo, por lo que hay claves predeterminadas en el mapa. (Esto se puede omitir usando `map = Object.create(null)`).

Estos tres consejos te pueden ayudar a decidir si usar un `Map` o un `Object`:

- Usa mapas sobre objetos cuando las claves sean desconocidas hasta el momento de la ejecución, y cuando todas las claves sean del mismo tipo y todos los valores sean del mismo tipo.
- Utiliza mapas si es necesario almacenar valores primitivos como claves porque el objeto trata cada clave como una cadena, ya sea un valor numérico, un valor booleano o cualquier otro valor primitivo.
- Usa objetos cuando haya lógica que opere en elementos individuales.

### El objeto `WeakMap`

El objeto {{JSxRef("WeakMap")}} es una colección de pares clave/valor en la que las **claves solo son objetos** y los valores pueden ser valores arbitrarios. Las referencias de objeto en las claves se mantienen _débilmente_, lo que significa que son un objetivo de recolección de basura (GC por _Garbage Collection_) si ya no hay otra referencia al objeto. La API de `WeakMap` es la misma que la API de `Map`.

Una diferencia con los objetos `Map` es que las claves en `WeakMap` no son enumerables (es decir, no hay ningún método que te proporcione una lista de las claves). Si lo hubiera, la lista dependería del estado de la recolección de basura, introduciendo el no determinismo.

Para obtener más información y código de ejemplo, consulta también "¿Por qué mapa _Débil_?" en la página de referencia de {{JSxRef("WeakMap")}}.

Un caso de uso de los objetos `WeakMap` es almacenar datos privados para un objeto u ocultar detalles de implementación. El siguiente ejemplo es de la publicación del blog de Nick Fitzgerald ["Ocultar detalles de implementación con WeakMaps de ECMAScript 6"](http://fitzgeraldnick.com/weblog/53/). Los datos y métodos privados pertenecen al objeto y se almacenan en `privates` del objeto `WeakMap`. Todo lo expuesto en la instancia y el prototipo es público; todo lo demás es inaccesible desde el mundo exterior porque `privates` no se exporta desde el módulo.

```js
const privates = new WeakMap();

function Public() {
  const me = {
    // Los datos privados van aquí
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Hacer cosas con datos privados en `me`...
};

module.exports = Public;
```

## `Sets`

### El objeto `Set`

Los objetos {{JSxRef("Set")}} son colecciones de valores. Puedes iterar sus elementos en el orden en que se insertaron. Un valor en un `Set` solo puede aparecer una vez; es único en la colección del `Set`.

El siguiente código muestra algunas operaciones básicas con un `Set`. Además, consulta la página de referencia de {{JSxRef("Set")}} para obtener más ejemplos y la API completa.

```js
let mySet = new Set();
mySet.add(1);
mySet.add("algún texto");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "algún texto"
```

### Conversión entre arreglo y `Set`

Puedes crear un {{JSxRef("Array")}} a partir de un `Set` usando {{JSxRef("Array.from")}} o el {{JSxRef("Operators/Spread_operator", "operador de propagación")}}. Además, el constructor `Set` acepta un `Array` para convertirlo en la otra dirección.

> **Nota:** Recuerda que los objetos `Set` almacenan _valores únicos_, por lo que cualquier elemento duplicado de un arreglo se elimina al realizar la conversión.

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Comparar `Array` y `Set`

Tradicionalmente en muchas situaciones, un conjunto de elementos se ha almacenado en arreglos de JavaScript. Sin embargo, el nuevo objeto `Set` tiene algunas ventajas:

- Eliminar elementos `Array` por valor (`arr.splice(arr.indexOf(val), 1)`) es muy lento.
- Los objetos `Set` te permiten eliminar elementos por su valor. Con un arreglo, tendrías que empalmar (con `splice`) en función del índice de un elemento.
- El valor {{JSxRef("NaN")}} no se puede encontrar con `indexOf` en un arreglo.
- Los objetos `Set` almacenan valores únicos. No es necesario que realices un seguimiento manual de los duplicados.

### El objeto `WeakSet`

Los objetos {{JSxRef("WeakSet")}} son colecciones de objetos. Un objeto en el `WeakSet` solo puede aparecer una vez. Es único en la colección `WeakSet` y los objetos no son enumerables.

Las principales diferencias con el objeto {{JSxRef("Set")}} son:

- A diferencia de los `Sets`, los `WeakSets` son **colecciones _únicamente_ de _objetos_** y no de valores arbitrarios de cualquier tipo.
- El `WeakSet` es _débil_: Las referencias a los objetos de la colección se mantienen débiles. Si no hay otra referencia a un objeto almacenado en el `WeakSet`, pueden ser recolectados como basura. Eso también significa que no hay una lista de objetos actualmente almacenados en la colección. Los `WeakSets` no se pueden enumerar.

Los casos de uso de los objetos `WeakSet` son limitados. No perderán memoria, por lo que puede ser seguro usar elementos DOM como clave y marcarlos con fines de seguimiento, por ejemplo.

## Igualdad de clave y valor de `Map` y `Set`

Tanto la igualdad de claves de los objetos `Map` como la igualdad de valores de los objetos `Set` se basan en "[algoritmo del mismo valor cero](https://tc39.github.io/ecma262/#sec-samevaluezero)":

- La igualdad funciona como el operador de comparación de identidad `===`.
- `-0` y `+0` se consideran iguales.
- {{JSxRef("NaN")}} se considera igual a sí mismo (al contrario de `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_Objects")}}
