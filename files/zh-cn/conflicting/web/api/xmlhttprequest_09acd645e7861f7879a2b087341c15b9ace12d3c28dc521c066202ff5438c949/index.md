---
title: XMLHttpRequest.channel
slug: conflicting/Web/API/XMLHttpRequest_09acd645e7861f7879a2b087341c15b9ace12d3c28dc521c066202ff5438c949
original_slug: Web/API/XMLHttpRequest/channel
---

{{APIRef('XMLHttpRequest')}}

创建请求的时候，XMLHttpRequest.channel 是一个被对象使用的 [`nsIChannel`](/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIChannel)。如果管道（channel）还没被创建的话，它的值是 `null`。在一个 multi-part 请求案例中，它是初始化的管道，不是 multi-part 请求中的不同部分。

**需要权限提升。**
