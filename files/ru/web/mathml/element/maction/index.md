---
title: <maction>
slug: Web/MathML/Element/maction
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Enlivening Expressions
translation_of: Web/MathML/Element/maction
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

| Спецификация                                                                             | Статус                       | Комментарий            |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ---------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.maction', 'maction') }} | {{ Spec2('MathML3') }} | Текущая спецификация   |
| {{ SpecName('MathML2', 'chapter3.html#presm.maction', 'maction') }} | {{ Spec2('MathML2') }} | Начальная спецификация |

## Совместимость с браузерами

{{Compat}}

## Специфика Gecko

- До Gecko 9.0 была поддержка нестандартного значения `restyle` для атрибута `actiontype`. Это значение было удалено.
- До Gecko 14.0 значение `statusline` для атрибута `actiontype` использовало нестандартный синтаксис. Это было исправлено в соответствии со спецификацией MathML.

  ```html
  <maction actiontype="statusline#(message)">
  (expression)
  </maction>
  ```

- В Gecko 15.0 атрибут `selection` учитывается только со значением actiontype `"toggle"`.
- Начиная с Gecko 16.0 атрибут `selection` учитывается с произвольным значением `actiontype`. Если `actiontype` не указан (пуст) или атрибут `selection` недопустимый, возникнет ошибка MathML (недопустимая разметка).
