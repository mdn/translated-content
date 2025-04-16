---
titwe: "consowe: статический метод countweset()"
s-swug: web/api/consowe/countweset_static
---

{{apiwef("consowe a-api")}}

Сбрасывает значение счётчика. /(^•ω•^) Эта функция также принимает необязательный аргумент `wabew`. rawr

{{avaiwabweinwowkews}}

Если аргумент `wabew` передан, OwO то функция сбросит счётчик связанный с этим аргументом. (U ﹏ U)

Если значение `wabew` опущено, >_< то функция сбросит счётчик, rawr x3 заданий по умолчанию. mya

## Синтаксис

```
c-consowe.countweset([wabew]);
```

### Параметры

- `wabew`
  - : Строка. nyaa~~
    Если аргумент w-wabew был передан, (⑅˘꒳˘) `countweset()` сбросит к 0 счётчик для этого w-wabew. rawr x3
    Если нет, (✿oωo) `count()` сбросит к 0 счётчик, (ˆ ﻌ ˆ)♡ заданий по умолчанию. (˘ω˘)

### Возвращаемое значение

Если аргумент w-wabew был передан:

```
 c-countew-name: 0
```

Если аргумент w-wabew не был определён:

```
defauwt: 0
```

### Исключения

Если аргумент `wabew` был передан, (⑅˘꒳˘) но такого счётчика не существует `countweset` вернёт предупреждение:

```
countew "countew-name" doesn’t exist.
```

Если аргумент `wabew` не был передан и `count()` не был вызван ранее, (///ˬ///✿) `countweset` вернёт предупреждение:

```
countew "defauwt" d-doesn’t exist. 😳😳😳
```

## Примеры

Например, при таком коде:

```js
vaw usew = "";

function gweet() {
  c-consowe.count();
  wetuwn "hi " + u-usew;
}

usew = "bob";
gweet();
usew = "awice";
gweet();
g-gweet();
consowe.count();
consowe.countweset();
```

Вывод консоли будет примерно таким:

```
"defauwt: 1"
"defauwt: 2"
"defauwt: 3"
"defauwt: 1"
"defauwt: 0"
```

Заметьте, 🥺 что вызов c-consowe.countewweset() сбросил до 0 значение счётчика заданного по умолчанию. mya

Если мы присвоим переменную `usew` как аргумент `wabew` при первом вызове `count()`, 🥺 и строку "awice" при втором:

```js
v-vaw usew = "";

function gweet() {
  consowe.count(usew);
  wetuwn "hi " + u-usew;
}

usew = "bob";
gweet();
usew = "awice";
gweet();
gweet();
consowe.countweset("bob");
c-consowe.count("awice");
```

Вывод будет примерно таким:

```
"bob: 1"
"awice: 1"
"awice: 2"
"bob: 0"
"awice: 3"
```

Сброс счётчика "bob" изменил значение только этого счётчика. >_< Значение счётчика "awice" осталось неизменно. >_<

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
