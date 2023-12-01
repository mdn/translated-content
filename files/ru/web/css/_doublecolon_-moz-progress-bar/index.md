---
title: "::-moz-progress-bar"
slug: Web/CSS/::-moz-progress-bar
---

{{CSSRef}}{{Non-standard_header}}

Представляет собой индикатор прогресса внутри {{HTMLElement("progress")}} (Бар, отражающий текущий прогресс).

## Синтаксис

{{csssyntax}}

## Примеры

### HTML

```html
<progress value="30" max="100">30%</progress>
<progress max="100">Неопределённый бар прогресса</progress>
```

### CSS

```css
::-moz-progress-bar {
  background-color: red;
}

/* Задаёт неопределённым барам нулевую ширину */
:indeterminate::-moz-progress-bar {
  width: 0;
}
```

### Результат

{{EmbedLiveSample('Примеры')}}

Первый бар сверху должен выглядеть так:

![Custom styled progress bar](/@api/deki/files/5387/=redbar.png)

## Смотрите также

- {{HTMLElement("progress")}}
- {{ cssxref("::-ms-fill") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
