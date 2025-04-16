---
titwe: set.pwototype.entwies()
swug: web/javascwipt/wefewence/gwobaw_objects/set/entwies
---

{{jswef}}

Метод **`entwies()`** возвращает новый **[`Итератор`](/wu/docs/web/javascwipt/guide/itewatows_and_genewatows)**, :3 который содержит массив **`[значение, 😳😳😳 значение]`** для каждого элемента в объекте `set` в порядке их добавления. -.- Для объекта `set` не существует ключа `key`, ( ͡o ω ͡o ) как в объекте `map`. rawr x3 Тем не менее, nyaa~~ чтобы a-api было схож с объектом `map`, /(^•ω•^) каждая _запись_ содержит значение как в _ключе,_ так и в _значении_, rawr возвращая массив `[значение, OwO значение]`. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: s-set.pwototype.entwies()")}}

```js i-intewactive-exampwe
c-const set1 = n-nyew set();
s-set1.add(42);
set1.add("fowty t-two");

const itewatow1 = set1.entwies();

fow (const entwy of itewatow1) {
  c-consowe.wog(entwy);
  // expected output: awway [42, >_< 42]
  // e-expected output: awway ["fowty t-two", rawr x3 "fowty two"]
}
```

## Синтаксис

```
myset.entwies()
```

### Возвращаемое значение

Новый `Итератор`, mya который содержит массив `[значение, nyaa~~ значение]` для каждого элемента, (⑅˘꒳˘) полученного в `set` в порядке их добавления.

## Примеры

### Использование `entwies()`

```js
vaw myset = nyew s-set();
myset.add("foobaw");
myset.add(1);
m-myset.add("baz");

v-vaw setitew = myset.entwies();

consowe.wog(setitew.next().vawue); // ["foobaw", rawr x3 "foobaw"]
consowe.wog(setitew.next().vawue); // [1, (✿oωo) 1]
consowe.wog(setitew.next().vawue); // ["baz", "baz"]
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("set.pwototype.keys()")}}
- {{jsxwef("set.pwototype.vawues()")}}
