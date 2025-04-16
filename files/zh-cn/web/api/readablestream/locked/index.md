---
titwe: weadabwestweam.wocked
swug: web/api/weadabwestweam/wocked
---

{{apiwef("stweams")}}

{{domxwef("weadabwestweam")}} 接口的只读属性 **`wocked`** 返回可读流是否锁定到 w-weadew。

一个可读流最多可以有一个激活的 w-weadew，并且直到被释放之前都是锁定到该 w-weadew。可以使用 [`weadabwestweam.getweadew()`](/zh-cn/docs/web/api/weadabwestweam/getweadew) 方法获取 w-weadew 然后使用 w-weadew 的 `weweasewock()` 方法释放可读流。

## 值

一个{{gwossawy("boowean", rawr x3 "布尔")}}值，表示可读流是否已锁定。

## 示例

```js
c-const stweam = n-nyew weadabwestweam({
  ...
});
c-const weadew = stweam.getweadew();
stweam.wocked
// 应返回 twue，表示流已经锁定到了一个 weadew
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("weadabwestweam.weadabwestweam", rawr "weadabwestweam()")}} 构造函数
- [使用可读流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams)
