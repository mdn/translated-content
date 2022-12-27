---
title: TaskAttributionTiming
slug: Web/API/TaskAttributionTiming
---

{{SeeCompatTable}}{{APIRef("Long Tasks")}}

[Long Tasks API](/ja/docs/Web/API/Long_Tasks_API) の **`TaskAttributionTiming`** インターフェイスは、長いタスクに関連する作業とそれに関連するフレームコンテキストに関する情報を返します。 コンテナとも呼ばれるフレームコンテキストは、全体として長いタスクに関係している iframe、embed、object です。

{{InheritanceDiagram}}

## プロパティ

- {{domxref('TaskAttributionTiming.containerType')}} {{readonlyinline}}
  - : フレームコンテナのタイプ（`iframe`、`embed`、`object` のいずれか）を返します。
- {{domxref('TaskAttributionTiming.containerSrc')}} {{readonlyinline}}
  - : コンテナの `src` 属性を返します。
- {{domxref('TaskAttributionTiming.containerId')}} {{readonlyinline}}
  - : コンテナの `id` 属性を返します。
- {{domxref('TaskAttributionTiming.containerName')}} {{readonlyinline}}
  - : コンテナの `name` 属性を返します。

## 仕様

| 仕様                                                                                                     | 状態                             | コメント |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('Long Tasks','#sec-TaskAttributionTiming','TaskAttributionTiming')}} | {{Spec2('Long Tasks')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.TaskAttributionTiming")}}
