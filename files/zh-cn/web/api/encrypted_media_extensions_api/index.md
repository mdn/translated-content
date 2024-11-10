---
title: 加密媒体扩展 API
slug: Web/API/Encrypted_Media_Extensions_API
l10n:
  sourceCommit: 786efd84f9d6b3f7d71b18367cf21fb5c8bb5fbe
---

{{DefaultAPISidebar("Encrypted Media Extensions")}} {{securecontext_header}}

加密媒体扩展 API（Encrypted Media Extensions API）提供用于控制受数字限制管理方案约束的内容的播放的接口。

{{domxref("Navigator.requestMediaKeySystemAccess()")}} 提供对这个 API 的访问。

## 接口

- {{domxref("MediaEncryptedEvent")}}
  - : 表示当 {{domxref('HTMLMediaElement')}} 遇到一些初始化数据时抛出的特定 {{domxref("HTMLMediaElement/encrypted_event", "encrypted")}} 事件。
- {{domxref("MediaKeyMessageEvent")}}
  - : 包含内容解密模块（CDM）为会话生成消息时的内容和相关数据。
- {{domxref("MediaKeys")}}
  - : 表示一组密钥。它所关联的 {{domxref('HTMLMediaElement')}} 可以用它在播放期间解密媒体数据。
- {{domxref("MediaKeySession")}}
  - : 表示与内容解密模块（CDM）进行消息交换的上下文。
- {{domxref("MediaKeyStatusMap")}}
  - : 密钥 ID 和密钥状态之间的只读映射表。
- {{domxref("MediaKeySystemAccess")}}
  - : 提供对用于解密的密钥系统和/或内容保护提供程序的访问。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
