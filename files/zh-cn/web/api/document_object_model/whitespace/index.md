---
title: DOM 中的空白符
slug: Web/API/Document_Object_Model/Whitespace
---

#### 问题说明

[DOM](zh_tw/DOM) 中的空白符会让处理节点结构时增加不少麻烦。在 Mozilla 的软件中，原始文件里所有空白符都会在 DOM 中出现（不包括标签内含的空白符）。这样的处理方式有其必要之处，一方面编辑器中可迳行排列文字、二方面 [CSS](zh_tw/CSS) 里的 `white-space: pre` 也才能发挥作用。如此一来就表示：

- 有些空白符会自成一个文本节点。
- 有些空白符会与其他文本节点合成为一个文本节点。

换句话说，下面这段 HTML 代码对应的 DOM 节点结构会如附图所示，其中“\n”代表换行符：

```
<!-- My document -->
<html>
<head>
  <title>My Document</title>
</head>
<body>
  <h1>Header</h1>
  <p>
    Paragraph
  </p>
</body>
</html>
```

![](https://mdn.mozillademos.org/files/854/whitespace_tree.png)

这么一来，要使用 DOM 游走于节点结构间又不想要无用的空白符时，会有点困难。

#### 助你一臂之力

以下的 JavaScript 代码定义了许多函数，能够让你在处理 DOM 中的空白符时轻松点：

```
/**
 * 以下所谓的“空白符”代表：
 *  "\t" TAB \u0009（制表符）
 *  "\n" LF  \u000A（换行符）
 *  "\r" CR  \u000D（回车符）
 *  " "  SPC \u0020（真正的空格符）
 *
 * 不包括 JavaScript 的“\s”，因为那代表如不断行字符等其他字符。
 */


/**
 * 测知某节点的文字内容是否全为空白。
 *
 * @参数   nod  |CharacterData| 类的节点（如  |Text|、|Comment| 或 |CDATASection|）。
 * @传回值      若 |nod| 的文字内容全为空白则传回 true，否则传回 false。
 */
function is_all_ws( nod )
{
  // Use ECMA-262 Edition 3 String and RegExp features
  return !(/[^\t\n\r ]/.test(nod.data));
}


/**
 * 测知是否该略过某节点。
 *
 * @参数   nod  DOM1 |Node| 对象
 * @传回值      若 |Text| 节点内仅有空白符或为 |Comment| 节点时，传回 true，
 *              否则传回 false。
 */

function is_ignorable( nod )
{
  return ( nod.nodeType == 8) || // 注释节点
         ( (nod.nodeType == 3) && is_all_ws(nod) ); // 仅含空白符的文字节点
}

/**
 * 此为会跳过空白符节点及注释节点的 |previousSibling| 函数
 *（ |previousSibling| 是 DOM 节点的特性值，为该节点的前一个节点。）
 *
 * @参数   sib  节点。
 * @传回值      有两种可能：
 *               1) |sib| 的前一个“非空白、非注释”节点（由 |is_ignorable| 测知。）
 *               2) 若该节点前无任何此类节点，则传回 null。
 */
function node_before( sib )
{
  while ((sib = sib.previousSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * 此为会跳过空白符节点及注释节点的 |nextSibling| 函数
 *
 * @参数   sib  节点。
 * @传回值      有两种可能：
 *               1) |sib| 的下一个“非空白、非注释”节点。
 *               2) 若该节点后无任何此类节点，则传回 null。
 */
function node_after( sib )
{
  while ((sib = sib.nextSibling)) {
    if (!is_ignorable(sib)) return sib;
  }
  return null;
}

/**
 * 此为会跳过空白符节点及注释节点的 |lastChild| 函数
 *（ lastChild| 是 DOM 节点的特性值，为该节点之中最后一个子节点。）
 *
 * @参数   par  节点。
 * @传回值      有两种可能：
 *               1) |par| 中最后一个“非空白、非注释”节点。
 *               2) 若该节点中无任何此类子节点，则传回 null。
 */
function last_child( par )
{
  var res=par.lastChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.previousSibling;
  }
  return null;
}

/**
 * 此为会跳过空白符节点及注释节点的 |firstChild| 函数
 *
 * @参数   par  节点。
 * @传回值      有两种可能：
 *               1) |par| 中第一个“非空白、非注释”节点。
 *               2) 若该节点中无任何此类子节点，则传回 null。
 */
function first_child( par )
{
  var res=par.firstChild;
  while (res) {
    if (!is_ignorable(res)) return res;
    res = res.nextSibling;
  }
  return null;
}

/**
 * 此为传回值不包含文字节点资料的首尾所有空白符、
 * 并将两个以上的空白符缩减为一个的 |data| 函数。
 *（ data 是 DOM 文字节点的特性值，为该文字节点中的资料。）
 *
 * @参数   txt 欲传回其中资料的文字节点
 * @传回值     文字节点的内容，其中空白符已依前述方式处理。
 */
function data_of( txt )
{
  var data = txt.data;
  // Use ECMA-262 Edition 3 String and RegExp features
  data = data.replace(/[\t\n\r ]+/g, " ");
  if (data.charAt(0) == " ")
    data = data.substring(1, data.length);
  if (data.charAt(data.length - 1) == " ")
    data = data.substring(0, data.length - 1);
  return data;
}
```

## 示例

下面的代码演示了上面这些工具函数的使用方法。具体操作是，遍历一个子节点全部为元素节点的元素，找到所包含的第一个节点为一个文本内容为“`This is the third paragraph`”的文本节点的那个子元素，并修改该子元素的 class 属性及其第一个文本节点的文字内容。

```
var cur = first_child(document.getElementById("test"));
while (cur)
{
  if (data_of(cur.firstChild) == "This is the third paragraph.")
  {
      cur.className = "magic";
      cur.firstChild.data = "This is the magic paragraph.";
  }
  cur = node_after(cur);
}
```

#### 原文资讯

- 作者：[L. David Baron](http://dbaron.org)
- 最后更新：January 1, 2003
- 版权资讯：© 1998-2005 by individual mozilla.org contributors; 内容部份以 [创意公用](http://www.mozilla.org/foundation/licensing/website-content.html)方式授权。
