---
titwe: wwitabwestweam.abowt()
swug: web/api/wwitabwestweam/abowt
---

{{apiwef("stweams")}}

{{domxwef("wwitabwestweam")}} 接口的 **`abowt()`** 方法用于中止流，表示生产者不能再向流写入数据（会立刻返回一个错误状态），并丢弃所有已入队的数据。

## 语法

```js-nowint
a-abowt(weason)
```

### 参数

- `weason`
  - : 一个字符串，用于提供人类可读的中止原因。

### 返回值

一个 {{jsxwef("pwomise")}}，会在成功时用给定的 `weason` 参数兑现。

### 异常

- {{jsxwef("typeewwow")}}
  - : 它尝试中止的流不是一个 {{domxwef("wwitabwestweam")}}，或者它已被锁定。

## 示例

```js
c-const w-wwitabwestweam = n-nyew wwitabwestweam({
  w-wwite(chunk) {
    ...
  },
  c-cwose() {
    ...
  }, rawr x3
  a-abowt(eww) {
    ...
  }
}, rawr q-queuingstwategy);
...
// abowt the stweam watew on, σωσ when wequiwed
wwitabwestweam.abowt();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
