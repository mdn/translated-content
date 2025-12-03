---
title: outline-color
slug: Web/CSS/Reference/Properties/outline-color
original_slug: Web/CSS/outline-color
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

CSS-свойство **`outline-color`** задаёт цвет обводки элемента.

{{InteractiveExample("CSS Demo: outline-color")}}

```css interactive-example-choice
outline-color: red;
```

```css interactive-example-choice
outline-color: #32a1ce;
```

```css interactive-example-choice
outline-color: rgba(170, 50, 220, 0.6);
```

```css interactive-example-choice
outline-color: hsla(60, 90%, 50%, 0.8);
```

```css interactive-example-choice
outline-color: currentcolor;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Синтаксис

```css
/* Ключевые слова */
outline-color: invert;

/* Значения <color> */
outline-color: #f92525;
outline-color: rgb(30, 222, 121);
outline-color: blue;

/* Глобальные значения */
outline-color: inherit;
outline-color: initial;
outline-color: revert;
outline-color: revert-layer;
outline-color: unset;
```

Свойство `outline-color` может быть иметь одно из перечисленных ниже значений.

### Значения

- {{cssxref("&lt;color&gt;")}}
  - : Цвет обводки, определённый в формате типа `<color>`.
- `invert`
  - : Для лучшей видимости обводки, её цвет будет вычислен как противоположный цвету фона элемента. Стоит заметить, что не все браузеры могут поддерживать такую возможность, в подобном случае это значение будет восприниматься как недопустимое.

## Описание

Обводка — это линия вокруг элемента за пределами рамки ({{cssxref("border")}}). В отличие от рамки элемента, обводка находится вне границ элемента и может перекрывать другое содержимое. Напротив, рамка участвует в блочной модели, чтобы расположиться на странице, не перекрыв при этом ничего другого (если, конечно, явно не сделать этого).

При определении внешнего вида обводки зачастую удобнее всего воспользоваться сокращённым свойством {{cssxref("outline")}}.

## Проблемы, связанные с доступностью

При определении собственных [стилей для состояния фокуса](/ru/docs/Web/CSS/Reference/Selectors/:focus), как правило, предполагается изменение свойства {{cssxref("outline")}}. При корректировке цвета обводки нужно сохранить коэффициент контрастности между элементом и фоном на высоком уровне, чтобы люди с нарушениями зрения могли его заметить.

Коэффициент контрастности цвета определяется путём сравнения значений светлоты цвета текста и фона. Согласно [руководству по обеспечению доступности веб-контента (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)), коэффициент контрастности должен быть 4,5:1 для обычного текста, и 3:1 для крупного текста, например, заголовков. Под крупным текстом понимается размер от 18,66px с [полужирным начертанием](/ru/docs/Web/CSS/Reference/Properties/font-weight) или более крупный, либо от 24px и крупнее.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Элемент с обводкой в виде сплошной линии синего цвета

#### HTML

```html
<p>У меня синяя обводка.</p>
```

#### CSS

```css
p {
  outline: 2px solid; /* Толщина и стиль обводки */
  outline-color: #0000ff; /* Синий цвет обводки */
  margin: 5px;
}
```

#### Результат

{{ EmbedLiveSample('Элемент с обводкой в виде сплошной линии синего цвета') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
- Тип данных {{cssxref("&lt;color&gt;")}}
- Другие, относящиеся к цвету свойства: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} и {{cssxref("column-rule-color")}}
- [Applying color to HTML elements using CSS](/ru/docs/Web/CSS/CSS_colors/Applying_color)
