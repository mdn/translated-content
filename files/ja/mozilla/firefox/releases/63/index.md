---
title: Firefox 63 for developers
slug: Mozilla/Firefox/Releases/63
tags:
  - '63'
  - Firefox
  - Mozilla
  - Release
translation_of: Mozilla/Firefox/Releases/63
---
<div>{{FirefoxSidebar}}</div>

<p class="summary">Firefox 63 は、米国時間 2018 年 10 月 23 日 にリリースされました。このページでは、開発者に影響する Firefox 63 の変更点をまとめています。</p>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li><a href="/ja/docs/Tools/Page_Inspector">インスペクター</a> のフォントタブに、ページ上のフォントの設定を簡単に確認および編集できるエディターを追加しました。詳しくは <a href="/ja/docs/Tools/Page_Inspector/How_to/Edit_fonts">フォントを編集する</a> をご覧ください。</li>
 <li><a href="/ja/docs/Tools/Accessibility_inspector">アクセシビリティインスペクター</a> をデフォルトで有効化しました ({{bug(1482454)}})。</li>
 <li><a href="/ja/docs/Tools/Accessibility_inspector">アクセシビリティインスペクター</a> でオブジェクトにマウスポインターを載せると、<a href="/ja/docs/Tools/Accessibility_inspector#Highlighting_of_UI_items">アイテムを強調表示</a> して、ページ上の情報バーにアイテムのロールや名前を表示するようになりました ({{bug(1473030)}})。</li>
 <li><a href="/ja/docs/Tools/Web_Console">ウェブコンソール</a> で、コマンドラインをコンソール出力の直後に表示するようになりました ({{bug(1136299)}})。</li>
 <li><a href="/ja/docs/Tools/Network_Monitor">ネットワークモニター</a> で、URL が既知のトラッカーに属することを示すアイコンを追加しました。<a href="/ja/docs/Tools/Network_Monitor/request_list#Security_icons">セキュリティアイコン</a> をご覧ください ({{bug(1333994)}})。</li>
 <li><code>devtools.aboutdebugging.showSystemAddons</code> の既定値が <code>false</code> になりました。これは、<code>about:debugging</code> ページにシステムアドオンを表示しないことを意味します。<code>about:config</code> で、この設定を変更できます ({{bug(1425347)}})。</li>
 <li><a href="/ja/docs/Tools/Responsive_Design_Mode">レスポンシブデザインモード</a> のツールバーをわかりやすくして、ビューポートを左寄せにするオプションを追加しました。</li>
 <li>ページインスペクターに、カスタム要素の <a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Custom_element_definition">クラス定義へのリンク</a> を表示する機能を追加しました ({{bug(1443923)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li>{{HTMLElement("img")}} 要素の <code>decoding</code> 属性をサポートしました ({{bug(1416328)}})。{{DOMxRef("HTMLImageElement.decoding")}} もご覧ください。</li>
</ul>

<h4 id="Removals" name="Removals">廃止</h4>

