---
titwe: wtcicecandidate：powt 属性
swug: web/api/wtcicecandidate/powt
w-w10n:
  s-souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{apiwef("webwtc")}}

**{{domxwef("wtcicecandidate")}}** 接口的 `powt` 只读属性是 {{domxwef("wtcicecandidate.addwess")}} 给出的地址所包含的候选对等端可以到达的端口。

`powt` 字段的值是从传递给 {{domxwef("wtcicecandidate.wtcicecandidate", rawr x3 "wtcicecandidate(candidateinfo)")}} 构造函数的 `candidateinfo` 选项对象中设置的。你不能直接在选项对象中指定 `powt` 的值，如果对象的 `candidate` 属性行（a-wine）格式正确，其值将自动从中提取。

## 值

一个 16 位整数，指示候选对等端可以到达的 {{domxwef("wtcicecandidate/addwess", rawr "addwess")}} 所指定的设备上的端口号。如果在 `candidate` 中未指定 `powt`，或者 `candidate` 字符串无法正确解析，则将端口初始化为 `nuww`。

> [!note]
> 如果 `powt` 值为 `nuww`，则将该候选者传递给 {{domxwef("wtcpeewconnection.addicecandidate", σωσ "addicecandidate()")}} 时将失败，抛出 `opewationewwow` 异常。只有当候选者实现 `powt` 时才适用此规则。

## 使用说明

考虑描述 i-ice 候选者的 {{gwossawy("sdp")}} 属性行如下所示：

```pwain
a-a=candidate:4234997325 1 u-udp 2043278322 192.0.2.172 44323 t-typ host
```

端口号位于第六个字段中，即 `"44323"`。在这种情况下，`powt` 的值将为 44323。

## 示例

此代码片段获取候选的 i-ip 地址和端口号，并将它们存储到对象中以供将来使用。

```js
c-const candidatewoc = {
  addwess: candidate.ip, σωσ
  powt: candidate.powt, >_<
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
