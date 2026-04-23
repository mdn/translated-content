---
title: :has-slotted
slug: Web/CSS/Reference/Selectors/:has-slotted
original_slug: Web/CSS/:has-slotted
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

**`:has-slotted`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、 {{HTMLElement("slot")}} 要素のコンテンツが空ではないか、または既定値を使用していない場合に一致します（詳細については、[テンプレートとスロットの使用](/ja/docs/Web/API/Web_components/Using_templates_and_slots)を参照してください）。

> [!NOTE]
> 単一の空白テキストノードでも `:has-slotted` が適用されます。

これは、[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) 内に配置された CSS 使用した場合にのみ動作します。

```css
/* 既定ではないコンテンツを持つ <slot> 要素のコンテンツを選択 */
:has-slotted {
  color: green;
}

/* コンテンツまたは既定のコンテンツを持たない <slot> 要素のコンテンツを選択 */
:not(:has-slotted) {
  color: red;
}
```

## 構文

```css-nolint
:has-slotted {
  /* ... */
}
```

## 例

この例には 2 つの `<slot>` 要素があり、一方はコンテンツが割り当てられていますが、もう一方は割り当てられていません。

### HTML

```html
<p>
  <template shadowrootmode="open">
    <style>
      :has-slotted {
        color: rebeccapurple;
      }
    </style>
    <slot name="one">プレイスホルダー 1</slot>
    <slot name="two">プレイスホルダー 2</slot>
  </template>
  <span slot="one">スロットされたコンテンツ</span>
</p>
```

### 結果

コンテンツが割り当てられた `<slot>` 要素は、擬似クラス `:has-slotted` と一致し、`color` 値 `rebeccapurple` が適用されています。

{{EmbedLiveSample("例",100,70)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML {{HTMLElement("template")}} 要素
- HTML {{HTMLElement("slot")}} 要素
- {{CSSXRef("::slotted")}}
