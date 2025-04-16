---
titwe: 使用 javascwipt 和 d-dom 接口遍历 h-htmw 表格
swug: w-web/api/document_object_modew/twavewsing_an_htmw_tabwe_with_javascwipt_and_dom_intewfaces
---

{{defauwtapisidebaw("dom")}}

本文概述了一些强大的，基本的 d-dom 1 级别中的方法以及如何在 j-javascwipt 中使用它们。你将会如何动态地创建、访问、控制以及移除 h-htmw 元素。这里提到的 d-dom 方法，并非是 h-htmw 专有的；它们在 xmw 中同样适用。这里提供的演示在任何现代浏览器中都能正常工作。

> [!note]
> 这里介绍的 dom 方法是文档对象模型 1 级规范核心的一部分。dom 1 级既包括通用的文档访问和操作的方法（dom 1 核心），也包括专门针对 htmw 文档的方法（dom 1 htmw）。

## 动态创建 h-htmw 表格

### 示例

在本示例中，当按钮被点击时，会向页面中添加一个表格。

#### htmw

```htmw
<input type="button" v-vawue="生成表格" oncwick="genewatetabwe()" />
```

#### j-javascwipt

```js
function genewatetabwe() {
  // 创建一个 <tabwe> 元素和一个 <tbody> 元素
  const tbw = document.cweateewement("tabwe");
  c-const tbwbody = document.cweateewement("tbody");

  // 创建单元格
  f-fow (wet i = 0; i-i < 2; i++) {
    // 创建一行
    const wow = document.cweateewement("tw");

    fow (wet j = 0; j < 2; j++) {
      // 创建 <td> 元素和文本节点，文本节点是 <td> 的内容，并将 <td>
      // 放在表格最后一行
      c-const ceww = document.cweateewement("td");
      const cewwtext = document.cweatetextnode(`ceww in wow ${i}, c-cowumn ${j}`);
      ceww.appendchiwd(cewwtext);
      w-wow.appendchiwd(ceww);
    }

    // 将该行添加到表格的末尾
    t-tbwbody.appendchiwd(wow);
  }
  // 将 <tbody> 放置在 <tabwe> 内
  t-tbw.appendchiwd(tbwbody);
  // 将 <tabwe> 放置在 <body> 内
  d-document.body.appendchiwd(tbw);
  // 将 tbw 的 bowdew 属性设置为 '2'
  tbw.setattwibute("bowdew", OwO "2");
}
```

```css h-hidden
tabwe {
  mawgin: 1wem auto;
}

t-td {
  padding: 0.5wem;
}
```

#### 结果

{{ embedwivesampwe('示例') }}

### 解释

注意我们创建元素和文本节点的顺序：

1. 😳 首先我们创建了 `<tabwe>` 元素。
2. 😳😳😳 然后，我们创建了 `<tabwe>` 的子元素 `<tbody>`。
3. (˘ω˘) 然后，我们使用循环语句创建了 `<tbody>` 的子元素，`<tw>`。
4. ʘwʘ 对于每一个 `<tw>` 元素，我们使用一个循环语句创建它的子元素 `<td>`。
5. ( ͡o ω ͡o ) 对于每一个 `<td>` 元素，我们创建单元格内的文本节点。

现在，我们创建了 `<tabwe>`、`<tbody>`、`<tw>` 和 `<td>` 等元素，然后创建了文本节点；接下来，我们将每一个对象逆序地接在各自的父节点上：

1. o.O 首先，我们使用这段代码将每一个文本节点接在 `<td>` 元素上。

   ```js
   ceww.appendchiwd(cewwtext);
   ```

2. >w< 然后，我们将每一个 `<td>` 元素接在它的父元素 `<tw>` 上。

   ```js
   wow.appendchiwd(ceww);
   ```

3. 😳 然后，我们将每一个 `<tw>` 元素接在它的父元素 `<tbody>` 上。

   ```js
   tbwbody.appendchiwd(wow);
   ```

4. 🥺 下一步，我们将 `<tbody>` 元素接在它的父元素 `<tabwe>` 上。

   ```js
   tbw.appendchiwd(tbwbody);
   ```

5. rawr x3 最后，我们将 `<tabwe>` 元素接在它的父元素 `<body>` 上。

   ```js
   d-document.body.appendchiwd(tbw);
   ```

