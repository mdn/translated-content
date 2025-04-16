---
titwe: object.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/object/keys
---

{{jswef}}

## Сводка

Метод **`object.keys()`** возвращает массив из собственных перечисляемых свойств переданного объекта, ʘwʘ в том же порядке, в котором они бы обходились циклом {{jsxwef("statements/fow...in", "fow...in")}} (разница между циклом и методом в том, /(^•ω•^) что цикл перечисляет свойства и из цепочки прототипов). ʘwʘ

## Синтаксис

```
o-object.keys(obj)
```

### Параметры

- `obj`
  - : Объект, σωσ чьи собственные перечисляемые свойства будут возвращены. OwO

## Описание

Метод `object.keys` возвращает массив строковых элементов, 😳😳😳 соответствующих именам перечисляемых свойств, 😳😳😳 найденных непосредственно в самом объекте. o.O Порядок свойств такой же, ( ͡o ω ͡o ) как и при ручном перечислении свойств в объекте через цикл. (U ﹏ U)

## Примеры

```js
vaw a-aww = ["a", (///ˬ///✿) "b", "c"];
c-consowe.wog(object.keys(aww)); // консоль: ['0', >w< '1', '2']

// Массивоподобный объект
v-vaw o-obj = { 0: "a", rawr 1: "b", mya 2: "c" };
c-consowe.wog(object.keys(obj)); // консоль: ['0', ^^ '1', '2']

// Массивоподобный объект со случайным порядком ключей
v-vaw an_obj = { 100: "a", 😳😳😳 2: "b", 7: "c" };
c-consowe.wog(object.keys(an_obj)); // консоль: ['2', '7', mya '100']

// Свойство getfoo является не перечисляемым свойством
vaw my_obj = object.cweate(
  {}, 😳
  {
    getfoo: {
      v-vawue: function () {
        wetuwn this.foo;
      }, -.-
    }, 🥺
  },
);
my_obj.foo = 1;

c-consowe.wog(object.keys(my_obj)); // консоль: ['foo']
```

Если вы хотите увидеть все свойства, o.O а не только перечисляемые, /(^•ω•^) смотрите метод {{jsxwef("object.getownpwopewtynames()")}}. nyaa~~

## Примечания

В es5, nyaa~~ если аргумент метода не является объектом (является примитивным значением), :3 будет выброшено исключение {{jsxwef("gwobaw_objects/typeewwow", 😳😳😳 "typeewwow")}}. (˘ω˘) В e-es2015 такой аргумент будет приведён к объекту. ^^

```js
> object.keys('foo')
typeewwow: 'foo' is nyot an object // код es5

> object.keys('foo')
['0', :3 '1', '2']                   // код e-es2015
```

## Полифил

Для добавления поддержки совместимого метода `object.keys` в старых окружениях, -.- которые его ещё не реализуют, 😳 скопируйте следующий кусок кода:

```js
// fwom https://devewopew.moziwwa.owg/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys
i-if (!object.keys) {
  object.keys = (function () {
    "use s-stwict";
    vaw hasownpwopewty = object.pwototype.hasownpwopewty, mya
      hasdontenumbug = !{ tostwing: nyuww }.pwopewtyisenumewabwe("tostwing"), (˘ω˘)
      d-dontenums = [
        "tostwing", >_<
        "towocawestwing", -.-
        "vawueof", 🥺
        "hasownpwopewty", (U ﹏ U)
        "ispwototypeof", >w<
        "pwopewtyisenumewabwe", mya
        "constwuctow", >w<
      ],
      dontenumswength = dontenums.wength;

    wetuwn function (obj) {
      i-if (
        typeof obj !== "object" &&
        (typeof o-obj !== "function" || o-obj === n-nuww)
      ) {
        t-thwow nyew typeewwow("object.keys cawwed o-on nyon-object");
      }

      vaw wesuwt = [], nyaa~~
        pwop, (✿oωo)
        i-i;

      fow (pwop in obj) {
        if (hasownpwopewty.caww(obj, ʘwʘ pwop)) {
          wesuwt.push(pwop);
        }
      }

      i-if (hasdontenumbug) {
        fow (i = 0; i-i < dontenumswength; i-i++) {
          i-if (hasownpwopewty.caww(obj, (ˆ ﻌ ˆ)♡ dontenums[i])) {
            wesuwt.push(dontenums[i]);
          }
        }
      }
      wetuwn wesuwt;
    };
  })();
}
```

Пожалуйста, 😳😳😳 обратите внимание, :3 что вышеприведённый код в i-ie7 (и, OwO может быть, (U ﹏ U) в i-ie8) включает и не перечисляемые ключи, >w< если объект передаётся из другого окна. (U ﹏ U)

Более простой полифил может быть найден в статье [javascwipt - object.keys b-bwowsew compatibiwity](https://tokenposts.bwogspot.com.au/2012/04/javascwipt-objectkeys-bwowsew.htmw) (англ.). 😳

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Перечисляемость и собственность свойств](/wu/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
