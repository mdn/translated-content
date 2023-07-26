---
title: Firefox 51 for developers
slug: Mozilla/Firefox/Releases/51
l10n:
  sourceCommit: e0de864abf4c85888c0a790058e0d6f46462ca3a
---

{{FirefoxSidebar}}

[Firefox の最新の開発者向け機能を試すには、Firefox Developer Edition をインストールしてください。](https://www.mozilla.org/firefox/developer/)Firefox 51 は、米国時間 2017 年 1 月 24 日にリリースされました。このページでは、開発者に影響する Firefox 51 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement("menu")}} 要素内でセパレーターとして {{HTMLElement("hr")}} が使用可能になりました ([Firefox バグ 870388](https://bugzil.la/870388))。
- {{HTMLElement("input")}} および {{HTMLElement("textarea")}} 要素の `selectionStart` および `selectionEnd` 属性が、テキストが選択されていない場合に 0 ではなく、現在のテキスト入力カーソルの位置を正しく返すようになりました ([Firefox バグ 1287655](https://bugzil.la/1287655))。

### CSS

- \<input type="radio"> 向けに {{cssxref(":indeterminate")}} を実装しました([Firefox バグ 885359](https://bugzil.la/885359))。
- `<input type="text">` 向けに {{cssxref(":placeholder-shown")}} を実装しました ([Firefox バグ 1069015](https://bugzil.la/1069015))。
- {{cssxref("::placeholder")}} 擬似要素の接頭辞を削除しました ([Firefox バグ 1069012](https://bugzil.la/1069012))。
- {{cssxref(":valid")}} CSS 擬似クラスが有効な {{HTMLElement("form")}} 要素に一致しない問題を修正しました ([Firefox バグ 1285425](https://bugzil.la/1285425))。
- {{cssxref("unicode-bidi")}} の値 `plaintext` が、縦書きモードでも動作するようになりました ([Firefox バグ 1302734](https://bugzil.la/1302734))。
- {{cssxref("clip-path")}} の値 `fill-box` および `stroke-box` を正式にサポートしました。以前は `border-box` の別名でした ([Firefox バグ 1289011](https://bugzil.la/1289011))。
- max-height が指定された、単一行で高さが自動のフレックスコンテナー内で、フレックス行の高さを抑える (引き延ばされたフレックスアイテムを抑える) ようになりました (仕様変更) ([Firefox バグ 1000957](https://bugzil.la/1000957))。

### JavaScript

- ES2015 の {{jsxref("Symbol.toStringTag")}} プロパティを実装しました ([Firefox バグ 1114580](https://bugzil.la/1114580))。
- ES2015 の {{jsxref("TypedArray.prototype.toString()")}} および {{jsxref("TypedArray.prototype.toLocaleString()")}} メソッドを実装しました ([Firefox バグ 1121938](https://bugzil.la/1121938))。
- {{jsxref("Intl/DateTimeFormat/formatToParts", "DateTimeFormat.prototype.formatToParts()")}} メソッドが使用可能になりました ([Firefox バグ 1289340](https://bugzil.la/1289340))。
- {{jsxref("Statements/const", "const")}} および {{jsxref("Statements/let", "let")}} が ES2015 に完全準拠しました ([Firefox バグ 950547](https://bugzil.la/950547))。
- [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループ内で {{jsxref("Statements/const", "const")}} を使用すると {{jsxref("SyntaxError")}} が発生せず、イテレーションのたびに新たなバインディングを行うようになりました ([Firefox バグ 1101653](https://bugzil.la/1101653))。
- 非推奨の [for each...in](/ja/docs/Web/JavaScript/Reference/Statements/for_each...in) ループは、[コンソールで警告が発生する](/ja/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated) ようになりました ([Firefox バグ 1293205](https://bugzil.la/1293205))。標準化された [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループを使用するように、コードを移行してください。
- [ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*) は [label](/ja/docs/Web/JavaScript/Reference/Statements/label) を持つことができなくなりました。また、ラベル名として "`let`" が許可されなくなりました ([Firefox バグ 1288459](https://bugzil.la/1288459))。
- 非推奨の [古いジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function) を [メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions) 内で使用すると、エラーが発生するようになりました ([Firefox バグ 1199296](https://bugzil.la/1199296))。
- [イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル) の `next()` メソッドは、返値がオブジェクトではない場合に {{jsxref("TypeError")}} が発生するようになりました ([Firefox バグ 1016936](https://bugzil.la/1016936))。

### 開発者ツール

- [ネットワークモニターで、ネットワーク要求の "ブロック" 状態を表示するようになりました。](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#timings)
- [Firefox 50 から Firefox 51 の間に解決した開発ツール関連のバグ一覧](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263768&resolution=FIXED&classification=Client%20Software&chfieldto=2016-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2016-08-01&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox)

### WebGL

- [WebGL 2](/ja/docs/Web/API/WebGL_API) をデフォルトで有効化しました。[webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) でいくつかのデモをご覧ください。

  - WebGL 2 は、{{HTMLElement("canvas")}} 要素に OpenGL ES 3.0 をもたらす {{domxref("WebGL2RenderingContext")}} インターフェイスを提供します。
  - 新機能:

    - [3D テクスチャ](/ja/docs/Web/API/WebGL2RenderingContext/texImage3D)、
    - [Sampler object](/ja/docs/Web/API/WebGLSampler)、
    - [Uniform Buffer object](/ja/docs/Web/API/WebGL2RenderingContext#Uniform_buffer_objects)、
    - [Sync object](/ja/docs/Web/API/WebGLSync)、
    - [Query object](/ja/docs/Web/API/WebGLQuery)、
    - [Tranform Feedback object](/ja/docs/Web/API/WebGLTransformFeedback)、
    - WebGL 2 のコア機能に昇格した拡張: [Vertex Array object](/ja/docs/Web/API/WebGLVertexArrayObject)、[instancing](/ja/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)、[Multiple Render Targets](/ja/docs/Web/API/WebGL2RenderingContext/drawBuffers)、[fragment depth](/ja/docs/Web/API/EXT_frag_depth)。

- `WEBGL_compressed_texture_es3` 拡張 (Firefox 46 で実装) を {{domxref("WEBGL_compressed_texture_etc")}} に改名して ([Firefox バグ 1316778](https://bugzil.la/1316778))、WebGL 2 コンテキストにデフォルトで含まれないようになりました ([Firefox バグ 1306174](https://bugzil.la/1306174))。
- {{domxref("EXT_disjoint_timer_query")}} 拡張を、`WebGLTimerQuery` オブジェクトではなく {{domxref("WebGLQuery")}} オブジェクトを使用するように更新しました ([Firefox バグ 1308057](https://bugzil.la/1308057))。
- {{domxref("OES_vertex_array_object")}} 拡張が、独自の `WebGLVertexArrayObjectOES` オブジェクトではなく WebGL 2 の {{domxref("WebGLVertexArrayObject")}} オブジェクトを使用するようになりました ([Firefox バグ 1318523](https://bugzil.la/1318523))。
- {{domxref("WebGLRenderingContext.texImage2D()")}}、{{domxref("WebGLRenderingContext.texSubImage2D()")}}、{{domxref("WebGL2RenderingContext.texImage3D()")}}、{{domxref("WebGL2RenderingContext.texSubImage3D()")}} といったメソッドで、テクスチャ画像のソースとして {{domxref("ImageBitmap")}} が使用可能になりました ([Firefox バグ 1324924](https://bugzil.la/1324924))。

### IndexedDB v2

- [IndexedDB](/ja/docs/Web/API/IndexedDB_API) バージョン 2 の実装が完了しました:

  - {{domxref("IDBObjectStore.getKey()")}} メソッドをサポートしました ([Firefox バグ 1271506](https://bugzil.la/1271506))。
  - {{domxref("IDBCursor.continuePrimaryKey()")}} メソッドをサポートしました ([Firefox バグ 1271505](https://bugzil.la/1271505))。
  - バイナリーキーをサポートしました ([Firefox バグ 1271500](https://bugzil.la/1271500))。
  - ["What's new in IndexedDB 2.0?" – Mozilla hacks](https://hacks.mozilla.org/2016/10/whats-new-in-indexeddb-2-0/) もご覧ください。

### Canvas

- 非標準の `CanvasRenderingContext2D.mozFillRule`() メソッドを削除しました。塗りつぶし規則は、標準の {{domxref("CanvasRenderingContext2D.fill()")}} メソッドの引数で定義できます ([Firefox バグ 826619](https://bugzil.la/826619))。
- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} の接頭辞を削除しました ([Firefox バグ 768072](https://bugzil.la/768072))。

### SVG

- {{SVGAttr("tabindex")}} 属性を追加しました ([Firefox バグ 778654](https://bugzil.la/778654))。
- {{SVGAttr("xlink:href")}} を不要にさせる、{{SVGAttr("href")}} 属性を追加しました ([Firefox バグ 1245751](https://bugzil.la/1245751))。
- {{domxref("SVGElement.dataset")}} プロパティと {{SVGAttr("data-*")}} SVG 属性一式を使用して、SVG 要素でカスタムデータ属性を使用できるようになりました ([Firefox バグ 921834](https://bugzil.la/921834))。
- {{HTMLElement("img")}} 要素内の SVG で使用する CSS アニメーションが、再び動作するようになりました。これは、過去のリグレッションでした ([Firefox バグ 1190881](https://bugzil.la/1190881))。

### Web Workers

- 非標準かつ廃止扱いの {{domxref("WorkerGlobalScope.onclose")}} イベントハンドラーと、`close` イベントを {{domxref("Worker")}} で使用する機能を Firefox から削除しました。

### ネットワーク

- MIME タイプ `image/*`、`video/*`、`audio/*`、`text/csv` で提供されるスクリプトをブロックして、読み込みおよび実行しないようになりました。{{HTMLElement("script")}} 要素を使用して宣言したとき、あるいは {{domxref("Worker.importScripts()")}}、{{domxref("Worker.Worker","Worker()")}}、{{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} を使用して読み込んだときに発生します ([Firefox バグ 1229267](https://bugzil.la/1229267) and [Firefox バグ 1288361](https://bugzil.la/1288361))。
- 公式に信頼された認証局から、SHA-1 証明書のサポートを削除しました ([Firefox バグ 1302140](https://bugzil.la/1302140))。詳しくは、[Phasing Out SHA-1 on the Public Web](https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/) もご覧ください。
- WoSign および StartCom の新たな証明書は、今後受け入れません ([Firefox バグ 1309707](https://bugzil.la/1309707))。詳しくは [Distrusting New WoSign and StartCom Certificates](https://blog.mozilla.org/security/2016/10/24/distrusting-new-wosign-and-startcom-certificates/) をご覧ください。
- 情報漏えいを避けるために [PAC](</ja/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>) の `FindProxyForURL(url, host)` 関数は、https\:// URL からパスおよびクエリーを取り除くようになりました ([Firefox バグ 1255474](https://bugzil.la/1255474)、[Sniffing HTTPS URLS with malicious PAC files](https://www.contextis.com/us/blog/leaking-https-urls-20-year-old-vulnerability)、`CVE-2017-5384` をご覧ください)。

### XHR

- {{domxref("XMLHttpRequest.responseXML")}} プロパティは、受信したデータを解析する際にパースエラーが発生した場合に、先頭に \<parsererror> ノードを置いた部分的な {{domxref("Document")}} を返さないようになりました。代わりに、正しく `null` を返します ([Firefox バグ 289714](https://bugzil.la/289714))。
- 最新の仕様書に合わせて、{{domxref("XMLHttpRequest.setRequestHeader()", "setRequestHeader()")}} で {{HTTPHeader("Accept")}} ヘッダーを設定していない {{domxref("XMLHttpRequest")}} は、値として `*/*` を設定した Accept ヘッダーを送信するようになりました ([Firefox バグ 918752](https://bugzil.la/918752))。
- {{domxref("XMLHttpRequest.open()")}} で、パラメーター `username` および `password` を省略した場合の既定値を、仕様書に従って `null` にするよう修正しました ([Firefox バグ 933759](https://bugzil.la/933759))。

### WebRTC

- {{domxref("RTCPeerConnection.removeStream()")}} メソッドを削除しました。これは Firefox 22 から非推奨であり、長い間 `NotSupportedError` が発生していました。代わりに、ストリームの各トラックで {{domxref("RTCPeerConnection.removeTrack()")}} を使用しなければなりません。
- WebRTC で、デフォルトで VP9 コーデックをサポートします。Firefox 46 で VP9 を追加したときはデフォルトで無効化していましたが、有効化すれば優先的に選択するコーデックになりました。ただし、CPU 使用率のために第 2 の選択肢 (VP8 より後) になることがありました。
- {{domxref("HTMLMediaElement.captureStream()")}} メソッドは、指定した {{HTMLElement("video")}} または {{HTMLElement("audio")}} のコンテンツを含む {{domxref("MediaStream")}} を返します。このメソッドはまだ `mozCaptureStream()` として接頭辞がついており、仕様書に完全には準拠していないことに注意が必要です。

### Audio/video

- FLAC コンテナーおよび Ogg コンテナーの FLAC ([FLAC コーデック](https://xiph.org/flac/index.html)) をサポートしました ([Firefox バグ 1195723](https://bugzil.la/1195723))。サポートする FLAC の MIME タイプは、`audio/flac` および `audio/x-flac` です。Ogg コンテナーの FLAC でサポートする MIME タイプは、`audio/ogg; codecs=flac` および `video/ogg; codecs=flac` です。
- MP4 で FLAC をサポートしました (MSE の有無にかかわらず) ([Firefox バグ 1303888](https://bugzil.la/1303888))。
- Firefox 50 で、{{domxref("setInterval()")}} および {{domxref("setTimeout()")}} で作成したタイマーをバッググラウンドのタブで抑制する機能は、[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の {{domxref("AudioContext")}} がアクティブで音声を再生しているときに実施しないようになりました。しかし、これはタイミングに敏感な音声再生 (タイマーを使用して個々の音を生成する音楽プレイヤーなど) が正しく動作しない問題を、すべての状況では解決できませんでした。このため、Firefox 51 では音声を再生していない場合でも {{domxref("AudioContext")}} が存在するバックグラウンドタブで抑制しないようになりました。

### DOM

- {{domxref("DOMImplementation.hasFeature()")}} は、どのような場合でも `true` を返すようになりました ([Firefox バグ 984778](https://bugzil.la/984778))。
- {{domxref("HTMLInputElement")}} および {{domxref("HTMLTextAreaElement")}} の `selectionStart` および `selectionEnd` プロパティが、テキストが選択されていない場合に 0 ではなく、現在のテキスト入力カーソルの位置を正しく返すようになりました ([Firefox バグ 1287655](https://bugzil.la/1287655))。
- {{domxref("HTMLImageElement")}} インターフェイスと対応する {{HTMLElement("img")}} 要素で `onerror` イベントハンドラーをサポートしました。 {{domxref("Element/error_event", "error")}} イベントを、[画像の読み込みや解釈を行おうとしてエラーが発生](/ja/docs/Web/API/HTMLImageElement#errors)したときに、要素に送信します。
- {{domxref("Animation.effect", "effect")}} プロパティに値を設定して、ウェブアニメーション ({{domxref("Animation")}}) のエフェクトを変更できるようになりました。以前は、このプロパティが読み取り専用でした ([Firefox バグ 1049975](https://bugzil.la/1049975))。
- Permissions API の {{domxref("Permissions.revoke()")}} メソッドを追加しました。設定項目 (`dom.permissions.revoke.enable`) で制御しており、設計や存在自体について [Web Application Security Working Group](https://www.w3.org/2011/webappsec/) で議論されているため、デフォルトで無効化しています。
- [ストレージ API](/ja/docs/Web/API/Storage_API) の {{domxref("NavigatorStorage.storage", "navigator.storage")}} プロパティおよび {{domxref("StorageManager.estimate()")}} メソッドを、必要なサポートコードと共に実装しました。ストレージユニットの永続化機能は未実装です。[Firefox バグ 1267941](https://bugzil.la/1267941) をご覧ください。
- セキュリティ上の理由で、{{domxref("BatteryManager.chargingTime")}} および {{domxref("BatteryManager.dischargingTime")}} は返値をもっとも近い 15 分単位の値に丸めるようになりました ([Firefox バグ 1292655](https://bugzil.la/1292655))。

### イベント

- Firefox で {{domxref("Element.onanimationstart", "onanimationstart")}}、{{domxref("Element.onanimationiteration", "onanimationiteration")}}、{{domxref("Element.onanimationstart", "onanimationstart")}} イベントハンドラーと、{{domxref("EventTarget.addEventListener", "addEventListener()")}} でそれらに対応するイベントをサポートしました ([Firefox バグ 911987](https://bugzil.la/911987))。
- Firefox で {{domxref("Element.transitionend_event", "ontransitionend")}} イベントハンドラーをサポートしました ([Firefox バグ 911987](https://bugzil.la/911987))。

### セキュリティ

- ログインページ (すなわち [`<input type="password">`](/ja/docs/Web/HTML/Element/input/password) フィールドを含むページ) でログイン情報が安全でない方法で送信されると思われる場合に、Firefox はユーザーに警告するため、アドレスバーに打ち消し線付きの錠前のアイコンを表示します ([Firefox バグ 1319119](https://bugzil.la/1319119))。詳しくは [安全でないパスワード](/ja/docs/Web/Security/Insecure_passwords) をご覧ください。

### 廃止

- 非標準の [Simple Push API](/ja/docs/Archive/Firefox_OS/API/Simple_Push_API) を、Gecko から完全に削除しました。これは主に Firefox OS 用の API であり、[W3C Push API](/ja/docs/Web/API/Push_API) に置き換えられました ([Firefox バグ 1296579](https://bugzil.la/1296579))。
- 非標準の [Alarms API](/ja/docs/Archive/Firefox_OS/API/Alarm_API) を Gecko から完全に削除しました。これは主に Firefox OS 用の API でした ([Firefox バグ 1300884](https://bugzil.la/1300884))。
- [Page Visibility API](/ja/docs/Web/API/Page_Visibility_API) で、接頭辞のサポートを廃止しました ([Firefox バグ 812701](https://bugzil.la/812701))。

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

- 新規 API:

  - {{WebExtAPIRef("idle.queryState()")}} ([Firefox バグ 1299846](https://bugzil.la/1299846))
  - {{WebExtAPIRef("idle.onStateChanged")}} ([Firefox バグ 1299775](https://bugzil.la/1299775))
  - {{WebExtAPIRef("management.getSelf()")}} ([Firefox バグ 1283116](https://bugzil.la/1283116))
  - {{WebExtAPIRef("management.uninstallSelf()")}} ([Firefox バグ 1220136](https://bugzil.la/1220136))
  - {{WebExtAPIRef("runtime.getBrowserInfo()")}} ([Firefox バグ 1268399](https://bugzil.la/1268399))
  - {{WebExtAPIRef("runtime.reload()")}} および {{WebExtAPIRef("runtime.onUpdateAvailable()")}} ([Firefox バグ 1279012](https://bugzil.la/1279012))

- [レガシーアドオンに WebExtension を埋め込む](/ja/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions) ことが可能になりました ([Firefox バグ 1252215](https://bugzil.la/1252215))。
- [クリップボードへのアクセス](/ja/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) をサポートしました ([Firefox バグ 1197451](https://bugzil.la/1197451))。
- {{WebExtAPIRef("tabs.executeScript()")}} のコールバックに渡す引数を修正しました ([Firefox バグ 1290157](https://bugzil.la/1290157))。
- WebExtension をアンインストールするとき、[localStorage](/ja/docs/Web/API/Storage/LocalStorage) を消去するようになりました ([Firefox バグ 1213990](https://bugzil.la/1213990))。
- Web Extensions で変更された {{HTTPHeader("Content-Type")}} ヘッダーを考慮するようになりました ([Firefox バグ 1304331](https://bugzil.la/1304331))。

### その他

- アドオンがインストールされるときに Firefox でマルチプロセスの有効化を避けるために、[`install.rdf` の `multiprocessCompatible`](/ja/docs/Mozilla/Add-ons/Install_Manifests#multiprocesscompatible) プロパティで明示的に `false` を設定することが必要になりました。
- Mozilla 特有の [Social API](/ja/docs/Mozilla/Projects/Social_API) を、以下のとおり大きく変更しました (主に、もはや使用されていない API を削除しました):

  - {{domxref("MozSocial")}} インターフェイスと、これをサポートする {{domxref("navigator.mozSocial")}} プロパティを削除しました。
  - [Social Bookmarks API](/ja/docs/Mozilla/Projects/Social_API/Bookmarks) を削除しました。
  - ソーシャルチャット機能を削除しました。
  - Social Status API を削除しました。
  - Share panel を除く、すべての [ソーシャルウィジェット](/ja/docs/Mozilla/Projects/Social_API/Widgets) を削除しました。social sidebar や flyover panel などが含まれます。
  - 削除した API のためにサポートしていたユーザインターフェイスや機能も、同様に削除しました。
  - 削除した機能をサポートする、[Social service provider manifest](/ja/docs/Mozilla/Projects/Social_API/Manifest) のプロパティを廃止しました。

- ファイル拡張子と MIME タイプの関連付けを与えるために `mimeTypes.rdf` をアドオンが使用する場合に、`"ext-to-type-mapping"` カテゴリーで項目を登録することが必要になりました ([Firefox バグ 306471](https://bugzil.la/306471))。
- [Browser API](/ja/docs/Mozilla/Gecko/Chrome/API/Browser_API) が、[`mozbrowserlocationchange`](/ja/docs/Web/Events/mozbrowserlocationchange) イベントのイベントオブジェクトで `detail` オブジェクトを含むようになりました。`canGoForward`/`canGoBack` プロパティを持っており、mozBrowser の戻る/進む の状態を同期的に取得できます ([Firefox バグ 1279635](https://bugzil.la/1279635))。

## 過去のバージョン

{{Firefox_for_developers(50)}}
