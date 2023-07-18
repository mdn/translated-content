---
title: 使用 Gamepad API 实现控制
slug: Games/Techniques/Controls_Gamepad_API
---

{{GamesSidebar}}

这篇文章着眼于使用 Gamepad API 为网页游戏实现一个有效的跨浏览器控制系统，可以让你使用端游控制器来控制你的网页游戏。Hungry Fridge，就是 [Enclave Games](http://enclavegames.com/) 以此制作的游戏。

## 网页游戏的控制

在历史上，在连接主机 (console) 的电视上玩游戏和在电脑 (PC) 上玩游戏是两种完全不一样的体验，最大的区别就是它们的控制方式。后来，额外的驱动程序和插件让我们能够使用主机控制器来游玩电脑端的游戏--不论是本地游戏，还是运行在浏览器中的游戏。到现在的 HTML5 时代，我们终于有了 [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API) ，让我们能够在不安装任何插件的情况下，可以使用控制器来游玩基于浏览器的游戏。Gamepad API 通过提供一个接口公开按钮的按下和坐标的变化来实现这一点，在 JavaScript 中我们可以用这些变化来处理输入。这对于网页游戏来说是非常棒的特性。

## API 状态与浏览器支持

[Gamepad API](http://www.w3.org/TR/gamepad/) 在 W3C 的进程中仍然还是工作草案的状态，这意味着它的实现方法可能还会出现变动，但是就目前来说[浏览器的支持性](http://caniuse.com/gamepad)相当不错。Firefox 29+ 和 Chrome 35+ 对其支持得非常好。Opera 在版本 22+ 对 API 进行了支持 (一点也不奇怪，因为他们现在使用 Chrome 的引擎了。) 并且微软最近在 Edge 中对 API 实现了支持，也就是说四大主流浏览器现在都支持 Gamepad API。

## 哪种控制器最好？

目前最受欢迎的控制器是来自 XBox 360、XBox One、PS3 和 PS4 的 — 它们经受过时间的检验，并且在浏览器跨 Windows 与 Mac OS 平台中对 Gamepad API 的实现中工作良好。

还有一些其他各种各样不同布局的控制器或多或少的支持跨浏览器的实现。本文中讨论的代码使用了一些控制器进行测试，但是笔者比较喜欢的配置是：无线 XBox 360 控制器和 Mac OS X 平台的 Firefox 浏览器。

## 实例分析：Hungry Fridge

[GitHub Game Off II](https://github.com/blog/1674-github-game-off-ii) 比赛举行于 2013 年 11 月，[Enclave Games](http://enclavegames.com/) 决定参加比赛。比赛的主题为“改变”(change)，所以他们提交了这样一个游戏——你需要通过点击来喂食饥饿的冰箱健康的食物 (苹果、萝卜、莴苣) 并避开“坏”的食物 (啤酒、汉堡、披萨) 。其中会有倒计时会改变接下来几秒内冰箱想吃的东西，所以你又要小心动作又要块。你可以[在这里尝试 Hungry Fridge](http://enclavegames.com/games/hungry-fridge/)。

第二个隐藏的“改变”的实现是可以从单纯静态的冰箱改变成涡轮驱动、射击和吞食的机器能力。当你连接控制器后，游戏会有很明显的改变 (饥饿冰箱会变成超级涡轮的饥饿冰箱) 并且你可以使用 Gamepad API 来控制装甲冰箱。你需要击落食物但是你仍然需要找到冰箱目前想吃的食物，否则你会失去能量。

游戏封装了两种截然不同的“变化”(change) ——好食物对坏食物，与移动端对桌面端。

## 示例

Game API 的动作展示与 JavaScript 的源代码公布是在完整版的 Hungry Fridge 构建之后才开始的，然后据此创建了一个 [简单的示例](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html)。部分 [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/) 在 Github 上供你分析代码并研究其如何工作。

以下讨论的代码来自于完整的 Hungry Fridge 游戏中，除了原代码需要 `turbo` 变量来决定是否启动“超级涡轮模式”以外几乎一模一样。此代码可以独立运行，就算不连接控制器也可以。

> **备注：** 一个彩蛋：点击界面右上角的控制器图标有个隐藏选项——不连接控制器也能启动“超级涡轮模式” 。你可以使用键盘上的 A 和 D 控制左右旋转，W 射击，方向键移动。

## 实现方法

使用 Gamepad API 时有两个重要的事件——`gamepadconnected` 和 `gamepaddisconnected`。前者将于浏览器侦测到新控制器连接时触发；而后者则是断开连接 (不管是物理断开还是无响应了) 的时候触发。在示例中 `gamepadAPI` 对象通常存储着所有关于 API 的东西：

```js
var gamepadAPI = {
  controller: {},
  turbo: false,
  connect: function () {},
  disconnect: function () {},
  update: function () {},
  buttonPressed: function () {},
  buttons: [],
  buttonsCache: [],
  buttonsStatus: [],
  axesStatus: [],
};
```

数组 `buttons` 存储着 XBox 360 控制器的按键布局 button layout:

```js
buttons: [
  'DPad-Up','DPad-Down','DPad-Left','DPad-Right',
  'Start','Back','Axis-Left','Axis-Right',
  'LB','RB','Power','A','B','X','Y',
],
```

这可能和例如 PS3 控制器 (或者其他没名字的通用控制器) 等其他控制器有所不同，所以你需要注意并不要假设你期望的布局和你真正使用的控制器布局是一样。接下来我们设置两个事件侦听器来获取数据：

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

由于安全策略，你必须先与控制器产生交互才能触发当前显示页面的事件。如果 API 在没有接收到用户交互的时候工作，那它可能会在不知情的情况下被用来识别指纹。

两个函数都十分简单：

```js
connect: function(evt) {
  gamepadAPI.controller = evt.gamepad;
  gamepadAPI.turbo = true;
  console.log('控制器已连接。');
},
```

函数 `connect()` 接受一个事件作为参数，并将其中的 `gamepad` 对象分配给 `gamepadAPI.controller` 变量。我们在这个游戏中只使用一个控制器，所以这个变量是一个单独的对象而不是控制器的数组。然后我们设置 `turbo` 属性为 `true`。 (这个可以直接用 `gamepad.connected` 实现，但我们想单独设置一个变量来控制“涡轮模式”而不需要连接控制器，原因已在前面说明过了。)

```js
disconnect: function(evt) {
  gamepadAPI.turbo = false;
  delete gamepadAPI.controller;
  console.log('控制器已断开。');
},
```

函数 `disconnect` 设置 `gamepad.turbo` 属性为 `false` 并移除存储着 `gamepad` 对象的变量。

### Gamepad 对象

对象 `gamepad` 中有包含了许多有用的信息，其中就包括按钮和坐标轴的状态等重要信息：

- `id`: 一个包含关于控制器信息的字符串。
- `index`: 一个为已连接的设备分配的唯一标识。
- `connected`: 一个布尔变量，`true` 表示设备已连接。
- `mapping`: 键位的布局类型；现在只有 `standard` 是唯一可用的值。
- `axes`: 每一个坐标轴的状态。表示为存储浮点值的数组。
- `buttons` : 每个按钮的状态，表示为一个 `GamepadButton` 对象，其包含 `pressed` 和 `value` 属性。

变量 `index` 在我们连接了多个控制器时非常有用，我们可以用此来区分它们的操作——例如我们有一个需要连接两个控制器的双人游戏。

### 查询控制器对象

除了 `connect()` 和 `disconnect()` ，`gamepadAPI` 对象中还有另外两个方法：`update()` 和 `buttonPressed()`。`update()` 会在游戏循环的每一帧中执行，来更新 gamepad 对象的实时状态：

```js
update: function() {
  // 清除按钮缓存
  gamepadAPI.buttonsCache = [];
  // 从上一帧中移动按钮状态到缓存中
  for(var k=0; k<gamepadAPI.buttonsStatus.length; k++) {
    gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
  }
  // 清除按钮状态
  gamepadAPI.buttonsStatus = [];
  // 获取 gamepad 对象
  var c = gamepadAPI.controller || {};

  // 遍历按键，并将按下的按钮加到数组中
  var pressed = [];
  if(c.buttons) {
    for(var b=0,t=c.buttons.length; b<t; b++) {
      if(c.buttons[b].pressed) {
        pressed.push(gamepadAPI.buttons[b]);
      }
    }
  }
  // 遍历坐标值并加到数组中
  var axes = [];
  if(c.axes) {
    for(var a=0,x=c.axes.length; a<x; a++) {
      axes.push(c.axes[a].toFixed(2));
    }
  }
  // 分配接收到的值
  gamepadAPI.axesStatus = axes;
  gamepadAPI.buttonsStatus = pressed;
  // 返回按钮以便调试
  return pressed;
},
```

在每一帧上，`update()` 都会将上一帧的按钮状态保存至数组 `buttonsCache` 中，并在 `gamepadAPI.controller` 对象提取出新的状态信息。然后它就能轮询按钮和坐标值并获得它们的实时状态和值。

### 监测按钮按下

方法 `buttonPressed()` 也位于主游戏循环中来监听按钮的按下。它有两个参数——我们想要监听的按钮和 (可选) 用来告诉游戏接收的按键是（从之前就）被按住了的。没了它你需要松开并再按一次按钮才能得到想要的结果。

```js
buttonPressed: function(button, hold) {
  var newPress = false;
  // 轮询按下的按钮
  for(var i=0,s=gamepadAPI.buttonsStatus.length; i<s; i++) {
    // 如果我们找到我们想要的按钮
    if(gamepadAPI.buttonsStatus[i] == button) {
      // 设置布尔变量（newPress）为 true
      newPress = true;
      // 如果我们想检查按住还是单次按下
      if(!hold) {
        // 从上一帧轮询缓存状态
        for(var j=0,p=gamepadAPI.buttonsCache.length; j<p; j++) {
          // 如果按钮（之前）已经被按下了则忽略新的按下状态
          if(gamepadAPI.buttonsCache[j] == button) {
            newPress = false;
          }
        }
      }
    }
  }
  return newPress;
},
```

在一个按钮中有两种动作：单次按下和按住。变量 `newPress` 布尔变量将会指出这个是不是一个按钮新的按下操作。下次我们再轮询已按下按钮的数组——如果有按钮是我们正在找的，那么设 `newPress` 变量为 `true` 。通过检查本次按下是不是新按下的，就能得出玩家是不是按住按钮了。我们从游戏循环中的上一帧轮询按钮的缓存状态，如果我们找到了，就说明按钮被按住了，所以就不是新的按下。最后 `newPress` 变量被返回。函数 `buttonPressed` 通常这样来更新游戏循环：

```js
if (gamepadAPI.turbo) {
  if (gamepadAPI.buttonPressed("A", "hold")) {
    this.turbo_fire();
  }
  if (gamepadAPI.buttonPressed("B")) {
    this.managePause();
  }
}
```

如果 `gamepadAPI.turbo` 为 `true` 并有按钮被按下 (或被按住)，我们就会为其分配恰当的操作。在本例中，按下或按住 `A` 开火，按下 `B` 暂停游戏。

### 坐标阈值

按钮只有两种状态：`0` 或 `1`，但是摇杆可以有许多不同的值——他们在 `X` 和 `Y` 轴上都有一个范围为 `-1` 到 `1` 的浮点值。

控制器放在一边不活动时轴值也可能有一定波动 (get dusty) ，这也就是说通过判断等于绝对的 -1 或 1 来可能是会有问题的。因此对此最好是给轴值设定一个阈值来触发生效。比如说，“冰箱坦克”仅会在 `X` 值大于 `0.5` 的时候向右转：

```js
if (gamepadAPI.axesStatus[0].x > 0.5) {
  this.player.angle += 3;
  this.turret.angle += 3;
}
```

即使我们稍微误推摇杆或者摇杆没有弹回原始位置，“冰箱坦克”也不会意外转向。

## 规范更新

经过长达一年多的规范化，W3C Gamepaf API 于 2015 年 4 月更新了规范 ([查看最新信息](https://w3c.github.io/gamepad/))。更新的改动并不是很大，但是我们最好了解一下到底更新了些什么—— 以下为更新。

### 获取控制器

{{domxref("Naviagator.getGamepads()")}} 方法已用[更长的说明和示例代码](https://w3c.github.io/gamepad/#navigator-interface-extension)更新。现在控制器数组的长度必须为 `n+1` ( `n` 是已连接设备的数量) —— 当设备连接且其有索引 1，数组长度为 2，那么它将会是这样： `[null, [object Gamepad]]`。如果设备被断开或不可用的话，值将被设为 `null`。

### 映射标准

布局类型现在是一个可枚举的对象而不是字符串：

```
enum GamepadMappingType {
    "",
    "standard"
};
```

此枚举中定义了已知的控制器映射集。目前只有 `standard` 布局可用，但是未来可能会有新的布局。如果布局未知，那么将会是空字符串。

### 事件

除了当前可用的 `gamepadconnected` 和 `gamepaddisconnected` 事件，其实还有其他事件也曾在规范中，但它们因为不是非常的有用所以被移出了规范。相关讨论仍在进行中，关于它们是否应该恢复规范，以及以什么形式恢复。

## 总结

Gamepad API 非常易于开发。现在它比以往更容易向浏览器提供游戏主机的体验而不需要任何插件。你可以直接在你的浏览器中游玩完整的 [Hungry Fridge](http://enclavegames.com/games/hungry-fridge/) 游戏。你可以从 [Firefox Marketplace](https://marketplace.firefox.com/app/hungry-fridge) 中安装，或者可以在 [Gamepad API Content Kit](https://github.com/EnclaveGames/Hungry-Fridge) 中查看示例源代码。
