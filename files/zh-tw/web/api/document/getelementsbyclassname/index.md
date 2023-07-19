---
title: Document.getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
---

{{APIRef("DOM")}}

針對所有給定的 class 子元素，回傳類似陣列的物件。當呼叫 document 物件時，它會搜尋整個文件，包括根節點在內。你也可以在所有元素呼叫 {{domxref("Element.getElementsByClassName", "getElementsByClassName()")}}，那它就只會回傳含有給定 class 的特定根元素的後代元素。

## 表達式

```plain
var elements = document.getElementsByClassName(names); // or:
var elements = rootElement.getElementsByClassName(names);
```

- _elements_ 為符合 class 名稱的 {{ domxref("HTMLCollection") }}。
- _names_ 為符合 class 名稱的字串；class 名稱可以用空白分隔。
- getElementsByClassName 可以被任何不只在 document 的元素呼叫。呼叫這個方法的元素將會成為搜尋 class 的根元素。

## 範例

取得所有 class 為 「test」 的元素：

```js
document.getElementsByClassName("test");
```

取得所有 class 為 「test」 和 「red」 的元素：

```js
document.getElementsByClassName("red test");
```

取得所有在 id 為 '「main」 的元素裡 class 為 「test」 的元素：

```js
document.getElementById("main").getElementsByClassName("test");
```

我們也可以藉由傳遞 {{ domxref("HTMLCollection") }} 為 *this *來使用 `Array.prototype` 的方法。下面的例子將會找到所有 class 為 「test」 的 div 元素：

```js
var testElements = document.getElementsByClassName("test");
var testDivs = Array.prototype.filter.call(
  testElements,
  function (testElement) {
    return testElement.nodeName === "DIV";
  },
);
```

## 取得 class 是 test 的元素

這是最常用的操作方法：

```plain
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="parent-id">
        <p>hello word1</p>
        <p class="test">hello word2</p>
        <p>hello word3</p>
        <p>hello word4</p>
    </div>
    <script>
        var parentDOM = document.getElementById("parent-id");

        var test=parentDOM.getElementsByClassName("test");//test is not target element
        console.log(test);//HTMLCollection[1]

        var testTarget=parentDOM.getElementsByClassName("test")[0];//year , this element is target
        console.log(testTarget);//<p class="test">hello word2</p>
    </script>
</body>
</html>
```

## 瀏覽器相容性

{{Compat}}

## 規範

- [W3C: getElementsByClassName](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-document-getelementsbyclassname)