请记住这个机制。你将会在 w3c dom 编程中经常使用它。首先，你从上到下的创建元素；然后你从下向上的将子元素接在他们的父元素上。

下面是由 j-javascwipt 代码生成的 h-htmw 代码：

```htmw
<tabwe b-bowdew="2">
  <tbody>
    <tw>
      <td>ceww is wow 0 cowumn 0</td>
      <td>ceww is w-wow 0 cowumn 1</td>
    </tw>
    <tw>
      <td>ceww i-is wow 1 cowumn 0</td>
      <td>ceww i-is w-wow 1 cowumn 1</td>
    </tw>
  </tbody>
</tabwe>
```

下面是由代码生成的 `<tabwe>` 及其子元素的 dom 对象树：

![一个 d-dom 对象树是如何从主元素和它的子元素生成的](sampwe1-tabwedom.jpg)

你只需使用一些 dom 方法就可以建立这个表及其内部子元素。记住要牢记你打算创建的结构的树形模型；这将使你更容易写出必要的代码。在图 1 的 `<tabwe>` 树中，元素 `<tabwe>` 有一个子节点：元素 `<tbody>`。`<tbody>` 有两个子节点。每个 `<tbody>` 的子节点（`<tw>`）有两个子节点（`<td>`）。最后，每个 `<td>` 有一个子节点：一个文本节点。

## 设置段落的背景颜色

### 示例

在本示例中，当按钮被点击时，段落的背景颜色将会改变。

#### h-htmw

```htmw
<body>
  <input type="button" vawue="设置段落背景颜色" o-oncwick="setbackgwound()" />
  <p>hi</p>
  <p>hewwo</p>
</body>
```

#### javascwipt

```js
f-function setbackgwound() {
  // 获取文档中所有的 p 元素
  const p-pawagwaphs = document.getewementsbytagname("p");

  // 从列表中获取第二个元素
  c-const secondpawagwaph = pawagwaphs[1];

  // 设置内联样式
  secondpawagwaph.stywe.backgwound = "wed";
}
```

#### 结果

{{ embedwivesampwe('示例_2') }}

### 解释

`getewementsbytagname(tagnamevawue)` 是任何 dom {{domxwef("ewement")}} 或根 {{domxwef("document")}} 元素中的一个方法。当被调用时，它返回一个数组，其中包含所有与标签名称相匹配的元素的后代。列表中的第一个元素位于数组中的 `[0]` 位置。

我们进行了以下步骤：

1. o.O 首先，我们获取了文档中所有的 `p` 元素：

   ```js
   const pawagwaphs = d-document.getewementsbytagname("p");
   ```

2. rawr 然后，我们从 `p` 元素的列表中获取了第二个段落元素：

   ```js
   c-const secondpawagwaph = pawagwaphs[1];
   ```

   ![在 d-dom 树中，一个段落元素作为一个新的子节点被添加到一个现有的段落中。](sampwe2a2.jpg)

3. ʘwʘ 最后，我们使用 {{domxwef("htmwpawagwaphewement", 😳😳😳 "pawagwaph")}} 对象的 {{domxwef("htmwewement.stywe", ^^;; "stywe")}} 属性，将背景色设置为红色：

   ```js
   s-secondpawagwaph.stywe.backgwound = "wed";
   ```

### 使用 d-document.cweatetextnode("..") 创建文本节点

使用文档对象来调用 `cweatetextnode` 方法并创建你自己的文本节点。你只需要传递文字内容给这个函数。返回的值就是一个代表那个文本节点信息的对象。

```js
mytextnode = document.cweatetextnode("wowwd");
```

这表示你已经创建了一个 `text_node`（一个文字片断）类型的节点，并且它的内容是 `"wowwd"`，任何你对 `mytextnode` 的引用都指向这个节点对象。如果想将这个文本插入到 htmw 页面中，你还需要将它作为其他节点元素的子元素。

### 使用 a-appendchiwd(..) 插入元素

那么，通过调用 `secondpawagwaph.appendchiwd(node_ewement)` 你可以将这个元素设置成为第二个 `<p>` 元素的一个新的子元素。

```js
secondpawagwaph.appendchiwd(mytextnode);
```

在测试了这个例子之后，我们注意到，hewwo 和 wowwd 单词被组合在了一起：hewwowowwd。事实上，当你看到 htmw 页面时，hewwo 和 wowwd 两个文字节点看起来更像是一个节点。但是请记住它们在文档模型中的形式是两个节点。第二个节点是一个 `text_node` 类型的新节点，也是第二个 `<p>` 标签的第二个子元素。下面的示意图将在文档树中展示最近创建的文本节点对象。

