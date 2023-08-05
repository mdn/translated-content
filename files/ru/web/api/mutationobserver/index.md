---
title: MutationObserver
slug: Web/API/MutationObserver
---

{{APIRef("DOM")}}

`MutationObserver` предоставляет возможность получать уведомления об изменении определённых [DOM](/ru/docs/DOM)-элементов. `MutationObserver` является заменой [Mutation Events](/ru/docs/DOM/Mutation_events), определённой в спецификации DOM3 Events.

## Конструктор

- {{domxref("MutationObserver.MutationObserver", "MutationObserver()")}}
  - : Создаёт и возвращает новый `MutationObserver`, который вызовет определённую колбэк-функцию при изменении в DOM.

## Параметры

- `callback`
  - : Вызывается при каждом изменении DOM-элемента. Наблюдатель вызывает данную функцию с двумя аргументами. Первым аргументом является массив объектов [MutationRecord](/ru/docs/Web/API/MutationRecord), вторым аргументом является экземпляр `MutationObserver.`

## Методы экземпляра

- {{domxref("MutationObserver.disconnect", "disconnect()")}}
  - : Прекращает получение уведомлений об изменении DOM-элемента экземпляром `MutationObserver`, до того момента пока не будет вызван метод [observe()](<#observe()>).
- {{domxref("MutationObserver.observe", "observe()")}}
  - : Подписывает экземпляр `MutationObserver` на получение уведомлений о манипуляциях с DOM-элементом.
- {{domxref("MutationObserver.takeRecords", "takeRecords()")}}
  - : Возвращает текущий {{jsxref("Array")}} очереди экземпляра `MutationObserver`, затем очищает её.

## `MutationObserverInit`

`MutationObserverInit` — объект, который может содержать следующие свойства:

> **Примечание:** Так или иначе необходимо установить `true` для одного из следующих свойств: `childList`, `attributes`, `characterData`. В противном случае будет вызвана ошибка "An invalid or illegal string was specified"

| Property                | Description                                                                                                                             |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `childList`             | true, если необходимо наблюдать за добавлением или удалением дочерних элементов (Включая текстовые узлы (text nodes))                   |
| `attributes`            | true, если необходимо наблюдать за изменениями атрибутов целевого элемента.                                                             |
| `characterData`         | true, если необходимо наблюдать за изменениями значения текстового содержимого целевого узла (текстовых узлов дочернего элемента).      |
| `subtree`               | true, если необходимо наблюдать за потомками целевого элемента.                                                                         |
| `attributeOldValue`     | true, если необходимо возвращать предыдущее значение атрибута.                                                                          |
| `characterDataOldValue` | true, если необходимо возвращать предыдущее значение Data атрибута.                                                                     |
| `attributeFilter`       | Устанавливает массив названий атрибутов (без указания пространства имён), если требуется наблюдать за изменениями конкретных атрибутов. |

## Mutation Observer & customize resize event listener & demo

<https://codepen.io/webgeeker/full/YjrZgg/>

## Пример использования

Приведённый ниже пример взят из [этого блога](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/).

```js
// Выбираем целевой элемент
var target = document.getElementById("some-id");

// Конфигурация observer (за какими изменениями наблюдать)
const config = {
  attributes: true,
  childList: true,
  subtree: true,
};

// Колбэк-функция при срабатывании мутации
const callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
    } else if (mutation.type === "attributes") {
      console.log("The " + mutation.attributeName + " attribute was modified.");
    }
  }
};

// Создаём экземпляр наблюдателя с указанной функцией колбэка
const observer = new MutationObserver(callback);

// Начинаем наблюдение за настроенными изменениями целевого элемента
observer.observe(target, config);

// Позже можно остановить наблюдение
observer.disconnect();
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
- [Краткий обзор](http://updates.html5rocks.com/2012/02/Detect-DOM-changes-with-Mutation-Observers)
- [Более детальное обсуждение](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [Скринкаст от разработчика Chromium Rafael Weinstein](http://www.youtube.com/watch?v=eRZ4pO0gVWw)
