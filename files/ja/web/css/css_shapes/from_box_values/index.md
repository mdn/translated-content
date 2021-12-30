---
title: ボックス値からのシェイプ
slug: Web/CSS/CSS_Shapes/From_box_values
tags:
  - 境界
  - ボックス
  - CSS
  - CSS シェイプ
  - 概要
  - マージン
  - border-box
  - border-radius
  - ボックス値
  - content-box
  - float
  - margin-box
  - padding-box
  - シェイプ
translation_of: Web/CSS/CSS_Shapes/From_box_values
---
{{CSSRef}}

シェイプを作るのに直接的な方法が、 CSS ボックスモデルの値を使用することです。この記事では、これを行う方法を説明します。

シェイプの値として許可されている[ボックス値](https://drafts.csswg.org/css-shapes-1/#shapes-from-box-values)は次の通りです。

- `content-box`
- `padding-box`
- `border-box`
- `margin-box`

`border-radius` の値にも対応しており、これはページに丸い縁を持った物を作ることができ、シェイプは作成されたシェイプに従うことができます。

## CSS ボックスモデル

上に挙げた値は CSS ボックスモデルの様々な部分に対応します。 CSS のボックスにはコンテンツ、パディング、境界、マージンがあります。

![ボックスモデルはマージン、境界、パディング、コンテンツの各ボックスから成ります。](box-model.png)

シェイプにボックス値を使用することで、これらの値で定義された辺でコンテンツを折り返すことができます。以下の例で、コンテンツの様々な流れ方が分かるように、パディング、境界、マージンを持つ要素を使用しています。

### margin-box

`margin-box` は外側のマージンの縁と、要素の定義で {{cssxref("border-radius")}} を使用することで、シェイプの角の半径によって定義されます。

以下の例では、高さ、幅、背景色を設定した {{htmlelement("div")}} である紫色の丸いアイテムが表示されます。 `border-radius` プロパティを使用して丸を作成しており、 `border-radius: 50%` と設定しています。要素にマージンがあるので、コンテンツは丸いシェイプに回り込み、マージンが適用されています。

{{EmbedGHLiveSample("css-examples/shapes/box/margin-box.html", '100%', 800)}}

### border-box

`border-box` の値は、境界の外側の縁で定義されるシェイプです。このシェイプは通常の、境界の外側におけるすべての角の丸め規則に従います。 CSS の {{cssxref("border")}} プロパティを使用していなくても、境界は存在します。この場合、境界は `padding-box` と同じになり、シェイプはパディングの縁の外側として定義されます。

次の例では、テキストが境界線によって作成された線に従うようになったのが分かります。境界寸法を変更すると、コンテンツがそれに従います。

{{EmbedGHLiveSample("css-examples/shapes/box/border-box.html", '100%', 800)}}

### padding-box

`padding-box` の値は、パディングの縁に囲まれたシェイプを定義します。このシェイプは境界の内側におけるすべての角の丸め規則に従います。パディングがない場合、 `padding-box` は `content-box` と同じです。

{{EmbedGHLiveSample("css-examples/shapes/box/padding-box.html", '100%', 800)}}

### content-box

`content-box` の値は、コンテンツの外側の縁で囲まれたシェイプを定義します。このボックスにおけるそれぞれの角の丸めは、0または border-radius − border-width − padding より大きくなります。つまり、ここでは負の数を取ることはできません。

{{EmbedGHLiveSample("css-examples/shapes/box/content-box.html", '100%', 800)}}

## ボックス値を使用する場面

シェイプを作成するのに、ボックス値を使用すると簡単ですが、これはよく対応されている `border-radius` プロパティを使用して定義することができる簡単なシェイプしか実現することができません。上記の使用例にあるような使い方の一つです。 border-radius を使用して円形のシェイプを作成し、それに沿って文字列をカーブさせます。

いくらかの面白い効果を作成することができますが、単純なテクニックしか使っていません。この章の最後の例で、左右に 2 つの浮動状態の要素を作成し、それぞれの文字列寄りの方向に対して、 border-radius を 100% に設定しています。

{{EmbedGHLiveSample("css-examples/shapes/box/bottom-margin-box.html", '100%', 800)}}

もっと複雑なシェイプについては、この章の他のガイドにあるように、[基本シェイプ](/ja/docs/Web/CSS/CSS_Shapes/Basic_Shapes)のうちの一つを値として使用するか、画像からシェイプを定義するかする必要があります。
