---
title: Firefox 5 for developers
slug: Mozilla/Firefox/Releases/5
tags:
  - Firefox
  - Firefox 5
  - Gecko 5.0
translation_of: Mozilla/Firefox/Releases/5
---
<p>Firefox 5 は Gecko 5.0 ベースのブラウザで、2011 年 6 月 21 日にリリースされました。このページは Firefox 5 のリリースにあたり、開発者に影響する変更について情報をまとめたものです。</p>

<h2 id="Changes_for_web_developers" name="Changes_for_web_developers">Web 開発者向けの変更点一覧</h2>

<h3 id="HTML">HTML</h3>

<ul>
 <li>すべての HTML 要素が {{ domxref("element.accessKey", "accessKey") }} 属性を持つようになりました。また、{{ domxref("element.blur()", "blur()") }}, {{ domxref("element.click()", "click()") }}, {{ domxref("element.focus()", "focus()") }} メソッドもすべての要素に定義されました。これらの属性やメソッドは {{ domxref("HTMLElement") }} に定義されています。</li>
 <li>HTML5 仕様への準拠により、<a href="/ja/docs/Character_Sets_Supported_by_Gecko">文字エンコーディング</a> UTF-7 と UTF-32 のサポートが削除されました。</li>
 <li>Quirks モードにおいて、空の {{ HTMLElement("map") }} がマッチされず、空でない <code>&lt;map&gt;</code> にスキップしてしまう問題が修正されました。詳細は {{ HTMLElement("map") }} 要素のページにある <a href="/ja/docs/HTML/Element/map#Gecko_notes">Gecko の実装に関する注意書き</a> をご覧ください。</li>
 <li>Android 版 Firefox mobile が {{ cssxref("@font-face") }} で WOFF を利用できるようになりました。</li>
 <li>セキュリティ対策により、WebGL で <a href="/ja/docs/WebGL/Cross-Domain_Textures">もとのドメイン外からのテクスチャが読み込まれなくなりました</a>。将来的に <a href="/ja/docs/HTTP_access_control">HTTP access control</a> のサポートが行われ、セキュリティを確保したかたちでクロステクスチャが実現できるでしょう。</li>
</ul>

<h4 id="Canvas_improvements" name="Canvas_improvements">Canvas の修正</h4>

<ul>
 <li>{{ HTMLElement("canvas") }} 2D コンテキストの <code>createImageData()</code> メソッドに <code>ImageData</code> オブジェクト指定できるようになりました。このメソッドは指定したオブジェクトと同じ大きさの <a href="/ja/docs/HTML/Canvas/Pixel_manipulation_with_canvas#Creating_an_ImageData_object">新しい <code>ImageData</code> オブジェクトを作成</a> しますが、すべてのピクセルが透明な黒で描画されます。これは実装されたと書かれていたのですが、そうではありませんでした。</li>
 <li>{{ domxref("CanvasGradient") }} の <code>addColorStop()</code> メソッドの呼び出しで非有限なカラーストップが指定された際、<code>INDEX_SIZE_ERR</code> が適切に投げられるようになりました (これまでは <code>SYNTAX_ERR</code> が投げられていました)。</li>
 <li>{{ domxref("HTMLCanvasElement") }} の <code>toDataURL()</code> メソッド実装が修正され、指定した MIME 型をマッチングの前に小文字に変換するようになりました。</li>
 <li><code>getImageData()</code> が修正され、canvas の境界を超えた矩形を受け入れるようになりました。canvas 外にあるピクセルは透明な黒として返されます。</li>
 <li><code>drawImage()</code> と <code>createImageData()</code> が仕様に準拠し、負の引数を処理するようになりました。この処理は、適切な軸にそって矩形を反転させます。<strong>We need an article about <a class="external" href="http://dev.w3.org/csswg/css3-images/#default-sizing">CSS sizing</a> and how this works.</strong></li>
 <li><code>createImageData()</code> の呼び出しで非有限な値が指定された際、<code>NOT_SUPPORTED_ERR</code> が適切に投げられるようになりました。</li>
 <li>1px より小さな矩形が指定された際、<code>createImageData()</code> と <code>getImageData()</code> は適切に 1px 相当の ImageData を返すようになりました。</li>
 <li><code>createRadialGradient()</code> の半径に負の値を指定した際、<code>INDEX_SIZE_ERR</code> が適切に投げられるようになりました。</li>
 <li><code>createPattern()</code> や <code>drawImage()</code> の呼び出しで、画像に <code>null</code> や <code>undefined</code> が指定された際、<code>TYPE_MISMATCH_ERR</code> が適切に投げられるようになりました。</li>
 <li><code>globalAlpha</code> に不正な値が指定されても <code>SYNTAX_ERR</code> が投げられないようになりました。このような場合は適切にただ無視されます。</li>
 <li><code>translate()</code>, <code>transform()</code>, <code>rect()</code>, <code>clearRect()</code>, <code>fillRect()</code>, <code>strokeRect()</code>, <code>lineTo()</code>, <code>moveTo()</code>, <code>quadraticCurveTo()</code>, <code>arc()</code> に不正な値が指定されても例外が投げられないようになりました。このような場合は適切にただ無視されます。</li>
 <li><code>shadowOffsetX</code>, <code>shadowOffsetY</code>, <code>shadowBlur</code> に不正な値が指定された際、それらはただ無視されるようになりました。</li>
 <li><code>rotate</code>, <code>scale</code> に不正な値が指定された際、それらはただ無視されるようになりました。</li>
