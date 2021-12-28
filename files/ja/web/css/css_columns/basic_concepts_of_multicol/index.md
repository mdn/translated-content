---
title: 段組みの基本概念
slug: Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol
tags:
  - CSS
  - CSS 段組みレイアウト
  - ガイド
  - レイアウト
translation_of: Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol
---
{{CSSRef}}

段組みレイアウト (Multiple-column Layout) は、新聞のように内容物を複数の段ボックスにレイアウトする仕様です。このガイドでは、この仕様がどのように働くかを、いくつかのよくある使用例と共に説明します。

## 主要概念と用語

段組みは他のレイアウト方法とは異なり、 CSS でコンテンツを分割し、すべての子孫要素を段に含めます。これは、印刷スタイルシートを作成するのに使われる [CSS ページ付きメディア](/ja/docs/Web/CSS/CSS_Pages)がコンテンツをページに分割するのと同様のことを行います。

仕様書で定義されているプロパティは次の通りです。

- {{cssxref("column-width")}}
- {{cssxref("column-count")}}
- {{cssxref("columns")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule")}}
- {{cssxref("column-span")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}

`column-count` または `column-width` を要素に追加することで、要素は*段組みコンテナー*になります。段は無名のボックスになり、仕様書上では段ボックスと呼ばれます。

## 段の定義

段組みコンテナーを作成するには、少なくとも一つの `column-*` プロパティ、つまり `column-count` か `column-width` を使用する必要があります。

### `column-count` プロパティ

`column-count` プロパティは、内容物を表示したい段数を指定します。ブラウザーは要求された数の段を生成するために、それぞれの段ボックスに適正な大きさの空間を割り当てます。

以下の例では、 `column-count` プロパティを使用して `.container` 要素に 3 つの段を生成します。その内容は、 `.container` の子も含めて 3 つの段に分割されます。

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count.html", '100%', 550)}}

上記の例では、内容物は既定のスタイルの段落 `p` タグで囲まれています。従って、それぞれの段落の上にはマージンがあります。マージンが働いてテキストの最初の行を押し下げているのが分かるでしょう。これは、段組みコンテナーは新しいブロック整形文脈 (BFC) を作成するため、子要素のマージンはコンテナーのマージンと相殺されないからです。

### `column-width` プロパティ

`column-width` プロパティは、それぞれの段ボックスの最適な幅を設定するために使用されます。 column-width を宣言すると、ブラウザーは段組みコンテナー内にその幅の段と、段間の均等の空間が収まる数を計算します。従って、段の幅は最小幅として扱われ、段ボックスはふつう、追加の空間があるためにより広くなります。

段ボックスは、利用できる幅が `column-width` の値よりも狭い一段組みの場合に限り、宣言された段の幅よりも狭くなることがあります。

以下の例では、 `column-width` の値を 200px にして使用しています。コンテナーに合うように 200 ピクセルの段が確保され、残りの空間は均等に配分されます。

{{EmbedGHLiveSample("css-examples/multicol/basics/column-width.html", '100%', 550)}}

### `column-count` と `column-width` の併用

段組みコンテナーに両方のプロパティを指定すると、 `column-count` は最大の段数として動作します。従って、 `column-count` の段数に達するまでは、 `column-width` で宣言された通りに動作します。これを超えると、 `column-width` で指定された寸法の段を追加する余裕があっても、段は追加されず、余った空間は既存の段に均等に割り当てられます。

両方のプロパティを併用すると、 `column-count` の値で指定されたよりも少ない数の段数になることがあります。

次の例では、 `column-width` を 200px に、 `column-count` を 2 にして使用しています。 3 段以上の空間があっても 2 段になります。しかし、 200px の段を 2 つ設置する空間の余裕がなければ、 1 段になります。

{{EmbedGHLiveSample("css-examples/multicol/basics/column-count-width.html", '100%', 550)}}

### `columns` 一括指定

`columns` 一括指定で `column-count` と `column-width` を設定することができます。長さの単位を設定すると、 `column-width` に使用され、整数値を設定すると、 `column-count` に使用されます。２つの値を空白で区切って両方を設定することができます。

この CSS は例 1 と同じ結果で、 `column-count` を 3 に設定します。

    .container {
      columns: 3;
    }

この CSS は例 2 と同じ結果で、 `column-width` を 200px に設定します。

    .container {
      columns: 200px;
    }

この CSS は例 3 と同じ結果で、 `column-count` と `column-width` の両方に設定します。

    .container {
      columns: 2 200px;
    }

## 次のステップ

このガイドでは、段組みレイアウトの基本的な利用を学びました。次のガイドでは、 [段のスタイル付け](/ja/docs/Web/CSS/CSS_Columns/Styling_Columns)がどれだけできるかを見てみます。
