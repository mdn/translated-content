---
title: MouseEvent：buttons 属性
slug: Web/API/MouseEvent/buttons
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

只读属性 **`MouseEvent.buttons`** 指示鼠标事件触发时鼠标（或其他输入设备）的哪些按键被按下。

每一个按键都用一个给定的数（见下文）表示。如果多个按键被同时按下，则 buttons 的值为各个键对应值相加后的值。例如，如果第二按键（`2`）和辅助按键（`4`）被同时按下，buttons 的值为 `6`（`2 + 4`）。

> [!NOTE]
> 注意不要将此属性与 {{domxref("MouseEvent.button")}} 属性混淆。`MouseEvent.buttons` 属性可在任意类型的鼠标事件中指示按键的状态，而 {{domxref("MouseEvent.button")}} 属性只能保证在由按下或释放一个或多个按键时触发的事件中获得正确的值。

## 返回值

一个数字，表示按下的一个或者多个按键。如果同时按下了多个按键，则值会被相加（例如，`3` 表示第一按键 + 第二按键）。

- `0`：没有按键或者是没有初始化
- `1`：第一按键（通常是鼠标左键）
- `2`：第二按键（通常是鼠标右键）
- `4`：辅助按键（通常是鼠标滚轮键或鼠标中键）
- `8`：第四按键（通常是“浏览器后退”按键）
- `16`：第五按键（通常是“浏览器前进”按键）

## 示例

以下示例会在触发 {{domxref("Element/mousedown_event", "mousedown")}} 事件时打印 `buttons` 属性。

### HTML

```html
<p>请使用一个或多个鼠标按键点击此处任意位置</p>
<pre id="log">[没有点击]</pre>
```

### JavaScript

```js
const buttonNames = ["left", "right", "wheel", "back", "forward"];
function mouseButtonPressed(event, buttonName) {
  // 使用与运算符（`&`）与 2 的相应幂次来检查指定按键是否被按下
  return Boolean(event.buttons & (1 << buttonNames.indexOf(buttonName)));
}

function format(event) {
  const { type, buttons } = event;
  const obj = { type, buttons };
  for (const buttonName of buttonNames) {
    obj[buttonName] = mouseButtonPressed(event, buttonName);
  }
  return JSON.stringify(obj, null, 2);
}

const log = document.getElementById("log");
function logButtons(event) {
  log.textContent = format(event);
}

document.addEventListener("mouseup", logButtons);
document.addEventListener("mousedown", logButtons);
```

### 结果

{{EmbedLiveSample("Examples")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### Firefox 备注

Firefox 在 Windows、Linux（GTK）以及 macOS 上支持 `buttons` 属性，但具有以下限制：

- 工具程序允许自定义按键的行为。因此，*第一按键*可能不是设备上的物理左键，*第二按键*也可能不是物理右键，以此类推。此外，中键（滚轮键）、第四按键和第五按键即使被按下，也可能不会被分配值。
- 单按键设备可能会通过按键与键盘按键的组合来模拟额外的按键。
- 触控设备可能会通过设定的手势来模拟按键（例如，单指触摸是*第一按键*，双指触摸是*第二按键*，等等）。
- 在 Linux（GTK）上不支持第四按键和第五按键。此外，{{domxref("Element/mouseup_event", "mouseup")}} 事件总是在 `buttons` 的值中包含被释放按键的信息。
- 在 Mac OS X 10.5 上，`buttons` 属性总是返回 `0`，因为其不具有能够实现此特性的平台 API。

## 参见

- {{domxref("MouseEvent")}}
