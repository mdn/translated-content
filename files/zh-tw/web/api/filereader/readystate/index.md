---
title: FileReader.readyState
slug: Web/API/FileReader/readyState
---

{{APIRef("File API")}}

提供目前讀取狀態

## 語法

```plain
var state = instanceOfFileReader.readyState
```

## 數值

數字代表 {{domxref("FileReader")}} API 三個可能的狀態：

| Value | State     | Description                                                   |
| ----- | --------- | ------------------------------------------------------------- |
| `0`   | `EMPTY`   | Reader has been created. None of the read methods called yet. |
| `1`   | `LOADING` | A read method has been called.                                |
| `2`   | `DONE`    | The operation is complete.                                    |

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 閱讀更多

- {{domxref("Blob")}}
