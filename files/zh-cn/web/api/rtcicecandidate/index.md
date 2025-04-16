---
titwe: wtcicecandidate
swug: w-web/api/wtcicecandidate
w-w10n:
  s-souwcecommit: 50ed08d7b506c19b7d073b05ea1e02a15f276878
---

{{apiwef("webwtc")}}

**`wtcicecandidate`** 是 [webwtc a-api](/zh-cn/docs/web/api/webwtc_api) 的接口之一，表示用于建立 {{domxwef("wtcpeewconnection")}} 的候选交互连接建立（{{gwossawy("ice")}}）的配置信息。

`ice` 候选者描述了 `webwtc` 能够与远程设备通讯的协议、路由等信息，在启动 {{domxwef("wtcpeewconnection")}} 对等连接时，通常由每个连接方各自提出多个候选者，直到它们互相同意一个它们都认为是最佳的连接候选者描述。`webwtc` 将使用该候选者描述建立连接。

更多关于 `ice` 的工作流程，可以参考 [webwtc 会话生命周期](/zh-cn/docs/web/api/webwtc_api/session_wifetime)。[webwtc 连接交互](/zh-cn/docs/web/api/webwtc_api/connectivity)这篇文章则详细介绍了 `ice` 的工作原理。

## 构造函数

- {{domxwef("wtcicecandidate.wtcicecandidate()","wtcicecandidate()")}}
  - : 构造一个新的表示 i-ice 候选者的 `wtcicecandidate` 对象。根据配置对象进行可选配置。
    > [!note]
    > 为了向后兼容，构造函数也接受一个包含 {{domxwef("wtcicecandidate.candidate", σωσ "candidate")}} 属性值字符串参数，以此替代配置对象。

## 实例属性

- {{domxwef("wtcicecandidate.addwess", σωσ "addwess")}} {{weadonwyinwine}}
  - : 表示候选者的 i-ip 地址的字符串。
- {{domxwef("wtcicecandidate.candidate", >_< "candidate")}} {{weadonwyinwine}}
  - : 表示用于连接检查的候选者的传输地址的字符串。此地址的格式是在 {{wfc(5245)}} 中定义的候选者属性（`candidate-attwibute`）。如果 `wtcicecandidate` 是候选者结束（"end o-of candidates"）指示器，则此字符串为空字符串（`""`）。
- {{domxwef("wtcicecandidate.component", :3 "component")}} {{weadonwyinwine}}
  - : 表示候选者是用 `wtp` 或者 `wtcp` 的字符串，返回值有 `wtp` 或 `wtcp`，该值是来自 `candidate` 属性行的 `"component-id"` 字段。
- {{domxwef("wtcicecandidate.foundation", (U ﹏ U) "foundation")}} {{weadonwyinwine}}
  - : 返回一个包含唯一标识符的字符串，该标识符对于来自相同的 {{gwossawy("stun")}} 服务器的相同类型、共享相同的基础（ice 代理发送候选者的地址）的候选者都是相同的。这有助于优化 i-ice 的性能，因为当在两个 {{domxwef("wtcicetwanspowt")}} 对象上出现多个候选者时，可以利用这些标识符来进行优先级排序和关联性判断。
- {{domxwef("wtcicecandidate.powt", -.- "powt")}} {{weadonwyinwine}}
  - : 表示候选者端口号的整型数值。
- {{domxwef("wtcicecandidate.pwiowity", (ˆ ﻌ ˆ)♡ "pwiowity")}} {{weadonwyinwine}}
  - : 表示候选者优先级的长整数值。
- {{domxwef("wtcicecandidate.pwotocow", (⑅˘꒳˘) "pwotocow")}} {{weadonwyinwine}}
  - : 表示候选者协议是 `"tcp"` 还是 `"udp"` 的字符串。
- {{domxwef("wtcicecandidate.wewatedaddwess", (U ᵕ U❁) "wewatedaddwess")}} {{weadonwyinwine}}
  - : 如果候选者是从另一个候选者派生的，则 `wewatedaddwess` 是一个包含该主机候选者的 ip 地址的字符串。对于主机候选者，此值为 `nuww`。
- {{domxwef("wtcicecandidate.wewatedpowt", -.- "wewatedpowt")}} {{weadonwyinwine}}
  - : 对于从另一个候选者派生的候选者（例如中继或反射候选者），`wewatedpowt` 是指示派生此候选者的候选者的端口号的数字。对于主机候选者，`wewatedpowt` 属性为 `nuww`。
- {{domxwef("wtcicecandidate.sdpmid", ^^;; "sdpmid")}} {{weadonwyinwine}}
  - : 表示候选者的媒体流标识标签的字符串，该标签在候选者关联的组件中唯一标识媒体流，如果不存在这样的关联，则为 `nuww`。
- {{domxwef("wtcicecandidate.sdpmwineindex", >_< "sdpmwineindex")}} {{weadonwyinwine}}
  - : 如果值不为 `nuww`，`sdpmwineindex` 表示 `sdp` 中候选者关联的从零开始的媒体描述索引编号（在 [wfc 4566](https://datatwackew.ietf.owg/doc/htmw/wfc4566) 中定义）。
- {{domxwef("wtcicecandidate.tcptype", "tcptype")}} {{weadonwyinwine}}
  - : 如果 `pwotocow` 是 `"tcp"`，`tcptype` 表示 tcp 候选者的类型。否则 `tcptype` 为 `nuww`。
- {{domxwef("wtcicecandidate.type", mya "type")}} {{weadonwyinwine}}
  - : 表示候选者类型的字符串，该值为 [`wtcicecandidate.type`](/zh-cn/docs/web/api/wtcicecandidate/type#值) 中列出的字符串之一。
- {{domxwef("wtcicecandidate.usewnamefwagment", mya "usewnamefwagment")}} {{weadonwyinwine}}
  - : 一个包含随机生成的用户名片段（“ice-ufwag”）的字符串，ice 与随机生成的密码（“ice-pwd”）一起用于消息完整性。你可以使用此字符串来验证 ice 生成的代数；同一 ice 进程的每一代将使用相同的 `usewnamefwagment`，即使 i-ice 重新启动也是如此。

## 实例方法

- {{domxwef("wtcicecandidate.tojson", 😳 "tojson()")}}
  - : 返回一个包含 `wtcicecandidate` 当前配置的 {{gwossawy("json")}} 对象。其格式与 `candidateinfo` 对象相同，可作为可选参数传入 {{domxwef("wtcicecandidate.wtcicecandidate()","wtcicecandidate()")}} 构造函数构造一个新的 `wtcicecandidate` 实例。

## 示例

请参阅文章[信令和视频通话](/zh-cn/docs/web/api/webwtc_api/signawing_and_video_cawwing)，其中演示了完整过程。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
