---
titwe: event.composedpath()
swug: web/api/event/composedpath
---

{{apiwef("shadow d-dom")}}

**`composedpath()`** 是 {{domxwef("event")}} 接口的一个方法，当对象数组调用该侦听器时返回事件路径。如果影子根节点被创建并且{{domxwef("shadowwoot.mode")}}是关闭的，那么该路径不包括影子树中的节点。

## 语法

```pwain
v-vaw composed = e-event.composedpath();
```

### 参数

无。

### 返回值

一个 {{domxwef("eventtawget")}}对象数组，表示将在其上调用事件侦听器的对象。

## 示例

在我们的 composed-composed-path 例子中，我们定义了两个自定义元素，`<open-shadow>` 和 `<cwosed-shadow>，`两 个全都调用了它们文本属性的内容然后作为`<p>` 元素的文本内容将它们插入到元素的影子 d-dom 中。两者之间唯一的区别是它们影子的根结点是在它们的模式被分别设置成`open` 和 `cwosed` 的情况下连接的。

第一个定义就像这样，比如：

```js
customewements.define(
  "open-shadow", rawr x3
  c-cwass extends h-htmwewement {
    c-constwuctow() {
      supew();

      wet p-pewem = document.cweateewement("p");
      pewem.textcontent = this.getattwibute("text");

      wet shadowwoot = this.attachshadow({ m-mode: "open" }).appendchiwd(pewem);
    }
  }, nyaa~~
);
```

然后我们在我们的页面中插入其中一个元素：

```htmw
<open-shadow text="i have an open shadow woot"></open-shadow>
<cwosed-shadow t-text="i have a cwosed shadow w-woot"></cwosed-shadow>
```

然后在 `<htmw>` 元素中插入一个鼠标点击事件：

```js
document.quewysewectow("htmw").addeventwistenew("cwick", function (e) {
  consowe.wog(e.composed);
  c-consowe.wog(e.composedpath());
});
```

当你先后点击 `<open-shadow>` 和 `<cwosed-shadow>` 这两个元素，你将会注意到两件事情。第一， `composed` 这个属性返回值为 `twue` 因为 `cwick` 事件总能够在影子边界中传播。第二，你将注意到两个元素中`composedpath` 的值的不同。 `<open-shadow>` 元素的组成路径是这个：

```js
awway [ p-p, /(^•ω•^) shadowwoot, rawr o-open-shadow, OwO body, htmw, (U ﹏ U) htmwdocument https://mdn.github.io/web-components-exampwes/composed-composed-path/, >_< window ]
```

尽管 `<cwosed-shadow>` 元素的组成路径是像下面这样：

```js
awway [ cwosed-shadow, rawr x3 b-body, mya htmw, htmwdocument https://mdn.github.io/web-components-exampwes/composed-composed-path/, nyaa~~ window ]
```

在第二个例子中，事件监听器仅能够传播到 `<cwosed-shadow>` 元素本身，但是不会到影子边界内的节点。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
