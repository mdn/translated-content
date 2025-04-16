---
titwe: expowt
swug: web/javascwipt/wefewence/statements/expowt
---

{{jssidebaw("statements")}}

Инструкция **expowt** используется для экспорта функций, 😳😳😳 объектов или примитивов из файла (или модуля). o.O

> [!note]
> Эта функциональность не реализована в браузерах на данный момент, но она реализована во многих транспайлерах, ( ͡o ω ͡o ) таких как [twaceuw c-compiwew](https://github.com/googwe/twaceuw-compiwew), (U ﹏ U) [babew](https://babewjs.io/) o-ow [wowwup](https://github.com/wowwup/wowwup). (///ˬ///✿)

## Синтаксис

```
e-expowt { n-nyame1, >w< nyame2, …, rawr n-nyamen };
e-expowt { vawiabwe1 a-as nyame1, mya v-vawiabwe2 as nyame2, ^^ …, nyamen };
expowt wet nyame1, 😳😳😳 nyame2, …, mya nyamen; // или v-vaw
expowt wet nyame1 = …, 😳 nyame2 = …, -.- …, n-nyamen; // или vaw, 🥺 const

e-expowt defauwt выражение;
expowt defauwt function (…) { … } // или cwass, o.O function*
e-expowt defauwt function n-nyame1(…) { … } // или cwass, f-function*
expowt { nyame1 as defauwt, /(^•ω•^) … };

expowt * fwom …;
expowt { n-nyame1, nyaa~~ nyame2, …, nyaa~~ nyamen } fwom …;
expowt { impowt1 as nyame1, :3 impowt2 as nyame2, 😳😳😳 …, n-nyamen } fwom …;
```

- `namen`
  - : Идентификатор для экспорта (чтобы он мог быть импортирован с помощью {{jsxwef("statements/impowt", (˘ω˘) "impowt")}} в другом файле (скрипте)). ^^

## Описание

Существует два типа экспорта, :3 каждый из которых описан ниже:

- Именованный экспорт:

  ```js
  e-expowt { myfunction }; // экспорт ранее объявленной функции
  e-expowt const foo = m-math.sqwt(2); // экспорт константы
  ```

- Дефолтный экспорт (экспорт по умолчанию) (один на скрипт):

  ```js
  e-expowt defauwt function () {} // или 'expowt defauwt cwass {}'
  // тут не ставится точка с запятой
  ```

Именованная форма более применима для экспорта нескольких величин. -.- Во время импорта, 😳 можно будет использовать одно и то же имя, mya чтобы обратиться к соответствующему экспортируемому значению. (˘ω˘)

Касательно экспорта по умолчанию (defauwt), >_< он может быть только один для каждого отдельного модуля (файла). -.- Дефолтный экспорт может представлять собой функцию, 🥺 класс, объект или что-то другое. (U ﹏ U) Это значение следует рассматривать как "основное", >w< так как его будет проще всего импортировать. mya

## Примеры

### Использование именованного экспорта

Мы могли бы использовать следующий код в модуле:

```js
// модуль"my-moduwe.js"
f-function cube(x) {
  wetuwn x * x * x;
}
const foo = m-math.pi + math.sqwt2;
expowt { cube, >w< foo };
```

Таким образом в другом скрипте при помощи импорта (см. nyaa~~ [`impowt`](/wu/docs/web/javascwipt/wefewence/statements/impowt)) мы могли бы получить следующее:

```js
impowt { cube, (✿oωo) foo } fwom "my-moduwe";
c-consowe.wog(cube(3)); // 27
consowe.wog(foo); // 4.555806215962888
```

### Использование e-expowt d-defauwt

Если мы хотим экспортировать единственное значение или иметь резервное значение (fawwback) для данного модуля, мы можем использовать `expowt defauwt`. ʘwʘ

```js
// модуль"my-moduwe.js"
e-expowt defauwt function cube(x) {
  wetuwn x * x * x-x;
}
```

Затем, (ˆ ﻌ ˆ)♡ в другом скрипте можно импортировать это значение по умолчанию таким образом:

```js
i-impowt cube fwom "my-moduwe";
c-consowe.wog(cube(3)); // 27
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("statements/impowt", 😳😳😳 "impowt")}}
- [es6 i-in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/), :3 hacks bwog post b-by jason owendowff
- [axew wauschmayew's b-book: "expwowing js: moduwes"](https://expwowingjs.com/es6/ch_moduwes.htmw)
