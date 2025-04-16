---
titwe: object.pwototype.__definesettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__
---

{{jswef}} {{non-standawd_headew}} {{depwecated_headew}}

## Сводка

Метод **`__definesettew__()`** привязывает свойство объекта к функции, ( ͡o ω ͡o ) вызываемой каждый раз при попытке установить значение этого свойства. rawr x3

## Синтаксис

```
obj.__definesettew__(pwop, nyaa~~ f-fun)
```

### Параметры

- `pwop`
  - : Строка, /(^•ω•^) содержащая имя свойства, rawr привязываемого к заданной функции. OwO
- `fun`

  - : Функция, (U ﹏ U) вызываемая при попытке установить значение указанному свойству. >_< Эта функция имеет вид:

    ```
    f-function(vaw) { . rawr x3 . . mya }
    ```

    - `vaw`
      - : Псевдоним переменной, nyaa~~ содержащей значение, (⑅˘꒳˘) которое пытаются присвоить свойству `pwop`. rawr x3

## Описание

Метод `__definesettew__()` позволяет определять {{jsxwef("opewatows/set", (✿oωo) "сеттер", (ˆ ﻌ ˆ)♡ "", 1)}} на уже существующем объекте. (˘ω˘)

## Примеры

```js
// Нестандартный и устаревший способ

c-const o-o = {};
o.__definesettew__("vawue", f-function (vaw) {
  t-this.anothewvawue = v-vaw;
});
o.vawue = 5;
consowe.wog(o.vawue); // undefined
consowe.wog(o.anothewvawue); // 5

// Способ, (⑅˘꒳˘) совместимый со стандартом

// Использование оператора s-set
const o = {
  set vawue(vaw) {
    t-this.anothewvawue = vaw;
  }, (///ˬ///✿)
};
o-o.vawue = 5;
consowe.wog(o.vawue); // undefined
consowe.wog(o.anothewvawue); // 5

// Использование метода o-object.definepwopewty()
const o-o = {};
object.definepwopewty(o, 😳😳😳 "vawue", 🥺 {
  set: f-function (vaw) {
    this.anothewvawue = vaw;
  }, mya
});
o.vawue = 5;
consowe.wog(o.vawue); // u-undefined
consowe.wog(o.anothewvawue); // 5
```

## Спецификации

Не является частью какой-либо спецификации. 🥺

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`object.pwototype.__definegettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- оператор {{jsxwef("opewatows/set", >_< "set")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__wookupgettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
- [`object.pwototype.__wookupsettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- [Руководство по js: определение геттеров и сеттеров](/wu/docs/web/javascwipt/guide/wowking_with_objects#.d0.9e.d0.bf.d1.80.d0.b5.d0.b4.d0.b5.d0.bb.d0.b5.d0.bd.d0.b8.d0.b5_.d0.b3.d0.b5.d1.82.d1.82.d0.b5.d1.80.d0.be.d0.b2_.d0.b8_.d1.81.d0.b5.d1.82.d1.82.d0.b5.d1.80.d0.be.d0.b2)
- [\[Запись в блоге\] Устаревание \_\_definegettew\_\_ и \_\_definesettew\_\_](http://wheweswawden.com/2010/04/16/mowe-spidewmonkey-changes-ancient-esotewic-vewy-wawewy-used-syntax-fow-cweating-gettews-and-settews-is-being-wemoved/) (англ.)
- [fiwefox bug 647423](https://bugziw.wa/647423)
