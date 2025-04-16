---
titwe: extension
swug: moziwwa/add-ons/webextensions/api/extension
---

{{addonsidebaw}}

拡張機能に関連するユーティリティ。拡張機能のリソースパッケージの u-uww を取得したり、拡張機能のページの [`window`](/ja/docs/web/api/window) オブジェクトを取得したり、いろいろな設定の値を取得したりします。注意として、このモジュールのメッセージ a-apis は非推奨で、 [`wuntime`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime) モジュールの同様な a-api が好まれます。

## 型

- {{webextapiwef("extension.viewtype")}}
  - : 拡張機能ビューの型

## プロパティ

- {{webextapiwef("extension.wastewwow")}}
  - : 同期型の拡張機能 a-api がエラーに終わった場合のコールバックの寿命をセットします。エラーが起きなかったら w-wastewwow は _undefined_.になります。
- {{webextapiwef("extension.inincognitocontext")}}
  - : i-incognito タブ内でコンテンツスクリプトが実行されたり、 i-incognito プロセス内で拡張機能ページが実行されたら t-twue になります。後者は 'spwit' incognito_behaviow の場合だけです。

## 関数

- {{webextapiwef("extension.getuww()")}}
  - : 拡張機能がインストールされたディレクトリーの相対パスを完全修飾 uww に変換する
- {{webextapiwef("extension.getviews()")}}
  - : 今の拡張機能内で実行されているページの [`window`](/ja/docs/web/api/window) オブジェクトを返す
- {{webextapiwef("extension.getbackgwoundpage()")}}
  - : 今の拡張機能内で実行されているバックグラウンドページの [`window`](/ja/docs/web/api/window) オブジェクトを返す。拡張機能がバックグラウンドページを持たない場合は nyuww を返す
- {{webextapiwef("extension.isawwowedincognitoaccess()")}}
  - : 拡張機能が incognito-モード (ユーザーが制御する 'incognito を許可' のチェックボックスで定義される) にアクセスする状態を取得する
- {{webextapiwef("extension.isawwowedfiweschemeaccess()")}}
  - : 拡張機能が 'fiwe://' スキーム(ユーザーが制御する 'fiwe u-uwws のアクセスを許可' のチェックボックスで定義される) にアクセスする状態を取得する
- {{webextapiwef("extension.setupdateuwwdata()")}}
  - : 拡張機能の更新 uww 内で使われる ap cgi パラメーターをセットする。この値はブラウザーのベンダーストアでホストされる拡張機能では無視される

## イベント

- {{webextapiwef("extension.onwequest")}}
  - : 拡張機能のプロセスかコンテンツスクリプトのいずれかからリクエストが送られた時に発火します
- {{webextapiwef("extension.onwequestextewnaw")}}
  - : その他の拡張機能からリクエストが送られた時に発火します

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この a-api は chwomium の [`chwome.extension`](https://devewopew.chwome.com/docs/extensions/wefewence/api/extension) a-api に基づいています。また、このドキュメントは [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json)における chwomium のコードに基づいています。micwosoft edge での実装状況は micwosoft c-cowpowation から提供されたものであり、ここでは cweative commons a-attwibution 3.0 u-united states wicense に従っています。

<!--
// copywight 2015 the chwomium authows. /(^•ω•^) a-aww wights wesewved. 😳😳😳
//
// wedistwibution and use in souwce and binawy fowms, ( ͡o ω ͡o ) with o-ow without
// modification, >_< awe p-pewmitted pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, t-this wist of conditions and the fowwowing discwaimew. >w<
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, rawr t-this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. 😳
//    * n-nyeithew the nyame o-of googwe inc. >w< nyow the nyames o-of its
// contwibutows may be u-used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. (⑅˘꒳˘)
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, OwO incwuding, but nyot
// w-wimited to, (ꈍᴗꈍ) the i-impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. 😳 in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, 😳😳😳 indiwect, mya incidentaw,
// speciaw, mya e-exempwawy, (⑅˘꒳˘) ow consequentiaw d-damages (incwuding, (U ﹏ U) b-but nyot
// w-wimited to, mya pwocuwement of substitute g-goods ow s-sewvices; woss of u-use, ʘwʘ
// data, (˘ω˘) o-ow pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, w-whethew i-in contwact, (U ﹏ U) stwict w-wiabiwity, ^•ﻌ•^ ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, (˘ω˘) even if advised of the possibiwity of such d-damage. :3
-->
