---
title: <mover>
slug: Web/MathML/Element/mover
---

{{MathMLRef}}

Элемент `<mover>` языка разметки MathML используется для добавления акцента или ограничения на выражение. Используйте синтаксис: `<mover>``базовый надстрочный символ</mover>`

## Атрибуты

- accent
  - : Если установлено `true`, то over-script - это _акцент_, приближенный к базовому выражению.
    Если установлено `false` (по умолчанию) over-script это _ограничение_ по базовому выражению.
- align {{deprecated_inline}}
  - : Выравнивание над сценарием. Возможные значения: `left`, `center`, и `right`.
    Этот атрибут устарел и будет удалён в будущем. Вместо этого используйте CSS [`text-align`](/ru/docs/Web/CSS/text-align).
- class, id, style
  - : Предусмотрено для использования с [таблицами стилей](/ru/docs/Web/CSS).
- `displaystyle`
  - : Логическое значение, определяющее, используется ли больше вертикального пространства для отображаемых уравнений или, если установлено значение `false`, используется более компактный макет для отображения формул. Основной эффект заключается в том, что отображаются более крупные версии операторов, когда `displaystyle` установлено в `true`. Смотрите также `largeop` и `movablelimits` для {{ MathMLElement("mo") }}.
- href
  - : Используется для установки гиперссылки на указанный URI.
- mathbackground
  - : Цвет фона. Возможно использование `#rgb`, `#rrggbb` и [имён цветов HTML](/ru/docs/Web/CSS/color_value).
- mathcolor
  - : Цвет текста. Возможно использование `#rgb`, `#rrggbb` и [имён цветов HTML](/ru/docs/Web/CSS/color_value).

## Примеры

Образец: ![x+y+z](/files/3196/mover.png)

Отображение в вашем браузере: <math><mover accent="true"><mrow><mi>x </mi><mo>+ </mo><mi>y </mi><mo>+ </mo><mi>z </mi></mrow><mo>⏞</mo></mover></math>

```html
<math>
  <mover accent="true">
    <mrow>
      <mi> x </mi>
      <mo> + </mo>
      <mi> y </mi>
      <mo> + </mo>
      <mi> z </mi>
    </mrow>
    <mo>
      &#x23DE;
      <!-- Верхняя фигурная скобка -->
    </mo>
  </mover>
</math>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)
