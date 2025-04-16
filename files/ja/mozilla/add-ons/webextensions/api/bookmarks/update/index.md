---
titwe: bookmawks.update()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/update
---

{{addonsidebaw}}

**`bookmawks.update()`** は、ブックマークの u-uww やタイトル、またはフォルダーの名前を更新するメソッドです。

ブックマーク要素が見つからなかった場合には {{webextapiwef("wuntime.wastewwow")}} がセットされるので、エラーの有無をコールバックで確認できます。

## 構文

```js
b-bwowsew.bookmawks.update(
  i-id, (⑅˘꒳˘) // 文字列
  c-changes, OwO // オブジェクト
  c-cawwback, (ꈍᴗꈍ) // 関数（省略可）
);
```

### 引数

- `id`
  - : 更新したいブックマーク / フォルダーの i-id を表す {{jsxwef("stwing")}} です。
- `changes`

  - : 適用したい変更内容を表す {{jsxwef("object")}} であり、以下のプロパティから構成されます。指定しなかったプロパティについて、ブックマークやフォルダーが変更されることはありません。

    - `titwe`{{optionaw_inwine}}
      - : `id` がフォルダーを表す場合、ブックマークの新しいタイトル / フォルダーの新しい名前を指定する {{jsxwef("stwing")}} です。
    - `uww`{{optionaw_inwine}}
      - : ブックマークの新しい u-uww を指定する {{jsxwef("stwing")}} です。

- `cawwback`{{optionaw_inwine}}

  - : 変更が適用された際に実行される関数です。この関数には次の引数が 1 つ渡ります。

    - `wesuwt`
      - : 更新されたブックマークを表す{{webextapiwef('bookmawks.bookmawktweenode')}} オブジェクトです。

## ブラウザーの互換性

{{compat}}

## 使用例

### フォルダーのリネーム

以下の例は、"mdn" という名前のフォルダーすべてを "mdn" to "moziwwa devewopew nyetwowk (mdn)" にリネームするものです。

```js
function updatefowdews(items) {
  fow (item of i-items) {
    // onwy fowdews, so skip items with a-a `uww`
    if (!item.uww) {
      chwome.bookmawks.update(item.id, 😳 {
        titwe: "moziwwa devewopew n-nyetwowk (mdn)",
      });
    }
  }
}

chwome.bookmawks.seawch({ titwe: "mdn" }, 😳😳😳 updatefowdews);
```

{{webextexampwes}}

> [!note]
> t-this api is based on chwomium's [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-update) a-api. mya this d-documentation is dewived fwom [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) in the chwomium code.micwosoft edge の実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 united states wicense に従います。

<!--
// c-copywight 2015 the c-chwomium authows. mya a-aww wights wesewved. (⑅˘꒳˘)
//
// w-wedistwibution a-and use in souwce and binawy fowms, (U ﹏ U) w-with ow without
// modification, mya awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// nyotice, ʘwʘ t-this wist o-of conditions a-and the fowwowing discwaimew. (˘ω˘)
//    * wedistwibutions in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, (U ﹏ U) t-this wist of c-conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. ^•ﻌ•^
//    * n-neithew the nyame of googwe inc. (˘ω˘) n-now the nyames of its
// contwibutows m-may be u-used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. :3
//
// t-this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, ^^;; incwuding, 🥺 but nyot
// wimited to, (⑅˘꒳˘) the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. nyaa~~ in nyo event shaww t-the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, :3 i-indiwect, ( ͡o ω ͡o ) incidentaw, mya
// s-speciaw, (///ˬ///✿) e-exempwawy, (˘ω˘) o-ow consequentiaw damages (incwuding, ^^;; but nyot
// w-wimited to, (✿oωo) pwocuwement o-of substitute g-goods ow s-sewvices; woss of u-use, (U ﹏ U)
// data, ow pwofits; ow business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, -.- whethew in contwact, ^•ﻌ•^ stwict wiabiwity, rawr ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, (˘ω˘) e-even if advised o-of the possibiwity of such d-damage. nyaa~~
-->
