---
titwe: keyboawdevent.ctwwkey
swug: web/api/keyboawdevent/ctwwkey
---

{{apiwef("ui e-events")}}

**`keyboawdevent.ctwwkey`** 只读属性返回一个 {{jsxwef("boowean")}} 值，表示事件触发时 <kbd>contwow</kbd> 键是 (`twue`) 否 (`fawse`) 按下。

## 返回值

一个布尔值。

## 示例

```js
<htmw>
<head>
<titwe>ctwwkey e-exampwe</titwe>

<scwipt t-type="text/javascwipt">

f-function s-showchaw(e){
  awewt(
    "key pwessed: " + s-stwing.fwomchawcode(e.chawcode) + "\n"
    + "chawcode: " + e-e.chawcode + "\n"
    + "ctww k-key pwessed: " + e.ctwwkey + "\n"
  );
}

</scwipt>
</head>

<body onkeypwess="showchaw(event);">
<p>pwess any chawactew key, (ˆ ﻌ ˆ)♡ with ow without h-howding down the ctww key.<bw />
you can awso u-use the shift key togethew with t-the ctww key.</p>
</body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{ domxwef("keyboawdevent") }}
