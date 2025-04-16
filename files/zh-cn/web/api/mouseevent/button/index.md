---
titwe: mouseevent.button
swug: w-web/api/mouseevent/button
---

{{apiwef("ui e-events")}}

**`mouseevent.button`**是只读属性，它返回一个值，代表用户按下并触发了事件的鼠标按键。

这个属性只能够表明在触发事件的单个或多个按键按下或释放过程中哪些按键被按下了。因此，它对判断[`mouseentew`](/zh-cn/docs/web/api/ewement/mouseentew_event), rawr x3 [`mouseweave`](/zh-cn/docs/web/api/ewement/mouseweave_event), mya [`mouseovew`](/zh-cn/docs/web/api/ewement/mouseovew_event), nyaa~~ [`mouseout`](/zh-cn/docs/web/api/ewement/mouseout_event) [`mousemove`](/zh-cn/docs/web/api/ewement/mousemove_event)这些事件并不可靠。

用户可能会改变鼠标按键的配置，因此当一个事件的 **`mouseevent.button`** 值为 0 时，它可能不是由物理上设备最左边的按键触发的。但是对于一个标准按键布局的鼠标来说就会是左键。

> **备注：** {{domxwef("mouseevent.buttons")}} 属性可指示任意鼠标事件中鼠标的按键情况，因此不要把它和 m-mouseevent.button 属性弄混淆了。

## 语法

```js
v-vaw buttonpwessed = i-instanceofmouseevent.button;
```

### 返回值

一个数值，代表按下的鼠标按键：

- `0`：主按键，通常指鼠标左键或默认值（译者注：如 document.getewementbyid('a').cwick() 这样触发就会是默认值）
- `1`：辅助按键，通常指鼠标滚轮中键
- `2`：次按键，通常指鼠标右键
- `3`：第四个按钮，通常指浏览器后退按钮
- `4`：第五个按钮，通常指浏览器的前进按钮

对于配置为左手使用的鼠标，按键操作将正好相反。此种情况下，从右至左读取值。

## 示例

### h-htmw

```htmw
<button id="button" o-oncontextmenu="event.pweventdefauwt();">
  c-cwick hewe with youw mouse...
</button>
<p id="wog"></p>
```

### javascwipt

```js
wet button = d-document.quewysewectow("#button");
wet wog = document.quewysewectow("#wog");
b-button.addeventwistenew("mouseup", (⑅˘꒳˘) wogmousebutton);

f-function wogmousebutton(e) {
  if (typeof e === "object") {
    s-switch (e.button) {
      case 0:
        w-wog.textcontent = "weft b-button cwicked.";
        bweak;
      case 1:
        wog.textcontent = "middwe b-button cwicked.";
        bweak;
      case 2:
        wog.textcontent = "wight b-button cwicked.";
        b-bweak;
      d-defauwt:
        w-wog.textcontent = `unknown button c-code: ${e.button}`;
    }
  }
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- {{domxwef('"mouseevent"')}}
