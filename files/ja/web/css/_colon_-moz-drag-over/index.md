---
title: ':-moz-drag-over'
slug: Web/CSS/:-moz-drag-over
tags:
  - CSS
  - CSS:Mozilla 拡張
  - Firefox
  - Mozilla
  - NeedsCompatTable
  - 標準外
  - 擬似クラス
  - リファレンス
  - セレクター
browser-compat: css.selectors:-moz-drag-over
translation_of: Web/CSS/:-moz-drag-over
---
{{CSSRef}}{{Non-standard_header}}

**`:-moz-drag-over`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)であり、 {{domxref("HTMLElement/dragover_event", "dragover")}} イベントが呼び出された時に要素に一致します。

## 構文

```css
:-moz-drag-over
```

## 例

### HTML

```html
<table border="1">
  <tr>
    <td width="100px" height="100px">Drag Over</td>
  </tr>
</table>
```

### CSS

```css
td:-moz-drag-over {
  color: red;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

いずれの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Mozilla の CSS 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)
- [HTML ドラッグ＆ドロップ](/ja/docs/Web/API/HTML_Drag_and_Drop_API)
