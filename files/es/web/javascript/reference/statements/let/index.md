---
title: let
slug: Web/JavaScript/Reference/Statements/let
---

{{jsSidebar("Statements")}}

La instrucción **`let`** declara una variable de alcance local con ámbito de bloque([block](/es/docs/Web/JavaScript/Referencia/Sentencias/block)scope), la cual, opcionalmente, puede ser inicializada con algún valor.

> **Advertencia:** La palabra reservada **`let`** en Mozilla Firefox 44 y anteriores, está solo disponible para bloques de código en HTML que esten envueltos en una etiqueta `<script type="application/javascript;version=1.7">` (o de una version mayor). Las etiquetas [XUL](/es/docs/XUL) tienen acceso a esas características sin necesidad de dicho bloque. Es necesario tomar en cuenta que esta es una característica ~~no estándar~~ **que ya se ha hecho actualmente estándar**, ~~esto~~ **pero** puede crear conflictos con otros navegadores, **ya que fue una característica no estándar.**

## Sintaxis

```
let var1 [= valor1] [, var2 [= valor2]] [, ..., varN [= valorN]];
```

### Parámetros

- `var1`, `var2`, …, `varN`
  - : Los nombres de la variable o las variables a declarar. Cada una de ellas debe ser un identificador legal de JavaScript
- `value1`, `value2`, …, `valueN`
  - : Por cada una de las variables declaradas puedes, opcionalmente, especificar su valor inicial como una expresión legal JavaScript.

## Descripción

**`let`** te permite declarar variables limitando su alcance (_scope_) al bloque, declaración, o expresión donde se está usando.a diferencia de la palabra clave `var` la cual define una variable global o local en una función sin importar el ámbito del bloque. La otra diferencia entre `var` y `let` es que este último se inicializa a un valor sólo cuando un analizador lo evalúa (ver abajo).

Al igual que `const`, `let` no crea propiedades del objeto se declara globalmente (en el alcance más alto).

### Alcance (scope) a nivel de bloque con `let`

Usar la palabra reservada `let` para definir variables dentro de un bloque.

```js
if (x > y) {
  let gamma = 12.7 + y;
  i = gamma * x;
}
```

Es posible usar definiciones `let` para asociar código en extensiones con un pseudo-espacio-de-nombre (pseudo-namespace). (Ver [Mejores prácticas de seguridad en extensiones](/es/docs/Security_best_practices_in_extensions).)

```js
let Cc = Components.classes,
  Ci = Components.interfaces;
```

`let` puede ser útil para escribir código más limpio cuando usamos funciones internas.

```js
var list = document.getElementById("list");

for (var i = 1; i <= 5; i++) {
  var item = document.createElement("LI");
  item.appendChild(document.createTextNode("Item " + i));

  let j = i;
  item.onclick = function (ev) {
    console.log("Item " + j + " is clicked.");
  };
  list.appendChild(item);
}
```

El ejemplo anterior trabaja como se espera porque las cinco instancias de la función (anónima) interna hacen referencia a cinco diferentes instancias de la variable `j`. Nótese que esto no funcionaría como se espera si reemplazamos `let` con `var` o si removemos la variable `j` y simplemente usamos la variable `i` dentro de la función interna.

#### Reglas de alcance

Variables declaradas por `let` tienen por alcance el bloque en el que se han definido, así mismo, como en cualquier bloque interno. De esta manera, `let` trabaja muy parecido a `var`. La más notable diferencia es que el alcance de una variable `var` es la función contenedora:

```js
function varTest() {
  var x = 31;
  if (true) {
    var x = 71; // ¡misma variable!
    console.log(x); // 71
  }
  console.log(x); // 71
}

function letTest() {
  let x = 31;
  if (true) {
    let x = 71; // variable diferente
    console.log(x); // 71
  }
  console.log(x); // 31
}
// llamamos a las funciones
varTest();
letTest();
```

En el nivel superior de un programa y funciones, `let` , a diferencia de `var`, **no crea** una propiedad en el objeto global, por ejemplo:

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

La salida de este código desplegaría "global" una vez.

### Zona muerta temporal y errores con `let`

