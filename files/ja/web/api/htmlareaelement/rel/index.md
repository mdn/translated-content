---
title: HTMLAreaElement.rel
slug: Web/API/HTMLAreaElement/rel
tags:
  - API
  - HTML DOM
  - HTMLAreaElement
  - Property
  - Reference
translation_of: Web/API/HTMLAreaElement/rel
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><code><strong>HTMLAreaElement.rel</strong></code> プロパティは {{htmlattrxref("rel", "area")}} 属性を反映しています。 これは、スペースで区切られた<a href="/ja/docs/Web/HTML/Link_types">リンク種別</a>のリストを含む {{domxref("DOMString")}} であり、{{HTMLElement("area")}} 要素で表されるリソースと現在のドキュメントの関係を示します。</span></p>

<h2 id="Example" name="Example">構文</h2>

<pre class="syntaxbox">var <em>relstr</em> = <em>areaElt</em>.rel;
<em>areaElt</em>.rel = <em>relstr</em>;
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var areas = document.getElementsByTagName("area");
var length = areas.length;
for (var i = 0; i &lt; length; i++) {
  alert("Rel: " + areas[i].rel);
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
   <td>{{SpecName('HTML WHATWG', '#dom-area-rel', 'rel')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.HTMLAreaElement.rel")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("a")}} および {{HTMLElement("link")}} の同等のプロパティの {{domxref("HTMLAnchorElement.rel")}} および {{domxref("HTMLLinkElement.rel")}}。</li>
 <li>まったく同じリストをトークンとして: {{domxref("HTMLAreaElement.relList")}}</li>
</ul>
