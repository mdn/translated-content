---
title: グリッドレイアウトでのボックス配置
short-title: グリッドレイアウトで
slug: Web/CSS/Guides/Box_alignment/In_grid_layout
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

[ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュールでは、さまざまなレイアウト方式で配置がどのように働くかを詳述しています。このページでは、 [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)においてボックス配置がどのように働くかを探ります。

このガイドの目的は、CSS グリッドレイアウトとボックス配置として定められた事柄を詳述するためのものですので、ボックス配置の様々なレイアウト方式の間で共通の機能について詳述した、主となる[ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)ガイドを併せてお読みください。

## 基本的な例

[グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)を使用したこの例では、固定幅のトラックをインライン{{glossary("main axis", "主軸")}}にレイアウトした後、{{glossary("grid container", "グリッドコンテナー")}}に余分な空間が残ります。この空間を {{cssxref("justify-content")}} で分配しています。ブロック{{glossary("cross axis", "交差軸")}}では、グリッド領域内のアイテムの配置を {{cssxref("align-items")}} で制御しています。最初のアイテムは、グループに設定された `align-items` の値を、{{cssxref("align-self")}} を `center` に設定することでオーバーライドしています。

```html live-sample___grid-align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />に <br />追加 <br />テキスト</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
```

```css hidden live-sample___grid-align-items
body {
  font-family: sans-serif;
}
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___grid-align-items
.box {
  display: grid;
  grid-template-columns: 120px 120px 120px;
  align-items: start;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("grid-align-items", , 200)}}

## グリッド軸

2 次元のレイアウト手法であるグリッドレイアウトでは、アイテムを配置する軸が常に 2 つあります。これを実現するために、すべてのボックス配置プロパティを利用することができます。

インライン軸は、使用されている書字方向において、文中の単語が走る方向に対応する軸です。したがって、英語やアラビア語のような横書きの言語では、インラインの方向は水平方向になります。縦書きの場合は、インライン軸は縦方向になります。

![インライン軸は水平です。](inline_axis.png)

インライン軸上に配置するには `justify-` で始まるプロパティ、{{cssxref("justify-content")}}、{{cssxref("justify-items")}}、{{cssxref("justify-self")}} を使用します。

ブロック軸は、ブロックがページの下に表示される方向にインライン軸と交差しています。例えば、英語の段落は縦に 1 つずつ表示されます。つまり、これがブロック軸です。

ブロック軸上でものを揃えるには、`align-` で始まるプロパティ、{{cssxref("align-content")}}、{{cssxref("align-items")}}、{{cssxref("align-self")}} を使用します。

![ブロック軸は垂直です。](block_axis.png)

## 自己配置

これらのプロパティは、アイテムが配置されるグリッド領域内での配置を扱います。

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

これらのプロパティは、アイテムが配置されたグリッド領域内に整列させるためのものです。`align-items` および `justify-items` プロパティはグリッドコンテナーに適用され、グループとして `align-self` および `justify-self` プロパティを設定します。つまり、すべてのグリッドアイテムの配置を一度に設定し、異なる配置が必要なアイテムは、個々のグリッドアイテムのルールに `align-self` または `justify-self` プロパティを適用してオーバーライドすることができるのです。

`align-items` および `justify-items` の初期値は `stretch`、`align-self` および `justify-self` の初期値は `auto` であるため、アイテムはグリッド領域全体に広がります。この規則の例外は、アイテムが内在的な{{glossary("aspect ratio","アスペクト比")}}を有する場合です（画像など）。この場合、画像が歪まないよう、アイテムは両方の次元で `start` に配置されます。

## コンテンツの配置

これらのプロパティは、余分な空間を分配する場合に、グリッドのトラックを揃える処理を担当します。

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

このシナリオは、定義したトラックの合計がグリッドコンテナーの幅の合計よりも小さい場合に発生します。

## gap と古い grid-gap プロパティ

これらのプロパティは、グリッドコンテナー内のグリッドアイテムの間隔を定義します。

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

グリッド仕様書は、もとは {{cssxref("row-gap", "grid-row-gap")}}、{{cssxref("column-gap", "grid-column-gap")}}、{{cssxref("gap", "grid-gap")}} の各プロパティの定義がありました。これらはボックス配置仕様書に移され、{{cssxref("row-gap")}}、{{cssxref("column-gap")}}、{{cssxref("gap")}} と改名されました。これによって、他のレイアウト方式でもアイテム間の溝に使用することができるようになりました。

## 関連情報

- [CSS ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュール
- [ボックス配置の概要](/ja/docs/Web/CSS/Guides/Box_alignment/Overview)
- [フレックスボックスのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [段組みレイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [ブロック、絶対位置指定、表レイアウトのボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
- [CSS グリッドレイアウトのアイテム配置](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
