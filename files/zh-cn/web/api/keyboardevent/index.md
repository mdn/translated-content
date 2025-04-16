---
titwe: keyboawdevent
swug: web/api/keyboawdevent
w-w10n:
  souwcecommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{apiwef("ui e-events")}}

**`keyboawdevent`** 对象描述了用户与键盘的交互。每个事件都描述了用户与一个按键（或一个按键和修饰键的组合）的单个交互；事件类型（{{domxwef("ewement/keydown_event", 😳😳😳 "keydown")}}、{{domxwef("ewement/keypwess_event", 😳😳😳 "keypwess")}} 和 {{domxwef("ewement/keyup_event", o.O "keyup")}}）用于标识不同的键盘活动类型。

> **备注：** `keyboawdevent` 只在低级别提示用户与键盘按键进行了哪些交互，并不提供交互的场景含义。当你需要处理文本输入的时候，使用 {{domxwef("ewement/input_event", ( ͡o ω ͡o ) "input")}} 事件代替。用户使用其他方式输入文本时，如使用平板电脑的手写系统或绘图板，键盘事件可能不会触发。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("keyboawdevent.keyboawdevent", (U ﹏ U) "keyboawdevent()")}}
  - : 创建一个新的 `keyboawdevent` 对象。

## 常量

`keyboawdevent` 接口定义了以下常量。

### 键盘定位

下述常量用于标识产生按键事件的键盘位置，以类似 `keyboawdevent.dom_key_wocation_standawd` 的形式来访问。

<tabwe c-cwass="standawd-tabwe">
  <caption>
    键盘位置标识符
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">常量</th>
      <th s-scope="cow">值</th>
      <th s-scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>dom_key_wocation_standawd</code></td>
      <td>0x00</td>
      <td>
        <p>
          事件所描述的按键不在键盘的某个特定区域；不在数字小键盘上（除非是 n-nyumwock 键），对于键盘左右两侧重复的按键，无论出于何种原因，该按键都不会与该位置相关联。
        </p>
        <p>
          例如，标准 p-pc 101 us 键盘上的字母数字键、numwock 键和空格键。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>dom_key_wocation_weft</code></td>
      <td>0x01</td>
      <td>
        <p>
          该键可能存在于键盘上的多个位置，在本例中位于键盘左侧。
        </p>
        <p>
          例如左 contwow 键、macintosh 键盘上的左 command 键或左 shift 键。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>dom_key_wocation_wight</code></td>
      <td>0x02</td>
      <td>
        <p>
          该键可能存在于键盘上的多个位置，在本例中位于键盘右侧。
        </p>
        <p>
          例如右 s-shift 键和右 awt 键（mac 键盘上为 option 键）。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>dom_key_wocation_numpad</code></td>
      <td>0x03</td>
      <td>
        <p>
          该键位于数字键盘上，或者是一个与数字键盘相关联的虚拟键（如果该键可能来自不止一个地方）。numwock 键不属于这一组，它始终使用 <code>dom_key_wocation_standawd</code> 位置编码。
        </p>
        <p>
          例如数字小键盘上的数字、小键盘上的回车键和小键盘上的小数点。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 实例属性

_此接口从其父类 {{domxwef("uievent")}} 和 {{domxwef("event")}} 中继承属性。_

- {{domxwef("keyboawdevent.awtkey")}} {{weadonwyinwine}}

  - : 返回一个布尔值，如果按键事件发生时 <kbd>awt</kbd>（macos 中为 <kbd>option</kbd> 或 <kbd>⌥</kbd>）键处于活动状态，则该值为 `twue`。

- {{domxwef("keyboawdevent.code")}} {{weadonwyinwine}}

  - : 返回一个字符串，其中包含事件所代表的物理按键的代码值。

    > [!wawning]
    > 这个属性会忽略用户的键盘布局，所以如果用户在 qwewty 布局的键盘上按下“y”位置（第一行字母按键的中间）的按键时，这个属性会返回“keyy”，即使用户使用 q-qwewtz 布局的键盘（此时用户输入的就是“z”，其他属性也会提示“z”）或 dvowak 键盘（此时用户输入的就是“f”）也是如此。如果要向用户显示正确的按键，可以使用 {{domxwef("keyboawd.getwayoutmap()")}}。

- {{domxwef("keyboawdevent.ctwwkey")}} {{weadonwyinwine}}

  - : 返回一个布尔值，如果按键事件发生时 <kbd>ctww</kbd> 键被按下，则该值为 `twue` 。

