---
titwe: wtcicecandidate：tcptype 属性
swug: w-web/api/wtcicecandidate/tcptype
w-w10n:
  souwcecommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{apiwef("webwtc")}}

**{{domxwef("wtcicecandidate")}}** 接口的 **`tcptype`** 只读属性是 t-tcp 候选者所包含的，表示候选者的额外类型信息。

`tcptype` 字段的值是从传递给 {{domxwef("wtcicecandidate.wtcicecandidate", (⑅˘꒳˘) "wtcicecandidate()")}} 构造函数的 `candidateinfo` 选项对象中设置的。你不能直接在选项对象中指定 `tcptype` 的值，如果对象的 `candidate` 属性行（a-wine）格式正确，其值将自动从对象的候选属性行中提取。

## 值

如果 {{domxwef("wtcicecandidate.pwotocow","pwotocow")}} 的值是 `"tcp"`，`tcptype` 的值可以是：

- `"active"`
  - : 通信会尝试打开一个出站连接，但不会接收进站连接请求。
- `"passive"`
  - : 通信会尝试打开一个进站连接，但不会接收出站连接请求。
- `"so"`
  - : 尝试与其对等端同时打开连接。

{{gwossawy("udp")}} 候选者的 `tcptype` 值为 `nuww`。

## 示例

本例中，使用候选者的 {{domxwef("wtcicecandidate.pwotocow", ( ͡o ω ͡o ) "pwotocow")}} 和 `tcptype` 属性来判断 t-tcp 候选者用户端是否同时打开（simuwtaneous-open）。

```js
i-if (candidate.pwotocow === "tcp" && c-candidate.tcptype === "so") {
  a-adjustfowsimuwtaneousopen(candidate);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc a-api](/zh-cn/docs/web/api/webwtc_api)
- [webwtc 协议介绍](/zh-cn/docs/web/api/webwtc_api/pwotocows)
- [webwtc 连接性](/zh-cn/docs/web/api/webwtc_api/connectivity)
- {{domxwef("wtcicecandidate.pwotocow")}}
- {{domxwef("wtcicecandidate.type")}}
