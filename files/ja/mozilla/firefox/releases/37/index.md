---
title: Firefox 37 for developers
slug: Mozilla/Firefox/Releases/37
tags:
  - Firefox
  - Release Notes
translation_of: Mozilla/Firefox/Releases/37
---
<p>Firefox 37 は、米国時間 2015 年 3 月 31 日にリリースされました。このページでは、開発者に影響する Firefox 37 の変更点をまとめています。</p>

<h2 id="Changes_for_Web_developers" name="Changes_for_Web_developers">Web 開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<p>ハイライト:</p>

<ul>
 <li><a href="/ja/docs/Tools/Network_Monitor#Security">ネットワークモニタの Security パネル</a></li>
 <li><a href="/ja/docs/Tools/Page_Inspector/How_to/Work_with_animations#Firefox_37">インスペクタのアニメーションパネル</a></li>
 <li><a href="/ja/docs/Tools/WebIDE/Running_and_debugging_apps#Running_a_custom_build_step">WebIDE でカスタムビルドステップの実行をサポート</a></li>
</ul>

<p><a class="external-icon external" href="https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&amp;classification=Client%20Software&amp;chfieldto=2015-01-12&amp;chfield=resolution&amp;query_format=advanced&amp;chfieldfrom=2014-11-28&amp;chfieldvalue=FIXED&amp;bug_status=RESOLVED&amp;bug_status=VERIFIED&amp;component=Developer%20Tools&amp;component=Developer%20Tools%3A%203D%20View&amp;component=Developer%20Tools%3A%20Canvas%20Debugger&amp;component=Developer%20Tools%3A%20Console&amp;component=Developer%20Tools%3A%20Debugger&amp;component=Developer%20Tools%3A%20Framework&amp;component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&amp;component=Developer%20Tools%3A%20Inspector&amp;component=Developer%20Tools%3A%20Memory&amp;component=Developer%20Tools%3A%20Netmonitor&amp;component=Developer%20Tools%3A%20Object%20Inspector&amp;component=Developer%20Tools%3A%20Profiler&amp;component=Developer%20Tools%3A%20Responsive%20Mode&amp;component=Developer%20Tools%3A%20Scratchpad&amp;component=Developer%20Tools%3A%20Source%20Editor&amp;component=Developer%20Tools%3A%20Storage%20Inspector&amp;component=Developer%20Tools%3A%20Style%20Editor&amp;component=Developer%20Tools%3A%20Timeline&amp;component=Developer%20Tools%3A%20User%20Stories&amp;component=Developer%20Tools%3A%20Web%20Audio%20Editor&amp;component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&amp;component=Developer%20Tools%3A%20WebIDE&amp;product=Firefox&amp;list_id=11892733">Firefox 36 から Firefox 37 の間に解決した開発ツール関連のバグ一覧</a></p>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>{{cssxref("display")}}<code>: contents</code> をデフォルトで有効にしました ({{bug(1102374)}} および {{bug(1105369)}})。</li>
 <li><a href="/ja/docs/Web/Guide/CSS/Using_multi-column_layouts">CSS マルチカラムレイアウト</a>が、{{cssxref("display")}}<code>: table-caption</code> を適用した要素で動作するようになりました ({{bug(1109571)}})。</li>
 <li>テーブルセルの相対配置 ({{cssxref("position")}}<code>: relative</code>) を実装しました ({{bug(35168)}})。</li>
 <li>Quirks モードで、{{cssxref("empty-cells")}} の動作を削除しました。Standard モードと同様に、デフォルトが <code>show</code> になります ({{bug(1020400)}})。</li>
