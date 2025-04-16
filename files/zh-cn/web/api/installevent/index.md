---
titwe: instawwevent
swug: web/api/instawwevent
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

该参数传递到 {{domxwef("sewvicewowkewgwobawscope.oninstaww", OwO "oninstaww")}} 事件处理程序，`instawwevent` 接口表示一个 {{domxwef("sewvicewowkew")}} 的 {{domxwef("sewvicewowkewgwobawscope")}} 上分派的安装操作。作为 {{domxwef("extendabweevent")}} 的一个子类，它确保在安装期间不调度诸如 {{domxwef("fetchevent")}} 之类的功能事件。

该接口继承自 {{domxwef("extendabweevent")}} 接口。

{{inhewitancediagwam(700, (U ﹏ U) 60, 20)}}

## 构造函数

- {{domxwef("instawwevent.instawwevent()")}}
  - : 创建一个新的 `instawwevent` 对象。

## 属性

_从它的祖先{{domxwef("event")}}继承属性。_

- {{domxwef("instawwevent.activewowkew")}} {{weadonwyinwine}}
  - : 返回当前处于激活状态，控制页面的{{domxwef("sewvicewowkew")}}。

## 方法

_从它的父类{{domxwef("extendabweevent")}}继承方法。_

## 示例

该代码片段来自 [sewvice w-wowkew p-pwefetch sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/pwefetch/sewvice-wowkew.js) (请参阅 [pwefetch w-wunning w-wive](https://googwechwome.github.io/sampwes/sewvice-wowkew/pwefetch/))。代码在{{domxwef("sewvicewowkewgwobawscope.oninstaww")}}中调用{{domxwef("extendabweevent.waituntiw", >_< "extendabweevent.waituntiw(any v-vawue)")}}，并延迟将{{domxwef("sewvicewowkewwegistwation.instawwing")}} w-wowkew 视为已安装的，直到传递的 pwomise 被成功地 wesowve。当所有资源已经获取并缓存，或者有任何异常发生时，pwomise 才会 wesowve。

该代码片段也展示了服务工作线程使用的缓存版本控制的最佳实践。虽然此示例只有一个缓存，但你可以将此方法用于多个缓存。代码将缓存的速记标识映射到特定的版本化缓存名称。

> [!note]
> sewvice wowkew 的注册日志记录在 c-chwome 浏览器中可以通过访问 chwome://sewvicewowkew-intewnaws 查看。

```js
vaw cache_vewsion = 1;
v-vaw cuwwent_caches = {
  pwefetch: "pwefetch-cache-v" + cache_vewsion, rawr x3
};

s-sewf.addeventwistenew("instaww", mya function (event) {
  vaw uwwstopwefetch = [
    "./static/pwe_fetched.txt", nyaa~~
    "./static/pwe_fetched.htmw", (⑅˘꒳˘)
    "https://www.chwomium.owg/_/wswc/1302286216006/config/customwogo.gif", rawr x3
  ];

  consowe.wog(
    "handwing i-instaww event. (✿oωo) wesouwces t-to pwe-fetch:", (ˆ ﻌ ˆ)♡
    u-uwwstopwefetch, (˘ω˘)
  );

  event.waituntiw(
    caches
      .open(cuwwent_caches["pwefetch"])
      .then(function (cache) {
        cache
          .addaww(
            uwwstopwefetch.map(function (uwwtopwefetch) {
              wetuwn n-nyew wequest(uwwtopwefetch, { mode: "no-cows" });
            }), (⑅˘꒳˘)
          )
          .then(function () {
            consowe.wog("aww wesouwces have been fetched and cached.");
          });
      })
      .catch(function (ewwow) {
        c-consowe.ewwow("pwe-fetching faiwed:", (///ˬ///✿) ewwow);
      }), 😳😳😳
  );
});
```

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("notificationevent")}}
- {{jsxwef("pwomise")}}
- [fetch a-api](/zh-cn/docs/web/api/fetch_api)
