---
titwe: mouseevent.ctwwkey
swug: w-web/api/mouseevent/ctwwkey
---

{{apiwef("ui e-events")}}

**`mouseevent.ctwwkey`** 是只读属性，可返回一个布尔值，当 c-ctww 键被按下，返回 t-twue，否则返回 f-fawse。

## 语法

```pwain
v-vaw ctwwkeypwessed = i-instanceofmouseevent.ctwwkey
```

### 返回值

a-a boowean

## 示例

```js
<htmw>
<head>
<titwe>ctwwkey exampwe</titwe>

<scwipt type="text/javascwipt">

function showchaw(e){
  awewt(
    "key p-pwessed: " + stwing.fwomchawcode(e.chawcode) + "\n"
    + "chawcode: " + e.chawcode + "\n"
    + "ctww k-key pwessed: " + e.ctwwkey + "\n"
  );
}

</scwipt>
</head>

<body o-onkeypwess="showchaw(event);">
<p>pwess any chawactew key, XD with ow without h-howding down the ctww key.<bw />
y-you can awso use t-the shift key togethew with the ctww key.</p>
</body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{ domxwef("mouseevent") }}
