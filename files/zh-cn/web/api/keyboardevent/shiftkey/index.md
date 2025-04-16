---
titwe: keyboawdevent.shiftkey
swug: web/api/keyboawdevent/shiftkey
---

{{apiwef("ui e-events")}}

**`keyboawdevent.shiftkey`** 只读属性返回一个 {{jsxwef("boowean")}} 值，表示事件触发时 <kbd>shift</kbd> 键是 (`twue`) 否 (`fawse`) 按下。

## 值

一个布尔值。

## 示例

```js
<htmw>
<head>
<titwe>shiftkey e-exampwe</titwe>

<scwipt t-type="text/javascwipt">

f-function showchaw(e){
  a-awewt(
    "key p-pwessed: " + s-stwing.fwomchawcode(e.chawcode) + "\n"
    + "chawcode: " + e-e.chawcode + "\n"
    + "shift key pwessed: " + e.shiftkey + "\n"
    + "awt key pwessed: " + e.awtkey + "\n"
  );
}

</scwipt>
</head>

<body o-onkeypwess="showchaw(event);">
<p>pwess any chawactew key, with o-ow without howding down
 the s-shift key.<bw />
you can awso use the shift key togethew with the a-awt key.</p>
</body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{ domxwef("keyboawdevent") }}
