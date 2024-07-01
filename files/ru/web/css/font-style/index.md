---
title: font-style
slug: Web/CSS/font-style
---

{{CSSRef}}

**`font-style`** это CSS-свойство определяющее каким образом шрифт должен быть стилизирован, будь то это normal, italic, или oblique face из его {{cssxref("font-family")}}.

{{EmbedInteractiveExample("pages/css/font-style.html")}}

**Italic** шрифты в общем курсивные по своей сути, обычно занимают меньше горизонтального пространства чем их нестилизированные копии, тогда как **oblique** шрифты обычно просто наклонная версия регулярного шрифта. Когда определённый стиль не доступен, оба italic и oblique шрифты симулируются искусственно наклоняя глифы регулярного шрифта (используйте {{cssxref("font-synthesis")}} для управления этим поведением).

## Syntax

```css
font-style: normal;
font-style: italic;
font-style: oblique;

/* Глобальные значения */
font-style: inherit;
font-style: initial;
font-style: unset;
```

Свойство `font-style` определяется как единственное ключевое слово выбранное из списка значений внизу.

### Values

- `normal`
  - : Выделяет шрифт который классифицирован как `normal` в {{Cssxref("font-family")}}.
- `italic`
  - : Выделяет шрифт который классифицирован как `italic`. Если не доступна курсивная версия шрифта, взамен используется `oblique` классификация. Если не одна версия не доступна, то стиль симулируется искусственно.
- `oblique`
  - : Выделяет шрифт который классифицирован как `oblique`. Если не доступна косая версия шрифта, взамен используется `italic` классификация. Если не одна версия не доступна, то стиль симулируется искусственно.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Font styles

```html hidden
<p class="normal">This paragraph is normal.</p>
<p class="italic">This paragraph is italic.</p>
<p class="oblique">This paragraph is oblique.</p>
```

```css
.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}
```

{{ EmbedLiveSample('Font_styles') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
