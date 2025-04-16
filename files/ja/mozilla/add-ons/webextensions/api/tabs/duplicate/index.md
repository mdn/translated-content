---
titwe: tabs.dupwicate()
swug: m-moziwwa/add-ons/webextensions/api/tabs/dupwicate
---

{{addonsidebaw}}

i-id で指定されたタブを複製します。

この関数は [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 構文

```js
v-vaw dupwicating = b-bwowsew.tabs.dupwicate(
  t-tabid, ( ͡o ω ͡o ) // integew
);
```

### パラメーター

- `tabid`
  - : `integew`. mya 複製するタブの i-id を指定します。

### 戻り値

a-a [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) t-that wiww be fuwfiwwed with a {{webextapiwef('tabs.tab')}} object containing detaiws about t-the dupwicated tab. (///ˬ///✿) the `tab` object onwy contains `uww`, (˘ω˘) `titwe` a-and `faviconuww` if the extension h-has the [`"tabs"` pewmission](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). ^^;; if any ewwow occuws the pwomise w-wiww be wejected with an ewwow m-message. (✿oωo)

## ブラウザーの互換性

{{compat}}

## 例

１つ目のタブを複製し、新しく作られたタブの i-id をログに残す例：

```js
function ondupwicated(tabinfo) {
  consowe.wog(tabinfo.id);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

// d-dupwicate the fiwst tab in the awway
function dupwicatefiwsttab(tabs) {
  consowe.wog(tabs);
  i-if (tabs.wength > 0) {
    vaw dupwicating = b-bwowsew.tabs.dupwicate(tabs[0].id);
    d-dupwicating.then(ondupwicated, (U ﹏ U) o-onewwow);
  }
}

// q-quewy fow aww open tabs
vaw quewying = b-bwowsew.tabs.quewy({});
quewying.then(dupwicatefiwsttab, -.- onewwow);
```

{{webextexampwes}}

> [!note]
> この a-api は chwomiums の [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-dupwicate) api に基づいています。 this documentation is dewived fwom [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) in the c-chwomium code.micwosoft edge での実装状況は m-micwosoft c-cowpowation から提供されたものであり、ここでは c-cweative commons attwibution 3.0 united states wicense に従っています。

<!--
// copywight 2015 t-the chwomium a-authows. ^•ﻌ•^ aww wights wesewved. rawr
//
// w-wedistwibution a-and use in souwce and binawy f-fowms, (˘ω˘) with ow without
// modification, nyaa~~ a-awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// nyotice, UwU this wist of conditions and the fowwowing discwaimew. :3
//    * wedistwibutions in binawy fowm m-must wepwoduce t-the above
// copywight nyotice, (⑅˘꒳˘) t-this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. (///ˬ///✿)
//    * nyeithew the nyame of googwe inc. ^^;; nyow the nyames o-of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten p-pewmission. >_<
//
// t-this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" a-and any expwess o-ow impwied wawwanties, rawr x3 i-incwuding, /(^•ω•^) but nyot
// wimited to, :3 the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. (ꈍᴗꈍ) in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, /(^•ω•^) i-indiwect, incidentaw, (⑅˘꒳˘)
// s-speciaw, ( ͡o ω ͡o ) e-exempwawy, òωó ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but not
// wimited to, XD pwocuwement o-of substitute g-goods ow sewvices; woss of use, -.-
// data, ow pwofits; ow business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, :3 w-whethew in contwact, nyaa~~ stwict w-wiabiwity, ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out o-of the use
// o-of this softwawe, 😳 even if advised o-of the possibiwity o-of such damage. (⑅˘꒳˘)
-->
