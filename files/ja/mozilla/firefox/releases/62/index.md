---
title: Firefox 62 for developers
slug: Mozilla/Firefox/Releases/62
tags:
  - '62'
  - Firefox
  - Release
translation_of: Mozilla/Firefox/Releases/62
---
<div>{{FirefoxSidebar}}</div>

<p class="summary">Firefox 62 は、米国時間 2018 年 9 月 5 日 にリリースされました。このページでは、開発者に影響する Firefox 62 の変更点をまとめています。</p>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li>シェイプパスエディターがデフォルトで有効になりました。詳しくは <a href="/ja/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes">CSS shapes を編集する</a> をご覧ください。</li>
 <li>ルールビューを CSS ペインのほかのタブから切り離して、個別のペインに分けることが可能になりました。詳しくは <a href="/ja/docs/Tools/Page_Inspector/3-pane_mode">ページインスペクターの 3 ペインモード</a> をご覧ください。</li>
 <li>グリッドインスペクターの機能を更新して、ドキュメントも新たに作成しました。<a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">CSS Grid Inspector: Examine grid layouts</a> をご覧ください。</li>
 <li>開発ツールの位置を 4 か所から選択できるようになりました。既定の位置であるウィンドウの下部に加えて、ウィンドウの左側および右側や、個別のウィンドウに配置できます ({{bug(1192642)}})。</li>
 <li><a href="/ja/docs/Tools/Web_Console/Split_console">コンソールペイン</a> のツールバーに、閉じるボタンを追加しました。</li>
 <li>設定の "現在の対象ドキュメントとして読み込む iframe を選択します" にチェックが入っているとき、設定タブを開いている間は現在のページに iframe が含まれていない場合でもツールバーにアイコンを表示します ({{bug(1456069)}})。</li>
 <li><a href="/ja/docs/Tools/Network_Monitor">ネットワークモニター</a> の <a href="/ja/docs/Tools/Network_Monitor#Cookies">Cookie タブ</a> で、Cookie の <code>samesite</code> 属性を表示するようになりました ({{bug(1452715)}})。</li>
 <li><a href="/ja/docs/Tools/Responsive_Design_Mode">レスポンシブデザインモード</a> が、コンテナータブ内で動作するようになりました ({{bug(1306975)}})。</li>
 <li>{{Glossary("CORS")}} のエラーが発生してコンソールに報告されているとき、Firefox がエラーに対応する <a href="/ja/docs/Web/HTTP/CORS/Errors">CORS エラーのドキュメント</a> へのリンクを提供するようになりました ({{bug(1475391)}})。</li>
 <li>以下のコマンドを使用して、コンソールタブで現在のページのスクリーンショットを作成できるようになりました (ファイル名も指定可能です) ({{bug(1464461)}}):<br>
  <br>
  <code>:screenshot &lt;filename.png&gt; --fullpage</code><br>
  <br>
  <code>&lt;filename.png&gt;</code> は、希望するファイル名です。このファイルは、ダウンロードフォルダーに保存されます。<code>--fullpage</code> は省略可能なパラメーターであり、指定するとウェブページ全体を保存します。また、ファイル名に <code>-fullpage</code> を付加します。このコマンドで使用可能なすべてのオプションは、 <code>:screenshot --help</code> で表示できます。</li>
</ul>

<h4 id="Removals" name="Removals">廃止</h4>

<ul>
 <li><a href="/ja/docs/Tools/GCLI">開発ツールバー/GCLI</a> (<kbd>Shift</kbd> + <kbd>F2</kbd> で使用可能) を Firefox から<strong>削除しました</strong> ({{bug(1461970)}})。開発ツールバーの UI と GCLI の上流ライブラリーの両方がメンテナンスされなくなり、一部の機能が (いくつかは e10s のため) が動作していません。また、<code>unsafeSetInnerHTML</code> の動作を妨げています。使用する機会もとても少なく、ほとんどのコマンドに代替策があります。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<p><em>変更なし。</em></p>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li><code>:-moz-selection</code> の接頭辞を削除して {{cssxref("::selection")}} になりました ({{bug(509958)}}).</li>
 <li>{{cssxref("&lt;resolution&gt;")}} 型で、<code>x</code> を単位としてサポートしました ({{bug(1460655)}})。</li>
 <li>{{cssxref("shape-margin")}}、{{cssxref("shape-outside")}}、{{cssxref("shape-image-threshold")}} をデフォルトで有効化しました ({{bug(1457297)}})。</li>
