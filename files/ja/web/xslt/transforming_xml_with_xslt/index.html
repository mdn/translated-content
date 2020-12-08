---
title: XSLT による XML の変換
slug: Web/XSLT/Transforming_XML_with_XSLT
tags:
  - NeedsMigration
  - Transforming_XML_with_XSLT
  - XML
  - XSLT
translation_of: Web/XSLT/Transforming_XML_with_XSLT
---
<div>{{XSLTRef}}</div>

<h2 id="An_Overview" name="An_Overview"><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview">概要</a></h2>

<p>コンテンツとプレゼンテーションの分離は、<a href="/ja/docs/XML">XML</a> の重要な設計の特徴です。 XML 文書の構造は、コンテンツ自体の個々の側面の間の重要な関係を反映し、明確にするように設計されています。このデータが最終的にどのように提示されるべきかに関する指示を提供する必要はありません。このインテリジェントな構造化は、ますます多くのデータ転送が自動化され、ネットワークでリンクされた非常に異種のマシン間で行われるため、特に重要です。</p>

<p>しかし、最終的には XML 文書に格納されているコンテンツの大部分を人間の読者に提示する必要があります。ブラウザは使い慣れた非常に柔軟なインタフェースを提供するため、このようなプレゼンテーションバージョンの XML コンテンツを配信するための理想的なメカニズムです。さまざまな XML テクノロジを利用してゼロから構築されているため、 Firefox は、元の XML 文書とそれを HTML 表示用にスタイル設定してレイアウトするために使用される特殊なスタイルシートの両方を処理するために必要なすべてのメカニズムを組み込んでおり、クライアントサイド処理によるサーバの負荷を軽減します。</p>

<p>現時点で、 Gecko (Firefox のレイアウトエンジン) は二種類の XML 用のスタイルシートに対応しています。基本的な表示方法の制御 — フォント、色、位置、など — については、 Gecko は <a href="/ja/docs/CSS" title="CSS">CSS</a> を使用します。 CSS1 と CSS2 はよく対応されており、 CSS3 標準への対応は開発中です。 CSS についての更なる情報は、 <a href="http://www.meyerweb.com/eric/css/">Eric Meyer's CSS pages</a> を参照してください。</p>

<p>ここで注目するのは、 Gecko が対応する二番目の種類のスタイルシート、 XSLT スタイルシートです。 XSLT は eXtensible Stylesheet Language/Transform のことで、名前の通りです。 XSLT ではスタイルシートで最初の XML 文書を二つの意味のある方法、必要に応じてコンテンツを大規模に並べ替えたり、コンテンツを別の形式に変形したりすることで変換します。 (Firefox の場合は、 HTML に変換して表示することができます)。</p>

<h2 id="XSLTXPath_リファレンス">XSLT/XPath リファレンス</h2>

<h3 id="Elements" name="Elements"><a href="/ja/docs/Web/XSLT/Elements">要素</a></h3>

