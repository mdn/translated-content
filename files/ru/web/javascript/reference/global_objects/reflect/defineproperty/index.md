---
title: Reflect.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
---

{{JSRef}}

Статический метод **`Reflect.defineProperty()`** похож на {{jsxref("Object.defineProperty()")}}, но возвращает {{jsxref("Boolean")}}.

{{EmbedInteractiveExample("pages/js/reflect-defineproperty.html")}}

## Синтаксис

```
Reflect.defineProperty(target, propertyKey, attributes)
```

### Параметры

- `target`
  - : Объект, в котором определяется свойство.
- `propertyKey`
  - : Имя определяемого или изменяемого свойства.
- `attributes`
  - : Атрибуты для определяемого или изменяемого свойства.

### Возвращаемое значение

Возвращается значение {{jsxref("Boolean")}}, указывающее было ли свойство успешно определено.

### Исключения

Исключение {{jsxref("TypeError")}}, если `target` не является {{jsxref("Object")}}.

## Описание

Метод `Reflect.defineProperty` позволяет точно дополнить или изменить свойство объекта. Для более подробной информации смотрите на аналогичный метод - {{jsxref("Object.defineProperty")}}. `Object.defineProperty` возвращает объект или выбрасывает исключение {{jsxref("TypeError")}}, если свойство не было успешно определено. `Reflect.defineProperty`, в любом случае, просто возвращает {{jsxref("Boolean")}}, указывающее было ли свойство успешно определено.

## Примеры

### Использования `Reflect.defineProperty()`

```js
var obj = {};
Reflect.defineProperty(obj, "x", { value: 7 }); // true
obj.x; // 7
```

### Проверка успешно ли было определено свойство

При использовании {{jsxref("Object.defineProperty")}}, который возвращал объект в случае успеха, либо выбрасывал исключение {{jsxref("TypeError")}}, вы должны были использовать конструкцию [`try...catch`](/ru/docs/Web/JavaScript/Reference/Statements/try...catch) для того, чтобы поймать ошибку, которая случилась при определении свойства. Потому что `Reflect.defineProperty` возвращает {{jsxref("Boolean")}} в любом случае, вы можете использовать конструкцию [`if...else`](/ru/docs/Web/JavaScript/Reference/Statements/if...else):

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // успех
} else {
  // неудача
}
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Reflect")}}
- {{jsxref("Object.defineProperty()")}}
