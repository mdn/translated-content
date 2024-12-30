---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
---

{{JSRef}}O método **`trim()`** remove os espaços em branco ([whitespaces](/pt-BR/docs/Web/API/Document_Object_Model/Whitespace)) do início e/ou fim de um texto. É considerado espaço em branco (espaço, tabulação, espaço fixo/rígido, etc.) e todo sinal de fim de linha de texto (LF, CR, etc.).

## Sintaxe

```
str.trim()
```

## Descrição

O método `trim()` retorna o texto sem espaços em branco no início e/ou fim da string. O `trim()` não altera o valor da string original.

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## Exemplos

### Usando `trim()`

Os exemplos a seguir retornam o valor de `'foo'` sem espaços em branco:

```js
//.trim() removendo whitespace de ambos os lados

var str = "   foo  ";
console.log(str.trim()); // retorna 'foo'

// Outro exemplo de .trim() removendo whitespace de
// apenas um lado.

var str = "foo    ";
console.log(str.trim()); // retorna 'foo'
```

## Polyfill

Executar o seguinte código antes antes de qualquer código irá criar o método `trim()` se o mesmo não estiver disponível nativamente.

```js
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
}
```

## Especificações

{{Specifications}}

## Navegadores compatíveis

{{Compat}}

## Veja também

- {{jsxref("String.prototype.trimLeft()")}} {{non-standard_inline}}
- {{jsxref("String.prototype.trimRight()")}} {{non-standard_inline}}
