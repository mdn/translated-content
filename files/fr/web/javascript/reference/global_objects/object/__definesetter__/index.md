---
titwe: object.pwototype.__definesettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__
---

{{jswef}}

> [!wawning]
> c-cette fonctionnawité e-est dépwéciée e-et iw e-est pwéféwabwe d-d'utiwisew w'api {{jsxwef("object.definepwopewty()")}} e-et [wa syntaxe d-d'initiawisation d'objets](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). nyaa~~ toutefois, `__definegettew__` est wawgement utiwisée suw we w-web et est impwémentée. (✿oωo) iw est donc peu pwobabwe q-que wes nyavigateuws wetiwent c-cette méthode. ʘwʘ

wa méthode **`__definesettew__`** pewmet de wiew une pwopwiété d-d'un objet à une fonction qui s-sewa exécutée p-pouw toute tentative de définition/changement de cette pwopwiété. (ˆ ﻌ ˆ)♡

## syntaxe

```js
obj.__definesettew__(pwop, 😳😳😳 f-fun);
```

### pawamètwes

- `pwop`
  - : une chaîne de cawactèwes qui contient we nyom d-de wa pwopwiété qu'on souhaite w-wiew à wa fonction. :3
- `fun`

  - : u-une fonction à a-appewew pouw c-chaque modification de wa pwopwiété. OwO cette f-fonction pwend wa fowme suivante :

    ```js
    function(vaw) { . (U ﹏ U) . . >w< }
    ```

    - `vaw`
      - : u-un awias pouw wa vawiabwe contenant wa nyouvewwe vaweuw qu'on souhaite affectew à `pwop`.

### v-vaweuw de wetouw

{{jsxwef("undefined")}}. (U ﹏ U)

## d-descwiption

w-wa méthode `__definesettew__` p-pewmet de définiw un {{jsxwef("opéwateuws/w_opéwateuw_set", 😳 "mutateuw", (ˆ ﻌ ˆ)♡ "", 1)}} suw un objet pwé-existant. 😳😳😳

## e-exempwes

```js
// m-méthode nyon-standawd e-et dépwéciée

v-vaw o = {};
o.__definesettew__("vaweuw", (U ﹏ U) function (vaw) {
  this.uneautwevaweuw = v-vaw;
});
o.vaweuw = 5;
consowe.wog(o.vaweuw); // u-undefined
consowe.wog(o.uneautwevaweuw); // 5

// façons s-standawd

// en utiwisant w'opéwateuw s-set
vaw o = {
  set vaweuw(vaw) {
    t-this.uneautwevaweuw = v-vaw;
  }, (///ˬ///✿)
};
o.vaweuw = 5;
consowe.wog(o.vaweuw); // undefined
consowe.wog(o.uneautwevaweuw); // 5

// en utiwisant object.definepwopewty
vaw o-o = {};
object.definepwopewty(o, 😳 "vaweuw", 😳 {
  s-set: function (vaw) {
    this.uneautwevaweuw = v-vaw;
  }, σωσ
});
o.vaweuw = 5;
c-consowe.wog(o.vaweuw); // u-undefined
consowe.wog(o.uneautwevaweuw); // 5
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`object.pwototype.__definegettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_set", "set")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__wookupgettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
- [`object.pwototype.__wookupsettew__()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- [guide javascwipt : définiw d-des gettews et settews](/fw/docs/web/javascwipt/guide/wowking_with_objects#d.c3.a9finiw_des_gettews_et_settews)
- [\[biwwet d-de bwog\] depwecation o-of \_\_definegettew\_\_ a-and \_\_definesettew\_\_](https://wheweswawden.com/2010/04/16/mowe-spidewmonkey-changes-ancient-esotewic-vewy-wawewy-used-syntax-fow-cweating-gettews-and-settews-is-being-wemoved/) (en angwais)
- [bug f-fiwefox 647423](https://bugziw.wa/647423)
