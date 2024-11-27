---
title: accent-color
slug: Web/CSS/accent-color
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{CSSRef}}

**`accent-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、一部の要素で生成されるユーザーインターフェイス要素の{{Glossary("accent", "強調表示")}}色を設定します。

{{EmbedInteractiveExample("pages/css/accent-color.html")}}

現在 `accent-color` に対応しているブラウザーは、以下の HTML 要素に適用します。

- [`<input type="checkbox">`](/ja/docs/Web/HTML/Element/input/checkbox)
- [`<input type="radio">`](/ja/docs/Web/HTML/Element/input/radio)
- [`<input type="range">`](/ja/docs/Web/HTML/Element/input/range)
- [`<progress>`](/ja/docs/Web/HTML/Element/progress)

各ユーザーエージェントには、読みやすさとコントラストを確実に保持するためのバリエーションを持つアクセントカラーがあります。そのアクセントカラーはすべてのユーザーインターフェイスコントロールで使用されるわけではなく、コントロールのすべての状態で使用されるわけでもありません。 `accent-color` は、それが適用される状態でアクセントカラーを使用するユーザーインターフェイスコントロールにのみ適用されます。

## 構文

```css
/* キーワード値 */
accent-color: auto;

/* <color> 値 */
accent-color: darkred;
accent-color: #5729e9;
accent-color: rgb(0 200 0);
accent-color: hsl(228 4% 24%);

/* グローバル値 */
accent-color: inherit;
accent-color: initial;
accent-color: revert;
accent-color: revert-layer;
accent-color: unset;
```

### 値

- `auto`
  - : UA が選択した色を表します。プラットフォームの強調色がある場合は、それと一致します。
- {{cssxref("&lt;color&gt;")}}
  - : 強調色として使用される色を指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 独自の強調色を設定

#### HTML

```html live-sample___setting_a_custom_accent_color
<input type="checkbox" checked />
<input type="checkbox" class="custom" checked />
```

#### CSS

```css live-sample___setting_a_custom_accent_color
input {
  accent-color: auto;
  display: block;
  width: 30px;
  height: 30px;
}

input.custom {
  accent-color: rebeccapurple;
}
```

#### 結果

{{EmbedLiveSample('Setting_a_custom_accent_color', 500, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("caret-color")}}, {{cssxref("color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}: その他の色に関するプロパティ
- {{cssxref("&lt;color&gt;")}} データ型
- {{HTMLElement("input")}} 要素
