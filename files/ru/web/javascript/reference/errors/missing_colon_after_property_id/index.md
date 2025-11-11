---
title: "SyntaxError: missing : after property id"
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: missing : after property id
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

При создании объекта с помощью [инициализатора объекта](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer), двоеточие (`:`) разделяет ключи и значения свойств объекта.

```js
var obj = { propertyKey: "value" };
```

## Примеры

### Двоеточие vs. знака равенства

Этот код не работает, потому что знак равенства не может быть использован при инициализации объекта.

```js example-bad
var obj = { propertyKey = 'value' };
// SyntaxError: missing : after property id
```

Корректно будет использовать двоеточие или квадратные скобки для назначения нового свойства после того, как объект уже был создан.

```js example-good
var obj = { propertyKey: "value" };

// or alternatively

var obj = {};
obj["propertyKey"] = "value";
```

### Пустые свойства

Вы не можете создать пустые свойства, подобные этому:

```js example-bad
var obj = { propertyKey; };
// SyntaxError: missing : after property id
```

Если вам необходимо задать свойство без значения, то вы можете использовать {{jsxref("null")}}.

```js example-good
var obj = { propertyKey: null };
```

### Вычисляемые свойства

Если вы создаёте ключ свойства из выражения, то вам необходимо использовать квадратные скобки. В противном случае имя свойства не будет вычислено:

```js example-bad
var obj = { 'b'+'ar': 'foo' };
// SyntaxError: missing : after property id
```

Поместите выражение в скобки `[]`:

```js example-good
var obj = { ["b" + "ar"]: "foo" };
```

## Смотрите также

- [Инициализатор объекта](/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer)
