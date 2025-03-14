---
title: 使用 Gamepad API
slug: Web/API/Gamepad_API/Using_the_Gamepad_API
---

{{DefaultAPISidebar("Gamepad API")}}{{ SeeCompatTable() }}

HTML5 为丰富的交互式游戏开发引入了许多必要的组件。像 `<canvas>` 、WebGL、 `<audio>` 和 `<video>` 这样的技术，随着 JavaScript 的逐渐成熟，许多以前需要 native code 来实现的功能现在都可以实现了。Gamepad(手柄) API 是开发人员和设计者识别和使用游戏控制板和其他游戏控制器的一种方法。

[Gamepad API](/zh-CN/docs/Web/API/Gamepad_API) 引入新的事件在 {{ domxref("Window") }} 对象中，来读取手柄和控制器（以下称“控制器”）的状态。除此之外，API 还添加了一个 {{ domxref("Gamepad") }} 对象，你可以用它来查询已连接控制器的状态；还有一个 {{ domxref("navigator.getGamepads()") }} 方法，你可以使用它来获取页面已知的控制器列表。

## 连接控制器

当一个新的手柄连接到计算机时，焦点页面 (当前页面) 首先接收一个 [`gamepadconnected`](/zh-CN/docs/Web/API/Window/gamepadconnected_event) 事件。如果在加载页面时已经连接了手柄，则会在用户按下某个按钮或移动坐标方向 (axes) 时触发焦点页面的 [`gamepadconnected`](/zh-CN/docs/Web/API/Window/gamepadconnected_event) 事件。

> [!NOTE]
> 在 Firefox 中，控制器只会暴露给与用户产生交互的可见页面。这有助于防止控制器被用于获取用户的指纹。一旦有一个手柄与页面产生交互，那么其他连接的控制器将自动对页面可见。

你可以这样使用 [`gamepadconnected`](/zh-CN/docs/Web/API/Window/gamepadconnected_event) ：

```js
window.addEventListener("gamepadconnected", function (e) {
  console.log(
    "控制器已连接于 %d 位：%s. %d 个按钮，%d 个坐标方向。",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

每个控制器都有一个与之关联的唯一 ID，其在事件的 {{domxref("GamepadEvent.gamepad", "gamepad")}} 属性上可用。

## 断开控制器连接

当控制器断开连接时，如果页面以前接收过该手柄的数据 (例如 [`gamepadconnected`](/zh-CN/docs/Web/API/Window/gamepadconnected_event))，那么第二个事件 [`gamepaddisconnected`](/zh-CN/docs/Web/API/Window/gamepaddisconnected_event) 将会分配至焦点页面：

```js
window.addEventListener("gamepaddisconnected", function (e) {
  console.log("控制器已从 %d 位断开：%s", e.gamepad.index, e.gamepad.id);
});
```

即使使用相同类型的多个控制器，控制器的 {{domxref("Gamepad.index", "index")}} 属性都会是唯一的，每一个设备都有一个。`index` 属性还可充当 {{ domxref("Navigator.getGamepads()") }} 返回 {{jsxref("Array")}} 的索引。

```js
var gamepads = {};

function gamepadHandler(event, connecting) {
  var gamepad = event.gamepad;
  // 注：
  // gamepad === navigator.getGamepads()[gamepad.index]

  if (connecting) {
    gamepads[gamepad.index] = gamepad;
  } else {
    delete gamepads[gamepad.index];
  }
}

