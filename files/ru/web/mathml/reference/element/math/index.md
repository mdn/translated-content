---
title: <math>
slug: Web/MathML/Reference/Element/math
---

{{MathMLRef()}}

Элементом верхнего уровня в [MathML](/ru/docs/Web/MathML) является тэг `<math>`, используемый для представления одной математической формулы. Он может находится в HTML-контенте, где разрешено [потоковое содержимое](/ru/docs/Web/HTML/Guides/Content_categories#фразовый_контент).

> [!NOTE]
> Посмотрите страницу [«Разработка MathML»](/ru/docs/Web/MathML/Guides/Authoring#using_mathml) с советами по правильной интеграции MathML-формул на ваши веб-страницы и [примеры использования MathML](/ru/docs/Web/MathML/Guides).

## Атрибуты

Атрибуты этого элемента включают [глобальные атрибуты MathML](/ru/docs/Web/MathML/Global_attributes), а также следующий атрибут:

- `display`
  - : Этот [перечислимый](/ru/docs/Glossary/Enumerated) атрибут определяет, как должна отображаться разметка MathML. Он может иметь одно из следующих значений:
    - `block` означает, что элемент будет отображаться в собственном блоке за пределами текущего диапазона текста и со значением [`math-style`](/ru/docs/Web/CSS/math-style) установленным в `normal`.
    - `inline` означает, что элемент будет отображаться внутри текущего фрагмента текста и со значением [`math-style`](/ru/docs/Web/CSS/math-style) установленным в `compact`.

    Если атрибут отсутствует, то значением по умолчанию является `inline`.

## Примеры

Этот пример содержит две MathML-формулы. Первый отображается в отдельном центрированном блоке, занимающем столько места, сколько необходимо. Второй отображается внутри абзаца текста с уменьшенным размером и межстрочным интервалом, чтобы минимизировать его высоту.

```html
<p>
  Бесконечная сумма
  <math display="block">
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
      <mfrac>
        <mn>1</mn>
        <msup>
          <mi>n</mi>
          <mn>2</mn>
        </msup>
      </mfrac>
    </mrow>
  </math>
  равна действительному числу
  <math display="inline">
    <mfrac>
      <msup>
        <mi>π</mi>
        <mn>2</mn>
      </msup>
      <mn>6</mn>
    </mfrac></math
  >.
</p>
```

{{ EmbedLiveSample('math_example', 700, 200, "", "") }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTML-элемент верхнего уровня: {{ HTMLElement("html") }}
- SVG-элемент верхнего уровня: {{ SVGElement("svg") }}
