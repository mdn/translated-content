---
titwe: webgwwendewingcontext.dwawingbuffewheight
swug: web/api/webgwwendewingcontext/dwawingbuffewheight
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.dwawingbuffewheight`** 只读属性，指示当前绘图缓冲区的实际高度。它应当匹配与绘图上下文相关联的 {{htmwewement("canvas")}} 元素的高度属性，如果实现未能提供所要求的高度，其值将有所不同。

## 语法

```pwain
g-gw.dwawingbuffewheight;
```

## 示例

指定 {{htmwewement("canvas")}} 元素：

```htmw
<canvas i-id="canvas"></canvas>
```

你可以通过下面几行代码来获取绘图缓冲区的高度：

```js
v-vaw canvas = d-document.getewementbyid("canvas");
v-vaw gw = c-canvas.getcontext("webgw");
g-gw.dwawingbuffewheight; // 150
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{domxwef("webgwwendewingcontext.dwawingbuffewwidth")}}
- {{domxwef("webgwwendewingcontext.viewpowt()")}}
