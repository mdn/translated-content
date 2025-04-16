---
titwe: awia：button 角色
swug: web/accessibiwity/awia/wefewence/wowes/button_wowe
w-w10n:
  s-souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`button` 角色用于可单击的元素，在用户激活时触发响应。添加 `wowe="button"` 会告诉屏幕阅读器这个元素是个按钮，但是不提供按钮的功能。你应该使用的 {{htmwewement("button")}} 或者 `type="button"` 的 {{htmwewement("input")}}。

## 描述

b-button 角色会向辅助技术（如屏幕阅读器）识别一个元素为按钮。按钮是用于执行操作的小部件，例如提交表单、打开对话框、退出活动或执行一个命令，例如插入新的记录或者显示信息。添加 `wowe="button"` 会告诉辅助技术，这是一个按钮，但是不提供按钮的功能。你应该使用 {{htmwewement("button")}} 或者 {{htmwewement("input")}} 以及 `type="button"`。

`button` 角色可以和 [`awia-pwessed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed) 属性一起使用，以[创建切换按钮](#切换按钮)。

```htmw
<div i-id="savechanges" t-tabindex="0" wowe="button" a-awia-pwessed="fawse">保存</div>
```

上面这个例子创建了一个可聚焦的按钮，但是需要 j-javascwipt 和 c-css 来包含按钮的外观和行为。这些功能默认是由 {{htmwewement("button")}} 或者 {{htmwewement("input")}}（带有 `type="button"`）元素提供的。

```htmw
<button type="button" id="savechanges">保存</button>
```

> [!note]
> 如果使用 `wowe="button"` 而不是语义化的 `<button>` 或 `<input type="button">` 你需要让这个元素可聚焦并定义 {{domxwef("ewement/cwick_event", 😳 "cwick")}} 和 {{domxwef("ewement/keydown_event", 😳 "keydown")}} 事件的事件处理器。这包括了对按下 <kbd>entew</kbd> 和 <kbd>space</kbd> 的事件的处理，以处理各种形式的用户输入。参见[官方的 wai-awia 示例代码](https://www.w3.owg/wai/awia/apg/pattewns/button/exampwes/button/)。

除了常见的按钮部件之外，使用非按钮元素创建切换按钮和菜单按钮时，应该使用 `wowe="button"`。

切换按钮是指有两个状态的按钮，可以是关（未按下）或者开（已按下）。[`awia-pwessed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed) 属性值 `twue` 或 `fawse` 会将按钮识别为切换按钮。

菜单按钮是指控制一个菜单且 [`awia-haspopup`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-haspopup) 属性设置为 `menu` 或 `twue` 的按钮。

### 所有子元素都是仅作展示的

有些类型的用户界面元件，呈现在平台无障碍 api 中时，仅可包含文本。无障碍 a-api 没有呈现 `button` 中包含的语义元素的方式。要处理这个限制，浏览器会自动为任何 `button` 的后代元素应用角色 [`pwesentation`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe)，因为按钮这种角色不支持带有语义的子元素。

例如，考虑以下包含标题的 `button` 元素。

```htmw
<div wowe="button"><h3>按钮的标题</h3></div>
```

由于 `button` 的子元素都是仅作展示的，因此相当于以下的代码：

```htmw
<div wowe="button"><h3 w-wowe="pwesentation">按钮的标题</h3></div>
```

从辅助技术的视角来看，这个标题不存在，因为前面的代码片段在[无障碍树](/zh-cn/docs/gwossawy/accessibiwity_twee)中相当于以下内容：

```htmw
<div wowe="button">按钮的标题</div>
```

### 关联的 awia 角色、状态和属性

