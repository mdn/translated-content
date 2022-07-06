---
title: suffix
slug: Web/CSS/@counter-style/suffix
tags:
  - '@counter-style'
  - アットルール記述子
  - CSS
  - CSS カウンタースタイル
  - CSS 記述子
  - リファレンス
browser-compat: css.at-rules.counter-style.suffix
---
{{CSSRef}}

**`suffix`** は {{cssxref("@counter-style")}} ルールの記述子で、マーカーの表現に追加されるものを指定します。

## 構文

```css
/* <symbol> values */
suffix: "";
suffix: ") ";
suffix: url(bullet.png);
```

### 値

- `<symbol>`
  - : マーカー表現に追加される記号を指定します。 {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;custom-ident&gt;")}} が指定できます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カウンターの接尾辞を設定

#### HTML

```html
<ul class="choices">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>None of the above</li>
</ul>
```

#### CSS

```css
@counter-style options {
  system: fixed;
  symbols: A B C D;
  suffix: ") ";
}

.choices {
  list-style: options;
}
```

#### 結果

{{ EmbedLiveSample('Setting_a_suffix_for_a_counter')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols()")}}, 無名のカウンタースタイルを生成する関数記法
