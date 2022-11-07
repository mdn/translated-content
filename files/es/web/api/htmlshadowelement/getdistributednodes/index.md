---
title: HTMLShadowElement.getDistributedNodes()
slug: Web/API/HTMLShadowElement/getDistributedNodes
tags:
  - Necesita traducción
translation_of: Web/API/HTMLShadowElement/getDistributedNodes
---

{{APIRef("Web Components")}}

The **`HTMLShadowElement.getDistributedNodes()`** method returns a static {{domxref("NodeList")}} of the {{glossary("distributed nodes")}} associated with this `<shadow>` element.

## Syntax

```
var nodeList = object.getDistributedNodes()
```

## Example

```js
// Get the distributed nodes
var nodes = myShadowObject.getDistributedNodes();
```

## Specifications

| Specification                                                                    | Status                           | Comment            |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('Shadow DOM', '#the-shadow-element', 'shadow')}} | {{Spec2('Shadow DOM')}} | Initial definition |

## Browser compatibility

{{Compat("api.HTMLShadowElement.getDistributedNodes")}}

## See also

- [HTMLShadowElement](/es/docs/Web/API/HTMLShadowElement)
