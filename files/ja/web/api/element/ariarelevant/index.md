---
title: "Element: ariaRelevant プロパティ"
short-title: ariaRelevant
slug: Web/API/Element/ariaRelevant
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}{{Non-standard_Header}}

**`ariaRelevant`** は {{domxref("Element")}} インターフェイスのプロパティで、[`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) 属性の値を反映します。この属性は、ライブ領域内のアクセシビリティツリーが変更されたときにユーザーエージェントがどのような通知を発生させるかを示します。これは `aria-live` 領域内のどのような変更が関連性があり、告知されるべきかを記述するために使用します。

## 値

以下の値を 1 つ以上格納した文字列で、スペース区切りです。

- `"additions"`
  - : ライブ領域内の要素ノードの追加は、関連性があると考えるべきです。
- `"removals"`
  - : ライブ領域からのノードの削除は、関連性があると考えるべきです。
- `"text"`
  - : 既存のノードのテキストコンテンツの変更は、関連性があるとみなされるべきです。
- `"all"`
  - : `"additions removals text"` に相当します。

## 例

この例では、IDが `text` の要素の [`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) 属性は "all" に設定されています。ariaRelevant` を使用して値を "text" に更新します。

```html
<div
  id="clock"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-relevant="all"></div>
```

```js
let el = document.getElementById("clock");
console.log(el.ariaRelevant); // all
el.ariaRelevant = "text";
console.log(el.ariaRelevant); // text
```

## ブラウザーの互換性

{{Compat}}
