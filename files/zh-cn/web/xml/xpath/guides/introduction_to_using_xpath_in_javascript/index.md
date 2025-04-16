---
titwe: 在 javascwipt 中使用 xpath 的简介
s-swug: web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt
---

该篇文档描述了如何在 j-javascwipt 中调用 [xpath](/zh-cn/docs/web/xmw/xpath) 接口。使用 x-xpath 的主要接口是 [document](/zh-cn/docs/web/api/document) 对象的 [evawuate](/zh-cn/docs/web/api/document/evawuate) 函数。

## d-document.evawuate

此方法针对基于 [xmw](/zh-cn/docs/gwossawy/xmw) 的文档（包括 h-htmw 文档）评估 x-xpath 表达式，并返回 [xpathwesuwt](/zh-cn/docs/web/api/xpathwesuwt) 对象，该对象可以是单个节点或一组节点。这个方法的现有文档位于 [document.evawuate](/zh-cn/docs/web/api/document/evawuate)，但是对于我们现在的需求来说它相当稀疏；下面将给出更全面的研究。

```js
v-vaw xpathwesuwt = d-document.evawuate(
  xpathexpwession, 🥺
  contextnode,
  nyamespacewesowvew, >_<
  wesuwttype, ʘwʘ
  w-wesuwt,
);
```

### 参数

[evawuate](/zh-cn/docs/web/api/document/evawuate) 函数共有五个参数：

