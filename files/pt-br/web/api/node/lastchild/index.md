---
title: Node.lastChild
slug: Web/API/Node/lastChild
---

{{APIRef("DOM")}}

**`Node.lastChild`** é uma propriedade do tipo somente leitura (read-only) que retorna o último elemento filho (node) de uma estrutura DOM. Se seu parentNode for um Element, ele retornará um Element node, um text node, ou um comment node. Retornará null se o elemento de referência não tiver elementos filhos child. É extremamente recomendável que você conheça a estrutura DOM para um melhor aprendizado e entendimento.

## Syntax

```
var last_child = element.lastChild
```

## Exemplo

```js
// Obtém um elemento <ul>
var ul = document.getElementById("lista");

// Obtém o último <li> pertencente a estrutura <ul> obtida
var li_last = ul.lastChild;
```

## Especificação

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
