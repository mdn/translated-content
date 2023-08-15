---
title: Operador lógico OR (||)
slug: Web/JavaScript/Reference/Operators/Logical_OR
l10n:
  sourceCommit: 05218bd05ab482d49ca659473851a285bcb104b0
---

{{jsSidebar("Operators")}}

El **operador lógico OR (`||`)** (disyunción lógica) es verdadero para un conjunto de operandos si y solo si uno o más de sus operandos es verdadero. Es normalmente usado con valores booleanos (lógicos). Cuando es así, retorna un valor booleano. Sin embargo, el operador `||` puede retornar el valor de uno de los operandos especificados, por lo que si este operador es usado con valores no booleanos, retornará un valor no booleano.

{{EmbedInteractiveExample("pages/js/expressions-logical-or.html", "shorter")}}

## Sintaxis

```js-nolint
x || y
```

## Descripción

Si `x` puede ser convertida a `true`, retorna `x`; en caso contrario, retorna `y`.

Si un valor puede ser convertido a `true`, el valor es conocido como _{{Glossary("truthy")}}_. Si un valor puede ser convertido a `false`, el valor es conocido como _{{Glossary("falsy")}}_.

Ejemplos de expresiones que pueden ser convertidas a `false` son:

- `null`;
- `NaN`;
- `0`;
- cadena vacía (`""` o `''` o ` `` `);
- `undefined`.

Aunque el operador `||` puede ser usado con operandos que no son valores booleanos, aún puede ser considerado un operador booleano ya que su valor de retorno siempre puede ser convertido a un [booleano primitivo](/es/docs/Web/JavaScript/Data_structures#boolean_type).
Para explícitamente convertir su valor de retorno (o cualquier expresión en general) al correspondiente valor booleano, se debe usar un doble ({{JSxRef("Operators/Logical_NOT", "operador lógico NOT", "", 1)}}) o el contructor del objeto {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}}.

### Evaluación de cortocircuito (Short-circuit)

La expresión lógica OR es evaluada de izquierda a derecha, es posible una evaluación de cortocircuito (_short-circuit_) usando la siguiente regla:

<code>(alguna expresión _truthy_) || expresión</code> es evaluada por cortocircuito (_short-circuit_) a la expresión _truthy_.

Cortocircuito (_Short-circuit_) significa que la parte de la `expresión` de arriba **no es evaluada**, por lo que ningún efecto secundario resultante de ella es realizado (por ejemplo, si la `expresión` es una llamada a una función, la llamada nunca es realizada). Esto ocurre porque el valor del operador ya está determinado después de la evaluación del primer operando. Veamos un ejemplo:

```js
function A() {
  console.log("llamada a A");
  return false;
}
function B() {
  console.log("llamada a B");
  return true;
}

console.log(B() || A());
// Imprime "llamada a B" por la llamada a la función,
// después imprime `true` (que es el valor resultante del operador)
```

### Precedencia de operadores

Las siguientes expresiones pueden parecer equivalentes, pero no lo son, porque el operador `&&` es ejecutado antes del operador `||` (véase [precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // retorna `true`, porque `&&` es ejecutado primero
(true || false) && false; // retorna `false`, porque la agrupación tiene la más alta precedencia
```

## Ejemplos

### Usando el operador lógico OR

El siguiente código muestra ejemplos del operador lógico OR (`||`).

```js
true || true; // t || t retorna `true`
false || true; // f || t retorna `true`
true || false; // t || f retorna `true`
false || 3 === 4; // f || f retorna `false`
"Cat" || "Dog"; // t || t retorna "Cat"
false || "Cat"; // f || t retorna "Cat"
"Cat" || false; // t || f retorna "Cat"
"" || false; // f || f retorna `false`
false || ""; // f || f retorna ""
false || varObject; // f || objeto retorna varObject
```

> **Nota:** Si se usa este operador para proveer un valor por defecto a alguna variable, se debe ser consciente que cualquier valor _falsy_ no será usado. Si solo se necesita filtrar [`null`](/es/docs/Web/JavaScript/Reference/Operators/null) o {{jsxref("undefined")}}, considere usar [el operador de coalescencia nula (??)](/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing).

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
bCondition1 && (bCondition2 || bCondition3)
```

es siempre igual a:

```js-nolint
!(!bCondition1 || !bCondition2 && !bCondition3)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Operador de coalescencia nula (??)](/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
