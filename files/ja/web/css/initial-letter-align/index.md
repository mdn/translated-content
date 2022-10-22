---
title: initial-letter-align
slug: Web/CSS/initial-letter-align
---

{{CSSRef}}{{SeeCompatTable}}

CSS の **`initial-letter-align`** プロパティは、段落内の最初の文字の配置を指定します。

```css
/* キーワード値 */
initial-letter-align: auto;
initial-letter-align: alphabetic;
initial-letter-align: hanging;
initial-letter-align: ideographic;

/* グローバル値 */
initial-letter-align: inherit;
initial-letter-align: initial;
initial-letter-align: unset;
```

## 構文

以下に挙げたキーワード値のうちの一つです。

### 値

- `auto`
  - : ユーザーエージェントがテキストの言語に従って値を選択します。西洋の言語では既定で alphabetic であり、日中韓の言語は ideographic、一部のインド語派の言語は hanging になります。
- `alphabetic`
  - : 上記の通り、最初の文字の大文字高は、テキストの最初の行の大文字高に配置されます。最初の文字のベースラインは N 文字目のテキストのベースラインに配置されます。
- `hanging`
  - : 最初の文字のぶら下げベースラインは、テキストの最初の行のぶら下げベースラインに配置されます。
- `ideographic`
  - : 最初の文字は N 行の領域の中央に配置されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 最初の文字の配置

#### HTML

```html
<p class="auto ">Initial letter - auto</p>
<p class="alphabetic">Initial letter - alphabetic</p>
<p class="hanging">Initial letter - hanging</p>
<p class="ideographic">Initial letter - ideographic</p>
```

#### CSS

```css
.auto {
  -webkit-initial-letter-align: auto;
  initial-letter-align: auto;
}

.alphabetic {
  -webkit-initial-letter-align: alphabetic;
  initial-letter-align: alphabetic;
}

.hanging {
  -webkit-initial-letter-align: hanging;
  initial-letter-align: hanging;
}

.ideographic {
  -webkit-initial-letter-align: ideographic;
  initial-letter-align: ideographic;
}
```

#### 結果

{{EmbedLiveSample('Aligning_initial_letter')}}

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('CSS3 Inline', '#aligning-initial-letter', 'initial-letter-align')}} | {{Spec2('CSS3 Inline')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("css.properties.initial-letter-align")}}