</ul>

<h4 id="Removals_2" name="Removals_2">廃止</h4>

<ul>
 <li><code>-moz-box</code> および <code>-moz-inline-box</code> を除く、<a href="/ja/docs/Web/CSS/display#XUL_values">XUL の <code>display</code> の値</a> を、XUL 以外のドキュメントでは廃止しました ({{bug(1288572)}})。</li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<p><em>変更なし。</em></p>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>{{jsxref("WebAssembly.Global()")}} コンストラクターを、WebAssembly のグローバル変数とともにサポートしました ({{bug(1464656)}})。</li>
 <li>{{jsxref("Array.prototype.flat()")}} および {{jsxref("Array.prototype.flatMap()")}} メソッドをデフォルトで有効化しました ({{bug(1435813)}})。</li>
 <li>コンテキスト固有のメタデータを JavaScript モジュールに公開するための、<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/import.meta">import.meta</a></code> プロパティを実装しました ({{bug(1427610)}})。</li>
 <li>JavaScript の <a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals">文字列リテラル</a> で、U+2028 LINE SEPARATOR や U+2029 PARAGRAPH SEPARATOR の文字を直接含めることが可能になりました。この結果、{{jsxref("JSON")}} 構文が JavaScript リテラル構文のサブセットになりました ({{bug(1435828)}} および TC39 提案 <a href="https://github.com/tc39/proposal-json-superset">json-superset</a>)。</li>
 <li><a href="/ja/docs/Web/JavaScript/Typed_arrays">型付き配列</a> の境界を超える添字に対して、{{jsxref("Reflect.defineProperty()")}} および {{jsxref("Reflect.set()")}} が <code>true</code> ではなく <code>false</code> を返すようになりました ({{bug(1308735)}})。</li>
</ul>

<h4 id="Removals_3" name="Removals_3">廃止</h4>

<ul>
 <li><code>DOMPoint</code> および <code>DOMPointReadOnly</code> コンストラクターで <code>DOMPointInit</code> 型の入力引数をサポートしなくなりました。値は <code>x</code>、<code>y</code>、<code>z</code>、<code>w</code> の引数で指定しなければなりません ({{bug(1186265)}})。</li>
 <li>{{domxref("URL.createObjectURL()")}} メソッドで、{{domxref("MediaStream")}} を表す URL のオブジェクトを作成できなくなりました。単純に {{domxref("HTMLMediaElement.srcObject")}} を <code>MediaStream</code> に直接設定できるようになったため、この機能はかなりの間すたれていました ({{bug(1454889)}})。</li>
</ul>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="New_APIs" name="New_APIs">新規 API</h4>

<ul>
 <li>{{domxref("Web_Speech_API", "Speech Synthesis API (Text-to-Speech)", "", "1")}} を、Android 版 Firefox でデフォルトで有効化しました ({{bug(1463496)}})。</li>
</ul>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
 <li>{{domxref("DOMPointReadOnly")}} インターフェイスで {{domxref("DOMPointReadOnly.fromPoint()")}} 静的関数をサポートしました。これは {{domxref("DOMPointInit")}} と互換性があるディクショナリーから新しい座標オブジェクトを作成するものであり、{{domxref("DOMPoint")}} オブジェクトを含みます。この関数は {{domxref("DOMPoint")}} でも使用できます ({{bug(1186265)}})。</li>
 <li>互換性の理由で、{{domxref("Event.srcElement")}} プロパティをサポートしました。これは {{domxref("Event.target")}} の別名です ({{bug(453968)}})。</li>
 <li>{{domxref("Navigator.registerProtocolHandler()")}} が、安全なコンテキストに限り呼び出し可能になりました ({{bug(1460506)}})。</li>
 <li>しばらく前から廃止扱いであった {{domxref("Navigator.registerContentHandler()")}} メソッドが、完全に削除するための準備としてデフォルトで無効になりました ({{bug(1460481)}})。</li>
 <li>{{domxref("DataTransfer.DataTransfer", "DataTransfer()")}} コンストラクターを実装しました ({{bug(1351193)}})。</li>
 <li>{{domxref("Document.domain")}} が <code>null</code> を返さないようになりました ({{bug(819475)}})。ドメインを識別できないとき、<code>domain</code> は <code>null</code> ではなく空文字列を返します。</li>
 <li>時間を追跡し続けている間に、コンソールのタイマーの現在の値を表示するための {{domxref("Console.timeLog()")}} メソッドを追加しました ({{bug(1458466)}})。</li>
 <li>コンソールのカウンターの値をリセットする {{domxref("Console.countReset()")}} を追加しました ({{bug(1459279)}})。</li>
