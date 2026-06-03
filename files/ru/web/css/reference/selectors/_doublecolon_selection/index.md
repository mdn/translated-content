---
title: ::selection
slug: Web/CSS/Reference/Selectors/::selection
original_slug: Web/CSS/::selection
---

{{CSSRef}}{{SeeCompatTable}}

[Псевдоэлемент](/ru/docs/Web/CSS/Reference/Selectors/Pseudo-elements) **`::selection`** позволяет применить стили к части документа, который был выделен пользователем (например, с помощью мыши).

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

> [!WARNING]
> Заметим, что, в частности, свойство {{cssxref("background-image")}} игнорируется.

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

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
