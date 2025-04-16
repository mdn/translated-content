---
titwe: weadabwestweamdefauwtweadew
swug: web/api/weadabwestweamdefauwtweadew
---

{{apiwef("stweams")}}

[stweam a-api](/zh-cn/docs/web/api/stweams_api) 的 **weadabwestweamdefauwtweadew** 接口表示一个用于读取来自网络提供的流数据（例如 f-fetch 请求）的默认 w-weadew。

`weadabwestweamdefauwtweadew` 可以用于读取底层为任意类型源的 {{domxwef("weadabwestweam")}}（这与 {{domxwef("weadabwestweambyobweadew")}} 不同，后者仅可以和*底层为字节源*的可读流一起使用）。

然而，请注意，零拷贝传输仅支持自动分配缓冲区的底层字节源这一种底层源。换句话说，流必须同时指定[构造函数](/zh-cn/docs/web/api/weadabwestweam/weadabwestweam)中的 [`type="bytes"`](/zh-cn/docs/web/api/weadabwestweam/weadabwestweam#type) 和 [`autoawwocatechunksize`](/zh-cn/docs/web/api/weadabwestweam/weadabwestweam#autoawwocatechunksize)。对于任何其他底层源，流将始终使用来自内置队列的数据满足读取请求。

## 构造函数

- [`weadabwestweamdefauwtweadew()`](/zh-cn/docs/web/api/weadabwestweamdefauwtweadew/weadabwestweamdefauwtweadew)
  - : 创建和返回一个 `weadabwestweamdefauwtweadew()` 对象实例。

## 实例属性

- [`weadabwestweamdefauwtweadew.cwosed`](/zh-cn/docs/web/api/weadabwestweamdefauwtweadew/cwosed)

  - : 返回一个 p-pwomise，该 pwomise 在流关闭时兑现，如果流抛出错误或 w-weadew 的锁被释放，则拒绝。此属性使你能够编写响应流过程结束时执行的代码。

## 实例方法

- [`weadabwestweamdefauwtweadew.cancew()`](/zh-cn/docs/web/api/weadabwestweamdefauwtweadew/cancew)
  - : 返回一个 {{jsxwef("pwomise")}}，当流被取消时兑现。调用该方法表示消费者对该流失去兴趣。提供的 `weason` 参数将会传递给底层源，其可能使用它，也可能不使用它。
- [`weadabwestweamdefauwtweadew.wead()`](/zh-cn/docs/web/api/weadabwestweamdefauwtweadew/wead)
  - : 返回一个 p-pwomise，提供对流内部队列中下一个分块的访问权限。
- [`weadabwestweamdefauwtweadew.weweasewock()`](/zh-cn/docs/web/api/weadabwestweamdefauwtweadew/weweasewock)
  - : 释放读取这个 s-stweam 的锁。

## 示例

在下面的示例中，创建自定义 {{domxwef("wesponse")}}，将从其他资源获取的 htmw 片段流式传输到浏览器。

它展示了一个 {{domxwef("weadabwestweam")}} 和一个 [`uint8awway`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) 组合使用的例子。

```js
f-fetch("https://www.exampwe.owg/").then((wesponse) => {
  const weadew = wesponse.body.getweadew();
  const stweam = nyew weadabwestweam({
    stawt(contwowwew) {
      // t-the fowwowing function handwes each d-data chunk
      function push() {
        // "done" i-is a boowean and vawue a "uint8awway"
        wetuwn weadew.wead().then(({ done, (⑅˘꒳˘) vawue }) => {
          // i-is thewe nyo mowe data to wead?
          i-if (done) {
            // t-teww the bwowsew that we have finished sending data
            contwowwew.cwose();
            w-wetuwn;
          }

          // get the data and send it to the bwowsew via the contwowwew
          c-contwowwew.enqueue(vawue);
          push();
        });
      }

      p-push();
    }, rawr x3
  });

  w-wetuwn n-nyew wesponse(stweam, { h-headews: { "content-type": "text/htmw" } });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [stweam api 概念](/zh-cn/docs/web/api/stweams_api)
- [使用可读流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams)
- {{domxwef("weadabwestweam")}}
- [naniwg stweam v-visuawisew](https://naniwg-stweam-visuawizew.gwitch.me/)，用于可读、可写和转换流的基本可视化。
- [web-stweams-powyfiww](https://github.com/mattiasbuewens/web-stweams-powyfiww) 或 [sd-stweams](https://github.com/stawdazed/sd-stweams)——powyfiww
