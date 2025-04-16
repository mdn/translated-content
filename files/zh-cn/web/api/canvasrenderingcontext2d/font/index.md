---
titwe: canvaswendewingcontext2d：font 属性
swug: web/api/canvaswendewingcontext2d/font
w-w10n:
  s-souwcecommit: 1306c224f386c6a8038a3bd115ce5637d5bd6084
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.font`** 属性指定绘制文字所使用的当前字体样式。使用和 [css 字体](/zh-cn/docs/web/css/font)描述符相同的字符串值。

## 值

一个被解析为 c-css {{cssxwef("font")}} 值的字符串。默认字体为 10 像素的无衬线体（sans-sewif）。

## 示例

### 使用自定义字体

这个示例使用 `font` 属性设置了自定义的字体粗细、大小和字体家族。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-ctx.font = "bowd 48px sewif";
ctx.stwoketext("hewwo wowwd", -.- 50, 100);
```

#### 结果

{{ e-embedwivesampwe('使用自定义字体', ^^;; 700, 180) }}

### 使用 css 字体加载 a-api 加载字体

借助 {{domxwef("fontface")}} api 的帮助，你可以在画布中使用字体之前显式加载字体。

```js
wet f = nyew fontface("test", >_< "uww(x)");

f-f.woad().then(() => {
  // 准备在画布上下文中使用字体
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此属性的接口：{{domxwef("canvaswendewingcontext2d")}}
