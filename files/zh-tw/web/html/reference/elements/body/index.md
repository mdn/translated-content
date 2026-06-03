---
title: <body>：文件主體元素
slug: Web/HTML/Reference/Elements/body
---

**`<body>`** [HTML](/zh-TW/docs/Web/HTML) 元素代表 HTML 文件的內容。一個文件中只能有一個 `<body>` 元素。

## 屬性

此元素包含[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

- `alink` {{deprecated_inline}}
  - : 在選取超連結文字時的顏色。
    **請勿使用此屬性！請使用 CSS 的 {{cssxref("color")}} 屬性配合 {{cssxref(":active")}} 偽類來代替。**
- `background` {{deprecated_inline}}
  - : 作為背景圖片使用的 URI。
    **請勿使用此屬性！請在元素上使用 CSS 的 {{cssxref("background")}} 屬性。**
- `bgcolor` {{deprecated_inline}}
  - : 文件的背景顏色。
    **請勿使用此屬性！請在元素上使用 CSS 的 {{cssxref("background-color")}} 屬性。**
- `bottommargin` {{deprecated_inline}}
  - : 主體的底部邊界。
    **請勿使用此屬性！請在元素上使用 CSS 的 {{cssxref("margin-bottom")}} 屬性。**
- `leftmargin` {{deprecated_inline}}
  - : 主體的左邊界。
    **請勿使用此屬性！請在元素上使用 CSS 的 {{cssxref("margin-left")}} 屬性。**
- `link` {{deprecated_inline}}
  - : 未訪問過的超文本鏈接文字的顏色。
    **請勿使用此屬性！請使用 CSS 的 {{cssxref("color")}} 属性配合 {{cssxref(":link")}} 偽類來代替。**
- `onafterprint`
  - : 在使用者列印文件後要調用的函數。
- `onbeforeprint`
  - : 當使用者要求列印文件時要調用的函數。
- `onbeforeunload`
  - : 當文件即將卸載時要調用的函數。
- `onblur`
  - : 當文件失去焦點時要調用的函數。
- `onerror`
  - : 當文件無法正確加載時要調用的函數。
- `onfocus`
  - : 當文件獲得焦點時要調用的函數。
- `onhashchange`
  - : 當文件的當前地址的片段標識符部分（以井號（`'#'`）字符開頭）發生更改時要調用的函數。
- `onlanguagechange`
  - : 當首選語言更改時要調用的函數。
- `onload`
  - : 當文件加載完成時要調用的函數。
- `onmessage`
  - : 當文件接收到消息時要調用的函數。
- `onoffline`
  - : 當網絡通信失敗時要調用的函數。
- `ononline`
  - : 當網絡通信恢復正常時要調用的函數。
- `onpopstate`
  - : 當使用者導航到會話歷史記錄時要調用的函數。
- `onredo`
  - : 當使用者在撤銷事務歷史記錄中前進時要調用的函數。
- `onresize`
  - : 當文件調整大小時要調用的函數。
- `onstorage`
  - : 當存儲區發生變化時要調用的函數。
- `onundo`
  - : 當使用者在撤銷事務歷史記錄中後退時要調用的函數。
- `onunload`
  - : 當文件即將離開時要調用的函數。
- `rightmargin` {{deprecated_inline}}
  - : 主體的右邊界。
    **請勿使用此屬性！請在元素上使用 CSS 的 {{cssxref("margin-right")}} 屬性。**
- `text` {{deprecated_inline}}
  - : 文字的前景色。
    **請勿使用此屬性！請在元素上使用 CSS 的 {{cssxref("color")}} 属性。**
- `topmargin` {{deprecated_inline}}
  - : 主體的頂部邊界。
    **請勿使用此屬性！請在元素上使用 CSS 的 {{cssxref("margin-top")}} 屬性。**
- `vlink` {{deprecated_inline}}
  - : 已訪問過的超文本鏈接文字的顏色。
    **請勿使用此屬性！請使用 CSS 的 {{cssxref("color")}} 属性配合 {{cssxref(":visited")}} 偽類來代替。**

## 範例

```html
<html lang="en">
  <head>
    <title>Document title</title>
  </head>
  <body>
    <p>
      The <code>&lt;body&gt;</code> HTML element represents the content of an
      HTML document. There can be only one <code>&lt;body&gt;</code> element in
      a document.
    </p>
  </body>
</html>
```

### 結果

{{EmbedLiveSample('範例')}}

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        無。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories#流內容"
          >流內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        如果其內容的第一個元素不是空格字符、註釋、{{HTMLElement("script")}} 元素或 {{HTMLElement("style")}} 元素，則可以省略開始標籤。如果 <code>&#x3C;body></code> 元素有內容或有開始標籤，且不是立即後跟註釋，則可以省略結束標籤。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        它必須是 {{HTMLElement("html")}} 元素的第二個元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-TW/docs/Web/Accessibility/ARIA/Roles/Generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>沒有允許的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>
        {{domxref("HTMLBodyElement")}}
        <ul>
          <li>
            <code>&#x3C;body></code> 元素公開 {{domxref("HTMLBodyElement")}} 介面。
          </li>
          <li>
            可通過 {{domxref("document.body")}} 屬性訪問 <code>&#x3C;body></code> 元素。
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}
