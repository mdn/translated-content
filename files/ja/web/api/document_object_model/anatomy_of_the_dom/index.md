---
title: DOM の構造
slug: Web/API/Document_Object_Model/Anatomy_of_the_DOM
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

{{DefaultAPISidebar("DOM")}}

DOM は XML または HTML 文書をツリー構造として表します。このページでは、DOM ツリーの基本構造と、その操作に使用される様々なプロパティおよびメソッドについて紹介します。

まず、ツリーにまつわるいくつかの概念を紹介する必要があります。ツリーとは、ノードで構成されるデータ構造です。それぞれのノードはデータを保持します。ノードは階層的に組織化されており、それぞれのノードは単一の親ノード（親を持たないルートノードを除く）と、0 個以上の子ノードの順序付きリストを持ちます。これで以下の定義が可能です。

- 親を持たないノードは、ツリーのルートと呼ばれます。
- 子ノードを持たないノードは葉ノードと呼ばれます。
- 同じ親を持つノードは兄弟ノードと呼ばれます。兄弟ノードは親の同一の子ノードリストに属するため、明確な順序が定義されています。
- ノード A から親リンクを繰り返し追跡することでノード B へ到達可能な場合、A は B の子孫であり、B は A の祖先であるといえます。
- ツリー内ノードは、まずノード自体を列挙し、次にそれぞれの子ノードを順序通りに再帰的に列挙する（先順序、深さ優先探索）というツリー順序でリスト化されます。

そして、以下のようなツリーに関するいくつかの重要なプロパティがあります。

- 各ノードは単一のルートノードに関連付けられています。
- ノード A がノード B の親である場合、ノード B はノード A の子であるといえます。
- 循環は許容されません。いかなるノードも、自分自身の祖先または子孫であってはなりません。

## Node インターフェイスとそのサブクラス

DOM 内のすべてのノードは、{{domxref("Node")}} インターフェイスを実装するオブジェクトによって表されます。`Node` インターフェイスは、これまでに定義された概念の多くを体現しています。

