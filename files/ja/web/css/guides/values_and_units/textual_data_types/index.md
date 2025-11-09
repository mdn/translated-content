---
title: テキストデータ型
slug: Web/CSS/Guides/Values_and_units/Textual_data_types
original_slug: Web/CSS/CSS_values_and_units/Textual_data_types
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

CSS 宣言はすべて、プロパティと値のペアから成っています。値には、単一のキーワード、整数、関数、異なる型の組み合わせなど、プロパティに応じてさまざまなデータ型を含めることがあります。また、値には単位を持つものもあれば、持たないものもあります。このガイドでは、テキストデータ型の概要を説明します。より詳細な情報については、それぞれの値の型のページを参照してください。

テキストデータ型は、引用符で囲まれた文字の並びである {{cssxref("&lt;string&gt;")}} と、引用符で囲まれていない文字列、すなわち「CSS 識別子」である {{cssxref("&lt;ident&gt;")}} と、引用符で囲むこともできる{{cssxref("url_value", "&lt;url&gt;")}} のいずれかです。 `<string>` は単一引用符か二重引用符のどちらかで囲みます。仕様書で `<ident>` または {{cssxref("&lt;custom-ident&gt;")}} として挙げられている CSS 識別子は、引用符で囲んではいけません。

CSS の仕様では、ウェブ開発者が定義できる値には、アニメーションのキーフレームやフォントファミリーの名前、グリッド領域などがあり、これらは {{cssxref("&lt;custom-ident&gt;")}} または {{cssxref("&lt;string&gt;")}}、またはその両方のリストで記述します。

ユーザーが定義するテキスト値のうち、引用符があってもなくてもよい箇所では、仕様書には `<custom-ident> | <string>`のように記してあります。これは、例えばアニメーション名のように、引用符が任意だということです。

```css
@keyframes validIdent {
  /* ここにキーフレーム */
}
@keyframes 'validString' {
  /* ここにキーフレーム */
}
```

引用符で囲んではいけないテキスト値もあります。たとえば {{cssxref("grid-area")}} の値は `<custom-ident>` なので、もし `content` という名前のグリッドエリアがあれば、それは引用符なしで書きます。

```css
.item {
  grid-area: content;
}
```

いっぽう、 {{cssxref("&lt;string&gt;")}} のデータ型、たとえば {{cssxref("content")}} プロパティの文字列値には引用符が必要です。

```css
.item::after {
  content: "これがコンテンツです。";
}
```

一般的には、絵文字を使用するものを含め、どんな名前でも作れますが、識別子については `none`、`unset`、 `initial`、`inherit` とすることはできず、数字や二重ダッシュで始めることもできません。また、一般的に CSS のそのほかの定義済みキーワードを使用することは避けるのが好ましいです。詳しくは {{cssxref("&lt;custom-ident&gt;")}} と {{cssxref("&lt;string&gt;")}} のリファレンスページを参照してください。

## 定義済みキーワード値

定義済みキーワードは、特定のプロパティ用に仕様で定義されているテキスト値です。これらのキーワードは CSS 識別子でもあるので、引用符なしで使用します。

CSS の仕様書や MDN のプロパティページで、CSS プロパティの値の構文を見ると、そこに書けるキーワードは次のような形式で列挙されているでしょう。以下の{{glossary("Enumerated", "列挙値")}}は、{{cssxref("float")}} で使用できる定義済みキーワードです。

```plain
left | right | none | inline-start | inline-end
```

こうした値は引用符なしで使用します。

```css
.box {
  float: left;
}
```

## CSS 全般の値

プロパティ用に仕様で定められている定義済みキーワードのほかに、すべての CSS プロパティで使える CSS 全般のプロパティ値として、{{cssxref("initial")}}、{{cssxref("inherit")}}、{{cssxref("unset")}}、{{cssxref("revert")}}、{{cssxref("revert-layer")}} があります。これらは既定値への戻し方を明示するために使用します。

- {{cssxref("initial")}}
  - : プロパティの初期値として指定された値を表します。
- {{cssxref("inherit")}}
  - : 要素の親から継承されたプロパティの計算値を表します。
- {{cssxref("unset")}}
  - : プロパティが継承されているかどうかによって、 `inherit` または `initial` のどちらかの働きをします。
- {{cssxref("revert")}}
  - : 親から継承している場合は継承した値に、ユーザーエージェントのスタイルシート（またはユーザースタイルが存在する場合はユーザースタイル）で設定された既定値に、プロパティをリセットします。
- {{cssxref("revert-layer")}}
  - : [カスケードレイヤー](/ja/docs/Web/CSS/Reference/At-rules/@layer)のプロパティの値を、前回カスケードレイヤーの要素と一致する CSS ルール内のプロパティの値にロールバックします。このキーワードを使用したプロパティの値は、現在のカスケードレイヤーのターゲット要素にルールが指定されていない場合と同様に再計算されます。

## URL

{{cssxref("url_value", "&lt;url&gt;")}} 型は関数記法を使用し、 URL である `<string>` を受け取ります。これは絶対 URL と相対 URL のどちらでも構いません。例えば、背景画像を記載したい場合は、次のどちらでも使用できます。

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

`url()` の引数は引用符があってもなくてもかまいません。引用符をつけない場合には、`<url-token>` と同様に解釈され、特定の文字のエスケープを行う必要があるなど、独自の要件があります。詳しくは {{cssxref("url_value", "&lt;url&gt;")}} を参照してください。

## 関連情報

- [数値データ型](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- [CSS データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)
- [CSS 値と単位](/ja/docs/Web/CSS/Guides/Values_and_units)モジュール
- [学習: 値と単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS カスケードと警鐘](/ja/docs/Web/CSS/Guides/Cascade)モジュール
