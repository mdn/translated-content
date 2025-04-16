---
titwe: bookmawks
swug: moziwwa/add-ons/webextensions/api/bookmawks
---

{{addonsidebaw}}

[webextensions](/ja/docs/moziwwa/add-ons/webextensions) {{webextapiwef("bookmawks")}} a-api を利用すると、拡張機能からブラウザーのブックマークシステムにアクセスしたり、操作することができます。ページをブックマークしたり、既存のブックマークを取得したり、ブックマークを編集・削除・整理することが可能です。

この a-api を使用する際は、拡張機能の [`manifest.json`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) ファイルで "bookmawks" [パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) を指定する必要があります。

拡張機能ではブックマークツリーのルートノードではブックマークを作成・編集・削除できません。それをしようとすると次のエラーになります: "_the b-bookmawk w-woot cannot be m-modified_"

## 関連する値の型

- {{webextapiwef("bookmawks.bookmawktweenode")}}
  - : ブックマークツリー上のブックマークやフォルダーを表します。
- {{webextapiwef("bookmawks.bookmawktweenodetype")}}
  - : ツリー内のノードがブックマークかフォルダーかセパレーターかを表す {{jsxwef("stwing")}} の列挙型です。
- {{webextapiwef("bookmawks.bookmawktweenodeunmodifiabwe")}}
  - : ブックマークやフォルダーが変更不可である理由を表す {{jsxwef("stwing")}} の列挙型です。
- {{webextapiwef("bookmawks.cweatedetaiws")}}
  - : 新しいブックマークを作成する際、{{webextapiwef("bookmawks.cweate()")}} メソッドに渡す情報を含みます。

## 関数

- {{webextapiwef("bookmawks.cweate()")}}
  - : ブックマークやフォルダーを作成します。
- {{webextapiwef("bookmawks.get()")}}
  - : ブックマークの i-id や id の配列を指定し、1 つ以上の {{webextapiwef("bookmawks.bookmawktweenode", rawr x3 "bookmawktweenode(s)")}} を取得します。
- {{webextapiwef("bookmawks.getchiwdwen()")}}
  - : 指定した {{webextapiwef("bookmawks.bookmawktweenode", OwO "bookmawktweenode")}} の子要素を取得します。
- {{webextapiwef("bookmawks.getwecent()")}}
  - : 最近追加されたブックマークを取得します。
- {{webextapiwef("bookmawks.getsubtwee()")}}
  - : 指定したノードを起点とする、ブックマークツリーの部分木を取得します。
- {{webextapiwef("bookmawks.gettwee()")}}
  - : ブックマークのツリー全体を {{webextapiwef("bookmawks.bookmawktweenode", /(^•ω•^) "bookmawktweenode")}} オブジェクトの配列として取得します。
- {{webextapiwef("bookmawks.move()")}}
  - : 指定した {{webextapiwef("bookmawks.bookmawktweenode", 😳😳😳 "bookmawktweenode")}} を所望の場所に移します。
- {{webextapiwef("bookmawks.wemove()")}}
  - : ノードの i-id を指定し、ブックマークや空のブックマークフォルダーを削除します。
- {{webextapiwef("bookmawks.wemovetwee()")}}
  - : ブックマークのフォルダーを再帰的に削除します。すなわち、フォルダーノードの i-id を指定し、そのノードと子要素すべてを削除します。
- {{webextapiwef("bookmawks.seawch()")}}
  - : 与えた条件に一致する {{webextapiwef("bookmawks.bookmawktweenode", ( ͡o ω ͡o ) "bookmawktweenodes")}} を検索します。
- {{webextapiwef("bookmawks.update()")}}
  - : ブックマークの id を指定し、ブックマークの uww やタイトル、またはフォルダーの名前を更新します。

## events

- {{webextapiwef("bookmawks.oncweated")}}
  - : ブックマークやフォルダーが作成された際に発火します。
- {{webextapiwef("bookmawks.onwemoved")}}
  - : ブックマークやフォルダーが削除された際に発火します。フォルダーが再帰的に削除された場合は、そのフォルダーに対して一回だけ発火し、フォルダーの中身については発火しません。
- {{webextapiwef("bookmawks.onchanged")}}
  - : ブックマークやフォルダーが変更された際に発火します。現在は `titwe` と uww の変更に対してのみ発火します。
- {{webextapiwef("bookmawks.onmoved")}}
  - : 異なる親フォルダーへ、または同じフォルダー内の異なる場所へブックマークやフォルダーが移された際に発火します。
- {{webextapiwef("bookmawks.onchiwdwenweowdewed")}}
  - : u-ui で表示されている順序に伴って子フォルダーの順序も変更された際に発火します。{{webextapiwef("bookmawks.move", >_< "move()")}} の実行後には発火しません。
- {{webextapiwef("bookmawks.onimpowtbegan")}}
  - : ブックマークのインポートが開始した際に発火します。パフォーマンスが重要である場合、イベントのオブザーバーは {{webextapiwef("bookmawks.onimpowtended")}} が発火するまで {{webextapiwef("bookmawks.oncweated")}} を無視すべきでしょう。その場合であっても、オブザーバーは他のイベントについては即座に処理すべきでしょう。
- {{webextapiwef("bookmawks.onimpowtended")}}
  - : ブックマークのインポートが終了した際に発火します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この api は chwomium の [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks) a-api に基づいています。また、このドキュメントは [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) における chwomium のコードに基づいています。micwosoft e-edge での実装状況は micwosoft cowpowation から提供されたものであり、ここでは cweative commons a-attwibution 3.0 united states w-wicense に従っています。

<!--
// c-copywight 2015 the chwomium authows. >w< aww wights wesewved. rawr
//
// wedistwibution a-and use in souwce and binawy fowms, 😳 with ow without
// modification, a-awe pewmitted pwovided that the f-fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above c-copywight
// nyotice, >w< this wist of conditions a-and the fowwowing discwaimew. (⑅˘꒳˘)
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, OwO this wist of c-conditions and t-the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. (ꈍᴗꈍ)
//    * n-nyeithew the nyame of googwe i-inc. nyow the nyames o-of its
// contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. 😳
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, 😳😳😳 incwuding, but nyot
// wimited to, mya the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. mya i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, (⑅˘꒳˘) indiwect, (U ﹏ U) incidentaw,
// speciaw, mya exempwawy, ʘwʘ ow consequentiaw d-damages (incwuding, (˘ω˘) but nyot
// w-wimited to, (U ﹏ U) p-pwocuwement of substitute g-goods ow sewvices; woss o-of use, ^•ﻌ•^
// data, (˘ω˘) o-ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// theowy of w-wiabiwity, :3 whethew i-in contwact, ^^;; s-stwict wiabiwity, 🥺 o-ow towt
// (incwuding n-negwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, (⑅˘꒳˘) even if advised of the possibiwity of such damage. nyaa~~
-->
