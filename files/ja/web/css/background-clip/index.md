---
title: background-clip
slug: Web/CSS/background-clip
tags:
  - CSS
  - CSS 背景
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.background-clip
translation_of: Web/CSS/background-clip
---
{{CSSRef}}

**`background-clip`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の背景を境界ボックス、パディングボックス、コンテンツボックスのどれまで拡張するかを設定します。

{{EmbedInteractiveExample("pages/css/background-clip.html")}}

要素に {{cssxref("background-image")}} または {{cssxref("background-color")}} がない場合、このプロパティは ({{cssxref("border-style")}} または {{cssxref("border-image")}} によって) 境界に透明な領域や部分的に不透明な領域がある場合のみ視覚効果があります。そうでなければ、境界は異なるマスク方法になります。

> **Note:** [ルート要素](/ja/docs/Web/HTML/Element/html)は異なる背景の描画領域を持っているため、その要素に `background-clip` プロパティが指定されても効果はありません。「[特殊要素の背景](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)」を参照してください。

> **Note:** [ルート要素](/ja/docs/Web/HTML/Element/html)が HTML 要素である文書の場合、ルート要素上の {{cssxref("background-image")}} の計算値が `none` であり、その {{cssxref("background-color")}} が `transparent` であると、ユーザーエージェントは代わりに、 `background` プロパティの計算値をその要素の HTML の {{HTMLElement("body")}} の子要素から伝搬させなければなりません。その `<body>` 要素の `background` プロパティの使用値はその初期値であり、伝搬された値は、それらがルート要素上で指定されたかのように扱われます。 HTML 文書を作成するときは、 HTML 要素ではなく、 `<body>` 要素にキャンバスの背景を指定することを推奨します。

## 構文

```css
/* キーワード値 */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

/* グローバル値 */
background-clip: inherit;
background-clip: initial;
background-clip: revert;
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

## アクセシビリティの考慮

`background-clip: text` を使用する際には、背景色とその上に配置されたテキストの色のコントラスト比が、弱視の人がページの内容を読むことができる程度に高いことを確認してください。

背景画像が読み込まれないと、テキストが読めなくなることがあります。これを防ぐために、代替の {{cssxref("background-color")}} を追加し、画像なしでテストしてください。

{{cssxref("@supports")}} で機能クエリの使用し、`background-clip: text` に対応しているかどうかをテストして、対応していない場合はアクセス可能な代替手段を提供することを検討してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<p class="border-box">背景が境界の裏まで拡張されます。</p>
<p class="padding-box">背景が境界の内側の縁まで拡張されます。</p>
<p class="content-box">背景がコンテンツボックスの縁までだけ表示されます。</p>
<p class="text">背景が前景のテキストで切り取られます。</p>
```

### CSS

```css
p {
  border: .8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;
}

.border-box { background-clip: border-box; }
.padding-box { background-clip: padding-box; }
.content-box { background-clip: content-box; }

.text {
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0,0,0,.2);
}
```

#### 結果

{{EmbedLiveSample('Examples', 600, 580)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("clip-path")}} プロパティは*要素全体*を表示する部分を定義するクリッピング領域を作成します。
- 背景のプロパティ: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}
- [CSS ボックスモデルの紹介](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
