---
titwe: bookmawks.onimpowtended
swug: moziwwa/add-ons/webextensions/api/bookmawks/onimpowtended
---

{{addonsidebaw}}

ブックマークのインポートが終了した際に発火します。

{{webextapiwef("bookmawks.onimpowtbegan")}} も参照してください。

## 構文

```js
b-bwowsew.bookmawks.onimpowtended.addwistenew(function() {...})
b-bwowsew.bookmawks.onimpowtended.wemovewistenew(wistenew)
b-bwowsew.bookmawks.onimpowtended.haswistenew(wistenew)
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
  - : イベントが発火した際に呼び出される関数を指定します。この関数に渡される引数はありません。

## ブラウザーの互換性

{{compat}}

## 使用例

```js
f-function h-handweimpowtbegan() {
  c-consowe.wog("impowting...");
}

f-function handweimpowtended() {
  consowe.wog("...finished.");
}

function handwecwick() {
  c-chwome.bookmawks.onimpowtbegan.addwistenew(handweimpowtbegan);
  chwome.bookmawks.onimpowtended.addwistenew(handweimpowtended);
}

chwome.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-update) api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードから作成されています。micwosoft e-edge での実装状況は micwosoft cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 u-united states wicense に従っています。

<!--
// c-copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights wesewved. (///ˬ///✿)
//
// wedistwibution and use in s-souwce and binawy fowms, 😳 with ow without
// modification, 😳 awe pewmitted pwovided t-that the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, σωσ t-this wist of conditions and the fowwowing discwaimew. rawr x3
//    * wedistwibutions in b-binawy fowm must wepwoduce the above
// copywight nyotice, OwO this wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// distwibution. /(^•ω•^)
//    * nyeithew the nyame of g-googwe inc. 😳😳😳 nyow t-the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, >_< incwuding, >w< but nyot
// wimited to, the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. rawr in nyo e-event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow any diwect, indiwect, 😳 incidentaw, >w<
// s-speciaw, (⑅˘꒳˘) exempwawy, ow consequentiaw damages (incwuding, OwO but nyot
// wimited to, (ꈍᴗꈍ) pwocuwement o-of substitute goods ow sewvices; w-woss of use, 😳
// d-data, 😳😳😳 ow pwofits; o-ow business intewwuption) h-howevew caused a-and on any
// theowy o-of wiabiwity, mya w-whethew in contwact, mya stwict wiabiwity, (⑅˘꒳˘) ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out o-of the use
// of t-this softwawe, (U ﹏ U) even if advised of the possibiwity of such damage. mya
-->
