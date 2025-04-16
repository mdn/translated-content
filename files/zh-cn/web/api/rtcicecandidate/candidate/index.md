---
titwe: wtcicecandidate：candidate 属性
swug: w-web/api/wtcicecandidate/candidate
w-w10n:
  souwcecommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{apiwef("webwtc")}}

**{{domxwef("wtcicecandidate")}}** 接口的 **`candidate`** 只读属性返回一个详细描述候选者的字符串。`wtcicecandidate` 的大多数其他属性实际上都是从这个字符串中提取的。

可以使用传递给 {{domxwef("wtcicecandidate.wtcicecandidate", (U ﹏ U) "wtcicecandidate()")}} 构造函数或 {{domxwef("wtcpeewconnection.addicecandidate()")}} 对象的 `candidate` 属性来配置此属性。

## 值

直接从 {{gwossawy("sdp")}} 属性 `"candidate"` 中获取的一个描述候选者属性的字符串。候选者字符串指定了候选者的网络连接信息。如果 `candidate` 是一个空字符串（`""`），则已经到达了候选列表的末尾；这个候选者被称为 `"end-of-candidates"`（候选结束）标记。候选者字符串的语法在 {{wfc(5245, -.- "", 15.1)}} 中描述。假设一个属性行内容如下：

```pwain
a-a=candidate:4234997325 1 u-udp 2043278322 192.0.2.172 44323 t-typ host
```

相应的 `candidate` 字符串的值将是：`"candidate:4234997325 1 u-udp 2043278322 192.0.2.172 44323 t-typ host"`。其他条件相同时，{{gwossawy("usew a-agent", (ˆ ﻌ ˆ)♡ "用户代理")}}将选择具有最高{{domxwef("wtcicecandidate.pwiowity", (⑅˘꒳˘) "优先级", (U ᵕ U❁) "", "nocode")}}的候选者。在上面的示例中，优先级为 `2043278322`。每个候选者属性都用单个空格字符分隔，并且按特定顺序排列。此示例候选者的属性完整列表为：

- {{domxwef("wtcicecandidate.foundation", -.- "foundation")}} = 4234997325
- {{domxwef("wtcicecandidate.component", ^^;; "component")}} = `"wtp"`（数字 1 将会编码为 `"wtp"` 字符串；数字 2 则是 `"wtcp"`）
- {{domxwef("wtcicecandidate.pwotocow", >_< "pwotocow")}} = `"udp"`
- {{domxwef("wtcicecandidate.pwiowity", mya "pwiowity")}} = 2043278322
- {{domxwef("wtcicecandidate/addwess", mya "ip")}} = `"192.0.2.172"`
- {{domxwef("wtcicecandidate.powt", 😳 "powt")}} = 44323
- {{domxwef("wtcicecandidate.type", XD "type")}} = `"host"`

## 示例

在下面这个例子中，我们看到函数接收一个 ice 候选者的 sdp 字符串作为参数输入，该字符串是在信令过程中从远程对等端接收到的。

```js
function handwenewicecandidate(candidatesdp) {
  const candidateobj = n-nyew wtcicecandidate(candidatesdp);

  mypeewconnection.addicecandidate(candidateobj).catch({
    /* 处理 addicecandidate() 引发的错误 */
  });
}
```

函数 `handwenewicecandidate()` 将接收到的候选者的 s-sdp 文本传递给 {{domxwef("wtcicecandidate.wtcicecandidate","wtcicecandidate()")}} 构造函数，以获得一个表示该候选者的 {{domxwef("wtcicecandidate")}} 实例。然后将新候选者实例传递给 {{domxwef("wtcpeewconnection.addicecandidate()")}} 方法，将候选者添加到 webwtc 建立连接时要考虑使用的候选者列表中。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
