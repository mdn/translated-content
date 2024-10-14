---
title: 指针锁定 API
slug: Web/API/Pointer_Lock_API
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{DefaultAPISidebar("Pointer Lock API")}}

**指针锁定 API**（Pointer Lock API，以前叫做 _Mouse Lock API_）提供了一种基于鼠标随着时间推移（也就是增量）的运动的输入方法，而不仅是鼠标光标在视口中的绝对位置。通过它可以访问原始的鼠标运动，把鼠标事件的目标锁定到一个单独的元素，这就消除了鼠标在一个单独的方向上到底可以移动多远这方面的限制，并从视图中删去光标。例如，它是第一人称 3D 游戏的理想选择。

不仅如此，该 API 对于需要大量鼠标输入来控制移动、旋转对象和更改条目的任何应用程序都非常有用，例如，允许用户通过移动鼠标来控制视角，而无需单击任何按钮。然后释放按钮以执行其他操作。其他示例包括用于查看地图或卫星图像的应用程序。

指针锁定让你即使光标超出浏览器或屏幕的边界也能访问鼠标事件。例如，你的用户可以通过无休止地移动鼠标来继续旋转或操作 3D 模型。如果没有指针锁定，旋转或操作会在指针到达浏览器或屏幕的边缘时停止。游戏玩家现在可以点击按钮并来回滑动鼠标光标，而不必担心离开游戏区域并意外点击另一个应用程序而导致鼠标焦点从游戏中移开。

## 基本概念

