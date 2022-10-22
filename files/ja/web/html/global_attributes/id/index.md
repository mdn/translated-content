---
title: id
slug: Web/HTML/Global_attributes/id
---

{{HTMLSidebar("Global_attributes")}}

**`id`** {{glossary("global attribute", "グローバル属性")}}は、文書全体で一意でなければならない識別子 (ID) を定義します。この属性の用途は、リンク ([フラグメント識別子](/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#Fragment)を使用)、スクリプト、スタイル ({{glossary("CSS")}} を使用) で要素を特定することです。

{{EmbedInteractiveExample("pages/tabbed/attribute-id.html","tabbed-shorter")}}

> **警告:** この属性の値は不伝導性の文字列です。つまり、ウェブ作者は人間が理解するための情報を伝えるためにこの情報を使用するべきではありません (ただし、 ID を人間が理解できるようにすることは、コードを理解するために有用です。例えば、 `ticket-18659` と `r45tgfe-freds&$@` を比べてみてください)。

`id` の値に{{glossary("whitespace", "ホワイトスペース")}}文字 (空白やタブなど) を含めてはいけません。ブラウザーはホワイトスペース文字を含む不適合な ID を、ホワイトスペース文字が ID の一部であるかのように扱います。空白区切りで並べた値を受け入れる {{htmlattrxref("class")}} 属性とは対照的に、要素は ID の値をひとつだけ持つことができます。

> **メモ:** {{glossary("ASCII")}} 英文字、数字、`'_'`、`'-'`、`'.'` 以外の文字は HTML 4 で許容されていなかったため、使用した場合に互換性の問題を引き起こす可能性があります。この制約は {{glossary("HTML5")}} で外されましたが、互換性のために ID は文字で始めるようにしましょう。

## 仕様書

| 仕様書                                                                               | 状態                             | 備考                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#the-id-attribute", "id")}} | {{Spec2('HTML WHATWG')}} | 最新のスナップショットである {{SpecName('HTML5.1')}} から変更なし。                                                                                                                                                                                            |
| {{SpecName('HTML5.1', "dom.html#the-id-attribute", "id")}}         | {{Spec2('HTML5.1')}}     | {{SpecName('HTML WHATWG')}} のスナップショットであり、 {{SpecName('HTML5 W3C')}} から変更なし。                                                                                                                                                         |
| {{SpecName('HTML5 W3C', "dom.html#the-id-attribute", "id")}}     | {{Spec2('HTML5 W3C')}}     | {{SpecName('HTML WHATWG')}} のスナップショットであり、先頭の文字以外で `'_'`、`'-'`、`'.'` が使用可能になった。また、真にグローバルな属性になった。                                                                                                            |
| {{SpecName('HTML4.01', 'struct/global.html#adef-id', 'id')}}     | {{Spec2('HTML4.01')}}     | {{HTMLElement("base")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}} を除くすべての要素で対応。 |

## ブラウザーの互換性

{{Compat("html.global_attributes.id")}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)。
- {{domxref("Element.id")}} は、この属性を反映します。
