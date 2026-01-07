---
title: Firefox 11 for developers
slug: Mozilla/Firefox/Releases/11
---

Firefox 11 は米国時間 2012 年 3 月 13 日にリリースされました。この記事はウェブ開発者とアドオン開発者向けに、今回のリリースにおける新機能と修正された重要なバグについての情報とより詳細なドキュメントへのリンクをまとめています。

## ウェブ開発者向けの変更点一覧

### HTML

- {{ HTMLElement("audio") }} 要素と {{ HTMLElement("video") }} 要素に、`muted` 属性と `loop` 属性が実装されました。

### DOM

- HTML の要素で {{ domxref("element.outerHTML") }} プロパティがサポートされました。
- [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) が HTML のパース処理をサポートしました。
- 同期リクエストの実行時における、{{ domxref("XMLHttpRequest") }} `responseType` および `withCredentials` 属性の使用のサポートを削除しました。属性の使用を試みると、`NS_ERROR_DOM_INVALID_ACCESS_ERR` 例外が発生します。この変更は、W3C へ標準化の提案が行われました。
- バイブレーションをサポートするデバイスでバイブレーションを行う {{ domxref("window.navigator.mozVibrate()") }} をサポートしました。Gecko では `mozVibrate()` として実装しています。
- {{ domxref("window.navigator.mozApps") }} は、[Open Web Applications](/ja/docs/Web/Apps) のインストールや管理に用いることができる [`Apps`](/ja/docs/DOM/Apps) オブジェクトを返します。
- `MozBeforePaint` イベントは発生しなくなりました。{{ domxref("window.requestAnimationFrame","mozRequestAnimationFrame()") }} でこのイベントを使用している場合は、代わりにコールバック関数を渡してください。
- アニメーションフレームの要求をキャンセルする機能をサポートしました。{{ domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()") }} はリクエスト ID を返すようになり、要求をキャンセルするにはこの値を {{ domxref("window.cancelAnimationFrame", "window.mozCancelAnimationFrame()") }} に渡します。
- DOM4 仕様書で導入されたいくつかの {{ domxref("Event") }} コンストラクター (`Event`、HTML イベント、 `UIEvent`、`MouseEvent`) がサポートされました。
- {{ domxref("window.navigator.mozBattery", "Battery API") }} がデフォルトで有効になりました。
- [`HTMLMediaElement`](/ja/docs/Web/API/HTMLMediaElement) で、[`defaultMuted`](/ja/docs/Web/API/HTMLMediaElement)、[`loop`](/ja/docs/Web/API/HTMLMediaElement)、[`muted`](/ja/docs/Web/API/HTMLMediaElement) の各プロパティがサポートされました。
- ある要素で {{ domxref("element.mozRequestFullScreen()") }} メソッドを呼び出したときに別の要素がすでにフルスクリーンモードであった場合は、{{ domxref("document.mozCancelFullScreen()") }} を呼び出すときに、前にフルスクリーンモードであった要素を復元するようになりました。
- {{ domxref("window.requestAnimationFrame", "window.mozRequestAnimationFrame()") }} メソッドは引数がない形式をサポートしなくなりました。このような形式はあまり使用されておらず、また標準化される見込みもありません。
- 画像としての SVG が、[canvas を汚染せずに](/ja/docs/Web/HTML/How_to/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f) canvas 内へ描画できるようになりました。
- `GeoPositionAddress`インターフェイスの非標準プロパティである `countryCode` を削除しました。`nsIDOMGeoPositionAddress` をご覧ください。
- [Server-sent events](/ja/docs/Web/API/Server-sent_events) が [CORS](/ja/docs/Web/HTTP/Guides/CORS) をサポートしました。
- 従来、ユーザーがリンクをたどると {{ domxref("window.navigator") }} オブジェクトでセットしている値は新しいページが保持していました。これが、新しいページ用に新たな `navigator` オブジェクトを作成するようになりました。これにより、Firefox は他のブラウザーと同様に動作します。

### CSS

- [`text-size-adjust`](/ja/docs/Web/CSS/Reference/Properties/text-size-adjust) プロパティがサポートされました。
- [CSS3](/ja/docs/CSS/CSS3) [Conditional Rules](/ja/docs/CSS/CSS3#Conditional_Rules) のサポートが向上しました: [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)、[@-moz-document](/ja/docs/Web/CSS/Reference/At-rules/@document) に入れ子構文を追加できます ([CSS Syntax](/ja/docs/Web/CSS/Guides/Syntax/Introduction) および [CSS at-rules](/ja/docs/Web/CSS/Guides/Syntax/At-rules) をご覧ください)。

### SVG

- {{ domxref("SVGSVGElement") }} DOM インターフェイスが `getElementById` メソッドをサポートしました。

### WebSocket

- [WebSocket](/ja/docs/Web/API/WebSockets_API) API がバイナリー形式のメッセージをサポートしました ([Firefox バグ 676439](https://bugzil.la/676439) を参照)。
- プロトコルおよび API が最新のドラフト仕様に更新され、また API から接頭辞が除去されました ([Firefox バグ 666349](https://bugzil.la/666349) および [Firefox バグ 695635](https://bugzil.la/695635) を参照)。
- 以前 Firefox では WebSockets で送受信するメッセージのサイズが 16 MB に制限されていましたが、この制限を 2 GB に引き上げました (メモリー容量の制限で大きなデータを扱えない場合もありますが、Firefox は 2 GB までサポートします)。

### IndexedDB

- [IDBFactory.cmp()](/ja/docs/IndexedDB/IDBFactory#cmp%28%29) がサポートされました。
- [IndexedDB のキー](/ja/docs/Web/API/IndexedDB_API/Basic_Terminology#section_6) のタイプは、以下のいずれかにすることができます: (String や Integer だけでなく) Date、Arrays、Float。

### Network

- Firefox 8 で変更した、{{ rfc("2231") }} および {{ rfc("5987") }} でダブルクォートを区切り文字として利用できなくした点は、Outlook Web Access など一部のサイトで異常が発生するために取り消しました。
- HTTP ヘッダーのユーザーエージェント文字列に、[携帯電話やタブレット上の Firefox がアクセスしているかをサーバーが知ることができる](/ja/docs/Gecko_user_agent_string_reference#Mobile_and_Tablet_indicators)識別子を含むようになりました。

### 開発ツール

- システムが [WebGL](/ja/docs/Web/API/WebGL_API) をサポートしている場合は、[ページ調査ツール](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) で [3D ビュー](https://firefox-source-docs.mozilla.org/devtools-user/3d_view/index.html) を提供します。
- 新しいツールである [スタイルエディター](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) は、リアルタイムな CSS スタイルシートの変更や作成を自由自在に行う機能を提供します。
- [ソース表示機能](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) が従来の HTML パーサーに代わり新しい HTML5 パーサーを使用するようになりました。

## Mozilla 開発者とアドオン開発者向けの変更点

### JavaScript code modules

#### NetUtil.jsm

- [`readInputStreamToString()`](</ja/docs/JavaScript_code_modules/NetUtil.jsm#readInputStreamToString()> "JavaScript_code_modules/NetUtil.jsm#readInputStreamToString()") へ新たに、入力ストリームを読み取る際のキャラクタセットの解釈を設定するための、省略可能な引数が追加されました。

#### 新しい JavaScript code modules

- [`source-editor.jsm`](/ja/docs/JavaScript_code_modules/source-editor.jsm)
  - : アドオンで利用可能な、便利で使いやすいソースコードエディターを提供します。これは [スクラッチパッド](/ja/docs/Tools/Scratchpad) など Firefox に統合している開発ツールで使用しているものと同じです。

### インターフェイスの変更

- `mozIAsyncHistory` インターフェイスに、ある URI が訪問済みであるかを確認するためのメソッド `mozIAsyncHistory.isURIVisited` が追加されました。
- `mozIAsyncHistory.isURIVisited` でコールバックハンドリング機能を提供するため、新たに `mozIVisitStatusCallback` インターフェイスを追加しました。
- `nsIMacDockSupport` インターフェイスが新属性 `badgeText` を用いて、Dock のアプリケーションアイコンへのテキスト追加をサポートしました。
- `nsINavHistoryResultObserver` インターフェイスでは、非推奨になった `containerOpened()` および `containerClosed()` メソッドに代わり `nsINavHistoryResultObserver.containerStateChanged` を実装することが必要です。

#### 削除されたインターフェイス

以下のインターフェイスは、不要になったため削除されました:

- `nsICharsetResolver`
- `nsIDOMNSElement`、詳しくは [bug707576](https://bugzilla.mozilla.org/show_bug.cgi?id=707576) をご覧いただき、代わりに `nsIDOMElement` を使用してください。

### テーマに関する変更

- `omni.jar` ファイルは名前を [`omni.ja`](</ja/docs/Mozilla/About_omni.ja_(formerly_omni.jar)> "Mozilla/About_omni.ja_%28formerly_omni.jar%29") に変更しました。

### 設定項目の変更

- `ui.tooltipDelay`
  - : マウスカーソルを載せてからツールチップが表示されるまでの遅延をミリ秒単位で指定します。

### ビルドシステムの変更

- `--enable-tracejit` ビルドオプションを削除しました。

### その他の変更

- 長く更新されていないアドオンは、デフォルトで互換性があると判断しないようになりました。現時点では、`maxVersion` が 4.0 を示しているアドオンです。

## 参考

{{Firefox_for_developers('10')}}
