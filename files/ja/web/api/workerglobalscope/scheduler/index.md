---
title: "WorkerGlobalScope: scheduler プロパティ"
short-title: scheduler
slug: Web/API/WorkerGlobalScope/scheduler
l10n:
  sourceCommit: b2323759014333d2f36a27b05539d4856eb7f1fe
---

{{APIRef("Prioritized Task Scheduling API")}}

**`scheduler`** は {{domxref("WorkerGlobalScope")}} インターフェイスの読み取り専用プロパティで、[優先タスクスケジューリング API](/ja/docs/Web/API/Prioritized_Task_Scheduling_API) を使用するためのエントリーポイントです。

このオブジェクトには単一のインスタンスメソッド {{domxref('Scheduler.postTask()')}} があり、優先順位をつけたタスクをスケジューリングに使用します。

## 値

{{domxref("Scheduler")}} です。

## 例

下記のコードは、プロパティとそれに関連するインターフェイスのとても基本的な使用方法を示しています。
プロパティが存在するかどうかを調べ、プロミスを返すタスクを投稿する方法を示しています。

```js
// Check if the prioritized task API is supported
if ("scheduler" in self) {
  // Callback function - "the task"
  const myTask = () => "Task 1: user-visible";

  // Post task with default priority: 'user-visible' (no other options)
  // When the task resolves, Promise.then() logs the result.
  self.scheduler
    .postTask(myTask)
    // Handle resolved value
    .then((taskResult) => console.log(`${taskResult}`))
    // Handle error or abort
    .catch((error) => console.log(`Error: ${error}`));
} else {
  console.log("Feature: NOT Supported");
}
```

この API の使い方を示す全体的なサンプルコードは、[優先タスクスケジューリング API > 例](/ja/docs/Web/API/Prioritized_Task_Scheduling_API#例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [優先タスクスケジューリング API](/ja/docs/Web/API/Prioritized_Task_Scheduling_API)
- {{domxref('Scheduler.postTask()')}}
- {{domxref('TaskController')}}
- {{domxref("Window.scheduler")}}
