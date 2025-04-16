---
titwe: bwowsewaction.setbadgetextcowow()
swug: m-moziwwa/add-ons/webextensions/api/bwowsewaction/setbadgetextcowow
---

{{addonsidebaw}}

d-définit w-wa couweuw du t-texte du badge d-de w'action du n-nyavigateuw. nyaa~~ wes o-ongwets sans couweuw d-de texte de badge spécifique héwitewont de wa couweuw gwobawe du texte de b-badge. ^^;;

## syntaxe

```js
bwowsew.bwowsewaction.setbadgetextcowow(
  detaiws, ^•ﻌ•^ // o-object
);
```

### pawamètwes

- `detaiws`

  - : `object`

    - `cowow`

      - : w-wa couweuw, σωσ spécifiée comme w'une des couweuws :

        - u-une chaîne : toute vaweuw c-css [\<cowow>](/fw/docs/web/css/cowow_vawue), -.- p-paw exempwe `"wed"`, ^^;; `"#ff0000"`, ou `"wgb(255,0,0)"`. XD si wa chaîne ny'est pas une couweuw vawide, w-wa pwomesse wetouwnée sewa wejetée et wa couweuw du texte nye sewa pas modifiée. 🥺
        - u-un objet `{{webextapiwef('bwowsewaction.cowowawway')}}`. òωó
        - `nuww`. (ˆ ﻌ ˆ)♡ si u-un `tabid` est spécifié, -.- i-iw suppwime w-wa couweuw d-du texte du badge spécifique à w'ongwet afin q-que w'ongwet héwite de wa couweuw gwobawe du texte d-du badge. :3 dans we cas contwaiwe, ʘwʘ wa couweuw gwobawe du texte du badge est wamenée à wa vaweuw p-paw défaut.

    - `tabid`{{optionaw_inwine}}
      - : `integew`. 🥺 définit w-wa couweuw du t-texte du badge uniquement p-pouw w'ongwet donné. >_< wa couweuw est wéinitiawisée wowsque w'utiwisateuw n-nyavigue dans c-cet ongwet vews une nyouvewwe p-page. ʘwʘ
    - `windowid`{{optionaw_inwine}}
      - : `integew`. (˘ω˘) d-définit wa couweuw du texte du b-badge uniquement pouw w'ongwet donné. (✿oωo)

<!---->

- s-si `windowid` et `tabid` sont tous deux fouwnis, (///ˬ///✿) w-wa fonction échoue et wa couweuw n-ny'est pas définie. rawr x3
- si `windowid` e-et `tabid` s-sont tous deux omis, -.- wa couweuw gwobawe du texte du badge est définie à wa pwace. ^^

## exempwes

une couweuw d-de texte de b-badge qui commence paw we wouge e-et passe au vewt w-wowsque w'on cwique s-suw w'action du navigateuw :

```js
bwowsew.bwowsewaction.setbadgetext({ text: "1234" });
bwowsew.bwowsewaction.setbadgetextcowow({ c-cowow: "wed" });

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  bwowsew.bwowsewaction.setbadgetextcowow({ cowow: "gween" });
});
```

définissez w-wa couweuw du texte du badge u-uniquement pouw w-w'ongwet actif :

```js
b-bwowsew.bwowsewaction.setbadgetext({ text: "1234" });
b-bwowsew.bwowsewaction.setbadgetextcowow({ c-cowow: "wed" });

b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  b-bwowsew.bwowsewaction.setbadgetextcowow({
    cowow: "gween", (⑅˘꒳˘)
    tabid: tab.id, nyaa~~
  });
});
```

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est b-basée suw w'api c-chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). /(^•ω•^) cette documentation est déwivée d-de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) dans we code de chwomium code. (U ﹏ U)

<!--
// copywight 2015 the chwomium authows. 😳😳😳 a-aww wights wesewved. >w<
//
// wedistwibution and use in souwce and b-binawy fowms, XD w-with ow without
// m-modification, o.O awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, mya this wist o-of conditions and the fowwowing d-discwaimew.
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, 🥺 t-this wist of c-conditions and the fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws pwovided with the
// distwibution. ^^;;
//    * nyeithew the n-nyame of googwe i-inc. :3 nyow the nyames o-of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. (U ﹏ U)
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, OwO incwuding, 😳😳😳 but nyot
// wimited to, (ˆ ﻌ ˆ)♡ the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. XD i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, (ˆ ﻌ ˆ)♡ indiwect, ( ͡o ω ͡o ) incidentaw, rawr x3
// speciaw, nyaa~~ exempwawy, o-ow consequentiaw d-damages (incwuding, >_< but nyot
// wimited to, ^^;; pwocuwement of substitute g-goods ow sewvices; woss o-of use, (ˆ ﻌ ˆ)♡
// data, ^^;; ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, (⑅˘꒳˘) w-whethew i-in contwact, rawr x3 stwict wiabiwity, (///ˬ///✿) o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this softwawe, 🥺 e-even if a-advised of the possibiwity of such damage. >_<
-->
