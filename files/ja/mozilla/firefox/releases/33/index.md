---
title: Firefox 33 for developers
slug: Mozilla/Firefox/Releases/33
tags:
  - Firefox
translation_of: Mozilla/Firefox/Releases/33
---
<p>Gecko 33 を搭載した Firefox 33 は、米国時間 2014 年 10 月 14 日にリリースされました。このページでは、開発者に影響する Firefox 33 の変更点をまとめています。</p>

<h2 id="Changes_for_Web_developers" name="Changes_for_Web_developers">Web 開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<p>ハイライト</p>

<ul>
 <li>イベントリスナのポップアップ</li>
 <li>@media サイドバー</li>
 <li>新たな CSS 規則の追加</li>
 <li>keyframes の編集</li>
 <li>3 次ベジェ曲線エディタ</li>
 <li>Transform のハイライト表示</li>
 <li>持続的にキャッシュを無効化</li>
 <li>新たなコマンド</li>
 <li>エディタの設定</li>
 <li>WebIDE</li>
</ul>

<p>詳しくは <a href="https://hacks.mozilla.org/2014/07/event-listeners-popup-media-sidebar-cubic-bezier-editor-more-firefox-developer-tools-episode-33/">hacks ブログの記事</a>をご覧ください。このリリースで<a href="http://mzl.la/1pGLFDs">機能追加や修正</a>を行った 33 名の貢献者に感謝します。</p>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>{{cssxref("@counter-style")}} 規則を実装しました ({{bug(966166)}})。</li>
 <li>{{cssxref("list-style-type")}} の <code>ethiopic-numeric</code>, <code>persian</code>, <code>arabic-indic</code>, <code>devanagari</code>, <code>bengali</code>, <code>gurmukhi</code>, <code>gujarati</code>, <code>oriya</code>, <code>tamil</code>, <code>telugu</code>, <code>kannada</code>, <code>malayalam</code>, <code>thai</code>, <code>lao</code>, <code>myanmar</code>, <code>khmer</code>, <code>cjk-heavenly-stem</code>, <code>cjk-earthly-branch</code> から接頭辞を削除しました ({{bug(985825)}} および {{bug(1063856)}})。</li>
 <li>{{cssxref("list-style-type")}} のカウンタスタイルで <code>mongolian</code>、<code>disclosure-open</code> および <code>disclosure-closed</code> をサポートしました ({{bug(982355)}})。</li>
 <li>内容がないキーフレーム規則を持つ CSS アニメーションでイベントが発生するように修正しました ({{bug(1004377)}})。</li>
 <li>CSS Colors level 4 で新たに定義された {{cssxref("&lt;color&gt;")}} である <code>rebeccapurple</code> をサポートしました ({{bug(1024642)}})。</li>
 <li>CSS Fonts Level 3 の実験的な実装を進めています。これらを有効にするかは設定項目 <code>layout.css.font-features.enabled</code> で制御されており、Nightly ではデフォルトで有効です。以下の機能を新たに実装しました:
  <ul>
   <li>{{cssxref("font-variant-caps")}} のフォールバックアルゴリズム。不足しているグリフを代替するものを生成します ({{bug(961558)}})。</li>
   <li>{{cssxref("font-synthesis")}} CSS プロパティを実装しました ({{bug(871453)}})。</li>
  </ul>
 </li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li>{{htmlelement("picture")}} 要素を実験的にサポートしました ({{bug(870022)}})。設定項目 <code>dom.image.picture.enabled</code> で制御されます (デフォルトは無効)。</li>
 <li>{{HTMLElement("label")}} 要素、特に {{htmlattrxref("for", "label")}} 属性を持たない label 要素が <code>&lt;input type=hidden&gt;</code> フィールドに適用されないようになりました ({{bug(597650)}})。以前は仕様に準拠していない動作でした。</li>
 <li>{{HTMLElement("a")}} 要素で、リンクの注釈 <code>noreferrer</code> を実装しました。<code>&lt;a rel="noreferrer"&gt;</code> で、リンクをたどる際の HTTP リクエストにリファラの URL が含まれないようになります ({{bug(530396)}})。これはページ内でのリンクでのみ動作するものであり、コンテキストメニューによるリンクなど UI を通してクリックされたリンクでは動作しません。</li>
 <li>Android において、{{HTMLElement("meta")}} の {{htmlattrxref("name", "meta")}} 属性で新たに 2 つの値をサポートしました。<code>msapplication-TileImage</code> と <code>msapplication-TileColor</code> です ({{bug(1014712)}})。<br>
  例:<br>
  <code>&lt;meta name="msapplication-TileImage" content="images/benthepcguy-144.png"/&gt;<br>
  &lt;meta name="msapplication-TileColor" content="#d83434"/&gt;</code></li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>非標準の {{jsxref("Number.toInteger()")}} メソッドを削除しました ({{bug(1022396)}})。</li>
 <li>{{jsxref("Map.prototype.set()")}}、{{jsxref("WeakMap.prototype.set()")}}、{{jsxref("Set.prototype.add()")}} の各メソッドがチェイン可能になり、<code>undefined</code> ではなく同等のオブジェクトを返すようになりました ({{bug(1031632)}})。</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters">デフォルトパラメータ</a>は関数のボディにある関数宣言より先に評価されますので、これらの関数はデフォルトパラメータから参照できなくなりました ({{bug(1022962)}})。</li>
 <li>オブジェクトリテラルで短縮プロパティを許容するようになりました。明示的に定義されていない場合は、プロパティのキーは同名の変数で初期化されます。例: <code>function f(x, y) { return {x, y}; }</code> は <code>function f(x, y) { return {x: x, y: y}; }</code> と等価です ({{bug(875002)}})。</li>
 <li><code><a href="/ja/docs/Web/JavaScript/Reference/Operators/yield">yield</a></code> および <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/yield*">yield*</a></code> の構文解析を、最新の ES6 仕様に準拠するよう更新しました ({{bug(981599)}})。</li>
 <li>非標準の <code>hasOwn</code> トラップを削除しました ({{bug(980565)}})。</li>
