---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
---

{{jsSidebar("Objects")}}

A função **`isNaN()`** determina se o valor é {{jsxref("Global_Objects/NaN", "NaN")}} ou não. Tenha cuidado, o `cast` em `isNaN` tem regras para serem observadas. Você pode ficar interessado no {{jsxref("Number.isNaN()")}} que foi definido no ECMAScript 6 ou você pode usar `typeof` para determinar se o valor é Not-A-Number, `NaN`.

{{EmbedInteractiveExample("pages/js/globalprops-isnan.html")}}

## Syntaxe

```
isNaN(value)
```

### Parâmetros

- `value`
  - : O valor a ser testado.

### Valor retornado

**`true`** se o valor for {{jsxref("NaN")}}; otherwise, **`false`**.

## Descrição

### A necessidade da função `isNaN`

Ao contrário de todas as outras possibilidades de valores no JavaScript, não é possivel confiar nos operadores de igualdade `(== e ===)` para determina se o valor é {{jsxref("Global_Objects/NaN", "NaN")}} ou não, porque ambos, `NaN == NaN` e `NaN === NaN`, terá como valor de retorno: `false`. Daí a necessidade da funçao `isNAN`.

### Origem dos valores `NaN`

Os valores `NaN` são gerados quando operações aritiméticas tem como valores: _undefined_ ou _unrepresentable_. Como valores, não fazem necessariamente condições de estouro. `NaN` também resulta da tentativa de coerção para valores numéricos, de valores não numéricos, para que o valor numérico primitivo seja disponível.

Por exemplo, divida zero por zero e o resultado será `NaN` , mas se dividir outros números por zero ele não será.

### Comportamento confuso do caso especial

Desde as primeiras versões da especificação da função isNaN , o seu comportamento para argumentos não numéricos tem sido confuso. Quando o argumento para a função `isNaN` não é do tipo* **Numbe**r*, o valor é primeiro convertido para um número. O valor resultante é em seguida testado para determinar se se trata de {{jsxref("Number.isNaN()")}}. Assim, para os não-números que quando forçados ao tipo numérico resultado em um valor numérico não-`NaN` válido (particularmente strings vazias e primitivas booleanas, que quando submetidas ao `cast` dão valores numéricos zero ou um), o "falso" valor retornado pode ser inesperado; a cadeia vazia , por exemplo, é certamente "not-a-number" A confusão decorre do fato de que o termo, " não é um número " , tem um significado específico para os números representados como valores de ponto flutuante IEEE- 794 . A função deve ser interpretada como respondendo à pergunta: "este valor, quando convertido para um valor numérico, um valor IEEE -794 ' not-a-number"?

A ultima versão do ECMAScript (ES6) contém A função {{jsxref("Number.isNaN()")}}. `Number.isNaN(x)` será a real forma para testar se x é NaN ou não. Mesmo com `Number.isNaN`, porém, o significado de NaN continua ser a precisão numérica, e não simplesmente, "não é um número = `NaN`, _not a number_". Paralelamente , na expressão `Number.isNaN`, a expressão `(x != x)` é a forma mais confiável para testar se a variável `x` é `NaN` ou não, assim o resultado não é sujeito ao falso positivo que faz `isNaN` não ser confiável.

A polyfill for `isNaN` would be (the polyfill leverages the unique never-equal-to-itself characteristic of `NaN`):

```js
var isNaN = function (value) {
  var n = Number(value);
  return n !== n;
};
```

## Exemplos

```js
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// strings
isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN(""); // false: the empty string is converted to 0 which is not NaN
isNaN(" "); // false: a string with spaces is converted to 0 which is not NaN

// dates
isNaN(new Date()); // false
isNaN(new Date().toString()); // true

// Esse é um falso positivo e é a razão para isNaN não seja totalmente confiável.
isNaN("blabla"); // true: "blabla" é convertido para número.
// A análise desse número falha e retorna NaN como resultado.
```

### Useful special-case behavior

There is a more usage oriented way to think of `isNaN()`: If `isNaN(x)` returns `false`, you can use `x` in an arithmetic expression not making the expression return `NaN`. If it returns `true`, `x` will make every arithmetic expression return `NaN`. This means that in JavaScript, `isNaN(x) == true` is equivalent to `x - 0` returning `NaN` (though in JavaScript `x - 0 == NaN` always returns false, so you can't test for it). Actually, `isNaN(x)`, `isNaN(x - 0)`, `isNaN(Number(x))`, `Number.isNaN(x - 0)`, and `Number.isNaN(Number(x))` always return the same and in JavaScript `isNaN(x)` is just the shortest possible form to express each of these terms.

You can use this, for example, to test whether an argument to a function is arithmetically processable (usable "like" a number), or if it's not and you have to provide a default value or something else. This way you can have a function that makes use of the full versatility JavaScript provides by implicitly converting values depending on context.

## Specifications

| Specification                                         |
| ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-isnan-number', 'isNaN')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.isNaN")}}

## Veja também

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
