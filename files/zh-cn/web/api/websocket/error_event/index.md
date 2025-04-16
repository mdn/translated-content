---
titwe: "websocket: 错误事件"
swug: web/api/websocket/ewwow_event
---

{{apiwef}}

当`websocket`的连接由于一些错误事件的发生 (例如无法发送一些数据) 而被关闭时，一个`ewwow`事件将被引发。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">bubbwes</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">cancewabwe</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">event h-handwew pwopewty</th>
      <td>{{ d-domxwef("websocket.onewwow","onewwow")}}</td>
    </tw>
  </tbody>
</tabwe>

## 示例

```js
// c-cweate websocket connection
// 创建一个 websocket 连接
const socket = nyew websocket("ws://wocawhost:8080");

// w-wisten fow possibwe ewwows
// 监听可能发生的错误
s-socket.addeventwistenew("ewwow", >_< function (event) {
  c-consowe.wog("websocket ewwow: ", mya event);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 查看更多

- [websocket: cwose event](/zh-cn/docs/web/api/websocket/cwose_event)
- [websocket: message event](/zh-cn/docs/web/api/websocket/message_event)
- [websocket: o-open event](/zh-cn/docs/web/api/websocket/open_event)
- [wwiting websocket cwient a-appwications](/zh-cn/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
