---
title: Firefox 57 (Quantum) for developers
slug: Mozilla/Firefox/Releases/57
tags:
  - '57'
  - Firefox
  - Firefox Quantum
  - Release Notes
  - Stylo
translation_of: Mozilla/Firefox/Releases/57
---
<div>{{FirefoxSidebar}}</div>

<p class="summary">Firefox 57 (別名 Firefox Quantum) は、米国時間 2017 年 11 月 14 日にリリースされました。このページでは、開発者に影響する Firefox 57 の変更点をまとめています。</p>

<h2 id="Firefox_57_Firefox_Quantum" name="Firefox_57_Firefox_Quantum">Firefox 57 === Firefox Quantum</h2>

<p>Firefox 57 は、Firefox を徹底的に再構築してパフォーマンス、安定性、外見を大きく向上させることを目指す <a href="https://wiki.mozilla.org/Quantum">Firefox Quantum</a> エンジニアリングプロジェクトにちなんで <strong>Quantum</strong> というリリース名を与えられました。Firefox 57 はこれらの改善点の一部をリリースする最初のバージョンであり、祝福を求めていました。</p>

<div class="note">
<p><strong>注記</strong>: このリリースの Quantum の特徴について詳しくは、Dan Callahan による記事 <a href="https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/">Firefox Quantum Developer Edition: the fastest Firefox ever with Photon UI and better tooling</a> をご覧ください。</p>
</div>

<p><a href="https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/">Firefox's new parallel CSS engine</a>、別名 <strong>Quantum CSS</strong> または <strong>Stylo</strong> はデスクトップ版の Firefox 57 でデフォルトで有効であり、モバイル版の Firefox は追って有効化します。多くのパフォーマンス向上は別として、開発者が何らかの大きな違いに気づくことがあってはいけません。Stylo には多くの小規模な機能差がありますが、Gecko で取り除くべき非標準の動作を修正するために実装したものです。このような差異は、適宜リファレンスのページやリリースノートに掲載します (<a href="#quantum_css_notes">Quantum CSS に関する補足</a> を参照)。</p>

<h2 id="Changes_for_Web_developers" name="Changes_for_Web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<p><em>変更なし。</em></p>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li>{{htmlelement("input")}} の <a href="/ja/docs/Web/HTML/Element/input/date">date</a> および <a href="/ja/docs/Web/HTML/Element/input/time">time</a> タイプが、すべてのビルドで有効になりました ({{bug("1399036")}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li><code><a href="/ja/docs/Web/CSS/@media/display-mode">display-mode</a></code> メディアクエリーの値 <code>minimal-ui</code> および <code>standalone</code> をサポートしました ({{bug(1369815)}})。<a href="/ja/docs/Web/Manifest#display">Web app manifest の <code>display</code> フィールド</a> もご覧ください。</li>
 <li>{{CSSxRef("grid-row-gap")}} および {{CSSxRef("grid-column-gap")}} プロパティが、{{CSSxRef("grid")}} ショートハンドプロパティでリセットされないようになりました ({{bug(1387410)}})。</li>
 <li>設定項目 <code>layout.css.clip-path-shapes.enabled</code> を削除しました ({{bug(1399767)}})。この設定項目で、{{CSSxRef("clip-path")}} の {{cssxref("&lt;basic-shape&gt;")}} のサポートを無効化できました。これは Firefox 54 で導入されたものであり、今後は無効化できません。</li>
</ul>

<h4 id="Quantum_CSS_notes" name="Quantum_CSS_notes">Quantum CSS に関する補足</h4>

<p>Quantum で以下の不具合を修正しました:</p>

