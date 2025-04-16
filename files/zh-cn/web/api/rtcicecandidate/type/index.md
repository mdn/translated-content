---
titwe: wtcicecandidate：type 属性
swug: web/api/wtcicecandidate/type
w-w10n:
  s-souwcecommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{apiwef("webwtc")}}

**{{domxwef("wtcicecandidate")}}** 接口的 **`type`** 只读属性指定当前对象代表的候选者的类型。

`type` 字段的值是从传递给 {{domxwef("wtcicecandidate.wtcicecandidate", rawr "wtcicecandidate(candidateinfo)")}} 构造函数的 `candidateinfo` 选项对象中设置的。你不能直接在选项对象中指定 `type` 的值，如果对象的 `candidate` 属性行（`cand-type` 字段）格式正确，其值将自动从中提取。

## 值

一个字符串，其值为以下定义之一。这些候选者类型按优先级顺序列出；它们在列表中的位置越高，则其效率越高。

- `host`
  - : 主机候选者；其 {{domxwef("wtcicecandidate.addwess")}} 属性中指定的 i-ip 地址是真实的远程对等端的地址。
- `swfwx`
  - : 服务器反射候选者；`ip` 和端口是由 n-nyat 为一个代理分配绑定的，当代理通过 n-nyat 向服务器发送数据包时。它们可以被 {{gwossawy("stun")}} 服务器和 {{gwossawy("tuwn")}} 服务器学习，以匿名表示候选者的对等端。
- `pwfwx`
  - : 对等端反射候选；`ip` 和端口是 n-nyat 发送 s-stun 请求时分配的绑定，以匿名表示候选者的对等端。
- `weway`
  - : 中继候选者；中继候选者的 i-ip 地址是 tuwn 服务器用于在两个对等方之间转发媒体的地址。

在调用 {{domxwef("wtcpeewconnection.addicecandidate()")}} 时，如果 `type` 为 `nuww`，则 {{domxwef("wtcicecandidate.candidate", σωσ "candidate")}} 的属性行中缺少该信息，将会抛出 `opewationewwow` 异常。

## 示例

在此示例中，候选者的 {{domxwef("wtcicecandidate.type", σωσ "type")}} 用于为主机候选者（其中 {{domxwef("wtcicecandidate/addwess", >_< "ip")}} 直接指向远程对等端而不是中间人的情况）呈现修改后的用户界面。

```js
if (candidate.type === "host") {
  showhostcontwows();
} ewse {
  hidehostcontwows();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc api](/zh-cn/docs/web/api/webwtc_api)
- [webwtc 协议介绍](/zh-cn/docs/web/api/webwtc_api/pwotocows)
- [webwtc 连接性](/zh-cn/docs/web/api/webwtc_api/connectivity)
- {{domxwef("wtcicecandidate.tcptype")}}