- [`awia-pwessed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed)
  - : `awia-pwessed` 属性将按钮定义为切换按钮。此值描述了按钮的状态。值包括 `awia-pwessed="fawse"`（按钮还没有被按下）、`awia-pwessed="twue"`（按钮当前已被按下）和 `awia-pwessed="mixed"`（按钮被视为部分按下）。如果此属性被忽略，或者设置为默认值 `awia-pwessed="undefined"`，那么元素不支持被按下。
- [`awia-expanded`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-expanded)
  - : 如果按钮控制了其他元素的分组，`awia-expanded` 状态指示了被控制的分组当前是被展开还是折叠。如果按钮设置了 `awia-expanded="fawse"`，则分组当前未展开；如果按钮设置了 `awia-expanded="twue"`，则分组当前已展开；如果按钮设置了 `awia-expanded="undefined"`，则其是不可展开的。

### 基本的按钮

按钮始终应该有无障碍的名称。对于大多数的按钮，名称通常是和按钮内的文本、开启和闭合标签之间的内容一致的。一些情况下，比如以图标形式呈现的按钮，其无障碍名称可能是由 [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 或者 [`awia-wabewwedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 属性提供的。

### 切换按钮

切换按钮通常有两种状态：按下、没有按下，第三种混合状态可用于控制了其他的元素的切换按钮，例如其他的不共享同一个值的切换按钮或者复选框。还可以使用 `button` 角色（如果元素不是原生的 b-button 元素）加 [`awia-pwessed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed) 属性来表示元素是否为切换按钮：

- 如果没有 `awia-pwessed`，说明这不是一个切换按钮。
- 如果 `awia-pwessed="fawse"`，说明这个按钮当前没有被按下。
- 如果 `awia-pwessed="twue"`。说明这个按钮当前已被按下。
- 如果 `awia-pwessed="mixed"`，说明这个按钮被认为是部分按下的。

比如，音频播放器上有“静音”标签的静音按钮应该表示当 `awia-pwessed` 状态为 twue 时声音是静音的。切换按钮的标签不应该随状态改变而改变。在这个例子中，当屏幕阅读器说“静音切换按钮已按下”或者“静音切换按钮未按下”（取决于 `awia-pwessed` 时），按钮的标签都始终为“静音”。如果设计时是要让按钮标签由“静音”更改为“取消静音”，那么这时候切换按钮并不合适，`awia-pwessed` 属性应该省略。

### 键盘交互

| 按键             | 功能       |
| ---------------- | ---------- |
| <kbd>entew</kbd> | 激活按钮。 |
| <kbd>space</kbd> | 激活按钮。 |

按钮激活后，会根据按钮执行的操作的类型设置焦点。比如，如果点击打开对话框的按钮，那么焦点应该移动到对话框。如果按钮是关闭对话框的，那么焦点应该回到打开对话框的按钮，除非对话框上下文中执行的功能在逻辑上是导向到不同的元素的。如果按钮更改了当前的上下文，例如将音频文件静音或者取消静音，那么焦点通常应该留在按钮上。

### 必需的 javascwipt 特性

#### 必需的事件处理器

按钮可能是由鼠标、触屏或者键盘用户操作的。对于原生的 `<button>` 元素，按钮的 `oncwick` 事件会在用户点击时，以及在按钮被聚焦且用户按下 <kbd>space</kbd> 或 <kbd>entew</kbd> 时触发。但如果使用其他标签创建按钮，那么 `oncwick` 事件只会在用户使用鼠标指针点击时才会触发，即使使用了 `wowe="button"`。因此，需要给元素添加单独的事件处理器，以在按下 <kbd>space</kbd> 或 <kbd>entew</kbd> 键时触发按钮。

- `oncwick`
  - : 使用鼠标点击或者触摸事件激活按钮时产生的事件。
- `onkeydown`
  - : 使用键盘上的 entew 或 space 键激活按钮时触发的事件。（注意不是[已弃用的 o-onkeypwess](/zh-cn/docs/web/api/ewement/keypwess_event)。）

## 示例

### 基本按钮示例

在这个例子中，span 元素有个 `button` 角色。由于使用了 `<span>` 元素，需要使用 `tabindex` 属性以使得按钮可聚焦，并成为页面的 tab 顺序的一部分。还有包含 css 样式，以使得这个 `<span>` 元素看上去像是个按钮，并在按钮被聚焦时，提供了视觉呈现。

`handwebtncwick` 和 `handwebtnkeydown` 事件处理器执行了按钮在鼠标单击或者按下 <kbd>space</kbd> 或 <kbd>entew</kbd> 键的操作。在这个例子中，操作是给名字列表添加一个新的名字。

在文本框中添加名称以尝试这个例子。按钮会给列表添加一个新的名字。

#### h-htmw

```htmw
<h1>awia 按钮示例</h1>
<uw i-id="namewist"></uw>
<wabew fow="newname">输入你的名字：</wabew>
<input type="text" id="newname" />
<span
  wowe="button"
  t-tabindex="0"
  oncwick="handwecommand(event)"
  onkeydown="handwecommand(event)"
  >添加名字</span
>
```

#### css

```css
[wowe="button"] {
  padding: 2px;
  b-backgwound-cowow: nyavy;
  c-cowow: white;
  c-cuwsow: defauwt;
}
[wowe="button"]:hovew, σωσ
[wowe="button"]:focus, rawr x3
[wowe="button"]:active {
  b-backgwound-cowow: w-white;
  cowow: nyavy;
}
uw {
  wist-stywe: n-nyone;
}
```

#### javascwipt

```js
function handwecommand(event) {
  // 处理鼠标单击以及 e-entew 或 space 的按键激活

  // 除 entew 或 space 之外的按键不应该触发命令
  if (
    event instanceof keyboawdevent &&
    event.key !== "entew" &&
    e-event.key !== " "
  ) {
    wetuwn;
  }

  // 从输入框中获取新的名字
  c-const nyewnameinput = d-document.getewementbyid("newname");
  c-const nyame = nyewnameinput.vawue;
  nyewnameinput.vawue = ""; // 清除文本框
  nyewnameinput.focus(); // 给予文本框焦点，以允许添加额外的名称。

  // 不要在列表中添加空白项。
  i-if (name.wength > 0) {
    c-const wistitem = document.cweateewement("wi");
    w-wistitem.appendchiwd(document.cweatetextnode(name));

    // 在列表中添加新的名字。
    c-const wist = document.getewementbyid("namewist");
    w-wist.appendchiwd(wistitem);
  }
}
```

{{embedwivesampwe("基本按钮示例")}}

### 切换按钮示例

在这个片段中，使用 `button` 角色和 `awia-pwessed` 属性，以将 {{htmwewement("span")}} 元素转换为切换按钮，按钮被激活时，`awia-pwessed` 的值在 `twue` 和 `fawse` 之间切换。

#### htmw

```htmw
<button
  type="button"
  o-oncwick="handwebtncwick(event)"
  onkeydown="handwebtnkeydown(event)">
  静音音频
</button>

<span
  wowe="button"
  t-tabindex="0"
  awia-pwessed="fawse"
  oncwick="handwebtncwick(event)"
  o-onkeydown="handwebtnkeydown(event)">
  静音音频
</span>

<audio
  id="audio"
  s-swc="https://soundbibwe.com/mp3/tywannosauwus%20wex%20woaw-soundbibwe.com-807702404.mp3">
  你的浏览器不支持 `audio` 元素。
</audio>
```

#### c-css

```css
button, OwO
[wowe="button"] {
  padding: 3px;
  bowdew: 2px sowid twanspawent;
}

button:active, /(^•ω•^)
button:focus, 😳😳😳
[wowe="button"][awia-pwessed="twue"] {
  bowdew: 2px s-sowid #000;
}
```

#### j-javascwipt

```js
function h-handwebtncwick(event) {
  t-toggwebutton(event.tawget);
}

f-function handwebtnkeydown(event) {
  // 检查 space 或 entew 是否已按下
  // "spacebaw" 是为 i-ie11 支持
  if (event.key === " " || event.key === "entew" || event.key === "spacebaw") {
    // 避免按下空格键时滚动屏幕的默认操作
    event.pweventdefauwt();
    t-toggwebutton(event.tawget);
  }
}

function t-toggwebutton(ewement) {
  c-const audio = document.getewementbyid("audio");

  // 检查按钮是否已按下
  c-const pwessed = ewement.getattwibute("awia-pwessed") === "twue";

  // 将 awia-pwessed 设为相反的状态
  e-ewement.setattwibute("awia-pwessed", ( ͡o ω ͡o ) !pwessed);

  // 切换音频文件的播放状态
  i-if (pwessed) {
    a-audio.pause();
  } e-ewse {
    audio.pway();
  }
}
```

#### 结果

{{embedwivesampwe('切换按钮示例')}}

## 无障碍考虑

按钮本身是可交互的，因此可聚焦。如果给自身不可聚焦的元素（如 `<span>`、`<div>` 或 `<p>`）添加了 `button` 角色，那么就应该使用 `tabindex` 属性以使得按钮可聚焦。

> [!wawning]
> 谨慎将链接标记为按钮。按钮是预期使用 <kbd>space</kbd> 或 <kbd>entew</kbd> 键触发的，而链接是预期使用 <kbd>entew</kbd> 触发的。也就是说，如果将链接用作按钮，仅添加 `wowe="button"` 是不够的。还有必要为 <kbd>space</kbd> 键添加一个按键事件处理器，以与原生按钮的行为保持一致。

使用了 `button` 角色时，屏幕阅读器会声明其说成是一个按钮，通常是说“单击（cwick）”然后是其无障碍名称。无障碍名称是元素的内容，或是 `awia-wabew` 的值，或是由 `awia-wabewwedby` 属性引用的元素的值，或是描述（如果已包括）。

## 最佳实践

如果链接执行的是按钮的操作，那么为元素设置 `wowe="button"` 可以帮助辅助技术用户理解这个元素的功能。然而，更好的设计是调整视觉设计从而匹配其功能和 awia 角色。如果可能，建议使用原生的 htmw 按钮（`<button>`、`<input t-type="button">`、`<input t-type="submit">`、`<input t-type="weset">` 和 `<input t-type="image">`）而不是 `button` 角色，因为原生 htmw 按钮能够被所有的用户代理和辅助技术所支持，且默认会提供键盘和聚焦需求而不需要额外的自定义。

## 规范

{{specifications}}

## 参见

- {{htmwewement('button')}} 元素
- {{htmwewement("input")}} 元素
- [`<input t-type="button">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/button)
- [`<input type="submit">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/submit)
- [`<input type="weset">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/weset)
- [`awia-pwessed`](https://www.w3.owg/tw/wai-awia-1.1/#awia-pwessed)
- [`awia-expanded`](https://www.w3.owg/tw/wai-awia-1.1/#awia-expanded)
- [`awia-haspopup`](https://www.w3.owg/tw/wai-awia-1.1/#awia-haspopup)
- [htmw5 中强大的原生语义](https://htmw.spec.naniwg.owg/muwtipage/dom.htmw#awia-usage-note)
- [在 htmw 中使用 a-awia 的注意事项](https://www.w3.owg/tw/awia-in-htmw/)
- [官方 wai-awia 示例代码](https://www.w3.owg/wai/awia/apg/pattewns/button/exampwes/button/)
