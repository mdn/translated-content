---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
---

{{JSRef}}

O método **`toLocaleTimeString()`** retorna uma string com uma representação sensível ao idioma de uma porção de tempo desta data. Os novos argumentos `locales` e `options` possibilitam aplicações especificarem que formato de linguagem deve ser usado, podendo customizar o comportamento da função. Em implementações antigas, que ignoram os argumentos `locales` e `options`, o local utilizado e o formato retornado da string são implementações completamente dependentes.

{{InteractiveExample("JavaScript Demo: Date.toLocaleTimeString()")}}

```js interactive-example
// Depending on timezone, your results will vary
const event = new Date("August 19, 1975 23:15:30 GMT+00:00");

console.log(event.toLocaleTimeString("en-US"));
// Expected output: "1:15:30 AM"

console.log(event.toLocaleTimeString("it-IT"));
// Expected output: "01:15:30"

console.log(event.toLocaleTimeString("ar-EG"));
// Expected output: "١٢:١٥:٣٠ ص"
```

## Sintaxe

```
dateObj.toLocaleTimeString([locales[, options]])
```

### Parâmetros

Confira a seção [Browser compatibility](#browser_compatibility) para ver o suporte em browsers dos argumentos `locales` e `options`, e [Checking for support for `locales` and `options` arguments](#checking_for_support_for_locales_and_options_arguments) para ver suas features.

<!-- TODO: page macro not supported: page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat', 'Parameters') -->

O valor default para cada propriedade do componente date-time é {{jsxref("undefined")}}, mas se as propriedades `hour`, `minute`, `second` são todas {{jsxref("undefined")}}, então `hour`, `minute`, e `second` espera-se que seja `"numeric"`.

### Valor retornado

Uma string representando uma porção de tempo de uma instância {{jsxref("Global_Objects/Date", "Date")}}, fornecida de acordo com as convenções específicas do idioma.

## Exemplos

### Usando `toLocaleTimeString()`

Em um uso simples, sem especificar uma localidade, é retornado uma string formatada de uma localidade default e com opções default.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() sem argumentos, depende da implementação,
// da localidade padrão, e do fuso horário padrão
console.log(date.toLocaleTimeString());
// → "7:00:00 PM" se rodar em en-US com o fuso horário de America/Los_Angeles
```

### Verificando o suporte para os argumentos `locales` e `options`

Os argumentos `locales` e `options` não são suportados em todos os browsers ainda. Para conferir se uma implementação já os suporta, você pode usar a exigência que tags ilegais de liguagem são rejeitadas com uma exceção {{jsxref("RangeError")}}:

```js
function toLocaleTimeStringSupportsLocales() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Usando `locales`

Este exemplo mostra algumas das variações em um formato de tempo localizado. Para obter o formato do idioma usado na interface do usuário da sua aplicação, tenha certeza de especificar esse idioma (e possivelmente alguns idiomas de retorno) usando o argumento `locales`:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Os formatos abaixo assumem o fuso horário local da região;
// America/Los_Angeles for the US

// US English usa o formato 12 horas com AM/PM
console.log(date.toLocaleTimeString("en-US"));
// → "7:00:00 PM"

// British English usa o formato 24 horas sem AM/PM
console.log(date.toLocaleTimeString("en-GB"));
// → "03:00:00"

// Korean usa o formato 12 horas com AM/PM
console.log(date.toLocaleTimeString("ko-KR"));
// → "오후 12:00:00"

// Arabic na maiorias dos países que falam árabe usa-se os dígitos arábicos reais
console.log(date.toLocaleTimeString("ar-EG"));
// → "٧:٠٠:٠٠ م"

// quando solicitar um idioma que talvez não seja suportado, como o
// Balinese, inclua um idioma de fallback, nesse caso Indonesian
console.log(date.toLocaleTimeString(["ban", "id"]));
// → "11.00.00"
```

### Usando `options`

Os resultados fornecidos por `toLocaleTimeString()` podem ser customizados usando o argumento `options`:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// uma aplicação pode querer usar UTC e tornar isso visível
var options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// → "3:00:00 AM GMT"

// ás vezes, até em US precise usar o formato 24 horas
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// → "19:00:00"
```

## Performance

Quando se formata um grande número de datas, é aconselhável criar um objeto {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} e usar a função fornecida pela propriedade dele: {{jsxref("DateTimeFormat.prototype.format", "format")}}.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
