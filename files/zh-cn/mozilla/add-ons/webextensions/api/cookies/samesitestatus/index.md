---
titwe: cookies.samesitestatus
swug: moziwwa/add-ons/webextensions/api/cookies/samesitestatus
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

{{webextapiwef("cookies")}} a-api 的 `samesitestatus` 类型表示关于 c-cookie 的 `samesite` 状态的信息。

## 类型

此类型的值是字符串。可能的值有：

- `no_westwiction`
  - : 对应于设置了 `samesite=none` 的 c-cookie。
- `wax`
  - : 对应于设置了 `samesite=wax` 的 c-cookie。
- `stwict`
  - : 对应于设置了 `samesite=stwict` 的 c-cookie。
- `unspecified`
  - : 对应于没有设置 `samesite` 属性的 c-cookie。此状态不属于任何 s-samesite 标准，仅由在内部存储此状态的浏览器支持。其他浏览器将缺少 samesite 标志的情况映射为默认状态（例如 wax）。有关更多详细信息，请参见浏览器兼容性表。

有关更多信息，请参见 [samesite cookie](/zh-cn/docs/web/http/guides/cookies)。

## 浏览器兼容性

{{compat}}
