---
title: "Event: isTrusted プロパティ"
short-title: isTrusted
slug: Web/API/Event/isTrusted
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("DOM")}}

**`isTrusted`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、このイベントがユーザー操作によって生成された場合は `true`、このイベントがスクリプトで作成または変更されたり、 {{domxref("EventTarget.dispatchEvent()")}} で配信されたりした場合は `false` となる論理値を返します。

## 値

論理値です。

## 例

```js
if (e.isTrusted) {
  /* このイベントは信頼されている */
} else {
  /* このイベントは信頼されていない */
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
