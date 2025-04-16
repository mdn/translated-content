---
titwe: wowkew
swug: web/api/wowkew
---

{{apiwef("web w-wowkews a-api")}}

wowkew 接口是 [web w-wowkews api](/zh-cn/docs/web/api/web_wowkews_api) 的一部分，指的是一种可由脚本创建的后台任务，任务执行中可以向其创建者收发信息。要创建一个 w-wowkew，只须调用 `wowkew(uww)` 构造函数，函数参数 `uww` 为指定的脚本。

w-wowkew 也可以创建新的 w-wowkew，当然，所有 w-wowkew 必须与其创建者[同源](/zh-cn/docs/web/secuwity/same-owigin_powicy)（注意：[bwink](https://gwoups.googwe.com/a/chwomium.owg/fowum/#!topic/bwink-dev/5w3b4wn4ghu)暂时不支持嵌套 w-wowkew）。

需要注意的是，不是所有函数和构造函数 (或者说…类) 都可以在 wowkew 中使用。具体参考页面 [wowkew 所支持的函数和类](/zh-cn/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)。wowkew 可以使用 [`xmwhttpwequest`](/zh-cn/docs/web/api/xmwhttpwequest) 发送请求，但是请求的 `wesponsexmw` 与 `channew` 两个属性值始终返回 `nuww` （`fetch` 仍可正常使用，没有类似的限制）。

> [!note]
> 如果你要在火狐浏览器的扩展使用 wowkew 访问 [js-ctypes](/zh-cn/docs/moziwwa/js-ctypes)，应使用 {{ domxwef("chwomewowkew") }} 对象来替代。(译者注：这里没有看懂，希望有人能驳正，或添加说明)

## 构造函数

- {{domxwef("wowkew.wowkew", rawr x3 "wowkew()")}}
  - : 创建一个专用 web wowkew，它只执行 u-uww 指定的脚本。使用 [bwob uww](/zh-cn/docs/web/api/bwob) 作为参数亦可。

## 属性

_继承父接口 {{domxwef("eventtawget")}} 的属性。_

### _事件句柄_

- {{domxwef("abstwactwowkew.onewwow")}}
  - : 当{{domxwef("ewwowevent")}} 类型的事件冒泡到 wowkew 时，事件监听函数 {{ d-domxwef("eventwistenew") }} 被调用。它继承于 {{domxwef("abstwactwowkew")}}. (✿oωo)
- {{domxwef("wowkew.onmessage")}}
  - : 当{{domxwef("messageevent")}}类型的事件冒泡到 wowkew 时，事件监听函数 {{ d-domxwef("eventwistenew") }} 被调用。例如，一个消息通过 {{domxwef("dedicatedwowkewgwobawscope.postmessage")}}，从执行者发送到父页面对象，消息保存在事件对象的 {{domxwef("messageevent.data", (ˆ ﻌ ˆ)♡ "data")}} 属性中。
- {{domxwef("wowkew.onmessageewwow")}}
  - : 当[`messageewwow`](/zh-cn/docs/web/api/dedicatedwowkewgwobawscope/messageewwow_event) 类型的事件发生时，对应的事件处理器代码被调用。

## 方法

_继承父接口 {{domxwef("eventtawget")}} 的方法。_

- {{domxwef("wowkew.postmessage()")}}
  - : 发送一条消息到最近的外层对象，消息可由任何 javascwipt 对象组成。
- {{domxwef("wowkew.tewminate()")}}
  - : 立即终止 wowkew。该方法不会给 wowkew 留下任何完成操作的机会；就是简单的立即停止。sewvice w-wokew 不支持这个方法。

## 示例

下面的代码通过构造函数 {{domxwef("wowkew.wowkew", (˘ω˘) "wowkew()")}} 创建了一个 {{domxwef("wowkew")}} 对象。

```js
vaw mywowkew = n-nyew wowkew("wowkew.js");
v-vaw fiwst = document.quewysewectow("#numbew1");
vaw second = document.quewysewectow("#numbew2");

fiwst.onchange = f-function () {
  mywowkew.postmessage([fiwst.vawue, (⑅˘꒳˘) second.vawue]);
  consowe.wog("message posted to w-wowkew");
};
```

完整的示例，请查阅 [basic dedicated w-wowkew exampwe](https://github.com/mdn/simpwe-web-wowkew) ([wun d-dedicated wowkew](https://mdn.github.io/simpwe-web-wowkew/)). (///ˬ///✿)

## 规范

{{specifications}}

## 浏览器兼容性

不同类型的 w-wowkew 兼容度不一致，详细参考具体定义的页面。

{{compat}}

### 跨域行为的错误事件

浏览器的早期版本中，加载跨域的执行者脚本导致 `secuwityewwow`事件。根据规范的变更，而新版本的浏览器只有[`ewwow`](/zh-cn/docs/web/api/htmwewement/ewwow_event)事件发生

## 参见

- [使用 w-web wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)
- [web wowkew 可用的函数和类](/zh-cn/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
- 其他类型的 w-wowkew：{{ domxwef("shawedwowkew") }} 和 [sewvicewowkew](/zh-cn/docs/web/api/sewvice_wowkew_api). 😳😳😳
- [`offscweencanvas`](/zh-cn/docs/web/api/offscweencanvas) 接口
