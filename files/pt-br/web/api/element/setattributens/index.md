---
title: Element.setAttributeNS()
slug: Web/API/Element/setAttributeNS
translation_of: Web/API/Element/setAttributeNS
---
{{ APIRef("DOM") }}

`setAttributeNS` adiciona um novo atributo ou modifica o valor de um atributo com um namespace e um nome.

Syntax

```
element.setAttributeNS(namespace,name,value)
```

- `namespace` é uma string especificando o namespace do atributo.
- `name` é uma string identificando o atributo que sera definido.
- `value` é o novo valor desejado para o atributo.

## Exemplo

```
var d = document.getElementById("d1");
d.setAttributeNS("http://www.mozilla.org/ns/specialspace", "align", "center");
```

## Notas

{{ DOMAttributeMethods() }}

## Especificação

[DOM Level 2 Core: setAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS)
