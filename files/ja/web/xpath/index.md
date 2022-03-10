---
title: XPath
slug: Web/XPath
tags:
  - CSS Selectors
  - DOM
  - JXON
  - Landing
  - Path
  - XML
  - XPath
  - XSLT
translation_of: Web/XPath
---
<div>{{XSLTRef}}</div>

<p>XPath は XML Path Language の略称です。非 XML 構文を使って、柔軟な方法で <a href="/ja/docs/Web/XML/XML_Introduction">XML</a> 文書のいろいろな部分をアドレッシングする (指し示す) 事ができます。さらに文書中で指し示されたノードがパターンにマッチするかどうかの判定を行うこともできます。</p>

<p>XPath は主に <a href="/ja/docs/Web/XSLT">XSLT</a> で使われていますが、 <a href="/ja/docs/Web/HTML">HTML</a> や <a href="/ja/docs/Web/SVG">SVG</a> のような XML 風の言語の文書の <a href="/ja/docs/Web/API/Document_Object_Model">DOM</a> においても {{DOMxRef("XPathExpression")}} を用いることで、 {{DOMxRef("Document.getElementById()")}} や {{DOMxRef("ParentNode.querySelectorAll()")}} メソッドや {{DOMxRef("Node.childNodes")}} プロパティ、その他の DOM コア機能に依存することなく、はるかにパワフルな方法でたどることができます。</p>

<p>XPath は XML 文書の階層構造を辿るために (URL のような) パス表記を使います。また、URI や XML 属性値の中で使えるように非 XML 構文を採用しています。</p>

<div class="notecard note">
  <h4>Note</h4>
  <p><strong>Note:</strong> XPath のサポートは大きく異なります。 それは Firefox で合理的にうまくサポートされています (サポートをさらに改善する計画はありません) 。しかし、他のブラウザではそれを実装するのはそれほどではありません。ポリフィルが必要な場合は、<a href="http://nchc.dl.sourceforge.net/project/js-xpath/js-xpath/1.0.0/xpath.js">js-xpath</a>または <a href="https://github.com/google/wicked-good-xpath">wicked-good-xpath</a> を検討してください。</p>
</div>

<h2 id="Documentation">ドキュメント</h2>

<dl>
 <dt><a href="/ja/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript">JavaScript からの XPath 利用入門</a></dt>
 <dd>XSLT 以外で XPath を使用する方法。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes">XPath:Axes</a></dt>
 <dd>XPath 仕様で定められている軸 (Axis)の一覧とその定義。軸はノード間の関係性を記述するのに使われます。</dd>
 <dt><a href="/ja/docs/Web/XPath/Functions">XPath:Functions</a></dt>
 <dd>コア XPath 関数及び XSLT 固有の追加 XPath 関数の一覧とその定義。</dd>
 <dt><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT" title="Transforming_XML_with_XSLT">XSLT による XML の変換</a></dt>
 <dd>XSLT では変換したい XML 文書内のコードの一部を指し示すのに XPath を使います。</dd>
 <dt><a href="/ja/docs/Web/XPath/Snippets">XPath スニペット</a></dt>
 <dd>これらは <a class="external external-icon" href="http://www.w3.org/TR/DOM-Level-3-XPath/">DOM Level 3 XPath</a> APIに基づいて、独自のコードで使用できる JavaScript ユーティリティ関数です。</dd>
 <dt><a href="http://www.xml.com/pub/a/2000/08/holman/">XSLT って何?</a></dt>
 <dd>XSLT と XPath の予備知識が無い人を対象に、その背景や構造、概念、初歩的な専門用語を紹介する広範囲な入門ガイド。</dd>
</dl>

<h2 id="Tools">ツール</h2>

<dl>
 <dt><a class="link-https" href="https://addons.mozilla.org/ja/firefox/addon/chropath-for-firefox/">ChroPath</a></dt>
 <dd>FireBug に緊密に統合され、エディターとインスペクターを提供する XPath パネル (FireFox Add-On).</dd>
 <dt><a href="http://qutoric.com/xmlquire/">XMLQuire (formerly known as SketchPath)</a></dt>
 <dd>グラフィカル XPath ビルダー/デバッガー (.NET) です。</dd>
 <dt><a href="https://extendsclass.com/xpath-tester.html">XPath tester</a></dt>
 <dd>オンラインの XPath ビルダー／デバッガーです。</dd>
</dl>

<h2 id="Related_Topics" name="Related_Topics">関連事項</h2>

<ul>
 <li><a href="/ja/docs/Web/XSLT">XSLT</a>, <a href="/ja/docs/Web/XML">XML</a>, <a href="/ja/docs/Web/API/Document_Object_Model">DOM</a></li>
 <li><a href="/ja/docs/Web/XPath/Comparison_with_CSS_selectors">CSS セレクターと XPath の比較</a></li>
</ul>

<section id="Quick_links">
<ol>
 <li><strong><a href="/ja/docs/Web/XSLT">XSLT</a></strong></li>
 <li><strong><a href="/ja/docs/Web/EXSLT">EXSLT</a></strong></li>
 <li><strong><a href="/ja/docs/Web/XPath">XPath</a></strong></li>
 <li class="toggle">
  <details open><summary>ガイド</summary>
  <ol>
   <li><a href="/ja/docs/Web/XPath/Comparison_with_CSS_selectors">CSS セレクターと XPath の比較</a></li>
   <li><a href="/ja/docs/Web/XPath/Snippets">XPath のスニペット</a></li>
  </ol>
  </details>
 </li>
 <li class="toggle">
  <details open><summary><a href="/ja/docs/Web/XPath/Axes">XPath 軸</a></summary>{{ListSubpagesForSidebar("/ja/docs/Web/XPath/Axes")}}</details>
 </li>
 <li class="toggle">
  <details open><summary><a href="/ja/docs/Web/XPath/Functions">XPath 関数</a></summary>{{ListSubpagesForSidebar("/ja/docs/Web/XPath/Functions")}}</details>
 </li>
</ol>
</section>
