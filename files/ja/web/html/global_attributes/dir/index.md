---
title: dir
slug: Web/HTML/Global_attributes/dir
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`dir`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は[列挙型](/ja/docs/Glossary/Enumerated)属性で、要素のテキストの書字方向を示します。

{{EmbedInteractiveExample("pages/tabbed/attribute-dir.html","tabbed-standard")}}

次の値を使用することができます。

- `ltr`: _left to right_ を表し、左書きの言語（英語など）に対して使用します。
- `rtl`: _right to left_ を表し、右書きの言語（アラビア語など）に対して使用します。
- `auto`: ユーザーエージェントに決定させます。書字方向が明確な文字が見つかるまで要素内の文字を解釈して、その方向を要素全体に適用する基本的なアルゴリズムを使用します。

> **メモ:** この属性は、意味論的な位置づけが異なる場所を示す {{HTMLElement("bdo")}} 要素で必須です。
>
> - この属性は {{HTMLElement("bdi")}} 要素に継承され**ません**。属性を設定しない場合の値は `auto` になります。
> - この属性は、 CSS の {{cssxref("direction")}} プロパティや {{cssxref("unicode-bidi")}} プロパティで上書きできます。ただし、 CSS が有効かつ要素がこれらのプロパティに対応する場合に限ります。
> - テキストの書字方向はその表示ではなく、内容に対して意味論的な関係がありますので、ウェブ開発者には、可能であれば関連する CSS プロパティの代わりにこの属性を使用することを推奨します。これにより、 CSS に対応しないブラウザーや CSS を無効化したブラウザーでもテキストが正しく表示されます。
> - 値 `auto` は、ユーザーが入力して最終的にデータベースへ保存するデータなど、書字方向が不定のデータに対して使用してください。

> **メモ:** ブラウザーではユーザーが {{ HTMLElement("input") }} や {{ HTMLElement("textarea") }} の書字方向を変更することを許可して、コンテンツの執筆を支援していることがあります。 Chrome と Safari は入力フィールドのコンテキストメニューに書字方向のオプションを提供している一方、 Internet Explorer と Edge はキーバインド <kbd>Ctrl</kbd> + <kbd>Left Shift</kbd> および <kbd>Ctrl</kbd> + <kbd>Right Shift</kbd> を使用します。 Firefox は <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> を使用しますが、 **`dir`** 属性の値は変更しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべて[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.dir")}} は、この属性を反映します。
