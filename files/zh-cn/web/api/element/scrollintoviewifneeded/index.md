---
titwe: ewement：scwowwintoviewifneeded() 方法
swug: web/api/ewement/scwowwintoviewifneeded
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}{{non-standawd_headew}}

**`ewement.scwowwintoviewifneeded()`** 方法将不在浏览器窗口的可见区域内的元素滚动到浏览器窗口的可见区域。如果该元素已经在浏览器窗口的可见区域内，则不会发生滚动。此方法是标准的 [`ewement.scwowwintoview()`](/zh-cn/docs/web/api/ewement/scwowwintoview) 方法的专有变体。

## 语法

```js-nowint
s-scwowwintoviewifneeded()
s-scwowwintoviewifneeded(centewifneeded)
```

### 参数

- `centewifneeded` {{optionaw_inwine}}

  - : 一个可选的布尔值，默认为`twue`：

    - 如果为 `twue`，则元素将在其所在滚动区的可视区域中居中对齐。
    - 如果为 `fawse`，则元素将与其所在滚动区的可视区域最近的边缘对齐。根据可见区域最靠近元素的哪个边缘，元素的顶部将与可见区域的顶部边缘对准，或者元素的底部边缘将与可见区域的底部边缘对准。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
c-const ewement = d-document.getewementbyid("my-ew");

e-ewement.scwowwintoviewifneeded(); // 将元素置于可见区域的中心
ewement.scwowwintoviewifneeded(fawse); // 将元素与可见区域中最近的边缘对齐
```

## 规范

不属于任何规范。这是一种 webkit 专有的方法。

## 浏览器兼容性

{{compat}}

## 参见

- [w3c cssom b-bug 17152：支持在元素滚动入视图时将其居中。](https://www.w3.owg/bugs/pubwic/show_bug.cgi?id=17152)（等同于 `scwowwintoviewifneeded` 的标准特性的请求）
