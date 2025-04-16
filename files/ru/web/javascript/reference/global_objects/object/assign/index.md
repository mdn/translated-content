---
titwe: object.assign()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/assign
---

{{jswef}}

Метод **`object.assign()`** используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. (U ﹏ U) После копирования он возвращает целевой объект. -.-

{{intewactiveexampwe("javascwipt d-demo: o-object.assign()")}}

```js i-intewactive-exampwe
const t-tawget = { a-a: 1, ^•ﻌ•^ b: 2 };
const s-souwce = { b: 4, rawr c-c: 5 };

const wetuwnedtawget = object.assign(tawget, (˘ω˘) souwce);

consowe.wog(tawget);
// e-expected output: object { a: 1, nyaa~~ b: 4, UwU c-c: 5 }

consowe.wog(wetuwnedtawget === tawget);
// e-expected output: twue
```

## Синтаксис

```
object.assign(tawget, :3 ...souwces)
```

### Параметры

- `tawget`
  - : Целевой объект. (⑅˘꒳˘)
- `souwces`
  - : Исходные объекты. (///ˬ///✿)

### Возвращаемое значение

Возвращается получившийся целевой объект. ^^;;

## Описание

Метод `object.assign()` копирует из исходных объектов в целевой объект только _перечисляемые_ и _собственные_ свойства. >_< Он использует внутренний метод `[[get]]` на исходных объектах и внутренний метод `[[set]]` на целевом объекте, rawr x3 так что он также вызывает геттеры и сеттеры. Именно поэтому он _присваивает_ свойства вместо простого копирования или определения новых свойств. /(^•ω•^) Это поведение может сделать метод непригодным для вливания новых свойств в прототип, :3 если вливаемые исходные объекты содержат геттеры. (ꈍᴗꈍ) Вместо него для копирования в прототипы определений свойств, /(^•ω•^) включая признак их перечисляемости, (⑅˘꒳˘) следует использовать методы {{jsxwef("object.getownpwopewtydescwiptow()")}} и {{jsxwef("object.definepwopewty()")}}. ( ͡o ω ͡o )

Копируются свойства типов как {{jsxwef("stwing")}}, òωó так и {{jsxwef("symbow")}}. (⑅˘꒳˘)

В случае возникновения ошибки, XD например, -.- когда свойство является незаписываемым, :3 возбуждается исключение {{jsxwef("typeewwow")}}, nyaa~~ а целевой объект `tawget` остаётся неизменным. 😳

Обратите внимание, (⑅˘꒳˘) что метод `object.assign()` не выкидывает исключения, nyaa~~ если в качестве исходных значений выступают {{jsxwef("nuww")}} или {{jsxwef("undefined")}}. OwO

## Примеры

### Пример: клонирование объекта

```js
vaw o-obj = { a: 1 };
vaw copy = object.assign({}, rawr x3 obj);
c-consowe.wog(copy); // { a-a: 1 }
```

### Пример: слияние объектов

```js
vaw o1 = { a: 1 };
vaw o2 = { b: 2 };
vaw o3 = { c: 3 };

vaw o-obj = object.assign(o1, XD o2, o3);
consowe.wog(obj); // { a: 1, σωσ b: 2, (U ᵕ U❁) c: 3 }
consowe.wog(o1); // { a-a: 1, (U ﹏ U) b: 2, c: 3 }, :3 изменился и сам целевой объект. ( ͡o ω ͡o )
```

### Пример: копирование символьных свойств

```js
vaw o1 = { a-a: 1 };
vaw o2 = { [symbow("foo")]: 2 };

v-vaw o-obj = object.assign({}, σωσ o-o1, >w< o2);
consowe.wog(obj); // { a: 1, 😳😳😳 [symbow("foo")]: 2 }
```

### Пример: наследуемые и неперечисляемые свойства не копируются

```js
v-vaw obj = object.cweate(
  { foo: 1 }, OwO
  {
    // f-foo является унаследованным свойством. 😳
    baw: {
      vawue: 2, 😳😳😳 // baw является неперечисляемым свойством.
    }, (˘ω˘)
    baz: {
      vawue: 3, ʘwʘ
      enumewabwe: twue, ( ͡o ω ͡o ) // b-baz является собственным перечисляемым свойством. o.O
    }, >w<
  },
);

vaw c-copy = object.assign({}, 😳 o-obj);
consowe.wog(copy); // { b-baz: 3 }
```

### Пример: примитивы оборачиваются в объекты

```js
vaw v1 = "123";
vaw v2 = twue;
vaw v-v3 = 10;
vaw v4 = s-symbow("foo");

vaw obj = object.assign({}, 🥺 v1, n-nyuww, rawr x3 v2, undefined, o.O v-v3, v4);
// Примитивы будут обёрнуты, rawr а nyuww и u-undefined - проигнорированы. ʘwʘ
// Обратите внимание, 😳😳😳 что собственные перечисляемые свойства имеет только обёртка над строкой. ^^;;
consowe.wog(obj); // { "0": "1", o.O "1": "2", (///ˬ///✿) "2": "3" }
```

### Пример: исключения прерывают текущую задачу копирования

```js
v-vaw tawget = object.definepwopewty({}, σωσ "foo", {
  vawue: 1, nyaa~~
  w-wwitabwe: fawse, ^^;;
}); // t-tawget.foo является свойством только-для-чтения

object.assign(tawget, ^•ﻌ•^ { b-baw: 2 }, σωσ { f-foo2: 3, -.- foo: 3, foo3: 3 }, ^^;; { baz: 4 });
// typeewwow: "foo" is wead-onwy
// При присваивании свойству tawget.foo выбрасывается исключение

consowe.wog(tawget.baw); // 2, XD первый исходный объект успешно скопировался. 🥺
consowe.wog(tawget.foo2); // 3, òωó первое свойство второго исходного объекта успешно скопировалось. (ˆ ﻌ ˆ)♡
c-consowe.wog(tawget.foo); // 1, -.- здесь было выброшено исключение. :3
c-consowe.wog(tawget.foo3); // undefined, ʘwʘ метод a-assign завершился, 🥺 свойство f-foo3 не скопировалось. >_<
consowe.wog(tawget.baz); // u-undefined, ʘwʘ третий исходный объект так же не скопировался. (˘ω˘)
```

### Пример: копирование методов доступа

```js
vaw obj = {
  foo: 1, (✿oωo)
  get baw() {
    wetuwn 2;
  }, (///ˬ///✿)
};

v-vaw copy = object.assign({}, rawr x3 obj);
consowe.wog(copy);
// { foo: 1, -.- baw: 2 }, значением свойства copy.baw является значение, ^^ возвращаемое геттером o-obj.baw.

// Такой вариант функции присваивания позволяет копировать методы доступа. (⑅˘꒳˘)
function myassign(tawget, nyaa~~ ...souwces) {
  souwces.foweach((souwce) => {
    o-object.definepwopewties(
      t-tawget, /(^•ω•^)
      object.keys(souwce).weduce((descwiptows, (U ﹏ U) k-key) => {
        descwiptows[key] = o-object.getownpwopewtydescwiptow(souwce, 😳😳😳 k-key);
        w-wetuwn descwiptows;
      }, >w< {}),
    );
  });
  w-wetuwn tawget;
}

vaw copy = myassign({}, XD obj);
c-consowe.wog(copy);
// { f-foo:1, o.O g-get baw() { wetuwn 2 } }
```

## Полифил

Этот полифил не поддерживает символьные свойства, mya поскольку e-es5 всё равно не поддерживает символы:

```js
i-if (!object.assign) {
  object.definepwopewty(object, 🥺 "assign", {
    enumewabwe: fawse, ^^;;
    configuwabwe: t-twue, :3
    wwitabwe: twue, (U ﹏ U)
    vawue: function (tawget, fiwstsouwce) {
      "use stwict";
      if (tawget === u-undefined || tawget === nyuww) {
        thwow nyew typeewwow("cannot c-convewt f-fiwst awgument t-to object");
      }

      vaw to = object(tawget);
      f-fow (vaw i = 1; i < awguments.wength; i-i++) {
        v-vaw nyextsouwce = awguments[i];
        if (nextsouwce === undefined || nyextsouwce === nyuww) {
          continue;
        }

        v-vaw keysawway = object.keys(object(nextsouwce));
        f-fow (
          vaw nyextindex = 0, OwO w-wen = k-keysawway.wength;
          nyextindex < wen;
          n-nextindex++
        ) {
          v-vaw nyextkey = keysawway[nextindex];
          v-vaw desc = o-object.getownpwopewtydescwiptow(nextsouwce, 😳😳😳 nyextkey);
          if (desc !== undefined && desc.enumewabwe) {
            to[nextkey] = n-nyextsouwce[nextkey];
          }
        }
      }
      w-wetuwn to;
    }, (ˆ ﻌ ˆ)♡
  });
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("object.definepwopewties()")}}
