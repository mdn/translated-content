---
title: d
slug: Web/CSS/Reference/Properties/d
original_slug: Web/CSS/d
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`d`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 SVG の {{SVGElement("path")}} 要素が描画するパスを定義します。存在すれば、要素の {{SVGAttr("d")}} 属性よりも優先されます。

> [!NOTE]
> `d` プロパティは、 {{SVGElement("svg")}} 内にある {{SVGElement("path")}} 要素にのみ適用されます。その他の SVG 要素や HTML 要素、擬似要素には適用されません。

## 構文

```css
/* 既定 */
d: none;

/* 基本的な使用 */
d: path("m 5,5 h 35 L 20,30 z");
d: path("M 0,25 l 50,150 l 200,50 z");
d: path("M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z");

/* グローバル値 */
d: inherit;
d: initial;
d: revert;
d: revert-layer;
d: unset;
```

### 値

値は {{cssxref("basic-shape/path", "path()")}} 関数に単一の {{cssxref("&lt;string&gt;")}} 引数を付けたものか、キーワード `none` のどちらかです。

- `none`
  - : パスは描画されません。
- `path(<string>)`
  - : `path()` 関数に引用符付きの[データ文字列](/ja/docs/Web/SVG/Reference/Attribute/d)の引数が付きます。データ文字列は [SVG パス](/ja/docs/Web/SVG/Reference/Element/path)を定義します。 SVG パスのデータ文字列には、[パスコマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)が入り、暗黙でピクセル単位を使用します。からのパスは無効とみなされます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### パスデータの指定

この例は `d` の基本的な用途を示しており、CSS の `d` プロパティが `d` 属性よりもどのように優先されるかを示しています。

#### HTML

2 つの等しい `<path>` 要素が SVG にあります。それぞれの `d` 属性の値は `"m 5,5 h 90 v 90 h -90 v -90 z"` であり、 `90px` 角の正方形を生成します。

```html
<svg>
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
</svg>
```

#### CSS

CSS ではそれぞれのパスに、黒い {{cssxref("stroke")}} と半透明の赤の {{cssxref("fill")}} を設定します。それから `d` プロパティを使用して、後者のパスのみ SVG の {{SVGAttr("d")}} 属性を上書きします。ブラウザーは既定で `300px` の幅、 `150px` の高さの SVG 画像を描画します。

```css
svg {
  border: 1px solid;
}

path {
  fill: #f338;
  stroke: #000;
}

path:last-of-type {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z"
  );
}
```

#### 結果

{{EmbedLiveSample("Specifying path data", "300", "180")}}

2 つ目の `<path>` は、 CSS の `d` プロパティの `path()` 関数値で定義されたとおり、ハートになります。スタイル設定されていない方の `<path>` のパスは、 SVG の `d` 属性値で定義されている通り正方形です。

### データパスのアニメーション

この例では、 `d` 属性値のアニメーションをデモします。

#### HTML

単一の `<path>` 要素の入った `<svg>` を作成します。

```html
<svg>
  <path />
</svg>
```

#### CSS

`d` 属性を使って、斜線を引いたハートを定義します。 CSS を使用して、そのパスの {{cssxref("fill")}}、{{cssxref("stroke")}}、{{cssxref("stroke-width")}} を定義し、 2 秒間の {{cssxref("transition")}} を追加します。 {{cssxref(":hover")}} スタイルを追加し、少し異なる {{cssxref("basic-shape/path", "path()")}} 関数を使用します。パスには、既定の状態と同じ数のデータポイントがあり、パスをアニメーション可能にします。

```css
svg {
  border: 1px solid;
}

path {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M90,5 L5,90"
  );
  transition: all 2s;
  fill: none;
  stroke: red;
  stroke-width: 3px;
}

svg:hover path {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90"
  );
  stroke: black;
}
```

#### 結果

{{EmbedLiveSample("Animating data paths", "300", "180")}}

アニメーションを見るには、 SVG 上にポインターを移動してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGAttr("d")}} 属性
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("basic-shape/path", "path()")}} 関数
- {{cssxref("basic-shape")}} データ型
- [CSS 図形の概要](/ja/docs/Web/CSS/Guides/Shapes/Overview)
- [CSS 図形](/ja/docs/Web/CSS/Guides/Shapes)モジュール
