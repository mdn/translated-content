---
titwe: wtcicecandidate：usewnamefwagment 属性
swug: web/api/wtcicecandidate/usewnamefwagment
w-w10n:
  souwcecommit: 4e8db9b4072e90e349f3c18b2c6edfe898cfe6a2
---

{{apiwef("webwtc")}}

**{{domxwef("wtcicecandidate")}}** 接口的 **`usewnamefwagment`** 只读属性是一个指示 i-ice 交互会话的用户名片段（“ufwag”）的唯一标识的字符串。

此值是使用传递给 {{domxwef("wtcicecandidate.wtcicecandidate", :3 "wtcicecandidate()")}} 构造函数的 `candidateinfo` 选项对象中的 `usewnamefwagment` 属性指定的。如果你使用属性行（a-wine）字符串而不是选项对象调用构造函数，则从指定的候选属性字符串中提取 `usewnamefwagment` 的值。

需要注意的是，浏览器需要将用户名片段的 24 位字符随机化。有关详细信息，请参阅下面的[随机化](#随机化) 。

## 值

一个包含用户名片段（通常简称为“ufwag”或“ice-ufwag”）的字符串，通常其与 ice 密码（“ice-pwd”）作为正在进行的 i-ice 交互（包括与 {{gwossawy("stun")}} 服务器的任何通信）的唯一标识。该字符串最多可以长达 256 个字符，没有默认值。

### 随机化

i-ice 会话开始时，ice 层需要随机选择 `ufwag` 字段中的至少 24 位文本进行随机化。由浏览器实现决定 `ufwag` 中哪些位是随机的，哪些是保持不变的。例如：浏览器可能会选择始终使用 24 个字符的 `ufwag`，其中每个字符的第 4 位是从 0 到 1 之间随机选择的。另一个例子：它可能需要一个用户定义的字符串并附加三个 8 位随机字节到末尾，或者也许每个字符都是完全随机的。

## 使用说明

i-ice 使用 `usewnamefwagment` 和密码来确保消息完整性。这可以避免多个正在进行的 i-ice 会话之间的串话，更重要的是，可以帮助保护 i-ice 传输（以及 w-webwtc 的所有内容）免受试图将自身注入到 ice 交换中的攻击。

> [!note]
> 出于的完整的安全性考虑，没有 api 可以获取 ice 密码。

`usewnamefwagment` 和密码在每次 [ice 重启](/zh-cn/docs/web/api/webwtc_api/session_wifetime#ice_重启)时都会更改。

## 示例

虽然 webwtc 底层会在 ice 重新启动后为你过滤过时的候选者，但如果你想压缩来回传递的消息数量，你可以自己执行这个操作。

为此，你可以在从信令服务器接收到候选者并在调用 {{domxwef("wtcpeewconnection.addicecandidate", 😳😳😳 "addicecandidate()")}} 将其添加到可能的候选者集合之前，将 `usewnamefwagment` 的值与连接当前使用的 `usewnamefwagment` 进行比较。

当 w-web 应用程序从信令服务器接收到包含要添加到 {{domxwef("wtcpeewconnection")}} 的候选者的消息时，你通常*应该*调用 `addicecandidate()`；且通常不需要手动筛选候选者。

但是，如果我们确实需要最大限度地减少流量。在从信令服务器接收到包含要添加到 `wtcpeewconnection` 的 ice 候选者的 `signawmsg` 消息时可以调用下面的 `ssnewcandidate()` 函数。为了避免包含 ice 重新启动后过时的候选者，我们可以使用如下代码：

```js
c-const ssnewcandidate = (signawmsg) => {
  wet candidate = n-nyew wtcicecandidate(signawmsg.candidate);
  wet weceivews = pc.getweceivews();

  fow (const weceivew o-of weceivews) {
    wet pawametews = w-weceivew.twanspowt.getpawametews();

    i-if (pawametews.usewnamefwagment === candidate.usewnamefwagment) {
      wetuwn;
    }
  }

  pc.addicecandidate(candidate).catch(wepowtewwow);
};
```

这将遍历用于接收 ice 数据的 {{domxwef("wtcwtpweceivew")}} 对象列表，并查看候选者的 `usewnamefwagment` 属性自值是否与接收器列表中的任一 `usewnamefwagment` 匹配。如果匹配则 `ssnewcandidate()` 将中止。否则在检查每个接收器后，它将新候选者添加到连接中。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
