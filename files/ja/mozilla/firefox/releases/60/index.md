---
title: Firefox 60 for developers
slug: Mozilla/Firefox/Releases/60
tags:
  - '60'
  - Firefox
  - Release Notes
translation_of: Mozilla/Firefox/Releases/60
---
<p class="summary">Firefox 60 は、米国時間 2018 年 5 月 9 日にリリースされました。このページでは、開発者に影響する Firefox 60 の変更点をまとめています。</p>

<h2 id="Stylo_comes_to_Firefox_for_Android_in_60" name="Stylo_comes_to_Firefox_for_Android_in_60">Android 版 Firefox 60 に Stylo を導入</h2>

<p><a href="/ja/Firefox/Releases/57#Firefox_57_Firefox_Quantum">デスクトップ版 Firefox 57 で始めにデフォルトで有効化された</a>、<strong>Quantum CSS</strong> または <strong>Stylo</strong> として知られる <a href="https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/">Firefox の新しい並列処理 CSS エンジン</a> を、Android 版 Firefox で有効化しました。</p>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li>CSS ペインのルールビュー (<a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS">CSS の調査と編集</a> をご覧ください) で精密に値を増減する (0.1 ずつ増減) キーボードショートカットを、Linux および Windows で OS のデフォルトのショートカットと衝突しないようにするため、<kbd>Alt</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd> から <kbd>Ctrl</kbd> + <kbd>↑</kbd>/<kbd>↑</kbd> に変更しました ({{bug("1413314")}})。</li>
 <li>CSS ペインのルールビューで、<a href="/ja/docs/Web/CSS/Using_CSS_variables">CSS 変数名</a> のオートコンプリートが可能になりました ({{bug(1422635)}})。プロパティの値に <code>var(</code> と入力してダッシュ (<code>-</code>) を押下すると、CSS で宣言した変数をオートコンプリートのリストに表示します。</li>
 <li><a href="/ja/docs/Tools/Responsive_Design_Mode">レスポンシブデザインモード</a> で、タッチのシミュレーションを切り替えたときやシミュレーションするユーザーエージェントを変更したときにページを自動的に再読み込みする機能を有効化/無効化できる、<em>Reload when...</em> ドロップダウンメニューを追加しました。詳しくは <a href="/ja/docs/Tools/Responsive_Design_Mode#Controlling_page_reload_behavior">ページ再読み込みの動作を制御する</a> をご覧ください ({{bug(1428816)}})。</li>
 <li>設定項目 <code>view_source.tab</code> を削除しましたので、<a href="/ja/docs/Tools/View_source">ソース表示</a> モードを新しいタブか新しいウィンドウで選ぶことができなくなりました。ページのソースは、常に新しいタブで表示されます ({{bug(1418403)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li><code>designMode</code> および <code>contenteditable</code> の状況で、ブロックレベルの編集ホストの子であるインライン要素またはテキストノードの内部にキャレットがあるときに Enter キーを押下すると、<code>&lt;div&gt;</code> 要素を挿入するようになりました。以前は、<code>&lt;br&gt;</code> 要素を挿入していました。アプリで以前の動作を望む場合は、<code>document.execCommand()</code> で実現できます。詳しくは <a href="/ja/docs/Web/Guide/HTML/Editable_content#Differences_in_markup_generation">マークアップ生成の違い</a> をご覧ください ({{bug(1430551)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>{{cssxref("align-content")}}、{{cssxref("align-items")}}、{{cssxref("align-self")}}、{{cssxref("justify-content")}}、{{cssxref("place-content")}} プロパティの値を、最新の <a href="https://drafts.csswg.org/css-align-3/">CSS Box Alignment Module Level 3</a> 仕様書に従って更新しました ({{bug(1430817)}})。</li>
 <li>{{cssxref("paint-order")}} プロパティを実装しました ({{bug(1426146)}})。</li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<p><em>変更なし。</em></p>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>ECMAScript 2015 モジュールを、デフォルトで有効にしました ({{bug(1438139)}})。詳しくは <a href="https://hacks.mozilla.org/2015/08/es6-in-depth-modules/">ES6 In Depth: Modules</a> および <a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/">ES modules: A cartoon deep dive</a> をご覧ください。または、MDN のリファレンス文書を確認してください:

  <ul>
   <li><a href="/ja/docs/Web/HTML/Element/script#attr-type"><code>&lt;script src="main.js" type="module"&gt;</code></a> および <a href="/ja/docs/Web/HTML/Element/script#attr-nomodule"><code>&lt;script nomodule src="fallback.js"&gt;</code></a></li>
   <li><code><a href="/ja/docs/Web/JavaScript/Reference/Statements/import">import</a></code> 文と <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/export">export</a></code> 文。</li>
  </ul>
 </li>
 <li>{{jsxref("Array.prototype.values()")}} メソッドを再び追加しました ({{bug(1420101)}})。これは以前のバージョンで、互換性の問題のために無効化されました。このメソッドを独自に実装していないことを確認してください。</li>
</ul>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="New_APIs" name="New_APIs">新規 API</h4>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Authentication_API">Web Authentication API</a> を有効化しました ({{bug(1432542)}})。</li>
</ul>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Authentication_API">Web Authentication API</a> で、<code>MakePublicKeyCredentialOptions</code> ディクショナリーオブジェクトを {{domxref("PublicKeyCredentialCreationOptions")}} に改名されました。これを Firefox でも実施しました ({{bug(1436473)}})。</li>
 <li>設定項目 <code>dom.workers.enabled</code> を削除しました。すなわち、Worker を無効化できなくなりました ({{bug(1434934)}})。</li>
 <li>{{domxref("Document.body","body")}} プロパティを {{domxref("Document")}} インターフェイスに実装しました。以前は {{domxref("HTMLDocument")}} インターフェイスにありました ({{bug(1276438)}})。</li>
 <li>{{domxref("PerformanceResourceTiming")}} が Worker で使用可能になりました ({{bug(1425458)}})。</li>
 <li>{{domxref("PerformanceObserver.takeRecords()")}} メソッドを実装しました ({{bug(1436692)}})。</li>
 <li>アクティブなキーボードレイアウトが ASCII 文字を生成しない場合でも、句読点キーの {{domxref("KeyboardEvent.keyCode")}} 属性は 0 ではない値になります。<a href="/ja/docs/Web/API/KeyboardEvent/keyCode#keyCode_of_punctuation_keys_on_some_keyboard_layout">詳しくはこちらをご覧ください</a>。新しいアプリケーションでは <code>KeyboardEvent.keyCode</code> を<strong>使用しない</strong>ようにしてください。代わりに {{domxref("KeyboardEvent.key")}} または {{domxref("KeyboardEvent.code")}} を使用します。</li>
 <li>{{domxref("Animation.updatePlaybackRate()")}} メソッドを実装しました ({{bug("1436659")}})。</li>
 <li><a href="/ja/docs/Web/API/KeyboardEvent/keyCode#keyCode_of_punctuation_keys_on_some_keyboard_layout">句読点キーの keyCode の値</a> を決定するための新しい規則を導入しました ({{bug(1036008)}})。</li>
 <li>Gecko 限定の option オブジェクトである、{{domxref("IDBFactory.open()")}} メソッドの <code>storage</code> オプション (<a href="/ja/docs/Web/API/IDBFactory/open#Experimental_Gecko_options_object">Experimental Gecko options object</a> もご覧ください) が非推奨になりました ({{bug(1442560)}})。</li>
 <li><a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> のコード内で Promise が使用可能になりました ({{bug(1193394)}})。</li>
</ul>

<h4 id="DOM_events" name="DOM_events">DOM イベント</h4>

<p><em>変更なし。</em></p>

<h4 id="Service_workers" name="Service_workers">Service workers</h4>

<p><em>変更なし。</em></p>

<h4 id="Media_and_WebRTC" name="Media_and_WebRTC">メディアと WebRTC</h4>

<ul>
 <li>{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を使用して取得したメディアを録画または共有するとき、対応するトラックの {{domxref("MediaStreamTrack.enabled")}} プロパティを <code>false</code> に設定してカメラをミュートすると、カメラを使用していないことをユーザーにわかりやすくするために、カメラが "使用中" であることを示すランプを消灯するようになりました ({{bug(1299515)}})。詳しくは <a href="/ja/docs/Web/API/MediaDevices/getUserMedia">MediaDevices.getUserMedia()</a> の <a href="/ja/docs/Web/API/MediaDevices/getUserMedia#User_privacy">User privacy</a> をご覧ください。また、<a href="https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/">こちらのブログ記事</a> もご覧ください。</li>
 <li>{{domxref("RTCPeerConnection.removeTrack", "removeTrack()")}} を使用して {{domxref("RTCPeerConnection")}} からトラックを削除するときに、{{domxref("RTCPeerConnection.getSenders", "getSenders()")}} が報告する送信者のピアコネクションのリストからトラックの {{domxref("RTCRtpSender")}} を削除しないようになりました ({{bug(1290949)}})。</li>
 <li>{{domxref("RTCRtpContributingSource")}} および {{domxref("RTCRtpSynchronizationSource")}} オブジェクトのタイムスタンプは、以前は {{jsxref("Date.getTime()")}} が返す値に基づいて報告されていました。Firefox 60 で、正しく <a href="/ja/docs/Web/API/Performance_API">Performance Timing API</a> を使用するように修正しました ({{bug(1433576)}})。</li>
 <li>仕様書に合わせて {{domxref("ConvolverNode.ConvolverNode","ConvolverNode()")}} コンストラクターで、参照される {{domxref("AudioBuffer")}} のチャンネル数が 1、2、あるいは 4 でない場合に <code>NotSupportedError</code> が発生するようになりました ({{bug(1443228)}})。</li>
 <li>{{domxref("RTCPeerConnection")}} で廃止されたイベントハンドラーである {{domxref("RTCPeerConnection.onremovestream")}} を削除しました。代わりに {{event("removetrack")}} イベントを使用するべきです ({{bug(1442385)}})。</li>
 <li>{{domxref("RTCDataChannel")}} は <code>DataChannel</code> の別名ではなく、<code>RTCDataChannel</code> そのものが本名になりました。<code>DataChannel</code> という名前はサポートしません ({{bug(1173851)}})。</li>
</ul>

<h4 id="Canvas_and_WebGL" name="Canvas_and_WebGL">Canvas と WebGL</h4>

<ul>
 <li>設定項目 <code>privacy.resistFingerprinting</code> が <code>true</code> である場合に、{{domxref("WEBGL_debug_renderer_info")}} WebGL 拡張が無効になります ({{bug(1337157)}})。</li>
</ul>

<h3 id="CSSOM" name="CSSOM">CSSOM</h3>

<p><em>変更なし。</em></p>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<p><em>変更なし。</em></p>

<h3 id="Security" name="Security">セキュリティ</h3>

<ul>
 <li>{{httpheader("X-Content-Type-Options")}} ヘッダーで <code>no-sniff</code> を設定したときに、JavaScript の MIME タイプの仕様に従うようになりました。特に、<code>text/json</code> および <code>application/json</code> は有効な値ではなくなりました ({{bug(1431095)}})。</li>
</ul>

<h3 id="Plugins" name="Plugins">プラグイン</h3>

<p><em>変更なし。</em></p>

<h3 id="Other" name="Other">その他</h3>

<ul>
 <li>クレデンシャルを含むフェッチとクレデンシャルを含まないフェッチが、接続を共有できるようになりました。例えば同じオリジンからウェブフォントとクレデンシャルが設定されたユーザーデータを同じ CDN へ要求するときに、どちらも同じ接続を共有することにより、応答が早くなる可能性があります ({{bug(1363284)}})。</li>
</ul>

<h2 id="Removals_from_the_web_platform" name="Removals_from_the_web_platform">ウェブプラットフォームから廃止</h2>

<h3 id="HTML_2" name="HTML_2">HTML</h3>

<p><em>変更なし。</em></p>

<h3 id="CSS_2" name="CSS_2">CSS</h3>

<ul>
 <li>独自仕様である {{cssxref("-moz-user-input")}} プロパティの <code>enabled</code> および <code>disabled</code> 値が使用できなくなりました ({{bug("1405087")}})。</li>
 <li>独自仕様である {{cssxref("-moz-border-top-colors")}}、{{cssxref("-moz-border-right-colors")}}、{{cssxref("-moz-border-bottom-colors")}}、{{cssxref("-moz-border-left-colors")}} プロパティを、プラットフォームから完全に削除しました ({{bug(1429723)}})。</li>
</ul>

<h3 id="JavaScript_2" name="JavaScript_2">JavaScript</h3>

<ul>
 <li>非標準の <a href="/ja/docs/Web/JavaScript/Reference/Operators/Expression_closures">式クロージャ</a> 構文を削除しました ({{bug(1426519)}})。</li>
</ul>

<h3 id="APIs_2" name="APIs_2">API</h3>

<ul>
 <li>{{event("userproximity")}} および {{event("deviceproximity")}} イベント ({{domxref("UserProximityEvent")}} および {{domxref("DeviceProximityEvent")}} もご覧ください) を設定項目 <code>device.sensors.proximity.enabled</code> で、デフォルトで無効化しました ({{bug(1359076)}})。</li>
 <li>{{event("devicelight")}} イベント ({{domxref("DeviceLightEvent")}} もご覧ください) を設定項目 <code>device.sensors.ambientLight.enabled</code> で、デフォルトで無効化しました ({{bug(1359076)}})。</li>
</ul>

<h3 id="SVG_2" name="SVG_2">SVG</h3>

<p><em>変更なし。</em></p>

<h3 id="Other_2" name="Other_2">その他</h3>

<p><em>変更なし。</em></p>

<h2 id="Changes_for_add-on_and_Mozilla_developers" name="Changes_for_add-on_and_Mozilla_developers">アドオン開発者と Mozilla 開発者向けの変更点</h2>

<h3 id="WebExtensions" name="WebExtensions">WebExtensions</h3>

<p>テーマ API:</p>

<ul>
 <li>headerURL が省略可能になりました。</li>
 <li>ブラウザー <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme">テーマ</a> を作成するとき、<code>headerURL</code> が指定されていない場合は、ヘッダーテキストに適用されている {{cssxref("text-shadow")}} を削除します ({{bug(1404688)}})。</li>
 <li>新たにサポートしたプロパティ:
  <ul>
   <li><strong>tab_line</strong></li>
   <li><strong>tab_selected</strong></li>
   <li><strong>popup</strong></li>
   <li><strong>popup_border</strong></li>
   <li><strong>popup_text</strong></li>
   <li><strong>tab_loading</strong></li>
   <li><strong>icons</strong></li>
   <li><strong>icons_attention</strong></li>
   <li><strong>frame_inactive</strong></li>
   <li><strong>button_background_active</strong></li>
   <li><strong>button_background_hover</strong></li>
  </ul>
 </li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.org/firefox/60.0/releasenotes/">Firefox — Notes (60.0)</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(59)}}</p>
