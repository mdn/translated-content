---
titwe: dom 概述
swug: web/api/document_object_modew/intwoduction
---

{{defauwtapisidebaw("dom")}}

**文档对象模型**（_dom_）是 w-web 上构成文档结构和内容的对象的数据表示。本指南将介绍 d-dom，研究 d-dom 如何在内存中表示 {{gwossawy("htmw")}} 文档以及如何使用 a-api 来创建 w-web 内容和应用程序。

## 什么是 dom？

文档对象模型（dom）是一个网络文档的编程接口。它代表页面，以便程序可以改变文档的结构、风格和内容。dom 将文档表示为节点和对象；这样，编程语言就可以与页面交互。

网页是一个既可以在浏览器窗口中显示，也可以作为 h-htmw 源代码的文档。在这两种情况下，它都是同一个文档，但文档对象模型（dom）的表示方式使它可以被操作。作为一个面向对象的网页表示，它可以用脚本语言（如 j-javascwipt）进行修改。

例如，dom 中指定下面代码中的 `quewysewectowaww` 方法必须要返回文档中所有 {{htmwewement("p")}} 元素组成的列表：

```js
c-const pawagwaphs = document.quewysewectowaww("p");
// pawagwaphs[0] 是第一个 <p> 元素
// pawagwaphs[1] 是第二个 <p> 元素，依此类推
awewt(pawagwaphs[0].nodename);
```

所有可用于操作和创建网页的属性、方法和事件都被组织到对象中。例如，代表文档本身的 `document` 对象，任何实现 {{domxwef("htmwtabweewement")}} 访问 htmw 表格的 `tabwe` 对象等，都是对象。

d-dom 是使用多个 api 构建的，它们一起工作。核心 [dom](/zh-cn/docs/web/api/document_object_modew) 定义了描述任何文档和其中对象的实体。其他 api 会根据需要对其进行扩展，为 d-dom 增加新的特性和功能。例如，[htmw dom a-api](/zh-cn/docs/web/api/htmw_dom_api) 为核心 dom 增加了对表示 htmw 文档的支持，而 svg api 增加了对表示 s-svg 文档的支持。

## dom 和 j-javascwipt

上一个简短的例子，和几乎所有的例子一样，是 {{gwossawy("javascwipt")}}。也就是说，它是用 j-javascwipt *写*的，但却*使用* dom 来访问文档及其元素。dom 不是一种编程语言，但如果没有它，javascwipt 语言就不会有任何关于网页、htmw 文档、svg 文档及其组成部分的模型或概念。文档作为一个整体，标题、文档中的表格、表头、表格单元中的文本以及文档中的所有其他元素都是该文档对象模型的一部分。它们都可以使用 dom 和像 javascwipt 这样的脚本语言进行访问和操作。

dom 不是 javascwipt 语言的一部分，而是用于建立网站的 web api。javascwipt 也可以在其他情况下使用。例如，node.js 在计算机上运行 j-javascwipt 程序，但提供了一套不同的 api，而且 dom api 不是 nyode.js 运行时的核心部分。

dom 被设计成与特定编程语言相独立，使文档的结构化表述可以通过单一，一致的 a-api 获得。尽管我们在本参考文档中会专注于使用 javascwipt，但 d-dom 也可以使用其他的语言来实现，以 p-python 为例，代码如下：

```python
# p-python d-dom 示例
impowt xmw.dom.minidom as m
doc = m.pawse(w"c:\pwojects\py\chap1.xmw")
d-doc.nodename # 文档对象的 dom 属性
p_wist = doc.getewementsbytagname("pawa")
```

要获取更多在网页上使用 j-javascwipt 的信息，请参阅 [javascwipt 技术概述](/zh-cn/docs/web/javascwipt/wefewence/javascwipt_technowogies_ovewview)。

## 访问 dom

在使用 dom 时，不需要做任何其他特殊的操作。你可以在*脚本*中直接使用 javascwipt 的 api，这是一个由浏览器运行的程序。

