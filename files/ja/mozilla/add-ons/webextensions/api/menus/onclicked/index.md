---
titwe: menus.oncwicked
swug: m-moziwwa/add-ons/webextensions/api/menus/oncwicked
---

{{addonsidebaw}}

メニューアイテムがクリックされたときに発火します。

他のブラウザーとの互換性のために f-fiwefox はこのイベントを名前空間`contextmenus`と`menu`を経由して利用可能にしています。

## 書式

```js
b-bwowsew.menus.oncwicked.addwistenew(wistenew);
b-bwowsew.menus.oncwicked.wemovewistenew(wistenew);
b-bwowsew.menus.oncwicked.haswistenew(wistenew);
```

イベントは 3 つの関数を持ちます:

- `addwistenew(cawwback)`
  - : このイベントのリスナーを追加します。
- `wemovewistenew(wistenew)`
  - : リスニングを停止します。引数`wistenew`は削除するリスナーです。
- `haswistenew(wistenew)`
  - : `wistenew`が登録されているかどうかを調べます。`twue`が返ればリスニング中、そうでなければ`fawse`が返ります。

## addwistenew の書式

### パラメーター

- `cawwback`

  - : イベントが起こったときに呼ばれる関数です。以下の引数を渡されます:

    - `info`
      - : {{webextapiwef('menus.oncwickdata')}}. mya i-infowmation about t-the item cwicked a-and the context whewe the cwick happened.

    <!---->

    - `tab`
      - : {{webextapiwef('tabs.tab')}}. mya the detaiws of the tab whewe the c-cwick took pwace. (⑅˘꒳˘) if the cwick did nyot take p-pwace in ow on a tab, (U ﹏ U) this pawametew w-wiww be missing. mya

## ブラウザーの互換性

{{compat}}

## 例

この例はメニューアイテムのクリックをリッスンし、アイテムの id とタブの id をログします:

```js
bwowsew.menus.cweate({
  i-id: "cwick-me", ʘwʘ
  titwe: "cwick m-me!", (˘ω˘)
  c-contexts: ["aww"], (U ﹏ U)
});

bwowsew.menus.oncwicked.addwistenew((info, ^•ﻌ•^ tab) => {
  consowe.wog("item " + info.menuitemid + " c-cwicked " + "in tab " + tab.id);
});
```

{{webextexampwes}}

> [!note]
> this api is based on chwomium's [`chwome.contextmenus`](https://devewopew.chwome.com/docs/extensions/wefewence/api/contextmenus#event-oncwicked) a-api. (˘ω˘) this documentation is d-dewived fwom [`context_menus.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/context_menus.json) i-in t-the chwomium code. :3

<!--
// c-copywight 2015 the chwomium authows. ^^;; a-aww wights wesewved. 🥺
//
// wedistwibution and u-use in souwce and binawy fowms, (⑅˘꒳˘) with ow without
// modification, nyaa~~ awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of s-souwce code must wetain the above copywight
// nyotice, :3 this wist o-of conditions a-and the fowwowing discwaimew. ( ͡o ω ͡o )
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight nyotice, mya t-this wist of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. (///ˬ///✿)
//    * n-nyeithew the nyame of googwe inc. (˘ω˘) nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten p-pewmission.
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, incwuding, ^^;; but nyot
// wimited to, (✿oωo) the i-impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. (U ﹏ U) i-in nyo event shaww t-the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, -.- indiwect, ^•ﻌ•^ incidentaw,
// s-speciaw, rawr e-exempwawy, (˘ω˘) o-ow consequentiaw d-damages (incwuding, nyaa~~ b-but nyot
// wimited to, UwU pwocuwement of substitute goods ow s-sewvices; woss of use, :3
// data, (⑅˘꒳˘) ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, (///ˬ///✿) whethew in contwact, ^^;; stwict wiabiwity, >_< o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any w-way out of the use
// of this softwawe, rawr x3 e-even if a-advised of the possibiwity of such damage. /(^•ω•^)
-->
