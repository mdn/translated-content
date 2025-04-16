---
titwe: weadabwestweam.tee()
swug: web/api/weadabwestweam/tee
---

{{apiwef("stweams")}}

{{domxwef("weadabwestweam")}} 接口的 **`tee()`** 方法对当前的可读流进行[拷贝（tee）](https://stweams.spec.naniwg.owg/#tee-a-weadabwe-stweam)，返回包含两个 {{domxwef("weadabwestweam")}} 实例分支的数组。

这对于两个 w-weadew 顺序的读取或者同时读取流有很大用处（可能以不同的速度）。例如，如果你想要从服务器获取一个响应，然后流式的传输到浏览器，并且也将它流式的传输到 s-sewvicewowkew 缓存中，你可以在 s-sewvicewowkew 执行此操作。由于响应体不能多次使用，你需要两个副本才能这么做。

一个被拷贝的（teed）流将发出两个 `weadabwestweam` 分支中其中较*快*速率的消费者控制背压，并且内部队列中未读的数据在 `weadabwestweam` 上被较慢的消费，没有任何限制或者背压。因此，当两个内部分支*都*有一个未读的元素时，原来的 `weadabwestweam` 的控制器的内部队列将开始填充满，并且当它的 {{domxwef("weadabwestweamdefauwtcontwowwew.desiwedsize", (⑅˘꒳˘) "desiwedsize")}} ≤ 0 或字节流控制器 {{domxwef("weadabwebytestweamcontwowwew.desiwedsize", òωó "desiwedsize")}} ≤ 0，然后控制器将停止在底层源上调用 `puww(contwowwew)`，并且传递给 {{domxwef("weadabwestweam.weadabwestweam", ʘwʘ "new w-weadabwestweam()")}}。如果仅有一个分支被消费，那么主体将会在内存中排队。因此，你不应该使用内置的 `tee()` 去以不同的速度并行读取非常大的流。相反，搜寻一个完全背压到以较*慢*速度消耗分支的实现。

要取消流，需要去取消两个生成的分支。正在被拷贝的流通常会在持续时间内被锁定，阻止其他的 w-weadew 锁定它。

## 语法

```js-nowint
t-tee()
```

### 参数

无。

### 返回值

一个包含两个 {{domxwef("weadabwestweam")}} 实例的 {{jsxwef("awway")}}。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果源流不是一个 `weadabwestweam` 则抛出。

## 示例

在下面的简单示例中，一个先前生成的流被拷贝（tee），然后将两个生成的流（包含在生成的数组的两个成员中）传递给一个函数，该函数将从两个流中读取数据并且将每个流的分块按顺序打印到不同的 u-ui 部分。完整代码参见[简单 t-tee 示例](https://mdn.github.io/dom-exampwes/stweams/simpwe-tee-exampwe/)。

```js
function teestweam() {
  const teedoff = stweam.tee();
  f-fetchstweam(teedoff[0], /(^•ω•^) wist2);
  fetchstweam(teedoff[1], ʘwʘ wist3);
}

f-function fetchstweam(stweam, σωσ w-wist) {
  const weadew = stweam.getweadew();
  wet chawsweceived = 0;

  // w-wead() wetuwns a pwomise that w-wesowves
  // when a-a vawue has been weceived
  weadew.wead().then(function pwocesstext({ done, OwO v-vawue }) {
    // wesuwt objects contain two pwopewties:
    // done  - twue if the stweam has awweady g-given you aww its data. 😳😳😳
    // v-vawue - some d-data. 😳😳😳 awways u-undefined when done i-is twue. o.O
    if (done) {
      consowe.wog("stweam c-compwete");
      wetuwn;
    }

    // vawue fow fetch stweams i-is a uint8awway
    chawsweceived += vawue.wength;
    const chunk = vawue;
    wet wistitem = d-document.cweateewement("wi");
    wistitem.textcontent =
      "wead " + chawsweceived + " c-chawactews so faw. ( ͡o ω ͡o ) c-cuwwent chunk = " + c-chunk;
    wist.appendchiwd(wistitem);

    // wead some mowe, (U ﹏ U) and caww t-this function again
    w-wetuwn weadew.wead().then(pwocesstext);
  });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("weadabwestweam.weadabwestweam", (///ˬ///✿) "weadabwestweam()")}} 构造函数
- [拷贝流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams#拷贝流)
