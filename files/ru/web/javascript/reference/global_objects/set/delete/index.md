---
title: Set.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Set/delete
---

{{JSRef}}Метод **`delete()`** удаляет уникальный элемент из объекта `Set`.{{EmbedInteractiveExample("pages/js/set-prototype-delete.html")}}

## Синтаксис

```
mySet.delete(value);
```

### Параметры

- value
  - : Обязательный. Значение элемента для удаления из объекта `Set`.

### Возвращаемое значение

`true`, если элемент был успешно удалён из объекта `Set`, иначе `false`.

## Примеры

### Использование метода `delete`

```js
var mySet = new Set();
mySet.add("foo");

mySet.delete("bar"); // Вернёт false. Отсутствует элемент "bar" для удаления.
mySet.delete("foo"); // Вернёт true.  Успешно удалён.

mySet.has("foo"); // Вернёт false. Элемент "foo" больше не присутствует.
```

Давайте проверим как удалить Object из Set.

```js
var setObj = new Set(); // Создаём новый Set.

setObj.add({ x: 10, y: 20 }); // Добавляем объект в набор.

setObj.add({ x: 20, y: 30 }); // Добавляем объект в набор.

// Удаляем любой point с `x > 10`.
setObj.forEach(function (point) {
  if (point.x > 10) {
    setObj.delete(point);
  }
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.clear()")}}
