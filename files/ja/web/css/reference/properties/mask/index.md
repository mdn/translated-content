---
title: mask
slug: Web/CSS/Reference/Properties/mask
original_slug: Web/CSS/mask
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**`mask`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、画像の指定した領域をマスクまたはクリップして、要素を（部分的にまたは完全に）非表示にします。これは、すべての `mask-*` プロパティの一括指定です。このプロパティは、カンマで区切られた 1 つ以上の値を受け入れ、各値は `<mask-layer>` に対応します。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("mask-clip")}}
- {{cssxref("mask-composite")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-mode")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}

## 構文

```css
/* キーワード値 */
mask: none;

/* 画像値 */
mask: url(mask.png); /* マスクとして使用されるピクセル画像 */
mask: url(masks.svg#star); /* マスクとして使用される SVG グラフィック内の要素 */

/* 組み合わせ値 */
mask: url(masks.svg#star) luminance; /* 輝度マスクとして使用される SVG グラフィック内の要素 */
mask: url(masks.svg#star) 40px 20px; /* マスクとして使用される 上から 40px、左から 20px の位置に配置されている */
mask: url(masks.svg#star) 0 0/50px 50px; /* 幅と高さが 50px のマスクとして使用される SVG グラフィック内の要素 */
mask: url(masks.svg#star) repeat-x; /* 水平方向に繰り返されるマスクとして使用される SVG グラフィック内の要素 */
mask: url(masks.svg#star) stroke-box; /* ストロークで囲まれたボックスに拡張するマスクとして使用される SVG グラフィック内の要素 */
mask: url(masks.svg#star) exclude; /* SVGグラフィック内の要素をマスクとして使用し、非重複部分を使用して背景と組み合わせる */

/* 複数のマスク */
mask:
  url(masks.svg#star) left / 16px repeat-y,
  /* 幅 16px の左端のマスク */ url(masks.svg#circle) right / 16px repeat-y; /* 幅 16px の右端のマスク */

/* グローバル値 */
mask: inherit;
mask: initial;
mask: revert;
mask: revert-layer;
mask: unset;
```

### 値

- `<mask-layer>`
  - : カンマで区切られた 1 つ以上のマスクレイヤーで、以下の要素で構成されます。
    - `<mask-reference>`
      - : マスク画像のソースを設定します。 {{cssxref("mask-image")}} を参照してください。
    - `<masking-mode>`
      - : マスク画像のマスクモードを設定します。 {{cssxref("mask-mode")}} を参照してください。
    - `<position>`
      - : マスク画像の位置を設定します。 {{cssxref("mask-position")}} を参照してください。
    - `<bg-size>`
      - : マスク画像の大きさを設定します。 {{cssxref("mask-size")}} を参照してください。
    - `<repeat-style>`
      - : マスク画像の反復を設定します。 {{cssxref("mask-repeat")}} を参照してください。
    - `<geometry-box>`
      - : `<geometry-box>` 値が 1 つのみが与えられた場合は、{{cssxref("mask-origin")}} と {{cssxref("mask-clip")}} の両方が設定されます。2 つの `<geometry-box>` 値が存在する場合、1 つ目の値は `mask-origin` を設定し、2 つ目の値は `mask-clip` を設定します。
    - `<geometry-box> | no-clip`
      - : マスク画像の影響を受ける範囲を設定します。 {{cssxref("mask-clip")}} を参照してください。
    - `<compositing-operator>`
      - : 現在のマスクレイヤーに使用する合成操作を設定します。 {{cssxref("mask-composite")}} を参照してください。

## 解説

`mask` 一括指定プロパティは、それが適用される要素の一部またはすべてを非表示にします。非表示、表示、または部分的に表示される要素の部分は、マスクの不透明（マスクのアルファチャンネル）または明るさ（輝度）によって決まります。アルファマスクでは、マスクの不透明な領域は要素を表示し、透明な領域は要素を非表示にします。輝度マスクでは、マスクの明るい不透明な領域は要素を表示し、暗い領域または透明な領域は要素を非表示にします。

マスクを構成するすべてのプロパティを宣言する必要はありませんが、除外した値は、次の初期値に既定で設定されます。

```css
mask-image: none;
mask-mode: match-source;
mask-position: 0% 0%;
mask-size: auto;
mask-repeat: repeat;
mask-origin: border-box;
mask-clip: border-box;
mask-composite: add;
```

それぞれの `<mask-layer>` 内で、`mask-size` 要素は `mask-position` 値の後ろに、 2 つをスラッシュ (`/`) で区切って記述する必要があります。

2 つの `<geometry-box>` 値が存在する場合は、最初の値が `mask-origin` 値、 2 つ目の値が `mask-clip` 値となります。 1 つの `<geometry-box>` 値と `no-clip` キーワードが存在する場合、 `<geometry-box>` は `mask-origin` プロパティの値となります。 `no-clip` は `mask-clip` プロパティにのみ有効であるためです。この場合、2 つの値の順序は関係ありません。 1 つの `<geometry-box>` 値のみが存在する場合（`no-clip` キーワードが指定されていない場合）、この値は `mask-origin` プロパティと `mask-clip` プロパティの両方に使用されます。

`mask` 一括指定は、すべての `mask-border-*` プロパティを `initial` 値にリセットするため、これらのプロパティ、または {{cssxref("mask-border")}} 一括指定を、`mask` 宣言の後で宣言する必要があります。宣言ブロックで `mask` を設定すると、次の設定も暗黙的に適用されます。

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

このため、仕様書では、カスケードで以前に設定されたマスクを上書きするには、個々の要素のプロパティではなく、 `mask` の一括指定プロパティを使用することを推奨しています。これにより、 `mask-border` も確実にリセットされます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 画像のマスク

この例では、 CSS で生成された繰り返し扇形グラデーションをマスクソースとして使用して、画像をマスクしています。比較のために、グラデーションを背景画像としても表示させています。

#### HTML

{{htmlelement("img")}} および空の {{htmlelement("div")}} 要素を設置しています。

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<div></div>
```

#### CSS

同じ {{cssxref("border")}}、{{cssxref("padding")}}、およびサイズを `<img>` と `<div>` の両方に設定します。

```css
img,
div {
  border: 20px dashed rebeccapurple;
  box-sizing: content-box;
  padding: 20px;
  height: 220px;
  width: 220px;
}
```

次に、`<img>` にマスクを適用します。`mask-image` は、{{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} 関数を使用して生成されます。これを、画像の `content-box` の左上隅から繰り返される `100px` × `100px` のグラデーションとして定義します。 2 つの `<geometry-box>` 値が含まれます。最初の値は `mask-origin` を設定し、 2 つ目の値は `mask-clip` プロパティの値を定義します。グラデーションは、透明から単色の `lightgreen` へと変化します。マスクの色ではなく、その透過率が重要であることを示すために、ここでは `lightgreen` を使用しています。

```css
img {
  mask: repeating-radial-gradient(
      circle,
      transparent 0 5px,
      lightgreen 15px 20px
    )
    content-box border-box 0% 0% / 100px 100px repeat;
}
```

最後に、 `<div>` の {{cssxref("background")}} 一括指定プロパティに、 `mask` で使用したのと同じ値を使用します。

```css
div {
  background: repeating-radial-gradient(
      circle,
      transparent 0 5px,
      lightgreen 15px 20px
    )
    content-box border-box 0% 0% / 100px 100px repeat;
}
```

#### 結果

{{EmbedLiveSample("Masking an image", "", "630")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("clip-path")}}
- {{CSSxRef("filter")}}
- [CSS マスク](/ja/docs/Web/CSS/Guides/Masking)モジュール
- SVG の {{SVGAttr("mask")}} 属性
- [SVG 効果の HTML コンテンツへの適用](/ja/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
