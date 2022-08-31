---
title: TextRange
slug: orphaned/Web/API/TextRange
original_slug: Web/API/TextRange
---
{{ ApiRef("DOM") }}{{Non-standard_Header}}

> **警告：** 该属性是 IE 专有的。尽管 IE 很好地支持它，但大部分其它浏览器已经不支持该属性。该属性仅应在需兼容低版本 IE 时作为其中一种方案，而不是在跨浏览器的脚本中完全依赖它。

`TextRange` 对象表示文档中的文本片段，类似于标准定义的 {{domxref("Range")}} 接口。

此对象用于表示文档中特定的一段文本，例如在按住鼠标选中页面上的内容时，创建出的就是一个较为典型的 `TextRange`。它在 IE 中被实现，可通过 {{domxref("Element.createTextRange()")}} 方法或是 {{domxref("MSSelection.createRange()")}} 方法创建一个 `TextRange` 对象。

注意，在非 IE 浏览器不支持该接口，可使用替代的 {{domxref("Selection")}} 及 {{domxref("Range")}} 接口。

## 属性

- {{domxref("TextRange.boundingHeight")}}{{ReadOnlyInline}}
  - : 返回绑定 `TextRange` 对象的矩形的高度。
- {{domxref("TextRange.boundingLeft")}}{{ReadOnlyInline}}
  - : 返回绑定 `TextRange` 对象的矩形左边缘和完全包含 `TextRange` 对象的左侧之间的距离。
- {{domxref("TextRange.boundingTop")}}{{ReadOnlyInline}}
  - : 返回绑定 `TextRange` 对象的矩形上边缘和完全包含 `TextRange` 对象的顶边之间的距离。
- {{domxref("TextRange.boundingWidth")}}{{ReadOnlyInline}}
  - : 返回绑定 `TextRange` 对象的矩形的宽度。
- {{domxref("TextRange.htmlText")}}
  - : 获取或设置 `TextRange` 内的 HTML 内容。
- {{domxref("TextRange.text")}}
  - : 获取或设置 `TextRange` 内的纯文本内容。

## 方法

- {{domxref("TextRange.collapse()")}}
  - : 将插入光标(Caret)移动到当前范围的开始或结尾。
- {{domxref("TextRange.duplicate()")}}
  - : 返回 `TextRange` 的副本。
- {{domxref("TextRange.execCommand()")}}
  - : 在当前文档、当前选中区或给定范围上执行[命令](/zh-CN/docs/Web/API/Document/execCommand)。
- {{domxref("TextRange.expand()")}}
  - : 扩展区域，以便完全包含指定单位的范围。例如，扩展一个 `"word"` 表示把区域两端的单词完全包含在区域内，如 `xpand to wor` 可能变成 `expand to words`。
- {{domxref("TextRange.findText()")}}
  - : 搜索原先区域内的指定文本，并调整区域使其包含第一次匹配的内容。
- {{domxref("TextRange.inRange()")}}
  - : 返回当前区域是否包含指定区域。
- {{domxref("TextRange.isEqual()")}}
  - : 返回当前区域是否与指定区域相等。
- {{domxref("TextRange.move()")}}
  - : 将区域折叠(collapse)，并将空白区域移动指定单位数。如 `move("character",-1)` 表示向左移动一个字符。
- {{domxref("TextRange.moveEnd()")}}
  - : 将区域的结束位置移动指定单位数。
- {{domxref("TextRange.moveStart()")}}
  - : 将区域的开始位置移动指定单位数。
- {{domxref("TextRange.moveToElementText()")}}
  - : 使区域包含指定元素的文本。只能用于 {{domxref("Element")}} 对象。
- {{domxref("TextRange.parentElement()")}}
  - : 返回区域的父元素，也就是完全包含区域的最小元素。如果选区包含多个元素，则当修改选区的内容时，内容将放置在该父元素的对应位置中，而不是放在子元素中。
- {{domxref("TextRange.pasteHTML()")}}
  - : 将 HTML 内容粘贴入给定范围，并替换范围内任何先前的文本和 HTML 元素。
