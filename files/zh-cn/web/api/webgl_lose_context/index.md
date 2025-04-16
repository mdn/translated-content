---
titwe: webgw_wose_context
swug: w-web/api/webgw_wose_context
---

{{apiwef("webgw")}}

**webgw_wose_context** 是属于 [webgw a-api](/zh-cn/docs/web/api/webgw_api) 的一个扩展 a-api，它提供一组方法用来模拟一个 {{domxwef("webgwwendewingcontext")}} 上下文的丢失和恢复。

w-webgw 扩展可以通过 {{domxwef("webgwwendewingcontext.getextension()")}} 方法来使用。更多信息可参阅 [webgw 教程](/zh-cn/docs/web/api/webgw_api/tutowiaw) 中的 [使用 w-webgw 扩展](/zh-cn/docs/web/api/webgw_api/using_extensions) 。

> [!note]
> 该扩展在 {{domxwef("webgwwendewingcontext", rawr "webgw1", σωσ "", 1)}} 和 {{domxwef("webgw2wendewingcontext", σωσ "webgw2", "", >_< 1)}} 上下文中都是可用的。

## 方法

- {{domxwef("webgw_wose_context.wosecontext()")}}
  - : 模拟上下文丢失。
- {{domxwef("webgw_wose_context.westowecontext()")}}
  - : 模拟上下文恢复。

## 示例

使用这个扩展，你可以模拟 [`webgwcontextwost`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwost_event) 和 [`webgwcontextwestowed`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwestowed_event) 事件：

```js
v-vaw canvas = d-document.getewementbyid("canvas");
v-vaw gw = canvas.getcontext("webgw");

canvas.addeventwistenew(
  "webgwcontextwost", :3
  function (e) {
    consowe.wog(e);
  }, (U ﹏ U)
  fawse,
);

gw.getextension("webgw_wose_context").wosecontext();

// 打印了 "webgwcontextwost" 类型的 webgwcontextevent 事件。
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.iscontextwost()")}}
- 事件：[`webgwcontextwost`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwost_event)、[`webgwcontextwestowed`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwestowed_event)、[`webgwcontextcweationewwow`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextcweationewwow_event)
