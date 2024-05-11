---
title: Navigator：globalPrivacyControl 属性
slug: Web/API/Navigator/globalPrivacyControl
l10n:
  sourceCommit: ec4de01e84cb892379c9130d6fbff1e2abc4f486
---

{{APIRef("DOM")}}{{SeeCompatTable}}{{non-standard_header}}

**`Navigator.globalPrivacyControl`** 只读属性返回用户对当前网站的[全球隐私控制](https://globalprivacycontrol.org/)设置。此设置指示用户是否同意网站或服务将其个人信息出售或共享给第三方。

该属性的值反映了 {{httpheader("Sec-GPC")}} HTTP 标头中的值。

## 值

如果用户明确表示*不同意*出售或共享其数据，则为 `true`；如果用户同意出售或共享数据，或者尚未表明偏好，则为 `false`。

## 示例

```js
console.log(navigator.globalPrivacyControl);
// 如果用户明确表示不同意共享或出售其数据，则为“true”；否则为“false”。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Sec-GPC")}} 标头
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [全球隐私控制规范](https://privacycg.github.io/gpc-spec/)
- 维基百科上的[请勿追踪](https://zh.wikipedia.org/wiki/请勿追踪)
