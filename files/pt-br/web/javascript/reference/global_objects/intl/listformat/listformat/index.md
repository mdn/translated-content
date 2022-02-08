---
title: Intl.ListFormat() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
tags:
  - Constructor
  - Internationalization
  - Intl
  - JavaScript
  - ListFormat
  - Reference
browser-compat: javascript.builtins.Intl.ListFormat.ListFormat
---
{{JSRef}}

O construtor **`Intl.ListFormat()`** cria objetos
{{jsxref("Intl/ListFormat", "Intl.ListFormat")}} que habilitam a objects that enable language-sensitive list
formatting.

O objeto Intl.ListFormat habilita a formatação de lista de acordo com o idioma.

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
new Intl.ListFormat()
new Intl.ListFormat(locales)
new Intl.ListFormat(locales, options)
```

### Parameters

- `locales` {{optional_inline}}
  - : Uma string com a tag de idioma BCP 47, ou um array de string. Veja de forma geral a interpretação do argumento `locales`, see the
    {{jsxref("Global_Objects/Intl", "Intl", "#Locale_identification_and_negotiation",
      1)}} page.
- `options` {{optional_inline}}

  - : Um objeto com algumas ou todas as seguintes propriedades:

    - `localeMatcher`
      - : O algoritimo locale matching para ser utilizado. Os possiveis valores são "`lookup`"
        e "`best fit`"; o valor padrão é "`best fit`". Para mais informações sobre esta opção, veja a página {{jsxref("Global_Objects/Intl", "Intl",
        "#Locale_negotiation", 1)}}.
    - `type`
      - : O formato de saída da mensagem. Os possíveis valores são "`conjunction`"
        que representa listas com "e" (default, e.g., "`A, B, e C`"), ou
        "`disjunction`" que representa listas com "ou" (e.g.,
        "`A, B, ou C`"). "`unit`" que representa listas com valores de unidade (e.g., "`5 pounds, 12 ounces`").
    - `style`
      - : O tamanho da lista formatada. Os possíveis valores são: "`long`"
        (default, e.g., "`A, B, e C`"); "`short`" (e.g.,
        "`A, B, C`"), ou "`narrow`" (e.g., "`A B C`").
        quando `style` é "`short`" ou "`narrow`",
        "`unit`" é o único valor de tipo permitido.

## Exemplos

### Utilizando format

O exemplo a seguir mostra como criar um List formatter utilizando o idioma Português.

```js
const list = ['Moto', 'Ônibus', 'Carro'];

 console.log(new Intl.ListFormat('pt-BR', { style: 'long', type: 'conjunction' }).format(list));
// > Moto, Ônibus e Carro

 console.log(new Intl.ListFormat('pt-BR', { style: 'short', type: 'disjunction' }).format(list));
// > Moto, Ônibus ou Carro

 console.log(new Intl.ListFormat('pt-BR', { style: 'narrow', type: 'unit' }).format(list));
// > Moto Ônibus Carro
```

## Especificações

{{Specifications}}

## Compatibilidade de browsers

{{Compat}}

## Veja também

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
