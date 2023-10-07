---
title: Element.childElementCount
slug: Web/API/Element/childElementCount
---

{{ APIRef("DOM") }}

**`Element.childElementCount`** 只读属性返回一个**_无符号长整型数字_**，表示给定元素的子元素数。

> **备注：** This property was initially defined in the {{domxref("ElementTraversal")}} pure interface. As this interface contained two distinct set of properties, one aimed at {{domxref("Node")}} that have children, one at those that are children, they have been moved into two separate pure interfaces, {{domxref("Element")}} and {{domxref("ChildNode")}}. In this case, `childElementCount` moved to {{domxref("Element")}}. This is a fairly technical change that shouldn't affect compatibility.

## 语法

```
var count = node.childElementCount;
```

```
var elCount = elementNodeReference.childElementCount;
```

- count
  - : holds the return value an `unsigned long` (simply an integer) type.
- node
  - : is an object representing a `Document`, `DocumentFragment` or `Element`.

## 例子

```
var foo = document.getElementById("foo");
if (foo.childElementCount > 0) {
    // do something
}
```

下例演示了一个元素节点的`childElementCount`属性以及`children`属性的用法。

```
<head>
    <script type="text/javascript">
        function GetChildCount () {
            var container = document.getElementById ("container");

            var childCount = 0;
            //如果支持 childElementCount 属性
            if ('childElementCount' in container) {
                childCount = container.childElementCount;
            }
            else {
            //如果支持 children 属性，IE6/7/8
            //译者注：没有判断 nodeType 是否为 1，可能包含注释节点。
                if (container.children) {
                    childCount = container.children.length;
                }
                else {  //,如果都不支持，Firefox 3.5 之前版本
                    var child = container.firstChild;
                    while (child) {
                        if (child.nodeType == 1 /*Node.ELEMENT_NODE*/) {
                            childCount++;
                        }
                        child = child.nextSibling;
                    }
                }
            }

            alert ("The number of child elements is " + childCount);
        }
    </script>
</head>
<body>
    <div id="container" style="width:300px; background-color:#a0d0e0;">
        Some text inside the container.
        <input type="text" size="40" value="a child element of the container" />
        <div>
            <div>a descendant element of the container</div>
            <div>another descendant element of the container</div>
        </div>
    </div>
    <br /><br />
    <button onclick="GetChildCount ();">Get the number of container's child elements</button>
</body>
```

执行上面的例子：<http://help.dottoro.com/external/examples/ljsfamht/childElementCount_1.htm>

## 浏览器兼容性

{{Compat}}

## 规范

[childElementCount (W3C)](http://www.w3.org/TR/2008/WD-ElementTraversal-20080303/#attribute-childElementCount)

## 相关链接

- [`children`](/zh-CN/DOM/Element.children)
- [`firstElementChild`](/zh-CN/DOM/Element.firstElementChild)
- [`lastElementChild`](/zh-CN/DOM/Element.lastElementChild)
- [`nextElementSibling`](/zh-CN/DOM/Element.nextElementSibling)
- [`previousElementSibling`](/zh-CN/DOM/element.previousElementSibling)
