---
title: 移动端触摸控制
slug: Games/Techniques/Control_mechanisms/Mobile_touch
l10n:
  sourceCommit: 29c6dda247bbe2443f2457df08f838031ec78442
---

{{GamesSidebar}}

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}

未来的手游一定是 Web 的天下，许多开发者在游戏开发过程中[首先选择移动端](/zh-CN/docs/Glossary/Mobile_First)——在现代社会，这通常还涉及到触摸控制的实现。在本教程中，我们将看到在 HTML 游戏中实现移动控件是多么容易，并且可以在支持移动触摸的设备上尽情玩耍。

> [!NOTE]
> 游戏 [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) 是用 Phaser 构建的，控制管理也是基于 Phaser 的，但也可以用纯 JavaScript 完成。使用 Phaser 的好处是它提供了辅助变量和函数，可以让开发更简单、更快速，但选择哪种方法完全取决于你。

## 纯 JavaScript 方法

我们可以自己实现触摸事件——设置事件监听器，并分配相关的函数，非常简单直接：

```js
const el = document.querySelector("canvas");
el.addEventListener("touchstart", handleStart);
el.addEventListener("touchmove", handleMove);
el.addEventListener("touchend", handleEnd);
el.addEventListener("touchcancel", handleCancel);
```

这样，在移动设备上屏幕上触摸游戏的 {{htmlelement("canvas")}} 将触发这些事件，因为我们就可以随意操控游戏（如：移动太空船）。事件如下所示：

- 当用户手指放在屏幕上触发 [touchstart](/zh-CN/docs/Web/API/Element/touchstart_event) 事件。
- 当用户在屏幕上移动手指时触发 [touchmove](/zh-CN/docs/Web/API/Element/touchmove_event) 事件。
- 当用户停止触摸屏幕时触发 [touchend](/zh-CN/docs/Web/API/Element/touchend_event) 事件。
- 当触摸被取消，例如当用户将他们的手指移动到屏幕之外时触发 [touchcancel](/zh-CN/docs/Web/API/Element/touchcancel_event) 事件。

> [!NOTE]
> 参考文章[触摸事件](/zh-CN/docs/Web/API/Touch_events)提供了更多的示例和信息。

### 纯 JavaScript 示例

