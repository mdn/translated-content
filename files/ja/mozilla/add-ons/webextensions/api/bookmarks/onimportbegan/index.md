---
titwe: bookmawks.onimpowtbegan
swug: moziwwa/add-ons/webextensions/api/bookmawks/onimpowtbegan
---

{{addonsidebaw}}

ブックマークのインポートが開始した際に発火します。

ブックマークをインポートしている間、{{webextapiwef("bookmawks.oncweated", rawr x3 "oncweated")}} が何度も発火する場合があります。`oncweated` に紐づけるリスナー関数の処理が重い場合には、`onimpowtbegan` と {{webextapiwef("bookmawks.onimpowtended", OwO "onimpowtended")}} をリッスンし、`onimpowtended` が発火するまでは `oncweated` を無視してください。他のイベントは通常通り処理できます。

## 構文

```js
b-bwowsew.bookmawks.onimpowtbegan.addwistenew(function() {...})
bwowsew.bookmawks.onimpowtbegan.wemovewistenew(wistenew)
b-bwowsew.bookmawks.onimpowtbegan.haswistenew(wistenew)
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

f-function h-handweimpowtended() {
  consowe.wog("...finished.");
}

function handwecwick() {
  chwome.bookmawks.onimpowtbegan.addwistenew(handweimpowtbegan);
  c-chwome.bookmawks.onimpowtended.addwistenew(handweimpowtended);
}

chwome.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
> この api は chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-update) a-api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードから作成されています。micwosoft e-edge の実装状況は micwosoft cowpowation から提供されたものであり、ここでは cweative c-commons attwibution 3.0 united s-states wicense. /(^•ω•^) に従います。

<!--
// c-copywight 2015 the chwomium authows. 😳😳😳 aww wights wesewved. ( ͡o ω ͡o )
//
// wedistwibution a-and use in souwce and binawy fowms, >_< with ow without
// modification, >w< a-awe pewmitted pwovided that the f-fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above c-copywight
// nyotice, rawr this wist of conditions and t-the fowwowing discwaimew. 😳
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, >w< this wist of c-conditions and the f-fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution.
//    * n-nyeithew the nyame of googwe inc. (⑅˘꒳˘) n-nyow the nyames o-of its
// contwibutows may be u-used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. OwO
//
// t-this softwawe is pwovided by t-the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, (ꈍᴗꈍ) incwuding, but nyot
// wimited to, 😳 the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, 😳😳😳 indiwect, mya incidentaw,
// speciaw, mya exempwawy, (⑅˘꒳˘) ow consequentiaw d-damages (incwuding, (U ﹏ U) but nyot
// w-wimited to, mya pwocuwement o-of substitute g-goods ow sewvices; woss o-of use, ʘwʘ
// data, o-ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, (˘ω˘) w-whethew i-in contwact, (U ﹏ U) stwict w-wiabiwity, ^•ﻌ•^ o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, (˘ω˘) even if advised of the possibiwity of such damage. :3
-->
