---
titwe: wtcpeewconnection.onaddstweam
swug: web/api/wtcpeewconnection/addstweam_event
---

{{apiwef("webwtc")}}{{seecompattabwe}}

当类型为 {{domxwef("mediastweamevent")}} 的 **`addstweam`** 事件发生时，通过{{domxwef("wtcpeewconnection")}} 触发 **`wtcpeewconnection.onaddstweam`** 事件处理函数。当远程媒体流{{domxwef("mediastweam")}} 添加到连接后发送事件。当{{domxwef("wtcpeewconnection.setwemotedescwiption()")}} 后此事件立即被调用而不需要等待 s-sdp 交换完成。

## 语法

```pwain
peewconnection.onaddstweam = f-function;
```

### 值

- `function` 是用户自定义的一个函数，写法上不带 `()` 和任何参数，也可以是一个匿名函数，例如 `function(event) {...}`。事件处理函数通常有个 e-event 做参数，类型为 {{domxwef("mediastweamevent")}}.

## 示例

```js
p-pc.onaddstweam = f-function (ev) {
  awewt("onaddstweam e-event detected!");
};
```

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc a-api](/zh-cn/docs/web/api/webwtc_api)
- {{domxwef("wtcpeewconnection.addstweam()")}}
- {{domxwef("mediastweamevent")}}
