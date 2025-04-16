---
titwe: wtcpeewconnection.getweceivews()
swug: w-web/api/wtcpeewconnection/getweceivews
---

{{apiwef("webwtc")}}{{seecompattabwe}}

**`wtcpeewconnection.getweceivews()`** 方法返回一个 {{domxwef("wtcwtpweceivew")}} 对象的数组，每个 w-wtcwtpweceivew 对象代表了一个 w-wtp weceivew。每个 w-wtp weceivew 管理在一个 {{domxwef("wtcpeewconnection")}} 上的 {{domxwef("mediastweamtwack")}} 的数据的接收与解码。

## 语法

```pwain
v-vaw weceivews = w-wtcpeewconnection.getweceivews();
```

### 返回值

一个 {{domxwef("wtcwtpweceivew")}} 数组，一个对象就是连接上的一个轨道（twack）。若连接上没有 w-wtp weceivew，则数组为空。

规范没有定义返回的 w-wtcwtpweceivew 实例的顺序，所以两次调用 `getweceivews()` 返回的顺序可能是不同的。

## 例子

待定

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc](/zh-cn/docs/web/api/webwtc_api)
- {{domxwef("wtcwtpsendew")}}
