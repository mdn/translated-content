---
title: Firefox 65 for developers
slug: Mozilla/Firefox/Releases/65
tags:
  - '65'
  - Firefox
  - Mozilla
  - Release
translation_of: Mozilla/Firefox/Releases/65
---
<div>{{FirefoxSidebar}}</div>

<p class="summary">この記事では、開発者に影響を与える Firefox 65 の変更点について説明します。Firefox 65 は 2019 年 1 月 29 日に出荷されました。</p>

<h2 id="Web_開発者のための変更">Web 開発者のための変更</h2>

<h3 id="開発者ツール">開発者ツール</h3>

<ul>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_Flexbox_layouts">Flexbox インスペクター</a> をデフォルトで有効にしました。</li>
 <li><a href="/ja/docs/Tools/Debugger">JavaScript デバッガー</a> で、XHR のブレークポイントをサポートしました ({{bug(821610)}})。</li>
 <li>アクセシビリティツリーでアイテムを右クリックすると、JSON ビューアに移動して <a href="/ja/docs/Tools/Accessibility_inspector#Print_accessibility_tree_to_json">ツリーを JSON として表示</a> できます。</li>
 <li>アクセシビリティピッカーの <a href="/ja/docs/Tools/Accessibility_inspector#Color_Contrast">色のコントラスト</a> 表示機能を、文字列の背景が複雑 (例えばグラデーションや複雑な画像) である場合はコントラスト値の範囲を表示するように改良しました。</li>
 <li><a href="/ja/docs/Tools/Network_Monitor">ネットワークモニター</a> のヘッダータブに、選択した要求のリファラーポリシーを表示するようになりました ({{bug(1496742)}})。</li>
 <li>スタックトレースを表示するとき (例えばコンソールのログや JavaScript デバッガー)、自身のコードに集中できるようにするため、フレームワークのメソッドの呼び出しを認識してデフォルトで折りたたむようにしました。</li>
 <li>ネイティブの端末と同じように、JavaScript コンソールの履歴を見つけるための逆検索が可能になりました (Windows/Linux では <kbd>F9</kbd>、macOS では <kbd>Ctrl</kbd> + <kbd>R</kbd> を押下して検索文字列を入力します。さらに <kbd>Ctrl</kbd> + <kbd>R</kbd>/<kbd>Ctrl</kbd> + <kbd>S</kbd> で結果を切り替えます)。</li>
 <li>JavaScript コンソールの <code>$0</code> ショートカット (ページで現在調査している要素を参照します) でオートコンプリートが可能になりました。例えば <code>$0.textContent</code> のようなプロパティのオートコンプリート候補を得るために <code>$0.te</code> と入力できます。</li>
 <li>インスペクターのルールビューで編集した箇所が、変更点パネルに表示されるようになりました ({{bug(1503920)}})。</li>
</ul>

<h3 id="HTML">HTML</h3>

<ul>
 <li>イベントは無効な HTML 要素にディスパッチされるようになりました。例えば、<code>disabled</code> 属性を持つ {{htmlelement("button")}}、{{htmlelement("fieldset")}}、{{htmlelement("input")}}、{{htmlelement("select")}}、{{htmlelement("textarea")}} 要素に設定されています ({{bug(329509)}})。</li>
 <li>Chrome や Safari に合わせて、{{htmlelement("iframe")}} 要素で <code>src</code> 属性を削除すると <code>about:blank</code> を読み込むようにしました ({{bug(1507842)}})。以前は、<code>src</code> を削除しても <code>iframe</code> の内容に影響はありませんでした。</li>
 <li>{{htmlelement("script")}} 要素で {{htmlattrxref("referrerpolicy", "script")}} 属性をサポートしました ({{bug(1460920)}})。</li>
</ul>

<h3 id="CSS">CSS</h3>

