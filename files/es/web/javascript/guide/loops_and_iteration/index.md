---
title: Bucles e iteración
slug: Web/JavaScript/Guide/Loops_and_iteration
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}

Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente. Este capítulo de la [Guía de JavaScript](/es/docs/Web/JavaScript/Guide) presenta las diferentes declaraciones de iteración disponibles para JavaScript.

Puedes pensar en un bucle como una versión computarizada del juego en la que le dices a alguien que dé _X_ pasos en una dirección y luego _Y_ pasos en otra. Por ejemplo, la idea "Ve cinco pasos hacia el este" se podría expresar de esta manera como un bucle:

```js
for (let step = 0; step < 5; step++) {
  // Se ejecuta 5 veces, con valores del paso 0 al 4.
  console.log("Camina un paso hacia el este");
}
```

Hay muchos diferentes tipos de bucles, pero esencialmente, todos hacen lo mismo: repiten una acción varias veces. (¡Ten en cuenta que es posible que ese número sea cero!).

Los diversos mecanismos de bucle ofrecen diferentes formas de determinar los puntos de inicio y terminación del bucle. Hay varias situaciones que son fácilmente atendidas por un tipo de bucle que por otros.

Las declaraciones para bucles proporcionadas en JavaScript son:

- [Declaración for](#declaración_for)
- [Declaración do...while](#declaración_do...while)
- [Declaración while](#declaración_while)
- [Declaración labeled](#declaración_labeled)
- [Declaración break](#declaración_break)
- [Declaración continue](#declaración_continue)
- [Declaración for...in](#declaración_for...in)
- [Declaración for...of](#declaración_for...of)

## Declaración `for`

Un ciclo {{JSxRef("Statements/for", "for")}} se repite hasta que una condición especificada se evalúe como `false`. El bucle `for` de JavaScript es similar al bucle `for` de Java y C.

Una declaración `for` tiene el siguiente aspecto:

```js-nolint
for (expresiónInicial; expresiónCondicional; expresiónDeActualización)
  instrucción
```

Cuando se ejecuta un bucle `for`, ocurre lo siguiente:

1. Se ejecuta la expresión de iniciación `expresiónInicial`, si existe. Esta expresión normalmente inicia uno o más contadores de bucle, pero la sintaxis permite una expresión de cualquier grado de complejidad. Esta expresión también puede declarar variables.
2. Se evalúa la expresión `expresiónCondicional`. Si el valor de `expresiónCondicional` es verdadero, se ejecutan las instrucciones del bucle. Si el valor de `expresiónCondicional` es falso, el bucle `for` termina. (Si la expresión `expresiónCondicional` se omite por completo, se supone que la condición es verdadera).
3. Se ejecuta la `instrucción`. Para ejecutar varias instrucciones, usa una [declaración de bloque](/es/docs/Web/JavaScript/Reference/Statements/block) (`{ ... }`) para agrupar esas declaraciones.
4. Si está presente, se ejecuta la expresión de actualización `expresiónDeActualización`.
5. El control regresa al paso 2.

### Ejemplo

En el siguiente ejemplo, la función contiene una instrucción `for` que cuenta el número de opciones seleccionadas en una lista de desplazamiento (un elemento [`<select>`](/es/docs/Web/HTML/Reference/Elements/select) que permite múltiples selecciones).

#### HTML

```html
<form name="selectForm">
  <label for="musicTypes"
    >Elige algunos tipos de música, luego haz clic en el botón de abajo:</label
  >
  <select id="musicTypes" name="musicTypes" multiple>
    <option selected>R&amp;B</option>
    <option>Jazz</option>
    <option>Blues</option>
    <option>New Age</option>
    <option>Classical</option>
    <option>Opera</option>
  </select>
  <button id="btn" type="button">¿Cuántos están seleccionados?</button>
</form>
```

#### JavaScript

La instrucción `for` declara la variable `i` y la inicia a `0`. Comprueba que `i` es menor que el número de opciones en el elemento `<select>`, realiza la siguiente instrucción `if` e incrementa `i` después de cada pasada por el bucle.

```js
function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`Has seleccionado ${countSelected(musicTypes)} opción(es).`);
});
```

## Declaración `do...while`

La instrucción {{JSxRef("Statements/do...while", "do...while")}} se repite hasta que una condición especificada se evalúe como falsa.

Una declaración `do...while` tiene el siguiente aspecto:

```js-nolint
do
  expresión
while (condición);
```

`expresión` siempre se ejecuta una vez antes de que se verifique la condición. (Para ejecutar varias instrucciones, usa una declaración de bloque (`{ ... }`) para agrupar esas declaraciones).

Si `condición` es `true`, la declaración se ejecuta de nuevo. Al final de cada ejecución, se comprueba la condición. Cuando la condición es `false`, la ejecución se detiene y el control pasa a la declaración que sigue a `do...while`.

### Ejemplo

En el siguiente ejemplo, el bucle `do` itera al menos una vez y se repite hasta que `i` ya no sea menor que `5`.

```js
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## Declaración `while`

Una declaración {{JSxRef("Statements/while", "while")}} ejecuta sus instrucciones siempre que una condición especificada se evalúe como `true`. Una instrucción `while` tiene el siguiente aspecto:

```js-nolint
while (condición)
  expresión
```

Si la `condición` se vuelve `false`, la `instrucción` dentro del bucle se deja de ejecutar y el control pasa a la instrucción que sigue al bucle.

La prueba de condición ocurre _antes_ de que se ejecute la `expresión` en el bucle. Si la condición devuelve `true`, se ejecuta la `expresión` y la `condición` se prueba de nuevo. Si la condición devuelve `false`, la ejecución se detiene y el control se pasa a la instrucción que sigue a `while`.

Para ejecutar varias instrucciones, usa una declaración de bloque (`{ ... }`) para agrupar esas declaraciones.

### Ejemplo 1

El siguiente ciclo del `while` se repite siempre que `n` sea menor que `3`:

```js
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

Con cada iteración, el bucle incrementa `n` y agrega ese valor a `x`. Por lo tanto, `x` y `n` toman los siguientes valores:

- Después de la primera pasada: `n` = `1` y `x` = `1`
- Después de la segunda pasada: `n` = `2` y `x` = `3`
- Después de la tercera pasada: `n` = `3` y `x` = `6`

Después de completar la tercera pasada, la condición `n < 3` ya no es `true`, por lo que el bucle termina.

### Ejemplo 2

Evita los bucles infinitos. Asegúrate de que la condición en un bucle eventualmente se convierta en `false`; de lo contrario, el bucle nunca terminará. Las declaraciones en el siguiente bucle `while` se ejecutan indefinidamente porque la condición nunca se vuelve `false`:

```js example-bad
// ¡Los bucles infinitos son malos!
while (true) {
  console.log("¡Hola, mundo!");
}
```

## Declaración `labeled`

Una {{JSxRef("Statements/label", "label")}} proporciona una instrucción con un identificador que te permite hacer referencia a ella en otra parte de tu programa. Por ejemplo, puedes usar una etiqueta para identificar un bucle y luego usar las declaraciones `break` o `continue` para indicar si un programa debe interrumpir el bucle o continuar su ejecución.

La sintaxis de la instrucción etiquetada es similar a la siguiente:

```js-nolint
label:
  instrucción
```

El valor de `label` puede ser cualquier identificador de JavaScript que no sea una palabra reservada. La `declaración` que identifica a una etiqueta puede ser cualquier enunciado. Para ejemplos de uso de declaraciones etiquetadas, mira los ejemplos de `break` y `continue` más abajo.

## Declaración `break`

Usa la instrucción {{JSxRef("Statements/break", "break")}} para terminar un bucle, `switch` o junto con una declaración etiquetada.

- Cuando usas `break` sin una etiqueta, inmediatamente termina el `while`, `do-while`, `for` o `switch` y transfiere el control a la siguiente declaración.
- Cuando usas `break` con una etiqueta, termina la declaración etiquetada especificada.

La sintaxis de la instrucción `break` se ve así:

```js
break;
break label;
```

1. La primera forma de la sintaxis termina el bucle envolvente más interno o el `switch`.
2. La segunda forma de la sintaxis termina la instrucción etiquetada específica.

### Ejemplo 1

El siguiente ejemplo recorre en iteración los elementos de un arreglo hasta que encuentra el índice de un elemento cuyo valor es `theValue`:

```js
for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}
```

### Ejemplo 2: romper una etiqueta

```js
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Bucles externos: ", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Bucles internos: ", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

## Declaración `continue`

La instrucción {{JSxRef("Statements/continue", "continue")}} se puede usar para reiniciar un `while`, `do-while`, `for`, o declaración `label`.

- Cuando utilizas `continue` sin una etiqueta, finaliza la iteración actual del `while`, `do-while` o `for` y continúa la ejecución del bucle con la siguiente iteración. A diferencia de la instrucción `break`, `continue` no termina la ejecución del bucle por completo. En un bucle `while`, vuelve a la condición. En un bucle `for`, salta a la `expresión-incremento`.
- Cuando usas `continue` con una etiqueta, se aplica a la declaración de bucle identificada con esa etiqueta.

La sintaxis de la instrucción `continue` se parece a la siguiente:

```js
continue;
continue label;
```

### Ejemplo 1

El siguiente ejemplo muestra un bucle `while` con una instrucción `continue` que se ejecuta cuando el valor de `i` es `3`. Por lo tanto, `n` toma los valores `1`, `3`, `7` y `12`.

```js
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
// Muestra:
// 1 3 7 12
```

Si comentas `continue;`, el bucle se ejecutaría hasta el final y verías `1,3,6,10,15`.

### Ejemplo 2

Una declaración etiquetada `checkIandJ` contiene una declaración etiquetada `checkJ`. Si se encuentra `continue`, el programa termina la iteración actual de `checkJ` y comienza la siguiente iteración. Cada vez que se encuentra `continue`, `checkJ` reitera hasta que su condición devuelve `false`. Cuando se devuelve `false`, el resto de la instrucción `checkIandJ` se completa y `checkIandJ` reitera hasta que su condición devuelve `false`. Cuando se devuelve `false`, el programa continúa en la declaración que sigue a `checkIandJ`.

Si `continue` tuviera una etiqueta de `checkIandJ`, el programa continuaría en la parte superior de la declaración `checkIandJ`.

```js
let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
  console.log(i);
  i += 1;
  checkJ: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue;
    }
    console.log(j, "es impar.");
  }
  console.log("i =", i);
  console.log("j =", j);
}
```

## Declaración `for...in`

La instrucción {{JSxRef("Statements/for...in", "for...in")}} itera una variable especificada sobre todas las propiedades enumerables de un objeto. Para cada propiedad distinta, JavaScript ejecuta las instrucciones especificadas. Una declaración `for...in` tiene el siguiente aspecto:

```js-nolint
for (variable in objeto)
  instrucción
```

### Ejemplo

La siguiente función toma como argumento un objeto y el nombre del objeto. Luego itera sobre todas las propiedades del objeto y devuelve una cadena que enumera los nombres de las propiedades y sus valores.

```js
function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
}
```

Para un objeto `car` con propiedades `make` y `model`, `result` sería:

```
car.make = Ford
car.model = Mustang
```

### Arrays

Aunque puede ser tentador usar esto como una forma de iterar sobre los elementos {{JSxRef("Array")}}, la instrucción `for...in` devolverá el nombre de sus propiedades definidas por el usuario además de los índices numéricos.

Por lo tanto, es mejor usar un bucle {{JSxRef("Statements/for", "for")}} tradicional con un índice numérico cuando se itera sobre arreglos, porque la instrucción `for...in` itera sobre las propiedades definidas por el usuario además de los elementos del arreglo, si modificas el objeto `Array` (tal como agregar propiedades o métodos personalizados).

## Declaración `for...of`

La declaración {{JSxRef("Statements/for...of", "for...of")}} crea un bucle que se repite sobre [objetos iterables](/es/docs/Web/JavaScript/Reference/Iteration_protocols) (incluidos {{JSxRef("Array")}}, {{JSxRef("Map")}}, {{JSxRef("Set")}}, objetos {{JSxRef("Functions/arguments", "arguments")}} y así sucesivamente), invocando un bucle de iteración personalizado con declaraciones que se ejecutarán para el valor de cada distinta propiedad.

```js-nolint
for (variable of iterable)
  expresión
```

El siguiente ejemplo muestra la diferencia entre un bucle `for...of` y un bucle {{JSxRef("Statements/for...in", "for...in")}}. Mientras que `for...in` itera sobre los nombres de propiedad, `for...of` itera sobre los valores de propiedad:

```js
const arr = [3, 5, 7];
arr.foo = "hola";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Muestra: 3 5 7
```

Las declaraciones `for...of` y `for...in` también se pueden usar con [desestructuración](/es/docs/Web/JavaScript/Reference/Operators/Destructuring). Por ejemplo, puedes recorrer simultáneamente las claves y los valores de un objeto usando {{JSxRef("Object.entries()")}}.

```js
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2
```

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}
