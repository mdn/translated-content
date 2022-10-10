---
title: style
slug: Web/HTML/Global_attributes/style
---

{{HTMLSidebar("Global_attributes")}}

**`style`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、要素に適用する [CSS](/ja/docs/Web/CSS) スタイル宣言を包含します。なお、スタイルは別のファイルで定義することが推奨されます。この属性と {{HTMLElement("style")}} 要素の主な用途は、例えばテストのために、すばやくスタイルを適用できるようにすることです。

{{EmbedInteractiveExample("pages/tabbed/attribute-style.html","tabbed-shorter")}}

> **メモ:** **使用上のメモ:** この属性は、意味的な情報を伝えるために使用してはいけません。すべてのスタイルが削除されたとしても、ページは依然として意味的にが正しくあるべきです。特に、無関係な情報を隠すために使用しないようにしてください。これには [**hidden**](/ja/docs/Web/HTML/Global_attributes/hidden) 属性を使用してください。

## 仕様書

| 仕様書                                                                                       | 状態                             | 備考                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#the-style-attribute", "style")}} | {{Spec2('HTML WHATWG')}} | 最新のスナップショットである {{SpecName('HTML5.1')}} から変更なし。                                                                                                                                                                                                                                                                        |
| {{SpecName('HTML5.1', "dom.html#the-style-attribute", "style")}}         | {{Spec2('HTML5.1')}}     | {{SpecName('HTML WHATWG')}} のスナップショットであり、 {{SpecName('HTML5 W3C')}} から変更なし。                                                                                                                                                                                                                                     |
| {{SpecName('HTML5 W3C', "dom.html#the-style-attribute", "style")}}     | {{Spec2('HTML5 W3C')}}     | {{SpecName('HTML WHATWG')}} のスナップショット。 {{SpecName("HTML4.01")}} から、真にグローバルな属性になりました。                                                                                                                                                                                                                 |
| {{SpecName('HTML4.01', 'present/styles.html#h-14.2.2', 'style')}}     | {{Spec2('HTML4.01')}}     | {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, and {{HTMLElement("title")}} を除くすべての要素で対応。 |
| {{SpecName("CSS3 Style", "", "")}}                                                 | {{Spec2("CSS3 Style")}} | `style` 属性の内容を定義。                                                                                                                                                                                                                                                                                                                          |

## ブラウザーの互換性

{{Compat("html.global_attributes.style")}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
