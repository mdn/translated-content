---
title: CSS `::-moz-progress-bar` 擬似要素
short-title: ::-moz-progress-bar
slug: Web/CSS/Reference/Selectors/::-moz-progress-bar
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}{{SeeCompatTable}}

**`::-moz-progress-bar`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で [Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)であり、 {{HTMLElement("progress")}} 要素の中のプログレスバーを表します。 (バーは進捗した量を表します。)

{{HTMLElement("progress")}} のまだ終了していない部分を Mozilla で選択したい場合は、 {{HTMLElement("progress")}} で直接選択してください。

## 構文

```css
::-moz-progress-bar {
  /* ... */
}
```

## 例

### HTML

```html
<progress value="30" max="100">30%</progress>
<progress max="100">Indeterminate</progress>
```

### CSS

```css
::-moz-progress-bar {
  background-color: red;
}

/* 不確実なバーは強制的に幅をゼロにする */
:indeterminate::-moz-progress-bar {
  width: 0;
}
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("progress")}}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
