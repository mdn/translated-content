---
title: "Element: método removeAttribute()"
short-title: removeAttribute()
slug: Web/API/Element/removeAttribute
l10n:
  sourceCommit: 93f6ad26b70067f9fbac190ea6a0351fdf40318e
---

{{ APIRef("DOM") }}

O método {{domxref("Element")}} **`removeAttribute()`** remove o atributo com o nome especificado do elemento.

## Sintaxe

```js-nolint
removeAttribute(attrName)
```

### Parâmetros

- `attrName`
  - : Uma string especificando o nome do atributo a ser removido do elemento. Se o atributo especificado não existir, `removeAttribute()` retorna sem gerar um erro.

### Valor de retorno

None ({{jsxref("undefined")}}).

## Notas de uso

Você deve usar `removeAttribute()` em vez de definir o valor do atributo como `null` diretamente ou usando {{domxref("Element.setAttribute", "setAttribute()")}}.
Muitos atributos não se comportarão conforme o esperado se você defini-los como `null`.

## Exemplos

```js
// Dado: <div id="div1" disabled width="200px">
document.getElementById("div1").removeAttribute("disabled");
// Agora: <div id="div1" width="200px">
```

## Especificações

{{Specifications}}

## Compatibilidade de navegadores

{{Compat}}

## Veja também

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
