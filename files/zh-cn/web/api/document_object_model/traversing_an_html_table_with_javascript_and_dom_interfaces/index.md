---
title: 使用 Javascript 和 DOM Interfaces 来处理 HTML
slug: >-
  Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
---

### 简介

本文概述了一些强大的，基本的 DOM 1 级别中的方法以及如何在 JavaScript 中使用它们。你将会如何动态地创建，访问，控制以及移除 HTML 元素。这里提到的 DOM 方法，并非是 HTML 专有的；它们在 XML 中同样适用。这里所有的示例，在任何全面支持 DOM level1 的浏览器里都能正常工作；例如 Mozilla 浏览器或者其他基于 Mozilla 的浏览器，像网景公司的下一代导航者（Navigatior）浏览器等。这里的示例代码在 IE5 中也能正常工作。

> **备注：** 这里所提到的 DOM 方法是文档对象模型规范（版本一）的核心的一部分。DOM 1 版本包括对文档进行访问和处理的方法（DOM 1 核心）和专门为 HTML 文档定义的方法。

### Sample1.html 概览

这段文字是通过一个实例代码来介绍了 DOM 的。那么我们从下面的 HTML 示例来开始吧。这段示例使用了 DOM1 的方法，从 JavaScript 动态创建了一个 HTML 表格。它创建了一个包含了四个单元格，并且在每个单元格中含有文本。单元中文字内容是“这个单元式 y 行 x 列”，来展示单元格在表格中所处的位置。

```
<head>
<title>样例代码 - 使用 JavaScript 和 DOM 接口创建一个 HTML 表格</title>
<script>
    function start() {
        // 获得从 body 的引用
        var mybody=document.getElementsByTagName("body").item(0);
        // 创建一个 TABLE 的元素
        var mytable = document.createElement("TABLE");
        // 创建一个 TBODY 的元素
        var mytablebody = document.createElement("TBODY");
        // 创建所有的单元格
        for(j=0;j<2;j++) {
            // 创建一个 TR 元素
          var  mycurrent_row=document.createElement("TR");
            for(i=0;i<2;i++) {
                // 创建一个 TD 元素
              var  mycurrent_cell=document.createElement("TD");
                // 创建一个文本（text）节点
              var  currenttext=document.createTextNode("cell is row "+j+", column "+i);
                // 将我们创建的这个文本节点添加在 TD 元素里
                mycurrent_cell.appendChild(currenttext);
                // 将 TD 元素添加在 TR 里
                mycurrent_row.appendChild(mycurrent_cell);
            }
            // 将 TR 元素添加在 TBODY 里
            mytablebody.appendChild(mycurrent_row);
        }
        // 将 TBODY 元素添加在 TABLE 里
        mytable.appendChild(mytablebody);
        // 将 TABLE 元素添加在 BODY 里
        mybody.appendChild(mytable);
        // 设置 mytable 的边界属性 border 为 2
        mytable.setAttribute("border","2");
    }
</script>
</head>
<body onload="start()">
</body>
</html>
```

注意我们创建元素和文本节点的顺序：

1. 首先我们创建了 TABLE 元素。
2. 然后，我们创建了 TABLE 的子元素--TBODY。
3. 然后，我们使用循环语句创建了 TBODY 的子元素--TR。
4. 对于每一个 TR 元素，我们使用一个循环语句创建它的子元素--TD。
5. 对于每一个 TD 元素，我们创建单元格内的文本节点。

现在，我们创建了 TABLE，TBODY，TR，TD 等元素，然后创建了文本节点；接下来，我们将每一个对象接在各自的父节点上，使用逆序：

1. 首先，我们将每一个文本节点接在 TD 元素上

    ```
    mycurrent_cell.appendChild(currenttext);
    ```

2. 然后，我们将每一个 TD 元素接在他的父 TR 元素上。

    ```
    mycurrent_row.appendChild(mycurrent_cell);
    ```

3. 然后，我们将每一个 TR 元素接在他们的父 TBODY 元素上。

    ```
    mytablebody.appendChild(mycurrent_row);
    ```