<ul>
 <li><code>sidebar</code> リンクタイプ (<code>rel="sidebar"</code>) のサポートを廃止しました。アンカータグがこの属性を含んでいても、属性が無視されます ({{bug(1452645)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>{{Cssxref(":defined")}} 疑似クラスをサポートしました ({{bug(1331334)}})。</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox#The_gap_properties">Flexbox レイアウト</a> で {{cssxref("row-gap")}}、{{cssxref("column-gap")}}、{{cssxref("gap")}} をサポートしました ({{bug(1398483)}})。</li>
 <li><a href="/ja/docs/Web/CSS/@media/-webkit-device-pixel-ratio">webkit 接頭辞付きの画素密度に関する @media クエリー</a> のサポートを再び有効化しました ({{bug(1444139)}})。</li>
 <li>Firefox で <a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">CSS Flexible Box レイアウト</a> (Flexbox) の {{cssxref("align-self")}}、{{cssxref("align-content")}}、{{cssxref("align-items")}}、{{cssxref("justify-content")}} プロパティをサポートしました ({{bug(1472843)}})。</li>
 <li>{{cssxref("offset-path")}} の <code>path()</code> 関数を実装しました ({{bug(1429298)}})。</li>
 <li><a href="/ja/docs/Web/CSS/Media_Queries/Using_media_queries#level_4_での構文の拡張">Media Queries Level 4 仕様で改良された構文</a> を実装しました ({{bug(1472843)}})。</li>
 <li><code>offset-*</code> プロパティを {{cssxref("inset-block-start")}}、{{cssxref("inset-block-end")}}、{{cssxref("inset-inline-start")}}、{{cssxref("inset-inline-end")}} に改名しました ({{bug(1464782)}})。</li>
 <li><a href="/ja/docs/Web/CSS/@media/prefers-reduced-motion">prefers-reduced-motion</a> メディア特性をサポートしました ({{bug(1365045)}}、{{bug(1475462)}})。</li>
 <li>{{cssxref("resize")}} プロパティにフロー関連の値 (<code>block</code>、<code>inline</code>) を追加しました ({{bug(1464786)}})。</li>
 <li>{{cssxref("align-self")}}、{{cssxref("align-content")}}、{{cssxref("justify-content")}} で、<code>safe</code> および <code>unsafe</code> 値の flexbox レイアウトを実装しました ({{bug(1297774)}})。</li>
 <li>適切な <a href="/ja/docs/Web/CSS/CSS_Logical_Properties">論理プロパティ</a> がアニメーション可能になりました ({{bug(1309752)}})。</li>
</ul>

<h4 id="Removals_2" name="Removals_2">廃止</h4>

<ul>
 <li><code>offset-block-start</code>、<code>offset-block-end</code>、<code>offset-inline-start</code>、<code>offset-inline-end</code> を削除しました。これらは前述のとおり <code>inset-*</code> に改名されました ({{bug(1464782)}})。</li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<p><em>変更なし。</em></p>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>{{jsxref("Symbol.prototype.description")}} プロパティを実装しました ({{bug(1472170)}})。</li>
 <li>{{JSxRef("Object.fromEntries()")}} メソッドを実装しました ({{bug(1469019)}})。</li>
 <li>undefined であるオブジェクトのプロパティにアクセスしようとしたときのエラーメッセージを改善しました。<code>x</code> が undefined である状況で <code>x.y</code> にアクセスしようとすると、コンソールが従来の <code>TypeError: x is undefined</code> に代わって、より具体的な <code><a href="/ja/docs/Web/JavaScript/Reference/Errors/cant_access_property">x is undefined; can't access its "y" property</a></code> を返します ({{bug(1259822)}})。</li>
</ul>

<h4 id="Removals_3" name="Removals_3">廃止</h4>

<ul>
 <li>WebAssembly Module で、実験的な IndexedDB のシリアライズのサポートを廃止しました ({{bug(1469395)}})。</li>
</ul>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="New_APIs" name="New_APIs">新規 API</h4>

<ul>
 <li>Shadow DOM ({{bug(1471947)}}) および Custom Elements ({{bug(1471948)}}) API をデフォルトで有効にしました。詳しくは <a href="/ja/docs/Web/Web_Components">Web components</a> をご覧ください。</li>
 <li>{{domxref("Media_Capabilities_API", "Media Capabilities API", "", "1")}} を実装しました ({{bug(1409664)}})。</li>
 <li>{{domxref("Clipboard", "Async Clipboard API", "", "1")}} を実装して、デフォルトですべてのチャンネルで有効化しました。Chrome および Firefox では現在 {{domxref("Clipboard.writeText", "writeText()")}} および {{domxref("Clipboard.readText", "readText()")}} メソッドのみ実装しています。ただし、<code>readText()</code> が <a href="/ja/docs/Mozilla/Add-ons/WebExtensions">ブラウザー拡張機能</a> に限り使用可能であることが Chrome とは異なります。</li>
 <li>{{domxref("SecurityPolicyViolationEvent")}} インターフェイスをサポートしました。{{HTTPHeader("Content-Security-Policy")}} に違反したときにイベントを送信できます ({{bug(1472661)}})。</li>
</ul>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
 <li>{{domxref("Web_Animations_API", "Web Animations API", "", "1")}} で、以下の部分をデフォルトで有効にしました ({{bug(1476158)}})。
  <ul>
   <li>{{domxref("Animation")}} の {{domxref("Animation.ready", "ready")}} および {{domxref("Animation.finished", "finished")}} プロパティ。<code>Animation</code> オブジェクトの <code>ready</code> および <code>finished</code> {{jsxref("Promise")}} を指定します。</li>
   <li>{{domxref("Animation")}} オブジェクトの {{domxref("Animation.effect", "effect")}} プロパティ。</li>
   <li>{{domxref("KeyframeEffect")}} および {{domxref("AnimationEffect")}} インターフェイス。</li>
  </ul>
 </li>
 <li>{{domxref("Element.toggleAttribute()")}} メソッドを実装しました ({{bug(1469592)}})。</li>
 <li>以前は非標準であった {{domxref("Event.returnValue")}} プロパティを、互換性のためにサポートしました ({{bug(1452569)}})。</li>
 <li>ウェブ互換性を向上するために {{domxref("Window.event")}} プロパティを実装しました。現在は標準化されています ({{bug(218415)}})。ただし複数のウェブ互換性の問題 (例えば {{bug(1479964)}}) により、すぐに設定項目 <code>dom.window.event.enabled</code> で Nightly 以外のチャンネルでは無効化しました ({{bug(1493869)}})。</li>
 <li>Firefox の動作を Edge や Chrome に合わせるため、{{domxref("NavigatorID.platform", "navigator.platform")}} プロパティが 64 ビット版 Windows で実行している場合でも <code>"Win32"</code> を返すようになりました ({{bug(1472618)}})。</li>
 <li>Firefox 63 より前のバージョンでは、<code>rel="noopener"</code> を持つ新しいウィンドウを開くリンク、および <code><a href="/ja/docs/Web/API/Window/open#noopener">noopener</a></code> 機能を有効にして {{domxref("Window.open()")}} を呼び出した場合にすべてのウィンドウ機能を無効にしており、必要な標準機能を明示的に再有効化しなければなりませんでした。Firefox 63 ではこれらのウィンドウでほかのウィンドウと同じ機能が有効になり、不要な機能を明示的に無効化しなければなりません ({{bug(1419960)}})。</li>
</ul>

<h4 id="DOM_events" name="DOM_events">DOM イベント</h4>

<ul>
 <li>キーボードの<em>右側</em>にある <kbd>Alt</kbd> キーの扱いが、Windows で改善しました。ユーザーの現在のキーボードレイアウトで <kbd>Alt</kbd> キーが <kbd>AltGr</kbd> モディファイアキーにマッピングされている場合に、{{domxref("KeyboardEvent.key")}} が <code>"AltGraph"</code> として値を返します。これは最近 Chrome に導入された動作に合致します ({{bug(900750)}})。</li>
</ul>

<h4 id="Media_Web_Audio_and_WebRTC" name="Media_Web_Audio_and_WebRTC">メディア、Web Audio、WebRTC</h4>

<ul>
 <li>マイクへのアクセスが、同じコンテンツプロセス内でも複数のタブで同時に動作するようになりました ({{bug(1404977)}})。</li>
 <li>{{domxref("RTCDataChannel")}} を、以前からサポートしていた旧来の sctp-sdp-05 データ形式に加えて、sctp-sdp-21 データ形式をサポートするように更新しました。</li>
 <li>Web Audio API の {{domxref("ConstantSourceNode")}} ノード型で、仕様書に合わせるためデフォルトのチャンネル数を 1 から 2 に変更しました ({{bug(1413283)}})。</li>
 <li>{{domxref("Web_Audio_API", "Web Audio API", "", "1")}} の {{domxref("AudioScheduledSourceNode")}} インターフェイス (および拡張によって、このインターフェイスを基にしたすべてのノード) でノードの開始時間として負の値が指定されたときに、正しい例外が発生するようになりました。そのエラーは <code>RangeError</code> です ({{bug(1413284)}})。</li>
 <li>{{domxref("AudioParam")}} オブジェクトの {{domxref("AudioParam.value", "value")}} で許可される最小値と最大値を、それぞれ単精度浮動小数点数で最小の負の値 (-340,282,346,638,528,859,811,704,183,484,516,925,440) と最大の正の値 (+340,282,346,638,528,859,811,704,183,484,516,925,440) に変更しました ({{bug(1476695)}})。</li>
 <li>アクティブなストリームのコーデックを変更できる、{domxref("SourceBuffer.changeType")}} メソッドをデフォルトで有効にしました。これは {{domxref("Media_Source_Extensions_API", "Media Source Extensions API", "", "1")}} の一部です ({{bug(1481166)}})。</li>
 <li>{{domxref("AudioParam.setValueCurveAtTime()")}} メソッドを、引数の値が次第に変わることを示すために浮動小数点数値の配列を受け入れるように更新しました。以前は {{domxref("Float32Array")}} であることが必要でした ({{bug(1421091)}})。</li>
 <li>また {{domxref("AudioParam.setValueCurveAtTime()")}} が、<code>values</code> の配列に有限ではない値が存在する場合に、<code>TypeError</code> を正しく返すようになりました ({{bug(1472095)}})。</li>
 <li>さらに <code>setValueCurveAtTime()</code> で、時間が経過した後に指定した値のカーブに従ってパラメーターが終了したとき、パラメーターの値がカーブの値のリストの最後の値に設定されるようになりました ({{bug(1308436)}})。</li>
 <li>ほかのディクショナリーや仕様書に合わせて、<code>RTCRTPStreamStats</code> ディクショナリーを {{domxref("RTCRtpStreamStats")}} に改名しました ({{bug(1480498)}})。</li>
 <li><code>RTCRtpStreamStats</code> ディクショナリーの {{domxref("RTCRtpStreamStats.kind", "kind")}} プロパティをサポートしました ({{bug(1481851)}})。</li>
 <li>{{domxref("RTCRtpStreamStats")}} ディクショナリーの {{domxref("RTCRtpStreamStats.isRemote", "isRemote")}} プロパティが推奨になりました。Firefox 65 で削除する予定です。このプロパティにアクセスすると、コンソールに警告を表示します。詳しくは <a href="https://blog.mozilla.org/webrtc/getstats-isremote-65/">Advancing WebRTC ブログの投稿</a> をご覧ください ({{bug(1393306)}})。</li>
</ul>

<h4 id="Canvas_and_WebGL" name="Canvas_and_WebGL">Canvas と WebGL</h4>

<ul>
 <li>{{domxref("HTMLCanvasElement.getContext()")}} に、新しい <code>powerPreference</code> コンテキスト属性を追加しました。macOS ではパフォーマンスを重視しない WebGL のアプリケーションやアプレットが、マルチ GPU のシステムで高性能な GPU ではなく低消費電力の GPU を要求することができます ({{bug(1349799)}})。</li>
</ul>

<h4 id="Removals_4" name="Removals_4">廃止</h4>

<ul>
 <li>廃止済みおよび Firefox 限定の非標準メソッドである {{domxref("Window.back()")}} および {{domxref("Window.forward()")}} を削除しました。代わりに {{domxref("History.back", "window.history.back()")}} および {{domxref("History.forward", "window.history.forward()")}} メソッドを使用してください ({{bug(1479486)}})。</li>
 <li>メモリーリークを発生させるおそれがあるため、{{domxref("URL.createObjectURL", "createObjectURL()")}} および {{domxref("URL.revokeObjectURL", "revokeObjectURL()")}} メソッドが {{domxref("ServiceWorker")}} のインスタンスで使用できなくなりました ({{bug(1264182)}})。</li>
 <li>仕様書で非推奨とされたため限定的にサポートしていた、{{domxref("PannerNode")}} のドップラー効果のサポートを Web Audio API から削除しました。{{domxref("AudioListener")}} の {{domxref("AudioListener.dopplerFactor", "dopplerFactor")}} および {{domxref("AudioListener.speedOfSound", "speedOfSound")}} プロパティと、<code>PannerNode</code> の {{domxref("PannerNode.setVelocity", "setVelocity()")}} メソッドを削除しました ({{bug(1148354)}})。</li>
</ul>

<h3 id="CSSOM" name="CSSOM">CSSOM</h3>

<p><em>変更なし。</em></p>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<ul>
 <li>{{HTTPHeader("Clear-Site-Data")}} ヘッダーを実装して、設定で無効化しないようにしました ({{bug(1470111)}})。</li>
</ul>

<h3 id="Security" name="Security">セキュリティ</h3>

<ul>
 <li>サイトで <a href="/ja/docs/Web/HTTP/CSP">Content Security Policy</a> が設定されている場合に、favicon も CSP に従うようになりました ({{bug(1297156)}})。</li>
 <li>CSP の違反レポートを生成するとき、<code>script-src</code> ディレクティブの <code>'report-sample'</code> 式を認識するようになりました。このディレクディブは、違反が発生した場所の短いサンプルをレポートに含めるべきであることを示します。以前は、Firefox は常にサンプルを含めていました ({{bug(1473218)}})。</li>
 <li>Firefox が NSS 3.39 を使用するようになりました ({{bug(1470914)}})。</li>
</ul>

<h3 id="Plugins" name="Plugins">プラグイン</h3>

<p><em>変更なし。</em></p>

<h3 id="WebDriver_conformance_(Marionette)" name="WebDriver_conformance_(Marionette)">WebDriver conformance (Marionette)</h3>

<h4 id="New_features" name="New_features">新機能</h4>

<ul>
 <li>Marionette が <code>WebDriver:NewSession</code> の応答で <code>setWindowRect</code> <a href="/ja/docs/Web/WebDriver/Capabilities">capability</a> を返すようになりました。これは、ブラウザーのウィンドウの移動やリサイズが可能である場合 (例えばモバイルアプリケーション以外の Firefox) に true になります ({{bug(1470659)}})。</li>
 <li><code>unhandledPromptBehavior</code> capability をサポートしました。これは、WebDriver 仕様の特定の <a href="https://w3c.github.io/webdriver/#dfn-user-prompt-handler">prompt behavior</a> を定義できます ({{bug(1264259)}})。</li>
 <li><code>WebDriver:ExecuteScript</code> および <code>WebDriver:ExecuteAsyncScript</code> コマンドに、ユーザープロンプトの処理を追加しました ({{bug(1439995)}})。</li>
</ul>

<h4 id="API_changes" name="API_changes">API の変更点</h4>

<ul>
 <li><code>WebDriver:</code> 接頭辞がない、非推奨のコマンドエンドポイントを削除しました ({{bug(1451725)}})。</li>
 <li><code>WebDriver:NewSession</code> コマンドが、<code>platformName</code> について WebDriver 仕様で定義されている推奨文字列 (<code>linux</code>、<code>mac</code>、<code>windows</code>) を返すようになりました ({{bug(1470646)}})。</li>
</ul>

<h4 id="Bug_fixes" name="Bug_fixes">バグ修正</h4>

<ul>
 <li>Firefox が最前面のアプリケーションではないとき、要素との対話でフォーカスに関するイベントが失われる問題を修正しました ({{bug(1398111)}})。</li>
 <li><code>WebDriver:ReleaseActions</code> がダブルクリックのトラッカーをリセットしないため、一連のアクションで <code>pointerDown</code> および <code>pointerUp</code> アクションを実行するとダブルクリックが発生する問題を修正しました ({{bug(1422583)}})。</li>
 <li><code>pause</code> アクションを繰り返し実行するとハングアップする問題を修正しました ({{bug(1447449)}})。</li>
 <li><code>WebDriver:ExecuteScript</code> や <code>WebDriver:ExecuteAsyncScript</code> が返す要素コレクションで循環参照エラーが発生する場合がある問題を修正しました ({{bug(1447977)}})。</li>
 <li><code>WebDriver:AcceptAlert</code> および <code>WebDriver:DismissAlert</code> コマンドの競合を防ぐため、ユーザープロンプトが閉じられるまで待つようになりました ({{bug(1479368)}})。</li>
 <li>フレームのスクリプトから発生したログが <code>MarionettePrefs.logLevel</code> で制限されず、すべて記録される問題を修正しました ({{bug(1482829)}})。</li>
 <li>幅または高さが 32767 ピクセルを超えるウィンドウのスクリーンショットを取得するとき、<code>WebDriver:TakeScreenshot</code> でエラーが発生する問題を修正しました ({{bug(1485730)}})。</li>
 <li>送信したテキストが空文字列である場合に、<code>WebDriver:SendAlertText</code> がユーザープロンプトの値を置き換えない問題を修正しました ({{bug(1486485)}})。</li>
</ul>

<h3 id="Other" name="Other">その他</h3>

<ul>
 <li>{{domxref("PerformanceObserver.observe()")}} の動作を、指定したエントリータイプの配列に有効な値が見つからない場合や、配列が空または存在しない場合に、単に何もしないように修正しました。以前は、Firefox は誤って <code>TypeError</code> を発生させていました ({{bug(1403027)}})。</li>
 <li><a href="/ja/docs/Web/OpenSearch">OpenSearch</a> で、検索 URL の型として <code>application/json</code> を、<code>application/x-suggestions+json</code> の別名として受け入れるようになりました ({{bug(1425827)}})。</li>
</ul>

<h2 id="Changes_for_add-on_developers" name="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>

<h3 id="API_changes_2" name="API_changes_2">API の変更点</h3>

<h4 id="Theming" name="Theming">テーマ</h4>

<ul>
 <li>{{WebExtAPIRef("browserAction")}} バッジのデフォルトの文字色が、背景とのコントラストを最大化するため、自動的に黒色か白色に設定されるようになりました ({{bug(1474110)}})。</li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme">theme</a></code> マニフェストキーの <code>accentcolor</code> および <code>textcolor</code> プロパティが省略可能になりました ({{bug(1413144)}})。</li>
 <li>{{WebExtAPIRef("browserAction.getBadgeTextColor()")}} および {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} で、ブラウザーのアクションバッジの文字色を取得および設定できるようになりました ({{bug(1424620)}})。</li>
 <li><code>manifest.json</code> のテーマ <code>colors</code> キーで、新しいタブの文字色を設定する <code>ntp_text</code> プロパティと、新しいタブの色を設定する <code>ntp_background</code> プロパティをサポートしました ({{bug(1347204)}})。</li>
 <li>ブックマークサイドバーなど、サイドバーの色をテーマで定義可能になりました ({{bug(1418602)}})。関連プロパティ:
  <ul>
   <li><code>sidebar</code>: サイドバーの背景色。</li>
   <li><code>sidebar_text</code>: サイドバーの文字色。</li>
   <li><code>sidebar_highlight</code>: サイドバーで選択したアイテムの背景色。</li>
   <li><code>sidebar_highlight_text</code>: サイドバーで選択したアイテムの文字色。</li>
  </ul>
 </li>
 <li>{{WebExtAPIRef("management.install()")}} メソッドで、ブラウザー拡張機能が署名付きブラウザーテーマをインストールできます ({{bug(1369209)}})。</li>
</ul>

<h4 id="Search" name="Search">検索</h4>

<ul>
 <li>インストール済みの検索エンジンの一覧を取得したり、それらで検索を行ったりすることが可能な、新しい {{WebExtAPIRef("search")}} API が使用可能になりました ({{bug(1352598)}})。</li>
 <li>{{WebExtAPIRef("topSites.get()")}} で、サイトが返すさまざまなリストのオプションを設定可能な <code>options</code> 引数をサポートしました ({{bug(1445836)}})。</li>
</ul>

<h4 id="Tabs" name="Tabs">タブ</h4>

<ul>
 <li>{{WebExtAPIRef("tabs.onHighlighted")}} で複数選択をサポートしました ({{bug(1474440)}})。</li>
 <li>{{WebExtAPIRef("tabs.highlight")}} で、<code>highlightInfo</code> オブジェクトに省略可能なフィールドである <code>populate</code> を追加しました。既定値は <code>true</code> です。<code>false</code> に設定するとパフォーマンスを向上させるため、返される <code>windows.Window</code> がタブのリストを持たないようになります ({{bug(1489814)}})。</li>
 <li>{{WebExtAPIRef("tabs.update")}} で、<code>updateProperties</code> 引数内に <code>highlighted: true</code> を含むことによる、タブの選択状態の変化をサポートしました ({{bug(1479129)}})。</li>
 <li>{{WebExtAPIRef("tabs.update")}} で、<code>updateProperties</code> 引数内に <code>highlighted: true</code> および <code>active: false</code> を含むことにより、フォーカスがあるタブを変えずにタブの選択状態を変更できるようになりました ({{bug(1486050)}})。</li>
 <li>{{WebExtAPIRef("tabs.query")}} で、複数のタブが選択されている場合に {{WebExtAPIRef("tabs.Tab")}} オブジェクトの配列を返すようになりました ({{bug(1465170)}})。</li>
 <li>{{WebExtAPIRef("tabs.Tab")}} プロパティが、ブラウザーウィンドウでどのタブが選択 (ハイライト) されているかを適切に反映するようになりました。また {{WebExtAPIRef("tabs.highlight")}} で、複数のタブのハイライト状態の変化をサポートしました ({{bug(1464862)}})。</li>
 <li>{{WebExtAPIRef("tabs.onUpdated")}} に渡される <code>extraParameters</code> の <code>isarticle</code> プロパティを <code>isArticle</code> に改名しました。古い名前は残されていますが、非推奨です。この変更は Firefox 62 に適用されました ({{bug(1461695)}})。</li>
 <li>{{WebExtAPIRef('tabs.onUpdated')}} イベントを使用して、<code>changeInfo</code> オブジェクトの <code>attention</code> プロパティでタブがユーザーの注意を引いていることを検出できます ({{bug(1396684)}})。</li>
</ul>

<h4 id="Menus" name="Menus">メニュー</h4>

<ul>
 <li>{{WebExtApiRef("menus")}} API に {{WebExtApiRef("menus.getTargetElement()")}} を追加しました。このメソッドは <code>targetElementId</code> 引数が参照する、クリックされた要素を返します ({{bug(1325814)}})。</li>
 <li>{{WebExtAPIRef("menus.create()")}} で非表示のメニュー項目を作成できるようになりました。また、{{WebExtAPIRef("menus.update()")}} で項目の表示・非表示を切り替えられるようになりました ({{bug(1482529)}})。</li>
 <li>{{WebExtAPIRef("menus")}} API を使用して作成した項目でアクセスキーをサポートしました ({{bug(1320462)}})。</li>
 <li>{{WebExtApiRef("menus.create()")}} および {{WebExtApiRef("menus.update()")}} の <code>targetUrlPatterns</code> 引数で、通常はマッチパターンで許可されないものを含む任意の URL スキームをサポートしました ({{bug(1280370)}})。</li>
 <li>タブのコンテキストメニューがクリックされたとき、そのタブが現在アクティブなタブではない場合でも <a href="/ja/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission">"activeTab" パーミッション</a> が認められるようになりました ({{bug(1446956)}})。</li>
</ul>

<h4 id="Other_2" name="Other_2">その他</h4>

<ul>
 <li>{{WebExtAPIRef("commands.onCommand")}} が <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/User_actions">ユーザー入力</a> として扱われるようになりました ({{bug(1408129)}})。</li>
 <li>{{WebExtAPIRef("webRequest")}} API で、投機的接続のフィルターが可能になりました ({{bug(1479565)}})。</li>
 <li>{{WebExtAPIRef("webRequest.SecurityInfo")}} に <code>keaGroupName</code> および <code>signatureSchemeName</code> プロパティを追加しました。この変更は Firefox 62 に適用されました ({{bug(1471959)}})。</li>
 <li>{{WebExtAPIRef("cookies.Cookie")}} が、Cookie の SameSite 状態を示すプロパティを含むようになりました。{{WebExtAPIRef("cookies.SameSiteStatus")}} 列挙型が SameSite 状態の値を定義します ({{bug(1351663)}})。</li>
 <li>URL のマッチパターンが、"data" URL スキームへ明白にマッチするようになりました ({{bug(1280370)}})。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.org/en-US/firefox/63.0/releasenotes/">Firefox 63.0, See All New Features, Updates and Fixes</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(62)}}</p>
