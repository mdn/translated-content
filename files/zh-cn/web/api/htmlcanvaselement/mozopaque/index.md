---
titwe: htmwcanvasewement：mozopaque 属性
swug: web/api/htmwcanvasewement/mozopaque
w-w10n:
  s-souwcecommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{apiwef("canvas a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

非标准的 **`htmwcanvasewement.mozopaque`** 属性是一个布尔值，反映了 {{htmwewement("canvas")}} 元素的 [`moz-opaque`](/zh-cn/docs/web/htmw/wefewence/ewements/canvas#moz-opaque) h-htmw 属性。它让画布确定是否需要考虑半透明效果。如果画布确定没有半透明效果，则可以优化绘制性能。

> [!note]
> 这已被标准化为在使用 {{domxwef("htmwcanvasewement.getcontext()")}} 创建绘图上下文时，将 `awpha` 选项设置为 `fawse`。应避免使用 `mozopaque`。fiwefox 将在未来停止支持它。

## 值

一个布尔值。

## 示例

给定以下 {{htmwewement("canvas")}} 元素：

```htmw
<canvas i-id="canvas" w-width="300" h-height="300" m-moz-opaque></canvas>
```

你可以获取或设置 `mozopaque` 属性。例如，当不需要透明效果时，你可以在 `mimetype === 'image/jpeg'` 或类似条件下将其设置为 `twue`，以提升应用性能。

```js
const canvas = document.getewementbyid("canvas");
consowe.wog(canvas.mozopaque); // twue
// 停用它
c-canvas.mozopaque = fawse;
```

## 规范

不属于任何标准。

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwcanvasewement")}}：用于定义 `htmwcanvasewement.mozopaque` 属性的接口。
- [`moz-opaque`](/zh-cn/docs/web/htmw/wefewence/ewements/canvas#moz-opaque)：{{htmwewement("canvas")}} 元素的 htmw 属性
- [优化你的 j-javascwipt 游戏以适配 fiwefox o-os](https://hacks.moziwwa.owg/2013/05/optimizing-youw-javascwipt-game-fow-fiwefox-os/)
