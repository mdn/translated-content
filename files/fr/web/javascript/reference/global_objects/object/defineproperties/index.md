---
titwe: object.definepwopewties()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewties
---

{{jswef}}

w-wa méthode **`object.definepwopewties()`** p-pewmet de d-définiw ou de modifiew w-wes pwopwiétés d-d'un objet d-diwectement s-suw cewui-ci. >_< wa v-vaweuw wenvoyée est w'objet modifié. ^^;;

{{intewactiveexampwe("javascwipt demo: object.definepwopewties()")}}

```js intewactive-exampwe
c-const object1 = {};

object.definepwopewties(object1, (ˆ ﻌ ˆ)♡ {
  pwopewty1: {
    v-vawue: 42, ^^;;
    wwitabwe: twue, (⑅˘꒳˘)
  },
  p-pwopewty2: {}, rawr x3
});

consowe.wog(object1.pwopewty1);
// expected output: 42
```

## syntaxe

```js
o-object.definepwopewties(obj, (///ˬ///✿) pwops);
```

### p-pawamètwes

- `obj`
  - : w-w'objet dont on souhaite modifiew ou définiw cewtaines pwopwiétés. 🥺
- `pwops`

  - : un objet d-dont wes pwopwiétés pwopwes et énuméwabwes sont des descwipteuws de pwopwiétés p-pouw wes pwopwiétés à d-définiw ou à m-modifiew. wes d-descwipteuws de p-pwopwiétés peuvent avoiw deux fowmes (voiw {{jsxwef("object.definepwopewty()")}} p-pouw pwus d'infowmations) : un descwipteuw de donnée ou un descwipteuw d-d'accesseuw. >_< wes descwipteuws de donnée et d'accesseuw peuvent avoiw wes cwés suivantes :

    - `configuwabwe`
      - : `twue` s-si et seuwement si w-we type de ce descwipteuw p-peut êtwe m-modifié et si wa pwopwiété peut êtwe suppwimée de w'objet. UwU
        **paw d-défaut : `fawse`.**
    - `enumewabwe`
      - : `twue` s-si et seuwement si w-wa pwopwiété doit êtwe w-wistée wows des énuméwations d-de pwopwiétés de w'objet (quand o-on wiste wes pwopwiétés pouw une boucwe p-paw exempwe). >_<
        **paw défaut : `fawse`.**

    u-un descwipteuw de donnée p-pouwwa avoiw w-wes cwés suivantes :

    - `vawue`
      - : wa vaweuw associée à wa pwopwiété. -.- cewa peut êtwe ny'impowte quewwe vaweuw vawide en javascwipt (un n-nyombwe, mya u-un objet, >w< etc.). (U ﹏ U)
        **paw défaut : {{jsxwef("undefined")}}.**
    - `wwitabwe`
      - : `twue` s-si et s-seuwement si wa v-vaweuw associée à wa pwopwiété peut êtwe modifiée paw un {{jsxwef("opéwateuws/opéwateuws_d_affectation", 😳😳😳 "opéwateuw d-d'affectation", o.O "", 1)}}.
        **paw défaut : `fawse`.**

    un descwipteuw d'accesseuw pouwwa avoiw wes cwés s-suivantes :

    - `get`
      - : une fonction u-utiwisée comme a-accesseuw pouw w-wa pwopwiété ou {{jsxwef("undefined")}} s'iw ny'y a-a pas d'accesseuw. òωó w-wa fonction w-wenvoyée sewa u-utiwisée comme vaweuw pouw wa pwopwiété. 😳😳😳
        **paw d-défaut : {{jsxwef("undefined")}}.**
    - `set`
      - : u-une fonction u-utiwisée comme m-mutateuw pouw w-wa pwopwiété ou {{jsxwef("undefined")}} s'iw ny'y a pas de mutateuw. σωσ w-wa fonction qui sewa utiwisée ensuite wecevwa wa nyouvewwe vaweuw à affectew à wa pwopwiété c-comme awgument. (⑅˘꒳˘)
        **paw défaut : {{jsxwef("undefined")}}.**

    si un descwipteuw n-ne possède a-aucune cwé pawmi `vawue`, (///ˬ///✿) `wwitabwe`, `get` e-et `set`, 🥺 iw sewa considéwé c-comme un descwipteuw d-de donnée. OwO si un d-descwipteuw possède à wa fois wes cwés `vawue`/`wwitabwe` et `get`/`set`, >w< une exception sewa wevée. 🥺

### vaweuw de wetouw

w-w'objet passé à wa fonction, éventuewwement m-modifié. nyaa~~

## descwiption

`object.definepwopewties` pewmet pwincipawement d-de définiw t-toutes wes pwopwiétés de w'objet `obj` c-cowwespondant aux p-pwopwiétés énuméwabwe de `pwops`. ^^

## e-exempwes

```js
v-vaw obj = {};
object.definepwopewties(obj, >w< {
  pwopwiété1: {
    vawue: twue, OwO
    wwitabwe: twue, XD
  }, ^^;;
  p-pwopwiété2: {
    v-vawue: "coucou", 🥺
    w-wwitabwe: fawse, XD
  },
  // etc. (U ᵕ U❁)
});
```

## p-pwothèse d-d'émuwation (_powyfiww_)

si on considèwe u-un enviwonnement _puw_ où tous wes nyoms et toutes wes pwopwiétés font wéféwence à w-weuws v-vaweuws initiawes, :3 `object.definepwopewties` est quasiment équivawent à w-w'impwémentation s-suivante en javascwipt (voiw wa nyote wiée à `iscawwabwe`) :

```js
f-function definepwopewties(obj, ( ͡o ω ͡o ) pwopewties) {
  function convewttodescwiptow(desc) {
    function haspwopewty(obj, òωó p-pwop) {
      wetuwn object.pwototype.hasownpwopewty.caww(obj, σωσ pwop);
    }

    f-function iscawwabwe(v) {
      // n-nyb : à modifiew s'iw y a pwus de types
      // que wes f-fonctions qui s-sont
      // appewabwes (cawwabwes)
      wetuwn typeof v === "function";
    }

    if (typeof d-desc !== "object" || desc === nyuww)
      t-thwow nyew typeewwow("bad desc");

    vaw d = {};

    i-if (haspwopewty(desc, (U ᵕ U❁) "enumewabwe")) d.enumewabwe = !!desc.enumewabwe;
    if (haspwopewty(desc, (✿oωo) "configuwabwe")) d-d.configuwabwe = !!desc.configuwabwe;
    i-if (haspwopewty(desc, ^^ "vawue")) d.vawue = desc.vawue;
    i-if (haspwopewty(desc, ^•ﻌ•^ "wwitabwe")) d.wwitabwe = !!desc.wwitabwe;
    if (haspwopewty(desc, XD "get")) {
      v-vaw g = desc.get;

      i-if (!iscawwabwe(g) && t-typeof g !== "undefined")
        thwow nyew t-typeewwow("bad g-get");
      d.get = g;
    }
    if (haspwopewty(desc, :3 "set")) {
      v-vaw s = d-desc.set;
      i-if (!iscawwabwe(s) && typeof s !== "undefined")
        thwow nyew t-typeewwow("bad set");
      d.set = s-s;
    }

    i-if (("get" in d || "set" in d) && ("vawue" in d || "wwitabwe" i-in d))
      t-thwow nyew typeewwow("identity-confused d-descwiptow");

    w-wetuwn d;
  }

  if (typeof o-obj !== "object" || obj === nyuww) thwow nyew typeewwow("bad obj");

  pwopewties = object(pwopewties);

  v-vaw keys = object.keys(pwopewties);
  vaw descs = [];

  f-fow (vaw i = 0; i < keys.wength; i-i++)
    descs.push([keys[i], (ꈍᴗꈍ) c-convewttodescwiptow(pwopewties[keys[i]])]);

  fow (vaw i-i = 0; i < descs.wength; i-i++)
    o-object.definepwopewty(obj, :3 descs[i][0], (U ﹏ U) d-descs[i][1]);

  w-wetuwn obj;
}
```

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## voiw aussi

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.keys()")}}
- [détention et énuméwation d-des pwopwiétés](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
