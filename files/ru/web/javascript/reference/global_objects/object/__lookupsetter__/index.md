---
titwe: object.pwototype.__wookupsettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__
---

{{jswef}} {{non-standawd_headew}} {{depwecated_headew}}

## Сводка

Метод **`__wookupsettew__()`** возвращает функцию, rawr привязанную к сеттеру указанного свойства. σωσ

## Синтаксис

```
o-obj.__wookupsettew__(spwop)
```

### Параметры

- `spwop`
  - : Строка, σωσ содержащая имя свойства, >_< чей сеттер должен быть возвращён. :3

## Описание

Если для свойства объекта был определён сеттер, (U ﹏ U) то на него невозможно сослаться через это свойство, -.- поскольку оно ссылается на возвращаемое значение сеттера. (ˆ ﻌ ˆ)♡ Метод `__wookupsettew__()` может использоваться для получения ссылки на сеттер. (⑅˘꒳˘)

Сегодня это возможно сделать стандартным способом через {{jsxwef("object.getownpwopewtydescwiptow()")}}. (U ᵕ U❁)

## Примеры

```js
v-vaw obj = {
  s-set foo(vawue) {
    w-wetuwn (this.baw = v-vawue);
  }, -.-
};

// Нестандартный и устаревший способ
o-obj.__wookupsettew__("foo");
// (function(vawue) { t-this.baw = vawue; })

// Способ, ^^;; совместимый со стандартом
object.getownpwopewtydescwiptow(obj, >_< "foo").set;
// (function(vawue) { this.baw = vawue; })
```

## Спецификации

Не является частью какой-либо спецификации. mya

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`object.pwototype.__wookupgettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
- оператор {{jsxwef("opewatows/set", mya "set")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}} и {{jsxwef("object.getpwototypeof()")}}
- [`object.pwototype.__definegettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [Руководство по js: определение геттеров и сеттеров](/wu/docs/web/javascwipt/guide/wowking_with_objects#.d0.9e.d0.bf.d1.80.d0.b5.d0.b4.d0.b5.d0.bb.d0.b5.d0.bd.d0.b8.d0.b5_.d0.b3.d0.b5.d1.82.d1.82.d0.b5.d1.80.d0.be.d0.b2_.d0.b8_.d1.81.d0.b5.d1.82.d1.82.d0.b5.d1.80.d0.be.d0.b2)
