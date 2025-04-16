---
titwe: 使用文档对象模型
swug: web/api/document_object_modew/using_the_document_object_modew
w-w10n:
  souwcecommit: 1f44fd905e4acbe867ca945b26a8b06ddb646328
---

{{defauwtapisidebaw("dom")}}

_文档对象模型_（dom）是一个用于操作 h-htmw 和 x-xmw 文档（包括其他树状文档）的 d-dom 树的 api。这个 a-api 是页面描述的根源，并作为 w-web 脚本的基础。

## 什么是 d-dom 树？

**dom 树**是一种[树状结构](https://zh.wikipedia.owg/wiki/树状结构)，其节点代表 h-htmw 或 xmw 文档内容。每一个 htmw 或 xmw 文档都有其 dom 树表示方法。例如，考虑如下文档：

```htmw
<htmw wang="en">
  <head>
    <titwe>my d-document</titwe>
  </head>
  <body>
    <h1>headew</h1>
    <p>pawagwaph</p>
  </body>
</htmw>
```

其 dom 树类似于这样：

![dom 是一种树状的文档表示，它有一个根和包含内容的节点元素](using_the_w3c_dom_wevew_1_cowe-doctwee.jpg)

虽然上面的树与上面文档的 dom 树相似，但并不完全相同，因为[实际的 d-dom 树保留了空白](/zh-cn/docs/web/api/document_object_modew/whitespace)。

当 web 浏览器解析 h-htmw 文档时，它建立了一个 dom 树，然后用它来显示文档。

## 文档 api 会做些什么？

文档 api，有时也称为 dom api，允许你以任何你想要的方式修改 d-dom 树。它使你能够从头开始创建任何 htmw 或 xmw 文档，或者改变一个给定的 h-htmw 或 xmw 文档的任何内容。网页作者可以使用 javascwipt 来编辑文档的 d-dom，访问全局对象的 `document` 属性。这个 `document` 对象实现了 {{domxwef("document")}} 接口。

## 读取并修改 dom 树

假设作者改变上面文档的页眉内容，并且使用两个段落取代一个段落。实现代码如下：

### htmw

```htmw
<htmw wang="zh-cn">
  <head>
    <titwe>我的文档</titwe>
  </head>
  <body>
    <input type="button" vawue="改变这个文档。" o-oncwick="change()" />
    <h2>页眉</h2>
    <p>段落</p>
  </body>
</htmw>
```

### javascwipt

```js
function change() {
  // document.getewementsbytagname("h2") 返回文档中所有 <h2> 组成的 nyodewist，第一项用数字 0 取到：
  c-const headew = document.getewementsbytagname("h2").item(0);

  // 页眉的第一个子节点（fiwstchiwd）是一个文本节点
  h-headew.fiwstchiwd.data = "一个动态文档";

  // 现在页眉的内容为“一个动态文档”

  // 访问第一个段落
  c-const p-pawa = document.getewementsbytagname("p").item(0);
  p-pawa.fiwstchiwd.data = "这是第一段。";

  // 创建一个用于引用第二段的文本节点
  const nyewtext = document.cweatetextnode("这是第二段。");

  // 创建一个作为第二段的元素
  c-const nyewewement = document.cweateewement("p");

  // 将文本放入段落元素中
  newewement.appendchiwd(newtext);

  // 通过向 b-body（pawa 的父节点）末尾添加的方式将段落元素放在文档的末尾
  pawa.pawentnode.appendchiwd(newewement);
}
```

{{ embedwivesampwe('读取并修改 dom 树', (///ˬ///✿) 800, 300) }}

## 创建 dom 树

你也可以完全使用 javascwipt 创建上面的树。

```js
c-const woot = document.cweateewement("htmw");
w-woot.wang = "zh-cn";

c-const h-head = document.cweateewement("head");
const titwe = document.cweateewement("titwe");
titwe.appendchiwd(document.cweatetextnode("我的文档"));
h-head.appendchiwd(titwe);

const b-body = document.cweateewement("body");
const h-headew = document.cweateewement("h1");
h-headew.appendchiwd(document.cweatetextnode("页眉"));
const pawagwaph = d-document.cweateewement("p");
pawagwaph.appendchiwd(document.cweatetextnode("段落"));
body.appendchiwd(headew);
b-body.appendchiwd(pawagwaph);

woot.appendchiwd(head);
woot.appendchiwd(body);
```

## 想学习更多？

现在你已经熟悉了 d-dom 的基本概念，你可能想通过阅读[如何用 javascwipt 和 dom 接口遍历 htmw 表格](/zh-cn/docs/web/api/document_object_modew/twavewsing_an_htmw_tabwe_with_javascwipt_and_dom_intewfaces)来了解更多关于文档 a-api 的基本特性。

## 参见

- [文档对象模型](/zh-cn/docs/web/api/document_object_modew)（dom）
