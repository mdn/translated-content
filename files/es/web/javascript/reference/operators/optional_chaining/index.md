---
title: Encadenamiento opcional
slug: Web/JavaScript/Reference/Operators/Optional_chaining
---

{{JSSidebar("Operators")}}

El operador de **encadenamiento opcional** **`?.`** permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida. El operador `?.` funciona de manera similar a el operador de encadenamiento `.`, excepto que en lugar de causar un error si una referencia es [casi-nula](/es/docs/Glossary/nullish) ({{JSxRef("null")}} o {{JSxRef("undefined")}}), la expresión hace una evaluación de circuito corto con un valor de retorno de `undefined`. Cuando se usa con llamadas a funciones, devuelve `undefined` si la función dada no existe.

Esto da como resultado expresiones más cortas y simples cuando se accede a propiedades encadenadas dónde existe la posibilidad de que falte una referencia. También puede ser útil al explorar el contenido de un objeto cuando no hay una garantía conocida de qué propiedades se requieren.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html", "taller")}}The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

## Sintaxis

```
obj?.prop
obj?.[expr]
arr?.[index]
func?.(args)
```

## Descripción

El operador de encadenamiento opcional proporciona una forma de simplificar el acceso a los valores a través de objetos conectados cuando es posible que una referencia o función sea `undefined` o `null`.

Por ejemplo, considere un objeto `obj` que tiene una estructura anidada. Sin encadenamiento opcional, buscar una subpropiedad profundamente anidada requiere validar las referencias intermedias, como:

```js
let nestedProp = obj.first && obj.first.second;
```

Se confirma que el valor de `obj.first` no es `null` (y no es `undefined`) antes de acceder al valor de `obj.first.second`. Esto evita el error que ocurriría si simplemente accediera a `obj.first.second` directamente sin probar `obj.first`.

Sin embargo, con el operador de encadenamiento opcional (`?.`), No tiene que probar explícitamente, ni realizar una evaluación de circuito corto basada en el estado de `obj.first` antes de intentar acceder a `obj.first.second`:

```js
let nestedProp = obj.first?.second;
```

Al usar el operador `?.` en lugar de solo el `.`, JavaScript sabe verificar implícitamente para asegurarse de que `obj.first` no es `null` o `undefined` antes de intentar acceder `obj.first.second`. Si `obj.first` es `null` o `undefined`, la expresión hace una evaluación de circuito corto automáticamente y retorna `undefined`.

Esto es equivalente a lo siguiente, excepto que la variable temporal es de hecho no creada:

```js-nolint
let temp = obj.first;
let nestedProp = ((temp === null || temp === undefined) ? undefined : temp.second);
```

### Encadenamiento opcional con llamadas a funciones

Puede usar el encadenamiento opcional cuando intente llamar a un método que puede no existir. Esto puede ser útil, por ejemplo, cuando se usa una API en la que un método podría no estar disponible, ya sea debido a la antigüedad de la implementación o debido a una característica que no está disponible en el dispositivo del usuario.

El uso de encadenamiento opcional con llamadas a funciones hace que la expresión regrese automáticamente `undefined` en lugar de lanzar una excepción si no se encuentra el método:

```js
let result = someInterface.customMethod?.();
```

> **Nota:** Si hay una propiedad con ese nombre y que no es una función, usar `?.` aún levantará una excepción {{JSxRef("TypeError")}} (`x.y is not a function`).

#### Manejo de callbacks opcionales o manejadores de eventos

Si utiliza callbacks o métodos de recuperación de un objeto con[una asignación de desestructuración](/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring), es posible que tenga valores inexistentes que no puede llamar como funciones a menos que haya probado su existencia. Usando `?.`, Puede evitar esta prueba adicional:

```js
// Escrito a partir de ES2019
function doSomething(onContent, onError) {
  try {
    // ... hacer algo con los datos
  } catch (err) {
    if (onError) {
      // Probando si onError realmente existe
      onError(err.message);
    }
  }
}
```

```js
// Usando encadenamiento opcional con llamado de funciones
function doSomething(onContent, onError) {
  try {
    // ... hacer algo con los datos
  } catch (err) {
    onError?.(err.message); // Sin excepción si onError esta undefined
  }
}
```

### Encadenamiento opcional con expresiones

También puede usar el operador de encadenamiento opcional al acceder a propiedades con una expresión usando [la notación de corchetes](/es/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Bracket_notation):

```js
let nestedProp = obj?.["prop" + "Name"];
```

### El encadenamiento opcional no es válido al lado izquierdo de una asignación

```js
let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

### Acceso a elementos de un arreglo con encadenamiento opcional

```js
let arrayItem = arr?.[42];
```

## Ejemplos

### Ejemplo básico

Este ejemplo busca el valor de la propiedad `name` para el miembro `bar` en un mapa cuando no existe dicho miembro. El resultado es por lo tanto es `undefined`.

```js
let myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

let nameBar = myMap.get("bar")?.name;
```

### Evaluación de circuito corto

Cuando se usa el encadenamiento opcional con expresiones, si el operando izquierdo es `null` o `undefined`, la expresión no se evaluará. Por ejemplo:

```js
let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];

console.log(x); // 0 como x no se incrementó
```

### Apilando el operador de encadenamiento opcional

Con estructuras anidadas, es posible usar encadenamiento opcional varias veces:

```js
let customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // "detailed address" es desconocida
  },
};
let customerCity = customer.details?.address?.city;

// … esto también funciona con la función opcional de encadenamiento
let duration = vacations.trip?.getTime?.();
```

### Combinando con el operador de fusión nulo

El {{JSxRef("Operators/Nullish_Coalescing_Operator", "operador de fusión nulo", '', 1)}} se puede usar después del encadenamiento opcional para generar un valor predeterminado cuando no se encontró ninguno:

```js
let customer = {
  name: "Carl",
  details: { age: 82 },
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El {{JSxRef("Operators/Nullish_Coalescing_Operator", "Nullish Coalescing Operator", '', 1)}}
