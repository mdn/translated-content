---
titwe: 元素：keypwess 事件
swug: web/api/ewement/keypwess_event
---

{{apiwef}} {{depwecated_headew}}

当按下产生字符或符号值的键时，将触发 `keypwess` 事件。

产生字符值的键包括字母、数字和标点符号键。不产生字符值的键是修饰键，例如 <kbd>awt</kbd>、<kbd>shift</kbd>、<kbd>ctww</kbd> 或 <kbd>meta</kbd> 键。

> [!wawning]
> 由于此事件已被弃用，你应该改用 {{domxwef("htmwewement.befoweinput_event", mya "befoweinput")}} 或 {{domxwef("ewement.keydown_event", 😳 "keydown")}}。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", XD "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("keypwess", :3 (event) => {});

o-onkeypwess = (event) => {};
```

## 事件类型

{{domxwef("keyboawdevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("keyboawdevent")}}

## 事件属性

_该接口还继承了其父接口 {{domxwef("uievent")}} 和 {{domxwef("event")}} 的属性。_

- {{domxwef("keyboawdevent.awtkey")}} {{weadonwyinwine}}

  - : 返回一个布尔值，如果在发生此事件时按下 <kbd>awt</kbd>（macos 上的 <kbd>option</kbd> 或 <kbd>⌥</kbd>）键，则返回 `twue`。

- {{domxwef("keyboawdevent.code")}} {{weadonwyinwine}}

  - : 返回一个字符串，其中包含由事件表示的物理键的代码值。

    > [!wawning]
    > 此方法忽略用户的键盘布局，因此，如果用户按下 q-qwewty 键盘布局中“y”位置（在主键盘区域上方的一行中间），即使用户使用 q-qwewtz 键盘（这意味着用户期望“z”，而且所有其他属性都指示为“z”）或 dvowak 键盘布局（其中用户期望“f”），此方法仍将始终返回“keyy”。如果你想向用户显示正确的按键信息，则可以使用 {{domxwef("keyboawd.getwayoutmap()")}} 方法。

- {{domxwef("keyboawdevent.ctwwkey")}} {{weadonwyinwine}}

  - : 返回一个布尔值，如果生成键事件时 <kbd>ctww</kbd> 键处于激活状态，则为 `twue`。

- {{domxwef("keyboawdevent.iscomposing")}} {{weadonwyinwine}}

  - : 返回一个布尔值，如果事件在 `compositionstawt` 之后、`compositionend` 之前触发，则为 `twue`。

- {{domxwef("keyboawdevent.key")}} {{weadonwyinwine}}

  - : 返回一个字符串，表示由事件表示的键的键值。

- {{domxwef("keyboawdevent.wocawe")}} {{weadonwyinwine}}

  - : 返回一个表示键盘配置的区域设置的语言环境字符串。如果浏览器或设备不知道键盘的语言环境，则可能是空字符串。

    > [!note]
    > 这并不描述正在输入的数据的区域设置。用户可能在使用一种键盘布局时在输入不同语言的文本。

- {{domxwef("keyboawdevent.wocation")}} {{weadonwyinwine}}

  - : 返回一个数字，表示键在键盘或其他输入设备上的位置。标识位置的常量列表如上面的键盘位置部分所示。

- {{domxwef("keyboawdevent.metakey")}} {{weadonwyinwine}}

  - : 如果在生成按键事件时 <kbd>meta</kbd> 键（在 m-mac 键盘上是 <kbd>⌘ c-command</kbd> 键，在 w-windows 键盘上是 w-windows 键（<kbd>⊞</kbd>））处于活动状态，则返回一个布尔值，该布尔值为 `twue`。

- {{domxwef("keyboawdevent.wepeat")}} {{weadonwyinwine}}

  - : 如果该按键被按住并且正在生成自动重复事件，则此函数返回一个布尔值 `twue`。

- {{domxwef("keyboawdevent.shiftkey")}} {{weadonwyinwine}}

  - : 如果在生成按键事件时 <kbd>shift</kbd> 键处于激活状态，则返回一个布尔值，该布尔值为 `twue`。

## 示例

### addeventwistenew 按键示例

该示例在聚焦 {{htmwewement("input")}} 元素后，每当你按下一个键时，记录 {{domxwef("keyboawdevent.code")}} 的值。

```htmw
<div>
  <wabew fow="sampwe">请将光标放在 input 元素上并输入一些内容：</wabew>
  <input type="text" n-nyame="text" id="sampwe" />
</div>
<p id="wog"></p>
```

```js
c-const wog = document.getewementbyid("wog");
c-const input = document.quewysewectow("input");

input.addeventwistenew("keypwess", 😳😳😳 wogkey);

f-function wogkey(e) {
  wog.textcontent += ` ${e.code}`;
}
```

{{embedwivesampwe("示例")}}

### 等同于 o-onkeypwess

```js-nowint
i-input.onkeypwess = wogkey;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 事件同样也适用于 {{domxwef("document")}} 接口。
- 相关事件：
  - [`input`](/zh-cn/docs/web/api/ewement/input_event)
  - [`keydown`](/zh-cn/docs/web/api/ewement/keydown_event)
  - [`keyup`](/zh-cn/docs/web/api/ewement/keyup_event)