4. 下一步，我们将 TBODY 元素接在他的父 TABLE 元素上

    ```
    mytable.appendChild(mytablebody);
    ```

5. 最后，我们将 TABLE 元素接在他的父元素 BODY 上。

    ```
    mybody.appendChild(mytable);
    ```

请记住这个机制。你将会在 W3C DOM 编程中经常使用它。首先，你从上到下的创建元素；然后你从下向上的将子元素接在他们的父元素上。

下面是由 javascript 代码生成的 HTML 代码：

```
...
<table border="2">
<tbody>
<tr><td>cell is row 0 column 0</td><td>cell is row 0 column 1</td></tr>
<tr><td>cell is row 1 column 0</td><td>cell is row 1 column 1</td></tr>
</tbody>
</table>
...
```

下面是由代码生成的 TABLE 及其子元素的 DOM 对象树：

![Image:sample1-tabledom.jpg](sample1-tabledom.jpg)

你可以只用一些 DOM 方法来创建这个表格和它内部的子元素。请在脑海中时刻保留你想要创建的数据结构的树之模型，这样有利于更简便的写出必须的代码。在图 1 的 TABLE 树中，TABLE 有一个子元素 TBODY。TBODY 有两个子元素。每一个 TR 又含有两个子元素（TD）。最后，每一个 TD 有一个子元素 -- 文本节点。

### 基本 DOM 方法 - Sample2.html

`getElementByTagName`是文档接口（Document interface）和元素接口（Element interface）的中的方法，所以不管是根文档对象还是所有的元素对象都含有方法`getElementByTagName`。用来通过它们的标签名称（tag name）来获得某些元素的一系列子元素。你可以使用的方法是：`element.getElementsByTagName(tagname)`。

`getElementsByTagName`返回一个有特定标签名称（tagname）的子元素列表。从这个子元素列表中，你可以通过调用`item`和你想得到的元素的下标，来获得单个元素。列表中第一个元素的下标是 0。上面的方法很简单，但是当你操作一个巨大的数据结构时还是应该小心一些。OK，我们下一个话题中要继续对我们的表格例子进行修改。下面的示例更加简单，它意图展示一些基础的方法：

```
<html>
<head>
<title>样例代码 - 使用 JavaScript 和 DOM 接口操作 HTML 表格</title>
<script>
    function start() {
        // 获得所有的 body 元素列表（在这里将只有一个）
        myDocumentElements=document.getElementsByTagName("body");
        // 我们所需要 body 元素是这个列表的第一个元素
        myBody=myDocumentElements.item(0);
        // 现在，让我们获得 body 的子元素中所有的 p 元素
        myBodyElements=myBody.getElementsByTagName("p");
        // 我们所需要的是这个列表中的第二个单元元素
        myP=myBodyElements.item(1);
    }
</script>
</head>
<body onload="start()">
<p>hi</p>
<p>hello</p>
</body>
</html>
```

在这个例子中，我们设置变量`myP`指向 DOM 对象 body 中的第二个`p`元素：

1. 首先，我们使用下面的代码获得所有的 body 元素的列表，因为在任何合法的 HTML 文档中都只有一个 body 元素，所以这个列表是只包含一个单元的。

    ```
    document.getElementsByTagName("body")
    ```

2. 下一步，我们取得列表的第一个元素，它本身就会 body 元素对象。

    ```
    myBody=myDocumentElements.item(0);
    ```

3. 然后，我们通过下面代码获得 body 的子元素中所有的 p 元素

    ```
    myBodyElements=myBody.getElementsByTagName("p");
    ```

4. 最后，我们从列表中取第二个单元元素。

    ```
    myP=myBodyElements.item(1);
    ```

![Image:sample2a2.jpg](sample2a2.jpg)

一旦你取得了 HTML 元素的 DOM 对象，你就可以设置它的属性了。比如，如果你希望设置背景色属性，你只需要添加：

```
myP.style.background="rgb(255,0,0)";
// 设置 inline 的背景色风格
```

#### 使用 document.createTextNode(..) 创建文本节点

