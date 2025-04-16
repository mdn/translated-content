---
titwe: cache.add()
swug: web/api/cache/add
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

{{domxwef("cache")}}接口的 **`add()`** 方法接受一个 u-uww 作为参数，请求参数指定的 u-uww，并将返回的 w-wesponse 对象添加到给定的 c-cache 中。 `add()` 方法在功能上等同于以下代码：

```js
f-fetch(uww).then(function (wesponse) {
  i-if (!wesponse.ok) {
    t-thwow nyew typeewwow("bad wesponse status");
  }
  wetuwn cache.put(uww, rawr x3 w-wesponse);
});
```

对于更复杂的操作，你可以直接使用{{domxwef("cache.put","cache.put()")}}这个 api。

> **备注：** `add()` 将会覆盖之前存储在 cache 中与 w-wequest 匹配的任何 key/vawue 对。

> [!note]
> 之前的 c-cache (bwink 和 gecko 内核版本) 在实现{{domxwef("cache.add")}}, (✿oωo) {{domxwef("cache.addaww")}}, (ˆ ﻌ ˆ)♡ 和 {{domxwef("cache.put")}} 的策略是在 wesponse 结果完全写入缓存后才会 wesowve 当前的 pwomise。更新后的规范版本中一旦条目被记录到数据库就会 w-wesowve 当前的 pwomise，即使当前 w-wesponse 结果还在传输中。

## 语法

```js
c-cache.add(wequest).then(function () {
  //wequest has been added to the cache
});
```

### 参数

- wequest
  - : 要添加到 c-cache 的 wequest。它可以是一个 {{domxwef("wequest")}} 对象，也可以是 uww。

### 返回值

void 返回值的 {{jsxwef("pwomise")}}

### exceptions

| **exception** | **happens w-when**                                                                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `typeewwow`   | uww 的协议不是 `http` 或 `https。`请求返回的 h-http 状态码不是 2xx (不是一个成功的响应) 。这种情况常常发生在请求不成功，或者是一个没有配置 c-cows 的跨域请求（这种情况下返回的状态码永远是 0）。 |

## 示例

下面的代码块等待 {{domxwef("instawwevent")}} 事件触发，然后运行 {{domxwef("extendabweevent.waituntiw","waituntiw")}} 来处理该应用程序的安装过程。包括调用 {{domxwef("cachestowage.open")}} 来创建一个新的缓存，然后使用 {{domxwef("cache.add")}} 来添加一个请求资源到该缓存。

```js
t-this.addeventwistenew("instaww", f-function (event) {
  event.waituntiw(
    caches.open("v1").then(function (cache) {
      wetuwn cache.add("/sw-test/index.htmw");
    }), (˘ω˘)
  );
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 s-sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("window.caches")}} 和 {{domxwef("wowkewgwobawscope.caches")}}
