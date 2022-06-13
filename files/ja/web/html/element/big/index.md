---
title: '<big>: 大きめの文字列要素'
slug: Web/HTML/Element/big
tags:
  - 要素
  - HTML
  - 非推奨
  - リファレンス
  - ウェブ
browser-compat: html.elements.big
translation_of: Web/HTML/Element/big
---

{{deprecated_header}}

**`<big>`** は [HTML](/ja/docs/Web/HTML) の非推奨の要素で、内包するテキストを周りの文字列よりも1段階大きいフォントの大きさで描画します（例えば `medium` が `large` になります）。大きさはブラウザーの最大フォントの大きさに制限されます。

> **Warning:** この要素は仕様書から削除され、もう使用するべきではありません。ウェブ開発者は CSS の {{cssxref("font-size")}} プロパティを使用して、フォントの大きさを調整してください。

## 属性

この要素は、すべての要素で共通の[グローバル属性](/ja/docs/Web/HTML/Global_attributes)以外の属性はありません。

## 例

ここでは `<big>` を使って表示する例と、その後で現在の CSS の文法で代用して同じ結果を得る方法を示します。

### big の使用

この例は、廃止された `<big>` 要素を使用して、一部のテキストの大きさを拡大します。

#### HTML

```html
<p>
  This is the first sentence. <big>This whole
  sentence is in bigger letters.</big>
</p>
```

#### 結果

{{EmbedLiveSample("Using_big", 640, 60)}}

### CSS の `font-size` の使用

この例では CSS の {{cssxref("font-size")}} プロパティを使用して、フォントの大きさを 1 レベル大きくしています。

#### CSS

```css
.bigger {
  font-size: larger;
}
```

#### HTML

```html
<p>
  This is the first sentence. <span class="bigger">This whole
  sentence is in bigger letters.</span>
</p>
```

#### 結果

{{EmbedLiveSample("Using_CSS_font-size", 640, 60)}}

## DOM インターフェイス

この要素は {{domxref('HTMLElement')}} インターフェイスを実装しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS: {{cssxref("font-size")}}, {{cssxref("font")}}
- HTML: {{htmlelement("small")}}, {{htmlelement("font")}}, {{htmlelement("style")}}
- HTML 4.01 仕様書: [Font Styles](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)

{{HTMLRef}}
