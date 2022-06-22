---
title: Firefox 43 for developers
slug: Mozilla/Firefox/Releases/43
tags:
  - Firefox
translation_of: Mozilla/Firefox/Releases/43
---
{{FirefoxSidebar}}

Firefox 43 は、米国時間 2015 年 12 月 15 日にリリースされました。この記事では、ウェブ開発者だけでなく、 Firefox や Gecko の開発者、アドオン開発者にとっても有用な主な変更点を挙げています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [ウェブコンソールでサーバ側のログを記録](/ja/docs/Tools/Web_Console/Console_messages#server)
- [CSS 宣言をオーバーライドしたルールをすばやく見つける](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#overridden_declarations)
- [インスペクタのコンテキストメニュー項目 "Use in Console"](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#element_popup_menu)
- [ルールビューで "厳密に" フィルタリング](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#strict_search)
- [コンソールのネットワーク項目にネットワークモニターへのリンクを追加](/ja/docs/Tools/Web_Console/Console_messages#network)
- [マークアップビューで、擬似クラスを強制的に適用していることを示すインジケータを表示](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#setting_hover_active_focus)
- WebIDE の新たなサイドバー UI

[Firefox 42 から Firefox 43 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2015-08-10&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678).

### CSS

- 接頭辞がない標準仕様の {{Cssxref("hyphens")}} をサポートしました ({{bug(953408)}})。
- {{cssxref("font")}} 一括指定プロパティを、{{cssxref("font-stretch")}} の値を受け入れるように更新しました ({{bug(1057680)}})。
- 最新の仕様の更新に合致するよう、{{cssxref(":fullscreen")}} 擬似クラスはフルスクリーン時に、トップレベル要素だけでなく要素の集合全体を選択するようになりました ({{bug(1199522)}})。
- {{cssxref("writing-mode")}} において非推奨な SVG 向けの値である `lr`、`lr-tb`、`rl`、`tb`、`tb-rl` を、標準プロパティのエイリアスとして CSS に追加しました ({{bug(1205787)}})。

### HTML

- 複数のフレームを持つ ICO 画像を指定した {{htmlelement("img")}} 要素で、画像固有の寸法は最小フレームではなく最大フレームの寸法を設定するようになりました ({{bug(1201796)}})。
- ドキュメントのビューポートの値 (`<meta name="viewport>` で定義) を、JavaScript で動的に変更できるようになりました ({{bug(976616)}})。

### JavaScript

#### 新規 API

- ES2016 の新規メソッドである {{jsxref("Array.prototype.includes()")}} および {{jsxref("TypedArray.prototype.includes()")}} を、デフォルトで有効にしました ({{bug(1070767)}})。

#### `arguments` オブジェクトに関する変更点

- ES2015 仕様に合致するよう、[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) は自身の [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) オブジェクトを持たないようになりました。`arguments` オブジェクトは Lexical にバインドされます (外側の関数から継承)。たいていの場合、[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters) が `(...args) => args[i]` のよい代替になります。{{bug(889158)}} をご覧ください。
- [arguments](/ja/docs/Web/JavaScript/Reference/Functions/arguments) オブジェクトは、[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters) と共に使用できるようになりました ({{bug(1133298)}})。
- 厳格モードではない関数にマップされた [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) オブジェクトは、関数が[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)、[デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)、[分割引数](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) のいずれも**含まない**場合に限り提供されるようになりました ({{bug(1175394)}})。

#### その他の変更点

- [ジェネレーター](/ja/docs/Web/JavaScript/Reference/Statements/function*)および[ジェネレーターメソッド](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)は、ES2016/ES7 に従ってコンストラクタブルではなくなりました ({{bug(1191486)}})。

### インターフェイス/API/DOM

#### DOM & HTML DOM

_変更なし。_

#### IndexedDB

- ロケールを明示したインデックスの作成を可能にする、[Locale-aware Sorting](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB#locale-aware_sorting) と呼ばれる新機能を追加しました。ロケールの規則に従ってデータをソートするために使用できます ({{bug(871846)}})。これは、非標準の Firefox 独自機能です。

#### サービスワーカー

- 仕様に従い、{{domxref("ExtendableEvent.waitUntil()")}} が {{domxref("ExtendableEvent")}} ハンドラーの外部で呼び出された場合に、Firefox は `InvalidStateError` を発生するようになりました。加えて、複数回呼び出した {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} は積み上げられ、結果的に promise は [Extend Lifetime Promises](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises) のリストに追加されます ({{bug(1180274)}})。
- {{domxref("PushMessageData")}} メソッドを実装しました ({{bug(1149195)}})。

#### WebRTC

- {{domxref("HTMLCanvasElement.captureStream()")}} メソッドを、デフォルトで有効にしました ({{bug(1177276)}})。
- `RTCOfferOptions` の、非標準である制約的なオプションリストを非推奨にしました。これは Firefox 44 で完全に削除する予定です。

#### その他

- [Battery Status API](/ja/docs/Web/API/Battery_Status_API) で、最近更新された仕様で指定された {{domxref("Navigator.getBattery()")}} 向けの Promise 構文を使用するようになりました ({{bug(1050749)}})。
- `User-Agent` ヘッダが {{Glossary("Forbidden_header_name", "forbidden header names", 1)}} のリストから外れましたので、XHR の {{domxref("XMLHttpRequest.setRequestHeader()")}} などで、[Fetch](/ja/docs/Web/API/Fetch_API) {{domxref("Headers")}} オブジェクトを設定できるようになりました ({{bug(1188932)}})。
- {{domxref("MediaRecorder.MediaRecorder()")}} コンストラクタが options Dictionary を引数としてサポートしました。記録するオーディオ/ビデオのビットレートを設定できます ({{bug("1161276")}})。
- [Performance Timeline API](/ja/docs/Web/API/Performance_Timeline_API) の {{domxref("PerformanceObserver")}} インターフェイスを実装しました ({{bug(1165796)}})。
- Frame Timing API を追加しました。{{domxref("PerformanceRenderTiming")}} および {{domxref("PerformanceCompositeTiming")}} インターフェイスを使用できます ({{bug(1191178)}})。
- 最新の [画面方向 API](/ja/docs/Web/API/Screen_Orientation_API) を実装しました。接頭辞がない {{domxref("Screen.orientation")}} および {{domxref("ScreenOrientation")}} インターフェイスを使用できます ({{bug("1131470")}})。非標準の {{domxref("Screen.mozOrientation")}}、{{domxref("Screen.onmozorientationchange")}}、{{domxref("Screen.mozLockOrientation()")}}、{{domxref("Screen.mozUnlockOrientation()")}} は将来削除する予定です。
- Linux 環境で、Windows 環境と同様に {{domxref("Event.timeStamp")}} が {{domxref("DOMHighResTimeStamp")}} を返すようになりました ({{bug(1026803)}})。
- {{domxref("Document.onselectionchange")}}、{{domxref("GlobalEventHandlers.onselectstart")}} イベントハンドラープロパティおよび {{domxref("Selection")}} イベント {{domxref("Document/selectionchange_event", "selectionchange")}}、{{domxref("Document/selectstart_event", "selectstart")}} を実験的にサポートしました ({{bug(571294)}})。`selectionchange` イベントは、関連付けられた `Selection` オブジェクトが関与している場合に {{domxref("Document")}} または特定の {{domxref("HTMLInputElement")}} や {{domxref("HTMLTextAreaElement")}} で発生します ({{bug(1196479)}})。この機能は設定項目 `dom.select_events.enabled` で制御しており、既定値は Nightly を除き `false` です。
- Android 版 Firefox および Firefox OS で、{{domxref("MouseEvent.offsetX")}} および {{domxref("MouseEvent.offsetY")}} のサポートを有効化しました ({{bug(1204841)}})。
- {{domxref("HTMLCanvasElement.mozFetchAsStream()")}} メソッドを削除しました ({{bug(1206030)}})。
- {{domxref("Request.Request", "Request()")}} コンストラクタは {{domxref("Window.fetch", "fetch()")}} と同様に、ユーザ名やパスワードを含む URL を使用した場合に {{jsxref("TypeError")}} 例外が発生するようになりました ({{bug(1195820)}})。

### MathML

_変更なし。_

### SVG

_変更なし。_

### Audio/Video<

_変更なし。_

## HTTP

_変更なし。_

## ネットワーク

_変更なし。_

## セキュリティ

- サードパーティの iframe から Web Storage (すなわち `localStorage` および `sessionStorage`) へのアクセスは、ユーザが[サードパーティ Cookie を禁止している](https://support.mozilla.org/ja/kb/disable-third-party-cookies)場合に拒否されるようになりました ({{bug("536509")}})。
- ホワイトリストを Nightly および Aurora/Dev Edition 版のブラウザーで削除しました ({{bug(1201023)}})。現状では、次のバージョン (Firefox 44) の Beta および Release 版でもホワイトリストを削除する予定です。
- {{htmlelement("script")}} およびスタイルシートにリンクする {{htmlelement("link")}} に、Subresource integrity を実装しました ({{bug("992096")}})。

## アドオン開発者と Mozilla 開発者向けの変更点

### インターフェイス

_変更なし。_

### XUL

_変更なし。_

### JavaScript コードモジュール

_変更なし。_

### XPCOM

_変更なし。_

### プラグイン

- content をマルチプロセスに切り替える将来のリリースへの準備として、[NPAPI](/ja/Add-ons/Plugins) プラグインをページ content と同じプロセスで実行できなくなりました。`dom.ipc.plugins` から始まる設定項目は使用しません。

### その他

_変更なし。_

## 過去のバージョン

{{Firefox_for_developers('42')}}
