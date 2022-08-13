---
title: Firefox 84 for developers
slug: Mozilla/Firefox/Releases/84
tags:
  - '84'
  - Firefox
  - Mozilla
  - Release
translation_of: Mozilla/Firefox/Releases/84
---
<p>{{FirefoxSidebar}}</p>

<p class="summary">このページでは、開発者に影響する Firefox 84 の変更点をまとめています。Firefox 84 は、2020 年 12 月 15 日にリリースされました。</p>

<div class="notecard note">
<p class="summary"><strong>注記</strong>: Mozilla Hacks の <a href="https://hacks.mozilla.org/2020/12/and-now-for-firefox-84/">And now for … Firefox 84</a> もご覧ください。</p>
</div>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<ul>
 <li>Firefox の <a href="/ja/docs/Tools/Accessibility_inspector">アクセシビリティインスペクター</a> で、ウェブページの <a href="/ja/docs/Tools/Accessibility_inspector#show_web_page_tabbing_order">タブオーダー</a> の表示をサポートしました。ページがキー操作でどのようなナビゲーションになるかを、リンクをタブ移動するよりも高レベルな概要で示します ({{bug(1654956)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<p><em>変更なし。</em></p>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>{{cssxref(":not")}} 疑似クラスで、複雑なセレクターをサポートしました ({{bug(933562)}})。</li>
</ul>

<h4 id="Removals" name="Removals">廃止</h4>

<ul>
 <li>独自仕様である <code>-moz-default-appearance</code> プロパティの値 <code>scrollbar-small</code> (代わりに <code>scrollbar-width: thin</code> を使用します) および <code>scrollbar</code> (macOS 限定。代わりに <code>scrollbar-horizontal</code> や <code>scrollbar-vertical</code> を使用します) を削除しました ({{bug(1673132)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat"><code>Intl.DateTimeFormat()</code> コンストラクター</a> の引数として指定する独自の日時書式に、<code>fractionalSecondDigits</code> (秒の端数として表示する桁数) を含めることが可能になりました ({{bug(1645107)}})。</li>
</ul>

<h3 id="HTTP" name="HTTP">HTTP</h3>

<p><em>変更なし。</em></p>

<h3 id="Security" name="Security">セキュリティ</h3>

<ul>
 <li>Firefox で <em>http://localhost/</em> や <em>http://dev.localhost/</em> のような <code>localhost</code> URL が、ローカルホストのループバックインターフェイス (例えば <em>http://127.0.0.1</em>) を参照するものとして保証されるようになりました。この結果、<code>localhost</code> から読み込まれるリソースが安全に提供された (<a href="/ja/docs/Web/Security/Secure_Contexts">安全なコンテキスト</a> を参照) とみなされ、<a href="/ja/docs/Web/Security/Mixed_content">混在コンテンツ</a> として扱われなくなります ({{bug(1220810)}}, {{bug(1488740)}})。</li>
</ul>

<h3 id="APIs" name="APIs">API</h3>

<ul>
 <li>Paint Timing API の {{domxref('PerformancePaintTiming')}} インターフェイスをサポートしました ({{bug(1518999)}})。</li>
 <li>{{domxref('Navigator.registerProtocolHandler()')}} メソッドが、<code>scheme</code> と <code>url</code> の 2 つの引数のみ受け入れるようになりました。<code>title</code> は削除されました ({{bug(1631464)}})。</li>
</ul>

<h4 id="Media_WebRTC_and_Web_Audio" name="Media_WebRTC_and_Web_Audio">Media、WebRTC、Web Audio</h4>

<ul>
 <li>{{domxref('MediaRecorder.start()')}} メソッドで、記録されているストリームのいくつかのトラックが変更されたときに <code>InvalidModificationError</code> が発生するようになりました ({{bug(1581139)}})。</li>
</ul>

<h4 id="Removals_2" name="Removals_2">廃止</h4>

<ul>
 <li><a href="/ja/docs/Web/HTML/Using_the_application_cache">アプリケーションキャッシュ</a> を削除しました。開発者は、代わりに <a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a> を使用してください ({{bug(1619673)}})。</li>
</ul>

<h3 id="WebAssembly" name="WebAssembly">WebAssembly</h3>

<p><em>変更なし。</em></p>

<h3 id="WebDriver_conformance_Marionette" name="WebDriver_conformance_Marionette">WebDriver conformance (Marionette)</h3>

<ul>
 <li><code>WebDriver:PerformActions</code> および <code>WebDriver:ReleaseActions</code> に、chrome スコープのサポートを追加しました ({{bug(1365886)}})。</li>
 <li>新しい Fission 互換 API をデフォルトで有効にしました。以前の API に戻すには、設定項目 <code>marionette.actors.enabled</code> を <code>false</code> に設定します ({{bug(1669169)}})。</li>
 <li><code>WebDriver:SwitchToWindow</code> を、常にトップレベルのブラウジングコンテキストへ戻すように修正しました ({{bug(1305822)}})。</li>
 <li><code>WebDriver:SwitchToParentFrame</code> の、ブラウジングコンテキストの確認を改良しました ({{bug(1671622)}})。</li>
 <li><code>WebDriver:Back</code> で、現在選択されている <code><a href="/ja/docs/Web/HTML/Element/iframe">&lt;iframe&gt;</a></code> がアンロードされたときにハングアップする問題を修正しました ({{bug(1672758)}})。</li>
</ul>

<h4 id="WebDriver_known_bugs" name="WebDriver_known_bugs">既知の不具合</h4>

<ul>
  <li>ページナビゲーションの後、過去に取得した要素にアクセスすると常に "stale element" エラーが発生せず、"no such element" エラーが発生する場合があります。これを防ぐには、設定項目 <code>marionette.actors.enabled</code> を <code>false</code> に設定してください ({{bug(1684827)}})。</li>
</ul>

<h2 id="Changes_for_add-on_developers" name="Changes_for_add-on_developers">アドオン開発者向けの変更点</h2>

<ul>
 <li><code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/remove">browsingData.remove()</a></code> API が、<code>cookieStoreId</code> でデータ型のサブセットの削除をサポートしました。</li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(83)}}</p>