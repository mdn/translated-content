---
title: HTMLAnchorElement.download
slug: Web/API/HTMLAnchorElement/download
tags:
  - API
  - HTML DOM
  - HTMLAnchorElement
  - Property
  - Reference
  - download
translation_of: Web/API/HTMLAnchorElement/download
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary"><code><strong>HTMLAnchorElement.download</strong></code> プロパティは、リンク先リソースをブラウザーに表示するのではなくダウンロードすることを意図していることを示す {{domxref("DOMString")}} です。 値がある場合は、ローカルファイルシステムのリソースのラベル付けに使用するデフォルトのファイル名を指定します。 基になる OS で名前が有効なファイル名でない場合、ブラウザーはそれを調整します。</span></p>

<div class="blockIndicator note">
<p><strong>注</strong>: この値はダウンロードに使われないかもしれません。 この値により、ダウンロードが行われるかどうかを判別することはできません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>dnload</em> = <em>anchorElt</em>.download;
<em>anchorElt</em>.download = <em>dnload</em>;
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
   <td>{{SpecName('HTML WHATWG', 'links.html#attr-hyperlink-download', 'download')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.HTMLAnchorElement.download")}}</p>
</div>
