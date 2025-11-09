---
title: Firefox 53 for developers
slug: Mozilla/Firefox/Releases/53
l10n:
  sourceCommit: f68449a8d7d8c04b1cdc90b22e780b202c4a1ff4
---

Firefox 53 は、米国時間 2017 年 4 月 19 日にリリースされました。この記事では、ウェブ開発者だけでなく、Firefox や Gecko の開発者、アドオン開発者にとっても有益な変更点を掲載しています。

## ウェブ開発者向けの変更

### 開発者ツール

- 非同期パン/ズームによって、ハイライト表示でスクロールに待ち時間が発生する問題を解消しました ([Firefox バグ 1312103](https://bugzil.la/1312103))。
- 要素の [すべての CSS パスをコピーする](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#copy-css-path) メニュー項目を追加しました ([Firefox バグ 1323700](https://bugzil.la/1323700))。
- 開発ツールで CSS Color Module Level 4 をサポートしました ([Firefox バグ 1310681](https://bugzil.la/1310681))。
- マークアップビュー: 折りたたんでいるノードの開始タグと終了タグの間に、視覚的なヒントを追加しました ([Firefox バグ 1323193](https://bugzil.la/1323193))。

### CSS

#### 新機能

- すべての `mask-*` 個別指定プロパティ ([CSS マスク](/ja/docs/Web/CSS/Guides/Masking) をご覧ください) が、デフォルトで使用可能になりました ([Firefox バグ 1251161](https://bugzil.la/1251161))。
- {{cssxref("caret-color")}} プロパティを追加しました ([Firefox バグ 1063162](https://bugzil.la/1063162))。
- {{cssxref("place-items")}}/{{cssxref("place-self")}}/{{cssxref("place-content")}} 一括指定プロパティを実装しました ([Firefox バグ 1319958](https://bugzil.la/1319958))。
- {{cssxref("display")}} プロパティに値 `flow-root` を追加しました ([Firefox バグ 1322191](https://bugzil.la/1322191))。
- {{cssxref("tab-size", "-moz-tab-size")}} が {{cssxref("&lt;length&gt;")}} 値を受け入れるようになりました ([Firefox バグ 943918](https://bugzil.la/943918))。また、アニメーションが可能になりました ([Firefox バグ 1308110](https://bugzil.la/1308110))。
- {{cssxref("mask-mode")}}:luminance がグラデーションのマスクで動作しない問題を修正しました ([Firefox バグ 1346265](https://bugzil.la/1346265))。
- \[css-grid] {{cssxref("grid-template-rows")}} で、fr 単位を使用するとビューポートが埋まらない問題を修正しました ([Firefox バグ 1346699](https://bugzil.la/1346699))。
- flex アイテムが絶対位置指定の兄弟要素で隔てられているとき、"order" に従って並べ替えられない問題を修正しました ([Firefox バグ 1345873](https://bugzil.la/1345873))。

#### その他の変更点

- mask 関係の個別指定プロパティを SVG 要素に対して有効化しました ([Firefox バグ 1319667](https://bugzil.la/1319667))。
- \[css-grid] グリッドアイテムが `<table>` であるときに `align-self`/`justify-self:stretch`/`normal` が動作しない問題を修正しました ([Firefox バグ 1316051](https://bugzil.la/1316051))。
- 大きなリファレンスボックスで半径をパーセンテージで示した `clip-path: circle()` が正しくレンダリングされない問題を修正しました ([Firefox バグ 1324713](https://bugzil.la/1324713))。
- ギリシャ文字に対して {{cssxref("text-transform")}} の値 `uppercase` を適用したとき、単独のエータについたアクセント (ή) が取り除かれないようになりました ([Firefox バグ 1322989](https://bugzil.la/1322989))。
- {{cssxref("display")}} の値 `contents` を使用できるかは、設定項目 `layout.css.display-contents.enabled` で制御していました。Firefox 53 でこの設定項目を削除しましたので常に有効になり、無効化できなくなりました ([Firefox バグ 1295788](https://bugzil.la/1295788))。

### JavaScript

- {{jsxref("Function.name")}} プロパティの、ECMAScript 2015 のセマンティクスを実装しました。これは、無名関数で推測した名前 (`var foo = function() {}`) を含みます ([Firefox バグ 883377](https://bugzil.la/883377))。
- closing iterators の、ECMAScript 2015 のセマンティクスを実装しました。これは、例えば [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループに影響があります ([Firefox バグ 1147371](https://bugzil.la/1147371))。
- [タグ付けされたテンプレートリテラルでエスケープシーケンスの制限を取り去る](/ja/docs/Web/JavaScript/Reference/Template_literals#tagged_template_literals_and_escape_sequences)、[Template Literal Revision 提案](https://tc39.github.io/proposal-template-literal-revision/) を実装しました ([Firefox バグ 1317375](https://bugzil.la/1317375))。
- 非標準の [String ジェネリック](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#string_generic_methods) について、コンソールで非推奨の警告を表示するようになりました。将来削除する予定ですので、今後は使用しないでください! ([Firefox バグ 1319926](https://bugzil.la/1319926))
- {{jsxref("TypedArray")}} オブジェクトの静的なプロパティ `length` の値を、ES2016 に従って 3 から 0 に変更しました ([Firefox バグ 1317306](https://bugzil.la/1317306))。
- {{jsxref("DataView")}} で {{jsxref("SharedArrayBuffer")}} が使用可能になりました ([Firefox バグ 1246597](https://bugzil.la/1246597))。
- 旧版の仕様書では、{{jsxref("SharedArrayBuffer")}} オブジェクトは[構造化複製](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)の間に、明示的に転送しなければなりませんでした。新しい仕様では[移譲可能なオブジェクト](/ja/docs/Web/API/Transferable)ではなくなり、転送リストに含まれてはなりません。新しい動作について以前はコンソールで警告を表示するだけでしたが、今後はエラーが発生します ([Firefox バグ 1302037](https://bugzil.la/1302037))。
- {{jsxref("ArrayBuffer")}} の長さを、{{jsxref("Number.MAX_SAFE_INTEGER")}}に制限しました (>= 2 \*\* 53) ([Firefox バグ 1255128](https://bugzil.la/1255128))。
- {{jsxref("Error")}} やほかのネイティブエラーオブジェクトのプロトタイプ ({{jsxref("RangeError")}} など) が、固有の Error オブジェクトではなく通常のオブジェクトになりました (特に、`Object.prototype.toString.call(Error.prototype)` は `"[object Error]"` ではなく `"[object Object]"` になります) ([Firefox バグ 1213341](https://bugzil.la/1213341))。

### イベント

- CSS トランジション: {{domxref("Element/transitionstart_event", "transitionstart")}}、{{domxref("Element/transitionrun_event", "transitionrun")}}、{{domxref("Element/transitioncancel_event", "transitioncancel")}} イベントを実装しました ([Firefox バグ 1264125](https://bugzil.la/1264125)、[Firefox バグ 1287983](https://bugzil.la/1287983))。
- {{domxref("CompositionEvent.CompositionEvent", "CompositionEvent")}} コンストラクターを実装しました ([Firefox バグ 1002256](https://bugzil.la/1002256))。
- {{domxref("MouseEvent.clientX")}}/{{domxref("MouseEvent.clientY")}} の別名である {{domxref("MouseEvent.x")}} および {{domxref("MouseEvent.y")}} を実装しました ([Firefox バグ 424390](https://bugzil.la/424390))。
- {{domxref("Element/auxclick_event", "auxclick")}} イベントと、これに対応するイベントハンドラーを実装しました ([Firefox バグ 1304044](https://bugzil.la/1304044))。
- {{domxref("Element/transitioncancel_event", "transitioncancel")}} イベントが、[トランジション](/ja/docs/Web/CSS/Guides/Transitions) をキャンセルした後に発生するようになりました。

### DOM

- 以前は {{domxref("HTMLHyperLinkElementUtils")}} の {{domxref("HTMLAnchorElement/pathname", "pathname")}} および {{domxref("HTMLAnchorElement/search", "search")}} プロパティが、URL の誤った部分を返していました。例えば `http://z.com/x?a=true&b=false` の URL について、`pathname` は "`/x`" ではなく "`/x?a=true&b=false`"、`search` は "`?a=true&b=false`" ではなく "" を返していました。これらを修正しました ([Firefox バグ 1310483](https://bugzil.la/1310483))。
- {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} コンストラクターが、init オブジェクトとして文字列や一連の文字列を受け入れるようになりました ([Firefox バグ 1330678](https://bugzil.la/1330678))。
- [Selection API](/ja/docs/Web/API/Selection_API) の {{domxref("Selection.setBaseAndExtent()")}} メソッドを実装しました ([Firefox バグ 1321623](https://bugzil.la/1321623))。
- `file` 型の {{htmlelement("input")}} の `value` に["fakepath"](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly) を追加する機能を、Gecko に実装しました。ほかのブラウザーと同等になります ([Firefox バグ 1274596](https://bugzil.la/1274596))。
- 非推奨の {{domxref("Node.rootNode")}} プロパティを置き換える、{{domxref("Node.getRootNode()")}} を実装しました ([Firefox バグ 1269155](https://bugzil.la/1269155))。
- {{domxref("Plugin")}} および {{domxref("PluginArray")}} オブジェクト特有のプロパティが、enumerable ではなくなりました ([Firefox バグ 1270366](https://bugzil.la/1270366))。
- {{domxref("MimeTypeArray")}} オブジェクトの名前付きプロパティが、enumerable ではなくなりました ([Firefox バグ 1270364](https://bugzil.la/1270364))。
- [権限 API](/ja/docs/Web/API/Permissions_API) の {{domxref("Permissions.query()")}} で使用するパーミッション名で、新たに `persistent-storage` が使用可能になりました ([Firefox バグ 1270038](https://bugzil.la/1270038))。これは [Storage API](https://storage.spec.whatwg.org/) による、持続的なボックス (すなわち [persistent storage](https://storage.spec.whatwg.org/#persistence)) をオリジンに許可します。

### ワーカーおよびサービスワーカー

- [ネットワーク情報 API](/ja/docs/Web/API/Network_Information_API) が、ワーカーで使用可能になりました ([Firefox バグ 1323172](https://bugzil.la/1323172))。
- [サーバー送信イベント](/ja/docs/Web/API/Server-sent_events) がワーカーから使用可能になりました ([Firefox バグ 1267903](https://bugzil.la/1267903))。
- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}} が、非同期呼び出し可能になりました ([Firefox バグ 1263304](https://bugzil.la/1263304))。

### WebGL

- {{domxref("WEBGL_compressed_texture_astc")}} WebGL 拡張を実装しました ([Firefox バグ 1250077](https://bugzil.la/1250077))。
- {{domxref("WEBGL_debug_renderer_info")}} WebGL 拡張をデフォルトで有効にしました ([Firefox バグ 1336645](https://bugzil.la/1336645))。

### Audio/Video/Media

#### 全般

- **Android 版 Firefox 53** より、マルチコアシステムでパフォーマンスを高めるため、メディアのデコードを外部プロセスで制御します ([Firefox バグ 1333323](https://bugzil.la/1333323))。

#### メディア要素

- メディア要素でメディアの再生を開始するために使用する {{domxref("HTMLMediaElement.play()")}} メソッドが、{{jsxref("Promise")}} を返すようになりました。この Promise は再生を開始すると fulfilled 状態、エラーが発生すると rejected 状態になります ([Firefox バグ 1244768](https://bugzil.la/1244768))。

#### Web Audio API

- {{domxref("AudioScheduledSourceNode")}} インターフェイスを実装して、{{domxref("AudioBufferSourceNode")}}、{{domxref("ConstantSourceNode")}}、{{domxref("OscillatorNode")}} インターフェイスはこのインターフェイスを基にするようになりました ([Firefox バグ 1324568](https://bugzil.la/1324568))。

#### WebRTC

- {{domxref("RTCPeerConnection")}} の {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} および {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} メソッドが、{{domxref("RTCSessionDescription")}} を直接返すのではなく、{{domxref("RTCSessionDescriptionInit")}} 辞書に従うオブジェクトを返す {{jsxref("Promise")}} を返すようになりました。既存のコードは引き続き動作しますが、[新しいコードはよりシンプルに記述できます](/ja/docs/Web/API/RTCPeerConnection/setLocalDescription#About_the_session_description_parameter)。
- 同様に、{{domxref("RTCPeerConnection")}} の {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} および {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} メソッドが、{{domxref("RTCSessionDescriptionInit")}} 辞書に従うオブジェクトを受け入れるようになりました。既存のコードは引き続き動作しますが、[シンプルにできます](/ja/docs/Web/API/RTCPeerConnection/setLocalDescription#About_the_session_description_parameter)。
- {{domxref("RTCPeerConnection.addIceCandidate()")}} が、{{domxref("RTCIceCandidateInit")}} 辞書に従うオブジェクトを受け入れるようになりました。これは既存のコードと互換性がありますが、上記の変更点と並んで使用するとコードをよりシンプルに記述できます ([Firefox バグ 1263312](https://bugzil.la/1263312))。
- {{domxref("RTCDTMFSender")}} を使用する {{Glossary("DTMF")}} のサポートを、デフォルトで有効にしました。詳細や動作について、[Using DTMF with WebRTC](/ja/docs/Web/API/WebRTC_API/Using_DTMF) をご覧ください。

### HTTP/ネットワーク

- {{HTTPHeader("Referrer-Policy")}} の既定値をユーザーが設定できる設定項目 `network.http.referer.userControlPolicy` を、Gecko の `about:config` に追加しました ([Firefox バグ 1304623](https://bugzil.la/1304623))。以下の値を使用できます:
  - 0 — `no-referrer`
  - 1 — `same-origin`
  - 2 — `strict-origin-when-cross-origin`
  - 3 — `no-referrer-when-downgrade` (既定値)

- [Application-Layer Protocol Negotiation](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) を支持するため、Next Protocol Negotiation (NPN) のサポートを廃止しました ([Firefox バグ 1248198](https://bugzil.la/1248198))。
- {{httpheader("Large-Allocation")}} HTTP ヘッダーをデフォルトで有効にして、設定で無効化しないようになりました ([Firefox バグ 1331083](https://bugzil.la/1331083))。

### SVG

- {{domxref("SVGGeometryElement")}} インターフェイスを部分的に実装しました ([Firefox バグ 1239100](https://bugzil.la/1239100))。

## ウェブプラットフォームから廃止

### HTML/XML

- 設定項目 `dom.details_element.enabled` (Firefox で {{htmlelement("details")}} および {{htmlelement("summary")}} 要素のサポートを有効化/無効化します) を `about:config` から削除しました。これらの要素 (Firefox 49 からデフォルトで有効化) は無効化できません。[Firefox バグ 1271549](https://bugzil.la/1271549) をご覧ください。
- {{htmlelement("iframe")}} 要素および {{domxref("HTMLIFrameElement")}} インターフェイスの `mozapp` 属性を削除しました。これは、moz [Browser API](/ja/docs/Mozilla/Gecko/Chrome/API/Browser_API) の `<iframe>` に Firefox OS アプリを埋め込めるようにするために使用しました ([Firefox バグ 1310845](https://bugzil.la/1310845))。
- {{domxref("HTMLIFrameElement.setInputMethodActive()")}} メソッドおよび `InputMethod` インターフェイス (Firefox OS アプリで IME を設定および制御するために使用しました) を削除しました ([Firefox バグ 1313169](https://bugzil.la/1313169))。

### CSS

- {{cssxref(":dir", ":dir()")}} 擬似クラスの、`-moz` 接頭辞がついた派生形を削除しました ([Firefox バグ 1270406](https://bugzil.la/1270406))。
- {{cssxref("text-align-last")}} の、`-moz` 接頭辞がついた派生形を削除しました ([Firefox バグ 1276808](https://bugzil.la/1276808))。
- {{cssxref("calc", "calc()")}} メソッドの、`-moz` 接頭辞がついた派生形を削除しました ([Firefox バグ 1331296](https://bugzil.la/1331296))。
- 独自仕様である `-moz-samplesize` media fragment (メモリーが少ない Firefox OS 端末にダウンサンプリングした画像を提供することを支援するために追加しました。[Firefox バグ 854795](https://bugzil.la/854795) をご覧ください) を削除しました ([Firefox バグ 1311246](https://bugzil.la/1311246))。

### JavaScript

- 非標準の {{jsxref("ArrayBuffer.slice()")}} を削除しました (ただし、標準化された {{jsxref("ArrayBuffer.prototype.slice()")}} を維持しています) ([Firefox バグ 1313112](https://bugzil.la/1313112))。

### API

- [Wifi information API](/ja/docs/Archive/B2G_OS/API/WiFi_Information_API)、Speaker Manager API、Tethering API、[Settings API](/ja/docs/Archive/B2G_OS/API/Settings_API) をプラットフォームから削除しました ([Firefox バグ 1313788](https://bugzil.la/1313788)、[Firefox バグ 1317853](https://bugzil.la/1317853)、[Firefox バグ 1313789](https://bugzil.la/1313789)、[Firefox バグ 1313155](https://bugzil.la/1313155))。

### その他

- {{domxref("HTMLEmbedElement")}} および {{domxref("HTMLObjectElement")}} インターフェイスから `legacycaller` を削除しました ([Firefox バグ 909656](https://bugzil.la/909656))。

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

新規 API:

- [`browsingData`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)
- [`identity`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/identity)
- [`contextualIdentities`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

向上した API:

- [`storage.sync`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)
- [`contextMenus`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus) の [context タイプ](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType) として `page_action`、`browser_action`、`password`, `tab`
- [`webRequest.onBeforeRequest`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) で `requestBody` をサポート
- [`tabs.insertCSS`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) で `cssOrigin` をサポート。ユーザースタイルシートが挿入可能になります。

### JavaScript コードモジュール

- 非同期の [AddonManager API](/ja/docs/Mozilla/Add-ons/Add-on_Manager/AddonManager) で、コールバックだけでなく {{jsxref("Promise")}} もサポートしました ([Firefox バグ 987512](https://bugzil.la/987512)。

## 過去のバージョン

{{Firefox_for_developers(52)}}
