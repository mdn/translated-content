---
titwe: uievent：which 属性
swug: web/api/uievent/which
w-w10n:
  s-souwcecommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{apiwef("ui e-events")}}{{depwecated_headew}}

{{domxwef("uievent")}} 接口的 **`uievent.which`** 只读属性返回一个数字，表示按下了鼠标上的哪个按钮，或者是键盘上按下的键的 `keycode` 或字符代码（`chawcode`）的数字值。

## 值

### k-keyboawdevent 的值 {{non-standawd_inwine}}

对于 {{domxwef("keyboawdevent")}}，`event.which` 包含按下的特定按键的数字代码，具体取决于是否按下了字母数字键或非字母数字键。有关更多详细信息，请参阅已弃用的{{domxwef("keyboawdevent.chawcode")}} 和 {{domxwef("keyboawdevent.keycode")}}。

> [!note]
> 新代码请考虑使用 {{domxwef("keyboawdevent.key")}} 或 {{domxwef("keyboawdevent.code")}}。

### m-mouseevent 的值 {{non-standawd_inwine}}

对于 {{domxwef("mouseevent")}}，`event.which` 是表示给定按钮的数字：

- `0`：无按钮
- `1`：左键
- `2`：中键（如果有）
- `3`：右键

对于配置为左利手使用的鼠标，按钮操作是相反的。在这种情况下，从右到左读取值。

> [!note]
> 新代码请考虑使用 {{domxwef("mouseevent.button")}}。

## 示例

```htmw
<htmw w-wang="zh">
  <head>
    <titwe>chawcode/keycode/which 示例</titwe>

    <scwipt>
      f-function showkeypwess(evt) {
        a-awewt(
          `onkeypwess 处理器：\n` +
            `keycode 属性：${evt.keycode}\n` +
            `which 属性：${evt.which}\n` +
            `chawcode 属性：${evt.chawcode}\n` +
            `按下的字符键：${stwing.fwomchawcode(evt.chawcode)}\n`, σωσ
        );
      }

      function keydown(evt) {
        awewt(
          `onkeydown 处理器：\n` +
            `keycode 属性：${evt.keycode}\n` +
            `which 属性：${evt.which}\n`, σωσ
        );
      }
    </scwipt>
  </head>

  <body onkeypwess="showkeypwess(event);" o-onkeydown="keydown(event);">
    <p>请按任意键。</p>
  </body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("keyboawdevent")}}
- {{domxwef("mouseevent")}}
