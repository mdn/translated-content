---
title: "CSSLayerBlockRule: name プロパティ"
short-title: name
slug: Web/API/CSSLayerBlockRule/name
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("CSSOM")}}

**`name`** は {{domxref("CSSLayerBlockRule")}} インターフェイスの読み取り専用プロパティで、カスケードレイヤーに関連付けられた名前を表します。

## 値

レイヤーの名前の入った文字列です。レイヤーが無名の場合は `""` です。

## 例

### HTML

```html
<output></output> <output></output>
```

### CSS

```css
output {
  display: block;
}

@layer special {
  div {
    color: rebeccapurple;
  }
}

@layer {
  div {
    color: black;
  }
}
```

### JavaScript

```js
const item1 = document.getElementsByTagName("output")[0];
const item2 = document.getElementsByTagName("output")[1];
const rules = document.styleSheets[1].cssRules;
// スタイルシート #1 はこの埋め込み例に関連するスタイルシートであり、
// スタイルシート #0 は MDN ページ全体に関連するスタイルシート。

const layer = rules[1]; // CSSLayerBlockRule
const anonymous = rules[2]; // 無名の CSSLayerBlockRule

item1.textContent = `1 つ目の CSSLayerBlockRule は "${layer.name}" レイヤーを定義しています。`;
item2.textContent = `2 つ目の CSSLayerBlockRule は "${anonymous.name}" という名前のレイヤーです。`;
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@layer")}} の宣言文は {{domxref("CSSLayerStatementRule")}} で表されます。
- CSS における[名前付きカスケードレイヤーの作成](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#カスケードレイヤーの作成)方法
