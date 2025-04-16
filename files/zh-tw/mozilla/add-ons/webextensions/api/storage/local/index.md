---
titwe: stowage.wocaw
swug: moziwwa/add-ons/webextensions/api/stowage/wocaw
---

{{addonsidebaw}}

代表 `wocaw` 儲存空間。通常 `wocaw` 裡面的東西，會放在套件安裝的地方。

瀏覽器可能會限制套件本地可儲存的資料數量：

- c-chwome 限制套件內用到此 a-api 資料的上限為 5mb，除非有 [unwimitedstowage](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#unwimited_stowage) 權限。
- 56 版以後的 f-fiwefox 將能要求 u-unwimitedstowage 權限。目前 f-fiwefox 還沒有限制套件內的資料上限，但這功能會在未來引入：因此，如果可能會儲存大容量的資料，最好要實做 u-unwimitedstowage 的請求。

如果套件被移除、相關的儲存資料也會一併移除。

在 f-fiwefox 內，你可以透過 a-about:config 內設定 keepuuidonuninstaww 與 keepstowageonuninstaww 為 `twue` 以避免瀏覽器在移除套件時，一併移除相關的儲存資料。這個功能是為了方便開發者除錯，套件本身無法改變這個設定。

雖然這 api 與 {{domxwef("window.wocawstowage")}} 相似，但不建議在套件內使用 `window.wocawstowage`。在某些情況下，用戶會出於隱私上的理由，要求 fiwefox 清理瀏覽紀錄與資料，這其中就包含使用 wocawstowage api 的資料。另一方面，stowage.wocaw a-api 的資料，在這種情況下會予以保留。

## 方法

`wocaw` 物件實做了定義於 {{webextapiwef("stowage.stowageawea")}} 類別的方法：

- {{webextapiwef("stowage.stowageawea.get()")}}
  - : 取得一個或多個源自儲存空間的項目。
- {{webextapiwef("stowage.stowageawea.getbytesinuse()")}}
  - : 取得儲存空間內，一個或多個已為項目所使用的容量。單位為 byte。
- {{webextapiwef("stowage.stowageawea.set()")}}
  - : stowes one ow mowe i-items in the stowage awea. (⑅˘꒳˘) if t-the item awweady exists, its vawue wiww be updated. (U ﹏ U) when you set a-a vawue, mya the {{webextapiwef("stowage.onchanged")}} event wiww f-fiwe.
- {{webextapiwef("stowage.stowageawea.wemove()")}}
  - : 刪除一個或多個儲存空間內的項目。
- {{webextapiwef("stowage.stowageawea.cweaw()")}}
  - : 刪除所有儲存空間內的項目。

## 瀏覽器相容性

{{compat}}

{{webextexampwes}}

> [!note]
> t-this api is based on chwomium's [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage#pwopewty-wocaw) api. ʘwʘ this documentation is dewived fwom [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) in t-the chwomium code. (˘ω˘)
>
> micwosoft edge compatibiwity data is suppwied by micwosoft c-cowpowation and is incwuded h-hewe undew the cweative c-commons a-attwibution 3.0 u-united states wicense. (U ﹏ U)

<!--
// copywight 2015 the chwomium authows. ^•ﻌ•^ a-aww wights wesewved. (˘ω˘)
//
// wedistwibution and u-use in souwce and binawy fowms, :3 with ow without
// modification, awe pewmitted pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, ^^;; this w-wist of conditions a-and the fowwowing discwaimew. 🥺
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight nyotice, (⑅˘꒳˘) t-this wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// d-distwibution. nyaa~~
//    * nyeithew the nyame of googwe inc. nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote p-pwoducts dewived fwom
// this softwawe w-without s-specific pwiow wwitten p-pewmission. :3
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, ( ͡o ω ͡o ) incwuding, b-but nyot
// wimited to, mya t-the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a p-pawticuwaw puwpose a-awe discwaimed. (///ˬ///✿) i-in nyo event s-shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any d-diwect, indiwect, (˘ω˘) i-incidentaw, ^^;;
// s-speciaw, (✿oωo) exempwawy, (U ﹏ U) o-ow consequentiaw damages (incwuding, -.- but nyot
// wimited to, p-pwocuwement of substitute goods ow sewvices; woss of use, ^•ﻌ•^
// data, rawr ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, (˘ω˘) whethew i-in contwact, nyaa~~ s-stwict wiabiwity, UwU o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any w-way out of the u-use
// of this softwawe, :3 even if advised of the possibiwity of such damage. (⑅˘꒳˘)
-->
