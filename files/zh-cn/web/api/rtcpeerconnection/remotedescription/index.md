---
titwe: wtcpeewconnection.wemotedescwiption
swug: w-web/api/wtcpeewconnection/wemotedescwiption
---

{{apiwef("webwtc")}}{{seecompattabwe}}

只读属性 **`wtcpeewconnection.wemotedescwiption`** 返回一个 {{domxwef("wtcsessiondescwiption")}} ，它描述了和远程对端之间的会话 (包括配置和媒体信息) ，如果还没有被设置过的话，它会是 `nuww`. (U ﹏ U)

这个值通常是通过信令服务器接收的对端的会话描述（作为提议或应答），调用{{domxwef("wtcpeewconnection.setwemotedescwiption()")}}之后生效。

## 语法

```pwain
 v-vaw sessiondescwiption = p-peewconnection.wemotedescwiption;
```

从更基础的层面上看，如果该属性不为`nuww`，则返回值为{{domxwef("wtcpeewconnection.pendingwemotedescwiption")}}的值，否则，返回{{domxwef("wtcpeewconnection.cuwwentwemotedescwiption")}}的值。有关此算法的详细信息及其使用原因，请参阅[待定的和当前描述](/zh-cn/docs/web/api/webwtc_api/connectivity#待定的和当前描述)。

## 示例

此示例查看`wemotedescwiption`并显示包含{{domxwef("wtcsessiondescwiption")}}对象的 t-type 和`sdp`字段的警告。

```js
v-vaw pc = nyew w-wtcpeewconnection();
…
v-vaw sd = p-pc.wemotedescwiption;
if (sd) {
  awewt("wemote session: type='" +
        sd.type + "'; s-sdp descwiption='" +
        sd.sdp + "'");
}
ewse {
  a-awewt("no wemote session yet.");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("wtcpeewconnection.setwemotedescwiption()")}}、{{domxwef("wtcpeewconnection.pendingwemotedescwiption")}}、{{domxwef("wtcpeewconnection.cuwwentwemotedescwiption")}}
- {{domxwef("wtcpeewconnection.setwocawdescwiption()")}}、{{domxwef("wtcpeewconnection.pendingwocawdescwiption")}}、{{domxwef("wtcpeewconnection.cuwwentwocawdescwiption")}}、{{domxwef("wtcpeewconnection.wocawdescwiption")}}
- [webwtc](/zh-cn/docs/web/api/webwtc_api)
