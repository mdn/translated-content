---
title: "::marker"
slug: Web/CSS/::marker
---

{{CSSRef}}

Псевдоэлемент **`::marker`** применяет стили к маркеру элемента списка, которые обычно содержит значок или номер. Работает с любым элементом или псевдоэлементом, к которого установлен [`display: list-item`](/ru/docs/Web/CSS/display), например, у такого как {{HTMLElement("li")}} или {{HTMLElement("summary")}}.

```css
::marker {
  color: blue;
  font-size: 1.2em;
}
```

## Разрешённые свойства

Только некоторые CSS-свойства могут быть использованы с `::marker` в качестве селектора:

- Все [свойства шрифтов](/ru/docs/Web/CSS/CSS_Fonts)
- {{CSSxRef("white-space")}}
- {{CSSxRef("color")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}} и {{CSSxRef("direction")}}
- Свойство {{CSSxRef("content")}}
- Все [animation](/ru/docs/Web/CSS/CSS_Animations#CSS_Properties) и [transition](/ru/docs/Web/CSS/CSS_Transitions#Properties) свойства

> **Примечание:** The specification states that additional CSS properties may be supported in future.

## Syntax

{{CSSSyntax}}

## Examples

### HTML

```html
<ul>
  <li>Peaches</li>
  <li>Apples</li>
  <li>Plums</li>
</ul>
```

### CSS

```css
ul li::marker {
  color: red;
  font-size: 1.5em;
}
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

| Specification                                                      | Status                            | Comment                |
| ------------------------------------------------------------------ | --------------------------------- | ---------------------- |
| {{SpecName('CSS4 Pseudo-Elements', '#marker-pseudo', '::marker')}} | {{Spec2('CSS4 Pseudo-Elements')}} | No significant change. |
| {{SpecName('CSS3 Lists', '#marker-pseudo', '::marker')}}           | {{Spec2('CSS3 Lists')}}           | Initial definition.    |

## Browser compatibility

{{Compat}}

## See also

- HTML-элементы, у которые есть маркеры списка по умолчанию: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}
