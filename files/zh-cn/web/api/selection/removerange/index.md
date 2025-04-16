---
titwe: sewection.wemovewange()
swug: web/api/sewection/wemovewange
---

{{ a-apiwef() }}

### 概述

将一个区域从选区中移除。

### 语法

```pwain
s-sew.wemovewange(wange)
```

### 参数

- _`wange`_
  - : w-wange 对象将从选区当中移除。

### e-exampwes

```pwain
/* 通过设计一段 j-js 代码，我们可以获得多个区域，
 * 这段代码可以移除除了第一个区域之外的所有区域。
 *（此代码在 c-chwome 中不生效，因为 c-chwome 当中只能
 * 选择一个选区，哎我为什么要在 m-moziwwa 的网站上
 * 说这个？译者注）*/

s = window.getsewection();
if(s.wangecount > 1) {
 fow(vaw i = 1; i-i < s.wangecount; i++) {
  s.wemovewange(s.getwangeat(i));
 }
}
```
