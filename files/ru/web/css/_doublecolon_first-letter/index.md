---
title: "::first-letter (:first-letter)"
slug: Web/CSS/::first-letter
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) [псевдоэлемент](/ru/docs/Web/CSS/Pseudo-elements) **`::first-letter`** применяет стили к первой букве первой строки [блочного элемента](/ru/docs/Web/CSS/Visual_formatting_model#Block-level_elements_and_block_boxes), но только если нету другого предшествующего содержимого (такого как изображения или инлайн таблицы).

```css
/* Стили для первой буквы элемента <p> */
p::first-letter {
  font-size: 130%;
}
```

Может быть непросто определить первую букву элемента:

- Пунктуация, которая предшествует или следует сразу за первой буквой, включается в селектор. Пунктуация включает любой символ Юникода, определённый в классах _open_ (Ps), _close_ (Pe), _initial quote_ (Pi), _final quote_ (Pf), and _other punctuation_ (Po).
- В некоторых языках существуют диграфы, которые должны преобразовываться в верхний регистр вместе, например `IJ` в Нидерландском. В этих случаях обе буквы диграфа должны соответствовать псевдоэлементу `::first-letter` (это слабо поддерживается браузерами, смотрите [таблицу совместимости](/En/CSS/::first-letter#Browser_compatibility) ниже).
- Комбинация псевдоэлемента {{ cssxref("::before") }} и свойства {{ cssxref("content") }} может привести к добавлению некоторого текста в начало элемента. В этом случае псевдоэлементу `::first-letter` будет соответствовать первая буква добавленного содержимого.

> **Примечание:** В CSS3 появилась запись `::first-letter` (с двумя двоеточиями) для различения [псевдоклассов](/ru/docs/Web/CSS/Pseudo-classes) и [псевдоэлементов](/ru/docs/Web/CSS/Pseudo-elements). Браузеры также поддерживают запись `:first-letter`, введённую в CSS2.

## Разрешённые свойства

Только небольшое подмножество CSS-свойств может быть использовано с псевдоэлементом `::first-letter`:

- Все свойства, связанные с шрифтами: {{ Cssxref("font") }}, {{ Cssxref("font-style") }}, {{cssxref("font-feature-settings")}}, {{cssxref("font-kerning")}}, {{cssxref("font-language-override")}}, {{cssxref("font-stretch")}}, {{cssxref("font-synthesis")}}, {{ Cssxref("font-variant") }}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{cssxref("font-size-adjust")}}, {{ Cssxref("line-height") }} и {{ Cssxref("font-family") }}
- Все свойства, связанные с фоном: {{ Cssxref("background") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{cssxref("background-clip")}}, {{cssxref("background-origin")}}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}, {{ cssxref("background-size") }}, {{ Cssxref("background-attachment") }} и {{cssxref("background-blend-mode")}}
- Все свойства для внешних отступов: {{ Cssxref("margin") }}, {{ Cssxref("margin-top") }}, {{ Cssxref("margin-right") }}, {{ Cssxref("margin-bottom") }}, {{ Cssxref("margin-left") }}
- Все свойства для внутренних отступов: {{ Cssxref("padding") }}, {{ Cssxref("padding-top") }}, {{ Cssxref("padding-right") }}, {{ Cssxref("padding-bottom") }}, {{ Cssxref("padding-left") }}
- Все свойства, связанные с рамкой: сокращения {{ Cssxref("border") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-color") }}, {{ cssxref("border-width") }}, {{ cssxref("border-radius") }}, {{cssxref("border-image")}} и полные записи свойств
- Свойства {{ cssxref("color") }}
- Свойства {{ cssxref("text-decoration") }}, {{cssxref("text-shadow")}}, {{ cssxref("text-transform") }}, {{ cssxref("letter-spacing") }}, {{ cssxref("word-spacing") }} (when appropriate), {{ cssxref("line-height") }}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("box-shadow")}}, {{ cssxref("float") }}, {{ cssxref("vertical-align") }} (только если `float` равен `none`)

## Синтаксис

{{csssyntax}}

## Пример

Сделаем первую букву каждого абзаца красной и большой.

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est.
</p>
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
<p>
  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
  lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
  dolor in hendrerit in vulputate velit esse molestie consequat.
</p>
<p>-Начало специального знака препинания.</p>
<p>_Начало специального знака препинания.</p>
<p>"Начало специального знака препинания.</p>
<p>'Начало специального знака препинания.</p>
<p>*Начало специального знака препинания.</p>
<p>#Начало специального знака препинания.</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>“特殊的汉字标点符号开头。</p>
```

### CSS

```css
p::first-letter {
  color: red;
  font-size: 130%;
}
```

### Результат

{{ EmbedLiveSample('Example', '80%', 420) }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{cssxref("::first-line")}}
