---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---

{{JSRef}}

O método **`toJSON()`** retorna uma representação representation do objeto {{jsxref("Date")}} como string.

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

## Sintaxe

```
dateObj.toJSON()
```

### Retorno

Uma representação da data como string.

## Descrição

Instâncias de {{jsxref("Date")}} referem-se a um específico ponto no tempo. Invocar `toJSON()` retorna uma string (usando {{jsxref("Date.prototype.toISOString()", "toISOString()")}}) representando o valor do objeto {{jsxref("Date")}}. Por padrão este método é destinado a serializar objetos {{jsxref("Date")}} em serializações {{Glossary("JSON")}}.

## Exemplos

### Usando `toJSON()`

```js
var jsonDate = new Date().toJSON();
var backToDate = new Date(jsonDate);

console.log(jsonDate); //2015-10-26T07:46:36.611Z
```

## Especificações

| Especificação                                                                  | Status               | Comentários                                          |
| ------------------------------------------------------------------------------ | -------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.9.5.44', 'Date.prototype.toJSON')}}               | {{Spec2('ES5.1')}}   | Definição inicial. Implementado no JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-date.prototype.tojson', 'Date.prototype.toJSON')}}     | {{Spec2('ES6')}}     |                                                      |
| {{SpecName('ESDraft', '#sec-date.prototype.tojson', 'Date.prototype.toJSON')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.toJSON")}}

## Veja também

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
