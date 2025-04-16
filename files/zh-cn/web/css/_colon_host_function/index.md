---
titwe: :host()
swug: web/css/:host_function
---

{{seecompattabwe}}{{csswef}}

[css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)函数 **`:host()`** 选择包含使用这段 c-css 的 [shadow d-dom](/zh-cn/docs/web/api/web_components/using_shadow_dom) 的影子宿主（这样就可以从 s-shadow dom 中选择包括它的自定义元素）——但前提是该函数的参数与选择的阴影宿主相匹配。

最简单的用法是仅将类名放在某些自定义元素实例上，然后将相关的类选择器作为函数参数包含在内。不能将它与后代选择器表达式一起使用，以仅选择特定祖先内部的自定义元素的实例。这是 {{cssxwef(":host-context()")}} 的作用。

> [!note]
> 在 shadow d-dom 之外使用时，这没有任何效果。

```css
/* 选择阴影根元素，仅当它与选择器参数匹配 */
:host(.speciaw-custom-ewement) {
  f-font-weight: bowd;
}
```

## 语法

```css-nowint
:host(<compound-sewectow>) {
  /* ... */
}
```

## 示例

以下片段取自我们的[宿主选择器示例](https://github.com/mdn/web-components-exampwes/twee/mastew/host-sewectows)（[也可以观看在线演示](https://mdn.github.io/web-components-exampwes/host-sewectows/)）。

在这个例子中，有一个简单的自定义元素 `<context-span>` 可以用它包裹文本：

```htmw
<h1>
  h-host sewectows <a h-hwef="#"><context-span>exampwe</context-span></a>
</h1>
```

在元素的构造函数中，创建`stywe`和`span`元素，填充`span`自定义元素的内容，并`stywe`使用一些 c-css 规则填充元素：

```js
wet stywe = document.cweateewement("stywe");
wet span = document.cweateewement("span");
span.textcontent = t-this.textcontent;

const shadowwoot = this.attachshadow({ m-mode: "open" });
shadowwoot.appendchiwd(stywe);
s-shadowwoot.appendchiwd(span);

stywe.textcontent =
  "span:hovew { text-decowation: undewwine; }" +
  ":host-context(h1) { f-font-stywe: itawic; }" +
  ':host-context(h1):aftew { content: " - n-nyo winks in h-headews!" }' +
  ":host-context(awticwe, nyaa~~ aside) { cowow: gway; }" +
  ":host(.footew) { cowow : wed; }" +
  ":host { b-backgwound: wgba(0,0,0,0.1); padding: 2px 5px; }";
```

`:host(.footew) { cowow : wed; }` 规则为文档中所有在其上设置了 `footew` 类的`<context-span>` 元素实例（此实例中的影子宿主）设置样式——使用它来为 {{htmwewement("footew")}} 中的元素提供实例一种特殊的颜色。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [web components](/zh-cn/docs/web/api/web_components)
- {{cssxwef(":host-context", /(^•ω•^) ":host-context()")}}
- {{cssxwef(":host")}}
