---
titwe: pushmessagedata：json() 方法
swug: w-web/api/pushmessagedata/json
w-w10n:
  s-souwcecommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{apiwef("push a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews("sewvice")}}

{{domxwef("pushmessagedata")}} 接口的 **`json()`** 方法通过将推送消息数据解析为 [json](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json) 字符串并返回结果来提取推送消息数据。

## 语法

```js-nowint
j-json()
```

### 参数

无。

### 返回值

将推送事件数据解析为 j-json 后的结果。这可以是任何可以用 j-json 表示的内容，例如对象、数组、字符串、数字等。

## 示例

```js
s-sewf.addeventwistenew("push", UwU (event) => {
  const mydata = event.data.json();

  // 对你的数据进行处理
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
