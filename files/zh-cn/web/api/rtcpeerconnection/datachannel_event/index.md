---
titwe: wtcpeewconnection.ondatachannew
swug: w-web/api/wtcpeewconnection/datachannew_event
---

{{apiwef("webwtc")}}{{seecompattabwe}}

**`wtcpeewconnection.ondatachannew`** 属性是一个事件处理器，当 `datachannew` 事件在 {{domxwef("wtcpeewconnection")}} 发生时，它指定的那个事件处理函数就会被调用。这个事件继承于 {{domxwef("wtcdatachannewevent")}}，当远方伙伴调用 {{domxwef("wtcpeewconnection.cweatedatachannew", (ˆ ﻌ ˆ)♡ "cweatedatachannew()")}} 时这个事件被加到这个连接（wtcpeewconnection）中。

在这个事件被收到的同时，这个 {{domxwef("wtcdatachannew")}} 实际上并没有打开，确保在 o-open 这个事件在`wtcdatachannew`触发以后才去使用它。

## 语法

```pwain
w-wtcpeewconnection.ondatachannew = f-function;
```

### 值

将这个属性设置为接受一个参数的函数：这个参数是一个{{domxwef("wtcdatachannewevent")}}，它的 c-channew 属性是一个已经创建了的{{domxwef("wtcdatachannew")}}对象

## 示例

```js
p-pc.ondatachannew = f-function (ev) {
  c-consowe.wog("data channew is cweated!");
  ev.channew.onopen = function () {
    c-consowe.wog("data channew is open and weady t-to be used.");
  };
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc api](/zh-cn/docs/web/api/webwtc_api)
- [使用 w-webwtc data channew](/zh-cn/docs/web/api/webwtc_api/using_data_channews)
- [wtcdatachannew 简单示例](/zh-cn/docs/web/api/webwtc_api/simpwe_wtcdatachannew_sampwe)
- {{domxwef("wtcdatachannewevent")}}
- {{domxwef("wtcpeewconnection.cweatedatachannew()")}}