window.addEventListener(
  "gamepadconnected",
  function (e) {
    gamepadHandler(e, true);
  },
  false,
);
window.addEventListener(
  "gamepaddisconnected",
  function (e) {
    gamepadHandler(e, false);
  },
  false,
);
```

上面的示例同时演示了在事件完成后如何保存 `gamepad` 属性，并在之后使用其查询设备状态。

## 查询 Gamepad 对象

正如你看到的，上面讨论的 **gamepad** 事件，包括事件对象上的 `gamepad` 属性，会返回一个 {{ domxref("Gamepad") }} 对象。因为可能同时连接不止一个控制器，所以我们可以使用它来确定是哪个控制器 (或者说 ID) 触发了事件。我们可以使用 {{ domxref("Gamepad") }} 对象做很多事，比如保留对象的引用并用其查询，以找出哪些按钮和摇杆在什么时候被按下了。相较于在下次触发，现在立即就可以获取控制器的状态对于游戏或其他交互式网页来说是一般是可取的。

开发者执行此类查询时往往涉及将 {{ domxref("Gamepad") }} 对象和一个动画循环 (例如 {{ domxref("Window.requestAnimationFrame","requestAnimationFrame") }}) 结合在一起，希望根据控制器的状态来对决定当前框架的行为。

{{ domxref("Navigator.getGamepads()") }} 方法返回当前对网页可见的所有设备的数组，{{ domxref("Gamepad") }} 对象 (初始值始终为 `null`，所以当没有控制器连接的时候将会返回 `null` ) 也一样可以用来获取的控制器信息。例如下面将会重写开头的第一个例子：

```js
window.addEventListener("gamepadconnected", function (e) {
  var gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    "控制器已连接于 %d 位：%s. %d 个按钮，%d 个坐标方向。",
    gp.index,
    gp.id,
    gp.buttons.length,
    gp.axes.length,
  );
});
```

以下是 {{ domxref("Gamepad") }} 对象的属性说明：

- `id`: 包含一些关于控制器信息的字符串。它的格式没有特定规范，但是在 Firefox 中它将会含有三部分信息并以连接线连接 (`-`)：包含控制器的 USB 供应商、产品 ID 的两个 4 位十六进制字符串以及驱动程序提供的控制器的名称。此信息旨在允许你为设备上的控件查找适当的映射，并向用户显示有用的反馈。
- `index`: 每个已连接手柄唯一的索引数字，可以用来区分多个控制器。请注意，断开目前的设备并连接一个新的设备可能会使用之前的索引值。
- `mapping`: 一个用来指示浏览器是否已将设备上的控件重新映射到已知布局的字符串。目前只有一个受支持的已知布局 - [standard gamepad](https://dvcs.w3.org/hg/gamepad/raw-file/default/gamepad.html#remapping)(标准控制器)。如果浏览器能够将设备上的控件映射为该布局，`mapping` 属性将会为字符串 `standard`。
- `connected`: 一个用来指示控制器是否连接到系统的布尔值。如果已连接则为 `True`；反之则为 `False`。
- `buttons`: 一个表示设备上按钮的 {{ domxref("GamepadButton") }} 数组对象。每个 {{ domxref("GamepadButton") }} 都含有一个 `pressed` 和一个 `value` 属性：

  - `pressed` 属性是一个表示按钮当前是按下 (`true`) 还是没按下 (`false`) 的布尔值。
  - `value` 属性是一个表示已触发模拟按钮 (例如目前很多控制器的线性/段式扳机键) 的值的浮点值。值的范围被规范为 0.0 到 1.0。0.0 表示没被按下的按钮，1.0 表示被完全按下的按钮。

- `axes`: 一个表示设备上坐标输入控件 (例如控制器摇杆) 的数组对象。数组中的每个值都是介于 -1.0 到 1.0 的浮点值，来表示坐标方向的最低 (-1.0) 和最大 (1.0) 值。
- `timestamp`: 它将返回一个 {{ domxref("DOMHighResTimeStamp") }} ，该值表示上次更新此控制器数据的时间，以便开发者确定 `axes` 和 `button` 数据是否已从硬件更新。该值必须相对于 {{ domxref("PerformanceTiming") }} 接口的 `navigationStart` 对象。值是单调递增的，这意味着可以通过对比大小来确定数据更新的先后顺序，因为新的值始终比旧的值大。请注意 Firefox 当前不支持该属性。

> [!NOTE]
> 出于安全原因，Gamepad 对象在 [`gamepadconnected`](/zh-CN/docs/Web/API/Window/gamepadconnected_event) 事件上可用而在 {{ domxref("Window") }} 对象上不可用。一旦我们得到了对它的引用，我们就可以获取其属性以了解有关控制器当前状态的信息。在后台，此对象将会在控制器状态更改时更新。

### 使用按键信息

让我们看一个简单的示例：显示一个控制器的连接信息 (忽略后续连接的控制器) ，并让你使用控制器右侧的四个操作按钮移动屏幕上一个球。你可以 [查看在线演示](http://chrisdavidmills.github.io/gamepad-buttons/)，并可在 Github 上[找到源代码](https://github.com/chrisdavidmills/gamepad-buttons/tree/master)。

我们首先声明一些变量：`gamepadInfo` 用于写入连接信息的段落；`ball` 是我们希望控制移动的球；`start` 作为 `requestAnimation Frame` ID 的初始变量； `a` 和 `b` 变量作为球位置动量，并且变量会被用于 {{ domxref("Window.requestAnimationFrame", "requestAnimationFrame()") }} 和 {{ domxref("Window.cancelAnimationFrame", "cancelAnimationFrame()") }} 。（？）

```js
var gamepadInfo = document.getElementById("gamepad-info");
var ball = document.getElementById("ball");
var start;
var a = 0;
var b = 0;
```

接下来我们使用 [`gamepadconnected`](/zh-CN/docs/Web/API/Window/gamepadconnected_event) 事件来检查控制器是否连接。当有一个控制连接时，我们就使用 {{ domxref("Navigator.getGamepads()") }}`[0]` 来抓取，输出控制器信息到我们“控制器信息”的 `div` 里，并开始 `gameLoop()` 函数来启动球的运动进程。

```js
window.addEventListener("gamepadconnected", function (e) {
  var gp = navigator.getGamepads()[e.gamepad.index];
  gamepadInfo.innerHTML =
    "控制器已连接于 " +
    gp.index +
    " 位：" +
    gp.id +
    "。它有 " +
    gp.buttons.length +
    " 个按钮和 " +
    gp.axes.length +
    " 个坐标方向。";

  gameLoop();
});
```

现在我们再使用 [`gamepaddisconnected`](/zh-CN/docs/Web/API/Window/gamepaddisconnected_event) 事件来检查如果控制器断开的情况。如果断开了，我们会停止 {{ domxref("Window.requestAnimationFrame", "requestAnimationFrame()") }} 循环 (见下方) 并重置控制器信息到原来的样子。

```js
window.addEventListener("gamepaddisconnected", function (e) {
  gamepadInfo.innerHTML = "正在等待控制器。";

  cancelRequestAnimationFrame(start);
});
```

Chrome 在这里有些区别。它没有在变量内不断的更新存储控制器的最后状态，而存储只是当时的一个快照，所以你要在 Chrome 中做到同样的事情的话，就需要不断地轮询，然后在可用的时候只能在代码中使用 {{ domxref("Gamepad") }} 对象来达到目的。我们下面用 {{ domxref("Window.setInterval()") }}实现了; 一旦对象可用，控制器信息就会被输出，游戏循环就会开始，可以使用 {{ domxref("Window.clearInterval()") }} 清除定时循环。请注意在较旧版本的 Chrome 中实现 {{ domxref("Navigator.getGamepads()") }} 需要加上 `webkit` 前缀。我们尝试对两种前缀版本都进行监测和处理，以向后兼容。

```js
var interval;