<ul>
 <li>{{cssxref("image-rendering")}} プロパティの値 <code>crisp-edges</code> の接頭辞を削除しました ({{bug(1496617)}})。</li>
 <li>値が <code>auto</code> である {{cssxref("scrollbar-color")}} が、2 つの色ではなく <code>auto</code> として解釈するようになりました ({{bug(1501418)}})。</li>
 <li><code>break-*</code> プロパティを実装して、古い <code>page-break-*</code> プロパティをそれらの別名にしました ({{bug(775618)}}):
  <ul>
   <li>{{cssxref("page-break-before")}} は {{cssxref("break-before")}} の別名です。</li>
   <li>{{cssxref("page-break-after")}} は {{cssxref("break-after")}} の別名です。</li>
   <li>{{cssxref("page-break-inside")}} は {{cssxref("break-inside")}} の別名です。</li>
  </ul>
 </li>
 <li>{{cssxref("overflow-wrap")}} プロパティの値 <code>anywhere</code> を実装しました ({{bug(1505786)}})。</li>
 <li>新しいステップ位置のキーワードである <code>jump-start</code>、<code>jump-end</code>、<code>jump-none</code>、<code>jump-both</code> (<a href="/ja/docs/Web/CSS/single-transition-timing-function#The_steps()_class_of_timing_functions"><code>steps()</code> タイミング関数</a> 内で使用可能) を実装しました ({{bug(1496619)}})。これは <code>frames()</code> タイミング関数の削除と同時に行いました。この関数は過去に同様の機能を実装していたものであり、非推奨になりました。</li>
 <li>ほかのブラウザーとの互換性のために、{{cssxref("appearance", "-webkit-appearance")}} で新しい値をいくつか追加しました。特に、以下の値です:
  <ul>
   <li><code>meter</code>。これはユーザーエージェントのスタイルシートで、{{htmlelement("meter")}} 要素のデフォルトの値として使用されます。既存の値 <code>meterbar</code> は、<code>meter</code> の別名になりました ({{bug(1501483)}})。</li>
   <li><code>progress-bar</code>。これはユーザーエージェントのスタイルシートで、{{htmlelement("progress")}} 要素のデフォルトの値として使用されます。既存の値 <code>progressbar</code> は、<code>progress-bar</code> の別名になりました ({{bug(1501506)}})。</li>
   <li><code>textarea</code>。これはユーザーエージェントのスタイルシートで、{{htmlelement("textarea")}} 要素のデフォルトの値として使用されます。既存の値 <code>textfield-multiline</code> は、<code>textarea</code> の別名になりました ({{bug(1507905)}})。</li>
  </ul>
 </li>
 <li>ほかのブラウザーの動作に合わせるため、{{cssxref("user-select")}} の動作を変更しました ({{bug(1506547)}})。具体的には以下のとおりです:
  <ul>
   <li>要素で <code>user-select: all</code> を設定したとき、子孫要素で設定した <code>user-select</code> のほかの値を上書きしないようになりました。例えば、以下のコードをご覧ください:
    <pre class="brush: html">&lt;div style="-webkit-user-select: all"&gt;All
  &lt;div style="-webkit-user-select: none"&gt;None&lt;/div&gt;
&lt;/div&gt;</pre>
    <code>none</code> を設定した <code>&lt;div&gt;</code> は、選択不可になります。以前はこの値が、親要素の値 <code>all</code> で上書きされました。</li>
   <li><code>contenteditable</code> である要素の内部にある <code>contenteditable</code> ではない要素が、選択可能になりました。</li>
   <li><code>user-select</code> の動作が、shadow DOM の内部・外部ともに同じになりました。</li>
   <li>独自仕様である値 <code>-moz-text</code> を削除しました。</li>
  </ul>
 </li>
 <li>CSS 環境変数 ({{cssxref("env")}} 関数) を実装しました ({{bug(1462233)}})。</li>
</ul>

<h4 id="廃止">廃止</h4>

<ul>
 <li>設定項目 <code>layout.css.shape-outside.enabled</code> を削除しました。<code>about:config</code> で {{cssxref("shape-outside")}}、{{cssxref("shape-margin")}}、{{cssxref("shape-image-threshold")}} を無効化できなくなりました ({{bug(1504387)}})。</li>
 <li>{{cssxref("user-select")}} プロパティの、Firefox 限定の値である <code>-moz-all</code>、<code>-moz-text</code>、<code>tri-state</code>、<code>element</code>、<code>elements</code>、<code>toggle</code> を削除しました。{{bug(1492958)}} および {{bug(1506547)}} をご覧ください。</li>
 <li>前述のとおり、<code>frames()</code> タイミング関数を削除しました ({{bug(1496619)}})。</li>
