---
title: "Event: stopPropagation() メソッド"
short-title: stopPropagation()
slug: Web/API/Event/stopPropagation
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("DOM")}}

**`stopPropagation()`** は {{domxref("Event")}} インターフェイスのメソッドで、キャプチャおよびバブリング段階において現在のイベントのさらなる伝播を阻止します。しかし、これは既定の動作の発生を妨げるものではありません。例えば、リンクのクリックはまだ処理されます。これらの動作を止めたい場合は、{{domxref("Event.preventDefault", "preventDefault()")}} メソッドを参照してください。また、現在の要素における他のイベントハンドラーへの伝搬も防げません。それらを止めたい場合は、{{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}}　を参照してください。

## 構文

```js-nolint
event.stopPropagation()
```

### 引数

なし。

### 返値

なし。

## 例

[イベントの伝播](/ja/docs/Web/API/Document_Object_Model/Examples#example_5_event_propagation) を参照してください。
{{domxref("Event.stopImmediatePropagation", "stopImmediatePropagation()")}} の例も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
