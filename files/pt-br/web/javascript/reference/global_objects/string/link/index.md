---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
---

{{JSRef}} {{deprecated_header}}

O método `link()` cria uma string que representa o código para um elemento HTML [`<a>`](/pt-BR/docs/Web/HTML/Element/a) a ser usado como um link de hipertexto para outro URL.

## Sintaxe

```
str.link(url)
```

### Parâmetros

- `url`
  - : Qualquer string que especifique o atributo `href` da tag `<a>`. Deve ser um URL válido (relativo ou absoluto), com qualquer caractere `&` escapado como `&amp` e qualquer `"` caractere escapado como `&quot`.

### Valor retornado

Uma string contendo um elemento HTML [`<a>`](/pt-BR/docs/Web/HTML/Element/a).

## Descrição

Use o método `link()` para criar um elemento HTML `<a>`. A string retornada pode então ser adicionada ao documento por meio de [`document.write()`](/pt-BR/docs/Web/API/Document/write) ou [`element.innerHTML`](/pt-BR/docs/Web/API/Element/innerHTML).

Os links criados com o método `link()` tornam-se elementos na array de links do objeto `document`. Veja [`document.links`](/pt-BR/docs/Web/API/Document/links).

## Exemplos

### Usando `link()`

O exemplo a seguir exibe a palavra "MDN" como um link que retorna o usuário à Mozilla Developer Network.

```js
var hotText = "MDN";
var URL = "https://developer.mozilla.org/";

console.log("Clique para retornar à" + hotText.link(URL));
// Clique para retornar à <a href="https://developer.mozilla.org/">MDN</a>
```

## Especificações

| Specification                                                                  |
| ------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.link', 'String.prototype.link')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.link")}}

## Veja também

- {{jsxref("String.prototype.anchor()")}}
