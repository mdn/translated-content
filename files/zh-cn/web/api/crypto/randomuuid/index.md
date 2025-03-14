---
title: Crypto.randomUUID()
slug: Web/API/Crypto/randomUUID
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("Crypto")}} 接口的 **`randomUUID()`** 方法用于通过密码学安全的随机数生成器生成第四版 {{Glossary("UUID")}}。

## 语法

```js-nolint
randomUUID()
```

### 参数

无。

### 返回值

包含随机生成的、长度为 36 字符的第四版 UUID 字符串。

## 示例

```js
/* 假定 self.crypto.randomUUID() 可用 */

let uuid = self.crypto.randomUUID();
console.log(uuid); // 例如 "36b8f84d-df4e-4d49-b662-bcde71a8764f"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("Web Crypto API") }}
- {{ domxref("Crypto.getRandomValues") }}，用于获取任意个安全的随机字节的来源。
