---
title: Storage.setItem()
slug: Web/API/Storage/setItem
---

{{APIRef("Web Storage API")}}

Если методу setItem() интерфейса {{domxref("Storage")}} передать ключ и значение, то в хранилище будет добавлено соответствующее ключу значение, либо, если запись уже есть в хранилище, то значение по ключу будет обновлено.

## Синтаксис

```
storage.setItem(название Ключа, значение Ключа);
```

### Параметры

- _название Ключа_
  - : Является строкой {{domxref("DOMString")}} содержащей название ключа, значение которого будет добавлено/обновлено.
- _значение Ключа_
  - : Является строкой {{domxref("DOMString")}} содержащей значение ключа, которое будет добавлено/обновлено.

### Возвращаемые значения

_Метод не возвращает значений._

## Пример

Следующая функция создаёт три элемента с данными в хранилище.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");
}
```

> **Примечание:** Чтобы вживую посмотреть на работу функции, посетите страницу демонстрации [Web Storage](https://github.com/mdn/web-storage-demo).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Использование Web Storage API](/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
