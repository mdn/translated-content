---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
---

{{JSRef}}

O método **`toLocaleString()`** retorna uma string com uma representação sensível a linguagem deste número.

Os novos argumentos `locales` e `options` permitem às aplicações especificar a linguagem cujas convenções de formatações serão utilizadas e personalizar o comportamento da função. Nas implementações anteriores, que ignorava os argumentos `locales` e `options` arguments, a localização utilizada e a forma de retornar a string erão totalmente dependente da implementação.

## Sintaxe

```
numObj.toLocaleString([locales [, options]])
```

### Parâmetros

Dê uma olhada na seção [Compatibilidade do Navegador](#Browser_compatibility) para verificar quais navegadores suportam os argumentos `locales` e `options`, e o Exemplo: Verificando o suporte dos argumentos `locales` e `options` para detecção desta característica.

> **Nota:** ECMAScript Internationalization API, implementada com o Firefox 29, incluiu o argumento `locales` ao método `Number.toLocaleString()`. Se o argumento for {{jsxref("undefined")}}, este método retorna os dígitos de localização especificados pelo SO, enquanto que as versões anteriores doFirefox retornavam os dígitos [Árabe Ocidental](https://en.wikipedia.org/wiki/Arabic_numerals). Esta mudança foi relatada como uma regressão que afeta a retrocompatibilidade que será corrigida em breve. ([Erro do Firefox 999003](https://bugzil.la/999003))

{{page('pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat', 'Parâmetros')}}

## Exemplos

### Usando `toLocaleString`

No uso básico sem a especificação de uma localização, o método retornará uma string formatada com a localização e as opções padrão.

```js
var numero = 3500;

console.log(numero.toLocaleString()); // Mostra "3,500" se a localização for U.S. English
```

### Verificando o suporte dos argumentos `locales` e `options`

Os argumentos `locales` e `options` não são suportados por todos os navegadores ainda. Para verificar pelo suporte das implementações do ES5.1 e posteriores, a requisição de tags de linguagem ilegais são rejeitadas com uma exceção {{jsxref("Global_Objects/RangeError", "RangeError")}} pode ser usada da seguinte forma:

```js
function toLocaleStringSupportsLocales() {
  var numero = 0;
  try {
    numero.toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

Antes da ES5.1, implementações que não exigiam um tratamento de erro se `toLocaleString` fosse chamada com argumentos.

Uma verificação que funciona em todos os casos, incluindo aqueles que suportam ECMA-262 antes da edição 5.1, é testar pelas especificações de característicadas da ECMA-402 que exigem suporte de opções regionais para `Number.prototype.toLocaleString` diretamente:

```js
function toLocaleStringSupportsOptions() {
  return !!(
    typeof Intl == "object" &&
    Intl &&
    typeof Intl.NumberFormat == "function"
  );
}
```

Estes testes para um objeto `Intl` global, verifica se ele não é `null` e se uma propriedade `NumberFormat` é uma função.

### Usando `locales`

Este exemplo mostra algumas variações de formatos de números localizados. A fim de obter o formato da linguagem utilizada na interface do usuário da sua aplicação, tenha certeza de especificar a língua (e possivelmente algumas línguas reservas) usando o argumento `locales`:

```js
var numero = 123456.789;

// O alemão usa vírgula como separador de decimal e ponto para milhares
console.log(numero.toLocaleString("de-DE"));
// → 123.456,789

// O árabe usa dígitos Árabes Orientais em muitos países que falam árabe
console.log(numero.toLocaleString("ar-EG"));
// → ١٢٣٤٥٦٫٧٨٩

// A Índia usa separadores de milhares/cem mil/dez milhões
console.log(numero.toLocaleString("en-IN"));
// → 1,23,456.789

// A chave de extensão nu requer um sistema de numeração, ex. decimal chinês
console.log(numero.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// → 一二三,四五六.七八九

// Quando informada uma língua sem suporte, como balinês,
// inclua uma língua reseva, neste caso indonésio
console.log(numero.toLocaleString(["ban", "id"]));
// → 123.456,789
```

### Usando `options`

Os resultados obtidos por `toLocaleString` pode ser personalizado usando o argumento `options`:

```js
var numero = 123456.789;

// informando um formato de moeda
console.log(
  numero.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// → 123.456,79 €

// o yen japonês não tem uma unidade menor
console.log(
  numero.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// → ￥123,457

// limitando a três dígitos significativos
console.log(numero.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// → 1,23,000
```

## Desempenho

Quando formatar uma grande quantidade de números, é melhor criar um objeto {{jsxref("NumberFormat")}} e usar a função fornecida pela propriedade {{jsxref("NumberFormat.format")}}.

## Especificações

| Especificação                                                                                           | Status                    | Comentário                                         |
| ------------------------------------------------------------------------------------------------------- | ------------------------- | -------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}          | Definição inicial. Implementado no JavaScript 1.5. |
| {{SpecName('ES5.1', '#sec-15.7.4.3', 'Number.prototype.toLocaleString')}}                               | {{Spec2('ES5.1')}}        |                                                    |
| {{SpecName('ES6', '#sec-number.prototype.tolocalestring', 'Number.prototype.toLocaleString')}}          | {{Spec2('ES6')}}          |                                                    |
| {{SpecName('ESDraft', '#sec-number.prototype.tolocalestring', 'Number.prototype.toLocaleString')}}      | {{Spec2('ESDraft')}}      |                                                    |
| {{SpecName('ES Int 1.0', '#sec-13.2.1', 'Number.prototype.toLocaleString')}}                            | {{Spec2('ES Int 1.0')}}   |                                                    |
| {{SpecName('ES Int 2.0', '#sec-13.2.1', 'Number.prototype.toLocaleString')}}                            | {{Spec2('ES Int 2.0')}}   |                                                    |
| {{SpecName('ES Int Draft', '#sec-Number.prototype.toLocaleString', 'Number.prototype.toLocaleString')}} | {{Spec2('ES Int Draft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.toLocaleString")}}

## Veja também

- {{jsxref("Number.prototype.toString()")}}