</ul>

<h3 id="CSS">CSS</h3>

<dl>
 <dt><a href="/ja/docs/CSS/CSS_animations">CSS Animations</a></dt>
 <dd>CSS Animations がサポートされました。<code>-moz-</code> 接頭辞をつければ利用可能です。</dd>
</dl>

<h3 id="DOM">DOM</h3>

<ul>
 <li>{{ domxref("selection") }} オブジェクトの <a href="/ja/docs/DOM/Selection/modify"><code>modify()</code></a> メソッドが変更され、単語の選択で単語の後にある空白を含まなくなりました。この変更はプラットフォームごとの一貫性を向上させ、また WebKit の挙動とも一致します。</li>
 <li>アクティブでないタブにおいて {{ domxref("window.setTimeout()") }} メソッドのタイムアウトが 1 秒に 1 回 を超えないようになりました。また、入れ子のタイムアウトが HTML5 仕様で定められた最小値 4ms になりました (これまでは 10ms でした)。</li>
 <li>上記と同様に、アクティブでないタブにおける {{ domxref("window.setInterval()") }} も 1 秒に 1 回以下になりました。</li>
 <li><a href="/ja/docs/DOM/XMLHttpRequest"><code>XMLHttpRequest</code></a> が <a href="/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Detecting_any_load_end_condition"><code>loadend</code> イベントをサポート</a> for progress listeners. このイベントはすべての転送が終了した際 (つまり、<code>abort</code>, <code>error</code>, <code>load</code> イベントの後) に発生します。このイベントを利用すると、転送の成功・失敗に関わらず実行されるタスクを処理できます。</li>
 <li>{{ domxref("Blob") }} オブジェクトと {{ domxref("File") }} オブジェクトの <code>slice()</code> メソッドが削除され、代わりに提案中のメソッドに置き換えられました。提案中のメソッドは JavaScript の <a href="/ja/docs/JavaScript/Reference/Global_Objects/Array/slice"><code>Array.slice()</code></a>, <a href="/ja/docs/JavaScript/Reference/Global_Objects/String/slice"><code>String.slice()</code></a> メソッドにより近いものです。現時点では <a href="/ja/docs/DOM/Blob#mozSlice()"><code>mozSlice()</code></a> という名前がつけられています。</li>
 <li>{{ domxref("window.navigator.language") }} の値が <code>Accept-Language</code> <a href="/ja/docs/HTTP/Headers">HTTP ヘッダ</a> の値から決定されるようになりました。</li>
 <li>DOM 仕様の要件により、{{ domxref("Node.prefix") }} プロパティが readonly になりました。</li>
</ul>

<h3 id="JavaScript">JavaScript</h3>

