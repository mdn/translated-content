---
title: 'XSLT: 拡張可能なスタイルシートの言語変換'
slug: Web/XSLT
tags:
  - Landing
  - Web
  - XSLT
translation_of: Web/XSLT
---
<div>{{XSLTRef}}
<section id="Quick_links">
<ol>
 <li><strong><a href="/ja/docs/Web/XSLT">XSLT</a></strong></li>
 <li><strong><a href="/ja/docs/Web/EXSLT">EXSLT</a></strong></li>
 <li><strong><a href="/ja/docs/Web/XPath">XPath</a></strong></li>
 <li class="toggle">
  <details open><summary>ガイド</summary>
  <ol>
   <li><a href="/ja/docs/Web/XSLT/Common_errors">よくある XSLT のエラー</a></li>
   <li><a href="/ja/docs/Web/XSLT/PI_Parameters">PI 引数</a></li>
   <li><a href="/ja/docs/Web/XSLT/XSLT_JS_interface_in_Gecko">Gecko の XSLT/JavaScript インターフェイス</a></li>
   <li><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT">XML を XSLT で変換</a></li>
   <li><a href="/ja/docs/Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations">Mozilla JavaScript インターフェイスからの XSLT の使用</a></li>
  </ol>
  </details>
 </li>
 <li class="toggle">
  <details open><summary><a href="/ja/docs/XSLT/Element">XSLT Elements</a></summary>{{ListSubpagesForSidebar("/ja/docs/Web/XSLT/Element", "", "", "&lt;xsl:", "&gt;")}}</details>
 </li>
</ol>
</section>
{{QuickLinksWithSubpages("/ja/docs/Web/XSLT")}}</div>

<p class="summary"><strong>Extensible Stylesheet Language Transformations (XSLT)</strong> は <a href="/ja/docs/Web/XML/XML_Introduction">XML</a> ベースの言語で、XML 文書の変換をするために特別な処理ソフトウェア (プロセッサー) とともに利用されます。</p>

<p>この処理は「変換」と呼ばていれますが、元の文書は変更されません。この「変換」ではまず、新しい XML 文書が元の文書の内容をもとに作成され、プロセッサーによってそのまま、もしくは標準 XML や <a href="/ja/docs/Web/HTML">HTML</a> やテキストなどの形式でシリアライズ (出力) されます。</p>

<p>XSLT は異なる XML スキーマ間でのデータの変換や、XML データからウェブページや PDF 文書への変換に最も使われています。</p>

<div class="topicpage-table">
<div class="section">
<h2 id="Documentation">ドキュメント</h2>

<dl>
 <dt><a href="/ja/docs/Web/XSLT/Element">XSLT 要素リファレンス</a></dt>
 <dd>リファレンスです。</dd>
 <dt><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT">XSLT を使った XML 変換</a></dt>
 <dd>XSLT を使うと、スタイルシートの制作者は、元の XML 文書を二つの重要な手法で変換できます。すなわち、コンテンツの操作・選別（もしお望みならば大規模な並べ替えも含まれます）および、異なる形式への変換です。</dd>
 <dt><a href="/ja/docs/Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations">Mozilla JavaScript インターフェイスから XSLT を使う</a></dt>
 <dd>Mozilla 1.2 以降の JavaScript から XSLT 処理エンジンへのインターフェイスを説明します。</dd>
 <dt><a href="/ja/docs/Web/XSLT/PI_Parameters">処理命令を使った引数の指定</a></dt>
 <dd>Firefox では <code>&lt;?xml-stylesheet?&gt;</code> 処理指令を使ってスタイルシートの引数を指定することができます。各引数は <code>&lt;?xslt-param?&gt;</code> 処理指令によって指定でき、この文書ではこれらを説明しています。</dd>
 <dt><a href="https://www.w3schools.com/xml/xsl_intro.asp">XSLT チュートリアル</a></dt>
 <dd>この <a href="https://www.w3schools.com">W3Schools</a> のチュートリアルでは、XML 文書を他の XHTML のような形態に変換するために、どのように XSLT を用いればいいのかを示します。</dd>
 <dt><a href="https://www.xml.com/pub/a/2000/08/holman/">XSLT とは?</a></dt>
 <dd>この XSLT と XPath についての強力な導入では、技術についての予備知識が無い読者を想定して、背景、前後関係、構造、コンセプト、用語紹介を含めたガイドを提供します。</dd>
 <dt><a href="/ja/docs/Web/XSLT/Common_errors">一般的な XSLT エラー</a></dt>
 <dd>この記事は Firefox で XSLT を使う際の問題点を列挙しています。</dd>
</dl>

</div>

<div class="section">
<h2 id="Related_Topics">関連トピック</h2>

<ul>
 <li><a href="/ja/docs/Web/XML/XML_Introduction">XML</a>, <a href="/ja/docs/Web/XPath">XPath</a></li>
</ul>
</div>
</div>
