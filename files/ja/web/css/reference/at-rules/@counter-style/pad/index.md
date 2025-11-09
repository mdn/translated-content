---
title: pad
slug: Web/CSS/Reference/At-rules/@counter-style/pad
original_slug: Web/CSS/@counter-style/pad
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`pad`** は {{cssxref("@counter-style")}} アットルールの記述子で、マーカー表現のための最小限の長さを設定するために使用します。

## 構文

```css
pad: 3 "0";
pad: "+" 5;
```

### 値

記述子は、次の 2 つの値を受け入れます。これらの値は、空間で区切られ、任意の順序で指定できます。

- {{cssxref("integer")}}
  - : すべてのマーカー表現が到達しなければならない最小の長さを指定します。値は負ではない必要があります。 `pad` 記述子の場合、この値は「パッド長」とも呼ばれます。

- [`<symbol>`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#symbol)
  - : `<integer>` で定義された最小長さに到達しなかった場合に、パディングに使用する記号を指定します。`pad` 記述子の場合、この値は「パディング記号」とも呼ばれます。

## 解説

マーカー表現を最小の長さにする必要がある場合は、`pad` 記述子を使用します。マーカー表現が指定したパディング長よりも短い場合、マーカー表現は指定したパディング記号でパディングされます。パディング長よりも長いマーカー表現は、追加のパディングなしで表示されます。

記述子 `pad` は、最小マーカー長として `<integer>`、パディングとして `<symbol>` を取ります。記述子 `pad` の一般的な用途は、リストの番号付けを `1`、`2`、`3`、`4` ではなく、`01` から始めて `02`、`03`、`04` のようにする必要がある場合です。この場合、`pad` 記述子を `pad: 2 "0"` と指定することで、ブラウザーはカウンターの長さを 2 文字以上に確実にし、必要に応じて `0` によるパディングを追加して、最小の長さである 2 文字に到達します。この例では、すでに 2 文字以上の長さのカウンターは、パディングなしで通常どおり表示されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カウンターをゼロ埋めにする

この例では、`decimal` の {{cssxref("@counter-style/system","system")}} を拡張して、3 文字以上の長さのカウンターを作成し、それより短いカウンターは `0` で埋めて最小の長さに到達するようにしています。出力をより読みやすくするために、{{cssxref("@counter-style/suffix", "suffix")}} 記述子が追加されています。

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li value="40">Forty</li>
  <li>Forty-one</li>
  <li value="200">Two hundred</li>
  <li value="3000">Three thousand</li>
  <li>and so on</li>
</ul>
```

#### CSS

```css
@counter-style pad-example {
  system: extends decimal;
  suffix: ": ";
  pad: 3 "0";
}

ul {
  list-style: pad-example;
}
```

#### 結果

{{ EmbedLiveSample('Padding a counter', '100', '200') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@counter-style")}} 記述子: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- リストスタイルのプロパティ: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, 無名のカウンタースタイルを生成する関数記法。
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
