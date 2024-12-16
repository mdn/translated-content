---
title: document.querySelector
slug: Web/API/Document/querySelector
---

{{ApiRef()}}

## 摘要

回傳 document 第一個符合特定選擇器群組的元素（採用深度優先，前序追蹤 document 節點）。

## 語法

```plain
element = document.querySelector(selectors);
```

其中

- `element` 是[元素](/zh-TW/docs/Web/API/Element)物件。
- `selectors` 是以逗號分隔，包含一個或多個 CSS 選擇器的字串。

## 範例

這個範例會回傳 document 選到的第一個 "`myclass`" class：

```js
var el = document.querySelector(".myclass");
```

## 注意事項

若找不到相應元素就會回傳 `null`，否則回傳第一個符合的元素。

若選擇器符合某 ID，且該 ID 在 document 中誤用數次，就會回傳第一個符合的元素。

當特定選擇器群組無效，會擲回 `SYNTAX_ERR` 例外狀況。

`querySelector()` 是由 Selectors API 引入的選擇器。

傳入 `querySelector` 的字串參數必須遵循 CSS 語法。若要選取未遵循 CSS 語法的 ID 或選擇器（例如不當使用冒號或空格），必須強制加上兩個反斜線來跳脫錯誤的字元：

```html
<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  document.querySelector("#foo\bar"); // 甚麼都沒選到
  document.querySelector("#foo\\\\bar"); // 選到第一個 div
  document.querySelector("#foo:bar"); // 甚麼都沒選到
  document.querySelector("#foo\\:bar"); // 選到第二個 div
</script>
```

## 瀏覽器相容性

{{Compat}}

## 規範

{{Specifications}}

## 詳見

- {{domxref("document.querySelectorAll()")}}
- {{domxref("element.querySelector()")}}
- {{domxref("element.querySelectorAll()")}}
- [querySelector 代碼片段](/zh-TW/docs/Code_snippets/QuerySelector)