</ul>

<h3 id="SVG">SVG</h3>

<p><em>変更なし</em></p>

<h3 id="JavaScript">JavaScript</h3>

<ul>
 <li>{{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}} をサポートしました ({{bug(1504334)}})。</li>
 <li>文字列の {{jsxref("String/length","length","","1")}} の最大値を <code>2**28 - 1</code> (~256MB) から <code>2**30 - 2</code> (~1GB) に変更しました ({{bug(1509542)}})。</li>
 <li>常にトップレベルのグローバルオブジェクトを参照する {{jsxref("globalThis")}} プロパティを実装しました ({{bug(1317422)}})。</li>
</ul>

<h3 id="APIs">APIs</h3>

<h4 id="新しい_API">新しい API</h4>

<ul>
 <li>{{domxref("Streams_API/Using_readable_streams", "Readable Streams", "", "1")}} をデフォルトで有効にしました ({{bug(1505122)}})。</li>
 <li>{{domxref("Storage_Access_API", "Storage Access API", "", "1")}} をデフォルトで有効にしました ({{bug(1513021)}})。</li>
</ul>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
 <li>{{domxref("Performance.toJSON()")}} を {{domxref("Web_Workers_API", "Web Workers", "", "1")}} に公開しました ({{bug(1504958)}})。</li>
 <li>{{domxref("XMLHttpRequest")}} 要求で、要求した content type が <code>Blob</code> かつ要求メソッドが <code>GET</code> ではない場合に、<code>NetworkError</code> が発生するようになりました ({{bug(1502599)}})。</li>
 <li>{{domxref("Fullscreen API", "", "", "1")}} で、<code>-moz-</code> 接頭辞がつく多くの機能が非推奨になりました。また、これらを発見すると JavaScript コンソールで非推奨の警告を表示するようになりました ({{bug(1504946)}})。</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.createImageBitmap", "createImageBitmap()")}} で、SVG 画像 ({{domxref("SVGImageElement")}}) を画像のソースとしてサポートしました。</li>
</ul>

<h4 id="DOM_events">DOM events</h4>

<ul>
 <li>今後、{{domxref("Window.open()")}} はイベントごとに 1 回だけ呼び出し可能になります ({{bug(675574)}})。</li>
 <li>CJKT ユーザーに対してブラウザー間の互換性を高めるため、IME で変換している間に <code><a href="/ja/docs/Web/Events/keyup">keyup</a></code> および <code><a href="/ja/docs/Web/Events/keydown">keydown</a></code> イベントが発生するようになりました ({{bug(354358)}})。</li>
</ul>

<h4 id="Web_workers" name="Web_workers">Web workers</h4>

<ul>
 <li>{{domxref("SharedWorkerGlobalScope.onconnect")}} のイベントオブジェクトが {{domxref("MessageEvent")}} のインスタンスになりました。また、<code>data</code> プロパティが <code>null</code> からから文字列に変わりました ({{bug(1508824)}})。</li>
</ul>

<h4 id="Fetch_and_Service_workers" name="Fetch_and_Service_workers">Fetch と Service workers</h4>

<ul>
 <li>{{domxref("Response.redirect()")}} メソッドが、最初の引数で有効な URL が指定されていない場合に、正しく <code>TypeError</code> を発生させるようになりました ({{bug(1503276)}})。</li>
 <li>{{domxref("ServiceWorkerContainer.register()")}} および {{domxref("WorkerGlobalScope.importScripts()")}} (Service worker で使用している場合) メソッドが、有効な <a href="/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript">JavaScript MIME type</a> のファイルを受け入れるようになりました ({{bug(1354577)}})。</li>
 <li>{{domxref("FetchEvent.replacesClientId")}} および {{domxref("FetchEvent.resultingClientId")}} プロパティをサポートしました ({{bug(1264177)}})。</li>
 <li>{{domxref("ServiceWorkerGlobalScope.onmessageerror")}} および {{domxref("ServiceWorkerContainer.onmessageerror")}} ハンドラープロパティを実装しました ({{bug(1399446)}})。</li>
 <li>{{HTTPMethod("HEAD")}} または {{HTTPMethod("GET")}} メソッドの Fetch リクエストで、{{httpheader("Origin")}} ヘッダーを設定しないようにしました ({{bug(1508661)}})。</li>