<ul>
 <li>正規表現を関数のように呼び出せなくなりました。この変更は WebKit チームと互換性の確保について話し合った結果行われたものです。({{ WebkitBug(28285) }} をお読みください。この機能は長いこと存在していたものの、少なくとも MDC ではドキュメント化されていませんでした。)</li>
 <li><a href="/ja/docs/JavaScript/Reference/Global_Objects/Function/isGenerator"><code>Function.prototype.isGenerator()</code></a> メソッドがサポートされました。個のメソッドによってある関数が <a href="/ja/docs/JavaScript/Guide/Iterators_and_Generators#Generators.3a_a_better_way_to_build_Iterators">generator</a> であるかを調べられます。</li>
 <li>chrome コード内に生成された DOM 文書が sandbox 内のスクリプトに現れなくなりました。</li>
 <li><a href="/ja/docs/JavaScript/Reference/Reserved_Words">予約語</a> <code>class</code>, <code>enum</code>, <code>export</code>, <code>extends</code>, <code>import</code>, <code>super</code> はこれまで Strict Mode のみで予約されていましたが、Strict Mode ではない通常のモードでも予約語扱いになりました。</li>
 <li>JSON パーサが書き直され、スピードと準拠度が向上しました。この書き直しには {{ bug("572279") }} の修正も含まれています。</li>
</ul>

<h3 id="SVG">SVG</h3>

<ul>
 <li>{{ SVGAttr("class") }} SVG アトリビュートを動的に変化させられるようになりました。</li>
 <li>{{ domxref("SVGLengthList") }}, {{ domxref("SVGNumberList") }}, {{ domxref("SVGPathSegList") }}, {{ domxref("SVGPointList") }} など、オブジェクトのリストを表す SVG DOM インターフェースがインデックスされ、配列のようにアクセス可能となりました。加えて、リスト中の項目数を表す <code>length</code> も持ちます。</li>
</ul>

<h3 id="HTTP">HTTP</h3>

<ul>
 <li>Firefox は <code>Keep-Alive</code> HTTP ヘッダを送信しないようになります。私たちはこのヘッダを正しく整形していませんでした。また、{{ httpheader("Connection") }} や {{ httpheader("Proxy-Connection") }} ヘッダに "keep-alive" を指定していたため重複しており、意味がなかったのです。</li>
 <li>HTTP のトランザクションモデルを変更し、持続的接続プール内の接続を再利用するというより高度なものになりました。Necko はプールを {{ interwiki("wikipedia", "FIFO") }} と扱うのではなく、プール内の接続を {{ interwiki("wikipedia", "congestion window") }} (CWND) の大きい順に並べ替えます。Window のサイズ拡大を避けることで、多くのケースで HTTP トランザクションの確認応答時間 (RTT) を減少させることができるでしょう。</li>
 <li>Firefox は <code>Content-Disposition</code> HTTP レスポンスヘッダについて、<code>filename</code>, <code>filename*</code> パラメタがどちらも与えられている場合にそれらをより効果的に処理するようになりました。これは <code>filename</code> が先に与えられている場合でも <code>filename*</code> をまず調べすべての名前を読み取ることで実現しています。これまでは最初にマッチしたパラメタが使われており、後により適切な名前が与えられていた場合でもそれが使われなかったのです。詳細は {{ bug(588781) }} をお読みください。</li>
</ul>

<h3 id="MathML">MathML</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3">embellished operators</a> がサポートされました。</li>
</ul>

<h3 id="Developer_tools" name="Developer_tools">開発者ツール</h3>

<ul>
 <li><a href="/ja/docs/Using_the_Web_Console#The_console_object">Web コンソールの <code>Console</code> オブジェクト</a> に <code>debug()</code> メソッドが導入されました。これは <code>log()</code> のエイリアスで、導入によっていくつかの Web サイトとの互換性が向上します。</li>
</ul>

<h2 id="アドオン開発者向けの変更点一覧">アドオン開発者向けの変更点一覧</h2>

<p>すでに開発済みのアドオンを Firefox 5 向けにアップデートを行う方法については <a href="/ja/docs/Firefox/Updating_add-ons_for_Firefox_5">Firefox 5 へのアドオンのアップデート方法</a>をご覧ください。</p>

<div class="note">注意：Firefox 5 は他のメジャーリリース版の Firefox と同様に、再コンパイルされたバイナリコンポーネントが必要となります。詳しくは<a href="/ja/docs/Developer_Guide/Interface_Compatibility#Binary_Interfaces">バイナリインターフェース</a>をご覧ください。</div>

<h3 id="JavaScriptコードモジュールに対する変更点">JavaScriptコードモジュールに対する変更点</h3>

<h4 id="新しいJavaScriptコードモジュール">新しいJavaScriptコードモジュール</h4>

<ul>
 <li><a href="/ja/docs/JavaScript_code_modules/Dict.jsm"><code>Dict.jsm</code></a>コードモジュールが追加されました。このモジュールはキーと値のペアの辞書に対する API を提供します。</li>
</ul>

