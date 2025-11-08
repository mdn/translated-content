---
title: font-palette
slug: Web/CSS/Reference/Properties/font-palette
original_slug: Web/CSS/font-palette
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

**`font-palette`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ユーザーエージェントがフォントに使用できる[カラーフォント](https://www.colorfonts.wtf/)に含まれる多くのパレットの一つを指定できます。ユーザーは、 [`@font-palette-values`](/ja/docs/Web/CSS/Reference/At-rules/@font-palette-values) アットルールを使って、パレットの値を上書きしたり、新しいパレットを作成したりすることもできます。

> [!NOTE]
> `font-palette` はフォントに色を付けるときに優先されます。 {{cssxref("color")}} プロパティは、たとえ {{cssxref("important", "!important")}} が指定されていても、フォントパレットを上書きすることはありません。

## 構文

```css
/* フォントが定義したパレットを使用 */
font-palette: normal;

/* ユーザーが定義したパレットを使用 */
font-palette: --one;

/* 2 色を混合した新しいパレットを作成 */
font-palette: palette-mix(in lch, --blue, --yellow);
```

### 値

- `normal`
  - : フォントに使用する既定色パレットまたは既定の字体着色（フォントメーカーが設定する）を指定します。この設定では、インデックス 0 のフォント内のパレットがレンダリングされます。
- `light`
  - : フォントの中で 'light' に一致する最初のパレットを指定します。フォントによっては、明るい（白に近い）背景に適用できるパレットを識別するメタデータを含むものがあります。フォントがこのメタデータを持っていない場合、 `light` の値は `normal` として動作します。
- `dark`
  - : フォントの中で 'dark' に一致する最初のパレットを指定します。フォントによっては、位（黒に近い）背景に適用できるパレットを識別するメタデータを含むものがあります。フォントがこのメタデータを持っていない場合、この値は `normal` として動作します。
- `<palette-identifier>`
  - : [@font-palette-values](/ja/docs/Web/CSS/Reference/At-rules/@font-palette-values) アットルールを使用して、フォントパレットに自分自身で値を指定できるようにします。この値は [&lt;dashed-ident&gt;](/ja/docs/Web/CSS/Reference/Values/dashed-ident) 形式を使用して指定します。
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : 指定したパーセント値と色補間方法で、 2 つのフォントパレット値を混合して新しい `font-palette` 値を作成します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 暗いパレットの指定

この例では、フォントメーカーによって _dark_ （黒に近い背景でうまく動作します）とマークされた最初のパレットを使用することができます。

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### 2 つのパレットの間をアニメーション

この例では、 `font-palette` の値の変化をアニメーション化して、滑らかなフォントアニメーションを作成する方法を示します。

#### HTML

HTML には、アニメーションするテキストの単一の段落があります。

```html
<p>color-palette<br />animation</p>
```

#### CSS

この CSS では、 [Google Fonts](https://fonts.google.com/?coloronly=true) から [Nabla](https://nabla.typearture.com/) という[色フォント](https://www.colorfonts.wtf/)をインポートし、独自の 2 つの `font-palette` 値を {{cssxref("@font-palette-values")}} アットルールを使用して定義しています。そして、この 2 つのパレットの間でアニメーションする {{cssxref("@keyframes")}} を作成し、このアニメーションを段落に適用します。

```css
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");

@font-palette-values --blueNabla {
  font-family: Nabla;
  base-palette: 2; /* Nabla の青色パレット */
}

@font-palette-values --greyNabla {
  font-family: Nabla;
  base-palette: 3; /* Nabla の灰色パレット */
}

@keyframes animate-palette {
  from {
    font-palette: --greyNabla;
  }

  to {
    font-palette: --blueNabla;
  }
}

p {
  font-family: "Nabla";
  font-size: 5rem;
  margin: 0;
  text-align: center;
  animation: animate-palette 4s infinite alternate linear;
}
```

#### 結果

出力結果は次のようになります。

{{EmbedLiveSample("Animating between two palettes", "100%", 300)}}

> [!NOTE]
> まだ `discrete` で `font-palette` アニメーションを実装しているブラウザーは、スムーズにアニメーションするのではなく、 2 つのパレットの間で切り替わります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-palette/palette-mix","palette-mix()")}}
- {{cssxref("@font-palette-values", "@font-palette-values")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} 記述子
- {{cssxref("@font-palette-values/font-family", "font-family")}} 記述子
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} 記述子
