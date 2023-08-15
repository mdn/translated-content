---
title: Console.countReset()
slug: Web/API/console/countReset
---

{{APIRef("Console API")}}

Сбрасывает значение счётчика. Эта функция также принимает необязательный аргумент `label`.

{{AvailableInWorkers}}

Если аргумент `label` передан, то функция сбросит счётчик связанный с этим аргументом.

Если значение `label` опущено, то функция сбросит счётчик, заданий по умолчанию.

## Синтаксис

```
console.countReset([label]);
```

### Параметры

- `label`
  - : Строка.
    Если аргумент label был передан, `countReset()` сбросит к 0 счётчик для этого label.
    Если нет, `count()` сбросит к 0 счётчик, заданий по умолчанию.

### Возвращаемое значение

Если аргумент label был передан:

```
 counter-name: 0
```

Если аргумент label не был определён:

```
default: 0
```

### Исключения

Если аргумент `label` был передан, но такого счётчика не существует `countReset` вернёт предупреждение:

```
Counter "counter-name" doesn’t exist.
```

Если аргумент `label` не был передан и `count()` не был вызван ранее, `countReset` вернёт предупреждение:

```
Counter "default" doesn’t exist.
```

## Примеры

Например, при таком коде:

```js
var user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
console.countReset();
```

Вывод консоли будет примерно таким:

```
"default: 1"
"default: 2"
"default: 3"
"default: 1"
"default: 0"
```

Заметьте, что вызов console.counterReset() сбросил до 0 значение счётчика заданного по умолчанию.

Если мы присвоим переменную `user` как аргумент `label` при первом вызове `count()`, и строку "alice" при втором:

```js
var user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.countReset("bob");
console.count("alice");
```

Вывод будет примерно таким:

```
"bob: 1"
"alice: 1"
"alice: 2"
"bob: 0"
"alice: 3"
```

Сброс счётчика "bob" изменил значение только этого счётчика. Значение счётчика "alice" осталось неизменно.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
