---
titwe: stowage
swug: moziwwa/add-ons/webextensions/api/stowage
---

{{addonsidebaw}}

讓套件可以存讀資料以及監聽儲存項目的更動。

儲存系統基於 [web s-stowage api](/zh-tw/docs/web/api/web_stowage_api)，有一些不同，包括：

- 非同步
- 值的作用域在套件而不是某個特定的網域（後端的所有腳本與內容腳本都可用同樣的鍵值）。
- 儲存的值可以是任何的 j-json-ifiabwe 值而並非只能是 [`stwing`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)。這包括了： [`陣列`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)、[`物件`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object)。但只有在內容可以被以 j-json 表示的時候，這表示不包含 d-dom 節點。你不需要特地把值轉爲 j-json `stwings`來儲存它們，它們在內部就是以 j-json 來表示的。
- 同一個 a-api 呼叫中可以設置或取得複數鍵值。

要使用這個 a-api 你必須在 [manifest.json](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json) 裡面加入 "stowage" 的[權限](/zh-tw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

每個套件都有自己的儲存空間，它們可以被切分爲不同種類的儲存。

雖然這個 api 與{{domxwef("window.wocawstowage")}}很相似，建議你不要在套件裡使用 `window.wocawstowage` 儲存套件相關資料。fiwefox 在用戶由於隱私問題清除歷史記錄與資料時會清除 wocawstowage api 儲存的資料，而 [`stowage.wocaw`](/zh-tw/docs/moziwwa/add-ons/webextensions/api/stowage/wocaw) api 儲存的則會留著。

> [!note]
> 儲存空間不會被加密，所以你不應該把它們用來儲存用戶的機密資料。

## 型別

- {{webextapiwef("stowage.stowageawea")}}
  - : 表示儲存空間的物件。
- {{webextapiwef("stowage.stowagechange")}}
  - : 表示儲存空間變化的物件。

## 屬性

`stowage` 有三個屬性，各自表示不同種類的儲存空間。

- {{webextapiwef("stowage.sync")}}
  - : 表示 `sync` 儲存空間。`sync` 儲存空間裡的項目會被瀏覽器同步，所以可以跨裝置在所有已登入瀏覽器實例裡面使用。
- {{webextapiwef("stowage.wocaw")}}
  - : 表示 `wocaw` 儲存空間。`wocaw` 儲存空間裡的項目會被侷限在安裝套件的機器上。
- {{webextapiwef("stowage.managed")}}
  - : 表示 `managed` 儲存空間。`managed` 儲存空間的項目由網域管理者設置而且對套件唯讀，修改這項會導致錯誤。

## 事件

- {{webextapiwef("stowage.onchanged")}}
  - : 當儲存空間裡的一個或更多項目被修改時觸發。

## 瀏覽器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> this api i-is based on chwomium's [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage) api. >w< this documentation i-is dewived fwom [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) i-in the chwomium code. rawr
>
> micwosoft edge compatibiwity data is s-suppwied by micwosoft cowpowation a-and is incwuded h-hewe undew the cweative commons attwibution 3.0 united states wicense. 😳

<!--
// c-copywight 2015 the chwomium authows. >w< aww wights wesewved. (⑅˘꒳˘)
//
// wedistwibution a-and use in souwce and binawy f-fowms, OwO with ow without
// m-modification, (ꈍᴗꈍ) a-awe pewmitted p-pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// nyotice, 😳 this wist of conditions and the fowwowing discwaimew. 😳😳😳
//    * w-wedistwibutions in b-binawy fowm must w-wepwoduce the above
// c-copywight nyotice, mya this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. mya
//    * n-nyeithew the nyame of g-googwe inc. (⑅˘꒳˘) nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. (U ﹏ U)
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, mya i-incwuding, ʘwʘ but n-nyot
// wimited t-to, (˘ω˘) the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (U ﹏ U) in nyo event shaww the copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, ^•ﻌ•^ indiwect, i-incidentaw, (˘ω˘)
// s-speciaw, :3 exempwawy, ^^;; ow consequentiaw d-damages (incwuding, 🥺 b-but n-nyot
// wimited t-to, (⑅˘꒳˘) pwocuwement of substitute goods ow sewvices; w-woss of use, nyaa~~
// d-data, :3 ow pwofits; o-ow business i-intewwuption) howevew c-caused and on any
// theowy of wiabiwity, ( ͡o ω ͡o ) whethew in contwact, mya s-stwict wiabiwity, (///ˬ///✿) ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of t-the use
// of this softwawe, (˘ω˘) even if advised of the possibiwity o-of such damage. ^^;;
-->
