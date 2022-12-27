---
title: KeyboardEvent.key
slug: Web/API/KeyboardEvent/key
---

{{APIRef("DOM Events")}}

只读属性 **`KeyboardEvent.key`** 返回用户按下的物理按键的值。它还与 `shiftKey` 等调节性按键的状态和键盘的区域 / 和布局有关。它的值由以下因素决定：

查看 [所有键值列表](/zh-CN/docs/Web/API/KeyboardEvent/key/Key_Values)

- 如果按下的键拥有可打印的内容，则返回一个非空的 Unicode 字符来代表这个键的可打印内容。
- 如果按下的键是一个控制键或特殊字符，则返回一个事先定义好的值，见[预定义键值列表](/zh-CN/docs/Web/API/KeyboardEvent/key/Key_Values)。
- 如果 `KeyboardEvent` 显示按下的键是一个死键（dead key），则键值为 `"Dead"`。
- 有些特殊键盘的键（比如多媒体键盘上用来控制媒体播放的扩展按键）在 Windows 下会触发 `WM_APPCOMMAND` 事件，而不会产生按键代码。虽然没有按键代码，这些事件将映射到 DOM 键盘事件中，并将列入 Windows 的“虚拟按键码”列表中。
- 如果按键无法识别，则返回 `"Unidentified"`。

## KeyboardEvent 次序

`KeyboardEvent` 事件以一个预设的次序触发，理解这一点对于理解特定 `KeyboardEvent` 的 `key` 属性值大有帮助。对于一个给定的按键操作，`KeyboardEvent` 将假定 {{domxref("Event.preventDefault")}} 未调用并按下面次序触发：

1. 首先触发 {{event("keydown")}} 事件。如果按键长按且生成一个字符，则事件将以一个与平台实现方式相关的时间间隔持续发出，同时将只读属性 {{domxref("KeyboardEvent.repeat")}} 设定为 `true`。
2. 如果按键生成的字符即将插入某个 {{HTMLElement("input")}}、{{HTMLElement("textarea")}} 或其它某个 {{domxref("HTMLElement.contentEditable")}} 设为 true 的元素，则依次触发 {{event("beforeinput")}}、{{event("input")}}事件。注意某些实现中若支持 {{event("keypress")}} 事件则可能将其触发。当按键长按时重复触发。
3. 当按键松开时触发 {{event("keyup")}} 事件。操作结束。

在次序 1、3 中，`KeyboardEvent.key` 属性按照事先定义的规则设定为恰当的值。

## KeyboardEvent 次序示例

考虑使用美国或英国键盘布局生成的点击 `shiftKey` 和一个未知的 `key 2` 时的事件次序。

请检测以下两个测试用例：

1. 按下并长按 `shift` 键，然后按下 `key 2` 并松开。下一步，松开 `shift` 键。
2. 按下并长按 `shift` 键，然后按下并长按 `key 2`。然后松开 shift 键，最后松开 `key 2`。

### HTML

```html
<div class="flex flex-left">
    <textarea rows="5" id="test-target"></textarea>
    <button id="btn-clear-console">清空控制台</button>
</div>
<div class="flex flex-right">
    <div id="console-log"></div>
</div>
<script src="main.js"></script>
```

### CSS

```css
body {
    -webkit-display: flex;
    display: flex;
}

.flex {
    padding-left: 20px;
    padding-right: 20px;
}

.flex-left {
    flex: 1;
    flex-grow: 1;
    -webkit-flex: 1;
    -webkit-flex-grow: 1;
}

.flex-right {
    flex: 2;
    flex-grow: 2;
    -webkit-flex: 2;
    -webkit-flex-grow: 2;
}

#test-target {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    resize: none;
}

#console-log {
    overflow: auto;
}
```

### JavaScript

```js
let textarea = document.getElementById('test-target'),
consoleLog = document.getElementById('console-log'),
btnClearConsole = document.getElementById('btn-clear-console');

function logMessage(message) {
  let p = document.createElement('p');
  p.appendChild(document.createTextNode(message));
  consoleLog.appendChild(p);
}

textarea.addEventListener('keydown', (e) => {
  if (!e.repeat)
    logMessage(`第一个 keydown 事件。key 属性的值为"${e.key}"`);
  else
    logMessage(`keydown 事件重复。key 属性的值为"${e.key}"`);
});

textarea.addEventListener('beforeinput', (e) => {
  logMessage(`beforeinput 事件。你准备输入"${e.data}"`);
});

textarea.addEventListener('input', (e) => {
  logMessage(`input 事件。你刚刚输入了"${e.data}"`);
});

textarea.addEventListener('keyup', (e) => {
  logMessage(`keyup 事件。key 属性的值为"${e.key}"`);
});

btnClearConsole.addEventListener('click', (e) => {
  let child = consoleLog.firstChild;
  while (child) {
   consoleLog.removeChild(child);
   child = consoleLog.firstChild;
  }
});
```

### 运行结果

