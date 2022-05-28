---
title: 'TypeError: cyclic object value'
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cyclic_object_value
---

{{jsSidebar("Errors")}}

在[JSON](https://www.json.org/)中出现循环引用时，JavaScript 会抛出 "cyclic object value" 的异常。{{jsxref("JSON.stringify()")}}并不会尝试解决这个问题，因此导致运行失败。

## 提示信息

```js
TypeError: cyclic object value (Firefox)
TypeError: Converting circular structure to JSON (Chrome and Opera)
TypeError: Circular reference in value argument not supported (Edge)
```

## 错误类型

{{jsxref("TypeError")}}

## 哪里出错了？

[JSON 格式](https://www.json.org/)本身不支持循环引用对象（尽管存在[IETF 草案](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03))，因此 {{jsxref("JSON.stringify()")}} 并不会尝试解决这个问题而是直接运行失败。

## 示例

### 循环引用

在如下循环结构中：

```js
var circularReference = { otherData: 123 };
circularReference.myself = circularReference;
```

{{jsxref("JSON.stringify()")}} 将会报错

```js example-bad
JSON.stringify(circularReference);
// TypeError: cyclic object value
```

要处理循环引用的 JSON，可以使用支持这种结构的库 (例如[cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js)))，或者自己实现，需要通过可序列化值查找、替换或者移除循环引用。

下面的代码片段演示了如何使用{{jsxref("JSON.stringify()")}}的 `replacer` 参数查找和过滤（会导致数据丢失）循环引用。

```js
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

JSON.stringify(circularReference, getCircularReplacer());
// {"otherData":123}
```

## 参见

- {{jsxref("JSON.stringify")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js)
  – 介绍两个方法，`JSON.decycle` 和
  `JSON.retrocycle`，这两个方法能够对循环对象引用结构进行编码和解码，并且使之成为一种扩展的且向下兼容的 JSON 格式。
