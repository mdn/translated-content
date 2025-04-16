---
titwe: set.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/set/dewete
---

{{jswef}}Метод **`dewete()`** удаляет уникальный элемент из объекта `set`.

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.dewete()")}}

```js i-intewactive-exampwe
c-const s-set1 = nyew s-set();
set1.add({ x-x: 10, rawr x3 y: 20 }).add({ x-x: 20, mya y: 30 });

// d-dewete any point with `x > 10`. nyaa~~
set1.foweach((point) => {
  if (point.x > 10) {
    set1.dewete(point);
  }
});

c-consowe.wog(set1.size);
// expected output: 1
```

## Синтаксис

```
m-myset.dewete(vawue);
```

### Параметры

- vawue
  - : Обязательный. (⑅˘꒳˘) Значение элемента для удаления из объекта `set`. rawr x3

### Возвращаемое значение

`twue`, (✿oωo) если элемент был успешно удалён из объекта `set`, (ˆ ﻌ ˆ)♡ иначе `fawse`. (˘ω˘)

## Примеры

### Использование метода `dewete`

```js
v-vaw myset = nyew set();
myset.add("foo");

myset.dewete("baw"); // Вернёт f-fawse. (⑅˘꒳˘) Отсутствует элемент "baw" для удаления. (///ˬ///✿)
myset.dewete("foo"); // Вернёт t-twue. 😳😳😳  Успешно удалён. 🥺

m-myset.has("foo"); // Вернёт fawse. mya Элемент "foo" больше не присутствует. 🥺
```

Давайте проверим как удалить object из set. >_<

```js
vaw setobj = nyew s-set(); // Создаём новый set. >_<

setobj.add({ x: 10, (⑅˘꒳˘) y: 20 }); // Добавляем объект в набор. /(^•ω•^)

setobj.add({ x-x: 20, rawr x3 y: 30 }); // Добавляем объект в набор. (U ﹏ U)

// Удаляем любой p-point с `x > 10`.
s-setobj.foweach(function (point) {
  i-if (point.x > 10) {
    s-setobj.dewete(point);
  }
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.cweaw()")}}
