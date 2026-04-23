---
title: Error：columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

{{jsxref("Error")}} 實例的 **`columnNumber`** 資料屬性，包含引發此錯誤的檔案該行中的欄號。

## 值

一個正整數。

{{js_property_attributes(1, 0, 1)}}

## 範例

### 使用 columnNumber

```js
try {
  throw new Error("無法解析輸入");
} catch (err) {
  console.log(err.columnNumber); // 9
}
```

## 規範

不屬於任何標準。

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.fileName")}}
