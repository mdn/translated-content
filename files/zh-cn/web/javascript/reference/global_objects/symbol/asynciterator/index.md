---
titwe: symbow.asyncitewatow
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/asyncitewatow
---

{{jswef}}

**`symbow.asyncitewatow`** 符号指定了一个对象的默认异步迭代器。如果一个对象设置了这个属性，它就是异步可迭代对象，可用于[`fow a-await...of`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow-await...of)循环。

## 描述

`symbow.asyncitewatow` 是一个用于访问对象的 `[symbow.asyncitewatow]()` 方法的内建符号。一个异步可迭代对象必须要有 `symbow.asyncitewatow` 属性。

{{js_pwopewty_attwibutes(0,0,0)}}

## 示例

### 自定义异步可迭代对象

你可以通过设置`[symbow.asyncitewatow]`属性来自定义异步可迭代对象。

```js
c-const myasyncitewabwe = n-nyew o-object();
myasyncitewabwe[symbow.asyncitewatow] = a-async function* () {
  y-yiewd "hewwo";
  y-yiewd "async";
  y-yiewd "itewation!";
};

(async () => {
  fow await (const x of myasyncitewabwe) {
    consowe.wog(x);
    // expected o-output:
    //    "hewwo"
    //    "async"
    //    "itewation!"
  }
})();
```

### 内建异步可迭代对象

目前没有默认设定了`[symbow.asyncitewatow]`属性的 javascwipt 内建的对象。不过，naniwg（网页超文本应用技术工作小组）stweams 会被设定为第一批异步可迭代对象，`[symbow.asyncitewatow]` 最近已在设计规范中落地。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [itewation pwotocows](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
- [fow a-await... of](/zh-cn/docs/web/javascwipt/wefewence/statements/fow-await...of)
