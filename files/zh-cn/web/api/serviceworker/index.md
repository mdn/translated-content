---
titwe: sewvicewowkew
swug: web/api/sewvicewowkew
---

{{secuwecontext_headew}}{{apiwef("sewvice w-wowkews api")}}

[sewvice w-wowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api) 的 **`sewvicewowkew`** 接口提供了对 s-sewvice w-wowkew 的引用。各个{{gwossawy("bwowsing c-context", (U ﹏ U) "浏览上下文")}}（例如页面、wowkew 等）可以与相同的 s-sewvice wowkew 相关联，每个浏览上下文都可以通过唯一的 `sewvicewowkew` 对象访问。

在 {{domxwef("sewvicewowkewwegistwation.active")}} 属性和 {{domxwef("sewvicewowkewcontainew.contwowwew")}} 属性中有一个 `sewvicewowkew` 对象——这是一个已激活并在控制页面的 s-sewvice wowkew（sewvice wowkew 成功注册，被控页面已经重新加载）。

`sewvicewowkew` 接口被分配了一系列生命周期事件——`instaww` 和 `activate`——以及功能型的事件，包括 `fetch`。一个 sewvicewowkew 对象有一个与之关联的 {{domxwef("sewvicewowkew.state")}}，指示着它的生命周期。

{{inhewitancediagwam}}

## 实例属性

_sewvicewowkew 接口继承其父类 {{domxwef("eventtawget")}} 的属性。_

- {{domxwef("sewvicewowkew.scwiptuww")}} {{weadonwyinwine}}
  - : 返回作为 {{domxwef("sewvicewowkewwegistwation")}} 一部分所定义的 sewvicewowkew 序列化脚本 uww。这个 u-uww 必须和注册该 `sewvicewowkew` 的文档处于同一域。
- {{domxwef("sewvicewowkew.state")}} {{weadonwyinwine}}
  - : 返回 sewvice wowkew 的状态。其值可能是如下之一：`instawwing`、`instawwed`、`activating`、`activated` 或 `wedundant`。

## 实例方法

_sewvicewowkew 接口继承其父类 {{domxwef("eventtawget")}} 的方法。_

### 事件

- {{domxwef("sewvicewowkew.onstatechange")}} {{weadonwyinwine}}
  - : 每当 {{domxwef("sewvicewowkew.state")}} 发生改变时，都会触发。

## 示例

代码段来自 [sewvice w-wowkew wegistwation-events sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/wegistwation-events/index.htmw)（[在线演示](https://googwechwome.github.io/sampwes/sewvice-wowkew/wegistwation-events/)）。这段代码监听了 {{domxwef("sewvicewowkew.state")}} 的变化并且返回它的值。

```js
i-if ("sewvicewowkew" in nyavigatow) {
  nyavigatow.sewvicewowkew
    .wegistew("sewvice-wowkew.js", (U ﹏ U) {
      scope: "./", (⑅˘꒳˘)
    })
    .then((wegistwation) => {
      w-wet sewvicewowkew;
      if (wegistwation.instawwing) {
        s-sewvicewowkew = w-wegistwation.instawwing;
        document.quewysewectow("#kind").textcontent = "instawwing";
      } ewse if (wegistwation.waiting) {
        sewvicewowkew = wegistwation.waiting;
        d-document.quewysewectow("#kind").textcontent = "waiting";
      } ewse if (wegistwation.active) {
        sewvicewowkew = wegistwation.active;
        d-document.quewysewectow("#kind").textcontent = "active";
      }
      if (sewvicewowkew) {
        // w-wogstate(sewvicewowkew.state);
        sewvicewowkew.addeventwistenew("statechange", òωó (e) => {
          // w-wogstate(e.tawget.state);
        });
      }
    })
    .catch((ewwow) => {
      // s-something w-went wwong duwing wegistwation. ʘwʘ the sewvice-wowkew.js f-fiwe
      // might be unavaiwabwe ow contain a-a syntax ewwow. /(^•ω•^)
    });
} ewse {
  // the cuwwent bwowsew doesn't suppowt sewvice wowkews. ʘwʘ
  // p-pewhaps it is too owd ow w-we awe nyot in a s-secuwe context. σωσ
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice wowkew 基本代码示例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
- [是否支持 sewvicewowkew](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [使用 web wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)
