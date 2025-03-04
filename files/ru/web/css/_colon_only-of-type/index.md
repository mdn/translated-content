---
title: :only-of-type
slug: Web/CSS/:only-of-type
l10n:
  sourceCommit: 71d9840f3da24005b015d3d103b358d4f9f46819
---

{{CSSRef}}

CSS [псевдокласс](/ru/docs/Web/CSS/Pseudo-classes) **`:only-of-type`** выбирает элемент, который является единственным потомком своего типа.

{{InteractiveExample("CSS Demo: :only-of-type", "tabbed-shorter")}}

```css interactive-example
a:only-of-type {
  color: fuchsia;
}

dd:only-of-type {
  background-color: bisque;
}
```

```html interactive-example
<p>
  To find out more about <b>QUIC</b>, check <a href="#">RFC 9000</a> and
  <a href="#">RFC 9114</a>.
</p>

<dl>
  <dt>Published</dt>
  <dd>2021</dd>
  <dd>2022</dd>
</dl>

<p>Details about <b>QPACK</b> can be found in <a href="#">RFC 9204</a>.</p>

<dl>
  <dt>Published</dt>
  <dd>2022</dd>
</dl>
```

## Синтаксис

```css
:only-of-type {
  /* ... */
}
```

## Примеры

### Применение стилей к элементам, которые являются единственными потомками своего типа

#### HTML

```html
<main>
  <div>Я элемент `div` #1.</div>
  <p>Я единственный элемент `p` у своего родителя.</p>
  <div>Я элемент `div` #2.</div>
  <div>
    Я элемент `div` #3.
    <i>Я единственный элемент `i` у своего родителя.</i>
    <em>Я элемент `em` #1.</em>
    <em>Я элемент `em` #2.</em>
  </div>
</main>
```

#### CSS

```css
main :only-of-type {
  color: red;
}
```

#### Результат

{{EmbedLiveSample('Применение стилей к элементам, которые являются единственными потомками своего типа', '100%', 180)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{Cssxref(":only-child")}}
- {{Cssxref(":first-of-type")}}
- {{Cssxref(":last-of-type")}}
- {{Cssxref(":nth-of-type")}}
