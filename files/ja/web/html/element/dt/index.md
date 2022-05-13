---
title: '<dt>: 説明用語要素'
slug: Web/HTML/Element/dt
tags:
  - Definition
  - Description list
  - Definition Term
  - Description Term
  - Element
  - HTML
  - HTML grouping content
  - Reference
  - Term
  - Web
  - dt
browser-compat: html.elements.dt
translation_of: Web/HTML/Element/dt
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary"><strong>HTML の <code>&lt;dt&gt;</code> 要素</strong>は、説明または定義リストの中で用語を表す部分であり、 {{HTMLElement("dl")}} の子要素としてのみ用いることができます。</span>普通は {{HTMLElement("dd")}} 要素が続きます。しかし、複数の <code>&lt;dt&gt;</code> 要素が続くと、複数の用語がすぐ後に続く {{HTMLElement("dd")}} 要素で定義されていることを表します。</p>

<p>後に続く {{HTMLElement("dd")}} (<strong>詳細説明</strong>) 要素は、 <code>&lt;dt&gt;</code> を用いて指定した用語について、定義やその他の関連する文字列を表します。</p>

<div>{{EmbedInteractiveExample("pages/tabbed/dt.html", "tabbed-standard")}}</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリ</a></th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td><a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>。ただし {{HTMLElement("header")}}、{{HTMLElement("footer")}}、区分コンテンツ、見出しコンテンツを除く。</td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>開始タグは必須。他の <code>&lt;dt&gt;</code> または {{HTMLElement("dd")}} 要素が後続する場合、もしくは親要素である <code>&lt;dl&gt;</code> 要素内に後続する要素がない場合に、終了タグが省略可能となる。</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td>{{HTMLElement("dl")}} または ({{Glossary("WHATWG")}} HTML および {{Glossary("W3C")}} HTML 5.2 以降においては) {{HTMLElement("dl")}} の子である {{HTMLElement("div")}}。<br>
	 この要素は {{HTMLElement("dd")}} または他の {{HTMLElement("dt")}} の前で使用することができる。</td>
  </tr>
  <tr>
   <th scope="row">暗黙の ARIA ロール</th>
   <td>{{ARIARole("term")}}</td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td><code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Listitem_role">listitem</a></code></td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{domxref("HTMLElement")}}。 Gecko 1.9.2 (Firefox 4) 以前では、 Firefox はこの要素に対し {{domxref("HTMLSpanElement")}} インターフェイスを実装していました。</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes">属性</h2>

<p>この要素は<a href="/ja/docs/Web/HTML/Global_attributes" title="HTML/Global attributes">グローバル属性</a>のみを持ちます。</p>

<h2 id="Examples">例</h2>

<p>使用例は、 <a href="/ja/docs/Web/HTML/Element/dl#examples" title="HTML/Element/dl#Examples"><code>&lt;dl&gt;</code> 要素の例</a>を参照して下さい。</p>

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
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-dt-element', '&lt;dt&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.2', 'grouping-content.html#the-dt-element', '&lt;dt&gt;')}}</td>
   <td>{{Spec2('HTML5.2')}}</td>
   <td><code>&lt;dt&gt;</code> および <code>&lt;dd&gt;</code> 要素が {{HTMLElement("div")}} 要素の中に入れられるようになりました。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/lists.html#h-10.3', '&lt;dt&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("dl")}}</li>
 <li>{{HTMLElement("dd")}}</li>
</ul>
