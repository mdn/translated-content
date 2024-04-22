---
title: Window.scrollBy()
slug: Web/API/Window/scrollBy
---

{{ APIRef() }}

## Описание

Прокручивает документ на указанные величины.

## Синтаксис

```
window.scrollBy(X, Y);
```

### Параметры

- `X` - смещение в пикселях по горизонтали.
- `Y` - смещение в пикселях по вертикали.

Положительные значения приведут к прокрутке страницы вправо и вниз. Отрицательные координаты прокрутят страницу влево и вверх.

## Пример

```
// Прокрутка на один экран вертикально вниз.
window.scrollBy(0, window.innerHeight);
```

## Примечания

[window.scrollBy](/ru/docs/DOM/Window.scrollBy) прокручивает страницу на указанное количество пикселей, в то время как метод [window.scroll](/ru/docs/DOM/Window.scroll) указывает абсолютную позицию в документе, на которую надо сместиться. Смотрите также [window.scrollByLines](/ru/docs/DOM/Window.scrollByLines), [window.scrollByPages](/ru/docs/DOM/Window.scrollByPages)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
