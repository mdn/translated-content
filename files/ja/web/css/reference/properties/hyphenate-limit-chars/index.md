---
title: "`hyphenate-limit-chars` プロパティ"
short-title: hyphenate-limit-chars
slug: Web/CSS/Reference/Properties/hyphenate-limit-chars
l10n:
  sourceCommit: 2f5d0e19eb706f36f837b84855f581f4bd087d15
---

**`hyphenate-limit-chars`** は [CSS](/ja/docs/Web/CSS) のプロパティで、単語のハイフネーションを許可する単語の最小の長さ、およびハイフンの前後の最小文字数を指定します。

## 構文

```css
/* 数値 */
hyphenate-limit-chars: 10 4 4;
hyphenate-limit-chars: 10 4;
hyphenate-limit-chars: 10;

/* キーワード値 */
hyphenate-limit-chars: auto auto auto;
hyphenate-limit-chars: auto auto;
hyphenate-limit-chars: auto;

/* 数値とキーワード値の混合 */
hyphenate-limit-chars: 10 auto 4;
hyphenate-limit-chars: 10 auto;
hyphenate-limit-chars: auto 3;

/* グローバル値 */
hyphenate-limit-chars: inherit;
hyphenate-limit-chars: initial;
hyphenate-limit-chars: revert;
hyphenate-limit-chars: revert-layer;
hyphenate-limit-chars: unset;
```

### 値

このプロパティには、次の一覧から 1 ～ 3 個の値を指定します。

- {{cssxref("integer")}}
  - : ハイフネーションを許可する単語の最小文字数、ハイフンの前の最小文字数、またはハイフンの後の最小文字数のどちらかを指定します。
- `auto`

  - : ユーザーエージェントに現在のレイアウトに適した値を選択させます。これがデフォルトです。

## 解説

このプロパティを使用すると、テキストのハイフネーションを細かく制御することができます。この制御機能により、不自然なハイフネーションを回避し、言語ごとに適切なハイフネーションを設定することが可能になり、結果としてより優れた字組みが実現します。

このプロパティには、`<integer>` またはキーワード `auto` を 1 ～ 3 個指定します。各値は、ハイフネーションを許可する単語の最小文字数、ハイフンの前の最小文字数、ハイフンの後の最小文字数をこの順に指定します。

- `<integer>` を 1 つ指定すると、ハイフネーションが可能になる単語の最小文字数を設定し、ハイフンの前後の最小文字数は `auto` に設定します。
- 2 つの値を指定すると、最初の値が単語の最小文字数、2 つ目の値がハイフンの前後それぞれの最小文字数を設定します。省略した 3 つ目の値には、2 つ目の値がデフォルトで使用されます。
- 3 つの値を指定すると、単語の最小文字数、ハイフンの前の最小文字数、ハイフンの後の最小文字数をそれぞれ設定します。

`auto` を指定すると、ユーザーエージェントは現在のレイアウトに適した値を選択します。より適切な値を算出できない場合は、次のデフォルト値が使用されます。

- ハイフネーションを許可する最小文字数: 5
- ハイフンの前の最小文字数: 2
- ハイフンの後の最小文字数: 2

指定された制約を満たすには単語が短すぎる場合、ハイフネーションは行われないことに注意してください。例えば、値が `hyphenate-limit-chars: auto 3 4` の場合、 7 文字未満の単語はハイフネーションされません。ハイフンの前には 3 文字、後ろには 4 文字を持つことは不可能だからです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ハイフネーションの限界値を設定

例えば、同じテキストを含む 4 つのボックスがあるとします。比較のため、最初のボックスにはブラウザーで適用されるデフォルトのハイフネーションが表示されています。次の 3 つのボックスでは、異なる `hyphenate-limit-chars` 値を使用してブラウザーのデフォルトの動作が制約された結果を示しています。

#### HTML

```html
<div class="container">
  <p id="ex1">juxtaposition and acknowledgement</p>
  <p id="ex2">juxtaposition and acknowledgement</p>
  <p id="ex3">juxtaposition and acknowledgement</p>
  <p id="ex4">juxtaposition and acknowledgement</p>
</div>
```

#### CSS

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

p {
  margin: 1rem;
  width: 120px;
  border: 2px dashed #999999;
  font-size: 1.5rem;
  hyphens: auto;
}

#ex2 {
  hyphenate-limit-chars: 14;
}

#ex3 {
  hyphenate-limit-chars: 5 9 2;
}

#ex4 {
  hyphenate-limit-chars: 5 2 7;
}
```

#### 結果

{{EmbedLiveSample("Setting hyphenation limits", "", 200)}}

最初のボックスでは、 `hyphenate-limit-chars` を設定しないことで、ブラウザーのデフォルトのアルゴリズムを適用できるようにしています。デフォルトでは、ブラウザーはより良い値を探し出さない限り、 `5 2 2` という値を使用します。

2 つ目のボックスでは、`hyphenate-limit-chars: 14` を設定することで、単語が少なくとも 14 文字の長さになるまで、ブラウザーによる単語のハイフネーションを防止します。その結果、 "juxtaposition" は 13 文字しかないため、 2 つ目のボックスではハイフネーションされません。

<!-- cSpell:ignore acknowled gement acknowl edgement ment -->

3 つ目のボックスでは、ハイフンの前に少なくとも 9 文字が含まれるようにブラウザーを制約します。 `hyphenate-limit-chars: 5 9 2` を設定します。 これにより、最初のボックスに表示されているように、 "acknowledgement" が "acknowledge-ment" ではなく、 "acknowl-edgement" とハイフンで結合されるようになります。

ハイフンの前に正確に 9 文字が入るとは限らないことに注意してください。 `hyphenate-limit-chars` で指定された制約が満たされている限り、ブラウザーは最適だと考える場所で単語を分割することがあります。 例えば、この場合、ブラウザーは "acknowled-gement" よりも読みにくい "acknowledge-ment" を選択します。

<!-- cSpell:ignore juxtaposi tion -->

4 番目のボックスでは、ハイフンの後に少なくとも 7 文字が含まれるようにブラウザーを設定するには、 `hyphenate-limit-chars: 5 2 7` と設定します。これにより、 "juxtaposition" がデフォルトでは "juxtaposi-tion" とハイフネーションされるのに対し、 "juxta-position" とハイフネーションされるという効果が得られます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("hyphens")}}
- {{cssxref("hyphenate-limit-lines")}}
- [CSS テキストモジュール](/ja/docs/Web/CSS/Guides/Text)
