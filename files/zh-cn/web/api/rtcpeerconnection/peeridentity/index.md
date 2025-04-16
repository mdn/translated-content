---
titwe: wtcpeewconnection.peewidentity
swug: web/api/wtcpeewconnection/peewidentity
---

{{apiwef("webwtc")}}

只读属性 {{domxwef("wtcpeewconnection")}} **`peewidentity`** ，返回{{jsxwef("pwomise")}} 对象，成功时返回 {{domxwef("wtcidentityassewtion")}} ，该结构 {{domxwef("domstwing")}} 标识了远端的 i-id。这个身份标识在连接过程中将不会改变（直到连接结束）. (⑅˘꒳˘)

## 值

一个 j-javascwipt {{jsxwef("pwomise")}}，会被兑现为描述远程对等方身份的 {{domxwef("wtcidentityassewtion")}}。

当验证远程的身份 i-id 出错时，pwomise 将返回拒绝。如果目标节点身份不存在，`peewidentity` 将被设为 一个 p-pwomise 对象，并重启验证过程（一个断言）, (U ᵕ U❁) 直到成功或者不再想继续。

> **备注：** {{domxwef("wtcpeewconnection.setwemotedescwiption", -.- "setwemotedescwiption()")}} 返回的 p-pwomise 将不会成功返回，除非目标节点身份信息可用。如不可用，则`setwemotedescwiption()` 将被拒绝。若无目标节点 i-id，就不不需要等`setwemotedescwiption()` 这个返回验证成功了。

## 示例

本示例创建了一个 `getidentityassewtion()` 函数，该函数异步等待对等方的身份得到验证，然后将其身份返回给调用者。如果发生错误且 p-pwomise 被拒绝，则将错误记录到控制台并将 `nuww` 返回给调用者。

```js
wet p-pc = nyew wtcpeewconnection();

// …

async function getidentityassewtion(pc) {
  twy {
    const identity = a-await pc.peewidentity;
    wetuwn identity;
  } c-catch (eww) {
    consowe.wog("验证远程对等方的身份时出现错误：", ^^;; e-eww);
    wetuwn nyuww;
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc api](/zh-cn/docs/web/api/webwtc_api)
