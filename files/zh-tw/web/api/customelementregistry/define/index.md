---
title: Document.registerElement()
slug: Web/API/CustomElementRegistry/define
---

{{APIRef("DOM")}}{{Deprecated_header}}

> **警告：** document.registerElement() 已經被棄用，建議使用 [customElements.define()](/zh-TW/docs/Web/API/CustomElementRegistry/define).

**`document.registerElement()`** 可以在瀏覽器中註冊一個新的自訂標籤(元素)and returns a constructor for the new element.

> **備註：** This is an experimental technology. The browser you use it in must support Web Components. See [Enabling Web Components in Firefox](/zh-TW/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox).

## 語法

```plain
var constructor = document.registerElement(tag-name, options);
```

### 參數

- _標籤名稱_
  - : 自訂的標籤名稱需有一個 橫線 ( - ), 例如`my-tag`.
- _options {{optional_inline}}_
  - : An object with properties **prototype** to base the custom element on, and **extends**, an existing tag to extend. Both of these are optional.

## 例子

這是一個非常簡單的例子:

```js
var Mytag = document.registerElement("my-tag");
```

現在新的標籤已經在瀏覽器中註冊了. The `Mytag` variable holds a constructor that you can use to create a `my-tag` element in the document as follows:

```js
document.body.appendChild(new Mytag());
```

This inserts an empty `my-tag` element that will be visible if you use the browser's developer tools. It will not be visible if you use the browser's view source capability. And it won't be visible in the browser unless you add some content to the tag. Here is one way to add content to the new tag:

```js
var mytag = document.getElementsByTagName("my-tag")[0];
mytag.textContent = "I am a my-tag element.";
```

## 瀏覽器支援性

{{Compat}}

## 也看一下

- [Custom Elements](/zh-TW/docs/Web/Web_Components/Custom_Elements)