<ul>
 <li><a href="/ja/docs/Web/XSLT/Elements/apply-imports">xsl:apply-imports</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/apply-templates">xsl:apply-templates</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/attribute">xsl:attribute</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/attribute-set">xsl:attribute-set</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/call-template">xsl:call-template</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/choose">xsl:choose</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/comment">xsl:comment</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/copy">xsl:copy</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/copy-of">xsl:copy-of</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/decimal-format">xsl:decimal-format</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/element">xsl:element</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/fallback">xsl:fallback</a> <em>(未対応)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/for-each">xsl:for-each</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/if">xsl:if</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/import">xsl:import</a> <em>(ほぼ対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/include">xsl:include</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/key">xsl:key</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/message">xsl:message</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/namespace-alias">xsl:namespace-alias</a> <em>(未対応)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/number">xsl:number</a> <em>(一部対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/otherwise">xsl:otherwise</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/output">xsl:output</a> <em>(一部対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/param">xsl:param</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/preserve-space">xsl:preserve-space</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/processing-instruction">xsl:processing-instruction</a></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/sort">xsl:sort</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/strip-space">xsl:strip-space</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/stylesheet">xsl:stylesheet</a> <em>(一部対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/template">xsl:template</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/text">xsl:text</a> <em>(一部対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/transform">xsl:transform</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/value-of">xsl:value-of</a> <em>(一部対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/variable">xsl:variable</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/when">xsl:when</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/Web/XSLT/Elements/with-param">xsl:with-param</a> <em>(対応済み)</em></li>
</ul>

<h3 id="Axes" name="Axes"><a href="/ja/docs/XPath/Axes">軸</a></h3>

<ul>
 <li><a href="/ja/docs/XPath/Axes/ancestor" title="XPath/Axes/ancestor">ancestor</a></li>
 <li><a href="/ja/docs/XPath/Axes/ancestor-or-self" title="XPath/Axes/ancestor-or-self">ancestor-or-self</a></li>
 <li><a href="/ja/docs/XPath/Axes/attribute" title="XPath/Axes/attribute">attribute</a></li>
 <li><a href="/ja/docs/XPath/Axes/child" title="XPath/Axes/child">child</a></li>
 <li><a href="/ja/docs/XPath/Axes/descendant" title="XPath/Axes/descendant">descendant</a></li>
 <li><a href="/ja/docs/XPath/Axes/descendant-or-self" title="XPath/Axes/descendant-or-self">descendant-or-self</a></li>
 <li><a href="/ja/docs/XPath/Axes/following" title="XPath/Axes/following">following</a></li>
 <li><a href="/ja/docs/XPath/Axes/following-sibling" title="XPath/Axes/following-sibling">following-sibling</a></li>
 <li><a href="/ja/docs/XPath/Axes/namespace" title="XPath/Axes/namespace">namespace</a> <em>(未対応)</em></li>
 <li><a href="/ja/docs/XPath/Axes/parent" title="XPath/Axes/parent">parent</a></li>
 <li><a href="/ja/docs/XPath/Axes/preceding" title="XPath/Axes/preceding">preceding</a></li>
 <li><a href="/ja/docs/XPath/Axes/preceding-sibling" title="XPath/Axes/preceding-sibling">preceding-sibling</a></li>
 <li><a href="/ja/docs/XPath/Axes/self" title="XPath/Axes/self">self</a></li>
</ul>

<h3 id="Functions" name="Functions"><a href="/ja/docs/XPath/Functions">関数</a></h3>

<ul>
 <li><a href="/ja/docs/XPath/Functions/boolean" title="XPath/Functions/boolean">boolean()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/ceiling" title="XPath/Functions/ceiling">ceiling()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/concat" title="XPath/Functions/concat">concat()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/contains" title="XPath/Functions/contains">contains()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/count" title="XPath/Functions/count">count()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/current" title="XPath/Functions/current">current()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/document" title="XPath/Functions/document">document()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/element-available" title="XPath/Functions/element-available">element-available()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/false" title="XPath/Functions/false">false()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/floor" title="XPath/Functions/floor">floor()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/format-number" title="XPath/Functions/format-number">format-number()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/function-available" title="XPath/Functions/function-available">function-available()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/generate-id" title="XPath/Functions/generate-id">generate-id()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/id" title="XPath/Functions/id">id()</a> <em>(partially 対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/key" title="XPath/Functions/key">key()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/lang" title="XPath/Functions/lang">lang()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/last" title="XPath/Functions/last">last()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/local-name" title="XPath/Functions/local-name">local-name()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/name" title="XPath/Functions/name">name()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/namespace-uri" title="XPath/Functions/namespace-uri">namespace-uri()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/normalize-space" title="XPath/Functions/normalize-space">normalize-space()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/not" title="XPath/Functions/not">not()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/number" title="XPath/Functions/number">number()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/position" title="XPath/Functions/position">position()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/round" title="XPath/Functions/round">round()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/starts-with" title="XPath/Functions/starts-with">starts-with()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/string" title="XPath/Functions/string">string()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/string-length" title="XPath/Functions/string-length">string-length()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/substring" title="XPath/Functions/substring">substring()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/substring-after" title="XPath/Functions/substring-after">substring-after()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/substring-before" title="XPath/Functions/substring-before">substring-before()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/sum" title="XPath/Functions/sum">sum()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/system-property" title="XPath/Functions/system-property">system-property()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/translate" title="XPath/Functions/translate">translate()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/true" title="XPath/Functions/true">true()</a> <em>(対応済み)</em></li>
 <li><a href="/ja/docs/XPath/Functions/unparsed-entity-url" title="XPath/Functions/unparsed-entity-url">unparsed-entity-url()</a> <em>(not 対応済み)</em></li>
</ul>

<h2 id="For_Further_Reading" name="For_Further_Reading"><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading">さらなる読み物</a></h2>

<ul>
 <li><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#Books" title="Transforming_XML_with_XSLT/For_Further_Reading#Books">書籍</a></li>
 <li><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#Online" title="Transforming_XML_with_XSLT/For_Further_Reading#Online">オンライン</a>
  <ul>
   <li><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#The_World_Wide_Web_Consortium" title="Transforming_XML_with_XSLT/For_Further_Reading#The_World_Wide_Web_Consortium">The World Wide Web Consortium</a></li>
   <li><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#Portals" title="Transforming_XML_with_XSLT/For_Further_Reading#Portals">Portals</a></li>
   <li><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#Articles" title="Transforming_XML_with_XSLT/For_Further_Reading#Articles">Articles</a></li>
   <li><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#Tutorials.2FExamples" title="Transforming_XML_with_XSLT/For_Further_Reading#Tutorials.2FExamples">Tutorials/Examples</a></li>
   <li><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#Mailing_Lists.2FNewsgroups" title="Transforming_XML_with_XSLT/For_Further_Reading#Mailing_Lists.2FNewsgroups">Mailing Lists/Newsgroups</a></li>
  </ul>
 </li>
</ul>

<h2 id="Resources" name="Resources"><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/Resources">リソース</a></h2>

<h2 id="Index" name="Index"><a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT/Index" title="Transforming_XML_with_XSLT/Index">索引</a></h2>

<div class="originaldocinfo">
<h2 id="Original_Document_Information" name="Original_Document_Information">原典情報</h2>

<ul>
 <li>Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.</li>
 <li>注: この転載記事はもともと DevEdge サイトの一部でした。</li>
</ul>
</div>
