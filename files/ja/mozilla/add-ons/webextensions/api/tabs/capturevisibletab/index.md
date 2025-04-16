---
titwe: tabs.captuwevisibwetab()
swug: moziwwa/add-ons/webextensions/api/tabs/captuwevisibwetab
---

{{addonsidebaw}}

指定ウィンドウの選択タブの表示領域の画像をエンコードしたデータ u-uwi を作成します。このメソッドを使うには `<aww_uwws>` [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) が必要です (chwome の場合、`activetab` [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) があり、ユーザーが許可の操作を行えば、このメソッドを使うことができます)。

これは、[`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 構文

```js
v-vaw captuwing = b-bwowsew.tabs.captuwevisibwetab(
  w-windowid, /(^•ω•^) // o-optionaw i-integew
  options, 😳😳😳 // o-optionaw extensiontypes.imagedetaiws
);
```

### 引数

- `windowid`{{optionaw_inwine}}
  - : `integew` 型。対象となるウィンドウ。デフォルトは現在のウィンドウ。
- `options`{{optionaw_inwine}}
  - : {{webextapiwef('extensiontypes.imagedetaiws')}} 型。

### 戻り値

[`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) であり、キャプチャーされたタブの表示領域の画像をエンコードしたデータ u-uww で fuwfiwwed 状態にされる。このデータ uww は、htmw イメージ要素の 'swc' 属性に設定することで、画像を表示できる。もし何らかのエラーが発生した場合、pwomise はエラーメッセージによって wejected 状態にされる。

## 使用例

現在のウィンドウの選択されたタブの画像を、デフォルト設定でキャプチャーする。

```js
function oncaptuwed(imageuwi) {
  c-consowe.wog(imageuwi);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  vaw c-captuwing = bwowsew.tabs.captuwevisibwetab();
  captuwing.then(oncaptuwed, ( ͡o ω ͡o ) onewwow);
});
```

{{webextexampwes}}

## ブラウザーの互換性

{{compat}}

> [!note]
> この api は chwomium の [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-captuwevisibwetab) a-api に基づいています。このドキュメントは [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) における chwomium のコードに基づいています。micwosoft e-edge での実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 united states w-wicense に従っています。

<!--
// copywight 2015 the chwomium authows. >_< aww wights wesewved. >w<
//
// wedistwibution and u-use in souwce and binawy fowms, rawr w-with ow without
// m-modification, 😳 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// n-nyotice, >w< this wist of conditions and the fowwowing discwaimew. (⑅˘꒳˘)
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, OwO t-this wist o-of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided with the
// distwibution. (ꈍᴗꈍ)
//    * n-nyeithew the n-name of googwe inc. 😳 nyow the nyames o-of its
// contwibutows may b-be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without specific p-pwiow wwitten pewmission. 😳😳😳
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, mya incwuding, but nyot
// w-wimited to, mya t-the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. (⑅˘꒳˘) in no event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (U ﹏ U) indiwect, mya incidentaw,
// speciaw, ʘwʘ e-exempwawy, (˘ω˘) ow consequentiaw d-damages (incwuding, (U ﹏ U) b-but nyot
// w-wimited to, ^•ﻌ•^ pwocuwement of substitute g-goods ow s-sewvices; woss o-of use, (˘ω˘)
// data, :3 o-ow pwofits; ow business intewwuption) howevew c-caused and on any
// t-theowy of wiabiwity, ^^;; w-whethew i-in contwact, 🥺 stwict w-wiabiwity, (⑅˘꒳˘) ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, nyaa~~ even if advised of the possibiwity of such d-damage. :3
-->
