---
title: Firefox 46 for developers
slug: Mozilla/Firefox/Releases/46
tags:
  - Firefox
translation_of: Mozilla/Firefox/Releases/46
---
<p>Firefox 46 は、米国時間 2016 年 4 月 26 日にリリースされました。このページでは、開発者に影響する Firefox 46 の変更点をまとめています。</p>

<h2 id="Changes_for_Web_developers" name="Changes_for_Web_developers">ウェブ開発者向けの変更点一覧</h2>

<h3 id="Developer_Tools" name="Developer_Tools">開発者ツール</h3>

<p>{{page('/ja/docs/Tools/Release_notes', 'Firefox_46')}}</p>

<h3 id="HTML" name="HTML">HTML</h3>

<ul>
 <li>{{HTMLElement("ul")}} で <code>type</code> の値が無効であるときは <code>decimal</code> を割り付けず、<code>type</code> の値が指定されていないとみなすようになりました ({{bug(241719)}})。</li>
 <li>{{HTMLElement("input")}} の <code>pattern</code> 属性は、<code>"u"</code> (unicode) フラグを付与した{{jsxref("RegExp", "正規表現", "", 1)}}として扱うようになりました ({{bug(1227906)}})。</li>
</ul>

<h3 id="CSS" name="CSS">CSS</h3>

<ul>
 <li>CSS Grids の実装を更新しました:
  <ul>
   <li>キーワード <code>auto-fill</code> および <code>auto-fit</code> を、<code>repeat()</code> 関数内で使用できるようになりました ({{bug(1118820)}})。</li>
   <li>値 <code>true</code> を <code>unsafe</code> に改名しました。これは {{cssxref("justify-content")}}、{{cssxref("align-content")}}、{{cssxref("justify-self")}}、{{cssxref("align-self")}}、{{cssxref("justify-items")}}、{{cssxref("align-items")}} の各プロパティに影響します ({{bug(1230478)}})。</li>
  </ul>
 </li>
 <li>{{cssxref("text-emphasis")}}、{{cssxref("text-emphasis-style")}}、{{cssxref("text-emphasis-color")}}、{{cssxref("text-emphasis-position")}} の各プロパティを、デフォルトで有効にしました ({{bug(1231485)}})。</li>
 <li>Gecko が、<code>-webkit-</code> 接頭辞を付加した <a href="https://wiki.mozilla.org/Compatibility/Mobile/Non_Standard_Compatibility">数種類のプロパティ</a> を受け入れるようになりました。ただし <code>layout.css.prefixes.webkit</code> を <code>true</code> に切り替えなければなりません ({{bug(1213126)}})。</li>
 <li>({{cssxref("@font")}} の) {{cssxref("@font/font-display", "font-display")}} ディスクリプターを実験的に実装しました。使用するには <code>layout.css.font-display.enabled</code> を <code>true</code> に切り替えなければなりません ({{bug(1157064)}})。</li>
 <li>3D Transform のサポートを表すメディアクエリーとして <a href="/ja/docs/Web/CSS/@media/-webkit-transform-3d"><code>@media (-webkit-transform-3d)</code></a> をサポートしました。ただし about:config の設定 <code>layout.css.prefixes.webkit</code> を <code>true</code> に切り替えなければなりません ({{bug(1239799)}})。</li>
 <li>{{cssxref("linear-gradient()")}} で、<code>0deg</code> の単位を省略した表記をサポートしました ({{bug(1239153)}})。</li>
 <li>ウェブ互換性のため、{{cssxref("-webkit-filter")}} を追加しました。設定項目 <code>layout.css.prefixes.webkit</code> で制御しており、既定値は <code>false</code> です ({{bug(1236506)}})。</li>
 <li>[css-align] "unsafe start" (以前は "true start") を "start" などにシリアライズするようになりました ({{bug(1230398)}})。</li>
