---
title: "::first-line (:first-line)"
slug: Web/CSS/::first-line
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) [псевдоэлемент](/ru/docs/Web/CSS/Pseudo-elements) **`::first-line`** применяет стили к первой строке [блочного элемента](/ru/docs/Web/CSS/Visual_formatting_model#Block-level_elements_and_block_boxes). Обратите внимание, что длина первой строки зависит от многих факторов, включая ширину элемента, ширину документа и размер шрифта текста.

```css
/* Стили для первой строки элемента <p> */
p::first-line {
  color: red;
}
```

> **Примечание:** В CSS3 появилась запись `::first-line` (с двумя двоеточиями) для различения [псевдоклассов](/ru/docs/Web/CSS/Pseudo-classes) и [псевдоэлементов](/ru/docs/Web/CSS/Pseudo-elements). Браузеры также поддерживают запись `:first-line`, введённую в CSS2.

## Разрешённые свойства

Только небольшое подмножество CSS-свойств может быть использовано с псевдоэлементом `::first-line`:

- Все свойства, связанные с шрифтами: {{Cssxref("font")}}, {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}} и {{Cssxref("font-family")}}
- Все свойства, связанные с фоном: {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{Cssxref("background-attachment")}} и {{cssxref("background-blend-mode")}}
- Свойство {{cssxref("color")}}
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}} и {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} и {{cssxref("vertical-align")}}.

## Синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<p>
  Стили будут применены только к первой строке этого параграфа. После этого,
  весь текст будет отображаться как обычно. Увидели, что я имею в виду?
</p>

<span
  >Первая строка этого элемента не будет стилизована специальным образом потому
  что это не блочный элемент.</span
>
```

### CSS

```css
::first-line {
  color: blue;
  text-transform: uppercase;

  /* ПРЕДУПРЕЖДЕНИЕ: НЕ ИСПОЛЬЗУЙТЕ ЭТО */
  /* Многие свойства запрещены в псевдоэлементах ::first-line */
  margin-left: 20px;
  text-indent: 20px;
}
```

### Результат

{{EmbedLiveSample('Пример', 350, 160)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{cssxref("::first-letter")}}
