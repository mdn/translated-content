---
title: 'TypeError: can''t redefine non-configurable property "x"(Тип ошибки: не удаётся переопределить настраиваемое свойство "x")'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
---

{{jsSidebar("Errors")}}

## Сообщения

```
TypeError: невозможно изменить свойство, недоступное для записи {x} (Edge)
TypeError: невозможно переопределить не настраиваемое свойство "x" (Firefox)
TypeError: не удаётся переопределить свойство: "x" (Chrome)
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что не так?

Была предпринята попытка переопределить свойство, но это свойство не настраивается. Настраиваемый атрибут определяет, можно ли удалить свойство из объекта и можно ли изменить его атрибуты (отличные от доступных для записи). Обычно свойства объекта, созданного инициализатором объекта, настраиваются. Однако, например, при использовании {{jsxref("Object.defineProperty()")}}, свойство не настраивается по умолчанию.

## Примеры

### Не настраиваемые свойства, созданные `Object.defineProperty`

The {{jsxref("Object.defineProperty()")}} создаёт не настраиваемые свойства, если они не указаны как настраиваемые.

```js example-bad
var obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar" });

Object.defineProperty(obj, "foo", { value: "baz" });
// TypeError: не удаётся переопределить не настраиваемое свойство "foo"
```

Вам нужно будет установить свойство "foo" в конфигурируемое, если вы собираетесь переопределить его позже в коде.

```js example-good
var obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar", configurable: true });
Object.defineProperty(obj, "foo", { value: "baz", configurable: true });
```

## Смотрите также

- [\[\[Configurable\]\]](/ru/docs/Web/JavaScript/Data_structures#Properties)
- {{jsxref("Object.defineProperty()")}}
