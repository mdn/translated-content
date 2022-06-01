---
title: Document.xmlVersion
slug: Web/API/Document/xmlVersion
tags:
  - API
  - DOM
  - DOM リファレンス
  - Document
  - Obsolete
  - Reference
  - プロパティ
translation_of: Web/API/Document/xmlVersion
---
<div>{{APIRef("DOM")}}{{obsolete_header("10.0")}}</div>

<p>XML 宣言 (例えば <code>&lt;?xml version="1.0"?&gt;</code>) で指定されたバージョン番号を返し、宣言がなければ "<code>1.0</code>" を返します。</p>

<p>この属性は常に 1.0 を返していたので、本当は有用ではなく、 DOM Level 4 で削除されました。同様に、 Firefox 10 はもう実装していません。以前の主な使用法は、文書が HTML ではなく XML として表示するかどうかを検出するためでした。これは、小文字で要素を作成し、すべて大文字に変換されるかどうかを確認することによって検出することができます (文書が XML ではない HTML モードの場合)。</p>

<pre class="brush: js">if (document.createElement("foo").tagName == "FOO") {
  /* 文書は XML ではない */
}
</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#Document3-version" rel="freelink">http://www.w3.org/TR/DOM-Level-3-Cor...ument3-version</a></li>
 <li>{{spec("http://www.w3.org/TR/domcore/","DOM Core Level 4","WD")}} で削除されています。</li>
</ul>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>{{Compat("api.Document.xmlVersion")}}</div>
