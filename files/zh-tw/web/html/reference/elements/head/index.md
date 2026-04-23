---
title: <head>
slug: Web/HTML/Reference/Elements/head
---

[HTML](/zh-TW/docs/Web/HTML) 中的 **`<head>`** 元素包含有關文件的機器可讀信息（後設資料），例如 [標題](/zh-TW/docs/Web/HTML/Reference/Elements/title)、[腳本](/zh-TW/docs/Web/HTML/Reference/Elements/script)、[樣式表](/zh-TW/docs/Web/HTML/Reference/Elements/style)。

> [!NOTE]
> `<head>` 主要保存用於機器處理的訊息，而不是人類可讀的訊息。對於人類可見的訊息，例如頂級標題和列出的作者，請參見 {{HTMLElement("header")}} 元素。

## 屬性

這個元件屬性含有[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)。

## 範例

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Document title</title>
  </head>
</html>
```

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Guides/Content_categories"
          >內容類型</a
        >
      </th>
      <td>無</td>
    </tr>
    <tr>
      <th scope="row">允許內容</th>
      <td>
        <p>
          如果文件是一個 {{HTMLElement("iframe")}}
          <a href="/zh-TW/docs/Web/HTML/Reference/Elements/iframe#srcdoc"><code>srcdoc</code></a> 文件，或者如果標題信息來自於更高級的協議（像是 HTML 電子郵件的主題行），則應包含零個或多個元素的後設資料內容。
        </p>
        <p>
          否則，必須包含一個或多個元素的後設資料內容，其中確實包括一個 {{HTMLElement("title")}} 元素。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>
        如果
        <code>&#x3C;head></code> 元素內的第一個內容是一個元素，則開起標籤可以省略。<br />如果跟在
        <code>&#x3C;head></code> 元素後面的第一個內容不是空格字符或註釋，則關閉標籤可以省略。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>作為 {{HTMLElement("html")}} 元素的第一個子元素。</td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>沒有允許的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLHeadElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 可以使用在 `<head>` 中的元素：
  - {{HTMLElement("title")}}
  - {{HTMLElement("base")}}
  - {{HTMLElement("link")}}
  - {{HTMLElement("style")}}
  - {{HTMLElement("meta")}}
  - {{HTMLElement("script")}}
  - {{HTMLElement("noscript")}}
  - {{HTMLElement("template")}}
