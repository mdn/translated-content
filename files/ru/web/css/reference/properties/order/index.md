---
title: order
slug: Web/CSS/Reference/Properties/order
original_slug: Web/CSS/order
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`order`** определяет порядок, используемый для размещения flex элементов в их flex контейнере. Элементы располагаются в восходящем порядке по значению `order`. Элементы с одинаковым значением `order` располагаются в том порядке, в каком они находятся в исходном коде.

{{InteractiveExample("CSS Demo: order")}}

```css interactive-example-choice
order: 0;
```

```css interactive-example-choice
order: 3;
```

```css interactive-example-choice
order: -1;
```

```css interactive-example-choice
order: 2;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Box 1:</div>
  <div style="order: 1">Box 2: <code>order: 1;</code></div>
  <div style="order: 2">Box 3: <code>order: 2;</code></div>
  <div style="order: 2">Box 4: <code>order: 2;</code></div>
  <div style="order: 3">Box 5: <code>order: 3;</code></div>
</section>
```

```css interactive-example
.default-example {
  max-height: 300px;
  display: flex;
  flex-flow: column;
}

.default-example > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  margin: 0.5rem;
  padding: 0.5rem;
  flex: 1;
}

#example-element {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
}

#example-element::after {
  content: attr(style);
  outline: 2px dashed;
  font-family: monospace;
}
```

## Синтаксис

```css
/* Числовые значения, в том числе отрицательные */
order: 5;
order: -5;

/* Глобальные значения */
order: inherit;
order: initial;
order: unset;
```

> [!NOTE]
> `order` воздействует только на **визуальный порядок** элементов, но не логический порядок или табуляцию. `order` не должен применяться к невизуальным медиаданным, таким как речь.

Посмотрите [Используем CSS flexible boxes](/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) для более подробной информации и дополнительных свойствах.

### Значения

- `<integer>`
  - : Представляет порядковую группу, которая присвоена flex элементу.

### Формальный синтаксис

{{csssyntax}}

## Пример

Имеется базовый отрывок HTML кода:

```html
<header>...</header>
<main>
  <article>Article</article>
  <nav>Nav</nav>
  <aside>Aside</aside>
</main>
<footer>...</footer>
```

Следующий CSS код должен создать классический блок контента окружённый боковыми панелями. Flexible Box Layout Module автоматически создаёт блоки одинаковой высоты и максимально допустимой ширины.

```css
main {
  display: flex;
  text-align: center;
}
main > article {
  flex: 1;
  order: 2;
}
main > nav {
  width: 200px;
  order: 1;
}
main > aside {
  width: 200px;
  order: 3;
}
```

### Результат

{{ EmbedLiveSample('Пример') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Используя CSS flexible boxes](/docs/Web/Guide/CSS/Flexible_boxes)
