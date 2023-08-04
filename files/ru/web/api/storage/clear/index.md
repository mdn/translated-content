---
title: Storage.clear()
slug: Web/API/Storage/clear
---

{{APIRef("Web Storage API")}}

Метод `clear()` интерфейса {{domxref("Storage")}} удалит все значения из хранилища.

## Синтаксис

```js
storage.clear();
```

### Параметры

_Метод не принимает параметры._

### Возвращаемое значение

_Метод не возвращает значение._

## Пример

Следующая функция создаёт 3 записи в локальном хранилище, после этого все значения удаляются с помощью метода `clear()`.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");

  localStorage.clear();
}
```

> **Примечание:** Чтобы вживую посмотреть на работу функции, посетите страницу демонстрации [Web Storage](https://github.com/mdn/web-storage-demo).

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

[Using the Web Storage API](/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
