---
title: Window.scroll()
slug: Web/API/Window/scroll
---

{{APIRef}}

Прокручивает страницу до указанного места.

## Синтаксис

```
window.scroll(x-coord,y-coord)
```

### Параметры

- `x-coord` - это x-координата пикселя, который окажется в верхнем левом углу экрана.
- `y-coord`- это y-координата пикселя, который окажется в верхнем левом углу экрана.

## Пример

```html
<!-- прокрутить до пикселя с y = 100 -->

<button onClick="scroll(0, 100);">прокрутить</button>
```

## Замечания

[window.scrollTo](/ru/docs/Web/API/Window/scrollTo) имеет тот же самый эффект. Для того, чтобы прокрутить на некоторое количество пикселей относительно текущей позиции, используйте [window.scrollBy](/ru/docs/Web/API/Window/scrollBy). Смотрите также [window.scrollByLines](/ru/docs/Web/API/Window/scrollByLines), [window.scrollByPages](/ru/docs/Web/API/Window/scrollByPages).

## Спецификации

- [CSSOM: scroll() Method](https://dev.w3.org/csswg/cssom-view/#dom-element-scrolloptions)
