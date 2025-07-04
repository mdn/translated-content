---
title: Pragma
slug: Web/HTTP/Reference/Headers/Pragma
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{Deprecated_Header}}

HTTP **`Pragma`** 标头是一个与实现相关的标头，在请求——响应链中可能会产生各种不同的影响。此标头用于向后兼容不支持 HTTP/1.1 中 {{HTTPHeader("Cache-Control")}} 标头的 HTTP/1.0 缓存。

> [!NOTE] `Pragma` 标头并未在 HTTP 响应中定义，因此不能可靠地替代 HTTP/1.1 中的 `Cache-Control` 标头，虽然在请求中省略 `Cache-Control` 标头时，`Pragma` 的行为与 `Cache-Control: no-cache` 相同，但请仅将其用于向后兼容 HTTP/1.0 客户端。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>
        {{Glossary("Request header", "请求标头")}}、{{Glossary("Response header", "响应标头")}}（响应行为未作明确规定，且依赖于具体实现）。
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止修改的请求标头")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "列入 CORS 白名单的响应标头")}}
      </th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Pragma: no-cache
```

## 指令

- `no-cache`
  - : 与 `Cache-Control: no-cache` 相同。该设置会强制缓存将请求提交给源服务器进行验证，之后才会释放已缓存的副本。

## 示例

```http
Pragma: no-cache
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