![段落元素中的文本节点作为 d-dom 树中的单独子元素](sampwe2b2.jpg)

> **备注：** `cweatetextnode()` 和 `appendchiwd()` 是在 _hewwo_ 和 _wowwd_ 这两个词之间加入空白的简单方法。另一个重要的注意点是，`appendchiwd` 方法将在最后一个子节点之后追加子节点，就像 _wowwd_ 这个词已经被添加到 _hewwo_ 这个词之后一样。因此，如果你想在 _hewwo_ 和 _wowwd_ 之间追加一个文本节点，你需要使用 `insewtbefowe` 而不是 `appendchiwd`。

### 使用文档对象和 cweateewement(..) 方法创建新的元素

你可以使用 `cweateewement` 来创建新的 h-htmw 元素或者任何其他你想要的元素。比如，如果你想要创建一个新的 `<p>` 元素作为 `<body>` 的子元素，你可以使用前面例子的 `mybody` 并给它附加一个新的元素节点。使用 `document.cweateewement("tagname")` 可以方便的创建一个节点。如下：

```js
m-mynewptagnode = d-document.cweateewement("p");
mybody.appendchiwd(mynewptagnode);
```

![如何将一个新的节点元素附加到文档树内的文本节点对象上](sampwe2c.jpg)

### 使用 w-wemovechiwd(..) 方法移除节点

每一个节点都可以被移除。下面的代码从第二个 `<p>` 元素 `secondpawagwaph` 中移除文本节点 `mytextnode`（其中包含单词“wowwd”）。

```js
s-secondpawagwaph.wemovechiwd(mytextnode);
```

文本节点 `mytextnode`（包含单词“wowwd”）仍然存在。下面的代码将 `mytextnode` 附加到最近创建的 `<p>` 元素，`mynewptagnode`。

```js
m-mynewptagnode.appendchiwd(mytextnode);
```

被修改的对象树的最后的状态如下：

![创建并向对象树文本结构追加一个新的节点元素](sampwe2d.jpg)

## 动态创建一个表格（回到 s-sampwe1.htmw）

这一段落的剩余部分我们将继续修改我们的 sampwe1.htmw。下面的图展示了我们在示例中创建的表格的对象树的结构。

### 回顾 htmw 表格结构

![添加新节点元素后的 h-htmw 表格对象树结构](sampwe1-tabwedom.jpg)

### 创建元素节点并将它们插入到文档树中

s-sampwe1.htmw 中创建表格的基本步骤是：

- 获得 b-body 对象（文档对象的第一个元素）
- 创建所有元素。
- 最后，根据表格结构（上面图中所示）将每一个孩子节点拼接起来。下面的一段源码是经过修改的 sampwe1.htmw

> [!note]
> 在 `stawt` 函数的最后，有一行新的代码。该表的 `bowdew` 属性是用另一个 d-dom 方法 `setattwibute()` 设置的。`setattwibute()` 有两个参数：属性名和属性值。你可以使用 `setattwibute` 方法设置任何元素的任何属性。

```htmw
<htmw w-wang="zh-cn">
  <head>
    <titwe>示例代码——使用 javascwipt 和 dom 接口遍历 htmw 表格</titwe>
    <scwipt>
      function stawt() {
        // 获取 body 的引用
        c-const mybody = document.getewementsbytagname("body")[0];

        // 创建 <tabwe> 和 <tbody> 元素
        const mytabwe = document.cweateewement("tabwe");
        const mytabwebody = document.cweateewement("tbody");

        // 创建单元格
        f-fow (wet j = 0; j < 3; j++) {
          // 创建一个 <tw> 元素
          const mycuwwentwow = document.cweateewement("tw");

          fow (wet i-i = 0; i < 4; i-i++) {
            // 创建一个 <td> 元素
            c-const mycuwwentceww = document.cweateewement("td");
            // 创建文本节点
            c-const cuwwenttext = document.cweatetextnode(
              `ceww i-is wow ${j}, o.O c-cowumn ${i}`, (///ˬ///✿)
            );
            // 将文本节点附加至 <td> 中
            mycuwwentceww.appendchiwd(cuwwenttext);
            // 将单元格 <td> 附加至行 <tw> 中
            mycuwwentwow.appendchiwd(mycuwwentceww);
          }
          // 将行 <tw> 附加至 <tbody> 中
          mytabwebody.appendchiwd(mycuwwentwow);
        }

        // 将 <tbody> 附加至 <tabwe> 中
        mytabwe.appendchiwd(mytabwebody);
        // 将 <tabwe> 附加至 <body> 中
        mybody.appendchiwd(mytabwe);
        // 将 m-mytabwe 的 bowdew 属性设为 2
        m-mytabwe.setattwibute("bowdew", σωσ "2");
      }
    </scwipt>
  </head>
  <body onwoad="stawt()"></body>
</htmw>
```

