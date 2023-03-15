---
title: Event.returnValue
slug: Web/API/Event/returnValue
---

{{APIRef("DOM")}}{{Deprecated_Header}}

{{domxref("Event")}} の **`returnValue`** は、このイベントの既定のアクションが禁止されているかどうかを示します。

既定では `true` で、既定のアクションを実行してもよいことを表します。このプロパティを `false` に設定すると、既定のアクションを阻止します。

> **メモ:** `returnValue` は DOM 標準に採用されましたが、主に既存のコードをサポートするために存在しています。この古いなプロパティの代わりに {{DOMxRef("Event.preventDefault", "preventDefault()")}} と {{domxref("Event.defaultPrevented", "defaultPrevented")}} を使用してください。

## 値

論理値で、イベントがキャンセルされていない場合は `true` となります。そうでない場合、イベントがキャンセルされたか、既定のアクションが阻止された場合に `false` となります。

`returnValue` の値は {{domxref("Event.defaultPrevented", "defaultPrevented")}} が返す値とは逆の値になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
