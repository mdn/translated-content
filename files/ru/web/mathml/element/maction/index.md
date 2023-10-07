---
title: <maction>
slug: Web/MathML/Element/maction
---

{{MathMLRef}}

Элемент MathML **`<maction>`** обеспечивает возможность связать действия с (под-) выражениями. Само действие задаётся с помощью атрибута`actiontype`, который может принимать несколько значений. Чтобы указать каким дочерним элементам адресовано действие, вы можете использовать атрибут `selection`.

## Атрибуты

- actiontype

  - : Действие, которое устанавливает, что происходит с этим элементом. Возможные значения:

    - `statusline`: Если кликнуть на _выражении (expression)_ или читатель наведёт курсор на него, _сообщение (message)_ будет отправлено в строку состояния браузера. Синтаксис: `<maction actiontype="statusline"> expression message </maction>.`
    - `toggle`: Если кликнуть на подвыражении, рендеринг чередует отображение выбранных подвыражений. Поэтому с каждым кликом `выбираемое` значение меняется на следующее.
      Синтаксис: `<maction actiontype="toggle" selection="positive-integer" > expression1 expression2 expressionN </maction>`.
    - `tooltip`: Когда указатель перемещается над _выражением (expression)_, рядом с выражением отображается всплывающая подсказка с _сообщением (message)_.
      Синтаксис: `<maction actiontype="tooltip"> expression message </maction>.`

- class, id, style
  - : Предусматривается для использования с [таблицами стилей](/ru/docs/CSS).
- href
  - : Используется для установки гиперссылки на указанный URI.
- mathbackground
  - : Цвет фона. Вы можете использовать `#rgb`, `#rrggbb` и [названия цветов HTML](/ru/docs/CSS/color_value#Color_Keywords).
- mathcolor
  - : Цвет текста и цвет пунктирной линии. Вы можете использовать `#rgb`, `#rrggbb` и [названия цветов HTML](/ru/docs/CSS/color_value#Color_Keywords).
- selection
  - : Дочерний элемент, которому адресуется действие. Значение по умолчанию равно 1, что соответствует первому дочернему элементу.

## Примеры

В следующем примере используется атрибут `actiontype` со значением `"toggle"`:

```html
<math>
  <maction actiontype="toggle">
    <mfrac>
      <mn>6</mn>
      <mn>8</mn>
    </mfrac>

    <mfrac>
      <mrow>
        <mn>3</mn>
        <mo>&sdot;</mo>
        <mn>2</mn>
      </mrow>
      <mrow>
        <mn>4</mn>
        <mo>&sdot;</mo>
        <mn>2</mn>
      </mrow>
    </mfrac>

    <mfrac>
      <mn>3</mn>
      <mn>4</mn>
    </mfrac>
  </maction>
</math>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
