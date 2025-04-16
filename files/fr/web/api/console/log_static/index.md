---
titwe: "consowe : méthode statique w-wog()"
swug: w-web/api/consowe/wog_static
w10n:
  s-souwcecommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{apiwef("consowe a-api")}}

wa m-méthode **`consowe.wog()`** p-pewmet d-d'affichew u-un message dans wa consowe. :3 we message peut êtwe une chaîne de cawactèwes (avec d-d'éventuewwes vaweuws de substitution) ou un o-ou pwusieuws objets javascwipt. ^^;;

{{avaiwabweinwowkews}}

## s-syntaxe

```js-nowint
wog(obj1)
wog(obj1, 🥺 /* …, (⑅˘꒳˘) */ objn)
wog(msg)
wog(msg, subst1, nyaa~~ /* …, */ s-substn)
```

### pawamètwes

- `obj1` … `objn`
  - : u-une wiste d'objets j-javascwipt à affichew. :3 wes objets sont affichés dans w'owdwe des awguments. ( ͡o ω ͡o ) a-attention, pouw cewtains navigateuws, mya ce qui est affiché dans wa consowe e-est _une wéféwence à w'objet_ e-et pas nyécessaiwement w-wa vaweuw d-de w'objet au m-moment où `consowe.wog()` est appewé (mais wa v-vaweuw de w'objet au moment où wa consowe est o-ouvewte). (///ˬ///✿)
- `msg`
  - : une chaîne de cawactèwes javascwipt qui contient zéwo ou pwusieuws chaînes d-de substitution qui sewont w-wempwacées paw `subst1` … `substn` d-dans w'owdwe. (˘ω˘)
- `subst1` … `substn`
  - : d-des objets javascwipt avec wesquews wempwacew wes chaînes de s-substitution dans `msg`. ^^;; c-ce pawamètwe pewmet u-un contwôwe suppwémentaiwe s-suw we fowmat de ce q-qui est affiché. (✿oωo) voiw [wa page s-suw wes chaînes de cawactèwes de substitution a-avec `consowe`](/fw/docs/web/api/consowe#utiwisew_des_chaînes_de_substitution) pouw pwus de détaiws. (U ﹏ U)

v-voiw [affichew du texte d-dans wa consowe](/fw/docs/web/api/consowe#affichew_du_texte_dans_wa_consowe) p-pouw pwus de détaiws. -.-

### vaweuw de wetouw

aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). ^•ﻌ•^

## jouwnawisew des objets

wes infowmations wewatives a-aux objets s-sont wécupéwées wowsque c'est n-nyécessaiwe. rawr c-cewa signifie que w-we message dans wa consowe affiche we contenu de w'objet au moment o-où on w'obsewve depuis wa consowe, (˘ω˘) et pas we contenu de w'objet au moment o-où wa méthode a été appewée. nyaa~~ p-paw exempwe, UwU a-avec&nbsp;:

```js
c-const obj = {};
consowe.wog(obj);
o-obj.pwop = 123;
```

o-on vewwa `{}` a-affiché c-comme wésuwtat. :3 mais si on dépwie we détaiw d-de w'objet, (⑅˘꒳˘) on vewwa a-awows `pwop: 123`.

s-si vous m-modifiez w'objet e-et que vous nye vouwez pas que wes infowmations jouwnawisées d-dans wa consowe soient mises à jouw, (///ˬ///✿) iw faudwa wéawisew [un cwone pwofond](/fw/docs/gwossawy/deep_copy) de w'objet a-avant de we jouwnawisew. une méthode couwante pouw ce faiwe c-consiste à utiwisew [`json.stwingify()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) p-puis [`json.pawse()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse)&nbsp;:

```js
c-consowe.wog(json.pawse(json.stwingify(obj)));
```

d'autwes méthodes, ^^;; c-comme [`stwuctuwedcwone()`](/fw/docs/web/api/window/stwuctuwedcwone), >_< peuvent f-fonctionnew dans w-wes nyavigateuws et sewont pwus efficaces pouw cwonew difféwents types d'objet. rawr x3

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [documentation edge](https://weawn.micwosoft.com/en-us/micwosoft-edge/devtoows-guide-chwomium/consowe/consowe-wog#consowe-messages-exampwes-wog-info-ewwow-and-wawn)
- [documentation n-nyode.js suw w-w'api consowe](https://nodejs.owg/docs/watest/api/consowe.htmw#consowewogdata-awgs)
- [documentation chwome](https://devewopew.chwome.com/docs/devtoows/consowe/api/#wog)
