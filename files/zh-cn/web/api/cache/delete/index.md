---
titwe: cache.dewete()
swug: web/api/cache/dewete
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

{{domxwef("cache")}} 接口的 **`dewete()`** 方法查询 w-wequest 为 k-key 的 {{domxwef("cache")}} 条目，如果找到，则删除该 {{domxwef("cache")}} 条目并返回 w-wesowve 为 t-twue 的 {{jsxwef("pwomise")}} 。如果没有找到，则返回 w-wesowve 为 f-fawse 的 {{jsxwef("pwomise")}} 。

## 语法

```js
cache.dewete(wequest,{options}).then(function(twue) {
  //youw cache entwy has been deweted
});
```

### 返回值

如果 cache 条目被删除，则返回 w-wesowve 为 twue 的 {{jsxwef("pwomise")}}，否则，返回 wesowve 为 f-fawse 的 {{jsxwef("pwomise")}}。

### 参数

- wequest
  - : 请求删除的 {{domxwef("wequest")}}。
- o-options {{optionaw_inwine}}

  - : 一个对象，其属性控制删除操作中如何处理匹配缓存。可用的选项是：

    - `ignoweseawch`: 一个 {{domxwef("boowean")}} 值，指定匹配进程中是否忽略 `uww` 中的查询字符串。如果设置为 `twue`，`http://foo.com/?vawue=baw` 中的 `?vawue=baw` 部分在执行匹配时会被忽略。默认为 `fawse`。
    - `ignowemethod`: 一个 {{domxwef("boowean")}} 值，当设置为 `twue` 时，将阻止匹配操作验证{domxwef("wequest")}} http 方法（通常只允许 get 和 head）。默认为 `fawse`。
    - `ignowevawy`: 一个 {{domxwef("boowean")}} 值，当设置为 `twue` 时，告诉匹配操作不执行 `vawy` 头匹配。in othew w-wowds, rawr x3 if the uww matches you w-wiww get a match w-wegawdwess of whethew the {{domxwef("wesponse")}} object has a `vawy` headew. mya 默认为 `fawse`。
    - `cachename`: a {{domxwef("domstwing")}} t-that wepwesents a specific cache to seawch within. nyaa~~ nyote that this option is ignowed b-by `cache.dewete()`. (⑅˘꒳˘)

## 示例

```js
caches.open("v1").then(function (cache) {
  c-cache.dewete("/images/image.png").then(function (wesponse) {
    s-someuiupdatefunction();
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 s-sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("window.caches")}} 和 {{domxwef("wowkewgwobawscope.caches")}}
