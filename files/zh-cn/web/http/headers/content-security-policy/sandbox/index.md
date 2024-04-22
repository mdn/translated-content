---
title: "CSP: sandbox"
slug: Web/HTTP/Headers/Content-Security-Policy/sandbox
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`sandbox`** directive enables a sandbox for the requested resource similar to the {{HTMLElement("iframe")}} [`sandbox`](/zh-CN/docs/Web/HTML/Element/iframe#sandbox) attribute. It applies restrictions to a page's actions including preventing popups, preventing the execution of plugins and scripts, and enforcing a same-origin policy.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Document directive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        This directive is not supported in the {{HTMLElement("meta")}}
        element or by the
        {{HTTPHeader("Content-Security-policy-Report-Only")}}
        header field.
      </th>
    </tr>
  </tbody>
</table>

## 句法

```plain
Content-Security-Policy: sandbox;
Content-Security-Policy: sandbox <value>;
```

`<value>`可以选择是以下值之一：

- `allow-forms`
  - : 允许嵌入式浏览上下文提交表单。如果未使用此关键字，则不允许此操作。
- `allow-modals`
  - : 允许嵌入式浏览上下文打开模态窗口。
- `allow-orientation-lock`
  - : 允许嵌入式浏览上下文禁用锁定屏幕方向的功能。
- `allow-pointer-lock`
  - : 允许嵌入式浏览上下文使用[Pointer Lock API](/zh-CN/docs/WebAPI/Pointer_Lock)。
- `allow-popups`
  - : 允许弹出窗口（像`window.open`，`target="_blank"`，`showModalDialog`）。如果未使用此关键字，则该功能将无提示失败。
- `allow-popups-to-escape-sandbox`
  - : 允许沙盒文档打开新窗口而不强制沙盒标记。例如，这将允许安全地沙箱化第三方广告，而不会对登陆页面施加相同的限制。
- `allow-presentation`
  - : 允许嵌入器控制 iframe 是否可以启动演示会话。
- `allow-same-origin`
  - : 允许将内容视为来自其正常来源。如果未使用此关键字，则嵌入的内容将被视为来自唯一来源。
- `allow-scripts`
  - : 允许嵌入式浏览上下文运行脚本（但不创建弹出窗口）。如果未使用此关键字，则不允许此操作。
- `allow-top-navigation`
  - : 允许嵌入式浏览上下文将内容导航（加载）到顶级浏览上下文。如果未使用此关键字，则不允许此操作。

## 例子

```bash
Content-Security-Policy: sandbox allow-scripts;
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- [`sandbox`](/zh-CN/docs/Web/HTML/Element/iframe#sandbox) attribute on {{HTMLElement("iframe")}} elements
