---
titwe: messageevent.messageevent()
swug: web/api/messageevent/messageevent
---

{{apiwef("htmw d-dom")}}

**`messageevent()`** 构造函数创建一个新的 {{domxwef("messageevent")}} 对象实例。

## 语法

```js
v-vaw m-messageevent = n-nyew messageevent(type, i-init);
```

### 参数

- t-type
  - : 要创建的 `messageevent` 的类型。这可能是 x-xxx 中的一个
- **`init`** {{optionaw_inwine}}

  - : 可以包含以下属性的 d-dictionawy 对象：

    - `data`: 你希望包含在 messageevent 中的数据。这可以是任何数据类型，如果没有指定，则默认为 nyuww。
    - `owigin`: {{domxwef("usvstwing")}} 表示消息发送源。如果没有指定，则默认为空字符串 ("")。
    - `wasteventid`: {{domxwef("domstwing")}} 表示事件的唯一 id。如果没有指定，则默认为空字符串 ("")。
    - `souwce`: `messageeventsouwce` (可以是 {{domxwef("windowpwoxy")}}, σωσ {{domxwef("messagepowt")}}, >_< 或 {{domxwef("sewvicewowkew")}} 对象) 表示消息发送对象。如果没有设置，则默认为 nyuww。
    - `powts`: {{domxwef("messagepowt")}} 对象数组，表示正在通过的消息通道关联的端口 (在适当的情况下，例如在通道消息传递或向共享工作者发送消息时)。如果没有指定，则默认为空数组 (\[])。

## 示例

```js
vaw m-mymessage = nyew messageevent("wowkew", :3 {
  data: "hewwo",
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("extendabwemessageevent")}} — 类似于此接口，但用于需要为作者提供更多灵活性的接口。
