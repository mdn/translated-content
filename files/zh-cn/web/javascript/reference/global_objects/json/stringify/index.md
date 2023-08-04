---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
---

{{JSRef}}

**`JSON.stringify()`** 方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，或者指定的 replacer 是数组，则可选择性地仅包含数组指定的属性。

{{EmbedInteractiveExample("pages/js/json-stringify.html")}}

## 语法

```plain
JSON.stringify(value[, replacer [, space]])
```

### 参数

- `value`
  - : 将要序列化成 一个 JSON 字符串的值。
- `replacer` {{optional_inline}}
  - : 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。
- `space` {{optional_inline}}
  - : 指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为 10。该值若小于 1，则意味着没有空格；如果该参数为字符串（当字符串长度超过 10 个字母，取其前 10 个字母），该字符串将被作为空格；如果该参数没有提供（或者为 null），将没有空格。

### 返回值

一个表示给定值的 JSON 字符串。

### 异常

- 当在循环引用时会抛出异常{{JSxRef("TypeError")}} ("cyclic object value")（循环对象值）
- 当尝试去转换 {{jsxref("BigInt")}} 类型的值会抛出{{JSxRef("TypeError")}} ("BigInt value can't be serialized in JSON")（BigInt 值不能 JSON 序列化）.

## 描述

`JSON.stringify()`将值转换为相应的 JSON 格式：

- 转换值如果有 toJSON() 方法，该方法定义什么值将被序列化。
- 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
- 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
- `undefined`、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 `null`（出现在数组中时）。函数、undefined 被单独转换时，会返回 undefined，如`JSON.stringify(function(){})` or `JSON.stringify(undefined)`.
- 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
- 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 `replacer` 参数中强制指定包含了它们。
- Date 日期调用了 toJSON() 将其转换为了 string 字符串（同 Date.toISOString()），因此会被当做字符串处理。
- NaN 和 Infinity 格式的数值及 null 都会被当做 null。
- 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。

## 示例

### 使用 JSON.stringify

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify({ x: 5, y: 6 });
// "{"x":5,"y":6}"

JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// '[1,"false",false]'

JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'

JSON.stringify([undefined, Object, Symbol("")]);
// '[null,null,null]'

JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'

JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'

JSON.stringify({ [Symbol.for("foo")]: "foo" }, function (k, v) {
  if (typeof k === "symbol") {
    return "a symbol";
  }
});

// undefined

// 不可枚举的属性默认会被忽略：
JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  }),
);

// "{"y":"y"}"
```

### `replacer` 参数

replacer 参数可以是一个函数或者一个数组。作为函数，它有两个参数，键（key）和值（value），它们都会被序列化。

在开始时，`replacer` 函数会被传入一个空字符串作为 `key` 值，代表着要被 `stringify` 的这个对象。随后每个对象或数组上的属性会被依次传入。

函数应当返回 JSON 字符串中的 value, 如下所示：

- 如果返回一个 {{jsxref("Number")}}, 转换成相应的字符串作为属性值被添加入 JSON 字符串。
- 如果返回一个 {{jsxref("String")}}, 该字符串作为属性值被添加入 JSON 字符串。
- 如果返回一个 {{jsxref("Boolean")}}, "true" 或者 "false" 作为属性值被添加入 JSON 字符串。
- 如果返回任何其他对象，该对象递归地序列化成 JSON 字符串，对每个属性调用 replacer 方法。除非该对象是一个函数，这种情况将不会被序列化成 JSON 字符串。
- 如果返回 undefined，该属性值不会在 JSON 字符串中输出。

**注意：** 不能用 replacer 方法，从数组中移除值（values），如若返回 undefined 或者一个函数，将会被 null 取代。

#### 示例 (function)

```plain
function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
var jsonString = JSON.stringify(foo, replacer);
```

JSON 序列化结果为 `{"week":45,"month":7}`.

#### 示例 (array)

如果 `replacer` 是一个数组，数组的值代表将被序列化成 JSON 字符串的属性名。

```plain
JSON.stringify(foo, ['week', 'month']);
// '{"week":45,"month":7}', 只保留“week”和“month”属性值。
```

### `space` 参数

`space` 参数用来控制结果字符串里面的间距。如果是一个数字，则在字符串化时每一级别会比上一级别缩进多这个数字值的空格（最多 10 个空格）；如果是一个字符串，则每一级别会比上一级别多缩进该字符串（或该字符串的前 10 个字符）。

```js
JSON.stringify({ a: 2 }, null, " "); // '{\n "a": 2\n}'
```

使用制表符（\t）来缩进：

```js
JSON.stringify({ uno: 1, dos: 2 }, null, "\t");
// '{            \
//     "uno": 1, \
//     "dos": 2  \
// }'
```

### toJSON 方法

如果一个被序列化的对象拥有 `toJSON` 方法，那么该 `toJSON` 方法就会覆盖该对象默认的序列化行为：不是该对象被序列化，而是调用 `toJSON` 方法后的返回值会被序列化，例如：

```js
var obj = {
  foo: "foo",
  toJSON: function () {
    return "bar";
  },
};
JSON.stringify(obj); // '"bar"'
JSON.stringify({ x: obj }); // '{"x":"bar"}'
```

### `JSON.stringify`用作 JavaScript

注意 JSON 不是 JavaScript 严格意义上的子集，在 JSON 中不需要省略两条终线（Line separator 和 Paragraph separator），但在 JavaScript 中需要被省略。因此，如果 JSON 被用作 JSONP 时，下面方法可以使用：

```plain
function jsFriendlyJSONStringify (s) {
    return JSON.stringify(s).
        replace(/\u2028/g, '\\u2028').
        replace(/\u2029/g, '\\u2029');
}

var s = {
    a: String.fromCharCode(0x2028),
    b: String.fromCharCode(0x2029)
};
try {
    eval('(' + JSON.stringify(s) + ')');
} catch (e) {
    console.log(e); // "SyntaxError: unterminated string literal"
}

// No need for a catch
eval('(' + jsFriendlyJSONStringify(s) + ')');

// console.log in Firefox unescapes the Unicode if
//   logged to console, so we use alert
alert(jsFriendlyJSONStringify(s)); // {"a":"\u2028","b":"\u2029"}
```

### 使用 JSON.stringify 结合 localStorage 的例子

一些时候，你想存储用户创建的一个对象，并且，即使在浏览器被关闭后仍能恢复该对象。下面的例子是 `JSON.stringify` 适用于这种情形的一个样板：

```js
// 创建一个示例数据
var session = {
  screens: [],
  state: true,
};
session.screens.push({ name: "screenA", width: 450, height: 250 });
session.screens.push({ name: "screenB", width: 650, height: 350 });
session.screens.push({ name: "screenC", width: 750, height: 120 });
session.screens.push({ name: "screenD", width: 250, height: 60 });
session.screens.push({ name: "screenE", width: 390, height: 120 });
session.screens.push({ name: "screenF", width: 1240, height: 650 });

// 使用 JSON.stringify 转换为 JSON 字符串
// 然后使用 localStorage 保存在 session 名称里
localStorage.setItem("session", JSON.stringify(session));

// 然后是如何转换通过 JSON.stringify 生成的字符串，该字符串以 JSON 格式保存在 localStorage 里
var restoredSession = JSON.parse(localStorage.getItem("session"));

// 现在 restoredSession 包含了保存在 localStorage 里的对象
console.log(restoredSession);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{JSxRef("JSON.parse()")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) – Introduces two functions: `JSON.decycle` and `JSON.retrocycle`. These allow encoding and decoding of cyclical structures and DAGs into an extended and retrocompatible JSON format.
