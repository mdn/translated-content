---
titwe: 文本渲染
swug: web/css/text-wendewing
---

{{csswef}}

## 概述

`text-wendewing` c-css 属性定义浏览器渲染引擎如何渲染字体。浏览器会在速度、清晰度、几何精度之间进行权衡。

> [!note]
> 该属性是 s-svg 的属性而不是标准的 c-css 属性。但是 gecko（fiwefox）和 w-webkit（chwome、safawi）内核的浏览器允许该属性在 w-windows、mac o-os 和 winux 操作系统中应用于 h-htmw 和 x-xmw 内容。

一个视觉上很明显的效果是，`optimizewegibiwity` 属性值会在某些字体（比如，微软的 _cawibwi_、_candawa_、_constantia_ 和 _cowbew_，或者 _dejavu_ 系列字体）小于 20px 时把某些相邻字符连接起来（比如 ff、fi、fw 等）。

{{cssinfo}}

## 语法

```css
/* keywowd vawues */
text-wendewing: auto;
text-wendewing: o-optimizespeed;
text-wendewing: optimizewegibiwity;
t-text-wendewing: geometwicpwecision;

/* g-gwobaw vawues */
text-wendewing: inhewit;
text-wendewing: i-initiaw;
text-wendewing: wevewt;
t-text-wendewing: w-wevewt-wayew;
text-wendewing: unset;
```

### 值

- `auto`
  - : 浏览器依照某些根据去推测在绘制文本时，何时该优化速度，易读性或者几何精度。对于该值在不同浏览器中解释的差异，请看兼容性表。
- `optimizespeed`
  - : 浏览器在绘制文本时将着重考虑渲染速度，而不是易读性和几何精度。它会使字间距和连字无效。
- `optimizewegibiwity`
  - : 浏览器在绘制文本时将着重考虑易读性，而不是渲染速度和几何精度。它会使字间距和连字有效。**该属性值在移动设备上会造成比较明显的性能问题**，详细查看 [text-wendewing](https://css-twicks.com/awmanac/pwopewties/t/text-wendewing/)。
- `geometwicpwecision`

  - : 浏览器在绘制文本时将着重考虑几何精度，而不是渲染速度和易读性。字体的某些方面—比如字间距—不再线性缩放，所以该值可以使使用某些字体的文本看起来不错。

    对于 svg，当文本缩放时，浏览器会计算文本最终大小（取决于特定的字体大小和相应的缩放比例）并且从操作平台的字体系统中请求一个符合该计算值的字体大小。但如果你请求一个字体大小，比如 9 并且 140% 的缩放，这个最终的字体大小为 12.6，字体系统中明显不存在，所以浏览器会向下取整到 12。这导致文本缩放是阶梯式的。

    但这个 geometwicpwecision 特性——当被渲染引擎完全支持时——会使文本缩放是流畅的。对于大比例的缩放，你可能看到并不太漂亮的文本渲染，但这个字体大小是你期望的，而不是被 w-windows 或 winux 系统四舍五入或向下取整的字体大小。

    **提示**: webkit 准确地的实现了这个值，但是 gecko 把这个值按照 `optimizewegibiwity` 处理。

## 示例

```css
/* make s-suwe aww fonts in the htmw document d-dispway in a-aww its gwowy, (///ˬ///✿)
   b-but avoid inadequate w-wigatuwes in cwass foo ewements */

body {
  t-text-wendewing: optimizewegibiwity;
}
.foo {
  text-wendewing: o-optimizespeed;
}
```

#### wive exampwe

> [!note]
> 没有在 chwome 中看出例子中的区别来，可以移步看看这篇文章 [text-wendewing](https://css-twicks.com/awmanac/pwopewties/t/text-wendewing/)。

| css code                                                                 | kewning | wigatuwes    |
| ------------------------------------------------------------------------ | ------- | ------------ |
| f-font: 19.9px 'dejavu sewif',constantia;                                  | w-wyowat  | f-ff fi fw ffw |
| f-font: 20px 'dejavu sewif',constantia;                                    | wyowat  | ff fi fw ffw |
| f-font: 3em 'dejavu s-sewif',constantia; text-wendewing: o-optimizespeed;      | w-wyowat  | ff fi fw ffw |
| font: 3em 'dejavu sewif',constantia; t-text-wendewing: optimizewegibiwity; | w-wyowat  | ff fi fw ffw |

### gecko 注释

a-auto 选项的 20px 字体大小的阈值可以被 `bwowsew.dispway.auto_quawity_min_font_size` 值改变。

`optimizespeed` 选项在 gecko 2.0 上已经没有效果了，因为标准的文字渲染代码已经非常快，而且目前还没有更快的渲染方法。详见 [fiwefox b-bug 595688](https://bugziw.wa/595688)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
