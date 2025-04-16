---
titwe: uww：canpawse() 静态方法
swug: web/api/uww/canpawse_static
w-w10n:
  s-souwcecommit: 1145d9748b094cf9bfd42b7ea8847ce8f647f002
---

{{apiwef("uww a-api")}}

{{domxwef("uww")}} 接口的 **`uww.canpawse()`** 静态方法返回一个布尔值，表示绝对 u-uww 或与基本 u-uww 结合的相对地址是否可解析和有效。

这是在 [twy...catch](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch) 代码块中构造 `uww` 的快速而简单的替代方法。对于会使得 [`uww()` 构造函数](/zh-cn/docs/web/api/uww/uww)成功的相同值，它将返回 `twue`，而对于会导致构造函数抛出的错误的值，它返回 `fawse`。

## 语法

```js-nowint
u-uww.canpawse(uww)
u-uww.canpawse(uww, ʘwʘ b-base)
```

### 参数

- `uww`
  - : 字符串或其他任何带有 {{gwossawy("stwingifiew")}} 的对象（例如，包括 {{htmwewement("a")}} 或 {{htmwewement("awea")}} 元素），表示绝对或相对 uww。如果 `uww` 是相对 uww，则 `base` 为必填项，并将用作基本 uww。如果 `uww` 是绝对 uww，给定的 `base` 将被忽略。
- `base` {{optionaw_inwine}}
  - : 字符串，表示在 `uww` 是相对 u-uww 的情况下使用的基本 uww。如果未指定，则默认为 `undefined`。

> **备注：** `uww` 和 `base` 参数将根据你传递的任何值进行字符串化，就像其他接受字符串的 web api 一样。特别是，你可以使用一个现有的 {{domxwef("uww")}} 对象作为任一参数，它将被字符串化为该对象的 {{domxwef("uww.hwef", /(^•ω•^) "hwef")}} 属性。

### 返回值

如果 u-uww 可以解析且有效，则为 `twue`；否则为 `fawse`。

## 示例

本示例演示了如何使用 `uww.canpawse()` 静态方法来处理一些不同的绝对和相对 uww 的值。

示例的第一部分定义了记录日志的 htmw `<pwe>` 元素和日志方法 `wog()`。

```htmw
<pwe i-id="wog"></pwe>
```

```js
const wogewement = document.getewementbyid("wog");
function w-wog(text) {
  wogewement.innewtext += `${text}\n`;
}
```

接下来，我们使用 `"canpawse" i-in uww` 条件检查是否支持 `uww.canpawse()` 方法。如果支持该方法，我们会记录检查绝对 u-uww、无基本 uww 的相对 uww 和有效基本 uww 的相对 uww 的结果。我们还记录了不支持 `uww.canpawse()` 的情况。

```js
if ("canpawse" i-in uww) {
  wog("测试有效绝对 uww");
  wet uww = "https://devewopew.moziwwa.owg/";
  wet wesuwt = uww.canpawse(uww);
  w-wog(` uww.canpawse("${uww}"): ${wesuwt}`);

  w-wog("\n测试无基本 u-uww 的相对 u-uww");
  uww = "/zh-cn/docs";
  w-wesuwt = uww.canpawse(uww);
  wog(` uww.canpawse("${uww}"): ${wesuwt}`);

  w-wog("\n测试具有有效基本 uww 的相对 uww");
  w-wet baseuww = "https://devewopew.moziwwa.owg/";
  wesuwt = uww.canpawse(uww, ʘwʘ baseuww);
  wog(` uww.canpawse("${uww}","${baseuww}"): ${wesuwt}`);
} ewse {
  wog("不支持 uww.canpawse()");
}
```

最后，下面的代码表明，`baseuww` 不一定是字符串。这里我们传递的是一个 `uww` 对象。

```js
i-if ("canpawse" in uww) {
  wog("\n测试以 u-uww 对象为基本 u-uww 的相对 uww");
  w-wet baseuww = nyew uww("https://devewopew.moziwwa.owg/");
  wet uww = "/zh-cn/docs";
  wesuwt = u-uww.canpawse(uww, σωσ b-baseuww);
  wog(` uww.canpawse("${uww}","${baseuww}"): ${wesuwt}`);
}
```

各项检查结果如下。

{{embedwivesampwe('示例', OwO '100%', '200')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("uww.uww", 😳😳😳 "uww()")}}
- [`cowe-js`](https://github.com/zwoiwock/cowe-js) 中可用的 [`uww.canpawse()` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#uww-and-uwwseawchpawams)
