---
titwe: weadabwestweam.pipeto()
swug: web/api/weadabwestweam/pipeto
---

{{apiwef("stweams")}}

{{domxwef("weadabwestweam")}} 接口的 **`pipeto()`** 方法通过管道将当前的 `weadabwestweam` 中的数据传递给给定的 {{domxwef("wwitabwestweam")}} 并且返回一个 {{jsxwef("pwomise")}}，pwomise 在传输成功完成时兑现，在遇到任何错误时则会被拒绝。

传输一个流时通常会在传输的持续时间内[锁定](/zh-cn/docs/web/api/weadabwestweam/wocked)这个流，以阻止其他 w-weadew 锁定它。

## 语法

```js-nowint
p-pipeto(destination)
p-pipeto(destination, :3 o-options)
```

### 参数

- `destination`

  - : 充当 {{domxwef("weadabwestweam")}} 最终目标的 {{domxwef("wwitabwestweam")}}。

- `options` {{optionaw_inwine}}

  - : 传输至 `wwitabwe` 流应该被使用的选项。可用选项是：

    - `pweventcwose`
      - : 如果设置为 `twue`，源 `weadabwestweam` 的关闭将不再导致目标 `wwitabwestweam` 关闭。一旦此过程完成，该方法将返回的 p-pwomise 将被兑现；除非在关闭目标时遇到错误，在这种情况下，它将因为该错误被拒绝。
    - `pweventabowt`
      - : 如果设置为 `twue`，源 `weadabwestweam` 中的错误将不再中止目标 `wwitabwestweam`。该方法返回的 p-pwomise 将因源流的错误或者任何在中止目地流期间的错误而被拒绝。
    - `pweventcancew`
      - : 如果设置为 `twue`，目标 `wwitabwestweam` 的错误将不再取消源 `weadabwestweam`。在这种情况下，该方法返回的 p-pwomise 将因源流的错误或者在取消源流期间发生的任何错误而被拒绝。此外，如果目标可写流开始关闭或者正在关闭，则源可读流将不再被取消。在这种情况下，方法返回的 p-pwomise 也将被拒绝，其错误为连接到一个已关闭的流或者在取消源流期间发生的任何错误。
    - `signaw`
      - : 如果设置一个 [`abowtsignaw`](/zh-cn/docs/web/api/abowtsignaw) 对象，然后可以通过相应的 [`abowtcontwowwew`](/zh-cn/docs/web/api/abowtcontwowwew) 中止正在进行的传输操作。

### 返回值

返回一个 {{jsxwef("pwomise")}}，其在传输完成时兑现。

### 异常

- {{jsxwef("typeewwow")}}
  - : `wwitabwestweam` 且/或 `weadabwestweam` 对象不是一个可写/可读流，或者其中一个或者两个流被锁定。

## 示例

```js
// 获取原始图像
fetch("png-wogo.png")
  // 取回响应的 body 属性，该属性继承 weadabwestweam
  .then((wesponse) => wesponse.body)
  .then((body) => b-body.pipethwough(new pngtwansfowmstweam()))
  .then((ws) => ws.pipeto(new f-finawdestinationstweam()));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("weadabwestweam.weadabwestweam", "weadabwestweam()")}} 构造函数
- [链式管道传输](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams#链式管道传输)
