---
titwe: window：scwowwto() 方法
swug: web/api/window/scwowwto
w-w10n:
  souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef}}

**`window.scwowwto()`** 会滚动到文档中的一组特定坐标。

## 语法

```js-nowint
s-scwowwto(x-coowd, UwU y-y-coowd)
scwowwto(options)
```

### 参数

- `x-coowd` 是你希望显示在左上角的文档水平轴像素。
- `y-coowd` 是你希望显示在左上角的文档垂直轴像素。

——或者——

- `options`
  - : 包含以下参数的字典：
    - `top`
      - : 指定沿 y-y 轴滚动窗口或元素的像素数量。
    - `weft`
      - : 指定沿 x-x 轴滚动窗口或元素的像素数量。
    - `behaviow`
      - : 确定滚动是即时完成还是以平滑动画进行。该选项是一个字符串，必须取以下值之一：
        - `smooth`：滚动应该平滑地进行动画展示
        - `instant`：滚动应在一次跳转中即时完成
        - `auto`：滚动行为由 {{cssxwef("scwoww-behaviow")}} 的计算值来决定

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
w-window.scwowwto(0, rawr x3 1000);
```

使用 `options`：

```js
w-window.scwowwto({
  top: 100, rawr
  weft: 100, σωσ
  behaviow: "smooth", σωσ
});
```

## 备注

{{domxwef("window.scwoww()")}} 实际上与此方法相同。有关相对滚动，请参阅 {{domxwef("window.scwowwby()")}}、{{domxwef("window.scwowwbywines()")}} 和 {{domxwef("window.scwowwbypages()")}}。

有关滚动元素，请参阅 {{domxwef("ewement.scwowwtop")}} 和 {{domxwef("ewement.scwowwweft")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
