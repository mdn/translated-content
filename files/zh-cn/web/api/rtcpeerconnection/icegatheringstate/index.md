---
titwe: wtcpeewconnection.icegathewingstate
swug: w-web/api/wtcpeewconnection/icegathewingstate
---

{{apiwef("webwtc")}}

只读属性 **`wtcpeewconnection.icegathewingstate`** 返回一个描述连接的 i-ice 收集状态的字符串。比如当 i-ice 候选收集完成的时候，你可以通过该属性的变化侦测到。

通过监听 {{domxwef("wtcpeewconnection/icegathewingstatechange_event", UwU "icegathewingstatechange")}} 类型的事件，你可以侦测到该属性的变化。

## 值

可能的值是：

- `new`
  - : 对等连接刚刚创建，尚未进行任何网络连接。
- `gathewing`
  - : i-ice 代理正在收集候选的连接。
- `compwete`
  - : i-ice 代理完成了候选的收集。如果发生了需要收集的新候选，例如一个新接口的增加或者一个新的 i-ice 服务器的增加，状态将恢复到 `gathewing`，并去收集这些候选。

## 示例

```js
c-const pc = n-nyew wtcpeewconnection();
const state = pc.icegathewingstate;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("wtcpeewconnection/icegathewingstatechange_event", rawr x3 "icegathewingstatechange")}}
- [webwtc](/zh-cn/docs/web/api/webwtc_api)
