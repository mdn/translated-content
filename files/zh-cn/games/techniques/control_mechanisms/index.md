---
title: 实现游戏控制机制
slug: Games/Techniques/Control_mechanisms
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

作为游戏开发平台，HTML5 的主要优势之一是能够在各种平台和设备上运行。简化跨设备差异带来了多重挑战，尤其是在为不同环境提供适当控件时。在本系列文章中，我们将向你展示如何构建一款可以使用触摸屏智能手机、鼠标和键盘以及游戏手柄等不常用机制进行游玩的游戏。

## 案例分析

我们将使用 [Captain Rogers: Battle at Andromeda](http://rogers2.enclavegames.com/demo/) 演示版作为示例。

![Captain Rogers: Battle at Andromeda——包含 Enclave Games 和 Blackmoon Design 徽标、罗杰的太空船和游戏名称的游戏封面。](captainrogers2-cover.png)

Captain Rogers 是使用 [Phaser](https://phaser.io/) 框架开发的游戏，该框架是目前 JavaScript 中最流行的简单 2D 游戏开发工具，但在使用纯 JavaScript 或其他框架构建游戏时，重复使用这些文章中包含的知识应该相当容易。如果你想了解 Phaser 的入门知识，请查看[使用 Phaser 开发 2D 打砖块游戏](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser)教程。

在接下来的文章中，我们将展示如何为 Rogers 船长实现各种不同的控制机制，以支持不同的平台——从手机上的触摸、桌面上的键盘/鼠标/游戏板，到更多非常规的控制机制，如电视遥控器、对着笔记本电脑大喊或挥手，或者捏香蕉。

## 设置环境

让我们先快速浏览一下游戏的文件夹结构、JavaScript 文件和游戏中的状态，这样就能知道在哪里发生了什么。游戏的文件夹看起来是这样的：

![Captain Rogers: Battle at Andromeda——游戏项目的文件夹结构，其中包含 JavaScript 源代码、图像和字体。](captainrogers2-folderstructure.png)

正如你所看到的，这里有用于存放图片、JavaScript 文件、字体和音效的文件夹。`src` 文件夹包含 JavaScript 文件，这些文件被分为不同的状态：`Boot.js`、`Preloader.js`、`MainMenu.js` 和 `Game.js`。第一个状态初始化 Phaser，第二个状态预加载所有资源，第三个状态控制欢迎玩家的主菜单，第四个状态控制实际游戏。

每个状态都有自己的默认方法：`preload()`、`create()` 和 `update()`。第一个方法用于预载所需资源，`create()` 在状态启动后执行，而 `update()` 则在每一帧上执行。

例如，你可以在 `create()` 函数中定义一个按钮：

```js
create() {
  // …
  const buttonEnclave = this.add.button(10, 10, 'logo-enclave', this.clickEnclave, this);
  // …
}
```

它将在游戏开始时创建一次，并在点击时执行分配给它的 `this.clickEnclave()` 动作，但你也可以在 `update()` 函数中使用鼠标指针值来执行动作：

```js
update() {
  // …
  if (this.game.input.mousePointer.isDown) {
      // 做些什么
  }
  // …
}
```

当鼠标按钮被按下时，它就会被执行，并且在游戏的每一帧都会根据输入的 `isDown` 布尔变量进行检查。

这应该能让你对项目结构有一些了解。我们将主要使用 `MainMenu.js` 和 `Game.js` 文件，并将在以后的文章中更详细地解释 `create()` 和 `update()` 方法中的代码。

## 纯 JavaScript 演示

另外还有一个[小型在线演示](https://end3r.github.io/JavaScript-Game-Controls/)，其完整源代码[可在 GitHub 上获取](https://github.com/end3r/JavaScript-Game-Controls/)，其中文章中描述的控制机制的基本支持是用纯 JavaScript 实现的。下面的文章将对其进行解释，但你已经可以用它来玩了，也可以出于学习目的随意使用这些代码。

## 其他文章

JavaScript 是移动游戏的最佳选择，因为 HTML 具有真正的多平台特性；以下所有文章都将重点放在为不同控制机制提供接口的 API 上：

1. [移动触控](/zh-CN/docs/Games/Techniques/Control_mechanisms/Mobile_touch)——第一篇文章将以触控为开篇，因为移动优先的方式非常流行。
2. [桌面鼠标和键盘控制](/zh-CN/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard)——当在台式机/笔记本电脑上进行游戏时，提供键盘和鼠标控制对于为游戏提供可接受的无障碍程度至关重要。
3. [桌面游戏手柄控制](/zh-CN/docs/Games/Techniques/Control_mechanisms/Desktop_with_gamepad)——游戏手柄 API 允许在桌面/笔记本电脑上使用游戏手柄控制网络应用程序，以获得游戏机的感觉。
4. [非常规控制](/zh-CN/docs/Games/Techniques/Control_mechanisms/Other)——最后一篇文章展示了一些非常规的控制机制，从实验性的到略显疯狂的，你可能不会相信这些机制可以用来玩游戏。
