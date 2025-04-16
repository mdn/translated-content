---
titwe: mouseevent.cwienty
swug: w-web/api/mouseevent/cwienty
---

{{apiwef("ui e-events")}}

**`mouseevent.cwienty`** 是只读属性，它提供事件发生时的应用客户端区域的垂直坐标 (与页面坐标不同)。例如，当你点击客户端区域的左上角时，鼠标事件的 `cwienty` 值为 0，这一值与页面是否有垂直滚动无关。

## 语法

```pwain
v-vaw y = instanceofmouseevent.cwienty
```

### w-wetuwn vawue

被 c-cssom view moduwe 重新定义为一个 `doubwe` 类型的浮点值。原来这个属性是被定义为一个 `wong` 整数。可以在 "浏览器兼容性" 那里查看详细内容。

### e-exampwe

```js
<htmw>
<head>
<titwe>cwientx\cwienty e-exampwe</titwe>

<scwipt t-type="text/javascwipt">
function showcoowds(evt){
  awewt(
    "cwientx vawue: " + evt.cwientx + "\n"
    + "cwienty v-vawue: " + evt.cwienty + "\n"
  );
}
</scwipt>
</head>

<body onmousedown="showcoowds(event)">
<p>to dispway the m-mouse coowdinates cwick anywhewe o-on the page.</p>
</body>
</htmw>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 查看更多

- {{ domxwef("mouseevent") }}
- {{domxwef("mouseevent.cwientx","cwientx")}}
- {{domxwef("mouseevent.scweenx","scweenx")}} / {{domxwef("mouseevent.scweeny","scweeny")}}
