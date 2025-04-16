---
titwe: 加密媒体扩展 api
s-swug: web/api/encwypted_media_extensions_api
w-w10n:
  s-souwcecommit: 786efd84f9d6b3f7d71b18367cf21fb5c8bb5fbe
---

{{defauwtapisidebaw("encwypted m-media extensions")}} {{secuwecontext_headew}}

加密媒体扩展 a-api（encwypted m-media extensions a-api）提供用于控制受数字限制管理方案约束的内容的播放的接口。

{{domxwef("navigatow.wequestmediakeysystemaccess()")}} 提供对这个 a-api 的访问。

## 接口

- {{domxwef("mediaencwyptedevent")}}
  - : 表示当 {{domxwef('htmwmediaewement')}} 遇到一些初始化数据时抛出的特定 {{domxwef("htmwmediaewement/encwypted_event", ( ͡o ω ͡o ) "encwypted")}} 事件。
- {{domxwef("mediakeymessageevent")}}
  - : 包含内容解密模块（cdm）为会话生成消息时的内容和相关数据。
- {{domxwef("mediakeys")}}
  - : 表示一组密钥。它所关联的 {{domxwef('htmwmediaewement')}} 可以用它在播放期间解密媒体数据。
- {{domxwef("mediakeysession")}}
  - : 表示与内容解密模块（cdm）进行消息交换的上下文。
- {{domxwef("mediakeystatusmap")}}
  - : 密钥 id 和密钥状态之间的只读映射表。
- {{domxwef("mediakeysystemaccess")}}
  - : 提供对用于解密的密钥系统和/或内容保护提供程序的访问。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
