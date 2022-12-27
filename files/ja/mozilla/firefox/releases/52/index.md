---
title: Firefox 52 for developers
slug: Mozilla/Firefox/Releases/52
---

Firefox 52 は、米国時間 2017 年 3 月 7 日にリリースされました。このページでは、開発者に影響する Firefox 52 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [UA の選択やネットワークの調整など、レスポンシブデザインモードを全面的に改良しました。](/ja/docs/Tools/Responsive_Design_Mode)
- [アニメーションインスペクターで、タイミング関数を表示するようになりました。](/ja/docs/Tools/Page_Inspector/How_to/Work_with_animations)
- [インスペクターに CSS グリッドの調査機能を搭載しました。](/ja/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)
- [about:debugging で Service Worker の状態を表示するようになりました。](/ja/docs/Tools/about:debugging#Service_worker_state)
- [インスペクターで、選択した要素を簡単に強調表示できるようになりました。](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#element_rule)
- [インスペクターで、ホワイトスペースのみのテキストノードを表示するようになりました。](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Whitespace-only_text_nodes)

[Firefox 51 から Firefox 52 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2016-11-14&query_format=advanced&chfield=resolution&chfieldfrom=2016-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=13333174)

### HTML

- `rel="noopener"` [リンクタイプ](/ja/docs/Web/HTML/Link_types) を実装しました ({{bug(1222516)}})。

### CSS

#### 新機能

- {{cssxref(":focus-within")}} 疑似クラスを追加しました ({{bug(1176997)}})。
- {{HTMLElement("button")}} 要素内で `display:flex/grid` およびマルチカラムレイアウトをサポートしました ({{bug(984869)}})。
- 数値で表した色と [currentcolor](/ja/docs/Web/CSS/color_value#currentColor_keyword) との間の補完処理を実装しました ({{bug(1299741)}})。
- `{{cssxref("justify-content")}}: space-evenly` および `{{cssxref("align-content")}}: space-evenly` 向けに flexbox レイアウトを実装しました ({{bug(1235922)}})。
- CSS {{cssxref("mask")}} / {{cssxref("clip-path")}} でサブピクセルアンチエイリアシングをサポートしました ({{bug(1305259)}})。
- CSS Text 3 の、区分分断の変換規則を実装しました ({{bug(1081858)}})。
- SVG コンテンツで、({{cssxref("clip-path")}} プロパティで適用する) 基本的な図形のクリッピングをサポートしました ({{bug(1246741)}})。
- {{cssxref("align-self")}}|{{cssxref("justify-self")}}: \[ first | last ]? baseline 向けの Flexbox レイアウトを実装しました ({{bug(1221524)}})。
- {{cssxref("touch-action")}} プロパティを、すべてのプラットフォームにおいてデフォルトで有効にしました。(詳しくは [intent to ship mail #1](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) および [intent to ship mail #2](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M) をご覧ください)
- Flexbox の {{cssxref("align-content")}} の処理および単一ラインのサイズ調整が、ラインの数ではなく {{cssxref("flex-wrap")}} に依存するようになりました ({{bug(1090031)}})。
- 補間処理ができないプロパティのアニメーションに [CSS Animations](/ja/docs/Web/CSS/CSS_Animations) を使用できるようになりました ({{bug("1064937")}})。
- `baseline|last-baseline` を `[ first | last ]? baseline` に変更しました ({{bug(1313254)}}).
- block-axis について、`left`/`right` の使用値を `start` にしました ({{bug(1221565)}})。
- 包含ブロックの長さが不定である、flexible tracks を伸長する際に、最小サイズや最大サイズを重視するようになりました ({{bug(1309407)}})。
- {{cssxref("mask-position")}} および {{cssxref("mask-repeat")}} の初期値を、それぞれ `0% 0%` および `repeat` に変更しました ({{bug(1308963)}})。
- CSS の {{cssxref("&lt;color&gt;")}} 値に対していくつか変更を施しました ({{bug(1295456)}}):

  - `rgba()` および `hsla()` を、`rgb()` および `hsl()` の別名として再定義しました。どちらも同じ引数構文を受け入れます。
  - `rgb(`) および `hsl()` が、アルファ値 (省略可能) を受け入れるようになりました。例: `rgb(255, 0, 0, 0.5)`
  - 色関数が、カンマ区切りではなく空白区切りの引数を受け入れるようになりました。例: `rgb(255 0 0 / 0.5)`
  - アルファ値を、数値だけでなくパーセンテージでも指定できるようになりました。例: `rgb(255 0 0 / 50%)`
  - `hsl()` 色の色相を、数値だけでなく角度でも指定できるようになりました。例: `hsl(120deg, 60%, 70%)`

#### CSS Grid

- [CSS Grid](/ja/docs/Web/CSS/CSS_Grid_Layout) を実装しました。

#### 変更および削除

- CSS3 マルチカラム関連プロパティの接頭辞を削除しました (また、`-moz` 接頭辞付きのプロパティを別名として再追加しました) ({{bug(1300895)}})。
- 無名の flex アイテム内で、flex コンテナの絶対配置の子を折り返さないようになりました ({{bug(1269045)}})。
- グリッドコンテナーのベースラインを実装しました。 ({{bug(1151204)}})。
- スタイルシステムから、`<flex>` 値を最小値として使用する箇所を削除しました ({{bug(1305244)}})。
- 設定項目 `layout.css.masking.enabled` を削除しました ({{bug(1308239)}})。
- 独自の [メディア特性](/ja/docs/Web/CSS/@media#メディア特性) である `-moz-images-in-menus` および `-moz-images-in-buttons` を削除しました ({{bug(1302157)}})。
- 色のプロパティから `-moz-use-text-color` を削除しました。代わりに [`currentColor`](/ja/docs/Web/CSS/color_value#currentColor_keyword) を使用してください ({{bug(1306214)}})。
- \[css-grid] グリッドアイテムに 'max-width' を設定するとテキストがはみ出す問題を修正しました ({{bug(1330380)}})。

### JavaScript

#### 新機能

- async functions をサポートしました。{{jsxref("Statements/async_function", "async function")}}、{{jsxref("Operators/async_function", "async function expression")}}、{{jsxref("Operators/await", "await")}} キーワードを追加しました ({{bug(1185106)}})。
- 関数に対して、ES2017 の [trailing commas](/ja/docs/Web/JavaScript/Reference/Trailing_commas) を実装しました ({{bug(1303788)}})。
- {{jsxref("Functions/rest_parameters", "rest parameter の分割代入", "#Destructuring_rest_parameters", 1)}} を実装しました ({{bug(1243717)}})。
- {{jsxref("Operators/Arithmetic_Operators", "べき乗演算子 (**)", "#Exponentiation_(**)", 1)}} をデフォルトで有効にしました ({{bug(1291212)}})。
- {{jsxref("DateTimeFormat")}} や {{jsxref("Date.toLocaleString()")}} といった日付関連の API の `timeZone` オプションで、[IANA タイムゾーン名称](http://www.iana.org/time-zones) が使用可能になりました ({{bug(837961)}})。

#### 変更および削除

- [配列の分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assigning_the_rest_of_an_array_to_a_variable) で、trailing comma を持つ rest parameters を使用した場合に {{jsxref("SyntaxError")}} が発生するようになりました ({{bug(1041341)}})。
- [オブジェクトの分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) で、`__proto__` プロパティの重複が可能になりました ({{bug(1204024)}})。
- {{jsxref("Array.prototype.toLocaleString()")}} を、Intl API のパラメーター "`locales`" および "`options`" をサポートするように再実装しました ({{bug(1130636)}})。
- {{jsxref("TypedArray")}} コンストラクターで、新しい typed array を生成するため [iterable](/ja/docs/Web/JavaScript/Reference/Iteration_protocols) を受け入れるようになりました ({{bug(1232266)}})。
- {{jsxref("TypedArray.from()")}}、{{jsxref("TypedArray.of()")}}、{{jsxref("TypedArray.prototype.filter()")}}、{{jsxref("TypedArray.prototype.map()")}}、{{jsxref("TypedArray.prototype.slice()")}}、{{jsxref("TypedArray.prototype.subarray()")}} が、値 `this` が有効な Typed Array のコンストラクターであることを要求するようになりました ({{bug(1122396)}})。
- 非標準の {{jsxref("ArrayBuffer.slice()")}} メソッド ({{jsxref("ArrayBuffer.prototype.slice()")}} ではありません) が非推奨になり、使用すると警告が発生します ({{bug(1316913)}})。
- [Unicode コードポイントエスケープ](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Unicode_code_point_escapes) が、識別子として使用可能になりました (例: "`let \u{61} = 123`"。{{bug(1314037)}} をご覧ください)。
- ES2015 に従って、`\u2e2f` および `ⸯ` を識別子として使用したときに例外が発生するようになりました。詳しくは {{bug(917436)}} および {{bug(1197230)}} をご覧ください。

### WebAssembly

- Gecko で [WebAssembly](/ja/docs/WebAssembly) をサポートしました。

### DOM

- 新たに {{Event("selectstart")}} および {{Event("selectionchange")}} イベント ({{domxref("GlobalEventHandlers.onselectstart")}}、{{domxref("GlobalEventHandlers.onselectionchange")}} をご覧ください) を含む、[Selection API](/ja/docs/Web/API/Selection_API) を全面的に提供します ({{bug(1309612)}})。
- {{domxref("Event.composed")}} プロパティをサポートしました。この論理値は、イベントが shadow root を経由して標準 DOM に伝達できるかを示します ({{bug(1292063)}})。
- HTML 要素、{{HTMLElement("svg")}} 要素、{{HTMLElement("math")}} 要素に限り、{{domxref("Element.requestFullScreen()")}} を呼び出してフルスクリーンモードに移行できるようになりました ({{bug(1305928)}})。
- [Touch event](/ja/docs/Web/API/Touch_events) を、Windows デスクトップ環境で再び有効化しました ({{bug(1244402)}})。これはいくつかの主要サイトで問題が発生したため、Firefox 24 で無効化していました ({{bug(888304)}})。
- {{event("focusin")}} および {{event("focusout")}} イベントを実装しました ({{bug("687787")}})。
- {{domxref("WindowOrWorkerGlobalScope.isSecureContext")}} プロパティを実装しました ({{bug(1269052)}})。
- service worker のインストールイベント ({{domxref("ServiceWorkerGlobalScope.oninstall")}} をご覧ください) との混同を避けるため、[Web App Manifest](/ja/docs/Web/Manifest) のインストールイベントを appinstalled に改名しました ({{domxref("Window.onappinstalled")}}、{{event("appinstalled")}} をご覧ください)。詳しくは {{bug(1309099)}} をご覧ください。
- [Drag and drop API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) の {{domxref("DataTransfer.types")}} プロパティが、{{domxref("DOMStringList")}} ではなく {{domxref("DOMString")}} の凍結された配列を返すようになりました ({{bug(1298243)}})。
- {{Event("loadstart")}} および {{Event("loadend")}} イベントが {{htmlelement("img")}} 要素で発生するようになりました ({{bug(1264769)}}、{{domxref("GlobalEventHandlers.onloadstart")}}、{{domxref("GlobalEventHandlers.onloadend")}} をご覧ください)。
- [Notifications API](/ja/docs/Web/API/Notifications_API) の {{domxref("Notification.requireInteraction")}} を実装しました ({{bug(862395)}})。
- {{domxref("Window.open()")}} メソッドで、`noopener` [ウィンドウ機能特性](/ja/docs/Web/API/Window/open#Window_functionality_features) が使用可能になりました ({{bug(1267339)}})。これは、`rel="noopener"` [リンクタイプ](/ja/docs/Web/HTML/Link_types) の機能を反映します。
- [Web Components API](/ja/docs/Web/Web_Components) の {{domxref("CustomElementRegistry.get()")}} メソッドを実装しました ({{bug(1275838)}})。
- [Pointer Event](/ja/docs/Web/API/Pointer_events) の {{domxref("PointerEvent.width","width")}} および {{domxref("PointerEvent.height","height")}} プロパティのデフォルト値が 1 になりました ({{bug(1304315)}})。
- [最新の仕様書](https://wicg.github.io/entries-api/) における変更点を含むように、[File and Directory Entries API](/ja/docs/Web/API/File_and_Directory_Entries_API) を更新しました (詳しくは {{bug(1284987)}} をご覧ください)。
- {{domxref("UIEvent")}} で定義されていた {{domxref("Event.cancelBubble", "cancelBubble")}} プロパティが、{{domxref("Event")}} インターフェイスで定義するようになりました。詳しくは {{bug(1298970)}} をご覧ください。

#### 変更および削除

- 通話を制御する Firefox OS の API (Contacts、MobileConnection、Icc など) を削除しました ({{bug(1311206)}})。
- Firefox OS の `Identity` インターフェイスを削除しました ({{bug(1309030)}})。
- Firefox OS の Voicemail API ([`MozVoicemail`](/ja/docs/Archive/B2G_OS/API/MozVoicemail)、[`MozVoicemailEvent`](/ja/docs/Archive/B2G_OS/API/MozVoicemailEvent)、[`MozVoicemailStatus`](/ja/docs/Archive/B2G_OS/API/MozVoicemailStatus)、[`Navigator.mozVoicemail`](/ja/docs/Archive/B2G_OS/API/Navigator/mozVoicemail)) を削除しました ({{bug(1309723)}})。
- Firefox OS の Cell Broadcast API (`MozCellBroadcast`、`MozCellBroadcastEvent`、`MozCellBroadcastMessage`、`Navigator.mozCellBroadcast`) を削除しました ({{bug(1306772)}})。
- Firefox OS の TV broadcast 関連 API を削除しました ({{bug(1306778)}})。
- Firefox OS の FM Radio API ([`FMRadio`](/ja/docs/Archive/B2G_OS/API/FMRadio)、[`Navigator.mozFMRadio`](/ja/docs/Archive/B2G_OS/API/Navigator/mozFMRadio)) を削除しました ({{bug(1306779)}})。

### Service Workers と Fetch

- {{domxref("Headers.getAll()")}} を削除しました。また {{domxref("Headers.get()")}} が、指定したヘッダーの (最初の値だけではなく) すべての値を取り出すようになりました ({{bug(1278275)}})。これは、最新の Fetch API 仕様の更新内容に準拠しています。

### Web Audio API

- {{domxref("ConstantSourceNode")}} インターフェイスを追加しました。これは、すべて同じ値であるサンプルのストリームを常に出力するオーディオソースを表します。複雑なオーディオフローを単純化するためにこのインターフェイスをどのように使用するかを示す例を、[Controlling multiple parameters with ConstantSourceNode](/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) でご覧ください。

### WebRTC

- ICE 接続が一時的に不通になったとき、{{domxref("RTCPeerConnection.iceConnectionState")}} プロパティが `"disconnected"` に設定されるようになりました。これは一時的な問題で間もなく解決する見込みであり、後に接続が `"connected"` 状態に戻ることを示します ({{bug(852665)}})。
- {{domxref("MediaDevices.ondevicechange")}} イベントハンドラーと、これに対応する {{event("devicechange")}} イベントは Firefox 51 で Mac に限り実装してデフォルトで無効化していましたが、Windows および Linux でも実装して、すべてのプラットフォームでデフォルトで有効にしました。
- {{domxref("MediaStream.active")}} プロパティをサポートしました。これはストリームで少なくとも 1 つのトラックが現在再生中であるかを示す、読み取り専用の Boolean 型プロパティです。
- Firefox 52 より前のバージョンでは {{domxref("MediaStreamTrack.stop()")}} メソッドで、ローカルトラック (すなわち、{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} で取得したトラック) しか停止できませんでした。Firefox 52 で、[WebRTC](/ja/docs/Glossary/WebRTC) 接続と関連付けられた {{domxref("MediaStream")}}、[Web Audio API](/ja/docs/Web/API/Web_Audio_API) ストリーム、{{domxref("CanvasCaptureMediaStream")}} など、さまざまなトラックを停止できるようになりました。
- 以前は Firefox のイベントループによってひとつのパスで {{domxref("TextTrack")}} の {{domxref("TextTrack.mode", "mode")}} を繰り返し変更すると、複数の {{event("change")}} イベントが親メディア要素の {{domxref("HTMLMediaElement.textTracks", "textTracks")}} で指定された {{domxref("TextTrackList")}} に発行されていました。Firefox 52 から、ひとつのイベントに統合するようになりました ({{bug(882674)}})。

### Audio/Video/Media

- {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素を扱っていてエラーが発生したときに {{domxref("HTMLMediaElement.error")}} で指定される {{domxref("MediaError")}} オブジェクトが、{{domxref("MediaError.message", "message")}} プロパティを持つようになりました。これは、発生したエラーの具体的な説明を提供します。この文字列はエラーの事象について詳細情報を提供して、なぜ誤っているかの見識を与えます ({{bug(1299072)}})。このフィールドは Firefox 51 から nightly ビルドに含まれていましたが、release を含むすべてのビルドで有効化しました。

### その他の API

- Firefox 50 で追加した (ただし常にエラーを返す) {{domxref("FileSystemFileEntry.createWriter()")}} メソッドを削除しました ({{bug(1315185)}})。
- Firefox OS 独自の [Apps installation/management API](/ja/docs/Archive/Marketplace/API/App_installation_and_management_APIs) を、プラットフォームから削除しました ({{bug(1261019)}})。
- Firefox OS 独自の [Web Telephony API](/ja/docs/Archive/Firefox_OS/Web_Telephony_API) を、プラットフォームから削除しました ({{bug(1309719)}})。
- Firefox OS 独自の [Web Bluetooth API](/ja/docs/Archive/Firefox_OS/Bluetooth_API) を、プラットフォームから削除しました ({{bug(1310020)}})。
- [Battery Status API](/ja/docs/Web/API/Battery_Status_API) が、chrome/特権付きコードに限り使用可能になりました ({{bug(1313580)}})。
- `ImageBitmapRenderingContext.transferImageBitmap()` を {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} に改名しました ({{bug(1304767)}})。
- `mozDash` および `mozDashOffset` メンバーを、{{domxref("CanvasRenderingContext2D")}} から削除しました ({{bug(931389)}})。

### HTTP

- {{HTTPHeader("Referrer-Policy")}} ヘッダーで `same-origin`、`strict-origin`、`strict-origin-when-cross-origin` ディレクティブをサポートしました ({{bug(1276836)}})。
- {{CSP("script-src")}} のように、[`'strict-dynamic'` source expression](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) を {{HTTPHeader("Content-Security-Policy")}} のディレクティブでサポートしました ({{bug(1299483)}})。
- [Strict Secure Cookies specification](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-alone-01) に従って、安全ではないサイト (`http:`) が "secure" ディレクティブで [Cookie を設定する](/ja/docs/Web/HTTP/Cookies) ことができなくなりました ({{bug(976073)}})。
- HTTP/2 ヘッダー圧縮方式 [HPACK](https://tools.ietf.org/html/rfc7541) の最大テーブルサイズを 4 KB から 64 KB に拡張しました ({{bug(1296280)}})。
- {{HTTPHeader("Large-Allocation")}} ヘッダーを追加しました ({{bug(1304140)}})。

### SVG

- SVG ドキュメントは、SVGDocument に代わり {{domxref("XMLDocument")}} インターフェイスを使用して表すようになりました。これは SVG 2 仕様で変更されました。

### セキュリティ

- ログインページ (すなわち [`<input type="password">`](/ja/docs/Web/HTML/Element/input/password) フィールドを含むページ) でログイン情報が安全でない方法で送信されると思われる場合に、Firefox はユーザーに警告するため、ページ内のパスワードフィールドの下に警告メッセージを表示します ({{bug(1319119)}})。また、安全でないログインフォームではオートフィルが無効になります ({{bug(1217152)}})。詳しくは [安全でないパスワード](/ja/docs/Web/Security/Insecure_passwords) をご覧ください。
- SHA-1 SSL 証明書のサポートを廃止しました。SHA-1 証明書を使用する安全なページに移動すると、[Untrusted Connection](https://support.mozilla.org/t5/Documents-Archive/quot-This-Connection-is-Untrusted-quot-error-message-appears/ta-p/589) エラーが発生します ({{bug(1330043)}})。

## プラグイン

Flash を除くすべての NPAPI [プラグイン](/ja/docs/Mozilla/Add-ons/Plugins) のサポートを廃止しました。Flash の使用も将来、段階的に廃止します。

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

新規 API:

- [`sessions` API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
- [`topSites` API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/topSites)
- [`omnibox` API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)
- [`runtime.onInstalled`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) および [`runtime.onStartup`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup) イベント
- [webRequest の非同期イベントハンドラー](/ja/Add-ons/WebExtensions/API/webRequest#Modifying_requests)
- [`bookmarks.onMoved`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved)、[`bookmarks.onCreated`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated)、[`bookmarks.onChanged`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged) イベント
- [commands マニフェストキー](/ja/Add-ons/WebExtensions/manifest.json/commands) の `_execute_browser_action` および `_execute_page_action`
- content_scripts マニフェストキーの [`match_about_blank`](/ja/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank)

### インターフェイス

- ドロップされた複数のアイテムを扱うための `nsIDroppedLinkHandler.dropLinks` メソッドおよび [nsIDroppedLinkItem](/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDroppedLinkItem) インターフェイスを追加しました ({{bug(92737)}})。

### XUL

- `tabbrowser.loadTabs(uris, params)` メソッドのオーバーロードを追加しました ({{bug(92737)}})。
- `browser.droppedLinkHandler` 関数のシグネチャを変更しました ({{bug(92737)}})。

## 関連情報

- [Firefox 52.0 リリースノート](https://www.mozilla.jp/firefox/52.0/releasenotes/)
- [Firefox 52 アドオン互換性情報](https://dev.mozilla.jp/2016/12/firefox-52-addon-compatibility/)

## 過去のバージョン

{{Firefox_for_developers(52)}}
