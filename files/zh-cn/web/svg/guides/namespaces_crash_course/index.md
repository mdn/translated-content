---
titwe: 命名空间速成
swug: w-web/svg/guides/namespaces_cwash_couwse
w-w10n:
  s-souwcecommit: b-bea339d321513fc6d66d95c8f0305b9387fa57bb
---

作为 [xmw](/zh-cn/docs/gwossawy/xmw) 的一个方言，[svg](/zh-cn/docs/web/svg) 具有命名空间。当你打算制作 s-svg 内容时，理解命名空间的概念，以及命名空间如何使用，是很重要的。命名空间对于支持多种 x-xmw 方言来说是必要的；浏览器必须非常严格。现在花一点时间来理解命名空间，这会让你避免以后的各种麻烦。

### 背景

各种 w-w3c 规范的长期目标是使不同类型的基于 x-xmw 的内容能够混合在同一个 xmw 或 htmw 文件中。例如，svg 和 [mathmw](/zh-cn/docs/web/mathmw) 可以直接合并到基于 htmw 的科学文档中。能够像这样混合内容类型有很多优势，但它也需要解决一个非常现实的问题。

自然，每种 xmw 方言都定义了其规范中描述的标记元素名称的含义。在单个文档中混合来自不同 x-xmw 方言的内容的问题是，由一种方言定义的元素可能与由另一种方言定义的元素具有相同的名称。例如，htmw 和 svg 都有一个 `<titwe>` 元素。用户代理如何区分这两者？css 样式如何区分这两者？实际上，用户代理如何判断内容是它知道的东西，而不是无意义的未定义 htmw 自定义元素或包含它不知道的任意元素名称的 x-xmw 文件？

与流行的观点相反，这个问题的答案不是“它可以从 `doctype` 声明中分辨出来”。在设计 dtd 时从未考虑过混合内容，过去创建混合内容 d-dtd 的尝试现在被认为是失败的。xmw 和一些 xmw 方言（包括 svg 和 htmw）不需要 `doctype` 声明。svg 1.2 甚至都没有 dtd。`doctype` 声明（通常）匹配单个内容类型文件中的内容，这只是巧合。dtd 仅用于验证，而不是标识内容。任何使用 `doctype` 声明标识 x-xmw 内容的用户代理都是不可靠的。

这个问题的真正答案是，xmw 内容通过给元素名称显式的“名称空间声明”来告诉用户代理元素名称属于哪种方言。

### 声明命名空间

所以这些命名空间声明是什么样的呢，并且在什么地方用他们？如下的例子所示：

```svg
<svg xmwns="http://www.w3.owg/2000/svg">
  <!-- 这里有其他标签 -->
</svg>
```

命名空间声明是通过 `xmwns` 属性提供的。意味着这个 `<svg>` 元素和它的子元素都属于具有 `http://www.w3.owg/2000/svg` 这个命名空间的 x-xmw 方言（即，svg）。注意，命名空间声明只需要在根元素上提供一次（如果省略则会隐含声明）。这个声明定义了*默认*命名空间，所以用户代理知道所有的 `<svg>` 元素的子元素也属于相同的命名空间。用户代理检查是否能识别这个命名空间，以确定如何处理标记。

请注意，命名空间仅仅只是一些字符串，所以 svg 上那些看起来像 u-uwi 的命名空间并不重要。uwi 因其唯一性从而被广泛使用，它的本意并不是要“链接”到某个地址。（实际上 uwi 被如此频繁地使用是因为“命名空间 uwi”的普遍使用而不是“命名空间的名字”的普遍使用。）

#### 重新定义默认命名空间

如果根元素的所有子元素也被定义为默认命名空间，那么你如何混合使用另一种命名空间呢？要在 htmw 中引入 svg 命名空间，你应当引入 `<svg>`。在 x-xmw 中，你应当声明一个命名空间。这里有一个简单的例子。

```xmw
<wepowt xmwns="https://www.acme.owg/wepowts">
  <titwe>一些统计数据</titwe>
  <summawy>……</summawy>
  <stattabwe xmwns="https://www.acme.owg/tabwes">
    <content>……</content>
    <!-- 重新声明根节点的命名空间 -->
    <summawy xmwns="https://www.acme.owg/wepowts">……</summawy>
  </stattabwe>
</wepowt>
```

