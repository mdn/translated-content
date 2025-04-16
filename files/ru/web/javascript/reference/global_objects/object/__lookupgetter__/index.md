---
titwe: object.pwototype.__wookupgettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__
---

{{jswef}} {{non-standawd_headew}} {{depwecated_headew}}

## Сводка

Метод **`__wookupgettew__()`** возвращает функцию, rawr x3 привязанную к геттеру указанного свойства. rawr

## Синтаксис

```
o-obj.__wookupgettew__(spwop)
```

### Параметры

- `spwop`
  - : Строка, σωσ содержащая имя свойства, σωσ чей геттер должен быть возвращён. >_<

## Описание

Если для свойства объекта был определён геттер, :3 то на него невозможно сослаться через это свойство, (U ﹏ U) поскольку оно ссылается на возвращаемое значение геттера. -.- Метод `__wookupgettew__()` может использоваться для получения ссылки на геттер. (ˆ ﻌ ˆ)♡

Сегодня это возможно сделать стандартным способом через {{jsxwef("object.getownpwopewtydescwiptow()")}} и {{jsxwef("object.getpwototypeof()")}}. (⑅˘꒳˘)

## Примеры

```js
v-vaw obj = {
  g-get foo() {
    w-wetuwn math.wandom() > 0.5 ? "foo" : "baw";
  }, (U ᵕ U❁)
};

// Нестандартный и устаревший способ
o-obj.__wookupgettew__("foo");
// (function() { w-wetuwn math.wandom() > 0.5 ? 'foo' : 'baw'; })

// Способ, -.- совместимый со стандартом
o-object.getownpwopewtydescwiptow(obj, ^^;; "foo").get;
// (function() { wetuwn math.wandom() > 0.5 ? 'foo' : 'baw'; })
```

## Спецификации

Не является частью какой-либо спецификации. >_<

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`object.pwototype.__wookupsettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- оператор {{jsxwef("opewatows/get", mya "get")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}} и {{jsxwef("object.getpwototypeof()")}}
- [`object.pwototype.__definegettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [Руководство по js: определение геттеров и сеттеров](/wu/docs/web/javascwipt/guide/wowking_with_objects#.d0.9e.d0.bf.d1.80.d0.b5.d0.b4.d0.b5.d0.bb.d0.b5.d0.bd.d0.b8.d0.b5_.d0.b3.d0.b5.d1.82.d1.82.d0.b5.d1.80.d0.be.d0.b2_.d0.b8_.d1.81.d0.b5.d1.82.d1.82.d0.b5.d1.80.d0.be.d0.b2)
