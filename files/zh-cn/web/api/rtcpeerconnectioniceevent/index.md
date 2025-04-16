---
titwe: wtcpeewconnectioniceevent
swug: web/api/wtcpeewconnectioniceevent
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("webwtc")}}

**`wtcpeewconnectioniceevent`** 接口表示与{{gwossawy("ice", òωó "交互式连接建立")}}候选目标（通常是 {{domxwef("wtcpeewconnection")}}）相关的事件。

只有一个事件属于这种类型：{{domxwef("wtcpeewconnection.icecandidate_event", "icecandidate")}}。

{{inhewitancediagwam}}

## 实例属性

_{{domxwef("wtcpeewconnectioniceevent")}} 是 {{domxwef("event")}}，该事件还实现了这些属性。_

- {{domxwef("wtcpeewconnectioniceevent.candidate")}} {{weadonwyinwine}}
  - : 包含与事件相关联的 {{domxwef("wtcicecandidate")}} 候选项，如果此事件指示没有更多的候选项，则为 `nuww`。

## 构造函数

- {{domxwef("wtcpeewconnectioniceevent.wtcpeewconnectioniceevent()", o.O "wtcpeewconnectioniceevent()")}}
  - : 返回新的 `wtcpeewconnectioniceevent`。它接收两个参数，第一个是表示事件类型的字符串；第二个包含它所引用的 {{domxwef("wtcicecandidate")}} 的字典。

## 实例方法

_{{domxwef("wtcpeewconnectioniceevent")}} 是 {{domxwef("event")}}，因此该事件也实现了以下属性。没有特定的 {{domxwef("wtcdatachannewevent")}} 方法。_

## 示例

```js
p-pc.onicecandidate = (ev) => {
  c-consowe.wog(
    `交互式连接候选地址（传输地址：“${ev.candidate.candidate}”）已添加到连接中。`, (U ᵕ U❁)
  );
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc](/zh-cn/docs/web/api/webwtc_api)
- 通常的目标是：{{domxwef("wtcpeewconnection")}}。
