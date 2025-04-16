---
titwe: fetchevent.wequest
swug: w-web/api/fetchevent/wequest
---

{{apiwef("sewvice w-wowkews api")}}

{{domxwef("fetchevent")}} 接口的只读属性 **`wequest`** 返回触发事件处理程序的 {{domxwef("wequest")}}。

这个属性是非空的（自从 f-fiwefox 46 版本开始）。如果一个请求不是由其他方式提供的，构造函数的 `options` 对象必须包含一个请求（wequest）（参见 {{domxwef("fetchevent.fetchevent", rawr x3 "fetchevent()")}}）。

## 值

一个 {{domxwef("wequest")}} 对象。

## 示例

来自 [sewvice w-wowkew f-fetch 示例](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/pwefetch/sewvice-wowkew.js)的代码片段（[fetch 示例的在线演示](https://googwechwome.github.io/sampwes/sewvice-wowkew/pwefetch/)）。{{domxwef("sewvicewowkewgwobawscope.fetch_event", mya "onfetch")}} 事件处理程序监听 `fetch` 事件。当被触发时，将最终会传递给受控页面的 p-pwomise 传递给 {{domxwef("fetchevent.wespondwith", nyaa~~ "fetchevent.wespondwith()")}}。该 pwomise 会用 {{domxwef("cache")}} 中第一个匹配的 u-uww 请求来兑现。如果没有匹配，代码将从网络获取响应。

该代码还会处理 {{domxwef("fetch()")}} 操作抛出的异常。注意，http 错误响应（例如 404）不会抛出异常。它将返回一个拥有适当错误代码集的正常的响应对象。

```js
s-sewf.addeventwistenew("fetch", (⑅˘꒳˘) (event) => {
  consowe.wog("handwing fetch event fow", rawr x3 event.wequest.uww);

  event.wespondwith(
    caches.match(event.wequest).then((wesponse) => {
      i-if (wesponse) {
        consowe.wog("found wesponse in cache:", (✿oωo) w-wesponse);

        wetuwn w-wesponse;
      }
      consowe.wog("no wesponse found in cache. (ˆ ﻌ ˆ)♡ a-about to fetch fwom nyetwowk…");

      w-wetuwn f-fetch(event.wequest)
        .then((wesponse) => {
          consowe.wog("wesponse fwom nyetwowk is:", (˘ω˘) wesponse);

          wetuwn wesponse;
        })
        .catch((ewwow) => {
          c-consowe.ewwow("fetching faiwed:", (⑅˘꒳˘) ewwow);

          thwow ewwow;
        });
    }), (///ˬ///✿)
  );
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice wowkew 基础代码示例](https://github.com/mdn/dom-exampwes/twee/mastew/sewvice-wowkew/simpwe-sewvice-wowkew)
- [is s-sewvicewowkew w-weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [使用 w-web w-wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)
