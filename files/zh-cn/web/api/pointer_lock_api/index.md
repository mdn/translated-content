---
title: Pointer Lock API
slug: Web/API/Pointer_Lock_API
---

{{ SeeCompatTable() }}

**指针锁定**(以前叫做鼠标锁定) 提供了一种输入方法，这种方法是基于鼠标随着时间推移的运动的（也就是，deltas），而不仅是鼠标光标的绝对位置。通过它可以访问原始的鼠标运动，把鼠标事件的目标锁定到一个单独的元素，这就消除了鼠标在一个单独的方向上到底可以移动多远这方面的限制，并从视图中删去光标。

这个 API 对于需要大量的鼠标输入来控制运动，旋转物体，以及更改项目的应用程序来说非常有用。对高度视觉化的应用程序尤其重要，例如那些使用第一人称视角的应用程序，以及 3D 视图和建模。

举例来说，你可以创建让你的用户简单地通过移动鼠标而不需要点击任何按钮就可以控制视角的应用。那么这些按钮就可以被用作其他动作。这类鼠标输入对于查看地图，卫星图像，或者第一人称场景（例如在一个游戏中或者一个全景视频中）是非常方便使用的。

即使在光标移到浏览器或者屏幕区域之外，指针锁定也能够让你访问鼠标事件。例如，你的用户可以通过不断地移动鼠标来持续旋转或操纵一个 3D 模型。如果没有指针锁定的话，这些旋转或操纵会在指针到达浏览器或者屏幕边缘的那一刻停止。尤其是游戏玩家将会因为此功能而兴奋不已，因为他们可以疯狂地点击按钮，来回地滑动鼠标光标，而不必担心离开了游戏区域，进而不小心误点到另外一个应用程序上，结果将鼠标焦点移离了游戏。杯具了！

## 基本概念

指针锁定和[鼠标捕获](/zh-CN/DOM/element.setCapture)有关。鼠标捕获在一个鼠标被拖曳时可以向一个目标元素持续传递有关事件，但是当鼠标按钮被放开时就会停止。指针锁定和鼠标捕获在以下方面有所不同：

- 它是持久性的。指针锁定不释放鼠标，直到作出一个显式的 API 调用或是用户使用一个专门的释放手势。
- 它不局限于浏览器或者屏幕边界。
- 它持续发送事件，而不管鼠标按钮状态如何。
- 它隐藏光标。

## 示例

下面是一个如何在你的网页中设置指针锁定的示例。

```js
<button onclick="lockPointer();">锁住它！</button>
<div id="pointer-lock-element"></div>
<script>
// 注意：截止本文撰写时，仅有 Mozilla 和 WebKit 支持指针锁定。

// 我们将要使之全屏并指针锁定的元素。
var elem;

document.addEventListener("mousemove", function(e) {
  var movementX = e.movementX       ||
                  e.mozMovementX    ||
                  e.webkitMovementX ||
                  0,
      movementY = e.movementY       ||
                  e.mozMovementY    ||
                  e.webkitMovementY ||
                  0;

  // 打印鼠标移动的增量值。
  console.log("movementX=" + movementX, "movementY=" + movementY);
}, false);

function fullscreenChange() {
  if (document.webkitFullscreenElement === elem ||
      document.mozFullscreenElement === elem ||
      document.mozFullScreenElement === elem) { // 较旧的 API 大写 'S'.
    // 元素进入全屏模式了，现在我们可以请求指针锁定。
    elem.requestPointerLock = elem.requestPointerLock    ||
                              elem.mozRequestPointerLock ||
                              elem.webkitRequestPointerLock;
    elem.requestPointerLock();
  }
}

document.addEventListener('fullscreenchange', fullscreenChange, false);
document.addEventListener('mozfullscreenchange', fullscreenChange, false);
document.addEventListener('webkitfullscreenchange', fullscreenChange, false);

function pointerLockChange() {
  if (document.mozPointerLockElement === elem ||
      document.webkitPointerLockElement === elem) {
    console.log("指针锁定成功了。");
  } else {
    console.log("指针锁定已丢失。");
  }
}

document.addEventListener('pointerlockchange', pointerLockChange, false);
document.addEventListener('mozpointerlockchange', pointerLockChange, false);
document.addEventListener('webkitpointerlockchange', pointerLockChange, false);

function pointerLockError() {
  console.log("锁定指针时出错。");
}

document.addEventListener('pointerlockerror', pointerLockError, false);
document.addEventListener('mozpointerlockerror', pointerLockError, false);
document.addEventListener('webkitpointerlockerror', pointerLockError, false);

function lockPointer() {
  elem = document.getElementById("pointer-lock-element");
  // 开始于使元素进入全屏模式。目前的实现
  // 要求元素在请求指针锁定前要处于全屏模式下
  // -- 这在以后可能会发生改变。
  elem.requestFullscreen = elem.requestFullscreen    ||
                           elem.mozRequestFullscreen ||
                           elem.mozRequestFullScreen || // 较旧的 API 把‘S’大写
                           elem.webkitRequestFullscreen;
  elem.requestFullscreen();
}
</script>
```

## 方法/属性 概述

Pointer lock API，和 Fullscreen API 类似，通过添加新方法来扩展 DOM 元素，`requestPointerLock`, 目前还是厂商前缀。按下面这样来写：

```js
element.webkitRequestPointerLock(); // Chrome

element.mozRequestPointerLock(); // Firefox
```

目前 `requestPointerLock` 的实现还是和 `requestFullScreen` 以及 Fullscreen API 紧紧地绑在一起的。一个元素在能够被指针锁定之前，必须首先进入全屏模式。就像上面演示的那样，锁定指针的过程是异步的，使用 (`pointerlockchange`, `pointerlockerror`) 事件来表明请求是成功还是失败了。这和 Fullscreen API 的工作方式是一致的，它使用 `requestFullScreen` 方法，以及 `fullscreenchange` 和 `fullscreenerror` 事件。

