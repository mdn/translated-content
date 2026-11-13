---
title: shape-outside
slug: Web/CSS/Reference/Properties/shape-outside
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`shape-outside`** は [CSS](/ja/docs/Web/CSS) のプロパティで、隣接するインラインコンテンツが折り返すシェイプ (形状) を定義します（矩形でない場合もあります）。デフォルトでは、インラインコンテンツはマージンボックスを回り込みます。`shape-outside` によって、この回り込みをカスタマイズし、テキストが単純なボックスではなく複雑なオブジェクトの周りを回り込めるようにします。

{{InteractiveExample("CSS デモ: shape-outside")}}

```css interactive-example-choice
shape-outside: circle(50%);
```

```css interactive-example-choice
shape-outside: ellipse(130px 140px at 20% 20%);
```

```css interactive-example-choice
shape-outside: url("/shared-assets/images/examples/round-balloon.png");
```

```css interactive-example-choice
shape-outside: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
```

```html-nolint interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <img
      class="transition-all"
      id="example-element"
      src="/shared-assets/images/examples/round-balloon.png"
      width="150" />
    私と同行者は、夕食後、遅くとも 11 時までに彼の家に迎えにいくことで合意していた。この運動神経抜群の若いフランス人は、気球乗りを趣味とするパリのスポーツ愛好家たちの小さなグループに属している。通常のスポーツで得られるあらゆる感覚、猛スピードでの「自動車運転」のスリルさえも尽くした後、「エアロクラブ」のメンバーたちは今や空へと目を向け、あらゆる種類の危険な技に興じながら、地上ではもはや探せなくなった神経をすり減らすような興奮を求めている。
  </div>
</section>
```

```css interactive-example
.example-container {
  text-align: left;
  padding: 20px;
}

#example-element {
  float: left;
  width: 150px;
  margin: 20px;
}
```

## 構文

```css
/* キーワード値 */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* 関数値 */
shape-outside: circle();
shape-outside: ellipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);

/* 基本シェイプでのシェイプボックス */
shape-outside: circle() border-box;
shape-outside: margin-box ellipse();

/* <url> 値 */
shape-outside: url("image.png");

/* <gradient> 値 */
shape-outside: linear-gradient(45deg, white 150px, red 150px);

/* グローバル値 */
shape-outside: inherit;
shape-outside: initial;
shape-outside: revert;
shape-outside: revert-layer;
shape-outside: unset;
```

`shape-outside` プロパティは、*浮動領域*と*浮動要素*を表す以下に挙げた値を使用して指定します。浮動領域はインラインコンテンツ (浮動要素) が囲む形状を指定します。

### 値

- `none`
  - : 浮動領域は影響を受けません。インラインコンテンツは通常通り、要素のマージンボックスを回り込みます。
- `<shape-box>`
  - : 浮動領域は浮動要素の辺の形状に従って ([CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction) で定義された通りに) 計算されます。これは`margin-box`、`border-box`、`padding-box`、`content-box` の何れかになります。この形状は {{cssxref("border-radius")}} プロパティで生成された丸い角も含みます ({{cssxref("background-clip")}} と同様の動作です)。
    - `margin-box`
      - : マージンの外側の縁で囲まれた形状を定義します。この形状の角の半径は、対応する {{cssxref("border-radius")}} および {{cssxref("margin")}} の値で決定されます。 `border-radius / margin` の比率が `1` 以上の場合、マージンの角の半径は `border-radius + margin` です。この比率が `1` 未満の場合、マージンの角の半径は `border-radius + (margin * (1 + (ratio - 1) ^ 3))` となります。
    - `border-box`
      - : 境界の外側の縁で囲まれた形状を定義します。この形状は、境界の外側の形状における通常のルールに従います。
    - `padding-box`
      - : パディングの外側の縁で囲まれた形状を定義します。この形状は、境界の内側の形状における通常のルールに従います。
    - `content-box`
      - : コンテンツの外側の縁で囲まれた形状を定義します。このボックスのそれぞれの角の半径は、 `0` と `border-radius - border-width - padding` の大きい方になります。

- {{cssxref("basic-shape")}}
  - : 浮動領域は、{{cssxref("basic-shape/inset","inset()")}}、{{cssxref("basic-shape/circle","circle()")}}、{{cssxref("basic-shape/ellipse","ellipse()")}}、{{cssxref("basic-shape/polygon","polygon()")}} のいずれかの関数によって生成された形状に基づいて計算されます。`<shape-box>` も提供された場合は、`<basic-shape>` 関数の参照ボックスを定義します。それ以外の場合、参照ボックスはデフォルトで `margin-box` になります。
- {{cssxref("image")}}
  - : 浮動領域は指定された {{cssxref("image")}} のアルファチャンネルに基づいて、 {{cssxref("shape-image-threshold")}} で定義されたように抽出され計算されます。

> [!NOTE]
> 画像が不正な場合、キーワード `none` が指定された場合と同様の効果が生じます。さらに、画像を使用することができる {{Glossary("CORS")}} ヘッダーと共に提供されなければなりません。

## 公式定義

{{CSSInfo}}

## 形式定義

{{csssyntax}}

## 例

### 漏斗状のテキスト

#### HTML

```html-nolint
<div class="main">
  <div class="left"></div>
  <div class="right"></div>
  <p>
    ウェブページのテキストコンテンツが、特定のリンクをクリックさせるために、ページ上のある一点へ注意を誘導するように現れることがあります。気づかない場合もあります。
  </p>
</div>
```

#### CSS

```css
.main {
  width: 530px;
}

.left,
.right {
  background-color: lightgray;
  height: 12ex;
  width: 40%;
}

.left {
  clip-path: polygon(0 0, 100% 100%, 0 100%);
  float: left;
  shape-outside: polygon(0 0, 100% 100%, 0 100%);
}

.right {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
}

p {
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample("funneling_text", "100%", 130)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS シェイプ](/ja/docs/Web/CSS/Guides/Shapes)
- [CSS シェイプの概要](/ja/docs/Web/CSS/Guides/Shapes/Overview)
- {{cssxref("basic-shape")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-image-threshold")}}
