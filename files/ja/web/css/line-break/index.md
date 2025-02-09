---
title: line-break
slug: Web/CSS/line-break
l10n:
  sourceCommit: 42d7bb6c3ed8e7e51cd71aa17165c28b58f5c4e7
---

{{CSSRef}}

**`line-break`** は [CSS](/ja/docs/Web/CSS) のプロパティで、中国語、日本語、韓国語 (CJK) のテキストにおいて、句読点や記号を用いた場合の改行規則（禁則）を設定します。

{{EmbedInteractiveExample("pages/css/line-break.html")}}

## 構文

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
line-break: revert-layer;
line-break: unset;
```

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

### テキストの折り返しの設定

"々"、"ぁ"、"。" の前で折り返しが行われるかどうかを確認してください。

#### HTML

```html live-sample___setting_text_wrapping
<div lang="ja">
  <p class="wrap-box auto">
    auto:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box loose">
    loose:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box normal">
    normal:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box strict">
    strict:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box anywhere">
    anywhere:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
</div>
```

#### CSS

```css live-sample___setting_text_wrapping
.wrap-box {
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

## 関連情報

- [CSS and international text](https://www.w3.org/International/articles/css3-text/) (W3C)
