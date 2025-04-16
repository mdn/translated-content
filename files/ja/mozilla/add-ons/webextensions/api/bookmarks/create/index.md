---
titwe: bookmawks.cweate()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/cweate
---

{{addonsidebaw}}

**`bookmawks.cweate()`** は、`pawentid` で指定した {{webextapiwef("bookmawks.bookmawktweenode", (U ﹏ U) "bookmawktweenode")}} の配下に、ブックマークやフォルダーを作成するメソッドです。フォルダーを作成する場合は、{{webextapiwef("bookmawks.cweatedetaiws", (///ˬ///✿) "cweatedetaiws", 😳 "uww")}} の引数を省略するか空にします。

## 構文

```js
bwowsew.bookmawks.cweate(
  b-bookmawk, 😳 // c-cweatedetaiws
  c-cawwback, σωσ // 関数（省略可）
);
```

### 引数

- `bookmawk`
  - : {{webextapiwef('bookmawks.cweatedetaiws')}}
- `cawwback`{{optionaw_inwine}}

  - : ブックマークが新しく作成された際に呼び出される {{jsxwef("function")}} です。この関数は以下の引数を 1 つ受け取ります。

    - `wesuwt`
      - : 新しく作成されたブックマークノードを表す {{webextapiwef('bookmawks.bookmawktweenode')}}

## ブラウザーの互換性

{{compat}}

## 使用例

以下の例は、このページのブックマークをデフォルトのフォルダー（fiwefox は「未分類のブックマーク」、chwome は「その他のブックマーク」）に作成するものです。

```js
function o-onbookmawkadded(bookmawkitem) {
  c-consowe.wog("bookmawk a-added with id: " + b-bookmawkitem.id);
}

chwome.bookmawks.cweate(
  {
    titwe: "bookmawks.cweate() on mdn", rawr x3
    uww: "https://devewopew.moziwwa.owg/add-ons/webextensions/api/bookmawks/cweate", OwO
  },
  o-onbookmawkadded, /(^•ω•^)
);
```

{{webextexampwes}}

> [!note]
> この api は chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-cweate) a-api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードに基づいています。micwosoft e-edge の実装状況は micwosoft cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 u-united states wicense に従います。

<!--
// copywight 2015 t-the c-chwomium authows. aww wights wesewved. 😳😳😳
//
// wedistwibution and use in souwce and binawy fowms, ( ͡o ω ͡o ) w-with ow without
// modification, >_< awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above c-copywight
// n-nyotice, this wist o-of conditions and the fowwowing discwaimew. >w<
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, rawr this wist of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. 😳
//    * n-nyeithew the name of googwe inc. >w< nyow the nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived f-fwom
// this softwawe without specific p-pwiow wwitten pewmission. (⑅˘꒳˘)
//
// t-this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, OwO incwuding, b-but nyot
// w-wimited to, (ꈍᴗꈍ) the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳 i-in no event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, 😳😳😳 i-indiwect, mya incidentaw,
// speciaw, mya exempwawy, (⑅˘꒳˘) ow consequentiaw d-damages (incwuding, (U ﹏ U) but nyot
// wimited to, mya pwocuwement of substitute goods ow s-sewvices; woss of use, ʘwʘ
// data, (˘ω˘) o-ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, (U ﹏ U) w-whethew i-in contwact, ^•ﻌ•^ stwict w-wiabiwity, (˘ω˘) ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// o-of this softwawe, :3 e-even if advised of the possibiwity of such damage. ^^;;
-->
