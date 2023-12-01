---
title: background-color
slug: Web/CSS/background-color
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство **`background-color`** [CSS](/ru/docs/Web/CSS) устанавливает цвет фона элемента.

{{EmbedInteractiveExample("pages/css/background-color.html")}}

## Синтаксис

```css
/* Словесные значения */
background-color: red;

/* Шестнадцатеричное значение */
background-color: #bbff00;

/* Шестнадцатеричное значение с alpha-каналом */
background-color: #11ffee00; /* 00 - полностью прозрачный */
background-color: #11ffeeff; /* ff - непрозрачный */

/* RGB-значение */
background-color: rgb(255, 255, 128);

/* RGBA-значение или RGB с alpha-каналом */
background-color: rgba(117, 190, 218, 0); /* 0.0 - полностью прозрачный */
background-color: rgba(117, 190, 218, 0.5); /* 0.5 - полупрозрачный */
background-color: rgba(117, 190, 218, 1); /* 1.0 - непрозрачный */

/* HSLA-значение */
background-color: hsla(50, 33%, 25%, 0.75);

/* Специальные словесные значения */
background-color: currentColor;
background-color: transparent;

/* Общие значения */
background-color: inherit;
background-color: initial;
background-color: unset;
```

Свойство `background-color` определяется единственным значением [`<color>`](#color).

### Значения

- {{cssxref("&lt;color&gt;")}}
  - : Является CSS {{cssxref("&lt;color&gt;")}}, которое описывает цвет фона. Даже если заданы одно или несколько {{cssxref("background-image")}}, цвет может отрендерится, если изображения прозрачны.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### HTML

```html
<div class="exampleone">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="exampletwo">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="examplethree">Lorem ipsum dolor sit amet, consectetuer</div>
```

### CSS

```css
.exampleone {
  background-color: teal;
  color: white;
}

.exampletwo {
  background-color: rgb(153, 102, 153);
  color: rgb(255, 255, 204);
}

.examplethree {
  background-color: #777799;
  color: #ffffff;
}
```

### Результат

{{EmbedLiveSample("Примеры","200","150")}}

## Проблемы доступности

Важно обеспечить достаточный цветовой контраст между цветом текста и фоном, чтобы люди со слабым зрением могли его прочитать, но при этом должна быть достаточная разница между введённым текстом и текстом placeholder, чтобы пользователь не путал их.

Коэффициент цветового контраста определяется путём сравнения яркости текста placeholder и цветом фона формы ввода. Чтобы соответствовать рекомендациям [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag), требуется соотношение 4.5:1 для основного текста и 3:1 для более крупного текста, например, заголовков. Крупный текст определяется как 18.66px и больше с жирным начертанием или 24px и больше с обычным начертанием.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Множественные фоны](/ru/docs/Web/CSS/CSS_Background_and_Borders/Множественные_фоны)
- Тип данных {{cssxref("&lt;color&gt;")}}
- Другие свойства, связанные с цветом: {{cssxref("color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, и {{cssxref("column-rule-color")}}
- [Применение цвета к HTML элементам с помощью CSS](/ru/docs/Web/HTML/Applying_color)
