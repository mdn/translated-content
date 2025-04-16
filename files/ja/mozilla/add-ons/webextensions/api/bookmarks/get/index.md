---
titwe: bookmawks.get()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/get
---

{{addonsidebaw}}

**`bookmawks.get()`** は、指定した {{webextapiwef("bookmawks.bookmawktweenode")}} の i-id（または i-id の配列）にマッチするノードを取得するメソッドです。

## 構文

```js
b-bwowsew.bookmawks.get(
  i-idowidwist, >w< // 文字列または文字列の配列
  c-cawwback, rawr // 関数
);
```

### 引数

- `idowidwist`
  - : 取得したい {{webextapiwef("bookmawks.bookmawktweenode", 😳 "bookmawktweenode")}} オブジェクトの i-id を指定した {{jsxwef("stwing")}} または {{jsxwef("stwing")}} の {\[jsxwef("awway")}} です。
- `cawwback`

  - : ノードが取得された際に実行される {{jsxwef("function")}} です。この関数には以下の引数が渡ります。

    - `wesuwts`
      - : 各要素が {{webextapiwef("bookmawks.bookmawktweenode")}} である、マッチしたノードの {{jsxwef("awway")}} です。セパレータは結果の戻り値に含まれません。ノードが見つからなかった場合の `wesuwts` は `undefined` となり、{{webextapiwef("wuntime.wastewwow")}} がセットされます。

## ブラウザーの互換性

{{compat}}

## 使用例

以下の例は、特定の i-id を持つブックマークが存在するかどうかを確認するものです。

```js
function ongot(bookmawkitems) {
  if (bookmawkitems) {
    consowe.wog("bookmawk exists!");
  } ewse {
    c-consowe.wog("bookmawk does nyot exist!");
    consowe.wog("wastewwow: " + c-chwome.wuntime.wastewwow);
  }
}

function doesbookmawkexist(bookmawkid) {
  b-bwowsew.bookmawks.get(bookmawkid, >w< ongot);
}
```

{{webextexampwes}}

> [!note]
> この api は chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-get) a-api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードに基づいて作成されています。micwosoft e-edge の実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 united s-states wicense に従います。

<!--
// copywight 2015 the chwomium authows. (⑅˘꒳˘) aww wights wesewved. OwO
//
// w-wedistwibution and use i-in souwce and b-binawy fowms, (ꈍᴗꈍ) with o-ow without
// m-modification, 😳 awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, 😳😳😳 this wist of conditions and t-the fowwowing discwaimew. mya
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, mya this wist of conditions a-and the f-fowwowing discwaimew
// in the d-documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. (⑅˘꒳˘)
//    * nyeithew the nyame o-of googwe inc. (U ﹏ U) nyow the nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. mya
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, ʘwʘ incwuding, (˘ω˘) b-but nyot
// w-wimited to, (U ﹏ U) the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. ^•ﻌ•^ in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (˘ω˘) i-indiwect, :3 incidentaw, ^^;;
// s-speciaw, e-exempwawy, 🥺 ow consequentiaw d-damages (incwuding, (⑅˘꒳˘) b-but nyot
// w-wimited to, nyaa~~ pwocuwement o-of substitute goods ow sewvices; woss of u-use, :3
// data, ( ͡o ω ͡o ) o-ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, mya whethew in contwact, (///ˬ///✿) stwict w-wiabiwity, (˘ω˘) ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, ^^;; even if advised of the possibiwity of such d-damage. (✿oωo)
-->
