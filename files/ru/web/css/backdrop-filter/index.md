---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/ru/docs/Web/CSS) свойство **`backdrop-filter`** позволяет вам использовать визуальные эффекты - такие как размытие или смещение цвета фона - за элементом. Так как это применяется ко всему _за_ элементом, чтобы увидеть эффект, вы должны сделать элемент или его фон по крайней мере частично прозрачными.

```css
/* Keyword value */
backdrop-filter: none;

/* фильтр URL в SVG */
backdrop-filter: url(commonfilters.svg#filter);

/* значения <filter-function> */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* Несколько фильтров */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* Глобальные значения */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: unset;
```

{{cssinfo}}

## Синтаксис

### Значения

- `none`
  - : Фильтр отключён для фона
- `<filter-function-list>`
  - : Перечень фильтров, разделённых пробелами функций {{cssxref("&lt;filter-function&gt;")}} или [SVG фильтра](/ru/docs/Web/SVG/Element/filter), которые применены для фона.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### CSS

```css
.box {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  background-image: url("./anemones.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
```

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### Результат

{{EmbedLiveSample("Примеры", 600, 400)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("filter")}}
- [Building iOS-like transparency effects in CSS with backdrop-filter](http://product.voxmedia.com/til/2015/2/17/8053347/css-ios-transparency-with-webkit-backdrop-filter)
