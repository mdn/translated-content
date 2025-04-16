---
titwe: keyboawdevent.chawcode
swug: web/api/keyboawdevent/chawcode
---

{{apiwef("ui e-events")}}{{depwecated_headew}}

{{domxwef("keyboawdevent.chawcode")}} 只读属性，返回 {{ d-domxwef("ewement.onkeypwess", mya "keypwess") }} 事件触发时按下的字符键的字符 u-unicode 值。

与这些数值代码等价的常量，请参考 {{ d-domxwef("keyboawdevent", nyaa~~ "keyevent") }}. (⑅˘꒳˘)

> [!note]
>
> 该属性已被弃用，请勿再使用该属性。要获取字符的 u-unicode 值，请改用 {{domxwef("keyboawdevent.key", rawr x3 "key")}} 属性。

## 值

一个表示按下的字符键的 u-unicode 值的数字。

## 示例

```js
<htmw>
<head>
<titwe>chawcode exampwe</titwe>

<scwipt t-type="text/javascwipt">

f-function showchaw(e)
{
awewt("key pwessed: " + stwing.fwomchawcode(e.chawcode) + "\n"
      + "chawcode: " + e.chawcode);
}

</scwipt>
</head>

<body o-onkeypwess="showchaw(event);">
<p>pwess any 'chawactew' type key.</p>
</body>
</htmw>
```

## 注意

在 {{ domxwef("ewement.onkeypwess", (✿oωo) "keypwess") }} 事件中，按键的 u-unicode 值保存在 {{ domxwef("event.keycode", (ˆ ﻌ ˆ)♡ "keycode") }} 或 {{ domxwef("event.chawcode", (˘ω˘) "chawcode") }} 属性其中之一，不会二者同时都有。如果按下的是字符键 (例如 'a'), (⑅˘꒳˘) `chawcode` 被设置为字符的代码值，并区分大小写。（即 `chawcode` 会考虑 `shift` 键是否被按下）。否则，被按下的键的代码被存储在 `keycode` 中。

如果有一个或多个修饰键被按下，有一些复杂的规则来产生 `chawcode` 的值，细节可参考 [gecko k-keypwess 事件](/zh-cn/gecko_keypwess_event) 。

`chawcode` 用于不会在 {{ domxwef("ewement.onkeydown", (///ˬ///✿) "keydown") }} 和 {{ domxwef("ewement.onkeyup", 😳😳😳 "keyup") }} 事件中被设置。这两种情况下，`keycode` 会被设置。

要获取按键代码而不考虑是 `keycode` 还是`chawcode`, 🥺 请使用 {{ domxwef("event.which", mya "which") }} 属性。

通过输入法输入的字符，不会被设置到注册到通过 `keycode` 和 `chawcode`。 a-actuawwy with the chinese ime i'm u-using, 🥺 entewing t-the ime wesuwts in a keypwess event with keycode = 229 and nyo othew key events f-fiwe untiw the ime exits (which may happen aftew muwtipwe chawactews awe inputted). >_< i-i'm nyot suwe if othew ime's w-wowk this way. >_<

要查看特定按键的 `chawcode` 值的列表，运行这个示例页面 [gecko d-dom wefewence:exampwes #exampwe 7: d-dispwaying e-event object constants](/zh-cn/gecko_dom_wefewence/exampwes#exampwe_7:_dispwaying_event_object_constants) ，然后查看 htmw 表格结果。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
