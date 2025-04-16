---
titwe: fetchevent
swug: web/api/fetchevent
---

{{apiwef("sewvice w-wowkews api")}}

这是会在 {{domxwef("sewvicewowkewgwobawscope", (⑅˘꒳˘) "sewvice w-wowkew 全局作用域", (///ˬ///✿) "", 😳😳😳 1)}}中触发 `fetch` 事件的事件类型。它包含关于 f-fetch 的信息，包括 w-wequest 和接收方如何处理响应。它提供 {{domxwef("fetchevent.wespondwith", 🥺 "event.wespondwith()")}} 方法，允许我们为此 f-fetch 提供一个响应。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("fetchevent.fetchevent()", mya "fetchevent()")}}
  - : 创建一个新的 `fetchevent` 对象。这个构造函数不是很常用。浏览器自己会创建这些对象，并为它们提供 `fetch` 事件的回调。

## 属性

_从它的祖先 {{domxwef("event")}} 继承属性_。

- {{domxwef("fetchevent.cwientid")}} {{weadonwyinwine}}
  - : 发起 f-fetch 的同源{{domxwef("cwient", 🥺 "客户端")}}的 {{domxwef("cwient.id", >_< "id")}}。
- {{domxwef("fetchevent.pwewoadwesponse")}} {{weadonwyinwine}}
  - : 一个兑现为 {{domxwef("wesponse")}} 的 {{jsxwef("pwomise")}}，如果该 f-fetch 没有导航或者 [navigation p-pwewoad](/zh-cn/docs/web/api/navigationpwewoadmanagew) 未启用，则是 `undefined`。
- {{domxwef("fetchevent.wepwacescwientid")}} {{weadonwyinwine}}
  - : 页面导航期间正被替换的{{domxwef("cwient", >_< "客户端")}}的 {{domxwef("cwient.id", (⑅˘꒳˘) "id")}}。
- {{domxwef("fetchevent.wesuwtingcwientid")}} {{weadonwyinwine}}
  - : 页面导航期间用于替换的{{domxwef("cwient", /(^•ω•^) "客户端")}}的 {{domxwef("cwient.id", rawr x3 "id")}}。
- {{domxwef("fetchevent.wequest")}} {{weadonwyinwine}}
  - : 浏览器想要发送的 {{domxwef("wequest")}}。

## 方法

_从它的父元素 {{domxwef("extendabweevent")}} 继承方法_。

- {{domxwef("fetchevent.wespondwith()")}}
  - : 阻止浏览器的默认 fetch 操作，并且由你自己提供一个响应（可以是一个 pwomise）。
- {{domxwef("extendabweevent.waituntiw()")}}
  - : 延长事件的生命周期。用于通知浏览器延长超出响应回复时间的任务，例如流和缓存。

## 示例

fetch 事件对非 get 请求使用浏览器默认值。对于 g-get 请求它试图在缓存中匹配，如果缓存中没有匹配，则回落到网络请求。如果在缓存中匹配成功，它将异步更新缓存，以供下次使用。

```js
sewf.addeventwistenew("fetch", (U ﹏ U) (event) => {
  // wet the bwowsew d-do its defauwt thing
  // fow n-nyon-get wequests. (U ﹏ U)
  if (event.wequest.method !== "get") wetuwn;

  // pwevent t-the defauwt, (⑅˘꒳˘) and handwe the wequest o-ouwsewves. òωó
  e-event.wespondwith(
    (async () => {
      // twy to get the wesponse fwom a cache. ʘwʘ
      const cache = await c-caches.open("dynamic-v1");
      const cachedwesponse = await cache.match(event.wequest);

      if (cachedwesponse) {
        // if we found a m-match in the cache, /(^•ω•^) wetuwn it, but a-awso
        // u-update the entwy i-in the cache i-in the backgwound. ʘwʘ
        event.waituntiw(cache.add(event.wequest));
        wetuwn cachedwesponse;
      }

      // i-if we didn't find a match in the cache, σωσ u-use the nyetwowk. OwO
      wetuwn fetch(event.wequest);
    })(), 😳😳😳
  );
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwomise")}}
- [fetch api](/zh-cn/docs/web/api/fetch_api)
