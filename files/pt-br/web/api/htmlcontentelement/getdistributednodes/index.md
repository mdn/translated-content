---
title: HTMLContentElement.getDistributedNodes()
slug: Web/API/HTMLContentElement/getDistributedNodes
tags:
  - Componente web
  - HTML DOM
  - HTMLContentElement
  - HTMLContentElement.getDistributedNodes()
  - Property
  - getDistributedNodes()
translation_of: Web/API/HTMLContentElement/getDistributedNodes
---
{{ APIRef("Web Components") }}

O método **`HTMLContentElement.getDistributedNodes()`** retorna um static {{domxref("NodeList")}} do {{glossary("distributed nodes")}} associado com este elemento `<content>`.

## Syntaxe

```
var nodeList = object.getDistributedNodes()
```

## Exemplo

```js
//Pegue os nós distribuídos
var nodes = myContentObject.getDistributedNodes();
```

## Specificações

| Specificações                                                                    | Status                           | Comentário |
| -------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('Shadow DOM', '#the-content-element', 'content')}} | {{Spec2('Shadow DOM')}} |            |

## Compatibilidade com navegadores

{{Compat("api.HTMLContentElement.getDistributedNodes")}}

## Veja também

- [HTMLContentElement](/pt-BR/docs/Web/API/HTMLContentElement)