Pointer lock API 还扩展了 `document` 接口，添加了一个新的属性和一个新的方法。新的属性被用于访问当前被锁定的元素（如果有的话），并被命名为 `pointerLockElement`，目前也使用厂商前缀。 `document` 添加的新方法是 `exitPointerLock` ，顾名思义，它是用来退出指针锁定的。

`pointerLockElement` 属性适用于确定当前是否有被指针锁定的元素（例如，用来做一个布尔检查），以及当有元素被锁定时获取该元素的一个引用。下面是这两种用法的一个例子：

```js
document.pointerLockElement =
  document.pointerLockElement ||
  document.mozPointerLockElement ||
  document.webkitPointerLockElement;

// 1) 用于布尔检查 -- 我们被指针锁定了吗？
if (!!document.pointerLockElement) {
  // 指针被锁定
} else {
  // 指针未被锁定
}

// 2) 用于访问指针锁定的元素
if (document.pointerLockElement === someElement) {
  // someElement 当前被指针锁定
}
```

`document` 的 `exitPointerLock` 方法被用来退出指针锁定，而且和 requestPointerLock 一样，使用 `pointerlockchange` 和 `pointerlockerror`事件以异步方式工作：

```js
document.exitPointerLock =
  document.exitPointerLock ||
  document.mozExitPointerLock ||
  document.webkitExitPointerLock;

function pointerLockChange() {
  document.pointerLockElement =
    document.pointerLockElement ||
    document.mozPointerLockElement ||
    document.webkitPointerLockElement;

  if (!!document.pointerLockElement) {
    console.log("目前还是被锁定。");
  } else {
    console.log("已经退出锁定。");
  }
}

document.addEventListener("pointerlockchange", pointerLockChange, false);
document.addEventListener("mozpointerlockchange", pointerLockChange, false);
document.addEventListener("webkitpointerlockchange", pointerLockChange, false);

// 试图解除锁定
document.exitPointerLock();
```

## pointerlockchange 事件

当指针锁定状态改变时 - 例如，当调用 `requestPointerLock`, `exitPointerLock`，用户按下 ESC 键，等等。— `pointerlockchange` 事件被分发到 `document`。这是一个简单事件所以不包含任何的额外数据。

> **备注：** 该事件目前在 Firefox 中使用前缀的格式是 `mozpointerlockchange` ，在 Chrome 中是 `webkitpointerlockchange`。

## pointerlockerror 事件

当调用 `requestPointerLock` 或 `exitPointerLock`而引发错误时， `pointerlockerror` 事件被分发到 `document`。这是一个简单事件所以不包含任何的额外数据。

> **备注：** 该事件目前在 Firefox 中被加上前缀为 `mozpointerlockerror` ，在 Chrome 中为 `webkitpointerlockerror`。

## 鼠标事件扩展

Pointer lock API 使用 movement 属性扩展了标准的 `MouseEvent`。

```webidl
partial interface MouseEvent {
    readonly attribute long movementX;
    readonly attribute long movementY;
};
```

> **备注：** movement 属性目前在 Firefox 中被加上前缀为 `.mozMovementX` 和 `.mozMovementY` , 在 Chrome 中为`.webkitMovementX` 和 `.webkitMovementY`。

鼠标事件的两个新参数—`movementX` 和 `movementY`—提供了鼠标位置的变化情况。这两个参数的值，等于两个[`MouseEvent`](/zh-CN/DOM/MouseEvent) 属性（ `screenX` 和 `screenY）`之间值的变化程度，这些 MouseEvent 属性被存储在两个连续的鼠标移动事件（ `eNow` 和 `ePrevious`）中。换言之，指针锁定参数 `movementX = eNow.screenX - ePrevious.screenX`。（译注：不存在名为 eNow 或 ePrevious 的事件或属性，eNow 代指当前的鼠标移动事件，ePrevious 代指前一个鼠标移动事件）

### 锁定状态

当指针锁定被启动之后，正常的 `MouseEvent` 属性 `clientX`, `clientY`, `screenX`, 和 `screenY` ，保持不变，就像鼠标没有在移动一样。 `movementX` 和 `movementY` 属性持续提供鼠标的位置变化。如果鼠标在一个方向上持续移动，`movementX` 和 `movementY`的值是没有限制的。不存在鼠标光标的概念，而且光标无法移到窗口之外，而且也不会被屏幕边缘所固定。

### 未锁定状态

无论鼠标锁定状态是怎样的， `movementX` 和 `movementY` 参数一直有效，并且为了方便起见，甚至在未锁定状态也是有效的。

当鼠标被解除锁定，系统光标可以退出并重新进入浏览器窗口。如果发生这种情况，`movementX` 和 `movementY` 可能会被设置成 0。

## iframe 的限制

指针锁定一次只能锁定一个 iframe。如果你锁定了一个 iframe，你不能试图锁定另外一个 iframe 然后把目标转移到这个 iframe 上；指针锁定将会出错。为了避免这一问题，首先解锁那个锁定的 iframe，然后再锁定另外一个。

在 iframe 默认的情况下， "sandboxed" iframes 会阻止指针锁定。避免这种限制的能力，即以属性/值 `<iframe sandbox="allow-pointer-lock">` 组合的形式 , 有望很快在 Chrome 中出现。

## 浏览器兼容性

{{Compat}}

## 参见

[W3C Pointer Lock API Specification](http://dvcs.w3.org/hg/pointerlock/raw-file/default/index.html)

[MouseEvent](/zh-CN/DOM/MouseEvent)
