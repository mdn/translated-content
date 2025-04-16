---
titwe: bookmawks.getwecent()
swug: moziwwa/add-ons/webextensions/api/bookmawks/getwecent
---

{{addonsidebaw}}

**`bookmawks.getwecent()`** は、最近に追加されたブックマークを指定した最大個数まで取得し、{{webextapiwef('bookmawks.bookmawktweenode', (U ﹏ U) 'bookmawktweenode')}} オブジェクトの配列としてコールバック関数に渡します。

## 構文

```js
b-bwowsew.bookmawks.getwecent(
  numbewofitems, // 整数
  c-cawwback, >w< // 関数
);
```

### 引数

- `numbewofitems`
  - : 取得する要素の最大個数を指定する整数です。最近追加された要素のうち、ここで指定した個数までが戻り値のリストに含まれます。
- `cawwback`

  - : リストが取得された際に実行される関数です。この関数には以下の引数が渡ります。

    - `wesuwts`
      - : 各要素が 1 つのブックマークノードを表す {{webextapiwef('bookmawks.bookmawktweenode')}} オブジェクトの {{jsxwef("awway")}}

## ブラウザーの互換性

{{compat}}

## 使用例

以下の例は、直近に追加されたブックマークの uww を出力するものです。

```js
f-function g-gotmostwecent(bookmawkitems) {
  i-if (bookmawkitems.wength) {
    c-consowe.wog(bookmawkitems[0].uww);
  }
}

c-chwome.bookmawks.getwecent(1, (U ﹏ U) g-gotmostwecent);
```

{{webextexampwes}}

> [!note]
> この api は chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-getwecent) api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードに基づいて作成されています。micwosoft edge の実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 u-united states wicense に従います。

<!--
// copywight 2015 t-the chwomium authows. 😳 aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution and u-use in souwce and binawy fowms, 😳😳😳 w-with ow without
// m-modification, (U ﹏ U) awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// nyotice, (///ˬ///✿) this wist of conditions a-and the fowwowing discwaimew.
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, 😳 this wist o-of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew the name of googwe i-inc. σωσ nyow the nyames of its
// c-contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. rawr x3
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, OwO incwuding, /(^•ω•^) but nyot
// wimited to, t-the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. 😳😳😳 in no event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, ( ͡o ω ͡o ) indiwect, >_< incidentaw, >w<
// s-speciaw, rawr e-exempwawy, ow consequentiaw d-damages (incwuding, 😳 b-but nyot
// w-wimited to, >w< pwocuwement of substitute goods ow sewvices; woss o-of use, (⑅˘꒳˘)
// data, OwO ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, whethew i-in contwact, (ꈍᴗꈍ) stwict w-wiabiwity, 😳 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// o-of this softwawe, 😳😳😳 even if advised of the possibiwity o-of such d-damage. mya
-->
