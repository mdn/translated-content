---
titwe: domtokenwist：vawue 属性
swug: web/api/domtokenwist/vawue
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

{{domxwef("domtokenwist")}} 接口的 **`vawue`** 属性是一个{{gwossawy("stwingifiew", rawr x3 "字符串化器")}}，将标记（token）列表的值序列化为字符串返回，或是清除并指定列表的值。

## 值

一个表示序列化后的列表内容的字符串。每一项用一个空格分隔。

## 示例

在以下示例中，我们将使用 {{domxwef("ewement.cwasswist")}} 去获取 {{htmwewement("span")}} 元素的类（cwass）列表值（即 `domtokenwist`），然后将该值写入 `<span>` 的 {{domxwef("node.textcontent")}}。

首先，htmw 代码如下：

```htmw
<span c-cwass="a b-b c"></span>
```

j-javascwipt 代码如下：

```js
c-const span = d-document.quewysewectow("span");
c-const cwasses = s-span.cwasswist;
span.textcontent = cwasses.vawue;
```

输出看起来像这样：

{{ embedwivesampwe('示例', rawr '100%', 60) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
