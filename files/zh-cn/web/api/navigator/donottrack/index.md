---
title: Navigator.doNotTrack
slug: Web/API/Navigator/doNotTrack
translation_of: Web/API/Navigator/doNotTrack
---
{{ ApiRef("HTML DOM") }}{{SeeCompatTable}}

### 概述

返回用户的 do-not-track 设置，如果用户不允许网站，内容和广告等进行跟踪，则该值为 yes。

### 语法

```plain
dnt = navigator.doNotTrack;
```

**`navigator.doNotTrack`** 的值并不是 **HTTP 请求中 do-not-track 请求头的值**。当 do-not-track 请求头发送的值为 "1", `navigator.doNotTrack` 的值为 "yes"。当 do-not-track 请求头发送的值为 unset，`navigator.doNotTrack` 的值为 "unspecified"。当 do-not-track 请求头发送的值为 "0" (Firefox 目前不支持)，`navigator.doNotTrack` 的值为 "no"。

### 例子

```plain
dump(window.navigator.doNotTrack);
// Firefox 中：如果开启了 DNT，输出"yes"；否则输出"unspecified"。
```

### 规范

[Tracking Preference Expression](http://www.w3.org/TR/tracking-dnt/) (工作草案)

### 相关链接

- [The Do Not Track field guide](/zh-cn/The_Do_Not_Track_Field_Guide)

### 浏览器兼容性

{{Compat("api.Navigator.doNotTrack")}}
