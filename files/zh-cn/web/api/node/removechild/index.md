---
title: Node.removeChild
slug: Web/API/Node/removeChild
---

{{APIRef("DOM")}}

**Node.removeChild()** 方法从 DOM 中删除一个子节点。返回删除的节点。

## 语法

```plain
let oldChild = node.removeChild(child);

//OR

element.removeChild(child);
```

- `child` 是要移除的那个子节点。
- `node` 是`child`的父节点。
- oldChild 保存对删除的子节点的引用。`oldChild` === `child`.

被移除的这个子节点仍然存在于内存中，只是没有添加到当前文档的 DOM 树中，因此，你还可以把这个节点重新添加回文档中，当然，实现要用另外一个变量比如`上例中的 oldChild`来保存这个节点的引用。如果使用上述语法中的第二种方法，即没有使用 oldChild 来保存对这个节点的引用，则认为被移除的节点已经是无用的，在短时间内将会被[内存管理](/zh-CN/docs/Web/JavaScript/Memory_Management)回收。

如果上例中的`child 节点`不是`node`节点的子节点，则该方法会抛出异常。

## 示例

```plain
<!--Sample HTML code-->
<div id="top" align="center"> </div>

<script type="text/javascript">
      var top = document.getElementById("top");
      var nested = document.getElementById("nested");
      var garbage = top.removeChild(nested);
      //Test Case 2: the method throws the exception (2)
</script>

<!--Sample HTML code-->
<div id="top" align="center">
 <div id="nested"></div>
</div>

<script type="text/javascript">
      var top = document.getElementById("top");
      var nested = document.getElementById("nested");
      var garbage = top.removeChild(nested);
      // This first call remove correctly the node
      garbage = top.removeChild(nested);
      // Test Case 1: the method in the second call here, throws the exception (1)
</script>
```

```plain
<!--示例 HTML 代码-->

<div id="top" align="center">
  <div id="nested"></div>
</div>
```

```js
// 先定位父节点，然后删除其子节点
var d = document.getElementById("top");
var d_nested = document.getElementById("nested");
var throwawayNode = d.removeChild(d_nested);
```

```js
// 无须定位父节点，通过 parentNode 属性直接删除自身
var node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

```js
// 移除一个元素节点的所有子节点
var element = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

## 规范

- [DOM Level 1 Core: removeChild](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeChild)
- [DOM Level 2 Core: removeChild](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1734834066)
- [DOM Level 3 Core: removeChild](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1734834066)

## 相关链接

- {{domxref("Node.replaceChild")}}
- {{domxref("Node.parentNode")}}
- {{domxref("ChildNode.remove")}}
