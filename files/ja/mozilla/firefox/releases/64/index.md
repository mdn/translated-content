---
title: Firefox 64 for developers
slug: Mozilla/Firefox/Releases/64
tags:
  - '64'
  - Firefox
  - Mozilla
  - Release
translation_of: Mozilla/Firefox/Releases/64
---
<div>{{FirefoxSidebar}}</div>

<p class="summary">Firefox 64 は、米国時間 2018 年 12 月 11 日 にリリースされました。このページでは、開発者に影響する Firefox 64 の変更点をまとめています。</p>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li><a href="/ja/docs/Tools/Accessibility_inspector#Highlighting_of_UI_items">アクセシビリティインスペクターの情報バー</a> が、ページ上のテキストや画像の色のコントラスト比に関する情報を表示するようになりました ({{bug(1473037)}})。</li>
 <li><a href="/ja/docs/Tools/Responsive_Design_Mode">レスポンシブデザインモード</a> で選択したデバイスが、セッションをまたいで保存されるようになりました ({{bug(1248619)}})。</li>
 <li><a href="/ja/docs/Tools/Network_Monitor">ネットワークモニター</a> で、<a href="/ja/docs/Mozilla/Firefox/Privacy/Tracking_Protection">トラッキング防止</a> の影響を受ける可能性があるリソースに印をつけるようになりました ({{bug(1333994)}})。</li>
 <li><a href="/ja/docs/Tools/Web_Console">ウェブコンソール</a> で、コードの入力や評価の機能が向上しました:
  <ul>
   <li>コンソールの式の <a href="/ja/docs/Tools/Web_Console/The_command_line_interpreter#Autocomplete">オートコンプリート</a> が、大文字・小文字を区別しないようになりました ({{bug(672733)}})。</li>
   <li>bash のような reverse search によって <a href="/ja/docs/Tools/Web_Console/The_command_line_interpreter#Command_history">コンソールの式の履歴</a> をたどれるようになりました ({{bug(1024913)}})。</li>
   <li>コンソールで <a href="/ja/docs/Tools/Web_Console/The_command_line_interpreter">評価されたコード</a> が、入力・出力ともに構文強調を行うようになりました ({{bug(1463669)}})。</li>
  </ul>
 </li>
 <li><a href="/ja/docs/Tools/Debugger">JavaScript デバッガー</a> のステップ実行の機能も向上しました:
  <ul>
   <li>ステップ実行中は <a href="/ja/docs/Tools/Debugger/UI_Tour#Scopes">展開された変数</a> を維持するようになりました ({{bug(1491471)}})。</li>
   <li>関数の <a href="/ja/docs/Tools/Debugger/How_to/Step_through_code">ステップアウト</a> で、戻り値をスキップするようになりました ({{bug(923975)}})。</li>
  </ul>
 </li>
</ul>

<h4 id="Removals" name="Removals">廃止</h4>

