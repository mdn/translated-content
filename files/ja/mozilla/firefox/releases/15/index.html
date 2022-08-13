---
title: Firefox 15 for developers
slug: Mozilla/Firefox/Releases/15
tags:
  - Firefox
  - Firefox 15
  - Gecko 15
translation_of: Mozilla/Firefox/Releases/15
---
<p>Firefox 15 は 2012 年 8 月 28 日にリリースされました。この記事では、ウェブ開発者に知らせるだけでなく、Firefox や Gecko 開発者、アドオン開発者にも役立つ主な変更点のリストを掲載しています。</p>

<h2 id="Changes_for_Web_developers" name="Changes_for_Web_developers">Web 開発者向けの変更点</h2>

<h3 id="HTML">HTML</h3>

<ul>
 <li>{{HTMLElement("font")}} 要素の <code>size</code> 属性が HTML5 仕様に従って扱われるようになりました。つまり、<code>10</code> より大きい、または、<code>-10</code> より小さい整数はすべて <code>10</code> か <code>-10</code> であるとみなされるようになりました。</li>
 <li><code>&lt;font&gt;</code> 要素の <code>font-weight</code> および <code>point-size</code> 属性のサポートが削除されました。これらは非標準であり、Gecko はそれらをサポートする唯一のレンダリングエンジンでした。</li>
 <li>{{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素のための Ogg コンテナで音声向けの <a class="external" href="http://www.opus-codec.org/">Opus コーデック</a> がサポートされました。</li>
 <li>{{HTMLElement("source")}} 要素で <code>media</code> 属性がサポートされました。</li>
 <li>{{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素で <code>played</code> 属性がサポートされました。この属性の値はこれまで再生したメディアの時間を一覧化した {{domxref("TimeRanges")}} オブジェクトです。</li>
</ul>

<h3 id="CSS">CSS</h3>

<ul>
 <li>{{cssxref("font-feature-settings")}} プロパティが最新の構文に更新されました。例: <code>font-feature-settings: "lnum" 1;</code></li>
 <li>{{cssxref("text-transform")}} プロパティが (<code>ﬁ</code> のような) Unicode の合字を正しく扱うように拡張されました。</li>
 <li>CSS の {{cssxref("word-break")}} プロパティが実装されました。</li>
 <li>The {{cssxref("border-image")}} プロパティが最新の仕様と接頭辞無しのプロパティに対応するように更新されました。 (<a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=713643">bug 713643</a>)</li>
 <li>{{cssxref("transform")}} の <code>skew()</code> 関数は Firefox 14 で削除されましたが、既存サイト互換性のために復活しました。ですが、代りに、<code>skewX()</code> および <code>skewY()</code> 関数を利用することを勧めます。</li>
</ul>

<h3 id="DOM">DOM</h3>

<ul>
 <li>DOM Events Level 3 のメソッドであり、<code>Ctrl</code> <code><code>や</code> Shift </code>のような、モディファイアキーの状態を調べることができる、<a href="/ja/docs/DOM/KeyboardEvent#getModifierState%28%29" title="https://developer.mozilla.org/ja/docs/DOM/KeyboardEvent#getModifierState%28%29"><code>KeyboardEvent.getModifierState()</code></a> と <a href="/ja/docs/DOM/MouseEvent#getModifierState%28%29" title="https://developer.mozilla.org/ja/docs/DOM/MouseEvent#getModifierState%28%29"><code>MouseEvent.getModifierState()</code></a>　が実装されました（bugs <a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=630811">630811</a> および <a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=731878">731878</a>）。ただし、その挙動は最新の D3E 草案に従っています。そのため、モディファイアキー名のいくつかが IE と異なります（{{bug("769190")}}）。</li>
 <li>マウスイベントで、<a href="/ja/docs/DOM/MouseEvent" title="DOM/MouseEvent"><code>MouseEvent.buttons</code></a> 属性を用いたマウスボタンの状態を調べるためのサポートが実装されました。</li>
 <li>キーボードイベントで、 <a href="/ja/docs/DOM/KeyboardEvent#Attributes_location" title="https://developer.mozilla.org/ja/docs/DOM/KeyboardEvent#Attributes_location">KeyboardEvent.location</a> 属性を用いたキーの位置（標準、モディファイアキーの左もしくは右、テンキー上）を調べるためのサポートが実装されました（{{bug("166240")}}）。</li>
 <li><code>KeyboardEvent.keycode</code> の結果が Windows/Linux/Mac でほぼ同じであった従来のルールよりも優れたルールから算出されるようになりました。そして、それらは アラビア文字、キリル文字, タイ文字などのような、Linux と Mac での非 ASCII 入力可能レイアウトでも利用可能です。<a href="/ja/docs/DOM/KeyboardEvent#Virtual_key_codes" title="DOM/KeyboardEvent#Virtual_key_codes">仮想キーコードのための文書</a>を参照してください。</li>
 <li><a href="/ja/docs/DOM/range.detach" title="https://developer.mozilla.org/ja/docs/DOM/range.detach"><code>range.detach()</code></a> メソッドは何もしないように変更されました。恐らく、将来的に削除されるでしょう。</li>
 <li><code>HTMLVideoElement.mozHasAudio()<code><code><code> </code></code></code>メソッドが実装されました。与えられた video 要素に関連づけられた音声トラックがあるかどうかを示します（<a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=480376">bug </a><a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=480376">480376</a>）。</code></li>
 <li><code>Performance</code> API に新しいメソッド <code>now()</code> が追加されました。このメソッドは <code>DOMHighResTimeStamp</code> 型の高解像度タイマをサポートします（<a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=539095">bug 539095</a>）。</li>
 <li><a href="/ja/docs/API/WebSMS" title="API/WebSMS">WebSMS API</a> が更新され、SMS テキストメッセージが既読か未読かのどちらかを示す <code>read</code> 属性がサポートされました。</li>
 <li><a class="link-https" href="https://wiki.mozilla.org/WebAPI/FileHandleAPI">FileHandle API</a> が実装されました。</li>
 <li><a href="/ja/docs/DOM/Blob" title="DOM/Blob"><code>Blob</code></a> コンストラクタが <code><var>blobParts</var></code> 引数の値として <code>ArrayBuffer</code> に加えて <code>ArrayBufferView</code> を取れるようになりました。 (<a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=752402">bug 752402</a>)</li>
 <li><a href="http://www.w3.org/TR/ambient-light/">Ambient Light Events Working Draft</a> で策定された <code>DeviceLightEvent</code> が実装されました。</li>
 <li>{{domxref("DeviceProximityEvent")}} および {{domxref("UserProximityEvent")}} <a href="http://www.w3.org/TR/proximity/">Proximity Events</a> が実装されました。</li>
 <li>{{domxref("File")}} <code>lastModifiedDate</code> プロパティが実装されました。 ({{bug("673586")}})</li>
</ul>

<h3 id="JavaScript">JavaScript</h3>

<ul>
 <li>Typed Arrays 仕様由来の <a href="/ja/docs/javascript_typed_arrays/DataView" title="JavaScript_typed_arrays/DataView"><code>DataView</code></a> インタフェースのサポートが追加されました。これは <a href="/ja/docs/javascript_typed_arrays/ArrayBuffer" title="JavaScript_typed_arrays/ArrayBuffer"><code>ArrayBuffer</code></a> に含まれるデータへの低レベルアクセスを提供します。</li>
 <li>ECMAScript Harmony の <code>Number.isNaN</code> のサポートが追加されました。(<a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=749818">bug 749818</a>)</li>
 <li>ECMAScript Harmony のデフォルトパラメータが追加されました。 (<a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=757676">bug 757676</a>)</li>
 <li>ECMAScript Harmony のレストパラメータが追加されました。 (<a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=574132">bug 574132</a>)</li>
</ul>

<h3 id="WebGL">WebGL</h3>

<ul>
 <li><a href="/ja/docs/WebGL/Using_Extensions#WEBGL_compressed_texture_s3tc" title="WebGL/Using_Extensions#WEBGL_compressed_texture_s3tc"><code>WEBGL_compressed_texture_s3tc</code></a> 拡張のサポートが追加されました。圧縮されたテクスチャは GPU 上でテクスチャを保持するために必要なメモリの量を減少させます。その結果、より高解像度なテクスチャや同解像度でもより多くのテクスチャを扱えます。</li>
</ul>

<h3 id="MathML">MathML</h3>

<ul>
 <li>数学演算記号で {{cssxref("@font-face")}} で指定したダウンローダブルフォントを利用できるようになりました。これにより、<a class="link-https" href="https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/">MathML-fonts アドオン</a> で引き伸ばされた演算記号が正常に表示されるようになります。</li>
 <li>{{MathMLElement("maction")}} の <code>selection</code> 属性が <code>actiontype</code> 属性の値が <code>toggle</code> のときにのみ考慮されるようになりました。</li>
 <li><a class="external" href="http://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1"><span id="summary_alias_container"><span id="short_desc_nonedit_display">非推奨の名前付き空白バインディング</span></span></a> が削除されました（{{bug("673759")}}）。</li>
 <li><a href="/ja/docs/MathML/Attributes/Values" title="Values">Length</a> と {{MathMLElement("mpadded")}} の値でサポートされる構文が MathML3 仕様で指定されたものにより近くなりました。</li>
 <li>New MathML mirrorable operators for Arabic math have been added to the operator dictionary ({{bug("757125")}}).</li>
</ul>

<h3 id="SVG">SVG</h3>

<ul>
 <li>{{SVGElement("view")}} 要素のサポートが追加されました ({{bug("512525")}})。</li>
</ul>

<h3 id="Network">Network</h3>

<ul>
 <li>SPDY v3 プロトコルのサポートが実装されました。既定では無効であり、<code>network.http.spdy.enabled.v3</code> の設定を <code>true</code> にすることで有効になります。 (<a class="link-https" href="https://bugzilla.mozilla.org/show_bug.cgi?id=737470">bug 737470</a>)</li>
</ul>

<h2 id="Changes_for_add-on_and_Mozilla_developers" name="Changes_for_add-on_and_Mozilla_developers">Mozilla 開発者とアドオン開発者向けの変更点</h2>

<h3 id="Interface_changes" name="Interface_changes">インタフェースの変更点</h3>

<dl>
 <dt><code>nsIDOMWindowUtils</code></dt>
 <dd><code>sendMouseEvent()</code>、<code>sendTouchEvent()</code>、<code>sendMouseEventToWindow()</code>、<code>sendMouseScrollEvent()</code> および <code>sendKeyEvent()</code> の <code>aModifiers</code> は <a href="/ja/docs/DOM/KeyboardEvent#getModifierState%28%29" title="https://developer.mozilla.org/ja/docs/DOM/KeyboardEvent#getModifierState%28%29"><code>KeyboardEvent.getModifierState()</code></a> でサポートされている修飾キーのすべてをサポートします。<code>MODIFIER_*</code> という値を利用してください。 また、<code>sendKeyEvent()</code> の第 5 引数が <code>boolean</code> から <code>unsigned long</code> に変更されました。後方互換性のために、呼び出し元がそれに対して <code>true</code> または false を渡している場合、挙動は変更されません。この変更によって呼び出し元がキーの位置を指定することができるようになります。</dd>
 <dt><code>nsIBrowserHistory</code></dt>
 <dd><code>hidePage()</code> メソッドは一度も実装されずに、かつ、このリリースで完全に削除されます。<a href="/ja/docs/Places" title="Places">Places</a> API のすべてを非同期化する進行中の作業の一部として、<code>addPageWithDetails()</code> メソッドも削除されます。代わりに <code>mozIAsyncHistory.updatePlaces</code> を利用してください。また、<code>count</code> 属性も削除されます。それはときどき実際のカウントを返していませんでした（代わりに、単純にエントリが存在したかどうかを返していました）。代わりに `nsINavHistoryService.hasHistoryEntries` を利用できます。</dd>
 <dt><code>inIDOMUtils</code></dt>
 <dd><code>inlDOMUtils.parseStyleSheet</code> メソッドが追加され、CSS の (再) 解析ができるようになりました。</dd>
 <dt><code>nsIINIParserWriter</code></dt>
 <dd><code>nsIINIParserWriter.writeFile</code> メソッドが <code>flags</code> プロパティを受け入れるようになりました。現在は 1 個のオプションのみを与えます: Windows および特定のインストーラーとの互換性のため、ファイルを UTF-8 形式の代わりに UTF-16 形式で書き込むことを知らせることができます。</dd>
</dl>

<h4 id="New_interfaces" name="New_interfaces">新しいインタフェース</h4>

<dl>
 <dt><code>nsISpeculativeConnect</code></dt>
 <dd>近い将来のいつかに要求される可能性がある、与えられた URI への接続をオープンするネットワーキング層のヒントを与えるための方法を提供します。これによりネットワーク層が時として高レイテンシプロセスで前もっと新しいネットワーク接続を開き始めることを可能にします。</dd>
</dl>

<h4 id="Removed_interfaces" name="Removed_interfaces">削除されたインタフェース</h4>

<p>以下のインタフェースが削除されました。</p>

<ul>
 <li><code>nsIGlobalHistory</code></li>
</ul>

<h2 id="See_also" name="See_also">関連記事</h2>

<div>{{Firefox_for_developers('14')}}</div>
