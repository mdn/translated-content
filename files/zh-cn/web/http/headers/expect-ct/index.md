---
title: Expect-CT
slug: Web/HTTP/Headers/Expect-CT
---

{{HTTPSidebar}}

`Expect-CT` 标头允许站点选择性地报告和/或执行[证书透明度（Certificate Transparency）](/zh-CN/docs/Web/Security/Certificate_Transparency)要求，来防止错误签发的网站证书的使用不被察觉。

证书透明的要求可以通过以下任意一种方式来满足：

- X.509v3 证书扩展，允许嵌入独立的日志记录的证书签署时间戳（signed certificate timestamp）
- 握手期间发送的 `signed_certificate_timestamp` 类型的 TLS 扩展
- 支持 OCSP 装订（即，`status_request` TLS 扩展）并提供 `SignedCertificateTimestampList`

> **备注：** 当站点启用 `Expect-CT` 标头时，会要求浏览器检查当前站点的证书是否出现在[**公共证书透明度日志**](https://github.com/google/certificate-transparency-community-site/blob/master/docs/google/known-logs.md)之中。

> **备注：** 浏览器会**忽略** HTTP 连接的 `Expect-CT` 标头；该标头仅在 HTTPS 连接中有效。

> **备注：** `Expect-CT` 标头可能会在 2021 年 6 月废弃。从 2018 年 5 月起，新的证书默认支持证书签署时间戳（SCT）。2018 年 3 月之前的证书的有效期为 39 个月，这些证书都会在 2021 年 6 月前过期。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">标头类型</th>
   <td>{{Glossary("Response header", "响应标头")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
   <td>是</td>
  </tr>
 </tbody>
</table>

## 语法

```
Expect-CT: report-uri="<uri>",
           enforce,
           max-age=<age>
```

## 指令

- `max-age`

  - : 该指令指定接收到 `Expect-CT` 标头后的秒数，在此期间用户代理应将收到消息的主机视为已知的 `Expect-CT` 主机。

    如果缓存接收到的值大于它可以表示的值，或者如果其随后的计算溢出，则缓存将认为该值为 2147483648（2 的 31 次幂）或其可以表示的最大正整数。

- `report-uri="<uri>"` {{optional_inline}}

  - : 该指令指定用户代理报告 `Expect-CT` 错误的 URI。

    当和 `enforce` 指令共同存在时，这种配置被称为“强制执行和报告”配置，示意用户代理既应该强制遵守证书透明度政策，也应当报告违规行为。

- `enforce` {{optional_inline}}

  - : 该指令示意用户代理应强制遵守证书透明度政策（而不是只报告合规性），并且用户代理应拒绝违反证书透明度政策的之后连接。

    当 `enforce` 指令和 `report-uri` 指令共同存在时，这种配置被称为“强制执行和报告”配置，示意用户代理既应该强制遵守证书透明度政策，也应当报告违规行为。

## 示例

以下示例指定在 24 小时内遵守证书透明度政策，并向 `foo.example.com` 报告违规行为。

```
Expect-CT: max-age=86400, enforce, report-uri="https://foo.example.com/report"
```

## 说明

手动添加到信任库的根 CA 会覆盖和禁止 `Expect-CT` 的报告/执行。

除非网站“证明”它可以提供满足证书透明度要求的证书，否则浏览器不会缓存 `Expect-CT` 策略。浏览器实现了自己的信任模型，关于哪些证书应该被信任的信息已被记录到了证书透明度日志中。

对于缓存了的 `Expect-CT` 策略，Chrome 会在缓存的 10 周以后停止对相应策略的强制执行。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
