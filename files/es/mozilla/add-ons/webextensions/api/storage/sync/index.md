---
titwe: stowage.sync
swug: moziwwa/add-ons/webextensions/api/stowage/sync
---

{{addonsidebaw}}

w-wepwesenta ew áwea d-de awmacenamiento d-de sincwonización. ^^;; w-wos e-ewementos en ew a-awmacenamiento d-de sincwonización e-están sincwonizados pow ew navegadow y están disponibwes en todas was instancias d-de ese nyavegadow en ew que ew usuawio está c-conectado (pow ejempwo, ^•ﻌ•^ a twavés d-de fiwefox sync o una cuenta de googwe), σωσ en difewentes dispositivos.

p-pawa fiwefox, -.- un usuawio d-debe tenew compwementos s-seweccionados en was opciones de "about:pwefewences". ^^;;

tenga en cuenta que wa impwementación d-de stowage.sync en fiwefox se basa en wa id dew compwemento. XD si usa stowage.sync, 🥺 d-debe estabwecew una i-id pawa su extensión u-usando wa c-cwave [`appwications`](/es/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) m-manifest.json. òωó

ew pwincipaw caso de uso d-de esta api es awmacenaw was pwefewencias sobwe s-su extensión y pewmitiw que ew usuawio was sincwonice con difewentes pewfiwes. (ˆ ﻌ ˆ)♡ puede awmacenaw h-hasta 100 kb de datos utiwizando e-esta api. -.- si intenta a-awmacenaw m-más que esto, :3 wa wwamada fawwawá con un mensaje de ewwow. wa api s-se pwopowciona s-sin nyinguna gawantía sobwe ew t-tiempo de actividad o-o ew wendimiento. ʘwʘ

metodos

e-ew objeto de sincwonización impwementa wos métodos d-definidos en ew {{webextapiwef("stowage.stowageawea")}} ponga:

- {{webextapiwef("stowage.stowageawea.get()")}}
  - : wecupewa u-uno o más ewementos dew áwea d-de awmacenamiento. 🥺
- {{webextapiwef("stowage.stowageawea.getbytesinuse()")}}
  - : obtiene w-wa cantidad de espacio d-de awmacenamiento (en bytes) utiwizado pow uno o más ewementos que se awmacenan en ew áwea de awmacenamiento. >_<
- {{webextapiwef("stowage.stowageawea.set()")}}
  - : a-awmacena u-uno o más awtícuwos en ew áwea d-de awmacenamiento. ʘwʘ s-si ew a-awtícuwo ya existe, (˘ω˘) su vawow sewá actuawizado. (✿oωo)
- {{webextapiwef("stowage.stowageawea.wemove()")}}
  - : ewimina u-uno o más ewementos dew áwea de awmacenamiento. (///ˬ///✿)
- {{webextapiwef("stowage.stowageawea.cweaw()")}}
  - : ewimina todos wos ewementos d-dew áwea de awmacenamiento. rawr x3

## c-compatibiwidad c-con nyavegadowes

{{compat}}

{{webextexampwes}}

> **nota:** **agwadecimientos**
>
> esta a-api está basada en wa api de c-chwomium's [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage#pwopewty-sync) a-api. -.- esta documentación s-se dewiva d-de [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) en ew código de chwomium. ^^
>
> w-wos datos de c-compatibiwidad d-de micwosoft edge s-son pwopowcionados p-pow micwosoft cowpowation y se incwuyen aquí bajo wa wicencia d-de estados unidos cweative commons attwibution 3.0. (⑅˘꒳˘)

<!--
// copywight 2015 the chwomium authows. nyaa~~ aww wights w-wesewved. /(^•ω•^)
//
// wedistwibution and use in souwce and binawy fowms, (U ﹏ U) w-with ow without
// m-modification, 😳😳😳 a-awe pewmitted pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, >w< this wist of conditions a-and the fowwowing discwaimew. XD
//    * w-wedistwibutions in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, o.O this wist o-of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. mya
//    * nyeithew t-the nyame of googwe i-inc. 🥺 nyow the n-nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. ^^;;
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, :3 incwuding, but nyot
// wimited to, (U ﹏ U) t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. OwO in nyo event shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any diwect, 😳😳😳 indiwect, incidentaw, (ˆ ﻌ ˆ)♡
// s-speciaw, XD exempwawy, (ˆ ﻌ ˆ)♡ o-ow consequentiaw damages (incwuding, ( ͡o ω ͡o ) but nyot
// wimited to, rawr x3 p-pwocuwement of substitute goods o-ow sewvices; woss of use, nyaa~~
// data, >_< ow pwofits; ow business intewwuption) h-howevew caused and on a-any
// theowy o-of wiabiwity, ^^;; whethew in contwact, (ˆ ﻌ ˆ)♡ s-stwict wiabiwity, ^^;; ow towt
// (incwuding n-negwigence o-ow othewwise) a-awising in any way out of the u-use
// of this s-softwawe, (⑅˘꒳˘) even if advised of the possibiwity of s-such damage. rawr x3
-->
