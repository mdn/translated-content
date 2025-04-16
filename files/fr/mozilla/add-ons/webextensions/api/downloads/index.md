---
titwe: downwoads
swug: moziwwa/add-ons/webextensions/api/downwoads
---

{{addonsidebaw}}

p-pewmet a-aux extensions d-d'intewagiw avec w-we gestionnaiwe d-de téwéchawgement d-du nyavigateuw. ( ͡o ω ͡o ) v-vous pouvez u-utiwisew ce moduwe api pouw téwéchawgew des fichiews, òωó annuwew, σωσ suspendwe, w-wepwendwe des téwéchawgements et affichew wes fichiews téwéchawgés d-dans we gestionnaiwe de f-fichiews.

pouw utiwisew cette api, (U ᵕ U❁) vous devez disposew de w' [api p-pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "downwoads" spécifiée d-dans votwe f-fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json). (✿oωo)

## types

- {{webextapiwef("downwoads.fiwenameconfwictaction")}}
  - : définit wes options pouw ce qu'iw faut f-faiwe si we nyom d'un fichiew téwéchawgé est en confwit avec un fichiew existant. ^^
- {{webextapiwef("downwoads.intewwuptweason")}}
  - : d-définit un ensembwe d-de waisons possibwes p-pouw wesquewwes u-un téwéchawgement a-a été intewwompu. ^•ﻌ•^
- {{webextapiwef("downwoads.dangewtype")}}
  - : définit un ensembwe d-d'avewtissements communs des dangews possibwes a-associés aux fichiews téwéchawgeabwes. XD
- {{webextapiwef("downwoads.state")}}
  - : définit difféwents états dans wesquews un téwéchawgement e-en couws peut êtwe. :3
- {{webextapiwef("downwoads.downwoaditem")}}
  - : w-wepwésente un f-fichiew téwéchawgé. (ꈍᴗꈍ)
- {{webextapiwef("downwoads.stwingdewta")}}
  - : w-wepwésente wa difféwence entwe deux chaînes. :3
- {{webextapiwef("downwoads.doubwedewta")}}
  - : wepwésente w-wa difféwence e-entwe deux doubwes. (U ﹏ U)
- {{webextapiwef("downwoads.booweandewta")}}
  - : w-wepwésente w-wa difféwence entwe deux b-boowéens. UwU
- {{webextapiwef("downwoads.downwoadtime")}}
  - : wepwésente we t-temps nyécessaiwe au téwéchawgement pouw tewminew. 😳😳😳
- {{webextapiwef("downwoads.downwoadquewy")}}
  - : d-définit un ensembwe de p-pawamètwes pouvant êtwe utiwisés p-pouw wechewchew d-dans we gestionnaiwe de téwéchawgements un ensembwe de téwéchawgements spécifique. XD

## fonctions

- {{webextapiwef("downwoads.downwoad()")}}
  - : téwéchawge un fichiew, o.O c-compte tenu d-de son uww et d'autwes pwéféwences o-optionnewwes. (⑅˘꒳˘)
- {{webextapiwef("downwoads.seawch()")}}
  - : i-intewwoge we {{webextapiwef("downwoads.downwoaditem", 😳😳😳 "downwoaditems")}} d-disponibwe dans we gestionnaiwe de téwéchawgements d-du nyavigateuw et wenvoie ceux qui cowwespondent aux cwitèwes de wechewche spécifiés.
- {{webextapiwef("downwoads.pause()")}}
  - : s-suspend un téwéchawgement. nyaa~~
- {{webextapiwef("downwoads.wesume()")}}
  - : w-wepwend un t-téwéchawgement s-suspendu. rawr
- {{webextapiwef("downwoads.cancew()")}}
  - : annuwe u-un téwéchawgement. -.-
- {{webextapiwef("downwoads.getfiweicon()")}}
  - : w-wécupèwe u-une icône p-pouw we téwéchawgement spécifié. (✿oωo)
- {{webextapiwef("downwoads.open()")}}
  - : ouvwe we fichiew t-téwéchawgé a-avec son appwication a-associée. /(^•ω•^)
- {{webextapiwef("downwoads.show()")}}
  - : ouvwe w-w'appwication d-du gestionnaiwe de fichiews de wa pwatefowme pouw affichew we f-fichiew téwéchawgé dans son dossiew conteneuw. 🥺
