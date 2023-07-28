---
title: Attr
slug: Web/API/Attr
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("DOM")}}

**`Attr`** インターフェイスは要素の属性の一つをオブジェクトとして表します。多くの場合、属性値を直接文字列として取得しますが（例: {{domxref("Element.getAttribute()")}}）、一部の関数（例: {{domxref("Element.getAttributeNode()")}}）や反復処理の場面では `Attr` のインスタンスを返します。

{{InheritanceDiagram}}

`Attr` 型のオブジェクトの核となる考え方は、**名前**と**値**の関連付けです。属性は**名前空間**の一部であることもあり、この場合、名前空間を識別する URI と、名前空間の省略形である接頭辞も持っています。

最終的に名前空間接頭辞を無視した場合は**ローカル**とみなされ、名前空間の接頭辞がある場合はそれを含み、コロン (`:`) でローカル名との間を区切った場合は**修飾されている**とみなされます。名前空間の外にある属性、名前空間の中にあって接頭辞が定義されていない属性、名前空間の中にあって接頭辞が定義されている属性の 3 つの場合があります。

| 属性     | 名前空間名    | 名前空間接頭辞 | 属性のローカル名 | 属性の修飾名  |
| -------- | ------------- | -------------- | ---------------- | ------------- |
| `myAttr` | _なし_        | _なし_         | `myAttr`         | `myAttr`      |
| `myAttr` | `mynamespace` | _なし_         | `myAttr`         | `myAttr`      |
| `myAttr` | `mynamespace` | `myns`         | `myAttr`         | `myns:myAttr` |

> **メモ:** このインターフェイスは、SVG、HTML、MathML のいずれかの要素である {{domxref("Element")}} のツリー表現に存在する属性のみを表します。例えば {{HTMLElement("table")}} 要素に対する {{domxref("HTMLTableElement")}} のような、その要素に関連付けられたインターフェイスの*プロパティ*を表すことはありません。（属性とそれがどのようにプロパティに*反映*されるかについての詳細は{{Glossary("Attribute", "この記事")}}を参照してください。）

## インスタンスプロパティ

_このインターフェイスには親インターフェイスである {{domxref("Node")}} および {{domxref("EventTarget")}} から継承したプロパティもあります。_

- {{domxref("Attr.localName", "localName")}} {{ReadOnlyInline}}
  - : 文字列で、属性の修飾名のローカル部分を表します。
- {{domxref("Attr.name", "name")}} {{ReadOnlyInline}}
  - : 属性の*修飾名*です。この属性が名前空間内にない場合は、{{domxref("attr.localName", "localName")}} プロパティと同じになります。
- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{ReadOnlyInline}}
  - : 文字列で、この属性の名前空間の URI を表します。名前空間がない場合は `null` となります。
- {{domxref("Attr.ownerElement", "ownerElement")}} {{ReadOnlyInline}}
  - : この属性が所属する {{domxref("Element")}} です。
- {{domxref("Attr.prefix", "prefix")}} {{ReadOnlyInline}}
  - : 文字列で、この属性の名前空間接頭辞を表します。接頭辞のない名前空間や名前空間が指定されていない場合は `null` となります。
- {{domxref("Attr.specified", "specified")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : このプロパティは常に `true` を返します。
- {{domxref("Attr.value", "value")}}
  - : この属性の値です。文字列で、このプロパティで設定したり取得したりすることができます。

## インスタンスメソッド

_このインターフェイスに固有のメソッドはありませんが、親インターフェイスである {{domxref("Node")}} および {{domxref("EventTarget")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他のノード: {{domxref("CDATASection")}}, {{domxref("CharacterData")}}, {{domxref("Comment")}}, {{domxref("Document")}}, {{domxref("Element")}}, {{domxref("ProcessingInstruction")}}, {{domxref("Text")}}
