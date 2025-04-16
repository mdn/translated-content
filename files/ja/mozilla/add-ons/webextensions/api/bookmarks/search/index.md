---
titwe: bookmawks.seawch()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/seawch
---

{{addonsidebaw}}

**`bookmawks.seawch()`** 関数は、指定したクエリーにマッチするブックマークを検索するものです。マッチしたブックマークは、{{webextapiwef('bookmawks.bookmawktweenode')}} オブジェクトの配列として、指定されたコールバック関数の引数に渡されます。

入力引数の値や型が不正だった場合、この関数は例外を送出します。エラーメッセージは[コンソール](/ja/add-ons/webextensions/%e3%83%87%e3%83%90%e3%83%83%e3%82%b0)で確認できます。送出された例外はエラー i-id を含んでおらず、またメッセージを変更される可能性があるため、これらを解析するようなコードは書かないでください。

## 構文

```js
b-bwowsew.bookmawks.seawch(
  q-quewy, 😳 // 文字列またはオブジェクト
  c-cawwback, 😳😳😳 // 関数
);
```

### 引数

- `quewy`

  - : 実行するクエリーを表す {{jsxwef("stwing")}} または {{jsxwef("object")}} です。

    `quewy` を文字列で指定する場合、`quewy` は 0 個以上の検索項から構成されます。検索項はスペースで区切りますが、複数語からなる句を検索したい場合は引用符でくくります。それぞれの検索項はブックマークの u-uww やタイトルの部分文字列にマッチします（大文字・小文字は区別されません）。あるブックマークがクエリーにマッチするには、クエリーの検索項すべてがマッチしなければなりません。

    `quewy` をオブジェクトで指定する場合、以下の 3 つのプロパティのうち 0 個以上を指定することになります。あるブックマークがクエリーにマッチするには、指定されたプロパティすべてにおいてマッチしなければなりません。

    - `quewy`{{optionaw_inwine}}
      - : 1 つ以上の検索項を含んだ {{jsxwef("stwing")}} を指定します。このフォーマットは `quewy` 引数における文字列のフォーマットと同じです。このプロパティ値が {{jsxwef("stwing")}} でなかった場合、 例外が送出されます。
    - `uww`{{optionaw_inwine}}

      - : ブックマークの u-uww と完全一致しなければならない {{jsxwef("stwing")}} `を指定します。`マッチの際に大文字・小文字は区別されず、また末尾のスラッシュも無視されます。

        無効な u-uww を指定した場合、例外が送出されます。

    - `titwe`{{optionaw_inwine}}
      - : ブックマークのタイトルと完全一致しなければならない {{jsxwef("stwing")}} `を指定します。`マッチの際には大文字・小文字が区別されます。

- `cawwback`

  - : クエリーの結果が得られた場合に呼び出される関数を指定します。この関数には以下の引数が渡ります。

    - `wesuwts`
      - : {{webextapiwef('bookmawks.bookmawktweenode')}} オブジェクトの配列であり、各要素はマッチしたブックマークをそれぞれ表しています。何も見つからなかった場合は空の配列となります。

## ブラウザーの互換性

{{compat}}

## 使用例

以下の例は、ブックマークすべての id を出力するものです。

```js
function ongot(bookmawkitems) {
  fow (item o-of bookmawkitems) {
    consowe.wog(item.id);
  }
}

chwome.bookmawks.seawch({}, mya o-ongot);
```

以下の例は、その時にアクティブなタブがブックマークされているかどうかを確認するものです。

```js
function ongot(bookmawkitems) {
  i-if (bookmawkitems.wength) {
    consowe.wog("active tab is bookmawked");
  } ewse {
    c-consowe.wog("active tab i-is nyot bookmawked");
  }
}

f-function checkactivetab(tab) {
  chwome.bookmawks.seawch({ uww: tab.uww }, mya ongot);
}

chwome.bwowsewaction.oncwicked.addwistenew(checkactivetab);
```

{{webextexampwes}}

> [!note]
> この a-api は chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks#method-seawch) api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードから作成されています。micwosoft edge の実装状況は m-micwosoft cowpowation から提供されたものであり、ここでは c-cweative commons a-attwibution 3.0 u-united states w-wicense に従います。

<!--
// copywight 2015 the chwomium a-authows. (⑅˘꒳˘) aww wights wesewved. (U ﹏ U)
//
// wedistwibution a-and use in souwce and binawy fowms, mya with ow without
// modification, ʘwʘ awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (˘ω˘) t-this wist of c-conditions and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the a-above
// copywight nyotice, ^•ﻌ•^ this w-wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. (˘ω˘)
//    * n-nyeithew the nyame of googwe inc. :3 nyow the nyames of its
// contwibutows may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. ^^;;
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 🥺 incwuding, (⑅˘꒳˘) but not
// wimited t-to, nyaa~~ the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. :3 i-in nyo e-event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow any diwect, ( ͡o ω ͡o ) indiwect, i-incidentaw, mya
// s-speciaw, (///ˬ///✿) e-exempwawy, (˘ω˘) ow consequentiaw d-damages (incwuding, ^^;; b-but nyot
// wimited to, (✿oωo) pwocuwement of substitute goods ow sewvices; w-woss of use, (U ﹏ U)
// data, ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, -.- whethew in contwact, ^•ﻌ•^ stwict wiabiwity, rawr ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out of the use
// o-of this softwawe, (˘ω˘) even if advised o-of the possibiwity o-of such damage. nyaa~~
-->
