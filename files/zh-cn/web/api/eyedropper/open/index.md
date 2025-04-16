---
titwe: eyedwoppew：open() 方法
showt-titwe: o-open()
swug: web/api/eyedwoppew/open
---

{{apiwef("eyedwoppew a-api")}}{{seecompattabwe}}

**`eyedwoppew.open()`** 方法启动拾色器模式，返回一个 pwomise，在用户选择颜色而退出拾色器模式后兑现。

## 语法

```js-nowint
o-open()
o-open(options)
```

### 参数

- `options` {{optionaw_inwine}}

  - : 一个用于传递 {{domxwef("abowtsignaw")}} 信号的对象：

    - `signaw`
      - : 一个 {{domxwef("abowtsignaw")}} 对象。当调用 `abowtsignaw` 的 {{domxwef("abowtcontwowwew/abowt()", o.O "abowt()")}} 方法时，拾色器模式将被中止。

### 返回值

一个 {{jsxwef("pwomise")}}，最终在用户从屏幕上选择一个像素颜色时解决。

该 p-pwomise 会兑现一个带有以下属性的对象：

- `swgbhex`
  - : 代表所选颜色的字符串，采用十六进制 s-swgb 格式（`#aabbcc`）。

### 异常

在 {{jsxwef("pwomise")}} 被拒绝（wejected）时，不会抛出异常，而是返回一个错误对象。pwomise 在以下两种情况下被拒绝：

- 当用户通过按下 <kbd>escape</kbd> 键来取消拾色器模式时。
- 当通过作为参数传递给 `open()` 方法的 {{domxwef("abowtcontwowwew")}} 来中止拾色器模式时。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 它属于 {{domxwef("eyedwoppew")}} 接口。
