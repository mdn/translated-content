---
title: TaskAttributionTiming.containerName
slug: Web/API/TaskAttributionTiming/containerName
---

{{SeeCompatTable}}{{APIRef("Long Tasks")}}

{{domxref("TaskAttributionTiming")}} インタフェースの **`containerName`** 読み取り専用プロパティは、コンテナの `name` 属性を返します。 コンテナは、全体として長いタスクに関係している iframe、embed、object などです。

## 構文

```
var containerName = TaskAttributionTiming.containerName;
```

### 値

コンテナの `name` 属性を含む {{domxref("DOMString")}}。

## 仕様

| 仕様                                                                                                             | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('Long Tasks','#dom-taskattributiontiming-containername','containerName')}} | {{Spec2('Long Tasks')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.TaskAttributionTiming.containerName")}}
