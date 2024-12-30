---
title: Firefox 52 for developers
slug: Mozilla/Firefox/Releases/52
l10n:
  sourceCommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{FirefoxSidebar}}

Firefox 52 は、米国時間 2017 年 3 月 7 日にリリースされました。このページでは、開発者に影響する Firefox 52 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [UA の選択やネットワークの調整など、レスポンシブデザインモードを全面的に改良しました。](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [アニメーションインスペクターで、イージング関数を表示するようになりました。](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [インスペクターに CSS グリッドの調査機能を搭載しました。](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [about:debugging で Service Worker の状態を表示するようになりました。](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-worker-state)
- [インスペクターで、選択した要素を簡単に強調表示できるようになりました。](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#element-rule)
- [インスペクターで、ホワイトスペースのみのテキストノードを表示するようになりました。](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#whitespace-only-text-nodes)

[Firefox 51 から Firefox 52 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2016-11-14&query_format=advanced&chfield=resolution&chfieldfrom=2016-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=13333174)

### HTML

- `rel="noopener"` [リンク種別](/ja/docs/Web/HTML/Attributes/rel) を実装しました ([Firefox バグ 1222516](https://bugzil.la/1222516))。

### CSS

#### 新機能

- {{cssxref(":focus-within")}} 擬似クラスを追加しました ([Firefox バグ 1176997](https://bugzil.la/1176997))。
- {{HTMLElement("button")}} 要素内で `display:flex/grid` および段組みレイアウトをサポートしました ([Firefox バグ 984869](https://bugzil.la/984869))。
- 数値で表した色と [currentcolor](/ja/docs/Web/CSS/color_value#currentcolor_keyword) との間の補完処理を実装しました ([Firefox バグ 1299741](https://bugzil.la/1299741))。
- `{{cssxref("justify-content")}}: space-evenly` および `{{cssxref("align-content")}}: space-evenly` 向けに flexbox レイアウトを実装しました ([Firefox バグ 1235922](https://bugzil.la/1235922))。
- CSS {{cssxref("mask")}} / {{cssxref("clip-path")}} でサブピクセルアンチエイリアシングをサポートしました ([Firefox バグ 1305259](https://bugzil.la/1305259))。
- CSS Text 3 の、区分分断の変換規則を実装しました ([Firefox バグ 1081858](https://bugzil.la/1081858))。
- SVG コンテンツで、({{cssxref("clip-path")}} プロパティで適用する) 基本的な図形のクリッピングをサポートしました ([Firefox バグ 1246741](https://bugzil.la/1246741))。
- {{cssxref("align-self")}}|{{cssxref("justify-self")}}: \[ first | last ]? baseline 向けの Flexbox レイアウトを実装しました ([Firefox バグ 1221524](https://bugzil.la/1221524))。
- {{cssxref("touch-action")}} プロパティを、すべてのプラットフォームにおいてデフォルトで有効にしました。(詳しくは [intent to ship mail #1](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) および [intent to ship mail #2](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M) をご覧ください)
- Flexbox の {{cssxref("align-content")}} の処理および単一ラインのサイズ調整が、ラインの数ではなく {{cssxref("flex-wrap")}} に依存するようになりました ([Firefox バグ 1090031](https://bugzil.la/1090031))。
- 補間処理ができないプロパティのアニメーションに [CSS Animations](/ja/docs/Web/CSS/CSS_animations) を使用できるようになりました ([Firefox バグ 1064937](https://bugzil.la/1064937))。
- `baseline|last-baseline` を `[ first | last ]? baseline` に変更しました ([Firefox バグ 1313254](https://bugzil.la/1313254)).
- block-axis について、`left`/`right` の使用値を `start` にしました ([Firefox バグ 1221565](https://bugzil.la/1221565))。
- 包含ブロックの長さが不定である、flexible tracks を伸長する際に、最小サイズや最大サイズを重視するようになりました ([Firefox バグ 1309407](https://bugzil.la/1309407))。
- {{cssxref("mask-position")}} および {{cssxref("mask-repeat")}} の初期値を、それぞれ `0% 0%` および `repeat` に変更しました ([Firefox バグ 1308963](https://bugzil.la/1308963))。
- CSS の {{cssxref("&lt;color&gt;")}} 値に対していくつか変更を施しました ([Firefox バグ 1295456](https://bugzil.la/1295456)):

  - `rgba()` および `hsla()` を、`rgb()` および `hsl()` の別名として再定義しました。どちらも同じ引数構文を受け入れます。
  - `rgb(`) および `hsl()` が、アルファ値 (省略可能) を受け入れるようになりました。例: `rgb(255, 0, 0, 0.5)`
  - 色関数が、カンマ区切りではなく空白区切りの引数を受け入れるようになりました。例: `rgb(255 0 0 / 0.5)`
  - アルファ値を、数値だけでなくパーセンテージでも指定できるようになりました。例: `rgb(255 0 0 / 50%)`
  - `hsl()` 色の色相を、数値だけでなく角度でも指定できるようになりました。例: `hsl(120deg, 60%, 70%)`

- Firefox の子インデックス付き擬似クラス ({{cssxref(":nth-child")}}, {{cssxref(":first-child")}} など) の実装が CSS selectors level 4 仕様に合わせて更新されました。これらの擬似クラスは親要素の子ではなく、適切な兄弟要素に一致するようになりました。これにより、親要素がない場合や、親要素が {{domxref("Element")}} でない場合にも、これらの擬似クラスを使用することができるようになりました ([Firefox バグ 1300374](https://bugzil.la/1300374).

#### CSS グリッド

- [CSS グリッド](/ja/docs/Web/CSS/CSS_grid_layout) を実装しました。

#### 変更および削除

- CSS3 マルチカラム関連プロパティの接頭辞を削除しました (また、`-moz` 接頭辞付きのプロパティを別名として再追加しました) ([Firefox バグ 1300895](https://bugzil.la/1300895))。
- 無名のフレックスアイテム内で、フレックスコンテナーの絶対配置の子を折り返さないようになりました ([Firefox バグ 1269045](https://bugzil.la/1269045))。
- グリッドコンテナーのベースラインを実装しました。 ([Firefox バグ 1151204](https://bugzil.la/1151204))。
- スタイルシステムから、`<flex>` 値を最小値として使用する箇所を削除しました ([Firefox バグ 1305244](https://bugzil.la/1305244))。
- 設定項目 `layout.css.masking.enabled` を削除しました ([Firefox バグ 1308239](https://bugzil.la/1308239))。
- 独自の `-moz-images-in-menus` および `-moz-images-in-buttons` [メディア特性](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries#メディア特性) を削除しました ([Firefox バグ 1302157](https://bugzil.la/1302157))。
- 色のプロパティから `-moz-use-text-color` を削除しました。代わりに [`currentcolor`](/ja/docs/Web/CSS/color_value#currentcolor_keyword) を使用してください ([Firefox バグ 1306214](https://bugzil.la/1306214))。
- \[css-grid] グリッドアイテムに 'max-width' を設定するとテキストがはみ出す問題を修正しました ([Firefox バグ 1330380](https://bugzil.la/1330380))。

### JavaScript

#### 新機能

- async functions をサポートしました。{{jsxref("Statements/async_function", "async function")}}、{{jsxref("Operators/async_function", "async function expression")}}、{{jsxref("Operators/await", "await")}} キーワードを追加しました ([Firefox バグ 1185106](https://bugzil.la/1185106))。
- 関数に対して、ES2017 の [trailing commas](/ja/docs/Web/JavaScript/Reference/Trailing_commas) を実装しました ([Firefox バグ 1303788](https://bugzil.la/1303788))。
- {{jsxref("Functions/rest_parameters", "rest parameter の分割代入", "#Destructuring_rest_parameters", 1)}} を実装しました ([Firefox バグ 1243717](https://bugzil.la/1243717))。
- {{jsxref("Operators", "べき乗演算子 (**)", "#Exponentiation_(**)", 1)}} をデフォルトで有効にしました ([Firefox バグ 1291212](https://bugzil.la/1291212))。
- {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} や {{jsxref("Date.toLocaleString()")}} といった日付関連の API の `timeZone` オプションで、[IANA タイムゾーン名称](https://www.iana.org/time-zones) が使用可能になりました ([Firefox バグ 837961](https://bugzil.la/837961))。

#### 変更および削除

- [配列の分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#assigning_the_rest_of_an_array_to_a_variable) で、trailing comma を持つ rest parameters を使用した場合に {{jsxref("SyntaxError")}} が発生するようになりました ([Firefox バグ 1041341](https://bugzil.la/1041341))。
- [オブジェクトの分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) で、`__proto__` プロパティの重複が可能になりました ([Firefox バグ 1204024](https://bugzil.la/1204024))。
- {{jsxref("Array.prototype.toLocaleString()")}} を、Intl API の引数 "`locales`" および "`options`" をサポートするように再実装しました ([Firefox バグ 1130636](https://bugzil.la/1130636))。
- {{jsxref("TypedArray")}} コンストラクターで、新しい typed array を生成するため [iterable](/ja/docs/Web/JavaScript/Reference/Iteration_protocols) を受け入れるようになりました ([Firefox バグ 1232266](https://bugzil.la/1232266))。
- {{jsxref("TypedArray.from()")}}、{{jsxref("TypedArray.of()")}}、{{jsxref("TypedArray.prototype.filter()")}}、{{jsxref("TypedArray.prototype.map()")}}、{{jsxref("TypedArray.prototype.slice()")}}、{{jsxref("TypedArray.prototype.subarray()")}} が、値 `this` が有効な Typed Array のコンストラクターであることを要求するようになりました ([Firefox バグ 1122396](https://bugzil.la/1122396))。
- 非標準の {{jsxref("ArrayBuffer.slice()")}} メソッド ({{jsxref("ArrayBuffer.prototype.slice()")}} ではありません) が非推奨になり、使用すると警告が発生します ([Firefox バグ 1316913](https://bugzil.la/1316913))。
- [Unicode コードポイントエスケープ](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) が、識別子として使用可能になりました (例: "`let \u{61} = 123`"。[Firefox バグ 1314037](https://bugzil.la/1314037) をご覧ください)。
- ES2015 に従って、`\u2e2f` および `ⸯ` を識別子として使用したときに例外が発生するようになりました。詳しくは [Firefox バグ 917436](https://bugzil.la/917436) および [Firefox バグ 1197230](https://bugzil.la/1197230) をご覧ください。

### WebAssembly

- Gecko で [WebAssembly](/ja/docs/WebAssembly) をサポートしました。

### DOM

- [Selection API](/ja/docs/Web/API/Selection_API) を全面的に提供しました。新たに {{domxref("Node/selectstart_event", "selectstart")}} および {{domxref("Document/selectionchange_event", "selectionchange")}} イベントに対応しました ([Firefox バグ 1309612](https://bugzil.la/1309612))。
- {{domxref("Event.composed")}} プロパティをサポートしました。この論理値は、イベントが shadow root を経由して標準 DOM に伝達できるかを示します ([Firefox バグ 1292063](https://bugzil.la/1292063))。
- HTML 要素、{{SVGElement("svg")}} 要素、{{MathMLElement("math")}} 要素に限り、{{domxref("Element.requestFullscreen()")}} を呼び出してフルスクリーンモードに移行できるようになりました ([Firefox バグ 1305928](https://bugzil.la/1305928))。
- [Touch event](/ja/docs/Web/API/Touch_events) を、Windows デスクトップ環境で再び有効化しました ([Firefox バグ 1244402](https://bugzil.la/1244402))。これはいくつかの主要サイトで問題が発生したため、Firefox 24 で無効化していました ([Firefox バグ 888304](https://bugzil.la/888304))。
- {{domxref("Element/focusin_event", "focusin")}} および {{domxref("Element/focusout_event", "focusout")}} イベントを実装しました ([Firefox バグ 687787](https://bugzil.la/687787))。
- {{domxref("isSecureContext")}} プロパティを実装しました ([Firefox バグ 1269052](https://bugzil.la/1269052))。
- [ウェブアプリマニフェスト](/ja/docs/Web/Manifest) のインストールイベントを appinstalled に改名しました ({{domxref("Window/appinstalled_event")}} をご覧ください)。サービスワーカーのインストールイベント ({{domxref("ServiceWorkerGlobalScope.install_event", "oninstall")}} をご覧ください) との混同を避けるためです。詳しくは [Firefox バグ 1309099](https://bugzil.la/1309099) をご覧ください。
- [Drag and drop API](/ja/docs/Web/API/HTML_Drag_and_Drop_API) の {{domxref("DataTransfer.types")}} プロパティが、{{domxref("DOMStringList")}} ではなく文字列の凍結された配列を返すようになりました ([Firefox バグ 1298243](https://bugzil.la/1298243))。
- `loadstart` および `loadend` イベントが {{htmlelement("img")}} 要素で発生するようになりました ([Firefox バグ 1264769](https://bugzil.la/1264769)。
- [通知 API](/ja/docs/Web/API/Notifications_API) の {{domxref("Notification.requireInteraction")}} を実装しました ([Firefox バグ 862395](https://bugzil.la/862395))。
- {{domxref("Window.open()")}} メソッドで、`noopener` [ウィンドウ機能特性](/ja/docs/Web/API/Window/open#window_functionality_features) が使用可能になりました ([Firefox バグ 1267339](https://bugzil.la/1267339))。これは、`rel="noopener"` [リンクタイプ](/ja/docs/Web/HTML/Attributes/rel) の機能を反映します。
- [Web Components API](/ja/docs/Web/API/Web_components) の {{domxref("CustomElementRegistry.get()")}} メソッドを実装しました ([Firefox バグ 1275838](https://bugzil.la/1275838))。
- [Pointer Event](/ja/docs/Web/API/Pointer_events) の {{domxref("PointerEvent.width","width")}} および {{domxref("PointerEvent.height","height")}} プロパティのデフォルト値が 1 になりました ([Firefox バグ 1304315](https://bugzil.la/1304315))。
- [最新の仕様書](https://wicg.github.io/entries-api/) における変更点を含むように、[File and Directory Entries API](/ja/docs/Web/API/File_and_Directory_Entries_API) を更新しました (詳しくは [Firefox バグ 1284987](https://bugzil.la/1284987) をご覧ください)。
- {{domxref("UIEvent")}} で定義されていた {{domxref("Event.cancelBubble", "cancelBubble")}} プロパティが、 {{domxref("Event")}} インターフェイスで定義するようになりました。詳しくは [Firefox バグ 1298970](https://bugzil.la/1298970) をご覧ください。

#### 変更および削除

- 通話を制御する Firefox OS の API (Contacts、MobileConnection、Icc など) を削除しました ([Firefox バグ 1311206](https://bugzil.la/1311206))。
- Firefox OS の `Identity` インターフェイスを削除しました ([Firefox バグ 1309030](https://bugzil.la/1309030))。
- Firefox OS の Voicemail API (`MozVoicemail`、`MozVoicemailEvent`、`MozVoicemailStatus`、`Navigator.mozVoicemail`) を削除しました ([Firefox バグ 1309723](https://bugzil.la/1309723))。
- Firefox OS の Cell Broadcast API (`MozCellBroadcast`、`MozCellBroadcastEvent`、`MozCellBroadcastMessage`、`Navigator.mozCellBroadcast`) を削除しました ([Firefox バグ 1306772](https://bugzil.la/1306772))。
- Firefox OS の TV broadcast 関連 API を削除しました ([Firefox バグ 1306778](https://bugzil.la/1306778))。
- Firefox OS の FM Radio API (`FMRadio`、`Navigator.mozFMRadio`) を削除しました ([Firefox バグ 1306779](https://bugzil.la/1306779))。

### サービスワーカーと Fetch

- `Headers.getAll()` を削除しました。また {{domxref("Headers.get()")}} が、指定したヘッダーの (最初の値だけではなく) すべての値を取り出すようになりました ([Firefox バグ 1278275](https://bugzil.la/1278275))。これは、最新の Fetch API 仕様の更新内容に準拠しています。

### Web Audio API

- {{domxref("ConstantSourceNode")}} インターフェイスを追加しました。これは、すべて同じ値であるサンプルのストリームを常に出力するオーディオソースを表します。複雑なオーディオフローを単純化するためにこのインターフェイスをどのように使用するかを示す例を、[Controlling multiple parameters with ConstantSourceNode](/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) でご覧ください。

### WebRTC

- ICE 接続が一時的に不通になったとき、{{domxref("RTCPeerConnection.iceConnectionState")}} プロパティが `"disconnected"` に設定されるようになりました。これは一時的な問題で間もなく解決する見込みであり、後に接続が `"connected"` 状態に戻ることを示します ([Firefox バグ 852665](https://bugzil.la/852665))。
- {{domxref("MediaDevices.devicechange_event")}} イベントと、これに対応するハンドラーは、 Firefox 51 で Mac に限り実装してデフォルトで無効化していましたが、Windows および Linux でも実装して、すべてのプラットフォームでデフォルトで有効にしました。
- {{domxref("MediaStream.active")}} プロパティをサポートしました。これはストリームで少なくとも 1 つのトラックが現在再生中であるかを示す、読み取り専用の Boolean 型プロパティです。
- Firefox 52 より前のバージョンでは {{domxref("MediaStreamTrack.stop()")}} メソッドで、ローカルトラック (すなわち、{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} で取得したトラック) しか停止できませんでした。Firefox 52 で、[WebRTC](/ja/docs/Glossary/WebRTC) 接続と関連付けられた {{domxref("MediaStream")}}、[Web Audio API](/ja/docs/Web/API/Web_Audio_API) ストリーム、{{domxref("CanvasCaptureMediaStream")}} など、さまざまなトラックを停止できるようになりました。
- 以前は Firefox のイベントループによってひとつのパスで {{domxref("TextTrack")}} の {{domxref("TextTrack.mode", "mode")}} を繰り返し変更すると、複数の {{domxref("HTMLElement/change_event", "change")}} イベントが親メディア要素の {{domxref("HTMLMediaElement.textTracks", "textTracks")}} で指定された {{domxref("TextTrackList")}} に発行されていました。Firefox 52 から、ひとつのイベントに統合するようになりました ([Firefox バグ 882674](https://bugzil.la/882674))。

### Audio/Video/Media

- {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素を扱っていてエラーが発生したときに {{domxref("HTMLMediaElement.error")}} で指定される {{domxref("MediaError")}} オブジェクトが、{{domxref("MediaError.message", "message")}} プロパティを持つようになりました。これは、発生したエラーの具体的な説明を提供します。この文字列はエラーの事象について詳細情報を提供して、なぜ誤っているかの見識を与えます ([Firefox バグ 1299072](https://bugzil.la/1299072))。このフィールドは Firefox 51 から nightly ビルドに含まれていましたが、release を含むすべてのビルドで有効化しました。

### その他の API

- Firefox 50 で追加した (ただし常にエラーを返す) {{domxref("FileSystemFileEntry.createWriter()")}} メソッドを削除しました ([Firefox バグ 1315185](https://bugzil.la/1315185))。
- Firefox OS 独自の Apps installation/management API を、プラットフォームから削除しました ([Firefox バグ 1261019](https://bugzil.la/1261019))。
- Firefox OS 独自の Web Telephony API を、プラットフォームから削除しました ([Firefox バグ 1309719](https://bugzil.la/1309719))。
- Firefox OS 独自の Web Bluetooth API を、プラットフォームから削除しました ([Firefox バグ 1310020](https://bugzil.la/1310020))。
- [Battery Status API](/ja/docs/Web/API/Battery_Status_API) が、chrome/特権付きコードに限り使用可能になりました ([Firefox バグ 1313580](https://bugzil.la/1313580))。
- `ImageBitmapRenderingContext.transferImageBitmap()` を {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} に改名しました ([Firefox バグ 1304767](https://bugzil.la/1304767))。
- `mozDash` および `mozDashOffset` メンバーを、{{domxref("CanvasRenderingContext2D")}} から削除しました ([Firefox バグ 931389](https://bugzil.la/931389))。

### HTTP

- {{HTTPHeader("Referrer-Policy")}} ヘッダーで `same-origin`、`strict-origin`、`strict-origin-when-cross-origin` ディレクティブをサポートしました ([Firefox バグ 1276836](https://bugzil.la/1276836))。
- {{CSP("script-src")}} のように、[`'strict-dynamic'` source expression](/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) を {{HTTPHeader("Content-Security-Policy")}} のディレクティブでサポートしました ([Firefox バグ 1299483](https://bugzil.la/1299483))。
- [Strict Secure Cookies specification](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-alone-01) に従って、安全ではないサイト (`http:`) が "secure" ディレクティブで [Cookie を設定する](/ja/docs/Web/HTTP/Cookies) ことができなくなりました ([Firefox バグ 976073](https://bugzil.la/976073))。
- HTTP/2 ヘッダー圧縮方式 [HPACK](https://tools.ietf.org/html/rfc7541) の最大テーブルサイズを 4 KB から 64 KB に拡張しました ([Firefox バグ 1296280](https://bugzil.la/1296280))。
- {{HTTPHeader("Large-Allocation")}} ヘッダーを追加しました ([Firefox バグ 1304140](https://bugzil.la/1304140))。

### SVG

- SVG ドキュメントは、SVGDocument に代わり {{domxref("XMLDocument")}} インターフェイスを使用して表すようになりました。これは SVG 2 仕様で変更されました。

### セキュリティ

- ログインページ (すなわち [`<input type="password">`](/ja/docs/Web/HTML/Element/input/password) フィールドを含むページ) でログイン情報が安全でない方法で送信されると思われる場合に、Firefox はユーザーに警告するため、ページ内のパスワードフィールドの下に警告メッセージを表示します ([Firefox バグ 1319119](https://bugzil.la/1319119))。また、安全でないログインフォームではオートフィルが無効になります ([Firefox バグ 1217152](https://bugzil.la/1217152))。詳しくは [安全でないパスワード](/ja/docs/Web/Security/Insecure_passwords) をご覧ください。
- SHA-1 SSL 証明書のサポートを廃止しました。SHA-1 証明書を使用する安全なページに移動すると、[Untrusted Connection](https://support.mozilla.org/t5/Documents-Archive/quot-This-Connection-is-Untrusted-quot-error-message-appears/ta-p/589) エラーが発生します ([Firefox バグ 1330043](https://bugzil.la/1330043))。

## プラグイン

Flash を除くすべての NPAPI プラグインのサポートを廃止しました。Flash の使用も将来、段階的に廃止します。

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

新規 API:

- [`sessions` API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
- [`topSites` API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/topSites)
- [`omnibox` API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)
- [`runtime.onInstalled`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) および [`runtime.onStartup`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup) イベント
- [webRequest の非同期イベントハンドラー](/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest#modifying_requests)
- [`bookmarks.onMoved`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved)、[`bookmarks.onCreated`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated)、[`bookmarks.onChanged`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged) イベント
- [commands マニフェストキー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) の `_execute_browser_action` および `_execute_page_action`
- content_scripts マニフェストキーの [`match_about_blank`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank)

### インターフェイス

- ドロップされた複数のアイテムを扱うための `nsIDroppedLinkHandler.dropLinks` メソッドおよび `nsIDroppedLinkItem` インターフェイスを追加しました ([Firefox バグ 92737](https://bugzil.la/92737))。

### XUL

- `tabbrowser.loadTabs(uris, params)` メソッドのオーバーロードを追加しました ([Firefox バグ 92737](https://bugzil.la/92737))。
- `browser.droppedLinkHandler` 関数のシグネチャを変更しました ([Firefox バグ 92737](https://bugzil.la/92737))。

## 過去のバージョン

{{Firefox_for_developers(52)}}