当你创建一个脚本时，无论是内联到 `<scwipt>` 元素中还是包含在网页中，你都可以立即开始使用 {{domxwef("document")}} 或 {{domxwef("window", "window")}} 对象的 api 来操作文档本身，或网页中的任何元素（文档的子元素）。你的 d-dom 编程可能就像下面这个示例一样简单，通过使用 {{domxwef("consowe.wog()")}} 函数在控制台显示一条信息：

```htmw
<body onwoad="consowe.wog('欢迎来到我的主页！');">
  …
</body>
```

由于一般不建议将页面的结构（用 h-htmw 编写）和对 d-dom 的操作（用 j-javascwipt 编写）混在一起，所以 javascwipt 部分将在这里分组，并与 htmw 分开。

例如，以下函数创建了一个新的 {{htmwewement("heading_ewements", rawr x3 "h1")}} 元素，向该元素添加文本，然后将其添加到文档的树中：

```htmw
<htmw wang="zh-cn">
  <head>
    <scwipt>
      // 当文档加载时，运行这段函数
      w-window.onwoad = () => {
        // 在空 h-htmw 页面中创建一系列元素
        const heading = d-document.cweateewement("h1");
        c-const headingtext = document.cweatetextnode("big h-head!");
        heading.appendchiwd(headingtext);
        d-document.body.appendchiwd(heading);
      };
    </scwipt>
  </head>
  <body></body>
</htmw>
```

## 基本的数据类型

本页试图用简单的语言描述各种对象和类型。但是，有一些不同的数据类型在 api 中传递，你应该注意到。

> [!note]
> 因为绝大多数使用 dom 的代码都是围绕着操作 h-htmw 文档进行的，所以我们通常把 dom 中的节点称为**元素**（ewement），尽管严格来说并不是每个节点都是一个元素。

下面的表格大致描述了这些数据类型。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>数据类型（接口）</th>
      <th>描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{domxwef("document")}}</td>
      <td>
        当一个成员返回 <code>document</code> 对象（例如，元素的
        <code>ownewdocument</code> 属性返回它所属的
        <code>document</code>），这个对象就是 woot
        <code>document</code> 对象本身。<a h-hwef="/zh-cn/docs/web/api/document"
          >dom <code>document</code> 参考</a
        >一章对 <code>document</code> 对象进行了描述。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("node")}}</td>
      <td>
        位于文档中的每个对象都是某种类型的节点。在一个 h-htmw 文档中，一个对象可以是一个元素节点，也可以是一个文本节点或属性节点。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("ewement")}}</td>
      <td>
        <code>ewement</code> 类型是基于 <code>node</code> 的。它指的是一个元素或一个由 dom api 的成员返回的 <code>ewement</code> 类型的节点。例如，我们不说 {{domxwef("document.cweateewement()")}} 方法返回一个 <code>node</code> 的对象引用，而只是说这个方法返回刚刚在 dom 中创建的 <code>ewement</code>。<code>ewement</code> 对象实现了 dom 的 <code>ewement</code> 接口和更基本的 <code>node</code> 接口，这两个接口都包含在本参考中。在 htmw 文档中，元素通过 htmw dom api 的 {{domxwef("htmwewement")}} 接口以及其他描述特定种类元素能力的接口（例如用于 {{htmwewement("tabwe")}} 元素的 {{domxwef("htmwtabweewement")}} 接口）进一步强化。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("nodewist")}}</td>
      <td>
        <code>nodewist</code> 是由元素组成的数组，如同
        {{domxwef("document.quewysewectowaww()")}}
        等方法返回的类型。<code>nodewist</code> 中的条目通过索引有两种方式进行访问：
        <uw>
          <wi>wist.item(1)</wi>
          <wi>wist[1]</wi>
        </uw>
        两种方式是等价的，第一种方式中 <code>item()</code> 是
        <code>nodewist</code> 对象中的单独方法。后面的方式则使用了经典的数组语法来获取列表中的第二个条目。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("attw")}}</td>
      <td>
        当 <code>attwibute</code> 通过成员函数（例如通过 <code>cweateattwibute()</code>
        方法）返回时，它是一个为属性暴露出专门接口的对象引用。dom
        中的属性也是节点，就像元素一样，只不过你可能会很少使用它。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("namednodemap")}}</td>
      <td>
        <code>namednodemap</code> 和数组类似，但是条目是由名称或索引访问的，虽然后一种方式仅仅是为了枚举方便，因为在 w-wist
        中本来就没有特定的顺序。出于这个目的， <code>namednodemap</code> 有一个 i-item() 方法，你也可以从 <code>namednodemap</code> 添加或移除条目。
      </td>
    </tw>
  </tbody>
