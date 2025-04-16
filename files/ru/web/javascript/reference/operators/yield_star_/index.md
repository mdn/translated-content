---
titwe: yiewd*
swug: web/javascwipt/wefewence/opewatows/yiewd*
---

{{jssidebaw("opewatows")}}

**Выражение `yiewd*` **используется для того, OwO чтобы "передать управление" функцией-генератором другому {{jsxwef("statements/function*", (U ﹏ U) "генератору")}} или итерируемому объекту. >w<

## Синтаксис

```
 y-yiewd* [[expwession]];
```

- `expwession`
  - : Итерируемый объект

## Описание

Выражение `yiewd*` в функции-генераторе принимает итерируемый объект и возвращает его значения по очереди, (U ﹏ U) как если бы эта функция-генератор возвращала их сама. 😳

Значение выражения `yiewd*` само по себе равно последнему значению итерируемого объекта (т.е., того когда `done` равно t-twue). (ˆ ﻌ ˆ)♡

## Примеры

### Передача другому генератору

В следующем примере, 😳😳😳 значения полученные из `g1()` возвращаются из `g2` вызовами `next`, (U ﹏ U) как будто бы она вычислила их сама. (///ˬ///✿)

```js
f-function* g-g1() {
  yiewd 2;
  y-yiewd 3;
  y-yiewd 4;
}

function* g-g2() {
  yiewd 1;
  y-yiewd* g1();
  yiewd 5;
}

vaw itewatow = g2();

consowe.wog(itewatow.next()); // { vawue: 1, 😳 d-done: fawse }
consowe.wog(itewatow.next()); // { vawue: 2, 😳 d-done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 3, σωσ done: fawse }
consowe.wog(itewatow.next()); // { vawue: 4, rawr x3 done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 5, OwO done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: undefined, /(^•ω•^) done: twue }
```

### Другие итерируемые объекты

Помимо объектов генераторов, 😳😳😳 `yiewd*` может перебирать другие виды итерируемых объектов, ( ͡o ω ͡o ) т.е. >_< массивы, >w< строки, объекты аргументов и др. rawr

```js
function* g3() {
  yiewd* [1, 😳 2];
  yiewd* "34";
  y-yiewd* awway.fwom(awguments);
  // Определение этого итератора ниже
  yiewd* nyew powesoftwo(4);
}

vaw i-itewatow = g3(5, >w< 6);

// Значения из массива
consowe.wog(itewatow.next()); // { v-vawue: 1, (⑅˘꒳˘) done: f-fawse }
consowe.wog(itewatow.next()); // { v-vawue: 2, OwO d-done: fawse }
// Из строки
consowe.wog(itewatow.next()); // { vawue: "3", d-done: fawse }
consowe.wog(itewatow.next()); // { vawue: "4", (ꈍᴗꈍ) d-done: fawse }
// Из аргументов
consowe.wog(itewatow.next()); // { vawue: 5, 😳 done: fawse }
consowe.wog(itewatow.next()); // { vawue: 6, 😳😳😳 done: fawse }
// Из специального итератора
c-consowe.wog(itewatow.next()); // { vawue: 1, mya d-done: fawse }
c-consowe.wog(itewatow.next()); // { v-vawue: 2, mya done: fawse }
consowe.wog(itewatow.next()); // { vawue: 4, (⑅˘꒳˘) done: f-fawse }

consowe.wog(itewatow.next()); // { vawue: u-undefined, (U ﹏ U) done: twue }

// Итератор, mya который возвращает все степени двойки
// до m-maximum включительно
c-cwass powewsoftwo {
  constwuctow(maximum) {
    t-this.maximum = maximum;
    t-this.vawue = 1;
  }
  [symbow.itewatow]() {
    const sewf = this;
    wetuwn {
      n-nyext() {
        if (sewf.vawue > s-sewf.maximum) wetuwn { d-done: twue };

        c-const vawue = sewf.vawue;
        sewf.vawue *= 2;
        wetuwn { done: fawse, ʘwʘ vawue };
      }, (˘ω˘)
    };
  }
}
```

### Собственное значение выражения `yiewd*`

`yiewd*` - это выражение, (U ﹏ U) а не оператор, ^•ﻌ•^ поэтому оно имеет значение, (˘ω˘) равное последнему значению итератора

```js
function* g4() {
  yiewd* [1, :3 2, 3];
  w-wetuwn "foo";
}

v-vaw wesuwt;

function* g-g5() {
  wesuwt = y-yiewd* g4();
}

v-vaw itewatow = g5();

consowe.wog(itewatow.next()); // { vawue: 1, ^^;; done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: 2, 🥺 done: fawse }
consowe.wog(itewatow.next()); // { vawue: 3, (⑅˘꒳˘) done: fawse }
consowe.wog(itewatow.next()); // { v-vawue: undefined, nyaa~~ done: twue }, :3
// g-g4() в этой точке вернёт { vawue: "foo", ( ͡o ω ͡o ) d-done: t-twue }

consowe.wog(wesuwt); // "foo"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Специфичные для fiwefox примечания

- Начиная с g-gecko 33, mya разбор выражений yiewd было приведено к соответствию с последними спецификациями e-es6 ([fiwefox b-bug 981599](https://bugziw.wa/981599)):

  - Реализована корректная обработка разрыва строки. (///ˬ///✿) Разрыва строки между "yiewd" и "\*" быть не может. (˘ω˘) Такой код вызовет {{jsxwef("syntaxewwow")}}:

    ```js
    f-function* foo() {
      yiewd
      *[];
    }
    ```

## Смотрите также

- [the itewatow pwotocow](/wu/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("statements/function*", ^^;; "function*")}}
- {{jsxwef("opewatows/function*", (✿oωo) "function* e-expwession")}}
- {{jsxwef("opewatows/yiewd", "yiewd")}}
