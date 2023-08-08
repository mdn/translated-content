---
title: Operador lógico AND (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
l10n:
  sourceCommit: 05218bd05ab482d49ca659473851a285bcb104b0
---

{{jsSidebar("Operators")}}

El **operador lógico AND (`&&`)** (conjunción lógica) será `true` para un conjunto de operandos booleanos si y solo si todos los operandos son `true`. En caso contrario, será `false`.

Generalmente, el operador retorna el valor del primer operando _{{Glossary("falsy")}}_ encontrado cuando evalúa de izquierda a derecha, o el valor del último operando si todos ellos son _{{Glossary("truthy")}}_.

{{EmbedInteractiveExample("pages/js/expressions-logical-and.html", "shorter")}}

## Sintaxis

```js-nolint
x && y
```

## Descripción

El operador lógico AND (`&&`) evalúa operandos de izquierda a derecha, regresando inmediatamente el valor del primer operando _{{Glossary("falsy")}}_ que encuentre; si todos los valores son _{{Glossary("truthy")}}_, el valor del último operando es retornado.

Si un valor puede ser convertido a `true`, el valor es conocido como _{{Glossary("truthy")}}_. Si un valor puede ser convertido a `false`, el valor es conocido como _{{Glossary("falsy")}}_.

Ejemplos de expresiones que pueden ser convertidas a `false` son:

- `false`;
- `null`;
- `NaN`;
- `0`;
- cadena vacía (`""` o `''` o ` `` `);
- `undefined`.

El operador AND preserva valores no booleanos y los retorna como estén:

```js
result = "" && "foo"; // "" (cadena vacía) es asignada a result
result = 2 && 0; // 0 es asignado a result
result = "foo" && 4; // 4 es asignado a result
```

Aunque el operador `&&` puede ser usado con operandos que no son valores booleanos, aún puede ser considerado un operador booleano ya que su valor de retorno siempre puede ser convertido a un [booleano primitivo](/es/docs/Web/JavaScript/Data_structures#boolean_type).
Para explícitamente convertir su valor de retorno (o cualquier expresión en general) al correspondiente valor booleano, se debe usar un doble ({{JSxRef("Operators/Logical_NOT", "operador lógico NOT", "", 1)}}) o el contructor del objeto {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}}.

### Evaluación de cortocircuito (Short-circuit)

La expresión lógica AND es un operador de cortocircuito (_short-circuit_).
Como cada operando es convertido a un booleano, si el resultado de una conversión es `false`, el operador AND se detiene y retorna el valor original del operando _falsy_; **no** evalúa ninguno de los operandos restantes.

Considere el siguiente pseudocódigo.

```plain
(alguna expresión _falsy_) && expresión
```

La parte de la `expresión` **nunca es evaluada** porque el primer operando <code>(alguna expresión _falsy_)</code> es evaluado como _{{Glossary("falsy")}}_.
Si la `expresión` es una función, la función nunca es llamada.
Veamos el siguiente ejemplo:

```js
function A() {
  console.log("llamada a A");
  return false;
}
function B() {
  console.log("llamada a B");
  return true;
}

console.log(A() && B());
// Imprime "llamada a A" en la consola por la llamada a la función A,
// `&&` evalúa a `false` (la función A retorna `false`), después `false` es impreso en la consola;
// el operador AND realiza un cortocircuito aquí e ignora la función B
```

### Precedencia de operadores

El operador AND tiene más alta precedencia que el operador OR, esto significa que el operador `&&` es ejecutado antes del operador `||` (vea [precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // true
true && (false || false); // false
(2 === 3) || (4 < 0) && (1 === 1); // false
```

## Ejemplos

### Usando el operador lógico AND

El siguiente código muestra ejemplos del operador lógico AND (`&&`).

```js
a1 = true && true; // t && t retorna `true`
a2 = true && false; // t && f retorna `false`
a3 = false && true; // f && t retorna `false`
a4 = false && 3 === 4; // f && f retorna `false`
a5 = "Cat" && "Dog"; // t && t retorna "Dog"
a6 = false && "Cat"; // f && t retorna `false`
a7 = "Cat" && false; // t && f retorna `false`
a8 = "" && false; // f && f retorna ""
a9 = false && ""; // f && f retorna `false`
```

### Reglas de conversión para booleanos

#### Convirtiendo el operador lógico AND al operador lógico OR

La siguiente operación involucra booleanos:

```js-nolint
bCondition1 && bCondition2
```

es siempre igual a:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Convirtiendo el operador lógico OR al operador lógico AND

La siguiente operación involucra booleanos:

```js-nolint
bCondition1 || bCondition2
```

es siempre igual a:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Removiendo paréntesis anidados

Ya que las expresiones lógicas son evaluadas de izquierda a derecha, siempre es posible remover los paréntesis de una expresión compleja siguiendo las siguientes reglas.

La siguiente operación compuesta involucra booleanos:

```js-nolint
bCondition1 || (bCondition2 && bCondition3)
```

es siempre igual a:

```js-nolint
bCondition1 || bCondition2 && bCondition3
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
