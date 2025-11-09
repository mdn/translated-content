---
title: 整形コンテキストの紹介
slug: Web/CSS/Guides/Display/Formatting_contexts
original_slug: Web/CSS/CSS_display/Introduction_to_formatting_contexts
l10n:
  sourceCommit: 93f54a9e0ceb65880b951986cc47bee87336f156
---

この記事では整形コンテキストの概念を紹介します。ブロック整形コンテキスト、インライン整形コンテキスト、フレックス整形コンテキストなど、いくつかの種類があります。どのように動作するのか、これらの動作をどのように利用できるのかについても紹介します。

ページ上のすべてのものが**整形コンテキスト**、またはコンテンツを特定の方法でレイアウトする際に定義されている領域の一部です。**ブロック整形コンテキスト** (BFC) は、子要素をブロックレイアウトのルールに則って配置し、**フレックス整形コンテキスト**は、子要素を{{Glossary("Flex Item", "フレックスアイテム")}}として配置するなどです。それぞれの整形コンテキストは、そのコンテキストにあるときにどのようにレイアウトを行うかの特定のルールを持っています。

## ブロック整形コンテキスト

ブロックレイアウトルールを使用する文書の中で一番外側の要素は、最初の、あるいは**初期ブロック整形コンテキスト**を確立します。これは、 `<html>` 要素のブロック内のすべての要素が、ブロックおよびインラインレイアウトのルールに従って、通常のフローに従ってレイアウトされることを意味します。ブロック整形コンテキスト (BFC) に参加する要素は、 CSS ボックスモデルによって概説されたルールを使用します。これは、要素のマージン、境界、パディングが同じコンテキスト内の他のブロックとどのように相互作用するかを定義します。

### 新しいブロック整形コンテキストの生成

{{HTMLElement("html")}} 要素がブロック整形コンテキストを生成できる唯一の要素ではありません。どのブロックレベルの要素でも、特定の CSS プロパティを適用することで BFC を生成することができます。

新しい BFC は以下のような場面で生成されます。

- {{cssxref("float")}} を使用して浮動状態になった要素
- [絶対位置指定](/ja/docs/Web/CSS/Reference/Properties/position#types_of_positioning)の要素
- {{cssxref("display", "display: inline-block", "#inline-block")}} の要素
- 表のセル、または `display: table-cell` が指定された要素で、 `display: table-*` プロパティを使用して生成された無名の表のセルを含む
- テーブルのキャプション、または `display: table-caption` が付いた要素
- `overflow` が `visible` 以外の値であるブロック要素
- `display: flow-root` または `display: flow-root list-item` の要素
- {{cssxref("contain", "contain: layout", "#layout")}}, `content`, `strict` のいずれかの要素
- {{Glossary("Flex Item", "フレックスアイテム")}}
- グリッドアイテム
- [段組みコンテナー](/ja/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
- {{cssxref("column-span")}} が `all` に設定された要素

これは、新しい BFC がメインレイアウトの中でミニレイアウトとなり、一番外側の文書のように動作するので便利です。 BFC はその中にすべてを含み、 {{cssxref("float")}} と {{cssxref("clear")}} は同じ整形コンテキスト内の項目にのみ適用され、マージンは同じ整形コンテキスト内の要素間でのみ相殺されます。

### BFC が生成される例

新しい BFC を生成する効果を見るために、いくつかの例を見てみましょう。

下の例では、境界が適用された `<div>` の中に浮動ボックスがあります。その `<div>` の内容は、その浮動ボックスの横に並んでいます。その浮動ボックスの内容は、その横にある内容よりも高さが高いため、 `<div>` の境界線がその浮動ボックスを通過するようになりました。[フロー内とフローの外のガイド](/ja/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow)で説明されているように、浮動ボックスはフローから外れているので、 `<div>` の背景と境界には内容だけが含まれ、浮動ボックスは含まれません。

```html live-sample___float
<div class="box">
  <div class="float">これは浮動ボックスです。</div>
  <p>これはコンテナーの中のコンテンツです。</p>
</div>
```

```css live-sample___float
body {
  font: 1.2em sans-serif;
}

.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}

.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("float")}}

新しい BFC を生成すると浮動ボックスが収まります。これまでよく使われてきた方法は、 `overflow: auto` または初期値である `overflow: visible` 以外の値を設定することでした。

```html hidden live-sample___bfc-overflow
<div class="box">
  <div class="float">これは浮動ボックスです。</div>
  <p>これはコンテナーの中のコンテンツです。</p>
</div>
```

```css live-sample___bfc-overflow
body {
  font: 1.2em sans-serif;
}
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
  overflow: auto;
}

.float {
  float: left;
  width: 200px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("bfc-overflow", "", "220px")}}

