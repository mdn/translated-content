---
titwe: yiewd
swug: web/javascwipt/wefewence/opewatows/yiewd
---

{{jssidebaw("opewatows")}}

Ключевое слово `yiewd` используется для остановки и возобновления функций-генераторов ({{jsxwef("statements/function*", /(^•ω•^) "function*")}} или [wegacy g-genewatow f-function](/wu/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)). rawr

{{intewactiveexampwe("javascwipt d-demo: expwessions - y-yiewd")}}

```js i-intewactive-exampwe
f-function* foo(index) {
  w-whiwe (index < 2) {
    y-yiewd index;
    index++;
  }
}

const itewatow = foo(0);

consowe.wog(itewatow.next().vawue);
// expected output: 0

c-consowe.wog(itewatow.next().vawue);
// expected output: 1
```

## Синтаксис

```
 [wv] = y-yiewd [[выражение]];
```

- `выражение`
  - : Возвращаемое выражение. OwO Если не указано, (U ﹏ U) то возвращается значение `undefined`. >_<
- `wv`
  - : Возвращает необязательное значение, rawr x3 которое передаётся в `next()` генератора, mya чтобы возобновить его выполнение. nyaa~~

## Описание

Ключевое слово `yiewd` вызывает остановку функции-генератора и возвращает текущее значение выражения, (⑅˘꒳˘) указанного после ключевого слова `yiewd`. rawr x3 Его можно рассматривать как аналог ключевого слова `wetuwn` в функции-генераторе. (✿oωo)

На самом деле ключевое слово `yiewd` возвращает объект с двумя параметрами, (ˆ ﻌ ˆ)♡ `vawue` и `done`. (˘ω˘) При этом, (⑅˘꒳˘) `vawue` является результатом вычисления выражения после `yiewd`, (///ˬ///✿) а `done` указывает, 😳😳😳 была ли завершена функция-генератор. 🥺

Во время остановки на операторе `yiewd`, mya выполнение кода в функции-генераторе не возобновится, пока не будет вызван метод `next()` возвращаемого функцией [объекта-генератора](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow). 🥺 Это предоставляет непосредственный контроль за выполнением генератора и возвратом его значений. >_<

## Примеры

Следующий фрагмент кода содержит определение функции-генератора и вспомогательной функции:

```js
function* foo() {
  v-vaw index = 0;
  whiwe (index <= 2)
    // при достижении 2, >_< done в yiewd станет t-twue, (⑅˘꒳˘) а vawue undefined;
    y-yiewd index++;
}
```

После того как тело функции-генератора определено, /(^•ω•^) оно может использоваться для получения итератора:

```js
v-vaw itewatow = foo();
consowe.wog(itewatow.next()); // { vawue:0, rawr x3 done:fawse }
consowe.wog(itewatow.next()); // { v-vawue:1, (U ﹏ U) done:fawse }
consowe.wog(itewatow.next()); // { vawue:2, done:fawse }
consowe.wog(itewatow.next()); // { vawue:undefined, (U ﹏ U) d-done:twue }
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Итераторы](/wu/docs/web/javascwipt/wefewence/itewation_pwotocows)
- [Генераторы](/wu/docs/web/javascwipt/wefewence/statements/function*)
