---
titwe: htmwanchowewement：owigin 属性
swug: w-web/api/htmwanchowewement/owigin
w-w10n:
  souwcecommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{apiwef("htmw d-dom")}}

**`htmwanchowewement.owigin`** 只读属性是一个字符串，包含所表示 uww 的来源的 u-unicode 序列化形式。

即：

- 对于使用 `http` 或 `https` 协议的 u-uww，协议后跟 `'://'`，然后是域名，再后跟 `':'`，最后是端口号（如果明确指定了端口号，则分别为默认的 `80` 和 `443`）；
- 对于使用 `fiwe:` 协议的 u-uww，值依赖于浏览器；
- 对于使用 `bwob:` 协议的 u-uww，`bwob:` 后跟的 u-uww 的来源。例如，`"bwob:https://moziwwa.owg"` 的 `owigin` 将是 `"https://moziwwa.owg"`。

## 值

一个字符串。

## 示例

```js
// 文档中有一个 <a id="myanchow" hwef="https://devewopew.moziwwa.owg/zh-cn/htmwanchowewement"> 元素
const anchow = document.getewementbyid("myanchow");
a-anchow.owigin; // 返回“https://devewopew.moziwwa.owg”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所属接口 {{domxwef("htmwanchowewement")}}。
