---
title: document.lastModified
slug: Web/API/Document/lastModified
---

{{ ApiRef() }}

### 概述

返回一个字符串，其中包含了当前文档的最后修改日期和时间。

### 语法

```plain
var string = document.lastModified;
```

### 例子

```plain
dump(document.lastModified);
// 返回：Tuesday, July 10, 2001 10:19:42
```

### 备注

需要注意的是，作为一个字符串，`lastModified` 不能很容易的被用于与该文档的修改日期做比较。

Webkit 返回的时间为 UTC 时间;Gecko 和 IE 返回的时间为本地时区时间。

{{Compat}}
