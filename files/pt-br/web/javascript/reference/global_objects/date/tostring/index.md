---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
---

{{JSRef}}

O método **`toString()`** retorna uma cadeia de caracteres (_string_) representando o objeto {{jsxref("Date")}} especificado.

{{EmbedInteractiveExample("pages/js/date-tostring.html","shorter")}}

## Sintaxe

```
dateObj.toString()
```

### Valor de retorno

Uma _string_ representando a data.

## Descrição

Instâncias de {{jsxref("Date")}} herdam o método `toString()` de {{jsxref("Date.prototype")}}, não {{jsxref("Object.prototype")}}. `Date.prototype.toString()` retorna uma _string_ com a representação de Date no formato especificado na ECMA-262 que pode ser resumida como:

- Dia da semana: 3 letras do nome do dia da semana em Inglês, e.g. "Sat"
- espaço
- Nome do mês: 3 letras do nome do mês em Inglês, e.g. "Sep"
- espaço
- Dia: Dia do mês em 2 dígitos, e.g. "01"
- espaço
- Ano: Ano no formato de 4 dígitos, e.g. "2018"
- espaço
- Hora: Hora do dia em 2 dígitos, e.g. "14"
- dois-pontos
- Minuto: Minutos da hora em 2 dígitos, e.g. "53"
- dois-pontos
- Segundos: Segundos do minuto em 2 dígitos, e.g. "26"
- espaço
- A _string_ "GMT"
- Sinal do deslocamento do fuso horário, pode ser:

  - "+" para deslocamentos positivos (0 ou maior)
  - "-" para deslocamentos negativos (menores que 0)

- Dois dígitos da hora do deslocamento, e.g. "14"
- Dois dígitos dos minutos do deslocamento, e.g. "00"
- Opcionalmente, um nome de fuso horário consistindo de:

  - espaço
  - parênteses esquerdo, i.e. "("
  - Uma representação de _string_ dependente da implementação do fuso horário, que pode ser uma abreviação ou o nome completo (não há um padrão para nomes ou abreviação de fusos horários), e.g. "Line Islands Time" ou "LINT"
  - parênteses direito, i.e. ")"

E.g. "Sat Sep 01 2018 14:53:26 GMT+1400 (LINT)"

Até o ECMAScript 2018 (edição 9), o formato da _string_ retornada pelo `Date.prototype.toString` era dependente da implementação. Portanto, não se deve confiar que ela está no formato especificado.

O método `toString()` é automaticamente chamado quando a data deve ser representada como texto, e.g. `console.log(new Date())`, ou quando a data é utilizada em uma concatenação de _string_, como `var today = 'Today is ' + new Date()`.

`toString()` é um método genérico, ele não requer que seu `this` seja uma instância de {{jsxref("Date")}}. Entretanto, ele deve ter uma propriedade interna `[[TimeValue]]` que não pode ser construída usando JavaScript nativo, então ela é efetivamente limitada a ser usada com instâncias {{jsxref("Date")}}. Se chamado em uma instância que não seja Date, um {{jsxref("TypeError")}} é jogado.

## Exemplos

### Usando `toString()`

O exemplo asseguir atribui o valor de `toString()` de um objeto {{jsxref("Date")}} para `myVar`:

```js
var x = new Date();
var myVar = x.toString(); // atribui uma string em myVar no mesmo formato que este:
// Mon Sep 08 1998 14:36:22 GMT-0700 (PDT)
```

## Especificações

| Especificação                                                                      |
| ---------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.tostring', 'Date.prototype.toString')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.toString")}}

## Veja também

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
