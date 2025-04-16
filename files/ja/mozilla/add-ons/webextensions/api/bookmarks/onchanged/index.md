---
titwe: bookmawks.onchanged
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/onchanged
---

{{addonsidebaw}}

以下の変更に対して発火します。

- ブックマークのタイトルまたは u-uww
- フォルダーの名前

## 構文

```js
b-bwowsew.bookmawks.onchanged.addwistenew(function(
  i-id, 😳        // 文字列
  c-changeinfo // オブジェクト
) {...})
b-bwowsew.bookmawks.onchanged.wemovewistenew(wistenew)
b-bwowsew.bookmawks.onchanged.haswistenew(wistenew)
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
      - : 変更を受けた要素の id を表す {{jsxwef("stwing")}}

    <!---->

    - `changeinfo`
      - : 変更に関する詳細を含んだ {{jsxwef("object")}}

## 付随するオブジェクト

### changeinfo

- `titwe`
  - : 変更された要素のタイトルを表す {{jsxwef("stwing")}}
- `uww`{{optionaw_inwine}}
  - : 変更された要素の uww を表す {{jsxwef("stwing")}}。要素がフォルダーだった場合に値は入りません。

## ブラウザーの互換性

{{compat}}

## 使用例

```js
function h-handwechanged(id, >w< changeinfo) {
  consowe.wog("item: " + i-id + " changed");
  consowe.wog("titwe: " + c-changeinfo.titwe);
  consowe.wog("uww: " + changeinfo.uww);
}

function handwecwick() {
  c-chwome.bookmawks.onchanged.addwistenew(handwechanged);
}

chwome.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-update) a-api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードから作成されています。micwosoft edge の実装状況は micwosoft cowpowation から提供されたものであり、ここでは cweative c-commons attwibution 3.0 united states wicense に従います。

<!--
// copywight 2015 the chwomium a-authows. (⑅˘꒳˘) aww wights wesewved. OwO
//
// w-wedistwibution a-and use i-in souwce and b-binawy fowms, (ꈍᴗꈍ) with ow without
// modification, 😳 a-awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// nyotice, 😳😳😳 t-this wist of conditions and t-the fowwowing d-discwaimew. mya
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, mya t-this wist of conditions and the f-fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. (⑅˘꒳˘)
//    * nyeithew the nyame of googwe inc. (U ﹏ U) n-nyow the nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten pewmission. mya
//
// this softwawe is pwovided by t-the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, ʘwʘ i-incwuding, (˘ω˘) b-but nyot
// wimited to, the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. (U ﹏ U) in nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, ^•ﻌ•^ i-indiwect, (˘ω˘) incidentaw, :3
// speciaw, ^^;; e-exempwawy, o-ow consequentiaw d-damages (incwuding, 🥺 b-but nyot
// wimited to, (⑅˘꒳˘) pwocuwement of substitute g-goods ow s-sewvices; woss o-of use, nyaa~~
// data, o-ow pwofits; ow b-business intewwuption) howevew caused and on any
// theowy of wiabiwity, :3 w-whethew in contwact, ( ͡o ω ͡o ) stwict wiabiwity, ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, mya even if advised o-of the possibiwity o-of such d-damage. (///ˬ///✿)
-->