`overflow: auto` を設定することで、浮動ボックスを含む新しい BFC を生成しました。 `<div>` はレイアウト内のミニレイアウトになりました。すべての子要素はその中に収まります。

`overflow` を使って新しい BFC を生成する場合の問題点は、 `overflow` プロパティは、あふれた内容をどのように処理したいかをブラウザーに伝えるためのものだということです。このプロパティを純粋に BFC を作成するために使用した場合、意図せずにスクロールバーが現れたり、影がクリッピングされたりすることに気づくこともあるでしょう。さらに、 `overflow` を使用した理由が明らかにならないこともあるかもしれないので、将来の開発者からは理解しやすくない可能性があります。このような場合は、コードにコメントをつけて説明するのが良いでしょう。

### display: flow-root を使用した明示的な BFC の生成

包含ブロックに `display: flow-root` (または `display: flow-root list-item`) を使用すると、問題を起こす副作用が発生することなく新しい BFC を生成することができます。

```html hidden live-sample___bfc-flow-root
<div class="box">
  <div class="float">これは浮動ボックスです。</div>
  <p>これはコンテナーの中のコンテンツです。</p>
</div>
```

```css live-sample___bfc-flow-root
body {
  font: 1.2em sans-serif;
}
.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
  display: flow-root;
}
```

```css hidden live-sample___bfc-flow-root
.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("bfc-flow-root")}}

`display: flow-root` を {{HTMLElement("div")}} に指定すると、コンテナー内のすべてのものがそのコンテナーのブロック整形コンテキストに参加し、浮動ボックスが要素の底から飛び出すことはなくなります。

`flow-root` キーワードの名前は、新しいコンテキストがどのように作成され、そのフローレイアウト機能がどのように機能するかを考えると、本質的には ({{HTMLElement("html")}} にように) 新しいルート要素のような役割を果たすものを生成しているという事実を示しています。

## インライン整形コンテキスト

インライン整形コンテキストは、他の整形コンテキストの中に存在する、段落のコンテキストと考えることができます。段落は、テキスト上で {{HTMLElement("strong")}}, {{HTMLElement("a")}}, {{HTMLElement("span")}} などの要素が使われた場合のようなインライン整形コンテキストを作成します。

ボックスモデルは、インライン整形コンテキストに参加している項目には完全には適用されません。横書きモードの行では、水平方向のパディング、境界、マージンが要素に適用され、テキストを左右に押しのけます。ただし、要素の上下のマージンは適用されません。水平のパディングや境界は適用されますが、インライン整形コンテキストでは、ラインボックスがパディングや境界によって押し広げられることはないため、上下の内容が重なる可能性があります。

```html live-sample___inline
<p>
  Before that night—<strong>a memorable night</strong>, as it was to
  prove—hundreds of millions of people had watched the rising smoke-wreaths of
  their fires without drawing any special inspiration from the fact.
</p>
```

```css live-sample___inline
body {
  font: 1.2em sans-serif;
}
p {
  margin-top: 2em;
}
strong {
  margin: 20px;
  padding: 20px;
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("inline")}}

## その他の整形コンテキスト

このガイドはフローレイアウトを対象としているため、他のありうる整形コンテキストについては言及していません。そのため、どのような種類の整形コンテキストを作成しても、その整形コンテキスト内の要素の動作が変わることを理解しておくと便利です。この動作は常に仕様書に記述されており、ここ、 MDN にも記述されています。

## まとめ

このガイドでは、ブロックおよびインライン整形コンテキストにおける詳細と、ブロック整形コンテキスト (BFC) を生成することの重要な目的を見てきました。次のガイドでは、[通常フローがどのように様々な所持方向に対応するか](/ja/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes)を見ていきます。

## 関連情報

- [ブロック整形コンテキスト (BFC)](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)
