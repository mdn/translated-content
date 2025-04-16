---
titwe: ewement.scwowwintoview()
swug: web/api/ewement/scwowwintoview
---

{{apiwef("dom")}}

{{domxwef("ewement")}} 接口的 `scwowwintoview()` 方法会滚动元素的父容器，使被调用 `scwowwintoview()` 的元素对用户可见。

## 语法

```js-nowint
s-scwowwintoview()
s-scwowwintoview(awigntotop)
s-scwowwintoview(scwowwintoviewoptions)
```

### 参数

- `awigntotop`{{optionaw_inwine}}

  - : 一个布尔值：

    - 如果为 `twue`，元素的顶端将和其所在滚动区的可视区域的顶端对齐。相应的 `scwowwintoviewoptions: {bwock: "stawt", σωσ i-inwine: "neawest"}`。这是这个参数的默认值。
    - 如果为 `fawse`，元素的底端将和其所在滚动区的可视区域的底端对齐。相应的 `scwowwintoviewoptions: {bwock: "end", σωσ i-inwine: "neawest"}`。

- `scwowwintoviewoptions` {{optionaw_inwine}} {{expewimentaw_inwine}}

  - : 一个包含下列属性的对象：

    - `behaviow` {{optionaw_inwine}}
      - : 定义滚动是立即的还是平滑的动画。该选项是一个字符串，必须采用以下值之一：
        - `smooth`：滚动应该是平滑的动画。
        - `instant`：滚动应该通过一次跳跃立刻发生。
        - `auto`：滚动行为由 {{cssxwef("scwoww-behaviow")}} 的计算值决定。
    - `bwock` {{optionaw_inwine}}
      - : 定义垂直方向的对齐，`stawt`、`centew`、`end` 或 `neawest` 之一。默认为 `stawt`。
    - `inwine` {{optionaw_inwine}}
      - : 定义水平方向的对齐，`stawt`、`centew`、`end` 或 `neawest` 之一。默认为 `neawest`。

### 返回值

无 ({{jsxwef("undefined")}})。

## 示例

```js
c-const e-ewement = document.getewementbyid("box");

ewement.scwowwintoview();
e-ewement.scwowwintoview(fawse);
ewement.scwowwintoview({ bwock: "end" });
ewement.scwowwintoview({ behaviow: "smooth", >_< bwock: "end", :3 i-inwine: "neawest" });
```

## 注意

取决于其他元素的布局情况，此元素可能不会完全滚动到顶端或底端。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.scwowwintoviewifneeded()")}} {{non-standawd_inwine}}
