---
title: KeyboardEvent.keyCode
slug: Web/API/KeyboardEvent/keyCode
---

{{APIRef("DOM Events")}}{{deprecated_header()}}

这个只读的属性 **`KeyboardEvent.keyCode`** 代表着一个唯一标识的所按下的键的未修改值，它依据于一个系统和实现相关的数字代码。这通常是与密钥对应的二进制的 ASCII ({{RFC(20)}}) 或 Windows 1252 码。如果这个键不能被标志，这个值为 0。

你应该尽量避免使用它；它已经被弃用了一段时间。相反的，如果它在你的浏览器中被实现了的话，你应该使用{{domxref("KeyboardEvent.code")}}。不幸的是，有一些浏览器还是没有实现它，所以你在使用之前必须要小心，确认你所使用的那个被所有目标浏览器所支持。

> **备注：** 在处理 keydown 和 keyup 事件时，Web 开发人员不应使用可打印字符的 keycode 属性。如上所述，keycode 属性对可打印字符不有用，尤其是那些按下 shift 或 alt 键的输入。在实现快捷键处理程序时，事件（“keypress”）事件通常更好（至少当 gecko 是正在使用的运行时）。详情请参见 Gecko 按键事件。

## Example

```js
window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return; // 如果已取消默认操作，则不应执行任何操作
    }

    var handled = false;
    if (event.key !== undefined) {
      // 使用 KeyboardEvent.key 处理事件，并将 handled 设置为 true。
    } else if (event.keyCode !== undefined) {
      //使用 KeyboardEvent.keyCode 处理事件并将 handled 设置为 true。
    }

    if (handled) {
      // 如果事件已处理，则禁止“双重操作”
      event.preventDefault();
    }
  },
  true,
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 键码值

### 标准位置的可打印键

在标准位置按下或释放可打印键导致的按键事件值在浏览器之间不兼容。
IE 只将本机虚拟密钥代码值公开为 keyboardvent.keycode。
Google Chrome、Chromium 和 Safari 必须根据输入字符确定值。如果输入字符可以用 US 键盘布局输入，则使用 US 键盘布局上的 keycode 值。
从 gecko 15 geckore lease（“15.0”）开始，gecko 从一个可由键输入的 ASCII 字符（即使具有移位修饰符或支持 ASCII 的键盘布局）决定键码值。有关详细信息，请参见以下规则：

1. 如果系统是 Windows，并且按下键的本机键代码指示键是 A-Z 或 0-9，请使用 keycode。
2. 如果系统是 Mac，并且按下键的本机键码指示键为 0-9，则使用 keycode。
3. 如果按下键输入一个 ASCII 字母或数字，没有修改键，请使用 keycode。
4. 如果按下键输入带 SHIFT 键的 ASCII 字母或数字，请使用 keycode。
5. 如果按下键输入另一个没有修改键的 ASCII 字符，请使用 keycode。
6. 如果按下键输入另一个带 SHIFT 键的 ASCII 字符，请使用 keycode。
7. 否则，即按下键输入一个 Unicode 字符：

- 如果键盘布局是支持 ASCII 的键盘布局（即，可以输入 ASCII 字母），则使用 0 或者根据下面的附加规则计算。
- 否则，即键盘布局不支持 ASCII，使用环境中安装的具有最高优先级的支持 ASCII 的键盘布局：

  - 如果按备用键盘布局上的键输入一个 ASCII 字母或数字，请使用 keycode。
  - 否则，使用 0 或者根据下面的附加规则计算。

从 Firefox 60 开始，Gecko 会尽可能的根据以下规则额设置标点符号的 `keyCode` 值（当满足上述 7.1 或者 7.2 的时候）:

> **警告：** 这些附加规则的目的是为了使键盘布局映射 unicode 字符映射到美国键盘标点符号的用户可以使用只支持 ASCII 的键盘或者美国键盘布局的 Firefox 的 web 应用。否则，新映射的 `keyCode` 值可能会和其他按键冲突。例如，如果当前键盘布局是俄语，`"Period"` 键 和 `"Slash"` 键的 `keyCode` 都会是 `190`（`KeyEvent.DOM_VK_PERIOD`）。如果你需要区分这些按键但是你自己又不想支持世界上所有的键盘布局，你可能应该使用 {{domxref("KeyboardEvent.code")}}。

1. 如果运行 macOS 或者 Linux:

   1. 如果你当前的键盘布局不支持 ASCII 并且候选支持 ASCII 键盘布局可用。

      1. 如果候选支持 ASCII 的键盘布局仅通过未修改的键产生 ASCII 字符，请对该字符使用`keyCode`。
      2. 如果候选支持 ASCII 的键盘布局产生带有 Shift 键修饰符的 ASCII 字符，请对该字符使用`keyCode`。
      3. 否则，在美国键盘布局激活时，使用使用`keyCode`表示由按键产生的 ASCII 字符。

   2. 否则，在美国键盘布局激活时，使用使用`keyCode`表示由按键产生的 ASCII 字符。

2. 如果运行 Windows：

   1. 当美国键盘布局激活时，使用映射到 Windows 的相同虚拟键代码的按键产生的 ASCII 字符的`keyCode`值。

由标准位置的可打印键引起的每个浏览器的 keydown 事件的 keycode 值

<table>
  <thead>
    <tr>
      <th colspan="1" rowspan="3" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th colspan="3" rowspan="1" scope="col">Internet Explorer 11</th>
      <th colspan="6" rowspan="1" scope="col">Google Chrome 34</th>
      <th colspan="3" rowspan="1" scope="col">Chromium 34</th>
      <th colspan="3" rowspan="1" scope="col">Safari 7</th>
      <th colspan="9" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th colspan="1" scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="3" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th colspan="1" scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
    </tr>
    <tr>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th colspan="3" rowspan="1" scope="col">Internet Explorer 11</th>
      <th colspan="6" rowspan="1" scope="col">Google Chrome 34</th>
      <th colspan="3" rowspan="1" scope="col">Chromium 34</th>
      <th colspan="3" rowspan="1" scope="col">Safari 7</th>
      <th colspan="9" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"Digit1"</code></th>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
      <td colspan="3" rowspan="1"><code>0x31 (49)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit2"</code></th>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
      <td colspan="3" rowspan="1"><code>0x32 (50)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit3"</code></th>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
      <td colspan="3" rowspan="1"><code>0x33 (51)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit4"</code></th>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
      <td colspan="3" rowspan="1"><code>0x34 (52)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit5"</code></th>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
      <td colspan="3" rowspan="1"><code>0x35 (53)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit6"</code></th>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
      <td colspan="3" rowspan="1"><code>0x36 (54)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit7"</code></th>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
      <td colspan="3" rowspan="1"><code>0x37 (55)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit8"</code></th>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
      <td colspan="3" rowspan="1"><code>0x38 (56)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit9"</code></th>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
      <td colspan="3" rowspan="1"><code>0x39 (57)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Digit0"</code></th>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
      <td colspan="3" rowspan="1"><code>0x30 (48)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyA"</code></th>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
      <td colspan="3" rowspan="1"><code>0x41 (65)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyB"</code></th>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
      <td colspan="3" rowspan="1"><code>0x42 (66)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyC"</code></th>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
      <td colspan="3" rowspan="1"><code>0x43 (67)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyD"</code></th>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
      <td colspan="3" rowspan="1"><code>0x44 (68)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyE"</code></th>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
      <td colspan="3" rowspan="1"><code>0x45 (69)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyF"</code></th>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
      <td colspan="3" rowspan="1"><code>0x46 (70)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyG"</code></th>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
      <td colspan="3" rowspan="1"><code>0x47 (71)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyH"</code></th>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
      <td colspan="3" rowspan="1"><code>0x48 (72)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyI"</code></th>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
      <td colspan="3" rowspan="1"><code>0x49 (73)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyJ"</code></th>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
      <td colspan="3" rowspan="1"><code>0x4A (74)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyK"</code></th>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
      <td colspan="3" rowspan="1"><code>0x4B (75)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyL"</code></th>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
      <td colspan="3" rowspan="1"><code>0x4C (76)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyM"</code></th>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
      <td colspan="3" rowspan="1"><code>0x4D (77)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyN"</code></th>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
      <td colspan="3" rowspan="1"><code>0x4E (78)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyO"</code></th>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
      <td colspan="3" rowspan="1"><code>0x4F (79)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyP"</code></th>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
      <td colspan="3" rowspan="1"><code>0x50 (80)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyQ"</code></th>
      <td colspan="3" rowspan="1"><code>0x51 (81)</code></td>
      <td colspan="3" rowspan="1"><code>0x51 (81)</code></td>
      <td rowspan="1"><code>0x51 (81)</code></td>
      <td rowspan="1"><code>0x51 (81)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td rowspan="1"><code>0x51 (81)</code></td>
      <td rowspan="1"><code>0x51 (81)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td colspan="3" rowspan="1"><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td><code>0x51 (81)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td colspan="3" rowspan="1"><code>0x51 (81)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyR"</code></th>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
      <td colspan="3" rowspan="1"><code>0x52 (82)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyS"</code></th>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
      <td colspan="3" rowspan="1"><code>0x53 (83)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyT"</code></th>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
      <td colspan="3" rowspan="1"><code>0x54 (84)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyU"</code></th>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
      <td colspan="3" rowspan="1"><code>0x55 (85)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyV"</code></th>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
      <td colspan="3" rowspan="1"><code>0x56 (86)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyW"</code></th>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
      <td colspan="3" rowspan="1"><code>0x57 (87)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyX"</code></th>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
      <td colspan="3" rowspan="1"><code>0x58 (88)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyY"</code></th>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
      <td colspan="3" rowspan="1"><code>0x59 (89)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"KeyZ"</code></th>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
      <td colspan="3" rowspan="1"><code>0x5A (90)</code></td>
    </tr>
  </tbody>
</table>

由标准位置的可打印键（US 布局中的标点符号）引起的每个浏览器的 keydown 事件的 keycode 值：

<table>
  <thead>
    <tr>
      <th colspan="1" rowspan="3" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th colspan="3" rowspan="1" scope="col">Internet Explorer 11</th>
      <th colspan="6" rowspan="1" scope="col">Google Chrome 34</th>
      <th colspan="3" rowspan="1" scope="col">Chromium 34</th>
      <th colspan="3" rowspan="1" scope="col">Safari 7</th>
      <th colspan="9" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Windows (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th colspan="1" scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="3" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
      <th colspan="1" scope="col">US</th>
      <th scope="col">Japanese</th>
      <th scope="col">Greek</th>
    </tr>
    <tr>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Windows</th>
      <th colspan="3" rowspan="1" scope="col">Mac (10.9)</th>
      <th colspan="3" rowspan="1" scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th colspan="3" rowspan="1" scope="col">Internet Explorer 11</th>
      <th colspan="6" rowspan="1" scope="col">Google Chrome 34</th>
      <th colspan="3" rowspan="1" scope="col">Chromium 34</th>
      <th colspan="3" rowspan="1" scope="col">Safari 7</th>
      <th colspan="9" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"Comma"</code></th>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
      <td colspan="3" rowspan="2"><code>0xBC (188)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Comma"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Period"</code></th>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
      <td colspan="3" rowspan="2"><code>0xBE (190)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Period"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Semicolon"</code></th>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xBB (187)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xBB (187)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code> *1</td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE5 (229) *2</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE5 (229) *3</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBA (186)</code></td>
      <td><code>0xBA (186)</code> *1</td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE5 (229) *2</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x3B (59)</code></td>
      <td colspan="1" rowspan="2"><code>0x3B (59)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x3B (59)</code></td>
      <td colspan="1" rowspan="2"><code>0x3B (59)</code> *1</td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x3B (59)</code></td>
      <td colspan="1" rowspan="2"><code>0x3B (59)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Semicolon"</code> with <kbd>Shift</kbd></th>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBB (187) </code>*1
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBB (187)</code>
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBB (187)</code> *1
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Quote"</code></th>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186) *1</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBA (186)</code> *1
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x3A (58)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x3A (58)</code> *1
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x3A (58)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDE (222)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Quote"</code> with Shift</th>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xDE (222)</code> *1
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0x38 (56)</code>
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xDE (222)</code> *1
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketLeft"</code></th>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xC0(192)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xC0(192)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0xDB (219)</code> *1</td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x32 (50)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td><code>0xDB (219) *1</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x40 (64)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x40 (64)</code> *1
      </td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x40 (64)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDB (219)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketLeft"</code> with <kbd>Shift</kbd></th>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xC0 (192) *1</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xC0 (192)</code>
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xC0 (192) *1</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketRight"</code></th>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219) *1</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219) *1</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219)</code> *1
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDB (219)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDD (221)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"BracketRight"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Backquote"</code></th>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(153, 153, 153)">
        <code>N/A</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(153, 153, 153)">
        <code>N/A</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xF4 (244)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(153, 153, 153)">
        <code>N/A</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="3" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2"><code>0xC0 (192)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Backquote"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Backslash"</code></th>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDD (221)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDD (221)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDD (221)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDD (221)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="3" rowspan="2"><code>0xDC (220)</code></td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDD (221)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xDC (220)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Backslash"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"Minus"</code></th>
      <td colspan="3" rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="3" rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="1" rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code> *1</td>
      <td colspan="1" rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="1" rowspan="2"><code>0xBD (189)</code></td>
      <td><code>0xBD (189)</code></td>
      <td colspan="1" rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="1"><code>0xBD (189)</code></td>
      <td rowspan="1"><code>0xBD (189) *1</code></td>
      <td rowspan="1"><code>0xBD (189)</code></td>
      <td colspan="3" rowspan="2"><code>0xAD (173)</code></td>
      <td rowspan="2"><code>0xAD (173)</code></td>
      <td rowspan="2"><code>0xAD (173) *1</code></td>
      <td rowspan="2"><code>0xAD (173)</code></td>
      <td colspan="3" rowspan="2"><code>0xAD (173)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Minus"</code> with <kbd>Shift</kbd></th>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBB (187)</code> *1
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBB (187)</code>
      </td>
      <td><code>0xBD (189)</code></td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBB (187) *1</code>
      </td>
      <td><code>0xBD (189)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Equal"</code></th>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDE (222)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDE (222)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td><code>0xBB (187) *1</code></td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x36 (54)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xBB (187)</code></td>
      <td rowspan="1"><code>0xBB (187)</code></td>
      <td rowspan="1"><code>0xBB (187) *1</code></td>
      <td rowspan="1"><code>0xBB (187)</code></td>
      <td colspan="1" rowspan="2"><code>0x3D (61)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xA0 (160)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x3D (61)</code></td>
      <td colspan="1" rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xA0 (160)</code> *1
      </td>
      <td colspan="1" rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2"><code>0x3D (61)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xA0 (160)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x3D (61)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Equal"</code> with <kbd>Shift</kbd></th>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xC0 (192) *1</code>
      </td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xC0 (192)</code>
      </td>
      <td><code>0xBB (187)</code></td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xC0 (192) *1</code>
      </td>
      <td><code>0xBB (187)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlRo"</code></th>
      <td colspan="1" rowspan="2"><code>0xC1 (193)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE2 (226)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xC1 (193)</code></td>
      <td colspan="1" rowspan="2"><code>0xC1 (193)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE2 (226)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xC1 (193)</code></td>
      <td colspan="1" rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="1" rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td colspan="1" rowspan="2">*4</td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code><br />
      </td>
      <td colspan="1" rowspan="2">*4</td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td rowspan="2"><code>0xBD (189)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE5 </code>(229) *5
      </td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2"><code>0xA7 (167)</code></td>
      <td colspan="1" rowspan="2"><code>0xA7 (167)</code></td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlRo"</code> with <kbd>Shift</kbd></th>
    </tr>
    <tr>
      <th scope="row"><code>"IntlYen"</code></th>
      <td colspan="1" rowspan="2"><code>0xFF (255)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xFF (255)</code></td>
      <td colspan="1" rowspan="2"><code>0xFF (255)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0xFF (255)</code></td>
      <td><code>0x00 (0)</code></td>
      <td><code>0x00 (0)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td colspan="1" rowspan="2">*4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code>
      </td>
      <td colspan="1" rowspan="2">*4</td>
      <td rowspan="1"><code>0x00 (0)</code></td>
      <td rowspan="1"><code>0x00 (0)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xE5 </code>(229) *5
      </td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC </code>(220)
      </td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2"><code>0xDC </code>(220)</td>
      <td colspan="1" rowspan="2"><code>0xDC </code>(220)</td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
      <td rowspan="2" style="background-color: rgb(255, 255, 204)">
        <code>0xDC (220)</code>
      </td>
      <td colspan="1" rowspan="2"><code>0x00 (0)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"IntlYen"</code> with <kbd>Shift</kbd></th>
      <td><code>0xDC (220)</code></td>
      <td><code>0xDC (220)</code></td>
      <td style="background-color: rgb(255, 204, 255)">
        <code>0xBD (189)</code>
      </td>
      <td><code>0xDC (220)</code></td>
      <td><code>0xDC (220)</code></td>
    </tr>
  </tbody>
</table>

1. 该值是从 JIS 键盘输入的。使用 ANSI 键盘时，键代码值和输入字符是从美国键盘布局中选择的。
2. 按键是一个死键。keyup 事件的值是 0xba（186）。
3. 按键是一个死键。keyup 事件的值为 0x10（16）。
4. 没有触发任何按键事件。
5. 该键在希腊键盘布局中不可用（不输入任何字符）。keyup 事件的值为 0x00（0）。

### 不可打印键（功能键）

<table>
  <caption>
    由修改键引起的每个浏览器的 keydown 事件的 keycode 值：
  </caption>
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"AltLeft"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"AltRight"</code></th>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
      <td><code>0x12 (18)</code></td>
    </tr>
    <tr>
      <th scope="row">
        <code>"AltRight"</code> when it's <code>"AltGraph"</code> key
      </th>
      <td>*1</td>
      <td>*1</td>
      <td style="background-color: rgb(153, 153, 153)">N/A</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xE1 (225)</code>
      </td>
      <td style="background-color: rgb(153, 153, 153)">N/A</td>
      <td>*1</td>
      <td style="background-color: rgb(153, 153, 153)">N/A</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xE1 (225)</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"CapsLock"</code></th>
      <td><code>0x14 (20)</code> *2</td>
      <td><code>0x14 (20)</code> *2</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> *2</td>
      <td><code>0x14 (20)</code></td>
      <td><code>0x14 (20)</code> *3</td>
    </tr>
    <tr>
      <th scope="row"><code>"ControlLeft"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ControlRight"</code></th>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
      <td><code>0x11 (17)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"OSLeft"</code></th>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td><code>0x5B (91)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xE0 (224)</code>
      </td>
      <td><code>0x5B (91)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"OSRight"</code></th>
      <td><code>0x5C (92)</code></td>
      <td><code>0x5C (92)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x5D (93)</code>
      </td>
      <td><code>0x5C (92)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x5D (93)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x5B (91)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xE0 (224)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x5B (91)</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"ShiftLeft"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ShiftRight"</code></th>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
      <td><code>0x10 (16)</code></td>
    </tr>
  </tbody>
</table>

1. 在 Windows 上，“altgraph”键导致“controlLeft”键事件和“altRight”键事件。
2. 当日语键盘布局处于活动状态时，“capslock”键没有 <kbd>Shift</kbd> 会导致 0xf0（240）。该键作为“`Alphanumeric`”键工作，其标签为“英数”。
3. 当日语键盘布局处于活动状态时，“capslock”键没有 <kbd>Shift</kbd> 会导致 0x00（0）。该键作为“`Alphanumeric`”键工作，其标签为“英数”。

由不可打印的键引起的每个浏览器的 keydown 事件的 keycode 值：

<table>
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"ContextMenu"</code></th>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *1
      </td>
      <td><code>0x5D (93)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *1
      </td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
      <td><code>0x5D (93)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Enter"</code></th>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Space"</code></th>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
      <td><code>0x20 (32)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Tab"</code></th>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
      <td><code>0x09 (9)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Delete"</code></th>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"End"</code></th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Help"</code></th>
      <td style="background-color: rgb(153, 153, 153)">N/A</td>
      <td style="background-color: rgb(153, 153, 153)">N/A</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2D (45)</code> *2
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2F (47)</code> *3
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2D (45)</code> *2
      </td>
      <td style="background-color: rgb(153, 153, 153)">N/A</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2D (45)</code> *2
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x06 (6)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"Home"</code></th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Insert"</code></th>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PageDown"</code></th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PageUp"</code></th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowDown"</code></th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowLeft"</code></th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowRight"</code></th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"ArrowUp"</code></th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Escape"</code></th>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
      <td><code>0x1B (27)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"PrintScreen"</code></th>
      <td><code>0x2C (44)</code> *4</td>
      <td><code>0x2C (44)</code> *4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x7C (124)</code>*5
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2A (42)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x7C (124)</code>*5
      </td>
      <td><code>0x2C (44)</code> *4</td>
      <td><code>0x2C (44)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2A (42)</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"ScrollLock"</code></th>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x7D (125)</code>*5
      </td>
      <td><code>0x91 (145)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x7D (125)</code>*5
      </td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
      <td><code>0x91 (145)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Pause"</code></th>
      <td><code>0x13 (19)</code> *6</td>
      <td><code>0x13 (19)</code> *6</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x7E (126)</code>*5
      </td>
      <td><code>0x13 (19)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x7E (126)</code>*5
      </td>
      <td><code>0x13 (19)</code> *6</td>
      <td><code>0x13 (19)</code></td>
      <td><code>0x13 (19)</code></td>
    </tr>
  </tbody>
</table>

1. keypress 事件被激发，其 keypcode 和 charcode 为 0x10（16），但文本未输入编辑器。
2. 在 Mac 电脑上，“`Help`”键映射到电脑键盘的“`Insert`”键。这些`keyCode` 值与“`Insert`”键的`keyCode`值相同。
3. 在 Fedora 20 上测试。
4. 仅激发 keyup 事件。
5. PC 的“`PrintScreen`”、“`ScrollLock`”和“`Pause`”映射到 Mac 的“F13”、“F14”和“F15”。Chrome 和 Safari 用 Mac 的键映射相同的`keyCode`值。
6. “`Pause`”键加上 <kbd>Control</kbd> 导致 0x03（3）。

由功能键引起的每个浏览器的 keydown 事件的 keycode 值：

<table>
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"F1"</code></th>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
      <td><code>0x70 (112)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F2"</code></th>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
      <td><code>0x71 (113)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F3"</code></th>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
      <td><code>0x72 (114)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F4"</code></th>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
      <td><code>0x73 (115)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F5"</code></th>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
      <td><code>0x74 (116)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F6"</code></th>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
      <td><code>0x75 (117)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F7"</code></th>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
      <td><code>0x76 (118)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F8"</code></th>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
      <td><code>0x77 (119)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F9"</code></th>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
      <td><code>0x78 (120)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F10"</code></th>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
      <td><code>0x79 (121)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F11"</code></th>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
      <td><code>0x7A (122)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F12"</code></th>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
      <td><code>0x7B (123)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"F13"</code></th>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code> *1</td>
      <td><code>0x7C (124)</code></td>
      <td><code>0x7C (124)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x2C (44)</code> *2
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F14"</code></th>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code> *1</td>
      <td><code>0x7D (125)</code></td>
      <td><code>0x7D (125)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x91 (145)</code> *2
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F15"</code></th>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code> *1</td>
      <td><code>0x7E (126)</code></td>
      <td><code>0x7E (126)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x13 (19)</code> *2
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F16"</code></th>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code> *1</td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td><code>0x7F (127)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F17"</code></th>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code> *1</td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td><code>0x80 (128)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F18"</code></th>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code> *1</td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td><code>0x81 (129)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F19"</code></th>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *4</td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td><code>0x82 (130)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"F20"</code></th>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td><code>0x83 (131)</code></td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xE5 (229)</code> *5
      </td>
      <td><code>0x83 (131)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *6</td>
    </tr>
    <tr>
      <th scope="row"><code>"F21"</code></th>
      <td><code>0x84 (132)</code></td>
      <td><code>0x84 (132)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td><code>0x84 (132)</code></td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *8</td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *6</td>
    </tr>
    <tr>
      <th scope="row"><code>"F22"</code></th>
      <td><code>0x85 (133)</code></td>
      <td><code>0x85 (133)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td><code>0x85 (133)</code></td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *8</td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *6</td>
    </tr>
    <tr>
      <th scope="row"><code>"F23"</code></th>
      <td><code>0x86 (134)</code></td>
      <td><code>0x86 (134)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td><code>0x86 (134)</code></td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *8</td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *6</td>
    </tr>
    <tr>
      <th scope="row"><code>"F24"</code></th>
      <td><code>0x87 (135)</code></td>
      <td><code>0x87 (135)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *4</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *7
      </td>
      <td><code>0x87 (135)</code></td>
      <td style="background-color: rgb(255, 255, 204)"><code>N/A</code> *8</td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x00 (0)</code> *3
      </td>
    </tr>
  </tbody>
</table>

1. 在 Fedora 20 上测试。
2. PC 的“`PrintScreen`”、“`ScrollLock`”和“`Pause`”映射到 Mac 的“F13”、“F14”和“F15”。火狐映射到和 PC 相同的`keyCode`。
3. 在 Fedora 20 上测试。这些键不会导致`GDK_Fxx` 按键符号。如果键产生正确的按键符号，这些值必须与 IE 相同。
4. 在 Fedora 20 上测试。这些键不会在 chromium 上引起 dom 键事件。
5. keyup 事件的 keycode 值为 0x83（131）。
6. 在 Fedora 20 上测试。这些密钥不会在 Firefox 上引起 DOM 密钥事件。
7. 仅激发 keydown 事件。
8. 在 Firefox 上不会触发任何 DOM 密钥事件。

### 小键盘键

由 numPad 中的键在 numLock 状态下导致的每个浏览器的 keyDown 事件的 keycode 值

<table>
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Windows</th>
      <th scope="col">Mac (10.9)</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="2" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th scope="col">Safari 7</th>
      <th colspan="3" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"NumLock"</code></th>
      <td><code>0x90 (144)</code></td>
      <td><code>0x90 (144)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x0C (12)</code> *1
      </td>
      <td><code>0x90 (144)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x0C (12)</code> *1
      </td>
      <td><code>0x90 (144)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x0C (12)</code> *1
      </td>
      <td><code>0x90 (144)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad0"</code></th>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
      <td><code>0x60 (96)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad1"</code></th>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
      <td><code>0x61 (97)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad2"</code></th>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
      <td><code>0x62 (98)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad3"</code></th>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
      <td><code>0x63 (99)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad4"</code></th>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
      <td><code>0x64 (100)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad5"</code></th>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
      <td><code>0x65 (101)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad6"</code></th>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
      <td><code>0x66 (102)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad7"</code></th>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
      <td><code>0x67 (103)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad8"</code></th>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
      <td><code>0x68 (104)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad9"</code></th>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
      <td><code>0x69 (105)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadAdd"</code></th>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
      <td><code>0x6B (107)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadComma"</code> inputting <code>","</code></th>
      <td><code>0xC2 (194)</code></td>
      <td><code>0xC2 (194)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBC (188)</code>
      </td>
      <td style="background-color: rgb(153, 153, 153)">
        <code>Always inputs </code>"."
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBC (188)</code>
      </td>
      <td><code>0xC2 (194)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x6C (108)</code>
      </td>
      <td style="background-color: rgb(153, 153, 153)">
        <code>Always inputs </code>"."
      </td>
    </tr>
    <tr>
      <th scope="row">
        <code>"NumpadComma"</code> inputting <code>"."</code> or empty string
      </th>
      <td><code>0xC2 (194)</code></td>
      <td><code>0xC2 (194)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBE (190)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x6E (110)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBE (190)</code>
      </td>
      <td><code>0xC2 (194)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x6C (108)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x6E (110)</code>
      </td>
    </tr>
    <tr>
      <th scope="row">
        <code>"NumpadDecimal"</code> inputting <code>"."</code>
      </th>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
    </tr>
    <tr>
      <th scope="row">
        <code>"NumpadDecimal"</code> inputting <code>","</code>
      </th>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x6C (108)</code>
      </td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td><code>0x6E (110)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x6C (108)</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadDivide"</code></th>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
      <td><code>0x6F (111)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadEnter"</code></th>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
      <td><code>0x0D (13)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadEqual"</code></th>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBB (187)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBB (187)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0xBB (187)</code>
      </td>
      <td><code>0x0C (12)</code></td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x3D (61)</code>
      </td>
      <td style="background-color: rgb(255, 255, 204)">
        <code>0x3D (61)</code>
      </td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadMultiply"</code></th>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
      <td><code>0x6A (106)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadSubtract"</code></th>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
      <td><code>0x6D (109)</code></td>
    </tr>
  </tbody>
</table>

1. “numlock”键在 Mac 上作为“clear”键工作。

由处于无 numlock 状态的 numpad 中的键引起的每个浏览器的 keydown 事件的 keycode 值

<table>
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="1" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th colspan="2" rowspan="1" scope="col">Gecko 29</th>
    </tr>
    <tr>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="1" rowspan="2" scope="row">
        {{domxref("KeyboardEvent.code")}}
      </th>
      <th scope="col">Windows</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
      <th scope="col">Windows</th>
      <th scope="col">Linux (Ubuntu 14.04)</th>
    </tr>
    <tr>
      <th scope="col">Internet Explorer 11</th>
      <th colspan="1" rowspan="1" scope="col">Google Chrome 34</th>
      <th scope="col">Chromium 34</th>
      <th colspan="2" rowspan="1" scope="col">Gecko 29</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th scope="row"><code>"Numpad0"</code> (<code>"Insert"</code>)</th>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
      <td><code>0x2D (45)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad1"</code> (<code>"End"</code>)</th>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
      <td><code>0x23 (35)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad2"</code> (<code>"ArrowDown"</code>)</th>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
      <td><code>0x28 (40)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad3"</code> (<code>"PageDown"</code>)</th>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
      <td><code>0x22 (34)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad4"</code> (<code>"ArrowLeft"</code>)</th>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
      <td><code>0x25 (37)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad5"</code></th>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
      <td><code>0x0C (12)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad6"</code> (<code>"ArrowRight"</code>)</th>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
      <td><code>0x27 (39)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad7"</code> (<code>"Home"</code>)</th>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
      <td><code>0x24 (36)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad8"</code> (<code>"ArrowUp"</code>)</th>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
      <td><code>0x26 (38)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"Numpad9"</code> (<code>"PageUp"</code>)</th>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
      <td><code>0x21 (33)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>"NumpadDecimal"</code> (<code>"Delete"</code>)</th>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
      <td><code>0x2E (46)</code></td>
    </tr>
  </tbody>
</table>

最近的 Mac 没有“numlock”键和状态。因此，未锁定状态不可用。

## 常数值的键码

gecko 在 keyboardvent 中定义了许多 keycode 值，用于显式地生成映射表。这些值对 Firefox 的附加开发人员很有用，但在公共网页中却没有那么有用。

| 常数                         | 值         | 描述                                                                                                                       |
| ---------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| `DOM_VK_CANCEL`              | 0x03 (3)   | Cancel key.                                                                                                                |
| `DOM_VK_HELP`                | 0x06 (6)   | Help key.                                                                                                                  |
| `DOM_VK_BACK_SPACE`          | 0x08 (8)   | Backspace key.                                                                                                             |
| `DOM_VK_TAB`                 | 0x09 (9)   | Tab key.                                                                                                                   |
| `DOM_VK_CLEAR`               | 0x0C (12)  | "5" key on Numpad when NumLock is unlocked. Or on Mac, clear key which is positioned at NumLock key.                       |
| `DOM_VK_RETURN`              | 0x0D (13)  | Return/enter key on the main keyboard.                                                                                     |
| `DOM_VK_ENTER`               | 0x0E (14)  | Reserved, but not used. {{Deprecated_Inline}} (Dropped, see [Firefox bug 969247](https://bugzil.la/969247).)               |
| `DOM_VK_SHIFT`               | 0x10 (16)  | Shift key.                                                                                                                 |
| `DOM_VK_CONTROL`             | 0x11 (17)  | Control key.                                                                                                               |
| `DOM_VK_ALT`                 | 0x12 (18)  | Alt (Option on Mac) key.                                                                                                   |
| `DOM_VK_PAUSE`               | 0x13 (19)  | Pause key.                                                                                                                 |
| `DOM_VK_CAPS_LOCK`           | 0x14 (20)  | Caps lock.                                                                                                                 |
| `DOM_VK_KANA`                | 0x15 (21)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_HANGUL`              | 0x15 (21)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_EISU`                | 0x 16 (22) | "英数" key on Japanese Mac keyboard.                                                                                       |
| `DOM_VK_JUNJA`               | 0x17 (23)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_FINAL`               | 0x18 (24)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_HANJA`               | 0x19 (25)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_KANJI`               | 0x19 (25)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_ESCAPE`              | 0x1B (27)  | Escape key.                                                                                                                |
| `DOM_VK_CONVERT`             | 0x1C (28)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_NONCONVERT`          | 0x1D (29)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_ACCEPT`              | 0x1E (30)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_MODECHANGE`          | 0x1F (31)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_SPACE`               | 0x20 (32)  | Space bar.                                                                                                                 |
| `DOM_VK_PAGE_UP`             | 0x21 (33)  | Page Up key.                                                                                                               |
| `DOM_VK_PAGE_DOWN`           | 0x22 (34)  | Page Down key.                                                                                                             |
| `DOM_VK_END`                 | 0x23 (35)  | End key.                                                                                                                   |
| `DOM_VK_HOME`                | 0x24 (36)  | Home key.                                                                                                                  |
| `DOM_VK_LEFT`                | 0x25 (37)  | Left arrow.                                                                                                                |
| `DOM_VK_UP`                  | 0x26 (38)  | Up arrow.                                                                                                                  |
| `DOM_VK_RIGHT`               | 0x27 (39)  | Right arrow.                                                                                                               |
| `DOM_VK_DOWN`                | 0x28 (40)  | Down arrow.                                                                                                                |
| `DOM_VK_SELECT`              | 0x29 (41)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_PRINT`               | 0x2A (42)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_EXECUTE`             | 0x2B (43)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_PRINTSCREEN`         | 0x2C (44)  | Print Screen key.                                                                                                          |
| `DOM_VK_INSERT`              | 0x2D (45)  | Ins(ert) key.                                                                                                              |
| `DOM_VK_DELETE`              | 0x2E (46)  | Del(ete) key.                                                                                                              |
| `DOM_VK_0`                   | 0x30 (48)  | "0" key in standard key location.                                                                                          |
| `DOM_VK_1`                   | 0x31 (49)  | "1" key in standard key location.                                                                                          |
| `DOM_VK_2`                   | 0x32 (50)  | "2" key in standard key location.                                                                                          |
| `DOM_VK_3`                   | 0x33 (51)  | "3" key in standard key location.                                                                                          |
| `DOM_VK_4`                   | 0x34 (52)  | "4" key in standard key location.                                                                                          |
| `DOM_VK_5`                   | 0x35 (53)  | "5" key in standard key location.                                                                                          |
| `DOM_VK_6`                   | 0x36 (54)  | "6" key in standard key location.                                                                                          |
| `DOM_VK_7`                   | 0x37 (55)  | "7" key in standard key location.                                                                                          |
| `DOM_VK_8`                   | 0x38 (56)  | "8" key in standard key location.                                                                                          |
| `DOM_VK_9`                   | 0x39 (57)  | "9" key in standard key location.                                                                                          |
| `DOM_VK_COLON`               | 0x3A (58)  | Colon (":") key.                                                                                                           |
| `DOM_VK_SEMICOLON`           | 0x3B (59)  | Semicolon (";") key.                                                                                                       |
| `DOM_VK_LESS_THAN`           | 0x3C (60)  | Less-than ("<") key.                                                                                                       |
| `DOM_VK_EQUALS`              | 0x3D (61)  | Equals ("=") key.                                                                                                          |
| `DOM_VK_GREATER_THAN`        | 0x3E (62)  | Greater-than (">") key.                                                                                                    |
| `DOM_VK_QUESTION_MARK`       | 0x3F (63)  | Question mark ("?") key.                                                                                                   |
| `DOM_VK_AT`                  | 0x40 (64)  | Atmark ("@") key.                                                                                                          |
| `DOM_VK_A`                   | 0x41 (65)  | "A" key.                                                                                                                   |
| `DOM_VK_B`                   | 0x42 (66)  | "B" key.                                                                                                                   |
| `DOM_VK_C`                   | 0x43 (67)  | "C" key.                                                                                                                   |
| `DOM_VK_D`                   | 0x44 (68)  | "D" key.                                                                                                                   |
| `DOM_VK_E`                   | 0x45 (69)  | "E" key.                                                                                                                   |
| `DOM_VK_F`                   | 0x46 (70)  | "F" key.                                                                                                                   |
| `DOM_VK_G`                   | 0x47 (71)  | "G" key.                                                                                                                   |
| `DOM_VK_H`                   | 0x48 (72)  | "H" key.                                                                                                                   |
| `DOM_VK_I`                   | 0x49 (73)  | "I" key.                                                                                                                   |
| `DOM_VK_J`                   | 0x4A (74)  | "J" key.                                                                                                                   |
| `DOM_VK_K`                   | 0x4B (75)  | "K" key.                                                                                                                   |
| `DOM_VK_L`                   | 0x4C (76)  | "L" key.                                                                                                                   |
| `DOM_VK_M`                   | 0x4D (77)  | "M" key.                                                                                                                   |
| `DOM_VK_N`                   | 0x4E (78)  | "N" key.                                                                                                                   |
| `DOM_VK_O`                   | 0x4F (79)  | "O" key.                                                                                                                   |
| `DOM_VK_P`                   | 0x50 (80)  | "P" key.                                                                                                                   |
| `DOM_VK_Q`                   | 0x51 (81)  | "Q" key.                                                                                                                   |
| `DOM_VK_R`                   | 0x52 (82)  | "R" key.                                                                                                                   |
| `DOM_VK_S`                   | 0x53 (83)  | "S" key.                                                                                                                   |
| `DOM_VK_T`                   | 0x54 (84)  | "T" key.                                                                                                                   |
| `DOM_VK_U`                   | 0x55 (85)  | "U" key.                                                                                                                   |
| `DOM_VK_V`                   | 0x56 (86)  | "V" key.                                                                                                                   |
| `DOM_VK_W`                   | 0x57 (87)  | "W" key.                                                                                                                   |
| `DOM_VK_X`                   | 0x58 (88)  | "X" key.                                                                                                                   |
| `DOM_VK_Y`                   | 0x59 (89)  | "Y" key.                                                                                                                   |
| `DOM_VK_Z`                   | 0x5A (90)  | "Z" key.                                                                                                                   |
| `DOM_VK_WIN`                 | 0x5B (91)  | Windows logo key on Windows. Or Super or Hyper key on Linux.                                                               |
| `DOM_VK_CONTEXT_MENU`        | 0x5D (93)  | Opening context menu key.                                                                                                  |
| `DOM_VK_SLEEP`               | 0x5F (95)  | Linux support for this keycode was added in Gecko 4.0.                                                                     |
| `DOM_VK_NUMPAD0`             | 0x60 (96)  | "0" on the numeric keypad.                                                                                                 |
| `DOM_VK_NUMPAD1`             | 0x61 (97)  | "1" on the numeric keypad.                                                                                                 |
| `DOM_VK_NUMPAD2`             | 0x62 (98)  | "2" on the numeric keypad.                                                                                                 |
| `DOM_VK_NUMPAD3`             | 0x63 (99)  | "3" on the numeric keypad.                                                                                                 |
| `DOM_VK_NUMPAD4`             | 0x64 (100) | "4" on the numeric keypad.                                                                                                 |
| `DOM_VK_NUMPAD5`             | 0x65 (101) | "5" on the numeric keypad.                                                                                                 |
| `DOM_VK_NUMPAD6`             | 0x66 (102) | "6" on the numeric keypad.                                                                                                 |
| `DOM_VK_NUMPAD7`             | 0x67 (103) | "7" on the numeric keypad.                                                                                                 |
| `DOM_VK_NUMPAD8`             | 0x68 (104) | "8" on the numeric keypad.                                                                                                 |
| `DOM_VK_NUMPAD9`             | 0x69 (105) | "9" on the numeric keypad.                                                                                                 |
| `DOM_VK_MULTIPLY`            | 0x6A (106) | "\*" on the numeric keypad.                                                                                                |
| `DOM_VK_ADD`                 | 0x6B (107) | "+" on the numeric keypad.                                                                                                 |
| `DOM_VK_SEPARATOR`           | 0x6C (108) |                                                                                                                            |
| `DOM_VK_SUBTRACT`            | 0x6D (109) | "-" on the numeric keypad.                                                                                                 |
| `DOM_VK_DECIMAL`             | 0x6E (110) | Decimal point on the numeric keypad.                                                                                       |
| `DOM_VK_DIVIDE`              | 0x6F (111) | "/" on the numeric keypad.                                                                                                 |
| `DOM_VK_F1`                  | 0x70 (112) | F1 key.                                                                                                                    |
| `DOM_VK_F2`                  | 0x71 (113) | F2 key.                                                                                                                    |
| `DOM_VK_F3`                  | 0x72 (114) | F3 key.                                                                                                                    |
| `DOM_VK_F4`                  | 0x73 (115) | F4 key.                                                                                                                    |
| `DOM_VK_F5`                  | 0x74 (116) | F5 key.                                                                                                                    |
| `DOM_VK_F6`                  | 0x75 (117) | F6 key.                                                                                                                    |
| `DOM_VK_F7`                  | 0x76 (118) | F7 key.                                                                                                                    |
| `DOM_VK_F8`                  | 0x77 (119) | F8 key.                                                                                                                    |
| `DOM_VK_F9`                  | 0x78 (120) | F9 key.                                                                                                                    |
| `DOM_VK_F10`                 | 0x79 (121) | F10 key.                                                                                                                   |
| `DOM_VK_F11`                 | 0x7A (122) | F11 key.                                                                                                                   |
| `DOM_VK_F12`                 | 0x7B (123) | F12 key.                                                                                                                   |
| `DOM_VK_F13`                 | 0x7C (124) | F13 key.                                                                                                                   |
| `DOM_VK_F14`                 | 0x7D (125) | F14 key.                                                                                                                   |
| `DOM_VK_F15`                 | 0x7E (126) | F15 key.                                                                                                                   |
| `DOM_VK_F16`                 | 0x7F (127) | F16 key.                                                                                                                   |
| `DOM_VK_F17`                 | 0x80 (128) | F17 key.                                                                                                                   |
| `DOM_VK_F18`                 | 0x81 (129) | F18 key.                                                                                                                   |
| `DOM_VK_F19`                 | 0x82 (130) | F19 key.                                                                                                                   |
| `DOM_VK_F20`                 | 0x83 (131) | F20 key.                                                                                                                   |
| `DOM_VK_F21`                 | 0x84 (132) | F21 key.                                                                                                                   |
| `DOM_VK_F22`                 | 0x85 (133) | F22 key.                                                                                                                   |
| `DOM_VK_F23`                 | 0x86 (134) | F23 key.                                                                                                                   |
| `DOM_VK_F24`                 | 0x87 (135) | F24 key.                                                                                                                   |
| `DOM_VK_NUM_LOCK`            | 0x90 (144) | Num Lock key.                                                                                                              |
| `DOM_VK_SCROLL_LOCK`         | 0x91 (145) | Scroll Lock key.                                                                                                           |
| `DOM_VK_WIN_OEM_FJ_JISHO`    | 0x92 (146) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for "Dictionary" key on Fujitsu OASYS.      |
| `DOM_VK_WIN_OEM_FJ_MASSHOU`  | 0x93 (147) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for "Unregister word" key on Fujitsu OASYS. |
| `DOM_VK_WIN_OEM_FJ_TOUROKU`  | 0x94 (148) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for "Register word" key on Fujitsu OASYS.   |
| `DOM_VK_WIN_OEM_FJ_LOYA`     | 0x95 (149) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for "Left OYAYUBI" key on Fujitsu OASYS.    |
| `DOM_VK_WIN_OEM_FJ_ROYA`     | 0x96 (150) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for "Right OYAYUBI" key on Fujitsu OASYS.   |
| `DOM_VK_CIRCUMFLEX`          | 0xA0 (160) | Circumflex ("^") key.                                                                                                      |
| `DOM_VK_EXCLAMATION`         | 0xA1 (161) | Exclamation ("!") key.                                                                                                     |
| `DOM_VK_DOUBLE_QUOTE`        | 0xA3 (162) | Double quote (""") key.                                                                                                    |
| `DOM_VK_HASH`                | 0xA3 (163) | Hash ("#") key.                                                                                                            |
| `DOM_VK_DOLLAR`              | 0xA4 (164) | Dollar sign ("$") key.                                                                                                     |
| `DOM_VK_PERCENT`             | 0xA5 (165) | Percent ("%") key.                                                                                                         |
| `DOM_VK_AMPERSAND`           | 0xA6 (166) | Ampersand ("&") key.                                                                                                       |
| `DOM_VK_UNDERSCORE`          | 0xA7 (167) | Underscore ("\_") key.                                                                                                     |
| `DOM_VK_OPEN_PAREN`          | 0xA8 (168) | Open parenthesis ("(") key.                                                                                                |
| `DOM_VK_CLOSE_PAREN`         | 0xA9 (169) | Close parenthesis (")") key.                                                                                               |
| `DOM_VK_ASTERISK`            | 0xAA (170) | Asterisk ("\*") key.                                                                                                       |
| `DOM_VK_PLUS`                | 0xAB (171) | Plus ("+") key.                                                                                                            |
| `DOM_VK_PIPE`                | 0xAC (172) | Pipe ("\|") key.                                                                                                           |
| `DOM_VK_HYPHEN_MINUS`        | 0xAD (173) | Hyphen-US/docs/Minus ("-") key.                                                                                            |
| `DOM_VK_OPEN_CURLY_BRACKET`  | 0xAE (174) | Open curly bracket ("{") key.                                                                                              |
| `DOM_VK_CLOSE_CURLY_BRACKET` | 0xAF (175) | Close curly bracket ("}") key.                                                                                             |
| `DOM_VK_TILDE`               | 0xB0 (176) | Tilde ("\~") key.                                                                                                          |
| `DOM_VK_VOLUME_MUTE`         | 0xB5 (181) | Audio mute key.                                                                                                            |
| `DOM_VK_VOLUME_DOWN`         | 0xB6 (182) | Audio volume down key                                                                                                      |
| `DOM_VK_VOLUME_UP`           | 0xB7 (183) | Audio volume up key                                                                                                        |
| `DOM_VK_COMMA`               | 0xBC (188) | Comma (",") key.                                                                                                           |
| `DOM_VK_PERIOD`              | 0xBE (190) | Period (".") key.                                                                                                          |
| `DOM_VK_SLASH`               | 0xBF (191) | Slash ("/") key.                                                                                                           |
| `DOM_VK_BACK_QUOTE`          | 0xC0 (192) | Back tick ("\`") key.                                                                                                      |
| `DOM_VK_OPEN_BRACKET`        | 0xDB (219) | Open square bracket ("\[") key.                                                                                            |
| `DOM_VK_BACK_SLASH`          | 0xDC (220) | Back slash ("\\") key.                                                                                                     |
| `DOM_VK_CLOSE_BRACKET`       | 0xDD (221) | Close square bracket ("]") key.                                                                                            |
| `DOM_VK_QUOTE`               | 0xDE (222) | Quote (''') key.                                                                                                           |
| `DOM_VK_META`                | 0xE0 (224) | Meta key on Linux, Command key on Mac.                                                                                     |
| `DOM_VK_ALTGR`               | 0xE1 (225) | AltGr key (Level 3 Shift key or Level 5 Shift key) on Linux.                                                               |
| `DOM_VK_WIN_ICO_HELP`        | 0xE3 (227) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This is (was?) used for Olivetti ICO keyboard.            |
| `DOM_VK_WIN_ICO_00`          | 0xE4 (228) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This is (was?) used for Olivetti ICO keyboard.            |
| `DOM_VK_WIN_ICO_CLEAR`       | 0xE6 (230) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This is (was?) used for Olivetti ICO keyboard.            |
| `DOM_VK_WIN_OEM_RESET`       | 0xE9 (233) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_WIN_OEM_JUMP`        | 0xEA (234) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_WIN_OEM_PA1`         | 0xEB (235) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_WIN_OEM_PA2`         | 0xEC (236) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_WIN_OEM_PA3`         | 0xED (237) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_WIN_OEM_WSCTRL`      | 0xEE (238) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_WIN_OEM_CUSEL`       | 0xEF (239) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_WIN_OEM_ATTN`        | 0xF0 (240) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_WIN_OEM_FINISH`      | 0xF1 (241) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_WIN_OEM_COPY`        | 0xF2 (242) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_WIN_OEM_AUTO`        | 0xF3 (243) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_WIN_OEM_ENLW`        | 0xF4 (244) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_WIN_OEM_BACKTAB`     | 0xF5 (245) | An [OEM specific key on Windows](#OEM_specific_keys_on_Windows). This was used for Nokia/Ericsson's device.                |
| `DOM_VK_ATTN`                | 0xF6 (246) | Attn (Attention) key of IBM midrange computers, e.g., AS/400.                                                              |
| `DOM_VK_CRSEL`               | 0xF7 (247) | CrSel (Cursor Selection) key of IBM 3270 keyboard layout.                                                                  |
| `DOM_VK_EXSEL`               | 0xF8 (248) | ExSel (Extend Selection) key of IBM 3270 keyboard layout.                                                                  |
| `DOM_VK_EREOF`               | 0xF9 (249) | Erase EOF key of IBM 3270 keyboard layout.                                                                                 |
| `DOM_VK_PLAY`                | 0xFA (250) | Play key of IBM 3270 keyboard layout.                                                                                      |
| `DOM_VK_ZOOM`                | 0xFB (251) | Zoom key.                                                                                                                  |
| `DOM_VK_PA1`                 | 0xFD (253) | PA1 key of IBM 3270 keyboard layout.                                                                                       |
| `DOM_VK_WIN_OEM_CLEAR`       | 0xFE (254) | Clear key, but we're not sure the meaning difference from `DOM_VK_CLEAR`.                                                  |

### Windows 上的 OEM 特定密钥

在 Windows 上，虚拟密钥代码的某些值是为特定于 OEM 的密钥定义（保留）的。它们可用于非标准键盘上的特殊键。换句话说，一些值被两个或多个供应商（或硬件）用于不同的含义。

从 gecko 21（并且早于 15）开始，仅在 Windows 上的 keycode 属性上提供 OEM 特定的键值。因此，它们对于通常的 Web 应用程序不有用。它们仅对内部网应用程序或类似情况有用。

查看 MSDN 上的"[Manufacturer-specific Virtual-Key Codes (Windows CE 5.0)](http://msdn.microsoft.com/en-us/library/aa452679.aspx)"了解更多
