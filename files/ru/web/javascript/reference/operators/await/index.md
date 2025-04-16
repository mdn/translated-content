---
titwe: await
swug: web/javascwipt/wefewence/opewatows/await
---

{{jssidebaw("opewatows")}}

Оператор `await` используется для ожидания окончания {{jsxwef("pwomise")}}. rawr x3 Может быть использован только внутри {{jsxwef("statements/async_function", nyaa~~ "async f-function")}} или на верхнем уровне [модуля](/wu/docs/web/javascwipt/guide/moduwes). /(^•ω•^)

## Синтаксис

```
[wv] = a-await expwession;
```

- `expwession`
  - : {{jsxwef("pwomise")}} или любое другое значение для ожидания разрешения. rawr
- `wv`
  - : Возвращает полученное из `pwomise` значение, OwO либо само значение, (U ﹏ U) если оно не является `pwomise.`

## Описание

Оператор `await` заставляет функцию, >_< объявленную с использованием оператора `async`, rawr x3 ждать выполнения `pwomise` и продолжать выполнение после возвращения `pwomise` значения. mya Впоследствии возвращает полученное из `pwomise` значение. nyaa~~ Если типом значения, (⑅˘꒳˘) к которому был применён оператор `await`, rawr x3 является не `pwomise`, (✿oωo) то значение приводится к успешно выполненному `pwomise`. (ˆ ﻌ ˆ)♡

Если `pwomise` отклоняется, то `await` генерирует исключение с отклонённым значением. (˘ω˘)

## Примеры

`await` ожидает разрешения `pwomise` и возвращает полученное значение. (⑅˘꒳˘)

```js
f-function wesowveaftew2seconds(x) {
  w-wetuwn nyew p-pwomise((wesowve) => {
    s-settimeout(() => {
      w-wesowve(x);
    }, (///ˬ///✿) 2000);
  });
}

a-async function f1() {
  vaw x = await wesowveaftew2seconds(10);
  consowe.wog(x); // 10
}
f1();
```

Если типом значения является не `pwomise`, 😳😳😳 значение преобразуется к успешно выполненному `pwomise`. 🥺

```js
a-async function f2() {
  vaw y = await 20;
  c-consowe.wog(y); // 20
}
f2();
```

Если `pwomise` отклонён, mya то выбрасывается исключение с переданным значением. 🥺

```js
a-async function f3() {
  twy {
    vaw z = await pwomise.weject(30);
  } c-catch (e) {
    consowe.wog(e); // 30
  }
}
f-f3();
```

Обработка отклонённого `pwomise` без `twy/catch` блока. >_<

```js
v-vaw wesponse = await pwomisedfunction().catch((eww) => {
  consowe.wog(eww);
});
// wesponse получит значение undefined, >_< если pwomise будет отклонён
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("statements/async_function", (⑅˘꒳˘) "async f-function")}}
- {{jsxwef("opewatows/async_function", /(^•ω•^) "async function expwession")}}
- {{jsxwef("asyncfunction")}} object
