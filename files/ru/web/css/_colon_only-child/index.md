---
title: ':only-child'
slug: Web/CSS/:only-child
tags:
  - Псевдоклассы
translation_of: Web/CSS/:only-child
---
{{CSSRef}}

## Описание

[CSS](/ru/docs/CSS "CSS") [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы "Pseudo-classes") `:only-child` находит любой элемент, являющийся единственным потомком родителя. Это тоже, что и `:first-child:last-child` или `:nth-child(1):nth-last-child(1)`, но с меньшей специфичностью.

## Синтаксис

    parent child:only-child {
      property: value;
    }

## Примеры

### Простой пример

```css
span:only-child {
  color: red;
}
```

```html
<div>
  <span>Этот span единственный ребёнок своего папы:(</span>
</div>

<div>
  <span>Этот span один из потомков родителя</span>
  <span>Этот span один из детей отца</span>
</div>
```

#### Результат

{{EmbedLiveSample('Простой_пример', '100%', 60)}}

### Пример со списком

```css
li li {
  list-style-type: disc;
}
li:only-child {
  color: #6699ff;
  font-style: italic;
  list-style-type: square;
}
```

```html
<ol>
  <li>Первый
    <ul>
      <li>Это единственный ребёнок
    </ul>
  </li>
  <li>Второй
    <ul>
      <li>Этот список с двумя элементами
      <li>Этот список с двумя элементами
    </ul>
  </li>
  <li>Третий
    <ul>
      <li>Этот список с тремя элементами
      <li>Этот список с тремя элементами
      <li>Этот список с тремя элементами
    </ul>
  </li>
<ol>
```

#### Результат

{{EmbedLiveSample('Пример_со_списком', '100%', 220)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