这个实现了移动端触摸的[小型示例](https://github.com/end3r/JavaScript-Game-Controls/)代码已经放到了 GitHub 上，我们下载这个示例就可以实现在移动端屏幕上移动飞船。

我们将两种事件：`touchstart` 和 `touchmove` 放到一个方法里处理。为什么呢？ `touchHandler` 方法定义的飞船位置变量适合下面两种情况下：当玩家触摸屏幕，但不移动它时（`touchstart`）和当手指在屏幕上开始移动时（`touchmove`）：

```js
document.addEventListener("touchstart", touchHandler);
document.addEventListener("touchmove", touchHandler);
```

`touchHandler` 函数的代码如下：

```js
function touchHandler(e) {
  if (e.touches) {
    playerX = e.touches[0].pageX - canvas.offsetLeft - playerWidth / 2;
    playerY = e.touches[0].pageY - canvas.offsetTop - playerHeight / 2;
    output.textContent = `Touch:\nx: ${playerX}, y: ${playerY}`;
    e.preventDefault();
  }
}
```

如果发生了触摸（`touches` 对象不是空的），那么我们就可以在该对象中获得所需的全部信息。我们可以获取第一次触摸（`e.touches[0]`，我们的示例不支持多点触控），提取 `pageX` 和 `pageY` 变量，并通过减去画布偏移（画布与屏幕边缘的距离）和玩家宽度和高度的一半来设置玩家在屏幕上的飞船位置。

![玩家飞船的触摸控制器，可显示 x 坐标和 y 坐标。](controls-touch.png)

要查看工作是否正常，我们可以使用 `output` 元素输出 `x` 和 `y` 位置。需要使用 `preventDefault()` 函数来防止浏览器移动，否则就会出现默认行为，画布会在页面上被拖动，从而显示浏览器滚动条，看起来乱糟糟的。

## Phaser 中的触摸事件

我们不必自己做这件事；Phaser 等框架为我们提供了管理触摸事件的系统——请参阅[管理触摸事件](https://phaser.io/docs/2.6.1/Phaser.Touch.html)。

### 指针理论

[指针](https://phaser.io/docs/2.6.1/Phaser.Pointer.html) 代表触摸屏上的一根手指。Phaser 默认启动两个指针，因此两个手指可以同时执行一个动作。Captain Rogers 是一款简单的游戏——只需用两根手指控制，左手指移动飞船，右手指控制飞船上的火炮。游戏中没有多点触控或手势，所有操作均由单个指针输入完成。

可以使用 `this.game.input.addPointer` 为游戏添加更多指针，最多可同时管理 10 个指针。最近使用的指针可在 `this.game.input.activePointer` 对象中找到，即屏幕上最近使用的手指。

如果需要访问特定指针，它们都可以在 `this.game.input.pointer1`、`this.game.input.pointer2` 等处使用。它们是动态分配的，所以如果你在屏幕上放了三个手指，`pointer1`、`pointer2` 和 `pointer3` 就会处于活动状态。例如，移除第二根手指不会影响其他两根手指，再次设置时将使用第一个可用属性，因此 `pointer2` 将再次被使用。

你可以通过 `this.game.input.x` 和 `this.game.input.y` 变量快速获取最近激活指针的坐标。

### 输入事件

不直接使用指针，也可以监听 `this.game.input` 事件，如 `onDown`、`onUp`、`onTap` 和 `onHold`：

```js
this.game.input.onDown.add(itemTouched, this);

function itemTouched(pointer) {
  // 做点什么
}
```

当触摸屏幕触发 `onDown` 事件时，`itemTouched()` 函数将被执行。`pointer` 变量将包含激活事件的指针信息。

这种方法使用的是一般可用的 `this.game.input` 对象，但也可以通过使用 `onInputOver`、`onInputOut`、`onInputDown`、`onInputUp`、`onDragStart` 或 `onDragStop` 来检测对任何游戏对象（如精灵或按钮）的操作：

```js
this.button.events.onInputOver.add(itemTouched, this);

function itemTouched(button, pointer) {
  // 做点什么
}
```

这样，就可以为游戏中的任何对象（如玩家的飞船）附加事件，并对用户执行的操作做出反应。

使用 Phaser 的另一个优势是，所创建的按钮可以接受任何类型的输入，无论是手机上的触摸还是桌面上的点击，框架都会在后台处理。

### 实现

要添加一个交互式对象来监听用户输入，最简单的方法就是创建一个按钮：

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

这个是在 `MainMenu` 状态下形成的——它将被放置在距离屏幕左上角 10 个像素的位置，使用 `logo-enclave` 图像，并在被触摸时执行 `clickEnclave()` 函数。这将在手机和台式机上运行。主菜单中有几个按钮，其中包括启动游戏的按钮。

在实际游戏中，与其创建更多的按钮并用它们覆盖狭小的手机屏幕，我们可以使用一些不同的方法：我们将创建隐形区域来响应给定的操作。从设计的角度来看，最好是让活动区域更大，而不要让按钮图像覆盖半个屏幕。例如，点击屏幕右侧将射击：

```js
this.buttonShoot = this.add.button(
  this.world.width * 0.5,
  0,
  "button-alpha",
  null,
  this,
);
this.buttonShoot.onInputDown.add(this.goShootPressed, this);
this.buttonShoot.onInputUp.add(this.goShootReleased, this);
```

上面的代码将使用覆盖屏幕右半部分的透明图像创建一个新按钮。如果想执行更复杂的操作，可以分别为 InputDown 和 InputUp 分配功能，在本游戏中，触摸屏幕右侧将向右发射子弹，这就是我们在本例中需要的全部功能。

玩家的移动可以通过创建四个方向键来实现，但我们可以利用触摸屏的优势，拖动玩家的飞船：

```js
const player = this.game.add.sprite(30, 30, "ship");
player.inputEnabled = true;
player.input.enableDrag();
player.events.onDragStart.add(onDragStart, this);
player.events.onDragStop.add(onDragStop, this);

function onDragStart(sprite, pointer) {
  // 拖动的时候完成一些事情
}
```

我们可以在拖动飞船的同时做一些事情，并在拖动停止时做出反应。如果启用了 Phaser 中的拖曳功能，它就会立即运行——不必手动设置精灵的位置，因此可以将 `onDragStart()` 函数留空，或放置一些调试输出来查看它是否正常工作。`pointer` 元素包含 `x` 和 `y` 变量，存储被拖动元素的当前位置。

### 专用插件

你还可以进一步使用专用插件，如 [Virtual Joystick](https://phaser.io/shop/plugins/virtualjoystick)——这是一个付费的官方 Phaser 插件，但你也可以找到免费的[开源替代品](https://github.com/Gamegur-us/phaser-touch-control-plugin)。Virtual Joystick 的初始化过程如下：

```js
this.pad = this.game.plugins.add(Phaser.VirtualJoystick);
this.stick = this.pad.addStick(30, 30, 80, "generic");
```

在 `Game` 状态的 `create()` 函数中，我们将创建一个虚拟垫和一个通用操纵杆，默认情况下有四个方向的虚拟按钮。它的位置距离屏幕顶部和左侧边缘各 30 像素，宽度为 80 像素。

在游戏过程中，可以在 `update` 函数中这样处理被按下的摇杆：

```js
if (this.stick.isDown) {
  // 移动玩家
}
```

我们可以根据操纵杆的角度适当调整玩家的速度并移动他。

## 总结

这篇文章主要讲解如何在移动端实现触摸控制；下一篇文章我们将介绍怎样添加键盘和鼠标支持。

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}
