---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
---

{{JSRef}}

O método `toLocaleUpperCase()` retorna o valor da string em maiúsculas, de acordo com qualquer mapeamento de caixa de texto específico da localidade.

{{EmbedInteractiveExample("pages/js/string-tolocaleuppercase.html")}}

## Sintaxe

```
str.toLocaleUpperCase()
str.toLocaleUpperCase(locale)
str.toLocaleUpperCase([locale, locale, ...])
```

### Parâmetros

- `locale`
  - : Opcional. O parâmetro `locale` indica a localização a ser usada para converter para maiúsculas de acordo com qualquer mapeamento de caixa de texto específico da localidade. Se vários locais forem fornecidos em um {{jsxref("Array")}}, a [melhor localidade disponível](https://tc39.es/ecma402/#sec-bestavailablelocale) é usada. A localidade padrão é a localidade atual do ambiente do host.

### Valor retornado

Uma nova string que representa a string original convertida em maiúsculas, de acordo com qualquer mapeamento de caixa de texto específico da localidade.

### Exceções

- Um {{jsxref("RangeError")}} ("invalid language tag: xx_yy") é lançado se um argumento `locale` não for uma tag de idioma válido.
- Um {{jsxref("TypeError")}} ("invalid element in locales argument") é lançado se um elemento do array não for do tipo string.

## Descrição

O método `toLocaleUpperCase()` retorna o valor da string convertida em maiúsculas de acordo com qualquer mapeamento de caixa de texto específico da localidade. `toLocaleUpperCase()` não afeta o valor da string em si. Na maioria dos casos, ele produzirá o mesmo resultado que {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}, mas para alguns locais, como turco, cujos mapeamentos de caixa de texto não seguem o mapeamento de caixa de texto padrão em Unicode, pode haver um resultado diferente.

Observe também que a conversão não é necessariamente um mapeamento de caracteres 1:1, pois alguns caracteres podem resultar em dois (ou até mais) caracteres quando transformados em maiúsculas. Portanto, o comprimento da string resultante pode ser diferente do comprimento da string de entrada. Isso também implica que a conversão não é estável, então, por exemplo, o seguinte pode retornar `false`:
`x.toLocaleLowerCase() === x.toLocaleUpperCase(). toLocaleLowerCase()`

## Exemplos

### Usando `toLocaleUpperCase()`

```js
"alfabeto".toLocaleUpperCase(); // 'ALFABETO'

"Gesäß".toLocaleUpperCase(); // 'GESÄSS'

"i\u0307".toLocaleUpperCase("lt-LT"); // 'I'

let locales = ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"];
"i\u0307".toLocaleUpperCase(locales); // 'I'
```

## Especificações

| Especificação                                                                                                 |
| ------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.tolocaleuppercase', 'String.prototype.toLocaleUpperCase')}}      |
| {{SpecName('ES Int Draft', '#sup-string.prototype.tolocaleuppercase', 'String.prototype.toLocaleUpperCase')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.toLocaleUpperCase")}}

## Veja também

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
