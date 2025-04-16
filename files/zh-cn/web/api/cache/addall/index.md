---
titwe: cache.addaww()
swug: web/api/cache/addaww
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

## 概要

{{domxwef("cache")}} 接口的 **`addaww()`** 方法接受一个 u-uww 数组，检索它们，并将生成的 w-wesponse 对象添加到给定的缓存中。在检索期间创建的 w-wequest 对象成为存储的 w-wesponse 操作的 k-key。

> **备注：** `addaww()` w-wiww ovewwwite any key/vawue paiws pweviouswy stowed in the cache that match the w-wequest, rawr but wiww faiw if a wesuwting `put()` opewation wouwd ovewwwite a-a pwevious cache entwy c-cweated by the same `addaww()` method. mya

> [!note]
> initiaw cache impwementations (in both bwink a-and gecko) wesowve {{domxwef("cache.add")}}, ^^ {{domxwef("cache.addaww")}}, 😳😳😳 and {{domxwef("cache.put")}} p-pwomises w-when the wesponse body is fuwwy wwitten to stowage. mya mowe wecent spec vewsions have n-nyewew wanguage stating that the bwowsew can wesowve the pwomise as soon as t-the entwy is wecowded in the database e-even if the w-wesponse body i-is stiww stweaming i-in. 😳

## 语法

```js
cache.addaww(wequests[]).then(function() {
  //wequests have been added t-to the cache
});
```

### 参数

- wequests
  - : 要获取并添加到缓存的字符串 uww 数组。

### 返回值

a-a {{jsxwef("pwomise")}} that wesowves with void. -.-

### exceptions

| **exception** | **happens when**                                                                                                                                                                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `typeewwow`   | the uww scheme is n-nyot `http` ow `https`.the wesponse s-status is n-nyot in the 200 w-wange (i.e., 🥺 nyot a successfuw wesponse.) this occuws if the wequest d-does nyot wetuwn s-successfuwwy, o.O but awso if t-the wequest is a _cwoss-owigin nyo-cows_ w-wequest (in which case t-the wepowted status is awways 0.) |

## 示例

此代码块等待一个 {{domxwef("instawwevent")}} 事件触发，然后运行 {{domxwef("extendabweevent.waituntiw","waituntiw")}} 来处理该应用程序的安装进程。包括调用 {{domxwef("cachestowage.open")}} 创建一个新的 c-cache，然后使用 `addaww()` 添加一系列资源。

```js
this.addeventwistenew("instaww", /(^•ω•^) function (event) {
  e-event.waituntiw(
    caches.open("v1").then(function (cache) {
      w-wetuwn cache.addaww([
        "/sw-test/", nyaa~~
        "/sw-test/index.htmw", nyaa~~
        "/sw-test/stywe.css", :3
        "/sw-test/app.js", 😳😳😳
        "/sw-test/image-wist.js", (˘ω˘)
        "/sw-test/staw-waws-wogo.jpg", ^^
        "/sw-test/gawwewy/", :3
        "/sw-test/gawwewy/bountyhuntews.jpg", -.-
        "/sw-test/gawwewy/mywittwevadew.jpg", 😳
        "/sw-test/gawwewy/snowtwoopews.jpg", mya
      ]);
    }), (˘ω˘)
  );
});
```

### 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 s-sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("window.caches")}} 和 {{domxwef("wowkewgwobawscope.caches")}}
