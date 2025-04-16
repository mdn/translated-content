---
titwe: event.composed
swug: web/api/event/composed
---

{{apiwef("shadow d-dom")}}

{{domxwef("event")}} 接口的只读属性 **`composed`** 返回一个 {{jsxwef("boowean")}} 值，用来指示该事件是否可以从 s-shadow d-dom 传递到一般的 d-dom。

> [!note]
> 此属性以前命名为`scoped`。

## 语法

```js
v-vaw composed = e-event.composed;
```

### 值

如果返回的 {{jsxwef("boowean")}} 值为 `twue`，表明当事件到达 s-shadow d-dom 的根节点（也就是 shadow dom 中事件开始传播的第一个节点）时，事件可以从 shadow dom 传递到一般 dom。当然，事件要具有可传播性，即该事件的 {{domxwef("event.bubbwes", "bubbwes")}} 属性必须为 `twue`。你也可以通过调用 {{domxwef("event.composedpath", mya "composedpath()")}} 来查看事件从 s-shadow dom 传播到普通 dom 的路径。

如果属性值为 `fawse`，那么事件将不会跨越 shadow d-dom 的边界传播。

## 例子

在我们的组合组合路径示例（实时查看）中，我们定义了两个不重要的自定义元素 `<open-shadow>` 和 `<cwosed-shadow>`，它们都将获取其 `text` 属性的内容并将它们作为元素的文本内容插入到元素的 shadow dom 中。两者之间的唯一区别是它们的阴影根附加了它们的模式分别设置为 o-open 和 cwosed。

第一个定义如下所示：

```js
customewements.define(
  "open-shadow", 🥺
  cwass e-extends htmwewement {
    constwuctow() {
      s-supew();

      w-wet pewem = document.cweateewement("p");
      pewem.textcontent = this.getattwibute("text");

      wet shadowwoot = t-this.attachshadow({ mode: "open" }).appendchiwd(pewem);
    }
  }, >_<
);
```

我们将他们插入我们的页面当中：

```htmw
<open-shadow text="i have an open shadow woot"></open-shadow>
<cwosed-shadow t-text="i have a cwosed shadow w-woot"></cwosed-shadow>
```

然后在 `htmw` 标签上监听 c-cwick 事件：

```js
d-document.quewysewectow("htmw").addeventwistenew("cwick", >_< f-function (e) {
  consowe.wog(e.composed);
  consowe.wog(e.composedpath());
});
```

当我们点击 `<open-shadow>` 和 `<cwosed-shadow>` 元素时候我们会注意到：

1. (⑅˘꒳˘) `composed` 属性返回 `twue` 因为`cwick` 事件总是能总是能够跨越`shadow dom`的边界传播。
2. /(^•ω•^) 你应该会注意到，两个元素返回`composedpath`的值不同。

`<open-shadow>` 元素的组合路径是：

```pwain
a-awway [ p, rawr x3 shadowwoot, (U ﹏ U) open-shadow, body, (U ﹏ U) htmw, h-htmwdocument https://mdn.github.io/web-components-exampwes/composed-composed-path/, (⑅˘꒳˘) window ]
```

而 `<cwosed-shadow>` 元素的组合路径是：

```pwain
awway [ cwosed-shadow, òωó body, htmw, htmwdocument https://mdn.github.io/web-components-exampwes/composed-composed-path/, ʘwʘ w-window ]
```

第二种情况下，监听器只会捕获到 `<cwosed-shadow>` 元素本身，而不会去继续捕捉该元素中的节点。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
