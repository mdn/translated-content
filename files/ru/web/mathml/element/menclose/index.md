---
title: <menclose>
slug: Web/MathML/Element/menclose
---

{{MathMLRef}}

Элемент MathML `<menclose>` отображает своё содержимое во вложенной нотации, указанной атрибутом `нотации`.

## Атрибуты

- class, id, style
  - : Используются с [таблицами стилей](/ru/docs/CSS).
- href
  - : Используется для установки гиперссылки на указанный URI.
- mathbackground
  - : Цвет фона. Вы можете использовать `#rgb`, `#rrggbb` и [HTML-имена цветов](/ru/docs/CSS/color_value#Color_Keywords).
- mathcolor
  - : Цвет текста. Вы можете использовать `#rgb`, `#rrggbb` и [HTML-имена цветов](/ru/docs/CSS/color_value#Color_Keywords).
- notation

  - : Список нотаций, разделённых пробелами, применяемых к дочерним элементам. Изображённые символы могут перекрываться. Возможные значения:

    | Значение             | Пример рендеринга                                          | Рендеринг в вашем браузере                                                                                                                     | Описание                                                                                                              |
    | -------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (default)  | ![longdiv](/files/3167/default.png)                        | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | длинный символ деления                                                                                                |
    | `actuarial`          | ![actuarial](/files/3168/actuarial.png)                    | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [актуарный символ](http://en.wikipedia.org/wiki/Actuarial_notation)                                                   |
    | `radical`            | ![radical](/files/3169/radical.png)                        | <math><menclose notation="radical"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | символ квадратного корня                                                                                              |
    | `box`                | ![box](/files/3170/box.png)                                | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | прямоугольник                                                                                                         |
    | `roundedbox`         | ![roundedbox](/files/3171/roundedbox.png)                  | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | прямоугольник с закруглёнными вершинами                                                                               |
    | `circle`             | ![circle](/files/3172/circle.png)                          | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | овал                                                                                                                  |
    | `left`               | ![left](/files/3173/left.png)                              | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | линия слева от содержимого                                                                                            |
    | `right`              | ![right](/files/3174/right.png)                            | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | линия справа от содержимого                                                                                           |
    | `top`                | ![top](/files/3175/top.png)                                | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | линия над содержимым                                                                                                  |
    | `bottom`             | ![bottom](/files/3176/bottom.png)                          | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | линия под содержимым                                                                                                  |
    | `updiagonalstrike`   | ![updiagonalstrike](/files/3177/updiagonalstrike.png)      | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | линия, перечёркивающая содержимое от левого низа до правого верха                                                     |
    | `downdiagonalstrike` | ![downdiagonalstrike](/files/3178/downdiagonalstrike.png)  | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math> | линия, перечёркивающая содержимое от левого верха до правого низа                                                     |
    | `verticalstrike`     | ![verticalstrike](/files/3179/verticalstrike.png)          | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | вертикальная линия, зачёркивающая содержимое                                                                          |
    | `horizontalstrike`   | ![horizontalstrike](/files/3180/horizontalstrike.png)      | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | горизонтальная линия, зачёркивающая содержимое                                                                        |
    | `madruwb`            | ![madruwb](/files/3181/madruwb.png)                        | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [Арабский символ факториала](http://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`    | ![](updiagonalarrow.png)                                   | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | диагональная стрелка                                                                                                  |
    | `phasorangle`        | ![Screenshot of the phasorangle notation](phasorangle.png) | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | угол                                                                                                                  |

## Примеры

```html
<math>
  <menclose notation="circle box">
    <mi> x </mi>
    <mo> + </mo>
    <mi> y </mi>
  </menclose>
</math>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
