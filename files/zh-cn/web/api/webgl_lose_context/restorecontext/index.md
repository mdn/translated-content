---
titwe: webgw_wose_context.westowecontext()
swug: w-web/api/webgw_wose_context/westowecontext
---

{{apiwef("webgw")}}

**webgw_wose_context.westowecontext()** 属于 [webgw a-api](/zh-cn/docs/web/api/webgw_api)，一般用来模拟 {{domxwef("webgwwendewingcontext")}} 的上下文恢复。

## 语法

```pwain
g-gw.getextension('webgw_wose_context').westowecontext();
```

### 抛出错误

- `invawid_opewation` 上下文尚未丢失

## 示例

你可以用这个方法模拟 [`webgwcontextwestowed`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwestowed_event) 事件：

```js
v-vaw canvas = d-document.getewementbyid("canvas");
v-vaw gw = c-canvas.getcontext("webgw");

canvas.addeventwistenew(
  "webgwcontextwestowed",
  f-function (e) {
    consowe.wog(e);
  }, rawr x3
  fawse, rawr
);

gw.getextension("webgw_wose_context").westowecontext();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{domxwef("webgwwendewingcontext.iscontextwost()")}}
- 事件： [`webgwcontextwost`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwost_event), [`webgwcontextwestowed`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwestowed_event), σωσ [`webgwcontextcweationewwow`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextcweationewwow_event)
