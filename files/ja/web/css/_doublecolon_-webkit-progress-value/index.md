---
title: "::-webkit-progress-value"
slug: Web/CSS/::-webkit-progress-value
---

{{CSSRef}}{{Non-standard_header}}

**`::-webkit-progress-value`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、 {{HTMLElement("progress")}} 要素のバーの塗りつぶされた部分を表します。これは、 {{cssxref("::-webkit-progress-bar")}} 擬似要素の子要素です。

> **メモ:** `::-webkit-progress-value` を有効にするには {{cssxref("-webkit-appearance")}} を `<progress>` 要素で `none` に設定する必要があります。

## 構文

```css
::-webkit-progress-value {}
```

## 例

この例は Blink または WebKit ベースのブラウザーでのみ動作します。

### HTML

```html
<progress value="10" max="50"></progress>
```

### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-value {
  background-color: orange;
}
```

### 結果

{{EmbedLiveSample("Examples", 200, 50)}}

### 結果のスクリーンショット

上記のスタイルを使用したプログレスバーは次のようになります:

![](progress-value.png)

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- WebKit/Blink が {{HTMLElement("progress")}} 要素のその他の部分を整形するために使用する擬似要素:

  - {{ cssxref("::-webkit-progress-bar") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-ms-fill") }}
