---
title: Firefox 63 for developers
slug: Mozilla/Firefox/Releases/63
---

Firefox 63 は、米国時間 2018 年 10 月 23 日 にリリースされました。このページでは、開発者に影響する Firefox 63 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) のフォントタブに、ページ上のフォントの設定を簡単に確認および編集できるエディターを追加しました。詳しくは [フォントを編集する](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) をご覧ください。
- [アクセシビリティインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) をデフォルトで有効化しました ([Firefox バグ 1482454](https://bugzil.la/1482454))。
- [アクセシビリティインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) でオブジェクトにマウスポインターを載せると、[アイテムを強調表示](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#highlighting_of_ui_items) して、ページ上の情報バーにアイテムのロールや名前を表示するようになりました ([Firefox バグ 1473030](https://bugzil.la/1473030))。
- [ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) で、コマンドラインをコンソール出力の直後に表示するようになりました ([Firefox バグ 1136299](https://bugzil.la/1136299))。
- [ネットワークモニター](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) で、URL が既知のトラッカーに属することを示すアイコンを追加しました。[セキュリティアイコン](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#security_icons) をご覧ください ([Firefox バグ 1333994](https://bugzil.la/1333994))。
- `devtools.aboutdebugging.showSystemAddons` の既定値が `false` になりました。これは、`about:debugging` ページにシステムアドオンを表示しないことを意味します。`about:config` で、この設定を変更できます ([Firefox バグ 1425347](https://bugzil.la/1425347))。
- [レスポンシブデザインモード](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) のツールバーをわかりやすくして、ビューポートを左寄せにするオプションを追加しました。
- ページインスペクターに、カスタム要素の [クラス定義へのリンク](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#custom_element_definition) を表示する機能を追加しました ([Firefox バグ 1443923](https://bugzil.la/1443923))。

### HTML

- {{HTMLElement("img")}} 要素の `decoding` 属性をサポートしました ([Firefox バグ 1416328](https://bugzil.la/1416328))。{{DOMxRef("HTMLImageElement.decoding")}} もご覧ください。

#### 廃止

- `sidebar` リンクタイプ (`rel="sidebar"`) のサポートを廃止しました。アンカータグがこの属性を含んでいても、属性が無視されます ([Firefox バグ 1452645](https://bugzil.la/1452645))。

### CSS

- {{Cssxref(":defined")}} 擬似クラスをサポートしました ([Firefox バグ 1331334](https://bugzil.la/1331334))。
- [Flexbox レイアウト](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox#the_gap_properties) で {{cssxref("row-gap")}}、{{cssxref("column-gap")}}、{{cssxref("gap")}} をサポートしました ([Firefox バグ 1398483](https://bugzil.la/1398483))。
- [webkit 接頭辞付きの画素密度に関する @media クエリー](/ja/docs/Web/CSS/Reference/At-rules/@media/-webkit-device-pixel-ratio) のサポートを再び有効化しました ([Firefox バグ 1444139](https://bugzil.la/1444139))。
- Firefox で [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout) (Flexbox) の {{cssxref("align-self")}}、{{cssxref("align-content")}}、{{cssxref("align-items")}}、{{cssxref("justify-content")}} プロパティをサポートしました ([Firefox バグ 1472843](https://bugzil.la/1472843))。
- {{cssxref("offset-path")}} の `path()` 関数を実装しました ([Firefox バグ 1429298](https://bugzil.la/1429298))。
- [Media Queries Level 4 仕様で改良された構文](/ja/docs/Web/CSS/Guides/Media_queries/Using#level_4_での構文の拡張) を実装しました ([Firefox バグ 1472843](https://bugzil.la/1472843))。
- `offset-*` プロパティを {{cssxref("inset-block-start")}}、{{cssxref("inset-block-end")}}、{{cssxref("inset-inline-start")}}、{{cssxref("inset-inline-end")}} に改名しました ([Firefox バグ 1464782](https://bugzil.la/1464782))。
- [prefers-reduced-motion](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) メディア特性をサポートしました ([Firefox バグ 1365045](https://bugzil.la/1365045)、[Firefox バグ 1475462](https://bugzil.la/1475462))。
- {{cssxref("resize")}} プロパティにフロー関連の値 (`block`、`inline`) を追加しました ([Firefox バグ 1464786](https://bugzil.la/1464786))。
- {{cssxref("align-self")}}、{{cssxref("align-content")}}、{{cssxref("justify-content")}} で、`safe` および `unsafe` 値の flexbox レイアウトを実装しました ([Firefox バグ 1297774](https://bugzil.la/1297774))。
- 適切な [論理的プロパティ](/ja/docs/Web/CSS/Guides/Logical_properties_and_values) がアニメーション可能になりました ([Firefox バグ 1309752](https://bugzil.la/1309752))。

#### 廃止

- `offset-block-start`、`offset-block-end`、`offset-inline-start`、`offset-inline-end` を削除しました。これらは前述のとおり `inset-*` に改名されました ([Firefox バグ 1464782](https://bugzil.la/1464782))。

### SVG

_変更なし。_

### JavaScript

- {{jsxref("Symbol.prototype.description")}} プロパティを実装しました ([Firefox バグ 1472170](https://bugzil.la/1472170))。
- {{JSxRef("Object.fromEntries()")}} メソッドを実装しました ([Firefox バグ 1469019](https://bugzil.la/1469019))。
- undefined であるオブジェクトのプロパティにアクセスしようとしたときのエラーメッセージを改善しました。`x` が undefined である状況で `x.y` にアクセスしようとすると、コンソールが従来の `TypeError: x is undefined` に代わって、より具体的な [`x is undefined; can't access its "y" property`](/ja/docs/Web/JavaScript/Reference/Errors/Unexpected_type) を返します ([Firefox バグ 1259822](https://bugzil.la/1259822))。

#### 廃止

- WebAssembly Module で、実験的な IndexedDB のシリアライズのサポートを廃止しました ([Firefox バグ 1469395](https://bugzil.la/1469395))。

### API

#### 新規 API

- Shadow DOM ([Firefox バグ 1471947](https://bugzil.la/1471947)) および Custom Elements ([Firefox バグ 1471948](https://bugzil.la/1471948)) API をデフォルトで有効にしました。詳しくは [Web components](/ja/docs/Web/API/Web_components) をご覧ください。
- {{domxref("Media_Capabilities_API", "Media Capabilities API", "", "1")}} を実装しました ([Firefox バグ 1409664](https://bugzil.la/1409664))。
- {{domxref("Clipboard", "Async Clipboard API", "", "1")}} を実装して、デフォルトですべてのチャンネルで有効化しました。Chrome および Firefox では現在 {{domxref("Clipboard.writeText", "writeText()")}} および {{domxref("Clipboard.readText", "readText()")}} メソッドのみ実装しています。ただし、`readText()` が [ブラウザー拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions) に限り使用可能であることが Chrome とは異なります。
- {{domxref("SecurityPolicyViolationEvent")}} インターフェイスをサポートしました。{{HTTPHeader("Content-Security-Policy")}} に違反したときにイベントを送信できます ([Firefox バグ 1472661](https://bugzil.la/1472661))。

#### DOM

- {{domxref("Web_Animations_API", "Web Animations API", "", "1")}} で、以下の部分をデフォルトで有効にしました ([Firefox バグ 1476158](https://bugzil.la/1476158))。
  - {{domxref("Animation")}} の {{domxref("Animation.ready", "ready")}} および {{domxref("Animation.finished", "finished")}} プロパティ。`Animation` オブジェクトの `ready` および `finished` {{jsxref("Promise")}} を指定します。
  - {{domxref("Animation")}} オブジェクトの {{domxref("Animation.effect", "effect")}} プロパティ。
  - {{domxref("KeyframeEffect")}} および {{domxref("AnimationEffect")}} インターフェイス。

- {{domxref("Element.toggleAttribute()")}} メソッドを実装しました ([Firefox バグ 1469592](https://bugzil.la/1469592))。
- 以前は非標準であった {{domxref("Event.returnValue")}} プロパティを、互換性のためにサポートしました ([Firefox バグ 1452569](https://bugzil.la/1452569))。
- ウェブ互換性を向上するために {{domxref("Window.event")}} プロパティを実装しました。現在は標準化されています ([Firefox バグ 218415](https://bugzil.la/218415))。ただし複数のウェブ互換性の問題 (例えば [Firefox バグ 1479964](https://bugzil.la/1479964)) により、すぐに設定項目 `dom.window.event.enabled` で Nightly 以外のチャンネルでは無効化しました ([Firefox バグ 1493869](https://bugzil.la/1493869))。
- Firefox の動作を Edge や Chrome に合わせるため、{{domxref("NavigatorID.platform", "navigator.platform")}} プロパティが 64 ビット版 Windows で実行している場合でも `"Win32"` を返すようになりました ([Firefox バグ 1472618](https://bugzil.la/1472618))。
- Firefox 63 より前のバージョンでは、`rel="noopener"` を持つ新しいウィンドウを開くリンク、および [`noopener`](/ja/docs/Web/API/Window/open#noopener) 機能を有効にして {{domxref("Window.open()")}} を呼び出した場合にすべてのウィンドウ機能を無効にしており、必要な標準機能を明示的に再有効化しなければなりませんでした。Firefox 63 ではこれらのウィンドウでほかのウィンドウと同じ機能が有効になり、不要な機能を明示的に無効化しなければなりません ([Firefox バグ 1419960](https://bugzil.la/1419960))。

#### DOM イベント

- キーボードの*右側*にある&#x20;

  <kbd>Alt</kbd>

  &#x20;キーの扱いが、Windows で改善しました。ユーザーの現在のキーボードレイアウトで&#x20;

  <kbd>Alt</kbd>

  &#x20;キーが&#x20;

  <kbd>AltGr</kbd>

  &#x20;モディファイアキーにマッピングされている場合に、{{domxref("KeyboardEvent.key")}} が `"AltGraph"` として値を返します。これは最近 Chrome に導入された動作に合致します ([Firefox バグ 900750](https://bugzil.la/900750))。

#### メディア、Web Audio、WebRTC

- マイクへのアクセスが、同じコンテンツプロセス内でも複数のタブで同時に動作するようになりました ([Firefox バグ 1404977](https://bugzil.la/1404977))。
- {{domxref("RTCDataChannel")}} を、以前からサポートしていた旧来の sctp-sdp-05 データ形式に加えて、sctp-sdp-21 データ形式をサポートするように更新しました。
- Web Audio API の {{domxref("ConstantSourceNode")}} ノード型で、仕様書に合わせるためデフォルトのチャンネル数を 1 から 2 に変更しました ([Firefox バグ 1413283](https://bugzil.la/1413283))。
- {{domxref("Web_Audio_API", "Web Audio API", "", "1")}} の {{domxref("AudioScheduledSourceNode")}} インターフェイス (および拡張によって、このインターフェイスを基にしたすべてのノード) でノードの開始時間として負の値が指定されたときに、正しい例外が発生するようになりました。そのエラーは `RangeError` です ([Firefox バグ 1413284](https://bugzil.la/1413284))。
- {{domxref("AudioParam")}} オブジェクトの {{domxref("AudioParam.value", "value")}} で許可される最小値と最大値を、それぞれ単精度浮動小数点数で最小の負の値 (-340,282,346,638,528,859,811,704,183,484,516,925,440) と最大の正の値 (+340,282,346,638,528,859,811,704,183,484,516,925,440) に変更しました ([Firefox バグ 1476695](https://bugzil.la/1476695))。
- アクティブなストリームのコーデックを変更できる、{domxref("SourceBuffer.changeType")}} メソッドをデフォルトで有効にしました。これは {{domxref("Media_Source_Extensions_API", "Media Source Extensions API", "", "1")}} の一部です ([Firefox バグ 1481166](https://bugzil.la/1481166))。
- {{domxref("AudioParam.setValueCurveAtTime()")}} メソッドを、引数の値が次第に変わることを示すために浮動小数点数値の配列を受け入れるように更新しました。以前は {{domxref("Float32Array")}} であることが必要でした ([Firefox バグ 1421091](https://bugzil.la/1421091))。
- また {{domxref("AudioParam.setValueCurveAtTime()")}} が、`values` の配列に有限ではない値が存在する場合に、`TypeError` を正しく返すようになりました ([Firefox バグ 1472095](https://bugzil.la/1472095))。
- さらに `setValueCurveAtTime()` で、時間が経過した後に指定した値のカーブに従って引数が終了したとき、引数の値がカーブの値のリストの最後の値に設定されるようになりました ([Firefox バグ 1308436](https://bugzil.la/1308436))。
- ほかのディクショナリーや仕様書に合わせて、`RTCRTPStreamStats` ディクショナリーを {{domxref("RTCRtpStreamStats")}} に改名しました ([Firefox バグ 1480498](https://bugzil.la/1480498))。
- `RTCRtpStreamStats` ディクショナリーの {{domxref("RTCRtpStreamStats.kind", "kind")}} プロパティをサポートしました ([Firefox バグ 1481851](https://bugzil.la/1481851))。
- {{domxref("RTCRtpStreamStats")}} ディクショナリーの {{domxref("RTCRtpStreamStats.isRemote", "isRemote")}} プロパティが推奨になりました。Firefox 65 で削除する予定です。このプロパティにアクセスすると、コンソールに警告を表示します。詳しくは [Advancing WebRTC ブログの投稿](https://blog.mozilla.org/webrtc/getstats-isremote-65/) をご覧ください ([Firefox バグ 1393306](https://bugzil.la/1393306))。

#### Canvas と WebGL

- {{domxref("HTMLCanvasElement.getContext()")}} に、新しい `powerPreference` コンテキスト属性を追加しました。macOS ではパフォーマンスを重視しない WebGL のアプリケーションやアプレットが、マルチ GPU のシステムで高性能な GPU ではなく低消費電力の GPU を要求することができます ([Firefox バグ 1349799](https://bugzil.la/1349799))。

#### 廃止

- 廃止済みおよび Firefox 限定の非標準メソッドである {{domxref("Window.back()")}} および {{domxref("Window.forward()")}} を削除しました。代わりに {{domxref("History.back", "window.history.back()")}} および {{domxref("History.forward", "window.history.forward()")}} メソッドを使用してください ([Firefox バグ 1479486](https://bugzil.la/1479486))。
- メモリーリークを発生させるおそれがあるため、{{domxref("URL.createObjectURL", "createObjectURL()")}} および {{domxref("URL.revokeObjectURL", "revokeObjectURL()")}} メソッドが {{domxref("ServiceWorker")}} のインスタンスで使用できなくなりました ([Firefox バグ 1264182](https://bugzil.la/1264182))。
- 仕様書で非推奨とされたため限定的にサポートしていた、{{domxref("PannerNode")}} のドップラー効果のサポートを Web Audio API から削除しました。{{domxref("AudioListener")}} の {{domxref("AudioListener.dopplerFactor", "dopplerFactor")}} および {{domxref("AudioListener.speedOfSound", "speedOfSound")}} プロパティと、`PannerNode` の {{domxref("PannerNode.setVelocity", "setVelocity()")}} メソッドを削除しました ([Firefox バグ 1148354](https://bugzil.la/1148354))。

### CSSOM

_変更なし。_

### HTTP

- {{HTTPHeader("Clear-Site-Data")}} ヘッダーを実装して、設定で無効化しないようにしました ([Firefox バグ 1470111](https://bugzil.la/1470111))。

### セキュリティ

- サイトで [Content Security Policy](/ja/docs/Web/HTTP/Guides/CSP) が設定されている場合に、favicon も CSP に従うようになりました ([Firefox バグ 1297156](https://bugzil.la/1297156))。
- CSP の違反レポートを生成するとき、`script-src` ディレクティブの `'report-sample'` 式を認識するようになりました。このディレクディブは、違反が発生した場所の短いサンプルをレポートに含めるべきであることを示します。以前は、Firefox は常にサンプルを含めていました ([Firefox バグ 1473218](https://bugzil.la/1473218))。
- Firefox が NSS 3.39 を使用するようになりました ([Firefox バグ 1470914](https://bugzil.la/1470914))。

### プラグイン

_変更なし。_

### WebDriver conformance (Marionette)

#### 新機能

- Marionette が `WebDriver:NewSession` の応答で `setWindowRect` [capability](/ja/docs/Web/WebDriver/Capabilities) を返すようになりました。これは、ブラウザーのウィンドウの移動やリサイズが可能である場合 (例えばモバイルアプリケーション以外の Firefox) に true になります ([Firefox バグ 1470659](https://bugzil.la/1470659))。
- `unhandledPromptBehavior` capability をサポートしました。これは、WebDriver 仕様の特定の [prompt behavior](https://w3c.github.io/webdriver/#dfn-user-prompt-handler) を定義できます ([Firefox バグ 1264259](https://bugzil.la/1264259))。
- `WebDriver:ExecuteScript` および `WebDriver:ExecuteAsyncScript` コマンドに、ユーザープロンプトの処理を追加しました ([Firefox バグ 1439995](https://bugzil.la/1439995))。

#### API の変更点

- `WebDriver:` 接頭辞がない、非推奨のコマンドエンドポイントを削除しました ([Firefox バグ 1451725](https://bugzil.la/1451725))。
- `WebDriver:NewSession` コマンドが、`platformName` について WebDriver 仕様で定義されている推奨文字列 (`linux`、`mac`、`windows`) を返すようになりました ([Firefox バグ 1470646](https://bugzil.la/1470646))。

#### バグ修正

- Firefox が最前面のアプリケーションではないとき、要素との対話でフォーカスに関するイベントが失われる問題を修正しました ([Firefox バグ 1398111](https://bugzil.la/1398111))。
- `WebDriver:ReleaseActions` がダブルクリックのトラッカーをリセットしないため、一連のアクションで `pointerDown` および `pointerUp` アクションを実行するとダブルクリックが発生する問題を修正しました ([Firefox バグ 1422583](https://bugzil.la/1422583))。
- `pause` アクションを繰り返し実行するとハングアップする問題を修正しました ([Firefox バグ 1447449](https://bugzil.la/1447449))。
- `WebDriver:ExecuteScript` や `WebDriver:ExecuteAsyncScript` が返す要素コレクションで循環参照エラーが発生する場合がある問題を修正しました ([Firefox バグ 1447977](https://bugzil.la/1447977))。
- `WebDriver:AcceptAlert` および `WebDriver:DismissAlert` コマンドの競合を防ぐため、ユーザープロンプトが閉じられるまで待つようになりました ([Firefox バグ 1479368](https://bugzil.la/1479368))。
- フレームのスクリプトから発生したログが `MarionettePrefs.logLevel` で制限されず、すべて記録される問題を修正しました ([Firefox バグ 1482829](https://bugzil.la/1482829))。
- 幅または高さが 32767 ピクセルを超えるウィンドウのスクリーンショットを取得するとき、`WebDriver:TakeScreenshot` でエラーが発生する問題を修正しました ([Firefox バグ 1485730](https://bugzil.la/1485730))。
- 送信したテキストが空文字列である場合に、`WebDriver:SendAlertText` がユーザープロンプトの値を置き換えない問題を修正しました ([Firefox バグ 1486485](https://bugzil.la/1486485))。

### その他

- {{domxref("PerformanceObserver.observe()")}} の動作を、指定したエントリータイプの配列に有効な値が見つからない場合や、配列が空または存在しない場合に、単に何もしないように修正しました。以前は、Firefox は誤って `TypeError` を発生させていました ([Firefox バグ 1403027](https://bugzil.la/1403027))。
- [OpenSearch](/ja/docs/Web/XML/Guides/OpenSearch) で、検索 URL の型として `application/json` を、`application/x-suggestions+json` の別名として受け入れるようになりました ([Firefox バグ 1425827](https://bugzil.la/1425827))。

## アドオン開発者向けの変更点

### API の変更点

#### テーマ

- {{WebExtAPIRef("browserAction")}} バッジのデフォルトの文字色が、背景とのコントラストを最大化するため、自動的に黒色か白色に設定されるようになりました ([Firefox バグ 1474110](https://bugzil.la/1474110))。
- [`theme`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) マニフェストキーの `accentcolor` および `textcolor` プロパティが省略可能になりました ([Firefox バグ 1413144](https://bugzil.la/1413144))。
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}} および {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} で、ブラウザーのアクションバッジの文字色を取得および設定できるようになりました ([Firefox バグ 1424620](https://bugzil.la/1424620))。
- `manifest.json` のテーマ `colors` キーで、新しいタブの文字色を設定する `ntp_text` プロパティと、新しいタブの色を設定する `ntp_background` プロパティをサポートしました ([Firefox バグ 1347204](https://bugzil.la/1347204))。
- ブックマークサイドバーなど、サイドバーの色をテーマで定義可能になりました ([Firefox バグ 1418602](https://bugzil.la/1418602))。関連プロパティ:
  - `sidebar`: サイドバーの背景色。
  - `sidebar_text`: サイドバーの文字色。
  - `sidebar_highlight`: サイドバーで選択したアイテムの背景色。
  - `sidebar_highlight_text`: サイドバーで選択したアイテムの文字色。

- {{WebExtAPIRef("management.install()")}} メソッドで、ブラウザー拡張機能が署名付きブラウザーテーマをインストールできます ([Firefox バグ 1369209](https://bugzil.la/1369209))。

#### 検索

- インストール済みの検索エンジンの一覧を取得したり、それらで検索を行ったりすることが可能な、新しい {{WebExtAPIRef("search")}} API が使用可能になりました ([Firefox バグ 1352598](https://bugzil.la/1352598))。
- {{WebExtAPIRef("topSites.get()")}} で、サイトが返すさまざまなリストのオプションを設定可能な `options` 引数をサポートしました ([Firefox バグ 1445836](https://bugzil.la/1445836))。

#### タブ

- {{WebExtAPIRef("tabs.onHighlighted")}} で複数選択をサポートしました ([Firefox バグ 1474440](https://bugzil.la/1474440))。
- {{WebExtAPIRef("tabs.highlight")}} で、`highlightInfo` オブジェクトに省略可能なフィールドである `populate` を追加しました。既定値は `true` です。`false` に設定するとパフォーマンスを向上させるため、返される `windows.Window` がタブのリストを持たないようになります ([Firefox バグ 1489814](https://bugzil.la/1489814))。
- {{WebExtAPIRef("tabs.update")}} で、`updateProperties` 引数内に `highlighted: true` を含むことによる、タブの選択状態の変化をサポートしました ([Firefox バグ 1479129](https://bugzil.la/1479129))。
- {{WebExtAPIRef("tabs.update")}} で、`updateProperties` 引数内に `highlighted: true` および `active: false` を含むことにより、フォーカスがあるタブを変えずにタブの選択状態を変更できるようになりました ([Firefox バグ 1486050](https://bugzil.la/1486050))。
- {{WebExtAPIRef("tabs.query")}} で、複数のタブが選択されている場合に {{WebExtAPIRef("tabs.Tab")}} オブジェクトの配列を返すようになりました ([Firefox バグ 1465170](https://bugzil.la/1465170))。
- {{WebExtAPIRef("tabs.Tab")}} プロパティが、ブラウザーウィンドウでどのタブが選択 (ハイライト) されているかを適切に反映するようになりました。また {{WebExtAPIRef("tabs.highlight")}} で、複数のタブのハイライト状態の変化をサポートしました ([Firefox バグ 1464862](https://bugzil.la/1464862))。
- {{WebExtAPIRef("tabs.onUpdated")}} に渡される `extraParameters` の `isarticle` プロパティを `isArticle` に改名しました。古い名前は残されていますが、非推奨です。この変更は Firefox 62 に適用されました ([Firefox バグ 1461695](https://bugzil.la/1461695))。
- {{WebExtAPIRef('tabs.onUpdated')}} イベントを使用して、`changeInfo` オブジェクトの `attention` プロパティでタブがユーザーの注意を引いていることを検出できます ([Firefox バグ 1396684](https://bugzil.la/1396684))。

#### メニュー

- {{WebExtApiRef("menus")}} API に {{WebExtApiRef("menus.getTargetElement()")}} を追加しました。このメソッドは `targetElementId` 引数が参照する、クリックされた要素を返します ([Firefox バグ 1325814](https://bugzil.la/1325814))。
- {{WebExtAPIRef("menus.create()")}} で非表示のメニュー項目を作成できるようになりました。また、{{WebExtAPIRef("menus.update()")}} で項目の表示・非表示を切り替えられるようになりました ([Firefox バグ 1482529](https://bugzil.la/1482529))。
- {{WebExtAPIRef("menus")}} API を使用して作成した項目でアクセスキーをサポートしました ([Firefox バグ 1320462](https://bugzil.la/1320462))。
- {{WebExtApiRef("menus.create()")}} および {{WebExtApiRef("menus.update()")}} の `targetUrlPatterns` 引数で、通常はマッチパターンで許可されないものを含む任意の URL スキームをサポートしました ([Firefox バグ 1280370](https://bugzil.la/1280370))。
- タブのコンテキストメニューがクリックされたとき、そのタブが現在アクティブなタブではない場合でも ["activeTab" パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) が認められるようになりました ([Firefox バグ 1446956](https://bugzil.la/1446956))。

#### その他

- {{WebExtAPIRef("commands.onCommand")}} が [ユーザー入力](/ja/docs/Mozilla/Add-ons/WebExtensions/User_actions) として扱われるようになりました ([Firefox バグ 1408129](https://bugzil.la/1408129))。
- {{WebExtAPIRef("webRequest")}} API で、投機的接続のフィルターが可能になりました ([Firefox バグ 1479565](https://bugzil.la/1479565))。
- {{WebExtAPIRef("webRequest.SecurityInfo")}} に `keaGroupName` および `signatureSchemeName` プロパティを追加しました。この変更は Firefox 62 に適用されました ([Firefox バグ 1471959](https://bugzil.la/1471959))。
- {{WebExtAPIRef("cookies.Cookie")}} が、Cookie の SameSite 状態を示すプロパティを含むようになりました。{{WebExtAPIRef("cookies.SameSiteStatus")}} 列挙型が SameSite 状態の値を定義します ([Firefox バグ 1351663](https://bugzil.la/1351663))。
- URL のマッチパターンが、"data" URL スキームへ明白にマッチするようになりました ([Firefox バグ 1280370](https://bugzil.la/1280370))。

## 関連情報

- [Firefox 63.0, See All New Features, Updates and Fixes](https://www.mozilla.org/en-US/firefox/63.0/releasenotes/)

## 過去のバージョン

{{Firefox_for_developers(62)}}
