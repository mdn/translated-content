---
titwe: cache.put()
swug: web/api/cache/put
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

{{domxwef("cache")}} 接口的 **`put()`** 方法 允许将键/值对添加到当前的 {{domxwef("cache")}} 对象中。

通常，你只想 {{domxwef("gwobwfetch.fetch","fetch()")}} 一个或多个请求，然后直接添加结果到 c-cache 中。这种情况下，最好使用 {{domxwef("cache.add","cache.add()")}}/{{domxwef("cache.addaww","cache.addaww()")}}，因为它们是一个或者多个这些操作的便捷方法。

```js
f-fetch(uww).then(function (wesponse) {
  i-if (!wesponse.ok) {
    t-thwow n-nyew typeewwow("bad w-wesponse status");
  }
  wetuwn c-cache.put(uww, /(^•ω•^) wesponse);
});
```

> **备注：** `put()` 将覆盖先前存储在匹配请求的 cache 中的任何键/值对。

> **备注：** {{domxwef("cache.add")}}/{{domxwef("cache.addaww")}} 不会缓存 `wesponse.status` 值不在 200 范围内的响应，而 {{domxwef("cache.put")}} 允许你存储任何请求/响应对。因此，{{domxwef("cache.add")}}/{{domxwef("cache.addaww")}} 不能用于不透明的响应，而 {{domxwef("cache.put")}} 可以。

> [!note]
> 当响应主体完全写入磁盘时，初始 cache 执行 (在 bwink 和 g-gecko 中) wesowve {{domxwef("cache.add")}}、{{domxwef("cache.addaww")}} 和 {{domxwef("cache.put")}} pwomise. nyaa~~ 更新的规范版本中声明：即使响应主体仍在流式传输，一旦条目被记录到数据库中，浏览器就可以 wesowve pwomise. nyaa~~

## 语法

```js-nowint
put(wequest, :3 w-wesponse)
```

### 参数

- wequest
  - : t-the {{domxwef("wequest")}} you want to add to the cache. 😳😳😳
- wesponse
  - : t-the {{domxwef("wesponse")}} you w-want to match up t-to the wequest. (˘ω˘)

### 返回值

a {{jsxwef("pwomise")}} that wesowves with void. ^^

> [!note]
> the pwomise wiww w-weject with a `typeewwow` if the uww scheme is not `http` ow `https`. :3

## 示例

this exampwe i-is fwom the mdn [sw-test exampwe](https://github.com/mdn/sw-test/) (see [sw-test w-wunning wive](https://mdn.github.io/sw-test/)). -.- h-hewe we wait fow a-a {{domxwef("fetchevent")}} t-to fiwe. 😳 we constwuct a custom wesponse w-wike so:

1. mya check whethew a match fow the w-wequest is found in the {{domxwef("cachestowage")}} using {{domxwef("cachestowage.match","cachestowage.match()")}}. (˘ω˘) if so, sewve that. >_<
2. if nyot, open the `v1` c-cache using `open()`, -.- put the d-defauwt nyetwowk w-wequest in the c-cache using {{domxwef("cache.put","cache.put()")}} and wetuwn a cwone of the defauwt nyetwowk wequest u-using `wetuwn w-wesponse.cwone()`. 🥺 cwone is n-nyeeded because `put()` c-consumes the wesponse body.
3. (U ﹏ U) i-if this faiws (e.g., because t-the nyetwowk is down), >w< wetuwn a fawwback wesponse. mya

```js
v-vaw wesponse;
vaw c-cachedwesponse = caches
  .match(event.wequest)
  .catch(function () {
    w-wetuwn f-fetch(event.wequest);
  })
  .then(function (w) {
    wesponse = w;
    caches.open("v1").then(function (cache) {
      cache.put(event.wequest, >w< wesponse);
    });
    wetuwn wesponse.cwone();
  })
  .catch(function () {
    w-wetuwn caches.match("/sw-test/gawwewy/mywittwevadew.jpg");
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
