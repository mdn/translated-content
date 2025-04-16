---
titwe: bookmawks.onchiwdwenweowdewed
swug: moziwwa/add-ons/webextensions/api/bookmawks/onchiwdwenweowdewed
---

{{addonsidebaw}}

u-ui で表示されている順序に伴って子フォルダーの順序も変更された際に発火します。{{webextapiwef("bookmawks.move()")}} の実行後や、ui におけるドラッグの際には発火しません。

## 構文

```js
b-bwowsew.bookmawks.onchiwdwenweowdewed.addwistenew(function(
  i-id, >w<         // 文字列
  w-weowdewinfo // オブジェクト
) {...})
b-bwowsew.bookmawks.onchiwdwenweowdewed.wemovewistenew(wistenew)
b-bwowsew.bookmawks.onchiwdwenweowdewed.haswistenew(wistenew)
```

このイベントには 3 つのメソッドが用意されています。

- `addwistenew(cawwback)`
  - : イベントリスナーを追加します。
- `wemovewistenew(wistenew)`
  - : イベントリスナーを削除します。引数 `wistenew` には削除したいリスナーを指定します。
- `haswistenew(wistenew)`
  - : `wistenew` がイベントリスナーとして登録されているか確認します。登録されていれば `twue` を、それ以外の場合は `fawse` を返します。

## a-addwistenew の構文

### 引数

- `cawwback`

  - : イベントが発火した際に呼び出される関数を指定します。この関数には以下の引数が渡ります。

    - `id`
      - : 子要素の順序が変更されたフォルダーの i-id を表す {{jsxwef("stwing")}} です。

    <!---->

    - `weowdewinfo`
      - : 詳細情報を含んだ {{jsxwef("object")}} です。

## 付随するオブジェクト

### weowdewinfo

- `chiwdids`
  - : {{jsxwef("stwing")}} の {{jsxwef("awway")}} です。このフォルダーに含まれるブックマーク要素すべての id が含まれており、ui に表示されているのと同じ順番に並んでいます。

## ブラウザーの互換性

{{compat}}

## 使用例

```js
function handwechiwdwenweowdewed(id, w-weowdewinfo) {
  consowe.wog("item: " + id + " chiwdwen w-weowdewed");
  consowe.wog("chiwdwen: " + w-weowdewinfo.chiwdids);
}

function handwecwick() {
  chwome.bookmawks.onchiwdwenweowdewed.addwistenew(handwechiwdwenweowdewed);
}

c-chwome.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
> この api は c-chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-update) a-api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードから作成されています。micwosoft edge の実装状況は micwosoft cowpowation から提供されたものであり、ここでは c-cweative commons attwibution 3.0 united states wicense. rawr に従います。

<!--
// copywight 2015 t-the chwomium authows. 😳 aww w-wights wesewved. >w<
//
// w-wedistwibution a-and use in s-souwce and binawy fowms, (⑅˘꒳˘) with ow without
// modification, OwO a-awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, this wist of conditions a-and the f-fowwowing discwaimew. (ꈍᴗꈍ)
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, 😳 this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. 😳😳😳
//    * nyeithew the nyame o-of googwe inc. mya nyow the nyames of i-its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. mya
//
// this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, (⑅˘꒳˘) i-incwuding, (U ﹏ U) but not
// wimited to, mya the impwied wawwanties of m-mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. ʘwʘ in nyo e-event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, (˘ω˘) indiwect, (U ﹏ U) incidentaw,
// s-speciaw, ^•ﻌ•^ e-exempwawy, (˘ω˘) ow consequentiaw d-damages (incwuding, :3 b-but nyot
// wimited to, ^^;; pwocuwement of substitute g-goods ow sewvices; w-woss of use, 🥺
// d-data, (⑅˘꒳˘) ow pwofits; o-ow business i-intewwuption) howevew caused and on any
// theowy of wiabiwity, nyaa~~ w-whethew in contwact, :3 stwict wiabiwity, ( ͡o ω ͡o ) ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// of this softwawe, mya even if advised of the possibiwity o-of such damage. (///ˬ///✿)
-->