if (!("ongamepadconnected" in window)) {
  // 没有控制器事件可用，则开始轮询。
  interval = setInterval(pollGamepads, 500);
}

function pollGamepads() {
  var gamepads = navigator.getGamepads
    ? navigator.getGamepads()
    : navigator.webkitGetGamepads
      ? navigator.webkitGetGamepads
      : [];
  for (var i = 0; i < gamepads.length; i++) {
    var gp = gamepads[i];
    if (gp) {
      gamepadInfo.innerHTML =
        "控制器已连接于 " +
        gp.index +
        " 位：" +
        gp.id +
        "。它有 " +
        gp.buttons.length +
        " 个按钮和 " +
        gp.axes.length +
        " 个坐标方向。";
      gameLoop();
      clearInterval(interval);
    }
  }
}
```

现在看主要的游戏循环。在每次我们所需的四个按钮被按下的时候进行处理。如果被按下了我就会适当地更新动量变量 `a` 和 `b` 的值，然后分别用 `a` 和 `b` 的值更新球的 {{ cssxref("left") }} 和 {{ cssxref("top") }} 属性。这样就可以在屏幕上移动数的位置了。在当前版本的 Chrome 中 (版本 34) button 的值是存储为数组的两个值，而不是 {{ domxref("GamepadButton") }} 对象。此问题已于开发者版本修复了。

当这些处理好之后，我们使用我们的 `requestAnimationFrame()` 来请求下一个动画帧，然后运行 `gameLoop()` 再继续执行。

```js
function buttonPressed(b) {
  if (typeof b == "object") {
    return b.pressed;
  }
  return b == 1.0;
}

