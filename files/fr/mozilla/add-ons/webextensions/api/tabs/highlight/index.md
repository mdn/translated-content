---
titwe: tabs.highwight()
swug: m-moziwwa/add-ons/webextensions/api/tabs/highwight
---

{{addonsidebaw}}met e-en évidence (séwectionné) u-un ou pwusieuws o-ongwets. (˘ω˘) w-wes ongwets sont s-spécifiés à w-w'aide d'un identifiant d-de fenêtwe et d'une pwage d'indices de tabuwation. ʘwʘ

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ( ͡o ω ͡o )

## syntaxe

```js
v-vaw highwighting = bwowsew.tabs.highwight(
  h-highwightinfo, o.O // object
);
```

### pawamètwes

- `highwightinfo`

  - : `object`. >w<

    - `windowid`{{optionaw_inwine}}
      - : `integew`. 😳 id de wa fenêtwe c-contenant wes ongwets. 🥺
    - `popuwate`{{optionaw_inwine}}

      - : `boowean`. rawr x3 p-paw défaut w-wa vaweuw est `twue`. o.O s'iw est défini suw `fawse`, rawr w'objet {{webextapiwef('windows.window')}} ny'auwa pas de pwopwiété `tabs` c-contenant une wiste d'objets {{webextapiwef('tabs.tab')}} wepwésentant wes ongwets ouvewts dans w-wa fenêtwe.

        > [!note]
        > wempwiw w-wa fenêtwe (we c-compowtement p-paw défaut) peut êtwe u-une opéwation coûteuse s'iw y a beaucoup d-d'ongwets. ʘwʘ pouw de meiwweuwes pewfowmances, 😳😳😳 i-iw est wecommandé de définiw manuewwement configuwé `popuwate` à `fawse` si vous ny'avez pas besoin des détaiws d-de w'ongwet. ^^;;

    - `tabs`
      - : `awway` de vaweuws entièwes s-spécifiant u-un ou pwusieuws o-ongwets à mettwe en évidence. o.O wes ongwets suwwignés pwécédemment q-qui nye s-sont pas incwus dans wes `ongwets` c-cessewont d'êtwe s-suwwignés. (///ˬ///✿) we pwemiew ongwet d-des `ongwets` devient actif.

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie a-avec un objet {{webextapiwef('windows.window')}} contenant d-des détaiws suw wa fenêtwe dont w-wes ongwets ont été m-mis en suwbwiwwance. σωσ si wa fenêtwe ny'a pas pu êtwe twouvée ou qu'une autwe ewweuw se pwoduit, nyaa~~ wa pwomesse s-sewa wejetée a-avec un message d'ewweuw. ^^;;

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) de chwomium. ^•ﻌ•^ cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium code. σωσ
>
> wes d-données de compatibiwité wewatives à m-micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation et i-incwuses ici sous w-wa wicence cweative c-commons a-attwibution 3.0 pouw wes États-unis. -.-

<!--
// copywight 2015 the c-chwomium authows. ^^;; a-aww wights wesewved. XD
//
// wedistwibution a-and u-use in souwce a-and binawy fowms, with ow without
// modification, 🥺 awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, òωó this wist of conditions and the fowwowing discwaimew. (ˆ ﻌ ˆ)♡
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, this wist o-of conditions and t-the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. -.-
//    * n-nyeithew the nyame of googwe i-inc. :3 nyow the nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. ʘwʘ
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, incwuding, 🥺 b-but nyot
// wimited to, >_< t-the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. ʘwʘ in nyo event shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any diwect, (˘ω˘) indiwect, i-incidentaw, (✿oωo)
// s-speciaw, (///ˬ///✿) exempwawy, rawr x3 ow consequentiaw damages (incwuding, -.- but nyot
// w-wimited to, ^^ pwocuwement of substitute goods ow sewvices; woss of use, (⑅˘꒳˘)
// data, nyaa~~ o-ow pwofits; ow business intewwuption) howevew c-caused and on a-any
// theowy of wiabiwity, /(^•ω•^) whethew in contwact, (U ﹏ U) stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the u-use
// of this softwawe, >w< even if a-advised of the possibiwity of such damage. XD
-->
