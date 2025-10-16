---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("UI Events")}}

**`KeyboardEvent`** 对象描述了用户与键盘的交互。每个事件都描述了用户与一个按键（或一个按键和修饰键的组合）的单个交互；事件类型（{{domxref("Element/keydown_event", "keydown")}}、{{domxref("Element/keypress_event", "keypress")}} 和 {{domxref("Element/keyup_event", "keyup")}}）用于标识不同的键盘活动类型。

> [!NOTE]
> `KeyboardEvent` 只在低级别提示用户与键盘按键进行了哪些交互，并不提供交互的场景含义。当你需要处理文本输入的时候，使用 {{domxref("Element/input_event", "input")}} 事件代替。用户使用其他方式输入文本时，如使用平板电脑的手写系统或绘图板，键盘事件可能不会触发。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
  - : 创建一个新的 `KeyboardEvent` 对象。

## 常量

`KeyboardEvent` 接口定义了以下常量。

### 键盘定位

下述常量用于标识产生按键事件的键盘位置，以类似 `KeyboardEvent.DOM_KEY_LOCATION_STANDARD` 的形式来访问。

<table class="standard-table">
  <caption>
    键盘位置标识符
  </caption>
  <thead>
    <tr>
      <th scope="col">常量</th>
      <th scope="col">值</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>DOM_KEY_LOCATION_STANDARD</code></td>
      <td>0x00</td>
      <td>
        <p>
          事件所描述的按键不在键盘的某个特定区域；不在数字小键盘上（除非是 NumLock 键），对于键盘左右两侧重复的按键，无论出于何种原因，该按键都不会与该位置相关联。
        </p>
        <p>
          例如，标准 PC 101 US 键盘上的字母数字键、NumLock 键和空格键。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_LEFT</code></td>
      <td>0x01</td>
      <td>
        <p>
          该键可能存在于键盘上的多个位置，在本例中位于键盘左侧。
        </p>
        <p>
          例如左 Control 键、Macintosh 键盘上的左 Command 键或左 Shift 键。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_RIGHT</code></td>
      <td>0x02</td>
      <td>
        <p>
          该键可能存在于键盘上的多个位置，在本例中位于键盘右侧。
        </p>
        <p>
          例如右 Shift 键和右 Alt 键（Mac 键盘上为 Option 键）。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>DOM_KEY_LOCATION_NUMPAD</code></td>
      <td>0x03</td>
      <td>
        <p>
          该键位于数字键盘上，或者是一个与数字键盘相关联的虚拟键（如果该键可能来自不止一个地方）。NumLock 键不属于这一组，它始终使用 <code>DOM_KEY_LOCATION_STANDARD</code> 位置编码。
        </p>
        <p>
          例如数字小键盘上的数字、小键盘上的回车键和小键盘上的小数点。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 实例属性

_此接口从其父类 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 中继承属性。_

- {{domxref("KeyboardEvent.altKey")}} {{Readonlyinline}}
  - : 返回一个布尔值，如果按键事件发生时 <kbd>Alt</kbd>（macOS 中为 <kbd>Option</kbd> 或 <kbd>⌥</kbd>）键处于活动状态，则该值为 `true`。

- {{domxref("KeyboardEvent.code")}} {{Readonlyinline}}
  - : 返回一个字符串，其中包含事件所代表的物理按键的代码值。

    > [!WARNING]
    > 这个属性会忽略用户的键盘布局，所以如果用户在 QWERTY 布局的键盘上按下“Y”位置（第一行字母按键的中间）的按键时，这个属性会返回“KeyY”，即使用户使用 QWERTZ 布局的键盘（此时用户输入的就是“Z”，其他属性也会提示“Z”）或 Dvorak 键盘（此时用户输入的就是“F”）也是如此。如果要向用户显示正确的按键，可以使用 {{domxref("Keyboard.getLayoutMap()")}}。

- {{domxref("KeyboardEvent.ctrlKey")}} {{Readonlyinline}}
  - : 返回一个布尔值，如果按键事件发生时 <kbd>Ctrl</kbd> 键被按下，则该值为 `true` 。

