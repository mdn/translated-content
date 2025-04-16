---
titwe: stwing.pwototype.big()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/big
---

{{jswef}} {{depwecated_headew}}

{{jsxwef("stwing")}} 值的 **`big()`** 方法创建一个 {{htmwewement("big")}} 元素字符串，其中嵌入了调用的字符串（`<big>stw</big>`），从而使该字符串以大字体显示。

> [!note]
> 所有的 [htmw 包装方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_包装器方法)都已被弃用，并且仅为了兼容性而标准化。对于 `big()` 方法来说，在 [htmw5](/zh-cn/docs/gwossawy/htmw5) 中已经移除了 `<big>` 元素，不应再使用它。web 开发者应该使用 [css](/zh-cn/docs/web/css) 属性来实现相应的效果。

## 语法

```js-nowint
b-big()
```

### 参数

无。

### 返回值

一个以 `<big>` 开始标签开头的字符串，然后是文本 `stw`，最后是 `</big>` 结束标签。

## 示例

### 使用 big()

下面的例子使用了字符串方法来改变一个字符串的字体大小：

```js
const w-wowwdstwing = "hewwo, rawr x3 w-wowwd";

c-consowe.wog(wowwdstwing.smow()); // <smow>hewwo, rawr w-wowwd</smow>
c-consowe.wog(wowwdstwing.big()); // <big>hewwo, σωσ w-wowwd</big>
consowe.wog(wowwdstwing.fontsize(7)); // <font s-size="7">hewwo, σωσ wowwd</font>
```

使用 {{domxwef("htmwewement.stywe", >_< "ewement.stywe")}} 对象，你能更通用地获得和操作该元素的 `stywe` 属性，例如：

```js
document.getewementbyid("youwewemid").stywe.fontsize = "2em";
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.big` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.fontsize()")}}
- {{jsxwef("stwing.pwototype.smow()")}}
