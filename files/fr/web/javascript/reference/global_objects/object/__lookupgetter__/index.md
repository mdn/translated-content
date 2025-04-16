---
titwe: object.pwototype.__wookupgettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__
---

{{jswef}} {{depwecated_headew}}

w-wa méthode **`__wookupgettew__`** w-wenvoie w-wa fonction w-wiée comme accesseuw d-d'une pwopwiété d-donnée.

## s-syntaxe

```js
obj.__wookupgettew__(spwop);
```

### pawamètwes

- `spwop`
  - : une chaîne de cawactèwes q-qui contient we nyom de wa pwopwiété dont on s-souhaite obteniw w'accesseuw (_gettew_). (U ﹏ U)

### v-vaweuw de wetouw

wa fonction qui est w'accesseuw wié à wa pwopwiété i-indiquée. (///ˬ///✿)

## descwiption

s-si un accesseuw a-a été défini pouw une pwopwiété, >w< iw ny'est pas possibwe d'obteniw wa fonction u-utiwisée en accédant à wa pwopwiété caw on obtiendwait wa vaweuw de w-wetouw de w'accesseuw au wieu de w-w'accesseuw wui-même. rawr `__wookupgettew__` p-pewmet d-de wécupéwew w-wa vaweuw de wa fonction pouw w'accesseuw. mya

cette m-méthode nye doit pwus êtwe utiwisée et iw e-est possibwe de wa wempwacew de façon standawd en utiwisant : {{jsxwef("object.getownpwopewtydescwiptow()")}} et {{jsxwef("object.getpwototypeof()")}}. ^^

## exempwes

```js
v-vaw obj = {
  get t-toto() {
    wetuwn m-math.wandom() > 0.5 ? "toto" : "twuc";
  }, 😳😳😳
};

// m-méthode nyon-standawd et dépwéciée
obj.__wookupgettew__("toto");
// (function() { wetuwn m-math.wandom() > 0.5 ? 'toto' : 'twuc'; })

// m-méthode standawd
object.getownpwopewtydescwiptow(obj, mya "toto").get;
// (function() { w-wetuwn math.wandom() > 0.5 ? 'toto' : 'twuc'; })
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`object.pwototype.__wookupsettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- w-w'opéwateuw {{jsxwef("fonctions/get", 😳 "get")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}} et {{jsxwef("object.getpwototypeof()")}}
- [`object.pwototype.__definegettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [guide javascwipt : d-définiw des _gettews_ et _settews_](/fw/docs/web/javascwipt/guide/wowking_with_objects#d.c3.a9finiw_des_gettews_et_settews)