<ul>
 <li>開発ツールバー/ GCLI を削除しました ({{bug(1429421)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<p><em>変更なし。</em></p>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Scrollbars">CSS Scrollbars</a> 仕様の機能をデフォルトで有効化しました ({{bug(1492012)}})。</li>
 <li><code><a href="/ja/docs/Web/CSS/@media/pointer">pointer:coarse</a></code> を含む、Interaction Media Features を実装しました ({{bug(1035774)}})。<code><a href="/ja/docs/Web/CSS/@media/any-pointer">any-pointer</a></code> および <code><a href="/ja/docs/Web/CSS/@media/any-hover">any-hover</a></code> の実装については、{{bug(1483111)}} をご覧ください。</li>
 <li><code><a href="/ja/docs/Web/CSS/@media/prefers-reduced-motion">prefers-reduced-motion</a></code> メディア特性を Android 版 Firefox でサポートしました ({{bug(1478505)}})。</li>
 <li>CSS の {{cssxref("&lt;gradient&gt;")}} 値で複数の color stop を持つ構文をサポートしました。例えば <code>yellow 25%, yellow 50%</code> を <code>yellow 25% 50%</code> と書くことができます ({{bug(1352643)}})。</li>
 <li>{{cssxref("text-transform")}} プロパティで <code>full-size-kana</code> 値を受け入れるようになりました ({{bug(1498148)}})。</li>
 <li>ウェブ互換性の問題を緩和するため、{{cssxref("appearance", "-webkit-appearance")}} をサポートしました ({{bug(1368555)}})。</li>
 <li>上記の更新に関連して、Firefox 固有の <code>-moz-appearance</code> の大半の値を削除しました ({{bug(1496720)}})。</li>
 <li>{{htmlelement("legend")}} 要素で {{cssxref("display")}}: <code>list-item</code> をサポートしました ({{bug(1486602)}})。</li>
 <li>{{cssxref("offset-path")}} で使用可能な SVG の <code>path()</code> がアニメーション可能になりました ({{bug(1486094)}})。</li>
 <li>セレクターの羅列やグループに <code>-webkit-</code> 接頭辞を持つ疑似要素が含まれるとき、疑似要素がセレクターを無効化しないようになりました (詳しくは {{bug(1424106)}}、またこの機能の有効化について {{bug(1486325)}} をご覧ください)。</li>
</ul>

<h4 id="Removals_2" name="Removals_2">廃止</h4>

<ul>
 <li>{{CSSxRef("display")}} の非標準の値である <a href="/ja/docs/Mozilla/Gecko/Chrome/CSS/display-xul"><code style="white-space: nowrap;">-moz-box</code> および <code style="white-space: nowrap;">-moz-inline-box</code></a> が、ウェブコンテンツで使用できなくなりました ({{bug(1496961)}})。</li>
 <li>非標準の {{CSSxRef("::-moz-tree")}} <a href="/ja/docs/Web/CSS/Pseudo-elements" style="white-space: nowrap;">疑似要素</a> が、ウェブコンテンツで使用できなくなりました ({{bug(1496961)}})。</li>
 <li>設定項目 <code>layout.css.filters.enabled</code> を削除しました。<a href="/ja/docs/Web/CSS/Filter_Effects">CSS filters</a> は無効化できません ({{bug(1408841)}})。</li>
 <li>{{cssxref("overflow")}} の 2 値構文で block を 1 番目、inline を 2 番目に入れ替えた変更 ({{bug(1481866)}}) を元に戻しました ({{bug(1492567)}})。理由は <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1481866#c14">Bug 1481866 の comment 14</a> をご覧ください。</li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<p><em>変更なし。</em></p>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>{{jsxref("JSON.stringify")}} が正しくない Unicode 文字列を返すのを避けるため、TC39 <a href="https://github.com/tc39/proposal-well-formed-stringify">Well-formed JSON.stringify</a> 提案を実装しました ({{bug(1469021)}})。</li>
 <li>Proxy 化した関数を {{jsxref("Function.prototype.toString")}}<code>.call()</code> に渡すことが可能になりました ({{bug(1440468)}})。</li>
 <li>{{jsxref("WebAssembly.Global")}} コンストラクターで、何も値を指定しない場合に型付きの値 0 を使用するようになりました。これは <a href="https://webassembly.github.io/spec/js-api/#defaultvalue"><code>DefaultValue</code> アルゴリズム</a> で示されています ({{bug(1490286)}})。</li>
</ul>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
 <li>{{domxref("Fullscreen_API", "Fullscreen API", "", "1")}} に関して、いくつかの変更を施しました:
  <ul>
   <li>API の接頭辞を削除しました ({{bug(1269276)}})。</li>
   <li>{{domxref("Element.requestFullscreen()")}} および {{domxref("Document.exitFullscreen()")}} メソッドが、モード変更が完了したときに解決する {{jsxref("Promise")}} を返すようになりました ({{bug(1188256)}}、{{bug(1491212)}})。</li>
   <li>以前は {{domxref("fullscreenchange")}} および {{domxref("fullscreenerror")}} イベントが始めに {{domxref("Document")}} へ、次に {{domxref("Element")}} へ発行されていました。これを逆にして、要素が始めにイベントを受けるようになりました。これは最新の仕様書や Google Chrome の動作に一致します ({{bug(1375319)}})。</li>
  </ul>
 </li>
 <li>{{domxref("WebVR_API", "WebVR API", "", "1")}} (1.1) を macOS で再び有効化しました ({{bug(1476091)}})。</li>
 <li>{{domxref("Window.screenLeft")}} および {{domxref("Window.screenTop")}} を、それぞれ {{domxref("Window.screenX")}} および {{domxref("Window.screenY")}} の別名として実装しました ({{bug(1498860)}})。</li>
 <li>{{domxref("XMLHttpRequest.getAllResponseHeaders()")}} メソッドが、仕様書に従ってヘッダー名をすべて小文字で返すようになりました ({{bug(1398718)}})。</li>
 <li>古い <code>HTMLAllCollection</code> インターフェイスを、最近の <a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">仕様書の更新</a> に従って更新しました ({{bug(1398354)}})。</li>
 <li>プライバシー保護のため、{{domxref("Navigator.buildID")}} で固定値のタイムスタンプが返るようになりました ({{bug(583181)}})。</li>
 <li>以下の {{domxref("Document.execCommand()")}} UI 機能コマンドを、デフォルトで無効にしました ({{bug(1490641)}}):
  <ul>
   <li><code>enableObjectResizing</code></li>
   <li><code>enableInlineTableEditing</code></li>
   <li><code>enableAbsolutePositionEditor</code></li>
  </ul>
 </li>
</ul>

<h4 id="Service_workers" name="Service_workers">Service workers</h4>

<ul>
 <li>{{domxref("ServiceWorkerContainer.startMessages()")}} メソッドを実装しました ({{bug(1263734)}})。</li>
</ul>

<h4 id="Media_Web_Audio_and_WebRTC" name="Media_Web_Audio_and_WebRTC">メディア、Web Audio、WebRTC</h4>

<ul>
 <li>{{domxref("PannerNode.refDistance")}}、{{domxref("PannerNode.maxDistance")}}、{{domxref("PannerNode.rolloffFactor")}}、{{domxref("PannerNode.coneOuterGain")}} プロパティが、受け入れ可能な範囲を超える値が設定されたときに、正しく例外を発生させるようになりました ({{bug(1487963)}})。</li>
 <li>{{domxref("RTCRtpSender.setParameters()")}} で変更した {{domxref("RTCRtpEncodingParameters")}} の設定は、呼び出し中にに更新されませんでした。これらが再ネゴシエーションなしで即座に更新するようになりました ({{bug(1253499)}})。</li>
 <li>{{domxref("RTCIceCandidateStats.relayProtocol")}} を実装しました。これは {{domxref("RTCIceCandidateStats.mozLocalTransport")}} を標準化したものであり、こちらは非推奨になりました ({{bug(1435789)}})。</li>
 <li>自動利得制御 (AGC) をデフォルトで有効にしました。これは設定項目 <code>media.getusermedia.agc_enabled</code> で変更できます ({{bug(1496714)}})。</li>
</ul>

<h4 id="Removals_3" name="Removals_3">廃止</h4>

<ul>
 <li>ウェブ互換性の問題を緩和するために Firefox 63 で追加した {{domxref("Window.event")}} プロパティで別の問題が発覚したため、設定 (<code>dom.window.event.enabled</code>) で制御するようにして、Release 版はデフォルトで無効化しました ({{bug(1493869)}})。注記: これは実際には Firefox 63 のリリースサイクルの後期に実施しましたが、念のためここで言及します。</li>
 <li>{{domxref("LocalMediaStream")}} インターフェイスと、その <code>stop()</code> メソッドを削除しました ({{bug(1258143)}})。このメソッドは <code>LocalMediaStream</code> の非推奨化によって使用できなくなりました。全体のストリームを停止する方法については {{SectionOnPage("/ja/docs/Web/API/MediaStreamTrack/stop", "Stopping a video stream")}} をご覧ください。</li>
 <li><code>AudioStreamTrack</code> および <code>VideoStreamTrack</code> インターフェイスを削除しました。これらはしばらく前から非推奨でした ({{bug(1377146)}})。この機能は {{domxref("MediaStreamTrack")}} に統合されました。トラックは {{domxref("MediaStreamTrack.kind", "kind")}} プロパティの値で、<code>audio</code> や <code>video</code> といった値で識別します。</li>
</ul>

<h3 id="Security" name="Security">セキュリティ</h3>

<ul>
 <li>シマンテックの CA を失効させる計画を実装しました ({{bug(1409257)}} を参照。詳しくは <a href="https://groups.google.com/forum/#!topic/mozilla.dev.security.policy/FLHRT79e3XE/discussion">Mozilla’s Plan for Symantec Roots</a> の議論もご覧ください)。</li>
 <li>{{httpheader("Referrer-Policy")}} を、スタイルシートで読み込むリソースの制御で使用可能になりました ({{bug(1330487)}})。詳しくは {{SectionOnPage("/ja/docs/Web/HTTP/Headers/Referrer-Policy", "Integration with CSS")}} をご覧ください。</li>
</ul>

<h3 id="Plugins" name="Plugins">プラグイン</h3>

<p><em>変更なし</em></p>

<h3 id="WebDriver_conformance_(Marionette)" name="WebDriver_conformance_(Marionette)">WebDriver conformance (Marionette)</h3>

<h4 id="API_changes" name="API_changes">API の変更点</h4>

<ul>
 <li><code>Marionette:</code>、<code>L10n:</code>、<code>Addon:</code> の接頭辞を持たない、非推奨のコマンドエンドポイント (<code>singeTap</code> を含む) を削除しました ({{bug(1504478)}}、{{bug(1504940)}})。</li>
</ul>

<h4 id="Bug_fixes" name="Bug_fixes">バグ修正</h4>

<ul>
 <li><code>WebDriver:PerformActions</code> で、<code>Shift</code> キーと合成したイベントが大文字にならない問題を修正しました ({{bug(1405370)}})。</li>
 <li>コンテンツプロセス内のタブがナビゲーション中に複数回変化したとき、<code>WebDriver:Navigate</code> がハングアップする場合がある問題を修正しました ({{bug(1504807)}})。</li>
 <li>パフォーマンスを向上させるため、および Firefox のメモリー使用量を削減するために、新しいタブやウィンドウがデフォルトで読み込むページを <code>about:newtab</code> から <code>about:blank</code> に変更しました ({{bug(1506643)}})。</li>
 <li>さまざまなページで表示されて要素との対話を失敗させていた、コンテンツブロックを紹介するパネルをデフォルトで無効にしました ({{bug(1488826)}})。</li>
</ul>

<h2 id="Changes_for_add-on_developers" name="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>

<h3 id="API_changes" name="API_changes">API の変更点</h3>

<h4 id="Menus" name="Menus">メニュー</h4>

<ul>
 <li>拡張機能で独自のコンテキストメニューを設定するために <code>contextmenu</code> DOM イベントから呼び出すことが可能な、<code>browser.menus.overrideContext()</code> API を新設しました。この API は、拡張機能が Firefox のすべてのデフォルトのメニュー項目を隠して、独自のコンテキストメニューの UI を提供することを可能にします。このコンテキストメニューは、拡張機能が提供する複数のトップレベルのメニュー項目で構成され、任意で別の拡張機能のタブやブックマークのコンテキストメニューを含むこともできます。詳しくは <a href="https://blog.mozilla.org/addons/2018/11/08/extensions-in-firefox-64/#cm">こちらのブログ記事</a> をご覧ください。

  <ul>
   <li><code>browser.menus.overrideContext()</code> を実装しました ({{bug(1280347)}})。</li>
   <li>デフォルトのコンテキストメニューを隠すために使用できる <code>showDefaults: false</code> オプションを実装しました ({{bug(1367160)}})。</li>
   <li><code>browser.menus.overrideContext()</code> が使用されていても、<code>moz-extension://</code> 文書 URL をマッチさせるために <code>documentURLPatterns</code> を使用できるようになりました。この方法は、独自のメニュー項目を特定の文書に限定させることを確実にできます ({{bug(1498896)}})。</li>
  </ul>
 </li>
 <li>{{WebExtAPIRef("menus.create()")}} および {{WebExtAPIRef("menus.update()")}} の新しい <code>viewTypes</code> プロパティを使用して、アドオンでコンテキストメニューを表示可能にするかを制限できるようになりました ({{bug(1416839)}})。</li>
 <li>{{WebExtAPIRef("menus.update()")}} が、既存のメニュー項目のアイコンを更新できるようになりました ({{bug(1414566)}})。</li>
 <li>メニュー項目がクリックされたとき、どのマウスボタンを使用したかを拡張機能で検出可能になりました。これは {{WebExtAPIRef("menus.OnClickData")}} の新しい <code>button</code> プロパティを使用して判断できます ({{bug(1469148)}})。</li>
</ul>

<h4 id="Windows" name="Windows">ウィンドウ</h4>

<ul>
 <li>{{WebExtAPIRef("windows.create()")}} メソッドで新たに <code>cookieStoreId</code> オプションが使用可能になりました。これはウィンドウが開かれたときに作成されたすべてのタブで使用する <code>CookieStoreId</code> を指定します ({{bug(1393570)}})。</li>
</ul>

<h4 id="Privacy" name="Privacy">プライバシー</h4>

<ul>
 <li>{{WebExtAPIRef("privacy.websites")}} の <code>cookieConfig</code> プロパティは、<code>behavior</code> プロパティを受け入れ可能なオブジェクトです。このプロパティが、新たな値 <code>reject_trackers</code> をとれるようになりました。これは、拡張機能にトラッキング Cookie を拒否するよう指示します ({{bug(1493057)}}).</li>
</ul>

<h4 id="devtools.panels_API" name="devtools.panels_API">devtools.panels API</h4>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels/elements">devtools.panels.elements</a></code> の <code>Sidebar.setPage()</code> メソッドをサポートしました ({{bug(1398734)}})。</li>
</ul>

<h3 id="Manifest_changes" name="Manifest_changes">マニフェストの変更点</h3>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action">page_action</a></code> マニフェストキーの新しいプロパティである <code>pinned</code> で、拡張機能をインストールする際にロケーションバーへページアクションをピン止めするかを制御できるようになりました ({{bug(1494135)}})。</li>
 <li>Windows のネイティブマニフェストで、レジストリキーを始めに 32 ビットのレジストリビュー (<a class="external external-icon" href="https://en.wikipedia.org/wiki/WoW64#Registry_and_file_system" rel="noopener">Wow6432Node)</a> で確認して、そのあとに "ネイティブ" のレジストリビューを確認します。アプリケーションで適切なビューを使用してください ({{bug(1494709)}})。</li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides">chrome_settings_overrides</a></code> フィールドの <code>search_provider</code> オブジェクトが、新たに <code>suggest_url</code>、<code>suggest_url_post_params</code> ({{bug(1486819)}})、 <code>search_url_post_params</code> プロパティを持てるようになりました。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.org/en-US/firefox/64.0/releasenotes/">Firefox 64.0, See All New Features, Updates and Fixes</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(64)}}</p>
