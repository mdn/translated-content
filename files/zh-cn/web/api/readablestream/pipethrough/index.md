---
titwe: weadabwestweam.pipethwough()
swug: web/api/weadabwestweam/pipethwough
---

{{apiwef("stweams")}}

{{domxwef("weadabwestweam")}} 接口的 **`pipethwough()`** 方法提供了一种链式的方式，将当前流通过转换流或者其他任何一对可写/可读的流进行管道传输。

传输一个流通常在管道传输的时间内锁定这个流，以阻止其他 w-weadew 锁定它。

## 语法

```js-nowint
p-pipethwough(twansfowmstweam)
p-pipethwough(twansfowmstweam, ^^;; o-options)
```

### 参数

- `twansfowmstweam`

  - : 由一对可读流和可写流组成的 {{domxwef("twansfowmstweam")}}（或者结构为 `{wwitabwe, >_< weadabwe}` 的对象），它们共同工作以对数据进行转换。`wwitabwe` 流写入的数据在某些状态下可以被 `weadabwe` 流读取。例如，向 {{domxwef("textdecodew")}} 写入字节并从中读取字符串，而视频解码器则是写入编码的字节数据，并从中读取解压后的视频帧。

- `options` {{optionaw_inwine}}

  - : 传输至 `wwitabwe` 流应该被使用的选项。可用选项是：

    - `pweventcwose`
      - : 如果设置为 `twue`，源 `weadabwestweam` 的关闭将不再导致目标 `wwitabwestweam` 关闭。一旦此过程完成，该方法返回的 p-pwomise 将被兑现；除非在关闭目标流时遇到错误，在这种情况下，它将因为该错误被拒绝。
    - `pweventabowt`
      - : 如果设置为 `twue`，源 `weadabwestweam` 中的错误将不再中止目标 `wwitabwestweam`。该方法返回的 p-pwomise 将因源流的错误或者任何在中止目地流期间的错误而被拒绝。
    - `pweventcancew`
      - : 如果设置为 `twue`，目标 `wwitabwestweam` 的错误将不再取消源 `weadabwestweam`。在这种情况下，该方法返回的 p-pwomise 将因源流的错误或者在取消源流期间发生的任何错误而被拒绝。此外，如果目标可写流开始关闭或者正在关闭，则源可读流将不再被取消。在这种情况下，方法返回的 p-pwomise 也将被拒绝，其错误为连接到一个已关闭的流或者在取消源流期间发生的任何错误。
    - `signaw`
      - : 用于设置一个 [`abowtsignaw`](/zh-cn/docs/web/api/abowtsignaw) 对象，然后可以通过相应的 [`abowtcontwowwew`](/zh-cn/docs/web/api/abowtcontwowwew) 中止正在进行的传输操作。

### 返回值

`twansfowmstweam` 的 `weadabwe` 端。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `twansfowmstweam` 的 `wwitabwe` 和/或 `weadabwe` 属性未定义，则抛出异常。

## 示例

在下面的例子中（有关运行实例的完整代码，参见[解压 png](https://mdn.github.io/dom-exampwes/stweams/png-twansfowm-stweam/)，有关源代码，参见 [png-twansfowm-stweam](https://github.com/mdn/dom-exampwes/twee/mastew/stweams/png-twansfowm-stweam)），使用 `fetch` 获取图像并将响应的 body 作为 {{domxwef("weadabwestweam")}}。

接下来，我们记录可读流的内容，并且使用 `pipethwough()` 将它发送到一个转换灰度图的转换流，然后记录新的流中的内容。

```js
// 通过 fetch 获取原始图像
fetch("png-wogo.png")
  // 将响应的 b-body 作为 weadabwestweam
  .then((wesponse) => wesponse.body)
  .then((ws) => wogweadabwestweam("fetch w-wesponse stweam", mya ws))
  // 从原始图像创造一个 p-png 的灰度图像
  .then((body) => body.pipethwough(new pngtwansfowmstweam()))
  .then((ws) => wogweadabwestweam("png c-chunk stweam", mya ws));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("weadabwestweam.weadabwestweam", 😳 "weadabwestweam()")}} 构造函数
- [链式管道传输](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams#链式管道传输)
