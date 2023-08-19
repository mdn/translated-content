---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
---

##### {{JSRef}}

O objeto **`Intl.NumberFormat`** é um construtor para objetos que habilita formatação de número sensível a linguagem.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

## Sintaxe

```
new Intl.NumberFormat([locales[, options]])
Intl.NumberFormat.call(this[, locales[, options]])
```

### Parâmetros

- `locales`

  - : Opcional. Uma string com uma tag de linguagem BCP 47 ou uma matriz delas. Para a forma geral e interpretação do argumento `locales`, veja {{jsxref("Intl", "Intl page", "#Locale_identification_and_negotiation", 1)}}. A seguinte chave extendida Unicode é permitida:

    - `nu`
      - : O sistema de numeração que será usado. Os valores permitidos são: `"arab"`, `"arabext"`, `"bali"`, `"beng"`, `"deva"`, `"fullwide"`, `"gujr"`, `"guru"`, `"hanidec"`, `"khmr"`, `"knda"`, `"laoo"`, `"latn"`, `"limb"`, `"mlym"`, `"mong"`, `"mymr"`, `"orya"`, `"tamldec"`, `"telu"`, `"thai"`, `"tibt"`.

- `options`

  - : Opcional. Um objeto com alguns ou todas as seguintes propriedades:

    - `localeMatcher`
      - : O algoritmo de comparação de localização para utilizar. Os valores permitidos são `"lookup"` e `"best fit"`; o padrão é `"best fit"`. Para mais informações sobre esta opção, veja {{jsxref("Global_Objects/Intl", "Intl page", "#Locale_negotiation", 1)}}.
    - `style`
      - : O estilo do formato a ser utilizado. Os valores permitidos são `"decimal"` para formato de número simples, `"currency"` para formato monetário e `"percent"` para formato percentual; o padrão é `"decimal"`.
    - `currency`
      - : A moeda para usar na formatação monetária. Os valores permitidos são os códigos de moedas da ISO 4217, como `"USD"` para dólar estadunidense, `"EUR"` para euro, ou `"CNY"` para RMB chinês — veja a [Lista de códigos de moedas e fundos atuais](http://www.currency-iso.org/en/home/tables/table-a1.html). Não há valor padrão; se o `style` for `"currency"`, a propriedade `currency` deverá ser informada.
    - `currencyDisplay`
      - : Como será mostrada a moeda na formatação monetária. Os valores permitidos são `"symbol"` para usar um símbolo de moeda localizado como €, `"code"` para usar o código de moeda ISO, `"name"` para usar o nome da moeda localizado como `"dollar"`; o padrão é `"symbol"`.
    - `useGrouping`
      - : Se usar separadores de agrupamento, como separadores de milhares ou milhares/cem mil/dez milhões. Os valores permitidos são `true` e `false`; o padrão é `true`.

    As próximas propriedades se dividem em dois grupos: `minimumIntegerDigits`, `minimumFractionDigits`, e `maximumFractionDigits` no primeiro grupo, `minimumSignificantDigits` and `maximumSignificantDigits` em outro. Se pelo menos uma propriedade do segundo grupo for informado, então o primeiro grupo é ignorado.

    - `minimumIntegerDigits`
      - : A quantidade mínima de dígitos inteiros para utilizar. É possível usar valores de 1 a 21; o padrão é 1.
    - `minimumFractionDigits`
      - : A quantidade mínima de dígitos fracionados para utilizar. É possível usar valores de 0 a 20; o padrão para formatos de números simples e percentuais é 0; o padrão para formatos monetários é a menor unidade de dígitos fornecidos pela [lista de códigos de moedas ISO 4217](http://www.currency-iso.org/en/home/tables/table-a1.html) (2 se a lista não fornecer a informação).
    - `maximumFractionDigits`
      - : O número máximo de dígitos fracionados para utilizar. É possível usar valores de 0 a 20; o padrão para a formatação de número simples é o maior entre `minimumFractionDigits` e 3; o padrão para formatos monetários é o maior número de dígitos entre `minimumFractionDigits` e o fornecido pela [lista de códigos de moedas ISO 4217](http://www.currency-iso.org/en/home/tables/table-a1.html) (2 se a lista não fornecer a informação); o padrão para a formatação percentual é o maior número entre `minimumFractionDigits` e 0.
    - `minimumSignificantDigits`
      - : A quantidade mínima de dígitos significantes para usar. Os valores permitidos são de 1 a 21; o padrão é 1.
    - `maximumSignificantDigits`
      - : A quantidade máxima de dígitos significantes para usar. Os valores permitidos são de 1 a 21; o padrão é `minimumSignificantDigits`.

## Descrição

### Propriedades

- {{jsxref("NumberFormat.prototype", "Intl.NumberFormat.prototype")}}
  - : Pertime a inclusão de propriedades a todos os objetos.

### Métodos

- {{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : Retorna uma matriz contendo as localizações fornecidas que são suportadas sem retornar a localização padrão em tempo de execução.

## Instâncias `NumberFormat`

### Propriedades

As instâncias de `NumberFormat` herdam as seguntes propriedades de seu protótipo:

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype', 'Propriedades')}}

### Methods

As instâncias de `NumberFormat` herdam os seguintes métodos de seu protótipo:

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype', 'Métodos')}}

## Exemplos

### Uso básico

No uso básico sem a especificação de uma localização, o método retornará uma string formatada com a localização e as opções padrão.

```js
var numero = 3500;

console.log(new Intl.NumberFormat().format(numero));
// → '3,500' se a localização for U.S. English
```

### Usando `locales`

Este exemplo mostra algumas variações de formatos de números localizados. A fim de obter o formato da linguagem utilizada na interface do usuário da sua aplicação, tenha certeza de especificar a língua (e possivelmente algumas línguas reservas) usando o argumento `locales`:

```js
var numero = 123456.789;

// O alemão usa vírgula como separador de decimal e ponto para milhares
console.log(new Intl.NumberFormat("de-DE").format(numero));
// → 123.456,789

// O árabe usa dígitos reais árabes em muitos países que falam árabe
console.log(new Intl.NumberFormat("ar-EG").format(numero));
// → ١٢٣٤٥٦٫٧٨٩

// A Índia usa separadores de milhares/cem mil/dez milhões
console.log(new Intl.NumberFormat("en-IN").format(numero));
// → 1,23,456.789

// A chave de extensão nu requer um sistema de numeração, ex. decimal chinês
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(numero));
// → 一二三,四五六.七八九

// Quando informada uma língua sem suporte, como balinês,
// inclua uma língua reseva, neste caso indonésio
console.log(new Intl.NumberFormat(["ban", "id"]).format(numero));
// → 123.456,789
```

### Usando `options`

Os resultados podem ser personalizados usando o argumento `options`:

```js
var numero = 123456.789;

// informando um formato de moeda
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    numero,
  ),
);
// → 123.456,79 €

// o yen japonês não tem uma unidade menor
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    numero,
  ),
);
// → ￥123,457

// limitando a três dígitos significativos
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    numero,
  ),
);
// → 1,23,000
```

## Especificações

| Especificação                                                              | Status                    | Comentário         |
| -------------------------------------------------------------------------- | ------------------------- | ------------------ |
| {{SpecName('ES Int 1.0', '#sec-11.1', 'Intl.NumberFormat')}}               | {{Spec2('ES Int 1.0')}}   | Definição inicial. |
| {{SpecName('ES Int 2.0', '#sec-11.1', 'Intl.NumberFormat')}}               | {{Spec2('ES Int 2.0')}}   |                    |
| {{SpecName('ES Int Draft', '#numberformat-objects', 'Intl.NumberFormat')}} | {{Spec2('ES Int Draft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Intl.NumberFormat")}}

## Veja também

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl', 'Veja_tambem')}}
