---
title: symbols
slug: Web/CSS/@counter-style/symbols
tags:
  - '@counter-style'
  - アットルール記述子
  - CSS
  - CSS カウンタースタイル
  - CSS 記述子
  - リファレンス
browser-compat: css.at-rules.counter-style.symbols
translation_of: Web/CSS/@counter-style/symbols
---
{{CSSRef}}

**`symbols`** は [CSS](/ja/docs/Web/CSS) の記述子で、指定されたカウンターシステムがカウンター表現を構築するために使用する記号を指定するために使用します。

## 構文

`symbols` 記述子は、 1 つ以上の `<symbol>` で指定します。

### 値

- `<symbol>`

  - : そのカウンターシステムで使用される記号を表します。これは以下のデータ型のうちの一つである必要があります。

    - {{cssxref("&lt;string&gt;")}}
    - {{cssxref("&lt;image&gt;")}} (注: この値は「リスクあり」であり、仕様書から削除されるかもしれません。これはまだ実装されていません。)
    - {{cssxref("&lt;custom-ident&gt;")}}

## 解説

記号は文字列、画像、識別子の何れかで指定することができます。これは {{cssxref("@counter-style")}} [アットルール](/ja/docs/Web/CSS/At-rule)の中で使用されます。

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url('first.svg') url('second.svg') url('third.svg');
symbols: indic-numbers;
```

`symbols` 記述子は、 {{cssxref('@counter-style/system', 'system')}} 記述子の値が `cyclic`, `numeric`, `alphabetic`, `symbolic`, `fixed` の何れかである場合に指定する必要があります。 `additive` システムを使用する場合は、 symbols を指定する代わりに {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}} を使用してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カウンター記号の設定

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
@counter-style symbols-example {
  system: fixed;
  symbols: A "1" "\24B7" D E;
}

.list {
  list-style: symbols-example;
}
```

#### 結果

{{EmbedLiveSample('Setting_counter_symbols')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `symbols` 記述子は {{cssxref("@counter-style")}} アットルールの中で使用されます。
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols()")}}, 無名のカウンタースタイルを生成する関数記法
- {{cssxref("url()", "url()")}} 関数
