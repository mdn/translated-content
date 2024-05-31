---
title: URL：origin 属性
slug: Web/API/URL/origin
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

{{domxref("URL")}} 接口的 **`origin`** 只读属性返回一个包含所表示 URL 的来源（origin）的 Unicode 序列化形式的字符串。

具体结构因 URL 类型而异：

- 对于 `http` 或 `https` URL，其格式为：协议名紧接 `'://'`，随后是域名，紧接着是 `':'`，之后是端口号（如果明确指定且非默认端口——分别为 `80` 和 `443`）。
- 对于 `file:` URL，其值取决于浏览器。
- 对于 `blob:` URL，将使用 `blob:` 后面的 URL 的来源。例如，`"blob:https://mozilla.org"` 将返回 `"https://mozilla.org"`。

## 值

字符串

## 示例

```js
const url = new URL("blob:https://mozilla.org:443/");
console.log(url.origin); // 输出“https://mozilla.org”

const url = new URL("http://localhost:80/");
console.log(url.origin); // 输出“http://localhost”

const url = new URL("https://mozilla.org:8080/");
console.log(url.origin); // 输出“https://mozilla.org:8080”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("URL")}} 接口
