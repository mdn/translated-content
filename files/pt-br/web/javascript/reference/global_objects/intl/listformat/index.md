---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
tags:
  - Classe
  - Experimental
  - Internacionalização
  - Intl
  - JavaScript
  - ListFormat
  - Referência
browser-compat: javascript.builtins.Intl.ListFormat
---

{{JSRef}}

O objeto **`Intl.ListFormat`** habilita a formatação de lista de acordo com o idioma.

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Construtor

- {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}
  - : Criar um novo objeto `Intl.ListFormat`.

## Métodos estáticos

- {{jsxref("Intl/ListFormat/supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}
  - : Retorna um array com as localidades fornecidas com suporte sem precisar depender da localidade padrão do tempo de execução.

## Métodos de instância

- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
  - : Retorna uma string formatada especifica do idioma representando os elementos da lista.
- {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}}
  - : Retorna um array de objetos representando os diferentes componentes que podem ser usados para formatar uma lista de valores com reconhecimento de localidade.

## Exemplos

### Utilizando format

O exemplo a seguir mostra como criar o List formatter utilizando o idioma Português.

```js
const list = ["Moto", "Ônibus", "Carro"];

console.log(
  new Intl.ListFormat("pt-BR", { style: "long", type: "conjunction" }).format(
    list
  )
);
// > Moto, Ônibus e Carro

console.log(
  new Intl.ListFormat("pt-BR", { style: "short", type: "disjunction" }).format(
    list
  )
);
// > Moto, Ônibus ou Carro

console.log(
  new Intl.ListFormat("pt-BR", { style: "narrow", type: "unit" }).format(list)
);
// > Moto Ônibus Carro
```

### Utilizando formatToParts

O exemplo a seguir mostra como criar o List formatter retornando as partes formatadas.

```js
const list = ["Moto", "Ônibus", "Carro"];
console.log(
  new Intl.ListFormat("pt-BR", {
    style: "long",
    type: "conjunction",
  }).formatToParts(list)
);

// [ { "type": "element", "value": "Moto" },
//   { "type": "literal", "value": ", " },
//   { "type": "element", "value": "Ônibus" },
//   { "type": "literal", "value": ", e " },
//   { "type": "element", "value": "Carro" } ];
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- {{jsxref("Intl")}}
- [Um polyfill para `Intl.ListFormat` no FormatJS](https://formatjs.io/docs/polyfills/intl-listformat)
