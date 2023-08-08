---
title: ":first-child"
slug: Web/CSS/:first-child
---

{{CSSRef}}

{{cssxRef('', 'CSS')}} {{cssxRef('Pseudo-classes', 'псевдокласс')}} **`:first-child`** находит любой элемент, являющийся первым в своём родителе.

```css
>
/* Выбирает любой <p>, который является первым элементом
   среди своих братьев и сестёр */
p:first-child {
  color: lime;
}
```

> **Примечание:** Как изначально определено, выбранный элемент должен иметь родителя. Начиная с Selectors Level 4, это больше не требуется.

## Синтаксис

{{csssyntax}}

## Примеры

### Простой пример

#### HTML

```html
<div>
  <p>This text is selected!</p>
  <p>This text isn't selected.</p>
</div>

<div>
  <h2>This text isn't selected: it's not a `p`.</h2>
  <p>This text isn't selected.</p>
</div>
```

#### CSS

```css
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### Результат

{{EmbedLiveSample('Простой_пример', 500, 200)}}

### Стилизация списка

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>
    Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

#### Результат

{{EmbedLiveSample('Стилизация_списка')}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{CSSxRef(":-moz-first-node")}} {{Non-standard_Inline}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
