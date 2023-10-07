---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
---

{{JSRef}}

O objeto **`Intl.RelativeTimeFormat`** é um construtor de objetos que permitem uma formatação de tempo relativa sensível ao idioma.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat.html")}}

## Sintaxe

```
new Intl.RelativeTimeFormat([locales[, options]])
```

### Parâmetros

- `locales`
  - : Opcional. Uma string com uma tag da linguagem BCP 47, ou um array dessas strings. Para a forma geral e interpretação do argumento `locales` , acesse: {{jsxref("Global_Objects/Intl", "Página Intl", "#Locale_identification_and_negotiation", 1)}}.
- `options`

  - : Opcional. Um objeto com algumas ou todas as seguintes propriedades:

    - `localeMatcher`
      O algoritmo para comparação de local a ser usado. Os valores possíveis são `"lookup"` e `"best fit"`; o padrão é `"best fit"`. Para informações sobre esta opção, veja [`Intl`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation).
    - `numeric`
      O formato de saída da mensagem. Valores possíveis são:

      - `"always"` (padrão, e.g., `há 1 dia`),
      - ou `"auto"` (e.g., `ontem`). O valor`"auto"` permite que não seja sempre necessário o uso de valores númericos na saída.

    - `style`
      O comprimento da mensagem internacionalizada. Valores possíveis são:

      - `"long"` (padrão, e.g., `in 1 month`)
      - `"short"` (e.g., `in 1 mo.`),
      - ou `"narrow"` (e.g., `in 1 mo.`). O estilo narrow pode ser similar ao short em alguns locais.

## Descrição

### Propriedades

- {{jsxref("RelativeTimeFormat.prototype", "Intl.RelativeTimeFormat.prototype")}}
  - : Permite a adição de propriedades para todos os objetos.

### Métodos

- {{jsxref("RelativeTimeFormat.supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : Retorna um array contendo os valores disponíveis dentre os que foram passados como parâmetro sem ter de recorrer ao local padrão do ambiente.

## Instâncias `RelativeTimeFormat`

### Propriedades

Instâncias `RelativeTimeFormat` herdam as seguintes propriedades do seu protótipo:

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/prototype', 'Properties')}}

### Métodos

Instâncias `RelativeTimeFormat` herdam as seguintes propriedades do seu protótipo:

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/prototype', 'Methods')}}

## Exemplos

### Uso básico do `format`

O exemplo a seguir mostra como criar um formatador de tempo relativo usando a língua portuguesa.

```js
// Crie um formatador de tempo relativo no seu local
// com os valores padrão sendo passados explicitamente.
const rtf = new Intl.RelativeTimeFormat("pt", {
  localeMatcher: "best fit", // outros valores: "lookup"
  numeric: "always", // outros valores: "auto"
  style: "long", // outros valores: "short" ou "narrow"
});

// Formatação de tempo relativa usando valor negativo (-1).
rtf.format(-1, "day");
// > "há 1 dia"

// Formatação de tempo relativa usando valor positivo (1).
rtf.format(1, "day");
// > "em 1 dia"
```

### Usando a opção `auto`

Se a opção `numeric:auto` é passada, serão produzidas as strings `ontem` ou `amanhã` ao invés de `há 1 dia` ou `em 1 dia`. Isso permite que não seja necessário sempre utilizar valores numéricos na saída.

```js
// Crie um formatador de tempo relativo no seu local
// com o valor "auto" passado para a propriedade numeric.
const rtf = new Intl.RelativeTimeFormat("pt", { numeric: "auto" });

// Formatação de tempo relativa usando valor negativo (-1).
rtf.format(-1, "day");
// > "ontem"

// Formatação de tempo relativa usando valor positivo (1).
rtf.format(1, "day");
// > "amanhã"
```

### Usando `formatToParts`

O exemplo a seguir mostra como criar um formatador de tempo relativo que retorna partes formatadas

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Formatação de tempo relativa usando a unidade day.
rtf.formatToParts(-1, "day");
// > [{type: "literal", value: "ontem"}]

rtf.formatToParts(100, "day");
// > [{type: "literal", value: "em "},
// >  { type: "integer", value: "100", unit: "day" },
// >  {type: "literal", value: " dias"]
```

## Especificações

| Especificação                                                                                                             | Estágio | Comentário |
| ------------------------------------------------------------------------------------------------------------------------- | ------- | ---------- |
| [Intl.RelativeTime proposal](https://tc39.github.io/proposal-intl-relative-time/#sec-intl-relativetimeformat-constructor) | Stage 3 |            |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Intl.RelativeTimeFormat")}}

## Veja também

- [The Intl.RelativeTimeFormat API](https://developers.google.com/web/updates/2018/10/intl-relativetimeformat)
