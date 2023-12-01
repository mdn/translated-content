---
title: <mfenced>
slug: Web/MathML/Element/mfenced
---

{{MathMLRef}}

Элемент MathML `<mfenced>` обеспечивает возможность добавить по выбору открывающие и закрывающие скобки (например, квадратные) и разделители (например, запятую или точку с запятой)

## Атрибуты

- class, id, style
  - : Предполагается использование с [таблицами стилей](/ru/docs/CSS).
- close
  - : Строка для закрывающего разделителя. Значением по умолчанию является `")"` и все пробелы обрезаются.
- href
  - : Используется для установки гиперссылки на указанный URI.
- mathbackground
  - : Цвет фона. Вы можете использовать `#rgb`, `#rrggbb` и [имена цветов HTML](/ru/docs/CSS/color_value#Color_Keywords).
- mathcolor
  - : Цвет текста и также цвет линии дроби. Вы можете использовать `#rgb`, `#rrggbb` и [имена цветов HTML](/ru/docs/CSS/color_value#Color_Keywords).
- open
  - : Строка для открывающего разделителя. Значением по умолчанию является `"("` и все пробелы обрезаются.
- separators
  - : A sequence of zero or more characters to be used for different separators, optionally divided by white space, which is ignored. The default value is ",". By specifying more than one character, it is possible to set different separators for each argument in the expression. If there are too many separators, all excess is ignored. If there are too few separators in the expression, the last specified separator is repeated.

## Examples

### The last separator is repeated (`,`)

Sample rendering: ![{a;b;c,d,e}](/files/3193/mfenced01.png)

Rendering in your browser: <math><mfenced close="}" open separators=";;,"><mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi></mfenced></math>

```html
<math>
  <mfenced open="{" close="}" separators=";;,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

### All excess is ignored (`,`)

Sample rendering: ![[a|b|c|d|e]](/files/3195/mfenced02.png)

Rendering in your browser: <math><mfenced close="]" open separators="||||,"><mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi></mfenced></math>

```html
<math>
  <mfenced open="[" close="]" separators="||||,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
