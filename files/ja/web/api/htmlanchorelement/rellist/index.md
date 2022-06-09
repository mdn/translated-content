---
title: HTMLAnchorElement.relList
slug: Web/API/HTMLAnchorElement/relList
tags:
  - API
  - HTML DOM
  - HTMLAnchorElement
  - Property
  - Reference
  - relList
translation_of: Web/API/HTMLAnchorElement/relList
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><code><strong>HTMLAnchorElement.relList</strong></code> 読み取り専用プロパティは、{{htmlattrxref("rel", "a")}} 属性を反映しています。 これは、{{HTMLElement("a")}} 要素で表されるリソースと現在のドキュメントの間の関係を示す<a href="/ja/docs/Web/HTML/Link_types">リンク種別</a>のセットを含む生きた {{domxref("DOMTokenList")}} です。</span></p>

<p>このプロパティ自体は読み取り専用です。 つまり、{{domxref("DOMTokenList")}} を別のものに置き換えることはできませんが、その内容は変更できます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>relstr</em> = <em>anchorElt</em>.relList;
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">var anchors = document.getElementsByTagName("a");
var length = anchors.length;
for (var i = 0; i &lt; length; i++) {
  var list = anchors[i].relList;
  var listLength = list.length;
  console.log("relList に", listLength, "個のリンク種別がある新しいアンカーノードが見つかりました。");
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
   <td>{{SpecName('HTML WHATWG', 'embedded-content.html#dom-a-rellist', 'relList')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.HTMLAnchorElement.relList")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTMLElement("area")}} および {{HTMLElement("link")}} の同等のプロパティの {{domxref("HTMLAreaElement.relList")}} および {{domxref("HTMLLinkElement.relList")}}。</li>
 <li>まったく同じリストを {{domxref("DOMString")}} のスペース区切りトークンとして: {{domxref("HTMLAnchorElement.rel")}}</li>
</ul>
