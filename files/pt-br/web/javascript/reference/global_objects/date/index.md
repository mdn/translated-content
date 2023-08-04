---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
---

{{JSRef("Global_Objects", "Date")}}

## Resumo

Cria uma instância JavaScript de **`Date`** que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC).

## Construtor

```js
new Date();
new Date(valor);
new Date(dataString);
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
```

> **Nota:** Note que objetos JavaScript `Date` só podem ser instanciados chamando JavaScript `Date` como um construtor: chamá-lo como uma função regular (ou seja, sem o operador [new](/pt-BR/docs/Web/JavaScript/Reference/Operators/new)) irá retornar uma string ao invés de um objeto `Date`; ao contrário de outros tipos de objetos JavaScript, objetos JavaScript `Date` não têm sintaxe literal.

### Parâmetros para o constructor Date

Nota: Quando Date for chamado como um construtor com mais de um argumento, se os valores forem maiores do que seu limite lógico (e.g. se 13 for fornecido como um valor para mês ou 70 for o valor para minuto), o valor adjacente será ajustado. E.g. new Date(2013, 13, 1) é equivalente a new Date(2014, 1, 1), ambos criam uma data para 2014-02-01 (note que o mês começa em 0). Similarmente para outros valores: new Date(2013, 2, 1, 0, 70) é equivalente a new Date(2013, 2, 1, 1, 10), pois ambos criam uma data para 2013-03-01T01:10:00.

- _`value`_

  - : Um valor inteiro representando o número de milisegundos desde 1 de Janeiro de 1970 00:00:00 UTC (Era Unix ou Marco Zero).

