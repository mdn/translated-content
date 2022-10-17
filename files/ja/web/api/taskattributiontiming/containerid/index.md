---
title: TaskAttributionTiming.containerId
slug: Web/API/TaskAttributionTiming/containerId
---

{{SeeCompatTable}}{{APIRef("Long Tasks")}}

{{domxref("TaskAttributionTiming")}} インタフェースの **`containerId`** 読み取り専用プロパティは、コンテナの `id` 属性を返します。 コンテナは、全体として長いタスクに関係している iframe、embed、object などです。

## 構文

```
var containerId = TaskAttributionTiming.containerId;
```

### 値

コンテナの `id` 属性を含む {{domxref("DOMString")}}。

## 仕様

| 仕様                                                                                                         | 状態                             | コメント |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('Long Tasks','#dom-taskattributiontiming-containerid','containerId')}} | {{Spec2('Long Tasks')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.TaskAttributionTiming.containerId")}}
