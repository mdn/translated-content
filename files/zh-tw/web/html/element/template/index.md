---
title: <template>
slug: Web/HTML/Element/template
---

{{HTMLSidebar}}

**HTML `<template>` 元素**是用作保存用戶端內容的機制。該內容在頁面載入時不受渲染，但可以在運行時使用 JavaScript 實例化。

你可以把 template 想成文件裡面，被儲存以待稍後使用的內容片段。在頁面載入時，解析器雖然會處理 `<template>` 元件的內容，但元素本身並不會被渲染。

| [內容類型](/zh-TW/docs/Web/HTML/Content_categories) | [元內容](/zh-TW/docs/Web/HTML/Content_categories#metadata_content)、[流內容](/zh-TW/docs/Web/HTML/Content_categories#flow_content)、[phrasing content](/zh-TW/docs/Web/HTML/Content_categories#phrasing_content)、支援腳本的元素 |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 允許內容                                            | 沒有限制                                                                                                                                                                                                                         |
| 標籤省略                                            | 不允許，開始和結束標籤都是必須的。                                                                                                                                                                                               |
| 允許的父元素                                        | {{HTMLElement("body")}}, {{HTMLElement("frameset")}}, {{HTMLElement("head")}}, {{HTMLElement("dl")}} and {{HTMLElement("colgroup")}} without a `span` attribute                                                                  |
| 允許的 ARIA roles                                   | 無                                                                                                                                                                                                                               |
| DOM 介面                                            | {{domxref("HTMLTemplateElement")}}                                                                                                                                                                                               |

## 屬性

本元素只允許[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

## 示例

我們先從 HTML 部分開始。

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- 在這裡可以選擇性地包括既有資料 -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

首先，我們有個稍後將透過 JavaScript 插入的表格。接著，我們把重點轉移到描述 HTML 內容模板結構的 template：它意味著一個表格的行。

現在表格已經建立、也定義了模板，所以我們將以 template 為基礎，用 JavaScript 把每個產生出來的行加到表格內。

```js
// 透過檢查 HTML template 元素屬性的存在與否，以測試瀏覽器是否支援它
if ("content" in document.createElement("template")) {
  // 使用現有 HTML tbody、行以及模板，來實例化表格
  var t = document.querySelector("#productrow"),
    td = t.content.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  // 複製新的行並將其插至表格
  var tb = document.querySelector("tbody");
  var clone = document.importNode(t.content, true);
  tb.appendChild(clone);

  // 複製新的行
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans";

  // 複製新的行並將其插至表格
  var clone2 = document.importNode(t.content, true);
  tb.appendChild(clone2);
} else {
  // 因為 HTML template 不被支援，所以要用其他方法在表格增加新行
}
```

結果會變成原生的 HTML 表格，它透過 JavaScript 產生了兩個新行：

```css hidden
table {
  background: #000;
}
table td {
  background: #fff;
}
```

{{EmbedLiveSample("示例", 500, 120)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- Web component：{{HTMLElement("slot")}}（還有過往的{{HTMLElement("shadow")}}）
