---
title: <mn>
slug: Web/MathML/Element/mn
---

{{MathMLRef}}

Элемент `<mn>` разметки MathML представляет собой числовой литерал, который обычно является последовательностью цифр с возможным разделителем (точкой или запятой). Тем не менее, в нём также может быть произвольный текст, который на самом деле является числом, например "eleven" ("одиннадцать").

## Атрибуты

- class, id, style
  - : Предусмотрено для использования с [таблицами стилей](/ru/docs/Web/CSS).
- dir
  - : Направление текста. Возможные значения: либо `ltr` (слева направо) или `rtl` (справа налево).
- `displaystyle`
  - : Логическое значение, определяющее, используется ли большое вертикальное пространство для отображаемых уравнений; если установлено значение `false`, то используется более компактный макет. Основной эффект заключается в том, что отображаются более крупные версии операторов, когда `displaystyle` установлено на `true`. Смотрите также `largeop` и `movablelimits` на {{ MathMLElement("mo") }}.
- href
  - : Используется для установки гиперссылки на указанный URI.
- mathbackground
  - : Цвет фона (если изображение имеет прозрачность). Вы можете использовать `#rgb`, `#rrggbb` и [имена цветов HTML](/ru/docs/Web/CSS/color_value).
- mathcolor
  - : Цвет текста. Вы можете использовать `#rgb`, `#rrggbb` и [имена цветов HTML](/ru/docs/Web/CSS/color_value).
- mathsize
  - : Размер контента. Смотрите [length](/ru/docs/Web/CSS/размер) для возможных значений.
    Устаревшие значения: `small`, `normal` и `big`. Они будут удалены в будущем.
- mathvariant

  - : Этот атрибут определяет логический класс числа, который варьируется в типографике.То есть, хотя имена предполагают типографский стиль для класса, семантически, элементы с одним и тем же классом обрабатываются «одинаково» в выражении, которое может включать или не включать отображение их с именованной типографикой. Допускаются следующие значения:

    - `normal` (значение по умолчанию) ;&#x20;

      <math><mn mathvariant="normal">Пример</mn></math>

    - `bold` ;&#x20;

      <math><mn mathvariant="bold"><strong>Пример</strong></mn></math>

    - `italic` ; _Пример_
    - `bold-italic` ;&#x20;

      <math><mn mathvariant="bold-italic"><em><strong>Пример</strong></em></mn></math>

    <!---->

    - `double-struck` ;&#x20;

      <math><mn mathvariant="double-struck">Пример</mn></math>

    - `bold-fraktur` ;&#x20;

      <math><mn mathvariant="bold-fraktur">Пример</mn></math>

    - `script` ;&#x20;

      <math><mn mathvariant="script">Пример</mn></math>

    - `bold-script` ;&#x20;

      <math><mn mathvariant="bold-script">Пример</mn></math>

    - `fraktur` ;&#x20;

      <math><mn mathvariant="fraktur">Пример</mn></math>

    <!---->

    - `sans-serif` ;&#x20;

      <math><mn mathvariant="sans-serif">Пример</mn></math>

    - `bold-sans-serif` ;&#x20;

      <math><mn mathvariant="bold-sans-serif"><strong>Пример</strong></mn></math>

    - `sans-serif-italic` ;&#x20;

      <math><mn mathvariant="sans-serif-italic"><em>Пример</em></mn></math>

    - `sans-serif-bold-italic` ;&#x20;

      <math><mn mathvariant="sans-serif-bold-italic"><em><strong>Пример</strong></em></mn></math>

    - `monospace` ;&#x20;

      <math><mn mathvariant="monospace">Пример</mn></math>

    <!---->

    - `initial` ;&#x20;

      <math><mn mathvariant="initial">مثال</mn></math>

    - `tailed` ;&#x20;

      <math><mn mathvariant="tailed">مثال</mn></math>

    - `looped` ;&#x20;

      <math><mn mathvariant="looped">مثال</mn></math>

    - `stretched` ;&#x20;

      <math><mn mathvariant="stretched">مثال</mn></math>

## Примеры

```html
<math>
  <mn> 0 </mn>

  <mn> 1.337 </mn>

  <mn> twelve </mn>

  <mn> XVI </mn>

  <mn> 2e10 </mn>
</math>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
