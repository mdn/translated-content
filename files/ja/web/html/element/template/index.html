---
title: '<template>: コンテンツテンプレート要素'
slug: Web/HTML/Element/template
tags:
  - Element
  - HTML
  - HTML Web Components
  - 'HTML:Flow content'
  - 'HTML:Metadata content'
  - 'HTML:Phrasing content'
  - 'HTML:Script-supporting element'
  - Reference
  - Template
  - Web
  - Web Components
translation_of: Web/HTML/Element/template
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary"><strong>HTML のコンテンツテンプレート (<code>&lt;template&gt;</code>) 要素</strong> は、すなわちページの読み込み時にすぐには描画されないものの、後で JavaScript を使用してインスタンスを生成できる {{Glossary("HTML")}} を保持するメカニズムです。</span></p>

<p>テンプレートは、文書内に格納されたコンテンツの断片として考えてください。ページの読み込み時にパーサーが <strong><code>&lt;template&gt;</code></strong> 要素の内容を処理している間、その内容の有効性のみが検証されます。しかし、要素の内容は描画されません。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a></th>
   <td><a href="/ja/docs/Web/HTML/Content_categories#Metadata_content">メタデータコンテンツ</a>, <a href="/ja/docs/Web/HTML/Content_categories#Flow_content">フローコンテンツ</a>, <a href="/ja/docs/Web/Guide/HTML/Content_categories#Phrasing_content">記述コンテンツ</a>, <a href="/ja/docs/Web/Guide/HTML/Content_categories#Script-supporting_elements">スクリプト対応要素</a></td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td>制限なし</td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td><a href="/ja/docs/Web/Guide/HTML/Content_categories#Metadata_content">メタデータコンテンツ</a>, <a href="/ja/docs/Web/Guide/HTML/Content_categories#Phrasing_content">記述コンテンツ</a>, <a href="/ja/docs/Web/Guide/HTML/Content_categories#Script-supporting_elements">スクリプト対応要素</a> を受け付けるすべての要素。また、 {{htmlattrxref("span", "colgroup")}} 属性を持たない {{HTMLElement("colgroup")}} 要素の子になることもできます。</td>
  </tr>
  <tr>
   <th scope="row">暗黙の ARIA ロール</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td>許可されている <code>role</code> なし</td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{domxref("HTMLTemplateElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>この要素には、<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>のみがあります。</p>

<p>ただし、 {{domxref("HTMLTemplateElement")}} の {{domxref("HTMLTemplateElement.content", "content")}} プロパティは、読み取り専用の {{domxref("DocumentFragment")}} で、テンプレートが表現する DOM サブツリーを保持しています。なお、 {{domxref("HTMLTemplateElement.content", "content")}} の値を直接使用すると予想外の動作につながる可能性があります。下記の <a href="#Avoiding_DocumentFragment_pitfall">DocumentFragment の落とし穴の回避</a>の節を参照してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>まず、HTML 部分の例から始めましょう。</p>

<pre class="brush: html notranslate">&lt;table id="producttable"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;td&gt;UPC_Code&lt;/td&gt;
      &lt;td&gt;Product_Name&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;!-- 必要に応じて既存のデータをここに含められます。 --&gt;
  &lt;/tbody&gt;
&lt;/table&gt;

&lt;template id="productrow"&gt;
  &lt;tr&gt;
    &lt;td class="record"&gt;&lt;/td&gt;
    &lt;td&gt;&lt;/td&gt;
  &lt;/tr&gt;
&lt;/template&gt;
</pre>

<p>まず、JavaScript コードを使用して後からコンテンツを挿入するための table を作ります。次に、1 行分を表す HTML 断片の構造が書かれた template が続きます。</p>

<p>table が生成され、 template が定義されました。 JavaScript を使って、 template を基に構築される各行を table に挿入します。</p>

<pre class="brush:js; notranslate">// templete 要素の content 属性の有無を確認することで、
// ブラウザーが HTML template 要素に対応しているかテストします。
if ('content' in document.createElement('template')) {

    // 既存の HTML tbody と template の行を使って
    // table をインスタンス生成します。
    var tbody = document.querySelector("tbody");
    var template = document.querySelector('#productrow');

    // 新しい行を複製して表に挿入します。
    var clone = template.content.cloneNode(true);
    var td = clone.querySelectorAll("td");
    td[0].textContent = "1235646565";
    td[1].textContent = "Stuff";

    tbody.appendChild(clone);

    // 新しい行を複製して表に挿入します。
    var clone2 = template.content.cloneNode(true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans 2";

    tbody.appendChild(clone2);

} else {
  // HTML template 要素に対応していないので
  // 表に行を追加するほかの方法を探します。
}
</pre>

<p>結果として、 JavaScript を通して、新しい行が追加された HTML の表ができます。</p>

<div class="hidden">
<pre class="brush: css notranslate">table {
  background: #000;
}
table td {
  background: #fff;
}</pre>
</div>

<p>{{EmbedLiveSample("Examples", 500, 120)}}</p>

<h2 id="Avoiding_DocumentFragment_pitfall" name="Avoiding_DocumentFragment_pitfall">DocumentFragment の落とし穴の回避</h2>

<p>{{domxref("DocumentFragment")}} は様々なイベントのために有効なターゲットではないので、その中の要素を複製したり、参照したりすることが好ましいことがよくあります。</p>

<p>以下の HTML および JavaScript を考えてみてください。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div id="container"&gt;&lt;/div&gt;

&lt;template id="template"&gt;
  &lt;div&gt;Click me&lt;/div&gt;
&lt;/template&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">const container = document.getElementById("container");
const template = document.getElementById("template");

function clickHandler(event) {
  alert("Clicked a div");
}

const firstClone = template.content.cloneNode(true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const secondClone = template.content.firstElementChild.cloneNode(true);
secondClone.addEventListener("click", clickHandler);
container.appendChild(secondClone);</pre>

<h3 id="Result" name="Result">結果</h3>

<p><code>firstClone</code> は DocumentFragment のインスタンスなので、期待通りにコンテナー内に追加されますが、クリックしてもクリックイベントは発生しません。 <code>secondClone</code> は {{domxref("HTMLDivElement")}} のインスタンスなので、クリックすると期待通りに動作します。</p>

<p>{{EmbedLiveSample('Avoiding_DocumentFragment_pitfall')}}</p>

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
   <td>{{SpecName('HTML WHATWG','scripting.html#the-template-element','template element')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C','semantics-scripting.html#the-template-element','template element')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.template")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>ウェブコンポーネント: {{HTMLElement("slot")}} (および過去の {{HTMLElement("shadow")}})</li>
 <li><a href="/ja/docs/Web/Web_Components/Using_templates_and_slots">テンプレートとスロットの利用</a></li>
</ul>
