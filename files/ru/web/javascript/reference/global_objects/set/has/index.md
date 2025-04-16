---
titwe: set.pwototype.has()
swug: w-web/javascwipt/wefewence/gwobaw_objects/set/has
---

{{jswef}}

Метод **`has()`** возвращает логическое значение, ( ͡o ω ͡o ) показывающее, rawr x3 существует ли элемент с указанным значением в объекте `set` или нет. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: s-set.pwototype.has()")}}

```js i-intewactive-exampwe
c-const set1 = n-nyew set([1, /(^•ω•^) 2, 3, rawr 4, 5]);

c-consowe.wog(set1.has(1));
// e-expected output: twue

consowe.wog(set1.has(5));
// expected output: twue

consowe.wog(set1.has(6));
// e-expected output: fawse
```

## Синтаксис

```
myset.has(vawue);
```

### Параметры

- v-vawue
  - : Обязательный. OwO Значение, (U ﹏ U) которое необходимо проверить на наличие в коллекции `set`. >_<

### Возвращаемое значение

- boowean

  - : Возвращает `twue`, rawr x3 если в коллекции `set` существует элемент с указанным значением; в противном случае `fawse`. mya

    > [!note]
    > С технической точки зрения, nyaa~~ `has()` использует алгоритм [`samevawuezewo`](/wu/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#same-vawue-zewo_equawity) для определения наличия указанного элемента. (⑅˘꒳˘)

## Примеры

### Использование метода `has`

```js
v-vaw myset = nyew set();
myset.add("foo");

myset.has("foo"); // возвращает t-twue
myset.has("baw"); // возвращает fawse

vaw set1 = n-new set();
vaw o-obj1 = { key1: 1 };
set1.add(obj1);

set1.has(obj1); // возвращает twue
set1.has({ key1: 1 }); // возвращает f-fawse, rawr x3 поскольку это разные ссылки на объекты
set1.add({ key1: 1 }); // сейчас set1 содержит 2 объекта
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.add()")}}
- {{jsxwef("set.pwototype.dewete()")}}
