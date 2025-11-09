---
title: 機能クエリーの使用
slug: Web/CSS/Guides/Conditional_rules/Using_feature_queries
original_slug: Web/CSS/CSS_conditional_rules/Using_feature_queries
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

**機能クエリー** は、ユーザーエージェントが CSS プロパティやプロパティ値など、1 つ以上の CSS 機能に対応しているかどうかを検査する条件付きグループルールです。機能クエリーは、ウェブ開発者にある機能に対応しているかどうかを検査し、その検査結果に基づいて実行する CSS を提供する方法を提供します。このガイドでは、機能クエリーを使用してプログレッシブエンハンスメントを実装する方法を学びます。

機能クエリーは、 CSS の [`@supports`](/ja/docs/Web/CSS/Reference/At-rules/@supports) アットルール（または [`@import`](/ja/docs/Web/CSS/Reference/At-rules/@import) アットルール内の `supports()` 関数）を使用して作成されます。

## 構文

CSS の機能クエリーは [CSS 条件付きルール](/ja/docs/Web/CSS/Guides/Conditional_rules)モジュールの一部で、ここにはメディアクエリーの [`@media`](/ja/docs/Web/CSS/Reference/At-rules/@media) アットルールも含まれてます。機能クエリーは、[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)と同様に動作します。違いは、メディアクエリーではウェブページが動作している環境について何かを検査するのに対し、機能クエリーでは CSS 機能に対するブラウザーの対応状況を検査する点です。

機能クエリーは、`@supports` アットルールと、その後に続く対応条件、または `@import` アットルール宣言内の `supports()` 関数と宣言引数で構成されます。

```css
/* `@supports` アットルール */
@supports <support-condition> {
  /* 適用する CSS ルール */
}

/* `supports()` 関数 */
@import url_to_import supports(<declaration>);
```

例えば、ユーザーエージェントが CSS の {{cssxref("color")}} プロパティの有効な値として `red` に対応している場合、一連のスタイルを適用したり、スタイルシート全体をインポートしたりすることができます。

```css
/* `@supports` アットルール */
@supports (color: red) {
  /* 適用する CSS ルール */
}

/* `supports()` 関数 */
@import "/css/styles.css" supports(color: red);
```

別の例として、ブラウザーが `row-gap` プロパティに対応しているかどうかを確認したい場合は、次の特性クエリを記述します。多くの場合、どの値を使用しても問題はありません。ブラウザーがこのプロパティに対応しているかどうかを確認したいだけなら、有効な値であればどれでもかまいません。

```html-nolint live-sample___simple
<div class="box">
  ブラウザーが row-gap プロパティに対応している場合、境界線は破線になり、テキストは赤になります。
</div>
```

```css live-sample___simple
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports (row-gap: 10px) {
  .box {
    border: 4px dashed darkgreen;
    color: red;
  }
}
```

{{EmbedLiveSample("simple")}}

プロパティと値のペアの値の部分は、特定のプロパティの新しい値をテストする場合に重要になります。すべてのブラウザーは `color: red` に対応しています。これは CSS1 にさかのぼります。ただし、CSS では、[相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)など、対応していない追加の値がプロパティに追加される場合がよくあります。機能クエリーを使うと、プロパティと値のペアを検査することができます。つまり、値の対応を検出することができるということです。

上記の `color` プロパティの例をさらに発展させて、ブラウザーが `color： AccentColor` 宣言に対応しているかどうかを調べます。

```css
/* `@supports` アットルール */
@supports (color: AccentColor) {
  /* 適用する CSS ルール */
}

/* `supports()` 関数 */
@import "/css/styles.css" supports(color: AccentColor);
```

これらの例では、ユーザーエージェントが CSS プロパティの特定の値に対応しているかどうかを調べるために、括弧内に単一の宣言を記載して機能クエリーを使用しています。複数のプロパティ値やサポートの有無をテストすることができます。

## 対応がないことを検査

ブラウザーが機能に対応しているかどうかを尋ねる場合のほか、 `not` キーワードを追加することで逆の検査を行うことができます。

```css
/* `@supports` アットルールに `not` をつけたもの */
@supports not (property: value) {
  /* 適用する CSS ルール */
}
```

以下の例の機能クエリー内の CSS は、ブラウザーが `row-gap` に対応していない場合に実行されます。

```html-nolint live-sample___not
<div class="box">
  ブラウザーが row-gap に対応していない場合、コンテンツは濃い緑色で、境界線が破線になります。
</div>
```

```css live-sample___not
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports not (row-gap: 10px) {
  .box {
    border: 4px dashed darkgreen;
    color: darkgreen;
  }
}
```

{{EmbedLiveSample("not")}}

## 複数の機能を検査

機能クエリーで、複数のプロパティに対応していることを検査必要がある場合があります。そのような場合は、`and` キーワードで区切って、検査する機能の一覧を記述します。

