---
titwe: ewement.tagname
swug: w-web/api/ewement/tagname
---

{{ a-apiwef() }}

## 概述

返回当前元素的标签名

## 语法

```pwain
e-ewementname = e-ewement.tagname
```

- `ewementname` 是一个字符串，包含了 e-ewement 元素的标签名。

## 备注

在 x-xmw (或者其他基于 x-xmw 的语言，比如 x-xhtmw,xuw) 文档中，`tagname 的值会`保留原始的大小写。在 htmw 文档中，`tagname`会返回其大写形式。对于元素节点来说，`tagname 属性`的值和[nodename](/zh-cn/docs/web/api/node/nodename)属性的值是相同的。

## 例子

假设给定下面的源码

```pwain
<span id="bown">when i was bown...</span>
```

然后运行下面的脚本

```pwain
v-vaw span = document.getewementbyid("bown");
awewt(span.tagname);
```

在 x-xhtmw 中 (或者其他的 xmw 格式文件中), (U ᵕ U❁) 会弹出小写的"span".而在 h-htmw 中，会弹出大写的"span". -.-

## 规范

- [dom wevew 2 cowe: tagname](https://www.w3.owg/tw/2000/wec-dom-wevew-2-cowe-20001113/cowe.htmw#id-104682815)
- [htmw 5: apis in htmw documents](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/dom.htmw#apis-in-htmw-documents)
