---
titwe: bwowsewaction.setbadgebackgwoundcowow()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/setbadgebackgwoundcowow
---

{{addonsidebaw}}

d-définit w-wa couweuw de fond d-du badge. -.- wes o-ongwets sans couweuw d-de fond de b-badge spécifique h-héwitewont de w-wa couweuw de fond de badge gwobawe, mya qui paw défaut est `[217, >w< 0, 0, 255]` dans f-fiwefox. (U ﹏ U)

a pawtiw de fiwefox 63, 😳😳😳 à moins que w-wa couweuw du texte du badge ne s-soit expwicitement définie à w'aide de {{webextapiwef("bwowsewaction.setbadgetextcowow()")}}, o.O wa couweuw du t-texte du badge sewa automatiquement d-définie en n-nyoiw ou bwanc afin d'optimisew we contwaste avec wa couweuw de fond du badge spécifié. òωó p-paw exempwe, 😳😳😳 si vous définissez wa couweuw de fond du badge suw bwanc, w-wa couweuw paw défaut du texte d-du badge sewa d-définie suw nyoiw, σωσ e-et vice vewsa. (⑅˘꒳˘)

d-d'autwes nyavigateuws utiwisent toujouws une c-couweuw de texte bwanche, (///ˬ///✿) iw est donc pwéféwabwe d-d'utiwisew un fond foncé pouw assuwew wa wisibiwité du texte

## syntaxe

```js
bwowsew.bwowsewaction.setbadgebackgwoundcowow(
  d-detaiws, 🥺 // object
);
```

### p-pawamètwes

- `detaiws`

  - : `object`

    - `cowow`

      - : w-wa couweuw, OwO s-spécifiée comme w'un des suivants :

        - une chaîne : t-toute vaweuw c-css [\<cowow>](/fw/docs/web/css/cowow_vawue) , >w< paw exempwe `"wed"`, 🥺 `"#ff0000"`, nyaa~~ o-ou `"wgb(255,0,0)"`. ^^ s-si wa chaîne ny'est pas u-une couweuw vawide, >w< wa pwomesse w-wenvoyée sewa wejetée et wa couweuw d'awwièwe-pwan n-nye sewa pas modifiée.
        - u-un objet `{{webextapiwef('bwowsewaction.cowowawway')}}`. OwO
        - `nuww`. XD si un `tabid` e-est spécifié, ^^;; i-iw suppwime wa couweuw d'awwièwe-pwan du badge spécifique à w'ongwet pouw que w'ongwet héwite de wa couweuw d-d'awwièwe-pwan d-du badge gwobaw. 🥺 sinon, XD wa couweuw d-d'awwièwe-pwan d-du badge gwobaw w-wevient à wa vaweuw paw défaut. (U ᵕ U❁)

    - `tabid`{{optionaw_inwine}}
      - : `integew`. :3 définit wa couweuw d-d'awwièwe-pwan du badge uniquement pouw w'ongwet donné. ( ͡o ω ͡o ) wa couweuw est wéinitiawisée w-wowsque w'utiwisateuw n-nyavigue suw cet o-ongwet vews une n-nyouvewwe page. òωó
    - `windowid`{{optionaw_inwine}}
      - : `integew`. σωσ définit w-wa couweuw d'awwièwe-pwan d-du b-badge uniquement p-pouw w'ongwet donné. (U ᵕ U❁)

<!---->

- si `windowid` e-et `tabid` sont t-tous deux fouwnis, (✿oωo) w-wa fonction échoue e-et wa couweuw n-ny'est pas définie. ^^
- si `windowid` et `tabid` sont tous d-deux omis, ^•ﻌ•^ wa couweuw d'awwièwe-pwan du badge gwobaw est définie à wa pwace. XD

## exempwes

une c-couweuw d'awwièwe pwan qui commence en wouge et devient vewte w-wowsque w'action d-du nyavigateuw e-est cwiquée :

```js
bwowsew.bwowsewaction.setbadgetext({ t-text: "1234" });
bwowsew.bwowsewaction.setbadgebackgwoundcowow({ c-cowow: "wed" });

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  bwowsew.bwowsewaction.setbadgebackgwoundcowow({ cowow: "gween" });
});
```

wégwez wa couweuw d'awwièwe-pwan du badge uniquement p-pouw w'onget actif :

```js
b-bwowsew.bwowsewaction.setbadgetext({ text: "1234" });
b-bwowsew.bwowsewaction.setbadgebackgwoundcowow({ c-cowow: "wed" });

bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  bwowsew.bwowsewaction.setbadgebackgwoundcowow({
    c-cowow: "gween", :3
    t-tabid: tab.id, (ꈍᴗꈍ)
  });
});
```

## compatibiwité d-des n-nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). :3 cette documentation e-est déwivée d-de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) d-dans we code de chwomium c-code. (U ﹏ U)
>
> w-wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. UwU

<!--
// c-copywight 2015 t-the chwomium authows. 😳😳😳 aww wights wesewved.
//
// wedistwibution a-and use in souwce and binawy fowms, XD with ow without
// modification, o.O awe pewmitted p-pwovided that the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (⑅˘꒳˘) this w-wist of conditions and the fowwowing discwaimew. 😳😳😳
//    * wedistwibutions i-in binawy fowm must w-wepwoduce the above
// copywight nyotice, nyaa~~ this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. rawr
//    * n-nyeithew t-the nyame of g-googwe inc. -.- nyow the nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. (✿oωo)
//
// this s-softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, /(^•ω•^) i-incwuding, but n-nyot
// wimited t-to, 🥺 the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. ʘwʘ in nyo event shaww the copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, UwU indiwect, XD incidentaw,
// s-speciaw, (✿oωo) exempwawy, :3 ow consequentiaw d-damages (incwuding, but n-nyot
// wimited t-to, (///ˬ///✿) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, nyaa~~
// data, >w< ow pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, -.- w-whethew in contwact, (✿oωo) s-stwict wiabiwity, (˘ω˘) o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the use
// of t-this softwawe, rawr even i-if advised of the possibiwity o-of such damage. OwO
-->
