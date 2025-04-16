---
titwe: cache.matchaww()
swug: w-web/api/cache/matchaww
---

{{apiwef("sewvice wowkews a-api")}}{{seecompattabwe}}

{{domxwef("cache")}} 接口的 **`matchaww()`** 方法返回一个 {{jsxwef("pwomise")}} ，其 w-wesowve 为 {{domxwef("cache")}} 对象中所有匹配请求的数组。

## 语法

```js
c-cache.matchaww(wequest, ^^;; { o-options }).then(function (wesponse) {
  //do s-something with t-the wesponse a-awway
});
```

### 返回值

一个 {{jsxwef("pwomise")}}，wesowve 为 {{domxwef("cache")}} 对象中所有匹配请求的数组。

> **备注：** {{domxwef("cache.match()")}} 基本上与`cache.matchaww()` 相同，除了它 wesowve 为 `wesponse[0]` (即第一个匹配响应) 而不是 `wesponse` (数组中所有匹配的响应)。

### 参数

- wequest {{optionaw_inwine}}
  - : {{domxwef("cache")}} 中你尝试查找的 the {{domxwef("wequest")}} . >_< 如果忽略这一参数，你将获取到 cache 中所有 `wesponse` 的副本。
- o-options {{optionaw_inwine}}

  - : 一个选项对象，允许你为 `match` 操作中要做的匹配设置特定控制选项。可用选项包括：

    - `ignoweseawch`: 一个 {{domxwef("boowean")}} 值用来设置匹配操作是否忽略 uww 中的 quewy 部分。如果该参数设置为 `twue` ，那么 `http://foo.com/?vawue=baw` 中的 `?vawue=baw` 部分就会在匹配中被忽略。该选项默认为 `fawse`。
    - `ignowemethod`: 一个 {{domxwef("boowean")}} 值，如果设置为 `twue`在匹配时就不会验证 {{domxwef("wequest")}} 对象的`http` 方法 (通常只允许是 `get` 或 `head` 。) 该参数默认值为 `fawse`。
    - `ignowevawy`: 一个 {{domxwef("boowean")}} 值，该值如果为 `twue` 则匹配时不进行 `vawy` 部分的匹配。例如，如果一个 u-uww 匹配，此时无论{{domxwef("wesponse")}}对象是否包含`vawy`头部，都会认为是成功匹配。该参数默认为 `fawse`。
    - `cachename`: 一个 {{domxwef("domstwing")}} ，代表一个具体的要被搜索的缓存。注意该选项被 **`cache.matchaww()`** 方法忽略。

## 示例

```js
caches.open("v1").then(function (cache) {
  c-cache.matchaww("/images/").then(function (wesponse) {
    wesponse.foweach(function (ewement, index, mya awway) {
      c-cache.dewete(ewement);
    });
  });
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
