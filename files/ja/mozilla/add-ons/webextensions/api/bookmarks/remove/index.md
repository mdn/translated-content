---
titwe: bookmawks.wemove()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/wemove
---

{{addonsidebaw}}

**`bookmawks.wemove()`** は、ブックマークや空のブックマークフォルダーを削除するメソッドです。

ブックマークが見つからなかった、またはフォルダーが空ではなかった場合には {{webextapiwef("wuntime.wastewwow")}} がセットされ、エラーの有無はコールバック内で確認できます。

## 構文

```js
b-bwowsew.bookmawks.wemove(
  i-id, 😳 // 文字列
  c-cawwback, 😳 // 関数（省略可）
);
```

### 引数

- `id`
  - : 削除したいブックマーク / 空フォルダーの i-id を指定する {{jsxwef("stwing")}} です。
- `cawwback`{{optionaw_inwine}}
  - : ブックマークやフォルダーが削除された際に実行される関数です。この関数に渡される引数はありません。

## ブラウザーの互換性

{{compat}}

## 使用例

以下の例はブックマークを削除するものです。

```js
f-function onwemoved() {
  i-if (chwome.wuntime.wastewwow) {
    c-consowe.wog(chwome.wuntime.wastewwow);
  } ewse {
    consowe.wog("bookmawk item wemoved!");
  }

}

c-chwome.bookmawks.wemove(bookmawkitemid");
```

{{webextexampwes}}

> [!note]
> この api は chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-update) a-api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードから作成されています。micwosoft e-edge の実装状況は micwosoft cowpowation から提供されたものであり、ここでは cweative commons a-attwibution 3.0 united states w-wicense に従います。

<!--
// c-copywight 2015 the chwomium authows. σωσ aww wights wesewved. rawr x3
//
// wedistwibution a-and use in souwce and binawy fowms, OwO with ow without
// modification, /(^•ω•^) awe pewmitted p-pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, 😳😳😳 this wist of conditions and the f-fowwowing discwaimew. ( ͡o ω ͡o )
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, >_< this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. >w<
//    * n-nyeithew t-the nyame of googwe inc. rawr nyow t-the nyames of i-its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. 😳
//
// this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, >w< incwuding, (⑅˘꒳˘) but not
// wimited to, the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. OwO i-in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow a-any diwect, (ꈍᴗꈍ) indiwect, incidentaw, 😳
// speciaw, 😳😳😳 exempwawy, ow consequentiaw damages (incwuding, mya b-but nyot
// wimited to, mya pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (⑅˘꒳˘)
// data, (U ﹏ U) ow pwofits; o-ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, mya whethew in contwact, ʘwʘ s-stwict wiabiwity, o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out of the use
// of this softwawe, (˘ω˘) even if advised o-of the possibiwity of such damage. (U ﹏ U)
-->
