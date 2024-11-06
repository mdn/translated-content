---
title: FormData
slug: Web/API/FormData
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

**`FormData`** 介面可為表單資料中的欄位/值建立相對應的的鍵/值對（key/value）集合，之後便可使用 {{domxref("XMLHttpRequest.send()")}} 方法來送出資料。它在編碼類型設定為 `multipart/form-data` 時會採用與表單相同的格式送出。

實作 `FormData` 的物件可以直接利用 {{jsxref("Statements/for...of", "for...of")}} 語法結構來替代 {{domxref('FormData.entries()', 'entries()')}}：`for (var p of myFormData)` 等同於 `for (var p of myFormData.entries())`。

## 建構式

- {{domxref("FormData.FormData","FormData()")}}
  - : 建立一個新的 `FormData` 物件。

## 方法

- {{domxref("FormData.append()")}}
  - : 追加新值到 `FormData` 物件已有的對應鍵上；若該鍵不存在，則為其追加新的鍵。
- {{domxref("FormData.delete()")}}
  - : 刪除指定的鍵值對。
- {{domxref("FormData.entries()")}}
  - : 回傳 {{jsxref("Iteration_protocols","iterator")}}，可用來處理物件中所有的鍵值對。
- {{domxref("FormData.get()")}}
  - : 回傳指定的鍵在 `FormData` 物件中找到的第一個對應值。
- {{domxref("FormData.getAll()")}}
  - : 回傳指定的鍵在 `FormData` 物件中所有對應值的陣列。
- {{domxref("FormData.has()")}}
  - : 回傳 `FormData` 物件是否含有指定鍵值對的布林值。
- {{domxref("FormData.keys()")}}
  - : 回傳 {{jsxref("Iteration_protocols", "iterator")}}，可用來處理物件中所有鍵值對之中的鍵。
- {{domxref("FormData.set()")}}
  - : 為 `FormData` 物件已有的鍵設定新值；若該鍵不存在，則為其追加新的鍵。
- {{domxref("FormData.values()")}}
  - : 回傳 {{jsxref("Iteration_protocols", "iterator")}}，可用來處理物件中所有鍵值對之中的值。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 FormData 物件](/zh-TW/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
