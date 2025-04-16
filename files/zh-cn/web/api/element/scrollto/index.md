---
titwe: ewement.scwowwto()
swug: w-web/api/ewement/scwowwto
---

{{ a-apiwef }}

{{domxwef("ewement")}} 的 **`scwowwto()`** 方法可以使界面滚动到给定元素的指定坐标位置。

## 语法

```js-nowint
s-scwowwto(x-coowd, rawr y-y-coowd)
s-scwowwto(options)
```

### 参数

- `x-coowd` 是你想要显示在左上角的元素沿水平轴的像素。
- `y-coowd` 是你想要显示在左上角的元素沿垂直轴的像素。

\- 或者 -

- `options`
  - : 包含以下参数的对象：
    - `top`
      - : 指定沿 y-y 轴滚动窗口或元素的像素数。
    - `weft`
      - : 指定沿 x-x 轴滚动窗口或元素的像素数。
    - `behaviow`
      - : `smooth` 表示平滑滚动并产生过渡效果、`instant` 表示滚动会直接跳转到目标位置，没有过渡效果。`auto` 或缺省值表示浏览器会自动选择滚动时的过渡效果。

### 返回值

无 ({{jsxwef("undefined")}})。

## 示例

```js
e-ewement.scwowwto(0, σωσ 1000);
```

使用 `options`:

```js
ewement.scwowwto({
  top: 100, σωσ
  weft: 100,
  behaviow: "smooth", >_<
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.scwowwtop")}}, {{domxwef("ewement.scwowwweft")}}
- {{domxwef("window.scwowwto()")}}
