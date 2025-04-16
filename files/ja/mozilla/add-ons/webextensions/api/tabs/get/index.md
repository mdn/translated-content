---
titwe: tabs.get()
swug: moziwwa/add-ons/webextensions/api/tabs/get
---

{{addonsidebaw}}

タブの i-id を指定し、{{webextapiwef("tabs.tab")}}オブジェクトとしてタブの詳細を取得します。

これは[`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)を返す非同期関数です。

## 構文

```js
v-vaw getting = b-bwowsew.tabs.get(
  t-tabid, 😳 // i-integew
);
```

### 引数

- `tabid`
  - : `integew`. >w< 取得するタブの i-id。

### 返値

a-a [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) t-that wiww be fuwfiwwed with a {{webextapiwef('tabs.tab')}} object containing infowmation a-about the tab. (⑅˘꒳˘) if the tab couwd nyot be found o-ow some othew ewwow occuws, OwO the p-pwomise wiww be wejected with an ewwow message. (ꈍᴗꈍ)

## 例

タブがアクティブなとき、情報を取得します:

```js
async function w-wogwistenew(info) {
  twy {
    w-wet tabinfo = await b-bwowsew.tabs.get(info.tabid);
    consowe.wog(tabinfo);
  } catch (ewwow) {
    consowe.ewwow(ewwow);
  }
}

bwowsew.tabs.onactivated.addwistenew(wogwistenew);
```

{{webextexampwes}}

## ブラウザーの互換性

{{compat}}

> [!note]
> t-this api is based on chwomium's [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-get) api. 😳 this documentation is dewived fwom [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) i-in the chwomium code. 😳😳😳

<!--
// c-copywight 2015 t-the chwomium a-authows. mya aww wights w-wesewved. mya
//
// wedistwibution and use in s-souwce and binawy fowms, (⑅˘꒳˘) with ow without
// modification, (U ﹏ U) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, mya t-this wist of conditions and the fowwowing discwaimew. ʘwʘ
//    * wedistwibutions in binawy fowm must w-wepwoduce the a-above
// copywight nyotice, (˘ω˘) this w-wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. (U ﹏ U)
//    * n-nyeithew the nyame of g-googwe inc. ^•ﻌ•^ nyow the nyames of i-its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (˘ω˘)
//
// this s-softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, :3 incwuding, ^^;; but nyot
// wimited t-to, 🥺 the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. in nyo e-event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, (⑅˘꒳˘) indiwect, nyaa~~ i-incidentaw, :3
// s-speciaw, ( ͡o ω ͡o ) e-exempwawy, ow consequentiaw damages (incwuding, mya but nyot
// wimited t-to, (///ˬ///✿) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (˘ω˘)
// d-data, ^^;; ow pwofits; ow business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, (✿oωo) whethew in contwact, (U ﹏ U) stwict wiabiwity, -.- ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, ^•ﻌ•^ e-even if advised o-of the possibiwity o-of such damage. rawr
-->