- {{domxref("Node/parentNode", "parentNode")}} プロパティあ h 親ノードを返します。ノードに親がない場合は `null` を返します。
- {{domxref("Node/childNodes", "childNodes")}} プロパティは子ノード群の {{domxref("NodeList")}} を返します。{{domxref("Node/firstChild", "firstChild")}} プロパティと {{domxref("Node/lastChild", "lastChild")}} プロパティはそれぞれこのリストの先頭と末尾の要素を返します。子ノードがない場合は `null` を返します。
- {{domxref("Node/getRootNode", "getRootNode()")}} メソッドは、親のリンクをたどって、このノードを含むツリーのルートを返します。
- {{domxref("Node/hasChildNodes", "hasChildNodes()")}} メソッドは、子ノードがある場合、つまり葉ノードではない場合に `true` を返します。
- {{domxref("Node/previousSibling", "previousSibling")}} プロパティと {{domxref("Node/nextSibling", "nextSibling")}} プロパティは、それぞれ直前と直後の兄弟ノードを返します。そのような兄弟がない場合は `null` を返します。
- {{domxref("Node/contains", "contains()")}} メソッドは、指定されたノードがこのノードの子孫である場合に `true` を返します。
- {{domxref("Node/compareDocumentPosition", "compareDocumentPosition()")}} メソッドは、 2 つのノードをツリー順で比較します。このメソッドは[ノードの比較](#ノードの比較)の節で詳しく解説します。

純粋な `Node` オブジェクトを直接扱うことはほとんどありません。代わりに、DOM 内のすべてのオブジェクトは `Node` を継承したインターフェイスのいずれかを実装しており、これらは文書内の追加的な意味論を表します。ノードの型は、そのノードが保持するデータや有効な子ノードの型を制限します。次の HTML 文書が DOM でどのように表現されるかを考えてみましょう：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

これは次のような DOM ツリーを生成します。

![前掲の HTML 文書の DOM ツリー](/shared-assets/images/diagrams/api/dom/tree-structure.svg)

この DOM ツリーのルートは {{domxref("Document")}} ノードであり、文書全体を表します。このノードは変数 {{domxref("Window/document", "document")}} としてグローバルに公開されています。このノードには 2 つの重要な子ノードがあります。

- {{domxref("DocumentType")}} ノードはオプションで、{{glossary("doctype")}} 宣言を表します。この場合は 1 つ存在します。このノードは `Document` ノードの {{domxref("Document/doctype", "doctype")}} プロパティからもアクセスできます。
- {{domxref("Element")}} ノードはオプションで、ルート要素を表します。HTML 文書では（この場合のように）、これは通常は {{domxref("HTMLHtmlElement")}} です。SVG 文書では、これは通常は {{domxref("SVGSVGElement")}} です。このノードは `Document` ノードの {{domxref("Document/documentElement", "documentElement")}} プロパティからもアクセスでき案す。

`DocumentType` ノードは常に葉ノードです。`Element` ノードは、文書コンテンツの大部分が表される場所です。その下のそれぞれの要素、たとえば {{htmlelement("head")}}, {{htmlelement("body")}}, {{htmlelement("p")}} も、`Element` ノードで表現されます。実際には、それぞれが HTML 仕様で定義された、そのタグ名に特化した Element のサブクラスです。たとえば {{domxref("HTMLHeadElement")}} や {{domxref("HTMLBodyElement")}} などです。これらのサブクラスには、その要素の意味を表す追加のプロパティやメソッドがありますが、ここでは DOM の共通の動作に焦点を当てます。`Element` ノードは、他の `Element` ノードを子として持つことができ、入れ子になった要素を表します。例えば、{{htmlelement("head")}} 要素には 3 つの子要素があります。2 つの {{htmlelement("meta")}} 要素と 1 つの {{htmlelement("title")}} 要素です。さらに、要素はテキストコンテンツを表す {{domxref("Text")}} ノードや {{domxref("CDATASection")}} ノードを子要素として持つこともできます。例えば、{{htmlelement("p")}} 要素には単一の子要素として `Text` ノードがあり、そこには文字列 "This is a paragraph." が設定されています。`Text` ノードと `CDATASection` ノードは常に葉ノードです。

子を持つことができるすべてのノード ({{domxref("Document")}}, {{domxref("DocumentFragment")}}, {{domxref("Element")}}) は、2 種類の子を持つことができます。{{domxref("Comment")}} ノードと {{domxref("ProcessingInstruction")}} ノードです。これらのノードは常に葉ノードです。

それぞれの要素は、子ノードに加えて、{{domxref("Attr")}} ノードで表される属性を持つことができます。`Attr` は `Node` インターフェイスを継承していますが、主要なツリー構造の一部にはなりません。子ノードを持つことがなく、親ノードが常に `null` だからです。その代わり、これらは名前付きノードマップに格納され、`Element` ノードの {{domxref("Element/attributes", "attributes")}} プロパティからアクセスできます。

`Node` インターフェイスでは、ノードの型を示す {{domxref("Node/nodeType", "nodeType")}} プロパティを定義しています。要約すると、以下のノード型を導入しています。

| ノード型                             | `nodeType` 値                          | 有効な子ノード（`Comment` と `ProcessingInstruction` 以外で）            |
| ------------------------------------ | -------------------------------------- | ------------------------------------------------------------------------ |
| {{domxref("Document")}}              | `Node.DOCUMENT_NODE` (9)               | {{domxref("DocumentType")}}, {{domxref("Element")}}                      |
| {{domxref("DocumentType")}}          | `Node.DOCUMENT_TYPE_NODE` (10)         | なし                                                                     |
| {{domxref("Element")}}               | `Node.ELEMENT_NODE` (1)                | {{domxref("Element")}}, {{domxref("Text")}}, {{domxref("CDATASection")}} |
| {{domxref("Text")}}                  | `Node.TEXT_NODE` (3)                   | なし                                                                     |
| {{domxref("CDATASection")}}          | `Node.CDATA_SECTION_NODE` (4)          | なし                                                                     |
| {{domxref("Comment")}}               | `Node.COMMENT_NODE` (8)                | なし                                                                     |
| {{domxref("ProcessingInstruction")}} | `Node.PROCESSING_INSTRUCTION_NODE` (7) | なし                                                                     |
| {{domxref("Attr")}}                  | `Node.ATTRIBUTE_NODE` (2)              | なし                                                                     |

> [!NOTE]
> いくつかのノード型を飛ばしたのに気が付いたかもしれません。`Node.ENTITY_REFERENCE_NODE` (5), `Node.ENTITY_NODE` (6), `Node.NOTATION_NODE` (12) の値は既に使われなくなっており、`Node.DOCUMENT_FRAGMENT_NODE` (11) の値は [DOM ツリーの構築と更新](/ja/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree)で導入します。

## 各ノードのデータ

それぞれのノード型は、保持するデータを独自の方法で表します。`Node` インターフェイス自体には、データに関連する 3 つのプロパティが定義されており、以下の表に要約します。

| ノード型                             | {{domxref("Node/nodeName", "nodeName")}}              | {{domxref("Node/nodeValue", "nodeValue")}} | {{domxref("Node/textContent", "textContent")}}       |
| ------------------------------------ | ----------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------- |
| {{domxref("Document")}}              | `"#document"`                                         | `null`                                     | `null`                                               |
| {{domxref("DocumentType")}}          | その [`name`](#documenttype) （`"html"` など）        | `null`                                     | `null`                                               |
| {{domxref("Element")}}               | その [`tagName`](#element) （"HTML"`, `"BODY"` など） | `null`                                     | すべての子孫のテキストノードをツリー順に結合したもの |
| {{domxref("Text")}}                  | `"#text"`                                             | その [`data`](#characterdata)              | その [`data`](#characterdata)                        |
| {{domxref("CDATASection")}}          | `"#cdata-section"`                                    | その [`data`](#characterdata)              | その [`data`](#characterdata)                        |
| {{domxref("Comment")}}               | `"#comment"`                                          | その [`data`](#characterdata)              | その [`data`](#characterdata)                        |
| {{domxref("ProcessingInstruction")}} | その [`target`](#characterdata)                       | その [`data`](#characterdata)              | その [`data`](#characterdata)                        |
| {{domxref("Attr")}}                  | その [`name`](#attr)                                  | その [`value`](#attr)                      | その [`value`](#attr)                                |

### Document

文書 (`Document`) ノード自体は何もデータを持たないため、その `nodeValue` と `textContent` は常に `null` です。その `nodeName` は常に `"#document"` です。

`Document` は、環境（例えば、文書を提供した HTTP レスポンス）から取得される、文書に関するいくつかのメタデータを定義します。

- {{domxref("Document/URL", "URL")}} プロパティと {{domxref("Document/documentURI", "documentURI")}} プロパティは、この文書の URL を返します。
- {{domxref("Document/characterSet", "characterSet")}} プロパティは、この文書で使用される文字エンコーディング、例えば `"UTF-8"` を返します。
- {{domxref("Document/compatMode", "compatMode")}} プロパティは、この文書のレンダリングモードを返します。`"CSS1Compat"`（標準モード）または`"BackCompat"`（後方互換モード）です。
- {{domxref("Document/contentType", "contentType")}} プロパティはこの文書の[メディア型](/ja/docs/Web/HTTP/Guides/MIME_types)を返します。HTML 文書の場合は `"text/html"` などです。

### DocumentType

文書内の文書型 (`DocumentType`) は、このようになっています。

```xml
<!doctype name PUBLIC "publicId" "systemId">
```

指定することができる部分が 3 つあり、これは `DocumentType` ノードの 3 つのプロパティに対応します。{{domxref("DocumentType/name", "name")}}, {{domxref("DocumentType/publicId", "publicId")}}, {{domxref("DocumentType/systemId", "systemId")}} です。HTML 文書では、doctype は常に `<!doctype html>` であるため、`name` は `"html"` であり、`publicId` と `systemId` はどちらも空文字列です。

### Element

文書内の要素 (`Element`) は、このようになっています。

```html
<p class="note" id="intro">This is a paragraph.</p>
```

コンテンツのほかに指定可能な部分は、タグ名と属性の 2 つがあります。タグ名は `Element` ノードの {{domxref("Element/tagName", "tagName")}} プロパティに対応し、この例では `"P"` です（HTML 要素では常に大文字であることに注意してください）。属性は、`Element` ノードの {{domxref("Element/attributes", "attributes")}} プロパティに格納される `Attr` ノードに対応します。属性については[要素とその属性](#要素とその属性)の節で詳しく説明します。

`Element` ノード自体はデータを保持しないため、その `nodeValue` は常に `null` です。その `textContent` は、ツリー順に並べたすべての子孫テキストノードを連結したもので、この場合 `"This is a paragraph."` となります。次の要素の場合、

```html
<div>Hello, <span>world</span>!</div>
```

`textContent` は `"Hello, world!"` となります。テキストノードの `"Hello, "` と、{{htmlelement("span")}} 要素内にあるテキストノードの `"world"`、それにテキストノード `"!"` を連結したものです。

### CharacterData

{{domxref("Text")}}, {{domxref("CDATASection")}}, {{domxref("Comment")}}, {{domxref("ProcessingInstruction")}} はいずれも {{domxref("CharacterData")}} インターフェイスから継承されており、これはさらに `Node` のサブクラスです。`CharacterData` インターフェイスは唯一のプロパティとして {{domxref("CharacterData/data", "data")}} を定義しています。これはノードのテキストコンテンツを保持します。`data` プロパティもこれらのノードの `nodeValue` プロパティと `textContent` プロパティを実装するために使用されます。

`Text` と `CDATASection` については、`data` プロパティがノードのテキストコンテンツを保持します。以下の文書をご覧ください（なお、これは SVG 文書を使用しています。HTML は CDATA セクションを許可していないからです）。

```svg
<text>Some text</text>
<style><![CDATA[h1 { color: red; }]]></style>
```

{{svgelement("text")}} 要素の中のテキストノードは `"Some text"` を `data` として保持しており、{{svgelement("style")}} 要素の中の CDATA セクションは `"h1 { color: red; }"` を `data` として保持しています。

`Comment` では、`data` プロパティはコメントのコンテンツのうち `<!--` の後から始まり `-->` の前で終わる部分を保持しています。例えば、次の文書の場合、

```html
<!-- This is a comment -->
```

このコメントノードは `" This is a comment "` を `data` として保持しています。

`ProcessingInstruction` において、`data` プロパティは処理命令のコンテンツを保持します。このコンテンツはターゲットの直後から始まり、`?>` の直前で終わります。例えば、次の文書では、

```xml
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

処理命令ノードは `'type="text/xsl" href="style.xsl"'` を `data` として、`"xml-stylesheet"` を {{domxref("ProcessingInstruction/target", "target")}} として保持しています。

さらに、`CharacterData` インターフェイスは、`data` 文字列の長さを返す {{domxref("CharacterData/length", "length")}} プロパティと、`data` の部分文字列を返す {{domxref("CharacterData/substringData", "substringData()")}} メソッドを定義します。

### Attr

次の要素について、

```html
<p class="note" id="intro">This is a paragraph.</p>
```

`<p>` 要素には 2 つの属性があり、2 つの `Attr` ノードで表されます。それぞれの属性は名前と値で構成され、それぞれ {{domxref("Attr/name", "name")}} プロパティと {{domxref("Attr/value", "value")}} プロパティに対応します。最初の属性は `"class"` を `name` とし、`"note"` を `value` として保持します。一方、2 つ目となる属性は `"id"` を `name` とし、`"intro"` を `value` として保持します。

## 要素とその属性

先述の通り、`Element` ノードの属性は `Attr` ノードで表され、これらは別個の名前付きノードマップに格納されます。このマップは `Element` ノードの {{domxref("Element/attributes", "attributes")}} プロパティ経由でアクセス可能です。この {{domxref("NamedNodeMap")}} インターフェイスは、以下の 3 つの重要なプロパティを定義しています。

- {{domxref("NamedNodeMap/length", "length")}}。これは属性の数を返します。
- {{domxref("NamedNodeMap/item", "item()")}} メソッド。これは指定された位置の `Attr` を返します。
- {{domxref("NamedNodeMap/getNamedItem", "getNamedItem()")}} メソッド。これは指定された名前の `Attr` を返します。

`Element`インターフェイスは、名前付きノードマップにアクセスすることなく、属性と直接操作するためのいくつかのメソッドも定義しています。

- {{domxref("Element/getAttribute", "element.getAttribute(name)")}} は、属性が存在すれば、 `element.attributes.getNamedItem(name).value` と等価です。
- {{domxref("Element/getAttributeNode", "element.getAttributeNode(name)")}} は `element.attributes.getNamedItem(name)` と等価です。
- {{domxref("Element/hasAttribute", "element.hasAttribute(name)")}} は `element.attributes.getNamedItem(name) !== null` と等価です。
- {{domxref("Element/getAttributeNames", "element.getAttributeNames()")}} はすべての属性の名前の配列を返します。
- {{domxref("Element/hasAttributes", "element.hasAttributes()")}} は `element.attributes.length > 0` と等価です。

属性の所有要素には、`Attr` ノードの {{domxref("Attr/ownerElement", "ownerElement")}} プロパティを介してアクセスすることも可能です。

特別な属性として、 `id` と `class` は、`Element` インターフェイス上にそれぞれ、{{domxref("Element/id", "id")}} と {{domxref("Element/className", "className")}} の固有のプロパティを持ちます。これらは対応する属性の値を[反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes)します。さらに、{{domxref("Element/classList", "classList")}} プロパティは、`class` 属性内のクラス一覧を表す {{domxref("DOMTokenList")}} を返します。

## 要素ツリーでの作業

`Element` ノードは文書構造の骨格を形成するため、他のノード（`Text` や `Comment` など）をスキップして、要素ノードのみを特定して走査することができます。

- すべてのノードにおいて、{{domxref("Node/parentElement", "parentElement")}} プロパティは、親ノードが `Element` である場合にその親ノードを返し、親が `Element` でない場合（例えば親が `Document` である場合）には `null` を返します。これは、親ノードの型に関係なく親ノードを返す {{domxref("Node/parentNode", "parentNode")}} とは対照的です。
- `Document`, `DocumentFragment`, `Element` については、{{domxref("Element/children", "children")}} プロパティは子ノードのうち `Element` のみを {{domxref("HTMLCollection")}} で返します。これは、{{domxref("Node/childNodes", "childNodes")}} がすべての子ノードを返すのとは対照的です。{{domxref("Element/firstElementChild", "firstElementChild")}} プロパティと {{domxref("Element/lastElementChild", "lastElementChild")}} プロパティは、それぞれこの集合の最初と最後の要素を返し、子要素がない場合は `null` を返します。{{domxref("Element/childElementCount", "childElementCount")}} プロパティは、子要素の数を返します。
- `Element` と `CharacterData` については、{{domxref("Element/previousElementSibling", "previousElementSibling")}} プロパティと {{domxref("Element/nextElementSibling", "nextElementSibling")}} プロパティは `Element` である前または次の兄弟ノードを返し、そのような兄弟ノードがない場合は `null` を返します。これは {{domxref("Node/previousSibling", "previousSibling")}} と {{domxref("Node/nextSibling", "nextSibling")}} が、あらゆる型の兄弟ノードを返す可能性があるのとは対照的です。

## ノードの比較

ノードを比較するためには 3 つの重要なメソッドがあります。{{domxref("Node/isEqualNode", "isEqualNode()")}}, {{domxref("Node/isSameNode", "isSameNode()")}}, {{domxref("Node/compareDocumentPosition", "compareDocumentPosition()")}} です。

`isSameNode()` メソッドは古いものです。これは[厳密等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) のように動作し、2 つのノードが同じオブジェクトである場合のみ `true` を返します。

`isEqualNode()` メソッドは、2 つのノードを構造的に比較します。2 つのノードは、同じ型を持ち、同じデータを持ち、かつ各インデックスにおける子ノードも等しい場合に等しいと見なされます。 [各ノードのデータ](#各ノードのデータ)の節では、各ノード型に関連するデータを既に定義しています。

- `Document` については、データがなく、比較する必要があるのは子ノードだけです。
- `DocumentType` については、`name`, `publicId`, `systemId` の各プロパティを比較する必要があります。
- `Element` については、`tagName`（より正確には `namespaceURI`、`prefix`、`localName`。これらは [XML 名前空間](/ja/docs/Web/API/Document_Object_Model/XML_namespaces)ガイドで紹介します）と属性を比較する必要があります。
- `Attr` に対しては、`name`（より正確には `namespaceURI`、`prefix`、`localName`。これらは[XML 名前空間](/ja/docs/Web/API/Document_Object_Model/XML_namespaces)ガイドで紹介します）と `value` プロパティを比較する必要があります。
- すべての `CharacterData` ノード (`Text`, `CDATASection`, `Comment`, `ProcessingInstruction`) では、`data` プロパティを比較する必要があります。`ProcessingInstruction` については、`target` プロパティも比較する必要があります。

`a.compareDocumentPosition(b)` メソッドは、ツリー順で 2 つのノードを比較します。これらは相対的な位置関係を示すビットマスクを返します。取りうる場合は次の通りです。

- `a` と `b` が同じノードであれば `0` を返します。
- 2 つのノードが両方とも同じノードの属性であれば、属性リスト内で `a` が `b` よりも先にある場合は `Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (34)、または `a` の後に `b` がある場合は `Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (36) を返します。どちらかのノードが属性である場合は、それ以降の比較にはオーナー要素が使用されます。
- 2 つのノードのルートノードが同じでない場合は、`Node.DOCUMENT_POSITION_DISCONNECTED | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC | Node.DOCUMENT_POSITION_PRECEDING` (35) または `Node.DOCUMENT_POSITION_DISCONNECTED | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC | Node.DOCUMENT_POSITION_FOLLOWING` (37) を返します。どちらが返されるかは実装依存です。
- `a` が `b` の祖先である場合（`b`が `a` の属性である場合も含む）、`Node.DOCUMENT_POSITION_CONTAINS | Node.DOCUMENT_POSITION_PRECEDING` (10) を返します。
- `a` が `b` の子孫である場合（`a` が `b` の属性である場合も含む）、`Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING` (20) を返します。
- `a` がツリー順で `b` よりも前にある場合、`Node.DOCUMENT_POSITION_PRECEDING` (2) を返します。
- `a` がツリー順で `b` よりも後にある場合、 `Node.DOCUMENT_POSITION_FOLLOWING` (4) を返します。

ビットマスク値が使用されるため、特定の関係を調べるにはビット単位の AND 演算を使用できます。例えば、`a` が `b` より前にあるかどうかを確認するには、次のようにするのが最適です。

```js
if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_PRECEDING) {
  // a が b より前にある
}
```

これは、`a` と `b` が同じ要素の属性であり、`a` が `b` の祖先であり、かつ `a` がツリー順序において `b` より前に位置する場合の状況を説明しています。

## まとめ

これまでに導入した機能のすべてをご紹介します。数は多いですが、どれも様々な場面で有益です。

- DOM のすべてのノードは {{domxref("Node")}} インターフェイスを実装しています。
- DOM ツリー内を動き回るには、{{domxref("Node/parentNode", "parentNode")}}, {{domxref("Node/childNodes", "childNodes")}}, {{domxref("Node/firstChild", "firstChild")}}/{{domxref("Node/lastChild", "lastChild")}}, {{domxref("Node/hasChildNodes", "hasChildNodes()")}}, {{domxref("Node/getRootNode", "getRootNode()")}}, {{domxref("Node/previousSibling", "previousSibling")}}/{{domxref("Node/nextSibling", "nextSibling")}} を使用します。
- 要素ツリーを動き回るには、{{domxref("Node/parentElement", "parentElement")}}, {{domxref("Element/children", "children")}}, {{domxref("Element/firstElementChild", "firstElementChild")}}/{{domxref("Element/lastElementChild", "lastElementChild")}}, {{domxref("Element/childElementCount", "childElementCount")}}, {{domxref("Element/previousElementSibling", "previousElementSibling")}}/{{domxref("Element/nextElementSibling", "nextElementSibling")}} を使用します。
- {{domxref("Node/nodeType", "nodeType")}} プロパティはノードの型を示します。{{domxref("Node/nodeName", "nodeName")}}, {{domxref("Node/nodeValue", "nodeValue")}}, {{domxref("Node/textContent", "textContent")}} の各プロパティは、ノードが保持しているデータを提供します。
- {{domxref("Document")}} ノードと 2 つの重要な子、{{domxref("Document/doctype", "doctype")}} と {{domxref("Document/documentElement", "documentElement")}}。
- {{domxref("DocumentType")}} ノードと 3 つのプロパティ{{domxref("DocumentType/name", "name")}}, {{domxref("DocumentType/publicId", "publicId")}}, {{domxref("DocumentType/systemId", "systemId")}}。
- {{domxref("Element")}} ノードとそのプロパティ {{domxref("Element/tagName", "tagName")}}, {{domxref("Element/attributes", "attributes")}}。
- {{domxref("Attr")}} ノードとそのプロパティ {{domxref("Attr/name", "name")}} と {{domxref("Attr/value", "value")}}。
- {{domxref("CharacterData")}} インターフェイスとそのプロパティ {{domxref("CharacterData/data", "data")}}。
- 4 つの {{domxref("CharacterData")}} のサブクラス {{domxref("Text")}}, {{domxref("CDATASection")}}, {{domxref("Comment")}}, {{domxref("ProcessingInstruction")}}。`ProcessingInstruction` には {{domxref("ProcessingInstruction/target", "target")}} プロパティもあります。
- 属性で作業する様々な方法、たとえば {{domxref("Element/id", "id")}}, {{domxref("Element/className", "className")}}, {{domxref("Element/classList", "classList")}} の各プロパティがあります。
- ノードを比較する 3 つのメソッド: {{domxref("Node/isEqualNode", "isEqualNode()")}}, {{domxref("Node/isSameNode", "isSameNode()")}}, {{domxref("Node/compareDocumentPosition", "compareDocumentPosition()")}}。
