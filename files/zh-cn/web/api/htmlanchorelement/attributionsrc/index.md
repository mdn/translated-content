---
title: HTMLAnchorElement：attributionSrc 属性
slug: Web/API/HTMLAnchorElement/attributionSrc
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

{{domxref("HTMLAnchorElement")}} 接口的 **`attributionSrc`** 属性用于以编程方式获取和设置 {{htmlelement("a")}} 元素上的 [`attributionsrc`](/zh-CN/docs/Web/HTML/Reference/Elements/a#attributionsrc) 属性，反映该属性的值。`attributionsrc` 指定你希望浏览器发送 {{httpheader("Attribution-Reporting-Eligible")}} 标头。在服务器端，这用于触发在响应中发送 {{httpheader("Attribution-Reporting-Register-Source")}} 标头，以注册一个[基于导航的归因来源](/zh-CN/docs/Web/API/Attribution_Reporting_API/Registering_sources#基于导航的归因来源)。

当浏览器接收到导航响应时，它会存储与基于导航的归因来源相关联的源数据（如 {{httpheader("Attribution-Reporting-Register-Source")}} 响应标头中所提供的数据）。

参见[归因报告 API](/zh-CN/docs/Web/API/Attribution_Reporting_API) 以获取更多详细信息。

> [!NOTE]
> `<a>` 元素不能用作归因触发器，只能用作归因来源。

## 值

一个字符串。此属性有两个版本可供获取和设置：

- 空字符串，即 `aElem.attributionSrc=""`。这表示你希望将 {{httpheader("Attribution-Reporting-Eligible")}} 标头发送到 `href` 属性所指向的同一服务器。当你在同一服务器上处理归因来源注册时，这是合适的。
- 包含一个或多个 URL 的值，例如：

  ```js
  aElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  当请求的资源不在你控制的服务器上，或者你只是想在不同的服务器上处理归因来源注册的情况下非常有用。在这种情况下，你可以指定一个或多个 URL 作为 `attributionSrc` 的值。当资源请求发生时，除了资源来源之外，还会向 `attributionSrc` 中指定的 URL 发送 {{httpheader("Attribution-Reporting-Eligible")}} 标头。然后，这些 URL 可以通过回复 {{httpheader("Attribution-Reporting-Register-Source")}} 来注册来源。

  > [!NOTE]
  > 指定多个 URL 意味着可以在同一功能上注册多个归因来源。例如，你可能有不同的营销活动需要衡量其成功效果，这些活动涉及基于不同数据生成不同的报告。

## 示例

### 设置空的 attributionSrc

```html
<a href="https://shop.example"> 点击访问我们的商店 </a>
```

```js
const aElem = document.querySelector("a");
aElem.attributionSrc = "";
```

### 设置包含 URL 的 attributionSrc

```html
<a href="https://ourshop.example"> 点击访问我们的商店 </a>
```

```js
// 对 URL 进行编码，以防它们包含特殊字符
// 例如“=”，这种字符可能会被错误地解析。
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const aElem = document.querySelector("a");
aElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [归因报告 API](/zh-CN/docs/Web/API/Attribution_Reporting_API)
