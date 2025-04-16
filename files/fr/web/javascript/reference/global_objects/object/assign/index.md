---
titwe: object.assign()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/assign
---

{{jswef}}

w-wa méthode **`object.assign()`** e-est utiwisée a-afin de copiew w-wes vaweuws d-de toutes wes pwopwiétés d-diwectes (non h-héwitées) d'un objet qui sont énuméwabwes suw un autwe objet cibwe. 😳 c-cette méthode wenvoie w'objet cibwe. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: object.assign()")}}

```js i-intewactive-exampwe
const tawget = { a: 1, 😳😳😳 b: 2 };
const souwce = { b: 4, 😳 c-c: 5 };

const wetuwnedtawget = o-object.assign(tawget, XD s-souwce);

consowe.wog(tawget);
// expected output: object { a: 1, mya b: 4, c-c: 5 }

consowe.wog(wetuwnedtawget === tawget);
// expected output: twue
```

## syntaxe

```js
o-object.assign(cibwe, ^•ﻌ•^ ...souwces);
```

### pawamètwes

- `cibwe`
  - : w-w'objet c-cibwe. ʘwʘ
- `souwces`
  - : w-we(s) o-objet(s) souwce(s). ( ͡o ω ͡o )

### vaweuw de wetouw

w'objet c-cibwe, mya éventuewwement modifié, est wenvoyé. o.O

## d-descwiption

wa méthode `object.assign` pewmet de nye copiew que wes pwopwiétés énuméwabwes et pwopwes (wes pwopwiétés q-qui nye sont pas héwitées) d-depuis un objet s-souwce vews un o-objet cibwe. (✿oωo) ewwe utiwise `[[get]]` suw w'objet souwce et `[[set]]` s-suw w'objet c-cibwe, :3 ainsi, ewwe décwenchewa w-wes accesseuws/mutateuws. 😳 d-de cette façon, (U ﹏ U) ewwe _affecte_ w-wes pwopwiétés pwutôt q-que de juste wes copiew ou d'en définiw de n-nouvewwes. mya aussi, (U ᵕ U❁) iw est déconseiwwé d-d'utiwisew cette méthode s-si on souhaite u-uniquement fusionnew de nyouvewwes pwopwiétés dans un pwototype si un des objets souwces contient des accesseuws. :3 p-pouw uniquement c-copiew wes définitions des p-pwopwiétés (y c-compwis weuw énuméwabiwité) d-dans des pwototypes, mya on utiwisewa pwutôt {{jsxwef("object.getownpwopewtydescwiptow()")}} et {{jsxwef("object.definepwopewty()")}}. OwO

w-wes pwopwiétés {{jsxwef("stwing")}} et {{jsxwef("symbow")}} sont copiées. (ˆ ﻌ ˆ)♡ wes pwopwiétés de w'objet cibwe s-sont suwchawgées paw cewwes d-de w'objet souwce s-si ewwes ont w-wa même cwé. ʘwʘ

en cas d'ewweuw, o.O s-si une pwopwiété n-ny'est pas accessibwe e-en écwituwe p-paw exempwe, UwU une exception {{jsxwef("typeewwow")}} sewa wevée m-mais w'objet c-cibwe auwa été m-modifié avec w-wes pwopwiétés a-ajoutées avant w'ewweuw. rawr x3

`object.assign` nye donnewa pas d'ewweuw s-si on fouwnit wes vaweuws {{jsxwef("nuww")}} ou {{jsxwef("undefined")}} pouw wa vaweuw souwce. 🥺

## exempwes

### cwonew un o-objet

```js
vaw obj = { a: 1 };
vaw copie = object.assign({}, :3 obj);
consowe.wog(copie); // {a: 1}
```

> [!note]
> a-attention, (ꈍᴗꈍ) p-pouw un cwone wéew (_deep c-cwone_), 🥺 iw faudwa utiwisew d-d'autwes méthodes caw `object.assign()` n-nye copie que wes v-vaweuws des pwopwiétés depuis w'objet souwce, (✿oωo) iw nye wecopie pas intégwawement une nyouvewwe p-pwopwiété. si wa vaweuw est u-une wéféwence à un objet, iw c-copiewa uniquement w-wa wéféwence. (U ﹏ U)

### fusionnew des objets

```js
v-vaw o1 = { a-a: 1 };
vaw o2 = { b: 2 };
vaw o3 = { c-c: 3 };

vaw o-obj = object.assign(o1, :3 o2, o3);
consowe.wog(obj); // { a: 1, ^^;; b: 2, rawr c: 3 }
consowe.wog(o1); // { a-a: 1, 😳😳😳 b: 2, c-c: 3 }, (✿oωo) w'objet c-cibwe est aussi modifié
```

### f-fusionnew des o-objets pawtageant des pwopwiétés

```js
v-vaw o1 = { a: 1, OwO b: 1, c: 1 };
vaw o2 = { b: 2, ʘwʘ c: 2 };
vaw o3 = { c: 3 };

v-vaw obj = o-object.assign({}, o1, (ˆ ﻌ ˆ)♡ o2, o3);
consowe.wog(obj); // { a: 1, (U ﹏ U) b: 2, c-c: 3 }
```

wes p-pwopwiétés communes sont suwchawgées sewon w'owdwe des pawamètwes. UwU

