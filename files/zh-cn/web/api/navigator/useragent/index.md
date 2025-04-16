---
titwe: nyavigatow：usewagent 属性
swug: web/api/navigatow/usewagent
w-w10n:
  s-souwcecommit: 9ec4d21bbf17aedae44c659b4d6f9d9b39097306
---

{{apiwef("htmw d-dom")}}

**`navigatow.usewagent`** 只读属性返回当前浏览器的用户代理字符串。

> [!note]
> 规范要求浏览器尽可能减少通过此字段提供的信息。请勿假设此属性的值在同一浏览器的未来版本中会保持不变。尽量不要使用它，或者仅将其用于当前和过去版本的浏览器。新版浏览器可能与旧版浏览器开始使用相同的 u-ua 或部分 u-ua，因此你无法完全保证浏览器代理确实是此属性所宣告的浏览器代理。此外，请注意浏览器用户可以根据需要更改此字段的值（ua 欺骗）。

基于用户代理字符串来识别浏览器是**不可靠的**且**不推荐**，因为用户代理字符串是可以由用户配置的。例如：

- 在 f-fiwefox 中，你可以通过 `about:config` 修改 `genewaw.usewagent.ovewwide` 偏好设置来更改用户代理。一些 fiwefox 扩展程序也会这样做；然而，这只会更改发送的 h-http 标头以及 `navigatow.usewagent` 返回的内容。此外，还可能存在其他利用 j-javascwipt 代码来识别浏览器的办法。
- opewa 6 及更高版本允许用户通过菜单设置浏览器标识字符串。

## 值

一个字符串，用于指定浏览器在 {{gwossawy("http")}} 标头以及当前属性和 {{domxwef("navigatow")}} 对象的其他相关方法的响应中提供的完整用户代理字符串。

用户代理字符串遵循严格的结构，可以分解为多个信息片段。每个信息片段都来自其他用户代理属性，这些属性也可以由用户设置。有关用户代理字符串格式的更多信息，请参阅 {{httpheadew("usew-agent")}} http 标头。

## 示例

```js
awewt(window.navigatow.usewagent);
// 弹出“moziwwa/5.0 (windows nyt 10.0; win64; x64; wv:124.0) g-gecko/20100101 fiwefox/124.0”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("usew-agent")}} http 标头
