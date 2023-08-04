---
title: Selection
slug: Web/API/Selection
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

`Selection` 对象表示用户选择的文本范围或插入符号的当前位置。它代表页面中的文本选区，可能横跨多个元素。文本选区由用户拖拽鼠标经过文字而产生。要获取用于检查或修改的 Selection 对象，请调用 {{domxref("window.getSelection()")}}。

一般来说，插入光标的位置可通过 Selection 获取，这时它被标记为 `Collapsed`，这表示选区被压缩至一点，即光标位置。但要注意它与 `focus` 事件或 {{domxref("Document.activeElement")}} 等的值没有必然联系。

用户可能从左到右（与文档方向相同）选择文本或从右到左（与文档方向相反）选择文本。`anchor` 指向用户开始选择的地方，而 `focus` 指向用户结束选择的地方。如果你使用鼠标选择文本的话，anchor 就指向你按下鼠标键的地方，而 focus 就指向你松开鼠标键的地方。anchor 和 focus 的概念不能与选区的起始位置和终止位置混淆，因为 anchor 指向的位置可能在 focus 指向的位置的前面，也可能在 focus 指向位置的后面，这取决于你选择文本时鼠标移动的方向（也就是按下鼠标键和松开鼠标键的位置）。

Selection 对象所对应的是用户所选择的 {{domxref("range","ranges")}}（区域），俗称拖蓝。默认情况下，该函数只针对一个区域，我们可以这样使用这个函数：

```js
var selObj = window.getSelection();
var range = selObj.getRangeAt(0);
```

- `selObj` 被赋予一个 Selection 对象
- `range` 被赋予一个 [Range](/zh-CN/docs/DOM/range) 对象

调用 {{domxref("Selection.toString()","")}} 方法会返回被选中区域中的**纯文本**。要求变量为字符串的函数会自动对对象进行该处理，例如：

```js
var selObj = window.getSelection();
window.alert(selObj);
```

## 术语表

本页面使用的其他关键词汇：

- 锚点 (anchor)
  - : 锚指的是一个选区的起始点（不同于 HTML 中的锚点链接，译者注）。当我们使用鼠标框选一个区域的时候，锚点就是我们鼠标按下瞬间的那个点。在用户拖动鼠标时，锚点是不会变的。
- 焦点 (focus)
  - : 选区的焦点是该选区的终点，当您用鼠标框选一个选区的时候，焦点是你的鼠标松开瞬间所记录的那个点。随着用户拖动鼠标，焦点的位置会随着改变。
- 范围 (range)
  - : 范围指的是文档中连续的一部分。一个范围包括整个节点，也可以包含节点的一部分，例如文本节点的一部分。用户通常下只能选择一个范围，但是有的时候用户也有可能选择多个范围（例如当用户按下 Control 按键并框选多个区域时，Chrome 中禁止了这个操作，译者注）。“范围”会被作为 {{domxref("Range")}} 对象返回。Range 对象也能通过 DOM 创建、增加、删减。
