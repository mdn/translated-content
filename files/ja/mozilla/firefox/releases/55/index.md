---
title: Firefox 55 for developers
slug: Mozilla/Firefox/Releases/55
---

{{FirefoxSidebar}}

Firefox 55 は、米国時間 2017 年 8 月 8 日にリリースされました。このページでは、開発者に影響する Firefox 55 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- ネットワーク要求を、列の値や他のプロパティでフィルタリング可能になりました ([Firefox バグ 1041895](https://bugzil.la/1041895)、[Firefox バグ 1354508](https://bugzil.la/1354508)、[Firefox バグ 1354507](https://bugzil.la/1354507))。また、正規表現を使用してフィルタリングできるようになりました ([Firefox バグ 1354495](https://bugzil.la/1354495))。
- [ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) で列を隠したり表示したりできるようになりました ([Firefox バグ 862855](https://bugzil.la/862855))。
- ネットワークモニターに Remote IP ([Firefox バグ 1344523](https://bugzil.la/1344523))、Protocol ([Firefox バグ 1345489](https://bugzil.la/1345489))、Scheme ([Firefox バグ 1356867](https://bugzil.la/1356867))、Cookies および Set-Cookies ([Firefox バグ 1356869](https://bugzil.la/1356869)) の列を追加しました。
- {{HTTPHeader("SourceMap")}} HTTP ヘッダーをサポートしました (以前のバージョンでは、非推奨である `X-SourceMap` ヘッダーをサポートしていました。[Firefox バグ 1346936](https://bugzil.la/1346936))。

### HTML

- [`contenteditable`](/ja/docs/Web/HTML/Global_attributes#contenteditable) を `true` に設定した要素で、テキストの別の行を分けるために {{htmlelement("div")}} 要素を使用するようになりました。これは、他の現行ブラウザーに Firefox を合わせるためです ([Firefox バグ 1297414](https://bugzil.la/1297414))。詳しくは[マークアップ生成の違い](/ja/docs/Web/Guide/HTML/Editable_content#マークアップ生成の違い) をご覧ください。
- Nightly で、`dom.forms.datetime` をデフォルトで有効にしました ([Firefox バグ 1366188](https://bugzil.la/1366188))。

### CSS

- {{cssxref("transform-box")}} プロパティをデフォルトで有効にしました ([Firefox バグ 1208550](https://bugzil.la/1208550))。
- [frames() タイミング関数](</ja/docs/Web/CSS/easing-function#the_frames()_class_of_timing-functions>) を実装しました ([Firefox バグ 1248340](https://bugzil.la/1248340))。
- {{cssxref("text-justify")}} プロパティを実装しました ([Firefox バグ 1343512](https://bugzil.la/1343512), [Firefox バグ 276079](https://bugzil.la/276079)).
- \[css-grid] repeat() 内で {{cssxref("fit-content")}} が、意図せず最大限に制限したサイズで領域を確保してしまう問題を修正しました ([Firefox バグ 1359060](https://bugzil.la/1359060))。
- {{cssxref("float")}} / {{cssxref("clear")}} の論理値 `inline-start` および `inline-end` は、以前から実装していましたが Release チャンネルでは無効化していました。これを、すべてのチャンネルにおいてデフォルトで有効化しました ([Firefox バグ 1253919](https://bugzil.la/1253919))。
- 設定項目 `layout.css.variables.enabled` を完全に削除しました。[CSS 変数](/ja/docs/Web/CSS/Using_CSS_custom_properties) の機能は常にデフォルトで有効であり、無効化できません ([Firefox バグ 1312328](https://bugzil.la/1312328))。
- 独自仕様である `-moz-context-properties` プロパティを実装しました ([Firefox バグ 1058040](https://bugzil.la/1058040))。
- 角度の単位がつかない 0 度の値が、{{cssxref("gradient/linear-gradient", "linear-gradient()")}} で正しく解釈されない問題を修正しました ([Firefox バグ 1363292](https://bugzil.la/1363292))。
- {{cssxref("::cue")}} 疑似要素をサポートしました。これは、メディア要素内で提供するテキストキューにマッチします ([Firefox バグ 1318542](https://bugzil.la/1318542))。

### SVG

- {{svgelement("radialGradient")}} の {{SVGAttr("fr")}} 属性を実装しました ([Firefox バグ 1240275](https://bugzil.la/1240275))。

### JavaScript

- {{jsxref("SharedArrayBuffer")}} および {{jsxref("Atomics")}} オブジェクトをデフォルトで有効化しました。JavaScript の Shared Memory と Atomics の入門として、[A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) をご覧ください。
- [object destructuring](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) で rest operator (`...`) をサポートしました。また、spread operator (`...`) が [オブジェクトリテラル](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax#オブジェクトリテラルでのスプレッド構文) で動作するようになりました (Stage 3 ECMAScript proposal: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread)。 [Firefox バグ 1339395](https://bugzil.la/1339395))。
- [非同期ジェネレーターメソッド](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions#非同期ジェネレーターメソッド) をサポートしました ([Firefox バグ 1353693](https://bugzil.la/1353693))。
- {{jsxref("String.prototype.toLocaleLowerCase()")}} および {{jsxref("String.prototype.toLocaleUpperCase()")}} メソッドで、ロケール固有の大文字・小文字の対応を言語タグで指定するための、省略可能な引数 `locale` をサポートしました ([Firefox バグ 1318403](https://bugzil.la/1318403))。
- {{jsxref("Intl/Collator", "Intl.Collator")}} オブジェクトで `caseFirst` オプションをサポートしました ([Firefox バグ 866473](https://bugzil.la/866473))。
- [Intl API](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl) でロケール設定が提供されていない場合に、オペレーティングシステムのデフォルトのロケールではなくブラウザーのデフォルトのロケールを使用するようになりました ([Firefox バグ 1346674](https://bugzil.la/1346674))。
- [Template call sites objects](/ja/docs/Web/JavaScript/Reference/Template_literals) が、未加工の文字列のリストに基づいて範囲ごとに正規化されるようになりました ([Firefox バグ 1108941](https://bugzil.la/1108941))。
- {{jsxref("TypedArray")}} のコンストラクター ({{jsxref("Int8Array")}}、{{jsxref("Float32Array")}} など) を ES2017 に更新しました。`ToIndex` 操作を行うようになり、引数なしでコンストラクターを使用できます。この場合は、length が 0 の typed array が戻ります ([Firefox バグ 1317383](https://bugzil.la/1317383))。

### API

#### 新規 API

- Firefox 53 から設定により使用可能であった **[Collaborative Scheduling of Background Tasks API](/ja/docs/Web/API/Background_Tasks_API)** (またはシンプルに **Background Tasks API** または **`requestIdleCallback` API** として知られる) を、デフォルトで有効にしました。この API は、次の再描画を行う前に利用可能な空き時間があるとブラウザーが判断したときに実行するタスクを予定することができます。これにより、目に見えるパフォーマンス低下を発生させずに空き時間をコードで使用できます ([Firefox バグ 1314959](https://bugzil.la/1314959))。
- **[WebVR 1.1 API](/ja/docs/Web/API/WebVR_API)** を、Windows でデフォルトで有効にしました (macOS は Nightly で使用できます)。この API はバーチャルリアリティデバイス (例えば Oculus Rift や HTC Vive のようなヘッドマウントディスプレイ) をウェブアプリで使用可能にして、開発者がディスプレイの位置や移動の情報を 3D シーンの移動に変換して、ディスプレイにコンテンツを表示することが可能になります。
- **[Intersection Observer API](/ja/docs/Web/API/Intersection_Observer_API)** (祖先要素またはトップレベルのドキュメントの [ビューポート](/ja/docs/Glossary/Viewport) と対象要素の交差状態の変化を非同期に監視する手段を提供します) を追加しました ([Firefox バグ 1321865](https://bugzil.la/1321865))。

#### DOM

- {{domxref("Window")}} の {{domxref("Window.scrollX", "scrollX")}} および {{domxref("Window.scrollY", "scrollY")}} プロパティ (別名である {{domxref("Window.pageXOffset", "pageXOffset")}} および {{domxref("Window.pageYOffset", "pageYOffset")}} も同様) を、サブピクセル精度に更新しました。戻り値が整数ではなく、サブピクセル精度のディスプレイでスクロール位置をより正確に示す浮動小数点数値になります ([Firefox バグ 1151421](https://bugzil.la/1151421))。必要に応じて、整数に変換する {{jsxref("Math.round()")}} を使用できます。
- {{domxref("MediaQueryList")}} (および他の関連機能) を、最新の仕様に合わせて更新しました。[Firefox バグ 1354441](https://bugzil.la/1354441)、{{domxref("MediaQueryList")}}、{{domxref("MediaQueryListEvent")}} をご覧ください。
- リストの値を変更する {{domxref("DOMTokenList")}} のメソッドが、自動的にホワイトスペースの切りつめと重複する値の削除を行うようになりました ([Firefox バグ 869788](https://bugzil.la/869788)、[ホワイトスペースのトリミングと重複の削除](/ja/docs/Web/API/DOMTokenList#ホワイトスペースのトリミングと重複の削除)をご覧ください)。
- {{domxref("HTMLInputElement")}} の `maxLength` プロパティを、同等の HTML が生成された後に JavaScript で動的に変更することが可能になりました ([Firefox バグ 1352799](https://bugzil.la/1352799))。
- {{domxref("URL.URL", "URL()")}} コンストラクターの base (第 2 引数) が `DOMString` を受け入れないようになりました。 `USVString` のみ受け入れます。既存の {{domxref("URL")}} オブジェクトを base に使用することは可能であり、それ自体をオブジェクトの `href` 属性に文字列化します ([Firefox バグ 1368950](https://bugzil.la/1368950))。

#### DOM イベント

- {{domxref("Document.createEvent()")}} メソッドがサポートするイベントの型を、最新の DOM 仕様に合わせて更新しました ([Firefox バグ 1251198](https://bugzil.la/1251198))。
- {{domxref("MessageEvent.origin")}} プロパティの値が、`DOMString` 型から `USVString` 型に替わりました。また、{{domxref("MessageEvent.source")}} プロパティが `MessageEventSource` 値 (これは {{domxref("WindowProxy")}}、{{domxref("MessagePort")}}、{{domxref("ServiceWorker")}} オブジェクトにできます) をとるようになりました ([Firefox バグ 1311324](https://bugzil.la/1311324))。
- ピンチズームのジェスチャーを、{{domxref("Element/wheel_event","wheel")}} イベントと `Ctrl` キーの組み合わせにマッピングしました。モバイルスクリーンやトラックパッドでピンチズームによるジェスチャーを使用してシンプルなズーム機能を開発者が実装できるようにするため、このマッピングを実装しました (一般的に、マウスホイール + `Ctrl` でズームします) ([Firefox バグ 1052253](https://bugzil.la/1052253))。

#### Selection API

- 内部で選択範囲が動いたときに editing hosts がどのようにフォーカスを得るかについて、他のブラウザーへ合わせるために [Selection API](/ja/docs/Web/API/Selection) を更新しました ([Firefox バグ 1318312](https://bugzil.la/1318312))。詳しくは[編集ホストのフォーカス変更に関する選択 API の挙動](/ja/docs/Web/API/Selection#編集ホストのフォーカス変更に関する選択_api_の挙動)をご覧ください。
- 最近の仕様の変更に合致するよう、{{domxref("Selection")}} API を更新しました ([Firefox バグ 1359371](https://bugzil.la/1359371)):

  - {{domxref("Selection.collapse", "collapse()")}} および {{domxref("Selection.extend", "extend()")}} メソッドの `offset` 引数を省略可能にしました。
  - {{domxref("Selection.collapse", "collapse()")}} メソッドの `node` 引数を null にすることが可能になりました。
  - {{domxref("Selection.containsNode", "containsNode()")}} メソッドの `partialContainment` 引数が省略可能になりました。
  - {{domxref("Selection.deleteFromDocument", "deleteFromDocument()")}} メソッドを追加しました。

- ウェブ互換性のため、および WebKit/Blink と一致させるため、{{domxref("Selection")}} API で {{domxref("Selection.removeAllRanges()")}} および {{domxref("Selection.collapse()")}} の別名として、`Selection.empty()` および `Selection.setPosition()` を追加しました ([Firefox バグ 1359387](https://bugzil.la/1359387))。
- [Storage API](/ja/docs/Web/API/Storage_API) の {{domxref("StorageManager.persist()")}} および {{domxref("StorageManager.persisted()")}} メソッドを実装して、`Window` コンテキストに公開しました ([Firefox バグ 1286717](https://bugzil.la/1286717))。

#### Workers

- ワーカーおよび共有ワーカーを、識別用の `name` プロパティをつけて作成できるようになりました。{{domxref("Worker.Worker", "Worker()")}} および {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} コンストラクター、{{domxref("DedicatedWorkerGlobalScope")}} および {{domxref("SharedWorkerGlobalScope")}} インターフェイスをご覧ください ([Firefox バグ 1364297](https://bugzil.la/1364297))。
- {{domxref("setTimeout()")}} および {{domxref("setInterval()")}} が、バックグラウンドのタブでトラッキングスクリプトに対して最小間隔の調整を課すようになりました。[トラッキングスクリプトのタイムアウトを制限する](/ja/docs/Web/API/setTimeout#トラッキングスクリプトのタイムアウトを制限する)をご覧ください ([Firefox バグ 1355311](https://bugzil.la/1355311))。

#### Service Workers/Push

- サービスワーカーコンテキストに送信したメッセージ (例えば、{{domxref("ServiceWorkerGlobalScope.message_event","onmessage")}} のイベントオブジェクトとして) は、他のウェブメッセージング機能との一貫性のため、{{domxref("MessageEvent")}} オブジェクトで表すようになりました。
- {{domxref("PushManager.subscribe()")}} メソッドが `applicationServerKey` の値として、{{jsxref("ArrayBuffer")}}s や Base64 エンコードの文字列を受け入れるようになりました ([Firefox バグ 1337348](https://bugzil.la/1337348))。

#### Web Audio API

- {{domxref("AudioContext")}} インターフェイスの非標準のコンストラクター (コンテキストの用途を示す列挙型の文字列を受け入れます) は、`options` 引数が与えられた場合にエラーが発生していました。この非標準コンストラクターを削除しました。ただし `options` 引数は Firefox で未サポートであり、現在は無視することに注意してください ([Firefox バグ 1361475](https://bugzil.la/1361475))。

#### WebRTC

- ソースデバイスがステレオ音声を提供する場合に、{{domxref("mediaDevices.getUserMedia", "getUserMedia()")}} がデフォルトでステレオ音声ストリームを提供するようになりました。モノラル入力を明示的に要求する機能は [Firefox 56](/ja/docs/Mozilla/Firefox/Releases/56) でサポートする予定です。現在、この機能はデスクトップに限り動作します。モバイル版 Firefox はステレオ音声入力ソースが未サポートです ([Firefox バグ 971528](https://bugzil.la/971528))。
- `getUserMedia()` の [メディア能力、制約、設定](/ja/docs/Web/API/Media_Capture_and_Streams_API/Constraints) である `autoGainControl` および `noiseSuppression` が仕様書に準拠しました。以前は `moz` 接頭辞がついていました ([Firefox バグ 1366415](https://bugzil.la/1366415))。
- 制約セットを空にして `getUserMedia()` を呼び出したとき、誤って `TypeError` はなく `NotSupportedError` を返していました。この問題を修正しました ([Firefox バグ 1349480](https://bugzil.la/1349480))。
- 以下の新たな WebRTC 統計値を使用できます: `framesEncoded`、`pliCount`、`nackCount`、`firCount` ([Firefox バグ 1348657](https://bugzil.la/1348657))。
- 以前は `mozRtt` と呼ばれていた `RTCInboundRTPStreamStats` ディクショナリーフィールドを、仕様書に合わせて `roundTripTime` に改名しました。また、`roundTripTime` の動作を標準仕様に準拠するよう調節しました。RTCP Receiver Report の RTCP タイムスタンプに基づいて秒単位で測定した、ラウンドトリップタイムの推定値を倍精度浮動小数点数を持ちます ({{RFC(3550, "", "6.4.1")}} で説明されているアルゴリズムに準拠します) ([Firefox バグ 1344970](https://bugzil.la/1344970))。ただしこのプロパティは、まもなく別のディクショナリー (`RTCRemoteInboundRTPStreamStats`) に*移動する*ことを意識しておいてください ([Firefox バグ 1380555](https://bugzil.la/1380555))。
- `RTCRTPStreamStats` ディクショナリーが、`firCount`、`pliCount`、`nackCount` フィールドを持つようになりました。これは、接続の信頼性を判断するために使用できる低レベルの情報を返します ([Firefox バグ 1348657](https://bugzil.la/1348657))。
- `RTCOutboundRTPStreamStats` ディクショナリーが `framesEncoded` フィールドを持つようになりました。これは、ストリーム用のエンコードが成功したフレームの数を報告します。この情報を使用して、フレームレートを計算できます ([Firefox バグ 1348657](https://bugzil.la/1348657))。
- Android でビデオ通話のパフォーマンス向上とバッテリー節約のため、ハードウェアによる動画エンコードを有効化する [設定](https://bugzilla.mozilla.org/show_bug.cgi?id=1265755#c36) を追加しました。これは [Firefox 56](/ja/docs/Mozilla/Firefox/Releases/56) で、デフォルトで有効化します ([Firefox バグ 1265755](https://bugzil.la/1265755))。

#### Encrypted Media Extensions API

- 現在、Firefox は仕様書で認められていないにもかかわらず、安全でないコンテキストで Encrypted Media Extensions を使用できます。近い将来にこの動作を変更する予定であり、Firefox 55 からこのようなことを行うと、[ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) に非推奨である旨の警告を出力します ([Firefox バグ 1361000](https://bugzil.la/1361000))。
- 現在、Firefox は仕様書で必須であるにもかかわらず、{{domxref("Navigator.requestMediaKeySystemAccess()")}} に渡す `suggestedConfigurations` 引数に {{domxref("MediaKeySystemCapabilities")}} オブジェクトを少なくとも 1 つ含めることを要求していません。Firefox 55 より、サポートするコーデックを指定せずに音声や動画の構成を指定すると、ウェブコンソールに警告を表示します。まもなく、1 つ以上の音声や動画の有効な構成が含められていない場合に例外が発生するようになります ([Firefox バグ 1368683](https://bugzil.la/1368683))。

#### WebGL

- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}} 拡張が、[WebGL](/ja/docs/Web/API/WebGL_API) および [WebGL2](/ja/docs/Web/API/WebGL2RenderingContext) コンテキストで使用可能になりました ([Firefox バグ 1325113](https://bugzil.la/1325113))。

### セキュリティ

- {{domxref("Geolocation")}} API が、[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts) である場合に限り利用可能になりました ([Firefox バグ 1072859](https://bugzil.la/1072859))。
- {{domxref("Storage API")}} が、[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts) である場合に限り利用可能になりました ([Firefox バグ 1268804](https://bugzil.la/1268804))。
- localhost で、混在コンテンツの読み込みを許可しました ([Firefox バグ 903966](https://bugzil.la/903966))。
- リモートの JAR ファイルの読み込みを再び無効化しました ([Firefox バグ 1329336](https://bugzil.la/1329336))。詳しくは [Security and the jar protocol](/ja/docs/Mozilla/Security/Security_and_the_jar_protocol) をご覧ください。

### プラグイン

- Flash コンテンツが "click-to-activate" になりました ([Firefox バグ 1317856](https://bugzil.la/1317856))。これはすべての Nightly のユーザーと、beta のユーザーの 50% へ直ちに適用しました。Firefox 55 リリース版では、リリース後の 2 週間でユーザーの 5%、4 週間でユーザーの 25%、6 週間でユーザーの 100% へ適用する予定です ([Firefox バグ 1365714](https://bugzil.la/1365714))。
- Flash および他のプラグインは、`http://` および `https://` 以外の URL スキームで読み込むことができなくなりました ([Firefox バグ 1335475](https://bugzil.la/1335475))。

### その他

- Linux 版 Firefox が、`-headless` フラグを使用して [ヘッドレスモード](/ja/docs/Mozilla/Firefox/Headless_mode) で実行できるようになりました ([Firefox バグ 1356681](https://bugzil.la/1356681))。

## ウェブプラットフォームから廃止

### HTML

- `xml:base` 属性を、[`style`](/ja/docs/Web/HTML/Global_attributes#style) 属性内に現れるパスのベース URL として使用できなくなりました。 例えば `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` のような使い方です ([Firefox バグ 1350521](https://bugzil.la/1350521))。style 属性向け xml:base が無効化されました。
- 他のブラウザーがサポートしていないため、Firefox 55 から content ドキュメントでは {{htmlelement("style")}} 要素の [`scoped`](/ja/docs/Web/HTML/Element/style#scoped) 属性を設定 (`layout.css.scoped-style.enabled`) で無効化しました。
- {{htmlelement("meta")}} 要素の [`http-equiv`](/ja/docs/Web/HTML/Element/meta#http-equiv) 属性で、不明瞭な値である `MSThemeCompatible` のサポートを Gecko から削除しました。他にサポートする現行ブラウザーがなく、また互換性の問題が発生していました ([Firefox バグ 966240](https://bugzil.la/966240))。

### CSS

- 独自仕様である `:-moz-bound-element` 疑似クラスを削除しました ([Firefox バグ 1350147](https://bugzil.la/1350147))。
- {{cssxref("text-decoration-line")}} の独自仕様の値である `-moz-anchor-decoration` を削除しました ([Firefox バグ 1355734](https://bugzil.la/1355734))。

### API

- `UIEvent.isChar` プロパティは Firefox 以外のブラウザーがサポートせず、また macOS 以外では不完全な実装でした。よってほかのブラウザーに合わせるため、Firefox 55 で削除しました。
- Firefox OS の独自仕様である Device Storage API を、プラットフォームから削除しました ([Firefox バグ 1299500](https://bugzil.la/1299500))。
- 非標準の {{domxref("Window.find()")}} メソッドの、`aShowDialog` 引数 (ブラウザーの "検索" ダイアログを開くかを指定できます) を削除しました ([Firefox バグ 1348409](https://bugzil.la/1348409))。
- `HTMLFormElement.requestAutoComplete()` メソッドを削除しました ({{domxref("HTMLFormElement")}} を参照) ([Firefox バグ 1270740](https://bugzil.la/1270740))。
- 非標準で Mozilla 特有の WebRTC オプションである `mozDontOfferDataChannel` および `mozBundleOnly` を、 `RTCOfferOptions` 辞書から削除しました。また、これらは {{domxref("RTCPeerConnection.createOffer()")}} でサポートしません ([Firefox バグ 1196974](https://bugzil.la/1196974))。
- Firefox OS 独自の [Audio Channels API](/ja/docs/Archive/B2G_OS/API/Audio_Channels_API) を、{{domxref("HTMLMediaElement")}} および {{domxref("AudioContext")}} から削除しました ([Firefox バグ 1358061](https://bugzil.la/1358061))。

### SVG

- `SVGZoomEvent` および `SVGZoomEvents` インターフェイスを、\<svg> の `onzoom` 属性とともに SVG2 仕様および Gecko から削除しました ([Firefox バグ 1314388](https://bugzil.la/1314388))。

## アドオン開発者と Mozilla 開発者向けの変更点

### WebExtensions

- [contextMenus.create() の command プロパティで、コンテキストメニューからブラウザーアクションポップアップ、ページアクションポップアップ、サイドバーを開くことができます。](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [chrome_settings_overrides キーで、ブラウザーのホームページをオーバーライドできます。](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- browser_style プロパティで、[ブラウザーアクションポップアップ](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)、[サイドバー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)、[オプションページ](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) にブラウザーライクなスタイルを適用できます。
- [permissions API](/ja/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## 過去のバージョン

{{Firefox_for_developers(54)}}
