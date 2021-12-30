---
title: ボックス値からのシェイプ
slug: Web/CSS/CSS_Shapes/From_box_values
tags:
  - Boundaries
  - Boxes
  - CSS
  - CSS Shapes
  - Guide
  - Margins
  - border-box
  - border-radius
  - box values
  - content-box
  - float
  - margin-box
  - padding-box
  - shapes
translation_of: Web/CSS/CSS_Shapes/From_box_values
---
<div>{{CSSRef}}</div>

<p class="summary">シェイプを作るのに直接的な方法が、 CSS ボックスモデルの値を使用することです。この記事では、これを行う方法を説明します。</p>

<p>シェイプの値として許可されている<a href="https://drafts.csswg.org/css-shapes-1/#shapes-from-box-values">ボックス値</a>は次の通りです。</p>

<ul>
 <li><code>content-box</code></li>
 <li><code>padding-box</code></li>
 <li><code>border-box</code></li>
 <li><code>margin-box</code></li>
</ul>

<p><code>border-radius</code> の値にも対応しており、これはページに丸い縁を持った物を作ることができ、シェイプは作成されたシェイプに従うことができます。</p>

<h2 id="CSS_box_model" name="CSS_box_model">CSS ボックスモデル</h2>

<p>上に挙げた値は CSS ボックスモデルの様々な部分に対応します。 CSS のボックスにはコンテンツ、パディング、境界、マージンがあります。</p>

<p><img alt="ボックスモデルはマージン、境界、パディング、コンテンツの各ボックスから成ります。" src="https://mdn.mozillademos.org/files/15845/box-model.png" style="height: 267px; width: 447px;"></p>

<p>シェイプにボックス値を使用することで、これらの値で定義された辺でコンテンツを折り返すことができます。以下の例で、コンテンツの様々な流れ方が分かるように、パディング、境界、マージンを持つ要素を使用しています。</p>

<h3 id="margin-box">margin-box</h3>

<p><code>margin-box</code> は外側のマージンの縁と、要素の定義で {{cssxref("border-radius")}} を使用することで、シェイプの角の半径によって定義されます。</p>

<p>以下の例では、高さ、幅、背景色を設定した {{htmlelement("div")}} である紫色の丸いアイテムが表示されます。 <code>border-radius</code> プロパティを使用して丸を作成しており、 <code>border-radius: 50%</code> と設定しています。要素にマージンがあるので、コンテンツは丸いシェイプに回り込み、マージンが適用されています。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/box/margin-box.html", '100%', 800)}}</p>

<h3 id="border-box">border-box</h3>

<p><code>border-box</code> の値は、境界の外側の縁で定義されるシェイプです。このシェイプは通常の、境界の外側におけるすべての角の丸め規則に従います。 CSS の {{cssxref("border")}} プロパティを使用していなくても、境界は存在します。この場合、境界は <code>padding-box</code> と同じになり、シェイプはパディングの縁の外側として定義されます。</p>

<p>次の例では、テキストが境界線によって作成された線に従うようになったのが分かります。境界寸法を変更すると、コンテンツがそれに従います。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/box/border-box.html", '100%', 800)}}</p>

<h3 id="padding-box">padding-box</h3>

<p><code>padding-box</code> の値は、パディングの縁に囲まれたシェイプを定義します。このシェイプは境界の内側におけるすべての角の丸め規則に従います。パディングがない場合、 <code>padding-box</code> は <code>content-box</code> と同じです。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/box/padding-box.html", '100%', 800)}}</p>

<h3 id="content-box">content-box</h3>

<p><code>content-box</code> の値は、コンテンツの外側の縁で囲まれたシェイプを定義します。このボックスにおけるそれぞれの角の丸めは、0または border-radius − border-width − padding より大きくなります。つまり、ここでは負の数を取ることはできません。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/box/content-box.html", '100%', 800)}}</p>

<h2 id="When_to_use_the_box_values" name="When_to_use_the_box_values">ボックス値を使用する場面</h2>

<p>シェイプを作成するのに、ボックス値を使用すると簡単ですが、これはよく対応されている <code>border-radius</code> プロパティを使用して定義することができる簡単なシェイプしか実現することができません。上記の使用例にあるような使い方の一つです。 border-radius を使用して円形のシェイプを作成し、それに沿って文字列をカーブさせます。</p>

<p>いくらかの面白い効果を作成することができますが、単純なテクニックしか使っていません。この章の最後の例で、左右に2つのフロート状態の要素を作成し、それぞれの文字列寄りの方向に対して、 border-radius を100%に設定しています。</p>

<p>{{EmbedGHLiveSample("css-examples/shapes/box/bottom-margin-box.html", '100%', 800)}}</p>

<p>もっと複雑なシェイプについては、この章の他のガイドにあるように、<a href="/ja/docs/Web/CSS/CSS_Shapes/Basic_Shapes">基本シェイプ</a>のうちの一つを値として使用するか、画像からシェイプを定義するかする必要があります。</p>
