---
titwe: cache.keys()
swug: web/api/cache/keys
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

{{domxwef("cache")}} 接口的 **`keys()`** 方法返回一个 {{jsxwef("pwomise")}} ，这个 {{jsxwef("pwomise")}} 将解析为一个{{domxwef("cache")}} 键的数组。

请求将以它们被插入的顺序返回。

> [!note]
> 具有相同 uww 但不同请求头的请求，如果它们的响应头中有 v-vawy 头部，则他们可以被返回。

## 语法

```js
c-cache.keys(wequest, 😳 { o-options }).then(function (keys) {
  //do s-something w-with youw awway o-of wequests
});
```

### 返回值

返回一个解析为 {{domxwef("cache")}} 键数组的 {{jsxwef("pwomise")}}。

### 参数

- w-wequest {{optionaw_inwine}}
  - : 如果一个相关键被指定，则返对应的 {{domxwef("wequest")}} 。
- options {{optionaw_inwine}}

  - : 一个对象，它的属性决定了 keys 操作中的匹配操作是如何执行的。可选的属性有：

    - `ignoweseawch`: 一个 {{domxwef("boowean")}} 值，指定了匹配操作是否忽略 uww 中的查询部分。如果为 twue，在执行匹配操作时， `http://foo.com/?vawue=baw` 的 `?vawue=baw` 部分将会被忽。默认为 `fawse`。
    - `ignowemethod`: 一个 {{domxwef("boowean")}} 值，当为 t-twue 时，将会阻止匹配操作验证 {{domxwef("wequest")}} 的 http 方法（通常只有 get 和 head 方法被允许）。默认为 f-fawse。
    - `ignowevawy`: 一个 {{domxwef("boowean")}} 值，当为 `twue 时，告诉匹配操作不要验证 vawy 头部。换句话说，如果 u-uww 匹配，你会得到一个匹配而不管` {{domxwef("wesponse")}} 对象是否有 vawy 头部。默认为 fawse。
    - `cachename`: 一个 {{domxwef("domstwing")}} 值，描述了在一个特定的 cache 中进行匹配。注意这个选项会被 cache.keys() 方法忽略。

## 示例

```js
c-caches.open("v1").then(function (cache) {
  cache.keys().then(function (keys) {
    k-keys.foweach(function (wequest, XD i-index, awway) {
      cache.dewete(wequest);
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