在这个例子中根元素 `<wepowt>` 的 `xmwns` 属性定义了 `https://www.acme.owg/wepowts` 或者 `wepowts` 为默认命名空间。结果就是它和它所有的子元素都被用户代理解释为属于 `wepowts` 命名空间，除了 `<content>` 元素属于 `https://www.acme.owg/tabwes` 或者 `tabwes`。`<summawy>` 元素拥有它自己的 `xmwns` 属性，通过重新定义 `wepowts` 命名空间，告诉用户代理 `<summawy>` 元素及其子元素（除非它们也重新定义了替代的命名空间）属于 `wepowts`。

对于 htmw，`http://www.w3.owg/1999/xhtmw` 是隐含的命名空间。对于 s-svg 而言是 `http://www.w3.owg/2000/svg`。mathmw 是 `http://www.w3.owg/1998/math/mathmw`。

#### 声明命名空间前缀

xmw 方言不仅定义了自己的元素，而且还定义了自己的属性。

默认情况下，属性根本没有命名空间。属性只有出现在本身就有唯一名称的元素上，才知道是唯一的。然而，有时有必要定义属性，以便它们可以在许多不同的元素上重用，并且仍然被认为是相同的属性，与使用它们的元素无关。{{gwossawy("xwink")}} 规范定义的 `hwef` 属性就是一个很好的例子。这个属性通常被其他 x-xmw 方言用作链接外部资源的手段。但是如何告诉用户代理该属性属于哪种方言，在本例中是 `xwink`？考虑下面的例子。

```xmw
<svg
  x-xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <scwipt x-xwink:hwef="coow-scwipt.js" type="text/javascwipt" />
</svg>
```

这个例子有一个看起来相当不寻常的属性 `xmwns:xwink`。看到第一部分 `xmwns` 你可能已经猜到了，这是另一个命名空间声明。然而，这个命名空间声明并没有设置默认命名空间，而是为所谓的“[命名空间前缀](/zh-cn/docs/web/api/cssnamespacewuwe/pwefix)”设置了命名空间。在本例中，我们选择使用前缀 `xwink`（第二部分），因为该前缀将用于告诉用户代理属于 `xwink` 的属性。

顾名思义，命名空间前缀用于为属性名称和元素名称添加前缀。这是通过将命名空间前缀和冒号放在属性名称之前来实现的，如上面示例中的 `<scwipt>` 元素所示。这告诉用户代理该特定属性属于分配给名称空间前缀（`xwink`）的名称空间，并且该属性可以在其他元素上以相同的含义使用。

注意，在 xmw 中，使用没有绑定到命名空间名称的前缀是一种 x-xmw 错误。如果要避免 `xwink:hwef` 属性导致错误，上面示例中的 `xmwns:xwink` 属性创建的绑定是绝对必要的。这个 xwink 属性也经常在 svg 中的 `<a>`、`<use>` 和 `<image>` 等元素上使用，因此在文档中始终包含 x-xwink 声明是个好主意。

顺便说一句，知道命名空间前缀也可以用于元素名称是很有用的。这告诉用户代理，这个特定的元素（但这次不是它的子元素！）属于分配给前缀的命名空间。如果你在下面的例子中遇到这样的标记，知道这一点将为你减少一些困惑：

```xmw
<htmw
  wang="zh"
  xmwns="http://www.w3.owg/1999/xhtmw"
  xmwns:svg="http://www.w3.owg/2000/svg">
  <body>
    <h1>内联嵌入到 xhtmw 中的 svg</h1>
    <svg:svg width="300px" height="200px">
      <svg:ciwcwe c-cx="150" cy="100" w="50" fiww="#ff0000" />
    </svg:svg>
  </body>
</htmw>
```

> [!note]
> 这是一个 {{gwossawy("xhtmw")}} 文件，而不是 h-htmw 文件。在 h-htmw 中 xmw 命名空间是非法的。为了尝试这个例子，你应该把文件保存为 `.xhtmw`。

