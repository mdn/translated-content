---
title: Element.querySelector()
slug: Web/API/Element/querySelector
---

{{APIRef("DOM")}}

Retorna o primeiro elemento descendente do elemento em que a função foi invocada e que corresponde aos seletores especificado.

## Sintaxe

```
elemento = elementoBase.querySelector(seletores);
```

- `elemento` e `elementoBase` são objetos {{domxref("element")}}.
- `selectores` é um grupo de [selectores](/pt-BR/docs/Web/Guide/CSS/Getting_Started/Selectors).

## Exemplo

Neste exemplo é retornado o primeiro elemento `style` que, ou não tem nenhum atributo type, ou tem o atributo type igual a `text/css`:

```js
var el = document.body.querySelector(
  "style[type='text/css'], style:not([type])",
);
```

## Notas

Retorna `null` se nenhum elemento for encontrado; caso contrário retorna o primeiro elemento;

Lança uma exceção `SYNTAX_ERR` se o grupo de seletores é inválido.

querySelector() foi introduzido em WebApps API.

O argumento de string do `querySelector` deve seguir a sintaxe CSS. Veja exemplos concretos em {{domxref("document.querySelector")}}

## Especificação

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Também

- [`element.querySelectorAll`](/pt-BR/docs/DOM/Element.querySelectorAll)
- [`document.querySelector`](/pt-BR/docs/DOM/Document.querySelector)
- [`document.querySelectorAll`](/pt-BR/docs/DOM/Document.querySelectorAll)
- [Code snippets for querySelector](/pt-BR/docs/Code_snippets/QuerySelector)
