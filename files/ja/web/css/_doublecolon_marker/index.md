---
title: ::marker
slug: Web/CSS/::marker
l10n:
  sourceCommit: 679f5893a4734fd136b80140e13262422d76b123
---

{{CSSRef}}

**`::marker`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、リスト項目の箇条書き記号ボックス（ふつうは黒丸や番号が入ったもの）を選択します。これは [`display: list-item`](/ja/docs/Web/CSS/display) が設定された要素や擬似要素、例えば {{HTMLElement("li")}} 要素や {{HTMLElement("summary")}} 要素で利用できます。

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-marker.html", "tabbed-shorter")}}

## 利用できるプロパティ

`::marker` 擬似要素は、限られた数の CSS プロパティのみに対応しています。例えば以下のようなものがあります。

- すべての[フォントプロパティ](/ja/docs/Web/CSS/CSS_fonts)
- {{CSSxRef("white-space")}} プロパティ
- {{CSSxRef("color")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}}, {{CSSxRef("direction")}} の各プロパティ
- {{CSSxRef("content")}} プロパティ
- すべての[アニメーション](/ja/docs/Web/CSS/CSS_animations#プロパティ)および[トランジション](/ja/docs/Web/CSS/CSS_transitions#プロパティ)プロパティ

> [!NOTE]
> 仕様書では、将来的にさらなる CSS プロパティに対応する可能性があるとしています。

## 構文

```css
::marker {
  /* ... */
}
```

## 例

### HTML

```html
<ul>
  <li>Peaches</li>
  <li>Apples</li>
  <li>Plums</li>
</ul>
```

### CSS

```css
ul li::marker {
  color: red;
  font-size: 1.5em;
}
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 既定で箇条書き記号ボックスがある HTML 要素: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}
- [CSS 生成コンテンツ](/ja/docs/Web/CSS/CSS_generated_content)モジュール
- [CSS リストとカウンター](/ja/docs/Web/CSS/CSS_lists)モジュール
- [CSS カウンタースタイル](/ja/docs/Web/CSS/CSS_counter_styles)モジュール
