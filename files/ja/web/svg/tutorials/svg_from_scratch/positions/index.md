---
title: 位置指定
slug: Web/SVG/Tutorials/SVG_from_scratch/Positions
l10n:
  sourceCommit: 787e8f0d2e6796a5973ba1ec431e288d66860063
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Getting_started", "Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes") }}

この記事では、SVG (Scalable Vector Graphics) が描画コンテキスト内のオブジェクトの位置や大きさをどのように表現するのか、SVG の座標系や、拡大縮小可能なコンテキストでの「ピクセル」の意味を説明します。

## グリッド

SVG では、すべての要素に対して[キャンバス](/ja/docs/Web/API/Canvas_API)（およびほかの多くのコンピューター描画処理）と同様の座標系、つまり**グリッド**システムを使用します。文書の左上隅を点 (0,0)、すなわち原点と見なします。位置は左上隅からのピクセル数で表され、正の x 方向は左から右、正の y 方向は上から下です。

![X, Y 座標のグリッドの中央に青いボックスがある様子。](canvas_default_grid.png)

これは、子どもの頃に習ったグラフの描き方とは少し異なることに注意してください（y 軸が反転しています）。ただし、HTML の要素も同じ方法で配置されます。

## ピクセル、ユーザー単位、SVG ユーザー座標系

SVG の描画には**ユーザー座標系**を使用し、位置や長さは**ユーザー単位**で表します。ユーザー単位とは、`x`、`y`、`width`、`height` などの SVG 属性に記述する、単位のない座標値です。

SVG のビューポートを最初に作成したとき、1 ユーザー単位は 1 CSS ピクセルに対応します。ただし、これは初期状態での対応付けです。`viewBox` 属性などの機能でユーザー座標系を変換すると、1 ユーザー単位に対応する CSS ピクセル数を増減できます。

SVG では、`cm`、`mm`、`pt` などの絶対単位も使用できます。これらは描画前にユーザー座標系に換算されます。

まず、`<svg>` ルート要素から始めます。

```html
<svg width="200" height="200">…</svg>
```

上記の要素は、幅と高さがそれぞれ 200 CSS ピクセルの SVG ビューポートを定義します。`viewBox` が指定されていないため初期状態の対応付けが使用され、1 ユーザー単位は 1 CSS ピクセルに対応します。

次に、`viewBox` 属性を追加し、`<rect>` 要素で SVG ビューポートに正方形を描画してみましょう。

```html live-sample___svg-user-units
<svg width="200" height="200" viewBox="0 0 100 100">
  <rect x="10" y="10" width="40" height="40" fill="royalblue" />
</svg>
```

```css hidden live-sample___svg-user-units
svg {
  border: 1px solid gray;
}
```

SVG ビューポートの大きさは引き続き 200 × 200 CSS ピクセルですが、`viewBox` は (0,0) から (100,100) までのユーザー単位で構成される座標系を定義します。ブラウザーは、この 100 × 100 ユーザー単位の座標系を 200 × 200 CSS ピクセルのビューポートに対応付けます。そのため、1 ユーザー単位は 2 × 2 CSS ピクセルで描画されます。

この例は次のように表示されます。

{{EmbedLiveSample("svg-user-units", "100%", "250")}}

長方形は `viewBox` 内の (10,10) に配置され、サイズは 40 × 40 ユーザー単位です。ただし、1 ユーザー単位は 2 × 2 CSS ピクセルで描画されるため、画面上では 80 × 80 CSS ピクセルの正方形になり、SVG ビューポートの左端および上端から 20 CSS ピクセルの位置に表示されます。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Getting_started", "Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes") }}
