---
title: Firefox 59 for developers
slug: Mozilla/Firefox/Releases/59
tags:
  - '59'
  - Firefox
  - Release Notes
translation_of: Mozilla/Firefox/Releases/59
---
<p class="summary">Firefox 59 は、米国時間 2018 年 3 月 13 日にリリースされました。このページでは、開発者に影響する Firefox 59 の変更点をまとめています。</p>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li><a href="/ja/docs/Tools/Network_Monitor">ネットワークモニター</a> の応答タブで、応答が HTML である場合に <a href="/ja/docs/Tools/Network_Monitor#HTML_preview">描画された HTML のプレビュー</a> を表示するようになりました ({{bug(1353319)}})。</li>
 <li>ストレージインスペクターで表示する Cookie の情報 (<a href="/ja/docs/Tools/Storage_Inspector#Cookies">Cookie</a> をご覧ください) で、それぞれの Cookie が same-site 状態であるかを示す <em>sameSite</em> 列を追加しました ({{bug(1298370)}})。</li>
 <li><a href="/ja/docs/Tools/Rulers">定規</a> ツールで、ビューポートの現在の寸法を示す情報を表示するようになりました ({{bug(1402633)}})。</li>
 <li><a href="/ja/docs/Tools/Responsive_Design_Mode">レスポンシブデザインモード</a> で、カーソルキーを使用して画面の寸法を設定できるようにになりました ({{bug(1421663)}})。詳しくは <a href="/ja/docs/Tools/Responsive_Design_Mode#Setting_screen_size">画面のサイズを設定する</a> をご覧ください。</li>
 <li><a href="/ja/docs/Tools/Network_Monitor">ネットワークモニター</a> の <em>ヘッダー</em> タブに表示する<em>生ヘッダー</em>で、応答のステータスコードを表示するようになりました ({{bug(1419401)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li>{{HTMLElement("textarea")}} 要素の {{htmlattrxref("autocomplete", "textarea")}} 属性を実装しました。要素でフォームのオートフィル機能を有効化または無効化できます。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>{{cssxref("overscroll-behavior")}} プロパティと、このプロパティに関係するロングハンドプロパティである {{cssxref("overscroll-behavior-x")}} および {{cssxref("overscroll-behavior-y")}} を実装しました ({{bug(951793)}})。また、すべてのリリースで、デフォルトで有効化しました ({{bug(1428879)}})。</li>
 <li>"unusual elements" (置換要素のように、CSS のボックスの概念に従って描画されない要素) で {{cssxref("display")}} の値に <code>contents</code> を指定したときの動作を、仕様書に従って更新しました ({{bug(1427292)}})。仕様で定められた正確な動作については、<a href="https://drafts.csswg.org/css-display/#unbox">Appendix B: Effects of display: contents on Unusual Elements</a> をご覧ください。</li>
 <li>{{cssxref("position")}} の <code>sticky</code> を、適切な <a href="/ja/docs/Learn/HTML/Tables">HTML テーブル</a> の部品 (例えば {{htmlelement("th")}} 要素) でサポートしました ({{bug(975644)}})。</li>
 <li>{{cssxref("&lt;color&gt;")}} 値 (<code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code>, <code>hsla()</code>) で {{cssxref("calc()")}} をサポートしました ({{bug(984021)}})。</li>
 <li><a href="/ja/docs/Web/CSS/Media_Queries">メディアクエリー</a> の値で {{cssxref("calc()")}} をサポートしました ({{bug(1396057)}})。</li>
 <li>{{cssxref("@document")}} @-規則の使用を、ユーザースタイルシートと UA スタイルシートに限定しました ({{bug(1035091)}})。</li>
 <li>{{cssxref("font-optical-sizing")}} プロパティを実装しました ({{bug(1435692)}})。</li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<p><em>変更なし。</em></p>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<p><em>変更なし。</em></p>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="New_APIs" name="New_APIs">新規 API</h4>

<ul>
 <li>{{domxref("PointerEvent","PointerEvents")}} を、デスクトップ版 Firefox で有効化しました ({{bug(1411467)}})。</li>
</ul>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
 <li>{{domxref("EventTarget.EventTarget()","EventTarget()")}} コンストラクターを実装しました ({{bug(1379688)}})。</li>
 <li>{{domxref("Response.Response()","Response()")}} コンストラクターが、仕様書に従って <code>body</code> 引数で <code>null</code> 値を受け入れるようになりました ({{bug(1303025)}})。</li>
</ul>

<h4 id="DOM_events" name="DOM_events">DOM イベント</h4>

<ul>
 <li>{{domxref("Event.composedPath()")}} メソッドを実装しました ({{bug(1412775)}})。</li>
</ul>

<h4 id="Service_workers" name="Service_workers">Service workers</h4>

<ul>
 <li>別のブラウザープロセスで、Service worker Clients API を発見および通信できるようになりました ({{bug(1293277)}})。</li>
 <li>入れ子の about:blank や about:srcdoc のインラインフレームが、親で制御している service worker を継承するようになりました。これは {{bug(1293277)}} および {{bug(1426979)}} で修正しました。</li>
 <li>service worker が {{domxref("Response")}} を {{domxref("FetchEvent.respondWith()")}} に提供するときに {{domxref("Response.url")}} の値が、インターセプトされたネットワークに最終的に解決された URL として伝播しないようになりました。以前は、代わりに {{domxref("Request.url","FetchEvent.request.url")}} を使用していました。これは、例えば service worker がスタイルシートや worker スクリプトをインターセプトする場合に提供される <code>Response.url</code> が、関連する {{cssxref("@import")}} や {{domxref("WorkerGlobalScope.importScripts()","importScripts()")}} のサブリソースの解決に使用されるということです ({{bug(1222008)}})。</li>
 <li>{{domxref("Request.mode","FetchEvent.request.mode")}} が <code>"same-origin"</code> であり、{{domxref("Response.type")}} に <code>"cors"</code> を与えた場合に、<code>FetchEvent.respondWith()</code> がネットワークエラーを発生させるようになりました ({{bug(1222008)}})。</li>
</ul>

<h4 id="Media_and_WebRTC" name="Media_and_WebRTC">メディアと WebRTC</h4>

<ul>
 <li>{{domxref("MediaStreamTrack")}} の {{domxref("MediaStreamTrack.muted")}} プロパティ、および {{event("mute")}} イベントと {{event("unmute")}} イベント、さらにこれに対応するイベントハンドラーである {{domxref("MediaStreamTrack.onmute", "onmute")}} と {{domxref("MediaStreamTrack.onmute", "onunmute")}} を実装しました。トラックの <code>muted</code> 状態は、トラックが今のところメディアデータを提供できないことを示します。

  <div class="note"><strong>注記:</strong> トラックの <code>muted</code> 状態は、一般的に考えられているトラックのミュートやミュート解除として役に立つものではありません。代わりに {{domxref("MediaStreamTrack.enabled", "enabled")}} プロパティを使用します。<code>enabled</code> を <code>false</code> に設定すると、トラックは空のフレームだけを出力します。</div>
 </li>
 <li>Android 版 Firefox 59 で Apple の HTTPS Live Streaming (HLS) を、音声および映像の両方でサポートしました。この非標準プロトコルは、モバイル環境においてモバイルストリーミングのためにこのプロトコルを必要とするサイトの互換性を向上するためにサポートしました。現在、デスクトップ版 Firefox にこのプロトコルを実装する予定はありません。</li>
 <li>それぞれの RTP ストリームのソースの情報を提供するため、{{domxref("RTCRtpReceiver")}} の {{domxref("RTCRtpReceiver.getContributingSources", "getContributingSources()")}} および {{domxref("RTCRtpReceiver.getSynchronizationSources", "getSynchronizationSources()")}} メソッドを実装しました。ただし、公開前に仕様書が変更されましたので、デフォルトで設定項目 <code>media.peerconnection.rtpsourcesapi.enable</code> によってこれらを無効化しました ({{bug(1363667)}}, {{bug(1430213)}}, {{bug(1433236)}})。</li>
 <li>Firefox の WebRTC 実装でトランシーバーをサポートしましたので、{{domxref("RTCRtpTransceiver")}} インターフェイスを実装しました。また、<code>RTCPeerConnection</code> やほかのインターフェイスを、最新の仕様書に従ってこれらを使用使用するように更新しました。</li>
 <li>{{domxref("RTCPeerConnection.addTransceiver()")}} メソッドを追加しました。さらに、要求に従ってトランシーバーを作成するように、{{domxref("RTCPeerConnection.addTrack", "addTrack()")}} の動作を更新しました。</li>
 <li>Firefox 58 で <a href="/ja/docs/Web/API/WebVTT_API">WebVTT</a> のリージョンを実装しましたが、デフォルトで無効化していました。これをデフォルトで有効化しました ({{bug(1415805)}})。</li>
 <li>WebVTT ファイルで同じ行にすべての設定を並べる形式ではなく、1 行ごとにひとつの設定を並べる形式の <code>REGION</code> 定義ブロックを Firefox でサポートしました ({{bug(1415821)}})。</li>
</ul>

<h4 id="Canvas_and_WebGL" name="Canvas_and_WebGL">Canvas と WebGL</h4>

<p><em>変更なし。</em></p>

<h3 id="CSSOM" name="CSSOM">CSSOM</h3>

<ul>
 <li>{{domxref("CSSNamespaceRule")}} インターフェイスと、<code>namespaceURL</code> および <code>prefix</code> プロパティを実装しました ({{bug(1326514)}})。</li>
</ul>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<p><em>変更なし。</em></p>

<h3 id="Security" name="Security">セキュリティ</h3>

<ul>
 <li><code>data:</code> URI へのトップナビゲーションはブロックされます({{bug(1401895)}})。詳しくは <a href="https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/">Blocking Top-Level Navigations to data URLs for Firefox 59</a> をご覧ください。</li>
 <li>{{httpheader("X-Frame-Options")}} ヘッダーの <code>SAMEORIGIN</code> ディレクティブが、トップレベルのインラインフレームが同一オリジンであるかだけでなく、すべての祖先も同様であるかを確認するようになりました ({{bug(725490)}})。</li>
 <li>異なるオリジンから現在のドキュメントに読み込まれる画像リソースが、HTTP 認証ダイアログを表示させることができなくなりました。 ({{bug(1423146)}})。</li>
 <li>ほかのブラウザーに合わせるため、および {{bug(1419658)}} で説明されている潜在的な問題を避けるため、HTTP 認証でユーザー名やパスワードに (<code>ISO-8859-1</code> ではなく) <code>utf-8</code> エンコーディングを使用するようになりました。</li>
 <li><a href="https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc">HSTS プリロードリスト</a>は Google によって毎日更新されています。いつもの更新であれば注意する必要はないのですが、このリリースから新しい TLD が追加されました。このうち具体的に注目したいのが <code>.app</code> と <code>.dev</code> です。これらの新しい TLD を知らず、ローカルの開発環境に使用した場合、予期しない挙動となるかもしれません。なお、ローカルでの開発には<a href="https://tools.ietf.org/html/rfc2606">予約済み TLD</a> を使うべきとされています。</li>
</ul>

<h3 id="Plugins" name="Plugins">プラグイン</h3>

<p><em>変更なし。</em></p>

<h3 id="Other" name="Other">その他</h3>

<p><em>変更なし。</em></p>

<h2 id="Removals_from_the_web_platform" name="Removals_from_the_web_platform">ウェブプラットフォームから廃止</h2>

<h3 id="HTML_2" name="HTML_2">HTML</h3>

<ul>
 <li>{{htmlelement("script")}} 要素の {{htmlattrxref("type","script")}} 属性の非標準パラメーターである <code>version</code> (例えば <code>type="application/javascript;version=1.8"</code>) を削除しました ({{bug(1428745)}})。</li>
</ul>

<h3 id="CSS_2" name="CSS_2">CSS</h3>

<ul>
 <li>独自仕様の <code>mozmm</code> {{cssxref("&lt;length&gt;")}} 単位を削除しました ({{bug(1416564)}})。</li>
 <li>独自仕様の {{cssxref("-moz-border-top-colors")}}、{{cssxref("-moz-border-right-colors")}}、{{cssxref("-moz-border-bottom-colors")}}、{{cssxref("-moz-border-left-colors")}} プロパティを、chrome コードのみ使用するように制限しました ({{bug(1417200)}})。</li>
</ul>

<h3 id="JavaScript_2" name="JavaScript_2">JavaScript</h3>

<ul>
 <li>非標準の <a href="/ja/docs/Web/JavaScript/Reference/Statements/try...catch#Conditional_catch_clauses">条件付き catch 節</a> を削除しました ({{bug(1228841)}})。</li>
</ul>

<h3 id="APIs_2" name="APIs_2">API</h3>

<ul>
 <li>非標準の <code>Event.getPreventDefault()</code> メソッドを削除しました。{{domxref("Event")}} で {{domxref("Event.preventDefault", "preventDefault()")}} が呼び出されたかを判断するには、代わりに {{domxref("Event.defaultPrevented")}} プロパティを使用します。</li>
 <li>標準の <a href="/ja/docs/Web/API/Notifications_API">Notifications API</a> が好ましいため、独自仕様の <code><a href="/ja/docs/Archive/API/Navigator/mozNotification">Navigator.mozNotification</a></code> プロパティと <code>DesktopNotification</code> インターフェイスを削除しました ({{bug(952453)}})。</li>
 <li>独自仕様の <code>window.external.addSearchEngine()</code> メソッドを削除しました ({{bug("862147")}})。詳しくは {{domxref("Window.sidebar")}} もご覧ください。</li>
 <li>Firefox 限定の非標準プロパティである {{domxref("HTMLMediaElement")}} property <code>mozAutoplayEnabled</code> を削除しました。</li>
</ul>

<h3 id="SVG_2" name="SVG_2">SVG</h3>

<ul>
 <li>SMIL の <code>accessKey</code> 機能のサポートを廃止しました ({{bug(1423098)}})。</li>
</ul>

<h3 id="Other_2" name="Other_2">その他</h3>

<ul>
 <li>非標準の <code>pcast:</code> および <code>feed:</code> プロトコルのサポートを廃止しました ({{bug(1420622)}})。</li>
</ul>

<h2 id="Changes_for_add-on_and_Mozilla_developers" name="Changes_for_add-on_and_Mozilla_developers">アドオン開発者と Mozilla 開発者向けの変更点</h2>

<h3 id="WebExtensions" name="WebExtensions">WebExtensions</h3>

<ul>
 <li><a href="/ja/Add-ons/WebExtensions/manifest.json/theme">theme</a> の更新:

  <ul>
   <li>新しいプロパティ: <code>colors.background_tab_text</code>, <code>colors.toolbar_field_border</code></li>
   <li>すべての色関連プロパティで、Chrome 形式の配列と CSS の色の値の両方をサポートしました。</li>
  </ul>
 </li>
 <li>新しい <a href="/ja/Add-ons/WebExtensions/API/browserSettings">ブラウザー設定</a>:
  <ul>
   <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent"><code>contextMenuShowEvent</code></a></li>
   <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs"><code>openBookmarksInNewTabs</code></a></li>
   <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs"><code>openSearchResultsInNewTabs</code></a></li>
   <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/proxyConfig"><code>proxyConfig</code></a></li>
  </ul>
 </li>
 <li>新しい <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs">tabs</a></code> の API:
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab">tabs.captureTab()</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide">tabs.hide()</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show">tabs.show()</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus">contextMenus</a></code> API で <a href="/ja/Add-ons/WebExtensions/API/menus/ContextType">"bookmark" コンテキスト</a> をサポートしました。</li>
 <li>新しい <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts">contentScripts</a></code> API で、ランタイムがコンテンツスクリプトを登録できます。</li>
 <li>新しい <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction">pageAction</a></code>, <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction">browserAction</a></code>, <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction">SidebarAction</a></code> の API:
  <ul>
   <li><code>browserAction/pageAction/sidebarAction.set*</code> 関数で、変更を元に戻すための <code>null</code> をサポートしました。</li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled">browserAction.isEnabled()</a></code>, <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown">pageAction.isShown()</a></code> , <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen">sidebarAction.isOpen()</a></code> 関数。</li>
  </ul>
 </li>
 <li>デフォルトでページアクションを表示するための、<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action">page_action</a></code> の新しいオプション。</li>
 <li><code>protocol_handers</code> の新しい値:
  <ul>
   <li>Secure Scuttlebutt 通信のための "ssb"</li>
   <li>DATproject のための "dat"</li>
   <li>IPFS のための "ipfs", "ipns", "dweb"</li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites">privacy.websites</a></code> の新しい設定 "cookieConfig"。</li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/cookies">cookies</a></code> API で <a href="/ja/Add-ons/WebExtensions/API/cookies#First-party_isolation">ファーストパーティ分離</a> をサポート。</li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest">webRequest</a></code> の新しいオプションである <code>upgradeToSecure</code>。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.org/firefox/59.0/releasenotes/">Firefox — Notes (59.0)</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(58)}}</p>
