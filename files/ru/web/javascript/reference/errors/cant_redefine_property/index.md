---
title: 'TypeError: can''t redefine non-configurable property "x"'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
---

{{jsSidebar("Errors")}}

Исключение "can't redefine non-configurable property" возникает, когда в коде переопределяется [ненастраиваемое свойство](/ru/docs/Web/JavaScript/Data_structures#properties).

## Сообщения

```plain
TypeError: Cannot redefine property: "x" (V8-based)
TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Attempting to change value of a readonly property. (Safari)
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что не так?

Была предпринята попытка переопределить свойство, но это [свойство не настраивается](/ru/docs/Web/JavaScript/Data_structures#properties). Атрибут "настраиваемости" определяет, можно ли удалить свойство из объекта и можно ли изменить другие его атрибуты (отличные от доступных для записи). Обычно, свойства объекта, созданного [инициализатором объекта](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer), настраиваются. Однако, например, при использовании {{jsxref("Object.defineProperty()")}}, заданное свойство по умолчанию ненастраиваемое.

## Примеры

### Ненастраиваемые свойства, созданные `Object.defineProperty`

The {{jsxref("Object.defineProperty()")}} создаёт ненастраиваемые свойства, если они не помечены как настраиваемые.

```js example-bad
const obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar" });

Object.defineProperty(obj, "foo", { value: "baz" });
// TypeError: can't redefine non-configurable property "foo"
```

Вам нужно будет пометить свойство "foo" как настраиваемое (`configurable: true`), если вы собираетесь переопределить его позже в коде.

```js example-good
const obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar", configurable: true });
Object.defineProperty(obj, "foo", { value: "baz", configurable: true });
```

## Смотрите также

- [\[\[Configurable\]\]](/ru/docs/Web/JavaScript/Data_structures#Properties)
- {{jsxref("Object.defineProperty()")}}
