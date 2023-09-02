---
title: margin-top
slug: Web/CSS/margin-top
---

{{CSSRef}}

Свойство **`margin-top`** [CSS](/ru/CSS) определяет [внешний отступ](/ru/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) в верхней части элемента. Положительное значение поместит элемент дальше от соседних элементов, чем обычно, а отрицательное значение поместит его ближе.

{{EmbedInteractiveExample("pages/css/margin-top.html")}}

Это свойство не имеет эффекта на _незамещаемых (non-[replaced](/ru/docs/Web/CSS/Замещаемый_элемент))_ строковых (inline) элементах, таких как {{HTMLElement("span")}} или {{HTMLElement("code")}}.

## Синтаксис

```css
/* значения <length> */
margin-top: 10px; /* абсолютное значение */
margin-top: 1em; /* относительно размера текста */
margin-top: 5%; /* относительно ширины ближайшего контейнера */

/* ключевые слова */
margin-top: auto;

/* глобальные значения */
margin-top: inherit;
margin-top: initial;
margin-top: unset;
```

Свойство `margin-top` может принимать значение `auto,` `<length>` или `<percentage>`. Эти значения могут быть положительные, отрицательные или равны нулю.

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : Значение margin является фиксированной величиной
- {{cssxref("&lt;percentage&gt;")}}
  - : Значение margin выражается в процентах по отношению к _ширине_ блока, содержащего элемент.
- `auto`
  - : Браузер выбирает подходящее значение для использования. Смотри {{cssxref("margin")}}.

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
.content {
  margin-top: 5%;
}
.sidebox {
  margin-top: 10px;
}
.logo {
  margin-top: -5px;
}
#footer {
  margin-top: 1em;
}
```

## Спецификации

| Specification                                                      | Status                        | Comment                                               |
| ------------------------------------------------------------------ | ----------------------------- | ----------------------------------------------------- |
| {{SpecName('CSS3 Box', '#the-margin', 'margin-top')}}              | {{Spec2('CSS3 Box')}}         | Никаких существенных изменений                        |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'margin-top')}}  | {{Spec2('CSS3 Transitions')}} | Определяет `margin-top` как анимационный.             |
| {{SpecName('CSS2.1', 'box.html#margin-properties', 'margin-top')}} | {{Spec2('CSS2.1')}}           | Устраняет его влияние на строковые (inline) элементы. |
| {{SpecName('CSS1', '#margin-top', 'margin-top')}}                  | {{Spec2('CSS1')}}             | Начальное определение                                 |

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}
