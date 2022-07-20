---
title: '<html>: HTML 文書 / ルート要素'
slug: Web/HTML/Element/html
tags:
  - Element
  - HTML
  - HTML Root Element
  - Reference
  - Web
translation_of: Web/HTML/Element/html
---
<p>{{HTMLRef}}</p>

<p><span class="seoSummary"><strong>HTML の <code>&lt;html&gt;</code> 要素</strong>は HTML 文書においてルート (基点) となる要素 (トップレベル要素) であり、<em>ルート要素</em>とも呼ばれます。他のすべての要素は、この要素の子孫として配置しなければなりません。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a></th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td>ひとつの {{HTMLElement("head")}} 要素と、それに続くひとつの {{HTMLElement("body")}} 要素。</td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>開始タグは、 <code>&lt;html&gt;</code> 要素内の最初のノードがコメントでない場合は省略可能です。<br>
    終了タグは、 <code>&lt;html&gt;</code> 要素の直後にコメントがない場合は省略可能です。</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td>なし。これは文書のルート要素です。</td>
  </tr>
  <tr>
   <th scope="row">暗黙の ARIA ロール</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td>許可されている <code>role</code> なし</td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{domxref("HTMLHtmlElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes">属性</h2>

<p>この要素は<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>を持っています。</p>

<dl>
 <dt>{{htmlattrdef("manifest")}} {{obsolete_inline}}</dt>
 <dd>ローカルにキャッシュされるべきリソースを示すリソースマニフェストの {{glossary("URI")}} を指定します。詳細については<a href="/ja/docs/Web/HTML/Using_the_application_cache">アプリケーションキャッシュの使用</a>を参照してください。</dd>
 <dt>{{htmlattrdef("version")}} {{obsolete_inline}}</dt>
 <dd>現在の文書を管理する HTML の{{glossary("DTD", "文書型定義")}}のバージョンを指定します。文書型宣言のバージョン情報と重複しているため、この属性は必須ではありません。</dd>
 <dt>{{htmlattrdef("xmlns")}}</dt>
 <dd>文書の {{glossary("XML")}} {{glossary("Namespace", "名前空間")}}を指定します。既定値は <code>"http://www.w3.org/1999/xhtml"</code> です。これは XML {{glossary("parser", "パーサー")}}で解釈される文書では必須、 text/html の文書では任意です。</dd>
</dl>

<h2 id="Example">例</h2>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;...&lt;/head&gt;
  &lt;body&gt;...&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Accessibility_concerns">アクセシビリティの考慮</h2>

<p><code>&lt;html&gt;</code> 要素に対して {{htmlattrxref("lang")}} 属性に<a href="https://www.ietf.org/rfc/bcp/bcp47.txt">有効な IETF の識別用言語タグ</a>を設定することで、画面読み上げ技術が正しい言語をアナウンスする助けになります。識別用言語タグはページのコンテンツの大部分で使用されている言語を記述するべきです。これがないと、画面リーダーはふつう、既定でオペレーティングシステムの設定言語を使用しますので、間違って発音する可能性があります。</p>

<p><code>html</code> 要素に妥当な <code>lang</code> を設定することは、ページの {{HTMLElement("head")}} に含まれる {{HTMLElement("title")}} などの重要なメタデータについても、正しくアナウンスすることができます。</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable">MDN "WCAG を理解する ― ガイドライン 3.1 の解説"</a></li>
 <li><a href="https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/meaning-doc-lang-id.html">Understanding Success Criterion 3.1.1 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Specifications">仕様書</h2>

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
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-html-element', '&lt;html&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'semantics.html#the-html-element', '&lt;html&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td><code>manifest</code> 属性を追加 (後に非推奨)<br>
    <code>version</code> 属性を廃止</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/global.html#h-7.3', '&lt;html&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td><code>version</code> 属性を非推奨に変更</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.html")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>MathML トップレベル要素: {{MathMLElement("math")}}</li>
 <li>SVG トップレベル要素: {{SVGElement("svg")}}</li>
</ul>