```css
/* 複数の機能をもつ `@supports` アットルール */
@supports (property1: value) and (property2: value) {
  /* 適用する CSS ルール */
}
```

例えば、実行したい CSS が、ブラウザーが CSS シェイプと CSS グリッドに対応していることを必要とする場合、この 2 つを検査するルールを作成することができます。次のルールは、ブラウザーが `shape-outside: circle()` と `display: grid` の両方に対応している場合にのみ true を返します。

```html-nolint live-sample___and
<div class="box">
  ブラウザーが <code>display: grid</code> および <code>shape-outside: circle()</code> に対応していた場合、コンテンツは濃い緑色で、境界線が破線になります。
</div>
```

```css live-sample___and
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports (display: grid) and (shape-outside: circle()) {
  .box {
    border: 4px dashed darkgreen;
    color: darkgreen;
  }
}
```

{{EmbedLiveSample("and")}}

## 複数の機能の少なくとも 1 つを検査

1 つ以上の宣言が対応している場合にのみ CSS を適用するには、`or` を使用することもできます。

```css
/* いずれかの機能の `@supports` アットルール */
@supports (property1: value) or (property2: value) {
  /* 適用する CSS ルール */
}
```

これは、ある機能がベンダー接頭辞付きである場合に特に有用で、標準のプロパティとベンダー接頭辞を加えたものを検査することができます。

```html-nolint live-sample___or
<div class="box">
  ブラウザーがフォントの平滑化に対応している場合、テキストと境界線は緑色になります。
</div>
```

```css live-sample___or
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 4px solid blue;
  color: blue;
  padding: 1em;
}
@supports (font-smooth: always) or (-webkit-font-smoothing: antialiased) {
  .box {
    border: 4px dashed darkgreen;
    color: darkgreen;
  }
}
```

{{EmbedLiveSample("or")}}

## その他の機能クエリーのオプション

機能クエリーは、プロパティと値のペアに制限されません。機能クエリーに [`font-tech()`](/ja/docs/Web/CSS/Reference/At-rules/@supports#font-tech)、[`font-format()`](/ja/docs/Web/CSS/Reference/At-rules/@supports#font-format)、[`selector()`](/ja/docs/Web/CSS/Reference/At-rules/@supports#function_syntax) 関数を含めることで、それぞれユーザーエージェントが指定したフォント技術、フォント形式、セレクター構文に対応しているかどうかによって、 CSS を選択的に適用することができます。

例えば、`selector()` 関数を使用すると、ベンダー接頭辞が付いた擬似要素に対応するブラウザー用にスタイルシートをインポートすることができます。

```css
/* `selector()` を `supports()` 関数内で使用 */
@import `/css/webkitShadowStyles.css`
  supports(selector(::-webkit-inner-spin-button));
```

## 例

### ブラウザーの対応検査

この例では、ブラウザーが `AccentColor` {{cssxref("system-color")}} に対応しているかどうかを調べ、対応している場合は `display: none` を使用して、既定の「対応していません」というメッセージを「対応しています」というメッセージに変更します。

#### HTML

```html-nolint
<p class="accentcolor">
  Your browser does <span>not</span> support <code>AccentColor</code> as a color
  value.
</p>
```

#### CSS

```css
body {
  font: 1.2em / 1.5 sans-serif;
}
p {
  padding: 1em;
}
@supports (color: AccentColor) {
  p {
    color: green;
    border: 2px solid;
  }
  span {
    display: none;
  }
}
@supports not (color: AccentColor) {
  p {
    color: red;
  }
}
```

#### 結果

{{EmbedLiveSample("Browser support test")}}

## 機能クエリーの制限

`@support` ルールは、ブラウザーが 1 つ以上のプロパティと値の組を解釈できるかどうか、つまり、その機能に対応していると主張するかどうかを確認するために使用します。もしブラウザーがそのプロパティと値のペアを理解できれば、肯定的な応答を返します。したがって、ブラウザーがある機能に正しく、バグなく対応しているかどうかを確認するために、機能クエリーを使用することはできないのです。機能クエリーはは「部分的な実装」を検査することもできません。

## まとめ

機能クエリーは、サイトを段階的に強化するための便利なツールです。これにより、すべてのブラウザーに良いソリューションを提供し、新しいプロパティや値に対応するブラウザーには強化されたソリューションを提供することができます。

新しい CSS 機能を使用するために、機能クエリーを使用する必要はありません。CSS エラー処理により、ブラウザーは認識できない CSS を単に無視するだけです。ただし、機能クエリーは代替宣言の便利な代替手段であり、最終的にはどこでも対応するコードを一度だけ記述することができます。

## 関連情報

- [CSS 条件付きルール](/ja/docs/Web/CSS/Guides/Conditional_rules)モジュール
- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [古いブラウザーの対応: 機能クエリー](/ja/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers#機能クエリー)
- [ブラウザーの機能検出: CSS `@supports`](/ja/docs/Learn_web_development/Extensions/Testing/Feature_detection#supports)
