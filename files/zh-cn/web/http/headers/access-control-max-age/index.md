---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Access-Control-Max-Age`** 响应标头指示了{{glossary("preflight request", "预检请求")}}（即包含在 {{HTTPHeader("Access-Control-Allow-Methods")}} 和 {{HTTPHeader("Access-Control-Allow-Headers")}} 标头中的信息）的结果能够被缓存多久。

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
Access-Control-Max-Age: <delta-seconds>
```

## 指令

- \<delta-seconds>
  - : 结果可被缓存的最大秒数，以无符号非负整数表示。Firefox [上限为 24 小时](https://searchfox.org/mozilla-central/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1207)（86400 秒）。Chromium（76 版本之前）[上限为 10 分钟](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36)（600 秒）。Chromium（从 76 版本开始）[上限为 2 小时](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;l=31)（7200 秒）。默认值为 5 秒。

## 示例

将预检请求的结果缓存 10 分钟：

```http
Access-Control-Max-Age: 600
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
