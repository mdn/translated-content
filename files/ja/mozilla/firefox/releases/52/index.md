---
title: Firefox 52 for developers
slug: Mozilla/Firefox/Releases/52
tags:
  - Firefox
  - Mozilla
  - Release Notes
translation_of: Mozilla/Firefox/Releases/52
---
<p>Firefox 52 は、米国時間 2017 年 3 月 7 日にリリースされました。このページでは、開発者に影響する Firefox 52 の変更点をまとめています。</p>

<h2 id="Changes_for_Web_developers" name="Changes_for_Web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li><a href="/ja/docs/Tools/Responsive_Design_Mode">UA の選択やネットワークの調整など、レスポンシブデザインモードを全面的に改良しました。</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Work_with_animations">アニメーションインスペクターで、タイミング関数を表示するようになりました。</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">インスペクターに CSS グリッドの調査機能を搭載しました。</a></li>
 <li><a href="/ja/docs/Tools/about:debugging#Service_worker_state">about:debugging で Service Worker の状態を表示するようになりました。</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#element_rule">インスペクターで、選択した要素を簡単に強調表示できるようになりました。</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Whitespace-only_text_nodes">インスペクターで、ホワイトスペースのみのテキストノードを表示するようになりました。</a></li>
</ul>

<p><a href="https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&amp;classification=Client%20Software&amp;chfieldto=2016-11-14&amp;query_format=advanced&amp;chfield=resolution&amp;chfieldfrom=2016-09-19&amp;chfieldvalue=FIXED&amp;bug_status=RESOLVED&amp;bug_status=VERIFIED&amp;component=Developer%20Tools&amp;component=Developer%20Tools%3A%20about%3Adebugging&amp;component=Developer%20Tools%3A%20Animation%20Inspector&amp;component=Developer%20Tools%3A%20Canvas%20Debugger&amp;component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&amp;component=Developer%20Tools%3A%20Console&amp;component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&amp;component=Developer%20Tools%3A%20Debugger&amp;component=Developer%20Tools%3A%20DOM&amp;component=Developer%20Tools%3A%20Font%20Inspector&amp;component=Developer%20Tools%3A%20Framework&amp;component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&amp;component=Developer%20Tools%3A%20Inspector&amp;component=Developer%20Tools%3A%20JSON%20Viewer&amp;component=Developer%20Tools%3A%20Memory&amp;component=Developer%20Tools%3A%20Netmonitor&amp;component=Developer%20Tools%3A%20Object%20Inspector&amp;component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&amp;component=Developer%20Tools%3A%20Responsive%20Design%20Mode&amp;component=Developer%20Tools%3A%20Scratchpad&amp;component=Developer%20Tools%3A%20Shared%20Components&amp;component=Developer%20Tools%3A%20Source%20Editor&amp;component=Developer%20Tools%3A%20Storage%20Inspector&amp;component=Developer%20Tools%3A%20Style%20Editor&amp;component=Developer%20Tools%3A%20User%20Stories&amp;component=Developer%20Tools%3A%20Web%20Audio%20Editor&amp;component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&amp;component=Developer%20Tools%3A%20WebIDE&amp;product=Firefox&amp;list_id=13333174">Firefox 51 から Firefox 52 の間に解決した開発ツール関連のバグ一覧</a></p>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li><code>rel="noopener"</code> <a href="/ja/docs/Web/HTML/Link_types">リンクタイプ</a> を実装しました ({{bug(1222516)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<h4 id="New_features" name="New_features">新機能</h4>

<ul>
 <li>{{cssxref(":focus-within")}} 疑似クラスを追加しました ({{bug(1176997)}})。</li>
 <li>{{HTMLElement("button")}} 要素内で <code>display:flex/grid</code> およびマルチカラムレイアウトをサポートしました ({{bug(984869)}})。</li>
 <li>数値で表した色と <a href="/ja/docs/Web/CSS/color_value#currentColor_keyword">currentcolor</a> との間の補完処理を実装しました ({{bug(1299741)}})。</li>
 <li><code>{{cssxref("justify-content")}}: space-evenly</code> および <code>{{cssxref("align-content")}}: space-evenly</code> 向けに flexbox レイアウトを実装しました ({{bug(1235922)}})。</li>
 <li>CSS {{cssxref("mask")}} / {{cssxref("clip-path")}} でサブピクセルアンチエイリアシングをサポートしました ({{bug(1305259)}})。</li>
 <li>CSS Text 3 の、区分分断の変換規則を実装しました ({{bug(1081858)}})。</li>
 <li>SVG コンテンツで、({{cssxref("clip-path")}} プロパティで適用する) 基本的な図形のクリッピングをサポートしました ({{bug(1246741)}})。</li>
 <li>{{cssxref("align-self")}}|{{cssxref("justify-self")}}: [ first | last ]? baseline 向けの Flexbox レイアウトを実装しました ({{bug(1221524)}})。</li>
 <li>{{cssxref("touch-action")}} プロパティを、すべてのプラットフォームにおいてデフォルトで有効にしました。(詳しくは <a href="https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4">intent to ship mail #1</a> および <a href="https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M">intent to ship mail #2</a> をご覧ください)</li>
 <li>Flexbox の {{cssxref("align-content")}} の処理および単一ラインのサイズ調整が、ラインの数ではなく {{cssxref("flex-wrap")}} に依存するようになりました ({{bug(1090031)}})。</li>
 <li>補間処理ができないプロパティのアニメーションに <a href="/ja/docs/Web/CSS/CSS_Animations">CSS Animations</a> を使用できるようになりました ({{bug("1064937")}})。</li>
 <li><code>baseline|last-baseline</code> を <code>[ first | last ]? baseline</code> に変更しました ({{bug(1313254)}}).</li>
 <li>block-axis について、<code>left</code>/<code>right</code> の使用値を <code>start</code> にしました ({{bug(1221565)}})。</li>
 <li>包含ブロックの長さが不定である、flexible tracks を伸長する際に、最小サイズや最大サイズを重視するようになりました ({{bug(1309407)}})。</li>
 <li>{{cssxref("mask-position")}} および {{cssxref("mask-repeat")}} の初期値を、それぞれ <code>0% 0%</code> および <code>repeat</code> に変更しました ({{bug(1308963)}})。</li>
 <li>CSS の {{cssxref("&lt;color&gt;")}} 値に対していくつか変更を施しました ({{bug(1295456)}}):
  <ul>
   <li><code>rgba()</code> および <code>hsla()</code> を、<code>rgb()</code> および <code>hsl()</code> の別名として再定義しました。どちらも同じ引数構文を受け入れます。</li>
   <li><code>rgb(</code>) および <code>hsl()</code> が、アルファ値 (省略可能) を受け入れるようになりました。例: <code>rgb(255, 0, 0, 0.5)</code></li>
   <li>色関数が、カンマ区切りではなく空白区切りの引数を受け入れるようになりました。例: <code>rgb(255 0 0 / 0.5)</code></li>
   <li>アルファ値を、数値だけでなくパーセンテージでも指定できるようになりました。例: <code>rgb(255 0 0 / 50%)</code></li>
   <li><code>hsl()</code> 色の色相を、数値だけでなく角度でも指定できるようになりました。例: <code>hsl(120deg, 60%, 70%)</code></li>
  </ul>
 </li>
</ul>

<h4 id="CSS_Grids" name="CSS_Grids">CSS Grid</h4>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS Grid</a> を実装しました。</li>
</ul>

<h4 id="Changes_and_removals" name="Changes_and_removals">変更および削除</h4>

<ul>
 <li>CSS3 マルチカラム関連プロパティの接頭辞を削除しました (また、<code>-moz</code> 接頭辞付きのプロパティを別名として再追加しました) ({{bug(1300895)}})。</li>
 <li>無名の flex アイテム内で、flex コンテナの絶対配置の子を折り返さないようになりました ({{bug(1269045)}})。</li>
 <li>グリッドコンテナーのベースラインを実装しました。 ({{bug(1151204)}})。</li>
 <li>スタイルシステムから、<code>&lt;flex&gt;</code> 値を最小値として使用する箇所を削除しました ({{bug(1305244)}})。</li>
 <li>設定項目 <code>layout.css.masking.enabled</code> を削除しました ({{bug(1308239)}})。</li>
 <li>独自の <a href="/ja/docs/Web/CSS/@media#メディア特性">メディア特性</a> である <code>-moz-images-in-menus</code> および <code>-moz-images-in-buttons</code> を削除しました ({{bug(1302157)}})。</li>
 <li>色のプロパティから <code>-moz-use-text-color</code> を削除しました。代わりに <code><a href="/ja/docs/Web/CSS/color_value#currentColor_keyword">currentColor</a></code> を使用してください ({{bug(1306214)}})。</li>
 <li>[css-grid] グリッドアイテムに 'max-width' を設定するとテキストがはみ出す問題を修正しました ({{bug(1330380)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<h4 id="New_features_2" name="New_features_2">新機能</h4>

<ul>
 <li>async functions をサポートしました。{{jsxref("Statements/async_function", "async function")}}、{{jsxref("Operators/async_function", "async function expression")}}、{{jsxref("Operators/await", "await")}} キーワードを追加しました ({{bug(1185106)}})。</li>
 <li>関数に対して、ES2017 の <a href="/ja/docs/Web/JavaScript/Reference/Trailing_commas">trailing commas</a> を実装しました ({{bug(1303788)}})。</li>
 <li>{{jsxref("Functions/rest_parameters", "rest parameter の分割代入", "#Destructuring_rest_parameters", 1)}} を実装しました ({{bug(1243717)}})。</li>
 <li>{{jsxref("Operators/Arithmetic_Operators", "べき乗演算子 (**)", "#Exponentiation_(**)", 1)}} をデフォルトで有効にしました ({{bug(1291212)}})。</li>
 <li>{{jsxref("DateTimeFormat")}} や {{jsxref("Date.toLocaleString()")}} といった日付関連の API の <code>timeZone</code> オプションで、<a href="http://www.iana.org/time-zones">IANA タイムゾーン名称</a> が使用可能になりました ({{bug(837961)}})。</li>
</ul>

<h4 id="Changes_and_removals_2" name="Changes_and_removals_2">変更および削除</h4>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assigning_the_rest_of_an_array_to_a_variable">配列の分割代入</a> で、trailing comma を持つ rest parameters を使用した場合に {{jsxref("SyntaxError")}} が発生するようになりました ({{bug(1041341)}})。</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">オブジェクトの分割代入</a> で、<code>__proto__</code> プロパティの重複が可能になりました ({{bug(1204024)}})。</li>
 <li>{{jsxref("Array.prototype.toLocaleString()")}} を、Intl API のパラメーター "<code>locales</code>" および "<code>options</code>" をサポートするように再実装しました ({{bug(1130636)}})。</li>
 <li>{{jsxref("TypedArray")}} コンストラクターで、新しい typed array を生成するため <a href="/ja/docs/Web/JavaScript/Reference/Iteration_protocols">iterable</a> を受け入れるようになりました ({{bug(1232266)}})。</li>
 <li>{{jsxref("TypedArray.from()")}}、{{jsxref("TypedArray.of()")}}、{{jsxref("TypedArray.prototype.filter()")}}、{{jsxref("TypedArray.prototype.map()")}}、{{jsxref("TypedArray.prototype.slice()")}}、{{jsxref("TypedArray.prototype.subarray()")}} が、値 <code>this</code> が有効な Typed Array のコンストラクターであることを要求するようになりました ({{bug(1122396)}})。</li>
 <li>非標準の {{jsxref("ArrayBuffer.slice()")}} メソッド ({{jsxref("ArrayBuffer.prototype.slice()")}} ではありません) が非推奨になり、使用すると警告が発生します ({{bug(1316913)}})。</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Unicode_code_point_escapes">Unicode コードポイントエスケープ</a> が、識別子として使用可能になりました (例: "<code>let \u{61} = 123</code>"。{{bug(1314037)}} をご覧ください)。</li>
 <li>ES2015 に従って、<code>\u2e2f</code> および <code>ⸯ</code> を識別子として使用したときに例外が発生するようになりました。詳しくは {{bug(917436)}} および {{bug(1197230)}} をご覧ください。</li>
</ul>

<h3 id="WebAssembly" name="WebAssembly">WebAssembly</h3>

<ul>
 <li>Gecko で <a href="/ja/docs/WebAssembly">WebAssembly</a> をサポートしました。</li>
</ul>

<h3 id="DOM" name="DOM">DOM</h3>

<ul>
 <li>新たに {{Event("selectstart")}} および {{Event("selectionchange")}} イベント ({{domxref("GlobalEventHandlers.onselectstart")}}、{{domxref("GlobalEventHandlers.onselectionchange")}} をご覧ください) を含む、<a href="/ja/docs/Web/API/Selection_API">Selection API</a> を全面的に提供します ({{bug(1309612)}})。</li>
 <li>{{domxref("Event.composed")}} プロパティをサポートしました。この論理値は、イベントが shadow root を経由して標準 DOM に伝達できるかを示します ({{bug(1292063)}})。</li>
 <li>HTML 要素、{{HTMLElement("svg")}} 要素、{{HTMLElement("math")}} 要素に限り、{{domxref("Element.requestFullScreen()")}} を呼び出してフルスクリーンモードに移行できるようになりました ({{bug(1305928)}})。</li>
 <li><a href="/ja/docs/Web/API/Touch_events">Touch event</a> を、Windows デスクトップ環境で再び有効化しました ({{bug(1244402)}})。これはいくつかの主要サイトで問題が発生したため、Firefox 24 で無効化していました ({{bug(888304)}})。</li>
 <li>{{event("focusin")}} および {{event("focusout")}} イベントを実装しました ({{bug("687787")}})。</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.isSecureContext")}} プロパティを実装しました ({{bug(1269052)}})。</li>
 <li>service worker のインストールイベント ({{domxref("ServiceWorkerGlobalScope.oninstall")}} をご覧ください) との混同を避けるため、<a href="/ja/docs/Web/Manifest">Web App Manifest</a> のインストールイベントを appinstalled に改名しました ({{domxref("Window.onappinstalled")}}、{{event("appinstalled")}} をご覧ください)。詳しくは {{bug(1309099)}} をご覧ください。</li>
 <li><a href="/ja/docs/Web/API/HTML_Drag_and_Drop_API">Drag and drop API</a> の {{domxref("DataTransfer.types")}} プロパティが、{{domxref("DOMStringList")}} ではなく {{domxref("DOMString")}} の凍結された配列を返すようになりました ({{bug(1298243)}})。</li>
 <li>{{Event("loadstart")}} および {{Event("loadend")}} イベントが {{htmlelement("img")}} 要素で発生するようになりました ({{bug(1264769)}}、{{domxref("GlobalEventHandlers.onloadstart")}}、{{domxref("GlobalEventHandlers.onloadend")}} をご覧ください)。</li>
 <li><a href="/ja/docs/Web/API/Notifications_API">Notifications API</a> の {{domxref("Notification.requireInteraction")}} を実装しました ({{bug(862395)}})。</li>
 <li>{{domxref("Window.open()")}} メソッドで、<code>noopener</code> <a href="/ja/docs/Web/API/Window/open#Window_functionality_features">ウィンドウ機能特性</a> が使用可能になりました ({{bug(1267339)}})。これは、<code>rel="noopener"</code> <a href="/ja/docs/Web/HTML/Link_types">リンクタイプ</a> の機能を反映します。</li>
 <li><a href="/ja/docs/Web/Web_Components">Web Components API</a> の {{domxref("CustomElementRegistry.get()")}} メソッドを実装しました ({{bug(1275838)}})。</li>
 <li><a href="/ja/docs/Web/API/Pointer_events">Pointer Event</a> の {{domxref("PointerEvent.width","width")}} および {{domxref("PointerEvent.height","height")}} プロパティのデフォルト値が 1 になりました ({{bug(1304315)}})。</li>
 <li><a href="https://wicg.github.io/entries-api/">最新の仕様書</a> における変更点を含むように、<a href="/ja/docs/Web/API/File_and_Directory_Entries_API">File and Directory Entries API</a> を更新しました (詳しくは {{bug(1284987)}} をご覧ください)。</li>
 <li>{{domxref("UIEvent")}} で定義されていた {{domxref("Event.cancelBubble", "cancelBubble")}} プロパティが、{{domxref("Event")}} インターフェイスで定義するようになりました。詳しくは {{bug(1298970)}} をご覧ください。</li>
</ul>

<h4 id="Changes_and_removals_3" name="Changes_and_removals_3">変更および削除</h4>

<ul>
 <li>通話を制御する Firefox OS の API (Contacts、MobileConnection、Icc など) を削除しました ({{bug(1311206)}})。</li>
 <li>Firefox OS の <code>Identity</code> インターフェイスを削除しました ({{bug(1309030)}})。</li>
 <li>Firefox OS の Voicemail API (<code><a href="/ja/docs/Archive/B2G_OS/API/MozVoicemail">MozVoicemail</a></code>、<code><a href="/ja/docs/Archive/B2G_OS/API/MozVoicemailEvent">MozVoicemailEvent</a></code>、<code><a href="/ja/docs/Archive/B2G_OS/API/MozVoicemailStatus">MozVoicemailStatus</a></code>、<code><a href="/ja/docs/Archive/B2G_OS/API/Navigator/mozVoicemail">Navigator.mozVoicemail</a></code>) を削除しました ({{bug(1309723)}})。</li>
 <li>Firefox OS の Cell Broadcast API (<code>MozCellBroadcast</code>、<code>MozCellBroadcastEvent</code>、<code>MozCellBroadcastMessage</code>、<code>Navigator.mozCellBroadcast</code>) を削除しました ({{bug(1306772)}})。</li>
 <li>Firefox OS の TV broadcast 関連 API を削除しました ({{bug(1306778)}})。</li>
 <li>Firefox OS の FM Radio API (<code><a href="/ja/docs/Archive/B2G_OS/API/FMRadio">FMRadio</a></code>、<code><a href="/ja/docs/Archive/B2G_OS/API/Navigator/mozFMRadio">Navigator.mozFMRadio</a></code>) を削除しました ({{bug(1306779)}})。</li>
</ul>

<h3 id="Service_Workers_and_Fetch" name="Service_Workers_and_Fetch">Service Workers と Fetch</h3>

<ul>
 <li>{{domxref("Headers.getAll()")}} を削除しました。また {{domxref("Headers.get()")}} が、指定したヘッダーの (最初の値だけではなく) すべての値を取り出すようになりました ({{bug(1278275)}})。これは、最新の Fetch API 仕様の更新内容に準拠しています。</li>
</ul>

<h3 id="Web_Audio_API" name="Web_Audio_API">Web Audio API</h3>

<ul>
 <li>{{domxref("ConstantSourceNode")}} インターフェイスを追加しました。これは、すべて同じ値であるサンプルのストリームを常に出力するオーディオソースを表します。複雑なオーディオフローを単純化するためにこのインターフェイスをどのように使用するかを示す例を、<a href="/ja/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode">Controlling multiple parameters with ConstantSourceNode</a> でご覧ください。</li>
</ul>

<h3 id="WebRTC" name="WebRTC">WebRTC</h3>

<ul>
 <li>ICE 接続が一時的に不通になったとき、{{domxref("RTCPeerConnection.iceConnectionState")}} プロパティが <code>"disconnected"</code> に設定されるようになりました。これは一時的な問題で間もなく解決する見込みであり、後に接続が <code>"connected"</code> 状態に戻ることを示します ({{bug(852665)}})。</li>
 <li>{{domxref("MediaDevices.ondevicechange")}} イベントハンドラーと、これに対応する {{event("devicechange")}} イベントは Firefox 51 で Mac に限り実装してデフォルトで無効化していましたが、Windows および Linux でも実装して、すべてのプラットフォームでデフォルトで有効にしました。</li>
 <li>{{domxref("MediaStream.active")}} プロパティをサポートしました。これはストリームで少なくとも 1 つのトラックが現在再生中であるかを示す、読み取り専用の Boolean 型プロパティです。</li>
 <li>Firefox 52 より前のバージョンでは {{domxref("MediaStreamTrack.stop()")}} メソッドで、ローカルトラック (すなわち、{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} で取得したトラック) しか停止できませんでした。Firefox 52 で、<a href="/ja/docs/Glossary/WebRTC">WebRTC</a> 接続と関連付けられた {{domxref("MediaStream")}}、<a href="/ja/docs/Web/API/Web_Audio_API">Web Audio API</a> ストリーム、{{domxref("CanvasCaptureMediaStream")}} など、さまざまなトラックを停止できるようになりました。</li>
 <li>以前は Firefox のイベントループによってひとつのパスで {{domxref("TextTrack")}} の {{domxref("TextTrack.mode", "mode")}} を繰り返し変更すると、複数の {{event("change")}} イベントが親メディア要素の {{domxref("HTMLMediaElement.textTracks", "textTracks")}} で指定された {{domxref("TextTrackList")}} に発行されていました。Firefox 52 から、ひとつのイベントに統合するようになりました ({{bug(882674)}})。</li>
</ul>

<h3 id="AudioVideoMedia" name="AudioVideoMedia">Audio/Video/Media</h3>

<ul>
 <li>{{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素を扱っていてエラーが発生したときに {{domxref("HTMLMediaElement.error")}} で指定される {{domxref("MediaError")}} オブジェクトが、{{domxref("MediaError.message", "message")}} プロパティを持つようになりました。これは、発生したエラーの具体的な説明を提供します。この文字列はエラーの事象について詳細情報を提供して、なぜ誤っているかの見識を与えます ({{bug(1299072)}})。このフィールドは Firefox 51 から nightly ビルドに含まれていましたが、release を含むすべてのビルドで有効化しました。</li>
</ul>

<h3 id="Other_APIs" name="Other_APIs">その他の API</h3>

<ul>
 <li>Firefox 50 で追加した (ただし常にエラーを返す) {{domxref("FileSystemFileEntry.createWriter()")}} メソッドを削除しました ({{bug(1315185)}})。</li>
 <li>Firefox OS 独自の <a href="/ja/docs/Archive/Marketplace/API/App_installation_and_management_APIs">Apps installation/management API</a> を、プラットフォームから削除しました ({{bug(1261019)}})。</li>
 <li>Firefox OS 独自の <a href="/ja/docs/Archive/Firefox_OS/Web_Telephony_API">Web Telephony API</a> を、プラットフォームから削除しました ({{bug(1309719)}})。</li>
 <li>Firefox OS 独自の <a href="/ja/docs/Archive/Firefox_OS/Bluetooth_API">Web Bluetooth API</a> を、プラットフォームから削除しました ({{bug(1310020)}})。</li>
 <li><a href="/ja/docs/Web/API/Battery_Status_API">Battery Status API</a> が、chrome/特権付きコードに限り使用可能になりました ({{bug(1313580)}})。</li>
 <li><code>ImageBitmapRenderingContext.transferImageBitmap()</code> を {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} に改名しました ({{bug(1304767)}})。</li>
 <li><code>mozDash</code> および <code>mozDashOffset</code> メンバーを、{{domxref("CanvasRenderingContext2D")}} から削除しました ({{bug(931389)}})。</li>
</ul>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<ul>
 <li>{{HTTPHeader("Referrer-Policy")}} ヘッダーで <code>same-origin</code>、<code>strict-origin</code>、<code>strict-origin-when-cross-origin</code> ディレクティブをサポートしました ({{bug(1276836)}})。</li>
 <li>{{CSP("script-src")}} のように、<a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic"><code>'strict-dynamic'</code> source expression</a> を {{HTTPHeader("Content-Security-Policy")}} のディレクティブでサポートしました ({{bug(1299483)}})。</li>
 <li><a href="https://tools.ietf.org/html/draft-ietf-httpbis-cookie-alone-01">Strict Secure Cookies specification</a> に従って、安全ではないサイト (<code>http:</code>) が "secure" ディレクティブで <a href="/ja/docs/Web/HTTP/Cookies">Cookie を設定する</a> ことができなくなりました ({{bug(976073)}})。</li>
 <li>HTTP/2 ヘッダー圧縮方式 <a href="https://tools.ietf.org/html/rfc7541">HPACK</a> の最大テーブルサイズを 4 KB から 64 KB に拡張しました ({{bug(1296280)}})。</li>
 <li>{{HTTPHeader("Large-Allocation")}} ヘッダーを追加しました ({{bug(1304140)}})。</li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<ul>
 <li>SVG ドキュメントは、SVGDocument に代わり {{domxref("XMLDocument")}} インターフェイスを使用して表すようになりました。これは SVG 2 仕様で変更されました。</li>
</ul>

<h3 id="Security" name="Security">セキュリティ</h3>

<ul>
 <li>ログインページ (すなわち <code><a href="/ja/docs/Web/HTML/Element/input/password">&lt;input type="password"&gt;</a></code> フィールドを含むページ) でログイン情報が安全でない方法で送信されると思われる場合に、Firefox はユーザーに警告するため、ページ内のパスワードフィールドの下に警告メッセージを表示します ({{bug(1319119)}})。また、安全でないログインフォームではオートフィルが無効になります ({{bug(1217152)}})。詳しくは <a href="/ja/docs/Web/Security/Insecure_passwords">安全でないパスワード</a> をご覧ください。</li>
 <li>SHA-1 SSL 証明書のサポートを廃止しました。SHA-1 証明書を使用する安全なページに移動すると、<a href="https://support.mozilla.org/t5/Documents-Archive/quot-This-Connection-is-Untrusted-quot-error-message-appears/ta-p/589">Untrusted Connection</a> エラーが発生します ({{bug(1330043)}})。</li>
</ul>

<h2 id="Plugins" name="Plugins">プラグイン</h2>

<p>Flash を除くすべての NPAPI <a href="/ja/docs/Mozilla/Add-ons/Plugins">プラグイン</a> のサポートを廃止しました。Flash の使用も将来、段階的に廃止します。</p>

<h2 id="Changes_for_add-on_and_Mozilla_developers" name="Changes_for_add-on_and_Mozilla_developers">アドオン開発者と Mozilla 開発者向けの変更点</h2>

<h3 id="WebExtensions" name="WebExtensions">WebExtensions</h3>

<p>新規 API:</p>

<ul>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions"><code>sessions</code> API</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/topSites"><code>topSites</code> API</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/omnibox"><code>omnibox</code> API</a></li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled">runtime.onInstalled</a></code> および <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup">runtime.onStartup</a></code> イベント</li>
 <li><a href="/ja/Add-ons/WebExtensions/API/webRequest#Modifying_requests">webRequest の非同期イベントハンドラー</a></li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved">bookmarks.onMoved</a></code>、<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated">bookmarks.onCreated</a></code>、<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged">bookmarks.onChanged</a></code> イベント</li>
 <li><a href="/ja/Add-ons/WebExtensions/manifest.json/commands">commands マニフェストキー</a> の <code>_execute_browser_action</code> および <code>_execute_page_action</code></li>
 <li>content_scripts マニフェストキーの <code><a href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank">match_about_blank</a></code></li>
</ul>

<h3 id="Interfaces" name="Interfaces">インターフェイス</h3>

<ul>
 <li>ドロップされた複数のアイテムを扱うための <code><a href="/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDroppedLinkHandler">nsIDroppedLinkHandler</a>.dropLinks</code> メソッドおよび <a href="/ja/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDroppedLinkItem">nsIDroppedLinkItem</a> インターフェイスを追加しました ({{bug(92737)}})。</li>
</ul>

<h3 id="XUL" name="XUL">XUL</h3>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Tech/XUL/tabbrowser">tabbrowser</a>.<a href="/ja/docs/Mozilla/Tech/XUL/Method/loadTabs">loadTabs</a>(uris, params)</code> メソッドのオーバーロードを追加しました ({{bug(92737)}})。</li>
 <li><code><a href="/ja/docs/Mozilla/Tech/XUL/browser">browser</a>.<a href="/ja/docs/Mozilla/Tech/XUL/Attribute/droppedLinkHandler">droppedLinkHandler</a></code> 関数のシグネチャを変更しました ({{bug(92737)}})。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.jp/firefox/52.0/releasenotes/">Firefox 52.0 リリースノート</a></li>
 <li><a href="https://dev.mozilla.jp/2016/12/firefox-52-addon-compatibility/">Firefox 52 アドオン互換性情報</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(52)}}</p>
