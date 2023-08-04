---
title: Date.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
---

{{JSRef}}

O método **`[@@toPrimitive]()`** converte o objeto `Date` para um valor primitivo.

## Sintaxe

```
Date()[Symbol.toPrimitive](hint);
```

### Valor de retorno

O valor primitivo do objeto {{jsxref("Date")}}. Dependendo do argumento, o método pode retornar uma cadeia de caracteres (_string_) ou um número.

## Descrição

O método `[@@toPrimitive]()` do objeto {{jsxref("Date")}} retorna um valor primitivo, que pode ser tanto um tipo numérico quanto uma string.

Se `hint` é `"string"` ou `"default"`, `[@@toPrimitive]()` tenta chamar o método {{jsxref("Object.prototype.toString()", "toString")}}. Se a propriedade `toString` não existe, ele tenta chamar o método {{jsxref("Object.prototype.valueOf()", "valueOf")}} e se o `valueOf` não existir, `[@@toPrimitive]()` joga um {{jsxref("TypeError")}}.

Se `hint` é `"number"`, `[@@toPrimitive]()` tenta primeiro chamar `valueOf`, e se ele falha, chama `toString`.

O JavaScript chama o método `[@@toPrimitive]()` para converter um objeto para um valor primitivo. Você raramente precisa invocar o método `[@@toPrimitive]()` em si; JavaScript automaticamente o invoca quando encontra um objeto onde um valor primitivo é esperado.

## Exemplos

### Retornando primitivos de data

```js
const testDate = new Date(1590757517834);
// "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]("string");
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"

testDate[Symbol.toPrimitive]("number");
// Returns "1590757517834"

testDate[Symbol.toPrimitive]("default");
// Returns "Date Fri May 29 2020 14:05:17 GMT+0100 (British Summer Time)"
```

## Especificações

| Especificação                                                                                |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype-@@toprimitive', 'Date.prototype.@@toPrimitive')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.@@toPrimitive")}}

## Veja também

- {{jsxref("Symbol.toPrimitive")}}