function gameLoop() {
  var gamepads = navigator.getGamepads
    ? navigator.getGamepads()
    : navigator.webkitGetGamepads
      ? navigator.webkitGetGamepads
      : [];
  if (!gamepads) {
    return;
  }

  var gp = gamepads[0];
  if (buttonPressed(gp.buttons[0])) {
    b--;
  } else if (buttonPressed(gp.buttons[2])) {
    b++;
  }
  if (buttonPressed(gp.buttons[1])) {
    a++;
  } else if (buttonPressed(gp.buttons[3])) {
    a--;
  }

  ball.style.left = a * 2 + "px";
  ball.style.top = b * 2 + "px";

  start = requestAnimationFrame(gameLoop);
}
```

## 完整的示例：显示控制器状态

这个示例展示了怎样使用 {{ domxref("Gamepad") }} 对象，还有 [`gamepadconnected`](/zh-CN/docs/Web/API/Window/gamepadconnected_event) 和 [`gamepaddisconnected`](/zh-CN/docs/Web/API/Window/gamepaddisconnected_event) 事件显示所有已连接到系统的控制器的状态。你可以查看[在线演示](http://luser.github.io/gamepadtest/)并且可在 Github 上看到[完整的源代码](https://github.com/luser/gamepadtest)。

```js
var haveEvents = "ongamepadconnected" in window;
var controllers = {};

function connecthandler(e) {
  addgamepad(e.gamepad);
}

function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad;

  var d = document.createElement("div");
  d.setAttribute("id", "controller" + gamepad.index);

  var t = document.createElement("h1");
  t.appendChild(document.createTextNode("控制器：" + gamepad.id));
  d.appendChild(t);

  var b = document.createElement("div");
  b.className = "buttons";
  for (var i = 0; i < gamepad.buttons.length; i++) {
    var e = document.createElement("span");
    e.className = "button";
    //e.id = "b" + i;
    e.innerHTML = i;
    b.appendChild(e);
  }

  d.appendChild(b);

  var a = document.createElement("div");
  a.className = "axes";

  for (var i = 0; i < gamepad.axes.length; i++) {
    var p = document.createElement("progress");
    p.className = "axis";
    //p.id = "a" + i;
    p.setAttribute("max", "2");
    p.setAttribute("value", "1");
    p.innerHTML = i;
    a.appendChild(p);
  }

  d.appendChild(a);

  // 见 https://github.com/luser/gamepadtest/blob/master/index.html
  var start = document.getElementById("start");
  if (start) {
    start.style.display = "none";
  }

  document.body.appendChild(d);
  requestAnimationFrame(updateStatus);
}

function disconnecthandler(e) {
  removegamepad(e.gamepad);
}

function removegamepad(gamepad) {
  var d = document.getElementById("controller" + gamepad.index);
  document.body.removeChild(d);
  delete controllers[gamepad.index];
}

function updateStatus() {
  if (!haveEvents) {
    scangamepads();
  }

  var i = 0;
  var j;

  for (j in controllers) {
    var controller = controllers[j];
    var d = document.getElementById("controller" + j);
    var buttons = d.getElementsByClassName("button");

    for (i = 0; i < controller.buttons.length; i++) {
      var b = buttons[i];
      var val = controller.buttons[i];
      var pressed = val == 1.0;
      if (typeof val == "object") {
        pressed = val.pressed;
        val = val.value;
      }

      var pct = Math.round(val * 100) + "%";
      b.style.backgroundSize = pct + " " + pct;

      if (pressed) {
        b.className = "button pressed";
      } else {
        b.className = "button";
      }
    }

    var axes = d.getElementsByClassName("axis");
    for (i = 0; i < controller.axes.length; i++) {
      var a = axes[i];
      a.innerHTML = i + ": " + controller.axes[i].toFixed(4);
      a.setAttribute("value", controller.axes[i] + 1);
    }
  }

  requestAnimationFrame(updateStatus);
}

function scangamepads() {
  var gamepads = navigator.getGamepads
    ? navigator.getGamepads()
    : navigator.webkitGetGamepads
      ? navigator.webkitGetGamepads()
      : [];
  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      if (gamepads[i].index in controllers) {
        controllers[gamepads[i].index] = gamepads[i];
      } else {
        addgamepad(gamepads[i]);
      }
    }
  }
}

window.addEventListener("gamepadconnected", connecthandler);
window.addEventListener("gamepaddisconnected", disconnecthandler);

if (!haveEvents) {
  setInterval(scangamepads, 500);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
