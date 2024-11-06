---
title: <merror>
slug: Web/MathML/Element/merror
---

{{MathMLRef}}

Элемент MathML `<merror>` используется для отображения содержимого в виде сообщений об ошибках. В Firefox это сообщение об ошибке отображается аналогично типичному сообщению об ошибке XML. Обратите внимание, что эта ошибка **не** выдаётся, если ваша разметка MathML неверна или неправильно сформирован XML. Вы всё равно получите ошибку разбора XML (в случае XHTML-нотации MathML), которая не имеет ничего общего с `<merror>`.

## Атрибуты

- class, id, style
  - : Предполагается использование с [таблицами стилей](/ru/docs/CSS).
- href
  - : Используется для установки гиперссылки на указанный URI.
- mathbackground
  - : Цвет фона. Ты можешь использовать `#rgb`, `#rrggbb` и [имена цветов HTML](/ru/docs/CSS/color_value#Color_Keywords).
- mathcolor
  - : Цвет текста, а также цвет линии дроби. Вы можете использовать `#rgb`, `#rrggbb` и [имена цветов HTML](/ru/docs/CSS/color_value#Color_Keywords).

## Примеры

```html
<math>
  <merror>
    <mrow>
      <mtext> Деление на ноль: </mtext>
      <mfrac>
        <mn> 1 </mn>
        <mn> 0 </mn>
      </mfrac>
    </mrow>
  </merror>
</math>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