- 可编辑元素 (editing host)
  - : 一个用户可编辑的元素（例如一个使用 [`contenteditable`](/zh-CN/docs/Web/HTML/Global_attributes#contenteditable) 的 HTML 元素，或是在启用了 {{domxref("Document.designMode", "designMode")}} 的 {{domxref("Document")}} 的子元素）。详见 [开发者笔记](#Selection_API_在可编辑元素焦点更改方面的行为)。

## 属性

- {{domxref("Selection/anchorNode","anchorNode")}}{{ReadOnlyInline}}
  - : 返回该选区起点所在的节点（{{domxref("Node")}}）。
- {{domxref("Selection/anchorOffset","anchorOffset")}}{{ReadOnlyInline}}

  - : 返回一个数字，其表示的是选区起点在 {{domxref("Selection/anchorNode","anchorNode")}} 中的位置偏移量。

    1. 如果 `anchorNode` 是文本节点，那么返回的就是从该文字节点的第一个字开始，直到被选中的第一个字之间的字数（如果第一个字就被选中，那么偏移量为零）。
    2. 如果 `anchorNode` 是一个元素，那么返回的就是在选区第一个节点之前的同级节点总数。(这些节点都是 `anchorNode` 的子节点)

- {{domxref("Selection/focusNode","focusNode")}}{{ReadOnlyInline}}
  - : 返回该选区终点所在的节点。
- {{domxref("Selection/focusOffset","focusOffset")}}{{ReadOnlyInline}}

  - : 返回一个数字，其表示的是选区终点在 {{domxref("Selection/focusNode","focusNode")}} 中的位置偏移量。

    1. 如果 `focusNode` 是文本节点，那么选区末尾未被选中的第一个字，在该文字节点中是第几个字（从 0 开始计），就返回它。
    2. 如果 `focusNode` 是一个元素，那么返回的就是在选区末尾之后第一个节点之前的同级节点总数。

- {{domxref("Selection/isCollapsed","isCollapsed")}}{{ReadOnlyInline}}
  - : 返回一个布尔值，用于判断选区的起始点和终点是否在同一个位置。
- {{domxref("Selection/rangeCount","rangeCount")}}{{ReadOnlyInline}}
  - : 返回该选区所包含的连续范围的数量。

## 方法

- {{domxref("Selection/getRangeAt","getRangeAt")}}
  - : 返回选区包含的指定区域（{{domxref("Range")}}）的**引用**。
- {{domxref("Selection/collapse","collapse")}}
  - : 将当前的选区折叠为一个点。
- {{domxref("Selection/extend","extend")}}
  - : 将选区的焦点移动到一个特定的位置。
- {{domxref("Selection/modify","modify")}}
  - : 修改当前的选区。
- {{domxref("Selection/collapseToStart","collapseToStart")}}
  - : 将当前的选区折叠到起始点。
- {{domxref("Selection/collapseToEnd","collapseToEnd")}}
  - : 将当前的选区折叠到最末尾的一个点。
- {{domxref("Selection/selectAllChildren","selectAllChildren")}}
  - : 将某一指定节点的子节点框入选区。
- {{domxref("Selection/addRange","addRange")}}
  - : 一个区域（{{domxref("Range")}}）对象将被加入选区。
- {{domxref("Selection/removeRange","removeRange")}}
  - : 从选区中移除一个区域。
- {{domxref("Selection/removeAllRanges","removeAllRanges")}}
  - : 将所有的区域都从选区中移除。
- {{domxref("Selection/deleteFromDocument","deleteFromDocument")}}
  - : 从页面中删除选区中的内容。
- {{domxref("Selection/selectionLanguageChange","selectionLanguageChange")}}
  - : 当键盘的朝向发生改变后修改指针的 Bidi 优先级。
- {{domxref("Selection/toString","toString")}}
  - : 返回当前选区的纯文本内容。
- {{domxref("Selection/containsNode","containsNode")}}
  - : 判断某一个 {{domxref("Node")}} 是否为当前选区的一部分。

## 开发者笔记

### 选区的字符串表示

调用 {{DOMxRef("Selection.toString()")}} 方法返回包含在选区内的文本，例如：

```js
var selObj = window.getSelection();
window.alert(selObj);
```

注意，使用选择对象作为 `window.alert` 的参数将调用对象的 `toString` 方法。

### 选区中的多个区域

一个 `Selection` 对象表示用户选择的 {{DOMxRef("Range")}} 的集合。通常，它只包含一个区域，访问方式如下：

```js
var selObj = window.getSelection();
var range = selObj.getRangeAt(0);
```

- `selObj` 是一个 `Selection` 对象
- `range` 是一个 {{domxref("Range")}} 对象

`getRangeAt` 方法返回对象的**引用**，并且对该函数返回的 `Range` 对象所运行的函数，会直接作用到选区上，并可能影响用户焦点的情况。

正如 [Selection API 规范](http://www.w3.org/TR/selection-api/#h_note_15) 所指出的，Selection API 最初由 Netscape 创建，并允许多个区域（例如，允许用户从 {{HTMLElement("table")}} 中选择列）。但是，Gecko 以外的浏览器没有实现多个区域，而且规范还要求选择的内容始终（仅）具有一个范围（允许多个区域可能引起不必要的兼容性问题，例如同时从多处输入，译者注）。

### Selection 及输入焦点

选择和输入焦点（由 {{domxref("Document.activeElement")}} 表示）有一个复杂的关系，该关系因浏览器而异。在跨浏览器兼容的代码中，最好分别处理它们。

Safari 和 Chrome（与 Firefox 不同）目前在以编程方式修改 `Selection` 时会将包含选区的元素作为焦点；这可能在将来会发生变化（请参见 [W3C Bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) 和 [WebKit bug 3869](https://webkit.org/b/3869)）。

### Selection API 在可编辑元素焦点更改方面的行为

Selection API 有一个共同的行为（即在浏览器之间共通），该行为控制在调用某些方法后*可编辑元素*（Editing Host，可编辑宿主）的焦点行为如何更改。

其行为如下：

1. 如果先前的选区不在可编辑元素内，则可编辑元素将获得焦点。
2. 调用一个 Selection API 方法，从而在可编辑元素内产生一个新选区，来创造一个新的 `Selection` 区域（{{domxref("Range")}}）。
3. 然后焦点（此处应指显示的，译者注）移到可编辑元素。

> **备注：** Selection API 方法只能将焦点移动到可编辑元素，而不能移动到其他可焦点元素（例如 {{HTMLElement("a")}}）。

上述行为适用于使用以下方法产生的选区：

- {{domxref("Selection.collapse()")}}
- {{domxref("Selection.collapseToStart()")}}
- {{domxref("Selection.collapseToEnd()")}}
- {{domxref("Selection.extend()")}}
- {{domxref("Selection.selectAllChildren()")}}
- {{domxref("Selection.addRange()")}}
- {{domxref("Selection.setBaseAndExtent()")}}

以及在 {{domxref("Range")}} 使用以下方法修改时：

- {{domxref("Range.setStart()")}}
- {{domxref("Range.setEnd()")}}
- {{domxref("Range.setStartBefore()")}}
- {{domxref("Range.setStartAfter()")}}
- {{domxref("Range.setEndBefore()")}}
- {{domxref("Range.setEndAfter()")}}
- {{domxref("Range.collapse()")}}
- {{domxref("Range.selectNode()")}}
- {{domxref("Range.selectNodeContents()")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.getSelection")}}，{{domxref("document.getSelection")}}及{{domxref("Range")}}
- HTML5 DOM Range [Interface Selection](http://html5.org/specs/dom-range.html#selection)
- [IDL definition in Mozilla cross-reference](http://lxr.mozilla.org/mozilla/source/content/base/public/nsISelection.idl)
- [目前 CSS 实现竖排文本较为通用的方式是什么？](http://www.zhihu.com/question/20874144)（页内搜索"Bidi"可了解 Bidi 优先顺序）
