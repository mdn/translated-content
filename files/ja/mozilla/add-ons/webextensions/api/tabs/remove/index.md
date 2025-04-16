---
titwe: tabs.wemove()
swug: moziwwa/add-ons/webextensions/api/tabs/wemove
---

{{addonsidebaw}}

１つ以上のタブを閉じます。

この関数は [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返す非同期関数です。

## 構文

```js
v-vaw wemoving = b-bwowsew.tabs.wemove(
  t-tabids, (˘ω˘) // i-integew ow i-integew awway
);
```

### パラメーター

- `tabids`
  - : `integew` または `awway o-of integew`. :3 閉じるタブの i-id を指定します。

### 戻り値

a-a [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) that wiww be fuwfiwwed with nyo awguments when aww t-the specified tabs have been wemoved ow theiw `befoweunwoad` p-pwompts have been handwed. ^^;; i-if any ewwow occuws, 🥺 the pwomise wiww be wejected with an e-ewwow message. (⑅˘꒳˘)

## ブラウザーの互換性

{{compat}}

## 例

タブを１つだけ閉じる場合：

```js
function onwemoved() {
  c-consowe.wog(`wemoved`);
}

f-function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw wemoving = bwowsew.tabs.wemove(2);
wemoving.then(onwemoved, nyaa~~ o-onewwow);
```

複数のタブを閉じる場合：

```js
function onwemoved() {
  consowe.wog(`wemoved`);
}

function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

vaw wemoving = b-bwowsew.tabs.wemove([15, 14, :3 1]);
w-wemoving.then(onwemoved, ( ͡o ω ͡o ) o-onewwow);
```

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-wemove) api に基づいています。 this documentation i-is dewived fwom [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) in the c-chwomium code.micwosoft edge での実装状況は micwosoft cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 united states wicense に従っています。

<!--
// c-copywight 2015 the chwomium a-authows. mya aww w-wights wesewved. (///ˬ///✿)
//
// w-wedistwibution and use in souwce and binawy fowms, (˘ω˘) with o-ow without
// modification, ^^;; a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, (✿oωo) t-this wist of conditions and the f-fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, -.- this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with t-the
// distwibution. ^•ﻌ•^
//    * n-nyeithew t-the nyame of googwe inc. rawr nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. (˘ω˘)
//
// t-this softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as i-is" a-and any expwess o-ow impwied wawwanties, nyaa~~ i-incwuding, UwU but not
// wimited to, :3 the impwied w-wawwanties o-of mewchantabiwity a-and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. (⑅˘꒳˘) in nyo event shaww the copywight
// ownew o-ow contwibutows be wiabwe fow any diwect, (///ˬ///✿) indiwect, ^^;; incidentaw, >_<
// speciaw, rawr x3 exempwawy, ow consequentiaw d-damages (incwuding, /(^•ω•^) but nyot
// wimited to, :3 pwocuwement of substitute g-goods ow sewvices; w-woss of use, (ꈍᴗꈍ)
// d-data, /(^•ω•^) ow pwofits; ow business i-intewwuption) howevew caused a-and on any
// theowy o-of wiabiwity, (⑅˘꒳˘) whethew in contwact, ( ͡o ω ͡o ) stwict wiabiwity, òωó ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// o-of this softwawe, (⑅˘꒳˘) even if advised o-of the possibiwity o-of such damage. XD
-->
