---
title: Firefox 6 for developers
slug: Mozilla/Firefox/Releases/6
---

Firefox 6 は Gecko 6.0 ベースのブラウザーで、2011 年 8 月 16 日にリリースされました。このページは Firefox 6 のリリースにあたり、開発者に関係する変更についてまとめたものです。

## ウェブ開発者向けの変更点一覧

### HTML

- プログレスバーを表す HTML5 の [`<progress>`](/ja/docs/Web/HTML/Reference/Elements/progress) 要素がサポートされました。
- メディア要素にテキストトラックを追加する HTML5 の [`<track>`](/ja/docs/Web/HTML/Reference/Elements/track) 要素について、そのパース処理部分が実装されました。要素そのものは実装されていませんが、DOM に現れるようにはなります。
- [`border-radius`](/ja/docs/Web/CSS/Reference/Properties/border-radius) プロパティによって角が丸められたコンテナー内の [`<iframe>`](/ja/docs/Web/HTML/Reference/Elements/iframe) についても、適切に角が丸められるようになりました。
- [`<form>`](/ja/docs/Web/HTML/Reference/Elements/form) 要素の [`<input>`](/ja/docs/Web/HTML/Reference/Elements/input) テキストフィールドが XUL の `maxwidth` プロパティをサポートしなくなりました。これは意図的なものではなく、また HTML 仕様違反でもあります。要素の最大幅を設定するには、[`size`](/ja/docs/Web/HTML/Reference/Elements/input#attr-size) 属性を利用します。
- [`<canvas>`](/ja/docs/Web/HTML/Reference/Elements/canvas) の [`CanvasRenderingContext2d`](/ja/docs/Web/API/CanvasRenderingContext2D 'このインターフェイスのオブジェクトを取得するには、以下のようにのgetContext()の引数に"2d"を指定して呼び出します。') プロパティ `fillStyle` と `strokeStyle` はこれまで、妥当な色の指定の後に続く余計なものを無視する処理をしていましたが、適切にエラーとして処理されるように修正されました。たとえば、"red blue" を指定したとき、これまでは "red" と扱われていましたが、これからは指定そのものが無視されます。
- [`<canvas>`](/ja/docs/Web/HTML/Reference/Elements/canvas) 要素の width と height を適切に 0px と指定できるようになりました。これまではそう指定しても 300px にされていました。
- HTML [カスタムデータ属性](/ja/docs/Web/HTML/Reference/Global_attributes/data-*) (data-\*) がサポートされました。DOM プロパティ [`element.dataset`](/ja/docs/Web/API/Element/dataset) からデータにアクセスできます。
- [`<textarea>`](/ja/docs/Web/HTML/Reference/Elements/textarea) 要素がフォーカスされたとき、テキスト挿入箇所が最後ではなく先頭になりました。これにより、他のブラウザーの挙動と一致します。

### CSS

- [`-moz-text-decoration-color`](/ja/docs/Web/CSS/Reference/Properties/text-decoration-color)
  - : このプロパティは `text-decoration` で指定する `underline`, `overline`, `strikethrough` などの色を指定します。
- [`-moz-text-decoration-line`](/ja/docs/Web/CSS/Reference/Properties/text-decoration-line)
  - : このプロパティは `text-decoration` の種類を指定します。
- [`-moz-text-decoration-style`](/ja/docs/Web/CSS/Reference/Properties/text-decoration-style)
  - : このプロパティは `text-decoration` で指定する `underline`, `overline`, `strikethrough` などのスタイルを指定します。スタイルには `solid`, `double`, `dotted`, `dashed`, `wavy` などがあります。
- [`-moz-hyphens`](/ja/docs/Web/CSS/Reference/Properties/hyphens)
  - : このプロパティは行送りが発生する際、単語のハイフネーションを制御するプロパティです。
- [`-moz-orient`](/ja/docs/Web/CSS/Reference/Properties/-moz-orient)
  - : 現在は Mozilla 固有のプロパティで、いくつかの要素 ([`<progress>`](/ja/docs/Web/HTML/Reference/Elements/progress) 要素など) の縦横の向きを制御します。
- [`::-moz-progress-bar`](/ja/docs/Web/CSS/Reference/Selectors/::-moz-progress-bar)
  - : Mozilla 固有の擬似要素で、[`<progress>`](/ja/docs/Web/HTML/Reference/Elements/progress) 要素において、完了した部分のスタイルづけを行うためのものです。

#### その他の変更

- [`@-moz-document`](/ja/docs/Web/CSS/Reference/At-rules/@document) に新しく `regexp()` 関数記法が追加されました。これにより、スタイルシートを適用する文書の URL を [正規表現](/ja/docs/Web/JavaScript/Guide/Regular_expressions)でマッチさせられます。
- `aural` 媒体グループのために持っていたコードを削除したため、[`azimuth`](/ja/docs/Web/CSS/azimuth) CSS プロパティのサポートが廃止されました。このプロパティはちゃんと実装されていなかったため、パッチを当て続けるのではなく未完成の実装を省くほうが理にかなっていると考えました。
- これまで、[`:hover`](/ja/docs/Web/CSS/Reference/Selectors/:hover) 擬似クラスは Quirks モードにおいてクラスセレクターに適用されませんでした。このため `.someclass:hover` といったコードは動きませんでしたが、この例外が取り払われました。
- [`:indeterminate`](/ja/docs/Web/CSS/Reference/Selectors/:indeterminate) 擬似クラスは [`<progress>`](/ja/docs/Web/HTML/Reference/Elements/progress) 要素にも適用できます。これは非標準ですが、便利ですので他のブラウザーにも取り入れられて欲しいと考えています。

### DOM

- [コード内でのメディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Testing)
  - : [`window.matchMedia()`](/ja/docs/Web/API/Window/matchMedia) メソッドと [`MediaQueryList`](/ja/docs/Web/API/MediaQueryList) インターフェイスによって、メディアクエリーの結果をプログラムから検証できます。
- [Touch events](/ja/docs/Web/API/Touch_events)
  - : Firefox 6 は W3C の標準タッチイベント仕様をサポートします。これにより、タッチスクリーンやトラックパッドなどタッチセンサー式のデバイスでのタッチの解釈が容易になります。
- [Server-sent events](/ja/docs/Web/API/Server-sent_events)
  - : Server-sent events はサーバーが手元で生成された DOM イベントと同じようにイベントを送出するよう、ウェブアプリケーションが尋ねるための機能です。

<!---->

- これまでずっと、空文字列を返すだけだった `navigator.securityPolicy` プロパティが完全に削除されました。
- [`BlobBuilder`](/ja/docs/Web/API/Blob) がサポートされました。現時点では接頭辞付きの実装 (`MozBlobBuilder`) となっています。
- `document.height`, `document.width` が削除されました。 [バグ 585877](https://bugzilla.mozilla.org/show_bug.cgi?id=585877)
- [`DocumentType`](/ja/docs/Web/API/DocumentType) オブジェクトの `entities`, `notations` プロパティが削除されました。これは実装されておらず常に `null` を返しており、また仕様からも削除されていました。
- `DOMConfiguration` インターフェイスと、それを使用していた `document.domConfig` プロパティが削除されました。これらはサポートされておらず、また DOM 仕様からも削除されていました。
- `hashchange` イベントが適切に [`newURL`, `oldURL` フィールド](/ja/docs/Web/API/Window/hashchange_event#the_hashchange_event) を含むようになりました。
- [`FileReader`](/ja/docs/Web/API/FileReader) インターフェイスの `abort()` メソッドが、ファイルの読み込み中に利用された際に例外を投げるようになりました。
- [`window.postMessage()`](/ja/docs/Web/API/Window/postMessage) メソッドが [structured clone algorithm](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) を使用するようになり、あるウィンドウから他のウィンドウに文字列ではなく JavaScript オブジェクトを渡せるようになりました。
- [`window.history`](/ja/docs/Web/API/Window/history) API が `pushState()`, `replaceState()` メソッドに渡されたオブジェクトのシリアライズに [structured clone algorithm](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) を使用するようになりました。これによって循環参照などを含むより複雑なオブジェクトも使用可能となりました。
- 新しく追加された `beforeprint`, `afterprint` イベントによって、[印刷が行われたときと完了したときを検出する](/ja/docs/Web/CSS/Guides/Media_queries/Printing#detecting_print_requests) ことができるようになりました。
- `document.strictErrorChecking` プロパティが削除されました。実装されておらず、また DOM 仕様からも削除されていました。
- 標準である [`event.defaultPrevented`](/ja/docs/Web/API/Event/defaultPrevented) プロパティがサポートされました。[`event.preventDefault()`](/ja/docs/Web/API/Event/preventDefault) がイベントから呼び出されたかを知る際には、非標準の `getPreventdefault()` ではなくこちらを使うようにしましょう。
- [`window.top`](/ja/docs/Web/API/Window/top) プロパティが、適切に readonly となりました。
- これまでドキュメントのなかった DOM views が削除されました。これらには実装の詳細が多く、また不必要に様々なものを複雑にしていたため削除されました。もしこの変化に気づいた場合は、何か誤ったことをしている可能性があります。
- `EventTarget` の関数 [`addEventListener()`](/ja/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) に指定する引数 `useCapture` が optional となりました。これは WebKit の動作とも共通し、また新しい仕様でもそう定義されています。
- [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) オブジェクトの `mozResponseArrayBuffer` プロパティが `responseType`, `response` プロパティに置き換えられました。
- [`HTMLElement`](/ja/docs/Web/API/HTMLElement) インターフェイスに [`element.dataset`](/ja/docs/Web/API/Element/dataset) プロパティが追加されました。このプロパティにより [要素の `data-*` グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes/data-*) にアクセスできます。
- [`CustomEvent`](/ja/docs/Web/API/CustomEvent) インターフェイスが実装されました ([バグ 427537](https://bugzilla.mozilla.org/show_bug.cgi?id=427537))
- セキュリティの観点から、ユーザーがロケーションバーに `data:` URI と `javascript:` URI を入力した時、現在のページのセキュリティコンテキストを受け継がなくなりました。代わりに、新しい空のセキュリティコンテキストが生成されます。これにより、ロケーションバーに入力した `javascript:` URI から読み込まれたスクリプトは、DOM メソッドなどへのアクセスを持たなくなります。しかし、これらの URI がスクリプトから使用された場合は、これまでと同じように動作します。

### JavaScript

- これまで、いくつかの組み込み関数 (`eval`, `parseInt`, `Date.parse` など) に対し `new` オペレータを使うことができましたが、仕様においてこれは許されるべきではないとされていました。Firefox 6 では、このサポートが廃止されました。`new` オペレータのこういった利用は公式にはサポートされておらず、また広く利用されてもいません。この変更が何かに影響することはないでしょう。
- ECMAScript Harmony の [WeakMaps](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) がプロトタイプ実装として追加されました。

### SVG

- [`pathLength`](/ja/docs/Web/SVG/Reference/Attribute/pathLength) 属性がサポートされました。
- [`data:` URL](/ja/docs/Web/URI/Reference/Schemes/data) から読み込まれたパターン、グラデーション、フィルターが適切に動作するようになりました。

### MathML

- [`<mstyle>`](/ja/docs/Web/MathML/Reference/Element/mstyle) の実装が修正されました。

### アクセシビリティ (ARIA)

- 状態変化イベントが `aria-busy` の値の変化でも発生するようになりました。
- `aria-sort` が発生した際に属性変化イベントが発生するようになりました。

### ネットワーク

- [WebSocket](/ja/docs/Web/API/WebSockets_API)
  - : WebSocket プロトコルのサポートがバージョン 07 に更新されました。また、グローバルオブジェクトの`WebSocket`オブジェクトが`MozWebSocket`に改称されました。接頭辞のないオブジェクトの検出を目的としたときに問題となるため、それを防ぐ目的です。

<!---->

- `Content-Disposition` ヘッダーの構文解析が修正され、バックスラッシュでエスケープされた ASCII 文字が適切に文字そのものとして処理されるようになりました。これまではその文字をアンダースコア ("`_`")に置き換えるという誤った処理がなされていました。
- `Set-Cookie` ヘッダーのパスの値において、クォートが適切に処理されるようになりました。これまでクォートを使った場合はそれがデリミタではなく、パスの文字列として認識されていました。**この変更により、いくつかのサイトで互換性の問題が発生する可能性があります。**製作者はコードをチェックすることが望まれます。
- [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42) リクエストヘッダーがサポートされました。[`nsIHttpChannelInternal.HTTPUpgrade()`](</ja/docs/XPCOM_Interface_Reference/nsIHttpChannelInternal#HTTPUpgrade()>) を呼ぶことで、HTTP チャネルから他のプロトコルへのアップグレードをリクエストできます。

### その他の変更

- Microsummary が削除されました。広く使われおらず、また見つけにくい機能でもあり、サポートの継続によって Places (ブックマークと履歴) のアーキテクチャを向上させることが難しくなっていたからです。
- WebGL が [`OES_texture_float`](https://www.khronos.org/registry/gles/extensions/OES/OES_texture_float.txt) 拡張をサポートしました。
- JavaScript コードをテストする簡易で便利なツール [Scratchpad](/ja/docs/Tools/Scratchpad) が追加されました。

## Mozilla 開発者とアドオン開発者向けの変更点

Firefox 6 へアドオンを対応させるために必要な作業の概要は [アドオンの Firefox 6 対応](/ja/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_6) をご覧ください。

> [!NOTE]
> Firefox 6 では、従来のメジャーリリースと同様に、バイナリーコンポーネントをコンパイルし直す必要があります。詳しくは [バイナリーインターフェイス](/ja/docs/Developer_Guide/Interface_Compatibility#Binary_Interfaces) をご覧ください。

### JavaScript コードモジュール

#### FileUtils.jsm

- `openSafeFileOutputStream()` メソッドは、ファイルを即座に開こうとする代わりに、`DEFER_OPEN` [ビヘイビアフラグ](/ja/docs/XPCOM_Interface_Reference/nsIFileOutputStream#Behavior_flag_constants) 付きで開くようになりました。

#### XPCOMUtils.jsm

- 新しい [`importRelative()`](</ja/docs/JavaScript_code_modules/XPCOMUtils.jsm#importRelative()>) メソッドは、ある JavaScript コードモジュールを、他の JavaScript コードモジュールの相対パスから読み込むようになりました。これによって互いに依存するモジュールを開発しやすくなりました。

### XPCOM

- [`nsCOMArray<T>`](/ja/docs/XPCOM_array_guide#nsCOMArray.3CT.3E) に、配列から複数のオブジェクトを一度に削除できる [`RemoveObjectsAt()`](/ja/docs/XPCOM_array_guide#Deleting_objects) メソッドが追加されました。

### クロームからの DOM の使用

- [クロームコードでの DOM File API の使用](/ja/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : これまでもクロームコード内で DOM File API を使うことは可能でしたが、[`File`](/ja/docs/Web/API/File) コンストラクターをクロームで使用した場合に、ローカルパス名文字列を指定できるようになりました。また、[`nsIFile`](/ja/docs/XPCOM_Interface_Reference/nsIFile) オブジェクトを使用して、DOM File API を通じてアクセスするファイルを指定できるようになりました。

### インターフェイスの変更

- [`nsINavHistoryQueryOptions`](/ja/docs/XPCOM_Interface_Reference/nsINavHistoryQueryOptions) で、新たな定数 `SORT_BY_FRECENCY_ASCENDING` と `SORT_BY_FRECENCY_DESCENDING` を使った訪問頻度順のソートが可能になりました。
- [`nsIFilePicker`](/ja/docs/XPCOM_Interface_Reference/nsIFilePicker) に [`addToRecentDocs`](/ja/docs/XPCOM_Interface_Reference/nsIFilePicker#addToRecentDocs) 属性が追加されました。これは、もしユーザーの「最近使用したドキュメント」リストがあれば、そのリストに選択したファイルを追加するよう指定できるものです。この属性はプライベートブラウジングモードでは無視されます。
- [`nsINavBookmarkObserver`](/ja/docs/XPCOM_Interface_Reference/nsINavBookmarkObserver) メソッドにアイテム ID 引数を与える場合、GUID も必要となります。
- [`nsIPrefBranch.clearUserPref()`](/ja/docs/XPCOM_Interface_Reference/nsIPrefBranch#clearUserPref%28%29) が、指定された設定が存在しない場合やユーザー設定値がない場合も、例外を投げなくなりました。その代わり、単に何もしなくなりました。
- [`nsIMemoryReporter`](/ja/docs/XPCOM_Interface_Reference/nsIMemoryReporter) インターフェイスで、調べたいメモリーの種類 (マップ、ヒープ、その他) を指定できるようになりました。
- [`nsISHEntry`](/ja/docs/XPCOM_Interface_Reference/nsISHEntry) の `stateData` 属性が [`nsIStructuredCloneContainer`](/ja/docs/XPCOM_Interface_Reference/nsIStructuredCloneContainer) を返すようになりました。
- [`nsIURI`](/ja/docs/XPCOM_Interface_Reference/nsIURI) に [`ref`](/ja/docs/XPCOM_Interface_Reference/nsIURI#ref) 属性が追加されました。これは、URI の一部の参照 (「#」以降の部分) を返すものです。また、参照メンバーなしに [`nsIURI`](/ja/docs/XPCOM_Interface_Reference/nsIURI) を複製できる [`cloneIgnoringRef()`](/ja/docs/XPCOM_Interface_Reference/nsIURI#cloneIgnoringRef%28%29) メソッドと、参照メンバーを無視して他の [`nsIURI`](/ja/docs/XPCOM_Interface_Reference/nsIURI) と比較できる [`equalsExceptRef()`](/ja/docs/XPCOM_Interface_Reference/nsIURI#equalsExceptRef%28%29) メソッドが追加されました。

#### 新しいインターフェイス

- [`mozIAsyncFavicons`](/ja/docs/XPCOM_Interface_Reference/mozIAsyncFavicons)
  - : ブックマークアイコン (favicon) サービスへの非同期アクセスが可能な新サービスです。
- [`nsIEventSource`](/ja/docs/XPCOM_Interface_Reference/nsIEventSource)
  - : _詳細は後日解説します。_
- [`nsIGSettingsCollection`](/ja/docs/XPCOM_Interface_Reference/nsIGSettingsCollection)
  - : _詳細は後日解説します。_
- [`nsIGSettingsService`](/ja/docs/XPCOM_Interface_Reference/nsIGSettingsService)
  - : _詳細は後日解説します。_
- [`nsIHttpUpgradeListener`](/ja/docs/XPCOM_Interface_Reference/nsIHttpUpgradeListener)
  - : [`nsIHttpChannelInternal.HTTPUpgrade()`](/ja/docs/XPCOM_Interface_Reference/nsIHttpChannelInternal#HTTPUpgrade%28%29) メソッドを通じた HTTP アップグレード要求を処理するためのコールバックインターフェイスです。
- [`nsIStructuredCloneContainer`](/ja/docs/XPCOM_Interface_Reference/nsIStructuredCloneContainer)
  - : [構造化された複製アルゴリズム](/ja/docs/HTML/Structured_clones) を使ってシリアライズされたオブジェクトのためのコンテナーです。
- [`nsITelemetry`](/ja/docs/XPCOM_Interface_Reference/nsITelemetry)
  - : パフォーマンス測定を目的とした [使用統計情報 (Telemetry)](http://mozilla.jp/legal/privacy/firefox/#telemetry) を記録とヒストグラムの生成に使用されます。[バグ 649502](https://bugzilla.mozilla.org/show_bug.cgi?id=649502) と [バグ 585196](https://bugzilla.mozilla.org/show_bug.cgi?id=585196) 参照。
- [`nsITimedChannel`](/ja/docs/XPCOM_Interface_Reference/nsITimedChannel)
  - : [バグ 576006](https://bugzilla.mozilla.org/show_bug.cgi?id=576006) 参照。
- [`nsIWebSocketListener`](/ja/docs/XPCOM_Interface_Reference/nsIWebSocketListener)
  - : [バグ 640003](https://bugzilla.mozilla.org/show_bug.cgi?id=640003) 参照。
- [`nsIWebSocketProtocol`](/ja/docs/XPCOM_Interface_Reference/nsIWebSocketProtocol)
  - : [バグ 640003](https://bugzilla.mozilla.org/show_bug.cgi?id=640003) 参照。

#### 削除されたインターフェイス

以下のインターフェイスは、不要となり削除された実装です。詳細はバグを参照してください。

- `nsIDOMDocumentEvent` ([バグ 655517](https://bugzilla.mozilla.org/show_bug.cgi?id=655517))
- `nsIDOMDocumentTraversal` ([バグ 655514](https://bugzilla.mozilla.org/show_bug.cgi?id=655514))
- `nsIDOMDocumentRange` ([バグ 655513](https://bugzilla.mozilla.org/show_bug.cgi?id=655513))
- `IWeaveCrypto` ([バグ 651596](https://bugzilla.mozilla.org/show_bug.cgi?id=651596))
- `nsIDOM3DocumentEvent` ([バグ 481863](https://bugzilla.mozilla.org/show_bug.cgi?id=481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` ([バグ 637253](https://bugzilla.mozilla.org/show_bug.cgi?id=637253))
- `nsIPluginInstance` ([バグ 637253](https://bugzilla.mozilla.org/show_bug.cgi?id=637253))
- `nsIHTMLEditRules` ([バグ 633750](https://bugzilla.mozilla.org/show_bug.cgi?id=633750))
- [`nsIXSLTProcessorObsolete`](/ja/docs/XPCOM_Interface_Reference/nsIXSLTProcessorObsolete) ([バグ 649534](https://bugzilla.mozilla.org/show_bug.cgi?id=649534))

### その他の変更

- [アプリケーションコードからの設定の使用](/ja/docs/Preferences/Using_preferences_from_application_code)
  - : 設定へ簡単にアクセスできる、新しい静的な API が実装されました。これはアプリケーションコードからのみ使用可能であり、アドオンでは使用できません。

## 参考

- [Firefox 6 の後方互換性に関わる修正のまとめ](https://dev.mozilla.jp/2011/06/firefox6-backward-compatibility/)
- [高速リリースサイクルに関するよくある質問](http://mozilla.jp/firefox/preview/faq/)

<!---->

- [Firefox 5 for developers](/ja/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 for developers](/ja/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 for developers](/ja/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 for developers](/ja/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 for developers](/ja/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 for developers](/ja/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 for developers](/ja/docs/Mozilla/Firefox/Releases/1.5)
