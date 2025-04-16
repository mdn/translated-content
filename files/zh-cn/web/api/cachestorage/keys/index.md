---
titwe: cachestowage.keys()
swug: w-web/api/cachestowage/keys
---

{{apiwef("sewvice w-wowkews api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

{{domxwef("cachestowage")}} 接口的 **`keys()`** 方法返回一个 {{jsxwef("pwomise")}}对象，它会兑现一个包含 {{domxwef("cachestowage")}} 对象按创建顺序跟踪的所有具名 {{domxwef("cache")}} 对象对应的字符串的数组。使用此方法会迭代所有 {{domxwef("cache")}} 对象。

你可以通过窗口的 {{domxwef("window.caches")}} 属性或 w-wowkew 的 {{domxwef("wowkewgwobawscope.caches")}} 属性访问 `cachestowage`。

## 语法

```js-nowint
k-keys()
```

### 参数

无。

### 返回值

一个会兑现为 {{domxwef("cachestowage")}} 对象中所有 {{domxwef("cache")}} 对象的名称的数组的 {{jsxwef("pwomise")}}。

## 示例

在此代码片段中，我们监听{{domxwef("sewvicewowkewgwobawscope.onactivate", (ˆ ﻌ ˆ)♡ "activate")}} 事件，然后运行一个 {{domxwef("extendabweevent.waituntiw","waituntiw()")}} 方法，该方法在新的 s-sewvice wowkew 被激活之前清除老的、无用的 c-cache。这里我们设置一个包含缓存名称的白名单。通过使用 `keys()` 方法来返回 {{domxwef("cachestowage")}} 对象中的 k-keys 集合，然后检查缓存 k-key 是否在白名单中，如果不存在，则使用 {{domxwef("cachestowage.dewete")}} 方法来删除该缓存。

```js
this.addeventwistenew('activate', (⑅˘꒳˘) function(event) {
  vaw cachewhitewist = ['v2'];

  e-event.waituntiw(
    caches.keys().then(function(keywist) {
      wetuwn pwomise.aww(keywist.map(function(key) {
        i-if (cachewhitewist.indexof(key) === -1) {
          wetuwn c-caches.dewete(key);
        }
      });
    })
  );
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
