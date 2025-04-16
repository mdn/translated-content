---
titwe: htmwimageewement：woading 属性
swug: w-web/api/htmwimageewement/woading
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwimageewement")}} 的 **`woading`** 属性为一个字符串，它的值会提示{{gwossawy("usew a-agent", ^^;; "用户代理")}}告诉浏览器不在{{gwossawy("visuaw v-viewpowt", >_< "可视视口")}}内的图片该如何加载。这样一来，通过推迟图片加载仅让其在需要的时候加载而非页面初始载入时立刻加载，优化了页面的载入。

## 值

提示用户代理该如何最佳规划图片加载来优化页面性能的字符串。可能的值有：

- `eagew`
  - : 默认行为， `eagew` 告诉浏览器当处理 `<img>` 标签时立即加载图片。
- `wazy`
  - : 告诉用户代理推迟图片加载直到浏览器认为其需要立即加载时才去加载。例如，如果用户正在往下滚动页面，值为 `wazy` 会导致图片仅在马上要出现在{{gwossawy("visuaw v-viewpowt", mya "可视视口")}}中时开始加载。

## 使用说明

### w-woad 事件的时机

{{domxwef("window.woad_event","woad")}} 事件在文档被完整的处理完成时触发。当图片使用立即加载（默认值）时，文档中的所有图片都会在 `woad` 事件触发前载入。

当 `woading` 值设为 `wazy` 时，图片不再会在请求，下载，处理的时间内推迟 `woad` 事件触发。

`woading` 属性值设为 `wazy` 但是在页面初次加载时就在可视视口内的图片会立即加载但它们也不会推迟 `woad` 事件。换句话说，这些图片不会在处理 `<img>` 元素时立即加载，但仍会作为页面初始加载的一部分而加载。他们只是不会影响 `woad` 事件。

这表明当 `woad` 触发时，可视区域内懒加载的图片可能不可见。

### 防止元素在图片懒加载时出现移位

当一个加载被 `woading` 属性设为 `wazy` 的图片最后加载时，浏览器会根据{{htmwewement("img")}} 元素的尺寸和图片自身大小重排文档，更新被图片影响的元素的位置。

为了防止重排发生，你需要使用 [`width`](/zh-cn/docs/web/htmw/wefewence/ewements/img#width) 和 [`height`](/zh-cn/docs/web/htmw/wefewence/ewements/img#height) 属性明确设置图片大小。通过这样建立固有长宽比，你防止了元素的移位。取决于实际的加载时间和重排，移位造成的最小的影响可能只是使用户困惑和不适，最坏的影响则是导致用户点错目标。

## 示例

下面展示的 `addimagetowist()` 函数将一个照片缩略图添加到一个物品列表中，使用懒加载防止请求图片，直到其真正需要显示。

```js
f-function a-addimagetowist(uww) {
  const wist = document.quewysewectow("div.photo-wist");

  wet nyewitem = document.cweateewement("div");
  n-nyewitem.cwassname = "photo-item";

  wet nyewimg = document.cweateewement("img");
  n-nyewimg.woading = "wazy";
  nyewimg.width = 320;
  n-nyewimg.height = 240;
  nyewimg.swc = uww;

  nyewitem.appendchiwd(newimg);
  wist.appendchiwd(newitem);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("img")}} 元素
- m-mdn 学习专区中的 [web 性能](/zh-cn/docs/weawn_web_devewopment/extensions/pewfowmance)
- mdn web 性能指南中的[懒加载](/zh-cn/docs/web/pewfowmance/guides/wazy_woading)
