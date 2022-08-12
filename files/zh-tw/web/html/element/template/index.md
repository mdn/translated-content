---
title: <template>
slug: Web/HTML/Element/template
translation_of: Web/HTML/Element/template
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;template&gt;</code> 元素</strong>是用作保存用戶端內容的機制。該內容在頁面載入時不受渲染，但可以在運行時使用 JavaScript 實例化。</p>

<p>你可以把 template 想成文件裡面，被儲存以待稍後使用的內容片段。在頁面載入時，解析器雖然會處理 <code>&lt;template&gt;</code> 元件的內容，但元素本身並不會被渲染。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-TW/docs/Web/HTML/Content_categories">內容類型</a></th>
   <td><a href="/zh-TW/docs/Web/HTML/Content_categories#Metadata_content">元內容</a>、<a href="/zh-TW/docs/Web/HTML/Content_categories#Flow_content">流內容</a>、<a href="/zh-TW/docs/Web/Guide/HTML/Content_categories#Phrasing_content">phrasing content</a>、支援腳本的元素</td>
  </tr>
  <tr>
   <th scope="row">允許內容</th>
   <td>沒有限制</td>
  </tr>
  <tr>
   <th scope="row">標籤省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允許的父元素</th>
   <td>{{HTMLElement("body")}}, {{HTMLElement("frameset")}}, {{HTMLElement("head")}}, {{HTMLElement("dl")}} and {{HTMLElement("colgroup")}} without a <code>span</code> attribute</td>
  </tr>
  <tr>
   <th scope="row">允許的 ARIA roles</th>
   <td>無</td>
  </tr>
  <tr>
   <th scope="row">DOM 介面</th>
   <td>{{domxref("HTMLTemplateElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="屬性">屬性</h2>

<p>本元素只允許<a href="/zh-TW/docs/Web/HTML/Global_attributes">全域屬性</a>。</p>

<h2 id="示例">示例</h2>

<p>我們先從 HTML 部分開始。</p>

<pre class="brush: html">&lt;table id="producttable"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;td&gt;UPC_Code&lt;/td&gt;
      &lt;td&gt;Product_Name&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;!-- 在這裡可以選擇性地包括既有資料 --&gt;
  &lt;/tbody&gt;
&lt;/table&gt;

&lt;template id="productrow"&gt;
  &lt;tr&gt;
    &lt;td class="record"&gt;&lt;/td&gt;
    &lt;td&gt;&lt;/td&gt;
  &lt;/tr&gt;
&lt;/template&gt;
</pre>

<p>首先，我們有個稍後將透過 JavaScript 插入的表格。接著，我們把重點轉移到描述 HTML 內容模板結構的 template：它意味著一個表格的行。</p>

<p>現在表格已經建立、也定義了模板，所以我們將以 template 為基礎，用 JavaScript 把每個產生出來的行加到表格內。</p>

<pre class="brush:js;">// 透過檢查 HTML template 元素屬性的存在與否，以測試瀏覽器是否支援它
if ('content' in document.createElement('template')) {

  // 使用現有 HTML tbody、行以及模板，來實例化表格
  var t = document.querySelector('#productrow'),
  td = t.content.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  // 複製新的行並將其插至表格
  var tb = document.querySelector("tbody");
  var clone = document.importNode(t.content, true);
  tb.appendChild(clone);

  // 複製新的行
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans";

  // 複製新的行並將其插至表格
  var clone2 = document.importNode(t.content, true);
  tb.appendChild(clone2);

} else {
  // 因為 HTML template 不被支援，所以要用其他方法在表格增加新行
}
</pre>

<p>結果會變成原生的 HTML 表格，它透過 JavaScript 產生了兩個新行：</p>

<div class="hidden">
<pre class="brush: css">table {
  background: #000;
}
table td {
  background: #fff;
}</pre>
</div>

<p>{{EmbedLiveSample("Example", 500, 120)}}</p>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>



<p>{{Compat("html.elements.template")}}</p>

<h2 id="參閱">參閱</h2>

<ul>
 <li>Web component：{{HTMLElement("slot")}}（還有過往的{{HTMLElement("shadow")}}）</li>
</ul>