</ul>

<h4 id="DOM_events" name="DOM_events">DOM イベント</h4>

<p><em>変更なし。</em></p>

<h4 id="Service_workers" name="Service_workers">Service workers</h4>

<p><em>変更なし。</em></p>

<h4 id="Media_Web_Audio_and_WebRTC" name="Media_Web_Audio_and_WebRTC">メディア、Web Audio、WebRTC</h4>

<ul>
 <li>設定項目 <code>"media.autoplay.enabled"</code> で、動画メディアだけでなく音声メディアの自動再生も制御するようになりました ({{bug(1413098)}})。</li>
 <li>{{domxref("ChannelSplitterNode")}} で、仕様書に従ってデフォルトで 6 つのチャンネルを持ち、<code>channelInterpretation</code> に <code>"discrete"</code> を設定、さらに <code>channelCountMode</code> に <code>"explicit"</code> を正しく設定するように修正しました ({{bug(1456265)}})。</li>
</ul>

<h4 id="Removals_4" name="Removals_4">廃止</h4>

<ul>
 <li>{{event("userproximity")}} および {{event("deviceproximity")}} イベント ({{domxref("UserProximityEvent")}} および {{domxref("DeviceProximityEvent")}} もご覧ください) を設定項目 <code>device.sensors.proximity.enabled</code> で、デフォルトで無効化しました ({{bug(1462308)}})。</li>
 <li><code>devicelight</code> イベント (<code>DeviceLightEvent</code> もご覧ください) を設定項目 <code>device.sensors.ambientLight.enabled</code> で、デフォルトで無効化しました ({{bug(1462308)}})。</li>
 <li>{{event("DOMSubtreeModified")}} および {{event("DOMAttrModified")}} <a href="/ja/docs/Web/Guide/Events/Mutation_events">ミューテーションイベント</a> は、CSSOM によって {{htmlattrxref("style")}} 属性が変更されたときに発生しないようになりました ({{bug(1460295)}}).</li>
 <li>{{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}} のサポートを廃止しました ({{bug(1408301)}})。</li>
 <li>{{domxref("CSSValue")}}、{{domxref("CSSPrimitiveValue")}}、{{domxref("CSSValueList")}} のサポートを廃止しました ({{bug(1459871)}})。</li>
 <li>{{domxref("window.getComputedStyle()")}} が表示するものがない <code>Window</code> で呼び出されたときに、<code>null</code> を返さないようになりました ({{bug(1467722)}})。</li>
</ul>

<ul>
</ul>

<ul>
</ul>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<h4 id="Removals_5" name="Removals_5">廃止</h4>

<ul>
 <li>CSP の非推奨ディレクティブである {{CSP("referrer")}} を削除しました。代わりに {{HTTPHeader("Referrer-Policy")}} ヘッダーを使用してください ({{bug(1302449)}})。</li>
</ul>

<h3 id="Security" name="Security">セキュリティ</h3>

<p><em>変更なし。</em></p>

<h3 id="Plugins" name="Plugins">プラグイン</h3>

<p><em>変更なし。</em></p>

<h3 id="WebDriver_conformance_(Marionette)" name="WebDriver_conformance_(Marionette)">WebDriver conformance (Marionette)</h3>

<h4 id="New_features" name="New_features">新機能</h4>

