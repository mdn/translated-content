---
title: Firefox 11 開発者向けリリースノート
short-title: Firefox 11
slug: Mozilla/Firefox/Releases/11
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 11 は米国時間 2012 年 3 月 13 日にリリースされました。この記事はウェブ開発者とアドオン開発者向けに、今回のリリースにおける新機能と修正された重要なバグについての情報とより詳細なドキュメントへのリンクをまとめています。

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement("audio")}} 要素と {{HTMLElement("video")}} 要素に、`muted` 属性と `loop` 属性が実装されました。

### DOM

- HTML の要素で {{domxref("element.outerHTML")}} プロパティがサポートされました。
- [`XMLHttpRequest` が HTML の解釈に対応しました](/ja/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)。
- 同期リクエストの実行時における、{{domxref("XMLHttpRequest")}} `responseType` および `withCredentials` 属性の使用のサポートを削除しました。属性の使用を試みると、`NS_ERROR_DOM_INVALID_ACCESS_ERR` 例外が発生します。この変更は、W3C へ標準化の提案が行われました。
- バイブレーションに対応する端末でバイブレーションを行う {{domxref("Navigator/vibrate", "navigator.mozVibrate()")}} に対応しました。Gecko では `mozVibrate()` として実装しています。
- `navigator.mozApps` は、[オープンウェブアプリケーション](/ja/docs/Web/Progressive_web_apps)のインストールや管理に用いることができる `Apps` オブジェクトを返します。
- `MozBeforePaint` イベントは発生しなくなりました。{{domxref("window.requestAnimationFrame", "mozRequestAnimationFrame()")}} でこのイベントを使用している場合は、代わりにコールバック関数を渡してください。
- アニメーションフレームの要求をキャンセルする機能をサポートしました。{{domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} はリクエスト ID を返すようになり、要求をキャンセルするにはこの値を {{domxref("window.cancelAnimationFrame", "window.mozCancelAnimationFrame()")}} に渡します。
- DOM4 仕様書で導入されたいくつかの {{domxref("Event")}} コンストラクター (`Event`、HTML イベント、 `UIEvent`、`MouseEvent`) に対応しました。
- [バッテリー API](/ja/docs/Web/API/Battery_Status_API) がデフォルトで有効になりました。
- [`HTMLMediaElement`](/ja/docs/Web/API/HTMLMediaElement) で、[`defaultMuted`](/ja/docs/Web/API/HTMLMediaElement)、[`loop`](/ja/docs/Web/API/HTMLMediaElement)、[`muted`](/ja/docs/Web/API/HTMLMediaElement) の各プロパティの対応が追加されました。
- ある要素で {{domxref("Element/requestFullScreen")}} メソッドを呼び出したときに別の要素がすでに全画面モードであった場合は、{{domxref("Document/exitFullscreen")}} を呼び出したときに、前に全画面モードであった要素を復元するようになりました。
- {{domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()")}} メソッドは引数がない形式をサポートしなくなりました。このような形式はあまり使用されておらず、また標準化される見込みもありません。
- 画像としての SVG が、[キャンバスを汚染せずに](/ja/docs/Web/HTML/How_to/CORS_enabled_image#セキュリティと汚染されたキャンバス)キャンバス内へ描画できるようになりました。
- `GeoPositionAddress` インターフェイスの標準外プロパティである `countryCode` を削除しました。`nsIDOMGeoPositionAddress` をご覧ください。
- [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events) が [CORS](/ja/docs/Web/HTTP/Guides/CORS) をサポートしました。
- 従来、ユーザーがリンクをたどると {{domxref("window.navigator")}} オブジェクトでセットしている値は新しいページが保持していました。これが、新しいページ用に新たな `navigator` オブジェクトを作成するようになりました。これにより、Firefox は他のブラウザーと同様に動作します。

### CSS

- [`text-size-adjust`](/ja/docs/Web/CSS/Reference/Properties/text-size-adjust) プロパティがサポートされました。
- [CSS3](/ja/docs/Web/CSS) の[条件付きルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules#ブロックアットルール)の対応向上しました。 [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)、[@-moz-document](/ja/docs/Web/CSS/Reference/At-rules/@document) に入れ子構文を追加できるようになりました（[CSS 構文](/ja/docs/Web/CSS/Guides/Syntax/Introduction)および [CSS アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)をご覧ください）。

### JavaScript

_変更なし。_

### SVG

- {{domxref("SVGSVGElement")}} DOM インターフェイスが `getElementById` メソッドをサポートしました。

### WebSocket

- [WebSocket](/ja/docs/Web/API/WebSockets_API) API がバイナリー形式のメッセージをサポートしました ([Firefox バグ 676439](https://bugzil.la/676439) を参照)。
- プロトコルおよび API が最新のドラフト仕様に更新され、また API から接頭辞が除去されました ([Firefox バグ 666349](https://bugzil.la/666349) および [Firefox バグ 695635](https://bugzil.la/695635) を参照)。
- 以前 Firefox では WebSockets で送受信するメッセージのサイズが 16 MB に制限されていましたが、この制限を 2 GB に引き上げました (メモリー容量の制限で大きなデータを扱えない場合もありますが、Firefox は 2 GB までサポートします)。

### IndexedDB

- [IDBFactory.cmp()](/ja/docs/Web/API/IDBFactory/cmp) の対応が追加されました。
- [IndexedDB のキー](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#キー) の型が、(String や Integer だけでなく) Date、Arrays、Float のいずれかにできるようになりました。
- 今後、トランザクションは、最初にリクエストが行われた時ではなく、トランザクションが作成された時に開始されるようになりました。。例えば、以下のようなケースを考えてみましょう。

  ```js
  var trans1 = db.transaction("foo", READ_WRITE);
  var trans2 = db.transaction("foo", READ_WRITE);

  trans2.put("2", "key");
  trans1.put("1", "key");
  ```

  コードが実行された後、オブジェクトストアには値 "2" が含まれているはずです。なぜなら、`trans2` は `trans1` の後に実行されるからです。

- Firefox 11 以前では、オブジェクトストアの {{domxref("IDBObjectStore.autoIncrement","autoIncrement")}} カウンターは、指定されたデータベース内のすべてのオブジェクトストア間で共有されていました。しかし仕様上、各オブジェクトストアは別個のカウンターを持つべきです。この問題は修正されました。
- 空の `keyPath` をつけて[インデックスを作成する](/ja/docs/Web/API/IDBObjectStore/createIndex)ことができるようになりました。
- 複数項目のインデックスの作成が可能になりました（[`IDBObjectStore.createIndex` 引数](/ja/docs/Web/API/IDBObjectStore/createIndex#parameters)を参照）。
- {{domxref("IDBTransaction/abort_event", "abort")}} イベントはバブリングするようになりました。さらに、`onabort` ハンドラーが追加されました。
- IndexedDB がファイル/BLOB を格納するために使用できるようになりました。
- IndexedDB で複雑なキーパスの対応が追加されました。例えば、`foo.bar` と指定することで、`foo` プロパティの `bar` プロパティにアクセスできます。
- IndexedDB は、[オブジェクトストア](/ja/docs/Web/API/IDBDatabase/createObjectStore)または[インデックス](/ja/docs/Web/API/IDBObjectStore/createIndex)を作成する際、`keyPath` として配列を受け入れることができるようになりました（[Firefox バグ 694138](https://bugzil.la/694138)）。

### ネットワーク

- Firefox 8 で変更した、{{rfc(2231)}} および {{rfc(5987)}} でダブルクォートを区切り文字として利用できなくした点は、Outlook Web Access など一部のサイトで異常が発生するために取り消しました。
- HTTP ヘッダーのユーザーエージェント文字列に、[携帯電話やタブレット上の Firefox がアクセスしているかをサーバーが知ることができる](/ja/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox#モバイルおよびタブレットの標示)識別子を含むようになりました。

### 開発ツール

- システムが [WebGL](/ja/docs/Web/API/WebGL_API) に対応している場合は、[ページ調査ツール](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) で [3D ビュー](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) を提供します。
- 新しいツールである [スタイルエディター](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) は、リアルタイムな CSS スタイルシートの変更や作成を自由自在に行う機能を提供します。
- [ソース表示機能](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) が従来の HTML パーサーに代わり新しい HTML5 パーサーを使用するようになりました。

## Mozilla 開発者とアドオン開発者向けの変更点

### JavaScript code modules

#### NetUtil.jsm

- `readInputStreamToString()` へ新たに、入力ストリームを読み取る際のキャラクタセットの解釈を設定するための、省略可能な引数が追加されました。

#### 新しい JavaScript code modules

- [`source-editor.jsm`](https://web.archive.org/web/20210620193439/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/source-editor.jsm)
  - : アドオンで利用可能な、便利で使いやすいソースコードエディターを提供します。これは、スクラッチパッドなど Firefox に統合している開発ツールで使用しているものと同じです。

### インターフェイスの変更

- `mozIAsyncHistory` インターフェイスに、ある URI が訪問済みであるかを確認するためのメソッド `mozIAsyncHistory.isURIVisited()` が追加されました。
- `mozIAsyncHistory.isURIVisited` でコールバックハンドリング機能を提供するため、新たに `mozIVisitStatusCallback` インターフェイスを追加しました。
- `nsIMacDockSupport` インターフェイスが新属性 `badgeText` を用いて、Dock のアプリケーションアイコンへのテキスト追加をサポートしました。
- `nsINavHistoryResultObserver` インターフェイスでは、非推奨になった `containerOpened()` および `containerClosed()` メソッドに代わり `nsINavHistoryResultObserver.containerStateChanged()` を実装することが必要です。

#### 削除されたインターフェイス

以下のインターフェイスは、不要になったため削除されました。

- `nsICharsetResolver`
- `nsIDOMNSElement`、詳しくは [bug707576](https://bugzil.la/707576) をご覧いただき、代わりに `nsIDOMElement` を使用してください。

### テーマに関する変更

- `omni.jar` ファイルは名前を [`omni.ja`](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/en-US/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29) に変更しました。

### 設定項目の変更

- `ui.tooltipDelay`
  - : マウスカーソルを載せてからツールチップが表示されるまでの遅延をミリ秒単位で指定します。

### ビルドシステムの変更

- `--enable-tracejit` ビルドオプションを削除しました。

### その他の変更

- 長く更新されていないアドオンは、デフォルトで互換性があると判断しないようになりました。現時点では、`maxVersion` が 4.0 を示しているアドオンです。
