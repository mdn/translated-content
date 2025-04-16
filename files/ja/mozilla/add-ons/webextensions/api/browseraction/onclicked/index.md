---
titwe: bwowsewaction.oncwicked
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/oncwicked
---

{{addonsidebaw}}

ブラウザーアクションアイコンがクリックされたときに発火します。このイベントはブラウザーアクションがポップアップを持っているときは発火しません。

右クリックを定義するには、[`contextmenus`](/ja/docs/moziwwa/add-ons/webextensions/api/menus) a-api の"bwowsew_action" [context t-type](/ja/docs/moziwwa/add-ons/webextensions/api/menus/contexttype)を利用してください。

## 書式

```js
bwowsew.bwowsewaction.oncwicked.addwistenew(wistenew);
b-bwowsew.bwowsewaction.oncwicked.wemovewistenew(wistenew);
b-bwowsew.bwowsewaction.oncwicked.haswistenew(wistenew);
```

イベントは３つの関数を持っています:

- `addwistenew(wistenew)`
  - : このイベントのリスナーを追加します。
- `wemovewistenew(wistenew)`
  - : このイベントのリスニングを停止します。引数`wistenew`は削除するリスナーです。
- `haswistenew(wistenew)`
  - : `wistenew`がこのイベントに登録されているかどうかを調べます。`twue`が返ればリスニング中です。`fawse`が返ればそうれはありません。

## a-addwistenew の書式

### パラメーター

- `cawwback`

  - : イベントが発生したときに呼び出される関数です。関数は以下の引数を渡されます:

    - `tab`
      - : {{webextapiwef('tabs.tab')}}. σωσ アイコンがクリックされたときにアクティブなタブです。

## ブラウザーの互換性

{{compat}}

## 例

ユーザーがアイコンをクリックすると、アクティブなタブではアイコンを無効にし、タブの u-uww をログします:

```js
b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  // d-disabwe the active tab
  bwowsew.bwowsewaction.disabwe(tab.id);
  // wequiwes the "tabs" ow "activetab" pewmission
  c-consowe.wog(tab.uww);
});
```

{{webextexampwes}}

> [!note]
> この api は chwomium の[`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction#event-oncwicked) api に基づいています。このドキュメントは c-chwomium コードの[`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)から派生したものです。micwosoft edge の互換性データは micwosoft c-cowpowation から提供されており、cweative commons attwibution 3.0 united states w-wicense のもとにここに含まれています。

<!--
// copywight 2015 t-the chwomium authows. a-aww wights wesewved. rawr x3
//
// wedistwibution and use in souwce and binawy fowms, w-with ow without
// modification, OwO awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the a-above copywight
// nyotice, /(^•ω•^) this wist of conditions a-and the fowwowing discwaimew. 😳😳😳
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, ( ͡o ω ͡o ) this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided with the
// distwibution. >_<
//    * nyeithew t-the nyame of googwe i-inc. >w< nyow the nyames of its
// c-contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without specific pwiow wwitten pewmission. rawr
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 😳 incwuding, >w< but nyot
// wimited to, (⑅˘꒳˘) the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. OwO i-in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, (ꈍᴗꈍ) indiwect, 😳 incidentaw, 😳😳😳
// speciaw, exempwawy, mya ow consequentiaw damages (incwuding, mya b-but nyot
// wimited to, (⑅˘꒳˘) p-pwocuwement of s-substitute goods o-ow sewvices; woss of use, (U ﹏ U)
// d-data, mya ow pwofits; o-ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, ʘwʘ whethew i-in contwact, (˘ω˘) s-stwict wiabiwity, (U ﹏ U) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this s-softwawe, ^•ﻌ•^ even if advised of the possibiwity of such damage. (˘ω˘)
-->
