---
title: 寸法指定の論理的プロパティ
slug: Web/CSS/Guides/Logical_properties_and_values/Sizing
original_slug: Web/CSS/CSS_logical_properties_and_values/Sizing
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

このガイドでは、ページ上の要素の寸法の設定に使用する、物理的な方向のプロパティと論理的なプロパティのフローに関連した対応付けを説明します。

アイテムの寸法を指定するときに、[論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュールにより、水平・垂直の物理的な長さ（左や右など）に関連する物理的な寸法ではなく、テキストの流れ（インラインとブロック）に関連した寸法を示すことができます。これらのフローに関連した対応付けは、私たちの大多数にとって普通であることもあるので、デザインでは物理的・論理的の両方の寸法を使用することができます。書字方向がどうであっても物理的な長さに関連した機能が使用したい場合もあるでしょう。

## 長さへの対応付け

以下の表は、論理的なプロパティと物理的なプロパティの対応付けを示しています。この対応付けは、英語やアラビア語のような `horizontal-tb` の書字方向を想定しており、この場合は {{CSSxRef("width")}} が {{CSSxRef("inline-size")}} に対応付けられます。

縦書きモードの場合は、 {{CSSxRef("inline-size")}} は {{CSSxRef("height")}} に対応付けられます。

| 論理的プロパティ               | 物理的プロパティ          |
| ------------------------------ | ------------------------- |
| {{CSSxRef("inline-size")}}     | {{CSSxRef("width")}}      |
| {{CSSxRef("block-size")}}      | {{CSSxRef("height")}}     |
| {{CSSxRef("min-inline-size")}} | {{CSSxRef("min-width")}}  |
| {{CSSxRef("min-block-size")}}  | {{CSSxRef("min-height")}} |
| {{CSSxRef("max-inline-size")}} | {{CSSxRef("max-width")}}  |
| {{CSSxRef("max-block-size")}}  | {{CSSxRef("max-height")}} |

## 幅と高さの例

{{CSSxRef("width")}} と {{CSSxRef("height")}} の論理的な対応付けでは、 {{CSSxRef("inline-size")}} がインライン次元の長さを設定し、 {{CSSxRef("block-size")}} がブロック次元の長さを設定します。英語の場合は、 `width` を `inline-size` で、 `height` を `block-size` で置き換えると同じレイアウトになります。

以下のライブデモでは、書字方向を `horizontal-tb` に設定しました。これを `vertical-rl` に変更すると、最初の例 — `width` と `height` を使用したもの — では、テキストが縦書きになっても、それぞれの方向が同じ寸法になります。 2 番目の例 — `inline-size` と `block-size` を使用したもの — は、ブロック全体が回転したようにテキストの方向に従います。

```html-nolint live-sample___size-inline-block
<div class="container">
  <div class="physical box">これは width が 200px で height が 100px です。</div>

  <div class="logical box">
    これは inline-size が 200px で block-size が 100px です。
  </div>
</div>
```

```css hidden live-sample___size-inline-block
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-inline-block
.box {
  writing-mode: horizontal-tb;
}

.physical {
  width: 200px;
  height: 100px;
}

.logical {
  inline-size: 200px;
  block-size: 100px;
}
```

{{EmbedLiveSample("size-inline-block")}}

## 最小幅と最小高の例

{{CSSxRef("min-width")}} と {{CSSxRef("min-height")}} も、 {{CSSxRef("min-inline-size")}} と {{CSSxRef("min-block-size")}} に対応付けられます。これらは `inline-size` および `block-size` プロパティと同様に動作しますが、固定の寸法ではなく最小寸法を設定します。

最初の例のように、以下の例を `vertical-rl` に変更してみて、その作用を確認してみてください。最初の例では `min-height` を使用しており、二番目の例では `min-block-size` を使用しています。

```html-nolint live-sample___size-min
<div class="container">
  <div class="physical box">
    これは width が 200px で min-height が 5em です。
  </div>

  <div class="logical box">
    これは inline-size が 200px で min-block-size が 5em です。
  </div>
</div>
```

```css hidden live-sample___size-min
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-min
.box {
  writing-mode: horizontal-tb;
}

.physical {
  width: 200px;
  min-height: 5em;
}

.logical {
  inline-size: 200px;
  min-block-size: 5em;
}
```

{{EmbedLiveSample("size-min")}}

## 最大幅と最大高の例

最後に {{CSSxRef("max-inline-size")}} と {{CSSxRef("max-block-size")}} を、 {{CSSxRef("max-width")}} と {{CSSxRef("max-height")}} の論理的な置き換えとして使用することができます。以下の例を前と同様に操作してみてください。

```html-nolint live-sample___size-max
<div class="container">
  <div class="physical box">これは max-width が 200px です。</div>

  <div class="logical box">これは max-inline-size が 200px です。</div>
</div>
```

```css hidden live-sample___size-max
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-max
.box {
  writing-mode: horizontal-tb;
}

.physical {
  max-width: 200px;
}

.logical {
  max-inline-size: 200px;
}
```

{{EmbedLiveSample("size-max")}}

## リサイズの論理キーワード

{{CSSxRef("resize")}} プロパティは、アイテムの大きさが変わるかどうかを物理的な値である `horizontal` および `vertical` で指定します。 `resize` プロパティは論理的なキーワード値にも対応しています。 `resize: inline` を使用すると、インライン次元の大きさが変わることを許可し、 `resize: block` を使用すると、ブロック次元の大きさが変わることを許可します。

`both` のキーワード値は物理的または論理的に考えて動作します。これは両方を同時に設定します。以下の例を実行してみてください。

```html-nolint live-sample___size-resize
<div class="container">
  <div class="physical box">
    これは width が 200px で height が 100px です。水平方向にサイズ変更ができます。
  </div>

  <div class="logical box">
    これは inline-size が 200px で block-size が 100px です。インライン方向にサイズ変更ができます。
  </div>
</div>
```

```css hidden live-sample___size-resize
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-resize
.box {
  writing-mode: horizontal-tb;
  overflow: scroll;
}

.physical {
  width: 200px;
  height: 100px;
  resize: horizontal;
}

.logical {
  inline-size: 200px;
  block-size: 100px;
  resize: inline;
}
```

{{EmbedLiveSample("size-resize")}}
