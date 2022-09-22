---
title: 軸
slug: Web/XPath/Axes
---

{{ XsltRef() }} [XPath](/ja/docs/Web/XPath) 仕様では 13 種類の軸 (Axis) が定められています。軸はコンテキストノードとの関連性を表し、ツリー上でのノードのコンテキストノードからの相対的な位置を示すのに用いられます。

XPath 式の使用に関するより詳しい情報は、 [XSLT による XML の変換](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT)の記事の最後の[さらなる読み物](/ja/docs/Web/XSLT/Transforming_XML_with_XSLT#for_further_reading)の節を参照してください。また、[XPath 仕様書の 'axes' の節](https://www.w3.org/TR/xpath-30/#axes)も参照してください。

- [ancestor](/ja/docs/Web/XPath/Axes/ancestor)
  - : コンテキストノードの親ノードからルートノードまでのすべての祖先を示します。
- [ancestor-or-self](/ja/docs/Web/XPath/Axes/ancestor-or-self)
  - : コンテキストノードと、そのすべてのルートノードを含む祖先を示します。
- [attribute](/ja/docs/Web/XPath/Axes/attribute)
  - : コンテキストノードの属性を示します。属性を持つのは要素のみです。この軸はアットマーク (`@`) によって省略できます。
- [child](/ja/docs/Web/XPath/Axes/child)
  - : コンテキストノードの子を示します。 XPath 式で軸が指定されていなければ、デフォルトでこの軸が指定されていると認識されます。子を持つのはルートノードか要素ノードのみなので、他のノードでこの軸を使用しても何も選択されません。
- [descendant](/ja/docs/Web/XPath/Axes/descendant)
  - : コンテキストノードのすべての子と、そのすべての子と、そのまたすべての･･･というように示します。属性ノードと名前空間ノードは**含まれません**。 `attribute` ノードの `parent` は要素ノードですが、`attribute` ノードはその要素ノードの子ではないからです。
- [descendant-or-self](/ja/docs/Web/XPath/Axes/descendant-or-self)
  - : コンテキストノードと、そのすべての子孫を示します。属性ノードと名前空間ノードは**含まれません**。 `attribute` ノードの `parent` は要素ノードですが、`attribute` ノードはその要素ノードの子ではないからです。
- [following](/ja/docs/Web/XPath/Axes/following)
  - : コンテキストノードの後に現れる、`descendant`、`attribute`、`namespace` ノードを除くすべてのノードを示します。
- [following-sibling](/ja/docs/Web/XPath/Axes/following-sibling)
  - : コンテキストノードと同じ親を持ち、ソース文書内でコンテキストノードの後に現れるすべてのノードを示します。
- [namespace](/ja/docs/Web/XPath/Axes/namespace)_(サポート対象外)_
  - : コンテキストノードのスコープ内にあるすべてのノードを示します。この場合、コンテキストノードは要素ノードでなければなりません。
- [parent](/ja/docs/Web/XPath/Axes/parent)
  - : コンテキストノードの親である単一のノードを示します。この軸は 2 つのピリオド (`..`) によって省略できます。
- [preceding](/ja/docs/Web/XPath/Axes/preceding)
  - : 文書内でコンテキストノードの前に現れる、 `ancestor`、 `attribute` 、 `namespace` ノードを除くすべてのノードを示します。
- [preceding-sibling](/ja/docs/Web/XPath/Axes/preceding-sibling)
  - : コンテキストノードと同じ親を持ち、ソース文書内でコンテキストノードの前に現れるすべてのノードを示します。
- [self](/ja/docs/Web/XPath/Axes/self)
  - : コンテキストノード自身を示します。 この軸はピリオド (`.`) によって省略できます。

{{QuickLinksWithSubpages("/ja/docs/Web/XPath")}}
