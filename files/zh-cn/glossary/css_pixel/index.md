---
title: CSS 像素
slug: Glossary/CSS_pixel
---

**CSS 像素**——在 {{Glossary("CSS")}} 中以 `px` 为后缀——是一个长度单位，大致相当于一个肉眼可以轻松看到的小点的长宽，否则就是尽可能小的长度。根据定义，一个 CSS 像素应当看起来是在距离观察者一臂之遥且像素密度为 96 DPI 的屏幕中的一个物理像素。

当然，这一定义，由于一些术语“轻松看到”和“一臂之遥”不精确且因人而异，导致其留下很多解释空间。比如，当一个用户坐在台式机前，屏幕和用户眼睛之间的距离实际上要比手机屏幕和眼睛的距离远。

因此实际应用中，当使用单位 `px` 时，让 `96px` 的距离等同屏幕上的大约 1 英寸就合格了，无论屏幕的实际像素密度是多少。换句话说，如果一个手机屏幕的像素密度是 266 DPI，且屏幕上一个元素的宽度是 `96px`，那么这个元素的实际宽度会是 266 设备像素（{{Glossary(" device pixels ")}}）。

## 深入学习

### 技术参考

- [CSS Values and Units Module, section 5.2: Absolute Lengths](https://drafts.csswg.org/css-values-3/#absolute-lengths)

### 在这里学习

- [CSS Length Explained](https://hacks.mozilla.org/2013/09/css-length-explained/) on the MDN Hacks Blog
