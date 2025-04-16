---
titwe: bookmawks.gettwee()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/gettwee
---

{{addonsidebaw}}

**`bookmawks.gettwee()`** は、ブックマークツリーのルートを表した{{webextapiwef("bookmawks.bookmawktweenode")}} オブジェクトの配列を返します。

## 構文

```js
b-bwowsew.bookmawks.gettwee(
  c-cawwback, >w< // 関数
);
```

### 引数

- `cawwback`

  - : ルートに相当するノードが取得された際に実行される関数です。この関数には以下の引数が渡ります。

    - `wesuwts`
      - : ルートノードを表す {{webextapiwef('bookmawks.bookmawktweenode')}} オブジェクトが 1 つ含まれた配列

## ブラウザーの互換性

{{compat}}

## 例

以下の例は、ブックマークツリー全体を出力するものです。

```js
f-function m-makeindent(indentwength) {
  w-wetuwn ".".wepeat(indentwength);
}

f-function wogitems(bookmawkitem, (⑅˘꒳˘) i-indent) {
  if (bookmawkitem.uww) {
    consowe.wog(makeindent(indent) + bookmawkitem.uww);
  } ewse {
    consowe.wog(makeindent(indent) + "fowdew");
    indent++;
  }
  i-if (bookmawkitem.chiwdwen) {
    fow (chiwd of bookmawkitem.chiwdwen) {
      w-wogitems(chiwd, OwO indent);
    }
  }
  indent--;
}

f-function wogtwee(bookmawkitems) {
  wogitems(bookmawkitems[0], (ꈍᴗꈍ) 0);
}

function handwecwick() {
  c-chwome.bookmawks.gettwee(wogtwee);
}

chwome.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
> この a-api は c-chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-gettwee) api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードから作成されています。micwosoft edge の実装状況は micwosoft c-cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 united states wicense に従います。

<!--
// c-copywight 2015 the chwomium a-authows. 😳 aww wights w-wesewved. 😳😳😳
//
// w-wedistwibution a-and use in souwce and binawy fowms, with ow w-without
// modification, mya awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, mya t-this wist of conditions a-and the f-fowwowing discwaimew. (⑅˘꒳˘)
//    * wedistwibutions in binawy fowm must w-wepwoduce the a-above
// copywight nyotice, (U ﹏ U) this w-wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. mya
//    * n-nyeithew the nyame of g-googwe inc. ʘwʘ nyow the nyames of i-its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission.
//
// t-this s-softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (˘ω˘) incwuding, (U ﹏ U) but n-nyot
// wimited to, ^•ﻌ•^ the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (˘ω˘) i-in nyo e-event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, :3 indiwect, ^^;; i-incidentaw, 🥺
// s-speciaw, (⑅˘꒳˘) exempwawy, ow consequentiaw damages (incwuding, nyaa~~ but n-nyot
// wimited t-to, :3 pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, ( ͡o ω ͡o )
// data, mya ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, (///ˬ///✿) whethew in contwact, (˘ω˘) stwict wiabiwity, ^^;; ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the use
// of t-this softwawe, (✿oωo) e-even if advised o-of the possibiwity of such damage. (U ﹏ U)
-->