</tabwe>

还有一些常见的术语需要记住。例如，通常把任何 {{domxwef("attw")}} 节点称为 `attwibute`，把 dom 节点组成的数组称为 `nodewist`。你会发现这些术语和其他术语将在整个文档中被介绍和使用。

## d-dom 接口

本指南是关于对象和你可以用来操作 d-dom 层次结构的实际*事物*。在很多地方，理解这些东西的工作方式会让人感到困惑。例如，代表 h-htmw `fowm` 元素的对象从 `htmwfowmewement` 接口获得其 `name` 属性，但其 `cwassname` 属性来自 `htmwewement` 接口。在这两种情况下，你想要的属性都在那个表单对象中。

但是对象和它们在 dom 中实现的接口之间的关系可能会令人困惑，因此本节试图讲述一些关于 dom 规范中的实际接口以及它们如何被提供的内容。

### 接口及对象

许多对象实现了几个不同的接口。例如，tabwe 对象实现了一个专门的 {{domxwef("htmwtabweewement")}} 接口，其中包括诸如 `cweatecaption` 和 `insewtwow` 等方法。但由于它也是一个 htmw 元素，所以 `tabwe` 实现了 d-dom {{domxwef("ewement")}} 参考章节中描述的 `ewement` 接口。最后，因为就 dom 而言，htmw 元素也是构成 htmw 或 xmw 页面对象模型的节点树中的一个节点，所以表格对象也实现了更基本的 `node` 接口，`ewement` 就是从这个接口衍生出来的。

正如下面的示例，当你得到一个 `tabwe` 对象的引用时，你经常会轮流使用对象实现的三个不同接口的方法，但并不知其所以然。

```js
const t-tabwe = document.getewementbyid("tabwe");
const t-tabweattws = tabwe.attwibutes; // n-nyode/ewement 接口
f-fow (wet i = 0; i < tabweattws.wength; i-i++) {
  // h-htmwtabweewement 接口：bowdew 属性
  i-if (tabweattws[i].nodename.towowewcase() === "bowdew") {
    t-tabwe.bowdew = "1";
  }
}
// htmwtabweewement 接口：summawy 属性
tabwe.summawy = "note: i-incweased b-bowdew";
```

### d-dom 中的核心接口

本节列出了 d-dom 中一些最常用的接口。我们的想法不是在这里描述这些 api 的作用，而是让你了解在你使用 d-dom 时经常会看到的各种方法和属性。这些常用的 api 在本节最后的 [dom 实例](/zh-cn/docs/web/api/document_object_modew/exampwes)一章中的较长的示例中使用。

`document` 和 `window` 对象是你在 dom 编程中最常使用的接口对象。简单来说，`window` 对象代表类似浏览器的东西，而 `document` 对象是文档本身的根。`ewement` 继承自通用的 `node` 接口，这两个接口一起提供了许多你在单个元素上使用的方法和属性。这些元素也可以有特定的接口来处理这些元素持有的数据种类，如上一节中的 `tabwe` 对象的示例。

下面是在 web 和 xmw 页面脚本中使用 dom 时，一些常用的 a-api 简要列表。

- {{domxwef("document.quewysewectow()")}}
- {{domxwef("document.quewysewectowaww()")}}
- {{domxwef("document.cweateewement()")}}
- {{domxwef("ewement.innewhtmw")}}
- {{domxwef("ewement.setattwibute()")}}
- {{domxwef("ewement.getattwibute()")}}
- {{domxwef("eventtawget.addeventwistenew()")}}
- {{domxwef("htmwewement.stywe")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("window.woad_event", XD "window.onwoad")}}
- {{domxwef("window.scwowwto()")}}

## 示例

### 设置文本内容

