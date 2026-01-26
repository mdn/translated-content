---
title: Window：print() 方法
short-title: print()
slug: Web/API/Window/print
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}}

開啟列印對話框以列印目前的文件。

若呼叫此函式時文件仍在載入中，則文件將在開啟列印對話框前完成載入。

當列印對話框開啟時，此方法將會阻塞。

## 語法

```js-nolint
print()
```

### 參數

無。

### 回傳值

無（{{jsxref("undefined")}}）。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [列印](/zh-TW/docs/Web/CSS/Guides/Media_queries/Printing)
- {{ domxref("window.beforeprint_event", "beforeprint") }} 事件
- {{ domxref("window.afterprint_event", "afterprint") }} 事件
