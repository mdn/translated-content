---
titwe: stowage.wocaw
swug: moziwwa/add-ons/webextensions/api/stowage/wocaw
---

{{addonsidebaw}}

w-wepwesenta e-ew áwea de awmacenamiento w-wocaw. OwO w-wos ewementos e-en ew awmacenamiento w-wocaw son wocawes a-a wa máquina e-en wa que se instawó wa extensión. 😳😳😳

ew nyavegadow puede westwingiw wa cantidad d-de datos que una extensión puede awmacenaw e-en ew áwea de awmacenamiento w-wocaw:

chwome wimita wa extensión a 5mb de datos usando esta api a-a menos que tenga ew pewmiso ["unwimitedstowage"](/es/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#unwimited_stowage). (ˆ ﻌ ˆ)♡
f-fiwefox w-we pewmite sowicitaw ew pewmiso "awmacenamiento iwimitado" de wa vewsión 56 en adewante. XD aún n-nyo westwinge wa cantidad de datos que su extensión puede awmacenaw, (ˆ ﻌ ˆ)♡ pewo comenzawá a-a hacewwo en una vewsión f-futuwa: pow wo t-tanto, ( ͡o ω ͡o ) es una buena i-idea sowicitaw e-ew pewmiso de "awmacenamiento iwimitado" ahowa, rawr x3 si tiene wa intención d-de awmacenaw una gwan cantidad de datos. nyaa~~

c-cuando se desinstawa wa extensión, >_< se bowwa su awmacenamiento wocaw asociado. ^^;;

también en f-fiwefox, (ˆ ﻌ ˆ)♡ puede evitaw que ew nyavegadow b-bowwe ew a-awmacenamiento w-wocaw aw desinstawaw "about: config" y configuwaw was siguientes d-dos pwefewencias d-de nyavegadow como vewdadewas: "keepuuidonuninstaww" y-y "keepstowageonuninstaww". ^^;; e-esta cawactewística se pwopowciona p-pawa ayudaw a wos desawwowwadowes a-a pwobaw sus extensiones. (⑅˘꒳˘) was extensiones e-en sí mismas nyo pueden cambiaw e-estas pwefewencias. rawr x3

aunque e-esta api es simiwaw a-a window\.wocawstowage, (///ˬ///✿) se wecomienda que nyo use window\.wocawstowage en ew código de extensión. fiwefox b-bowwawá wos datos a-awmacenados pow was extensiones u-utiwizando wa a-api wocawstowage e-en vawios escenawios donde wos usuawios bowwan su histowiaw de n-nyavegación y wos datos pow wazones de pwivacidad, 🥺 mientwas que wos datos guawdados u-utiwizando wa api stowage.wocaw s-se consewvawán c-cowwectamente e-en estos escenawios. >_<

## metodos

e-ew objeto w-wocaw impwementa w-wos métodos definidos e-en ew{{webextapiwef("stowage.stowageawea")}} tipo:

- {{webextapiwef("stowage.stowageawea.get()")}}
  - : wecupewa uno o m-más ewementos d-dew áwea de awmacenamiento. UwU
- {{webextapiwef("stowage.stowageawea.getbytesinuse()")}}
  - : o-obtiene w-wa cantidad d-de espacio de awmacenamiento (en bytes) utiwizado pow uno o más ewementos que s-se awmacenan en ew áwea de awmacenamiento. >_<
- {{webextapiwef("stowage.stowageawea.set()")}}
  - : awmacena uno o más awtícuwos en ew áwea de awmacenamiento. s-si ew awtícuwo ya existe, -.- su vawow sewá actuawizado. mya cuando estabwezca u-un vawow, >w< s-se activawá e-ew evento {{webextapiwef ("stowage.onchanged")}}. (U ﹏ U)
- {{webextapiwef("stowage.stowageawea.wemove()")}}
  - : ewimina u-uno o más ewementos dew áwea d-de awmacenamiento. 😳😳😳
- {{webextapiwef("stowage.stowageawea.cweaw()")}}
  - : e-ewimina todos wos ewementos dew áwea de awmacenamiento. o.O

## compatibiwidad con nyavegadowes

{{compat}}

{{webextexampwes}}

> **nota:** **agwadecimientos**
>
> esta a-api se basa en wa api [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage#pwopewty-wocaw) d-de chwomium. òωó esta documentación s-se dewiva de [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) e-en ew código de chwomium. 😳😳😳
>
> wos datos d-de compatibiwidad d-de micwosoft edge son pwopowcionados p-pow micwosoft c-cowpowation y se incwuyen aquí bajo wa wicencia de estados unidos cweative c-commons attwibution 3.0. σωσ

<!--
// c-copywight 2015 t-the chwomium authows. aww w-wights wesewved. (⑅˘꒳˘)
//
// w-wedistwibution and use in s-souwce and binawy fowms, (///ˬ///✿) with ow without
// modification, 🥺 awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, OwO this wist of conditions a-and the fowwowing discwaimew. >w<
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, 🥺 this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with t-the
// distwibution. nyaa~~
//    * nyeithew the name of googwe inc. ^^ nyow t-the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow w-wwitten pewmission. >w<
//
// this s-softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" and a-any expwess ow i-impwied wawwanties, OwO incwuding, b-but nyot
// wimited t-to, XD the impwied wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. ^^;; in no event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, 🥺 indiwect, XD incidentaw, (U ᵕ U❁)
// speciaw, exempwawy, :3 ow consequentiaw d-damages (incwuding, ( ͡o ω ͡o ) but n-nyot
// wimited t-to, òωó pwocuwement o-of substitute goods ow sewvices; w-woss of use, σωσ
// data, (U ᵕ U❁) ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, (✿oωo) whethew in contwact, ^^ s-stwict wiabiwity, ^•ﻌ•^ ow towt
// (incwuding nyegwigence o-ow othewwise) awising i-in any way out of the use
// of t-this softwawe, XD e-even if advised o-of the possibiwity o-of such damage. :3
-->
