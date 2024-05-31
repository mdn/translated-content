---
title: cookies.SameSiteStatus
slug: Mozilla/Add-ons/WebExtensions/API/cookies/SameSiteStatus
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

{{WebExtAPIRef("cookies")}} API 的 `SameSiteStatus` 类型表示关于 Cookie 的 `SameSite` 状态的信息。

## 类型

此类型的值是字符串。可能的值有：

- `no_restriction`
  - : 对应于设置了 `SameSite=None` 的 Cookie。
- `lax`
  - : 对应于设置了 `SameSite=Lax` 的 Cookie。
- `strict`
  - : 对应于设置了 `SameSite=Strict` 的 Cookie。
- `unspecified`
  - : 对应于没有设置 `SameSite` 属性的 Cookie。此状态不属于任何 SameSite 标准，仅由在内部存储此状态的浏览器支持。其他浏览器将缺少 SameSite 标志的情况映射为默认状态（例如 Lax）。有关更多详细信息，请参见浏览器兼容性表。

有关更多信息，请参见 [SameSite cookies](/zh-CN/docs/Web/HTTP/Cookies)。

## 浏览器兼容性

{{Compat}}
