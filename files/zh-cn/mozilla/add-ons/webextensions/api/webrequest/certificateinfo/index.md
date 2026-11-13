---
title: webRequest.CertificateInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/CertificateInfo
l10n:
  sourceCommit: 6954b3f1f3b1182f36b5d3f60fb6461be371ef2d
---

描述一项 [X.509 证书](https://datatracker.ietf.org/doc/html/rfc5280) 的对象。

{{WebExtAPIRef("webRequest.getSecurityInfo()")}} API 返回的 {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} 对象包含该对象数组的 `certificates` 属性。

## 类型

该类型的值是一个对象。其包含以下属性：

- `fingerprint`
  - : `Object`。包含下列属性的对象：
    - `sha1`
      - : `String`。证书 DER 编码的 SHA-1 散列值。
    - `sha256`
      - : `String`。证书 DER 编码的 SHA-256 散列值。

- `isBuiltInRoot`
  - : `Boolean`。当证书是在浏览器中安装的信任根证书之一时为 `true`，否则为 `false`。
- `issuer`
  - : `String`。颁发此证书的组织的专有名称，格式化为逗号分隔的相对专有名称的列表，其中各项的形式都是“type=value”。

    例如“CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US”。

- `rawDER`
  - : `Number` 的数组（`Array`）。若 [`webRequest.getSecurityInfo()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo) 被调用时包含 `rawDER` 选项并设置为 `true`，则该属性将包含证书的 DER 编码。
- `serialNumber`
  - : `String`。证书的[序列号](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.2).
- `subject`
  - : `String`。被颁发此证书的组织的专有名称，格式化为逗号分隔的相对专有名称的列表，其中各项的形式都是“type=value”。

    例如“CN=\*.cdn.mozilla.net,O=Mozilla Corporation,L=Mountain View,ST=California,C=US”。

- `subjectPublicKeyInfoDigest`
  - : `Object`。包含下列属性的对象：
    - `sha256`
      - : `String`。DER 编码的[公钥信息](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.7)的 SHA-256 散列值的 Base64 编码。

- `validity`
  - : `Object`。该证书的有效期。包含下列属性的对象：
    - `start`
      - : `Number`。证书有效期的开始时间，以[自纪元以来的毫秒数](https://zh.wikipedia.org/wiki/Unix时间)表示。
    - `end`
      - : `Number`。证书有效期的结束时间，以[自纪元以来的毫秒数](https://zh.wikipedia.org/wiki/Unix时间)表示。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}
