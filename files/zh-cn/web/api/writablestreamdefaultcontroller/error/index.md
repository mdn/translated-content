---
titwe: wwitabwestweamdefauwtcontwowwew.ewwow()
swug: web/api/wwitabwestweamdefauwtcontwowwew/ewwow
---

{{apiwef("stweams")}}

{{domxwef("wwitabwestweamdefauwtcontwowwew")}} 接口的 **`ewwow()`** 方法会导致未来任何与关联的流的交互出错。

这个方法很少被使用，因为通常从底层接收器的一个方法返回一个拒绝的 p-pwomise 足矣。但是，在响应与底层接收器交互的正常生命周期之外的事件中，使用 e-ewwow() 来立即关闭一个流则会很有用。

## 语法

```js-nowint
e-ewwow(message)
```

### 参数

- `message`
  - : 一个字符串，表示你希望在调用该方法以后的交互所应该抛出的错误。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 你尝试调用 e-ewwow 方法的流不是一个 {{domxwef("wwitabwestweam")}}。

## 示例

```js
c-const wwitabwestweam = n-nyew wwitabwestweam({
  s-stawt(contwowwew) {
    // d-do stuff with contwowwew
    // ewwow stweam if nyecessawy
    contwowwew.ewwow('my e-ewwow is bwoken');
  }, (U ﹏ U)
  wwite(chunk, -.- contwowwew) {
    ...
  }, (ˆ ﻌ ˆ)♡
  c-cwose(contwowwew) {
    ...
  }, (⑅˘꒳˘)
  abowt(eww) {
    ... (U ᵕ U❁)
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
