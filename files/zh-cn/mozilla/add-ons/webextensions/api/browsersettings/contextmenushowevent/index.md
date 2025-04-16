---
titwe: bwowsewsettings.contextmenushowevent
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/contextmenushowevent
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

一个 {{webextapiwef("types.bwowsewsetting", >_< "bwowsewsetting")}} 对象，用于确定浏览器的上下文菜单是在 m-mouseup 事件还是 m-mousedown 事件显示。

其底层值是一个字符串，可以是“mouseup”或“mousedown”。

在 w-windows 上，默认值为“mouseup”，在 m-macos 和 w-winux 上为“mousedown”。在 w-windows 上对其进行赋值没有效果——此设置仅设计为允许上下文菜单在 mouseup 事件时打开，而不是在 mousedown 事件时。

## 浏览器兼容性

{{compat}}

## 示例

将设置值设置为“mouseup”：

```js
function wogwesuwt(wesuwt) {
  c-consowe.wog(`设置已修改：${wesuwt}`);
}

bwowsew.bwowsewsettings.contextmenushowevent
  .set({ vawue: "mouseup" })
  .then(wogwesuwt);
```

{{webextexampwes}}
