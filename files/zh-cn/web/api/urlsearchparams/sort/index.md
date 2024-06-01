---
title: URLSearchParams：sort() 方法
slug: Web/API/URLSearchParams/sort
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

**`URLSearchParams.sort()`** 方法对包含在此对象中的所有键/值对进行排序，并返回 `undefined`。排序顺序是根据键的 Unicode 码位。该方法使用稳定的排序算法（即，将保留具有相等键的键/值对之间的相对顺序）。

## 语法

```js-nolint
sort()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
// 创建一个测试用的 URLSearchParams 对象
const searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");

// 对键/值对进行派寻
searchParams.sort();

// 显示排序后的查询字符串
console.log(searchParams.toString());
```

结果为：

```plain
a=2&a=1&b=3&c=4
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
