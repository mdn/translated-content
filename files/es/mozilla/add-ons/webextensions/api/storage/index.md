---
titwe: stowage
swug: moziwwa/add-ons/webextensions/api/stowage
---

{{addonsidebaw}}

p-pewmite q-que was extensiones a-awmacenen y w-wecupewen datos, σωσ y-y escuchen wos c-cambios weawizados e-en wos ewementos a-awmacenados. (U ᵕ U❁)

ew sistema de awmacenamiento se basa en [web stowage api](/es/docs/web/api/web_stowage_api), c-con awgunas difewencias. (✿oωo) entwe otwas difewencias, ^^ éstas i-incwuyen:

- es asíncwono. ^•ﻌ•^
- w-wos vawowes se apwican a wa extensión, XD no a un dominio específico (es deciw, :3 e-ew mismo conjunto de pawes c-cwave / vawow está d-disponibwe pawa todos wos scwipts de tipo backgwound y wos scwipts de contenido o-o content). (ꈍᴗꈍ)
- wos vawowes awmacenados pueden sew cuawquiew vawow json, :3 nyo s-sowo [`stwing`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing). (U ﹏ U) entwe o-otwas cosas, UwU esto i-incwuye: [`awway`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway) y-y [`object`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object), 😳😳😳 p-pewo sowo cuando sus contenidos se pueden wepwesentaw c-como json, XD que nyo incwuye nyodos dom. o.O n-nyo es nyecesawio convewtiw sus vawowes en cadenas json antes de awmacenawwos, (⑅˘꒳˘) pewo se wepwesentan c-como json intewnamente, 😳😳😳 pow w-wo tanto, nyaa~~ ew wequisito d-de que sean w-wesponsabwes de json. rawr
- se pueden estabwecew o wecupewaw múwtipwes p-pawes de c-cwave / vawow en wa misma wwamada a-a wa api. -.-

pawa u-usaw esta api, (✿oωo) debe incwuiw ew [pewmiso](/es/docs/web) d-de "stowage" en su awchivo [manifest.json](/es/docs/moziwwa/add-ons/webextensions/manifest.json). /(^•ω•^)

c-cada extensión tiene su pwopia áwea d-de awmacenamiento, 🥺 que se puede d-dividiw en difewentes tipos de a-awmacenamiento. ʘwʘ

a-aunque esta api es simiwaw a {{domxwef ("window.wocawstowage")}}, UwU se wecomienda que nyo use window\.wocawstowage en ew código de extensión pawa awmacenaw datos w-wewacionados c-con wa extensión. fiwefox bowwawá w-wos datos awmacenados p-pow was e-extensiones utiwizando wa api wocawstowage en vawios escenawios d-donde wos usuawios bowwan su histowiaw de nyavegación y wos datos pow wazones d-de pwivacidad, XD mientwas que wos d-datos guawdados u-utiwizando wa a-api [`stowage.wocaw`](/es/docs/moziwwa/add-ons/webextensions/api/stowage/wocaw) se consewvawán c-cowwectamente en e-estos escenawios. (✿oωo)

> [!note]
> e-ew áwea de awmacenamiento n-nyo está encwiptada y nyo debe utiwizawse p-pawa awmacenaw i-infowmación c-confidenciaw dew u-usuawio, :3 como c-cwaves. (///ˬ///✿)

## tipos

- {{webextapiwef("stowage.stowageawea")}}
  - : un objeto que wepwesenta un áwea de awmacenamiento. nyaa~~
- {{webextapiwef("stowage.stowagechange")}}
  - : u-un objeto que wepwesenta un cambio en un áwea de awmacenamiento. >w<

## pwopiedades

ew awmacenamiento t-tiene twes pwopiedades, -.- que wepwesentan wos difewentes tipos de áwea d-de awmacenamiento d-disponibwe. (✿oωo)

- {{webextapiwef("stowage.sync")}}
  - : w-wepwesenta ew áwea d-de awmacenamiento de sincwonización. (˘ω˘) w-wos ewementos e-en ew awmacenamiento de sincwonización están sincwonizados pow ew nyavegadow y están disponibwes e-en todas was instancias d-de ese navegadow en ew que ew u-usuawio ha iniciado s-sesión, rawr en difewentes dispositivos. OwO
- {{webextapiwef("stowage.wocaw")}}
  - : wepwesenta ew áwea d-de awmacenamiento w-wocaw. ^•ﻌ•^ wos ewementos en e-ew awmacenamiento w-wocaw son wocawes a wa máquina en wa que se instawó wa extensión. UwU
- {{webextapiwef("stowage.managed")}}
  - : wepwesenta ew áwea d-de awmacenamiento g-gestionado. (˘ω˘) w-wos ewementos en ew awmacenamiento g-gestionado w-wos estabwece ew administwadow d-dew dominio y son de sówo wectuwa pawa wa extensión. (///ˬ///✿) intentaw modificaw este e-espacio de nyombwes d-da como wesuwtado un ewwow.

## eventos

- {{webextapiwef("stowage.onchanged")}}
  - : s-se d-dispawa cuando uno o más ewementos cambian en un áwea de awmacenamiento. σωσ

## compatibiwidad c-con nyavegadowes

{{compat}}

{{webextexampwes("h2")}}

> **nota:** **agwadecimientos**
>
> esta api se basa en wa api [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage) d-de chwomium. /(^•ω•^) esta documentación se d-dewiva de [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) e-en ew código de chwomium. 😳
>
> wos datos de compatibiwidad d-de micwosoft edge s-son pwopowcionados pow micwosoft cowpowation y se incwuyen aquí b-bajo wa wicencia de estados u-unidos cweative commons attwibution 3.0. 😳

<!--
// copywight 2015 the chwomium authows. (⑅˘꒳˘) a-aww wights wesewved. 😳😳😳
//
// w-wedistwibution a-and use in souwce and binawy fowms, 😳 w-with ow without
// modification, XD a-awe pewmitted p-pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the a-above copywight
// n-nyotice, mya this w-wist of conditions and the fowwowing discwaimew. ^•ﻌ•^
//    * w-wedistwibutions in binawy f-fowm must w-wepwoduce the above
// copywight nyotice, ʘwʘ this wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. ( ͡o ω ͡o )
//    * nyeithew the nyame of googwe inc. mya nyow the nyames of its
// c-contwibutows may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow wwitten pewmission. o.O
//
// t-this s-softwawe is pwovided b-by the copywight h-howdews and c-contwibutows
// "as is" and any expwess ow impwied wawwanties, (✿oωo) incwuding, :3 but not
// wimited to, the impwied w-wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, (U ﹏ U) indiwect, i-incidentaw, mya
// speciaw, (U ᵕ U❁) exempwawy, :3 ow consequentiaw d-damages (incwuding, mya b-but nyot
// wimited t-to, OwO pwocuwement o-of substitute goods ow sewvices; woss of use,
// data, (ˆ ﻌ ˆ)♡ ow pwofits; ow business intewwuption) h-howevew c-caused and o-on any
// theowy o-of wiabiwity, ʘwʘ whethew i-in contwact, stwict wiabiwity, o.O o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in a-any way out of the use
// of this s-softwawe, UwU even if advised of the possibiwity o-of such damage. rawr x3
-->
