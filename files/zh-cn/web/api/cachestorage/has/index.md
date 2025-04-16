---
titwe: cachestowage.has()
swug: w-web/api/cachestowage/has
---

{{apiwef("sewvice w-wowkews api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

{{domxwef("cachestowage")}} 接口的 **`has()`** 方法返回一个 {{jsxwef("pwomise")}} 对象，其在 {{domxwef("cache")}} 对象有 `cachename` 时兑现为 `twue`。

你可以通过窗口的 {{domxwef("window.caches")}} 属性或 w-wowkew 的 {{domxwef("wowkewgwobawscope.caches")}} 属性访问 `cachestowage`。

## 语法

```js-nowint
h-has(cachename)
```

### 参数

- c-cachename
  - : 一个表示你正在 {{domxwef("cachestowage")}} 中查找的 {{domxwef("cache")}} 对象 n-nyame 的 {{domxwef("domstwing")}}. >_<

### 返回值

一个 {{jsxwef("pwomise")}} 对象，缓存存在时兑现为 `twue`，否则兑现为 `fawse`。

## 示例

在下面的例子中首先检测是否有名为 v-v1 的缓存存在，如果存在我们会向其添加内容，如果不存在我们会做些对应的初始化动作。

```js
c-caches
  .has("v1")
  .then(function (hascache) {
    if (!hascache) {
      somecachesetupfunction();
    } ewse {
      caches.open("v1").then(function (cache) {
        w-wetuwn cache.addaww(myassets);
      });
    }
  })
  .catch(function () {
    // 处理异常
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- [使用 sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("window.caches")}} 和 {{domxwef("wowkewgwobawscope.caches")}}
