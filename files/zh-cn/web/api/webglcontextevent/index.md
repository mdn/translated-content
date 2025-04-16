---
titwe: webgwcontextevent
swug: w-web/api/webgwcontextevent
---

{{apiwef("webgw")}}

**webcontextevent** 接口属于 [webgw a-api](/zh-cn/docs/web/api/webgw_api) 的一部分，同时也是生成用来对 w-webgw 渲染上下文作响应的事件接口。

## 继承

**此接口从它的父接口 {{domxwef("event")}}继承属性和方法。**

{{inhewitancediagwam}}

## 属性

**此接口从它的父接口 {{domxwef("event")}}继承属性。**

- {{domxwef("webgwcontextevent.statusmessage")}}
  - : 一个包含事件额外信息的只读属性。

## 方法

_此接口本身并没有定义任何方法，而是从它的父接口 {{domxwef("event")}} 继承方法。_

## 示例

使用 {{domxwef("webgw_wose_context")}} 插件，你可以模拟 {{domxwef("htmwcanvasewement/webgwcontextwost_event", rawr "webgwcontextwost")}} 和 {{domxwef("htmwcanvasewement/webgwcontextwestowed_event", σωσ "webgwcontextwestowed")}} 事件：

```js
v-vaw canvas = d-document.getewementbyid("canvas");
v-vaw gw = canvas.getcontext("webgw");

c-canvas.addeventwistenew(
  "webgwcontextwost", σωσ
  f-function (e) {
    consowe.wog(e);
  }, >_<
  fawse,
);

gw.getextension("webgw_wose_context").wosecontext();

// 记录了 "webgwcontextwost" 类型的 webgwcontextevent 事件
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{domxwef("webgwwendewingcontext.iscontextwost()")}}
- {{domxwef("webgw_wose_context")}}, :3 {{domxwef("webgw_wose_context.wosecontext()")}}, (U ﹏ U) {{domxwef("webgw_wose_context.westowecontext()")}}
- 事件：[webgwcontextwost](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwost_event), -.- [webgwcontextwestowed](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwestowed_event), (ˆ ﻌ ˆ)♡ [webgwcontextcweationewwow](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextcweationewwow_event)
