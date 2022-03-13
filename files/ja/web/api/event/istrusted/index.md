---
title: Event.isTrusted
slug: Web/API/Event/isTrusted
tags:
  - Property
  - Read-only
  - Reference
  - プロパティ
  - 読み取り専用
browser-compat: api.Event.isTrusted
translation_of: Web/API/Event/isTrusted
---
{{APIRef("DOM")}}

**`isTrusted`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、
boolean値をとり、イベントがユーザーアクションによって生成された場合は `true` を、
イベントがスクリプトによって作成・更新された、または {{domxref("EventTarget.dispatchEvent()")}}
を通して配信された場合は `false` になります。

## Value

boolean値。

## Example

```js
if (e.isTrusted) {
  /* The event is trusted */
} else {
  /* The event is not trusted */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