<ul>
 <li>以前の Gecko のスタイルシステムでは <code>radial-gradient(circle gold,red)</code> のような放射状のグラデーションが、<code>circle</code> と <code>gold</code> の間にカンマがないため動作すべきではないにもかかわらず、動作していました ({{bug(1383323)}})。</li>
 <li>オフスクリーンの要素をオンスクリーンにアニメーションするときに遅延を指定すると、Gecko は Windows など一部のプラットフォームで再描画を行いません ({{bug(1383239)}})。</li>
 <li>Gecko では、{{htmlelement("details")}} 要素で {{CSSxRef("animation")}} をアクティブにすると <code>open</code> 属性を使用して既定で開かせることができません ({{bug(1382124)}})。</li>
 <li>Gecko では、色を指定した {{CSSxRef("text-shadow")}} から色を指定しない {{CSSxRef("text-shadow")}} へ遷移する場合に {{cssxref("transition", "transitions")}} が動作しません ({{bug(726550)}})。</li>
 <li>Gecko ではアニメーションのフィリングをキャンセルする (例えば <code>animation-fill-mode: forwards</code> を設定) と、1 回だけですが同じ要素に設定したトランジションを発生させられます (詳しくは {{bug(1192592)}} および <a href="https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824">こちらのテストケース</a> をご覧ください)。一般的に、宣言的なアニメーションがトランジションを発生させるべきではありません。</li>
 <li>Gecko では em 単位を使用するアニメーションが、アニメーションする要素の親で {{CSSxRef("font-size")}} を変更しても影響を受けませんが、実際は影響を受けるべきです ({{bug(1254424)}})。</li>
 <li>Gecko と Quantum CSS では <code>font-size</code> の継承が異なっており、Gecko では一部の言語設定で継承したフォントのサイズが想定より小さくなります ({{bug(1391341)}})。</li>
 <li>Gecko では {{CSSxRef("@document", "@-moz-document")}} 規則の <code>domain()</code> あるいは <code>url-prefix()</code> URL マッチング関数で解析するときに、URL トークンの解析と同じ仕組みを再使用します。Quantum CSS は同じ仕組みを使用せず、括弧や引用符を含む場合にトークンを無効とみなしません ({{bug(1362333)}})。</li>
 <li>Gecko では canvas 2D コンテキストの {{DOMxRef("CanvasRenderingContext2D.font", "font")}} の値としてシステムフォント (例えば <code>menu</code>) を設定すると、期待するフォントが返りません (何も返りません)。Quantum でこの不具合を修正しました ({{bug(1374885)}})。</li>
 <li>Gecko では、切り離されたサブツリー (例えば {{DOMxRef("Document.createElement","createElement()")}} を使用して作成した、DOM に未挿入の {{htmlelement("div")}}) を作成すると、サブツリーのルート要素がブロックレベル要素として設定されます。Quantum CSS では仕様書に従って、インラインとして設定します ({{bug(1374994)}})。</li>
 <li>Gecko では {{CSSxRef("radial-gradient")}} の半径の構成要素として {{CSSxRef("calc")}} 式を使用すると、式が拒否されて値が無効になります ({{bug(1376019)}})。</li>
 <li>Gecko では <code>calc(1*2*3)</code> が正しく解析されません。Quantum CSS でこの不具合を修正しました ({{bug(1379467)}})。</li>
 <li>Quantum CSS では、<a href="https://drafts.csswg.org/css-values-3/#calc-notation"><code>calc()</code> を仕様書で説明されているとおり全面的にサポートしています</a> ({{bug(1350857)}})。Gecko はそうではありません。</li>
 <li>Gecko は {{CSSxRef("::before")}} および {{CSSxRef("::after")}} 疑似要素で、{{CSSxRef("content")}} プロパティの値が <code>normal</code> や <code>none</code> であっても疑似要素を生成する不具合があります。仕様書によると、このようにするべきではありません ({{bug(1387931)}})。</li>
 <li>Gecko は {{CSSxRef("background-position")}} プロパティで、異なる数の {{CSSxRef("&lt;position&gt;")}} 値を持つ 2 つの値の間 (例えば <code>background-position: 10px 10px;</code> と <code>background-position: 20px 20px, 30px 30px;</code>) でトランジションを行えない不具合があります ({{bug(1390446)}})。</li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<p><em>変更なし。</em></p>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>非標準の {{JSxRef("Statements/for_each...in", "for each...in")}} (E4X) ループを廃止しました。代わりに {{JSxRef("Statements/for...of", "for...of")}} を使用してください。また、移行の助けになる <a href="/ja/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated">Warning: JavaScript 1.6's for-each-in loops are deprecated</a> をご覧ください。({{bug(1083470)}})</li>
 <li>{{JSxRef("Object.prototype.watch()")}} および {{JSxRef("Object.unwatch", "unwatch()")}} メソッドが非推奨になり、使用すると警告が発生します。また、将来削除する予定です ({{bug(934669)}})。</li>
 <li>非標準の {{JSxRef("Iterator")}} および {{JSxRef("StopIteration")}} オブジェクトと、古いイテレーションプロトコルを廃止しました ({{bug(1098412)}})。</li>
 <li>非同期ジェネレーターを有効化しました ({{bug(1352312)}})。</li>
 <li>for await (... of ...) 構文を有効化しました ({{bug(1352312)}})。</li>