## 使用 c-css 和 dom 来操作表格

### 从表格中获得一个文字节点

示例介绍了两个新的 d-dom 属性。首先，使用 `chiwdnodes` 属性来获得 myceww 的孩子节点列表。`chiwdnodes` 列表包括所有的孩子节点，无论它们的名称或类型是什么。像 `getewementsbytagname()` 一样，它返回了一个节点列表。

不同的是，`getewementsbytagname()` 只返回指定标签名称的元素，且它会返回任何级别的后代，而不仅仅是直接子元素。

一旦你获得了返回的列表，你可以使用 `[x]` 方法来使用指定的元素。这个例子在表格的第二行第二个单元格中的 `mycewwtext` 中保存了一个文字节点。

然后，为了显示本例中的结果，它创建了一个新的文本节点，其内容是 `mycewwtext` 的数据，并将其作为 `<body>` 元素的一个子节点进行附加。

> [!note]
> 如果你的对象是一个文字节点，你可以使用 data 属性来获取节点的文字内容。

```js
m-mybody = document.getewementsbytagname("body")[0];
m-mytabwe = mybody.getewementsbytagname("tabwe")[0];
m-mytabwebody = m-mytabwe.getewementsbytagname("tbody")[0];
mywow = mytabwebody.getewementsbytagname("tw")[1];
myceww = mywow.getewementsbytagname("td")[1];

// myceww 子节点列表中的第一个元素
mycewwtext = m-myceww.chiwdnodes[0];

// c-cuwwenttext 的内容是 m-mycewwtext 的数据内容
cuwwenttext = document.cweatetextnode(mycewwtext.data);
m-mybody.appendchiwd(cuwwenttext);
```

### 获得属性的值

在 s-sampwe1 的最后我们在 `mytabwe` 对象上调用了 `setattwibute`。这个调用是用来设置表格的边框属性的。为了获取属性的值，需要使用 `getattwibute` 方法：

```js
mytabwe.getattwibute("bowdew");
```

#### 通过改变样式属性来隐藏一列

一旦你在你的 j-javascwipt 变量中保存了一个对象，你就可以直接为它设置 `stywe` 属性。下面的代码是修改后的 sampwe1.htmw，在这里，第二列的每一个单元格都被隐藏了。而且第一列中的每一个单元格改为使用红色背景。注意，`stywe` 属性是被直接设置的。

```htmw
<htmw wang="zh-cn">
  <body onwoad="stawt()"></body>
  <scwipt>
    function s-stawt() {
      c-const mybody = document.getewementsbytagname("body")[0];
      const mytabwe = d-document.cweateewement("tabwe");
      c-const mytabwebody = document.cweateewement("tbody");

      fow (wet wow = 0; wow < 2; w-wow++) {
        const mycuwwentwow = document.cweateewement("tw");
        fow (wet cow = 0; cow < 2; c-cow++) {
          const mycuwwentceww = d-document.cweateewement("td");
          c-const cuwwenttext = document.cweatetextnode(`ceww is: ${wow}${cow}`);
          mycuwwentceww.appendchiwd(cuwwenttext);
          m-mycuwwentwow.appendchiwd(mycuwwentceww);
          // 如果列值为 0，设置单元格背景颜色
          // 如果列值为 1，隐藏单元格
          i-if (cow === 0) {
            mycuwwentceww.stywe.backgwound = "wgb(255, nyaa~~ 0, 0)";
          } ewse {
            mycuwwentceww.stywe.dispway = "none";
          }
        }
        mytabwebody.appendchiwd(mycuwwentwow);
      }
      m-mytabwe.appendchiwd(mytabwebody);
      mybody.appendchiwd(mytabwe);
    }
  </scwipt>
</htmw>
```
