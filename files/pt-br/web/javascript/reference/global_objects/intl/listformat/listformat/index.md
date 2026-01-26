---
title: Construtor Intl.ListFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
---

{{JSRef}}

O construtor **`Intl.ListFormat()`** cria objetos
{{jsxref("Intl/ListFormat", "Intl.ListFormat")}} que habilitam a formatação de lista de acordo com o idioma.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// Expected output: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// Expected output: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// Expected output: "Motorcycle Bus Car"
```

## Sintaxe

```js
new Intl.ListFormat();
new Intl.ListFormat(locales);
new Intl.ListFormat(locales, options);
```

### Parâmetros

- `locales` {{optional_inline}}
  - : Uma string com a tag de idioma BCP 47, ou um array de tais string. Veja de forma geral a interpretação do argumento `locales`, na página
    {{jsxref("Global_Objects/Intl", "Intl", "#Locale_identification_and_negotiation", 1)}}.
- `options` {{optional_inline}}
  - : Um objeto com algumas ou todas as seguintes propriedades:
    - `localeMatcher`
      - : O algoritmo de correspondência de localidade para ser utilizado. Os possíveis valores são "`lookup`"
        e "`best fit`"; o valor padrão é "`best fit`". Para mais informações sobre esta opção, veja a página {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}}.
    - `type`
      - : O formato de saída da mensagem. Os possíveis valores são "`conjunction`"
        que representa listas com "e" (padrão, e.g., "`A, B, e C`"), ou
        "`disjunction`" que representa listas com "ou" (e.g.,
        "`A, B, ou C`"). "`unit`" que representa listas com valores de unidade (e.g., "`5 libras, 12 onças`").
    - `style`
      - : O tamanho da lista formatada. Os possíveis valores são: "`long`"
        (padrão, e.g., "`A, B, e C`"); "`short`" (e.g.,
        "`A, B, C`"), ou "`narrow`" (e.g., "`A B C`").
        quando `style` é "`short`" ou "`narrow`",
        "`unit`" é o único valor de tipo permitido.

## Exemplos

### Utilizando format

O exemplo a seguir mostra como criar um List formatter utilizando o idioma Português.

```js
const list = ["Moto", "Ônibus", "Carro"];

console.log(
  new Intl.ListFormat("pt-BR", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// > Moto, Ônibus e Carro

console.log(
  new Intl.ListFormat("pt-BR", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// > Moto, Ônibus ou Carro

console.log(
  new Intl.ListFormat("pt-BR", { style: "narrow", type: "unit" }).format(list),
);
// > Moto Ônibus Carro
```

## Especificações

{{Specifications}}

## Compatibilidade de browsers

{{Compat}}

## Veja também

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
