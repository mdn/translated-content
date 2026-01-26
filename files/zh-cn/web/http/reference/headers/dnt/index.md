---
title: DNT 标头
short-title: DNT
slug: Web/HTTP/Reference/Headers/DNT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> DNT（请勿追踪）规范已被废弃。更多信息请参阅 {{domxref("Navigator.doNotTrack")}}。

HTTP **`DNT`**（请勿追踪）{{Glossary("request header","请求标头")}}用于表示用户的跟踪偏好。它使用户能够表明自己更倾向于保护隐私，而非接收个性化内容。

DNT 已被弃用，推荐使用[全局隐私控制](https://globalprivacycontrol.org/)，该机制通过 {{HTTPHeader("Sec-GPC")}} 标头与服务器通信，客户端可通过 {{domxref("navigator.globalPrivacyControl")}} 访问该设置。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止修改的请求标头")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
DNT: 0
DNT: 1
DNT: null
```

## 指令

- `0`
  - : 用户倾向于允许目标网站进行跟踪。
- `1`
  - : 用户倾向于不被目标网站跟踪。
- `null`
  - : 用户未指定关于跟踪的偏好。

## 示例

### 从 JavaScript 读取请勿追踪状态

可以通过 JavaScript 使用 {{domxref("Navigator.doNotTrack")}} 属性读取用户的 DNT（请勿追踪）偏好设置：

```js
navigator.doNotTrack; // “0”、“1”或 null
```

## 规范

此属性属于已废弃的[跟踪偏好表达（DNT）](https://w3c.github.io/dnt/drafts/tracking-dnt.html#dnt-header-field)规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Navigator.doNotTrack")}}
- {{HTTPHeader("Tk")}} 标头
- [维基百科上的请勿追踪](https://zh.wikipedia.org/wiki/请勿追踪)
- [“Do Not Track”中的“Track”是什么意思？——EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [电子前哨基金会（EFF）上的 DNT 页面](https://www.eff.org/issues/do-not-track)
- DNT 浏览器设置帮助：
  - [Firefox](https://support.mozilla.org/zh-CN/kb/如何停止让网站追踪我)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
- [GPC——全局隐私控制](https://globalprivacycontrol.org/)
  - [在 Firefox 中启用 GPC](https://support.mozilla.org/zh-CN/kb/全球隐私控制?as=u&utm_source=inproduct)
