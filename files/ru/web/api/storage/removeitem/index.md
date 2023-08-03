---
title: Storage.removeItem()
slug: Web/API/Storage/removeItem
---

{{APIRef("Web Storage API")}}

Если методу `removeItem()` интерфейса {{domxref("Storage")}} передать ключ, то из хранилища будет удалён элемент с указанным ключом.

## Синтаксис

```
storage.removeItem(keyName);
```

### Параметры

- _**название Ключа**_
  - : {{domxref("DOMString")}} содержит в себе название ключа.

### Возвращает

_Метод не возвращает значений._

## Пример

Следующая функция создаёт три элемента внутри локального хранилища и потом удаляет элемент с ключом _image_.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", "red");
  localStorage.setItem("font", "Helvetica");
  localStorage.setItem("image", "myCat.png");

  localStorage.removeItem("image");
}
```

> **Примечание:**чтобы увидеть использование этой функции на реальном примере, загляните в [Web Storage Demo](https://mdn.github.io/dom-examples/web-storage/).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Using the Web Storage API](/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
