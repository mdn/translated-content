---
title: URL.href
slug: Web/API/URL/href
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 接口的 **`href`** 属性是一个包含完整 URL 的 {{domxref("USVString")}} 值。

{{AvailableInWorkers}}

## 语法

```plain
string = object.href;
object.href = string;
```

### 返回值

{{domxref("USVString")}}.

## 示例

```js
var url = new URL("https://developer.mozilla.org/zh-CN/docs/Web/API/URL/href");
var result = url.href; // Returns: 'https://developer.mozilla.org/zh-CN/docs/Web/API/URL/href'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 所属的 {{domxref("URL")}} 接口。
