---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
---

{{JSRef}}

O método **`toLocaleDateString()`** retorna uma string com a representação de parte da data baseando-se no idioma. Os novos argumentos `locales` e `options` deixam as aplicações especificarem o idioma cujas convenções de formatação devem ser usadas e permitem customizar o comportamento da função. Em implementações antigas, nas quais ignoram os argumentos `locales` e `options`, o locale usado e a forma da string retornada são inteiramente dependente da implementação nativa.

## Sintáxe

```
dateObj.toLocaleDateString([locales [, options]])
```

### Parametros

Verifique a seção [Compatibilidade entre navegadores](#compatibilidade_entre_navegadores) para ver quais navegadores dão suporte aos argumentos `locales` e `options`, e o [Example: Verificação para suporte dos argumentos `locales` e `options`](#example:_checking_for_support_for_locales_and_options_arguments) para detectar a funcionalidade.

<!-- TODO: page macro not supported: page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat', 'Parameters') -->O valor padrão para cada propriedade do componente date-time é {{jsxref("undefined")}}, mas se as propriedades `weekday`, `year`, `month`, `day` são todas {{jsxref("undefined")}}, então `year`, `month` and `day` são assumidos como "`numeric`".

### Return value

Uma representação em string de parte da data dada a instância {{jsxref("Global_Objects/Date", "Date")}} de acordo com as convenções específicas do idioma.

## Exemplos

### Usando `toLocaleDateString()`

Em uso básico sem especificação de locale, uma string formatada no padrão do locale e com as opções padrões é retornada.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() sem argumentos depende da implementação,
// o locale padrão, e o time zone padrão
console.log(date.toLocaleDateString());
// → "12/11/2012" se rondando em locale en-US com time zone de America/Los_Angeles
```

### Checagem para o suporte dos argumentos `locales` e `options`

Os argumentos `locales` e `options` não são suportados em todos os browser ainda. Para verificar se uma uma implementação já suporta eles, você pode usar o requisito de que tags de idioma ilegal são rejeitadas com uma exceção {{jsxref("RangeError")}}:

```js
function toLocaleDateStringSupportsLocales() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Usando `locales`

Esse exemplo mostra algumas das variações em formatos de data localizados. A fim de obter oformato do idioma usado na interface de usuário da usa aplicação, certifique-se de especificar esse idioma (e possivelmente algumas outros idiomas de reserva) usando o argumento `locales`:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// os formatos abaixo assumem o time zone local do locale;
// America/Los_Angeles for the US

// Inglês americano usa a ordem mês-dia-ano
console.log(date.toLocaleDateString("en-US"));
// → "12/19/2012"

// Inglês Britânico usa a ordem dia-mês-ano
console.log(date.toLocaleDateString("en-GB"));
// → "20/12/2012"

// Coreano usa a ordem ano-mês-dia
console.log(date.toLocaleDateString("ko-KR"));
// → "2012. 12. 20."

// Árabe na maioria dos países de língua árabe usa dígitos árabes reais
console.log(date.toLocaleDateString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢"

// para Japonês, aplicações podem querer usar o calendário japonês,
// onde 2012 foi o ano 24 da era Heisei
console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// → "24/12/20"

// quando um idioma que pode não ser suportado é requerido, tal como
// Balinês, inclua um idioma de reserva, nesse caso Indonésio
console.log(date.toLocaleDateString(["ban", "id"]));
// → "20/12/2012"
```

### Usando `options`

O resultados gerados por `toLocaleDateString()` podem ser customizado usando o argumento `options`:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// requer um dia da semana jutamente com uma data longa
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// uma aplicação pode querer usar UTC e fazê-lo visível
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleDateString("en-US", options));
// → "Thursday, December 20, 2012, GMT"
```

## Performance

Ao formatar um grande número de datas, é melhor criar um objeto {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} e usar a função fornecido porsua propriedade {{jsxref("DateTimeFormat.prototype.format", "format")}}.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