</ul>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<ul>
 <li>ES2015 (ES6) の、{{jsxref("RegExp.prototype.unicode", "RegExp の unicode (u) フラグ", "", 1)}}を実装しました ({{bug(1135377)}})。</li>
 <li>ES2015 (ES6) のブロックレベル関数を実装しました ({{bug(1071646)}})。</li>
 <li>ES2015 (ES6) の {{jsxref("TypedArray.prototype.sort()")}} メソッドを実装しました ({{bug(1121937)}})。</li>
 <li>ES2015 (ES6) の {{jsxref("Functions/arguments/@@iterator", "arguments[@@iterator]")}} を実装しました ({{bug(1067049)}})。</li>
 <li><a href="http://tc39.github.io/ecmascript_sharedmem/shmem.html">EcmaScript Shared Memory API</a> を実験的に実装しました。{{jsxref("SharedArrayBuffer")}} および {{jsxref("Atomics")}} オブジェクトをご覧ください。この実験的な API を使用するには、about:config で <code>javascript.options.shared_memory</code> に <code>true</code> を設定します。</li>
 <li>ECMAScript 仕様に従い、<code><a href="/ja/docs/Web/JavaScript/Reference/Statements/let">let</a></code> および <code><a href="/ja/docs/Web/JavaScript/Reference/Statements/const">const</a></code> によって変数を再宣言すると {{jsxref("TypeError")}} ではなく {{jsxref("SyntaxError")}} が発生するようになりました ({{bug(1198833)}})。</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Strict_mode">Strict モード</a> において、{{Glossary("primitive", "プリミティブ")}}値にプロパティを設定すると {{jsxref("TypeError")}} が発生するようになりました ({{bug(603201)}})。</li>
 <li>非標準の {{jsxref("WeakMap.prototype.clear()")}} および {{jsxref("WeakSet.prototype.clear()")}} メソッドを削除しました ({{bug(1101817)}})。</li>
 <li>非標準の <code>RegExp.multiline</code> プロパティが非推奨になりました ({{bug(1220457)}})。</li>
 <li>組み込みアクセサー関数の名称に "get" または "set" 接頭辞を付加しました ({{bug(1180290)}}、{{bug(1235656)}})。</li>
 <li>{{jsxref("Operators/Array_comprehensions", "JS1.7/JS1.8 (旧式) の配列内包", "#Differences_to_the_older_JS1.7JS1.8_comprehensions", 1)}} および {{jsxref("Operators/Generator_comprehensions", "JS1.7/JS1.8 (旧式) のジェネレーター内包", "#Differences_to_the_older_JS1.7JS1.8_comprehensions", 1)}} を削除しました ({{bug(1220564)}})。</li>
</ul>

<h3 id="InterfacesAPIsDOM" name="InterfacesAPIsDOM">インターフェイス/API/DOM</h3>

<h4 id="DOM_HTML_DOM" name="DOM_HTML_DOM">DOM &amp; HTML DOM</h4>

<ul>
 <li>非推奨の {{domxref("Window.showModalDialog()")}} メソッドが、マルチプロセスモード (e10s) の Firefox で使用できなくなりました ({{bug(1234700)}})。</li>
 <li>{{domxref("Document.elementsFromPoint")}} をサポートしました ({{bug(1164427)}})。</li>
 <li>{{HTMLElement("select")}} 要素に存在しない option をプログラムで選択したときに誤って何も変更しないままにしていましたが、{{htmlattrxref("selectedIndex", "select")}} の値を <code>-1</code> に、{{htmlattrxref("selectedOptions", "select")}} を空の {{domxref("HTMLCollection")}} に、そして {{htmlattrxref("value", "select")}} を空文字列に変更するようになりました ({{bug(1203668)}})。</li>
</ul>

<h4 id="Canvas" name="Canvas">Canvas</h4>

<ul>
 <li>実験的な {{domxref("OffscreenCanvas")}} API で未実装であった部分を実装しました。新機能: {{domxref("OffscreenCanvas.OffscreenCanvas", "OffscreenCanvas()")}} コンストラクター、{{domxref("OffscreenCanvas.toBlob()")}}、{{domxref("OffscreenCanvas.transferToImageBitmap()")}}。これらの実験的な API を使用するには、about:config で <code>gfx.offscreencanvas.enabled</code> を <code>true</code> に設定します ({{bug(1172796)}})。</li>
 <li>{{domxref("ImageBitmap.close()")}} メソッドをサポートしました ({{bug(1172796)}})。</li>
 <li>新たなレンダリングコンテキスト {{domxref("ImageBitmapRenderingContext")}} を実装しました。このコンテキストを得るには、{{domxref("OffscreenCanvas.getContext()")}} または {{domxref("HTMLCanvasElement.getContext()")}} で <code>"bitmaprenderer"</code> を指定します ({{bug(1172796)}})。</li>
</ul>

<h4 id="WebGL" name="WebGL">WebGL</h4>

<ul>
 <li>{{domxref("WEBGL_compressed_texture_es3")}} 拡張を実装しました。<a href="https://en.wikipedia.org/wiki/Ericsson_Texture_Compression">ETC2 テクスチャ圧縮方式</a> を使用できます ({{bug(917505)}})。この拡張を使用するには、about:config で <code>webgl.enable-draft-extensions</code> を <code>true</code> に設定してください。</li>