</ul>

<h4 id="Media_Web_Audio_および_WebRTC">Media, Web Audio, および WebRTC</h4>

<ul>
 <li>{{domxref("WebRTC API", "WebRTC", "", "1")}} の {{domxref("RTCIceCandidateStats")}} ディクショナリーを、最新の仕様に合わせて更新しました ({{bug(1324788)}}、{{bug(1489040)}})。</li>
 <li>{{domxref("MediaRecorder")}} の <code>pause</code> および <code>resume</code> イベント (また、対応するイベントハンドラープロパティの {{domxref("MediaRecorder.onpause")}} および {{domxref("MediaRecorder.onresume")}}) は、ブラウザー実装状況では実装済みとしていましたが、以前は実装されていませんでした。これらを実装しました ({{bug(1458538)}}, {{bug(1514016)}})。</li>
</ul>

<h4 id="Canvas_と_WebGL">Canvas と WebGL</h4>

<ul>
 <li>{{domxref("WebGL API", "WebGL", "", "1")}} の {{domxref("EXT_texture_compression_bptc")}} および {{domxref("EXT_texture_compression_rgtc")}} テクスチャー圧縮拡張を、WebGL1 および WebGL2 のコンテキストに公開しました ({{bug(1507263)}})。</li>
</ul>

<h4 id="廃止_2">廃止</h4>

<ul>
 <li><a href="/ja/docs/Web/Guide/Events/Mutation_events">Mutation events</a> を、shadow trees で無効化しました ({{bug(1489858)}})。</li>
 <li>{{domxref("MediaStream")}} の非標準プロパティである <code>currentTime</code> を削除しました ({{bug(1502927)}})。</li>
 <li>設定項目 <code>dom.webcomponents.shadowdom.enabled</code> および <code>dom.webcomponents.customelements.enabled</code> を削除しました。Shadow DOM および Custom Elements は <code>about:config</code> で無効化できません ({{bug(1503019)}})。</li>
 <li>非標準の DOM <code>text</code> イベント (ブラウザーのエディター UI に、IME のコンポジション文字列や選択範囲を伝えるために発生します) を削除しました ({{bug(1288640)}})。</li>
 <li><a href="/ja/docs/Web/API/KeyboardEvent/keyCode#Non-printable_keys_(function_keys)">non-printable keys</a> では {{event("keypress")}} イベントが発生しなくなりました ({{bug(968056)}})。ただし <kbd>Enter</kbd> キーと、<kbd>Shift</kbd> + <kbd>Enter</kbd> および <kbd>Ctrl</kbd> + <kbd>Enter</kbd> の組み合わせは除きます (これらはブラウザー間の互換性のために維持します)。</li>
</ul>

<h3 id="セキュリティ">セキュリティ</h3>

<ul>
 <li>CORS の制限が要求ヘッダーに強制されるようになりました ({{bug(1483815)}}。詳しくは <a href="https://github.com/whatwg/fetch/issues/382">whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231</a> をご覧ください)。</li>
</ul>

<h3 id="Networking" name="Networking">ネットワーク</h3>

<p><em>変更なし。</em></p>

<h3 id="プラグイン">プラグイン</h3>

<p><em>変更なし</em></p>

<h3 id="WebDriver_conformance_(Marionette)" name="WebDriver_conformance_(Marionette)">WebDriver conformance (Marionette)</h3>

<h4 id="API_changes" name="API_changes">API の変更点</h4>

<ul>
 <li><code>WebDriver:ElementSendKeys</code> が対話性の確認で <code>&lt;input type=file&gt;</code> をより緩やかに扱うようになり、<code>not interactable</code> エラーメッセージを発生させずに要素を非表示にできるようになりました。厳密な対話性の確認を行いたい場合は <code>strictFileInteractability</code> を使用できます ({{bug(1502864)}})。</li>
