---
title: TaskAttributionTiming.containerType
slug: Web/API/TaskAttributionTiming/containerType
---

{{SeeCompatTable}}{{APIRef("Long Tasks")}}

{{domxref("TaskAttributionTiming")}} インターフェイスの **`containerType`** 読み取り専用プロパティは、フレームコンテナのタイプ（`iframe`、`embed`、`object` のいずれか）を返します。

## 構文

```
var containerType = TaskAttributionTiming.containerType;
```

### 値

コンテナのタイプ（`iframe`、`embed`、`object` のいずれか）を含む {{domxref("DOMString")}} です。

## 仕様

| 仕様                                                                                                             | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('Long Tasks','#dom-taskattributiontiming-containertype','containerType')}} | {{Spec2('Long Tasks')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.TaskAttributionTiming.containerType")}}