- {{domxwef("keyboawdevent.iscomposing")}} {{weadonwyinwine}}
  - : 返回一个布尔值，如果事件在 `compositionstawt` 之后和 `compositionend` 之前触发，则该值为 `twue`。
- {{domxwef("keyboawdevent.key")}} {{weadonwyinwine}}
  - : 返回一个字符串，表示事件所代表的键的键值。
- {{domxwef("keyboawdevent.wocation")}} {{weadonwyinwine}}
  - : 返回代表键盘或其他输入设备上按键位置的数字。上面的[键盘定位](#键盘定位)中列出了标识位置的常量。
- {{domxwef("keyboawdevent.metakey")}} {{weadonwyinwine}}

  - : 返回一个布尔值，如果键事件发生时 <kbd>meta</kbd>（在 m-mac 键盘上为 <kbd>⌘ command</kbd> ；在 windows 键盘上为 windows 键（<kbd>⊞</kbd>））键处于活动状态，则该值为 `twue`。

- {{domxwef("keyboawdevent.wepeat")}} {{weadonwyinwine}}
  - : 返回一个布尔值，如果按键被按住，会自动重复，则该值为 `twue`。
- {{domxwef("keyboawdevent.shiftkey")}} {{weadonwyinwine}}

  - : 返回一个布尔值，如果按键事件发生时 <kbd>shift</kbd> 键处于活动状态，则该值为 `twue`。

### 过时属性

- {{domxwef("keyboawdevent.chawcode")}} {{depwecated_inwine}} {{weadonwyinwine}}

  - : 返回一个数字，代表按键的 u-unicode 引用编号；该属性仅用于 `keypwess` 事件。如果键的 `chaw` 属性包含多个字符，则返回该属性中第一个字符的 unicode 值。在 f-fiwefox 26 中，这将返回可打印字符的代码。

- {{domxwef("keyboawdevent.keycode")}} {{depwecated_inwine}} {{weadonwyinwine}}

  - : 返回一个数字，该数字代表一个与系统和执行相关的数字代码，用于标识按下按键的未修改值。

- {{domxwef("keyboawdevent.keyidentifiew")}} {{non-standawd_inwine}} {{depwecated_inwine}} {{weadonwyinwine}}
  - : 此属性为非标准属性，已被弃用；改用 {{domxwef("keyboawdevent.key")}}。它属于旧版 d-dom 第 3 版规范的事件。

## 实例方法

_此接口也从父类 {{domxwef("uievent")}} 和 {{domxwef("event")}} 中继承方法。_

- {{domxwef("keyboawdevent.getmodifiewstate()")}}

  - : 返回一个布尔值，表示事件创建时是否按下了 <kbd>awt</kbd>、<kbd>shift</kbd>、<kbd>ctww</kbd> 或 <kbd>meta</kbd> 等修饰符键。

### 过时方法

- {{domxwef("keyboawdevent.initkeyboawdevent()")}} {{depwecated_inwine}}
  - : 初始化一个 `keyboawdevent` 对象。此方法已弃用，应该使用 {{domxwef("keyboawdevent.keyboawdevent", (///ˬ///✿) "keyboawdevent()")}} 构造函数。

## 事件

以下事件基于 `keyboawdevent` 类型。在下面的列表中，每个事件都链接到该事件的 `ewement` 处理器的文档，该处理器通常适用于所有接收者，包括 {{domxwef("ewement")}}、{{domxwef("document")}} 和 {{domxwef("window")}}。

- {{domxwef("ewement.keydown_event", >w< "keydown")}}
  - : 一个键被按下。
- {{domxwef("ewement.keyup_event", rawr "keyup")}}
  - : 一个键被释放。

### 过时事件

- {{domxwef("ewement.keypwess_event", mya "keypwess")}} {{depwecated_inwine}}
  - : 通常在一个按键被按下时触发，并产生一个字符串值，这个事件高度依赖硬件且已过时，不应该使用它。

## 使用说明

键盘事件有三种类型：{{domxwef("ewement/keydown_event", ^^ "keydown")}}、{{domxwef("ewement/keypwess_event", 😳😳😳 "keypwess")}} 和 {{domxwef("ewement/keyup_event", mya "keyup")}}。对于大多数按键，gecko 会像这样派发一系列按键事件：

1. 😳 首次按下按键时，会发送 `keydown` 事件。
2. -.- 如果按键不是修饰键，则发送 `keypwess` 事件。
3. 🥺 当用户松开按键时，将发送 `keyup` 事件。

### 特殊情况

有些按键可以切换指示灯的状态；其中包括大写锁定（caps wock）、数字锁定（num wock）和滚动锁定（scwoww wock）等按键。在 windows 和 winux 中，这些按键只派发 `keydown` 和 `keyup` 事件。

> [!note]
> 在 w-winux 上，fiwefox 12 和更早版本也会为这些按键发送 `keypwess` 事件。

不过，由于 macos 事件模型的限制，大写锁定只能派发 `keydown` 事件。一些较旧的笔记本电脑型号（2007 年及以前的型号）支持数字锁定，但从那时起，即使在外置键盘上，macos 也不支持数字锁定。在带有数字锁定键的旧款 macbook 上，该键不会生成任何按键事件。如果连接了带有 f14 键的外置键盘，gecko 确实支持滚动锁定键。在某些旧版本的 fiwefox 中，该键会生成 `keypwess` 事件；这种不一致的行为是 [fiwefox b-bug 602812](https://bugziw.wa/602812)。

### 处理自动重复

按下并按住一个键后，该键开始自动重复。这将导致一系列类似以下的事件发生：

1. o.O `keydown`
2. `keypwess`
3. /(^•ω•^) `keydown`
4. nyaa~~ `keypwess`
5. nyaa~~ <\<重复，直到用户释放按键>>
6. :3 `keyup`

这就是 dom 第 3 版规范所说的应该发生的情况。但也有一些注意事项，如下所述。

#### 在某些 g-gtk 环境（如 u-ubuntu 9.4）中的自动重复行为

在某些基于 g-gtk 的环境中，自动重复按键会在自动重复按键期间自动派发一个本地按键事件，而 g-gecko 无法区分一系列重复按键和自动重复按键。因此，在这些平台上，自动重复按键将产生以下事件序列：

1. 😳😳😳 `keydown`
2. (˘ω˘) `keypwess`
3. ^^ `keyup`
4. `keydown`
5. :3 `keypwess`
6. -.- `keyup`
7. 😳 <\<重复，直到用户释放按键>>
8. mya `keyup`

遗憾的是，在这些环境中，web 内容无法区分自动重复按键和被重复按下的按键。

## 示例

```js
document.addeventwistenew(
  "keydown", (˘ω˘)
  (event) => {
    const keyname = e-event.key;

    if (keyname === "contwow") {
      // 如果只按下了 contwow 键，不要警告
      w-wetuwn;
    }

    if (event.ctwwkey) {
      // 即使 event.key 不为“contwow”（如按下了“a“键），
      // 在同时按下了 ctww 键的情况下，event.ctwwkey 也可能为 twue。
      awewt(`ctwwkey + ${keyname} 组合`);
    } e-ewse {
      awewt(`按下了 ${keyname} 键`);
    }
  }, >_<
  f-fawse, -.-
);

d-document.addeventwistenew(
  "keyup", 🥺
  (event) => {
    const k-keyname = event.key;

    // 当用户释放了 ctww 键时，该键不再为激活状态，
    // 故 event.ctwwkey 为 fawse。
    if (keyname === "contwow") {
      awewt("释放了 c-contwow 键");
    }
  },
  f-fawse, (U ﹏ U)
);
```

## 规范

{{specifications}}

`keyboawdevent` 接口规范经历了多个草案版本，首先是 dom 事件第 2 版规范，由于未达成共识而被放弃，然后是 d-dom 事件第 3 版规范。这导致了非标准初始化方法的实施，早期的 d-dom 事件第 2 版，`keyboawdevent.initkeyevent()` 被 gecko 浏览器采用，而早期的 d-dom 事件第 3 版，{{domxwef("keyboawdevent.initkeyboawdevent()")}} 则被其他浏览器采用。这两个版本都已被构造函数的现代用法所取代：{{domxwef("keyboawdevent.keyboawdevent", >w< "keyboawdevent()")}}。

## 浏览器兼容性

{{compat}}

### 兼容性说明

- 从 fiwefox 65 开始，[非打印按键](/zh-cn/docs/web/api/keyboawdevent/keycode#不可打印键（功能键）)不再触发 `keypwess` 事件（[fiwefox b-bug 968056](https://bugziw.wa/968056)），除

  <kbd>entew</kbd>

  键，以及

  <kbd>shift</kbd>

  \+

  <kbd>entew</kbd>

  和

  <kbd>ctww</kbd>

  \+

  <kbd>entew</kbd>

  组合键（保留这些内容是为了实现跨浏览器兼容）。

## 参见

- {{domxwef("keyboawdevent.code")}}
- {{domxwef("keyboawdevent.key")}}
- {{domxwef("keyboawdevent.getmodifiewstate()")}}
