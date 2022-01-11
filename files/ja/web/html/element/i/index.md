---
title: '<i>: 興味深いテキスト要素'
slug: Web/HTML/Element/i
tags:
  - HTML
  - HTML 文字レベルの意味付け
  - 'HTML:フローコンテンツ'
  - 'HTML:知覚可能コンテンツ'
  - 'HTML:記述コンテンツ'
  - Reference
  - Web
  - font-style
  - ウェブ
  - 要素
translation_of: Web/HTML/Element/i
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary"><strong>HTML の興味深いテキスト要素 (<code>&lt;i&gt;</code>)</strong>は、何らかの理由で他のテキストと区別されるテキストの範囲を表します。</span>例えば、技術用語、外国語のフレーズ、架空の人物の思考などです。英文においてはよく斜体で表示されるものです。</p>

<div>{{EmbedInteractiveExample("pages/tabbed/i.html", "tabbed-shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a></th>
   <td><a href="/ja/docs/Web/HTML/Content_categories#Flow_content">フローコンテンツ</a>, <a href="/ja/docs/Web/HTML/Content_categories#Phrasing_content">記述コンテンツ</a>, 知覚可能コンテンツ</td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td><a href="/ja/docs/Web/HTML/Content_categories#Phrasing_content">記述コンテンツ</a></td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td><a href="/ja/docs/Web/HTML/Content_categories#Phrasing_content">記述コンテンツ</a>を受け入れるすべての要素</td>
  </tr>
  <tr>
   <th scope="row">暗黙の ARIA ロール</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td>すべて</td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>この要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>以外の属性はありません。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上のメモ</h2>

<ul>
 <li><code>&lt;i&gt;</code> 要素は、読みやすくする目的で文字列を通常の文脈から区別するために使用します。これは、この範囲の文字列が周囲の文字列とは意味論的に異なるということです。</li>
 <li>以前のバージョンの HTML 仕様では、 <code>&lt;i&gt;</code> 要素は文字列をイタリック体で表示するために使用する、単なる表現用の要素でした。これは <code>&lt;b&gt;</code> タグが文字列の太字表示に使用されたことと同様です。これらのタグに印字表現ではない意味が定義されたため、それは正しくなくなりました。ブラウザーは現在でも一般的に <code>&lt;i&gt;</code> の中身を斜体で表示するでしょうが、この要素の定義としては、そうすることは要件ではなくなりました。テキストをイタリック体で表示するには、 CSS の {{cssxref("font-style")}} プロパティを使用してください。</li>
 <li>この要素は、他の要素でより適切にマークアップされていない場合のみ使用してください。
  <ul>
   <li>強調を表すには {{HTMLElement("em")}} 要素を使用してください。</li>
   <li>重要性を表すには {{HTMLElement("strong")}} 要素を使用してください。</li>
   <li>関連性を表すには {{HTMLElement("mark")}} 要素を使用してください。</li>
   <li>書籍、演劇、音楽などの作品名を表すには {{HTMLElement("cite")}} 要素を使用してください。</li>
   <li>用語の定義のインスタンスを表すには {{HTMLElement("dfn")}} 要素を使用してください。</li>
  </ul>
 </li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<p>この例では、 <code>&lt;i&gt;</code> 要素を他の言語の文字列を示すために使用することを示します。</p>

<pre class="brush: html notranslate">&lt;p&gt;The Latin phrase &lt;i&gt;Veni, vidi, vici&lt;/i&gt; is often
mentioned in music, art, and literature.&lt;/p&gt;
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples")}}</p>

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
   <td>{{SpecName('HTML WHATWG', 'text-level-semantics.html#the-i-element', '&lt;i&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'textlevel-semantics.html#the-i-element', '&lt;i&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'present/graphics.html#h-15.2.1', '&lt;b&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.i")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("em")}}</li>
 <li>その他のイタリック体にする要素: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}</li>
</ul>
