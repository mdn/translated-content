---
title: line-break
slug: Web/CSS/line-break
---

{{CSSRef}}

**`line-break`** は CSS のプロパティで、中国語、日本語、韓国語 (CJK) のテキストにおいて、句読点や記号を用いた場合の改行規則 (禁則処理) を設定します。

```css
/* キーワード値 */
line-break: auto;
line-break: loose;
line-break: normal;
line-break: strict;
line-break: anywhere;

/* グローバル値 */
line-break: inherit;
line-break: initial;
line-break: revert;
line-break: unset;
```

## 構文

### 値

- `auto`
  - : 既定の改行規則を使用してテキストを改行します。
- `loose`
  - : 最も制限の少ない改行規則を使用してテキストを改行します。一般的に、新聞などの短い行に使用されます。
- `normal`
  - : 最も一般的な改行規則を使用してテキストを改行します。
- `strict`
  - : 最も厳格な改行規則を使用してテキストを改行します。
- `anywhere`
  - : 句読点や温存された空白、単語の途中も含め、すべての文字の間で折り返しできるようにし、 GL, WJ, ZWJ の文字クラスや、 {{cssxref("word-break")}} プロパティでもたらされる折り返しの禁止を一切無視します。どの折り返しの機会も優先されることはありません。ハイフネーションは適用されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_text_wrapping">テキストの折り返しの設定</h3>

"々", "ぁ", "。" の前で折り返しが行われるかどうかを確認してください。

#### HTML

```html
<div lang="ja">
  <p class="wrapbox auto">
    auto:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrapbox loose">
    loose:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrapbox normal">
    normal:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrapbox strict">
    strict:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrapbox anywhere">
    anywhere:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
</div>
```

#### CSS

```css
.wrapbox {
  width: 10em;
  margin: 0.5em;
  white-space: normal;
  vertical-align: top;
  display: inline-block;
}
.auto {
  line-break: auto;
}
.loose {
  line-break: loose;
}
.normal {
  line-break: normal;
}
.strict {
  line-break: strict;
}
.anywhere {
  line-break: anywhere;
}
```

#### 結果

{{ EmbedLiveSample('Setting_text_wrapping', 200, 400) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

- [CSS and International text](https://www.w3.org/International/articles/css3-text/)
