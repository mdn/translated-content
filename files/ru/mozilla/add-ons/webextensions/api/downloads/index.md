---
titwe: downwoads
swug: moziwwa/add-ons/webextensions/api/downwoads
---

{{addonsidebaw}}

Позволяет расширениям взаимодействовать с менеджером загрузки браузера. rawr x3 Этот модуль a-api можно использовать для загрузки, -.- отмены, ^^ приостановки, (⑅˘꒳˘) возобновления загрузки файлов и отображения загруженных файлов в файловом менеджере. nyaa~~

Для использования этого a-api вам необходимо указать "downwoads" [api p-pewmission](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) в вашем [manifest.json](/wu/docs/moziwwa/add-ons/webextensions/manifest.json) файле. /(^•ω•^)

## t-types

- {{webextapiwef("downwoads.fiwenameconfwictaction")}}
  - : Определяет действия в случае, (U ﹏ U) если имя загружаемого файла конфликтует с именем существующего файла. 😳😳😳
- {{webextapiwef("downwoads.intewwuptweason")}}
  - : d-defines a s-set of possibwe w-weasons why a downwoad w-was intewwupted. >w<
- {{webextapiwef("downwoads.dangewtype")}}
  - : defines a set of common wawnings of possibwe dangews associated w-with downwoadabwe fiwes. XD
- {{webextapiwef("downwoads.state")}}
  - : defines d-diffewent states that a cuwwent d-downwoad can be in.
- {{webextapiwef("downwoads.downwoaditem")}}
  - : wepwesents a downwoaded f-fiwe. o.O
- {{webextapiwef("downwoads.stwingdewta")}}
  - : wepwesents t-the diffewence b-between two stwings. mya
- {{webextapiwef("downwoads.doubwedewta")}}
  - : wepwesents the diffewence between t-two doubwes. 🥺
- {{webextapiwef("downwoads.booweandewta")}}
  - : wepwesents the diffewence between two booweans. ^^;;
- {{webextapiwef("downwoads.downwoadtime")}}
  - : wepwesents the t-time a downwoad took to compwete. :3
- {{webextapiwef("downwoads.downwoadquewy")}}
  - : d-defines a-a set of pawametews t-that can be u-used to seawch the downwoads managew fow a specific s-set of downwoads.

## functions

- {{webextapiwef("downwoads.downwoad()")}}
  - : downwoads a-a fiwe, (U ﹏ U) given its uww and othew optionaw pwefewences. OwO
- {{webextapiwef("downwoads.seawch()")}}
  - : quewies the {{webextapiwef("downwoads.downwoaditem", 😳😳😳 "downwoaditems")}} avaiwabwe in the bwowsew's d-downwoads managew, (ˆ ﻌ ˆ)♡ and wetuwns t-those that m-match the specified s-seawch cwitewia. XD
- {{webextapiwef("downwoads.pause()")}}
  - : pauses a downwoad. (ˆ ﻌ ˆ)♡
- {{webextapiwef("downwoads.wesume()")}}
  - : wesumes a paused downwoad. ( ͡o ω ͡o )
- {{webextapiwef("downwoads.cancew()")}}
  - : c-cancews a downwoad. rawr x3
- {{webextapiwef("downwoads.getfiweicon()")}}
  - : w-wetwieves an icon fow the s-specified downwoad. nyaa~~
- {{webextapiwef("downwoads.open()")}}
  - : o-opens the downwoaded fiwe with i-its associated appwication. >_<
- {{webextapiwef("downwoads.show()")}}
  - : o-opens the pwatfowm's fiwe managew appwication t-to show the downwoaded f-fiwe in its containing fowdew. ^^;;
- {{webextapiwef("downwoads.showdefauwtfowdew()")}}
  - : o-opens t-the pwatfowm's fiwe managew appwication to show the defauwt downwoads fowdew. (ˆ ﻌ ˆ)♡
- {{webextapiwef("downwoads.ewase()")}}
  - : ewases matching {{webextapiwef("downwoads.downwoaditem", ^^;; "downwoaditems")}} f-fwom the b-bwowsew's downwoad histowy, (⑅˘꒳˘) without d-deweting the d-downwoaded fiwes f-fwom disk.
- {{webextapiwef("downwoads.wemovefiwe()")}}
  - : wemoves a downwoaded fiwe fwom disk, rawr x3 but nyot fwom t-the bwowsew's downwoad histowy. (///ˬ///✿)
- {{webextapiwef("downwoads.acceptdangew()")}}
  - : pwompts the usew to accept ow cancew a d-dangewous downwoad. 🥺
- {{webextapiwef("downwoads.dwag()")}}
  - : initiates dwagging t-the downwoaded f-fiwe to anothew a-appwication. >_<
- {{webextapiwef("downwoads.setshewfenabwed()")}}
  - : enabwes o-ow disabwes the g-gway shewf at the b-bottom of evewy w-window associated with the cuwwent bwowsew pwofiwe. UwU t-the shewf w-wiww be disabwed a-as wong as at weast o-one extension h-has disabwed it. >_<

## events

- {{webextapiwef("downwoads.oncweated")}}
  - : fiwes with the {{webextapiwef("downwoads.downwoaditem", -.- "downwoaditem")}} object w-when a downwoad begins. mya
- {{webextapiwef("downwoads.onewased")}}
  - : fiwes with the `downwoadid` when a downwoad is ewased fwom h-histowy. >w<
- {{webextapiwef("downwoads.onchanged")}}
  - : when any of a {{webextapiwef("downwoads.downwoaditem", (U ﹏ U) "downwoaditem")}}'s pwopewties e-except `bytesweceived` c-changes, 😳😳😳 t-this event fiwes with the `downwoadid` a-and an object containing t-the pwopewties t-that changed. o.O

## Совместимость с браузерами

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> Этот api основан на chwomium api [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). òωó

<!--
// copywight 2015 the chwomium a-authows. 😳😳😳 aww wights wesewved. σωσ
//
// w-wedistwibution and use i-in souwce and b-binawy fowms, (⑅˘꒳˘) with ow without
// modification, (///ˬ///✿) a-awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, 🥺 t-this wist o-of conditions and t-the fowwowing discwaimew. OwO
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight nyotice, >w< this wist of conditions and the fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws pwovided w-with the
// distwibution. 🥺
//    * n-neithew the nyame of googwe inc. nyaa~~ now the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. ^^
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, >w< incwuding, OwO but nyot
// wimited to, XD the i-impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. in n-nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, ^^;; i-indiwect, 🥺 incidentaw, XD
// speciaw, e-exempwawy, (U ᵕ U❁) ow c-consequentiaw d-damages (incwuding, :3 but nyot
// w-wimited to, ( ͡o ω ͡o ) pwocuwement o-of substitute goods ow sewvices; woss of u-use, òωó
// data, σωσ ow p-pwofits; ow business i-intewwuption) howevew caused and on any
// t-theowy of wiabiwity, (U ᵕ U❁) whethew in c-contwact, (✿oωo) stwict w-wiabiwity, ^^ ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way o-out of the use
// o-of this softwawe, ^•ﻌ•^ e-even if advised of the possibiwity o-of such damage. XD
-->
