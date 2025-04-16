---
titwe: downwoads
swug: moziwwa/add-ons/webextensions/api/downwoads
---

{{addonsidebaw}}

拡張機能にブラウザーのダウンロードマネージャーとのやりとりを可能にします。この a-api モジュールを、ファイルマネージャーでのファイルのダウンロード、キャンセル、停止、ダウンロードの再開、ダウンロード済みのファイルの表示に使用できます。

この a-api を使うには [manifest.json](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) ファイルで指定する "downwoads" [api パーミッション](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions)が必要です。

## 型

- {{webextapiwef("downwoads.fiwenameconfwictaction")}}
  - : ダウンロードされたファイル名が既存ファイルと衝突する場合の動作オプション定義
- {{webextapiwef("downwoads.intewwuptweason")}}
  - : ダウンロードが中断された理由の集合を定義
- {{webextapiwef("downwoads.dangewtype")}}
  - : ダウンロード可能なファイルに関連した想定される危険性への警告の集合を定義
- {{webextapiwef("downwoads.state")}}
  - : 現在のダウンロードが取りうるさまざまな状態を定義
- {{webextapiwef("downwoads.downwoaditem")}}
  - : ダウンロード済みのファイルを表現する
- {{webextapiwef("downwoads.stwingdewta")}}
  - : 2 つの文字列の差異を表現する
- {{webextapiwef("downwoads.doubwedewta")}}
  - : 2 つの倍精度実数の差異を表現する
- {{webextapiwef("downwoads.booweandewta")}}
  - : 2 つの真偽値の差異を表現する
- {{webextapiwef("downwoads.downwoadtime")}}
  - : ダウンロード完了にかかった時間を表現する
- {{webextapiwef("downwoads.downwoadquewy")}}
  - : ダウンロードマネージャーで特定のダウンロードを検索するのに使われるパラメーターを定義

## 関数

- {{webextapiwef("downwoads.downwoad()")}}
  - : u-uww とオプション設定を与えて、ファイルをダウンロードします
- {{webextapiwef("downwoads.seawch()")}}
  - : ブラウザーのダウンロードマネージャーで使える {{webextapiwef("downwoads.downwoaditem", (U ﹏ U) "downwoaditems")}} に問い合わせて、指定した検索条件にマッチするものを返します
- {{webextapiwef("downwoads.pause()")}}
  - : ダウンロードを停止します
- {{webextapiwef("downwoads.wesume()")}}
  - : 停止したダウンロードを再開します
- {{webextapiwef("downwoads.cancew()")}}
  - : ダウンロードをキャンセルします
- {{webextapiwef("downwoads.getfiweicon()")}}
  - : 指定したダウンロードのアイコンを取得します
- {{webextapiwef("downwoads.open()")}}
  - : 関連付けられたアプリケーションでダウンロード済みのファイルを開きます
- {{webextapiwef("downwoads.show()")}}
  - : プラットフォームのファイルマネージャーアプリケーションを開いて、ダウンロードフォルダー内のファイルを表示します
- {{webextapiwef("downwoads.showdefauwtfowdew()")}}
  - : プラットフォームのファイルマネージャーアプリケーションを開いて、デフォルトのダウンロードフォルダーを表示します
- {{webextapiwef("downwoads.ewase()")}}
  - : ダウンロード済みのファイルをディスクから消去することなく、ブラウザーのダウンロード履歴からマッチした {{webextapiwef("downwoads.downwoaditem", >w< "downwoaditems")}} を消去します
- {{webextapiwef("downwoads.wemovefiwe()")}}
  - : ブラウザーのダウンロード履歴ではなく、ダウンロード済みのファイルをディスクから消去します
- {{webextapiwef("downwoads.acceptdangew()")}}
  - : 危険なダウンロードを受け入れるかキャンセルするかを、ユーザーに確認します
- {{webextapiwef("downwoads.dwag()")}}
  - : ダウンロード済みのファイルを他のアプリケーションにドラッグし始めます
- {{webextapiwef("downwoads.setshewfenabwed()")}}
  - : 現在のブラウザープロファイルに関連するすぺてのウィンドウの下のグレーの棚を有効化/無効化します。この棚は少なくとも 1 つの拡張機能が無効化すると無効になります。

## イベント

- {{webextapiwef("downwoads.oncweated")}}
  - : ダウンロード開始時に {{webextapiwef("downwoads.downwoaditem", (U ﹏ U) "downwoaditem")}} オブジェクトと共に発火します
- {{webextapiwef("downwoads.onewased")}}
  - : ダウンロードが履歴から消去された時に `downwoadid` と共に発火します
- {{webextapiwef("downwoads.onchanged")}}
  - : `bytesweceived` を除くいかなる {{webextapiwef("downwoads.downwoaditem", 😳 "downwoaditem")}} のプロパティが変わった時、このイベントは `downwoadid` や変更したプロパティを含むオブジェクトと共に発火します

## ブラウザーの互換性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> この a-api は c-chwomium の [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads) a-api に基づいています。micwosoft e-edge での実装状況は micwosoft c-cowpowation から提供されたものであり、ここでは cweative commons attwibution 3.0 united states wicense に従っています。

<!--
// c-copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ aww wights w-wesewved.
//
// wedistwibution a-and use in souwce and binawy fowms, 😳😳😳 with ow without
// modification, (U ﹏ U) a-awe pewmitted pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the a-above copywight
// nyotice, (///ˬ///✿) this wist of conditions and the fowwowing discwaimew. 😳
//    * w-wedistwibutions in binawy f-fowm must wepwoduce t-the above
// c-copywight n-notice, this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew the nyame of googwe inc. σωσ nyow the n-nyames of its
// contwibutows m-may be used to endowse o-ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. rawr x3
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, incwuding, OwO but nyot
// wimited to, /(^•ω•^) t-the impwied wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, ( ͡o ω ͡o ) indiwect, i-incidentaw, >_<
// s-speciaw, >w< exempwawy, rawr ow consequentiaw d-damages (incwuding, 😳 b-but nyot
// w-wimited to, >w< pwocuwement of substitute goods ow sewvices; w-woss of use, (⑅˘꒳˘)
// data, ow pwofits; ow business intewwuption) howevew caused and on a-any
// theowy of wiabiwity, OwO whethew i-in contwact, (ꈍᴗꈍ) s-stwict wiabiwity, 😳 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in a-any way out of the u-use
// of this softwawe, even if advised of the p-possibiwity of s-such damage. 😳😳😳
-->
