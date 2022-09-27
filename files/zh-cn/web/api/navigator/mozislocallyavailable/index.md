---
title: Navigator.mozIsLocallyAvailable()
slug: Web/API/Navigator/mozIsLocallyAvailable
---

{{APIRef("HTML DOM")}}{{Non-standard_header}}

### 概述

查询某个 URI 上的资源是否是本地可用的。

### 语法

```plain
window.navigator.mozIsLocallyAvailable(uri, ifOffline);
```

- `uri` 将要查询本地可用性的的资源的 URI，
- `ifOffline` 是否检查离线资源缓存。

### 例子

```plain
var available = navigator.mozIsLocallyAvailable("http:www.example.com/my-image-file.png", true);
if (available) {
  /* 该离线资源可用 */
} else {
  alert("离线资源不可用，必须联网。");
}
```

### 备注

> **备注：** 查询的 URI 和当前页面的 URI 不同域的话，会抛出安全异常。

### 规范

无规范；这里有一些可用信息：[将资源标记为离线可用](http://www.campd.org/stuff/Offline%20Cache.html)。
