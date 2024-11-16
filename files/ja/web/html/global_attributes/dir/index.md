---
title: dir
slug: Web/HTML/Global_attributes/dir
l10n:
  sourceCommit: 83209b7db36cdeb7bab3d3ca564be3678f981778
---

{{HTMLSidebar("Global_attributes")}}

**`dir`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は[列挙型](/ja/docs/Glossary/Enumerated)属性で、要素のテキストの書字方向を示します。

{{EmbedInteractiveExample("pages/tabbed/attribute-dir.html","tabbed-standard")}}

次の値を使用することができます。

- `ltr`: _left to right_ を表し、左書きの言語（英語など）に対して使用します。
- `rtl`: _right to left_ を表し、右書きの言語（アラビア語など）に対して使用します。
- `auto`: ユーザーエージェントに決定させます。書字方向が明確な文字が見つかるまで要素内の文字を解釈して、その方向を要素全体に適用する基本的なアルゴリズムを使用します。

> **メモ:** `auto` の値は、ユーザー入力や外部データなど、書字方向が不明なデータに使用すべきです。

指定されていない場合、値は親要素から[継承](#継承)されます。

この属性は、 CSS の {{ cssxref("direction") }} プロパティや {{ cssxref("unicode-bidi") }} プロパティで上書きできます。ただし、 CSS が有効かつ要素がこれらのプロパティに対応する場合に限ります。

テキストの書字方向はその表示ではなく、内容に対して意味論的な関係がありますので、ウェブ開発者には、可能であれば関連する CSS プロパティよりもこの属性を使用することを推奨します。これにより、CSS に対応しないブラウザーや CSS を無効化したブラウザーでもテキストが正しく表示されます。

## 継承

要素に `dir` 属性が指定されていない場合、その[親ノード](/ja/docs/Glossary/Node/DOM)に設定された `dir` の値を継承します。さらにその親ノードから継承している場合もあります。

## 使用上の注意

画像の `dir` プロパティを `"rtl"` に設定すると、HTML の `title` および `alt` 属性が `"rtl"` として整形および定義されます。

表の `dir` が `"rtl"` に設定されている場合、列の順序は右から左に並べられます。

この属性は、意味論的な位置づけが異なる場所を示す {{ HTMLElement("bdo") }} 要素で必須です。

この属性は、{{ HTMLElement("bdi") }} 要素には継承されません。設定されていない場合、その値は `auto` です。

ブラウザーではユーザーが {{ HTMLElement("input") }} や {{ HTMLElement("textarea") }} の書字方向を変更することを許可して、コンテンツの執筆を支援していることがあります。Chrome と Safari は入力フィールドのコンテキストメニューに書字方向のオプションを提供しています。Firefox は <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> を使用しますが、`dir` 属性の値は変更しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべて[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.dir")}} は、この属性を反映します。