</ul>

<h3 id="Interfaces.2FAPIs.2FDOM" name="Interfaces.2FAPIs.2FDOM">インターフェイス/API/DOM</h3>

<ul>
 <li>{{domxref("RadioNodeList")}} API が実装され、{{domxref("RadioNodeList.value")}} で選択しているラジオボタンにアクセスできます ({{bug(779723)}})。</li>
 <li>{{domxref("DOMMatrix")}} を追加しました ({{bug(1018497)}})。</li>
 <li>非標準の (ただし他のブラウザで実装されている) <code>DOMException.stack</code> プロパティを追加しました。これはスタックを可読性の高い書式 (既存の非標準プロパティ {{jsxref("Error.stack")}} と同じ書式) で表した文字列を返します ({{bug(857648)}})。</li>
 <li>{{HTMLElement("canvas")}} 向けに、一次 Transform を {{domxref("SVGMatrix")}} 表記によりパターンを変更することが可能な {{domxref("CanvasPattern.setTransform()")}} メソッドを追加しました ({{bug(1019257)}})。</li>
 <li>設定項目 <code>media.mediasource.enabled</code> で制御しており Nightly および Aurora のみで有効化している Media Source Extensions の実験的な実装で、MP4 をサポートしました ({{bug(1000686)}})。</li>
 <li>{{domxref("HTMLMediaElement.audioTracks")}} プロパティおよび {{domxref("HTMLMediaElement.videoTracks")}} プロパティを実験的に実装しました。これらは設定項目 <code>media.track.enabled</code> で制御されており、デフォルトは無効です ({{bug(744896)}})。</li>
 <li>非標準の <code>XMLHttpRequest.mozBackgroundRequest()</code> は Web サイトからアクセス不可になりました。Firefox 内部のコード (Chrome コード) のみ使用できます ({{bug(1035242)}})。</li>
 <li>仕様から削除された {{event("touchenter")}} イベントおよび {{event("touchleave")}} イベントを削除しました ({{bug(1036444)}})。</li>
 <li>{{domxref("HTMLTrackElement")}} が発生させる、以前は <code>loaded</code> と呼ばれていたイベントを仕様に合致するよう {{event("load")}} にリネームしました ({{bug(1035505)}})。</li>
 <li>IndexedDB の {{domxref("FileHandle")}} インターフェイスを {{domxref("IDBMutableFile")}} にリネームしました ({{bug(1006485)}})。</li>
 <li>IndexedDB の {{domxref("LockedFile")}} インターフェイスを {{domxref("IDBFileHandle")}} にリネームしました ({{bug(1006485)}})。</li>
 <li><a href="/ja/docs/Web/API/ServiceWorker">ServiceWorker</a> インターフェイスを実装しました。設定項目 <code>dom.serviceWorkers.enabled</code> で制御されます ({{bug(903441)}} で総括しています)。</li>
