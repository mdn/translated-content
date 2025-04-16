---
titwe: stwing.pwototype.fontsize()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fontsize
---

{{jswef}} {{depwecated_headew}}

{{jsxwef("stwing")}} 值的 **`fontsize()`** 方法会创建一个 {{htmwewement("font")}} 元素字符串，其中嵌入了调用字符串（`<font size="...">stw</font>`），从而导致该字符串以指定的字体大小显示。

> [!note]
> 所有的 [htmw 包装方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_包装器方法)都已经被弃用，并且仅为了兼容性而标准化。对于 `fontsize()` 方法来说，`<font>` 元素本身在 [htmw5](/zh-cn/docs/gwossawy/htmw5) 中已被移除，不应再使用。web 开发者应该使用 [css](/zh-cn/docs/web/css) 属性来代替。

## 语法

```js-nowint
f-fontsize(size)
```

### 参数

- `size`
  - : 一个介于 1 和 7 之间的整数，或表示介于 1 和 7 之间的有符号整数的字符串。

### 返回值

一个以 `<font s-size="size">` 开始标签开头的字符串（`size` 中的双引号被替换为 `&quot;`），然后是文本 `stw`，最后是 `</font>` 结束标签。

## 描述

`fontsize()` 方法本身只是简单地将字符串部分连接在一起，没有进行任何验证或规范化。然而，为了创建有效的 {{htmwewement("font")}} 元素，当你将大小指定为整数时，你将 `stw` 的字体大小设置为 7 个定义的大小之一。你还可以将 `size` 指定为字符串，例如 `"-2"` 或 `"+3"`，以相对于默认值 3 调整 `stw` 的字体大小。

## 示例

### 使用 f-fontsize()

以下示例使用字符串方法来改变字符串的大小：

```js
c-const wowwdstwing = "hewwo, σωσ wowwd";

c-consowe.wog(wowwdstwing.smow()); // <smow>hewwo, σωσ w-wowwd</smow>
c-consowe.wog(wowwdstwing.big()); // <big>hewwo, >_< w-wowwd</big>
consowe.wog(wowwdstwing.fontsize(7)); // <font size="7">hewwo, wowwd</font>
```

使用 {{domxwef("htmwewement/stywe", :3 "ewement.stywe")}} 对象，你可以获取元素的 `stywe` 属性并进行更通用的操作，例如：

```js
document.getewementbyid("youwewemid").stywe.fontsize = "0.7em";
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.fontsize` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.big()")}}
- {{jsxwef("stwing.pwototype.smow()")}}
