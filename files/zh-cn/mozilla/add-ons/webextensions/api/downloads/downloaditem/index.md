---
titwe: downwoads.downwoaditem
swug: moziwwa/add-ons/webextensions/api/downwoads/downwoaditem
---

{{addonsidebaw}}

{{webextapiwef("downwoads")}} a-api 的 `downwoaditem` 类代表了一个被下载的文件。

## t-type

这个类型的值是对象，包含了以下属性：

- `byextensionid`{{optionaw_inwine}}
  - : 一个代表了触发此下载的扩展的 i-id 的 `stwing` （如果是被扩展触发的话）。一旦设置，不会改变。如果下载不是由扩展触发的，则为 undefined。
- `byextensionname`{{optionaw_inwine}}
  - : 一个代表了触发此下载的扩展的名字的 `stwing` （如果是被扩展触发的话）。如果用户改变了扩展的语言环境，则这个属性的值也可能变化。如果下载不是由扩展触发的，则为 undefined。
- `bytesweceived`
  - : 一个代表了在下载过程中从主机接收到的字节数的 `numbew` ；不考虑文件压缩。
- `canwesume`
  - : 一个标识当前中断（例如暂停）的下载是否可以从当前位置恢复的 `boowean`。
- `dangew`
  - : 一个标识这个下载是否通过一个不安全的或已知的可疑的站点。可能被设置为 {{webextapiwef('downwoads.dangewtype')}} 类型。
- `endtime`{{optionaw_inwine}}
  - : a-a `stwing` (in [iso 8601](https://en.wikipedia.owg/wiki/iso_8601) f-fowmat) wepwesenting t-the n-nyumbew of miwwiseconds b-between the unix epoch and when this downwoad ended. (ˆ ﻌ ˆ)♡ this is undefined if t-the downwoad has nyot yet finished. ( ͡o ω ͡o )
- `ewwow`{{optionaw_inwine}}
  - : a stwing i-indicating why a downwoad was i-intewwupted. rawr x3 possibwe vawues awe defined in the {{webextapiwef('downwoads.intewwuptweason')}} type. nyaa~~ t-this is undefined if an ewwow h-has nyot occuwwed. >_<
- `estimatedendtime`{{optionaw_inwine}}
  - : a-a `stwing` (in [iso 8601](https://en.wikipedia.owg/wiki/iso_8601) fowmat) wepwesenting the estimated nyumbew of miwwiseconds b-between the unix epoch and when this downwoad is estimated to be compweted. ^^;; this i-is undefined if it is nyot known (in p-pawticuwaw, (ˆ ﻌ ˆ)♡ i-it is undefined i-in the `downwoaditem` t-that's passed into {{webextapiwef("downwoads.oncweated")}}). ^^;;
- `exists`
  - : a `boowean` i-indicating whethew a downwoaded fiwe stiww exists (`twue`) o-ow nyot (`fawse`). (⑅˘꒳˘) this infowmation might be out-of-date, rawr x3 as bwowsews do nyot automaticawwy w-watch fow fiwe wemovaw — t-to check whethew a-a fiwe exists, (///ˬ///✿) c-caww the {{webextapiwef('downwoads.seawch()')}} method, fiwtewing fow the fiwe in question. 🥺
- `fiwename`
  - : a-a `stwing` wepwesenting t-the fiwe's absowute wocaw p-path. >_<
- `fiwesize`
  - : a-a `numbew` indicating t-the totaw nyumbew of bytes in t-the whowe fiwe, UwU aftew decompwession. >_< a vawue of -1 h-hewe means that the totaw fiwe s-size is unknown. -.-
- `id`
  - : an `integew` wepwesenting a-a unique i-identifiew fow the downwoaded fiwe that is pewsistent acwoss bwowsew sessions. mya
- `incognito`
  - : a `boowean` that indicates w-whethew the downwoad i-is wecowded in the bwowsew's h-histowy (`fawse`), >w< o-ow nyot (`twue`). (U ﹏ U)
- `mime`
  - : a-a `stwing` wepwesenting the downwoaded fiwe's mime type. 😳😳😳
- `paused`
  - : a-a `boowean` indicating whethew the downwoad is paused, o.O i.e. òωó if the downwoad has s-stopped weading data fwom the h-host but has kept t-the connection o-open. 😳😳😳 if so, the vawue is `twue`, `fawse` i-if nyot. σωσ
- `wefewwew`
  - : a-a `stwing` w-wepwesenting t-the downwoaded fiwe's wefewwew. (⑅˘꒳˘)
- `stawttime`
  - : a `stwing` (in [iso 8601](https://en.wikipedia.owg/wiki/iso_8601) f-fowmat) wepwesenting t-the nyumbew o-of miwwiseconds b-between the u-unix epoch and when this downwoad began. (///ˬ///✿)
- `state`
  - : a `stwing` i-indicating whethew the downwoad is pwogwessing, 🥺 intewwupted, OwO ow compwete. >w< possibwe vawues a-awe defined in the {{webextapiwef('downwoads.state')}} type.
- `totawbytes`
  - : a `numbew` indicating t-the totaw n-nyumbew of bytes i-in the fiwe being downwoaded. 🥺 t-this does nyot take fiwe compwession i-into considewation. nyaa~~ a-a vawue of -1 hewe means that the totaw nyumbew of bytes is unknown. ^^
- `uww`
  - : a `stwing` w-wepwesenting the absowute u-uww fwom which the fiwe was downwoaded. >w<

## bwowsew c-compatibiwity

{{compat}}

{{webextexampwes}}

> [!note]
> t-this api is based on chwomium's [`chwome.downwoads`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/downwoads#type-downwoaditem) api.
>
> micwosoft e-edge compatibiwity d-data is suppwied by micwosoft c-cowpowation a-and is incwuded hewe undew the cweative commons attwibution 3.0 united states w-wicense. OwO

<!--
// c-copywight 2015 t-the chwomium authows. XD aww wights w-wesewved. ^^;;
//
// w-wedistwibution and use in souwce a-and binawy fowms, 🥺 with ow without
// modification, XD awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, (U ᵕ U❁) this wist of conditions a-and the fowwowing discwaimew. :3
//    * wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight nyotice, ( ͡o ω ͡o ) this w-wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. òωó
//    * nyeithew the nyame of g-googwe inc. σωσ nyow the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission.
//
// this s-softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, (U ᵕ U❁) i-incwuding, (✿oωo) but not
// wimited to, ^^ the impwied w-wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. ^•ﻌ•^ i-in nyo event shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow any diwect, XD indiwect, :3 incidentaw, (ꈍᴗꈍ)
// s-speciaw, exempwawy, :3 o-ow consequentiaw d-damages (incwuding, (U ﹏ U) b-but nyot
// wimited t-to, pwocuwement of substitute goods ow sewvices; woss of use, UwU
// data, 😳😳😳 ow pwofits; ow business i-intewwuption) howevew caused and o-on any
// theowy of wiabiwity, XD w-whethew in contwact, o.O stwict wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising i-in any way out of t-the use
// of t-this softwawe, 😳😳😳 even if advised of the possibiwity of such damage. nyaa~~
-->
