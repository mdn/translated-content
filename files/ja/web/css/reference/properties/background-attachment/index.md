---
title: background-attachment
slug: Web/CSS/Reference/Properties/background-attachment
original_slug: Web/CSS/background-attachment
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

**`background-attachment`** は [CSS](/ja/docs/Web/CSS) のプロパティで、背景画像の位置を{{glossary("viewport", "ビューポート")}}の中で固定するか、包含ブロックと一緒にスクロールするかを設定します。

{{InteractiveExample("CSS デモ: background-attachment")}}

```css interactive-example-choice
background-attachment: scroll;
```

```css interactive-example-choice
background-attachment: fixed;
```

```css interactive-example-choice
background-attachment: local;
```

```css interactive-example-choice
background-attachment: local, scroll;
```

```css interactive-example-choice
background-attachment: scroll, local;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill. London. Michaelmas term
    lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall.
    Implacable November weather. As much mud in the streets as if the waters had
    but newly retired from the face of the earth, and it would not be wonderful
    to meet a Megalosaurus, forty feet long or so, waddling like an elephantine
    lizard up Holborn Hill.
  </div>
</section>
```

```css interactive-example
body {
  overflow: scroll;
}

#default-example {
  height: 600px;
}

#example-element {
  max-width: 20rem;
  height: 100%;
  background:
    url("/shared-assets/images/examples/lizard.png") right 3rem top 1rem / 15rem
      no-repeat,
    url("/shared-assets/images/examples/moon.jpg") center / 10rem;
  color: #ff5454;
  font-size: 1.5em;
  font-weight: bold;
  overflow: auto;
  padding: 20px;
  text-shadow:
    0 0 0.6rem #000,
    0 0 0.6rem #000;
}
```

## 構文

```css
/* キーワード値 */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* グローバル値 */
background-attachment: inherit;
background-attachment: initial;
background-attachment: revert;
background-attachment: revert-layer;
background-attachment: unset;
```

`background-attachment` プロパティは、以下に挙げた値のうちの一つで指定します。

### 値

- `fixed`
  - : 背景はビューポートに対する相対位置で固定されます。要素がスクロール機構を持っていたとしても、背景画像は要素とともには動きません。 (これは {{cssxref("background-clip", "background-clip: text", "#values")}} とは両立できません)
- `local`
  - : 背景は要素の内容に対する相対位置で固定されます。要素がスクロール機構を持っていた場合、背景画像は要素の内容とともにスクロールします。背景画像の描画エリアと配置エリアは、それらを囲む境界ではなく、要素のスクロール可能なエリアを基準にします。
- `scroll`
  - : 背景は要素自身に対する相対位置で固定され、内容と共にスクロールしません。 (要素の境界に対して効果的に張り付きます。)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 単純な例

#### HTML

```html live-sample___simple_example
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
</p>
```

#### CSS

```css live-sample___simple_example
p {
  background-image: url("star-solid.gif");
  background-attachment: fixed;
}
```

#### 結果

{{EmbedLiveSample("Simple_example")}}

### 複数の背景画像

このプロパティは複数の背景画像に対応しており、それぞれの背景画像に異なる `<attachment>` をカンマ区切りで指定できます。それぞれの画像には先頭から順番に `<attachment>` の値が適用されます。

#### HTML

```html live-sample___multiple_background_images
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
  Suddenly she came upon a little three-legged table, all made of solid glass;
  there was nothing on it except a tiny golden key, and Alice's first thought
  was that it might belong to one of the doors of the hall; but, alas! either
  the locks were too large, or the key was too small, but at any rate it would
  not open any of them. However, on the second time round, she came upon a low
  curtain she had not noticed before, and behind it was a little door about
  fifteen inches high: she tried the little golden key in the lock, and to her
  great delight it fitted!
</p>
```

#### CSS

```css live-sample___multiple_background_images
p {
  background-image: url("star-solid.gif"), url("star-transparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}
```

#### 結果

{{EmbedLiveSample("Multiple_background_images")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [複数の背景画像を使う](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