</ul>

<h3 id="APIs" name="APIs">API</h3>

<h4 id="New_APIs" name="New_APIs">新規 API</h4>

<ul>
 <li>{{DOMxRef("PerformanceObserver")}} API をデフォルトで有効にしました ({{bug(1386021)}})。</li>
 <li>{{DOMxRef("AbortController")}} および {{DOMxRef("AbortSignal")}} インターフェイス (Abort API) を追加しました。必要に応じて、DOM リクエスト (<a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/fetch">fetch リクエスト</a> など) を中止できます ({{bug(1378342)}})。</li>
 <li><a href="/ja/docs/Web/API/Storage_API">Storage API</a> を実装して、デフォルトで有効にしました ({{bug(1399038)}})。</li>
</ul>

<h4 id="DOM" name="DOM">DOM</h4>

<ul>
 <li><a href="/ja/docs/Web/API/Selection_API">Selection API</a> の {{DOMxRef("Selection.type")}} プロパティを実装しました ({{bug(1359157)}})。</li>
 <li>{{DOMxRef("Document.createEvent", "Document.createEvent('FocusEvent')")}} をサポートしました ({{bug(1388069)}})。</li>
 <li>{{DOMxRef("HTMLInputElement")}} インターフェイスの <code>files</code> プロパティが設定可能になりました ({{bug(1384030)}})。</li>
 <li><code>HTMLDocument.getSelection()</code> メソッドを {{DOMxRef("Document.getSelection","Document")}} インターフェイスに移動して、XML ドキュメントで使用可能になりました ({{bug(718711)}})。</li>
 <li>{{Event("messageerror")}} イベントを実装して、メッセージターゲットで実装したイベントハンドラーの発動に反応して実行するコードを持つことが可能になりました。{{DOMxRef("MessagePort.onmessageerror")}}、{{DOMxRef("DedicatedWorkerGlobalScope.onmessageerror")}}、{{domxref("Worker.onmessageerror")}}、{{domxref("BroadcastChannel.onmessageerror")}}、{{domxref("Window.onmessageerror")}} をご覧ください ({{bug(1359017)}})。</li>
 <li>{{DOMxRef("Headers")}} の値でイテレートを行うとき、値を自動的に辞書順で整列して、さらに重複するヘッダー名の値を結合するようになりました ({{bug(1396848)}})。</li>
</ul>

<h4 id="DOM_events" name="DOM_events">DOM イベント</h4>

<p><em>変更なし。</em></p>

<h4 id="Media_and_WebRTC" name="Media_and_WebRTC">メディアと WebRTC</h4>

<ul>
 <li>SCTP メッセージの end-of-record (EOR) フラグを使用することにより、{{DOMxRef("RTCDataChannel")}} で任意のサイズ (256kiB が相互運用性が高いのですが、最大 1GiB まで) のメッセージをサポートしました。詳しくは {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Using_data_channels", "Understanding message size limits")}} をご覧ください ({{bug(979417)}})。
  <div class="note">Firefox は、複数のソースの SCTP メッセージを多重化する機能を提供する SCTP ndata プロトコルが未サポートですので、大きなデータオブジェクトを送信すると他のすべての SCTP 通信で著しい遅延が発生する可能性があります。Firefox の ndata サポートの実装および展開の進捗を追跡するには、{{bug(1381145)}} をご覧ください。</div>
 </li>
 <li>{{DOMxRef("RTCDataChannel.send()")}} メソッドで、送信しようとしたメッセージのサイズが受信側の {{Glossary("user agent","ユーザーエージェント")}} と互換性がない場合に <code>TypeError</code> 例外を発生できるようになりました (これは {{bug(979417)}} の一部として実装しました)。</li>
 <li>録画中に発生した問題を報告するために送信される {{event("error")}} イベントを一般的なイベントから {{DOMxRef("MediaRecorderErrorEvent")}} 型にするため、<a href="/ja/docs/Web/API/MediaStream_Recording_API">MediaStream Recording API</a> を更新しました。</li>
 <li>{{DOMxRef("OfflineAudioContext")}} のコンストラクターで引数のリストに加えてオブジェクトを指定可能になったため、関連文書を更新しました ({{bug(1388591)}})。</li>
</ul>

<h3 id="Security" name="Security">セキュリティ</h3>

<ul>
 <li><code>resource://</code> URL が情報を漏えいしないようになりました ({{bug(863246)}})。</li>
 <li>Data URI のオリジンが、ナビゲーションの責任がある設定オブジェクトのオリジンを継承するのではなく、一意の opaque origin として扱うようになりました ({{bug(1324406)}})。</li>
</ul>

<h3 id="Plugins" name="Plugins">プラグイン</h3>

<p><em>変更なし。</em></p>

<h3 id="Other" name="Other">その他</h3>

<ul>
 <li>Firefox の <a href="/ja/docs/Mozilla/Firefox/Headless_mode">ヘッドレスモード</a> に、コマンドラインからウェブサイトのスクリーンショットを直接取得することを可能にする <code>-screenshot</code> フラグを追加しました ({{bug(1378010)}})。</li>
</ul>

<h2 id="Removals_from_the_web_platform" name="Removals_from_the_web_platform">ウェブプラットフォームから廃止</h2>

<h3 id="HTML_2" name="HTML_2">HTML</h3>

<ul>
 <li>さまざまなウェブ互換性の問題があるため、Firefox 57 で <code>&lt;link rel="preload"&gt;</code> (<a href="/ja/docs/Web/HTML/Preloading_content">Preloading content with rel="preload"</a> をご覧ください) を無効化しました ({{bug(1405761)}})。キャッシュ不可のリソース向けに改良したバージョンを Firefox 58 に搭載する予定です。</li>
</ul>

<h3 id="APIs_2" name="APIs_2">API</h3>

<ul>
 <li>Mozilla 独自仕様の <a href="/ja/docs/Archive/Social_API">Social API</a> を完全に削除しました ({{bug(1388902)}})。</li>
</ul>

<h3 id="SVG_2" name="SVG_2">SVG</h3>

<p><em>変更なし。</em></p>

<h2 id="Changes_for_add-on_and_Mozilla_developers" name="Changes_for_add-on_and_Mozilla_developers">アドオン開発者と Mozilla 開発者向けの変更点</h2>

<div class="note">
<p>Firefox 57 より、XPCOM ベースのアドオンのサポートを全面的に廃止します。すべての拡張機能は新しい <a href="/ja/Add-ons/WebExtensions">ブラウザー拡張機能</a> (WebExtensions としても知られています) への移行が必要であり、そうしなければ動作しません。</p>
</div>

<h3 id="WebExtensions" name="WebExtensions">WebExtensions</h3>

<p>以下の API を追加または拡張しました:</p>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks">bookmarks</a></code>

  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType">bookmarks.BookmarkTreeNodeType</a></code> でセパレーターをサポートしました。</li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code>
  <ul>
   <li>light/dark テーマアイコンのための <code>theme_icons</code> プロパティ</li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction">browserAction</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup">browserAction.openPopup()</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings">browserSettings</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents">allowPopupsForUserEvents</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride">homepageOverride</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior">imageAnimationBehavior</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride">newTabPageOverride</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData">browsingData</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage">browsingData.removeLocalStorage()</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/clipboard">clipboard</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData">setImageData()</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities">contextualIdentities</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onCreated">onCreated</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onRemoved">onRemoved</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onUpdated">onUpdated</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity">contextualIdentitities.ContextualIdentity</a></code> の <code>colorCode</code> および <code>iconUrl</code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels">devtools.panels</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels/ElementsPanel/createSidebarPane">devtools.panels.ElementsPanel.createSidebarPane()</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/downloads">downloads</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download">downloads.download()</a></code> の <code>incognito</code> オプション</li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem">downloads.DownloadItem</a></code> の <code>estimatedEndTime</code> プロパティ</li>
  </ul>
 </li>
 <li><code><a href="/ja/Add-ons/WebExtensions/API/find">find</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/find/find">find()</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/find/highlightResults">highlightResults()</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting">removeHighlighting()</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/openPopup">pageAction.openPopup()</a></code></li>
 <li><code><a href="/ja/Add-ons/WebExtensions/API/privacy/websites">privacy</a></code>
  <ul>
   <li><code><a href="/ja/Add-ons/WebExtensions/API/privacy/websites">websites.trackingProtectionMode</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy">proxy</a></code>
  <ul>
   <li><code>FindProxyForURL()</code> がオブジェクトを返せるようになりました</li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime">runtime</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage">runtime.openOptionsPage()</a></code> を Android でサポート</li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions">sessions</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue">setTabValue()</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue">getTabValue()</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeTabValue">removeTabValue()</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setWindowValue">setWindowValue()</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue">getWindowValue()</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue">removeWindowValue()</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction">sidebarAction</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/open">sidebarAction.open()</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage">storage</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/managed">storage.managed</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs">tabs</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update">tabs.update()</a></code> の <code>loadReplace</code> オプション</li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab">tabs.Tab</a></code>、<code><a href="/ja/docs/">tabs.onUpdated</a></code>、<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query">tabs.query()</a></code> の <code>discarded</code> プロパティ</li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create">tabs.create()</a></code> で "view-source:" URL を開くことが可能になりました</li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab">tabs.Tab</a></code>、<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create">tabs.create()</a></code>、<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query">tabs.query()</a></code>、<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update">tabs.update()</a></code> の <code>openerTabId</code> プロパティ</li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme">theme</a></code>
  <ul>
   <li><code>colors.toolbar</code></li>
   <li><code>colors.toolbar_field</code></li>
   <li><code>colors.toolbar_field_text</code></li>
   <li><code>colors.toolbar_text</code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/theme">theme</a></code>
  <ul>
   <li><code><a href="/ja/Add-ons/WebExtensions/API/theme/update">theme.update()</a></code> の <code>windowId</code> オプション</li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest">webRequest</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData">filterResponseData()</a></code></li>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest">webRequest</a></code> イベントの <code>proxyInfo</code> プロパティ</li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows">windows</a></code>
  <ul>
   <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows/create">windows.create()</a></code> の <code>allowScriptsToClose</code> プロパティ</li>
  </ul>
 </li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(56)}}</p>
