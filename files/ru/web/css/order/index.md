---
title: order
slug: Web/CSS/order
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`order`** определяет порядок, используемый для размещения flex элементов в их flex контейнере. Элементы располагаются в восходящем порядке по значению `order`. Элементы с одинаковым значением `order` располагаются в том порядке, в каком они находятся в исходном коде.

{{EmbedInteractiveExample("pages/css/order.html")}}

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

> **Примечание:** `order` воздействует только на **визуальный порядок** элементов, но не логический порядок или табуляцию. **`order`** не должен применяться к невизуальным медиаданным, таким как речь.

Посмотрите [Используем CSS flexible boxes](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) для более подробной информации и дополнительных свойствах.

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

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Используя CSS flexible boxes](/docs/Web/Guide/CSS/Flexible_boxes)
