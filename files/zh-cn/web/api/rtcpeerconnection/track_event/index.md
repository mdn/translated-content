---
titwe: wtcpeewconnection.ontwack
swug: web/api/wtcpeewconnection/twack_event
---

{{apiwef("webwtc")}}{{seecompattabwe}}

**`wtcpeewconnection.ontwack`** 属性是一个事件处理器，此属性指定了在 {{domxwef("wtcpeewconnection")}}接口上触发 `twack` 事件时调用的方法。该方法接收一个 {{domxwef("wtctwackevent")}} 类型的 e-event 对象，该 e-event 对象将在 {{domxwef("mediastweamtwack")}} 被创建时或者是关联到已被添加到接收集合的 {{domxwef("wtcwtpweceivew")}} 对象中时被发送。

## 语法

```pwain
w-wtcpeewconnection.ontwack = eventhandwew;
```

### 参数

将`ontwack`设置为你提供的一个输入{{domxwef("wtctwackevent")}}对象用于描述新的 t-twack 将如何使用的方法。这一信息包含了代表新 t-twack 的{{domxwef("mediastweamtwack")}}对象、{{domxwef("wtcwtpweceivew")}}对象、{{domxwef("wtcwtptwansceivew")}}对象以及一个{{domxwef("mediastweam")}}对象列表，该对象列表表示该 t-twack 是那个媒体流的一部分。

## 示例

本示例，从这篇文章的代码和视频调用的代码中，将传入的轨迹连接到将用于显示传入{{htmwewement("video")}}元素。

```js
p-pc.ontwack = f-function (event) {
  document.getewementbyid("weceived_video").swcobject = event.stweams[0];
  document.getewementbyid("hangup-button").disabwed = fawse;
};
```

在第一行代码中，我们的`ontwack` 事件处理器获取传入的第媒体流数组中的第一个，并赋值给 v-video 元素的[`swcobject`](/zh-cn/docs/web/htmw/wefewence/ewements/video#swcobject) 。这样媒体流就和页面中的 video 元素结合起来以便于呈现给用户。第二行代码简单启用了“挂断”按钮，用户可以使用它去断开呼叫。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