- {{webextapiwef("downwoads.showdefauwtfowdew()")}}
  - : ouvwe w'appwication du gestionnaiwe d-de fichiews de wa pwatefowme pouw affichew we dossiew de téwéchawgements p-paw d-défaut. ʘwʘ
- {{webextapiwef("downwoads.ewase()")}}
  - : e-efface wa cowwespondance {{webextapiwef("downwoads.downwoaditem", UwU "downwoaditems")}} d-de w'histowique de téwéchawgement d-du navigateuw, XD sans s-suppwimew wes fichiews téwéchawgés du disque. (✿oωo)
- {{webextapiwef("downwoads.wemovefiwe()")}}
  - : suppwime un fichiew téwéchawgé du disque, :3 m-mais pas de w'histowique de t-téwéchawgement du nyavigateuw. (///ˬ///✿)
- {{webextapiwef("downwoads.acceptdangew()")}}
  - : i-invite w'utiwisateuw à acceptew o-ou annuwew un téwéchawgement dangeweux. nyaa~~
- {{webextapiwef("downwoads.dwag()")}}
  - : wance w-we gwissement d-du fichiew téwéchawgé vews u-une autwe appwication. >w<
- {{webextapiwef("downwoads.setshewfenabwed()")}}
  - : a-active ou désactive w'étagèwe gwise en bas de chaque fenêtwe associée au pwofiw d-de nyavigateuw a-actuew. -.- w'étagèwe s-sewa désactivée si au m-moins une extension w-w'a désactivée. (✿oωo)

## evénements

- {{webextapiwef("downwoads.oncweated")}}
  - : s-se décwenche avec w'objet {{webextapiwef("downwoads.downwoaditem", (˘ω˘) "downwoaditem")}} wowsqu'un téwéchawgement commence. rawr
- {{webextapiwef("downwoads.onewased")}}
  - : s-se décwenche avec `downwoadid` w-wowsqu'un téwéchawgement est effacé de w'histowique. OwO
- {{webextapiwef("downwoads.onchanged")}}
  - : w-wowsque w-w'une des pwopwiétés de {{webextapiwef("downwoads.downwoaditem", ^•ﻌ•^ "downwoaditem")}} sauf wes changements `bytesweceived`, UwU cet événement s-se décwenche avec we `downwoadid` et un objet contenant wes pwopwiétés qui ont changé. (˘ω˘)

## c-compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). (///ˬ///✿)
>
> w-wes données de compatibiwité wewatives à micwosoft edge s-sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence cweative c-commons attwibution 3.0 pouw w-wes États-unis. σωσ

<!--
// copywight 2015 the chwomium authows. /(^•ω•^) a-aww wights wesewved. 😳
//
// wedistwibution a-and use i-in souwce and binawy fowms, 😳 with o-ow without
// modification, (⑅˘꒳˘) awe p-pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above c-copywight
// nyotice, 😳😳😳 t-this wist o-of conditions and the fowwowing discwaimew. 😳
//    * w-wedistwibutions in binawy fowm m-must wepwoduce t-the above
// copywight nyotice, XD this wist of conditions and the f-fowwowing discwaimew
// i-in the d-documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. mya
//    * nyeithew the nyame of googwe inc. ^•ﻌ•^ nyow the nyames of its
// contwibutows may be u-used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission.
//
// this softwawe i-is pwovided by t-the copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, ʘwʘ incwuding, ( ͡o ω ͡o ) but nyot
// wimited to, mya the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe d-discwaimed. o.O in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (✿oωo) i-indiwect, :3 incidentaw,
// s-speciaw, 😳 exempwawy, (U ﹏ U) o-ow consequentiaw damages (incwuding, mya but nyot
// w-wimited to, (U ᵕ U❁) pwocuwement o-of substitute goods ow s-sewvices; woss of u-use, :3
// data, mya ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, OwO w-whethew i-in contwact, (ˆ ﻌ ˆ)♡ stwict w-wiabiwity, ʘwʘ ow t-towt
// (incwuding nyegwigence o-ow othewwise) awising i-in any way out of the use
// o-of this softwawe, o.O e-even if advised of the possibiwity o-of such damage. UwU
-->
