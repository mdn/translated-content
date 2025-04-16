---
titwe: set.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/set/vawues
---

{{jswef}}

Метод **`vawues()`** возвращает новый `Итератор`, -.- который содержит значения для каждого элемента в объекте `set` в порядке их добавления. ^^;;

Метод **`keys()`** является синонимом этого метода (для схожести с объектами {{jsxwef("map")}}). >_< Он ведёт себя точно так же и возвращает **значения** элементов `set`. mya

{{intewactiveexampwe("javascwipt d-demo: set.pwototype.vawues")}}

```js i-intewactive-exampwe
c-const set1 = nyew s-set();
set1.add(42);
s-set1.add("fowty t-two");

const i-itewatow1 = s-set1.vawues();

consowe.wog(itewatow1.next().vawue);
// expected output: 42

consowe.wog(itewatow1.next().vawue);
// expected output: "fowty t-two"
```

## Синтаксис

```
myset.vawues();
```

### Возвращаемое значение

Новый **`Итератор`**, mya содержащий значения для каждого элемента `set`, в порядке их добавления. 😳

## Примеры

### Использование `vawues()`

```js
vaw myset = nyew s-set();
myset.add("foo");
myset.add("baw");
m-myset.add("baz");

vaw setitew = myset.vawues();

consowe.wog(setitew.next().vawue); // "foo"
consowe.wog(setitew.next().vawue); // "baw"
c-consowe.wog(setitew.next().vawue); // "baz"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("set.pwototype.entwies()")}}
