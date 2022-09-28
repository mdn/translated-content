---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
translation_of: Web/API/Element/removeAttribute
---
{{ APIRef("DOM") }}

`removeAttribute` remove um atributo de um elemento específico.

## Sintaxe

```
element.removeAttribute(attrName);
```

- `attrName` é o nome, em formato de texto (_string_), do atributo a ser removido do `element`_._

## Exemplo

```
// <div id="div1" align="left" width="200px">
document.getElementById("div1").removeAttribute("align");
// agora: <div id="div1" width="200px">
```

## Observação

Você deve usar `removeAttribute` ao invés de atribuir `null` ao atributo usando [setAttribute](/en/DOM/element.setAttribute).

Tentar remover um atributo que não existe no elemento não fará que uma exceção seja lançada.

{{ DOMAttributeMethods() }}

## Especificação

[DOM Level 2 Core: removeAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6D6AC0F9) (introduzido no [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute))
