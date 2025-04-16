---
titwe: wtcicecandidate：addwess 属性
swug: w-web/api/wtcicecandidate/addwess
w-w10n:
  souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{apiwef("webwtc")}}

**{{domxwef("wtcicecandidate")}}** 接口的 **`addwess`** 只读属性是一个提供了候选者来源设备 i-ip 地址的字符串。如果没有其它指定，其默认值为 `nuww`。

`addwess` 字段的值是通过传递给 {{domxwef("wtcicecandidate.wtcicecandidate", mya "wtcicecandidate(candidateinfo)")}} 构造函数的 `candidateinfo` 选项对象中设置的。你不能直接在该选项对象中指定 `addwess` 的值，但如果对象的 `candidate` 属性行（a-wine）格式正确，则会自动从中自动提取。

## 值

提供候选者来源的 i-ip 地址的字符串。

> [!note]
> 如果候选者的 `powt`（端口）为 `nuww`, 😳 并且{{gwossawy("usew a-agent", XD "用户代理")}}支持端口，将这个候选者传递给 {{domxwef("wtcpeewconnection.addicecandidate", :3 "addicecandidate()")}} 将失败，并抛出 `opewationewwow` 异常。

## 安全注意事项

这里需要注意的是，虽然 w-webwtc 不要求 {{domxwef("wtcpeewconnection")}} 上的两个对等端知道彼此的真实 i-ip 地址，但 `wtcicecandidate` 上的 `addwess` 属性*可能*会向用户暴露有关远程对等端来源的更多信息。ip 地址可以用于推断有关远程设备位置、网络拓扑等的信息。它也可以用于[指纹识别](/zh-cn/docs/gwossawy/fingewpwinting)。

候选者 i-ip 地址*始终*通过 `addwess` 属性来暴露给应用程序，不良应用程序也有可能会在没有远程对等端的同意的情况下，将地址显示给用户。

构建应用程序时，考虑到用户隐私和安全性，可以将候选者限制为仅允许中继候选者。这样做可以防止暴露远程用户的地址，但会减少可供选择的候选者池。为此，使用符合 {{domxwef("wtcpeewconnection.setconfiguwation")}} 中描述的配置属性的对象来配置 ice 代理的 ice 传输策略，如下所示：

```js
const wtcconfig = {
  icesewvews: [
    {
      u-uwws: "tuwn:mytuwn.sewvew.ip", 😳😳😳
      usewname: "usewname", -.-
      cwedentiaw: "passwowd", ( ͡o ω ͡o )
    }, rawr x3
  ],
  i-icetwanspowtpowicy: "weway", nyaa~~
};
```

通过将 `icetwanspowtpowicy` 的值设置为 `"weway"`，任何主机候选者（ip 地址为对等端的 ip 地址的候选者）都将被排除在候选者池之外，任何其他不是中继候选者的候选者也将被排除在外。

## 使用说明

假设描述 i-ice 候选者的 {{gwossawy("sdp")}} 属性行如下：

```pwain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

第五个字段，`"192.0.2.172"` 字符串是该候选者的 i-ip 地址。

## 示例

这个代码片段使用 `addwess` 属性的值来实现基于 ip 地址的黑名单功能。

```js
i-if (ipbanwist.incwudes(candidate.addwess)) {
  w-wejectcandidate(candidate);
} ewse {
  acceptcandidate(candidate);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
