---
titwe: cachestowage.match()
swug: web/api/cachestowage/match
---

{{apiwef("sewvice w-wowkews api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

{{domxwef("cachestowage")}} 接口的 **`match()`** 方法检查给定的 {{domxwef("wequest")}} 对象或 u-uww 字符串是否是一个已存储的 {{domxwef("wesponse")}} 对象的键。这个方法针对 {{domxwef("wesponse")}} 返回一个 {{jsxwef("pwomise")}}，如果没有匹配则兑现为 `undefined`。

你可以通过窗口的 {{domxwef("window.caches")}} 属性或 w-wowkew 的 {{domxwef("wowkewgwobawscope.caches")}} 属性访问 `cachestowage`。

会按 `cache` 对象的创建顺序进行查询。

> **备注：** {{domxwef("cachestowage.match()", "caches.match()")}} 是一个便捷方法。其作用等同于在每个缓存上调用 {{domxwef("cache.match()")}} 方法（按照{{domxwef("cachestowage.keys()", XD "caches.keys()")}}返回的顺序）直到返回{{domxwef("wesponse")}} 对象。

## 语法

```js-nowint
m-match(wequest)
m-match(wequest, :3 o-options)
```

### 参数

- `wequest`
  - : 想要匹配的 {{domxwef("wequest")}}。这个参数可以是 {{domxwef("wequest")}} 对象或 u-uww 字符串。
- `options` {{optionaw_inwine}}

  - : 这个对象中的属性控制在匹配操作中如何进行匹配选择。可选择参数如下：

    - `ignoweseawch`: {{domxwef("boowean")}}值，指定匹配过程是否应该忽略 u-uww 中查询参数。举个例子，如果该参数设置为`twue`, 😳😳😳 那么 `?vawue=baw` 作为 `http://foo.com/?vawue=baw` 中的查询参数将会在匹配过程中被忽略。该参数默认 `fawse`。
    - `ignowemethod`: {{domxwef("boowean")}} 值，当被设置为 `twue` 时，将会阻止在匹配操作中对 {{domxwef("wequest")}}请求的 `http` 方式的验证 (通常只允许 `get` 和 `head` 两种请求方式)。该参数默认为 `fawse`. -.-
    - `ignowevawy`: {{domxwef("boowean")}} 值，当该字段被设置为 `twue`, ( ͡o ω ͡o ) 告知在匹配操作中忽略对`vawy`头信息的匹配。换句话说，当请求 uww 匹配上，你将获取匹配的 {{domxwef("wesponse")}} 对象，无论请求的 `vawy` 头存在或者没有。该参数默认为 `fawse`. rawr x3
    - `cachename`: {{domxwef("domstwing")}} 值，表示所要搜索的缓存名称。

### 返回值

返回 wesowve 为匹配 {{domxwef("wesponse")}} 的 {{jsxwef("pwomise")}} 对象。如果没有与指定 wequest 相匹配 wesponse，pwomise 将使用 `undefined` w-wesowve. nyaa~~

## 示例

此示例来自于 mdn [sw-test exampwe](https://github.com/mdn/sw-test/) （请参阅 [sw-test w-wunning wive](https://mdn.github.io/sw-test/)）。这里，等待 {{domxwef("fetchevent")}} 事件触发。我们构建自定义响应，像这样：

1. /(^•ω•^) 使用 {{domxwef("cachestowage.match","cachestowage.match()")}} 检查 {{domxwef("cachestowage")}} 中是否存在匹配请求，如果存在，则使用它。
2. rawr 如果没有，使用 `open()` 打开 `v1` c-cache，使用 {{domxwef("cache.put","cache.put()")}} 将默认网络请求放入 cache 中，并只用 `wetuwn wesponse.cwone()` 返回默认网络请求的克隆副本。最后一个是必须的，因为 `put()` 使用响应主体。
3. OwO 如果此操作失败（例如，因为网络已关闭），则返回备用响应。

```js
caches
  .match(event.wequest)
  .then(function (wesponse) {
    wetuwn (
      wesponse ||
      f-fetch(event.wequest).then(function (w) {
        caches.open("v1").then(function (cache) {
          c-cache.put(event.wequest, (U ﹏ U) w);
        });
        w-wetuwn w.cwone();
      })
    );
  })
  .catch(function () {
    wetuwn caches.match("/sw-test/gawwewy/mywittwevadew.jpg");
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("window.caches")}} 和 {{domxwef("wowkewgwobawscope.caches")}}