</ul>

<h4 id="Bug_fixes" name="Bug_fixes">バグ修正</h4>

<ul>
 <li>ウィンドウ操作コマンドの <code>WebDriver:FullscreenWindow</code>、<code>WebDriver:MinimizeWindow</code>、<code>WebDriver:MaximizeWindow</code>、<code>WebDriver:SetWindowRect</code> が、より安定的になりました ({{bug(1492499)}})。特殊な状況で無限ハングアップが発生しなくなりましたが、ウィンドウが 5 秒以内に要求した状態に達しなければタイムアウトします ({{bug(1521527)}})。</li>
 <li><code>WebDriver:ElementClick</code> が、クリックする要素の中心点を正しく計算するようになりました。寸法が 1 ピクセル四方でも対話できます ({{bug(1499360)}})。</li>
</ul>

<h4 id="Others" name="Others">その他</h4>

<ul>
 <li><code>unexpected alert open</code> エラーで、より有益なメッセージを提供するようになりました ({{bug(1502268)}})。</li>
</ul>

<h3 id="その他">その他</h3>

<ul>
 <li><a href="/ja/docs/Glossary/webp">WebP</a> 画像をサポートしました ({{bug(1294490)}})。

  <ul>
   <li>また、特定の状況でブラウザ間の互換性を向上するために、WebP の MIMEType (<code>image/webp</code>) を HTML ファイルの {{httpheader("Accept")}} 標準 HTTP 要求ヘッダーに追加しました ({{bug(1507691)}})。</li>
  </ul>
 </li>
 <li>Windows で、AV1 コーデックをデフォルトでサポートしました ({{bug(1452146)}})。</li>
</ul>

<h2 id="アドオン開発者向けの変更">アドオン開発者向けの変更</h2>

<h3 id="API_の変更">API の変更</h3>

<h4 id="Menus" name="Menus">メニュー</h4>

<h4 id="Tabs" name="Tabs">タブ</h4>

<ul>
 <li>{{WebExtAPIRef("tabs", "tabs API", "", "1")}} を、タブサクセサーをサポートするように強化しました。タブがサクセサーを持つことができ、サクセサーはタブが閉じられたときにアクティブになるタブの ID です ({{bug(1500479)}}。詳しくは <a href="https://qiita.com/piroor/items/ea7e727735631c45a366">this blog post</a> をご覧ください)。特に、以下の値です:

  <ul>
   <li>{{WebExtAPIRef("tabs.Tab")}} 型が <code>successorId</code> プロパティを持つようになりました。これは、タブのサクセサーの ID を登録および取得するために使用できます。</li>
   <li>{{WebExtAPIRef("tabs.onActivated")}} イベントリスナーのコールバックで、新しい引数 <code>previousTabId</code> を使用できます。これは、以前アクティブであったタブがまだ開かれていれば、その ID が入ります。</li>
   <li>{{WebExtAPIRef("tabs.update()")}} 関数の <code>updateProperties</code> オブジェクトに、新しい省略可能のプロパティ<code>successorTabId</code> を追加しました。ID を更新するために使用できます。</li>
   <li><code>successorTabId</code> は、{{WebExtAPIRef("tabs.get()")}} や {{WebExtAPIRef("tabs.query()")}} といった関数でも返ります。</li>
   <li>新たに <code>tabs.moveInSuccession()</code> で、タブサクセサーをまとめて操作できます。</li>
  </ul>
 </li>
</ul>

<h3 id="Manifest_の変更">Manifest の変更</h3>

<p><em>変更なし。</em></p>

<h3 id="Other_2" name="Other_2">その他</h3>

<ul>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme">Webextension themes</a> の <code>headerURL</code>/<code>theme_frame</code> プロパティを、Android 版 Firefox でサポートしました ({{bug(1429488)}})。</li>
</ul>

<h2 id="旧バージョン">旧バージョン</h2>

<p>{{Firefox_for_developers(65)}}</p>