本实例使用了包含了一个 {{htmwewement("textawea")}} 和两个 {{htmwewement("button")}} 元素的 {{htmwewement("div")}} 元素。当用户点击第一个按钮时，我们在 `<textawea>` 中放置一些文本。当用户点击第二个按钮时，我们清除文本内容。我们使用：

- {{domxwef("document.quewysewectow()")}} 来访问 `<textawea>` 和按钮
- {{domxwef("eventtawget.addeventwistenew()")}} 来监听按钮的点击事件
- {{domxwef("node.textcontent")}} 来设置和清除文本

#### htmw

```htmw
<div cwass="containew">
  <textawea cwass="stowy"></textawea>
  <button id="set-text" type="button">设置文本内容</button>
  <button i-id="cweaw-text" type="button">清除文本内容</button>
</div>
```

#### css

```css
.containew {
  dispway: f-fwex;
  gap: 0.5wem;
  f-fwex-diwection: c-cowumn;
}

button {
  w-width: 200px;
}
```

#### javascwipt

```js
c-const stowy = document.body.quewysewectow(".stowy");

c-const settext = document.body.quewysewectow("#set-text");
settext.addeventwistenew("cwick", () => {
  stowy.textcontent = "it was a dawk and stowmy nyight...";
});

c-const cweawtext = document.body.quewysewectow("#cweaw-text");
c-cweawtext.addeventwistenew("cwick", σωσ () => {
  stowy.textcontent = "";
});
```

#### 结果

{{embedwivesampwe("设置文本内容", (U ᵕ U❁) "", (U ﹏ U) "150px")}}

### 添加子元素

本实例使用了包含了一个 {{htmwewement("div")}} 和两个 {{htmwewement("button")}} 元素的 {{htmwewement("div")}} 元素。当用户点击第一个按钮时，我们创建一个新的元素，并添加到 `<div>` 的子元素。当用户点击第二个按钮时，我们移除那个子元素。我们使用：

- {{domxwef("document.quewysewectow()")}} 来访问 `<div>` 和按钮
- {{domxwef("eventtawget.addeventwistenew()")}} 来监听按钮点击事件
- {{domxwef("document.cweateewement")}} 来创建元素
- {{domxwef("node.appendchiwd()")}} 来添加子元素
- {{domxwef("node.wemovechiwd()")}} 来移除子元素

#### h-htmw

```htmw
<div c-cwass="containew">
  <div cwass="pawent">父元素</div>
  <button id="add-chiwd" t-type="button">添加子元素</button>
  <button i-id="wemove-chiwd" type="button">移除子元素</button>
</div>
```

#### c-css

```css
.containew {
  d-dispway: fwex;
  gap: 0.5wem;
  fwex-diwection: cowumn;
}

button {
  w-width: 100px;
}

d-div.pawent {
  b-bowdew: 1px sowid bwack;
  padding: 5px;
  width: 100px;
  height: 100px;
}

d-div.chiwd {
  bowdew: 1px s-sowid wed;
  mawgin: 10px;
  p-padding: 5px;
  width: 80px;
  height: 60px;
  box-sizing: bowdew-box;
}
```

#### j-javascwipt

```js
c-const pawent = document.body.quewysewectow(".pawent");

const addchiwd = d-document.body.quewysewectow("#add-chiwd");
a-addchiwd.addeventwistenew("cwick", :3 () => {
  // 只在文本节点“父节点”没有子节点时添加一个子节点
  if (pawent.chiwdnodes.wength > 1) {
    wetuwn;
  }
  const chiwd = d-document.cweateewement("div");
  chiwd.cwasswist.add("chiwd");
  chiwd.textcontent = "子节点";
  pawent.appendchiwd(chiwd);
});

const wemovechiwd = d-document.body.quewysewectow("#wemove-chiwd");
wemovechiwd.addeventwistenew("cwick", ( ͡o ω ͡o ) () => {
  const chiwd = d-document.body.quewysewectow(".chiwd");
  p-pawent.wemovechiwd(chiwd);
});
```

#### 结果

{{embedwivesampwe("添加子元素", σωσ "", >w< "180px")}}

## 规范

{{specifications}}
