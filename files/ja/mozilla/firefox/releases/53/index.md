---
title: Firefox 53 for developers
slug: Mozilla/Firefox/Releases/53
tags:
  - Firefox
  - Mozilla
  - Release Notes
translation_of: Mozilla/Firefox/Releases/53
---
<p>Firefox 53 は、米国時間 2017 年 4 月 19 日にリリースされました。このページでは、開発者に影響する Firefox 53 の変更点をまとめています。</p>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li>非同期パン/ズームによって、ハイライト表示でスクロールに待ち時間が発生する問題を解消しました ({{bug(1312103)}})。</li>
 <li>要素の <a href="/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Copy CSS Path">すべての CSS パスをコピーする </a> メニュー項目を追加しました ({{bug(1323700)}})。</li>
 <li>開発ツールで CSS Color Module Level 4 をサポートしました ({{bug(1310681)}})。</li>
 <li>マークアップビュー: 折りたたんでいるノードの開始タグと終了タグの間に、視覚的なヒントを追加しました ({{bug(1323193)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<h4 id="New_features" name="New_features">新機能</h4>

<ul>
 <li>すべての <code>mask-*</code> ロングハンドプロパティ (<a href="/ja/docs/Web/CSS/CSS_Masks">CSS Masks</a> をご覧ください) が、デフォルトで使用可能になりました ({{bug(1251161)}})。</li>
 <li>{{cssxref("caret-color")}} プロパティを追加しました ({{bug(1063162)}})。</li>
 <li>{{cssxref("place-items")}}/{{cssxref("place-self")}}/{{cssxref("place-content")}} ショートハンドプロパティを実装しました ({{bug(1319958)}})。</li>
 <li>{{cssxref("display")}} プロパティに値 <code>flow-root</code> を追加しました ({{bug(1322191)}})。</li>
 <li>{{cssxref("tab-size", "-moz-tab-size")}} が {{cssxref("&lt;length&gt;")}} 値を受け入れるようになりました ({{bug(943918)}})。また、アニメーションが可能になりました ({{bug(1308110)}})。</li>
 <li>{{cssxref("mask-mode")}}:luminance がグラデーションのマスクで動作しない問題を修正しました ({{bug(1346265)}})。</li>
 <li>[css-grid] {{cssxref("grid-template-rows")}} で、fr 単位を使用するとビューポートが埋まらない問題を修正しました ({{bug(1346699)}})。</li>
 <li>flex アイテムが絶対位置指定の兄弟要素で隔てられているとき、"order" に従って並べ替えられない問題を修正しました ({{bug(1345873)}})。</li>
</ul>

<h4 id="Other_changes" name="Other_changes">その他の変更点</h4>

<ul>
 <li>mask 関係のロングハンドプロパティを SVG 要素に対して有効化しました ({{bug(1319667)}})。</li>
 <li>[css-grid] グリッドアイテムが <code>&lt;table&gt;</code> であるときに <code>align-self</code>/<code>justify-self:stretch</code>/<code>normal</code> が動作しない問題を修正しました ({{bug(1316051)}})。</li>
 <li>大きなリファレンスボックスで半径をパーセンテージで示した <code>clip-path: circle()</code> が正しくレンダリングされない問題を修正しました ({{bug(1324713)}})。</li>
 <li>ギリシャ文字に対して {{cssxref("text-transform")}} の値 <code>uppercase</code> を適用したとき、単独のエータについたアクセント (ή) が取り除かれないようになりました ({{bug(1322989)}})。</li>
 <li>{{cssxref("display")}} の値 <code>contents</code> を使用できるかは、設定項目 <code>layout.css.display-contents.enabled</code> で制御していました。Firefox 53 でこの設定項目を削除しましたので常に有効になり、無効化できなくなりました ({{bug(1295788)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>{{jsxref("Function.name")}} プロパティの、ECMAScript 2015 のセマンティクスを実装しました。これは、無名関数で推測した名前 (<code>var foo = function() {}</code>) を含みます ({{bug(883377)}})。</li>
 <li>closing iterators の、ECMAScript 2015 のセマンティクスを実装しました。これは、例えば <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></code> ループに影響があります ({{bug(1147371)}})。</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals_and_escape_sequences">タグ付けされた template literal でエスケープシーケンスの制限を取り去る</a>、<a href="https://tc39.github.io/proposal-template-literal-revision/">Template Literal Revision 提案</a> を実装しました ({{bug(1317375)}})。</li>
 <li>非標準の <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String#String_generic_methods">String ジェネリック</a> について、コンソールで非推奨の警告を表示するようになりました。将来削除する予定ですので、今後は使用しないでください! ({{bug(1319926)}})</li>
 <li>{{jsxref("TypedArray")}} オブジェクトの静的なプロパティ <code>length</code> の値を、ES2016 に従って 3 から 0 に変更しました ({{bug(1317306)}})。</li>
 <li>{{jsxref("DataView")}} で {{jsxref("SharedArrayBuffer")}} が使用可能になりました ({{bug(1246597)}})。</li>
 <li>旧版の仕様書では、{{jsxref("SharedArrayBuffer")}} オブジェクトは <a href="/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">structured clone</a> の間に、明示的に転送しなければなりませんでした。新しい仕様では <a href="/ja/docs/Web/API/Transferable">転送可能なオブジェクト</a> ではなくなり、転送リストに含まれてはなりません。新しい動作について以前はコンソールで警告を表示するだけでしたが、今後はエラーが発生します ({{bug(1302037)}})。</li>
 <li>{{jsxref("ArrayBuffer")}} の長さを、{{jsxref("Number.MAX_SAFE_INTEGER")}}に制限しました (&gt;= 2 ** 53) ({{bug(1255128)}})。</li>
 <li>{{jsxref("Error.prototype")}} やほかのネイティブエラーオブジェクトのプロトタイプ ({{jsxref("RangeError.prototype")}} など) が、固有の Error オブジェクトではなく通常のオブジェクトになりました (特に、<code>Object.prototype.toString.call(Error.prototype)</code> は <code>"[object Error]"</code> ではなく <code>"[object Object]"</code> になります) ({{bug(1213341)}})。</li>
</ul>

<h3 id="Events" name="Events">イベント</h3>

<ul>
 <li>CSS Transitions: {{event("transitionstart")}}、{{event("transitionrun")}}、{{event("transitioncancel")}} イベントを実装しました ({{bug(1264125)}}、{{bug(1287983)}})。</li>
 <li>{{domxref("CompositionEvent.CompositionEvent", "CompositionEvent")}} コンストラクターを実装しました ({{bug(1002256)}})。</li>
 <li>{{domxref("MouseEvent.clientX")}}/{{domxref("MouseEvent.clientY")}} の別名である {{domxref("MouseEvent.x")}} および {{domxref("MouseEvent.y")}} を実装しました ({{bug(424390)}})。</li>
 <li>{{Event("auxclick")}} イベントと、これに対応する {{domxref("GlobalEventHandlers.onauxclick")}} イベントハンドラーを実装しました ({{bug(1304044)}})。</li>
 <li>{{Event("transitioncancel")}} イベントが、<a href="/ja/docs/Web/CSS/CSS_Transitions">transition</a> をキャンセルした後に発生するようになりました。詳細および例は、{{domxref("GlobalEventHandlers.ontransitioncancel")}} をご覧ください ({{bug("1264125")}})。</li>
</ul>

<h3 id="DOM" name="DOM">DOM</h3>

<ul>
 <li>以前は {{domxref("HTMLHyperLinkElementUtils")}} の {{domxref("HTMLHyperLinkElementUtils.pathname", "pathname")}} および {{domxref("HTMLHyperLinkElementUtils.search", "search")}} プロパティが、URL の誤った部分を返していました。例えば <code>http://z.com/x?a=true&amp;b=false</code> の URL について、<code>pathname</code> は "<code>/x</code>" ではなく "<code>/x?a=true&amp;b=false</code>"、<code>search</code> は "<code>?a=true&amp;b=false</code>" ではなく "" を返していました。これらを修正しました ({{bug(1310483)}})。</li>
 <li>{{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} コンストラクターが、init オブジェクトとして {{domxref("USVString")}} や一連の {{domxref("USVString")}} を受け入れるようになりました ({{bug("1330678")}})。</li>
 <li><a href="/ja/docs/Web/API/Selection_API">Selection API</a> の {{domxref("Selection.setBaseAndExtent()")}} メソッドを実装しました ({{bug(1321623)}})。</li>
 <li><code>file</code> 型の {{htmlelement("input")}} の <code>value</code> に<a href="https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly">"fakepath"</a> を追加する機能を、Gecko に実装しました。ほかのブラウザーと同等になります ({{bug(1274596)}})。</li>
 <li>非推奨の {{domxref("Node.rootNode")}} プロパティを置き換える、{{domxref("Node.getRootNode()")}} を実装しました ({{bug(1269155)}})。</li>
 <li>{{domxref("Plugin")}} および {{domxref("PluginArray")}} オブジェクト特有のプロパティが、enumerable ではなくなりました ({{bug("1270366")}})。</li>
 <li>{{domxref("MimeTypeArray")}} オブジェクトの名前付きプロパティが、enumerable ではなくなりました ({{bug("1270364")}})。</li>
 <li><a href="/ja/docs/Web/API/Permissions_API">Permissions API</a> の {{domxref("Permissions.query()")}} で使用するパーミッション名で、新たに <code>persistent-storage</code> が使用可能になりました ({{bug(1270038)}})。これは <a href="https://storage.spec.whatwg.org/">Storage API</a> による、持続的なボックス (すなわち <a href="https://storage.spec.whatwg.org/#persistence">persistent storage</a>) をオリジンに許可します。</li>
</ul>

<h3 id="Workers_and_service_workers" name="Workers_and_service_workers">Workers および service workers</h3>

<ul>
 <li><a href="/ja/docs/Web/API/Network_Information_API">Network Information API</a> が、worker で使用可能になりました ({{bug(1323172)}})。</li>
 <li><a href="/ja/docs/Web/API/Server-sent_events">Server-sent events</a> が worker から使用可能になりました ({{bug(1267903)}})。</li>
 <li>{{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}} が、非同期呼び出し可能になりました ({{bug(1263304)}})。</li>
</ul>

<h3 id="WebGL" name="WebGL">WebGL</h3>

<ul>
 <li>{{domxref("WEBGL_compressed_texture_astc")}} WebGL 拡張を実装しました ({{bug(1250077)}})。</li>
 <li>{{domxref("WEBGL_debug_renderer_info")}} WebGL 拡張をデフォルトで有効にしました ({{bug(1336645)}})。</li>
</ul>

<h3 id="Audio_video_and_media" name="Audio_video_and_media">Audio/Video/Media</h3>

<h4 id="General" name="General">全般</h4>

<ul>
 <li><strong>Android 版 Firefox 53</strong> より、マルチコアシステムでパフォーマンスを高めるため、メディアのデコードを外部プロセスで制御します ({{bug(1333323)}})。</li>
</ul>

<h4 id="Media_elements" name="Media_elements">メディア要素</h4>

<ul>
 <li>メディア要素でメディアの再生を開始するために使用する {{domxref("HTMLMediaElement.play()")}} メソッドが、{{jsxref("Promise")}} を返すようになりました。この Promise は再生を開始すると fulfilled 状態、エラーが発生すると rejected 状態になります ({{bug(1244768)}})。</li>
</ul>

<h4 id="Web_Audio_API" name="Web_Audio_API">Web Audio API</h4>

<ul>
 <li>{{domxref("AudioScheduledSourceNode")}} インターフェイスを実装して、{{domxref("AudioBufferSourceNode")}}、{{domxref("ConstantSourceNode")}}、{{domxref("OscillatorNode")}} インターフェイスはこのインターフェイスを基にするようになりました ({{bug("1324568")}})。</li>
</ul>

<h4 id="WebRTC" name="WebRTC">WebRTC</h4>

<ul>
 <li>{{domxref("RTCPeerConnection")}} の {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} および {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} メソッドが、{{domxref("RTCSessionDescription")}} を直接返すのではなく、{{domxref("RTCSessionDescriptionInit")}} ディクショナリーに従うオブジェクトを返す {{jsxref("Promise")}} を返すようになりました。既存のコードは引き続き動作しますが、<a href="/ja/docs/Web/API/RTCPeerConnection/setLocalDescription#About_the_session_description_parameter">新しいコードはよりシンプルに記述できます</a>。</li>
 <li>同様に、{{domxref("RTCPeerConnection")}} の {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} および {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} メソッドが、{{domxref("RTCSessionDescriptionInit")}} ディクショナリーに従うオブジェクトを受け入れるようになりました。既存のコードは引き続き動作しますが、<a href="/ja/docs/Web/API/RTCPeerConnection/setLocalDescription#About_the_session_description_parameter">シンプルにできます</a>。</li>
 <li>{{domxref("RTCPeerConnection.addIceCandidate()")}} が、{{domxref("RTCIceCandidateInit")}} ディクショナリーに従うオブジェクトを受け入れるようになりました。これは既存のコードと互換性がありますが、上記の変更点と並んで使用するとコードをよりシンプルに記述できます ({{bug(1263312)}})。</li>
 <li>{{domxref("RTCDTMFSender")}} を使用する {{Glossary("DTMF")}} のサポートを、デフォルトで有効にしました。詳細や動作について、<a href="/ja/docs/Web/API/WebRTC_API/Using_DTMF">Using DTMF with WebRTC</a> をご覧ください。</li>
</ul>

<h3 id="HTTPNetworking" name="HTTPNetworking">HTTP/ネットワーク</h3>

<ul>
 <li>{{HTTPHeader("Referrer-Policy")}} の既定値をユーザーが設定できる設定項目 <code>network.http.referer.userControlPolicy</code> を、Gecko の <code>about:config</code> に追加しました ({{bug("1304623")}})。以下の値を使用できます:

  <ul>
   <li>0 — <code>no-referrer</code></li>
   <li>1 — <code>same-origin</code></li>
   <li>2 — <code>strict-origin-when-cross-origin</code></li>
   <li>3 — <code>no-referrer-when-downgrade</code> (既定値)</li>
  </ul>
 </li>
 <li><a href="https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation">Application-Layer Protocol Negotiation</a> (ALPN) を支持するため、Next Protocol Negotiation (NPN) のサポートを廃止しました ({{bug("1248198")}})。</li>
 <li>{{httpheader("Large-Allocation")}} HTTP ヘッダーをデフォルトで有効にして、設定で無効化しないようになりました ({{bug(1331083)}})。</li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<ul>
 <li>{{domxref("SVGGeometryElement")}} インターフェイスを部分的に実装しました ({{bug(1239100)}})。</li>
</ul>

<h2 id="Removals_from_the_web_platform" name="Removals_from_the_web_platform">ウェブプラットフォームから廃止</h2>

<h3 id="HTMLXML" name="HTMLXML">HTML/XML</h3>

<ul>
 <li>設定項目 <code>dom.details_element.enabled</code> (Firefox で {{htmlelement("details")}} および {{htmlelement("summary")}} 要素のサポートを有効化/無効化します) を <code>about:config</code> から削除しました。これらの要素 (Firefox 49 からデフォルトで有効化) は無効化できません。{{bug(1271549)}} をご覧ください。</li>
 <li>{{htmlelement("iframe")}} 要素および {{domxref("HTMLIFrameElement")}} インターフェイスの <code>mozapp</code> 属性を削除しました。これは、moz <a href="/ja/docs/Mozilla/Gecko/Chrome/API/Browser_API">Browser API</a> の <code>&lt;iframe&gt;</code> に Firefox OS アプリを埋め込めるようにするために使用しました ({{bug(1310845)}})。</li>
 <li>{{domxref("HTMLIFrameElement.setInputMethodActive()")}} メソッドおよび <code>InputMethod</code> インターフェイス (Firefox OS アプリで IME を設定および制御するために使用しました) を削除しました ({{bug(1313169)}})。</li>
</ul>

<h3 id="CSS_2" name="CSS_2"><span><span>CSS</span></span></h3>

<ul>
 <li>{{cssxref(":dir", ":dir()")}} 疑似クラスの、{{property_prefix("-moz")}} 接頭辞がついた派生形を削除しました ({{bug(1270406)}})。</li>
 <li>{{cssxref("text-align-last")}} の、<code>-moz</code> 接頭辞がついた派生形を削除しました ({{bug(1276808)}})。</li>
 <li>{{cssxref("calc()")}} メソッドの、{{property_prefix("-moz")}} 接頭辞がついた派生形を削除しました ({{bug(1331296)}})。</li>
 <li>独自仕様である <code>-moz-samplesize</code> media fragment (メモリが少ない Firefox OS 端末にダウンサンプリングした画像を提供することを支援するために追加しました。{{bug(854795)}} をご覧ください) を削除しました ({{bug(1311246)}})。</li>
</ul>

<h3 id="JavaScript_2" name="JavaScript_2">JavaScript</h3>

<ul>
 <li>非標準の {{jsxref("ArrayBuffer.slice()")}} を削除しました (ただし、標準化された {{jsxref("ArrayBuffer.prototype.slice()")}} を維持しています) ({{bug(1313112)}})。</li>
</ul>

<h3 id="APIs" name="APIs">API</h3>

<ul>
 <li><a href="/ja/docs/Archive/B2G_OS/API/WiFi_Information_API">Wifi information API</a>、Speaker Manager API、Tethering API、<a href="/ja/docs/Archive/B2G_OS/API/Settings_API">Settings API</a> をプラットフォームから削除しました ({{bug(1313788)}}、{{bug(1317853)}}、{{bug(1313789)}}、{{bug(1313155)}})。</li>
</ul>

<h3 id="Other" name="Other">その他</h3>

<ul>
 <li>{{domxref("HTMLEmbedElement")}} および {{domxref("HTMLObjectElement")}} インターフェイスから <code>legacycaller</code> を削除しました ({{bug(909656)}})。</li>
</ul>

<h2 id="Changes_for_add-on_and_Mozilla_developers" name="Changes_for_add-on_and_Mozilla_developers">アドオン開発者と Mozilla 開発者向けの変更点</h2>

<h3 id="WebExtensions" name="WebExtensions">WebExtensions</h3>

<p>新規 API:</p>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData">browsingData</a></code></li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/identity">identity</a></code></li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities">contextualIdentities</a></code></li>
</ul>

<p>向上した API:</p>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync">storage.sync</a></code></li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus">contextMenus</a></code> の <a href="/ja/Add-ons/WebExtensions/API/contextMenus/ContextType">context タイプ</a> として <code>page_action</code>、<code>browser_action</code>、<code>password</code>, <code>tab</code></li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest">webRequest.onBeforeRequest</a></code> で <code>requestBody</code> をサポート</li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS">tabs.insertCSS</a></code> で <code>cssOrigin</code> をサポート。ユーザースタイルシートが挿入可能になります。</li>
</ul>

<h3 id="JavaScript_code_modules" name="JavaScript_code_modules">JavaScript コードモジュール</h3>

<ul>
 <li>非同期の <a href="/ja/Add-ons/Add-on_Manager/AddonManager">AddonManager API</a> で、コールバックだけでなく {{jsxref("Promise")}} もサポートしました ({{bug(987512)}}。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.jp/firefox/53.0/releasenotes/">Firefox 53.0 リリースノート</a></li>
 <li><a href="https://dev.mozilla.jp/2017/03/firefox-53-addon-compatibility/">Firefox 53 アドオン互換性情報</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(53)}}</p>
