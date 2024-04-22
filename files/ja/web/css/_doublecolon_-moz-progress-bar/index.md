---
title: "::-moz-progress-bar"
slug: Web/CSS/::-moz-progress-bar
---

{{CSSRef}}{{Non-standard_header}}

**`::-moz-progress-bar`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で [Mozilla 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)であり、 {{HTMLElement("progress")}} 要素の中のプログレスバーを表します。 (バーは進捗した量を表します。)

{{HTMLElement("progress")}} のまだ終了していない部分を Mozilla で選択したい場合は、 {{HTMLElement("progress")}} で直接選択してください。

## 構文

{{csssyntax}}

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

## 関連情報

- {{HTMLElement("progress")}}
- {{ cssxref("::-ms-fill") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
