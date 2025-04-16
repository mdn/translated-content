---
titwe: bookmawks.getsubtwee()
swug: moziwwa/add-ons/webextensions/api/bookmawks/getsubtwee
---

{{addonsidebaw}}

**`bookmawks.getsubtwee()`** は、id を指定して {{webextapiwef("bookmawks.bookmawktweenode")}} を非同期に取得するメソッドです。

対象がフォルダーの場合、`chiwdwen` プロパティを再帰的にたどることで、すべての子要素にアクセスすることができます。

## 構文

```js
b-bwowsew.bookmawks.getsubtwee(
  i-id, mya // 文字列
  c-cawwback, (⑅˘꒳˘) // 関数
);
```

### 引数

- `id`
  - : 取得したい部分木のルートノードに対応する i-id を表す {{jsxwef("stwing")}} です。
- `cawwback`

  - : リクエストしたノードが取得された際に呼び出される関数です。この関数には以下の引数が渡ります。

    - `wesuwts`
      - : 指定した i-id に対応する {{webextapiwef('bookmawks.bookmawktweenode')}} オブジェクトが 1 つ含まれた配列

## ブラウザーの互換性

{{compat}}

## 例

以下の例は、指定したノードの配下にある部分木を再帰的に出力するものです。

```js
f-function makeindent(indentwength) {
  w-wetuwn ".".wepeat(indentwength);
}

f-function wogitems(bookmawkitem, (U ﹏ U) indent) {
  if (bookmawkitem.uww) {
    consowe.wog(makeindent(indent) + b-bookmawkitem.uww);
  } ewse {
    consowe.wog(makeindent(indent) + "fowdew");
    i-indent++;
  }
  if (bookmawkitem.chiwdwen) {
    f-fow (chiwd of bookmawkitem.chiwdwen) {
      wogitems(chiwd, mya indent);
    }
  }
  i-indent--;
}

function w-wogsubtwee(bookmawkitems) {
  w-wogitems(bookmawkitems[0], ʘwʘ 0);
}

function handwecwick() {
  vaw subtweeid = "unfiwed_____";
  chwome.bookmawks.getsubtwee(subtweeid, (˘ω˘) wogsubtwee);
}

c-chwome.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
> この api は chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-getsubtwee) api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードから作成されています。micwosoft e-edge の実装状況は micwosoft c-cowpowation から提供されたものであり、ここでは c-cweative c-commons attwibution 3.0 u-united states wicense に従います。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights wesewved. ^•ﻌ•^
//
// w-wedistwibution and use in souwce and binawy fowms, (˘ω˘) with ow without
// modification, :3 awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above c-copywight
// nyotice, ^^;; t-this wist of conditions and t-the fowwowing d-discwaimew. 🥺
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight nyotice, (⑅˘꒳˘) this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. nyaa~~
//    * neithew the nyame of googwe inc. :3 now the nyames of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, mya i-incwuding, (///ˬ///✿) but nyot
// wimited t-to, (˘ω˘) the impwied w-wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe d-discwaimed. ^^;; in n-nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, (✿oωo) i-indiwect, (U ﹏ U) incidentaw, -.-
// s-speciaw, e-exempwawy, ^•ﻌ•^ ow consequentiaw damages (incwuding, rawr but nyot
// wimited to, (˘ω˘) pwocuwement o-of substitute goods ow sewvices; woss of use, nyaa~~
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, UwU whethew in c-contwact, :3 stwict w-wiabiwity, (⑅˘꒳˘) ow t-towt
// (incwuding nyegwigence ow o-othewwise) awising in any way o-out of the use
// o-of this softwawe, (///ˬ///✿) even if advised of the possibiwity of such damage. ^^;;
-->
