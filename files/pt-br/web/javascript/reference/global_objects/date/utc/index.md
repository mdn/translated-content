---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
---

{{JSRef}}

O método **`Date.UTC()`** aceita os mesmos parâmetros que o construtor mais longo de **`Date`** e retorna o total de milisegundos desde 1º de Janeiro de 1970 às 00:00:00 (horário universal). O valor retornado por **`Date.UTC()`** pode ser usado como parâmetro para criar uma instância de {{jsxref("Date")}}.

## Sintaxe

```
Date.UTC(ano, mês[, dia[, hora[, minuto[, segundo[, milisegundo]]]]])
```

### Parâmetros

- `ano`
  - : Um valor inteiro representando o ano, após 1970.
- `mês`
  - : Um valor inteiro que representa o mês, começando com 0 para Janeiro até 11 para Dezembro.
- `dia`
  - : Opcional. Um valor inteiro entre 1 e 31 representando o dia do mês.
- `hora`
  - : Opcional. Um valor inteiro entre 0 e 23 representando a hora do dia.
- `minuto`
  - : Opcional. Um valor entre 0 e 59 representando os minutos.
- `segundo`
  - : Opcional. Um valor entre 0 e 59 representando os segundos.
- `milisegundo`
  - : Opcional. Um valor entre 0 e 999 representando os milisegundos.

## Descrição

**`UTC()`** recebe argumentos de uma data separados por vírgula e retorna um número representando o total de milisegundos entre o dia 1º de Janeiro de 1970 às 00:00:00 (horário universal) e a data e hora que você especificou.

Você deve especificar o ano completo para o argumento ano. Por exemplo, 1998. Se o ano fornecido for um valor entre 0 e 99 o método irá converter este valor para o século 20 (1900 + ano); Por exemplo, se você utilizar 95, então o ano 1995 será utilizado.

O método `UTC()` se diferencia do construtor de {{jsxref("Date")}} de duas maneiras:

- `Date.UTC()` utiliza o horário universal em vez do horário local.
- `Date.UTC()` retorna um valor inteiro em vez de uma instância de {{jsxref("Date")}}.

Se você fornecer um argumento fora do intervalo esperado, o método UTC() atualiza os demais argumentos para permitir este valor. Por exemplo, se você utilizar 15 para mês, será adicionado 1 ao argumento ano (ano + 1) e será utilizado 3 para o argumento mês.

`UTC()` é um método estático, por conta disto você sempre irá chamar `Date.UTC()` em vez de chamar um método de um objeto {{jsxref("Date")}} que você tenha criado.

## Exemplos

### Utilizando `Date.UTC()`

A seguinte expressão cria uma instância de {{jsxref("Date")}} utilizando UTC em vez do horário local:

```
var dataUniversal = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
```

## Especificações

| Especificação                                      | Status             | Comentário                                         |
| -------------------------------------------------- | ------------------ | -------------------------------------------------- |
| {{SpecName('ES6', '#sec-date.utc', 'Date.UTC')}}   | {{Spec2('ES6')}}   |                                                    |
| {{SpecName('ES5.1', '#sec-15.9.4.3', 'Date.UTC')}} | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES1')}}                                | {{Spec2('ES1')}}   | Definição inicial. Implementado no JavaScript 1.0. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.UTC")}}

## Veja Também

- {{jsxref("Date.parse()")}}
