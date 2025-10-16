---
title: Accept-Ranges
slug: Web/HTTP/Reference/Headers/Accept-Ranges
l10n:
  sourceCommit: eddef03cfbc7f50806a348f4093601033a7976fc
---

**`Accept-Ranges`** HTTP 响应标头是服务器使用的一个标记，用于向客户端宣传其对文件下载的部分请求的支持。此字段的值表示可用于定义范围的单位。

当存在 `Accept-Ranges` 标头时，浏览器可能会尝试*恢复*中断的下载，而不是尝试重新启动下载。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## 指令

- `<range-unit>`
  - : 定义了服务器所支持的范围单位。尽管根据 {{RFC("7233")}} 正式定义的唯一范围单位是 `bytes`，但可以通过 [HTTP 范围单位注册表](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)注册额外的范围单位。
- `none`
  - : 表示不支持任何范围单位。这使得该标头等同于其不存在的状态，因此很少使用。然而在某些浏览器中，例如 IE9，此设置被用来禁用或移除下载管理器中的暂停按钮。

## 示例

```http
Accept-Ranges: bytes
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- [IANA HTTP 范围单位注册表](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
