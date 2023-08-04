---
title: Element.scrollWidth
slug: Web/API/Element/scrollWidth
---

{{ APIRef("DOM") }}**`Element.scrollWidth`** 这个只读属性是元素内容宽度的一种度量，包括由于 overflow 溢出而在屏幕上不可见的内容。

`scrollWidth`值等于元素在不使用水平滚动条的情况下适合视口中的所有内容所需的最小宽度。宽度的测量方式与{{domxref("Element.clientWidth", "clientWidth")}}相同：它包含元素的内边距，但不包括边框，外边距或垂直滚动条（如果存在）。它还可以包括伪元素的宽度，例如{{cssxref("::before")}}或{{cssxref("::after")}}。如果元素的内容可以适合而不需要水平滚动条，则其`scrollWidth`等于{{domxref("Element.clientWidth", "clientWidth")}}

> **备注：** 1. 这个属性会进行四舍五入并返回整数，如果你需要小数形式的值，使用{{ domxref("element.getBoundingClientRect()") }}_._
>
> _2. 在实际测试过程中，谷歌获取的_ **`Element.scrollWidth`** 和 IE，火狐下获取的 **`Element.scrollWidth`** 并不相同

## 语法

```
var xScrollWidth = element.scrollWidth;
```

xScrollWidth 的值是元素的内容宽度。

## 例子

```
<!DOCTYPE html>
<html>
<head>
    <title>Example</title>
    <style>
        div {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        #aDiv {
            width: 100px;
        }

        button {
            margin-bottom: 2em;
        }
    </style>
</head>

<body>
    <div id="aDiv">
        FooBar-FooBar-FooBar-FooBar
    </div>
    <button id="aButton">
        Check for overflow
    </button>

    <div id="anotherDiv">
        FooBar-FooBar-FooBar-FooBar
    </div>
    <button id="anotherButton">
        Check for overflow
    </button>
</body>
<script>
    var buttonOne = document.getElementById('aButton'),
    buttonTwo = document.getElementById('anotherButton'),
    divOne = document.getElementById('aDiv'),
    divTwo = document.getElementById('anotherDiv');

    //check to determine if an overflow is happening
    function isOverflowing(element) {
        return (element.scrollWidth > element.offsetWidth);
    }

    function alertOverflow(element) {
        if (isOverflowing(element)) {
            alert('Contents are overflowing the container.');
        } else {
            alert('No overflows!');
        }
    }

    buttonOne.addEventListener('click', function() {
        alertOverflow(divOne);
    });

    buttonTwo.addEventListener('click', function() {
        alertOverflow(divTwo);
    });
</script>
</html>
```

## 规范

The [CSSOM View Module](http://dev.w3.org/csswg/cssom-view/#dom-element-scrollwidth) defines `scrollWidth`

## 相关

- {{domxref("Element.clientWidth")}}
- {{domxref("Element.offsetWidth")}}
- [Determining the dimensions of elements](/zh-CN/docs/Determining_the_dimensions_of_elements)
