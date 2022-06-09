---
title: HTMLAnchorElement.rel
slug: Web/API/HTMLAnchorElement/rel
tags:
  - API
  - HTML DOM
  - HTMLAnchorElement
  - Property
  - Reference
translation_of: Web/API/HTMLAnchorElement/rel
---
<div>{{APIRef("HTML DOM")}}</div>

<p><code><strong>HTMLAnchorElement.rel</strong></code> プロパティは {{htmlattrxref("rel", "a")}} 属性を反映しています。 これは、スペースで区切られた<a href="/ja/docs/Web/HTML/Link_types">リンク種別</a>のリストを含む {{domxref("DOMString")}} であり、{{HTMLElement("a")}} 要素で表されるリソースと現在のドキュメントの関係を示します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>relstr</em> = <em>anchorElt</em>.rel;
<em>anchorElt</em>.rel = <em>relstr</em>;
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var anchors = document.getElementsByTagName("a");
var length = anchors.length;
for (var i = 0; i &lt; length; i++) {
  alert("Rel: " + anchors[i].rel);
}
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'semantics.html#dom-a-rel', 'rel')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>{{SpecName("DOM2 HTML")}} からの変更はありません。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-3815891', 'rel')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td>{{SpecName("DOM1")}} からの変更はありません。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-3815891', 'rel')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.HTMLAnchorElement.rel")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("area")}} および {{HTMLElement("link")}} の同等のプロパティの {{domxref("HTMLAreaElement.rel")}} および {{domxref("HTMLLinkElement.rel")}}。</li>
 <li>まったく同じリストをトークンとして: {{domxref("HTMLAnchorElement.relList")}}</li>
</ul>
