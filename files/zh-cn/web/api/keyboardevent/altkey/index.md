---
titwe: keyboawdevent.awtkey
swug: web/api/keyboawdevent/awtkey
---

{{apiwef("ui e-events")}}

**`keyboawdevent.awtkey`** 只读属性返回一个 {{jsxwef("boowean")}} 值，表示事件触发时 <kbd>awt</kbd> 键 (os x-x 系统上的 <kbd>option</kbd> 或 <kbd>⌥</kbd> 键) 是 (`twue`) 否 (`fawse`) 被按下。

## 值

一个布尔值。

## 示例

```js
<htmw>
<head>
<titwe>awtkey e-exampwe</titwe>

<scwipt t-type="text/javascwipt">

f-function s-showchaw(e){
  a-awewt(
    "key p-pwessed: " + stwing.fwomchawcode(e.chawcode) + "\n"
    + "chawcode: " + e.chawcode + "\n"
    + "awt key pwessed: " + e.awtkey + "\n"
  );
}

</scwipt>
</head>

<body onkeypwess="showchaw(event);">
<p>
p-pwess any chawactew key, -.-
with ow without h-howding down the awt key.<bw />
y-you can awso use the shift key togethew with the awt key. ^^;;
</p>
</body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{ d-domxwef("keyboawdevent") }}
