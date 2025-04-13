---
title: webRequest.SecurityInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/SecurityInfo
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

描述特定 Web 请求安全属性的对象。此类型的对象由 {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API 返回。

如果请求未使用 [TLS](/zh-CN/docs/Glossary/TLS) 进行保护，则此对象将仅包含属性 `state`，其值为 "insecure"。

## 类型

此类型的值是对象。它们包含以下属性：

- `certificates`

  - : `Array` of {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}}。如果 {{WebExtAPIRef("webRequest.getSecurityInfo()")}} 被调用时带有 `certificateChain` 选项并设置为 `true`，则它将包含从服务器证书到信任根的链中每个证书的 `CertificateInfo` 对象。

    否则，它将仅包含服务器证书的单个 `CertificateInfo` 对象。

- `certificateTransparencyStatus` {{optional_inline}}

  - : `String`。指示连接的[证书透明度](https://certificate.transparency.dev/)状态。可能的值包括：

    - "not_applicable"
    - "policy_compliant"
    - "policy_not_enough_scts"
    - "policy_not_diverse_scts"

- `cipherSuite` {{optional_inline}}
  - : `String`。用于连接的密码套件，格式符合[ TLS 规范](https://datatracker.ietf.org/doc/html/rfc5246#appendix-A.5)：例如，"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"。
- `errorMessage` {{optional_inline}}

  - : `String`。如果 TLS 握手出现问题（例如，证书已过期，或找不到受信任的根，或证书被撤销），则 `status` 将为 "broken"，`errorMessage` 属性将包含描述错误的字符串，该字符串来自 Firefox 的内部错误代码列表。

    但请注意，目前您只能在 `onHeaderReceived` 侦听器中调用 `getSecurityInfo()`，并且在握手失败时不会触发 `onHeaderReceived` 事件。因此在实践中，这将永远不会被设置。

- `hsts` {{optional_inline}}
  - : `Boolean`。如果主机使用[严格传输安全性](/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security)，则为 `true`，否则为 `false`。
- `isDomainMismatch` {{optional_inline}}
  - : `Boolean`。如果服务器的域名与其证书中的域名不匹配，则为 `true`，否则为 `false`。
- `isExtendedValidation` {{optional_inline}}
  - : `Boolean`。如果服务器具有[扩展验证证书](https://en.wikipedia.org/wiki/Extended_Validation_Certificate)，则为 `true`，否则为 `false`。
- `isNotValidAtThisTime` {{optional_inline}}
  - : `Boolean`。如果当前时间超出服务器证书的有效期（即证书已过期或尚未生效），则为 `true`，否则为 `false`。
- `isUntrusted` {{optional_inline}}
  - : `Boolean`。如果无法构造到受信任的根证书的链，则为 `true`，否则为 `false`。
- `keaGroupName` {{optional_inline}}
  - : `String`。如果 `state` 为 "secure"，则描述此请求中使用的密钥交换算法。
- `protocolVersion` {{optional_inline}}

  - : `String`。使用的 TLS 协议版本。以下之一：

    - "TLSv1"
    - "TLSv1.1"
    - "TLSv1.2"
    - "TLSv1.3"
    - "unknown"（如果版本无效）

- `secretKeyLength` {{optional_inline}}

  - : `Number`。以位为单位的密钥长度。

- `signatureSchemeName` {{optional_inline}}
  - : `String`。如果 `state` 为 "secure"，则描述此请求中使用的签名方案。
- `state`

  - : `String`。连接的状态。以下之一：

    - "broken"：TLS 握手失败（例如，证书已过期）
    - "insecure"：连接不是 TLS 连接
    - "secure"：连接是安全的 TLS 连接
    - "weak"：连接是 TLS 连接，但被认为是弱的。您可以检查 `weaknessReasons` 以找出问题。

    但请注意，目前您只能在 `onHeaderReceived` 侦听器中调用 `getSecurityInfo()`，并且在握手失败时不会触发 `onHeaderReceived` 事件。因此在实践中，这将永远不会被设置为 "broke"。

- `usedDelegatedCredentials` {{optional_inline}}

  - : `Boolean`。如果连接使用了委托凭据，则为 `true`，否则为 `false`。

- `usedEch` {{optional_inline}}

  - : `Boolean`。如果连接使用了 ECH（加密客户端 Hello），则为 `true`，否则为 `false`。

- `usedOcsp` {{optional_inline}}

  - : `Boolean`。如果连接发出了 OCSP（在线证书状态协议）请求，则为 `true`，否则为 `false`。

- `usedPrivateDns` {{optional_inline}}

  - : `Boolean`。如果连接进行了私有 DNS 查找，例如使用 DoH（DNS over HTTPS），则为 `true`，否则为 `false`。

- `weaknessReasons` {{optional_inline}}
  - : `String`。如果 `state` 为 "weak"，则指示原因。目前这可能仅包含单个值 "cipher"，指示协商的密码套件被认为是弱的。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}
