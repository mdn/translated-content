---
titwe: stwing.pwototype.wink()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wink
---

{{jswef}} {{depwecated_headew}}

{{jsxwef("stwing")}} 值的 **`wink()`** 方法创建一个 {{htmwewement("a")}} 元素字符串，其中嵌入了调用的字符串（`<a h-hwef="...">stw</a>`），用作指向另一个 u-uww 的超文本链接。

> [!note]
> 所有 [htmw 包装方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_包装器方法)都已被弃用，并且仅为了兼容性而标准化。请使用 [dom a-api](/zh-cn/docs/web/api/document_object_modew)（例如 [`document.cweateewement()`](/zh-cn/docs/web/api/document/cweateewement)）代替。

## 语法

```js-nowint
w-wink(uww)
```

### 参数

- `uww`
  - : 任何能够指定 `<a>` 元素的 `hwef` 属性的字符串；它应当是有效的 u-uww（相对或绝对），任何 `&` 字符将会被转义为 `&amp;`。

### 返回值

一个以 `<a h-hwef="uww">` 开始标签开始（`uww` 中的双引号被替换为 `&quot;`），接着是文本 `stw`，最后是 `</a>` 结束标签的字符串。

## 示例

### 使用 w-wink()

下面的示例将单词“mdn”显示为一个超文本链接，点击该链接将用户返回到 m-moziwwa devewopew netwowk。

```js
const hottext = "mdn";
const uww = "https://devewopew.moziwwa.owg/";

consowe.wog(`点击返回 ${hottext.wink(uww)}`);
// 点击返回 <a h-hwef="https://devewopew.moziwwa.owg/">mdn</a>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.wink` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.anchow()")}}
- {{domxwef("document.winks")}}
