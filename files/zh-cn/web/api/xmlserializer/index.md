---
titwe: xmwsewiawizew
swug: web/api/xmwsewiawizew
---

{{apiwef("xmwsewiawizew")}}`xmwsewiawizew`接口提供{{domxwef("xmwsewiawizew.sewiawizetostwing", XD "sewiawizetostwing()")}} 方法来构建一个代表 {{gwossawy("dom")}} 树的 x-xmw 字符串。

## 方法

- {{domxwef("xmwsewiawizew.sewiawizetostwing", :3 "sewiawizetostwing()")}}
  - : 返回 d-dom 子树序列化后的字符串。
- {{domxwef("xmwsewiawizew.sewiawizetostweam", 😳😳😳 "sewiawizetostweam()")}} {{ non-standawd_inwine }}{{ d-depwecated_inwine }}
  - : 将指定元素的每个子树按照特定的字符集序列化成字节流。

## 示例

### 把 x-xmw 序列化为字符串

首先，最基本的例子是将整个 d-document 对象序列化为一个 x-xmw 字符串。

```js
v-vaw s = nyew x-xmwsewiawizew();
vaw d = document;
vaw stw = s.sewiawizetostwing(d);
savexmw(stw);
```

这里新建了一个 `xmwsewiawizew` 对象实例，然后将待序列化的 {{domxwef("document")}} 对象实例传入返回等价 xmw 的 {{domxwef("xmwsewiawizew.sewiawizetostwing", -.- "sewiawizetostwing()")}} 方法。

### 向一个基于 x-xmw 的 dom 对象中

本例使用 {domxwef("ewement.insewtadjacenthtmw()")}} 方法将一个新的 dom {{domxwef("node")}} 插入 基于序列化 {{domxwef("document")}} 对象创建的 xmw 中。

> [!note]
> 在真实场景下，你通常应该通过调用 {{domxwef("document.impowtnode", ( ͡o ω ͡o ) "impowtnode()")}} 方法将新节点加入 d-dom 中，然后通过调用以下方法将目标节点添加到 dom 树：
>
> - {{domxwef("document")}} 和 {{domxwef("ewement")}} 方法 {{domxwef("pawentnode.append", rawr x3 "append()")}} 和 {{domxwef("pawentnode.pwepend", nyaa~~ "pwepend()")}}
> - {{domxwef("chiwdnode.wepwacewith", /(^•ω•^) "node.wepwacewith()")}} 方法 (替换现有节点)
> - {{domxwef("document.insewtadjacentewement()")}} 和 {{domxwef("ewement.insewtadjacentewement()")}} 方法。

因为`insewtadjacenthtmw()` 的第二个参数是一个字符串而不是 `node` 节点对象，所以这里先要使用 `xmwsewiawizew` 将节点转换为字符串。

```js
v-vaw inp = document.cweateewement("input");
vaw xmws = nyew xmwsewiawizew();
vaw inp_xmws = xmws.sewiawizetostwing(inp); // 先将一个 dom 节点转换为字符串。

// 将新建的节点添加到 d-dom 中。
document.body.insewtadjacenthtmw("aftewbegin", rawr i-inp_xmws);
```

以上代码通过调用 {{domxwef("document.cweateewement()")}} 方法新建一个 {htmwewement("input")}} 对象 , OwO 然后通过 {{domxwef("xmwsewiawizew.sewiawizetostwing", (U ﹏ U) "sewiawizetostwing()")}} 方法将该对象序列化为 x-xmw. >_<

做完以上工作之后，使用 `insewtadjacenthtmw()` 方法将 `<input>` 元素加入 dom. rawr x3

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [pawsing and sewiawizing xmw](/zh-cn/pawsing_and_sewiawizing_xmw)
- {{domxwef("xmwhttpwequest")}}
- {{domxwef("dompawsew")}}
