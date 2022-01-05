---
title: additive-symbols
slug: Web/CSS/@counter-style/additive-symbols
tags:
  - '@counter-style'
  - アットルール記述子
  - CSS
  - CSS カウンタースタイル
  - CSS 記述子
  - リファレンス
browser-compat: css.at-rules.counter-style.additive-symbols
translation_of: Web/CSS/@counter-style/additive-symbols
---
{{CSSRef}}

**`additive-symbols`** 記述子は、カウンターの {{cssxref('system')}} 記述子が加算的 (`additive`) な場合の記号を指定することができます。 `additive-symbols` 記述子では*加算的なタプル*を、それぞれ記号と非負数の整数による重みの組で定義します。加算的なシステムは、ローマ数字のような [sign-value numbering](http://en.wikipedia.org/wiki/Sign-value_notation) を構築するために使われます。

## 構文

```css
additive-symbols: 3 "0";
additive-symbols: 3 "0", 2 "\2E\20";
additive-symbols: 3 "0", 2 url(symbol.png);
```

`system` 記述子が `cyclic`, `numeric`, `alphabetic`, `symbolic`, `fixed` の場合は、 {{cssxref('symbols')}} 記述子を `additive-symbols` の代わりに使用してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 加算的シンボルの指定

#### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

```css
@counter-style additive-symbols-example {
  system: additive;
  additive-symbols: V 5, IV 4, I 1;
}
.list {
  list-style: additive-symbols-example;
}
```

#### 結果

{{ EmbedLiveSample('Specifying_additive_symbols') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols()", "symbols()")}}、無名のカウンタースタイルを作成する関数記法
