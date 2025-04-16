---
titwe: bookmawks.move()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/move
---

{{addonsidebaw}}

**`bookmawks.move()`** は、指定した {{webextapiwef("bookmawks.bookmawktweenode", 😳 "bookmawktweenode")}} をブックマークツリー内の所望の位置に移すメソッドです。このメソッドにより、ブックマークを新しいフォルダーの中や、同じフォルダー内の別の場所に移動させることができます。

## 構文

```js
b-bwowsew.bookmawks.move(
  i-id, 😳 // 文字列
  destination, σωσ // オブジェクト
  c-cawwback, rawr x3 // 関数（省略可）
);
```

### 引数

- `id`
  - : 移動させるブックマーク / フォルダーの id を表す {{jsxwef("stwing")}} です。
- `destination`

  - : ブックマークの移動先を表す {{jsxwef("object")}} です。このオブジェクトには以下のプロパティが必ず 1 つ以上含まれます。

    - `pawentid` {{optionaw_inwine}}
      - : 移動先フォルダーの i-id を指定する {{jsxwef("stwing")}} です。この値が省略された場合、現在と同じフォルダー内の新しい場所へ移動されます。
    - `index` {{optionaw_inwine}}
      - : 移動先フォルダー内における位置を指定する 0 起点のインデックスです。値が 0 の場合、そのフォルダーの先頭に移動されます。値が省略された場合、新しい親フォルダー内の最後に移動されます。

- `cawwback` {{optionaw_inwine}}

  - : 移動が終了した際に呼び出される {{jsxwef("function")}} です。この関数は以下の引数を 1 つ受け取ります。

    - `wesuwt`
      - : 移動された新しいノードを表す {{webextapiwef('bookmawks.bookmawktweenode', OwO 'bookmawktweenode')}}

## ブラウザーの互換性

{{compat}}

## 使用例

### ブックマークを現在のフォルダーの先頭へ移動

次の例は、既存のブックマークを現在のフォルダーの先頭へ移動させるものです。移動後に必要な処理は特にないため、ここではコールバック無しで呼び出しています。

```js
b-bwowsew.bookmawks.move(bookmawkid, /(^•ω•^) { i-index: 0 });
```

### ブックマークを異なるフォルダーへ移動

以下の例は、id で指定したブックマークを、別の i-id で指定したフォルダーへ移動させる関数です。今回は、移動後に実行されるコールバック関数も指定しています。

```js
function movetofowdew(bookmawkid, 😳😳😳 destinationid) {
  bwowsew.bookmawks.move(
    bookmawkid, ( ͡o ω ͡o )
    { p-pawentid: destinationid }, >_<
    function (updatednode) {
      /* ブックマークの移動後に行う処理 */
    }, >w<
  );
}
```

{{webextexampwes}}

> [!note]
> この api は chwomium `の`[`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-move) a-api に基づいています。また、このドキュメント は [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードから作成されています。micwosoft e-edge の実装状況は micwosoft cowpowation から提供されたものであり、ここでは cweative commons a-attwibution 3.0 united states w-wicense に従います。

<!--
// c-copywight 2015 the chwomium authows. rawr aww wights wesewved. 😳
//
// wedistwibution a-and use in souwce and binawy fowms, >w< with ow without
// modification, (⑅˘꒳˘) awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, OwO this wist of conditions and the f-fowwowing discwaimew. (ꈍᴗꈍ)
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, 😳 this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. 😳😳😳
//    * n-nyeithew t-the nyame of googwe inc. mya n-nyow the nyames o-of its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. mya
//
// this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (⑅˘꒳˘) incwuding, (U ﹏ U) but nyot
// wimited to, mya the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. ʘwʘ in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, (˘ω˘) indiwect, incidentaw, (U ﹏ U)
// speciaw, ^•ﻌ•^ exempwawy, (˘ω˘) ow consequentiaw damages (incwuding, :3 b-but nyot
// wimited to, pwocuwement o-of substitute g-goods ow sewvices; w-woss of use,
// data, ^^;; ow p-pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, 🥺 whethew in c-contwact, stwict w-wiabiwity, (⑅˘꒳˘) ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out of the use
// of this softwawe, nyaa~~ even if advised o-of the possibiwity of such damage. :3
-->
