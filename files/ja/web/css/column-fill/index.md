---
title: column-fill
slug: Web/CSS/column-fill
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**`column-fill`** は [CSS](/ja/docs/Web/CSS) のプロパティで、段組みレイアウトで要素のコンテンツが複数の段に分割されるとき、どのようにバランスを取るのかを制御します。

{{EmbedInteractiveExample("pages/css/column-fill.html")}}

## 構文

```css
/* キーワード値 */
column-fill: auto;
column-fill: balance;

/* グローバル値 */
column-fill: inherit;
column-fill: initial;
column-fill: revert;
column-fill: revert-layer;
column-fill: unset;
```

`column-fill` プロパティは、以下に挙げたキーワード値のうちの 1 つで指定します。初期値は `balance` で、コンテンツは段の間で均等になります。

### 値

- `auto`
  - : 段は順に埋められます。コンテンツは必要な余地があるときだけ分割されるので、一部の段は空になることがあります。
- `balance`
  - : コンテンツは各段に均等に分割されます。[ページ付きメディア](/ja/docs/Web/CSS/CSS_paged_media)などの断片化されたコンテキストでは、最後の断片のみが均等に分割されます。従ってページ付きメディアでは、最後のページのみが均等に分割されます。

仕様書では `balance-all` の値を定義しており、この値では[ページ付きメディア](/ja/docs/Web/CSS/CSS_paged_media)などの断片化されたコンテキストにおいて、段の間で均等に分割します。この値は、まだどのブラウザーでも対応していません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 段の内容を均等にする

#### HTML

```html-nolint live-sample___balancing_column_content
<p class="fill-auto">
  この段落では、段を 1 つずつ埋めていきます。すべてのテキストが最初の段に収まるので、他の段は空白になります。
</p>

<p class="fill-balance">
  この段落では、それぞれの段でコンテンツの量のバランスを取ろうとします。
</p>
```

#### CSS

```css live-sample___balancing_column_content
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

> [!WARNING]
> 仕様上の未解決の問題により、 `column-fill` にはブラウザ－間の相互運用性の問題やバグがあることに注意してください。
>
> 特に、 `column-fill: auto` を使用して連続的に段を埋める場合、 Chrome では、段組みコンテナーにブロック方向の寸法（例: 横書きモードならば高さ）がある場合にのみこの値を参照します。 Firefox は常にこのプロパティを参照するため、寸法がない場合は最初の段をすべてのコンテンツで埋めます。

## 関連情報

- [学習: 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)（レイアウトの学習）
- {{CSSXref("column-count")}}
- {{CSSXref("column-width")}}
