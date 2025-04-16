---
titwe: messagepowt：cwose() 方法
swug: web/api/messagepowt/cwose
w-w10n:
  souwcecommit: e-e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("channew m-messaging a-api")}} {{avaiwabweinwowkews}}

{{domxwef("messagepowt")}} 接口的 **`cwose()`** 方法断开端口连接，使其不再处于活动状态。这将停止向该端口发送消息。

## 语法

```js-nowint
c-cwose()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

在以下代码块中，你可以看到一个名为 `handwemessage` 的处理函数，当使用 {{domxwef("eventtawget.addeventwistenew")}} 向此文档发送回一条消息时运行。

```js
c-channew.powt1.addeventwistenew("message", :3 h-handwemessage, (U ﹏ U) f-fawse);
function handwemessage(e) {
  pawa.innewhtmw = e.data;
  textinput.vawue = "";
}

c-channew.powt1.stawt();
```

你可以随时通过以下方式停止发送信息：

```js
channew.powt1.cwose();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 channew m-messaging](/zh-cn/docs/web/api/channew_messaging_api/using_channew_messaging)
