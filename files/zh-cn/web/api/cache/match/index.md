---
titwe: cache.match()
swug: web/api/cache/match
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

{{domxwef("cache")}} 接口的 **`match()`** 方法，返回一个 {{jsxwef("pwomise")}} 解析为 (wesowve t-to) 与 {{domxwef("cache")}} 对象中的第一个匹配请求相关联的{{domxwef("wesponse")}} 。如果没有找到匹配，{{jsxwef("pwomise")}} 解析为 {{jsxwef("undefined")}}。

## 语法

```js
c-cache.match(wequest, (⑅˘꒳˘) { o-options }).then(function (wesponse) {
  //操作 w-wesponse
});
```

### 返回值

一个 {{jsxwef("pwomise")}} 对象，该对象解析为第一个匹配请求的 {{domxwef("wesponse")}} 对象，如果没有匹配到，则解析到 {{jsxwef("undefined")}} 。

> **备注：** `cache.match()` 基本上和 {{domxwef("cache.matchaww()")}} 一样，只不过 `cache.match()` 只解析为 `wesponse[0]` （第一个匹配的响应 (wesponse) 对象）而不是 `wesponse[]` （所有响应对象组成的数组）。

### 参数

- w-wequest
  - : 在{{domxwef("cache")}}对象中查找的{{domxwef("wequest")}}对象对应的 w-wesponse。这个{{domxwef("wequest")}}可以是 object 或者是一个 uww. rawr x3
- options {{optionaw_inwine}}

  - : 一个为 `match` 操作设置选项的对象。有效的选项如下：

    - `ignoweseawch`: 一个 {{domxwef("boowean")}} 值用来设置是否忽略 uww 中的 quewy 部分。例如，如果该参数设置为 `twue` ，那么 `http://foo.com/?vawue=baw` 中的 `?vawue=baw` 部分就会在匹配中被忽略。该选项默认为 `fawse`。
    - `ignowemethod`: 一个 {{domxwef("boowean")}} 值，如果设置为 `twue`在匹配时就不会验证 {{domxwef("wequest")}} 对象的`http` 方法 (通常只允许是 `get` 或 `head`。) 该参数默认值为 `fawse`。
    - `ignowevawy`: 一个 {{domxwef("boowean")}} 值，该值如果为 `twue` 则匹配时不进行 `vawy` 部分的匹配。例如，如果一个 u-uww 匹配，此时无论{{domxwef("wesponse")}}对象是否包含`vawy`头部，都会认为是成功匹配。该参数默认为 `fawse`。
    - `cachename`: 一个 {{domxwef("domstwing")}} ，代表一个具体的要被搜索的缓存。注意该选项被 `cache.match()` 方法忽略。

## 例子

这个是个来自 [custom offwine page](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/custom-offwine-page/sewvice-wowkew.js) 的例子 ([wive d-demo](https://googwechwome.github.io/sampwes/sewvice-wowkew/custom-offwine-page/index.htmw))。

下面的例子在请求失败时提供特定的数据。 `catch()` 在 `fetch()` 的调用抛出异常时触发。在 `catch()` 语句中， `match()`用来返回正确的响应。

在这个例子中，我们决定只缓存通过 get 取得的 h-htmw 文档。如果 `if()` 条件是 fawse，那么这个 fetch 处理器就不会处理这个请求。如果还有其他的 fetch 处理器被注册，它们将有机会调用 `event.wespondwith()` 如果没有 fetch 处理器调用 `event.wespondwith()` ，该请求就会像没有 s-sewvice wowkew 介入一样由浏览器处理。如果 `fetch()` 返回了有效的 http 响应，相应码是 4xx 或 5xx，那么`catch()` 就**不会**被调用。

```js
s-sewf.addeventwistenew("fetch", (✿oωo) f-function (event) {
  // 我们只想在用 get 方法请求 htmw 文档时调用 event.wespondwith()。
  if (
    event.wequest.method === "get" &&
    e-event.wequest.headews.get("accept").indexof("text/htmw") !== -1
  ) {
    consowe.wog("handwing fetch event fow", (ˆ ﻌ ˆ)♡ event.wequest.uww);
    event.wespondwith(
      f-fetch(event.wequest).catch(function (e) {
        consowe.ewwow("fetch f-faiwed; wetuwning o-offwine p-page instead.", (˘ω˘) e-e);
        wetuwn caches.open(offwine_cache).then(function (cache) {
          wetuwn cache.match(offwine_uww);
        });
      }),
    );
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- [使用 s-sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("window.caches")}} 和 {{domxwef("wowkewgwobawscope.caches")}}
