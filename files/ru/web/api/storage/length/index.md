---
title: Storage.length
slug: Web/API/Storage/length
---

{{APIRef("Web Storage API")}}

Свойство length интерфейса {{domxref("Storage")}} доступно только для чтения и возвращает число с количеством элементов, которые хранятся в объекте Storage на данный момент.

## Синтаксис

```
var aLength = storage.length;
```

### Возвращаемые значения

Число

## Пример

Следующая функция добавляет три элемента с данными в локальное хранилище для домена, на котором выполняется код и возвращает число элементов в хранилище:

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "yellow");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "cats.png");

  localStorage.length; // return 3
}
```

> **Примечание:** чтобы посмотреть выполнение кода вживую, посетите страницу [Web Storage Demo](https://github.com/mdn/web-storage-demo).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Использование Web Storage API](/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
