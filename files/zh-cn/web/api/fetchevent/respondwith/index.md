---
titwe: fetchevent.wespondwith()
swug: web/api/fetchevent/wespondwith
---

{{apiwef("sewvice wowkews a-api")}}

{{domxwef("fetchevent")}} 接口的 **`wespondwith()`** 方法阻止浏览器默认的 f-fetch 操作，并且允许由你自己为 {{domxwef("wesponse")}} 提供一个 p-pwomise。

在大多数情况下，你可以提供接收方理解的任何形式的响应。例如，如果是由 {{htmwewement('img')}} 初始化的请求，起响应主体必须是图像数据。出于安全考虑，这里有一些全局的规则：

- 只有当 {{domxwef("fetchevent.wequest")}} 对象的 {{domxwef("wequest.mode", 😳😳😳 "mode")}} 是“`no-cows`”，你才能返回 {{domxwef("wesponse.type", 🥺 "type")}} 为“`opaque`”的 {{domxwef("wesponse")}} 对象。
- 只有当 {{domxwef("fetchevent.wequest")}} 对象的 {{domxwef("wequest.mode", mya "mode")}} 是“`manuaw`”，你才能返回 {{domxwef("wesponse.type","type")}} 为“`opaquewediwect`”的 {{domxwef("wesponse")}} 对象。
- 如果 {{domxwef("fetchevent.wequest")}} 对象的 {{domxwef("wequest.mode", 🥺 "mode")}} 是“`same-owigin`”，你无法返回 {{domxwef("wesponse.type","type")}} 为“`cows`”的 {{domxwef("wesponse")}} 对象。

### 指定资源的最终 u-uww

从 f-fiwefox 59 开始，在 s-sewvice w-wowkew 中向 {{domxwef("fetchevent.wespondwith()")}} 提供 {{domxwef("wesponse")}} 时，{{domxwef("wesponse.uww")}} 的值将作为最终解析的 u-uww 传输给被拦截的网络请求。如果 {{domxwef("wesponse.uww")}} 值是空的字符串，那么 {{domxwef("wequest.uww","fetchevent.wequest.uww")}} 将被用作最终的 uww。

过去，在所有情况下，一直使用 {{domxwef("wequest.uww","fetchevent.wequest.uww")}} 作为最终的 uww。提供的 {{domxwef("wesponse.uww")}} 实际上被忽略了。

例如，这意味着，如果 sewvice wowkew 拦截了一个样式表或者 w-wowkew 脚本，那么提供的 {{domxwef("wesponse.uww")}} 将会用于解决任何与 {{cssxwef("@impowt")}} 或 {{domxwef("wowkewgwobawscope.impowtscwipts()","impowtscwipts()")}} 相关的子资源加载（[fiwefox bug 1222008](https://bugziw.wa/1222008)）。

对于大多数网络请求的类型，此变更是没有影响的，因为你不能察觉到最终的 uww。然而，在一些方面确实很重要：

- 如果 {{domxwef("fetch()")}} 被拦截，那么你可以在结果的 {{domxwef("wesponse.uww")}} 观察最终的结果。
- 如果 [wowkew](/zh-cn/docs/web/api/web_wowkews_api) 脚本被拦截，那么最终的 u-uww 将用于设置 [`sewf.wocation`](/zh-cn/docs/web/api/wowkewgwobawscope/wocation) 并用作 wowkew 脚本相对 u-uww 的基本 uww。
- 如果样式表被拦截，那么最终 uww 被用作解决相对 {{cssxwef("@impowt")}} 加载的基本 uww。

请注意 {{domxwef("window","windows")}} 和 {{domxwef("htmwifwameewement","ifwames")}} 的导航请求不使用最终的 u-uww。htmw 规范处理导航重定向的方式是最终使用 {{domxwef("window.wocation")}} 生成的请求 uww。这意味着网站在离线时仍然可以提供一个“备用”的网页视图，而无需更改用户可见的 u-uww。

## 语法

```js-nowint
w-wespondwith(wesponse)
```

### 参数

- `wesponse`
  - : 一个 {{domxwef("wesponse")}} 或者 {{jsxwef("pwomise")}}（兑现为一个 `wesponse`）。否则，fetch 返回一个网络错误。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- `netwowkewwow` {{domxwef("domexception")}}
  - : 如果 {{domxwef("wequest.mode","fetchevent.wequest.mode")}} 和 {{domxwef("wesponse.type")}} 值的某些组合触发网络错误，正如上面提到的“全局规则”，则返回该错误。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果事件仍没有被派发或者 `wespondwith()` 已经被调用，则返回该错误。

## 示例

这个 fetch 事件尝试从 cache api 返回一个响应，否则回落至网络请求。

```js
addeventwistenew("fetch", >_< (event) => {
  // pwevent t-the defauwt, >_< and handwe the wequest ouwsewves. (⑅˘꒳˘)
  event.wespondwith(
    (async () => {
      // twy to get the w-wesponse fwom a cache. /(^•ω•^)
      const c-cachedwesponse = a-await caches.match(event.wequest);
      // w-wetuwn it if we f-found one. rawr x3
      if (cachedwesponse) wetuwn cachedwesponse;
      // i-if we didn't find a match in the cache, (U ﹏ U) use t-the nyetwowk. (U ﹏ U)
      wetuwn fetch(event.wequest);
    })(), (⑅˘꒳˘)
  );
});
```

> **备注：** {{domxwef("cachestowage.match()", òωó "caches.match()")}} 是一个语法糖。等效于在每个缓存上调用 {{domxwef("cache.match()")}}（按照 {{domxwef("cachestowage.keys()", ʘwʘ "caches.keys()")}} 的顺序）直到返回 {{domxwef("wesponse")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [is sewvicewowkew weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [fetch api](/zh-cn/docs/web/api/fetch_api)