- {{domxref("TextRange.queryCommandEnabled()")}}
  - : 返回表明指定命令是否可于给定文档当前状态下使用 `execCommand` 命令成功执行的 {{jsxref("Boolean")}} 值。参见 {{domxref("Document.queryCommandEnabled()")}}。
- {{domxref("TextRange.queryCommandState()")}}
  - : 返回表明指定命令当前状态的 {{jsxref("Boolean")}} 值。参见 {{domxref("Document.queryCommandState()")}}。
- {{domxref("TextRange.queryCommandValue()")}}
  - : 返回表明指定命令当前值的 {{domxref("DOMString")}}。参见 {{domxref("Document.queryCommandValue()")}}。
- {{domxref("TextRange.scrollIntoView()")}}
  - : 将区域滚动到可视范围内（顶部或底部）。可作为 {{domxref("Element.scrollIntoView")}} 在低版本 IE 下的一种替代方法。
- {{domxref("TextRange.select()")}}
  - : 将当前区域选中（即用户看到的蓝色选区）。
- {{domxref("TextRange.setEndPoint()")}}
  - : 根据其它 `TextRange` 的端点设置当前区域的端点。

## 示例

以下示例在 IE10 以下有效。该示例通过 `document.selection` 获取 `TextRange`，并设置选中指定的元素。IE9 以上支持标准的替代方案 {{domxref("Range")}}。

```js
var range = document.selection.createRange();
var element = document.getElementById("test");
range.moveToElementText(element);
range.select();
// 选中"一些将被选中的文本"
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>TextRange示例</title>
</head>
<body>
  <p id="test">一些将被选中的文本</p>
</body>
</html>
```

## 开发者笔记

### 使用 TextRange 操作选中区域

> **警告：** 仅在**IE10 以下**有效。在浏览器允许的情况下，应优先使用 {{domxref("Selection")}} 接口。

{{domxref("document.selection")}} 属性返回一个非标准的 {{domxref("MSSelection")}} 对象，`selection.createRange()` 方法创建一个和当前选中区域一致的 `TextRange` 对象。

```js
var sel = document.selection;
var range = sel.createRange();
alert(range.text);
// 输出被选区域的纯文本
```

注意，`createRange` 方法并不创建引用，如果在对选区修改后希望修改后区域被选中，则需要调用 `TextRange.select` 方法。

### `selection` 兼容性

`document.selection` 对象是 `TextRange` 的主要用途。该对象用于处理文档中被选中的区域，并且主要依靠使用 `TextRange` 接口实现。标准规定一个窗口/文档可能有多个不相邻选区，但只有 Firefox 实现通过 <kbd>Ctrl</kbd> 选中多个区域；IE 中一般也只允许文档只存在一个被选中的 `TextRange`。

然而，在其它浏览器中，`document` 并不存在一个所谓 `selection` 属性——它们通过标准 [Selection API](/zh-CN/docs/Web/API/Selection_API) 实现对选区的操作，也就是通过 `window.getSelection()` 方法获取 `Selection` 对象，并使用标准的 `Range` 对象对文本片段作出处理。IE11 及之后的版本也放弃了 `document.selection` 对象而转为使用标准接口（尽管 `TextRange` 一直保留，但大多数情况下它已失去作用）。

这很容易引起迷惑。通常，如果脚本只要求兼容最新的浏览器，那么标准的接口是最佳的选择；但通常目前的网站仍希望兼容 IE8 或其以下的浏览器，因此，最好的做法是同时处理两者，也就是在不支持标准接口时尝试使用 `TextRange` 方式，但不要把该方式作为唯一的选择。

## 浏览器兼容性

|                                                                   | IE                         | 其它浏览器                                                       |
| ----------------------------------------------------------------- | -------------------------- | ---------------------------------------------------------------- |
| {{domxref("TextRange")}} {{non-standard_inline()}} | 支持(IE9 后应使用标准 API) | 不支持（详见[Selection API](/zh-CN/docs/Web/API/Selection_API)） |

## 扩展

- {{domxref("Selection")}} 及 {{domxref("Range")}} 标准接口
- [Selection API](/zh-CN/docs/Web/API/Selection_API) 用于取代该非标准接口
