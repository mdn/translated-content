---
title: all
slug: Web/CSS/all
l10n:
  sourceCommit: 9e521726ed1d605756b73a788eaa55498d540821
---

{{CSSRef}}

**`all`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Shorthand_properties)プロパティで、要素のすべてのプロパティを ({{cssxref("unicode-bidi")}}、{{cssxref("direction")}}、 [CSS カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties)を除いて) 初期化します。プロパティは初期値または継承値、または他のカスケードレイヤーまたはスタイルシートに由来して指定した値に設定される可能性があります。

{{EmbedInteractiveExample("pages/css/all.html")}}

## 構成要素のプロパティ

このプロパティは、{{cssxref("unicode-bidi")}}、{{cssxref("direction")}}、[カスタムプロパティ](/ja/docs/Web/CSS/Using_CSS_custom_properties)を除くすべての CSS プロパティの一括指定です。

## 構文

```css
/* グローバル値 */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

`all` プロパティは、 CSS のグローバルキーワード値のうちの一つで定義します。なお、これらの値は {{cssxref("unicode-bidi")}} および {{cssxref("direction")}} プロパティには影響しません。

### 値

- {{cssxref("initial")}}
  - : その要素のすべてのプロパティを[初期値](/ja/docs/Web/CSS/initial_value)に変更するべきであることを指定します。
- {{cssxref("inherit")}}
  - : その要素のすべてのプロパティを[継承値](/ja/docs/Web/CSS/Inheritance)に変更するべきであることを指定します。
- {{cssxref("unset")}}
  - : その要素のすべてのプロパティを、既定値が inherit のものは継承値に、そうでなければ初期値に変更するべきであることを指定します。
- {{cssxref("revert")}}
  - : 宣言が所属するスタイルシートの出所に応じて動作を指定します。
    - [作者オリジン](/ja/docs/Web/CSS/Cascade#%E4%BD%9C%E6%88%90%E8%80%85%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%88)に所属するルールの場合、 `revert` の値で[カスケード](/ja/docs/Web/CSS/Cascade)をユーザーのレベルまでロールバックし、その要素の[指定値](/ja/docs/Web/CSS/specified_value)は、作者レベルのルールが指定されていないかのように計算されます。 `revert` の用途では、作者オリジンはオーバーライドおよびアニメーションのオリジンも含まれます。
    - [ユーザーオリジン](/ja/docs/Web/CSS/Cascade#%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%88)に所属するルールの場合、 `revert` の値で[カスケード](/ja/docs/Web/CSS/Cascade)をユーザーエージェントレベルまでロールバックし、その要素の[指定値](/ja/docs/Web/CSS/specified_value)は、作者レベルまたはユーザーレベルのルールが指定されていないかのように計算されます。
    - [ユーザーエージェントオリジン](/ja/docs/Web/CSS/Cascade#%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%88)では、 `revert` の値は `unset` と同様に動作します。
- {{cssxref("revert-layer")}}
  - : その要素のすべてのプロパティを、直前の[カスケードレイヤー](/ja/docs/Web/CSS/@layer)が存在すれば、そこまでカスケードをロールバックすることを指定します。 他にカスケードレイヤーが存在しない場合、要素のプロパティは、現在のレイヤーに一致するルールが存在する場合はそのルール、または直前の[スタイルオリジン](/ja/docs/Glossary/Style_origin)にロールバックします。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

この例では、 CSS ファイルには親要素である `<body>` 要素のスタイル設定に加えて、 {{HTMLElement("blockquote")}} 要素のスタイル設定が格納されています。結果節の様々な出力は、 `<blockquote>` 要素のスタイル設定が `blockquote` ルール内の `all` プロパティに様々な値が適用されたときに、どのように影響されるかを示しています。

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
  background-color: #f0f0f0;
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

#### A. `all` プロパティなし

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
```

{{EmbedLiveSample("a._no_all_property", "200", "125")}}

これは `blockquote` ルールの中に `all` プロパティが設定されていない場合のシナリオです。 {{HTMLElement("blockquote")}} 要素はブラウザーに既定値のスタイル設定を使用し、マージンを与え、スタイルシートを指定します。また、ブロック要素としても振る舞います。続くテキストはその下にあります。

#### B. `all: initial`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: initial;
}
```

{{EmbedLiveSample("b._all_initial", "200", "125")}}

`blockquote` ルールで `all` プロパティを `initial` に設定すると、{{HTMLElement("blockquote")}} 要素はブラウザー既定のスタイル設定を使用しなくなります。これでインライン要素になり（初期値）、 [`background-color`](/ja/docs/Web/CSS/background-color#公式定義) は `transparent` （初期値）に、 [`font-size`](/ja/docs/Web/CSS/font-size#公式定義) は `medium` に、 [`color`](/ja/docs/Web/CSS/color#公式定義) は `black` （初期値）になります。

#### C. `all: inherit`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: inherit;
}
```

{{EmbedLiveSample("c._all_inherit", "200", "125")}}

この場合、 {{HTMLElement("blockquote")}} 要素はブラウザーの既定のスタイル設定を使用しません。これでブロック要素となり（継承値）、{{cssxref("background-color")}} は `#F0F0F0` （継承値）、 {{cssxref("font-size")}} は `small` （継承値）、 {{cssxref("color")}} は `blue` （継承値）となります。

#### D. `all: unset`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: unset;
}
```

{{EmbedLiveSample("d._all_unset", "200", "125")}}

`blockquote` ルールの `all` プロパティに `unset` 値を用いた場合、 {{HTMLElement("blockquote")}} 要素はブラウザー既定値のスタイル設定を使用しません。なぜなら、 [`background-color`](/ja/docs/Web/CSS/background-color#formal_definition) は継承されないプロパティであり、[`font-size`](/ja/docs/Web/CSS/font-size#formal_definition) と [`color`](/ja/docs/Web/CSS/color#formal_definition) は継承されるプロパティだからです、 `<blockquote>` 要素はこれでインライン要素（初期値）、 {{cssxref("background-color")}} は `transparent` （初期値）となりますが、 {{cssxref("font-size")}} は `small` （継承値）、 {{cssxref("color")}} は `blue` （継承値）のままです。

#### E. `all: revert`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: revert;
}
```

{{EmbedLiveSample("e._all_revert", "200", "125")}}

`blockquote` ルールの `all` プロパティに `revert` が設定されている場合、`blockquote` ルールは存在しないとみなされ、スタイル設定のプロパティ値は親要素 `<body>` に適用されている値が継承されます。つまり、 `<blockquote>` 要素はブロック要素となり、 {{cssxref("background-color")}} は `#F0F0F0`、{{cssxref("font-size")}} は `small`、{{cssxref("color")}} は `blue` でスタイル設定されます。これらはすべて `body` ルールから継承された値です。

#### F. `all: revert-layer`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
  all: revert-layer;
}
```

{{EmbedLiveSample("f._all_revert-layer", "200", "125")}}

この CSS ファイルにはカスケードレイヤーが定義されていないので、 `<blockquote>` 要素は対応する `body` ルールからスタイルを継承します。ここでの `<blockquote>` 要素はブロック要素としてスタイル設定されており、 {{cssxref("background-color")}} が `F0F0F0` に、 {{cssxref("font-size")}} が `small` に、 {{cssxref("color")}} が `blue` に設定されます。 - すべて `body` ルールから継承された値です。このシナリオでは、`all` を `revert-layer` に設定しても、`all` を `revert` に設定した場合と同じ動作をします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

CSS のグローバルキーワード値: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}