<ul>
 <li><code>WebDriver:ElementSendKeys</code> が、ファイルのアップロードについて WebDriver に適合しました ({{bug(1448792)}})。</li>
 <li><code>WebDriver:Get</code>、<code>WebDriver:Back</code>、<code>WebDriver:Forward</code>、<code>WebDriver:Refresh</code>、<code>WebDriver:Close</code> コマンドで、<code>beforeunload</code> イベントによって発生するユーザープロンプトが自動的に閉じられるようになりました ({{bug(1434872)}})。</li>
 <li><kbd>Ctrl</kbd> + <code>Click</code> の <code>WebDriver:PerformActions</code> が、{{event("contextmenu")}} イベントを合成します ({{bug(1421323)}})。</li>
</ul>

<h4 id="API_changes" name="API_changes">API の変更点</h4>

<ul>
 <li><code>getWindowPosition</code>、<code>setWindowPosition</code>、<code>getWindowSize</code>、<code>setWindowSize</code> を含む、廃止されたエンドポイントを削除しました ({{bug(1348145)}})。</li>
 <li><code>null</code> データとともに成功を返す WebDriver コマンドが、空のディレクトリーを返すようになりました ({{bug(1461463)}})。</li>
</ul>

<h4 id="Bug_fixes" name="Bug_fixes">バグ修正</h4>

<ul>
 <li><a href="/ja/docs/Web/WebDriver/WebElement">WebElement</a> コレクションに対して、<code>WebDriver:ExecuteScript</code> が周期的に参照エラーを起こす問題を修正しました ({{bug(1447977)}})。</li>
 <li><code>pointerMove</code> または <code>pause</code> のアクションを実行するとハングアップが発生して、コマンドの応答がなくなる問題を修正しました ({{bug(1467743)}}、{{bug(1447449)}})。</li>
</ul>

<h3 id="Other" name="Other">その他</h3>

<p><em>変更なし。</em></p>

<h2 id="Changes_for_add-on_developers" name="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>

<h3 id="API_changes_2" name="API_changes_2">API の変更点</h3>

<ul>
 <li>TLS 接続を詳しく調査するための {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API を追加しました ({{bug(1322748)}})。</li>
 <li>新しいタブを開く場所を設定する {{WebExtAPIRef("browserSettings.newTabPosition")}} を追加しました ({{bug(1344749)}})。</li>
 <li>{{WebExtAPIRef("windows.get()")}}、{{WebExtAPIRef("windows.getCurrent()")}}、{{WebExtAPIRef("windows.getLastFocused()")}} で <code>windowTypes</code> が非推奨になりました ({{bug(1419132)}})。</li>
 <li>ウィンドウごとにブラウザーのアクションを変更可能になりました ({{bug(1419893)}})。</li>
</ul>

<h3 id="Manifest_changes" name="Manifest_changes">マニフェストの変更点</h3>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action">sidebar_action</a></code> マニフェストキーで、インストール時に自動的にサイドバーを開くか否かを拡張機能で制御するための <code>open_at_install</code> プロパティを追加しました ({{bug(1460910)}})。</li>
 <li>さまざまなマニフェストキーで <code>browser_style</code> プロパティを変更しました:
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action">page_action</a></code> および <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code> で、既定値が <code>false</code> になりました。</li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action">sidebar_action</a></code> および <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui">options_ui</a></code> で、既定値が <code>true</code> になりました。</li>
  </ul>
 </li>
</ul>

<h3 id="Theme_changes" name="Theme_changes">テーマの変更点</h3>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme">theme</a></code> マニフェストキーで、タブのセパレーターの色を拡張機能から変更可能にする <code>tab_background_separator</code> プロパティを追加しました ({{bug(1459455)}})。</li>
</ul>

<h3 id="Removals_6" name="Removals_6">廃止</h3>

<ul>
 <li>パッケージ化されていないサイドロード拡張機能のサポートを廃止しました ({{bug(1385057)}}).</li>
 <li>テストのため拡張機能を一時的に読み込んでいるときに、<code>browser_style</code> に関する警告を表示しないようになりました ({{bug(1404724)}})。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.org/en-US/firefox/62.0/releasenotes/">Firefox 62.0, See All New Features, Updates and Fixes</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(61)}}</p>