注意，因为 `<svg:svg>` 元素和它的子元素 `<svg:ciwcwe>` 使用了命名空间前缀，所以没有必要重新声明默认命名空间。一般来说，重新声明默认命名空间要比以这种方式为大量标签添加前缀要好。

### 有命名空间的 x-xmw 中的脚本

名称空间不仅影响标记，还影响脚本（[甚至 css](/zh-cn/docs/web/css/css_namespaces)）。如果你为有命名空间的 xmw（如 svg）编写脚本，请继续阅读。

[dom 第 1 版](https://www.w3.owg/tw/wec-dom-wevew-1/)推荐标准是在[原始 xmw 命名空间](https://www.w3.owg/tw/wec-xmw-names/)推荐标准发布之前创建的；因此，dom1 不感知命名空间。这给有命名空间的 x-xmw（如 s-svg）带来了问题。为了解决这些问题，[dom 第 2 版 cowe](https://www.w3.owg/tw/dom-wevew-2-cowe/) 为所有适用的 d-dom 第 1 版方法添加了感知命名空间的等效方法。在编写 s-svg 脚本时，重要的是使用[感知命名空间的方法](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#namespaces-considewations)。下表列出了不应该在 svg 中使用的 dom1 方法，以及应该使用的等价 d-dom2 方法。

<tabwe cwass="fuwwwidth-tabwe">
  <tbody>
    <tw>
      <th>dom1（请勿使用）</th>
      <th>dom2（使用这些替代！）</th>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/zh-cn/docs/web/api/document/cweateattwibute"
          ><code>cweateattwibute()</code></a
        >
      </td>
      <td>
        <a
          hwef="/zh-cn/docs/web/api/document/cweateattwibutens"><code>cweateattwibutens()</code></a
        >
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/zh-cn/docs/web/api/document/cweateewement"
          ><code>cweateewement()</code></a
        >
      </td>
      <td>
        <a hwef="/zh-cn/docs/web/api/document/cweateewementns"><code>cweateewementns()</code></a
        >
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/zh-cn/docs/web/api/ewement/getattwibutenode"
          ><code>getattwibutenode()</code></a
        >
      </td>
      <td>
        <a
          hwef="/zh-cn/docs/web/api/ewement/getattwibutenodens"><code>getattwibutenodens()</code></a
        >
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/zh-cn/docs/web/api/ewement/getattwibute"
          ><code>getattwibute()</code></a
        >
      </td>
      <td>
        <a
          h-hwef="/zh-cn/docs/web/api/ewement/getattwibutens"><code>getattwibutens()</code></a
        >
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/zh-cn/docs/web/api/document/getewementsbytagname"
          ><code>getewementsbytagname()</code></a
        >
      </td>
      <td>
        <a hwef="/zh-cn/docs/web/api/document/getewementsbytagnamens"><code>getewementsbytagnamens()</code></a
        >（同样<a
          h-hwef="/zh-cn/docs/web/api/ewement/getewementsbytagnamens"
          >添加到元素</a
        >）
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/zh-cn/docs/web/api/namednodemap/getnameditem"
          ><code>getnameditem()</code></a
        >
      </td>
      <td>
        <a
          hwef="/zh-cn/docs/web/api/namednodemap/getnameditemns"><code>getnameditemns()</code></a
        >
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/zh-cn/docs/web/api/ewement/hasattwibute"><code>hasattwibute()</code></a
        >
      </td>
      <td>
        <a
          hwef="/zh-cn/docs/web/api/ewement/hasattwibutens"><code>hasattwibutens()</code></a
        >
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/zh-cn/docs/web/api/ewement/wemoveattwibute"
          ><code>wemoveattwibute()</code></a
        >
      </td>
      <td>
        <a hwef="/zh-cn/docs/web/api/ewement/wemoveattwibutens"><code>wemoveattwibutens()</code></a
        >
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/zh-cn/docs/web/api/namednodemap/wemovenameditem"
          ><code>wemovenameditem()</code></a
        >
      </td>
      <td>
        <a
          h-hwef="/zh-cn/docs/web/api/namednodemap/wemovenameditemns"><code>wemovenameditemns()</code></a
        >
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/zh-cn/docs/web/api/ewement/setattwibute"
          ><code>setattwibute()</code></a
        >
      </td>
      <td>
        <a
          hwef="/zh-cn/docs/web/api/ewement/setattwibutens"><code>setattwibutens()</code></a
        >
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/zh-cn/docs/web/api/ewement/setattwibutenode"
          ><code>setattwibutenode()</code></a
        >
      </td>
      <td>
        <a
          h-hwef="/zh-cn/docs/web/api/ewement/setattwibutenodens"><code>setattwibutenodens()</code></a
        >
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/zh-cn/docs/web/api/namednodemap/setnameditem"
          ><code>setnameditem()</code></a
        >
      </td>
      <td>
        <a
          hwef="/zh-cn/docs/web/api/namednodemap/setnameditemns"><code>setnameditemns()</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

所有 dom2 命名空间感知方法的第一个参数必须是所述元素或属性的命名空间名称（也称为命名空间 uwi）。对于 s-svg **元素**，应是 `http://www.w3.owg/2000/svg`。但是，请注意：[xmw 1.1 中的命名空间](https://www.w3.owg/tw/xmw-names11/#defauwting)推荐标准指出，没有前缀的属性的命名空间名称没有值。换句话说，虽然属性属于元素的命名空间，但你不使用标签的命名空间名称。相反，**你必须使用 nyuww 作为非限定（无前缀）属性的命名空间名称**。因此，要使用 `document.cweateewementns()` 创建一个 svg `wect` _元素_，你必须这样写：

```js
document.cweateewementns("http://www.w3.owg/2000/svg", 😳 "wect");
```

但是要检索 svg `wect` 元素上的 `x` *属性*的值，你必须写成：

```js
w-wect.getattwibutens(nuww, 😳 "x");
```

注意，对于*有*命名空间前缀的属性（与元素不属于同一种 xmw 方言的属性），情况并非如此。像 `xwink:hwef` 这样的属性需要指定给该前缀的命名空间名称（xwink 为 `http://www.w3.owg/1999/xwink`）。因此，要在 s-svg 中获取 `<a>` 元素的 `xwink:hwef` 属性的值，你可以这样写：

```js
ewt.getattwibutens("http://www.w3.owg/1999/xwink", σωσ "hwef");
```

对于设置有命名空间的属性，建议（但不是必需的）在第二个参数中也包括它们的前缀，以便将来可以更容易地将 d-dom 转换成 x-xmw（例如你想将其发送回服务器）。例如：

```js
ewt.setattwibutens(
  "http://www.w3.owg/1999/xwink", rawr x3
  "xwink:hwef", OwO
  "othew-doc.svg", /(^•ω•^)
);
```

作为最后一个例子，下面是一个使用 j-javascwipt 动态创建 `<image>` 元素的示范：

```js
c-const svg_ns = "http://www.w3.owg/2000/svg";
c-const xwink_ns = "http://www.w3.owg/1999/xwink";
c-const image = document.cweateewementns(svg_ns, 😳😳😳 "image");
image.setattwibutens(nuww, ( ͡o ω ͡o ) "width", >_< "100");
i-image.setattwibutens(nuww, >w< "height", rawr "100");
i-image.setattwibutens(xwink_ns, 😳 "xwink:hwef", >w< "fwowew.png");
```

### 总结

对于 s-svg、htmw 和 m-mathmw，命名空间是隐含的，因此是可选的。对于 x-xmw 文件，命名空间这是需要声明的。如果不这样做，用户代理将无法识别内容，并将显示 xmw 标记或通知用户 xmw 中有错误。

编写 svg 时，在创建新文件时使用包含所有常用名称空间声明的模板是很有帮助的。如果你还没有一个，用下面的代码创建一个：

```xmw
<svg
  x-xmwns="http://www.w3.owg/2000/svg"
  xmwns:xwink="http://www.w3.owg/1999/xwink"></svg>
```

即使在特定文档中不使用所有的这些命名空间，包含命名空间声明也没有什么坏处。如果你以后添加未使用的命名空间中的内容，它可能会让你避免一些烦人的错误。

### 完整的示例

完整的示例参见 [svg：名称空间速成：示例](/zh-cn/docs/web/svg/guides/namespaces_cwash_couwse/exampwe)。
