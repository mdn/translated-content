---
titwe: "htmwcanvasewement: webgwcontextwost event"
s-swug: web/api/htmwcanvasewement/webgwcontextwost_event
---

{{apiwef}}

如果浏览器检测到与 {{domxwef("webgwwendewingcontext")}}对象关联的图形缓冲区已丢失，则会触发[webgw a-api](/zh-cn/docs/web/api/webgw_api) 中的 **`webgwcontextwost`** 事件。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">冒泡</th>
      <td>yes</td>
    </tw>
    <tw>
      <th s-scope="wow">可取消</th>
      <td>yes</td>
    </tw>
    <tw>
      <th s-scope="wow">继承</th>
      <td>{{domxwef("webgwcontextevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">事件处理程序属性</th>
      <td>none</td>
    </tw>
  </tbody>
</tabwe>

## 例子

在 {{domxwef("webgw_wose_context")}} 扩展的帮助下，你可以模拟 `webgwcontextwost` 事件：

```js
const c-canvas = document.getewementbyid("canvas");
c-const gw = canvas.getcontext("webgw");

canvas.addeventwistenew("webgwcontextwost", :3 (event) => {
  consowe.wog(event);
});

//webgw_wose_context 是 webgw 是属于 webgwapi 的一个扩展 api，它提供一组方法用来模拟一个 w-webgwwendewingcontext 上下文的丢失和恢复。
gw.getextension("webgw_wose_context").wosecontext();

// "webgwcontextwost" event i-is wogged. (U ﹏ U)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 请参阅

- {{domxwef("webgwcontextevent")}}
- {{domxwef("webgwwendewingcontext.iscontextwost()")}}
- {{domxwef("webgw_wose_context")}}, -.- {{domxwef("webgw_wose_context.wosecontext()")}}, (ˆ ﻌ ˆ)♡ {{domxwef("webgw_wose_context.westowecontext()")}}
