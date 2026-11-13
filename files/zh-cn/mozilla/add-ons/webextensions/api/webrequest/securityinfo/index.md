---
title: webRequest.SecurityInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/SecurityInfo
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

描述特定 Web 请求安全属性的对象。此类型的对象由 {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API 返回。

如果请求未使用 [TLS](/zh-CN/docs/Glossary/TLS) 加密，则此对象将只包含取值为 `"insecure"` 的 `state` 属性。

## 类型

此类型的值是对象，包含以下属性：

- `certificates`
  - : {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}} 的数组（`Array`）。如果调用 {{WebExtAPIRef("webRequest.getSecurityInfo()")}} 时传入了值为 `true` 的 `certificateChain` 选项，则此数组将包含证书链中所有证书（从服务器证书到信任根证书）的 `CertificateInfo` 对象。

    否则，它将仅包含服务器证书的 `CertificateInfo` 对象。

- `certificateTransparencyStatus` {{optional_inline}}
  - : `String`。指示连接的[证书透明度](https://certificate.transparency.dev/)状态。可能取值包括：
    - “not_applicable”
    - “policy_compliant”
    - “policy_not_enough_scts”
    - “policy_not_diverse_scts”

- `cipherSuite` {{optional_inline}}
  - : `String`。用于连接的密码套件，按 [TLS 规范](https://datatracker.ietf.org/doc/html/rfc5246#appendix-A.5)格式表示，如“TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256”。
- `errorMessage` {{optional_inline}}
  - : `String`。如果 TLS 握手出现问题（例如证书已过期，或找不到受信任的根，或证书被撤销），则 `status` 将为“broken”且 `errorMessage` 属性将包含描述错误的字符串（取自 Firefox 内部错误代码列表）。

    需要注意，你现在只能在 `onHeaderReceived` 监听器中调用 `getSecurityInfo()`，并且在握手失败时不会触发 `onHeaderReceived` 事件。因此在现实中该属性将不会被设置。

- `hsts` {{optional_inline}}
  - : `Boolean`。如果主机使用[严格传输安全](/zh-CN/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)则为 `true`，否则为 `false`。
- `isDomainMismatch` {{optional_inline}}
  - : `Boolean`。如果服务器的域名与其证书中的域名不匹配则为 `true`，否则为 `false`。
- `isExtendedValidation` {{optional_inline}}
  - : `Boolean`。如果服务器具有[扩展验证证书](https://en.wikipedia.org/wiki/Extended_Validation_Certificate)则为 `true`，否则为 `false`。
- `isNotValidAtThisTime` {{optional_inline}}
  - : `Boolean`。如果当前时间超出服务器证书的有效期（即证书已过期或尚未生效）则为 `true`，否则为 `false`。
- `isUntrusted` {{optional_inline}}
  - : `Boolean`。如果无法构造到受信任的根证书的链则为 `true`，否则为 `false`。
- `keaGroupName` {{optional_inline}}
  - : `String`。如果 `state` 为“secure”，则描述此请求中使用的密钥交换算法。
- `protocolVersion` {{optional_inline}}
  - : `String`。使用的 TLS 协议版本，可以取以下值之一：
    - “TLSv1”
    - “TLSv1.1”
    - “TLSv1.2”
    - “TLSv1.3”
    - “unknown”（如果版本无效）

- `secretKeyLength` {{optional_inline}}
  - : `Number`。密钥长度（以位为单位）。

- `signatureSchemeName` {{optional_inline}}
  - : `String`。如果 `state` 为“secure”，则该属性描述此请求中使用的签名方案。
- `state`
  - : `String`。连接的状态，可以取以下值之一：
    - “broken”：TLS 握手失败（例如，证书已过期）
    - “insecure”：连接不是 TLS 连接
    - “secure”：连接是安全的 TLS 连接
    - “weak”：连接是 TLS 连接，但被认为是弱的。你可以检查 `weaknessReasons` 以找出问题。

    但请注意，你现在只能在 `onHeaderReceived` 监听器中调用 `getSecurityInfo()`，并且在握手失败时不会触发 `onHeaderReceived` 事件。因此在现实中该属性将不会被设置。

- `usedDelegatedCredentials` {{optional_inline}}
  - : `Boolean`。如果连接使用了委托凭据则为 `true`，否则为 `false`。

- `usedEch` {{optional_inline}}
  - : `Boolean`。如果连接使用了加密客户端问候（ECH）则为 `true`，否则为 `false`。

- `usedOcsp` {{optional_inline}}
  - : `Boolean`。如果连接发起了在线证书状态协议（OCSP）请求则为 `true`，否则为 `false`。

- `usedPrivateDns` {{optional_inline}}
  - : `Boolean`。如果连接进行了私有 DNS（如 DoH（DNS over HTTPS））查询则为 `true`，否则为 `false`。

- `weaknessReasons` {{optional_inline}}
  - : `String`。如果 `state` 为“weak”，则指示原因。现在该属性只可能为“cipher”，指示协商的密码套件被认为是弱的。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}
