---
title: 軸
slug: Web/XPath/Axes
tags:
  - Transforming_XML_with_XSLT
  - XPath
  - XPath_Reference
  - XSLT
  - XSLT_Reference
translation_of: Web/XPath/Axes
---
<p>{{ XsltRef() }} <a href="/ja/docs/Web/XPath">XPath</a> 仕様では 13 種類の軸 (Axis) が定められています。軸はコンテキストノードとの関連性を表し、ツリー上でのノードのコンテキストノードからの相対的な位置を示すのに用いられます。</p>

<p>XPath 式の使用に関するより詳しい情報は、 <a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT">XSLT による XML の変換</a>の記事の最後の<a href="/ja/docs/Web/XSLT/Transforming_XML_with_XSLT#for_further_reading">さらなる読み物</a>の節を参照してください。また、<a href="https://www.w3.org/TR/xpath-30/#axes">XPath 仕様書の 'axes' の節</a>も参照してください。</p>

<dl>
 <dt><a href="/ja/docs/Web/XPath/Axes/ancestor">ancestor</a></dt>
 <dd>コンテキストノードの親ノードからルートノードまでのすべての祖先を示します。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes/ancestor-or-self">ancestor-or-self</a></dt>
 <dd>コンテキストノードと、そのすべてのルートノードを含む祖先を示します。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes/attribute">attribute</a></dt>
 <dd>コンテキストノードの属性を示します。属性を持つのは要素のみです。この軸はアットマーク (<code>@</code>) によって省略できます。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes/child">child</a></dt>
 <dd>コンテキストノードの子を示します。 XPath 式で軸が指定されていなければ、デフォルトでこの軸が指定されていると認識されます。子を持つのはルートノードか要素ノードのみなので、他のノードでこの軸を使用しても何も選択されません。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes/descendant">descendant</a></dt>
 <dd>コンテキストノードのすべての子と、そのすべての子と、そのまたすべての･･･というように示します。属性ノードと名前空間ノードは<strong>含まれません</strong>。 <code>attribute</code> ノードの <code>parent</code> は要素ノードですが、<code>attribute</code> ノードはその要素ノードの子ではないからです。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes/descendant-or-self">descendant-or-self</a></dt>
 <dd>コンテキストノードと、そのすべての子孫を示します。属性ノードと名前空間ノードは<strong>含まれません</strong>。 <code>attribute</code> ノードの <code>parent</code> は要素ノードですが、<code>attribute</code> ノードはその要素ノードの子ではないからです。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes/following">following</a></dt>
 <dd>コンテキストノードの後に現れる、<code>descendant</code>、<code>attribute</code>、<code>namespace</code> ノードを除くすべてのノードを示します。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes/following-sibling">following-sibling</a></dt>
 <dd>コンテキストノードと同じ親を持ち、ソース文書内でコンテキストノードの後に現れるすべてのノードを示します。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes/namespace">namespace</a><em>(サポート対象外)</em></dt>
 <dd>コンテキストノードのスコープ内にあるすべてのノードを示します。この場合、コンテキストノードは要素ノードでなければなりません。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes/parent">parent</a></dt>
 <dd>コンテキストノードの親である単一のノードを示します。この軸は 2 つのピリオド (<code>..</code>) によって省略できます。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes/preceding">preceding</a></dt>
 <dd>文書内でコンテキストノードの前に現れる、 <code>ancestor</code>、 <code>attribute</code> 、 <code>namespace</code> ノードを除くすべてのノードを示します。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes/preceding-sibling">preceding-sibling</a></dt>
 <dd>コンテキストノードと同じ親を持ち、ソース文書内でコンテキストノードの前に現れるすべてのノードを示します。</dd>
 <dt><a href="/ja/docs/Web/XPath/Axes/self">self</a></dt>
 <dd>コンテキストノード自身を示します。 この軸はピリオド (<code>.</code>) によって省略できます。</dd>
</dl>

<p>{{QuickLinksWithSubpages("/ja/docs/Web/XPath")}}</p>
