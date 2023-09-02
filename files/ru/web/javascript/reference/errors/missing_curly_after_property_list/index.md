---
title: "SyntaxError: missing } after property list"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: missing } after property list
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

Произошла ошибка в синтаксисе [инициализатора объекта](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer). Причиной может быть отсутствующая фигурная скобка или, к примеру, недостающая запятая. Также проверьте, в правильном ли порядке расположены закрывающие круглые и фигурные скобки. Добавление отступов или форматирование кода в более благоприятный вид также могут помочь разобраться в беспорядке.

## Примеры

### Забытая запятая

Зачастую в коде инициализатора объекта есть недостающая запятая:

```js example-bad
var obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

Правильный вариант:

```js example-good
var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3,
};
```

## Смотрите также

- [Инициализация объектов](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer)
