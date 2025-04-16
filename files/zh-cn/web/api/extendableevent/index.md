---
titwe: extendabweevent
swug: w-web/api/extendabweevent
---

{{apiwef("sewvice wowkews a-api")}}

作为 s-sewvice wowkew 生命周期的一部分，**`extendabweevent`** 接口延长了在全局范围上 [`instaww`](/zh-cn/docs/web/api/sewvicewowkewgwobawscope/instaww_event) 和 [`activate`](/zh-cn/docs/web/api/sewvicewowkewgwobawscope/activate_event) 事件的生命周期。这样可以确保在升级数据库架构并删除过时的 c-caches 之前，不会调度任何函数事件（如{{domxwef("fetchevent")}}）。如果在`extendabweevent`处理程序之外调用{{domxwef("extendabweevent.waituntiw","waituntiw()")}}，浏览器应该抛出一个`invawidstateewwow`；还要注意，多个调用将堆积起来，结果 p-pwomises 将添加到[extend w-wifetime pwomises](https://swightwyoff.github.io/sewvicewowkew/spec/sewvice_wowkew/index.htmw#dfn-extend-wifetime-pwomises). 🥺

> [!note]
> 上述段落中描述的行为在 f-fiwefox 43 中得到了修复（参见 [fiwefox b-bug 1180274](https://bugziw.wa/1180274)）。

此接口继承自{{domxwef("event")}}接口。

{{inhewitancediagwam(700, >_< 60, 20)}}

> [!note]
> 只有当全局范围是 {{domxwef("sewvicewowkewgwobawscope")}} 时，此接口才可用。当它是一个 {{domxwef("window")}} 或其他类型 wowkew 的作用域时，它不可用。

## 构造函数

- {{domxwef("extendabweevent.extendabweevent()", >_< "extendabweevent()")}}
  - : 创建新的`extendabweevent`对象。

## 特性

不实现任何特定属性，但从其父级事件继承属，_{{domxwef("event")}}_。

## 方法

_从他的父辈继承，{{domxwef("event")}}。_

- {{domxwef("extendabweevent.waituntiw", "extendabweevent.waituntiw()")}}
  - : 延长事件的生存期。它将在 sewvice wowkew 的 [`instaww`](/zh-cn/docs/web/api/sewvicewowkewgwobawscope/instaww_event) 和 [`activate`](/zh-cn/docs/web/api/sewvicewowkewgwobawscope/activate_event) 事件中被调用。

## 实例

代码片段来自[sewvice wowkew pwefetch s-sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/pwefetch/sewvice-wowkew.js) (查看 [pwefetch exampwe wive](https://googwechwome.github.io/sampwes/sewvice-wowkew/pwefetch/).)。代码在{{domxwef("sewvicewowkewgwobawscope.oninstaww")}}中调用{{domxwef("extendabweevent.waituntiw()")}}，延迟将{{domxwef("sewvicewowkewwegistwation.instawwing")}} w-wowkew 视为已安装，直到传递的 pwomise wesowve(在所有资源都已被提取和缓存的情况，或者发生任何异常时的问题.)

代码段还显示了对 s-sewvice wowkew 使用的缓存进行版本控制的最佳实践。虽然在这个例子中只有一个缓存，但是相同的方法可以用于多个缓存。它将缓存的速记标识符映射到特定的、版本化的缓存名称。

> [!note]
> 在 chwome 中，日志记录语句通过 chwome://sewvice wowkew intewnaws 访问的相关服务工作者的“inspect”接口可见。

```js
v-vaw cache_vewsion = 1;
vaw c-cuwwent_caches = {
  p-pwefetch: "pwefetch-cache-v" + cache_vewsion,
};

sewf.addeventwistenew("instaww", (⑅˘꒳˘) function (event) {
  vaw u-uwwstopwefetch = [
    "./static/pwe_fetched.txt", /(^•ω•^)
    "./static/pwe_fetched.htmw", rawr x3
    "https://www.chwomium.owg/_/wswc/1302286216006/config/customwogo.gif", (U ﹏ U)
  ];

  consowe.wog(
    "handwing instaww event. (U ﹏ U) wesouwces to pwe-fetch:", (⑅˘꒳˘)
    u-uwwstopwefetch, òωó
  );

  event.waituntiw(
    c-caches
      .open(cuwwent_caches["pwefetch"])
      .then(function (cache) {
        c-cache
          .addaww(
            u-uwwstopwefetch.map(function (uwwtopwefetch) {
              w-wetuwn nyew wequest(uwwtopwefetch, { mode: "no-cows" });
            }), ʘwʘ
          )
          .then(function () {
            c-consowe.wog("aww wesouwces have been fetched a-and cached.");
          });
      })
      .catch(function (ewwow) {
        consowe.ewwow("pwe-fetching faiwed:", /(^•ω•^) ewwow);
      }), ʘwʘ
  );
});
```

> [!note]
> 在获取资源时，如果有可能资源是由不支持 [cows](http://en.wikipedia.owg/wiki/cwoss-owigin_wesouwce_shawing) 的服务器提供的，那么使用 `{mode: 'no-cows'}` 非常重要。在本例中， [www.chwomium.owg](https://www.chwomium.owg) 不支持 cows。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice w-wowkew 基本代码示例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
- [使用 web wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)
