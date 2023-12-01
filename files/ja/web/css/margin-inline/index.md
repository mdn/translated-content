---
title: margin-inline
slug: Web/CSS/margin-inline
---

{{CSSRef}}

The **`margin-inline`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、論理的なインライン方向の先頭と末尾のマージンを設定します。これは要素の書字方向やテキストの向きに応じて物理的なマージンに変換されます。

```css
/* <length> 値 */
margin-inline: 10px 20px; /* 絶対的な長さ */
margin-inline: 1em 2em; /* テキストの大きさに対する相対値 */
margin-inline: 5% 2%; /* 直近のブロックコンテナーの大きさに対する相対値 */
margin-inline: 10px; /* 先頭と末尾の両方を設定 */

/* キーワード値 */
margin-inline: auto;

/* グローバル値 */
margin-inline: inherit;
margin-inline: initial;
margin-inline: revert;
margin-inline: unset;
```

このプロパティは、 {{CSSxRef("margin-top")}} と {{CSSxRef("margin-bottom")}}、または {{CSSxRef("margin-right")}} と {{CSSxRef("margin-left")}} プロパティに、 {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}} で定義された値にしたがって対応します。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`margin-inline-start`](/ja/docs/Web/CSS/margin-inline-start)
- [`margin-inline-end`](/ja/docs/Web/CSS/margin-inline-end)

2 つの値を指定した場合は、1 つ目の値で先頭、2 つ目の値で末尾を設定します。1 つの値を指定した場合は、両方のプロパティに同じ値を設定します。

## 構文

### 値

`margin-inline` プロパティは、 {{CSSxRef("margin-left")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{CSSSyntax}}

## 例

<h3 id="Setting_inline_start_and_end_margins">インライン方向の先頭と末尾のマージンの設定</h3>

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: auto;
  border: 1px solid green;
}

p {
  margin: 0;
  margin-inline: 20px 40px;
  background-color: tan;
}

.verticalExample {
  writing-mode: vertical-rl;
}
```

#### HTML

```html
<div>
  <p>Example text</p>
</div>
<div class="verticalExample">
  <p>Example text</p>
</div>
```

#### 結果

{{EmbedLiveSample("Setting_inline_start_and_end_margins", 140, 240)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 対応する物理的プロパティ: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