指针锁定和[指针捕获](/zh-CN/docs/Web/API/Pointer_events#指针捕捉)有关。指针捕获在鼠标被拖曳时可以向一个目标元素持续传递有关事件，但是当鼠标按钮被放开时就会停止。指针锁定和指针捕获在以下方面有所不同：

- 它是持久性的。指针锁定不释放鼠标，直到作出一个显式的 API 调用或是用户使用一个专门的释放手势。
- 它不局限于浏览器或者屏幕边界。
- 它持续发送事件，而不管鼠标按钮状态如何。
- 它隐藏光标。

## 方法/属性概述

本小节对与指针锁定规范相关的每个属性和方法进行了简要说明。

### requestPointerLock()

指针锁定 API 与[全屏 API](/zh-CN/docs/Web/API/Fullscreen_API) 类似，通过添加新方法 {{domxref("Element.requestPointerLock", "re​​questPointerLock()")}} 来扩展 DOM 元素。以下示例请求对 {{htmlelement("canvas")}} 元素进行指针锁定：

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

> [!NOTE]
> 如果用户通过[默认解锁手势](https://w3c.github.io/pointerlock/#dfn-default-unlock-gesture)退出指针锁定，或者之前未为此文档输入指针锁定，则文档必须收到[参与手势](https://w3c.github.io/pointerlock/#dfn-engagement-gesture)生成的事件，[`requestPointerLock`](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock) 才会成功。（来自 <https://w3c.github.io/pointerlock/#extensions-to-the-element-interface>）

操作系统默认启用鼠标加速，这在你有时想要缓慢精确移动（想想你可能会使用图形包）时很有用，但也希望通过更快的鼠标移动移动很远的距离（想想滚动和选择多个文件）。然而，对于一些第一人称视角游戏，原始鼠标输入数据更适合用于控制相机旋转——相同距离的移动（无论快或慢）都会导致相同的旋转。专业游戏玩家表示，这会带来更好的游戏体验和更高的准确度。

要禁用操作系统级鼠标加速并访问原始鼠标输入，你可以将 `unadjustedMovement` 设置为 `true`：

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

## 处理 requestPointerLock() 的 promise 版本和非 promise 版本

上述代码片段在不支持基于 promise 的 `requestPointerLock()` 版本或 `unadjustedMovement` 选项的浏览器中仍可正常工作——允许在不返回 promise 的函数前面使用 [`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await) 运算符，并且选项对象将在不支持的浏览器中被忽略。

但是，这可能会造成混淆，并且有其他潜在的副作用（例如，尝试使用 `requestPointerLock().then()` 会在不支持的浏览器中引发错误），因此你可能需要使用以下代码明确处理此问题：

```js
function requestPointerLockWithUnadjustedMovement() {
  const promise = myTargetElement.requestPointerLock({
    unadjustedMovement: true,
  });

  if (!promise) {
    console.log("不支持禁用鼠标加速");
    return;
  }

  return promise
    .then(() => console.log("指针被锁定"))
    .catch((error) => {
      if (error.name === "NotSupportedError") {
        // 有些平台可能不支持未调整的移动。你可以重新请求常规指针锁定。
        return myTargetElement.requestPointerLock();
      }
    });
}
```

### pointerLockElement 和 exitPointerLock()

指针锁定 API 还扩展了 {{domxref("Document")}} 接口，添加了一个新属性和一个新方法：

- {{domxref("Document.pointerLockElement","pointerLockElement")}} 用于访问当前锁定的元素（如果有）。
- {{domxref("Document.exitPointerLock","exitPointerLock()")}} 用于退出指针锁定。

{{domxref("Document.pointerLockElement","pointerLockElement")}} 属性可用于确定任何元素当前是否被指针锁定（例如，进行布尔检查），也可用于获取对锁定元素的引用（如果有）。

以下是使用 `pointerLockElement` 的示例：

```js
if (document.pointerLockElement === canvas) {
  console.log("指针锁定状态现已锁定");
} else {
  console.log("指针锁定状态现已解锁");
}
```

{{domxref("Document.exitPointerLock()")}} 方法用于退出指针锁定，与 {{domxref("Element.requestPointerLock","re​​questPointerLock")}} 一样，使用 {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} 和 {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} 事件异步运行，你将在下面看到更多相关内容。

```js
document.exitPointerLock();
```

## pointerlockchange 事件

当指针锁定状态改变时——例如，当调用 {{domxref("Element.requestPointerLock","requestPointerLock()")}} 或 {{domxref("Document.exitPointerLock","exitPointerLock()")}}，用户按下 ESC 键，等等——{{domxref("Document/pointerlockchange_event", "pointerlockchange")}} 事件在 `document` 上触发。这是一个不包含任何的额外数据的简单事件。

```js
document.addEventListener("pointerlockchange", lockChangeAlert, false);

function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log("指针锁定状态现已锁定");
    // 做一些有用的事情作为回应
  } else {
    console.log("指针锁定状态现已解锁");
    // 做一些有用的事情作为回应
  }
}
```

## pointerlockerror 事件

当调用 {{domxref("Element.requestPointerLock","requestPointerLock()")}} 或 {{domxref("Document.exitPointerLock","exitPointerLock()")}} 而引发错误时， {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} 事件在 `document` 上触发。这是一个简单事件所以不包含任何的额外数据。

```js
document.addEventListener("pointerlockerror", lockError, false);

function lockError(e) {
  alert("指针锁定失败");
}
```

## 鼠标事件的扩展

指针锁定 API 扩展了普通的 {{domxref("MouseEvent")}} 接口，使其具有 movement 属性。鼠标事件的两个新属性——{{domxref("MouseEvent.movementX","movementX")}} 和 {{domxref("MouseEvent.movementY","movementY")}}——提供鼠标位置的变化。参数的值与 {{domxref("MouseEvent")}} 属性值 {{domxref("MouseEvent.screenX","screenX")}} 和 {{domxref("MouseEvent.screenY","screenY")}} 之间的差值相同，它们存储在两个后续 {{domxref("Element/mousemove_event", "mousemove")}} 事件 `eNow` 和 `ePrevious` 中。换句话说，指针锁定参数 `movementX = eNow.screenX - ePrevious.screenX`。

### 锁定状态

当指针锁定被启动之后，标准的 {{domxref("MouseEvent")}} 属性 {{domxref("MouseEvent.clientX","clientX")}}、{{domxref("MouseEvent.clientY","clientY")}}、{{domxref("MouseEvent.screenX","screenX")}} 和 {{domxref("MouseEvent.screenY","screenY")}} 属性保持不变，就像鼠标未移动一样。{{domxref("MouseEvent.movementX","movementX")}} 和 {{domxref("MouseEvent.movementY","movementY")}} 属性继续提供鼠标的位置变化。如果鼠标持续朝一个方向移动，则 {{domxref("MouseEvent.movementX","movementX")}} 和 {{domxref("MouseEvent.movementY","movementY")}} 值不受限制。鼠标光标的概念不存在，并且光标不能移出窗口或被屏幕边缘夹住。

### 未锁定状态

无论鼠标是否处于锁定状态，参数 {{domxref("MouseEvent.movementX","movementX")}} 和 {{domxref("MouseEvent.movementY","movementY")}} 均有效，并且即使鼠标解锁后也可用，以方便使用。

当鼠标解锁时，系统光标可以退出并重新进入浏览器窗口。如果发生这种情况，可以将 {{domxref("MouseEvent.movementX","movementX")}} 和 {{domxref("MouseEvent.movementY","movementY")}} 设置为零。

## 简单示例演示

我们编写了一个[指针锁定演示](https://mdn.github.io/dom-examples/pointer-lock/)（[查看源代码](https://github.com/mdn/dom-examples/tree/main/pointer-lock)），向你展示如何使用它来设置一个简单的控制系统。此演示使用 JavaScript 在 {{ htmlelement("canvas") }} 元素上绘制一个球。当你单击画布时，指针锁定将用于移除鼠标指针，并允许你直接使用鼠标移动球。让我们看看它是如何工作的。

我们在画布上设置 x 和 y 的初始位置：

```js
let x = 50;
let y = 50;
```

接下来，我们设置一个事件监听器，当单击画布时，在画布上运行 `requestPointerLock()` 方法，从而启动指针锁定。`document.pointerLockElement` 检查是为了查看是否已经有一个活动的指针锁定——如果已经有指针锁定，我们不想每次单击画布时都继续调用 `requestPointerLock()`。

```js
canvas.addEventListener("click", async () => {
  if (!document.pointerLockElement) {
    await canvas.requestPointerLock({
      unadjustedMovement: true,
    });
  }
});
```

> [!NOTE]
> 上述代码片段在不支持 `requestPointerLock()` 的 promise 版本的浏览器中有效。请参阅[处理 requestPointerLock() 的 promise 版本和非 promise 版本](#处理_requestpointerlock_的_promise_版本和非_promise_版本)了解详细说明。

现在来看看专用的指针锁定事件监听器：`pointerlockchange`。当这种情况发生时，我们运行一个名为 `lockChangeAlert()` 的函数来处理变化。

```js
document.addEventListener("pointerlockchange", lockChangeAlert, false);
```

此函数检查 `pointerLockElement` 属性以查看它是否是我们的画布。如果是，它会附加一个事件侦听器，以使用 `updatePosition()` 函数处理鼠标移动。如果不是，它会再次删除事件侦听器。

```js
function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log("指针锁定状态现已锁定");
    document.addEventListener("mousemove", updatePosition, false);
  } else {
    console.log("指针锁定状态现已解锁");
    document.removeEventListener("mousemove", updatePosition, false);
  }
}
```

`updatePosition()` 函数会更新球在画布上的位置（`x` 和 `y`），同时还包含 `if ()` 语句，用于检查球是否已经超出画布的边缘。如果超出，则让球绕到另一侧的边缘。它还会检查之前是否已调用 [`requestAnimationFrame()`](/zh-CN/docs/Web/API/Window/requestAnimationFrame)，如果已调用，则根据需要再次调用，并调用 `canvasDraw()` 函数来更新画布场景。还设置了一个跟踪器，用于将 X 和 Y 值写入屏幕，以供参考。

```js
const tracker = document.getElementById("tracker");

