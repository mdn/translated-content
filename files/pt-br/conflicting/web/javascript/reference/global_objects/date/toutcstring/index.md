---
title: Date.prototype.toGMTString()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
---

{{JSRef}} {{deprecated_header}}

O método **`toGMTString()`** converte a data para uma cadeia de caracteres (_string)_, usando as convenções de Internet para o Horário de Greenwich (GMT). O formato exato do valor retornado por `toGMTString()` varia de acordo com plataforma e navegador, em geral ele deve representar uma _string_ legível para um ser humano.

> **Nota:** `toGMTString()` está depreciado e não deve ser mais usado. Ele se mantém implementado somente para retrocompatibilidade; por favor use {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}}.

## Sintaxe

```
dateObj.toGMTString()
```

### Valor de retorno

Uma _string_ representando a data seguindo a convenção de Internet para o Horário de Greenwich (GMT).

## Exemplos

### Simple example

Neste exemplo, o método `toGMTString()` converte a data para GMT (UTC) usando o deslocamento de fuso horário do sistema operacional e retorna uma _string_ que é similar a seguinta forma. O formato exato depende da plataforma.

```js
var today = new Date();
var str = today.toGMTString();  // depreciado! use toUTCString()

console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
```

## Especificações

| Especificação                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.togmtstring', 'Date.prototype.toGMTString')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.toGMTString")}}

## Veja também

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