La **redeclaración** de la misma variable bajo un mismo [ámbito léxico](https://www.ecma-international.org/ecma-262/6.0/#sec-lexical-environments) terminaría en un error de tipo [`SyntaxError`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/SyntaxError). Esto también es **extensible** si usamos `var` dentro del ámbito léxico. Esto nos salvaguarda de redeclarar una variable accidentalmente y que no era posible solo con `var.`

```js
if (x) {
  let foo;
  let foo; // Terminamos con un SyntaxError.
}
if (x) {
  let foo;
  var foo; // Terminamos con un SyntaxError.
}
```

En ECMAScript 2015, `let` [no eleva](/es/docs/Web/JavaScript/Referencia/Sentencias/var#Description) la variable a la parte superior del bloque. Si se hace una referencia a la variable declarada con `let` (`let foo`) antes de su declaración, terminaríamos con un error de tipo `ReferenceError` (al contrario de la variable declarada con `var`, que tendrá el valor `undefined`), esto porque la variables vive en una "zona muerta temporal" desde el inicio del bloque hasta que la declaración ha sido procesada.

```
function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError: foo no está definido
  var bar = 1;
  let foo = 2;
}
```

Es posible encontrar errores en bloques de control [`switch`](/es/docs/JavaScript/Reference/Statements/switch) debido a que solamente existe un block subyacente.

```js
switch (x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // Terminamos con un error de tipo SyntaxError.
    // esto debido a la redeclaracion
    break;
}
```

### Otro ejemplo de zona muerta temporal combinada con ámbito léxico

Debido al [ámbito léxico](https://www.ecma-international.org/ecma-262/6.0/#sec-lexical-environments), el identificador `num` dentro de la expresión (`num + 55`) se evalúa como `num` del bloque `if`, y no como la variable `num` con el valor 33 que esta por encima

En esa misma línea, el `num` del bloque `if` ya se ha creado en el ámbito léxico, pero aún no ha alcanzado (y **terminado**) su inicialización (que es parte de la propia declaración): todavía está en la zona muerta temporal.

```js
function prueba() {
  var num = 33;
  if (true) {
    let num = num + 55; //ReferenceError: no se puede acceder a la declaración léxica `num'antes de la inicialización
  }
}
prueba();
```

## Ejemplos

### `let` vs `var`

Cuando usamos `let` dentro de un bloque, podemos limitar el alcance de la variable a dicho bloque. Notemos la diferencia con `var`, cuyo alcance reside dentro de la función donde ha sido declarada la variable.

```js
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global

  console.log(a); // 4
  console.log(b); // 1
}

console.log(a); // 5
console.log(b); // 1
```

### `let` en bucles

Es posible usar la palabra reservada `let` para enlazar variables con alcance local dentro del alcance de un bucle en lugar de usar una variable global (definida usando `var`) para dicho propósito.

```js
for (let i = 0; i < 10; i++) {
  console.log(i); // 0, 1, 2, 3, 4 ... 9
}

console.log(i); // ReferenceError: i is not defined
```

## Extensiones `let` no-estandar

### Bloques `let`

> **Advertencia:** La **sintaxis del bloque y expresion** `let` es no-estandar y sera deshechado en un futuro. ¡No deben ser usados! ver [error 1023609](https://bugzilla.mozilla.org/show_bug.cgi?id=1023609) y [error 1167029](https://bugzilla.mozilla.org/show_bug.cgi?id=1167029) para mas detalles.

Un **bloque `let`** provee una manera de asociar valores con variables dentro del alcance de un bloque sin afectar el valor de variables con nombre similar fuera del bloque.

#### Sintaxis

```
let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) {declaración};
```

#### Descripción

El bloque `let` provee alcance local para las variables. Funciona enlazando cero o más variables en el alcance léxico de un solo bloque de código; de otra manera, es exactamente lo mismo que una declaración de bloque. Hay que notar particularmente que el alcance de una variable declarada dentro de un bloque `let` usando var es equivalente a declarar esa variable fuera del bloque `let`; dicha variable aún tiene alcance dentro de la función. Al usar la sintaxis de bloque `let`, los paréntesis siguientes a `let` son requeridos. Una falla al incluir dichos paréntesis resultará en un error de sintaxis.

#### Ejemplo

```js
var x = 5;
var y = 0;

let (x = x+10, y = 12) {
  console.log(x+y); // 27
}

console.log(x + y); // 5
```

Las reglas para el bloque de código son las mismas que para cualquier otro bloque de código en JavaScript. Es posible tener sus propias variables locales usando declaraciones `let` en dicho bloque.

#### Reglas de alcance

El alcance de las variables definidas usando `let` es el mismo bloque `let`, así como cualquier bloque interno contenido dentro de el bloque, a menos que esos bloques internos definan variables con el mismo nombre.

### expresiones `let`

> **Advertencia:** `Soporte de expresiones let` ha sido removido en Gecko 41 ([Error 1023609 en Firefox](https://bugzil.la/1023609)).

Una **expresion `let`** permite establecer variables con alcance dentro de una expresión.

#### Sintaxis

```
let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) expression;
```

#### Ejemplo

Podemos usar `let` para establecer variables que tienen como alcance solo una expresión:

```js
var a = 5;
let(a = 6) console.log(a); // 6
console.log(a); // 5
```

#### Reglas de alcance

Dada la expresión `let` siguiente:

```
let (decls) expr
```

Existe un bloque implícito creado alrededor de expr.

## Especificaciones

{{Specifications}}

## Compatibilidad en navegadores

{{Compat}}

## Ver también

- [`var`](/es/docs/Web/JavaScript/Reference/Statements/var)
- [`const`](/es/docs/Web/JavaScript/Reference/Statements/const)
