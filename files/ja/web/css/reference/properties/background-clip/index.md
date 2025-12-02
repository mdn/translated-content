---
title: background-clip
slug: Web/CSS/Reference/Properties/background-clip
original_slug: Web/CSS/background-clip
l10n:
  sourceCommit: 7cee2a2b7ce3a968bc09f2d9cc3b012befa146c6
---

**`background-clip`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の背景を境界ボックス、パディングボックス、コンテンツボックスのどれまで拡張するかを設定します。

{{InteractiveExample("CSS デモ: background-clip")}}

```css interactive-example-choice
background-clip: border-box;
```

```css interactive-example-choice
background-clip: padding-box;
```

```css interactive-example-choice
background-clip: content-box;
```

```css interactive-example-choice
background-clip: text;
color: transparent;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is the content of the element.</div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/leopard.jpg");
  color: #d73611;
  text-shadow: 2px 2px black;
  padding: 20px;
  border: 10px dashed #333;
  font-size: 2em;
  font-weight: bold;
}
```

背景は常に境界線の背後に描画されるため、 `background-clip: border-box` は、境界線が部分的に透明であるか、透明または半透明な領域がある場合にのみ視覚的な効果があります。また、 `background-clip: text` プロパティは、テキストが透明または半透明な場合、視覚的な効果はほとんどありません。

> [!NOTE]
> [ルート要素](/ja/docs/Web/HTML/Reference/Elements/html)は異なる背景の描画領域を持っているため、その要素に `background-clip` プロパティが指定されても効果はありません。「[特殊要素の背景](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)」を参照してください。

> [!NOTE]
> [ルート要素](/ja/docs/Web/HTML/Reference/Elements/html)が HTML 要素である文書の場合、ルート要素上の {{cssxref("background-image")}} の計算値が `none` であり、その {{cssxref("background-color")}} が `transparent` であると、ユーザーエージェントは代わりに、 `background` プロパティの計算値をその要素の HTML の {{HTMLElement("body")}} の子要素から伝搬させなければなりません。その `<body>` 要素の `background` プロパティの使用値はその初期値であり、伝搬された値は、それらがルート要素上で指定されたかのように扱われます。 HTML 文書を作成するときは、 HTML 要素ではなく、 `<body>` 要素にキャンバスの背景を指定することを推奨します。

## 構文

```css
/* キーワード値 */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;
background-clip: border-area;

/* グローバル値 */
background-clip: inherit;
background-clip: initial;
background-clip: revert;
background-clip: revert-layer;
background-clip: unset;
```

### 値

- `border-box`
  - : 背景を境界の外側の辺まで拡張します (但し、境界の下に重ね合わせられます)。
- `padding-box`
  - : 背景をパディングの外側の辺まで拡張します。境界の下には背景が描かれません。
- `content-box`
  - : 背景をコンテンツボックスの中に (切り取って) 表示します。
- `text`
  - : 背景を前景のテキストの中に (切り取って) 表示します。
- `border-area`
  - : 背景は、境界線によって描かれた領域内に描かれ（切り取られ）、 {{Cssxref("border-width")}} と {{Cssxref("border-style")}} が考慮されますが、 {{Cssxref("border-color")}} によって導入された透過率は無視されます。

## アクセシビリティ

`background-clip: text` を使用する際には、背景色とその上に配置されたテキストの色のコントラスト比が、弱視の人がページの内容を読むことができる程度に高いことを確認してください。

背景画像が読み込まれないと、テキストが読めなくなることがあります。これを防ぐために、代替の {{cssxref("background-color")}} を追加し、画像なしでテストしてください。

{{cssxref("@supports")}} で機能クエリーの使用し、`background-clip: text` に対応しているかどうかをテストして、対応していない場合はアクセス可能な代替手段を提供することを検討してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html-nolint live-sample___examples
<p class="border-box">背景が境界の裏まで拡張されます。</p>
<p class="padding-box">
  背景が境界の内側の縁まで拡張されます。
</p>
<p class="content-box">
  背景がコンテンツボックスの縁までだしか表示されません。
</p>
<p class="text">背景が前景のテキストで切り取られます。</p>
<p class="border-area">
  背景は境界線によって描かれた領域で切り取られます。
</p>
```

### CSS

```css live-sample___examples
p {
  border: 0.8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;
}

.border-box {
  background-clip: border-box;
}
.padding-box {
  background-clip: padding-box;
}
.content-box {
  background-clip: content-box;
}

.text {
  background-clip: text;
  color: rgb(0 0 0 / 20%);
}

.border-area {
  background-clip: border-area;
  border-color: transparent;
}
```

#### 結果

{{EmbedLiveSample('Examples', 600, 630)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("clip-path")}} プロパティは*要素全体*を表示する部分を定義するクリッピング領域を作成します。
- 背景のプロパティ: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}
- [CSS ボックスモデルの紹介](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
