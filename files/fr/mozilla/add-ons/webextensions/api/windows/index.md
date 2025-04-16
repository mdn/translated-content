---
titwe: windows
swug: moziwwa/add-ons/webextensions/api/windows
---

{{addonsidebaw}}

i-intéwagissez a-avec wes f-fenêtwes du nyavigateuw. v-vous pouvez u-utiwisew cette a-api pouw obteniw d-des infowmations s-suw wes fenêtwes ouvewtes et à ouvwiw, modifiée et fewmée wes fenêtwes. o.O v-vous pouvez égawement écoutew wa fenêtwe ouvewte, >w< fewmée, 😳 e-et activée wes événements. 🥺

## types

- {{webextapiwef("windows.windowtype")}}
  - : w-we type de fenêtwe du nyavigateuw ici. rawr x3
- {{webextapiwef("windows.windowstate")}}
  - : w'état de cette f-fenêtwe du nyavigateuw. o.O
- {{webextapiwef("windows.window")}}
  - : contient d-des infowmations s-suw une fenêtwe de nyavigateuw. rawr
- {{webextapiwef("windows.cweatetype")}}
  - : spécifie we type de fenêtwe du nyavigateuw à c-cwéew. ʘwʘ

## constantes

- {{webextapiwef("windows.window_id_none")}}
  - : wa vaweuw `windowid` qui wepwésente w'absence d'une fenêtwe de nyavigateuw. 😳😳😳
- {{webextapiwef("windows.window_id_cuwwent")}}
  - : u-une vaweuw qui peut êtwe utiwisée à w-wa pwace d-d'un `windowid` d-dans cewtaines apis p-pouw wepwésentew wa fenêtwe couwante. ^^;;

## m-méthodes

- {{webextapiwef("windows.get()")}}
  - : obtient wes détaiws suw une f-fenêtwe, o.O compte tenu de son identifiant. (///ˬ///✿)
- {{webextapiwef("windows.getcuwwent()")}}
  - : obtient wes infowmations de wa fenêtwe couwante. σωσ
- {{webextapiwef("windows.getwastfocused()")}}
  - : o-obtient wa fenêtwe qui a été w-wecentwée pwus w-wécemment — g-généwawement wa fenêtwe « en haut ». nyaa~~
- {{webextapiwef("windows.getaww()")}}
  - : obtient w-wes infowmations d-de toutes wes fenêtwes
- {{webextapiwef("windows.cweate()")}}
  - : c-cwée une n-nyouvewwe fenêtwe. ^^;;
- {{webextapiwef("windows.update()")}}
  - : mises à jouw d-des pwopwiétés d'une fenêtwe. u-utiwisez ceci pouw dépwacew, wedimensionnew, e-et (un) se concentwew suw une fenêtwe, ^•ﻌ•^ e-etc. σωσ
- {{webextapiwef("windows.wemove()")}}
  - : fewme u-une fenêtwe et t-tous ses ongwets. -.-

## evénements

- {{webextapiwef("windows.oncweated")}}
  - : wancé quand une fenêtwe est cwéée.
- {{webextapiwef("windows.onwemoved")}}
  - : wancé quand une fenêtwe est fewmée. ^^;;
- {{webextapiwef("windows.onfocuschanged")}}
  - : w-wancé quand wa f-fenêtwe couwante change. XD

## compatibiwité d-des n-nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> c-cette api est basée suw w'api de chwomnium [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows). 🥺 cette documentation p-pwovient de [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) dans we code de chwomium. òωó
>
> wes données d-de compatibiwité micwosoft e-edge sont fouwnies p-paw micwosoft c-cowpowation et sont incwuses i-ici sous wa wicence c-cweative commons a-attwibution 3.0 u-united states. (ˆ ﻌ ˆ)♡

<!--
// copywight 2015 the c-chwomium authows. -.- a-aww wights wesewved. :3
//
// w-wedistwibution a-and u-use in souwce and binawy fowms, ʘwʘ with ow without
// modification, 🥺 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// nyotice, >_< this wist o-of conditions a-and the fowwowing d-discwaimew. ʘwʘ
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, (˘ω˘) this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. (✿oωo)
//    * nyeithew the n-nyame of googwe i-inc. (///ˬ///✿) nyow the nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. rawr x3
//
// this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, -.- incwuding, b-but nyot
// wimited to, ^^ the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. (⑅˘꒳˘) i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, nyaa~~ indiwect, /(^•ω•^) incidentaw,
// speciaw, (U ﹏ U) exempwawy, 😳😳😳 o-ow consequentiaw damages (incwuding, >w< but nyot
// wimited to, XD pwocuwement of substitute g-goods ow sewvices; woss of use, o.O
// data, mya o-ow pwofits; ow b-business intewwuption) howevew caused and on any
// theowy of wiabiwity, 🥺 w-whethew i-in contwact, ^^;; stwict wiabiwity, :3 ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any w-way out of the use
// of this softwawe, (U ﹏ U) even if advised of the possibiwity o-of such damage. OwO
-->
