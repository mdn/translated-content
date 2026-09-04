---
title: font-style
slug: Web/CSS/Reference/Properties/font-style
original_slug: Web/CSS/font-style
---

{{CSSRef}}

**`font-style`** это CSS-свойство определяющее каким образом шрифт должен быть стилизирован, будь то это normal, italic, или oblique face из его {{cssxref("font-family")}}.

{{InteractiveExample("CSS Demo: font-style")}}

```css interactive-example-choice
font-style: normal;
```

```css interactive-example-choice
font-style: italic;
```

```css interactive-example-choice
font-style: oblique;
```

```css interactive-example-choice
font-style: oblique 40deg;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: Amstelvar;
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: Amstelvar;
}
```

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