- {{domxref("KeyboardEvent.isComposing")}} {{Readonlyinline}}
  - : 返回一个布尔值，如果事件在 `compositionstart` 之后和 `compositionend` 之前触发，则该值为 `true`。
- {{domxref("KeyboardEvent.key")}} {{Readonlyinline}}
  - : 返回一个字符串，表示事件所代表的键的键值。
- {{domxref("KeyboardEvent.location")}} {{Readonlyinline}}
  - : 返回代表键盘或其他输入设备上按键位置的数字。上面的[键盘定位](#键盘定位)中列出了标识位置的常量。
- {{domxref("KeyboardEvent.metaKey")}} {{Readonlyinline}}
  - : 返回一个布尔值，如果键事件发生时 <kbd>Meta</kbd>（在 Mac 键盘上为 <kbd>⌘ Command</kbd> ；在 Windows 键盘上为 Windows 键（<kbd>⊞</kbd>））键处于活动状态，则该值为 `true`。

- {{domxref("KeyboardEvent.repeat")}} {{Readonlyinline}}
  - : 返回一个布尔值，如果按键被按住，会自动重复，则该值为 `true`。
- {{domxref("KeyboardEvent.shiftKey")}} {{Readonlyinline}}
  - : 返回一个布尔值，如果按键事件发生时 <kbd>Shift</kbd> 键处于活动状态，则该值为 `true`。

### 过时属性

- {{domxref("KeyboardEvent.charCode")}} {{Deprecated_inline}} {{ReadOnlyInline}}
  - : 返回一个数字，代表按键的 Unicode 引用编号；该属性仅用于 `keypress` 事件。如果键的 `char` 属性包含多个字符，则返回该属性中第一个字符的 Unicode 值。在 Firefox 26 中，这将返回可打印字符的代码。

- {{domxref("KeyboardEvent.keyCode")}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : 返回一个数字，该数字代表一个与系统和执行相关的数字代码，用于标识按下按键的未修改值。

- {{domxref("KeyboardEvent.keyIdentifier")}} {{Non-standard_inline}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : 此属性为非标准属性，已被弃用；改用 {{domxref("KeyboardEvent.key")}}。它属于旧版 DOM 第 3 版规范的事件。

## 实例方法

_此接口也从父类 {{domxref("UIEvent")}} 和 {{domxref("Event")}} 中继承方法。_

- {{domxref("KeyboardEvent.getModifierState()")}}
  - : 返回一个布尔值，表示事件创建时是否按下了 <kbd>Alt</kbd>、<kbd>Shift</kbd>、<kbd>Ctrl</kbd> 或 <kbd>Meta</kbd> 等修饰符键。

### 过时方法

- {{domxref("KeyboardEvent.initKeyboardEvent()")}} {{deprecated_inline}}
  - : 初始化一个 `KeyboardEvent` 对象。此方法已弃用，应该使用 {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} 构造函数。

## 事件

以下事件基于 `KeyboardEvent` 类型。在下面的列表中，每个事件都链接到该事件的 `Element` 处理器的文档，该处理器通常适用于所有接收者，包括 {{domxref("Element")}}、{{domxref("Document")}} 和 {{domxref("Window")}}。

- {{domxref("Element.keydown_event", "keydown")}}
  - : 一个键被按下。
- {{domxref("Element.keyup_event", "keyup")}}
  - : 一个键被释放。

### 过时事件

- {{domxref("Element.keypress_event", "keypress")}} {{Deprecated_Inline}}
  - : 通常在一个按键被按下时触发，并产生一个字符串值，这个事件高度依赖硬件且已过时，不应该使用它。

## 使用说明

键盘事件有三种类型：{{domxref("Element/keydown_event", "keydown")}}、{{domxref("Element/keypress_event", "keypress")}} 和 {{domxref("Element/keyup_event", "keyup")}}。对于大多数按键，Gecko 会像这样派发一系列按键事件：

1. 首次按下按键时，会发送 `keydown` 事件。
2. 如果按键不是修饰键，则发送 `keypress` 事件。
3. 当用户松开按键时，将发送 `keyup` 事件。

### 特殊情况

有些按键可以切换指示灯的状态；其中包括大写锁定（Caps Lock）、数字锁定（Num Lock）和滚动锁定（Scroll Lock）等按键。在 Windows 和 Linux 中，这些按键只派发 `keydown` 和 `keyup` 事件。

> [!NOTE]
> 在 Linux 上，Firefox 12 和更早版本也会为这些按键发送 `keypress` 事件。

不过，由于 macOS 事件模型的限制，大写锁定只能派发 `keydown` 事件。一些较旧的笔记本电脑型号（2007 年及以前的型号）支持数字锁定，但从那时起，即使在外置键盘上，macOS 也不支持数字锁定。在带有数字锁定键的旧款 MacBook 上，该键不会生成任何按键事件。如果连接了带有 F14 键的外置键盘，Gecko 确实支持滚动锁定键。在某些旧版本的 Firefox 中，该键会生成 `keypress` 事件；这种不一致的行为是 [Firefox bug 602812](https://bugzil.la/602812)。

### 处理自动重复

按下并按住一个键后，该键开始自动重复。这将导致一系列类似以下的事件发生：

1. `keydown`
2. `keypress`
3. `keydown`
4. `keypress`
5. <\<重复，直到用户释放按键>>
6. `keyup`

这就是 DOM 第 3 版规范所说的应该发生的情况。但也有一些注意事项，如下所述。

#### 在某些 GTK 环境（如 Ubuntu 9.4）中的自动重复行为

在某些基于 GTK 的环境中，自动重复按键会在自动重复按键期间自动派发一个本地按键事件，而 Gecko 无法区分一系列重复按键和自动重复按键。因此，在这些平台上，自动重复按键将产生以下事件序列：

1. `keydown`
2. `keypress`
3. `keyup`
4. `keydown`
5. `keypress`
6. `keyup`
7. <\<重复，直到用户释放按键>>
8. `keyup`

遗憾的是，在这些环境中，Web 内容无法区分自动重复按键和被重复按下的按键。

## 示例

```js
document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "Control") {
      // 如果只按下了 Control 键，不要警告
      return;
    }

    if (event.ctrlKey) {
      // 即使 event.key 不为“Control”（如按下了“a“键），
      // 在同时按下了 Ctrl 键的情况下，event.ctrlKey 也可能为 true。
      alert(`ctrlKey + ${keyName} 组合`);
    } else {
      alert(`按下了 ${keyName} 键`);
    }
  },
  false,
);

document.addEventListener(
  "keyup",
  (event) => {
    const keyName = event.key;

    // 当用户释放了 Ctrl 键时，该键不再为激活状态，
    // 故 event.ctrlKey 为 false。
    if (keyName === "Control") {
      alert("释放了 Control 键");
    }
  },
  false,
);
```

## 规范

{{Specifications}}

`KeyboardEvent` 接口规范经历了多个草案版本，首先是 DOM 事件第 2 版规范，由于未达成共识而被放弃，然后是 DOM 事件第 3 版规范。这导致了非标准初始化方法的实施，早期的 DOM 事件第 2 版，`KeyboardEvent.initKeyEvent()` 被 Gecko 浏览器采用，而早期的 DOM 事件第 3 版，{{domxref("KeyboardEvent.initKeyboardEvent()")}} 则被其他浏览器采用。这两个版本都已被构造函数的现代用法所取代：{{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}。

## 浏览器兼容性

{{Compat}}

### 兼容性说明

- 从 Firefox 65 开始，[非打印按键](/zh-CN/docs/Web/API/KeyboardEvent/keyCode#不可打印键（功能键）)不再触发 `keypress` 事件（[Firefox bug 968056](https://bugzil.la/968056)），除

  <kbd>Enter</kbd>

  键，以及

  <kbd>Shift</kbd>

  \+

  <kbd>Enter</kbd>

  和

  <kbd>Ctrl</kbd>

  \+

  <kbd>Enter</kbd>

  组合键（保留这些内容是为了实现跨浏览器兼容）。

## 参见

- {{domxref("KeyboardEvent.code")}}
- {{domxref("KeyboardEvent.key")}}
- {{domxref("KeyboardEvent.getModifierState()")}}
