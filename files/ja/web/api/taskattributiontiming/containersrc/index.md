---
title: TaskAttributionTiming.containerSrc
slug: Web/API/TaskAttributionTiming/containerSrc
---

{{SeeCompatTable}}{{APIRef("Long Tasks")}}

{{domxref("TaskAttributionTiming")}} インターフェイスの **`containerSrc`** 読み取り専用プロパティは、コンテナの `src` 属性を返します。 コンテナは、全体として長いタスクに関係している iframe、embed、object などです。

## 構文

```
var containerSrc = TaskAttributionTiming.containerSrc;
```

### 値

コンテナの `src` 属性を含む {{domxref("DOMString")}}。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.TaskAttributionTiming.containerSrc")}}
