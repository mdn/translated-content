---
title: "Highlight: type プロパティ"
short-title: type
slug: Web/API/Highlight/type
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

`type` は {{domxref("Highlight")}} インターフェイスのプロパティは、ハイライトの意味を指定するために使用される列挙型{{jsxref("String", "文字列", "", "nocode")}}です。これにより、スクリーンリーダーなどの支援技術は、ハイライトをユーザーに公開する際にこの意味を記載することができます。

既定では、ハイライトオブジェクトの型は `highlight` に設定されていますが、`spelling-error` または `grammar-error` に変更することができます。

## 値

`type` 列挙値の指定可能な値は次のとおりです。

- `highlight`
  - : これは、既定のハイライト型です。特定の意味は持ちません。
- `spelling-error`
  - : この型は、スペルミスを強調するためにハイライトを使用する場合に使用します。
- `grammar-error`
  - : この型は、文法的に不正確なコンテンツを強調するためにハイライトを使用する場合に使用します。

## 例

```js
const spellErrorRange = new Range();
spellErrorRange.setStart(textNode, 10);
spellErrorRange.setEnd(textNode, 20);

const spellErrorsHighlight = new Highlight(spellErrorRange);

spellErrorsHighlight.type = "spelling-error";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("css_custom_highlight_api", "CSS カスタムハイライト API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
