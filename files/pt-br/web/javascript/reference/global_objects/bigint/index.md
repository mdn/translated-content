---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
---

{{JSRef}}

`BigInt` é um objeto nativo que fornece um modo de representar números inteiros maiores que 2^53, que é o maior número que o JavaScript consegue, com exatidão, representar com o tipo primitivo {{jsxref("Number")}}.

## Sintaxe

```js
BigInt(value);
```

### Parâmetros

- `value`
  - : O valor numérico do objeto que está sendo criado. Pode ser uma _string_ ou um número inteiro.

> **Nota:** **Observação**: `BigInt()` não é usado com o operador {{jsxref("Operators/new", "new")}}.

## Descrição

Um `BigInt` é criado com a acrescentação de `n` ao final de um inteiro literal — `10n` — ou chamando a função `BigInt()`.

```js
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// ↪ 9007199254740991n
```

Isso é parecido com um {{jsxref("Number")}} em algumas partes, mas difere-se em alguns assuntos importantes — ele não pode ser usado com métodos no objeto {{jsxref("Math")}} e não pode ser misturado em operações ou qualquer instância de `Number`.

> **Aviso:** {{jsxref("Number")}} e `BigInt` não podem ser misturados em operações — eles devem ser manipulados com o mesmo tipo.
>
> Tenha cuidado com a conversão e desconversão de valores, visto que a precisão de `BigInt` pode ser perdida com a conversào para `Number`.

### Informações do tipo

Quando testado com `typeof` , um `BigInt` vai devolver "bigint":

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Quando envolvido em um `Object`, um `BigInt` vai ser considerado como um tipo normal de "object".

```js
typeof Object(1n) === "object"; // true
```

### Operadores

Os seguintes operadores podem ser usados com `BigInt`s (ou com `BigInt`s envolvidos em objetos): `+`, `*`, `-`, `**`, `%`.

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
// ↪ 9007199254740991

const maxPlusOne = previousMaxSafe + 1n;
// ↪ 9007199254740992n

const theFuture = previousMaxSafe + 2n;
// ↪ 9007199254740993n, isso funciona agora!

const multi = previousMaxSafe * 2n;
// ↪ 18014398509481982n

const subtr = multi – 10n;
// ↪ 18014398509481972n

const mod = multi % 10n;
// ↪ 2n

const bigN = 2n ** 54n;
// ↪ 18014398509481984n

bigN * -1n
// ↪ –18014398509481984n
```

O operador `/` também funciona com o esperado com números inteiros. No entanto, desde que esses sejam `BigInt`s e não `BigDecimal`s, essa operação vai arredondar para 0, o que significa que não vai retornar qualquer valor fracional.

> **Aviso:** Uma operação com um resultado fracional será arredondado com `BigInt.`

```js
const expected = 4n / 2n;
// ↪ 2n

const rounded = 5n / 2n;
// ↪ 2n, e não 2.5n
```

### Comparações

Um `BigInt` não é estritamente igual a um {{jsxref("Global_Objects/Number", "Number")}}, mas é mais ou menos assim.

```js
0n === 0;
// ↪ false

0n == 0;
// ↪ true
```

Um {{jsxref("Global_Objects/Number", "Number")}} e um `BigInt` podem ser comparado normalmente.

```js
1n < 2;
// ↪ true

2n > 1;
// ↪ true

2 > 2;
// ↪ false

2n > 2;
// ↪ false

2n >= 2;
// ↪ true
```

Eles podem ser misturados em _arrays_ e ordenados.

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort();
// ↪ [-12n, 0, 0n, 10, 4n, 4, 6]
```

Observe que comparações com `BigInt`s envolvidos em `Object` atuam com outros objetos, indicando somente a igualdade onde a mesma instância do objeto é comparada.

```js
0n === Object(0n); // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

### Condicionais

A `BigInt` comporta-se como {{jsxref("Global_Objects/Number", "Number")}} nos casos onde ele é convertido para um {{jsxref("Global_Objects/Boolean", "Boolean")}}: através da função {{jsxref("Global_Objects/Boolean", "Boolean")}}; quando usado com operadores lógicos {{jsxref("Operators/Logical_Operators", "Logical Operators")}} `||`, `&&`, e `!`; ou dentro de um teste condicional como um {{jsxref("Statements/if...else", "if statement")}}.

```js
if (0n) {
  console.log("Olá de um if!");
} else {
  console.log("Olá de um else!");
}

// ↪ "Olá de um else!"

0n || 12n;
// ↪ 12n

0n && 12n;
// ↪ 0n

Boolean(0n);
// ↪ false

Boolean(12n);
// ↪ true

!12n;
// ↪ false

!0n;
// ↪ true
```

## Métodos

- **`BigInt.asIntN()`**
  - : Limita um BigInt entre -2expoente-1 e 2expoente-1-1
- `BigInt.asUintN()`
  - : Limita um BigInt entre 0 e 2expoente-1

## Propriedades

- {{jsxref("BigInt.prototype")}}
  - : Permite a adição de propriedades a um objeto `BigInt`.

## Instâncias `BigInt`

Todas as instâncias `BigInt` são herdades de BigInt.prototype. O protótipo do objeto do construtor do BigInt pode ser modificado para afetar todas as instâncias de `BigInt`.

### Métodos

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/BigInt/prototype', 'Methods')}}

## Exemplos

### Calculando números primos

```js
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

// Toma um BigInt como argumento e retorna um BigInt
function nthPrime(nth) {
  let maybePrime = 2n;
  let prime = 0n;

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth -= 1n;
      prime = maybePrime;
    }
    maybePrime += 1n;
  }

  return prime;
}

nthPrime(20n);
// ↪ 73n
```
