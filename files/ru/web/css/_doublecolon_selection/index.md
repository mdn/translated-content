---
title: "::selection"
slug: Web/CSS/::selection
---

{{CSSRef}}{{SeeCompatTable}}

[Псевдоэлемент](/ru/docs/Web/CSS/Pseudo-elements) **`::selection`** позволяет применить стили к части документа, который был выделен пользователем (например, с помощью мыши).

```css
::selection {
  background: cyan;
}
```

## Разрешённые свойства

Только небольшое подмножество CSS-свойств может быть использовано с псевдоэлементом `::selection` :

- {{cssxref("color")}}
- {{cssxref("background-color")}}
- {{cssxref("cursor")}}
- {{cssxref("caret-color")}}
- {{cssxref("outline")}} и его длинные записи
- {{cssxref("text-decoration")}} и связанные свойства
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-shadow")}}

> **Предупреждение:** Заметим, что, в частности, свойство {{cssxref("background-image")}} игнорируется.

## Синтаксис

```css
/* синтаксис Firefox */
::-moz-selection {
}
```

{{csssyntax}}

## Пример

### HTML

```html
<div>Этот текст будет стилизован особым образом при выделении.</div>
<p>Также попробуйте выделить текст в этом параграфе.</p>
```

### CSS

```css
/* Сделаем выделенный текст золотым с красным фоном */
::-moz-selection {
  color: gold;
  background: red;
}

::selection {
  color: gold;
  background: red;
}

/* Сделаем выделенный в параграфе текст белым на синем фоне */
p::-moz-selection {
  color: white;
  background: blue;
}

p::selection {
  color: white;
  background: blue;
}
```

### Результат

{{EmbedLiveSample('Пример')}}

## Спецификации

| Спецификация                                                                  | Статус                            | Комментарий              |
| ----------------------------------------------------------------------------- | --------------------------------- | ------------------------ |
| {{SpecName('CSS4 Pseudo-Elements', '#selectordef-selection', '::selection')}} | {{Spec2('CSS4 Pseudo-Elements')}} | Изначальное определение. |

> **Примечание:** Хотя псевдоэлемент `::selection` присутствовал в черновиках стандарта CSS Selectors Level 3, он был убран в течение фазы Candidate Recommendation, так как его поведение было недостаточно проработано (особенно с вложенным элементами) и согласованность не была достигнута [(основываясь на обсуждении в списке рассылки W3C Style)](http://lists.w3.org/Archives/Public/www-style/2008Oct/0268.html). Этот псевдоэлемент был возвращён в [Pseudo-Elements Level 4](http://dev.w3.org/csswg/css-pseudo-4/).

## Поддержка браузерами

{{Compat}}
