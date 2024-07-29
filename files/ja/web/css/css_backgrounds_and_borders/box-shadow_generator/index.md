---
title: ボックスの影作成ツール
slug: Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: 883b021c97375f872d0702f0d0747b1373155cef
---

{{CSSRef}}

このツールで CSS の {{cssxref("box-shadow")}} 効果を組み立てて、 CSS オブジェクトにボックスの影の効果を追加することができます。

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 900)}}

ボックスの影作成ツールは、 1 つまたは複数のボックスの影を要素に追加することができます。

ツールを開くと、右上の部分に四角形があります。これがシャドウを適用する対象となる要素です。この要素が選択されている状態（ページを最初に読み込んだときの状態）では、基本的なスタイルを適用することができます。

- カラーピッカーツールを使って、要素の {{cssxref("color")}} を設定しましょう。
- "border" チェックボックスを使って、要素の {{cssxref("border")}} をつけましょう。
- スライダーを使って、要素の {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}}, {{cssxref("height")}} の各プロパティを設定しましょう。

ボックスの影を追加するには、左上の「+」ボタンをクリックしてください。これで影を追加し、左側の列に並べます。それで新しい影の値を設定することができるようになります。

- カラーピッカーツールを使って、影の {{cssxref("color")}} を設定しましょう。
- "inset" チェックボックスを使って、影が内側になるようにしましょう。
- スライダーを使って、影の位置、ぼかし、広がりを設定しましょう。

他の影を追加するには、「+」をまたクリックしてください。ここで設定した値は、この新しい影にも適用されます。左上の↑と↓のボタンで、 2 つの影の適用順を変更します。左側の列で最初の影をクリックして再度選択してください。要素のスタイルを更新するには、要素を選択し、上部にある「element」というボタンをクリックします。

要素に {{cssxref("::before")}} と {{cssxref("::after")}} の擬似要素を追加して、ボックスの影を付けることもできます。要素とその擬似要素を切り替えるには、上部にある「element」「:before」「:after」と書かれたボタンを使います。

右下のボックスには、要素と `before::` または `::after` 擬似要素の CSS が表示されます。

## 関連情報

- [境界画像作成ツール](/ja/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - : この対話ツールは、視覚的に境界画像（{{cssxref("border-image")}} プロパティ）を作成することができます。
- [境界角丸作成ツール](/ja/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - : この対話ツールを使うと、角丸（{{cssxref("border-radius")}} プロパティ）を視覚的に作成することができます。