<h4 id="NetUtil.jsm">NetUtil.jsm</h4>

<ul>
 <li><a href="/ja/docs/JavaScript_code_modules/NetUtil.jsm#asyncFetch()"><code>asyncFetch()</code></a> メソッドは今回から<code>nsIInputStream</code> として入力ソースの特定をサポートします。</li>
</ul>

<h3 id="インターフェースの変更点">インターフェースの変更点</h3>

<ul>
 <li><code>nsIHttpChannelInternal</code> インターフェースはチャネルの端点のアドレスとポートの情報にアクセスする新しい属性を持っています。この情報は主にデバッグに用いることができます。</li>
 <li>{{ HTMLElement("canvas") }} エレメントの {{ htmlattrxref("width", "canvas") }} と {{ htmlattrxref("height", "canvas") }} 属性は今回から符号付き整数から符合なし整数に変わり、IDLにおけるリフレクトを行います（<a href="/ja/docs/DOM/HTMLCanvasElement"><code>HTMLCanvasElement</code></a> をご覧ください）。</li>
 <li><code>nsIAppStartup2</code> と <code>nsIAppStartup_MOZILLA_2_0</code> インターフェースは<code>nsIAppStartup</code> インターフェースに統合されました。</li>
 <li><code>nsIDocShell_MOZILLA_2_0_BRANCH は</code> <code>nsIDocShell</code> インターフェースに統合されました。</li>
 <li><code>nsIFocusManager_MOZILLA_2_0_BRANCH インターフェースは </code><code><code><code>nsIFocusManager</code></code></code> インターフェースに統合されました。</li>
 <li><code>nsIHTMLEditor_MOZILLA_2_0_BRANCH</code> インターフェースは <code>nsIHTMLEditor</code> インターフェースに統合されました。</li>
</ul>

<h4 id="新しいインターフェース">新しいインターフェース</h4>

<ul>
 <li><code>nsIDOMAnimationEvent</code> が追加されました。 {{domxref("AnimationEvent")}}</li>
</ul>

<h4 id="削除されたインターフェース">削除されたインターフェース</h4>

<p>次にあげるインターフェースはもはや必要がないと判断されました。</p>

<ul>
 <li><code>nsICiter</code> （{{ bug("633066") }} をご覧ください）</li>
 <li><code>nsIDOM3Document</code> （{{ bug("639849") }} をご覧ください。）</li>
 <li><code>nsIFIXptrEvaluator</code></li>
 <li><code>nsISelectElement</code> （{{ bug("619996") }} をご覧ください。）</li>
</ul>

<h3 id="デバッグの補助">デバッグの補助</h3>

<ul>
 <li>新しい<a href="/ja/docs/Namespace/Mozilla/DebugOnly%3CT%3E"><code> DebugOnly&lt;T&gt;</code></a> ヘルパーはデバッグモードにおけるビルドにおいてのみ変数の定義を可能にしました。</li>
</ul>

<h3 id="JavaScript_API_(SpiderMonkey)">JavaScript API (SpiderMonkey)</h3>

<ul>
 <li><code><a href="/ja/docs/SpiderMonkey/JSAPI_Reference/jsdouble">jsdouble</a></code><code> の値を C の符号付き整数型と符合なし整数型に変換するために <a href="/ja/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32">JS_DoubleToInt32()</a></code> と <a href="/ja/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32"><code>JS_DoubleToUint32()</code></a> が追加されました。</li>
</ul>

<h3 id="ビルドシステムの変更点">ビルドシステムの変更点</h3>

<ul>
 <li><code>mozconfig</code> ファイルがなくても Firefox をビルドできるようになり、 <a href="/ja/docs/Configuring_Build_Options#Choose_an_application"><code>--enable-application</code> setting</a> が "browser" のデフォルトになりました。コードをダウンロード後、<code>configure &amp;&amp; make</code> (or <code>make -f client.mk</code>) を行うだけで Firefox をビルドできます。</li>
</ul>

<h2 id="See_also" name="See_also">参考</h2>

<ul>
 <li><a class="link-https" href="https://dev.mozilla.jp/2011/06/firefox5-backward-compatibility/">Firefox 5 の後方互換性に関わる修正のまとめ</a></li>
 <li><a class="external" href="http://mozilla.jp/firefox/preview/faq/">高速リリースサイクルに関するよくある質問</a></li>
</ul>

<div>{{Firefox_for_developers('4')}}</div>
