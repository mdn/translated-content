---
title: Firefox 53 for developers
slug: Mozilla/Firefox/Releases/53
---

Firefox 53 は、米国時間 2017 年 4 月 19 日にリリースされました。このページでは、開発者に影響する Firefox 53 の変更点をまとめています。

### 開発者ツール

- 非同期パン/ズームによって、ハイライト表示でスクロールに待ち時間が発生する問題を解消しました ({{bug(1312103)}})。
- 要素の [すべての CSS パスをコピーする](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Copy_CSS_Path) メニュー項目を追加しました ({{bug(1323700)}})。
- 開発ツールで CSS Color Module Level 4 をサポートしました ({{bug(1310681)}})。
- マークアップビュー: 折りたたんでいるノードの開始タグと終了タグの間に、視覚的なヒントを追加しました ({{bug(1323193)}})。

### CSS

#### 新機能

- すべての `mask-*` ロングハンドプロパティ ([CSS Masks](/ja/docs/Web/CSS/CSS_Masks) をご覧ください) が、デフォルトで使用可能になりました ({{bug(1251161)}})。
- {{cssxref("caret-color")}} プロパティを追加しました ({{bug(1063162)}})。
- {{cssxref("place-items")}}/{{cssxref("place-self")}}/{{cssxref("place-content")}} ショートハンドプロパティを実装しました ({{bug(1319958)}})。
- {{cssxref("display")}} プロパティに値 `flow-root` を追加しました ({{bug(1322191)}})。
- {{cssxref("tab-size", "-moz-tab-size")}} が {{cssxref("&lt;length&gt;")}} 値を受け入れるようになりました ({{bug(943918)}})。また、アニメーションが可能になりました ({{bug(1308110)}})。
- {{cssxref("mask-mode")}}:luminance がグラデーションのマスクで動作しない問題を修正しました ({{bug(1346265)}})。
- \[css-grid] {{cssxref("grid-template-rows")}} で、fr 単位を使用するとビューポートが埋まらない問題を修正しました ({{bug(1346699)}})。
- flex アイテムが絶対位置指定の兄弟要素で隔てられているとき、"order" に従って並べ替えられない問題を修正しました ({{bug(1345873)}})。

#### その他の変更点

- mask 関係のロングハンドプロパティを SVG 要素に対して有効化しました ({{bug(1319667)}})。
- \[css-grid] グリッドアイテムが `<table>` であるときに `align-self`/`justify-self:stretch`/`normal` が動作しない問題を修正しました ({{bug(1316051)}})。
- 大きなリファレンスボックスで半径をパーセンテージで示した `clip-path: circle()` が正しくレンダリングされない問題を修正しました ({{bug(1324713)}})。
- ギリシャ文字に対して {{cssxref("text-transform")}} の値 `uppercase` を適用したとき、単独のエータについたアクセント (ή) が取り除かれないようになりました ({{bug(1322989)}})。
- {{cssxref("display")}} の値 `contents` を使用できるかは、設定項目 `layout.css.display-contents.enabled` で制御していました。Firefox 53 でこの設定項目を削除しましたので常に有効になり、無効化できなくなりました ({{bug(1295788)}})。

### JavaScript

