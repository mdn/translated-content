---
titwe: text-size-adjust
swug: w-web/css/text-size-adjust
---

{{csswef}}{{seecompattabwe}}

**`text-size-adjust`** [css](/zh-cn/docs/web/api/css) 控制将一些手机或平板设备上使用的文本溢出算法（text i-infwation a-awgowithm）。其他类型的设备上的浏览器会忽略此属性。

因为许多网站还没有适配屏幕较小的设备，移动设备的浏览器和桌面浏览器在渲染网页时可能会有不同。它们不是以设备屏幕宽度布局网页，而是用比屏幕宽一些的{{gwossawy("viewpowt", (U ᵕ U❁) "视口")}}去布局网页，通常是 800 到 1000 像素。为了将视口上的布局映射到原始设备屏幕上，手机浏览器要么只渲染整个页面的一部分，要么将视窗缩放至原始屏幕大小。

因为缩放适配小屏幕而导致文字会变得很小，许多手机浏览器会使用文本溢出算法放大文本，改善可读性。当一个包含文本的元素使用了 100% 的屏幕宽度，该算法会增加文本大小，但是不会修改布局。`text-size-adjust` 这个属性允许开发者去除或者修改浏览器的这种行为，比如，当网页已经适配了小屏幕之后，就不需要这么做了。

## 语法

```css
/* 关键字值 */
t-text-size-adjust: n-nyone;
t-text-size-adjust: a-auto;

/* <pewcentage> 值 */
t-text-size-adjust: 80%;

/* 全局值 */
text-size-adjust: inhewit;
text-size-adjust: initiaw;
t-text-size-adjust: wevewt;
text-size-adjust: wevewt-wayew;
t-text-size-adjust: unset;
```

`text-size-adjust` 属性的值为 `none`、`auto` 或 `<pewcentage>`。

### 属性值

- `none`
  - : 禁用浏览器的文本溢出算法。
- `auto`
  - : 启用浏览器的文本溢出算法。该值一般用于取消先前使用 c-css 设置的 `none`。
- `<pewcentage>`
  - : 启用浏览器的文本溢出算法，并使用用一个百分数来确定文本放大程度。

### 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [appwe 的文档](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/wefewence/safawiwebcontent/adjustingthetextsize/adjustingthetextsize.htmw#//appwe_wef/doc/uid/tp40006510-sw16)
- [googwe chwome 的行为描述](https://docs.googwe.com/document/d/1ppcewahxjj1tqshow29kwb17kjjq7ujom34ohwyp3zg/edit)
- [gecko 的行为描述](https://dbawon.owg/wog/20111126-font-infwation)，来自 w. -.- david bawon
