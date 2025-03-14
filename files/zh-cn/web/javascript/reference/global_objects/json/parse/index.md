---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
---

{{JSRef}}

**`JSON.parse()`** 方法用来解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。提供可选的 **reviver** 函数用以在返回之前对所得到的对象执行变换 (操作)。

{{InteractiveExample("JavaScript Demo: JSON.parse()")}}

```js interactive-example
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true
```

## 语法

```js-nolint
JSON.parse(text)
JSON.parse(text, reviver)
```

### 参数

- `text`
  - : 要被解析成 JavaScript 值的字符串，关于 JSON 的语法格式，请参考：{{jsxref("JSON")}}。
- `reviver` {{optional_inline}}
  - : 转换器，如果传入该参数 (函数)，可以用来修改解析生成的原始值，调用时机在 parse 函数返回之前。

### 返回值

与给定的 JSON `text` 相对应的 {{jsxref("Object")}}、{{jsxref("Array")}}、string、number、boolean 或者 `null` 值。

### 异常

- {{jsxref("SyntaxError")}}
  - : 若传入的字符串不符合 JSON 规范，则会抛出此异常。

## 示例

### 使用 `JSON.parse()`

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### 使用 `reviver` 函数

如果指定了 `reviver` 函数，则解析出的 JavaScript 值（解析值）会经过一次转换后才将被最终返回（返回值）。更具体点讲就是：解析值本身以及它所包含的所有属性，会按照一定的顺序（从最最里层的属性开始，一级级往外，最终到达顶层，也就是解析值本身）分别的去调用 `reviver` 函数，在调用过程中，当前属性所属的对象会作为 `this` 值，当前属性名和属性值会分别作为第一个和第二个参数传入 `reviver` 中。如果 `reviver` 返回 `undefined`，则当前属性会从所属对象中删除，如果返回了其他值，则返回的值会成为当前属性新的属性值。

当遍历到最顶层的值（解析值）时，传入 `reviver` 函数的参数会是空字符串 `""`（因为此时已经没有真正的属性）和当前的解析值（有可能已经被修改过了），当前的 `this` 值会是 `{"": 修改过的解析值}`，在编写 `reviver` 函数时，要注意到这个特例。（这个函数的遍历顺序依照：从最内层开始，按照层级顺序，依次向外遍历）

```js
JSON.parse('{"p": 5}', function (k, v) {
  if (k === "") return v; // 如果到了最顶层，则直接返回属性值，
  return v * 2; // 否则将属性值变为原来的 2 倍。
}); // { p: 10 }

JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}', function (k, v) {
  console.log(k); // 输出当前的属性名，从而得知遍历顺序是从内向外的，
  // 最后一个属性名会是个空字符串。
  return v; // 返回原始属性值，相当于没有传递 reviver 参数。
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### `JSON.parse()` 不允许用逗号作为结尾

```js example-bad
// both will throw a SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("JSON.stringify()")}}