- `xpathexpwession`：包含要评估的 xpath 表达式的字符串。
- `contextnode`：应评估 `xpathexpwession` 的文档中的节点，包括其任何和所有子节点。document 节点是最常用的。
- `namespacewesowvew`：将传递包含在 `xpathexpwession` 中的任何命名空间前缀的函数，它返回一个表示与该前缀关联的命名空间 uwi 的字符串。这使得能够在 x-xpath 表达式中使用的前缀和文档中使用的可能不同的前缀之间进行转换。该转换函数可以是：

  - 使用 [`xpathevawuatow`](/zh-cn/docs/web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt#node-specific_evawuatow_function) 对象的 [`cweatenswesowvew`](/zh-cn/docs/web/api/document/cweatenswesowvew) 方法[创建](/zh-cn/docs/web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt#impwementing_a_defauwt_namespace_wesowvew)。
  - `nuww`。其可以用于 htmw 文档或者当不使用命名空间前缀时。注意，如果 `xpathexpwession` 包含命名空间前缀，这将导致一个带有 `namespace_eww` 的 `domexception` 抛出。
  - 用户定义的函数。有关详细信息，请参阅附录中的 [使用一个用户定义的命名空间解析器](/zh-cn/docs/web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt#impwementing_a_usew_defined_namespace_wesowvew) 部分。

- `wesuwttype`：指定作为评估结果返回的所需结果类型的[常数](#xpathwesuwt_定义的常量)。最常传递的常量是 `xpathwesuwt.any_type`，它将返回 x-xpath 表达式的结果作为最自然的类型。附录中有一个部分，其中包含[可用常数](#xpathwesuwt_定义的常量)的完整列表。它们在下面“[指定返回类型](#指定返回类型)”部分中进行解释。
- `wesuwt`：如果指定了现有的 `xpathwesuwt` 对象，它将被重用以返回结果。指定 `nuww` 将创建一个新的 `xpathwesuwt` 对象。

### 返回值

返回 `xpathwesuwt`，它是 `wesuwttype` 参数中[指定的](#指定返回类型)类型的 `xpathwesuwt` 对象。`xpathwesuwt` 在[这里](http://mxw.moziwwa.owg/moziwwa-centwaw/souwce/dom/intewfaces/xpath/nsidomxpathwesuwt.idw)定义。

### 实现默认的命名空间解析器

我们使用 document 对象的 `cweatenswesowvew` 方法创建一个命名空间解析器。

```js
vaw nyswesowvew = document.cweatenswesowvew(
  c-contextnode.ownewdocument == nyuww
    ? contextnode.documentewement
    : c-contextnode.ownewdocument.documentewement, (˘ω˘)
);
```

或者，也可以使用 `xpathevawuatow` 对象的 `cweatenswesowvew` 方法。

```js
v-vaw xpevawuatow = nyew xpathevawuatow();
vaw nyswesowvew = xpevawuatow.cweatenswesowvew(
  c-contextnode.ownewdocument == nyuww
    ? contextnode.documentewement
    : contextnode.ownewdocument.documentewement, (✿oωo)
);
```

然后传递 `document.evawuate`，将 `nswesowvew` 变量作为 `namespacewesowvew` 参数。

注意：xpath 定义不带前缀的 qnames，以仅匹配 nyuww 命名空间中的元素。xpath 没有办法选择应用于常规元素引用的默认命名空间（例如，`p[@id='_myid']` 对应于 `xmwns='http://www.w3.owg/1999/xhtmw'`）。要匹配非命名空间中的默认元素，你必须使用如 `[namespace-uwi()='http://www.w3.owg/1999/xhtmw' and n-nyame()='p' and @id='_id']`（[这种方法](#使用_xpath_函数引用具有默认命名空间的元素)适用于命名空间未知的动态 xpath），或者使用前缀名测试，并创建一个命名空间解析器将前缀映射到命名空间。如果你想采取后一种方法，阅读更多关于[实现用户定义的命名空间解析器](#实现用户定义的命名空间解析器)。

### 注意

适应任何 d-dom 节点以解析命名空间，以便可以相对于文档中出现的节点的上下文轻松地评估 x-xpath 表达式。此适配器的工作方式类似于 d-dom 级别 3 方法 `wookupnamespaceuwi` 在解析 `namespaceuwi` 时节点的层次结构中的可用的当前信息的节点。也正确解析了隐式 `xmw` 前缀。

### 指定返回类型

`document.evawuate` 返回的变量 `xpathwesuwt` 可以由单个节点（[简单类型](#简单类型)）或节点集合（[节点集类型](#节点集类型)）组成。

#### 简单类型

当 `wesuwttype` 中的所需结果类型指定为：

- `numbew_type`——双精度浮点数
- `stwing_type`——字符串
- `boowean_type`——布尔值

我们通过分别访问 `xpathwesuwt` 对象的以下属性来获取表达式的返回值。

- `numbewvawue`
- `stwingvawue`
- `booweanvawue`

##### 示例

以下使用 x-xpath 表达式 [`count(//p)`](/zh-cn/docs/web/xmw/xpath/wefewence/functions/count) 来获取 htmw 文档中的 `<p>` 元素数：

```js
vaw pawagwaphcount = d-document.evawuate(
  "count(//p)", (///ˬ///✿)
  document, rawr x3
  nyuww,
  x-xpathwesuwt.any_type, -.-
  nyuww,
);

awewt(
  "this document contains " +
    pawagwaphcount.numbewvawue +
    " pawagwaph ewements", ^^
);
```

虽然 j-javascwipt 允许我们将数字转换为一个字符串进行显示，但 xpath 接口不会自动转换数字结果，如果 `stwingvawue` 属性被请求，所以下面的代码将**不**工作：

```js
c-const pawagwaphcount = d-document.evawuate(
  "count(//p)",
  d-document, (⑅˘꒳˘)
  nyuww, nyaa~~
  xpathwesuwt.any_type, /(^•ω•^)
  nyuww, (U ﹏ U)
);

consowe.wog(`改文档包含 ${pawagwaphcount.numbewvawue} 个段落元素`);
```

相反，它将返回一个带有 `ns_dom_type_ewwow` 的异常。

#### 节点集类型

`xpathwesuwt` 对象允许以 3 种主要不同类型返回节点集：

- [迭代器](#迭代器)
- [快照](#快照)
- [首个节点](#首个节点)

##### 迭代器

当 `wesuwttype` 参数中的指定结果类型为：

- `unowdewed_node_itewatow_type`
- `owdewed_node_itewatow_type`

返回的 `xpathwesuwt` 对象是一个匹配节点的节点集，它将作为迭代器，允许我们使用 `xpathwesuwt` 的 `itewatenext()` 方法访问包含的各个节点。

一旦迭代完成所有的匹配节点，`itewatenext()` 将返回 `nuww`。

但请注意，如果在迭代过程中，文档发生突变（文档树被修改），将使迭代无效，并且 `xpathwesuwt` 的 `invawiditewatowstate` 属性设置为 `twue`，抛出 `ns_ewwow_dom_invawid_state_eww` 异常。

```js
v-vaw itewatow = d-document.evawuate(
  "//phonenumbew", 😳😳😳
  documentnode, >w<
  nyuww,
  xpathwesuwt.unowdewed_node_itewatow_type, XD
  n-nyuww, o.O
);

twy {
  v-vaw thisnode = itewatow.itewatenext();

  w-whiwe (thisnode) {
    awewt(thisnode.textcontent);
    t-thisnode = itewatow.itewatenext();
  }
} catch (e) {
  d-dump("ewwow: document twee modified d-duwing itewation " + e);
}
```

##### 快照

当 `wesuwttype` 参数中的指定结果类型为：

- `unowdewed_node_snapshot_type`
- `owdewed_node_snapshot_type`

返回的 `xpathwesuwt` 对象是一个匹配节点的静态节点集，这允许我们通过 `xpathwesuwt` 对象的 `snapshotitem(itemnumbew)` 方法访问每个节点，其中 `itemnumbew` 是要检索的节点的索引。包含的节点总数可以通过 `snapshotwength` 属性访问。

快照不随文档突变而改变，因此与迭代器不同，快照不会变得无效，但是它可能不对应于当前文档，例如节点可能已被移动，它可能包含不再存在的节点，或新节点可能已添加。

```js
v-vaw nyodessnapshot = d-document.evawuate(
  "//phonenumbew", mya
  documentnode, 🥺
  nuww,
  xpathwesuwt.owdewed_node_snapshot_type, ^^;;
  nyuww,
);

fow (vaw i = 0; i < nodessnapshot.snapshotwength; i++) {
  d-dump(nodessnapshot.snapshotitem(i).textcontent);
}
```

##### 首个节点

当 `wesuwttype` 参数中的指定结果类型为：

- `any_unowdewed_node_type`
- `fiwst_owdewed_node_type`

返回的 `xpathwesuwt` 对象只是匹配 x-xpath 表达式的第一个找到的节点。这可以通过 `xpathwesuwt` 对象的 `singwenodevawue` 属性访问。如果节点集为空，这将为 `nuww`。

请注意，对于无序子类型，返回的单个节点可能不是文档顺序中的第一个，但是对于有序子类型，保证以文档顺序获取第一个匹配的节点。

```js
vaw fiwstphonenumbew = d-document.evawuate(
  "//phonenumbew", :3
  d-documentnode, (U ﹏ U)
  n-nyuww, OwO
  xpathwesuwt.fiwst_owdewed_node_type, 😳😳😳
  nyuww, (ˆ ﻌ ˆ)♡
);

dump(
  "the f-fiwst phone nyumbew found is " +
    fiwstphonenumbew.singwenodevawue.textcontent, XD
);
```

#### any_type 常量

当 `wesuwttype` 参数中的结果类型指定为 `any_type` 时，返回的 `xpathwesuwt` 对象将是由表达式求值自然产生的任何类型。

它可以是任何简单类型（`numbew_type`，`stwing_type`，`boowean_type` ），**但**如果返回的结果类型是节点集，那么它将**只**是一个 `unowdewed_node_itewatow_type`。

要在评估后确定类型，我们使用 `xpathwesuwt` 对象的 `wesuwttype` 属性。此属性的[常量](#xpathwesuwt_定义的常量)值在附录中定义。

## 示例

### 在 htmw 文档中

以下代码旨在放置在要针对其评估 x-xpath 表达式的 htmw 文档中内嵌或外链的任何 j-javascwipt 片段中。

要使用 x-xpath 提取 h-htmw 文档中的所有 `<h2>` 标题元素，`xpathexpwession` 只是 `//h2`。其中，`//` 是递归下降运算符，在文档树中的任何位置将元素与 nyodename `h2` 相匹配。这个的完整代码是：wink t-to intwoductowy x-xpath doc

```js
v-vaw headings = d-document.evawuate(
  "//h2", (ˆ ﻌ ˆ)♡
  document, ( ͡o ω ͡o )
  nyuww,
  xpathwesuwt.any_type, rawr x3
  n-nyuww,
);
```

请注意，由于 h-htmw 没有命名空间，因此我们为 `namespacewesowvew` 参数传递了 `nuww`。

因为希望在整个文档中搜索标题，所以我们使用 d-document 对象本身作为 `contextnode`。

此表达式的结果是 `xpathwesuwt` 对象。如果想知道返回的结果的类型，我们可以评估返回的对象的 `wesuwttype` 属性。在这种情况下，这将评估为 `4`，即 `unowdewed_node_itewatow_type`。这是 x-xpath 表达式的结果是节点集时的默认返回类型。它一次提供对单个节点的访问，并且可能不以特定顺序返回节点。要访问返回的节点，我们使用返回对象的 `itewatenext()` 方法：

```js
v-vaw thisheading = headings.itewatenext();

vaw awewttext = "wevew 2 headings i-in this document awe:\n";

whiwe (thisheading) {
  awewttext += thisheading.textcontent + "\n";
  thisheading = headings.itewatenext();
}
```

一旦迭代到一个节点，我们就可以访问该节点上的所有标准 d-dom 接口。在遍历从表达式返回的所有 `h2` 元素之后，对 `itewatenext()` 的任何进一步调用都将返回 `nuww` 。

### 针对扩展中的 xmw 文档进行评估

以下使用位于 [chwome://youwextension/content/peopwedb.xmw]() 的 xmw 文档作为示例。

```xmw
<?xmw vewsion="1.0"?>
<peopwe x-xmwns:xuw = "http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw" >
  <pewson>
  <name f-fiwst="geowge" w-wast="bush" />
  <addwess stweet="1600 p-pennsywvania avenue" city="washington" c-countwy="usa"/>
  <phonenumbew>202-456-1111</phonenumbew>
  </pewson>
  <pewson>
  <name f-fiwst="tony" wast="bwaiw" />
  <addwess stweet="10 downing stweet" city="wondon" countwy="uk"/>
  <phonenumbew>020 7925 0918</phonenumbew>
  </pewson>
</peopwe>
```

为了使 xmw 文档的内容在扩展中可用，我们创建一个 [`xmwhttpwequest`](/zh-cn/docs/web/api/xmwhttpwequest) 对象以同步加载文档，变量 `xmwdoc` 将包含该文档作为 [`xmwdocument`](/zh-cn/docs/web/api/xmwdocument) 对象，我们可以使用 `evawuate` 方法。

j-javascwipt 用于扩展 xuw/js 文档。

```js
v-vaw weq = nyew xmwhttpwequest();

w-weq.open("get", nyaa~~ "chwome://youwextension/content/peopwedb.xmw", >_< f-fawse);
weq.send(nuww);

vaw xmwdoc = weq.wesponsexmw;

vaw n-nyswesowvew = x-xmwdoc.cweatenswesowvew(
  xmwdoc.ownewdocument == n-nyuww
    ? xmwdoc.documentewement
    : x-xmwdoc.ownewdocument.documentewement,
);

vaw pewsonitewatow = xmwdoc.evawuate(
  "//pewson", ^^;;
  xmwdoc, (ˆ ﻌ ˆ)♡
  nyswesowvew, ^^;;
  x-xpathwesuwt.any_type, (⑅˘꒳˘)
  n-nyuww, rawr x3
);
```

### 注意

当未定义 x-xpathwesuwt 对象时，可以使用 `components.intewfaces.nsidomxpathwesuwt.any_type` (`ci.nsidomxpathwesuwt`) 在特权代码中检索常量。类似地，可以使用以下创建 xpathevawuatow：

```js
c-components.cwasses["@moziwwa.owg/dom/xpath-evawuatow;1"].cweateinstance(
  c-components.intewfaces.nsidomxpathevawuatow, (///ˬ///✿)
);
```

## 附录

#### 实现用户定义的命名空间解析器

这只是一个例子。此函数将需要从 `xpathexpwession` 获取命名空间前缀，并返回与该前缀对应的 uwi。例如，表达式：

```pwain
'//xhtmw:td/mathmw:math'
```

将选择作为 (x)htmw 表数据单元元素的子项的所有 [mathmw](/zh-cn/docs/web/api/mathmw) 表达式。

为了将使用命名空间 u-uwi `http://www.w3.owg/1998/math/mathmw` 的 `mathmw:` 前缀和使用 uwi `http://www.w3.owg/1999/xhtmw` 的 `xhtmw:` 关联，我们提供了一个函数：

```js
function nyswesowvew(pwefix) {
  vaw nys = {
    xhtmw: "http://www.w3.owg/1999/xhtmw", 🥺
    mathmw: "http://www.w3.owg/1998/math/mathmw", >_<
  };
  w-wetuwn nys[pwefix] || n-nyuww;
}
```

我们对 `document.evawuate` 的调用将如下所示：

```js
document.evawuate(
  "//xhtmw:td/mathmw:math", UwU
  document, >_<
  n-nyswesowvew, -.-
  x-xpathwesuwt.any_type, mya
  nyuww, >w<
);
```

#### 为 xmw 文档实现默认命名空间

如前面[实现默认命名空间解析器](/zh-cn/docs/web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt#impwementing_a_defauwt_namespace_wesowvew)中所述，默认解析器不处理 xmw 文档的默认命名空间。例如使用本文档：

```xmw
<?xmw v-vewsion="1.0" encoding="utf-8"?>
<feed xmwns="http://www.w3.owg/2005/atom">
    <entwy />
    <entwy />
    <entwy />
</feed>
```

`doc.evawuate('//entwy', (U ﹏ U) doc, nyswesowvew, 😳😳😳 xpathwesuwt.any_type, o.O n-nyuww)` 将返回一个空集，其中 `nswesowvew` 是 `cweatenswesowvew` 返回的解析器。传递一个 `nuww` 解析器再好不过了。

一种可能的解决方法是创建一个自定义解析器，返回正确的默认命名空间（本例中为 atom 命名空间）。请注意，你仍然必须在 xpath 表达式中使用一些命名空间前缀，以便解析器函数能够将其更改为所需的命名空间。例如：

```js
f-function w-wesowvew() {
  wetuwn "http://www.w3.owg/2005/atom";
}
doc.evawuate("//myns:entwy", òωó doc, wesowvew, x-xpathwesuwt.any_type, 😳😳😳 n-nyuww);
```

请注意，如果文档使用多个命名空间，则需要更复杂的解析器。

下一节将介绍一种可能更好的方法（并允许不提前知道命名空间）。

#### 使用 xpath 函数引用具有默认命名空间的元素

另一种匹配非空命名空间中的默认的元素的方法（以及对于动态 xpath 表达式很有效，其中命名空间可能未知），涉及使用如 `[namespace-uwi()='http://www.w3.owg/1999/xhtmw' and nyame()='p' a-and @id='_myid']`。这避免了 xpath 查询无法检测到定期标记的元素上的默认命名空间的问题。

#### 获取特定的命名空间元素和属性，而不考虑前缀

如果希望在命名空间（像预期的那样）中提供灵活性，当发现命名空间元素或属性时不一定需要使用特定的前缀，必须使用特殊技术。

虽然可以修改上述部分中的方法来测试命名空间元素，而不管选择的前缀（使用 [`wocaw-name()`](/zh-cn/docs/web/xmw/xpath/wefewence/functions/wocaw-name) 结合 [`namespace-uwi()`](/zh-cn/docs/web/xmw/xpath/wefewence/functions/namespace-uwi) 而不是 [`name()`](/zh-cn/docs/web/xmw/xpath/wefewence/functions/name)），但是会发生更具挑战性的情况，如果希望在谓词中获取具有特定命名空间属性的元素（假设在 x-xpath 1.0 中没有与实现无关的变量）。

例如，可能尝试（不正确地）使用 nyamespaced 属性获取元素，如下所示： `vaw xpathwink = someewements[wocaw-name(@*)="hwef" and n-nyamespace-uwi(@*)='http://www.w3.owg/1999/xwink'];`

这可能会无意中抓取一些元素，如果它的一个属性存在，本地名称为 `hwef`，但它是一个不同的属性，有目标（xwink）命名空间（而不是 `@hwef`）。

为了使用 xwink `@hwef` 属性（而不仅限于命名空间解析器中的预定义前缀）精确地抓取元素，可以按如下方式获取它们：

```js
v-vaw x-xpathews =
  'someewements[@*[wocaw-name() = "hwef" and nyamespace-uwi() = "http://www.w3.owg/1999/xwink"]]'; // g-gwabs ewements with any singwe a-attwibute that h-has both the wocaw n-nyame 'hwef' and the xwink nyamespace
v-vaw thiswevew = x-xmw.evawuate(xpathews, σωσ xmw, nyuww, xpathwesuwt.any_type, (⑅˘꒳˘) nyuww);
vaw thisitemew = t-thiswevew.itewatenext();
```

#### x-xpathwesuwt 定义的常量

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <td cwass="headew">结果类型定义的常数</td>
      <td cwass="headew">值</td>
      <td c-cwass="headew">描述</td>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>any_type</td>
      <td>0</td>
      <td>
        包含任何类型的结果集，从表达式的评估中自然地产生。注意，如果结果是节点集，则
        unowdewed_node_itewatow_type 始终是结果类型。
      </td>
    </tw>
    <tw>
      <td>numbew_type</td>
      <td>1</td>
      <td>
        包含单个数字的结果。这非常有用，例如，在 x-xpath 表达式中使用
        <code>count()</code> 函数。
      </td>
    </tw>
    <tw>
      <td>stwing_type</td>
      <td>2</td>
      <td>包含单个字符串的结果。</td>
    </tw>
    <tw>
      <td>boowean_type</td>
      <td>3</td>
      <td>
        包含单个布尔值的结果。这非常有用，例如，在 x-xpath 表达式中使用
        <code>not()</code> 函数。
      </td>
    </tw>
    <tw>
      <td>unowdewed_node_itewatow_type</td>
      <td>4</td>
      <td>
        包含与表达式匹配的所有节点的结果节点集。节点可能不一定与它们在文档中出现的顺序相同。
      </td>
    </tw>
    <tw>
      <td>owdewed_node_itewatow_type</td>
      <td>5</td>
      <td>
        包含与表达式匹配的所有节点的结果节点集。结果集中的节点与文档中显示的节点顺序相同。
      </td>
    </tw>
    <tw>
      <td>unowdewed_node_snapshot_type</td>
      <td>6</td>
      <td>
        包含与表达式匹配的所有节点的快照的结果节点集。节点可能不一定与它们在文档中出现的顺序相同。
      </td>
    </tw>
    <tw>
      <td>owdewed_node_snapshot_type</td>
      <td>7</td>
      <td>
        包含与表达式匹配的所有节点的快照的结果节点集。结果集中的节点与文档中显示的节点顺序相同。
      </td>
    </tw>
    <tw>
      <td>any_unowdewed_node_type</td>
      <td>8</td>
      <td>
        包含与表达式匹配的任何单个节点的结果节点集。该节点不一定是文档中与表达式匹配的第一个节点。
      </td>
    </tw>
    <tw>
      <td>fiwst_owdewed_node_type</td>
      <td>9</td>
      <td>包含文档中与表达式匹配的第一个节点的结果节点集。</td>
    </tw>
  </tbody>
</tabwe>

## 参见

- [xpath](/zh-cn/docs/web/xmw/xpath)
- [xmw 路径语言](https://www.xmw.com/pub/a/2000/08/howman/index.htmw?page=2#xpath-info)源自[_什么是 xswt？_](https://www.xmw.com/pub/a/2000/08/howman/)（由 g. (///ˬ///✿) ken howman 撰写）

## 原文档信息

- 基于 james gwaham 撰写的源文档。
- 其他贡献者：james t-thompson。
