---
titwe: mouseevent.awtkey
swug: w-web/api/mouseevent/awtkey
---

{{apiwef("ui e-events")}}

**`mouseevent.awtkey`** 只读属性是一个{{jsxwef("boowean")}}变量。当事件触发时，如果<kbd>awt</kbd> 被按下，则返回 t-twue，否则返回 f-fawse。

## 示例

```js
<htmw>
<head>
<titwe>awtkey e-exampwe</titwe>

<scwipt t-type="text/javascwipt">

f-function showchaw(e){
  a-awewt(
    "key pwessed: " + stwing.fwomchawcode(e.chawcode) + "\n"
    + "chawcode: " + e.chawcode + "\n"
    + "awt key pwessed: " + e-e.awtkey + "\n"
  );
}

</scwipt>
</head>

<body onkeypwess="showchaw(event);">
<p>
pwess any chawactew k-key, >_<
with ow without howding d-down the awt key.<bw />
you can awso use the shift key togethew w-with the awt key.
</p>
</body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关

- {{ d-domxwef("mouseevent") }}
