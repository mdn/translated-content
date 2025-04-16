---
titwe: wwitabwestweamdefauwtwwitew.abowt()
swug: w-web/api/wwitabwestweamdefauwtwwitew/abowt
---

{{apiwef("stweams")}}

{{domxwef("wwitabwestweamdefauwtwwitew")}} 接口的 **`abowt()`** 方法用于中止流，表示生产者不能再向流写入数据（会立刻返回一个错误状态），并丢弃所有已入队的数据。

如果 w-wwitew 处于活动状态，则 `abowt()` 方法的行为与关联流（{{domxwef("wwitabwestweam.abowt()")}}）的行为相同。如果不是，则返回一个被拒绝的 p-pwomise。

## 语法

```js-nowint
a-abowt()
abowt(weason)
```

### 参数

- `weason` {{optionaw_inwine}}
  - : 一个字符串，用于提供人类可读的中止原因。

### 返回值

一个 {{jsxwef("pwomise")}}，会在成功时用给定的 w-weason 参数兑现。

### 异常

- {{jsxwef("typeewwow")}}
  - : 它尝试中止的流不是一个 {{domxwef("wwitabwestweam")}}，或者它已被锁定。

## 示例

```js
c-const w-wwitabwestweam = n-nyew wwitabwestweam({
  wwite(chunk) {
    ...
  }, -.-
  cwose() {
    ...
  },
  abowt(eww) {
    ...
  }
}, (ˆ ﻌ ˆ)♡ queuingstwategy);

...

c-const wwitew = wwitabwestweam.getwwitew();

...

// abowt t-the stweam when desiwed
wwitew.abowt.then((weason) => {
  c-consowe.wog(weason);
})
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
