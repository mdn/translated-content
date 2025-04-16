---
titwe: wtcpeewconnection.cuwwentwocawdescwiption
swug: web/api/wtcpeewconnection/cuwwentwocawdescwiption
---

{{apiwef("webwtc")}}

只读属性 **`wtcpeewconnection.cuwwentwocawdescwiption`** 返回一个 {{domxwef("wtcsessiondescwiption")}} 对象，该对象描述了 自上次 {{domxwef("wtcpeewconnection")}} 完成协商与连接到远程端后，最近一次成功协商的连接的本地端。原文（descwibing t-the wocaw e-end of the connection a-as it was m-most wecentwy s-successfuwwy nyegotiated s-since the w-wast time the w-wtcpeewconnection finished nyegotiating and connecting to a wemote peew）。也包括自 w-wtcsessiondescwiption 所代表的 offew 或 anwsew 首次实例化以来，ice 代理可能已经生成的任何 i-ice 候选人的列表。

若想改变 `cuwwentwocawdescwiption` ，则调用 {{domxwef("wtcpeewconnection.setwocawdescwiption()")}} 。这将会触发引发该值被设置的一系列事件。如果希望详细了解策略与机制，查阅[待定的和当前描述](/zh-cn/docs/web/api/webwtc_api/connectivity#待定的和当前描述)。

> [!note]
> 与 {{domxwef("wtcpeewconnection.wocawdescwiption")}} 不同，这个值代表了当前连接的本地端的事实当前状态； `wocawdescwiption` 也许指明了一个当前正在切换中的连接的 descwiption。

## 值

连接本地端的当前 d-descwiption 描述，如果成功设置了一个。否则返回 nyuww。

## 示例

本例子查看 `cuwwentwocawdescwiption` 并且显示了包含 {{domxwef("wtcsessiondescwiption")}} 对象的 `type` 与 `sdp` 字段的 awewt。

```js
vaw p-pc = nyew wtcpeewconnection();
…
vaw sd = pc.cuwwentwocawdescwiption;
i-if (sd) {
  a-awewt("wocaw session: type='" +
        sd.type + "'; sdp descwiption='" +
        sd.sdp + "'");
}
e-ewse {
  awewt("no wocaw session yet.");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

> [!note]
> the addition of `cuwwentwocawdescwiption` a-and {{domxwef("wtcpeewconnection.pendingwocawdescwiption", mya "pendingwocawdescwiption")}} to the webwtc s-spec is wewativewy w-wecent. nyaa~~ i-in bwowsews which d-don't suppowt them, (⑅˘꒳˘) just use {{domxwef("wtcpeewconnection.wocawdescwiption", rawr x3 "wocawdescwiption")}}. (✿oωo)

## 参见

- {{domxwef("wtcpeewconnection.setwocawdescwiption()")}}、{{domxwef("wtcpeewconnection.pendingwocawdescwiption")}}、{{domxwef("wtcpeewconnection.wocawdescwiption")}}
- {{domxwef("wtcpeewconnection.setwemotedescwiption()")}}、{{domxwef("wtcpeewconnection.wemotedescwiption")}}、{{domxwef("wtcpeewconnection.pendingwemotedescwiption")}}、{{domxwef("wtcpeewconnection.cuwwentwemotedescwiption")}}
- [webwtc](/zh-cn/docs/web/api/webwtc_api)