</ul>

<h3 id="MathML" name="MathML">MathML</h3>

<ul>
 <li>{{MathMLElement("mtable")}} 要素で <code>columnspacing</code>、<code>framespacing</code>、<code>rowspacing</code> の各属性をサポートしました ({{bug(330964)}})。</li>
 <li>fraction、stack、radical、script 用の <a href="https://wiki.mozilla.org/MathML:Open_Type_MATH_Table#Implementation_Status">Open Type MATH</a> constant を使用するようになりました ({{bug(961365)}})。</li>
</ul>

<h3 id="SVG" name="SVG">SVG</h3>

<p><em>変更なし。</em></p>

<h3 id="Audio.2FVideo" name="Audio.2FVideo">Audio/Video</h3>

<p><em>変更なし。</em></p>

<h3 id="WebGL" name="WebGL">WebGL</h3>

<ul>
 <li><a href="http://www.khronos.org/registry/webgl/extensions/EXT_blend_minmax/"><code>EXT_blend_minmax</code></a> を公開しました。これはブレンド元の色とブレンド先の最小および最大の色成分を生成する新たなブレンド方程式を 2 つ追加することで、ブレンド機能を拡張します ({{bug(973815)}})。</li>
</ul>

<h2 id="Security" name="Security">セキュリティ</h2>

<p><em>変更なし。</em></p>

<h2 id="Changes_for_add-on_and_Mozilla_developers" name="Changes_for_add-on_and_Mozilla_developers">アドオン開発者と Mozilla 開発者向けの変更点</h2>

<ul>
 <li>新たな <a href="/ja/docs/Tools/Debugger-API">Debugger API</a> が好ましいため、<a href="/ja/docs/Mozilla/Add-ons/Code_snippets/JavaScript_Debugger_Service">JavaScript Debugger Service (JSD)</a> を削除しました ({{bug(800200)}})。</li>
 <li>nsIX509CertDB2 インターフェイスを削除しました。また、このインターフェイス由来のメソッドを nsIX509CertDB インターフェイスに移しました。</li>
</ul>

<h3 id="Add-on_SDK" name="Add-on_SDK">Add-on SDK</h3>

<h4 id="Highlights" name="Highlights">ハイライト</h4>

<ul>
 <li><a href="/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/panel#Panel(options)"><code>Panel</code> コンストラクタ</a>の新たなオプションにより、パネルのコンテキストメニューをサポートしました。</li>
 <li><a href="/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/tabs#readyState"><code>tab.readyState</code></a> をサポートしました。</li>
 <li><a href="/ja/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_sidebar#show(window)"><code>sidebar.show()</code></a> および <a href="/ja/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/ui_sidebar#hide(window)"><code>sidebar.hide()</code></a> にパラメータ <a href="/ja/docs/Mozilla/Add-ons/SDK/High-Level_APIs/windows#BrowserWindow"><code>BrowserWindow</code></a> を追加しました。サイドバーを表示または非表示にするウィンドウを制御するためのパラメータです。</li>
</ul>

<h4 id="Details" name="Details">詳細</h4>

<p><a href="https://github.com/mozilla/addon-sdk/compare/firefox32...firefox33">Firefox 32 から Firefox 33 の間に行われた GitHub コミット</a>。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。</p>

<p><a href="https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&amp;chfieldto=2014-07-21&amp;chfield=resolution&amp;query_format=advanced&amp;chfieldfrom=2014-06-09&amp;chfieldvalue=FIXED&amp;bug_status=RESOLVED&amp;bug_status=VERIFIED&amp;bug_status=CLOSED&amp;product=Add-on%20SDK&amp;list_id=10493962">Firefox 32 から Firefox 33 の間に解決したバグ</a>。この一覧は Aurora 移行後に上流で行われた内容が含まれていないでしょう。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.mozilla.jp/firefox/33.0/releasenotes/">Firefox 33 リリースノート</a></li>
 <li><a href="https://dev.mozilla.jp/2014/10/firefox-33-addon-compatibility/">Firefox 33 アドオン互換性情報</a></li>
</ul>

<h3 id="Older_versions" name="Older_versions">過去のバージョン</h3>

<p>{{Firefox_for_developers('32')}}</p>
