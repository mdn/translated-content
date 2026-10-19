---
title: JSON.isRawJSON()
short-title: isRawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`JSON.isRawJSON()`** 静态方法用于测试某个值是否为 {{jsxref("JSON.rawJSON()")}} 返回的对象。

## 语法

```js-nolint
JSON.isRawJSON(value)
```

### 参数

- `value`
  - : 要测试的值。

### 返回值

如果 `value` 是由 {{jsxref("JSON.rawJSON()")}} 创建的，则返回 `true`；否则返回 `false`。

## 描述

“原始 JSON”对象在序列化为 JSON 时，会被视为已经是 JSON 文本。此外，由于 {{jsxref("JSON.rawJSON()")}} 的工作方式，原始 JSON 一定是语法有效的 JSON。关于原始 JSON 对象的结构和行为的更多信息，请参见 {{jsxref("JSON.rawJSON()")}}。此方法使其他序列化库能够针对原始 JSON 对象实现类似于 `JSON.stringify()` 的行为。

## 示例

### 使用 JSON.isRawJSON()

下面的示例演示如何使用 `JSON.isRawJSON()` 测试某个对象是否由 `JSON.rawJSON()` 返回。示例实现了一个自定义序列化器，将数据序列化为类似 YAML 的格式。

```js
function mySerializer(value, indent = "") {
  if (typeof value !== "object" || value === null) {
    return JSON.stringify(value);
  }
  if (JSON.isRawJSON(value)) {
    return value.rawJSON;
  }
  const subIndent = `${indent}  `;
  if (Array.isArray(value)) {
    return `- ${value.map((v) => mySerializer(v, subIndent)).join(`\n${indent}- `)}`;
  }
  return Object.entries(value)
    .map(([key, value]) => {
      const subValue = mySerializer(value, subIndent);
      if (subValue.includes("\n")) {
        return `${key}:\n${subIndent}${subValue}`;
      }
      return `${key}: ${subValue}`;
    })
    .join(`\n${indent}`);
}

console.log(
  mySerializer({
    name: "Josh",
    userId: JSON.rawJSON("12345678901234567890"),
    friends: [
      { name: "Alice", userId: JSON.rawJSON("9876543210987654321") },
      { name: "Bob", userId: JSON.rawJSON("56789012345678901234") },
    ],
  }),
);

// name: "Josh"
// userId: 12345678901234567890
// friends:
//   - name: "Alice"
//     userId: 9876543210987654321
//   - name: "Bob"
//     userId: 56789012345678901234
```

在上面的示例中，如果 `userId` 的值不是由 `JSON.rawJSON()` 创建的，而是直接以数字形式传入，那么由于 JavaScript 浮点数精度的限制，这些值一开始就会丢失精度。

```js
console.log(
  mySerializer({
    name: "Josh",
    userId: 12345678901234567890,
    friends: [
      { name: "Alice", userId: 9876543210987654321 },
      { name: "Bob", userId: 56789012345678901234 },
    ],
  }),
);

// name: "Josh"
// userId: 12345678901234567000
// friends:
//   - name: "Alice"
//     userId: 9876543210987655000
//   - name: "Bob"
//     userId: 56789012345678900000
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `JSON.isRawJSON` 的 polyfill](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.stringify()")}}
- {{jsxref("JSON.rawJSON()")}}
