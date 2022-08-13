---
title: Firefox 49 for developers
slug: Mozilla/Firefox/Releases/49
tags:
  - Firefox
  - Release Notes
translation_of: Mozilla/Firefox/Releases/49
---
<p>Firefox 49 は、米国時間 2016 年 9 月 20 日にリリースされました。このページでは、開発者に影響する Firefox 49 の変更点をまとめています。</p>

<h2 id="Changes_for_Web_developers" name="Changes_for_Web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li>コンソールに記録された JavaScript のエラーで、デバッグのためのヒントを <a href="https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/">[Learn more] リンクで提供します</a> ({{bug("1179876")}})。</li>
 <li>CSS オートコンプリート: オートコンプリートのポップアップで、より多くの候補を表示します ({{bug("1260419")}})。</li>
 <li>アニメーションインスペクターで、<a href="/ja/docs/Tools/Page_Inspector/How_to/Work_with_animations#Further_information_about_animation_compositing">アニメーションのパフォーマンス情報を提供する</a> ようになりました ({{bug("1254408")}})。</li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Element_popup_context_menu">インスペクターのコンテキストメニュー</a> を、よりきれいで使いやすくなるように再編しました ({{bug("1211613")}})。</li>
 <li>インスペクターで、<code>#RRGGBBAA</code> および <code>#RGBA</code> 構文の色の値をサポートしました ({{bug("1271191")}})。</li>
 <li>HTML のページでは開発ツールで、self-closing タグ ({{HTMLElement("br")}} や {{HTMLElement("img")}} など) が終了タグを持つかのように表示しないようになりました。XHTML ページではこの動作を変更していません ({{bug("820926")}})。</li>
 <li>アクセシビリティが向上しました。
  <ul>
   <li>ツールボックスで、キーボードフォーカスが見やすくなるように対処しました ({{bug(1242851)}})。</li>
   <li>アクセシビリティのラベルがついていないコントロールに、ラベルを追加しました ({{bug(1242715)}})。</li>
   <li>インスペクターのマークアップビューに、適切なツリービューの意味とキーボードナビゲーションを追加しました ({{bug(1242694)}})。</li>
  </ul>
 </li>
 <li><a href="/ja/docs/Tools/Network_Monitor">ネットワークモニター</a> に Cause 列を追加しました。個々のネットワークリクエストを発生させたのは何かを示します ({{bug(1134073)}})。</li>
 <li><em>about:debugging</em> のアドオンページで、再読み込みボタンは一時的なアドオンに限り使用できるようになりました。他のアドオンでは無効になります ({{bug(1273184)}})。</li>
 <li><em>about:debugging</em> の Workers ページで、現在のブラウザーの設定に対して <a href="/ja/docs/Tools/about:debugging#Service_workers_not_compatible">互換性がない service worker</a> について、警告メッセージを Service Workers セクションに表示するようになりました ({{bug(1266415)}})。</li>
 <li><em>about:debugging</em> で、新たに <a href="/ja/docs/Tools/about:debugging#Tabs">Tabs ページ</a> が使用可能になりました。現在の Firefox のインスタンスで開いている、デバッグ可能なタブを一覧表示します ({{bug(1266128)}})。</li>
 <li><a href="/ja/docs/Tools/Settings#Advanced_settings">ツールボックスの詳細設定</a> の [<em>キャッシュを無効化</em>] を、[HTTP キャッシュを無効化] に改名しました。HTTP キャッシュに影響があり、<a href="/ja/docs/Web/API/Service_Worker_API">Service Workers</a> や <a href="/ja/docs/Web/API/Cache">Cache API</a> には影響がないことを明確にするためです (bug(1253018))。</li>
 <li>ストレージインスペクターのコンテキストメニューで <a href="/ja/docs/Tools/Storage_Inspector#IndexedDB">IndexedDB データベースを削除できるようになりました</a> ({{bug("1205123")}})。また、何らかの理由で IndexedDB が削除できない (例えばアクティブな接続が存在する) 場合に警告メッセージを表示します ({{bug(1268460)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li>{{HTMLElement("details")}} 要素および {{HTMLElement("summary")}} 要素をサポートしました ({{bug(1226455)}})。</li>
 <li>{{HTMLElement("input")}} 要素の {{htmlattrxref("pattern", "input")}} 属性は、背後の JavaScript {{jsxref("RegExp")}} で <code>'u'</code> パラメーターを使用するようになりました ({{bug(1227906)}})。</li>
 <li>仕様書の変更に合わせて、{{HTMLElement('track')}} 要素の {{htmlattrxref("kind", "track")}} 属性で無効な値は、<code>'subtitles'</code> ではなく <code>'metadata'</code> と同様に扱うようになりました ({{bug(1269712)}})。</li>
 <li>{{HTMLElement("iframe")}} 要素の {{htmlattrxref("sandbox", "iframe")}} 属性で値 <code>'allow-popups-to-escape-sandbox'</code> および <code>'allow-modals'</code> をサポートしました ({{bug(1190641)}})。</li>
 <li>microdata 属性および Microdata API のサポートを廃止しました ({{bug(909633)}})。</li>
 <li>{{HTMLElement("a")}} 要素の {{htmlattrxref("referrerpolicy", "a")}} 属性で値 <code>'no-referrer-when-downgrade</code>' および <code>'origin-when-cross-origin'</code> をサポートしました ({{bug(1178337)}})。</li>
 <li>{{HTMLElement("label")}} 要素の {{htmlattrxref("form", "label")}} コンテンツ属性を削除しました。{{domxref("HTMLLabelElement.form")}} はまだ存在していますが、コントロールが存在する (およびそのコントロールがフォームに関連付けられている) 場合に、ラベルのコントロールが関連付けられているフォームを返すようになりました ({{bug(1268852)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>背景画像を描画する位置のオフセットを水平方向および垂直方向に分けて指定できる、{{cssxref("background-position-x")}} プロパティおよび {{cssxref("background-position-y")}} プロパティをサポートしました。これらは {{cssxref("background-position")}} を構成します ({{bug("550426")}})。</li>
 <li>{{cssxref("background-repeat")}} で、キーワード <code>round</code> および <code>space</code> をサポートしました ({{bug("548372")}})。</li>
 <li>{{cssxref("background-clip")}} で、キーワード <code>text</code> をデフォルトで有効化しました ({{bug(1264905)}})。</li>
 <li>4 桁および 8 桁の 16 進数による CSS <a href="/ja/docs/Web/CSS/color_value">色</a> の値 (#RRGGBBAA や #RGBA) による、アルファチャンネルを含む色の指定をサポートしました ({{bug("567283")}})。</li>
 <li>{{cssxref(":dir()")}} 疑似クラスの接頭辞を外しました ({{bug(859301)}})。</li>
 <li>{{cssxref("clip-path")}} の実験的な実装 (デフォルトで有効化していません) で、複数の {{cssxref("&lt;basic-shape&gt;")}} 値の間で補間処理が可能になりました ({{bug(1110460)}})。</li>
 <li><a href="/ja/docs/Web/CSS/length#q">長さの単位 <code>q</code></a> をサポートしました ({{bug(1274526)}})。</li>
 <li>{{cssxref("text-align-last")}} プロパティの接頭辞を削除しました ({{bug(1039541)}})。</li>
 <li>{{cssxref("overflow-wrap")}} をサポートしました。{{cssxref("word-wrap")}} を置き換えるものですが、こちらも別名としてサポートを続けます ({{bug(955857)}})。</li>
 <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout">CSS Grids</a> の実験的な実装が進展しました:
  <ul>
   <li>{{cssxref("grid-gap")}}、{{cssxref("grid-row-gap")}}、{{cssxref("grid-column-gap")}} プロパティで {{cssxref("&lt;percentage&gt;")}} をサポートしました ({{bug(1266268)}})。</li>
   <li>{{cssxref("align")}}、{{cssxref("justify-self")}}<code>:baseline</code>、<code>last-baseline</code> ("baseline self-alignment" として知られる) でグリッドレイアウトをサポートしました ({{bug(1221525)}})。</li>
   <li>グリッドアイテムの Baseline Content Alignment を実装しました ({{bug(1256429)}})。</li>
  </ul>
 </li>
 <li><a href="/ja/docs/Web/CSS/CSS_Masks">CSS Masks</a> の実験的な実装が進展しました:
  <ul>
   <li>{{cssxref("mask-origin")}} プロパティの初期値を、仕様書に合わせて <code>padding-box</code> から <code>border-box</code> に変更しました ({{bug(1258286)}})。</li>
   <li>{{cssxref("mask-repeat")}} プロパティで値 <code>space</code> および <code>round</code> をサポートしました ({{bug(1258626)}})。</li>
   <li>{{cssxref("mask-position")}} 属性でアニメーションを行えない問題を修正しました ({{bug(1273804)}})。</li>
  </ul>
 </li>
 <li>{{cssxref("text-emphasis")}} を制御する設定項目を削除しました。このプロパティを無効化することはできません ({{bug(1229609)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>ES2015 (ES6) の {{jsxref("Proxy")}} のトラップである {{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "getPrototypeOf()")}} および {{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "setPrototypeOf()")}} を実装しました ({{bug(888969)}})。</li>
 <li>ES2015 (ES6) の {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}、{{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}、{{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}、{{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}} メソッドおよび {{jsxref("RegExp.@@species", "RegExp[@@species]")}} getter を実装しました ({{bug(887016)}})。</li>
 <li>非推奨かつ非標準である、<code>String.prototype.</code>{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} の <code>flags</code> 引数を廃止しました ({{bug(1108382)}})。</li>
 <li>Google Chrome ブラウザとの相互運用性を高めるため {{jsxref("Date.parse()")}} で、2 桁で表す年の処理を変更しました ({{bug(1265136)}})。</li>
</ul>

<h3 id="InterfacesAPIsDOM" name="InterfacesAPIsDOM">インターフェイス/API/DOM</h3>

<h4 id="DOM_HTML_DOM" name="DOM_HTML_DOM">DOM &amp; HTML DOM</h4>

<ul>
 <li>{{domxref("DOMTokenList.supports()")}} メソッドを追加しました ({{bug(1257849)}})。</li>
 <li>{{domxref("DOMTokenList.replace()")}} メソッドを追加しました ({{bug(1224186)}})。</li>
 <li>{{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} コンストラクタのパラメータで、先頭の <code>'?'</code> 文字は無視するようになりました ({{bug(1268361)}})。</li>
 <li>{{domxref("URL.origin")}}、{{domxref("HTMLAnchorElement.origin")}}、{{domxref("HTMLAreaElement.origin")}} で <code>blob:</code> スキームの URL を使用した場合の戻り値が、誤った値である <code>null</code> ではなく、先頭の <code>blob:</code> を除いた URL のオリジンになりました ({{bug(1270451)}})。</li>
 <li>プリレンダリングモードで、{{domxref('Document.visibilityState')}} プロパティが <code>'prerender'</code> を返すようになりました ({{bug(1069772)}})。</li>
 <li>{{domxref("Window.isSecureContext")}} プロパティを実装しました ({{bug(1162772)}})。</li>
 <li>DOM4 の {{domxref("ChildNode.before()")}}、{{domxref("ChildNode.after()")}}、{{domxref("ChildNode.replaceWith()")}}、{{domxref("ParentNode.append()")}}、{{domxref("ParentNode.prepend()")}} メソッドを実装しました ({{bug(911477)}})。</li>
 <li>{{domxref("TouchList.identifiedTouch()")}} メソッドを削除しました ({{bug(1188539)}})。</li>
 <li>{{domxref("Window.open()")}} を呼び出した際に、{{domxref("Window")}} の <code>scrollbars</code> 特性をデフォルトで有効にしました。従来から、これは有効化することが強く推奨されていましたが、デフォルトでは有効化していませんでした ({{bug(1257887)}})。</li>
 <li>動画コンテンツの frame-by-frame シークを可能にする、<em>実験的</em>かつ<em>非標準</em>の {{domxref("HTMLMediaElement.seekToNextFrame()")}} メソッドを追加しました ({{bug(1235301)}}。これがどれだけ役に立つかを私たちが理解するのを助けるために試用することをお勧めしますが、<em>製品版のコードでは使用しないでください!</em></li>
 <li>{{domxref("HTMLLabelElement.form")}} プロパティが、コントロールが存在する (およびそのコントロールがフォームに関連付けられている) 場合に、ラベルのコントロールが関連付けられているフォームを返すようになりました。以前は、このプロパティを使用して label を直接フォームに関連付けていました ({{bug(1268852)}})。</li>
 <li>{{domxref("EventTarget.addEventListener()")}} の第 3 引数でサポートする値に、{{jsxref("Boolean")}} および <code>EventListenerOptions</code> を追加しました ({{bug(1266164)}} および {{bug(1266066)}})。</li>
 <li>{{domxref("KeyboardEvent.key")}} で、音量に関する値を改名しました。<code>"VolumeDown"</code> は <code>"AudioVolumeDown"</code> に、<code>"VolumeUp"</code> は <code>"AudioVolumeUp"</code> に、<code>"VolumeMute"</code> は <code>"AudioVolumeMute"</code> に変わりました。この変更により、Firefox が UI Events 仕様の最新ドラフトに準拠しました ({{bug(1272578)}})。使用可能なすべてのキーコードについては、{{SectionOnPage("/en-US/docs/Web/API/KeyboardEvent/code", "Code values")}} をご覧ください。</li>
 <li>以前は <code>"MozHomeScreen"</code>、<code>"MozCameraFocusAdjust"</code>、<code>"MozPhoneCall"</code> として参照されていたキーに、UI Events 仕様で公式な名称がつきました。<code>"GoHome"</code>、<code>"CameraFocus"</code>、<code>"Call"</code> になります。Firefox 49 で、新しい名称を使用するように更新しました ({{bug(1272599)}})。使用可能なすべてのキーコードについては、{{SectionOnPage("/en-US/docs/Web/API/KeyboardEvent/code", "Code values")}} をご覧ください。</li>
 <li>キーの値 <code>"Separator"</code> および <code>"MediaSkip"</code> は、非推奨になったうえに使用されていませんので、削除しました ({{bug(1232919)}})。</li>
 <li>キーの値 <code>"Hyper"</code> および <code>"Super"</code> とそれらに対応するキーコードを、過去のモディファイアキーを表すように追加しました ({{bug(1232919)}})。</li>
 <li>マルチメディア数値キーパッド用に、2 つのキーの値を追加しました: <code>"Key11"</code>、<code>"Key12"</code> ({{bug(1232919)}})。</li>
 <li>オーディオコントロールキー用に、以下の新たなキーの値を追加しました: <code>"AudioBassBoostToggle"</code>、<code>"AudioTrebleDown"</code>、<code>"AudioTrebleUp"</code> ({{bug(123919)}})。</li>
 <li>マイクコントロールキー用に、以下のキーの値を追加しました: <code>"MicrophoneToggle"</code>、<code>"MicrophoneVolumeDown"</code>、<code>"MicrophoneVolumeUp"</code>、<code>"MicrophoneVolumeMute"</code> ({{bug(123919)}})。</li>
 <li>音声認識デバイス用に、以下の新たなキーの値を追加しました: "<code>SpeechCorrectionList"</code>、<code>"SpeechInputToggle"</code> ({{bug(1232919)}})。</li>
 <li>電話機の特殊キーをサポートするため、以下のキーの値を追加しました: <code>"AppSwitch"</code>、<code>"Call"</code>、<code>"CameraFocus"</code>、<code>"EndCall"</code>、<code>"GoBack"</code>、<code>"GoHome"</code>、<code>"HeadsetHook"</code>、<code>"LastNumberRedial"</code>、<code>"Notification"</code>、<code>"MannerMode"</code>、<code>"VoiceDial"</code> ({{bug(1232919)}})。</li>
 <li>アプリケーションキー用に、以下のキーの値を追加しました: <code>"LaunchContacts"</code>、<code>"LaunchPhone"</code> ({{bug(1232919)}})。</li>
 <li>テレビデバイス用に、以下の新たなキーの値を追加しました: <code>"TV3DMode"</code>、<code>"TVAntennaCable"</code>、<code>"TVAudioDescription"</code>、<code>"TVAudioDescriptionMixDown"</code>、<code>"TVAudioDescriptionMixUp"</code>、<code>"TVContentsMenu"</code>、<code>"TVDataService"</code>、<code>"TVInput"</code>、<code>"TVInputComponent1"</code>、<code>"TVInputComponent2"</code>、<code>"TVInputComposite1"</code>、<code>"TVInputComposite2"</code>、<code>"TVInputHDMI1"</code>、<code>"TVInputHDMI2"</code>、<code>"TVInputHDMI3"</code>、<code>"TVInputHDMI4"</code>、<code>"TVInputVGA1"</code>、<code>"TVMediaContext"</code>、<code>"TVNetwork"</code>、<code>"TVNumberEntry"</code>、<code>"TVRadioService"</code>、<code>"TVSatellite"</code>、<code>"TVSatelliteBS"</code>、<code>"TVSatelliteCS"</code>、<code>"TVSatelliteToggle"</code>、<code>"TVTerrestrialAnalog"</code>、<code>"TVTerrestrialDigital"</code>、<code>"TVTimer"</code>、<code>"DVR"</code> ({{bug(1232919)}})。</li>
 <li>キーの値 <code>"MediaSelect"</code> を、標準のキーの値である <code>"LaunchMediaPlayer"</code> に置き換えました ({{bug(1272592)}})。</li>
 <li>メディアプレイヤーの付加機能キーの値を追加しました。<code>"MediaAudioTrack"</code>、<code>"MediaSkipBackward"</code>、<code>"MediaSkipForward"</code>、<code>"MediaStepBackward"</code>、<code>"MediaStepForward"</code>、<code>"MediaTopMenu"</code>、<code>"NavigateIn"</code>、<code>"NavigateNext"</code>、<code>"NavigateOut"</code>、<code>"NavigatePrevious"</code> です ({{bug(1232919)}})。</li>
</ul>

<h4 id="Canvas" name="Canvas">Canvas</h4>

<ul>
 <li>Canvas にフィルターを追加する機能を提供する {{domxref("CanvasRenderingContext2D.filter")}} プロパティがデフォルトで有効になり、設定の切り替えが不要になりました ({{bug(1173545)}})。</li>
</ul>

<h4 id="WebGL" name="WebGL">WebGL</h4>

<ul>
 <li>{{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} の {{domxref("EXT_color_buffer_float")}} 拡張を実装しました ({{bug(1129332)}})。</li>
 <li>WebGL コンテキストの作成が失敗したときに発生する、{{Event("webglcontextcreationerror")}} イベントを実装しました ({{bug(1271478)}})。デバッグや製品版のエラー制御において、何が誤っているかの理解を助けるために使用してください。</li>
</ul>

<h4 id="IndexedDB" name="IndexedDB">IndexedDB</h4>

<ul>
 <li>IndexedDB のインデックスがリネーム可能になりました。{{domxref("IDBIndex.name")}} プロパティが読み書き可能になっています ({{bug(1118028)}})。</li>
 <li>{{domxref("IDBObjectStore")}} もリネーム可能になりました。{{domxref("IDBObjectStore.name")}} プロパティが読み書き可能になっています ({{bug(1118028)}})。</li>
</ul>

<h4 id="Service_Workers_and_related" name="Service_Workers_and_related">Service Worker 関連</h4>

<ul>
 <li><a href="/ja/docs/Web/API/Fetch_API">Fetch API</a> の {{domxref("Response")}} オブジェクトに、リダイレクトされたリクエストのレスポンスであるかを示す {{domxref("Response.redirected", "redirected")}} プロパティを実装しました。このプロパティを使用する前に、ドキュメントでセキュリティ関連の注意事項を確認してください ({{bug(1243792)}})。</li>
 <li><a href="/ja/docs/Web/API/Permissions_API">Permissions API</a> で、Firefox は <code>PermissionDescriptor</code> ディクショナリータイプの 'push' のサポートを廃止しました (仕様書では <code>PushPermissionDescriptor</code> として言及されています)。Firefox は <code>userVisibleOnly</code> ステータスの制御で代わりにクォータシステムに依存しており、<code>PushPermissionDescriptor</code> インスタンスに出くわしたときにエラーが発生していたためです ({{bug(1266821)}})。このディクショナリの削除により、Firefox は単に無視するようになりました。</li>
</ul>

<h4 id="Media_Streams" name="Media_Streams">Media Stream</h4>

<ul>
 <li>以前はユーザーが 2 種類のハードウェアのうち一方しか使用できない状況で、音声および映像を要求する {{domxref("MediaDevices.getUserMedia()")}} の呼び出しが成功していました。この問題を修正しました ({{bug(802326)}})。</li>
 <li>以前のバージョンの Firefox では、合致するデバイスのうち (両方ではなく) 一方のアクセスが拒否されたにもかかわらず、音声および映像を要求する {{domxref("MediaDevices.getUserMedia()")}} の呼び出しが成功していました。この問題を修正しました ({{bug(802326)}})。これはユーザーインターフェイスを若干変更させており、ユーザーが許可を求められる際の選択肢で "No audio" や "No video" を削除しました。</li>
 <li>{{domxref("MediaStream.getTrackById()")}} メソッドを実装しました ({{bug(1208390)}})。</li>
</ul>

<h4 id="WebRTC" name="WebRTC">WebRTC</h4>

<ul>
 <li>指定したストリームを構成していないトラックをコネクションへ追加できるように、{{domxref("RTCPeerConnection.addTrack()")}} メソッドを更新しました。代わりに、コネクションの受信側でトラックをまとめるためにストリームが使用されます ({{bug(1271669)}})。</li>
</ul>

<h4 id="New_APIs" name="New_APIs">新規 API</h4>

<ul>
 <li>{{domxref("PerformanceObserver")}} API を、Nightly でデフォルトで有効にしました ({{bug(1271487)}})。他のバージョンの Firefox 49 では、デフォルトで無効化しています ({{bug(1271487)}})。</li>
</ul>

<h4 id="Others" name="Others">その他</h4>

<ul>
 <li>{{domxref("XMLHttpRequest.getResponseHeader()")}} および {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} で、設定項目 <code>network.http.keep_empty_response_headers_as_empty_string</code> が <code>true</code> に設定されている場合は、空のヘッダーを返すようになりました ({{bug(669259)}})。</li>
 <li>Firefox OS 限定の <a href="/ja/docs/Archive/Firefox_OS/API/Data_Store_API">Data Store API</a> を削除しました ({{bug(1261009)}})。</li>
 <li><a href="/ja/docs/Web/API/Fullscreen_API">Fullscreen API</a> の {{domxref("Document.onfullscreenchange")}}、{{domxref("Document.onfullscreenerror")}} イベントハンドラーを、 {{domxref("Element")}} から削除しました。そこでは発生していなかったためです。ただし、接頭辞付きのイベントハンドラーは互換性のために維持しています ({{bug(1270386)}})。これは設定項目 <code>full-screen-api.unprefix.enabled</code> で制御されており、デフォルトで有効化していないことに注意してください ({{bug(1268749)}})。</li>
 <li>廃止済みの {{domxref("Document.mozFullScreen")}} プロパティの接頭辞を削除して、{{domxref("Document.fullscreen")}} としました ({{bug(1269157)}}}。これは設定項目 <code>full-screen-api.unprefix.enabled</code> で制御されており、デフォルトで有効化していないことに注意してください ({{bug(1268749)}})。</li>
 <li>読み取り専用の {{domxref("Document.fullscreenElement")}} および {{domxref("Document.fullscreenEnabled")}} プロパティで、値を変更しようとしても例外が発生しないようになりました。代わりに新しい値は暗黙的に無視され、setter 関数は何も行いません ({{bug(1269798)}})。</li>
 <li>{{domxref("DataTransfer.getData()")}} で、どのような種類のデータでもクリップボードから取り出せるようになりました。以前は、特定の MIME タイプのデータのみ取り出し可能でした ({{bug(860857)}})。</li>
 <li><code>PerformanceCompositeTiming</code> および <code>PerformanceRenderTiming</code> の 2 つのインターフェイスで構成される、<a href="/ja/docs/Web/API/Frame_Timing_API">Frame Timing API</a> の実装を削除しました。仕様書が全面的に書き直されたためです ({{bug(1271846)}})。</li>
 <li>仕様書に合わせて、{{domxref("VTTCue.positionAlign")}} プロパティが <code>Align</code> 列挙型ではなく <code>PositionAlign</code> 列挙型を返すようになりました ({{bug(1276129)}})。</li>
 <li><a href="/ja/docs/Web/API/Web_Speech_API#Speech_synthesis">Web Speech API</a> の、音声合成の部分をサポートしました ({{bug(1268633)}})。</li>
 <li><a href="/ja/docs/Web/API/Performance_Timeline">Performance Timeline API</a> を、Nightly でデフォルトで有効化しました (Aurora、Beta、Release では無効です)。</li>
 <li>{{event("install")}} イベントおよび {{domxref("Window.oninstall")}} イベントハンドラーを <a href="/ja/docs/Web/Manifest">Web Manifests</a> 向けにサポートしました ({{bug(1265279)}})。</li>
 <li><a href="/ja/docs/Web/API/Web_Audio_API">Web Audio API</a> の {{domxref("AudioContext.createPeriodicWave()")}} メソッドを使用するとき、結果の周期的な波形をノーマライズすべきかを、第 3 引数にディクショナリーオブジェクトを含めることで指定可能になりました。このオブジェクトにはひとつのパラメータを含めて <code>{disableNormalization: true}</code> のようにします ({{bug(1265405)}})。</li>
 <li>WebVTT API で {{domxref("VTTCue.positionAlign")}} が、仕様書どおりに正しく <code>PositionAlignSetting</code> 列挙型を返すようになりました。以前は <code>AlignSetting</code> 列挙型を返していました ({{bug(1276129)}})。</li>
 <li>Web Speech API の音声合成の部分を、すべてのデスクトップブラウザーでデフォルトで有効にしました ({{bug(1268633)}})。</li>
 <li><a href="/ja/docs/Web/API/Web_Animations_API">Web Animations API</a> の {{domxref("Animation.Animation()", "Animation()")}} コンストラクターが、null タイムラインを受け入れるようになりました ({{bug(1096776)}})。</li>
</ul>

<h3 id="MathML" name="MathML">MathML</h3>

<p><em>変更なし。</em></p>

<h3 id="SVG" name="SVG">SVG</h3>

<ul>
 <li>非推奨の {{SVGElement('altGlyph')}}、{{SVGElement('altGlyphDef')}}、{{SVGElement('altGlyphItem')}} 要素のサポートを廃止しました ({{bug(1260032)}})。</li>
</ul>

<h3 id="AudioVideo" name="AudioVideo">Audio/Video</h3>

<p><em>変更なし。</em></p>

<h3 id="Plugins_and_Flash" name="Plugins_and_Flash">プラグインと Flash</h3>

<p>Firefox 49 より、サイトが正しく機能するために必要ではない特定の種類の Flash コンテンツをデフォルトでブロックするようになりました。この動作は設定項目 <code>browser.safebrowsing.blockedURIs.enabled</code> で制御しており、サイトのユーザービリティに大きな影響を与えることなく、一般的にはサイトや Firefox のパフォーマンスを向上する助けになります。また、クラッシュの主要な原因を取り除くことにより、ブラウジング体験の安定性を向上する助けにもなります。ブロックされる Flash モジュールにはフィンガープリンティングのためだけに使用されるものやいくつかの "スーパー Cookie" モジュールが含まれまており、将来はより多くの種類のモジュールをブロックするように拡張するでしょう。詳しくは {{bug(1275591)}} をご覧ください。</p>

<p>これはプラグインがない未来への行程の、次のステップになります。機能を果たすためにプラグインを必要としない段階に、HTML はとても近づいています。</p>

<h2 id="HTTP" name="HTTP">HTTP</h2>

<ul>
 <li><code><a href="/ja/docs/Web/HTTP/Headers/Cache-Control">Cache-Control: immutable</a></code> ディレクティブを実装しました ({{bug(1267474)}})。詳しくは <a href="https://bitsup.blogspot.de/2016/05/cache-control-immutable.html">ブログ記事</a> もご覧ください。</li>
 <li>{{HTTPHeader("Content-Security-Policy")}} の {{CSP("require-sri-for")}} を実装しました ({{bug(1265318)}})。</li>
</ul>

<h2 id="Networking" name="Networking">ネットワーク</h2>

<ul>
 <li><a href="/ja/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file">Proxy Auto-Configuration (PAC)</a> の実装を更新しました。<code>weekdayRange</code>、<code>dateRange</code>、<code>timeRange</code> で "リバースレンジ" をサポートしました。例えば <code>weekdayRange("SAT", "MON")</code> は、当日が土曜日、日曜日、月曜日である場合に <code>true</code> になります ({{bug(1251332)}})。</li>
</ul>

<h2 id="Security" name="Security">セキュリティ</h2>

<ul>
 <li><a href="/ja/docs/Web/Security/Secure_Contexts">secure contexts</a> を必要とする機能を使用できるコンテキストであるかを示す、{{domxref("Window.isSecureContext")}} プロパティを実装しました ({{bug(1162772)}})。</li>
</ul>

<h2 id="Compatibility" name="Compatibility">互換性</h2>

<p>既存のコンテンツとの互換性を高めるために、一部の webkit 接頭辞つきプロパティおよび属性を Firefox で受け入れるようになりました。</p>

<ul>
 <li>以下のプロパティは、<code>-webkit</code> 接頭辞がついていても動作します:

  <ul>
   <li>{{cssxref("-webkit-align-items")}}</li>
   <li>{{cssxref("-webkit-align-content")}}</li>
   <li>{{cssxref("-webkit-align-self")}}</li>
   <li>{{cssxref("-webkit-animation")}}</li>
   <li>{{cssxref("-webkit-animation-delay")}}</li>
   <li>{{cssxref("-webkit-animation-direction")}}</li>
   <li>{{cssxref("-webkit-animation-duration")}}</li>
   <li>{{cssxref("-webkit-animation-fill-mode")}}</li>
   <li>{{cssxref("-webkit-animation-iteration-count")}}</li>
   <li>{{cssxref("-webkit-animation-name")}}</li>
   <li>{{cssxref("-webkit-animation-play-state")}}</li>
   <li>{{cssxref("-webkit-animation-timing-function")}}</li>
   <li>{{cssxref("-webkit-backface-visibility")}}</li>
   <li>{{cssxref("-webkit-background-clip")}}</li>
   <li>{{cssxref("-webkit-background-origin")}}</li>
   <li>{{cssxref("-webkit-background-size")}}</li>
   <li>{{cssxref("-webkit-border-bottom-left-radius")}}</li>
   <li>{{cssxref("-webkit-border-bottom-right-radius")}}</li>
   <li>{{cssxref("-webkit-border-image")}}</li>
   <li>{{cssxref("-webkit-border-top-left-radius")}}</li>
   <li>{{cssxref("-webkit-border-top-right-radius")}}</li>
   <li>{{cssxref("-webkit-border-radius")}}</li>
   <li>{{cssxref("-webkit-box-shadow")}}</li>
   <li>{{cssxref("-webkit-filter")}}</li>
   <li>{{cssxref("-webkit-flex")}}</li>
   <li>{{cssxref("-webkit-flex-basis")}}</li>
   <li>{{cssxref("-webkit-flex-direction")}}</li>
   <li>{{cssxref("-webkit-flex-flow")}}</li>
   <li>{{cssxref("-webkit-flex-grow")}}</li>
   <li>{{cssxref("-webkit-flex-shrink")}}</li>
   <li>{{cssxref("-webkit-flex-wrap")}}</li>
   <li>{{cssxref("-webkit-justify-content")}}</li>
   <li>{{cssxref("-webkit-order")}}</li>
   <li>{{cssxref("-webkit-perspective")}}</li>
   <li>{{cssxref("-webkit-perspective-origin")}}</li>
   <li>{{cssxref("-webkit-text-size-adjust")}}</li>
   <li>{{cssxref("-webkit-transform")}}</li>
   <li>{{cssxref("-webkit-transform-origin")}}</li>
   <li>{{cssxref("-webkit-transform-style")}}</li>
   <li>{{cssxref("-webkit-transition")}}</li>
   <li>{{cssxref("-webkit-transition-delay")}}</li>
   <li>{{cssxref("-webkit-transition-duration")}}</li>
   <li>{{cssxref("-webkit-transition-property")}}</li>
   <li>{{cssxref("-webkit-transition-timing-function")}}</li>
   <li>{{cssxref("-webkit-user-select")}}</li>
  </ul>
 </li>
 <li>以下のプロパティは、同等の接頭辞つきプロパティに紐づけています:
  <ul>
   <li>{{cssxref("-webkit-box-flex")}}</li>
   <li>{{cssxref("-webkit-box-ordinal-group")}}</li>
   <li>{{cssxref("-webkit-box-orient")}}</li>
   <li>{{cssxref("-webkit-box-align")}}</li>
   <li>{{cssxref("-webkit-box-pack")}}</li>
  </ul>
 </li>
 <li>{{cssxref("&lt;image&gt;")}} の値について:
  <ul>
   <li>以下の関数は、接頭辞なしの同等物に紐づけています: {{cssxref("-webkit-linear-gradient", "-webkit-linear-gradient()")}}、{{cssxref("-webkit-radial-gradient", "-webkit-radial-gradient()")}}、{{cssxref("-webkit-repeating-linear-gradient", "-webkit-repeating-linear-gradient()")}}、{{cssxref("-webkit-repeating-radial-gradient","-webkit-repeating-radial-gradient()")}}。</li>
   <li>旧式の <code>-webkit-gradient</code> をサポートします (また、正規のグラデーションに変換します)。</li>
  </ul>
 </li>
 <li>以下の {{cssxref("display")}} の値を変換します:
  <ul>
   <li><code>-webkit-box</code> を <code>-moz-box</code> に変換</li>
   <li><code>-webkit-flex</code> を <code>flex</code> に変換</li>
   <li><code>-webkit-inline-box</code> を <code>inline-flex</code> に変換</li>
   <li><code>-webkit-inline-flex</code> を <code>-moz-inline-flex</code> に変換</li>
  </ul>
 </li>
 <li>以下のプロパティをサポートします (接頭辞なしの同等物に紐づけません):
  <ul>
   <li>{{cssxref("-webkit-text-fill-color")}}</li>
   <li>{{cssxref("-webkit-text-stroke-color")}}</li>
   <li>{{cssxref("-webkit-text-stroke-width")}}</li>
   <li>{{cssxref("-webkit-text-stroke")}}</li>
  </ul>
 </li>
 <li>{{domxref("WebKitCSSMatrix")}} インターフェイスを {{domxref("DOMMatrix")}} の別名にしました。</li>
 <li>以下のメディアクエリー特性を実装しました:
  <ul>
   <li><code>-webkit-min-device-pixel-ratio</code> を <code><a href="/ja/docs/Web/CSS/@media/resolution">min-resolution</a></code> の別名として、同じ値 (<code>dppx</code>) で実装しました。ただし、この機能は <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1237720">デフォルトで無効</a> です (about:config の設定 <code>layout.css.prefixes.device-pixel-ratio-webkit</code> で制御)。</li>
   <li><code>-webkit-max-device-pixel-ratio</code> を <code><a href="/ja/docs/Web/CSS/@media/resolution">max-resolution</a></code> の別名として、同じ値 (<code>dppx</code>) で実装しました。この機能も about:config の同じ設定で、デフォルトで無効にしています。</li>
   <li><code><a href="/ja/docs/Web/CSS/@media/-webkit-transform-3d">-webkit-transform-3d</a></code> がマッチするようになりました。3D Transform をサポートすることを示します。</li>
  </ul>
 </li>
</ul>

<h2 id="Changes_for_add-on_and_Mozilla_developers" name="Changes_for_add-on_and_Mozilla_developers">アドオン開発者と Mozilla 開発者向けの変更点</h2>

<h3 id="WebExtensions" name="WebExtensions">WebExtensions</h3>

<ul>
 <li>{{WebExtAPIRef("history")}} をサポートしました。この機能でブラウザーの履歴にアクセスでき、履歴の検索、以前アクセスしたページの情報を取得、履歴項目の追加や削除を可能にするメソッドがあります。</li>
 <li>tabs API に {{WebExtAPIRef("tabs.removeCSS()")}} メソッドを追加しました。このメソッドで、以前に {{WebExtAPIRef("tabs.insertCSS()")}} を呼び出して挿入した CSS を削除できます。</li>
</ul>

<h3 id="Interfaces" name="Interfaces">インターフェイス</h3>

<ul>
 <li>{{domxref("EventTarget.addEventListener()")}} で、XBL または Firefox の chrome で実行するコードに限り有効化されている値 <code>mozSystemGroup</code> をサポートしました。これは、リスナーがシステムグループに追加されるかを示す {{jsxref("Boolean")}} です ({{bug(1274520)}})。</li>
</ul>

<h3 id="Other" name="Other">その他</h3>

<p><em>変更なし。</em></p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.jp/firefox/49.0/releasenotes/">Firefox 49.0 リリースノート</a></li>
 <li><a href="https://dev.mozilla.jp/2016/07/firefox-49-addon-compatibility/">Firefox 49 アドオン互換性情報</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(48)}}</p>
