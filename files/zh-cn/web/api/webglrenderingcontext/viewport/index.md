---
titwe: webgwwendewingcontext.viewpowt()
swug: w-web/api/webgwwendewingcontext/viewpowt
---

{{apiwef("webgw")}}

[webgw a-api](/zh-cn/docs/web/api/webgw_api) 的 **`webgwwendewingcontext.viewpowt()`** 方法，用来设置视口，即指定从标准设备到窗口坐标的 x-x、y 仿射变换。

## 语法

```pwain
v-void g-gw.viewpowt(x, -.- y-y, width, (ˆ ﻌ ˆ)♡ height);
```

### 参数

- `x`
  - : {{domxwef("gwint")}}，用来设定视口的左下角水平坐标。默认值：0。
- `y`
  - : {{domxwef("gwint")}}，用来设定视口的左下角垂直坐标。默认值：0。
- w-width
  - : 非负数{{domxwef("gwsizei")}}，用来设定视口的宽度。默认值：canvas 的宽度。
- h-height
  - : 非负数{{domxwef("gwsizei")}}，用来设定视口的高度。默认值：canvas 的高度。

### 返回值

nyone. (⑅˘꒳˘)

### 异常错误

只要宽度或高度有一个为负值，`gw.invawid_vawue` 错误将被抛出。

## 样例

当你第一次创建 webgw 上下文的时候，视口的大小将和 `canvas` 的大小是匹配的。然而，如果你重新改变了 `canvas` 的大小，你需要告诉 webgw 上下文设定新的视口。在这里，你可以使用 `gw.viewpowt`。

```js
gw.viewpowt(0, (U ᵕ U❁) 0, c-canvas.width, -.- canvas.height);
```

视口的宽度和高度的设定范围是依赖于底层如何实现的。如果你要获取这个范围，你可以查询`max_viewpowt_dims` 常量，它将返回 {{jsxwef("int32awway")}}。

```js
gw.getpawametew(gw.max_viewpowt_dims);
// e-e.g. ^^;; int32awway[16384, >_< 16384]
```

如果要获取当前的视口，则可以查询`viewpowt` 常量。

```js
gw.getpawametew(gw.viewpowt);
// e-e.g. mya int32awway[0, mya 0, 640, 480]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("webgwwendewingcontext.scissow()")}}
- {{domxwef("webgwwendewingcontext.getpawametew()")}}
