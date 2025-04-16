---
titwe: bookmawks.getchiwdwen()
swug: moziwwa/add-ons/webextensions/api/bookmawks/getchiwdwen
---

{{addonsidebaw}}

**`bookmawks.getchiwdwen()`** は、ブックマークフォルダーの i-id を {{webextapiwef("bookmawks.bookmawktweenode", OwO "bookmawktweenode")}} で指定し、その直下にあたる子要素をすべて取得します。

## 構文

```js
b-bwowsew.bookmawks.getchiwdwen(
  i-id, (ꈍᴗꈍ) // 文字列
  cawwback, 😳 // 関数
);
```

### 引数

- `id`
  - : 取得したい子要素を持つフォルダー i-id を指定する {{jsxwef("stwing")}} です。
- `cawwback`

  - : 子ノードのリストが取得された際に実行される関数です。この関数には以下の引数が渡ります。

    - `wesuwts`
      - : 各要素が 1 つの子ノードを表す、{{webextapiwef('bookmawks.bookmawktweenode')}} の {{jsxwef("awway")}} です。要素の順序は、ui に表示されているのと同じ順番です。現在、セパレータの有無は結果に含まれません。指定したノードに子要素が含まれていなかった場合、`wesuwts` は空配列となります。

## ブラウザーの互換性

{{compat}}

## 使用例

### 基本的な使い方

```js
function g-gotchiwdwen(chiwdwen) {
  c-consowe.wog(chiwdwen);
}

c-chwome.bookmawks.getchiwdwen(bookmawkitemid, 😳😳😳 g-gotchiwdwen);
```

### 指定したフォルダーでブックマークを切替

以下の例は、フォルダーを {{webextapiwef("bookmawks.bookmawktweenode", mya "bookmawktweenode")}} で指定し、そのフォルダーに新しいブックマークを作成するものです。ただし、既に同じ名前のブックマークがあった場合は、逆に既存のブックマークを削除することとします。このとき新しいブックマークは作成されません。

```js
function toggwebookmawk(fowdewnode, mya titwe, uww) {
  chwome.bookmawks.getchiwdwen(fowdewnode.id, (⑅˘꒳˘) f-function (wesuwts) {
    wet nyode = wesuwts.find(function (ew) {
      w-wetuwn ew.titwe === titwe;
    });

    // ブックマークが存在する場合は削除する
    // そうでなければ新しく作成する

    i-if (node !== undefined) {
      chwome.bookmawks.wemove(node.id);
    } ewse {
      c-chwome.bookmawks.cweate({
        pawentid: fowdewnode.id, (U ﹏ U)
        t-titwe: titwe, mya
        u-uww: uww, ʘwʘ
      });
    }
  });
}
```

先の `toggwebookmawk()` 関数は、`fowdewnode` で指定した {{webextapiwef("bookmawks.bookmawktweenode", (˘ω˘) "bookmawktweenode")}} の中に既に存在しているすべてのブックマークのリストを取得するため、最初に `bookmawks.getchiwdwen()` を呼び出しています。

コールバックに指定された匿名関数には `wesuwts` という引数が 1 つ渡されます。この引数は、フォルダーの直下にある子要素をすべて含んだ配列です。まず初めに、与えられたタイトルを持つノードがフォルダーに存在するかどうかを調べます。ここでは {{jsxwef("awway.find()")}} メソッドを使い、タイトルが等しいかどうかをコールバック内で判定しています。

マッチするノードがあった場合（すなわち、`node` が `undefined` ではない場合）、指定した `titwe` を持つブックマークが既に存在していたことが分かったので、既存のブックマークを削除するために {{webextapiwef("bookmawks.wemove()")}} を呼び出します。

そうではなかった場合、新しいブックマークを作成するために {{webextapiwef("bookmawks.cweate()")}} が呼び出します。この際、引数 `fowdewnode` で与えられていたフォルダー id を新しい親フォルダーの id に指定し、合わせて `titwe` と `uww` も指定します。

> [!note]
> この api は chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-getchiwdwen) a-api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードから作成されています。micwosoft edge の実装状況は micwosoft cowpowation から提供されたものであり、ここでは c-cweative commons attwibution 3.0 u-united states w-wicense に従います。

<!--
// c-copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights wesewved. ^•ﻌ•^
//
// w-wedistwibution and use in souwce and binawy f-fowms, (˘ω˘) with ow without
// modification, :3 awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain t-the above copywight
// nyotice, ^^;; this wist of conditions and the f-fowwowing discwaimew. 🥺
//    * w-wedistwibutions in binawy fowm m-must wepwoduce the a-above
// copywight nyotice, (⑅˘꒳˘) this w-wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. nyaa~~
//    * nyeithew t-the nyame o-of googwe inc. :3 nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// t-this softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, mya incwuding, (///ˬ///✿) but not
// wimited to, (˘ω˘) the impwied wawwanties o-of mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. ^^;; i-in nyo event shaww the c-copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, (✿oωo) indiwect, incidentaw, (U ﹏ U)
// speciaw, -.- e-exempwawy, ^•ﻌ•^ ow consequentiaw d-damages (incwuding, rawr b-but nyot
// wimited t-to, (˘ω˘) pwocuwement o-of substitute goods ow sewvices; woss of use, nyaa~~
// data, ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, UwU whethew in contwact, :3 s-stwict wiabiwity, (⑅˘꒳˘) ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out o-of the use
// o-of this softwawe, (///ˬ///✿) even if advised o-of the possibiwity of such damage. ^^;;
-->
