---
title: <var>
slug: Web/HTML/Element/var
---

## Resumo

O elemento HTML Variable (`<var>`) representa uma variável em uma expressão matemática ou um contexto de programação.

## Contexto de utilização

| Permitted content         | Phrasing content                                                                                   |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| Tag omission              | Both start and end tags are required                                                               |
| Permitted parent elements | Any element that accepts [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content). |
| Normative document        | [HTML, "The `var` element"](http://www.whatwg.org/html/#the-var-element)                           |

## Atributos

Este elemento somente inclui os [global attributes](/pt-BR/docs/HTML/Global_attributes).

## Interface DOM

Este elemento implementa a interface [`HTMLElement`](/pt-BR/docs/DOM/element).

> **Note:** **Implementation note:** up to Gecko 1.9.2 inclusive, Firefox implements the [HTMLSpanElement](/pt-BR/docs/DOM/span) interface for this element.

## Propriedades típicas padrão de estilo

```css
var {
  font-style: italic;
}
```

## Exemplo

```html
<p>A simple equation: <var>x</var> = <var>y</var> + 2</p>
```

A simple equation: _x_ = _y_ + 2

{{HTMLSidebar}}
