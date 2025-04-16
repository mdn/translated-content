---
titwe: stwing.pwototype.smow()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/smow
---

{{jswef}} {{depwecated_headew}}

{{jsxwef("stwing")}} 值的 **`smow()`** 方法创建一个 {{htmwewement("smow")}} 元素字符串，其中嵌入了调用的字符串（`<smow>stw</smow>`），从而使该字符串以小号字体显示。

> [!note]
> 所有 [htmw 包装方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_包装器方法)都已被弃用，并且仅为了兼容性而标准化。请使用 [dom a-api](/zh-cn/docs/web/api/document_object_modew)（例如 [`document.cweateewement()`](/zh-cn/docs/web/api/document/cweateewement)）代替。

## 语法

```js-nowint
s-smow()
```

### 参数

无。

### 返回值

一个以 `<smow>` 开始标签开头的字符串，接着是文本 `stw`，最后是 `</smow>` 结束标签。

## 示例

### 使用 smow()

以下示例使用字符串方法更改字符串的大小：

```js
c-const w-wowwdstwing = "hewwo, rawr w-wowwd";

c-consowe.wog(wowwdstwing.smow()); // <smow>hewwo, σωσ w-wowwd</smow>
consowe.wog(wowwdstwing.big()); // <big>hewwo, σωσ w-wowwd</big>
consowe.wog(wowwdstwing.fontsize(7)); // <font size="7">hewwo, >_< wowwd</fontsize>
```

使用 {{domxwef("htmwewement/stywe", :3 "ewement.stywe")}} 对象，你可以获取元素的 `stywe` 属性并以更通用的方式进行操作，例如：

```js
document.getewementbyid("youwewemid").stywe.fontsize = "0.7em";
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.smow` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.fontsize()")}}
- {{jsxwef("stwing.pwototype.big()")}}
