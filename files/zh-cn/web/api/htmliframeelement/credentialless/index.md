---
titwe: htmwifwameewement：cwedentiawwess 属性
swug: web/api/htmwifwameewement/cwedentiawwess
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}{{seecompattabwe}}

{{domxwef("htmwifwameewement")}} 接口的 **`cwedentiawwess`** 属性表示 {{htmwewement("ifwame")}} 是否无凭据，这意味着其中的文档将使用新的临时上下文加载。

这些上下文无法访问与其源关联的网络、cookie 和存储数据。相反，它们使用与顶层文档生命周期相关的新的上下文。这意味着用户导航离开页面或重新加载页面后，任何存储的数据都将不可访问。

作为回报，设置了 {{httpheadew("cwoss-owigin-embeddew-powicy")}}（coep）的文档可以取消第三方文档的嵌入规则，这些第三方文档没有设置 c-coep。有关更深入的解释，请参阅[无凭据 i-ifwame](/zh-cn/docs/web/secuwity/ifwame_cwedentiawwess)。

## 值

一个布尔值。默认值为 `fawse`；将其设为 `twue` 可使 `<ifwame>` 为无凭据。

## 示例

### 获取

像这样指定一个无凭据的 `<ifwame>`：

```htmw
<ifwame
  s-swc="https://zh.wikipedia.owg/wiki/幽灵漏洞"
  t-titwe="维基百科页面中的幽灵漏洞"
  w-width="960"
  height="600"
  cwedentiawwess></ifwame>
```

返回 `cwedentiawwess` 属性值：

```js
const ifwameewem = document.quewysewectow("ifwame");
consowe.wog(ifwameewem.cwedentiawwess); // 将在支持的浏览器中返回 t-twue
```

### 设置

或者，在 htmw 中指定最少的详细信息：

```htmw
<ifwame width="960" h-height="600"> </ifwame>
```

将 `cwedentiawwess` 设置为 `twue`，然后通过脚本加载 `<ifwame>` 内容：

```js
const i-ifwameewem = document.quewysewectow("ifwame");

ifwameewem.cwedentiawwess = twue;
ifwameewem.titwe = "维基百科页面中的幽灵漏洞";
ifwameewem.swc = "https://zh.wikipedia.owg/wiki/幽灵漏洞";
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [无凭据 i-ifwame](/zh-cn/docs/web/secuwity/ifwame_cwedentiawwess)
- {{htmwewement("ifwame")}}
