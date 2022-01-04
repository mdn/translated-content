---
title: all
slug: Web/CSS/all
tags:
  - CSS
  - CSS カスケードと継承
  - CSS プロパティ
  - リファレンス
  - all
browser-compat: css.properties.all
translation_of: Web/CSS/all
---
{{CSSRef}}

**`all`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Shorthand_properties)プロパティで、要素のすべてのプロパティを ({{cssxref("unicode-bidi")}}、{{cssxref("direction")}}、 [CSS カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties)を除いて) 初期化します。プロパティは初期値または継承値、または他のスタイルシートに由来して指定した値に設定される可能性があります。

{{EmbedInteractiveExample("pages/css/all.html")}}

<h2 id="Syntax" name="Syntax">構文</h2>

```css
/* グローバル値 */
all: initial;
all: inherit;
all: revert;
all: unset;
```

`all` プロパティは、 CSS のグローバルキーワード値のうちの一つで定義します。なお、これらの値は {{cssxref("unicode-bidi")}} および {{cssxref("direction")}} プロパティには影響しません。

### 値

- {{cssxref("initial")}}
  - : その要素のすべてのプロパティを[初期値](/ja/docs/Web/CSS/initial_value)に変更するべきであることを指定します。
- {{cssxref("inherit")}}
  - : その要素のすべてのプロパティを[継承値](/ja/docs/Web/CSS/inheritance)に変更するべきであることを指定します。
- {{cssxref("unset")}}
  - : その要素のすべてのプロパティを、既定値が inherit のものは継承値に、そうでなければ初期値に変更するべきであることを指定します。
- {{cssxref("revert")}}

  - : 宣言が所属するスタイルシートの出所に応じて動作を指定します。

    - [ユーザーエージェントのスタイルシート](/ja/docs/Web/CSS/Cascade#%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%88)
      - : `unset` と同等です。
    - [ユーザーのスタイル](/ja/docs/Web/CSS/Cascade#%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%88)
      - : [カスケード](/ja/docs/Web/CSS/Cascade)をユーザーエージェントレベルまでロールバックし、[指定値](/ja/docs/Web/CSS/specified_value)が、その要素に対して作者レベルまたはユーザーレベルの規則が指定されていないかのように計算されるようにします。
    - [作成者のスタイル](/ja/docs/Web/CSS/Cascade#%E4%BD%9C%E6%88%90%E8%80%85%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%88)
      - : [カスケード](/ja/docs/Web/CSS/Cascade)をユーザーのレベルまでロールバックし、作者レベルの規則が要素に指定されていない場合は、[指定値](/ja/docs/Web/CSS/specified_value)が計算されます。 `revert` の用途では、作者のオリジンはオーバーライドおよびアニメーションのオリジンが含まれます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### HTML

```html
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

### CSS

```css
body {
  font-size: small;
  background-color: #F0F0F0;
  color: blue;
  margin: 0;
  padding: 0;
}

blockquote {
  background-color: skyblue;
  color: red;
}
```

### 結果

#### `all` プロパティなし

```html hidden
<blockquote id="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.
```

```css hidden
body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
```

{{EmbedLiveSample("No_all_property", "200", "125")}}

{{HTMLElement("blockquote")}} は、特定の背景色と文字色と一緒に、ブラウザーの標準スタイルを使用します。これは*ブロック*要素として動作します。これに続くテキストはその下に現れます。

#### `all:unset`

```html hidden
<blockquote id="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.
```

```css hidden
body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
blockquote { all: unset; }
```

{{EmbedLiveSample("allunset", "200", "125")}}

{{HTMLElement("blockquote")}} はブラウザーの標準スタイルを使用しません。*インライン*要素 (初期値) となり、 {{cssxref("background-color")}} は `transparent` (初期値) ですが、 {{cssxref("font-size")}} は `small` (継承値) のままで、かつ {{cssxref("color")}} は `blue` (継承値) になります。

#### `all:initial`

```html hidden
<blockquote id="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.
```

```css hidden
body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
blockquote { all: initial; }
```

{{EmbedLiveSample("allinitial", "200", "125")}}

{{HTMLElement("blockquote")}} はブラウザーの標準スタイルを使用しません。*インライン*要素 (初期値) となり、{{cssxref("background-color")}} は `transparent` (初期値)、{{cssxref("font-size")}} は `normal` (初期値)、 {{cssxref("color")}} は `black` (初期値) になります。

#### `all:inherit`

```html hidden
<blockquote id="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.
```

```css hidden
body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue; color: red; }
blockquote { all: inherit; }
```

{{EmbedLiveSample("allinherit", "200", "125")}}

{{HTMLElement("blockquote")}} はブラウザーの標準スタイルを使用しません。*ブロック*要素 (包含要素である {{HTMLElement("body")}} からの継承値)であり、 {{cssxref("background-color")}} は `#F0F0F0` (継承値)、{{cssxref("font-size")}} は `small` (継承値) {{cssxref("color")}} は `blue` (継承値) です。
</div>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

CSS のグローバルキーワード値: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}
