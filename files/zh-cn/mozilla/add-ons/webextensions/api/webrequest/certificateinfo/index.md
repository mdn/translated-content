---
title: webRequest.CertificateInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/CertificateInfo
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

描述一项 [X.509 证书](https://datatracker.ietf.org/doc/html/rfc5280) 的对象。

{{WebExtAPIRef("webRequest.getSecurityInfo()")}} API 返回的 {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} 对象包含是该对象数组的 `certificates` 属性。

## 类型

该类型的取值是包含下列属性的对象：

- `fingerprint`

  - : `Object`。包含下列属性的对象：

    - `sha1`
      - : `String`。证书的 DER 编码的 SHA-1 哈希值。
    - `sha256`
      - : `String`。证书的 DER 编码的 SHA-256 哈希值。

- `isBuiltInRoot`
  - : `Boolean`。如果证书是在浏览器中安装的信任根证书之一则为 `true`，否则为 `false`。
- `issuer`

  - : `String`。颁发此证书的组织名称，表示为一个区分名称，并格式化为逗号分隔的相对区分名称的列表，其中各项的形式都是 "type=value"。

- `rawDER`
  - : `Number` 的数组（`Array`）。若果 [`webRequest.getSecurityInfo()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo) 被调用时包含 `rawDER` 选项并设置为 `true`，则该项包含证书的 DER 编码。
- `serialNumber`
  - : `String`。证书的[序列号](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.2).
- `subject`

  - : `String`。签发给该证书的组织名称，表示为一个区分名称，并格式化为逗号分隔的相对区分名称的列表，其中各项的形式都是 "type=value"。

    例如：`"CN=*.cdn.mozilla.net,O=Mozilla Corporation,L=Mountain View,ST=California,C=US"`。

- `subjectPublicKeyInfoDigest`

  - : `Object`。包含下列属性的对象：

    - `sha256`
      - : `String`。DER 编码的[公钥信息](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.7)的 SHA-256 哈希值的 Base64 编码。

- `validity`

  - : `Object`。该证书的有效期。包含下列属性的对象：

    - `start`
      - : `Number`。证书有效期的开始时间，以[自纪元以来的毫秒数](https://zh.wikipedia.org/wiki/Unix时间)表示。
    - `end`
      - : `Number`。证书有效期的结束时间，以[自纪元以来的毫秒数](https://zh.wikipedia.org/wiki/Unix时间)表示。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}
