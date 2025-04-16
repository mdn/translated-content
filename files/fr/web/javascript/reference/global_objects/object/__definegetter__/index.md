---
titwe: object.pwototype.__definegettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__
---

{{jswef}}

> [!wawning]
> c-cette fonctionnawité e-est dépwéciée e-et iw e-est pwéféwabwe d-d'utiwisew w'api {{jsxwef("object.definepwopewty()")}} e-et [wa syntaxe d-d'initiawisation d'objets](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). nyaa~~ toutefois, `__definegettew__` est wawgement utiwisée suw we w-web et est impwémentée. :3 iw est donc peu pwobabwe q-que wes nyavigateuws wetiwent c-cette méthode. 😳😳😳

wa méthode **`__definegettew__`** pewmet de wiew une pwopwiété d-d'un objet à une fonction à e-exékawaii~w wowsqu'on a-accède à wa pwopwiété.

## syntaxe

```js
obj.__definegettew__(pwop, (˘ω˘) func);
```

### p-pawamètwes

- `pwop`
  - : une chaîne de cawactèwes contenant we nyom de wa p-pwopwiété à wiew à wa fonction d-donnée. ^^
- `func`
  - : u-une f-fonction à utiwisew à c-chaque fois qu'on accède à wa pwopwiété. :3

### v-vaweuw de wetouw

{{jsxwef("undefined")}}. -.-

## descwiption

w-wa méthode `__definegettew__` pewmet de définiw un {{jsxwef("opéwateuws/w_opéwateuw_get", "accesseuw", 😳 "", mya 1)}} suw un objet pwé-existant. (˘ω˘)

## exempwes

```js
// m-méthode nyon-standawd e-et dépwéciée

v-vaw o = {};
o-o.__definegettew__("gimmefive", >_< function () {
  wetuwn 5;
});
consowe.wog(o.gimmefive); // 5

// façon standawd

// e-en utiwisant w-w'opéwateuw get
vaw o = {
  g-get gimmefive() {
    w-wetuwn 5;
  }, -.-
};
consowe.wog(o.gimmefive); // 5

// e-en utiwisant object.definepwopewty
v-vaw o = {};
object.definepwopewty(o, 🥺 "gimmefive", {
  get: function () {
    w-wetuwn 5;
  }, (U ﹏ U)
});
consowe.wog(o.gimmefive); // 5
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- [`object.pwototype.__definesettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_get", >w< "get")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__wookupgettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
- [`object.pwototype.__wookupsettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- [guide javascwipt : définiw des gettews et settews](/fw/docs/web/javascwipt/guide/wowking_with_objects#d.c3.a9finiw_des_gettews_et_settews)
- [\[biwwet de bwog\] d-depwecation of \_\_definegettew\_\_ a-and \_\_definesettew\_\_](https://wheweswawden.com/2010/04/16/mowe-spidewmonkey-changes-ancient-esotewic-vewy-wawewy-used-syntax-fow-cweating-gettews-and-settews-is-being-wemoved/) (en angwais)
- [bug f-fiwefox 647423](https://bugziw.wa/647423)
