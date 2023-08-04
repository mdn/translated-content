---
title: MediaQueryList.addListener()
slug: Web/API/MediaQueryList/addListener
---

{{APIRef("CSSOM")}}

{{DOMxRef("MediaQueryList")}}接口的 **`addListener()`** 方法向`MediaQueryListener`添加一个侦听器，该侦听器将运行自定义回调函数以响应媒体查询状态的更改。

从本质上讲，这是{{DOMxRef("EventTarget.addEventListener()")}}的别名，用于向后兼容。较旧的浏览器应使用`addListener`而不是`addEventListener`，因为 MediaQueryList 仅从较新的浏览器中的 EventTarget 继承。

## 语法

```plain
MediaQueryList.addListener(func)
```

### 参数

- func
  - : 表示您要在媒体查询状态更改时运行的回调函数的函数或函数引用。在原始实现中，回调是一个非标准的{{DOMxRef("MediaQueryListListener")}}对象。在新的实现中，使用标准事件机制，回调是标准函数，事件对象是{{DOMxRef("MediaQueryListEvent")}}，它继承自{{DOMxRef("Event")}}。

### 返回值

Void.

## 例子

```js
var mql = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    /* the viewport is more than than 600 pixels wide */
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
  }
}

mql.addListener(screenTest);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Media queries](/zh-CN/docs/CSS/Media_queries)
- [Using media queries from code](/zh-CN/docs/CSS/Using_media_queries_from_code)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