- {{jsxref("Function.name")}} プロパティの、ECMAScript 2015 のセマンティクスを実装しました。これは、無名関数で推測した名前 (`var foo = function() {}`) を含みます ({{bug(883377)}})。
- closing iterators の、ECMAScript 2015 のセマンティクスを実装しました。これは、例えば [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループに影響があります ({{bug(1147371)}})。
- [タグ付けされた template literal でエスケープシーケンスの制限を取り去る](/ja/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals_and_escape_sequences)、[Template Literal Revision 提案](https://tc39.github.io/proposal-template-literal-revision/) を実装しました ({{bug(1317375)}})。
- 非標準の [String ジェネリック](/ja/docs/Web/JavaScript/Reference/Global_Objects/String#String_generic_methods) について、コンソールで非推奨の警告を表示するようになりました。将来削除する予定ですので、今後は使用しないでください! ({{bug(1319926)}})
- {{jsxref("TypedArray")}} オブジェクトの静的なプロパティ `length` の値を、ES2016 に従って 3 から 0 に変更しました ({{bug(1317306)}})。
- {{jsxref("DataView")}} で {{jsxref("SharedArrayBuffer")}} が使用可能になりました ({{bug(1246597)}})。
- 旧版の仕様書では、{{jsxref("SharedArrayBuffer")}} オブジェクトは [structured clone](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) の間に、明示的に転送しなければなりませんでした。新しい仕様では [移譲可能なオブジェクト](/ja/docs/Web/API/Transferable) ではなくなり、転送リストに含まれてはなりません。新しい動作について以前はコンソールで警告を表示するだけでしたが、今後はエラーが発生します ({{bug(1302037)}})。
- {{jsxref("ArrayBuffer")}} の長さを、{{jsxref("Number.MAX_SAFE_INTEGER")}}に制限しました (>= 2 \*\* 53) ({{bug(1255128)}})。
- {{jsxref("Error.prototype")}} やほかのネイティブエラーオブジェクトのプロトタイプ ({{jsxref("RangeError.prototype")}} など) が、固有の Error オブジェクトではなく通常のオブジェクトになりました (特に、`Object.prototype.toString.call(Error.prototype)` は `"[object Error]"` ではなく `"[object Object]"` になります) ({{bug(1213341)}})。

### イベント

- CSS Transitions: {{event("transitionstart")}}、{{event("transitionrun")}}、{{event("transitioncancel")}} イベントを実装しました ({{bug(1264125)}}、{{bug(1287983)}})。
- {{domxref("CompositionEvent.CompositionEvent", "CompositionEvent")}} コンストラクターを実装しました ({{bug(1002256)}})。
- {{domxref("MouseEvent.clientX")}}/{{domxref("MouseEvent.clientY")}} の別名である {{domxref("MouseEvent.x")}} および {{domxref("MouseEvent.y")}} を実装しました ({{bug(424390)}})。
- {{Event("auxclick")}} イベントと、これに対応する {{domxref("GlobalEventHandlers.onauxclick")}} イベントハンドラーを実装しました ({{bug(1304044)}})。
- {{Event("transitioncancel")}} イベントが、[transition](/ja/docs/Web/CSS/CSS_Transitions) をキャンセルした後に発生するようになりました。詳細および例は、{{domxref("GlobalEventHandlers.ontransitioncancel")}} をご覧ください ({{bug("1264125")}})。

### DOM

- 以前は {{domxref("HTMLHyperLinkElementUtils")}} の {{domxref("HTMLHyperLinkElementUtils.pathname", "pathname")}} および {{domxref("HTMLHyperLinkElementUtils.search", "search")}} プロパティが、URL の誤った部分を返していました。例えば `http://z.com/x?a=true&b=false` の URL について、`pathname` は "`/x`" ではなく "`/x?a=true&b=false`"、`search` は "`?a=true&b=false`" ではなく "" を返していました。これらを修正しました ({{bug(1310483)}})。
- {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} コンストラクターが、init オブジェクトとして {{domxref("USVString")}} や一連の {{domxref("USVString")}} を受け入れるようになりました ({{bug("1330678")}})。
- [Selection API](/ja/docs/Web/API/Selection_API) の {{domxref("Selection.setBaseAndExtent()")}} メソッドを実装しました ({{bug(1321623)}})。
- `file` 型の {{htmlelement("input")}} の `value` に["fakepath"](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly) を追加する機能を、Gecko に実装しました。ほかのブラウザーと同等になります ({{bug(1274596)}})。
- 非推奨の {{domxref("Node.rootNode")}} プロパティを置き換える、{{domxref("Node.getRootNode()")}} を実装しました ({{bug(1269155)}})。
- {{domxref("Plugin")}} および {{domxref("PluginArray")}} オブジェクト特有のプロパティが、enumerable ではなくなりました ({{bug("1270366")}})。
- {{domxref("MimeTypeArray")}} オブジェクトの名前付きプロパティが、enumerable ではなくなりました ({{bug("1270364")}})。
- [Permissions API](/ja/docs/Web/API/Permissions_API) の {{domxref("Permissions.query()")}} で使用するパーミッション名で、新たに `persistent-storage` が使用可能になりました ({{bug(1270038)}})。これは [Storage API](https://storage.spec.whatwg.org/) による、持続的なボックス (すなわち [persistent storage](https://storage.spec.whatwg.org/#persistence)) をオリジンに許可します。

### Workers および service workers

- [Network Information API](/ja/docs/Web/API/Network_Information_API) が、worker で使用可能になりました ({{bug(1323172)}})。
- [Server-sent events](/ja/docs/Web/API/Server-sent_events) が worker から使用可能になりました ({{bug(1267903)}})。
- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}} が、非同期呼び出し可能になりました ({{bug(1263304)}})。

### WebGL

- {{domxref("WEBGL_compressed_texture_astc")}} WebGL 拡張を実装しました ({{bug(1250077)}})。
- {{domxref("WEBGL_debug_renderer_info")}} WebGL 拡張をデフォルトで有効にしました ({{bug(1336645)}})。

### Audio/Video/Media

#### 全般

- **Android 版 Firefox 53** より、マルチコアシステムでパフォーマンスを高めるため、メディアのデコードを外部プロセスで制御します ({{bug(1333323)}})。

#### メディア要素

- メディア要素でメディアの再生を開始するために使用する {{domxref("HTMLMediaElement.play()")}} メソッドが、{{jsxref("Promise")}} を返すようになりました。この Promise は再生を開始すると fulfilled 状態、エラーが発生すると rejected 状態になります ({{bug(1244768)}})。

#### Web Audio API

- {{domxref("AudioScheduledSourceNode")}} インターフェイスを実装して、{{domxref("AudioBufferSourceNode")}}、{{domxref("ConstantSourceNode")}}、{{domxref("OscillatorNode")}} インターフェイスはこのインターフェイスを基にするようになりました ({{bug("1324568")}})。

#### WebRTC

- {{domxref("RTCPeerConnection")}} の {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} および {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} メソッドが、{{domxref("RTCSessionDescription")}} を直接返すのではなく、{{domxref("RTCSessionDescriptionInit")}} ディクショナリーに従うオブジェクトを返す {{jsxref("Promise")}} を返すようになりました。既存のコードは引き続き動作しますが、[新しいコードはよりシンプルに記述できます](/ja/docs/Web/API/RTCPeerConnection/setLocalDescription#About_the_session_description_parameter)。
- 同様に、{{domxref("RTCPeerConnection")}} の {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} および {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} メソッドが、{{domxref("RTCSessionDescriptionInit")}} ディクショナリーに従うオブジェクトを受け入れるようになりました。既存のコードは引き続き動作しますが、[シンプルにできます](/ja/docs/Web/API/RTCPeerConnection/setLocalDescription#About_the_session_description_parameter)。
- {{domxref("RTCPeerConnection.addIceCandidate()")}} が、{{domxref("RTCIceCandidateInit")}} ディクショナリーに従うオブジェクトを受け入れるようになりました。これは既存のコードと互換性がありますが、上記の変更点と並んで使用するとコードをよりシンプルに記述できます ({{bug(1263312)}})。
- {{domxref("RTCDTMFSender")}} を使用する {{Glossary("DTMF")}} のサポートを、デフォルトで有効にしました。詳細や動作について、[Using DTMF with WebRTC](/ja/docs/Web/API/WebRTC_API/Using_DTMF) をご覧ください。

### HTTP/ネットワーク

- {{HTTPHeader("Referrer-Policy")}} の既定値をユーザーが設定できる設定項目 `network.http.referer.userControlPolicy` を、Gecko の `about:config` に追加しました ({{bug("1304623")}})。以下の値を使用できます:

  - 0 — `no-referrer`
  - 1 — `same-origin`
  - 2 — `strict-origin-when-cross-origin`
  - 3 — `no-referrer-when-downgrade` (既定値)

- [Application-Layer Protocol Negotiation](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) を支持するため、Next Protocol Negotiation (NPN) のサポートを廃止しました ({{bug("1248198")}})。
- {{httpheader("Large-Allocation")}} HTTP ヘッダーをデフォルトで有効にして、設定で無効化しないようになりました ({{bug(1331083)}})。

### SVG

- {{domxref("SVGGeometryElement")}} インターフェイスを部分的に実装しました ({{bug(1239100)}})。

## ウェブプラットフォームから廃止

### HTML/XML

- 設定項目 `dom.details_element.enabled` (Firefox で {{htmlelement("details")}} および {{htmlelement("summary")}} 要素のサポートを有効化/無効化します) を `about:config` から削除しました。これらの要素 (Firefox 49 からデフォルトで有効化) は無効化できません。{{bug(1271549)}} をご覧ください。
- {{htmlelement("iframe")}} 要素および {{domxref("HTMLIFrameElement")}} インターフェイスの `mozapp` 属性を削除しました。これは、moz [Browser API](/ja/docs/Mozilla/Gecko/Chrome/API/Browser_API) の `<iframe>` に Firefox OS アプリを埋め込めるようにするために使用しました ({{bug(1310845)}})。
- {{domxref("HTMLIFrameElement.setInputMethodActive()")}} メソッドおよび `InputMethod` インターフェイス (Firefox OS アプリで IME を設定および制御するために使用しました) を削除しました ({{bug(1313169)}})。

### CSS

- {{cssxref(":dir", ":dir()")}} 疑似クラスの、`-moz` 接頭辞がついた派生形を削除しました ({{bug(1270406)}})。
- {{cssxref("text-align-last")}} の、`-moz` 接頭辞がついた派生形を削除しました ({{bug(1276808)}})。
- {{cssxref("calc()")}} メソッドの、`-moz` 接頭辞がついた派生形を削除しました ({{bug(1331296)}})。
- 独自仕様である `-moz-samplesize` media fragment (メモリが少ない Firefox OS 端末にダウンサンプリングした画像を提供することを支援するために追加しました。{{bug(854795)}} をご覧ください) を削除しました ({{bug(1311246)}})。

### JavaScript

- 非標準の {{jsxref("ArrayBuffer.slice()")}} を削除しました (ただし、標準化された {{jsxref("ArrayBuffer.prototype.slice()")}} を維持しています) ({{bug(1313112)}})。

### API

- [Wifi information API](/ja/docs/Archive/B2G_OS/API/WiFi_Information_API)、Speaker Manager API、Tethering API、[Settings API](/ja/docs/Archive/B2G_OS/API/Settings_API) をプラットフォームから削除しました ({{bug(1313788)}}、{{bug(1317853)}}、{{bug(1313789)}}、{{bug(1313155)}})。

### その他

- {{domxref("HTMLEmbedElement")}} および {{domxref("HTMLObjectElement")}} インターフェイスから `legacycaller` を削除しました ({{bug(909656)}})。

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

新規 API:

- [`browsingData`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)
- [`identity`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/identity)
- [`contextualIdentities`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

向上した API:

- [`storage.sync`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)
- [`contextMenus`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus) の [context タイプ](/ja/Add-ons/WebExtensions/API/contextMenus/ContextType) として `page_action`、`browser_action`、`password`, `tab`
- [`webRequest.onBeforeRequest`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) で `requestBody` をサポート
- [`tabs.insertCSS`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) で `cssOrigin` をサポート。ユーザースタイルシートが挿入可能になります。

### JavaScript コードモジュール

- 非同期の [AddonManager API](/ja/Add-ons/Add-on_Manager/AddonManager) で、コールバックだけでなく {{jsxref("Promise")}} もサポートしました ({{bug(987512)}}。

## 関連情報

- [Firefox 53.0 リリースノート](https://www.mozilla.jp/firefox/53.0/releasenotes/)
- [Firefox 53 アドオン互換性情報](https://dev.mozilla.jp/2017/03/firefox-53-addon-compatibility/)

## 過去のバージョン

{{Firefox_for_developers(53)}}
