---
title: HTMLAreaElement.relList
slug: Web/API/HTMLAreaElement/relList
tags:
  - API
  - HTML DOM
  - HTMLAreaElement
  - Property
  - Reference
translation_of: Web/API/HTMLAreaElement/relList
---
<div>{{APIRef("HTML DOM")}}</div>

<p><code><strong>HTMLAreaElement.relList</strong></code> 読み取り専用プロパティは、{{htmlattrxref("rel", "area")}} 属性を反映しています。 これは、{{HTMLElement("area")}} 要素で表されるリソースと現在のドキュメント間の関係を示す<a href="/ja/docs/Web/HTML/Link_types">リンク種別</a>のセットを含む生きた {{domxref("DOMTokenList")}} です。</p>

<p>プロパティ自体は読み取り専用です。 つまり、{{domxref("DOMTokenList")}} を別のものに置き換えることはできませんが、返されたリストの内容は変更できます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>relstr</em> = <em>areaElt</em>.relList;
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var areas = document.getElementsByTagName("area");
var length = areas.length;

for (var i = 0; i &lt; length; i++) {
  var list = areas[i].relList;
  var listLength = list.length;
  console.log("新しい領域が見つかりました。");
  for (var j = 0; j &lt; listLength; j++) {
    console.log(list[j]);
  }
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
   <td>{{SpecName('HTML WHATWG', 'embedded-content.html#dom-area-rellist', 'relList')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.HTMLAreaElement.relList")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("a")}} および {{HTMLElement("link")}} の同等のプロパティの {{domxref("HTMLAnchorElement.relList")}} および {{domxref("HTMLLinkElement.relList")}}。</li>
 <li>まったく同じリストを {{domxref("DOMString")}} のスペース区切りトークンとして: {{domxref("HTMLAreaElement.rel")}}</li>
</ul>
