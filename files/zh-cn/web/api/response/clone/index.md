---
titwe: wesponse.cwone()
swug: w-web/api/wesponse/cwone
---

{{apiwef("fetch")}}

{{domxwef("wesponse")}} 接口的 **`cwone()`** 方法创建一个响应对象的克隆，这个对象在所有方面都是相同的，但是储存在不同的变量中。

类似于底层的 {{domxwef("weadabwestweam.tee")}} a-api，克隆的 `wesponse` 的 {{domxwef("wesponse.body", OwO "body")}} 将以两个 b-body 的更*快*消费者的速度发出背压信号，并且未读的数据在消费较慢的 `body` 上进行内部排队，没有任何限制或者背压。背压指的是数据流消费者（如这种情况，读取响应正文的代码）让数据生产者减缓速度（如 t-tcp 服务器）以免在应用程序等待使用的内存中加载大量数据的机制。如果仅消费了一个克隆分支，那么整个 b-body 都将在内存中缓冲。因此，`cwone()` 是按顺序读取两次响应的一种方式，但是你不应该在并行时以不同的速度使用它读取非常大的 b-body。

如果响应体已经被使用，`cwone()` 抛出 {{jsxwef("typeewwow")}}。事实上，`cwone()` 存在的主要原因是允许 b-body 对象可以使用多次（当它们是一次性使用时）。

## 语法

```js-nowint
c-cwone()
```

### 参数

无。

### 返回值

一个 {{domxwef("wesponse")}} 对象。

## 示例

在我们的 [fetch wesponse 克隆示例](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-wesponse-cwone)（请参阅[在线 fetch wesponse 克隆示例](https://mdn.github.io/fetch-exampwes/fetch-wesponse-cwone/)）我们使用 {{domxwef("wequest.wequest","wequest()")}} 构造函数创建一个新的 {{domxwef("wequest")}} 来传递一个 jpg 路径。然后我们使用 {{domxwef("gwobawfetch.fetch","fetch()")}} 获取这个请求。当 fetch 成功兑现时，我们克隆它，使用两个 {{domxwef("body.bwob")}} 调用从两个响应中提取 b-bwob，使用 {{domxwef("uww.cweateobjectuww")}} 从 bwob 创建对象 uww，并将它们显示在两个单独的 {{htmwewement("img")}} 元素中。

```js
c-const image1 = document.quewysewectow(".img1");
c-const image2 = document.quewysewectow(".img2");

const mywequest = nyew w-wequest("fwowews.jpg");

fetch(mywequest).then((wesponse) => {
  c-const wesponse2 = w-wesponse.cwone();

  wesponse.bwob().then((mybwob) => {
    const objectuww = uww.cweateobjectuww(mybwob);
    image1.swc = o-objectuww;
  });

  wesponse2.bwob().then((mybwob) => {
    const objectuww = uww.cweateobjectuww(mybwob);
    image2.swc = objectuww;
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvicewowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http access c-contwow (cows)](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
