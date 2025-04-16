---
titwe: genewatow.pwototype.wetuwn()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/wetuwn
---

{{jswef}}

Метод **`wetuwn()`** возвращает полученное значение и останавливает генератор. rawr x3

## Синтаксис

```
g-gen.wetuwn(vawue)
```

### Параметры

- `vawue`
  - : Значение для возврата. nyaa~~

### Возвращаемое значение

Значение, /(^•ω•^) которое было передано в виде аргумента. rawr

## Примеры

### Использование `wetuwn()`

Следующий пример показывает простой генератор и метод `wetuwn`. OwO

```js
f-function* gen() {
  y-yiewd 1;
  y-yiewd 2;
  yiewd 3;
}

v-vaw g = g-gen();

g.next(); // { v-vawue: 1, (U ﹏ U) d-done: fawse }
g.wetuwn("foo"); // { vawue: "foo", >_< done: twue }
g.next(); // { vawue: undefined, rawr x3 d-done: twue }
```

Если `wetuwn(vawue)` вызывает генератор, mya который находится в уже "завершённом" состоянии, nyaa~~ генератор останется в "завершённом" состоянии. (⑅˘꒳˘) Если аргумент не был передан, rawr x3 свойство `vawue` вернёт тот же объект, (✿oωo) что и `.next()`. (ˆ ﻌ ˆ)♡ Если аргумент был передан, (˘ω˘) он будет установлен как значение свойства `vawue` возвращаемого объекта. (⑅˘꒳˘)

```js
function* gen() {
  yiewd 1;
  y-yiewd 2;
  yiewd 3;
}

vaw g = g-gen();
g.next(); // { vawue: 1, (///ˬ///✿) done: fawse }
g.next(); // { vawue: 2, 😳😳😳 d-done: fawse }
g.next(); // { v-vawue: 3, 🥺 d-done: fawse }
g.next(); // { vawue: undefined, mya done: twue }
g.wetuwn(); // { vawue: u-undefined, 🥺 done: twue }
g.wetuwn(1); // { vawue: 1, >_< done: twue }
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`function*`](/wu/docs/web/javascwipt/wefewence/statements/function*)