- _`dataString`_

  - : Um valor do tipo String que representa uma data. A string deverá estar uma formato reconhecido pelo método {{jsxref("Date.parse()")}} ([IETF-compliant RFC 2822 timestamps](http://tools.ietf.org/html/rfc2822#page-14) e também uma [versão da ISO8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)).

- _`year`_

  - : Um valor inteiro que representa o ano. Valores de 0 a 99 correspondem aos anos de 1900 a 1999. Veja o [exemplo abaixo](<#Two digit years>).

- _`month`_

  - : Um valor inteiro que representa o mês, começando com 0 para Janeiro até 11 para Dezembro.

- _`day`_

  - : Um valor inteiro que representa o dia do mês.

- _`hour`_

  - : Um valor inteiro que representa a hora do dia.

- _`minute`_

  - : Um valor inteiro que representa o segmento de um minuto de tempo.

- _`second`_

  - : Um valor inteiro que representa o segmento de segundo do tempo.

- _`millisecond`_
  - : Um valor inteiro que representa o segmento de milisegundo do tempo.

## Descrição

- Se nenhum argumento for fornecido, o construtor criará um objeto JavaScript Date com a data e hora corrente de acordo com as configurações do sistema.
- Se ao menos 2 argumentos forem fornecidos, os argumentos ausentes serão configurados como 1 (se o dia estiver ausente) ou 0 para todos os outros.
- A data do JavaScript é baseada no valor de tempo em milisegundos desde a meia noite de 01 de Janeiro de 1970, UTC. Um dia corresponde a 86.400,000 milisegundos. O intervalo do objeto Date no JavaScript é de -100.000,000 dias a 100.000,000 dias relativo a 01 de Janeiro de 1970, UTC.
- O objeto Date no JavaScript tem um comportamento uniforme nas plataformas. O valor do tempo pode ser transmitido entre sistemas para representar o mesmo instante no tempo e se for usado para criar um objeto de data local, ele refletirá o tempo local equivalente.
- O objeto Date JavaScript suporta vários métodos UTC (universal), assim como métodos de tempo locais. UTC, também conhecido como Tempo Médio de Greenwich (Greenwich Mean Time, GMT), refere-se ao tempo como definido pelo Padrão de Tempo Mundial (World Time Standard). O tempo local é o tempo conhecido pelo computador onde o JavaScript é executado.
- Invocar o objeto Date no JavaScript como uma função (i.e., sem o operador [new](/pt-BR/docs/Web/JavaScript/Reference/Operators/new)) retornatá uma string representando a data e hora corrente.

## Propriedades

- {{jsxref("Date.prototype")}}
  - : Permite adicionar propriedades a um objeto javaScript Date.
- Date.length
  - : O valor de `Date.length` é 7. Esse é o número de argumentos manipulados pelo construtor.

## Métodos

- {{jsxref("Date.now()")}}
  - : Retorna o valor numérico correspondente ao tempo corrente - o número de milisegundos passados desde 1 de Janeiro de 1970 00:00:00 UTC.
- {{jsxref("Date.parse()")}}
  - : Analisa uma string que representa uma data e retorna o número de milisegundos desde 1 de Janeiro, 1970, 00:00:00, hora local.
- {{jsxref("Date.UTC()")}}
  - : Aceita os mesmos parâmetros como a forma mais longa do construtor (i.e. 2 até 7) e retorna o número de milisegundos desde 1 de Janeiro, 1970, 00:00:00 UTC.

## Instâncias JavaScript de `Date`

Todas as instâncias `Date` são herdadas de {{jsxref("Date.prototype")}}. O objeto protótipo do construtor `Date` pode ser modificado para afetar todas as instâncias de `Date`.

### Métodos

{{ page("/pt-BR/docs/JavaScript/Reference/Global_Objects/Date/prototype", "Methods") }}

## Exemplos

### Várias formas de se criar um objeto Date

Os seguintes exemplos mostram várias formas de se criar datas em JavaScript:

> **Nota:** a conversão de _strings_ com o construtor de `Date` (`Date.parse` é equivalente ao contrutor) é fortemente desencorajada devido às inconsistências e diferenças dos navegadores.

```js
var today = new Date();
var birthday = new Date("December 17, 1995 03:24:00");
var birthday = new Date("1995-12-17T03:24:00");
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);
```

### Anos com dois dígitos mapeados para 1900 - 1999

Para criar e obter datas entre os anos 0 e 99 os métodos {{jsxref("Date.prototype.setFullYear()")}} e {{jsxref("Date.prototype.getFullYear()")}} devem ser usados.

```js
var data = new Date(98, 1); // Dom Fev 01 1998 00:00:00 GMT+0000 (GMT)

// Métodos em desuso, 98 mapeia para 1998 aqui também
data.setYear(98); // Dom Fev 01 1998 00:00:00 GMT+0000 (GMT)

data.setFullYear(98); // Sab Fev 01 0098 00:00:00 GMT+0000 (BST)
```

### Calculando o tempo decorrido

Os seguintes exemplos mostram como determinar o tempo decorrido entre duas datas no JavaScript em milissegundos.

Devido aos tamanhos diferentes dos dias (devido à mudança do horário de verão), meses e dias, expressar o tempo decorrido em unidades maiores que horas, minutos e segundos requer analisar os problemas e deve ser cuidadosamente investigado antes de se tentar utilizar.

```js
// usando objetos Date
var inicio = Date.now();

// o evento para o tempo vai aqui:
facaAlgoPorUmLongoTempo();
var fim = Date.now();
var decorrido = fim - inicio; // tempo decorrido em milisegundos
```

```js
// utilizando métodos embutidos
var inicio = new Date();

// o evento para o tempo vai aqui:
facaAlgoPorUmLongoTempo();
var fim = new Date();
var decorrido = fim.getTime() - inicio.getTime(); // tempo decorrido em milisegundos
```

```js
// para testar uma função e obter o seu retorno
function imprimirTempoDecorrido(fTeste) {
  var nHoraInicial = Date.now(),
    vRetorno = fTeste(),
    nHoraFinal = Date.now();

  alert(
    "Tempo decorrido: " + String(nHoraFinal - nHoraInicial) + " milisegundos",
  );
  return vRetorno;
}

retornoDaSuaFuncao = imprimirTempoDecorrido(suaFuncao);
```

> **Nota:** Nota: Em navegadores que suportam a API de Desempenho Web ({{domxref("window.performance", "Web Performance API", "", 1)}}) com o recurso de tempo de alta resolução, {{domxref("Performance.now()")}} pode fornecer medidas de tempo decorrido mais confiáveis e precisas do que {{jsxref("Date.now()")}}.

## Especificações

| Especificação                                        | Estado               | Comentário                                         |
| ---------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date-objects', 'Date')}} | {{Spec2('ESDraft')}} |                                                    |
| {{SpecName('ES6', '#sec-date-objects', 'Date')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ES5.1', '#sec-15.9', 'Date')}}           | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES1')}}                                  | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.1. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date")}}
