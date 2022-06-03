---
title: '<applet>: 埋め込み Java アプレット要素'
slug: Web/HTML/Element/applet
tags:
  - Element
  - HTML
  - Java
  - Obsolete
  - Reference
  - Web
  - applet
translation_of: Web/HTML/Element/applet
---
<p>{{HTMLRef}}{{Obsolete_Header}}</p>

<div class="blockIndicator warning">
<p><code>&lt;applet&gt;</code> 要素は <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1279218">Gecko 56</a> および <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=470301">Chrome 47</a> で廃止されました。</p>

<p>また、<a href="https://bugs.webkit.org/show_bug.cgi?id=157926">WebKit</a> および <a href="https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11946645/">Edge</a> では廃止が検討されています。</p>
</div>

<p><span class="seoSummary">廃止された <strong>HTML の アプレット要素</strong> (<strong><code>&lt;applet&gt;</code></strong>) は文書に Java アプレットを埋め込みます。この要素は {{HTMLElement("object")}} にとって代わり、廃止されました。</span></p>

<p>ウェブでの Java アプレットの使用は非推奨です。多くのブラウザーが、すでに Java プラグインを含むプラグイン使用の対応をやめています。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a></th>
   <td><a href="/ja/docs/Web/HTML/Content_categories#Flow_content">フローコンテンツ</a>, <a href="/ja/docs/Web/HTML/Content_categories#Phrasing_content">記述コンテンツ</a>, <a href="/ja/docs/HTML/Content_categories#Embedded_content">埋め込みコンテンツ</a>, 対話型コンテンツ, 知覚可能コンテンツ</td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td>0個以上の {{HTMLElement("param")}} 要素、その後で <a href="/ja/docs/Web/HTML/Content_categories#Transparent_content_model">透過的コンテンツ</a></td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>なし。開始タグと終了タグの両方が必須です。</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td><a href="/ja/docs/HTML/Content_categories#Embedded_content">埋め込みコンテンツ</a>を受け付けるすべての要素</td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{DOMxRef("HTMLAppletElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes" name="Attributes">属性</h2>

<dl>
 <dt>{{HTMLAttrDef("align")}}</dt>
 <dd>この属性は、周囲にあるコンテンツとの関係として、ページ上でアプレットを配置するために使用します。 HTML 4.01 仕様では <code>bottom</code>, <code>left</code>, <code>middle</code>, <code>right</code>, and <code>top</code> という値を定義していましたが、 Microsoft および Netscape は <code>absbottom</code>, <code>absmiddle</code>, <code>baseline</code>, <code>center</code>, <code>texttop</code> にも対応していました。</dd>
 <dt>{{HTMLAttrDef("alt")}}</dt>
 <dd>この属性は、Java をサポートしないブラウザーが代わりに表示する説明文を与えます。ページ作者は、<code>&lt;applet&gt;</code> 要素に囲まれた内容物も代替テキストとして表示される可能性があることにも留意すべきです。</dd>
 <dt>{{HTMLAttrDef("archive")}}</dt>
 <dd>この属性は、アーカイブ化あるいは圧縮されたバージョンのアプレットとアプレットに関連づけられた class ファイルを参照するもので、これらはダウンロード時間の削減に役立ちます。</dd>
 <dt>{{HTMLAttrDef("code")}}</dt>
 <dd>この属性は、読み込んで実行するアプレットの class ファイルの URL を指定します。アプレットのファイル名は .class 拡張子で識別します。code で指定した URL は、<code>codebase</code> 属性に相対的となるでしょう。</dd>
 <dt>{{HTMLAttrDef("codebase")}}</dt>
 <dd>この属性は、code 属性で参照するアプレットの .class ファイルを保存しているディレクトリの絶対または相対 URL を与えます。</dd>
 <dt>{{HTMLAttrDef("datafld")}}</dt>
 <dd>Internet Explorer 4 以上がサポートするこの属性は、バインドされたデータを提供するデータソースオブジェクトの列名を指定します。この属性は、Java アプレットに渡すさまざまな {{HTMLElement("param")}} 要素を指定するために使用できました。</dd>
 <dt>{{HTMLAttrDef("datasrc")}}</dt>
 <dd><code>datafld</code> と同様に、この属性は Internet Explorer 4 のデータバインディングで使用します。これは、アプレットに関連づけられた {{HTMLElement("param")}} 要素にバインドしたデータを提供するデータソースオブジェクトの ID を示します。</dd>
 <dt>{{HTMLAttrDef("height")}}</dt>
 <dd>この属性は、アプレットが必要とする高さをピクセル数で指定します。</dd>
 <dt>{{HTMLAttrDef("hspace")}}</dt>
 <dd>この属性は、アプレットの両側に確保する水平方向の追加スペースを指定します。</dd>
 <dt>{{HTMLAttrDef("mayscript")}}</dt>
 <dd>Netscape の実装ではこの属性で、ドキュメント内に埋め込んだスクリプト言語のプログラムでアプレットにアクセスできます。</dd>
 <dt>{{HTMLAttrDef("name")}}</dt>
 <dd>この属性はアプレットを他のリソース、特にスクリプトから識別できるようにするため、アプレットに名前をつけます。</dd>
 <dt>{{HTMLAttrDef("object")}}</dt>
 <dd>この属性は、アプレットのシリアライズ表現の URL を指定します。</dd>
 <dt>{{HTMLAttrDef("src")}}</dt>
 <dd>この属性は Internet Explorer 4 以上向けに定義されたもので、アプレットに関係するファイルの URL を指定します。意味や使用法は不明瞭であり、また HTML 標準に含まれていません。</dd>
 <dt>{{HTMLAttrDef("vspace")}}</dt>
 <dd>この属性は、アプレットの上下に確保する垂直方向の追加スペースを指定します。</dd>
 <dt>{{HTMLAttrDef("width")}}</dt>
 <dd>この属性は、アプレットが必要とする幅をピクセル数で指定します。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;applet code="game.class" align="left" archive="game.zip" height="250" width="350"&gt;
  &lt;param name="difficulty" value="easy"&gt;
  &lt;b&gt;Sorry, you need Java to play this game.&lt;/b&gt;
&lt;/applet&gt;
</pre>

<p>{{EmbedLiveSample("Example", "100%", 300)}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("HTML5.2", "obsolete.html#the-applet-element", "&lt;applet&gt;")}}</td>
   <td>{{Spec2("HTML5.2")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "obsolete.html#the-applet-element", "&lt;applet&gt;")}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "obsolete.html#the-applet-element", "&lt;applet&gt;")}}</td>
   <td>{{Spec2("HTML5 W3C")}}</td>
   <td>廃止</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML4.01", "struct/objects.html#h-13.4", "&lt;applet&gt;")}}</td>
   <td>{{Spec2("HTML4.01")}}</td>
   <td>{{HTMLElement("object")}} に置き換えて非推奨化</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.applet")}}</p>

<h2 id="Notes" name="Notes">注</h2>

<p>W3C 仕様書では <code>&lt;applet&gt;</code> の使用を勧めておらず、 {{HTMLElement("object")}} 要素を勧めています。 HTML 4.01 strict の定義ではこの要素を非推奨としており、 HTML5 では完全に廃止されました。</p>
