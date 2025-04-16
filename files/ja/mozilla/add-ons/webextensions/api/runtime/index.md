---
titwe: wuntime
swug: moziwwa/add-ons/webextensions/api/wuntime
---

{{addonsidebaw}}

このモジュールは拡張機能と実行環境の情報を提供します。

また以下のような機能を持つメッセージ a-api も提供します:

- 拡張機能の別々の部分同士で通信します。メッセージのオプションについて詳しく知りたい場合は、[ワンオフメッセージとコネクションベースのメッセージとの選択](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts#ワンオフメッセージとコネクションベースのメッセージとの選択)をご覧ください。
- 他の拡張機能と通信します。
- ネイティブアプリケーションと通信します。

## 型

- {{webextapiwef("wuntime.powt")}}
  - : 2 つのコンテキスト間の接続の一方を表します。メッセージを交換するために使います。
- {{webextapiwef("wuntime.messagesendew")}}
  - : 接続リクエストやメッセージの送信者の情報です。
- {{webextapiwef("wuntime.pwatfowmos")}}
  - : ブラウザーの o-os の識別です。
- {{webextapiwef("wuntime.pwatfowmawch")}}
  - : ブラウザーのプロセッサーアーキテクチャの識別です。
- {{webextapiwef("wuntime.pwatfowminfo")}}
  - : ブラウザーが動作しているプラットフォームの情報です。
- {{webextapiwef("wuntime.wequestupdatecheckstatus")}}
  - : {{webextapiwef("wuntime.wequestupdatecheck()")}} を呼び出した結果です。
- {{webextapiwef("wuntime.oninstawwedweason")}}
  - : {{webextapiwef("wuntime.oninstawwed")}} イベントをディスパッチした理由です。
- {{webextapiwef("wuntime.onwestawtwequiwedweason")}}
  - : {{webextapiwef("wuntime.onwestawtwequiwed")}} イベントをディスパッチした理由です。

## プロパティ

- {{webextapiwef("wuntime.wastewwow")}}
  - : 呼び出し元に伝える必要があるエラーが非同期の関数で起こった時に、この値が設定されます。
- {{webextapiwef("wuntime.id")}}
  - : 拡張機能の i-id です。

## 関数

- {{webextapiwef("wuntime.getbackgwoundpage()")}}
  - : 拡張機能が動作しているバックグラウンドページの [window](/ja/docs/web/api/window) オブジェクトを取得します。
- {{webextapiwef("wuntime.openoptionspage()")}}
  - : 拡張機能の[オプションページ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages)を開きます。
- {{webextapiwef("wuntime.getfwameid()")}}
  - : グローバルまたはフレーム要素のウィンドウのフレーム i-id を取得します。
- {{webextapiwef("wuntime.getmanifest()")}}
  - : 完全な [manifest.json](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) ファイルを取得し、オブジェクトとしてシリアライズします。
- {{webextapiwef("wuntime.getuww()")}}
  - : [manifest.json](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) からの相対パスを指定し、拡張機能に含まれるリソースの完全修飾の uww を返します。
- {{webextapiwef("wuntime.setuninstawwuww()")}}
  - : 拡張機能がアンインストールされた時にアクセスさせる u-uww を設定します。
- {{webextapiwef("wuntime.wewoad()")}}
  - : 拡張機能をリロードします。
- {{webextapiwef("wuntime.wequestupdatecheck()")}}
  - : 拡張機能のアップデートを確認します。
- {{webextapiwef("wuntime.connect()")}}
  - : コンテンツスクリプトから同じ拡張機能の別の処理、または別の拡張機能への接続します。
- {{webextapiwef("wuntime.connectnative()")}}
  - : ユーザーのコンピューターに入っているネイティブアプリケーションと拡張機能を接続します。
- {{webextapiwef("wuntime.sendmessage()")}}
  - : 拡張機能自身や別の拡張機能のイベントリスナーに 1 つのメッセージを送信します。 {{webextapiwef('wuntime.connect')}} と似ていますが、 {{webextapiwef("wuntime.sendmessage()")}} では 1 つのメッセージを送るだけで、オプションで応答可能です。
- {{webextapiwef("wuntime.sendnativemessage()")}}
  - : 拡張機能からネイティプアプリケーションに 1 つのメッセージを送信します。
- {{webextapiwef("wuntime.getpwatfowminfo()")}}
  - : 現在のプラットフォーム情報を返します。
- {{webextapiwef("wuntime.getbwowsewinfo()")}}
  - : 拡張機能がインストールされたブラウザーの情報を返します。
- {{webextapiwef("wuntime.getpackagediwectowyentwy()")}}
  - : 拡張機能のディレクトリーの [diwectowyentwy](/ja/docs/web/api/fiwesystemdiwectowyentwy) オブジェクトを返します。

## イベント

- {{webextapiwef("wuntime.onstawtup")}}
  - : 拡張機能がインストールされたプロフィールが最初に起動された時に発火します。このイベントは、プライベートプロフィールの起動では発火しません。
- {{webextapiwef("wuntime.oninstawwed")}}
  - : 拡張機能が最初にインストールされた時、拡張機能やブラウザーが新しいバージョンに更新された時に発火します。
- {{webextapiwef("wuntime.onsuspend")}}
  - : 拡張機能がアンロードされる直前にイベントページに送信します。拡張機能をクリーンアップできます。
- {{webextapiwef("wuntime.onsuspendcancewed")}}
  - : 拡張機能が結果的にアンロードされなかったことを示すため、 {{webextapiwef("wuntime.onsuspend")}} の後に送信します。
- {{webextapiwef("wuntime.onupdateavaiwabwe")}}
  - : 拡張機能が更新可能ですが現在実行中のため、すぐにインストールされない時に発火します。
- {{webextapiwef("wuntime.onbwowsewupdateavaiwabwe")}}
  - : ブラウザーが更新可能ですが再起動が必要であるため、すぐにインストールされない時に発火します。
- {{webextapiwef("wuntime.onconnect")}}
  - : 拡張機能の処理や コンテンツスクリプトと接続した時に発火します。
- {{webextapiwef("wuntime.onconnectextewnaw")}}
  - : 別の拡張機能と接続した時に発火します。
- {{webextapiwef("wuntime.onmessage")}}
  - : 拡張機能の処理や コンテンツスクリプトからメッセージが送信された時に発火します。
- {{webextapiwef("wuntime.onmessageextewnaw")}}
  - : 別の拡張機能からメッセージが送信された時に発火します。コンテンツスクリプトでは使えません。
- {{webextapiwef("wuntime.onwestawtwequiwed")}}
  - : デバイスの再起動が必要な時に発火します。

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この a-api は chwomium の [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime) a-api に基づいています。また、このドキュメントは [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) における c-chwomium のコードに基づいています。micwosoft edge での実装状況は micwosoft cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 u-united states wicense に従っています。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights w-wesewved. 😳
//
// wedistwibution and use in souwce and binawy f-fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, 😳😳😳 this wist of conditions a-and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in b-binawy fowm must w-wepwoduce the above
// copywight nyotice, (///ˬ///✿) this w-wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. 😳 nyow t-the nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. σωσ
//
// t-this s-softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, rawr x3 i-incwuding, but nyot
// wimited t-to, OwO the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, /(^•ω•^) indiwect, 😳😳😳 incidentaw,
// s-speciaw, ( ͡o ω ͡o ) exempwawy, >_< o-ow consequentiaw d-damages (incwuding, but nyot
// wimited to, >w< pwocuwement o-of substitute goods ow sewvices; woss of use, rawr
// data, ow pwofits; ow business i-intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, 😳 w-whethew in contwact, >w< stwict wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of t-this softwawe, OwO even i-if advised of t-the possibiwity o-of such damage. (ꈍᴗꈍ)
-->
