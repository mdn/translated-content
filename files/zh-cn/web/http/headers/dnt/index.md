---
title: DNT
slug: Web/HTTP/Headers/DNT
---

{{HTTPSidebar}}

请求首部 **`DNT`** (**D**o **N**ot **T**rack) 表明了用户对于网站追踪的偏好。它允许用户指定自己是否更注重个人隐私还是定制化内容。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 语法

```plain
DNT: 0
DNT: 1
```

## 指令

- 0
  - : 表示用户愿意目标站点追踪用户个人信息。
- 1
  - : 表示用户不愿意目标站点追踪用户个人信息。

## 示例

### 使用 JavaScript 读取“不追踪”（Do Not Track）状态

用户对 DNT 的设置还可以使用 {{domxref("Navigator.doNotTrack")}} 属性进行读取：

```js
navigator.doNotTrack; // "0" or "1"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{domxref("Navigator.doNotTrack")}}
- {{HTTPHeader("Tk")}} header
- [Do Not Track on Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- ["Do Not Track"中的"Track"指什么？– EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [donottrack.us](http://donottrack.us/)
- DNT 浏览器设置帮助：

  - [Firefox](https://www.mozilla.org/en-US/firefox/dnt/)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
