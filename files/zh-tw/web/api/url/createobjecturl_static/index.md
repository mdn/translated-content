---
title: URL.createObjectURL()
slug: Web/API/URL/createObjectURL_static
---

{{ApiRef("URL API")}}{{SeeCompatTable}}

## 摘要

靜態方法 **`URL.createObjectURL()`** 用於建立一個帶有 URL 的 {{domxref("DOMString")}} 以代表參數中所傳入的物件. 該 URL 的生命週期與創造它的 window 中的 {{domxref("document")}}一致. 這個新的物件 URL 代表了所指定的 {{domxref("File")}} 物件 或是 {{domxref("Blob")}} 物件。

{{AvailableInWorkers}}

## 語法

```plain
objectURL = URL.createObjectURL(blob);
```

## 參數

- _blob_
  - : 一個用以建立物件 URL 的 {{domxref("File")}} 物件 或是 {{domxref("Blob")}} 物件.

## 範例

參見 [Using object URLs to display images](/zh-TW/docs/Using_files_from_web_applications#Example.3A_Using_object_URLs_to_display_images).(藉由物件 URL 來顯示圖像)

## 注意事項

每次呼叫 `createObjectURL()` 都會產生一個新的 URL, 不論是否曾以同一物件產生過. 當你不再需要它們的時候必須對每一個都呼叫 {{domxref("URL.revokeObjectURL()")}} 來釋放它們. 瀏覽器會在 document 被 unload 時自動釋放它們; 然而, 為了最佳化效能與記憶體用量, 當有安全的時機請務必手動釋放它們.

## 規範文件

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 另見

- {{domxref("URL.revokeObjectURL()")}}
- [Using files from web applications](/zh-TW/docs/Using_files_from_web_applications)
