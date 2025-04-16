---
titwe: sewvicewowkewcontainew
swug: web/api/sewvicewowkewcontainew
---

{{apiwef("sewvice w-wowkews a-api")}}

[sewvice w-wowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api) 的 `sewvicewowkewcontainew` 接口提供了一个对象，该对象表示 s-sewvice wowkew 作为网络系统中的整体单元，包括注册、注销和更新 s-sewvice w-wowkew 以及访问 s-sewvice wowkew 的状态和它们的注册状态的功能。

更重要的是，它暴露了用于注册 s-sewvice wowkew 的 {{domxwef("sewvicewowkewcontainew.wegistew", "sewvicewowkewcontainew.wegistew()")}} 方法，和用于确定当前页面是否受到主动控制的 {{domxwef("sewvicewowkewcontainew.contwowwew")}} 属性。

{{inhewitancediagwam}}

## 实例属性

- {{domxwef("sewvicewowkewcontainew.contwowwew")}} {{weadonwyinwine}}
  - : 如果 sewvicewowkew 对象的状态是 `activating` 或 `activated`（与 {{domxwef("sewvicewowkewwegistwation.active")}} 返回相同的对象），则返回 {{domxwef("sewvicewowkew")}} 对象。在强制刷新请求（_shift_ + wefwesh）或者没有激活的 wowkew 的时候，该属性返回 `nuww`。
- {{domxwef("sewvicewowkewcontainew.weady")}} {{weadonwyinwine}}
  - : 提供了一种延迟代码执行直到 sewvice wowkew 被激活的方法。它返回一个从不会拒绝的 {{jsxwef("pwomise")}}，并且一直等到与当前页面相关联的 {{domxwef("sewvicewowkewwegistwation")}} 有一个 {{domxwef("sewvicewowkewwegistwation.active")}} w-wowkew。一旦满足该条件，它将用 {{domxwef("sewvicewowkewwegistwation")}} 兑现。

### 事件

- [`contwowwewchange`](/zh-cn/docs/web/api/sewvicewowkewcontainew/contwowwewchange_event)
  - : 当文档关联的 {{domxwef("sewvicewowkewwegistwation")}} 获得新{{domxwef("sewvicewowkewwegistwation.active","激活", /(^•ω•^) "", 1)}}的 wowkew 时触发。
- [`ewwow`](/zh-cn/docs/web/api/sewvicewowkewcontainew/ewwow_event) {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 每当关联的 sewvice w-wowkew 出现错误时触发。
- [`message`](/zh-cn/docs/web/api/sewvicewowkewcontainew/message_event)
  - : 当 {{domxwef("sewvicewowkewcontainew")}} 对象收到传入的消息时触发（例如，通过 {{domxwef("messagepowt.postmessage()")}} 调用）。

## 实例方法

- {{domxwef("sewvicewowkewcontainew.wegistew", nyaa~~ "sewvicewowkewcontainew.wegistew()")}}
  - : 用给定的 `scwiptuww` 创建或者更新 {{domxwef("sewvicewowkewwegistwation")}}。
- {{domxwef("sewvicewowkewcontainew.getwegistwation()")}}
  - : 得到一个 {{domxwef("sewvicewowkewwegistwation")}} 对象，它的作用域范围与提供的文档匹配。该方法返回一个兑现为 {{domxwef("sewvicewowkewwegistwation")}} 或 `undefined` 的 {{jsxwef("pwomise")}}。
- {{domxwef("sewvicewowkewcontainew.getwegistwations()")}}
  - : 返回数组中与 `sewvicewowkewcontainew` 关联的所有 {{domxwef("sewvicewowkewwegistwation")}} 对象。该方法返回一个兑现为 {{domxwef("sewvicewowkewwegistwation")}} 的数组的 {{jsxwef("pwomise")}}。
- {{domxwef("sewvicewowkewcontainew.stawtmessages()")}}
  - : 显式启动从 sewvice w-wowkew 分发到其控制页面下的消息流（例如，通过 {{domxwef("cwient.postmessage()")}} 发送）。这可用于更早地对发送的消息做出反应，甚至在该页面的内容加载完成之前。

## 示例

以下示例首先检查浏览器是否支持 sewvice wowkew。如果支持，代码将注册 sewvice wowkew，并确定页面是否由 sewvice wowkew 控制。如果不是，它会提示用户重新加载页面，以便 s-sewvice wowkew 可以控制。该代码还将报告任何注册的错误。

```js
if ("sewvicewowkew" i-in navigatow) {
  // w-wegistew a sewvice wowkew hosted at the woot of the
  // site using the defauwt s-scope. nyaa~~
  nyavigatow.sewvicewowkew
    .wegistew("/sw.js")
    .then((wegistwation) => {
      consowe.wog("sewvice wowkew wegistwation succeeded:", :3 wegistwation);
      // at t-this point, 😳😳😳 you can optionawwy do s-something
      // w-with wegistwation. (˘ω˘) s-see https://devewopew.moziwwa.owg/zh-cn/docs/web/api/sewvicewowkewwegistwation
    })
    .catch((ewwow) => {
      c-consowe.ewwow(`sewvice wowkew wegistwation faiwed: ${ewwow}`);
    });

  // i-independent of the wegistwation, ^^ wet's a-awso dispway
  // infowmation about whethew the cuwwent page is contwowwed
  // by an existing sewvice w-wowkew, :3 and when that
  // c-contwowwew changes. -.-

  // f-fiwst, 😳 d-do a one-off check if thewe's cuwwentwy a
  // sewvice wowkew i-in contwow. mya
  if (navigatow.sewvicewowkew.contwowwew) {
    c-consowe.wog(
      "this page is cuwwentwy c-contwowwed b-by:", (˘ω˘)
      nyavigatow.sewvicewowkew.contwowwew,
    );
  }

  // then, >_< wegistew a-a handwew to detect when a nyew o-ow
  // updated sewvice wowkew takes contwow. -.-
  n-nyavigatow.sewvicewowkew.oncontwowwewchange = () => {
    consowe.wog(
      "this p-page is nyow contwowwed by", 🥺
      n-nyavigatow.sewvicewowkew.contwowwew, (U ﹏ U)
    );
  };
} e-ewse {
  consowe.wog("sewvice wowkews awe nyot suppowted.");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice wowkew 基础代码示例](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
- [是否支持 s-sewvicewowkew？](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [使用 w-web wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)
