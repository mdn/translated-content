---
title: image-rendering
slug: Web/CSS/Reference/Properties/image-rendering
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`image-rendering`** は [CSS](/ja/docs/Web/CSS) のプロパティで、画像を変倍するアルゴリズムを設定します。このプロパティは要素自身に適用され、他のプロパティで設定されるあらゆる画像、子孫要素に適用されます。

{{InteractiveExample("CSS デモ: image-rendering")}}

```css interactive-example-choice
image-rendering: auto;
```

```css interactive-example-choice
image-rendering: smooth;
```

```css interactive-example-choice
image-rendering: crisp-edges;
```

```css interactive-example-choice
image-rendering: pixelated;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/lizard.png" />
</section>
```

```css interactive-example
#example-element {
  height: 480px;
  object-fit: cover;
}
```

{{Glossary("user agent", "ユーザーエージェント")}}は、ページの作者が自然なサイズとは異なる寸法を指定したとき、画像を変倍します。変倍は、ユーザー操作 (ズーム) によって発生することもあります。例えば、画像の自然なサイズが `100×100px` であって、実際の寸法が `200×200px` (または `50×50px`) であるとき、画像は `image-rendering` で指定されたアルゴリズムを使用して拡大 (または縮小) されます。このプロパティは拡大/縮小されない画像には効果がありません。

## 構文

```css
/* キーワード値 */
image-rendering: auto;
image-rendering: smooth;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* グローバル値 */
image-rendering: inherit;
image-rendering: initial;
image-rendering: revert;
image-rendering: revert-layer;
image-rendering: unset;
```

### 値

- `auto`
  - : 変倍のアルゴリズムはユーザーエージェントに依存します。バージョン 1.9 (Firefox 3.0) 以降では、Gecko は「バイリニア法」(bilinear) による再サンプリングを使用します（高品質）。
- `smooth`
  - : 画像は、画像の外見を最適化するアルゴリズムで変倍されます。具体的には、バイリニア補完などの色の「円滑化」が許容されるアルゴリズムで変倍されます。これは、写真のような画像を想定しています。
- `crisp-edges`
  - : 画像は、「最近傍法」 ("nearest neighbor") などのアルゴリズムで変倍され、画像のコントラストやエッジが維持されます。一般的に、ピクセルアートや行描画などの画像を意図通りに処理することを目的としており、不鮮明になったり色が滑らかになったりすることはありません。
- `pixelated`
  - : 画像は「最近傍法」 ("nearest neighbor") などのアルゴリズムで元の画像サイズの最も近い整数倍に変倍され、その後、滑らかな補間を使用して最終的な希望のサイズに画像が調整されます。これは、拡大解像度が元の整数倍でない場合に、変倍による画質の劣化を発生させることなく、「ピクセル化」された見た目を維持することを意図しています。

> [!NOTE]
> `optimizeQuality` および `optimizeSpeed` の値は、初期の草稿で (SVG の仕様 {{SVGAttr("image-rendering")}} に似たものとして) `smooth` および `pixelated` の同義語として定義されていました。

> [!NOTE]
> [CSS 画像](/ja/docs/Web/CSS/Guides/Images)モジュールは、`high-quality` の値を `image-rendering` プロパティで、高品質の変倍を行うために定義していますが、これはどのブラウザーでも対応していません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 画像の変倍アルゴリズムの設定

この例では、画像が 3 回繰り返され、それぞれに異なる `image-rendering` 値が適用されています。

```html hidden
<div>
  <img
    class="auto"
    alt="緑の葉を背景にした白と黄色の花の小さな写真。画像は表示されるサイズより約 33% 縮小されています。この拡大処理が発生し、画像がぼやけて現れ、オブジェクト間の輪郭が明らかに柔らかくなっています。"
    src="blumen.jpg" />
  <img
    class="smooth"
    alt="前回の画像と同じ写真で、同時に同じだけ拡大処理されています。image-rendering プロパティの smooth 値に対応するブラウザーは、画像を最大化表示で display させます。"
    src="blumen.jpg" />
  <img
    class="pixelated"
    alt="前回の画像と同じ写真で、同時に同じだけ拡大処理されています。 image-rendering プロパティの pixelated 値に対応しているブラウザーは、画像をとてもピクセル化された状態で表示させます。個々のピクセルがはっきりと現れ、縁がはるかに鮮明になって現れます。"
    src="blumen.jpg" />
  <img
    class="crisp-edges"
    alt="前回の画像と同じ写真で、同時に同じだけ拡大処理されています。 image-rendering プロパティの crisp-edges 値に対応しているブラウザーは、画像をとてもピクセル化された状態で表示させます。この例では、 pixelated バージョンと crisp-edges バージョンでは、ほとんど認識できる差がほとんどありません。"
    src="blumen.jpg" />
</div>
```

```css hidden
img {
  height: 200px;
}
```

#### CSS

```css
.auto {
  image-rendering: auto;
}

.smooth {
  image-rendering: smooth;
}

.pixelated {
  image-rendering: pixelated;
}

.crisp-edges {
  image-rendering: crisp-edges;
}
```

#### 結果

{{EmbedLiveSample('Setting_image_scaling_algorithms', 260, 260)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("image-orientation")}}
- {{cssxref("image-resolution")}}
- [CSS 画像](/ja/docs/Web/CSS/Guides/Images)モジュール
- SVG の {{SVGAttr("image-rendering")}} 属性
