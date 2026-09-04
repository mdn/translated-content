---
title: 使用游戏手柄 API 实现控制功能
short-title: 使用游戏手柄 API
slug: Games/Techniques/Controls_Gamepad_API
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

本文探讨了如何利用游戏手柄 API（Gamepad API）为网页游戏实现一个高效的跨浏览器控制系统，使玩家能够使用主机游戏手柄来操控网页游戏。文中以 [Enclave Games](https://enclavegames.com/) 开发的《饥饿的冰箱》作为案例研究。

## 网页游戏的控制

从历史上看，在连接电视的游戏主机上玩游戏与在电脑上玩游戏始终是截然不同的体验，这主要归因于其独特的操控方式。后来，借助额外的驱动程序和插件，我们终于能够将游戏手柄用于桌面游戏——无论是原生游戏还是在浏览器中运行的游戏。如今，我们拥有了[游戏手柄 API](/zh-CN/docs/Web/API/Gamepad_API)，它让我们无需任何插件即可使用游戏手柄玩基于浏览器的游戏。游戏手柄 API 通过提供一个接口来实现这一点，该接口会暴露按键动作和轴位变化，这些信息可在 JavaScript 代码中用于处理输入。这对浏览器游戏来说，确实是个好时代。

## 哪种游戏手柄最好？

目前最受欢迎的游戏手柄是来自 XBox 360、XBox One、PS3 和 PS4 的——它们经受过时间的检验，并且在浏览器跨 Windows 与 macOS 平台中对游戏手柄 API 的实现中工作良好。

此外，还有许多其他设备采用各种不同的按键布局，这些布局在不同浏览器的实现中或多或少都能正常工作。本文讨论的代码已在几种游戏手柄上进行了测试，但作者最喜欢的配置是使用无线 Xbox 360 手柄配合 macOS 上的 Firefox 浏览器。

## 实例分析：饥饿的冰箱

[GitHub Game Off II](https://github.com/open-source/gaming/github-game-off-ii) 比赛举行于 2013 年 11 月，[Enclave Games](https://enclavegames.com/) 决定参加比赛。比赛的主题为“变化”，因此他们提交了一款游戏：玩家需要通过点击健康食物（苹果、胡萝卜、生菜）来喂饱“饥饿的冰箱”，同时避开“不健康”的食物（啤酒、汉堡、披萨）。倒计时会每隔几秒改变冰箱想要吃的食物种类，因此玩家必须小心谨慎并迅速行动。

第二个隐藏的“改变”的实现是可以从单纯静态的冰箱改变成涡轮驱动、射击和吞食的机器能力。当你连接游戏手柄后，游戏会有很明显的改变（饥饿冰箱会变成超级涡轮饥饿冰箱），并且你可以使用游戏手柄 API 来控制装甲冰箱。你需要击落食物但是你仍然需要找到冰箱目前想吃的食物，否则你会失去能量。

游戏封装了两种截然不同的“变化”——好食物对坏食物，与移动端对桌面端。

## 示例

开发团队首先开发了《饥饿的冰箱》游戏的完整版本，随后为了展示游戏手柄 API 的实际应用并展示 JavaScript 源代码，创建了一个[简单演示](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html)。该演示是 GitHub 上发布的[游戏手柄 API 内容包](https://end3r.github.io/Gamepad-API-Content-Kit/) 的一部分，你可以在其中深入研究代码，并详细了解其工作原理。

下文所述代码取自《饥饿的冰箱》游戏的完整版本，但与演示版几乎完全一致——唯一的区别在于完整版使用 `turbo` 变量来决定游戏是否以“超级涡轮”模式启动。该功能独立运行，因此即使未连接游戏手柄，也能将其开启。

> [!NOTE]
> 一个彩蛋：有一个隐藏选项，可以在未连接手柄的情况下直接在桌面启动《超级饥饿冰箱》——点击屏幕右上角的手柄图标。这将以“超级涡轮”模式启动游戏，届时你可以使用键盘操控冰箱：A 和 D 键控制炮塔左右转动，W 键射击，方向键控制移动。

## 实现

使用游戏手柄 API 时有两个重要的事件——`gamepadconnected` 和 `gamepaddisconnected`。第一个事件在浏览器检测到新游戏手柄连接时触发，而第二个事件在游戏手柄断开连接时触发（无论是用户物理断开，还是因闲置而断开）。在演示中，`gamepadAPI` 对象用于存储与该 API 相关的所有内容：

```js
const gamepadAPI = {
  controller: {},
  turbo: false,
  connect() {},
  disconnect() {},
  update() {},
  buttonPressed() {},
  buttons: [],
  buttonsCache: [],
  buttonsStatus: [],
  axesStatus: [],
};
```

数组 `buttons` 存储着 XBox 360 游戏手柄的按键布局：

```js-nolint
const gamepadAPI = {
  // …
  buttons: [
    "DPad-Up", "DPad-Down", "DPad-Left", "DPad-Right",
    "Start", "Back", "Axis-Left", "Axis-Right",
    "LB", "RB", "Power", "A", "B", "X", "Y",
  ],
  // …
};
```

这可能和例如 PS3 控制器（或者其他没名字的通用控制器）等其他控制器有所不同，所以你需要注意并不要假设你期望的布局和你真正使用的控制器布局是一样。接下来我们设置两个事件监听器来获取数据：

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

出于安全策略考虑，必须在页面可见时先与控制器进行交互，事件才会触发。如果 API 在无需用户任何交互的情况下就能运行，就可能被用于在用户不知情的情况下对其进行指纹识别。

这两个函数都相当简单：

```js
const gamepadAPI = {
  // …
  connect(evt) {
    gamepadAPI.controller = evt.gamepad;
    gamepadAPI.turbo = true;
    console.log("游戏手柄已连接。");
  },
};
```

函数 `connect()` 接受一个事件作为参数，并将其中的 `gamepad` 对象分配给 `gamepadAPI.controller` 变量。我们在这个游戏中只使用一个游戏手柄，所以这个变量是一个单独的对象而不是游戏手柄的数组。然后我们设置 `turbo` 属性为 `true`。（这个可以直接用 `gamepad.connected` 实现，但我们想单独设置一个变量来控制“涡轮模式”而不需要连接游戏手柄，原因已在前面说明过了。）

```js
const gamepadAPI = {
  // …
  disconnect(evt) {
    gamepadAPI.turbo = false;
    delete gamepadAPI.controller;
    console.log("游戏手柄已断开。");
  },
};
```

`disconnect` 函数设置 `gamepad.turbo` 属性为 `false` 并移除存储着 `gamepad` 对象的变量。

### 游戏手柄对象

`gamepad` 对象中有包含了许多有用的信息，其中就包括按钮和坐标轴的状态等重要信息：

- `id`：一个包含关于控制器信息的字符串。
- `index`：一个为已连接的设备分配的唯一标识。
- `connected`：一个布尔变量，`true` 表示设备已连接。
- `mapping`：键位的布局类型；现在只有 `standard` 是唯一可用的值。
- `axes`：每个坐标轴的状态，由一个浮点数数组表示。
- `buttons`：每个按钮的状态，由一个包含 `pressed` 和 `value` 属性的 `GamepadButton` 对象数组表示。

变量 `index` 在我们连接了多个控制器时非常有用，我们可以用此来区分它们的操作——例如我们有一个需要连接两个设备的双人游戏。

### 查询游戏手柄对象

除了 `connect()` 和 `disconnect()`，`gamepadAPI` 对象中还有另外两个方法：`update()` 和 `buttonPressed()`。`update()` 会在游戏循环的每一帧中执行，来更新游戏手柄对象的实时状态：

```js
const gamepadAPI = {
  // …
  update() {
    // 清除按钮缓存
    gamepadAPI.buttonsCache = [];

    // 将前一帧的按钮状态移动到缓存
    for (let k = 0; k < gamepadAPI.buttonsStatus.length; k++) {
      gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
    }

    // 清除按钮缓存
    gamepadAPI.buttonsStatus = [];

    // 获取游戏手柄对象
    const c = gamepadAPI.controller || {};

    // 在按钮中循环，将按下的那些加入数组
    const pressed = [];
    if (c.buttons) {
      for (let b = 0; b < c.buttons.length; b++) {
        if (c.buttons[b].pressed) {
          pressed.push(gamepadAPI.buttons[b]);
        }
      }
    }

    // 在坐标轴中循环，将它们的值加入数组
    const axes = [];
    if (c.axes) {
      for (const ax of c.axes) {
        axes.push(ax.toFixed(2));
      }
    }

    // 赋值
    gamepadAPI.axesStatus = axes;
    gamepadAPI.buttonsStatus = pressed;

    // 出于调试目的，返回已按下的按钮
    return pressed;
  },
};
```

在每一帧上，`update()` 都会将上一帧的按钮状态保存至数组 `buttonsCache` 中，并在 `gamepadAPI.controller` 对象提取出新的状态信息。然后它就能轮询按钮和坐标值并获得它们的实时状态和值。

### 检测按钮按下

`buttonPressed()` 方法也被放置在主游戏循环中，用于监听按键事件。该方法有两个参数——我们要监听的按键，以及（可选的）用于告知游戏“按住按键”状态被接受的方式。如果没有这个参数，你就必须松开按键再重新按下，才能达到预期的效果。

```js
const gamepadAPI = {
  // …
  buttonPressed(button, hold) {
    let newPress = false;
    if (GamepadAPI.buttons.status.includes(button)) {
      newPress = true;
    }
    if (!hold && GamepadAPI.buttons.cache.includes(button)) {
      newPress = false;
    }
    return newPress;
  },
};
```

在一个按钮中有两种动作：单次按下和按住。变量 `newPress` 布尔变量将会指出这个是不是一个按钮新的按下操作。下次我们再轮询已按下按钮的数组——如果有按钮是我们正在找的，那么设 `newPress` 变量为 `true`。通过检查本次按下是不是新按下的，就能得出玩家是不是按住按钮了。我们从游戏循环中的上一帧轮询按钮的缓存状态，如果我们找到了，就说明按钮被按住了，所以就不是新的按下。最后返回 `newPress` 变量。函数 `buttonPressed` 通常这样来更新游戏循环：

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

如果 `gamepadAPI.turbo` 为 `true` 并有按钮被按下（或被按住），我们就会为其分配恰当的操作。在本例中，按下或按住 `A` 开火，按下 `B` 暂停游戏。

### 坐标轴阈值

按钮只有两种状态：`0` 或 `1`，但是摇杆可以有许多不同的值——它们在 `X` 和 `Y` 轴上都有一个范围为 `-1` 到 `1` 的浮点值。

游戏手柄放在一边不活动时轴值也可能有一定波动，这也就是说通过判断等于绝对的 -1 或 1 来可能是会有问题的。因此对此最好是给轴值设定一个阈值来触发生效。比如说，“冰箱坦克”仅会在 `X` 值大于 `0.5` 的时候向右转：

```js
if (gamepadAPI.axesStatus[0].x > 0.5) {
  this.player.angle += 3;
  this.turret.angle += 3;
}
```

即使我们稍微误推摇杆或者摇杆没有弹回原始位置，“冰箱坦克”也不会意外转向。

## 规范更新

经过长达一年多的规范化，W3C 游戏手柄 API 于 2015 年 4 月更新了规范（[查看最新信息](https://w3c.github.io/gamepad/)）。更新的改动并不是很大，但是我们最好了解一下到底更新了些什么——以下为更新。

### 获取游戏手柄

{{domxref("Navigator.getGamepads()")}} 方法已用[更长的说明和示例代码](https://w3c.github.io/gamepad/#navigator-interface-extension)更新。现在游戏手柄数组的长度必须为 `n+1`（`n` 是已连接设备的数量）——当设备连接且其有索引 1，那么数组长度为 2，且将为 `[null, [object Gamepad]]`。如果设备断开或不可用，值将被设为 `null`。

### 映射标准

布局类型现在是一个可枚举的对象而不是字符串：

```webidl
enum GamepadMappingType {
  "",
  "standard",
}
```

此枚举中定义了已知的游戏手柄映射集。目前只有 `standard` 布局可用，但是未来可能会有新的布局。如果布局未知，那么将会是空字符串。

### 事件

规范中原本包含的事件不仅限于 `gamepadconnected` 和 `gamepaddisconnected`，但由于认为这些事件实用性不高，因此已被从规范中移除。关于是否应将其恢复以及以何种形式恢复，目前仍在讨论中。

## 总结

游戏手柄 API 可在无需任何插件的情况下，在浏览器中提供类似游戏主机的体验。你可以在浏览器中直接游玩[饥饿的冰箱](https://enclavegames.com/games/hungry-fridge/)的完整版游戏。请查阅[游戏手柄 API 内容工具包](https://end3r.github.io/Gamepad-API-Content-Kit/)中的其他资源。
