---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
---

{{JSRef}}

O objeto **`Intl`** é o namespace para a API de Internacionalização do ECMAScript , que fornece comparação de string sensível à línguagem, formatação de números, e formatação de data e hora. Os construtores para os objetos {{jsxref("Collator")}}, {{jsxref("NumberFormat")}}, e {{jsxref("DateTimeFormat")}} são propriedades do objecto `Intl`. Esta página documenta essas propriedades, bem como funcionalidades comuns aos construtores de internacionalização e outras funções sensíveis de linguagem.

## Propriedades

- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
  - : Construtor para _collators_, objetos que permitem comparação de string sensível a linguagem.
- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
  - : Construtor para objetos que permitem formatação de data e hora sensível a linguagem.
- {{jsxref("Global_Objects/NumberFormat", "Intl.NumberFormat")}}
  - : Construtor para objetos que permitem formatação de número sensível a linguagem.

## Métodos

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Retorna os nomes canônicos de local (ex.: en-US, pt-BR).

## Identificação e negociação de local

Os construtores de internacionalização, assim como diversos métodos de outros construtores que são sensíveis a idioma (listados em [Veja também](#see_also)) usam um padrão comum para identificar locais e determinar qual será utilizado: todos aceitam argumentos `locales` e `options` e negociam o(s) local(is) requisitado entre os locais suportados usando um algoritmo especificado na propriedade `options.localeMatcher`.

### Argumento `locales`

O argumento `locales` deve ser uma string contendo uma [tag de linguagem BCP 47](http://tools.ietf.org/html/rfc5646) ou um array dessas tags. Se o argumento `locales` não for passado ou estiver indefinido, será utilizado o local padrão do runtime.

Uma tag de linguagem BCP 47 identifica um idioma ou local (a diferença entre ambos neste caso é difusa). Em sua forma mais comum, ela pode conter, nesta ordem: um código de idioma, um código de escrita e um código de país, todos eparados por hífen. Exemplos:

- `"hi"`: Hindi.
- `"de-AT"`: Alemão como usado na Áustria.
- `"zh-Hans-CN"`: Chinês com escrita simplificada como usado na China.

As subtags identificando idiomas, escritas, países (regiões) e (raramente utilizadas) variantes nas tags de linguagem BCP 47 podem ser consultadas no [Registro de Subtags de Linguagem da IANA](http://www.iana.org/assignments/language-subtag-registry).

BCP 47 também permite extensões, e uma delas é relevante para as funções JavaScript de internacionalização: a extensão `"u"` (Unicode). Ela pode ser utilizada para requisitar uma customização do comportamento específico local de um objeto {{jsxref("Collator")}}, {{jsxref("NumberFormat")}}, ou {{jsxref("DateTimeFormat")}}. Exemplos:

- `"de-DE-u-co-phonebk"`: Use the phonebook variant of the German sort order, which expands umlauted vowels to character pairs: ä → ae, ö → oe, ü → ue.
- `"th-TH-u-nu-thai"`: Use Thai digits (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) in number formatting.
- `"ja-JP-u-ca-japanese"`: Use the Japanese calendar in date and time formatting, so that 2013 is expressed as the year 25 of the Heisei period, or 平成 25.

### Locale negotiation

The `locales` argument, after stripping off all Unicode extensions, is interpreted as a prioritized request from the application. The runtime compares it against the locales it has available and picks the best one available. Two matching algorithms exist: the `"lookup"` matcher follows the Lookup algorithm specified in [BCP 47](http://tools.ietf.org/html/rfc4647#section-3.4); the `"best fit"` matcher lets the runtime provide a locale that's at least, but possibly more, suited for the request than the result of the Lookup algorithm. If the application doesn't provide a `locales` argument, or the runtime doesn't have a locale that matches the request, then the runtime's default locale is used. The matcher can be selected using a property of the `options` argument (see below).

If the selected language tag had a Unicode extension substring, that extension is now used to customize the constructed object or the behavior of the function. Each constructor or function supports only a subset of the keys defined for the Unicode extension, and the supported values often depend on the language tag. For example, the `"co"` key (collation) is only supported by {{jsxref("Collator")}}, and its `"phonebk"` value is only supported for German.

### `options` argument

The `options` argument must be an object with properties that vary between constructors and functions. If the `options` argument is not provided or is undefined, default values are used for all properties.

One property is supported by all language sensitive constructors and functions: The `localeMatcher` property, whose value must be a string `"lookup"` or `"best fit"` and which selects one of the locale matching algorithms described above.

## Specifications

| Specification                                        | Status                    | Comment                                            |
| ---------------------------------------------------- | ------------------------- | -------------------------------------------------- |
| {{SpecName('ES Int 1.0', '#sec-8', 'Intl')}}         | {{Spec2('ES Int 1.0')}}   | Initial definition.                                |
| {{SpecName('ES Int 2.0', '#sec-8', 'Intl')}}         | {{Spec2('ES Int 2.0')}}   |                                                    |
| {{SpecName('ES Int Draft', '#intl-object', 'Intl')}} | {{Spec2('ES Int Draft')}} | Added Intl.getCanonicalLocales in the 4th edition. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Intl")}}

## Veja também

- Introduction: [The ECMAScript Internationalization API](http://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html)
- Constructors

  - {{jsxref("Collator", "Intl.Collator")}}
  - {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
  - {{jsxref("NumberFormat", "Intl.NumberFormat")}}

- Methods

  - {{jsxref("String.prototype.localeCompare()")}}
  - {{jsxref("Number.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleDateString()")}}
  - {{jsxref("Date.prototype.toLocaleTimeString()")}}
