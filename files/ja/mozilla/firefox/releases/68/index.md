---
title: Firefox 68 for developers
slug: Mozilla/Firefox/Releases/68
tags:
  - '68'
  - Firefox
  - Mozilla
  - Release
translation_of: Mozilla/Firefox/Releases/68
---
<p>{{FirefoxSidebar}}</p>

<p class="summary">Firefox 68 は、米国時間 2019 年 7 月 9 日 にリリースされました。このページでは、開発者に影響する Firefox 68 の変更点をまとめています。</p>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<h4 id="Browserweb_console" name="Browserweb_console">ブラウザー/ウェブコンソール</h4>

<ul>
 <li>ルールで使用した DOM 要素のノードリストなど、<a href="/ja/docs/Tools/Web_Console/Console_messages#CSS">CSS 警告に関するより多くの情報</a> をウェブコンソールで表示するようになりました ({{bug(1093953)}})。</li>
 <li>正規表現を使用してウェブコンソールの内容をフィルタリングできるようになりました ({{bug(1441079)}})。</li>
 <li>ブラウザーコンソールの "<em>コンテンツメッセージを表示</em>" のチェックボックスで、コンテンツプロセスのメッセージを表示/非表示できるようになりました ({{bug(1260877)}})。</li>
</ul>

<h4 id="JavaScript_debugger" name="JavaScript_debugger">JavaScript デバッガー</h4>

<ul>
 <li><kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>F</kbd> (Windows や Linux) または <kbd>Shift</kbd> + <kbd>Cmd</kbd> + <kbd>F</kbd> (macOS) を押下すると、デバッガーで現在のプロジェクトのすべてのファイルから <a href="/ja/docs/Tools/Debugger/How_to/Search#Searching_in_all_files">検索</a> できるようになりました ({{bug(1320325)}})。</li>
</ul>

<h4 id="Network_monitor" name="Network_monitor">ネットワークモニター</h4>

<ul>
 <li>ネットワークモニターの <a href="/ja/docs/Tools/Network_Monitor/request_list#Filtering_requests">要求リスト</a> で、特定の URL をブロックできるようになりました ({{bug(1151368)}})。</li>
 <li>コンテキストメニューの <a href="/ja/docs/Tools/Network_Monitor/request_list#Context_menu">再送信</a> コマンドを使用して、メソッド、URL、パラメーター、ヘッダーを編集せずにネットワーク要求を再送信できます ({{bug(1422014)}})。</li>
 <li>ネットワークモニターの <a href="/ja/docs/Tools/Network_Monitor/request_details#Headers">ヘッダー</a> タブのコンテキストメニューで、すべてあるいは一部のヘッダー情報を JSON 形式でクリップボードにコピーできるようになりました ({{bug(1442249)}})。</li>
</ul>

<h4 id="Page_inspector" name="Page_inspector">インスペクター</h4>

<ul>
 <li>インスペクターの <a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Examine_CSS_rules">ルールパネル</a> に、print メディアクエリーの表示を切り替えるボタンを追加しました ({{bug(1534984)}})。</li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Edit_fonts">フォントパネル</a> に、<code>letter-spacing</code> を変更するスライダーを追加しました ({{bug(1536237)}})。</li>
 <li>あるスタイルがなぜ適用されないかをわかりやすくするため、値が無効であるルールや未サポートの CSS プロパティの隣に警告アイコンを表示するようになりました ({{bug(1306054)}})。</li>
</ul>

<h4 id="Storage_inspector" name="Storage_inspector">ストレージインスペクター</h4>

<ul>
 <li>ストレージインスペクターで項目を選択して Back Space キーを押下すると、<a href="/ja/docs/Tools/Storage_Inspector#Local_storage_Session_storage">ローカルストレージやセッションストレージを削除</a> できるようになりました ({{bug(1522893)}})。</li>
</ul>

<h4 id="Other" name="Other">その他</h4>

<ul>
 <li><a href="/ja/docs/Tools/Accessibility_inspector">アクセシビリティインスペクター</a> に<em>問題のチェック</em>機能を追加しました。ウェブページでアクセシビリティの問題を明らかにする検査ツールが含まれています。まず使用できるツールは<em>コントラスト</em>で、色のコントラストの問題を明らかにします。</li>
 <li>内部拡張機能 (システムアドオンや非表示の拡張機能) を <a href="/ja/docs/Tools/about:debugging">about:debugging</a> で表示するかを制御する設定項目を、<code>devtools.aboutdebugging.showSystemAddons</code> から <code>devtools.aboutdebugging.showHiddenAddons</code> に変更しました ({{bug(1544372)}})。</li>
 <li><a href="/ja/docs/Tools/Responsive_Design_Mode">レスポンシブデザインモード</a> を再設計しました。<em>端末設定</em>ダイアログ (デバイス選択メニュー &gt; <em>リストを編集...</em>) がより直感的でシンプルになりました ({{bug(1487857)}})。</li>
