---
title: Window.scrollMaxX
slug: Web/API/Window/scrollMaxX
---

{{APIRef}} {{Non-standard_header}}

Свойство **`Window.scrollMaxX`** (только для чтения) возвращает максимальное количество пикселей в документе, которые могут быть прокручены по горизонтали.

## Синтаксис

```
xMax = window.scrollMaxX
```

- `xMax` количество пикселей.

## Пример

```js
// Прокрутка к правому краю страницы
let maxX = window.scrollMaxX;

window.scrollTo(maxX, 0);
```

## Примечания

Не используйте это свойство для получения ширины документа с помощью [window.innerWidth](/ru/docs/DOM/window.innerWidth) + window\.scrollMaxX. Это не равнозначно всей ширине документа, потому что {{domxref("window.innerWidth")}} включает в себя ширину полосы прокрутки, таким образом результат будет включать себя ширину документа с шириной полосы прокрутки. Вместо этого используйте {{domxref("element.scrollWidth","document.body.scrollWidth")}}. Смотрите также {{domxref("window.scrollMaxY")}}.

## Спецификации

Не является частью спецификации.

## Совместимость с браузерами

{{Compat}}
