---
title: "Window: метод scrollBy()"
slug: Web/API/Window/scrollBy
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}}

Метод **`Window.scrollBy()`** прокручивает документ в окне на указанную величину.

## Синтаксис

```js-nolint
scrollBy(x-coord, y-coord)
scrollBy(options)
```

### Параметры

- `x-coord` смещение в пикселях по горизонтали.
- `y-coord` смещение в пикселях по вертикали.

\- или -

- `options`
  - : Объект, содержащий следующие свойства:
    - `top`
      - : Указывает количество пикселей по оси Y для прокрутки окна или элемента.
    - `left`
      - : Указывает количество пикселей по оси X для прокрутки окна или элемента.
    - `behavior`
      - : Указывает, нужно ли анимировать прокрутку плавно (`smooth`), быстрым перемещением (`instant`) или предоставить выбор браузеру (`auto`, по умолчанию).

### Возвращаемое значение

Нет ({{jsxref("undefined")}}).

## Примеры

Для прокрутки вниз страницы:

```js
window.scrollBy(0, window.innerHeight);
```

Для прокрутки вверх:

```js
window.scrollBy(0, -window.innerHeight);
```

С использованием `options`:

```js
window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Примечания

`window.scrollBy()` прокручивает страницу на указанное количество пикселей, в то время как метод {{domxref("window.scroll()")}} прокручивает к абсолютной позиции в документе. Смотрите также {{domxref("window.scrollByLines()")}} и {{domxref("window.scrollByPages()")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
