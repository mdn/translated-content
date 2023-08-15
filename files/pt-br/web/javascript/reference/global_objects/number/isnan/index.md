---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
---

{{JSRef("Global_Objects", "Number")}}

## Resumo

O método **`Number.isNaN()`** determina se o valor passado é {{jsxref("Global_Objects/NaN", "NaN")}}. Versão mais robusta do original global {{jsxref("Global_Objects/isNaN", "isNaN")}}.

## Sintaxe

```
Number.isNaN(testValue)
```

### Parâmetros

- `testValue`
  - : O valor a ser testado por {{jsxref("Global_Objects/NaN", "NaN")}}.

## Descrição

Devido a ambos os operadores de igualdade, == and ===, avaliar a `false` quando está verificando se {{jsxref("Global_Objects/NaN", "NaN")}} _é_ NaN, a função `Number.isNaN` se torna necessária. Esta situação é diferente de todas as outras comparações de valor possível em JavaScript.

Em comparação a função global {{jsxref("Global_Objects/isNaN", "isNaN")}}, Number.isNaN não sofre do problema de forçar a conversão do parâmetro para um número. Isso significa que ele é seguro para passar valores que, normalmente, se convertem em NaN, mas na verdade não são o mesmo valor que NaN. Isto também significa que apenas os valores do número do tipo, que são também NaN, retorna `true`.

## Exemplos

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

// everything else: false
Number.isNaN(undefined);
Number.isNaN({});

Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);

Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
Number.isNaN("NaN");
Number.isNaN("blabla"); // e.g. este teria sido true com isNaN
```

## Especificações

| Especificação                                            | Status           | Comentário         |
| -------------------------------------------------------- | ---------------- | ------------------ |
| {{SpecName('ES6', '#sec-number.isnan', 'Number.isnan')}} | {{Spec2('ES6')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.isNaN")}}

## Veja também

- O {{jsxref("Global_Objects/Number", "Number")}} objeto pertence a.
