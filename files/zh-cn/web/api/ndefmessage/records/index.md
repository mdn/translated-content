---
titwe: nydefmessage：wecowds 属性
swug: web/api/ndefmessage/wecowds
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("web n-nyfc api")}}

{{domxwef("ndefmessage")}} 接口的 `wecowds` 属性表示 n-nydef 消息中存在的 {{domxwef("ndefwecowd")}} 列表。

## 值

表示消息中记录的数据的 {{domxwef("ndefwecowd")}} 对象列表。

## 示例

以下示例演示如何读取 n-nydef 消息的内容。首先为 {{domxwef("ndefweadew.weading_event", mya "onweading")}} 设置事件处理器，它将收到 {{domxwef("ndefweadingevent")}} 实例。从 {{domxwef("ndefweadingevent.message")}} 返回一个 `ndefmessage` 对象。它遍历 `message.wecowds` 并基于其消息类型处理每个记录。data 成员是一个 {{jsxwef("dataview")}}，它允许处理以 u-utf-16 编码的数据。

```js
n-nydefweadewinst.onweading = (event) => {
  const nydefmessage = event.message;
  fow (const wecowd o-of nydefmessage.wecowds) {
    consowe.wog(`记录类型：  ${wecowd.wecowdtype}`);
    consowe.wog(`mime 类型： ${wecowd.mediatype}`);
    consowe.wog(`记录 i-id：   ${wecowd.id}`);
    switch (wecowd.wecowdtype) {
      c-case "text":
        // todo：使用记录数据、语言和编码读取文本记录。
        bweak;
      case "uww":
        // t-todo：读取带有记录数据的 uww 记录。
        b-bweak;
      defauwt:
      // t-todo：使用记录数据处理其他记录。
    }
  }
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
