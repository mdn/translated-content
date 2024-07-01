---
title: "Element: ariaBusy プロパティ"
short-title: ariaBusy
slug: Web/API/Element/ariaBusy
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{DefaultAPISidebar("DOM")}}

**`ariaBusy`** は {{domxref("Element")}} インターフェイスのプロパティで、要素が変更されているかどうかを示す [`aria-busy`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-busy) 属性の値を反映します。支援技術は、ユーザーに公開する前に変更が完了するまで待ちたい場合があります。

## 値

以下のいずれかの値を持つ文字列です。

- `"true"`
  - : この要素は更新中です。
- `"false"`
  - : この要素には更新の予定はありません。

## 例

この例では、ID が `clock` の要素の `aria-busy` 属性が "false" に設定されています。`ariaBusy` を使用して、値を "true" に更新します。

```html
<div
  id="clock"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-busy="false"></div>
```

```js
let el = document.getElementById("clock");
console.log(el.ariaBusy); // false
el.ariaBusy = "true";
console.log(el.ariaBusy); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
