---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
---

{{JSRef}}

O método `toLocaleLowerCase()` retorna o valor da string em minúsculas, de acordo com qualquer mapeamento de caixa de texto específico da localidade.

{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

## Sintaxe

```
str.toLocaleLowerCase()
str.toLocaleLowerCase(locale)
str.toLocaleLowerCase([locale, locale, ...])
```

### Parâmetros

- `locale`
  - : Opcional. O parâmetro `locale` indica o local a ser usado para converter para minúsculas de acordo com qualquer mapeamento de caixa de texto específico da localidade. Se várias localidades forem fornecidas em um {{jsxref("Array")}}, a [melhor localidade disponível](https://tc39.es/ecma402/#sec-bestavailablelocale) é usada. A localidade padrão é a localidade atual do ambiente do host.

### Valor retornado

Uma nova string que representa a string original convertida em minúsculas, de acordo com qualquer mapeamento da caixa de texto específico da localidade.

### Exceções

- Um {{jsxref("RangeError")}} (" invalid language tag: xx_yy ") é lançado se um argumento `locale` não for uma tag de idioma válido.
- Um {{jsxref("TypeError")}} (" invalid element in locales argument ") é lançado se um elemento do array não for do tipo string.

## Descrição

O método `toLocaleLowerCase()` retorna o valor da string convertida em minúsculas de acordo com qualquer mapeamento da caixa de texto específico da localidade. `toLocaleLowerCase()` não afeta o valor da string original. Na maioria dos casos, ele produzirá o mesmo resultado que {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}, mas para alguns locais, como turco, cujos mapeamentos da caixa de texto não seguem o mapeamento padrão em Unicode, pode haver um resultado diferente.

## Exemplos

### Usando `toLocaleLowerCase()`

```js
"ALFABETO".toLocaleLowerCase(); // 'alfabeto'

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false

let locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
"\u0130".toLocaleLowerCase(locales) === "i"; // true
```

## Especificações

| Especificação                                                                                                 |
| ------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.tolocalelowercase', 'String.prototype.toLocaleLowerCase')}}      |
| {{SpecName('ES Int Draft', '#sup-string.prototype.tolocalelowercase', 'String.prototype.toLocaleLowerCase')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.toLocaleLowerCase")}}

## Veja também

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
