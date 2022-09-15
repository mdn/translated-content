---
title: Node.lastChild
slug: Web/API/Node/lastChild
tags:
  - API
  - DOM
  - Elements
  - lastChild
translation_of: Web/API/Node/lastChild
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
var ul = document.getElementById('lista');

// Obtém o último <li> pertencente a estrutura <ul> obtida
var li_last = ul.lastChild;
```

## Specificações

- {{Spec("http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-61AD09FB", "DOM nível 2: lastChild", "REC")}}
- {{Spec("http://dom.spec.whatwg.org/#dom-node-lastchild", "DOM padrão: lastChild")}}
