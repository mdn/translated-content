---
title: Window.scrollTo()
slug: Web/API/Window/scrollTo
---

{{ APIRef }}

## Описание

Прокрутка документа до указанных координат.

## Синтаксис

```
window.scrollTo(x-coord, y-coord)
window.scrollTo(options)
```

### Параметры

- `x-coord` пиксель по горизонтальной оси документа, будет отображён вверху слева.
- `y-coord` пиксель по вертикальной оси документа, будет отображён вверху слева.
- `options` объект с тремя возможными параметрами:

  - `top`, то же, что и `y-coord`
  - `left`, то же, что и `x-coord`
  - `behavior`, строка, содержащая либо `smooth`, `instant`, либо `auto`; по умолчанию `auto`

## Пример

```js
window.scrollTo(0, 1000);

// этот код меняет поведение прокрутки на "smooth"
window.scrollTo({
  top: 1000,
  behavior: "smooth",
});
```

## Примечания

Эта функция выполняет то же, что и [window.scroll](/ru/docs/DOM/Window.scroll). Остальные функции, связанные с прокруткой [window.scrollBy](/ru/docs/DOM/Window.scrollBy), [window.scrollByLines](/ru/docs/DOM/Window.scrollByLines), и [window.scrollByPages](/ru/docs/DOM/Window.scrollByPages).

## Спецификация

{{Specifications}}
