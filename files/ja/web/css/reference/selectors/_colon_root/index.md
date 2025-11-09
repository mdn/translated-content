---
title: :root
slug: Web/CSS/Reference/Selectors/:root
original_slug: Web/CSS/:root
---

**`:root`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、文書を表すツリーのルート要素を選択します。 HTML では `:root` は {{HTMLElement("html")}} 要素を表し、[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)が高いことを除けば `html` セレクターと同等です。

```css
/* 文書のルート要素（HTML の場合は <html>）を選択 */
:root {
  background: yellow;
}
```

## 構文

```
:root
```

## 例

### グローバルの CSS 変数

`:root` はグローバルの [CSS 変数](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)を宣言するのに便利です。

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("html")}}
- {{domxref("Document.rootElement")}}
- {{domxref("Node.getRootNode()")}}
- {{domxref("Element.shadowRoot")}}
- {{domxref("ShadowRoot")}}
