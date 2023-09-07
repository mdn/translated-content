---
title: Универсальные селекторы
slug: Web/CSS/Universal_selectors
---

{{CSSRef("Selectors")}}

## Краткое описание

Звёздочка (\*) - универсальный селектор для CSS. Соответствует любому тегу. Убирая звёздочки с простых селекторов имеет тот же эффект. Например, _\* .warning_ и _.warning_ считаются равными.

В CSS 3, звёздочка (`*`) может использоваться в комбинации с пространством имён

- `ns|*` - вхождения всех элементов в пространстве имён ns
- `*|*` - находит все элементы
- `|*` - ищет все элементы без объявленного пространства имён

## Пример

```css
*[lang^="en"] {
  color: green;
}
*.warning {
  color: red;
}
*#maincontent {
  border: 1px solid blue;
}
```

```html
<p class="warning">
  <span lang="en-us">Зелёный span</span> в красном параграфе.
</p>
<p id="maincontent" lang="en-gb">
  <span class="warning">Красный span</span> в зелёном параграфе.
</p>
```

{{ EmbedLiveSample('Example', 250, 100) }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
