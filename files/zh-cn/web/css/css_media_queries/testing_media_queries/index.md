---
title: 使用编程方法测试媒体查询
slug: Web/CSS/CSS_media_queries/Testing_media_queries
---

{{CSSRef}}

{{Glossary("DOM")}} 提供了通过编程方法来获得[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries)结果的特性。这是通过 {{domxref("MediaQueryList")}} 接口和它的方法来实现的。创建了 `MediaQueryList` 对象之后，就可以通过它来检查查询结果，或者设置事件监听器，在查询结果发生变化时自动接收到通知。

## 创建媒体查询列表

在获取查询结果前，首先要创建查询列表，也就是 `MediaQueryList` 对象来存放媒体查询。为了实现这个目的，可以使用 {{domxref("window.matchMedia")}} 方法。

举个例子，设置一个用来判断设备的旋转方向（横屏还是竖屏）的查询列表：

```js
var mediaQueryList = window.matchMedia("(orientation: portrait)");
```

## 检查查询结果

一旦创建了媒体查询列表，你就可以通过检查它的 `matches` 属性来获取相应的查询结果，上述属性会直接返回查询结果：

```js
if (mediaQueryList.matches) {
  /* 设备的旋转方向为纵向 portrait */
} else {
  /* 设备的旋转方向不是纵向，也就是横向 landscape */
}
```

## 接收查询提醒

如果你需要持续观察查询结果值的变化情况，那么，注册一个[监听器](/zh-CN/docs/Web/API/EventTarget/addEventListener)比手动检查查询结果要高效很多。要注册监听器，只要在 {{domxref("MediaQueryList")}} 对象上使用 `addListener()` 方法，并使用一个回调函数作为其参数。这样，就通过实现 {{domxref("MediaQueryListListener")}} 接口指定了一个监听器。每当查询结果发生变化，比如从 `true` 变为 `false` 时，就会调用一遍传入的回调函数。

```js
// 创建查询列表
const mediaQueryList = window.matchMedia("(orientation: portrait)");

// 定义回调函数
function handleOrientationChange(mql) {
  // ...
}

// 先运行一次回调函数
handleOrientationChange(mediaQueryList);

// 为查询列表注册监听器，同时将回调函数传给监听器
mediaQueryList.addListener(handleOrientationChange);
```

上述代码创建了一个屏幕方向的测试查询列表 `mediaQueryList`，并且添加了事件监听器。需要注意的是，当我们添加监听后，我们其实直接调用了一次监听。这会让我们的监听器以目前设备的屏幕方向来初始化判定代码。换句话说，如果我们代码中设定设备处于竖屏模式，而实际上它在启动时处于横屏模式，那么我们在后面的判定就会出现矛盾。

然后，我们就能在 `handleOrientationChange()` 方法中检查查询结果，比如，可以设置屏幕方向变化后的逻辑处理代码：

```js
function handleOrientationChange(evt) {
  if (evt.matches) {
    /* The viewport is currently in portrait orientation */
  } else {
    /* The viewport is currently in landscape orientation */
  }
}
```

## 终止查询通知

如果不再需要再接收媒体查询值变化的相关通知，那么，只要调用 `MediaQueryList` 的 `removeListener()` 方法，就可以方便地移除监听：

```js
mediaQueryList.removeListener(handleOrientationChange);
```

## 浏览器兼容性

### `MediaQueryList` 接口

{{Compat}}

## 参见

- [Media queries](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{domxref("window.matchMedia()") }}
- {{domxref("MediaQueryList") }}
- {{domxref("MediaQueryListListener") }}
