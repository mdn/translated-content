---
title: MediaKeySystemAccess
slug: Web/API/MediaKeySystemAccess
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}} {{SecureContext_Header}}

[加密媒体扩展 API](/zh-CN/docs/Web/API/Encrypted_Media_Extensions_API) 的 **`MediaKeySystemAccess`** 接口提供对密钥系统的访问，用于解密和/或内容保护提供程序。你可以使用 {{domxref("Navigator.requestMediaKeySystemAccess","Navigator.requestMediaKeySystemAccess()")}} 方法请求此对象的实例。

## 实例属性

- {{domxref("MediaKeySystemAccess.keySystem")}} {{ReadOnlyInline}}
  - : 返回一个用于标识正在使用的密钥系统的字符串。

## 实例方法

- {{domxref("MediaKeySystemAccess.createMediaKeys()")}}
  - : 返回一个会兑现为一个新的 {{domxref("MediaKeys")}} 对象的 {{jsxref('Promise')}}。
- {{domxref("MediaKeySystemAccess.getConfiguration()")}}
  - : 返回一个包含支持的配置选项的组合对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
