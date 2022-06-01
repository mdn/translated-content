---
title: column-fill
slug: Web/CSS/column-fill
tags:
  - CSS
  - CSS 段組みレイアウト
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.column-fill
translation_of: Web/CSS/column-fill
---
{{CSSRef}}

**`column-fill`** は [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで要素の内容物が複数の段に分割されるとき、どのようにバランスを取るのかを制御します。

{{EmbedInteractiveExample("pages/css/column-fill.html")}}

## 構文

```css
/* キーワード値 */
column-fill: auto;
column-fill: balance;
column-fill: balance-all;

/* グローバル値 */
column-fill: inherit;
column-fill: initial;
column-fill: revert;
column-fill: unset;
```

`column-fill` プロパティは、以下に挙げたキーワード値のうちの 1 つで指定します。初期値は `balance` で、コンテンツは段の間で均等になります。

### 値

- `auto`
  - : 段は順に埋められます。コンテンツは必要な余地があるときだけ分割されるので、一部の段は空になることがあります。
- `balance`
  - : コンテンツは各段に均等に分割されます。[ページ付きメディア](/ja/docs/Web/CSS/Paged_Media)などの断片化されたコンテキストでは、最後の断片のみが均等に分割されます。従ってページ付きメディアでは、最後のページのみが均等に分割されます。
- `balance-all`
  - : コンテンツは格段に均等に分割されます。[ページ付きメディア](/ja/docs/Web/CSS/Paged_Media)などの断片化されたコンテキストでは、すべての断片が均等になります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 段の内容を均等にする

#### HTML

```html
<p class="fill-auto">
  この段落では、段を 1 つずつ埋めていきます。すべてのテキストが最初の段に収まるので、他の段は空白になります。
</p>

<p class="fill-balance">
  この段落では、それぞれの段で内容量のバランスを取ろうとします。
</p>
```

#### CSS

```css
p {
  height: 7em;
  background: #ff9;
  columns: 3;
  column-rule: 1px solid;
}

p.fill-auto {
  column-fill: auto;
}

p.fill-balance {
  column-fill: balance;
}
```

#### 結果

{{EmbedLiveSample('Balancing_column_content', 'auto', 320)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

> **Warning:** 仕様上の未解決の問題により、 `column-fill` にはブラウザ－間の相互運用性の問題やバグがあることに注意してください。
>
> 特に、 `column-fill: auto` を使用して連続的に段を埋める場合、 Chrome は、段組みコンテナーにブロック方向の寸法 (例: 横書きモードならば高さ) がある場合にのみこの値を参照します。 Firefox は常にこのプロパティを参照するため、寸法がない場合は最初の段をすべての内容物で埋めます。

## 関連情報

- [段組みレイアウト](/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