使用文档对象来调用一个 createTextNode 方法并创建你自己的文本节点。你只需要传递文字内容给这个函数。返回的值就是一个展示那个文本节点信息的对象。

```
myTextNode=document.createTextNode("world");
```

这表示你已经创建了一个 TEXT——NODE（一个文字片断）类型的节点，并且它的内容是“world”，任何你对 myTextNode 的引用都指向这个节点对象。如果想将这个文本插入到 HTML 页面中，你还需要将它作为其他节点元素的子元素。

#### 使用 appendChild(..) 插入元素

那么，通过调用 `myP.appendChild(node_element)` 你可以将这个元素设置成为第二个 P 的一个新的子元素。

```js
myP.appendChild(myTextNode);
```

在测试了这个例子之后，我们注意到，hello 和 world 单词被组合在了一个：helloworld。事实上，当你看到 HTML 页面时，hello 和 world 两个文字节点看起来更像是一个节点。但是请记住它们在文档模型中的形式 -- 是两个节点。第二个节点是一个 TEXT_NODE 类型的新节点，也是第二个 P 标签的第二个子元素。下面的图标将在文档树种展示最近创建的文本节点对象。

![Image:sample2b2.jpg](sample2b2.jpg)

> **备注：** createTextNode 和 appendChild 是在单词 hello 和 world 之间设置空格的一个简单方法。另外一个重要的注意事项是：appendChild 方法将把新的子节点接在最后一个子节点之后，正如 world 被加在了 hello 之后。所以如果你想在 hello 和 world 中间添加一个文本节点的话，你应该使用 insertBefore 而不是 appendChild.

#### 使用文档对象和 createElement(..) 方法创建新的元素

你可以使用 createElement 来创建新的 HTML 元素或者任何其他你想要的元素。比如，如果你想要创建一个新的 P 作为 BODY 的子元素，你可以使用前面例子的 myBody 并给它接上一个新的元素节点。使用 document.createElement("tagname") 可以方便的创建一个节点。如下：

```
myNewPTAGnode=document.createElement("p");
myBody.appendChild(myNewPTAGnode);
```

![Image:sample2c.jpg](sample2c.jpg)

#### 使用 removeChild(..) 方法移除节点

每一个节点都可以被移除。下面的一行代码移除了包含在 myP(第二个 p 元素) 下面的文本节点 world。

```
myP.removeChild(myTextNode);
```

最后你可以将 myTextNode（那个包含了 world 单词的节点）添加给我们最后创建的 P 元素：

```
myNewPTAGnode.appendChild(myTextNode);
```

被修改的对象树的最后的状态如下：

![Image:sample2d.jpg](sample2d.jpg)

### 动态创建一个表格 (回到 Sample1.html)

这一段落的剩余部分我们将继续修改我们 sample1.html。下面的图展示了我们在示例中创建的表格的对象树的结构。

#### 复习一下 HTML 表格结构

![Image:sample1-tabledom.jpg](sample1-tabledom.jpg)

#### 创建元素节点并将他们插入到文档树中

sample1.html 中创建表格的基本步骤是：

- 获得 body 对象（文档对象的第一个元素）
- 创建所有元素。
- 最后，根据表格结构（上面图中所示）将每一个孩子节点拼接起来。下面的一段源码是经过修改的 sample1.html

> **备注：** 在 start 函数的最后，有一行新代码。使用另一个 DOM 方法（setAttribute）来设置表格的边界属性。setAttribute 有两个参数：属性的名称和属性的值。你可以使用这个方法来设置任意元素的任意属性。