</ul>

<h4 id="Removals" name="Removals">廃止</h4>

<ul>
 <li><a href="/ja/docs/Tools/about:debugging">about:debugging</a> ページから "アドオンのデバッグを有効化" のチェックボックスを削除しました ({{bug(1544813)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li>テキストトラックがメディア要素に含まれている場合に、{{domxref("TextTrack")}} 自体に加えて {{HTMLElement("track")}} 要素 ({{domxref("HTMLTrackElement")}} で表される) が {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}} イベントを受け取るようになりました ({{bug(1548731)}})。</li>
 <li>動作が異なりますが、{{htmlelement("link")}} 要素で <code>disabled</code> 属性を再びサポートしました。<code>rel="stylesheet"</code> を持つ <code>&lt;link&gt;</code> 要素で <code>disabled</code> を設定すると、ページを読み込むときに参照先のスタイルシートが読み込まれなくなります。<code>disabled</code> 属性を <code>false</code> に設定するか削除すると、必要に応じて読み込まれます ({{bug(1281135)}})。</li>
</ul>

<h4 id="Removals_2" name="Removals_2">廃止</h4>

<ul>
 <li><code><a href="/ja/docs/Web/HTML/Element/meta">&lt;meta http-equiv="set-cookie"&gt;</a></code> のサポートを廃止しました ({{bug(1457503)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Scroll_Snap">CSS Scroll Snapping</a> を、最新バージョンの仕様書に更新しました ({{bug(1312163)}}) および ({{bug(1544136)}})。変更点は以下のとおりです:

  <ul>
   <li><code>scroll-padding</code> 関係のプロパティ ({{bug(1373832)}})</li>
   <li><code>scroll-margin</code> 関係のプロパティ ({{bug(1373833)}})</li>
   <li>{{CSSxRef("scroll-snap-align")}} ({{bug(1373835)}})</li>
  </ul>
 </li>
 <li>ほかのブラウザーとの互換性のため、{{CSSxRef("-webkit-line-clamp")}} プロパティを実装しました ({{bug(866102)}})。</li>
 <li>{{CSSxRef("::marker")}} 疑似要素 ({{bug(205202)}}) と、::marker のアニメーション ({{bug(1538618)}}) をサポートしました。</li>
 <li>{{CSSxRef("currentColor")}} を計算値に変更しました ({{cssxref("color")}} プロパティを除く) ({{bug(760345)}})。</li>
 <li>長さの単位 'ch' を、仕様書に合うよう修正しました ('0' のグリフがない場合は高さにフォールバックする) ({{bug(282126)}})。</li>
 <li>{{CSSxRef("counter-set")}} プロパティを実装しました ({{bug(1518201)}})。</li>
 <li>内蔵の 'list-item' カウンターを使用したリストの番号付けを実装して、番号付けの不具合を修正しました ({{bug(288704)}})。</li>
 <li><code><a href="/ja/docs/Web/CSS/::part">::part()</a></code> にセレクターのマッチングとパースを実装しました ({{bug(1545430)}}) および ({{bug(1545425)}})。</li>
 <li>{{SVGElement("mask")}}、{{SVGElement("marker")}}、{{SVGElement("pattern")}}、{{SVGElement("clipPath")}} など、間接的に描画されるもので <a href="/ja/docs/Web/CSS/CSS_Transforms">CSS Transforms</a> をサポートしました ({{bug(1323962)}})。</li>
 <li>
  <p>互換性の理由でさまざまなグラデーションプロパティ ({{cssxref("linear-gradient")}}、{{cssxref("radial-gradient")}}、{{cssxref("repeating-radial-gradient")}}) の接頭辞がついたものを使用可能に維持していますが、接頭辞がないものにより似た形で扱うように処理を変更しました。これは、既存のスタイルの一部が正しく動作しなくなることを意味します。</p>

  <p>特に、角度と位置の両方を持つ複雑な構文は動作しません。また <code>&lt;side-or-corner&gt;</code> の <code>to</code> キーワードは、接頭辞があるグラデーションプロパティで必須ではありません。広くサポートされているため、接頭辞がない標準のグラデーションプロパティを使用することが推奨されます ({{bug(1547939)}})。</p>
 </li>
</ul>

<h4 id="Removals_3" name="Removals_3">廃止</h4>

<ul>
 <li>{{CSSxRef("scroll-snap-coordinate")}}、{{CSSxRef("scroll-snap-destination")}}、{{CSSxRef("scroll-snap-type-x")}}、{{CSSxRef("scroll-snap-type-y")}} を削除しました。</li>
 <li>{{CSSxRef("scroll-snap-type")}} プロパティがロングハンドプロパティになりました。<code>scroll-snap-type:mandatory</code> のような、以前のショートハンド構文は動作しません。</li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<p><em>変更なし。</em></p>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>{{jsxref("BigInt")}} プリミティブをデフォルトで有効にしました ({{bug(1527902)}})。</li>
 <li>String のジェネリックメソッドを削除しました ({{bug(1222552)}})。詳しくは <a href="/ja/docs/Web/JavaScript/Reference/Errors/Deprecated_String_generics">非推奨に関する警告</a> をご覧ください。</li>
</ul>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="CSS_Object_Model_(CSSOM)" name="CSS_Object_Model_(CSSOM)">CSS Object Model (CSSOM)</h4>

<ul>
 <li>時代遅れの {{domxref("CSSStyleSheet.rules", "rules")}} プロパティ、{{domxref("CSSStyleSheet.addRule", "addRule()")}} メソッド、{{domxref("CSSStyleSheet.removeRule", "removeRule()")}} メソッドを {{domxref("CSSStyleSheet")}} インターフェイスに追加しました。これらは Internet Explorer 9 で導入されて完全には根絶されておらず、いまだに使用しているわずかなサイトの互換性を向上するために追加しました ({{bug(1545823)}})。</li>
</ul>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
 <li><a href="/ja/docs/Web/API/Visual_Viewport_API">Visual Viewport API</a> が Android 版でデフォルトで有効になりました ({{bug(1512813)}})。デスクトップ版 Firefox にこの API を追加する作業は {{bug(1551302)}} で追跡しています。</li>
 <li>{{domxref("Window")}} の <code><a href="/ja/docs/Web/API/Window/open#noreferrer">noreferrer</a></code> 機能をサポートしました。これを指定するとホスト名、IP アドレス、URL、その他のホスト端末を識別する情報を共有せずに、新しいウィンドウのコンテンツを読み込みます ({{bug(1527287)}})。</li>
 <li><code>HTMLImageElement</code> の {{domxref("HTMLImageElement.decode", "decode()")}} メソッドを実装しました。これは画像を、DOM に追加する前に読み込みおよびデコードするために使用できます ({{bug(1501794)}})。</li>
 <li>{{domxref("XMLHttpRequest")}} を、{{domxref("XMLHttpRequest.responseType", "responseType")}} で非標準の値 <code>moz-chunked-arraybuffer</code> を受け入れないように更新しました。この値を使用しているコードは、<a href="/ja/docs/Web/API/Streams_API/Using_readable_streams#Consuming_a_fetch_as_a_stream">Fetch API をストリームとして使用する</a> ように更新してください ({{bug(1120171)}})。</li>
 <li><code>XMLHttpRequest</code> で {{domxref("Window.unload_event", "unload")}}、{{domxref("Window.beforeunload_event", "beforeunload")}}、{{domxref("Window.pagehide_event", "pagehide")}} イベントを処理しているときに同期リクエストを行うと、コンソールに警告を出力するようになりました ({{bug(980902)}})。</li>
 <li>{{domxref("Document.cookie", "cookie")}} プロパティを {{domxref("HTMLDocument")}} インターフェイスから {{domxref("Document")}} インターフェイスへ移動しました。{{Glossary("HTML")}} 以外の文書でも Cookie を使用できます ({{bug(144795)}})。</li>
 <li>{{domxref("HTMLElement.focus()")}} および {{domxref("SVGElement.focus()")}} メソッドで、新たにフォーカスを得た要素が表示されるようにブラウザーがスクロールすることをブロックするかを指定する論理値の <code>preventScroll</code> オプションをもつ、省略可能なオブジェクトを受け入れるようになりました ({{bug(1374045)}})。</li>
</ul>

<h4 id="DOM_events" name="DOM_events">DOM イベント</h4>

<ul>
 <li><a href="/ja/docs/Mozilla/Firefox_for_Android">Android 版 Firefox</a> が、最初のフレームが描画された後まで {{domxref("Window.resize_event", "resize")}} イベントを誤って送信する不具合を修正しました。このイベントが発生しないと想定するサイトとのウェブ互換性が向上します ({{bug(1528052)}})。</li>
 <li>マウスの第 1 ボタン以外のボタンのイベントが、より仕様書に近い形で発生するようになりました。第 1 ボタン以外のボタンをクリックしても {{domxref("Element.click_event", "click")}} イベントが発生しなくなり、代わりに {{domxref("Element.auxclick_event", "auxclick")}} を使用します。また、{{domxref("Element.dblclick_event", "dblclick")}} は第 1 ボタンだけで発生します ({{bug(1379466)}})。</li>
 <li>独自仕様の {{domxref("MouseEvent.mozPressure")}} プロパティが非推奨になり、コンソールへ警告を表示するようになりました ({{bug(1165211)}})。</li>
</ul>

<h4 id="Media_Web_Audio_and_WebRTC" name="Media_Web_Audio_and_WebRTC">メディア、Web Audio、WebRTC</h4>

<ul>
 <li>Google Play ストアの規約変更により Android 版 Firefox 68 から、WebRTC 接続で AVC/H.264 動画を扱っていた OpenH264 コーデックをダウンロードおよびインストールすことができなくなりました。このため Android デバイスに新規インストールした Firefox は、WebRTC 接続で AVC をサポートしません。すでにコーデックをダウンロードしている旧バージョンの Firefox を更新した場合は、引き続き動作します。これは、ほかのプラットフォームには<em>影響がありません</em>。詳しくは <a href="https://support.mozilla.org/en-US/kb/firefox-android-openh264">SUMO の記事</a> または {{bug(1548679)}} をご覧ください。</li>
 <li>{{domxref("RTCPeerConnection.icecandidate", "icecandidate")}} イベントハンドラーに <code>null</code> 候補が渡されたことを認識するように、WebRTC を更新しました。後続の候補がないことを示しており、これが発生するとICE の収集 ({{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}}) が <code>complete</code> 状態になります ({{bug(1318167)}})。</li>
 <li>{{domxref("RTCRtpReceiver")}} の {{domxref("RTCRtpReceiver.getContributingSources", "getContributingSources()")}} および {{domxref("RTCRtpReceiver.getSynchronizationSources", "getSynchronizationSources()")}} メソッドで動画トラックをサポートしました。以前は音声のみ動作していました ({{bug(1534466)}})。</li>
 <li>Web Audio API の {{domxref("MediaStreamTrackAudioSourceNode")}} インターフェイスと {{domxref("AudioContext.createMediaStreamTrackSource()")}} メソッドをサポートしました ({{bug(1324548)}})。</li>
 <li>{{domxref("RTCDataChannel.negotiated")}} を実装しました ({{bug(1529695)}})。</li>
 <li>ストリームの "最初の音声トラック" の ID が辞書順で最初に来るトラックであると定義する現行の仕様書に準拠するよう、{{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode", "MediaStreamAudioSourceNode()")}} コンストラクターを更新しました ({{bug(1324548)}})。</li>
 <li>
  <p>{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} は安全でないコンテキストから使用できなくなりました。使用を試みると <code>NotAllowedError</code> 例外が発生します。安全なコンテキストは HTTPS を使用して読み込むもの、<code>file:///</code> スキームを使用して示すもの、<code>localhost</code> から読み込むものです。今のところ、必要であれば設定項目 <code>media.getusermedia.insecure.enabled</code> を <code>true</code> に設定すると、<code>getUserMedia()</code> を安全でないコンテキストから呼び出すことを再有効化できます ({{bug(1335740)}})。</p>

  <div class="blockIndicator note">
  <p><strong>注記:</strong> 将来、Firefox は {{domxref("navigator.mediaDevices")}} プロパティも安全でないコンテキストで廃止して、{{domxref("MediaDevices")}} API へのアクセスを完全に遮断する予定です。<strong>これは Nightly ビルドですでに実施しています。</strong></p>
  </div>
 </li>
</ul>

<h4 id="Removals_4" name="Removals_4">廃止</h4>

<ul>
 <li>非標準の {{DOMxRef("XMLDocument.load()")}} メソッドを削除しました ({{bug(332175)}})。</li>
 <li>非標準の {{DOMxRef("XMLDocument.async")}} プロパティを削除しました ({{bug(1328138)}})。</li>
 <li>{{domxref("RTCIceCredentialType")}} の値 <code>token</code> を削除しました ({{bug(1529595)}})。</li>
</ul>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<ul>
 <li><a href="/ja/docs/Web/HTTP">HTTP</a> の {{HTTPHeader("Clear-Site-Data")}} ヘッダーで <code>executionContexts</code> ディレクティブのサポートを廃止しました。これは、ナビゲーションプロセスのさまざまな時点でさまざまな種類のデータの間の相互接続における相互作用の問題や、仕様書の設計の問題のために削除しました。この理由でディレクティブを仕様書から削除することが <a href="https://github.com/w3c/webappsec-clear-site-data/issues/59">提案されています</a> ({{bug(1548034)}})。</li>
</ul>

<h4 id="Removals_5" name="Removals_5">廃止</h4>

<ul>
 <li>標準化の状況に懸念があるため、{{HTTPHeader("Content-Security-Policy")}} の <code>require-sri-for</code> ディレクティブのサポートを廃止しました。以前は設定変更により使用できており、既定値は無効でした ({{bug(1386214)}})。</li>
</ul>

<h3 id="Security" name="Security">セキュリティ</h3>

<ul>
 <li><a href="https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730">CVE-2019-11730: Same-origin policy treats all files in a directory as having the same-origin</a> のため、同じディレクトリーにあるファイルを別々のオリジンとして扱うように Firefox を変更しました。これは、file:// URL で読み込んだドキュメントの動作でいくつかの副作用が発生します (調査について {{bug("file-fallout")}} をご覧ください)。例えば、workers を読み込むことができません。</li>
</ul>

<h3 id="WebDriver_conformance_(Marionette)" name="WebDriver_conformance_(Marionette)">WebDriver conformance (Marionette)</h3>

<h4 id="Bug_fixes" name="Bug_fixes">バグ修正</h4>

<ul>
 <li><code>WebDriver:SwitchToWindow</code> が別のウィンドウを選択すると、元のウィンドウに戻るまで <code>focus</code> および <code>activate</code> イベントを待機するようになりました ({{bug(1335085)}})。</li>
 <li><code>TypeError: this.tabModal is null</code> の不具合を修正しました。これはモーダルダイアログやユーザープロンプトと対話しているときに発生することがありました ({{bug(1538782)}})。</li>
</ul>

<h4 id="Other_2" name="Other_2">その他</h4>

<ul>
 <li>トップレベルのブラウザーコンテキストが突然消えてしまうことを防ぐため、メモリーが少ない状況でバックグラウンドのタブを強制的にアンロードする機能を無効化しました ({{bug(1553748)}})。</li>
 <li>新しいタブを開いた後にウェブサイトへ移動するときに HTTP 認証ダイアログが表示されない、特権付きコンテンツプロセスを無効化しました ({{bug(1558763)}})。</li>
</ul>

<h3 id="Plugins" name="Plugins">プラグイン</h3>

<p><em>変更なし。</em></p>

<h2 id="Changes_for_add-on_developers" name="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>

<h3 id="API_changes" name="API_changes">API の変更点</h3>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy/register">proxy.register()</a></code> および <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy/unregister">proxy.unregister()</a></code> 関数が非推奨になり、Firefox 71 で削除される予定です ({{bug(1545811)}})。</li>
 <li><code>boolean</code> 型の <code>incognito</code> フラグを <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails">proxy.RequestDetails</a> オブジェクトに追加しました。<code>true</code> を設定すると、プライベートブラウジングの要求であったことを示します ({{bug(1545163)}})。</li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter">webRequest.RequestFilter</a> が incognito パラメーターを持てるようになりました。これを与えると、incognito の状態 (<code>true</code> または <code>false</code>) に合致しない要求を除去できます ({{bug(1548177)}})。</li>
 <li>現在のコンテキストにおける Cookie のストア ID を表す、<code>string</code> 型の <code>cookieStoreId</code> を <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails">proxy.RequestDetails</a> オブジェクトに追加しました ({{bug(1545420)}})。</li>
 <li>アドオンがブックマークフォルダーをルートフォルダーへ追加しようとしたときのエラーメッセージが、より直感的になりました ({{bug(1512171)}})。</li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate">browser.tabs.duplicate()</a></code> が返す promise がタブが完全に読み込まれる前に、直ちに解決するようになりました ({{bug(1394376)}})。</li>
 <li>chrome.storage.managed をサポートして、拡張機能の設定をエンタープライズポリシーで設定できるようになりました ({{bug(1230802)}})。</li>
</ul>

<h3 id="Manifest_changes" name="Manifest_changes">マニフェストの変更点</h3>

<p><em>変更なし。</em></p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.org/firefox/68.0/releasenotes/">Firefox 68.0 リリースノート</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(67)}}</p>
