---
title: negative
slug: Web/CSS/@counter-style/negative
tags:
  - '@counter-style'
  - アットルール記述子
  - CSS
  - CSS 記述子
  - リファレンス
browser-compat: css.at-rules.counter-style.negative
translation_of: Web/CSS/@counter-style/negative
---
{{CSSRef}}

カスタムカウンターのスタイルを定義する際、 **`negative`** 記述子により、値が負のときにカウンターの表現に付加または前置する記号を指定する方法を提供することで、負のカウンターの表現を変更することができます。

## 構文

```css
/* <symbol> 値 */
negative: "-";       /* 負の値の場合に先頭に '-' を付ける */
negative: "(" ")";   /* 負の値の場合に '(' と ')' で囲む */
```

### Values

- first `<symbol>`
  - : カウンターが負の時に、この記号がその表現の前に付きます。
- second `<symbol>`
  - : 存在する場合、カウンターが負の時に、この記号がその表現の後に追加されます。

## 解説

カウンターの値が負の場合、記述子の値として指定された記号がカウンター表現の前に置かれ、指定された場合は 2 番目の記号が表現の後に追加されます。 negative 記述子は、 `system` の値が `symbolic`, `alphabetic`, `numeric`, `additive`, `extends` の何れかで、拡張カウンタースタイル自体が負の符号を使用している場合のみ有効になります。負のカウンター値に対応していない他のシステムで negative 記述子が指定された場合、その記述子は無視されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 負のカウンターを描画する

#### HTML

```html
<ol class="list" start="-3">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ol>
```

#### CSS

```css
@counter-style neg {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  negative: "(-" ")";
}

.list {
  list-style: neg;
}
```

#### 結果

{{ EmbedLiveSample('Rendering_negative_counters', '', '', '', 'Web/CSS/@counter-style/negative') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols()")}}, 無名のカウンタースタイルを生成する関数記法。