```html hidden
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <style>
    body { -webkit-display: flex; display: flex; }
    .flex { padding-left: 20px; padding-right: 20px; }
    .flex-left { flex: 1; flex-grow: 1; -webkit-flex: 1; -webkit-flex-grow: 1; }
    .flex-right { flex: 2; flex-grow: 2; -webkit-flex: 2; -webkit-flex-grow: 2; }
    #test-target { display: block; width: 100%; margin-bottom: 10px; resize: none; }
    #console-log { overflow: auto; }
    </style>
    <title>KeyboardEvent.key</title>
</head>

<body>
    <div class="flex flex-left">
        <textarea rows="5" id="test-target"></textarea>
        <button id="btn-clear-console">清空控制台</button>
    </div>
    <div class="flex flex-right">
        <div id="console-log"></div>
    </div>
    <script>
    let textarea = document.getElementById('test-target'),
    consoleLog = document.getElementById('console-log'),
    btnClearConsole = document.getElementById('btn-clear-console');

    function logMessage(message) {
        let p = document.createElement('p');
        p.appendChild(document.createTextNode(message));
        consoleLog.appendChild(p);
    }

    textarea.addEventListener('keydown', (e) => {
        if (!e.repeat)
            logMessage(`第一个 keydown 事件。key 属性的值为"${e.key}"`);
        else
            logMessage(`keydown 事件重复。key 属性的值为"${e.key}"`);
    });

    textarea.addEventListener('beforeinput', (e) => {
        logMessage(`beforeinput 事件。你准备输入"${e.data}"`);
    });

    textarea.addEventListener('input', (e) => {
        logMessage(`input 事件。你刚刚输入了"${e.data}"`);
    });

    textarea.addEventListener('keyup', (e) => {
        logMessage(`keyup 事件。key 属性的值为"${e.key}"`);
    });


    btnClearConsole.addEventListener('click', (e) => {
        let child = consoleLog.firstChild;
        while (child) {
            consoleLog.removeChild(child);
            child = consoleLog.firstChild;
        }
    });
    </script>
</body>
</html>
```

{{ EmbedLiveSample('Key', '100%', 480, "", "", "hide-codepen-jsfiddle") }}

### 用例 1

当按下 shift 键时，首先触发 {{event("keydown")}} 事件，然后将 `key` 属性的值设为 `"Shift"` 字符串。如果继续长按 shift 键，由于不会生成字符按键值，{{event("keydown")}} 事件不会继续重复触发。

当按下 `key 2` 时，另一个 {{event("keydown")}} 事件将会为这个新的按键动作触发，若使用的是美式键盘，它的 `key` 属性将被设为 `"@"` 字符，若为英式键盘，则会设为 `"""` 字符。这是因为 `key` 属性 `"shift"` 处于激活状态。由于生成了一个字符的按键值，{{event("beforeinput")}} 和 {{event("input")}} 事件随后触发。

松开 `key 2` 时，{{event("keyup")}} 事件将触发，`key` 属性将会为不同键盘布局设定合适的字符值，比如 `"@"`、`"""`。

最后在松开 shift 键时，另一个 {{event("keyup")}} 事件触发，`key` 值将保持 `"Shift"` 不变。

### 用例 2

当按下 shift 键时，首先触发 {{event("keydown")}} 事件，然后将 `key` 属性的值设为 `"Shift"` 字符串。如果继续长按 shift 键，由于不会生成字符按键值，{{event("keydown")}} 事件不会继续重复触发。

当按下 `key 2` 时，另一个 {{event("keydown")}} 事件将会为这个新的按键动作触发，若使用的是美式键盘，它的 `key` 属性将被设为 `"@"` 字符，若为英式键盘，则会设为 `"""` 字符。这是因上档键处于激活状态。由于生成了一个字符的按键值，{{event("beforeinput")}} 和 {{event("input")}} 事件随后触发。如果继续长按 `2` 键，则 {{event("keydown")}} 事件将持续重复触发，同时将 {{domxref("KeyboardEvent.repeat")}} 属性设置为 `true`。{{event("beforeinput")}} 和 {{event("input")}} 事件也将持续重复触发。

当松开 shift 键时，{{event("keyup")}} 事件随之触发，且 `key` 属性保留为 `"Shift"`。此时请注意为 `key 2` 长按触发的重复 `keydown` 事件的 `key` 值会变成 `"2"`，因为上档键不再处于激活状态。{{event("beforeinput")}} 与 {{event("input")}} 事件的 {{domxref("InputEvent.data")}} 属性同理。

最终 `key 2` 松开，{{event("keyup")}} 事件触发，但两种键盘布局的 `key` 属性均为 `"2"`。就是因为没有激活上档键。

## 示例

这个示例使用 {{domxref("EventTarget.addEventListener()")}} 监听 {{event("keydown")}} 事件。当我们事件触发时，将检测按键的值是否为代码所关注，如果是，就进行某项操作。（可能是给飞船转向，或者是调整电子表格中选中单元格的位置。）

```js
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // 如果事件已经在进行中，则不做任何事。
  }

  switch (event.key) {
    case "ArrowUp":
      // 按“↑”方向键时要做的事。
      break;
    case "ArrowDown":
      // 按“↓”方向键时要做的事。
      break;
    case "ArrowLeft":
      // 按“←”方向键时要做的事。
      break;
    case "ArrowRight":
      // 按“→”方向键时要做的事。
      break;
    case "Enter":
      // 按“回车”键时要做的事。
      break;
    case "Escape":
      // 按“ESC”键时要做的事。
      break;
    default:
      return; // 什么都没按就退出吧。
  }

  // 取消默认动作，从而避免处理两次。
  event.preventDefault();
}, true);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