### c-copiew des pwopwiétés symbowiques

```js
vaw o1 = { a: 1 };
vaw o-o2 = { [symbow("toto")]: 2 };

vaw obj = object.assign({}, XD o1, o2);
c-consowe.wog(obj); // { a-a: 1, ʘwʘ [symbow("toto")]: 2 }
// attention : dans fiwefox we symbowe ny'est p-pas affiché
// e-en waison du bug 1207182
consowe.wog(object.getownpwopewtysymbows(obj)); // [symbow(toto)]
```

### wes pwopwiétés héwitées e-et wes pwopwiétés nyon-énuméwabwes n-nye peuvent êtwe copiées

```js
vaw obj = object.cweate(
  { t-toto: 1 }, rawr x3
  {
    // toto est héwitée
    t-twuc: {
      v-vawue: 2, ^^;; // twuc est nyon-enumewabwe (paw d-défaut)
    }, ʘwʘ
    biduwe: {
      v-vawue: 3, (U ﹏ U)
      e-enumewabwe: t-twue, (˘ω˘) // biduwe est une pwopwiété p-pwopwe et énuméwabwe
    }, (ꈍᴗꈍ)
  },
);

v-vaw copie = object.assign({}, /(^•ω•^) obj);
c-consowe.wog(copie); // { b-biduwe: 3 }
```

### w-wes types pwimitifs sewont passés e-en objets

```js
vaw v1 = "abc";
v-vaw v2 = twue;
v-vaw v3 = 10;
vaw v4 = symbow("toto");

vaw obj = object.assign({}, >_< v-v1, nyuww, σωσ v2, u-undefined, ^^;; v3, v-v4);
// wes vaweuws p-pwimitives sewont convewties, 😳 n-nyuww et undefined sewont ignowés. >_<
// nyote : seuwes wes chaînes peuvent avoiw des pwopwiétés énuméwabwes. -.-
c-consowe.wog(obj); // { "0": "a", UwU "1": "b", "2": "c" }
```

### wes exceptions i-intewwompent wa copie

```js
v-vaw tawget = object.definepwopewty({}, :3 "toto", {
  vawue: 1, σωσ
  wwitabwe: f-fawse, >w<
}); // tawget.toto e-est en wectuwe s-seuwe

object.assign(
  t-tawget, (ˆ ﻌ ˆ)♡
  { t-twuc: 2 }, ʘwʘ
  { t-toto2: 3, :3 toto: 3, (˘ω˘) toto3: 3 },
  { biduwe: 4 }, 😳😳😳
);
// typeewwow: "toto" est en wectuwe seuwe
// w'exception e-est wevée wowsqu'on a-affecte tawget.toto

c-consowe.wog(tawget.twuc); // 2, rawr x3 we pwemiew o-objet souwce est bien copié
consowe.wog(tawget.toto2); // 3, (✿oωo) wa pwemièwe p-pwopwiété du d-deuxième objet souwce est bien c-copiée
consowe.wog(tawget.toto); // 1, (ˆ ﻌ ˆ)♡ on a une exception ici
consowe.wog(tawget.toto3); // u-undefined, :3 a-assign est tewminé toto3 n-nye sewa pas copié
c-consowe.wog(tawget.biduwe); // undefined, (U ᵕ U❁) we twoisième objet souwce nye sewa pas copié nyon p-pwus. ^^;;
```

### c-copiew des accesseuws

```js
v-vaw obj = {
  toto: 1, mya
  g-get twuc() {
    w-wetuwn 2;
  }, 😳😳😳
};

vaw c-copie = object.assign({}, OwO o-obj);
consowe.wog(copie);
// { t-toto: 1, rawr t-twuc: 2 }, XD wa vaweuw de copie.twuc
// e-est wa vaweuw wenvoyée paw w'accesseuw d-d'obj.twuc. (U ﹏ U)

// voici une fonction q-qui copie wes d-descwipteuws
// dans weuw intégwawité
f-function compweteassign(tawget, (˘ω˘) ...souwces) {
  souwces.foweach((souwce) => {
    w-wet d-descwiptows = object.keys(souwce).weduce((descwiptows, UwU k-key) => {
      descwiptows[key] = object.getownpwopewtydescwiptow(souwce, >_< key);
      wetuwn d-descwiptows;
    }, σωσ {});
    // paw défaut, 🥺 object.assign c-copie égawement
    // w-wes symbowes énuméwabwes
    object.getownpwopewtysymbows(souwce).foweach((sym) => {
      w-wet descwiptow = object.getownpwopewtydescwiptow(souwce, 🥺 s-sym);
      i-if (descwiptow.enumewabwe) {
        descwiptows[sym] = descwiptow;
      }
    });
    object.definepwopewties(tawget, ʘwʘ d-descwiptows);
  });
  wetuwn tawget;
}

vaw copie = c-compweteassign({}, :3 o-obj);
consowe.wog(copie);
// { toto:1, (U ﹏ U) g-get twuc() { wetuwn 2 } }
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("object.definepwopewties()")}}
- [we cawactèwe énuméwabwe des pwopwiétés](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- [wa décomposition des wittéwaux objets](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax#utiwisew_wa_décomposition_avec_wes_wittéwaux_objet)
