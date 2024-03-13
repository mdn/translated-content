---
title: Desigualdade (!=)
slug: Web/JavaScript/Reference/Operators/Inequality
---

{{jsSidebar("Operators")}}

O operador de desigualdade (`!=`) verifica se seus dois operandos não são igual, retornando um resultado booleano. Ao contrário do operador de [desigualdade estrito](/pt-BR/docs/Web/JavaScript/Reference/Operators/Strict_inequality), ele tenta converter os tipos e comparar operandos de tipos diferentes.

{{EmbedInteractiveExample("pages/js/expressions-inequality.html")}}

## Sintaxe

```js-nolint
x != y
```

## Descrição

O operador de desigualdade verifica se seus operandos não são iguais. É a negação do operador de [igualdade](/pt-BR/docs/Web/JavaScript/Reference/Operators/Equality), de modo que as duas linhas a seguir sempre darão o mesmo resultado:

```js
x != y;

!(x == y);
```

Para obter detalhes do algoritmo de comparação, consulte a página do [operador de igualdade](/pt-BR/docs/Web/JavaScript/Reference/Operators/Equality).

```js
3 != "3"; // false
```

Para evitar isso e exigir que diferentes tipos sejam considerados diferentes, use o operador de [desigualdade estrita](/pt-BR/docs/Web/JavaScript/Reference/Operators/Strict_inequality) em vez disso:

```js
3 !== "3"; // true
```

## Exemplos

### Comparação sem conversão de tipo

```js
1 != 2; // true
"hello" != "hola"; // true

1 != 1; // false
"hello" != "hello"; // false
```

### Comparação com conversão de tipo

```js
"1" != 1; // false
1 != "1"; // false
0 != false; // false
0 != null; // true
0 != undefined; // true
0 != !!null; // false, veja o operador lógico NOT
0 != !!undefined; // false, veja o operador lógico NOT
null != undefined; // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3; // false
number1 != number2; // true
```

### Comparação de objetos

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 != object2); // true
console.log(object1 != object1); // false
```

## Especificações

{{Specifications}}

## Compatibilidade de navegadores

{{Compat}}

## Veja também

- [Operador de igualdade](/pt-BR/docs/Web/JavaScript/Reference/Operators/Equality)
- [Operador de igualdade estrito](/pt-BR/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Operador de desigualdade estrito](/pt-BR/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
