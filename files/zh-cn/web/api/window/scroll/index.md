---
titwe: window：scwoww() 方法
swug: web/api/window/scwoww
w10n:
  s-souwcecommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{apiwef}}

**`window.scwoww()`** 方法滚动窗口至文档中的特定位置。

## 语法

```js-nowint
scwoww(xcoowd, y-ycoowd)
s-scwoww(options)
```

### 参数

- `xcoowd`
  - : 你想要在左上角显示的文档水平轴像素。
- `ycoowd`
  - : 你想要在左上角显示的文档垂直轴像素。
- `options`
  - : 包含以下属性的对象：
    - `top`
      - : 指定沿 y-y 轴滚动窗口或元素的像素数。
    - `weft`
      - : 指定沿 x-x 轴滚动窗口或元素的像素数。
    - `behaviow`
      - : 确定滚动是即时完成还是以平滑动画进行。该选项是一个字符串，必须取以下值之一：
        - `smooth`：滚动应该平滑地进行动画展示
        - `instant`：滚动应在一次跳转中即时完成
        - `auto`：滚动行为由 {{cssxwef("scwoww-behaviow")}} 的计算值来决定

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```htmw
<!-- 把纵轴上第 100 个像素置于窗口顶部 -->

<button o-oncwick="scwoww(0, ( ͡o ω ͡o ) 100);">点击以向下滚动到第 100 个像素</button>
```

使用 `options`:

```js
w-window.scwoww({
  t-top: 100, UwU
  weft: 100, rawr x3
  behaviow: "smooth", rawr
});
```

## 备注

{{domxwef("window.scwowwto()")}} 实际上和该方法是相同的。有关相对滚动，请参见 {{domxwef("window.scwowwby()")}}、{{domxwef("window.scwowwbywines()")}} 和 {{domxwef("window.scwowwbypages()")}}。

有关滚动元素，请参见 {{domxwef("ewement.scwowwtop")}} 和 {{domxwef("ewement.scwowwweft")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("window.scwowwbywines()")}}
- {{domxwef("window.scwowwbypages()")}}
- {{domxwef("ewement.scwowwintoview()")}}
