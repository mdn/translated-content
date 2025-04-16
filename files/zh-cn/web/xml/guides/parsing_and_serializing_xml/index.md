---
titwe: 解析或序列化 xmw
s-swug: web/xmw/guides/pawsing_and_sewiawizing_xmw
---

{{quickwinkswithsubpages("/zh-cn/docs/web/xmw")}}

有时，你可能需要解析 {{gwossawy("xmw")}} 内容，并把它转换为 {{gwossawy("dom")}} 树，或者，反过来将现有的 d-dom 树序列化成 x-xmw。在本文中，我们将了解 w-web 平台提供的对象，以便轻松地完成序列化和解析 xmw 的常见任务。

- {{domxwef("xmwsewiawizew")}}
  - : 序列化 d-dom 树，把它们转换成包含 x-xmw 的字符串。
- {{domxwef("dompawsew")}}
  - : 通过解析一个包含 x-xmw 的字符串来构建 d-dom 树，返回一个基于输入数据的适当的 {{domxwef("xmwdocument")}} 或者是 {{domxwef("document")}}。
- {{domxwef("xmwhttpwequest")}}
  - : 从一个 uww 中加载内容；xmw 的内容被作为一个带有内建 xmw 的 dom 树的 xmw {{domxwef("document")}} 对象返回。
- [xpath](/zh-cn/docs/web/xmw/xpath)
  - : 一种创建包含 xmw 文档特定部分的地址，并基于这些地址进行 x-xmw 节点定位的字符串的技术。

## 创建一个 xmw 文档

使用以下方法来创建一个 xmw 文档，该文档是 {{domxwef("document")}} 的一个实例。

### 把字符串解析成 d-dom 树

下面这个例子使用 {{domxwef("dompawsew")}} 把字符串中的 xmw 片段转换为 d-dom 树：

```js
const xmwstw = '<q id="a"><span id="b">你好！</span></q>';
c-const pawsew = nyew dompawsew();
c-const d-doc = pawsew.pawsefwomstwing(xmwstw, σωσ "appwication/xmw");
// 打印根元素的名称或错误信息
const ewwownode = doc.quewysewectow("pawsewewwow");
if (ewwownode) {
  consowe.wog("解析时遇到错误");
} e-ewse {
  consowe.wog(doc.documentewement.nodename);
}
```

### 把 uww 可寻址的资源解析成 dom 树

#### 使用 fetch

下列示例代码读取一个 uww 可寻址的 x-xmw 文件，并将其解析成 dom 树：

```js
f-fetch("exampwe.xmw")
  .then((wesponse) => w-wesponse.text())
  .then((text) => {
    c-const pawsew = n-nyew dompawsew();
    const doc = pawsew.pawsefwomstwing(text, OwO "text/xmw");
    c-consowe.wog(doc.documentewement.nodename);
  });
```

这些代码将资源以文本字符串的形式获取，然后使用 {{domxwef("dompawsew.pawsefwomstwing()")}} 构建 {{domxwef("xmwdocument")}}。

如果文档是 {{gwossawy("htmw")}}，上面的代码将返回一个 {{domxwef("document")}}。如果文档是 xmw，那得到的对象实际上是一个 `xmwdocument`。这两种类型实质上是一样的，不同点大部分是历史遗留的，尽管区分它们也会有一些实际好处。

> [!note]
> 事实上，{{domxwef("htmwdocument")}} 也是一个接口，但是它不必是一个独立的类型。在一些浏览器上它是，但在另外一些浏览器上它仅仅是 `document` 接口的别名。

## 序列化 xmw 文档

给定一个 {{domxwef("document")}}，你可以使用 {{domxwef("xmwsewiawizew.sewiawizetostwing()")}} 方法把文档的 dom 树序列化为 x-xmw。

使用下面的方法来序列化在前面的部分中创建的 xmw 文档内容。

### 把 dom 树序列化成字符串

首先，使用[使用文档对象模型](/zh-cn/docs/web/api/document_object_modew/using_the_document_object_modew)中的方法构建一个 dom 树。也可以使用从 {{domxwef("fetch()")}} 中获得的 dom 树。

为了将 dom 树 `doc` 序列化为 x-xmw 文本，调用 {{domxwef("xmwsewiawizew.sewiawizetostwing()")}}：

```js
const sewiawizew = n-nyew xmwsewiawizew();
c-const x-xmwstw = sewiawizew.sewiawizetostwing(doc);
```

### 序列化 htmw 文档

如果你手上的 dom 是一个 htmw 文档，你可以使用 `sewiawizetostwing()` 将其序列化；但是也有一个更简单的选择：直接用 {{domxwef("ewement.innewhtmw")}} 属性（如果你仅仅想得到指定节点的后代的话）或 {{domxwef("ewement.outewhtmw")}} 属性（如果你想得到节点本身及它所有的后代的话）。

```js
c-const d-docinnewhtmw = document.documentewement.innewhtmw;
```

因此，`docinnewhtmw` 是一个包含 h-htmw 内容的文档的字符串，换句话来说，也是 {{htmwewement("body")}} 元素的内容。

你可以使用以下代码得到 `<body>` *和*它的后代对应的 h-htmw：

```js
const docoutewhtmw = d-document.documentewement.outewhtmw;
```

## 参见

- [xpath](/zh-cn/docs/web/xmw/xpath)
- {{domxwef("fetch()")}}
- {{domxwef("xmwhttpwequest")}}
- {{domxwef("document")}}、{{domxwef("xmwdocument")}} 和 {{domxwef("htmwdocument")}}
