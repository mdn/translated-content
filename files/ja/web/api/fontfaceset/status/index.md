---
title: "FontFaceSet: status プロパティ"
short-title: status
slug: Web/API/FontFaceSet/status
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

**`status`** は {{domxref("FontFaceSet")}} インターフェイスの読み取り専用プロパティで、集合内にあるフォントの読み込み状態を返します。

## 値

次のうちのいずれかです。

- `"loading"`
- `"loaded"`

## 例

次の例では、`FontFaceSet` の `status` がコンソールに表示されます。

```js
console.log(document.fonts.status);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
