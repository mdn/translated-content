---
title: History.go()
slug: Web/API/History/go
---

{{APIRef("History API")}}

Метод **`History.go()`** выполняет переход на определённую страницу в истории текущей сессии. С его помощью можно перемещаться как вперёд, так и назад, в зависимости от значения параметра.

Данный метод является {{glossary("asynchronous", "асинхронным")}}. Добавьте обработчик для события {{event("popstate")}}, чтобы определить, когда переход закончен.

## Синтаксис

```
history.go([delta])
```

### Параметры

- `delta` {{optional_inline}}
  - : Относительное положение в истории, куда вы хотите переместиться. Отрицательные значения перемещают назад, а положительные — вперёд. Например, `history.go(2)` перемещает вперёд на 2 страницы, а `history.go(-2)` перемещает на 2 страницы назад. Если метод вызван без параметра или же `delta` равна 0, результат выполнения будет такой же, как у `location.reload()`.

## Примеры

Перемещение на 1 страницу назад (аналог вызова {{domxref("History.back", "back()")}}):

```js
history.go(-1);
```

Перемещение на страницу вперёд, как {{domxref("History.forward", "forward()")}}:

```js
history.go(1);
```

Перемещение на 2 страницы вперёд:

```js
history.go(2);
```

Перемещение на 2 страницы назад:

```js
history.go(-2);
```

Также, оба этих вызова перезагрузят страницу:

```js
history.go();
history.go(0);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- {{domxref("History")}}
- {{DOMxRef("History.back","back()")}}
- {{DOMxRef("History.forward","forward()")}}
- {{event("popstate")}} event
- [Working with the History API](/ru/docs/Web/API/History_API/Working_with_the_History_API)