```
<head>
<title>示例代码 - 使用 Javascript 和 DOM Interfaces 来处理 HTML</title>
<script>
    function start() {
        // 获得 body 的引用
        var mybody=document.getElementsByTagName("body").item(0);
        // 创建一个标签名称为 TABLE 的元素
        mytable = document.createElement("TABLE");
        // 创建一个标签名称为在 TBODY 的元素
        mytablebody = document.createElement("TBODY");
        // 创建所有的单元格
        for(j=0;j<2;j++) {
            // 创建一个标签名称为在 TR 的元素
            mycurrent_row=document.createElement("TR");
            for(i=0;i<2;i++) {
                // 创建一个标签名称为在 TD 的元素
                mycurrent_cell=document.createElement("TD");
                // 创建一个文字节点
                currenttext=document.createTextNode("cell is row "+j+", column "+i);
                // 将文字节点添加到 TD 单元格内
                mycurrent_cell.appendChild(currenttext);
                // 将 TD 单元格添加到 TR 行中
                mycurrent_row.appendChild(mycurrent_cell);
            }
            // 将 TR 行添加到 TBODY 中
            mytablebody.appendChild(mycurrent_row);
        }
        // 将 TBODY 添加到 TABLE 中
        mytable.appendChild(mytablebody);
        // 将 TABLE 添加到 BODY 中
        mybody.appendChild(mytable);
        // 设置边界属性为 2
        mytable.setAttribute("border","2");
    }
</script>
</head>
<body onload="start()">
</body>
</html>
```

### 使用 CSS 和 DOM 来操作表格

#### 从表格中获得一个文字节点

示例介绍了两个新的 DOM 属性。首先，使用 childNodes 属性来获得 mycel 的孩子节点列表。childNodes 列表包括所有的孩子节点，无论它们的名称或类型是什么。像 getElemengByTagName 一样，它返回了一个节点列表。不同的是，getElementByTagName 只返回指定标签名称的元素。一旦你获得了返回的列表，你可以使用 item(x) 方法来使用指定的元素。这个例子在表格的第二行第二个单元格中的 myceltext 中保存了一个文字节点。然后，运行这个例子并观察结果，他创建了一个新的文字节点，这个文字节点的内容是 myceltext 的值，并且将这个文字节点作为了 BODY 元素的一个孩子。

> **备注：** 如果你的对象是一个文字节点，你可以使用 data 属性来回收（retrieve）节点的文字内容

```
mybody=document.getElementsByTagName("body").item(0);
mytable=mybody.getElementsByTagName("table").item(0);
mytablebody=mytable.getElementsByTagName("tbody").item(0);
myrow=mytablebody.getElementsByTagName("tr").item(1);
mycel=myrow.getElementsByTagName("td").item(1);
// mycel 的孩子节点列表的第一个元素
myceltext=mycel.childNodes.item(0);
// currenttext 的内容是 myceltext 的内容
currenttext=document.createTextNode(myceltext.data);
mybody.appendChild(currenttext);
```

#### 获得一个属性的值

在 sample1 的最后我们在 mytable 对象上调用了 setAttribute。这个调用是用来设置表格的边界属性的。然后是用了 getAttribute 方法来获得一个属性的值：

```
mytable.getAttribute("border");
```

#### 通过改变样式属性来隐藏一列

一旦你在你的 javascript 变量中保存了一个对象，你就可以直接为它设置样式属性了。下面的代码是修改后的 sample1.html，在这里，第二列的每一个单元格都被隐藏了。而且第一列中的每一个单元格改为使用红色背景。注意，样式属性是被直接设置的。

```
<html>
<body onload="start()">
</body>
<script>
    function start() {
       var mybody=document.getElementsByTagName("body").item(0);
       mytable = document.createElement("TABLE");
       mytablebody = document.createElement("TBODY");
       for(j=0;j<2;j++) {
           mycurrent_row=document.createElement("TR");
           for(i=0;i<2;i++) {
               mycurrent_cell=document.createElement("TD");
               currenttext=document.createTextNode("cell is:"+i+j);
               mycurrent_cell.appendChild(currenttext);
               mycurrent_row.appendChild(mycurrent_cell);
               // 当 column 为 0 时，设置单元格背景色；column 为 1 时隐藏单元格
               if(i==0) {
                   mycurrent_cell.style.background="rgb(255,0,0)";
               } else {
                   mycurrent_cell.style.display="none";
               }
           }
           mytablebody.appendChild(mycurrent_row);
       }
       mytable.appendChild(mytablebody);
       mybody.appendChild(mytable);
    }
</script>
</html>
```
