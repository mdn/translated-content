---
title: "`background-attachment` プロパティ (CSS)"
short-title: background-attachment
slug: Web/CSS/Reference/Properties/background-attachment
l10n:
  sourceCommit: d4dc9d899ebec0e9c22a5bb9229f39f33457d8df
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
background-attachment: fixed, scroll;
```

```css interactive-example-choice
background-attachment: scroll, fixed;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      From there to here<br />
      from here to there,<br />
      Funny things<br />
      Are everywhere.
    </p>
    <p>--Dr. Seuss</p>
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
  font-size: 1.2rem;
  font-weight: bolder;
  overflow: auto;
  padding: 20px;
  color: red;
  text-shadow:
    0 0 0.5rem black,
    0 0 0.5rem black;
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

### 値

このプロパティは、1 つ以上のカンマで区切られたキーワード値で指定します。

- `fixed`
  - : 背景はビューポートに対する相対位置で固定されます。要素がスクロール機構を持っていたとしても、背景画像は要素とともには動きません。設定した場合、{{cssxref("background-origin")}} プロパティは無視されます。
- `local`
  - : 背景は要素の内容に対する相対位置で固定されます。要素がスクロール機構を持っていた場合、背景画像は要素の内容とともにスクロールします。背景画像の描画エリアと配置エリアは、それらを囲む境界ではなく、要素のスクロール可能なエリアを基準にします。
- `scroll`
  - : 背景は要素自身に対する相対位置で固定され、内容と共にスクロールしません。 (要素の境界に対して効果的に張り付きます。)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

#### HTML

順序なしリスト ({{htmlelement("ul")}}) といくつかのリストアイテム ({{htmlelement("li")}}) を設置します。

```html
<ul>
  <li>One fish</li>
  <li>Two fish</li>
  <li>Red fish</li>
  <li>Blue fish</li>
  <li>Black fish</li>
  <li>Blue fish</li>
  <li>Old fish</li>
  <li>New fish.</li>
  <li>This one has a little star.</li>
  <li>This one has a little car.</li>
  <li>Say! What a lot</li>
  <li>Of fish there are.</li>
</ul>
```

#### CSS

{{cssxref("background-image")}} を定義し、`background-attachment` を `fixed` に設定します。{{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("overflow")}} も指定して、要素がスクロールするようにします。

```css
ul {
  background-image: url("star-solid.gif");
  background-attachment: fixed;

  width: 300px;
  height: 70px;
  overflow: scroll;
}
```

#### 結果

{{EmbedLiveSample("基本的な例")}}

Note how the background remains fixed relative to the list's viewport when you scroll the overflowing text into view.

### 複数の背景画像

このプロパティは複数の背景画像に対応しており、それぞれの背景画像に異なる `<attachment>` をカンマ区切りで指定できます。それぞれの画像には先頭から順番に `<attachment>` の値が適用されます。

#### HTML

Dr. Seuss の詩をすべて入れます。

```html
<div>
  <ul>
    <li>One fish</li>
    <li>Two fish</li>
    <li>Red fish</li>
    <li>Blue fish</li>
    <li>Black fish</li>
    <li>Blue fish</li>
    <li>Old fish</li>
    <li>New fish.</li>
    <li>This one has a little star.</li>
    <li>This one has a little car.</li>
    <li>Say! What a lot</li>
    <li>Of fish there are.</li>
    <li>Yes. Some are red. And some are blue.</li>
    <li>Some are old. And some are new.</li>
    <li>Some are sad.</li>
    <li>And some are glad.</li>
    <li>And some are very, very bad.</li>
    <li>Why are they</li>
    <li>Sad and glad and bad?</li>
    <li>I do not know.</li>
    <li>Go ask your dad.</li>
    <li>Some are thin.</li>
    <li>And some are fat.</li>
    <li>The fat one has</li>
    <li>A yellow hat.</li>
    <li>From there to here, from here to there,</li>
    <li>Funny things</li>
    <li>Are everywhere.</li>
  </ul>
  <p>--Dr. Seuss</p>
</div>
```

#### CSS

{{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("overflow")}} を親の {{htmlelement("div")}} に指定して、コンテンツが確実にスクロールするようにします。

リスト上で、カンマ区切りで 2 つの背景画像を定義し、`background-attachment` を `fixed, scroll` に設定します。これは、1 つ目の背景画像が `fixed` になり、2 つ目が `scroll` になることを意味します。また、{{cssxref("background-repeat")}} を設定して両方の背景画像を垂直方向に繰り返し表示させ、{{cssxref("background-position")}} プロパティを使ってそれらを別個のものとします。

```css
div {
  width: 300px;
  height: 200px;
  overflow: scroll;
}
ul {
  background-image: url("star-solid.gif"), url("star-transparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: repeat-y;
  background-position:
    0 0,
    100px 0;
}
```

#### 結果

{{EmbedLiveSample("複数の背景画像")}}

最初の背景画像はビューポートに対して固定されているのに対し、2 つ目の背景画像はリストに対して相対的に固定されている点に注目してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS のその他の {{cssxref("background")}} プロパティ:
  - {{cssxref("background-clip")}}
  - {{cssxref("background-color")}}
  - {{cssxref("background-image")}}
  - {{cssxref("background-origin")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-repeat")}}
  - {{cssxref("background-size")}}
- [複数の背景画像の利用](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
