---
title: Firefox 65 for developers
slug: Mozilla/Firefox/Releases/65
---

{{FirefoxSidebar}}

この記事では、開発者に影響を与える Firefox 65 の変更点について説明します。Firefox 65 は 2019 年 1 月 29 日に出荷されました。

## Web 開発者のための変更

### 開発者ツール

- [Flexbox インスペクター](/ja/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts) をデフォルトで有効にしました。
- [JavaScript デバッガー](/ja/docs/Tools/Debugger) で、XHR のブレークポイントをサポートしました ({{bug(821610)}})。
- アクセシビリティツリーでアイテムを右クリックすると、JSON ビューアに移動して [ツリーを JSON として表示](/ja/docs/Tools/Accessibility_inspector#Print_accessibility_tree_to_json) できます。
- アクセシビリティピッカーの [色のコントラスト](/ja/docs/Tools/Accessibility_inspector#Color_Contrast) 表示機能を、文字列の背景が複雑 (例えばグラデーションや複雑な画像) である場合はコントラスト値の範囲を表示するように改良しました。
- [ネットワークモニター](/ja/docs/Tools/Network_Monitor) のヘッダータブに、選択した要求のリファラーポリシーを表示するようになりました ({{bug(1496742)}})。
- スタックトレースを表示するとき (例えばコンソールのログや JavaScript デバッガー)、自身のコードに集中できるようにするため、フレームワークのメソッドの呼び出しを認識してデフォルトで折りたたむようにしました。
- ネイティブの端末と同じように、JavaScript コンソールの履歴を見つけるための逆検索が可能になりました (Windows/Linux では&#x20;

  <kbd>F9</kbd>

  、macOS では&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>R</kbd>

  &#x20;を押下して検索文字列を入力します。さらに&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>R</kbd>

  /

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>S</kbd>

  &#x20;で結果を切り替えます)。

- JavaScript コンソールの `$0` ショートカット (ページで現在調査している要素を参照します) でオートコンプリートが可能になりました。例えば `$0.textContent` のようなプロパティのオートコンプリート候補を得るために `$0.te` と入力できます。
- インスペクターのルールビューで編集した箇所が、変更点パネルに表示されるようになりました ({{bug(1503920)}})。

### HTML

- イベントは無効な HTML 要素にディスパッチされるようになりました。例えば、`disabled` 属性を持つ {{htmlelement("button")}}、{{htmlelement("fieldset")}}、{{htmlelement("input")}}、{{htmlelement("select")}}、{{htmlelement("textarea")}} 要素に設定されています ({{bug(329509)}})。
- Chrome や Safari に合わせて、{{htmlelement("iframe")}} 要素で `src` 属性を削除すると `about:blank` を読み込むようにしました ({{bug(1507842)}})。以前は、`src` を削除しても `iframe` の内容に影響はありませんでした。
- {{htmlelement("script")}} 要素で {{htmlattrxref("referrerpolicy", "script")}} 属性をサポートしました ({{bug(1460920)}})。

### CSS

- {{cssxref("image-rendering")}} プロパティの値 `crisp-edges` の接頭辞を削除しました ({{bug(1496617)}})。
- 値が `auto` である {{cssxref("scrollbar-color")}} が、2 つの色ではなく `auto` として解釈するようになりました ({{bug(1501418)}})。
- `break-*` プロパティを実装して、古い `page-break-*` プロパティをそれらの別名にしました ({{bug(775618)}}):

  - {{cssxref("page-break-before")}} は {{cssxref("break-before")}} の別名です。
  - {{cssxref("page-break-after")}} は {{cssxref("break-after")}} の別名です。
  - {{cssxref("page-break-inside")}} は {{cssxref("break-inside")}} の別名です。

- {{cssxref("overflow-wrap")}} プロパティの値 `anywhere` を実装しました ({{bug(1505786)}})。
- 新しいステップ位置のキーワードである `jump-start`、`jump-end`、`jump-none`、`jump-both` ([`steps()` タイミング関数](</ja/docs/Web/CSS/single-transition-timing-function#The_steps()_class_of_timing_functions>) 内で使用可能) を実装しました ({{bug(1496619)}})。これは `frames()` タイミング関数の削除と同時に行いました。この関数は過去に同様の機能を実装していたものであり、非推奨になりました。
- ほかのブラウザーとの互換性のために、{{cssxref("appearance", "-webkit-appearance")}} で新しい値をいくつか追加しました。特に、以下の値です:

  - `meter`。これはユーザーエージェントのスタイルシートで、{{htmlelement("meter")}} 要素のデフォルトの値として使用されます。既存の値 `meterbar` は、`meter` の別名になりました ({{bug(1501483)}})。
  - `progress-bar`。これはユーザーエージェントのスタイルシートで、{{htmlelement("progress")}} 要素のデフォルトの値として使用されます。既存の値 `progressbar` は、`progress-bar` の別名になりました ({{bug(1501506)}})。
  - `textarea`。これはユーザーエージェントのスタイルシートで、{{htmlelement("textarea")}} 要素のデフォルトの値として使用されます。既存の値 `textfield-multiline` は、`textarea` の別名になりました ({{bug(1507905)}})。

- ほかのブラウザーの動作に合わせるため、{{cssxref("user-select")}} の動作を変更しました ({{bug(1506547)}})。具体的には以下のとおりです:

  - 要素で `user-select: all` を設定したとき、子孫要素で設定した `user-select` のほかの値を上書きしないようになりました。例えば、以下のコードをご覧ください:

    ```html
    <div style="-webkit-user-select: all">All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    `none` を設定した `<div>` は、選択不可になります。以前はこの値が、親要素の値 `all` で上書きされました。

  - `contenteditable` である要素の内部にある `contenteditable` ではない要素が、選択可能になりました。
  - `user-select` の動作が、shadow DOM の内部・外部ともに同じになりました。
  - 独自仕様である値 `-moz-text` を削除しました。

- CSS 環境変数 ({{cssxref("env")}} 関数) を実装しました ({{bug(1462233)}})。

#### 廃止

- 設定項目 `layout.css.shape-outside.enabled` を削除しました。`about:config` で {{cssxref("shape-outside")}}、{{cssxref("shape-margin")}}、{{cssxref("shape-image-threshold")}} を無効化できなくなりました ({{bug(1504387)}})。
- {{cssxref("user-select")}} プロパティの、Firefox 限定の値である `-moz-all`、`-moz-text`、`tri-state`、`element`、`elements`、`toggle` を削除しました。{{bug(1492958)}} および {{bug(1506547)}} をご覧ください。
- 前述のとおり、`frames()` タイミング関数を削除しました ({{bug(1496619)}})。

### SVG

_変更なし_

### JavaScript

- {{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}} をサポートしました ({{bug(1504334)}})。
- 文字列の {{jsxref("String/length","length","","1")}} の最大値を `2**28 - 1` (\~256MB) から `2**30 - 2` (\~1GB) に変更しました ({{bug(1509542)}})。
- 常にトップレベルのグローバルオブジェクトを参照する {{jsxref("globalThis")}} プロパティを実装しました ({{bug(1317422)}})。

### APIs

#### 新しい API

- {{domxref("Streams_API/Using_readable_streams", "Readable Streams", "", "1")}} をデフォルトで有効にしました ({{bug(1505122)}})。
- {{domxref("Storage_Access_API", "Storage Access API", "", "1")}} をデフォルトで有効にしました ({{bug(1513021)}})。

#### DOM

- {{domxref("Performance.toJSON()")}} を {{domxref("Web_Workers_API", "Web Workers", "", "1")}} に公開しました ({{bug(1504958)}})。
- {{domxref("XMLHttpRequest")}} 要求で、要求した content type が `Blob` かつ要求メソッドが `GET` ではない場合に、`NetworkError` が発生するようになりました ({{bug(1502599)}})。
- {{domxref("Fullscreen API", "", "", "1")}} で、`-moz-` 接頭辞がつく多くの機能が非推奨になりました。また、これらを発見すると JavaScript コンソールで非推奨の警告を表示するようになりました ({{bug(1504946)}})。
- {{domxref("WindowOrWorkerGlobalScope.createImageBitmap", "createImageBitmap()")}} で、SVG 画像 ({{domxref("SVGImageElement")}}) を画像のソースとしてサポートしました。

#### DOM events

- 今後、{{domxref("Window.open()")}} はイベントごとに 1 回だけ呼び出し可能になります ({{bug(675574)}})。
- CJKT ユーザーに対してブラウザー間の互換性を高めるため、IME で変換している間に [`keyup`](/ja/docs/Web/Events/keyup) および [`keydown`](/ja/docs/Web/Events/keydown) イベントが発生するようになりました ({{bug(354358)}})。

#### Web workers

- {{domxref("SharedWorkerGlobalScope.onconnect")}} のイベントオブジェクトが {{domxref("MessageEvent")}} のインスタンスになりました。また、`data` プロパティが `null` からから文字列に変わりました ({{bug(1508824)}})。

#### Fetch と Service workers

- {{domxref("Response.redirect()")}} メソッドが、最初の引数で有効な URL が指定されていない場合に、正しく `TypeError` を発生させるようになりました ({{bug(1503276)}})。
- {{domxref("ServiceWorkerContainer.register()")}} および {{domxref("WorkerGlobalScope.importScripts()")}} (Service worker で使用している場合) メソッドが、有効な [JavaScript MIME type](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) のファイルを受け入れるようになりました ({{bug(1354577)}})。
- {{domxref("FetchEvent.replacesClientId")}} および {{domxref("FetchEvent.resultingClientId")}} プロパティをサポートしました ({{bug(1264177)}})。
- {{domxref("ServiceWorkerGlobalScope.onmessageerror")}} および {{domxref("ServiceWorkerContainer.onmessageerror")}} ハンドラープロパティを実装しました ({{bug(1399446)}})。
- {{HTTPMethod("HEAD")}} または {{HTTPMethod("GET")}} メソッドの Fetch リクエストで、{{httpheader("Origin")}} ヘッダーを設定しないようにしました ({{bug(1508661)}})。

#### Media, Web Audio, および WebRTC

- {{domxref("WebRTC API", "WebRTC", "", "1")}} の {{domxref("RTCIceCandidateStats")}} ディクショナリーを、最新の仕様に合わせて更新しました ({{bug(1324788)}}、{{bug(1489040)}})。
- {{domxref("MediaRecorder")}} の `pause` および `resume` イベント (また、対応するイベントハンドラープロパティの {{domxref("MediaRecorder.onpause")}} および {{domxref("MediaRecorder.onresume")}}) は、ブラウザーの互換性では実装済みとしていましたが、以前は実装されていませんでした。これらを実装しました ({{bug(1458538)}}, {{bug(1514016)}})。

#### Canvas と WebGL

- {{domxref("WebGL API", "WebGL", "", "1")}} の {{domxref("EXT_texture_compression_bptc")}} および {{domxref("EXT_texture_compression_rgtc")}} テクスチャー圧縮拡張を、WebGL1 および WebGL2 のコンテキストに公開しました ({{bug(1507263)}})。

#### 廃止

- [Mutation events](/ja/docs/Web/Guide/Events/Mutation_events) を、shadow trees で無効化しました ({{bug(1489858)}})。
- {{domxref("MediaStream")}} の非標準プロパティである `currentTime` を削除しました ({{bug(1502927)}})。
- 設定項目 `dom.webcomponents.shadowdom.enabled` および `dom.webcomponents.customelements.enabled` を削除しました。Shadow DOM および Custom Elements は `about:config` で無効化できません ({{bug(1503019)}})。
- 非標準の DOM `text` イベント (ブラウザーのエディター UI に、IME のコンポジション文字列や選択範囲を伝えるために発生します) を削除しました ({{bug(1288640)}})。
- [non-printable keys](</ja/docs/Web/API/KeyboardEvent/keyCode#Non-printable_keys_(function_keys)>) では {{event("keypress")}} イベントが発生しなくなりました ({{bug(968056)}})。ただし&#x20;

  <kbd>Enter</kbd>

  &#x20;キーと、

  <kbd>Shift</kbd>

  &#x20;\+&#x20;

  <kbd>Enter</kbd>

  &#x20;および&#x20;

  <kbd>Ctrl</kbd>

  &#x20;\+&#x20;

  <kbd>Enter</kbd>

  &#x20;の組み合わせは除きます (これらはブラウザー間の互換性のために維持します)。

### セキュリティ

- CORS の制限が要求ヘッダーに強制されるようになりました ({{bug(1483815)}}。詳しくは [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) をご覧ください)。

### ネットワーク

_変更なし。_

### プラグイン

_変更なし_

### WebDriver conformance (Marionette)

#### API の変更点

- `WebDriver:ElementSendKeys` が対話性の確認で `<input type=file>` をより緩やかに扱うようになり、`not interactable` エラーメッセージを発生させずに要素を非表示にできるようになりました。厳密な対話性の確認を行いたい場合は `strictFileInteractability` を使用できます ({{bug(1502864)}})。

#### バグ修正

- ウィンドウ操作コマンドの `WebDriver:FullscreenWindow`、`WebDriver:MinimizeWindow`、`WebDriver:MaximizeWindow`、`WebDriver:SetWindowRect` が、より安定的になりました ({{bug(1492499)}})。特殊な状況で無限ハングアップが発生しなくなりましたが、ウィンドウが 5 秒以内に要求した状態に達しなければタイムアウトします ({{bug(1521527)}})。
- `WebDriver:ElementClick` が、クリックする要素の中心点を正しく計算するようになりました。寸法が 1 ピクセル四方でも対話できます ({{bug(1499360)}})。

#### その他

- `unexpected alert open` エラーで、より有益なメッセージを提供するようになりました ({{bug(1502268)}})。

### その他

- [WebP](/ja/docs/Glossary/webp) 画像をサポートしました ({{bug(1294490)}})。

  - また、特定の状況でブラウザ間の互換性を向上するために、WebP の MIMEType (`image/webp`) を HTML ファイルの {{httpheader("Accept")}} 標準 HTTP 要求ヘッダーに追加しました ({{bug(1507691)}})。

- Windows で、AV1 コーデックをデフォルトでサポートしました ({{bug(1452146)}})。

## アドオン開発者向けの変更

### API の変更

#### メニュー

#### タブ

- {{WebExtAPIRef("tabs", "tabs API", "", "1")}} を、タブサクセサーをサポートするように強化しました。タブがサクセサーを持つことができ、サクセサーはタブが閉じられたときにアクティブになるタブの ID です ({{bug(1500479)}}。詳しくは [this blog post](https://qiita.com/piroor/items/ea7e727735631c45a366) をご覧ください)。特に、以下の値です:

  - {{WebExtAPIRef("tabs.Tab")}} 型が `successorId` プロパティを持つようになりました。これは、タブのサクセサーの ID を登録および取得するために使用できます。
  - {{WebExtAPIRef("tabs.onActivated")}} イベントリスナーのコールバックで、新しい引数 `previousTabId` を使用できます。これは、以前アクティブであったタブがまだ開かれていれば、その ID が入ります。
  - {{WebExtAPIRef("tabs.update()")}} 関数の `updateProperties` オブジェクトに、新しい省略可能のプロパティ`successorTabId` を追加しました。ID を更新するために使用できます。
  - `successorTabId` は、{{WebExtAPIRef("tabs.get()")}} や {{WebExtAPIRef("tabs.query()")}} といった関数でも返ります。
  - 新たに `tabs.moveInSuccession()` で、タブサクセサーをまとめて操作できます。

### Manifest の変更

_変更なし。_

### その他

- [Webextension themes](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) の `headerURL`/`theme_frame` プロパティを、Android 版 Firefox でサポートしました ({{bug(1429488)}})。

## 旧バージョン

{{Firefox_for_developers(65)}}
