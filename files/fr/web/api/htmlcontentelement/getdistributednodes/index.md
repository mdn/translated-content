---
title: HTMLContentElement.getDistributedNodes()
slug: Web/API/HTMLContentElement/getDistributedNodes
tags:
  - API
  - HTML DOM
  - Référence(2)
  - Web Components
translation_of: Web/API/HTMLContentElement/getDistributedNodes
---
{{ APIRef("Web Components") }}

La méthode **`HTMLContentElement.getDistributedNodes()`** retourne un {{domxref("NodeList")}} statique du {{glossary("distributed nodes")}} associé avec l'élément `<content>`.

## Syntaxe

    var nodeList = object.getDistributedNodes()

## Exemple

```js
// Récupère les éléments
var nodes = myContentObject.getDistributedNodes();
```

## Spécifications

| Spécification                                                                    | Status                           | Commentaire |
| -------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('Shadow DOM', '#the-content-element', 'content')}} | {{Spec2('Shadow DOM')}} |             |

## Compatibilité des navigateurs

{{Compat("api.HTMLContentElement.getDistributedNodes")}}

## Voir aussi

- [HTMLContentElement](/fr/docs/Web/API/HTMLContentElement)