</ul>

<h4 id="IndexedDB" name="IndexedDB">IndexedDB</h4>

<p><em>変更なし。</em></p>

<h4 id="Service_Workers" name="Service_Workers">Service Worker</h4>

<ul>
 <li>{{domxref("FetchEvent.request")}} を、null にしてはいけないようにしました ({{bug("1238213")}})。</li>
 <li>{{domxref("Navigator.serviceWorker")}} を SameObject としてマークしました ({{bug("1238205")}})。</li>
 <li>{{domxref("ExtendableMessageEvent.ports")}} を SameObject としてマークしました ({{bug("1238225")}})。</li>
</ul>

<h4 id="Fetch" name="Fetch">Fetch</h4>

<ul>
 <li>{{domxref("Request.mode")}} で、新しい値 <code>navigate</code> が使用可能になりました。ドキュメント間のナビゲート中のリクエスト生成をサポートします ({{bug("1209081")}})。</li>
</ul>

<h4 id="WebRTC" name="WebRTC">WebRTC</h4>

<p><em>変更なし。</em></p>

<h4 id="New_APIs" name="New_APIs">新規 API</h4>

<ul>
 <li>SVG で、{{domxref("SVGStyleElement")}} インターフェイスに {{domxref("LinkStyle")}} を実装しました ({{bug(1239128)}})。</li>
</ul>

<h4 id="Miscellaneous" name="Miscellaneous">その他</h4>

<ul>
 <li>非同期の {{domxref("FileReader")}} を、Web workers で使用できるようになりました ({{bug(901097)}})。</li>
 <li><a href="/ja/docs/Web/API/Web_Animations_API">Web Animations API</a> の実験的な実装を更新しました:
  <ul>
   <li>{{domxref("AnimationEffectTimingReadOnly")}} および {{domxref("AnimationEffectReadOnly.timing")}} を実装しました ({{bug(1214536)}})。</li>
  </ul>
 </li>
 <li><a href="/ja/docs/Web/API/Permissions_API">Permissions API</a> が、Nightly だけでなくすべてのリリース版で、デフォルトで有効になりました ({{bug(1221106)}})。</li>
 <li>WOFF フォントのサニタイズ処理を、少々緩和しました ({{bug (1244693)}})。</li>
</ul>

<h3 id="MathML" name="MathML">MathML</h3>

<p><em>変更なし。</em></p>

<h3 id="SVG" name="SVG">SVG</h3>

<p><em>変更なし。</em></p>

<h3 id="AudioVideo" name="AudioVideo">Audio/Video</h3>

<p><em>変更なし。</em></p>

<h2 id="HTTP" name="HTTP">HTTP</h2>

<p><em>変更なし。</em></p>

<h2 id="Networking" name="Networking">ネットワーク</h2>

<ul>
 <li>{{rfc(7686)}} をサポートしました。デフォルトでは、TLD が <code>.onion</code> であるドメインの名前解決を試みません。これは設定項目 <code>network.dns.blockDotOnion</code> で制御します。Tor をサポートするアドオンは、この設定を変更できます ({{bug(1228457)}})。</li>
</ul>

<h2 id="Security" name="Security">セキュリティ</h2>

<p><em>変更なし。</em></p>

<h2 id="Changes_for_add-on_and_Mozilla_developers" name="Changes_for_add-on_and_Mozilla_developers">アドオン開発者と Mozilla 開発者向けの変更点</h2>

<h3 id="Interfaces" name="Interfaces">インターフェイス</h3>

<p><em>変更なし。</em></p>

<h3 id="XUL" name="XUL">XUL</h3>

<p><em>変更なし。</em></p>

<h3 id="JavaScript_code_modules" name="JavaScript_code_modules">JavaScript コードモジュール</h3>

<p><em>変更なし。</em></p>

<h3 id="XPCOM" name="XPCOM">XPCOM</h3>

<p><em>変更なし。</em></p>

<h3 id="Other" name="Other">その他</h3>

<p><em>変更なし。</em></p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.mozilla.jp/firefox/46.0/releasenotes/">Firefox 46.0 リリースノート</a></li>
 <li><a href="https://dev.mozilla.jp/2016/02/firefox-46-addon-compatibility/">Firefox 46 アドオン互換性情報</a></li>
</ul>

<h2 id="Older_versions" name="Older_versions">過去のバージョン</h2>

<p>{{Firefox_for_developers(45)}}</p>
