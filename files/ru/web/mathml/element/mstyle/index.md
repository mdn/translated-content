---
title: <mstyle>
slug: Web/MathML/Element/mstyle
---

{{MathMLRef}}

Элемент `<mstyle>` разметки MathML используется для изменения стиля его дочерних элементов. Он принимает все атрибуты всех элементов представления MathML, за некоторыми исключениями и c дополнительными атрибутами, перечисленными ниже.

## Атрибуты

- `dir`
  - : Общая направленность формулы. Возможные значения: либо `ltr` (слева направо), либо `rtl` (справа налево).
- `decimalpoint`
  - : Этот атрибут определяет символ для точки выравнивания внутри {{ MathMLElement("mstack") }} и {{ MathMLElement("mtable") }} столбцов, если значение `decimalpoint` используется для определения выравнивания.
- `displaystyle`
  - : Логическое значение, определяющее, используется ли большое вертикальное пространство для отображаемых уравнений; если установлено значение `false`, то используется более компактный макет. Основной эффект заключается в том, что отображаются более крупные версии операторов, когда `displaystyle` установлено на `true`. Смотрите также `largeop` и `movablelimits` на {{ MathMLElement("mo") }}.
- `infixlinebreakstyle`
  - : Задаёт `linebreakstyle` по умолчанию для использования в инфиксных операторах. Допустимы значения `before`, `after` и `duplicate`.
- `scriptlevel`
  - : В основном контроллирует размер шрифта. Чем больше значение `scriptlevel`, тем меньше размер шрифта. Этот атрибут поддерживает неотрицательные целые числа, а также знаки "+" или "-", которые увеличивают или уменьшают текущее значение соответственно. Кроме того, атрибут `scriptlevel` никогда не может уменьшить размер шрифта ниже значения `scriptminsize` во избежание нечитабельных мелких шрифтов и зависит от множителя, определённого в `scriptsizemultiplier`.
- `scriptminsize`
  - : Определяет минимальный размер шрифта, допустимый для изменений атрибутом `scriptlevel`. Значение по умолчанию: 8pt.
- `scriptsizemultiplier`
  - : Определяет множитель, используемый для настройки размера шрифта в `scriptlevel`. Значение по умолчанию: 0.71.

Элемент `<mstyle>` принимает [все атрибуты](/ru/docs/MathML/Attributes) всех элементов представления, за исключением:

- `height`, `depth` или `width` не применимы к {{ MathMLELement("mglyph") }}, {{ MathMLELement("mpadded") }} или {{ MathMLELement("mtable") }}.
- `rowalign`, `columnalign` или `groupalign` не применимы {{ MathMLELement("mtr") }}, {{ MathMLELement("mlabeledtr") }}, {{ MathMLELement("mtd") }} или {{ MathMLELement("maligngroup") }}.
- `lspace` или `voffset` не применимы к {{ MathMLELement("mpadded") }}.
- `fontfamily` не применим к {{ MathMLELement("mglyph") }}.
- `align` не применим к {{ MathMLELement("mtable") }} или {{ MathMLELement("mstack") }}.
- `index` не может быть установлен на `<mstyle>`.
- `src` и `alt` на {{ MathMLElement("mglyph" ) }} не могут быть установлены на `<mstyle>`.
- `actiontype` на {{ MathMLElement("maction") }} не может быть установлен на `<mstyle>`.

## Примеры

Использование `displaystyle` и `mathcolor` для изменения стиля макета всей суммы.

```html
<math>
  <mstyle displaystyle="true" mathcolor="teal">
    <mrow>
      <munderover>
        <mo stretchy="true" form="prefix">&sum;</mo>
        <mrow>
          <mi>i</mi>
          <mo form="infix">=</mo>
          <mn>1</mn>
        </mrow>
        <mi>n</mi>
      </munderover>

      <mstyle displaystyle="true">
        <mfrac>
          <mn>1</mn>
          <mi>n</mi>
        </mfrac>
      </mstyle>
    </mrow>
  </mstyle>
</math>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