</ul>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li>リンクを新しいタブで開く場合でも、<code>&lt;a rel="noreferrer"&gt;</code> が機能するようになりました ({{bug(1031264)}})。</li>
 <li><code>&lt;input accept&gt;</code> で、<code>'.'</code> の後に拡張子を記載する形式を受け入れるようになりました。これを指定するとファイル選択ダイアログをユーザに提示するとき、指定した拡張子でフィルタします ({{bug(826176)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>{{jsxref("Map")}}、{{jsxref("Set")}}、{{jsxref("WeakMap")}}、{{jsxref("WeakSet")}} コンストラクタは、引数 iterable で値 null を無視するようになりました ({{bug(1092538)}})。</li>
 <li>{{jsxref("Map")}}、{{jsxref("Set")}}、{{jsxref("WeakMap")}}、{{jsxref("WeakSet")}} コンストラクタで、モンキーパッチを使用した <code>prototype.set</code> または <code>prototype.add</code> をサポートしました ({{bug(804279)}})。</li>
 <li>非標準の {{jsxref("String.quote","String.prototype.quote()")}} メソッドを削除しました ({{bug(1103181)}})。</li>
 <li>{{jsxref("RegExp.prototype.flags")}} プロパティを実装しました ({{bug(1108467)}})。</li>
 <li>{{jsxref("Array")}} のメソッドのいくつかを、<a href="/ja/docs/Web/JavaScript/Typed_arrays">Typed Array</a> にも実装しました:
  <ul>
   <li>{{jsxref("TypedArray.every", "every()")}} および {{jsxref("TypedArray.some", "some()")}} メソッド ({{bug(1116390)}})。</li>
   <li>{{jsxref("TypedArray.find", "find()")}} および {{jsxref("TypedArray.findIndex", "findIndex()")}} メソッド ({{bug(1078975)}})。</li>
   <li>{{jsxref("TypedArray.fill", "fill()")}} メソッド ({{bug(1113722)}})。</li>
   <li>{{jsxref("TypedArray.indexOf", "indexOf()")}} および {{jsxref("TypedArray.lastIndexOf", "lastIndexOf()")}} メソッド ({{bug(1107601)}})。</li>
   <li>{{jsxref("TypedArray.join", "join()")}} メソッド ({{bug(1115817)}})。</li>
   <li>{{jsxref("TypedArray.reduce", "reduce()")}} および {{jsxref("TypedArray.reduceRight", "reduceRight()")}} メソッド ({{bug(1117350)}})。</li>
   <li>{{jsxref("TypedArray.reverse", "reverse()")}} メソッド ({{bug(1111516)}})。</li>
   <li>{{jsxref("TypedArray.keys", "keys()")}}、{{jsxref("TypedArray.values", "values()")}}、{{jsxref("TypedArray.entries", "entries()")}} メソッド ({{bug(1119217)}})。</li>
  </ul>
 </li>
 <li>ES6 Proxy の {{jsxref("Global_Objects/Proxy/handler/enumerate", "enumerate")}} トラップを実装しました ({{bug(783829)}})。</li>
 <li>ES6 仕様書に基づき、{{jsxref("Function.length")}} プロパティの <code>configurable</code> 属性を <code>true</code> に変更しました ({{bug(911142)}})。</li>
 <li><a href="http://wiki.ecmascript.org/doku.php?id=strawman:data_parallelism">ParallelJS (PJS)</a> の開発を中止しました。将来性の乏しさ、関心の薄さ、コードの複雑さが理由です。<code>Array.prototype.mapPar</code>、<code>filterPar</code>、<code>reducePar</code> メソッドといった、Nightly チャンネルのみで有効であった実験的な実装は全面的に削除しました。</li>
</ul>

<h3 id="Interfaces.2FAPIs.2FDOM" name="Interfaces.2FAPIs.2FDOM">インターフェイス/API/DOM</h3>

<ul>
 <li>{{domxref("StereoPannerNode")}} <a href="/ja/docs/Web/API/Web_Audio_API">Web Audio</a> ノードを実装しました ({{bug(1100349)}})。</li>
 <li>{{jsxref("Promise")}} ベースの {{domxref("OfflineAudioContext")}} が使用可能になりました ({{bug(1087944)}})。</li>
 <li><a href="/ja/docs/Web/API/ServiceWorker_API">Service Worker</a> の実験的な実装 (デフォルトで無効) を進めています。{{domxref("ServiceWorkerGlobalScope.update()")}} を実装しました ({{bug(1065366)}})。</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API">Web workers</a> で <a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB API</a> を使用できるようになりました ({{bug(701634)}})。</li>
 <li>WebGL 2.0 の実験的な実装を進めています!
  <ul>
   <li>バッファオブジェクトへのアクセス機能を提供する、{{domxref("WebGL2RenderingContext.getBufferSubData()")}} メソッドを実装しました ({{bug(1048731)}})。</li>
  </ul>
 </li>
 <li><code>KeyboardEvent.key</code> のキー名の一部を、<a href="https://dvcs.w3.org/hg/dom3events/raw-file/tip/html/DOM3Events-key.html">最新の DOM Level 3 Events 仕様</a>に準拠するよう変更しました。<a href="/ja/docs/Web/API/KeyboardEvent.key#Key_values">MDN で KeyboardEvent.key の値の一覧表</a>をご覧ください。緑色のセルが新たな値です。また、紫色の値は変更される可能性があります。これらの値を使用する場合は注意してください (キー名の変更に関するメタバグは {{bug(900372)}} です)。</li>
 <li>{{domxref("Console")}} インターフェイスが {{domxref("ServiceWorker")}} および {{domxref("SharedWorker")}} で動作するようになりました。これらは以前から使用できましたが、動作しない状態でした ({{bug(1058644)}})。</li>
</ul>

<h3 id="MathML" name="MathML">MathML</h3>

<p><em>変更なし。</em></p>

<h3 id="SVG" name="SVG">SVG</h3>

<ul>
 <li>SVG2 の <code>&lt;marker orient="auto-start-reverse"&gt;</code> を実装しました ({{bug(1107584)}})。</li>
</ul>

<h3 id="Audio.2FVideo" name="Audio.2FVideo">Audio/Video</h3>

<p><em>変更なし。</em></p>

<h2 id="Networking" name="Networking">ネットワーク</h2>

<ul>
 <li>WebSockets で <code>permessage</code> 圧縮法をサポートしました ({{bug(792831)}})。サーバが対応していれば使用できます。</li>
</ul>

<h2 id="Security" name="Security">セキュリティ</h2>

<ul>
 <li>SSL 3.0 や RC4 といった弱いプロトコルや暗号方式をサイトで使用していることを警告するため、それらが使用されたことをコンソールに記録するようになりました ({{bug(1092835)}})。</li>
 <li><a href="/ja/docs/Web/Security/CSP">CSP</a> 1.1 の <code>referrer</code> <a href="/ja/docs/Web/Security/CSP/CSP_policy_directives">ディレクティブ</a>をサポートしました ({{bug(965727)}})。</li>
</ul>

<h2 id="Changes_for_add-on_and_Mozilla_developers" name="Changes_for_add-on_and_Mozilla_developers">アドオン開発者と Mozilla 開発者向けの変更点</h2>

<h3 id="Add-on_SDK" name="Add-on_SDK">Add-on SDK</h3>

<p><em>変更なし。</em></p>

<h3 id="XUL" name="XUL">XUL</h3>

<p><em>変更なし。</em></p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.mozilla.jp/firefox/37.0/releasenotes/">Firefox 37 リリースノート</a></li>
 <li><a href="https://dev.mozilla.jp/2015/02/firefox-37-addon-compatibility/">Firefox 37 アドオン互換性情報</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers('36')}}</p>