let animation;
function updatePosition(e) {
  x += e.movementX;
  y += e.movementY;
  if (x > canvas.width + RADIUS) {
    x = -RADIUS;
  }
  if (y > canvas.height + RADIUS) {
    y = -RADIUS;
  }
  if (x < -RADIUS) {
    x = canvas.width + RADIUS;
  }
  if (y < -RADIUS) {
    y = canvas.height + RADIUS;
  }
  tracker.textContent = `X 坐标：${x}，Y 坐标：${y}`;

  if (!animation) {
    animation = requestAnimationFrame(() => {
      animation = null;
      canvasDraw();
    });
  }
}
```

`canvasDraw()` 函数在当前 `x` 和 `y` 位置绘制圆：

```js
function canvasDraw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f00";
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
  ctx.fill();
}
```

## iframe 的限制

指针锁定一次只能锁定一个 {{htmlelement("iframe")}}。如果你锁定一个 `<iframe>`，则无法锁定另一个并将目标转移到它；指​​针锁定将出错。要避免此限制，请先解锁已锁定的 `<iframe>`，然后锁定另一个。

虽然 `<iframe>` 默认工作，但“沙盒化”的 `<iframe>` 会阻止指针锁定。要避免此限制，请使用 `<iframe sandbox="allow-pointer-lock">`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MouseEvent")}}
- {{domxref("Element.requestPointerLock()")}}
