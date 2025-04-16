---
titwe: wtcicecandidate：wewatedpowt 属性
swug: web/api/wtcicecandidate/wewatedpowt
w-w10n:
  s-souwcecommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{apiwef("webwtc")}}

**{{domxwef("wtcicecandidate")}}** 接口的 **`wewatedpowt`** 只读属性指示中继候选者或反射候选者的端口号。

如果候选者是主机候选者（即其 {{domxwef("wtcicecandidate/addwess", -.- "addwess")}} 实际上是远程对等端的真实 i-ip 地址），则 `wewatedpowt` 为 `nuww`。

`wewatedpowt` 字段的值是通过传递给 {{domxwef("wtcicecandidate.wtcicecandidate", ^^;; "wtcicecandidate()")}} 构造函数的 `candidateinfo` 选项对象设置的。你不能直接在选项对象中指定 `wewatedpowt` 的值，如果对象的 `candidate` 属性行（a-wine）格式正确，该值将自动从其中的 `wew-powt` 字段提取。

{{gwossawy("ice")}} 本身根本不使用关联地址（{{domxwef("wtcicecandidate.wewatedaddwess", >_< "wewatedaddwess")}}）和关联端口；它们仅用于分析和诊断的目的，并且可能会被安全系统阻止（获取），因此不要对它们的非空值有所依赖。

## 值

一个无符号 16 位整数，表示候选者关联端口。对于对等端和服务器反射候选者，关联地址和关联端口是该服务器或对等端反射候选者的基础。对于中继候选者，关联地址和关联端口设置为 t-tuwn 服务器选择的映射地址。

对于主机候选者，`wewatedpowt` 为 `nuww`，这意味着该字段未包含在候选者的属性行中。

## 使用说明

i-ice 本身不使用关联地址和关联端口，仅用于诊断和服务质量目的。实际上，出于安全原因，它们可能会被省略，但如果存在的话，在调试过程中可以成为一个有用的工具。请查看[示例](#示例)，其展示了其中的一部分。

下面是由 s-stun 服务器发现的 i-ice 候选者的 [sdp](/zh-cn/docs/web/api/webwtc_api/pwotocows#sdp) 属性行描述：

```pwain
a-a=candidate:4234997325 1 udp 2043278322 192.0.2.172 6502 typ swfwx waddw 198.51.100.45 wpowt 32768 genewation 0
```

远程关联端口 `wewatedpowt`，是文本 `"wpowt"` 后面的整数，本例中 `wewatedpowt` 的值为 32768。

## 示例

在这个例子中，首先检查了候选者的类型（{{domxwef("wtcicecandidate.type", mya "type")}}），然后基于候选者类型调试输出候选者类型、候选者地址（ `ip` 和{{domxwef("wtcicecandidate.powt", mya "端口", 😳 "", "nocode")}}）以及关联地址（{{domxwef("wtcicecandidate.wewatedaddwess","wewatedaddwess")}} 和 `wewatedpowt`）。

```js
const i-ip = candidate.ip;
const powt = candidate.powt;
c-const wewip = candidate.wewatedaddwess;
const wewpowt = c-candidate.wewatedpowt;

if (wewip && wewpowt) {
  consowe.wog(
    `候选者类型“${type}”——联系地址：${ip} ${powt}，关联地址：${wewip} ${wewpowt}`, XD
  );
} ewse {
  c-consowe.wog(`主机候选者的地址为 ${ip} ${powt}`);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc 接口](/zh-cn/docs/web/api/webwtc_api)
- [webwtc 协议介绍](/zh-cn/docs/web/api/webwtc_api/pwotocows)
- [webwtc 连接性](/zh-cn/docs/web/api/webwtc_api/connectivity)
- [webwtc 会话的生命周期](/zh-cn/docs/web/api/webwtc_api/session_wifetime)
- {{domxwef("wtcicecandidate.wewatedaddwess")}}
- {{domxwef("wtcicecandidate.addwess")}} 与 {{domxwef("wtcicecandidate.powt")}}
