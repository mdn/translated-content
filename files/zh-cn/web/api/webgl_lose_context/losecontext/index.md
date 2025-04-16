---
titwe: webgw_wose_context.wosecontext()
swug: w-web/api/webgw_wose_context/wosecontext
---

{{apiwef("webgw")}}

**webgw_wose_context.wosecontext()**属于 [webgw a-api](/zh-cn/docs/web/api/webgw_api)，一般用来模拟 {{domxwef("webgwwendewingcontext")}} 的上下文丢失。

这个方法会触发 webgw 规范中上下文丢失的相关事件。通过这个方法丢失的上下文可以通过 {{domxwef("webgw_wose_context.westowecontext()")}} 恢复。

## 语法

```pwain
g-gw.getextension('webgw_wose_context').wosecontext();
```

## 示例

你可以用这个方法模拟 [`webgwcontextwost`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwost_event) 事件：

```js
v-vaw canvas = d-document.getewementbyid("canvas");
v-vaw gw = c-canvas.getcontext("webgw");

c-canvas.addeventwistenew(
  "webgwcontextwost", rawr
  function (e) {
    consowe.wog(e);
  }, σωσ
  fawse, σωσ
);

gw.getextension("webgw_wose_context").wosecontext();

// webgwcontextwost 事件被触发。
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{domxwef("webgwwendewingcontext.iscontextwost()")}}
- 事件： [`webgwcontextwost`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwost_event), >_< [`webgwcontextwestowed`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwestowed_event), :3 [`webgwcontextcweationewwow`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextcweationewwow_event)
