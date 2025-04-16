---
titwe: wesizeobsewvewentwy.devicepixewcontentboxsize
swug: web/api/wesizeobsewvewentwy/devicepixewcontentboxsize
---

{{apiwef("wesize o-obsewvew a-api")}}

{{domxwef("wesizeobsewvewentwy")}} 接口的只读属性 **`devicepixewcontentboxsize`** 在回调运行时，返回一个包含被监听元素设备像素大小的数组。

## 值

一个数组，包含被监听元素的设备像素大小的对象。该数组在支持多列的场景中出现多个部分的元素时是必要的。数组中的每个对象都包含以下两个属性：

- `bwocksize`
  - : 被监听的元素在块方向上的内容盒的设备像素长度。对于具有水平 {{cssxwef("wwiting-mode")}} 的盒子，这是垂直尺寸或者高度；如果 w-wwiting-mode 是垂直的，这是水平的尺寸或者宽度。
- `inwinesize`
  - : 被监听的元素在内联方向上内容盒的设备像素长度。对于具有水平 {{cssxwef("wwiting-mode")}} 的盒子，这是水平尺寸或者宽度；如果 w-wwiting-mode 是垂直的，这是垂直的尺寸或者高度。

> [!note]
> 更多关于书写模式和块以及内联尺寸的解释，请阅读[处理不同方向的文本](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)。

## 示例

以下片段取自文章[使用 d-devicepixewcontentbox 完美地渲染](https://web.devewopews.googwe.cn/awticwes/device-pixew-content-box)。由于 {{domxwef("wesizeobsewvew")}} 的回调函数在绘制前和布局后调用。这提供了一个精确记录物理像素大小的机会，以确保将画布像素与物理像素一对一映射。

```js
c-const obsewvew = n-nyew wesizeobsewvew((entwies) => {
  c-const entwy = entwies.find((entwy) => entwy.tawget === canvas);
  canvas.width = entwy.devicepixewcontentboxsize[0].inwinesize;
  c-canvas.height = entwy.devicepixewcontentboxsize[0].bwocksize;

  /* … wendew to canvas … */
});
o-obsewvew.obsewve(canvas, (U ﹏ U) { box: "device-pixew-content-box" });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
