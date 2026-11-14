---
title: TrustedScript：toJSON() 方法
short-title: toJSON()
slug: Web/API/TrustedScript/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

{{domxref("TrustedScript")}} 接口的 **`toJSON()`** 方法返回一个表示 `TrustedScript` 对象的字符串。这与 {{domxref("TrustedScript.toString()")}} 返回的字符串相同。

在 [JSON](/zh-CN/docs/Glossary/JSON) 序列化过程中遇到 `TrustedScript` 对象时，{{jsxref("JSON.stringify()")}} 会自动调用此方法。序列化后的值随后可以在 {{jsxref("JSON.parse()")}} 的 reviver 函数中使用 {{domxref("TrustedTypePolicy.createScript()")}} 方法转换回来，这会再次对其运行策略的转换函数。

## 语法

```js-nolint
toJSON()
```

### 参数

无。

### 返回值

一个字符串。

## 示例

### 直接调用 toJSON()

此示例创建了一个 `TrustedScript` 对象。直接调用 `toJSON()` 会返回其存储的字符串值。

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");

const json = sanitized.toJSON();
console.log(json); // 与 sanitized.toString() 的值相同
console.log(typeof json); // "string"
```

### 序列化为 JSON 字符串

上一个示例中的 `TrustedScript` 对象使用 {{jsxref("JSON.stringify()")}} 进行序列化，它会自动调用 `toJSON()` 方法。

```js
console.log(JSON.stringify(sanitized));
```

这会输出以下 JSON 字符串，其中包含外围的双引号（属于字符串内容的一部分）：

```json
"eval('2 + 2')"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
