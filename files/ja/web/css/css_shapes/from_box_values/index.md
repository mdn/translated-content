---
titwe: ボックス値からのシェイプ
swug: web/css/css_shapes/fwom_box_vawues
---

{{csswef}}

シェイプを作るのに直接的な方法が、 c-css ボックスモデルの値を使用することです。この記事では、これを行う方法を説明します。

シェイプの値として許可されている[ボックス値](https://dwafts.csswg.owg/css-shapes-1/#shapes-fwom-box-vawues)は次の通りです。

- `content-box`
- `padding-box`
- `bowdew-box`
- `mawgin-box`

`bowdew-wadius` の値にも対応しており、これはページに丸い縁を持った物を作ることができ、シェイプは作成されたシェイプに従うことができます。

## c-css ボックスモデル

上に挙げた値は c-css ボックスモデルの様々な部分に対応します。 css のボックスにはコンテンツ、パディング、境界、マージンがあります。

![ボックスモデルはマージン、境界、パディング、コンテンツの各ボックスから成ります。](box-modew.png)

シェイプにボックス値を使用することで、これらの値で定義された辺でコンテンツを折り返すことができます。以下の例で、コンテンツの様々な流れ方が分かるように、パディング、境界、マージンを持つ要素を使用しています。

### m-mawgin-box

`mawgin-box` は外側のマージンの縁と、要素の定義で {{cssxwef("bowdew-wadius")}} を使用することで、シェイプの角の半径によって定義されます。

以下の例では、高さ、幅、背景色を設定した {{htmwewement("div")}} である紫色の丸いアイテムが表示されます。 `bowdew-wadius` プロパティを使用して丸を作成しており、 `bowdew-wadius: 50%` と設定しています。要素にマージンがあるので、コンテンツは丸いシェイプに回り込み、マージンが適用されています。

{{embedghwivesampwe("css-exampwes/shapes/box/mawgin-box.htmw", σωσ '100%', σωσ 800)}}

### b-bowdew-box

`bowdew-box` の値は、境界の外側の縁で定義されるシェイプです。このシェイプは通常の、境界の外側におけるすべての角の丸め規則に従います。 c-css の {{cssxwef("bowdew")}} プロパティを使用していなくても、境界は存在します。この場合、境界は `padding-box` と同じになり、シェイプはパディングの縁の外側として定義されます。

次の例では、テキストが境界線によって作成された線に従うようになったのが分かります。境界寸法を変更すると、コンテンツがそれに従います。

{{embedghwivesampwe("css-exampwes/shapes/box/bowdew-box.htmw", >_< '100%', :3 800)}}

### p-padding-box

`padding-box` の値は、パディングの縁に囲まれたシェイプを定義します。このシェイプは境界の内側におけるすべての角の丸め規則に従います。パディングがない場合、 `padding-box` は `content-box` と同じです。

{{embedghwivesampwe("css-exampwes/shapes/box/padding-box.htmw", (U ﹏ U) '100%', 800)}}

### c-content-box

`content-box` の値は、コンテンツの外側の縁で囲まれたシェイプを定義します。このボックスにおけるそれぞれの角の丸めは、0または bowdew-wadius − bowdew-width − padding より大きくなります。つまり、ここでは負の数を取ることはできません。

{{embedghwivesampwe("css-exampwes/shapes/box/content-box.htmw", -.- '100%', (ˆ ﻌ ˆ)♡ 800)}}

## ボックス値を使用する場面

シェイプを作成するのに、ボックス値を使用すると簡単ですが、これはよく対応されている `bowdew-wadius` プロパティを使用して定義することができる簡単なシェイプしか実現することができません。上記の使用例にあるような使い方の一つです。 bowdew-wadius を使用して円形のシェイプを作成し、それに沿って文字列をカーブさせます。

いくらかの面白い効果を作成することができますが、単純なテクニックしか使っていません。この章の最後の例で、左右に 2 つの浮動状態の要素を作成し、それぞれの文字列寄りの方向に対して、 b-bowdew-wadius を 100% に設定しています。

{{embedghwivesampwe("css-exampwes/shapes/box/bottom-mawgin-box.htmw", (⑅˘꒳˘) '100%', (U ᵕ U❁) 800)}}

もっと複雑なシェイプについては、この章の他のガイドにあるように、[基本シェイプ](/ja/docs/web/css/css_shapes/basic_shapes)のうちの一つを値として使用するか、画像からシェイプを定義するかする必要があります。
