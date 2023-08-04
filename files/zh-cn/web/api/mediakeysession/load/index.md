---
title: load()
slug: Web/API/MediaKeySession/load
---

{{APIRef("EncryptedMediaExtensions")}} {{SeeCompatTable}}

该`MediaKeySession.load()`方法返回一个{{jsxref("Promise")}}，它在加载指定的会话对象的数据后解析为一个布尔值。

## 句法

```plain
mediaKeySession .load(sessionId).then(function(booleanValue){...});
```

### 参数

- sessionId
  - : 由当前媒体对象及其相关键或许可证的内容解析模块生成的唯一字符串。

### 返回值

一个{{jsxref("Promise")}}解析为一个布尔值，指示加载是成功还是失败。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
