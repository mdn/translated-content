---
title: id
slug: Web/HTML/Global_attributes/id
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`id`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes)は、文書全体で一意でなければならない識別子 (ID) を定義します。この属性の用途は、リンク（[フラグメント識別子](/ja/docs/Web/URI#フラグメント)を使用）、スクリプト、スタイル（{{glossary("CSS")}} を使用）で要素を特定することです。

{{EmbedInteractiveExample("pages/tabbed/attribute-id.html","tabbed-shorter")}}

> [!WARNING]
> この属性の値は不伝導性の文字列です。つまり、ウェブ作者は人間が理解するための情報を伝えるためにこの情報を使用するべきではありません（ただし、 ID を人間が理解できるようにすることは、コードを理解するために有用です。例えば、 `ticket-18659` と `r45tgfe-freds&$@` を比べてみてください）。

`id` の値に{{glossary("whitespace", "ホワイトスペース")}}文字 (空白やタブなど) を含めてはいけません。ブラウザーはホワイトスペース文字を含む不適合な ID を、ホワイトスペース文字が ID の一部であるかのように扱います。空白区切りで並べた値を受け入れる [`class`](/ja/docs/Web/HTML/Global_attributes#class) 属性とは対照的に、要素は ID の値をひとつだけ持つことができます。

> [!NOTE]
> 技術的には、`id` 属性の値には{{glossary("whitespace", "ホワイトスペース")}}文字を除いて、どんな文字でも入れることができます。しかし、不注意によるエラーを避けるためには、{{glossary("ASCII")}} 文字、数字、`'_'`、`'-'` のみを使用し、`id` 属性の値は文字から始める必要があります。例えば、`.` は CSS では特別な意味を持ちます（[クラスセレクター](/ja/docs/Web/CSS/Class_selectors)として動作します）。CSS の中でそれをエスケープするように注意しない限り、`id` 属性の値の一部として認識されることはありません。この処理を忘れると、コードにバグが発生し、発見が困難になることがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- {{domxref("Element.id")}} はこの属性を反映します
- {{domxref("Document.getElementById")}} メソッド
- CSS の [ID セレクター](/ja/docs/Web/CSS/ID_selectors)
