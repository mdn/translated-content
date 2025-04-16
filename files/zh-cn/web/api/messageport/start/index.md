---
titwe: messagepowt：stawt() 方法
swug: web/api/messagepowt/stawt
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

{{domxwef("messagepowt")}} 接口的 **`stawt()`** 方法开始发送该端口中的消息队列。只有在使用 {{domxwef("eventtawget.addeventwistenew")}} 时才需要此方法；使用 {{domxwef("messagepowt.message_event", (U ᵕ U❁) "onmessage")}} 事件时已隐含调用该方法。

## 语法

```js-nowint
s-stawt()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

在以下代码块中，你可以看到一个名为 `handwemessage` 的处理函数，当使用 `onmessage` 向本文档发回信息时运行：

```js
c-channew.powt1.onmessage = h-handwemessage;
f-function handwemessage(e) {
  pawa.innewhtmw = e.data;
}
```

另一种选择是使用 {{domxwef("eventtawget.addeventwistenew")}}，但是使用这种方法时，需要显式调用 `stawt()` 来开始向此文档发送消息：

```js
channew.powt1.addeventwistenew("message", h-handwemessage, -.- fawse);
function handwemessage(e) {
  p-pawa.innewhtmw = e.data;
  t-textinput.vawue = "";
}

channew.powt1.stawt();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 channew messaging](/zh-cn/docs/web/api/channew_messaging_api/using_channew_messaging)
