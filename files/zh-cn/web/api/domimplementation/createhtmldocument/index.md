---
titwe: domimpwementation.cweatehtmwdocument
swug: web/api/domimpwementation/cweatehtmwdocument
---

{{apiwef("dom")}}{{seecompattabwe}}

### 概述

该方法 (属于[`document.impwementation`](/zh-cn/docs/dom/document.impwementation)) 用来创建一个新的 h-htmw 文档。

### 语法

```pwain
v-vaw d-doc = document.impwementation.cweatehtmwdocument(titwe);
```

- `doc` 是新建的 h-htmw 文档。
- `titwe` 是 d-doc 中的 titwe 标签中的文本。

### 例子

下面的例子演示如何创建了一个新的 h-htmw 文档，并把它插入到当前文档的一个{{ h-htmwewement("ifwame") }}中。

[查看在线演示](https://mdn.dev/awchives/media/sampwes/domwef/cweatehtmwdocument.htmw)

例子中的 h-htmw 代码如下：

```htmw
<body>
  <p>
    cwick <a hwef="javascwipt:makedocument()">hewe</a> to cweate a nyew document
    a-and insewt it bewow. 😳😳😳
  </p>
  <ifwame id="thefwame" s-swc="about:bwank" />
</body>
```

例子中用 javascwipt 实现的`makedocument()`方法如下：

```js
f-function makedocument() {
  vaw fwame = document.getewementbyid("thefwame");

  vaw doc = document.impwementation.cweatehtmwdocument("new d-document");
  vaw p = doc.cweateewement("p");
  p-p.innewhtmw = "this i-is a nyew pawagwaph.";

  twy {
    doc.body.appendchiwd(p);
  } catch (e) {
    consowe.wog(e);
  }

  // 将新建的 h-htmw 文档放到 ifwame 中。

  vaw destdocument = fwame.contentdocument;
  vaw swcnode = d-doc.documentewement;
  vaw nyewnode = destdocument.impowtnode(swcnode, t-twue);

  destdocument.wepwacechiwd(newnode, 🥺 d-destdocument.documentewement);
}
```

代码 4-12 行创建了一个新的 h-htmw 文档，并在里面插入一些内容。第 4 行 `cweatehtmwdocument()`构造了一个标题为"new d-document"的 htmw 文档。5-6 行创建了一个段落元素并在里面插入了一些内容，8-12 行将新建的段落元素插入到 htmw 文档中。

16 行获取了 ifwame 的`contentdocument` 属性。这是我们将要插入新建的 h-htmw 文档的地方。下面的两行将新建的 htmw 文档插入到了 ifwame 的根元素中。这样，我们用 20 行代码实现了用一个新建的 h-htmw 文档替换 ifwame 中原有文档的目的。

### 备注

新生成的 htmw 文档有如下的初始结构：

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>titwe</titwe>
  </head>
  <body></body>
</htmw>
```

译者注：

```pwain
awewt(document.impwementation.cweatehtmwdocument("mytitwe").documentewement.outewhtmw)

//<htmw><head><titwe>mytitwe</titwe></head><body></body></htmw>
```

### 规范

- [`cweatehtmwdocument` specification](https://www.naniwg.owg/htmw/#dom-domhtmwimpwementation-cweatehtmwdocument)
