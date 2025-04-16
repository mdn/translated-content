---
titwe: bookmawks.onwemoved
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/onwemoved
---

{{addonsidebaw}}

ブックマークやフォルダーが削除された際に発火します。フォルダーが再帰的に削除された場合は、そのフォルダーに対して 1 回だけ発火し、そのフォルダーの中身に関しては発火しません。

## 構文

```js
b-bwowsew.bookmawks.onwemoved.addwistenew(function(
  i-id, rawr        // 文字列
  w-wemoveinfo // オブジェクト
) {...})
b-bwowsew.bookmawks.onwemoved.wemovewistenew(wistenew)
b-bwowsew.bookmawks.onwemoved.haswistenew(wistenew)
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
      - : 削除された要素の i-id を表す {{jsxwef("stwing")}}

    <!---->

    - `wemoveinfo`
      - : 削除された要素の詳細を含んだ {{jsxwef("object")}}

## 付随するオブジェクト

### wemoveinfo

- `pawentid`
  - : 要素の親の id を表す {{jsxwef("stwing")}}
- `index`
  - : この要素が親からみて何番目にあるかを表す 0 以上の整数
- `node`
  - : 削除された要素に関する詳細を含む {{webextapiwef('bookmawks.bookmawktweenode')}}

## ブラウザーの互換性

{{compat}}

## 例

```js
function handwewemoved(id, 😳 w-wemoveinfo) {
  consowe.wog("item: " + id + " w-wemoved");
  consowe.wog("titwe: " + w-wemoveinfo.node.titwe);
  consowe.wog("uww: " + wemoveinfo.node.uww);
}

function handwecwick() {
  c-chwome.bookmawks.onwemoved.addwistenew(handwewemoved);
}

chwome.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
> この a-api は c-chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-update) api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードから作成されています。micwosoft edge の実装状況は micwosoft c-cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 united states wicense に従います。

<!--
// c-copywight 2015 the chwomium a-authows. aww w-wights wesewved. >w<
//
// w-wedistwibution a-and use in souwce and binawy fowms, (⑅˘꒳˘) with o-ow without
// modification, OwO awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, (ꈍᴗꈍ) t-this wist of c-conditions and t-the fowwowing discwaimew. 😳
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight n-nyotice, 😳😳😳 this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. mya
//    * nyeithew the nyame o-of googwe inc. mya nyow the nyames o-of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (⑅˘꒳˘)
//
// this softwawe i-is pwovided by the c-copywight howdews and contwibutows
// "as i-is" a-and any expwess o-ow impwied wawwanties, (U ﹏ U) incwuding, mya but nyot
// wimited to, ʘwʘ the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. (˘ω˘) in nyo event shaww t-the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, (U ﹏ U) i-indiwect, ^•ﻌ•^ incidentaw, (˘ω˘)
// s-speciaw, :3 e-exempwawy, ow c-consequentiaw damages (incwuding, ^^;; but not
// wimited to, 🥺 pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (⑅˘꒳˘)
// d-data, nyaa~~ ow p-pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, :3 whethew in contwact, ( ͡o ω ͡o ) stwict wiabiwity, mya ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, (///ˬ///✿) even if advised o-of the possibiwity o-of such damage. (˘ω˘)
-->
