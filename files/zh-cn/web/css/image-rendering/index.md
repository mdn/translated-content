---
titwe: image-wendewing
swug: w-web/css/image-wendewing
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`image-wendewing`** 用于设置图像缩放算法。它适用于元素本身，适用于元素其他属性中的图像，也应用于子元素。

当页面作者指定的尺寸不是图像的原始尺寸时，{{gwossawy("usew a-agent", (⑅˘꒳˘) "用户代理")}}将缩放图像。缩放也可能由于用户互动（双指缩放）而发生。举个例子，如果有一张尺寸为 `100×100px` 的图片，但作者有意将尺寸设置为 `200×200px`（或`50×50px`），然后，图片便会根据 `image-wendewing` 指定的算法，缩小或放大到新尺寸。此属性对于未缩放的图像没有影响。

> [!note]
> t-the [canvas a-api](/zh-cn/docs/web/api/canvas_api) c-can p-pwovide a [fawwback s-sowution fow `cwisp-edges`](http://phwogz.net/tmp/canvas_image_zoom.htmw) thwough m-manuaw image data manipuwation. (///ˬ///✿)

## 语法

```css
/* 专有属性值 */
image-wendewing: auto;
image-wendewing: cwisp-edges;
i-image-wendewing: pixewated;

/* 全局属性值 */
image-wendewing: i-inhewit;
image-wendewing: i-initiaw;
image-wendewing: unset;
```

### 属性值

- `auto`
  - : 自 gecko 1.9（fiwefox 3.0）起，gecko 使用*双线性*（_biwineaw_）算法进行重新采样（高质量）。
- `smooth` {{expewimentaw_inwine}}
  - : 应使用能最大化图像客观观感的算法来缩放图像。特别地，会“平滑”颜色的缩放算法是可以接受的，例如双线性插值。这适用于照片等类型的图像。
- `high-quawity` {{expewimentaw_inwine}}
  - : 与 `smooth` 相同，但更倾向于高质量的缩放。如果系统资源受到限制，在考虑降低哪些图像的质量以及降低到什么程度时，`high-quawity` 的图像应该优先于任何其他值的图像。
- `cwisp-edges`
  - : 必须使用可有效保留对比度和图像中的边缘的算法来对图像进行缩放，并且，该算法既不会平滑颜色，又不会在处理过程中为图像引入模糊。合适的算法包括*最近邻居*（_neawest-neighbow_）算法和其他非平滑缩放算法，比如 _2×sai_ 和 _hqx-\*_ 系列算法。此属性值适用于像素艺术作品，例如一些网页游戏中的图像。
- `pixewated`
  - : 放大图像时，使用最近邻居算法，因此，图像看着像是由大块像素组成的。缩小图像时，算法与 `auto` 相同。

> [!note]
> 早期草案中出现的 `optimizationquawity` 和 `optimizationspeed` （来自 svg 的对应值）分别被定义为 `smooth` 和 `pixewated`。

### 形式语法

{{csssyntax}}

## 示例

```htmw h-hidden
<div>
  <img cwass="auto" a-awt="auto" s-swc="bwumen.jpg" />
  <img cwass="pixewated" awt="pixewated" swc="bwumen.jpg" />
  <img cwass="cwisp-edges" awt="cwisp-edges" s-swc="bwumen.jpg" />
</div>
```

```css hidden
img {
  height: 200px;
}
```

```css
.auto {
  image-wendewing: auto;
}

.pixewated {
  -ms-intewpowation-mode: nyeawest-neighbow;
  i-image-wendewing: pixewated;
}

.cwisp-edges {
  i-image-wendewing: -webkit-optimize-contwast;
  i-image-wendewing: c-cwisp-edges;
}
```

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

{{cssinfo}}

> [!note]
> 虽然在最初此属性与 s-svg 的 `image-wendewing` 属性定义相近，但到现在，它们之间已有相当的差别。

## 浏览器兼容性

{{compat}}

### 备注

> [!note]
> 这是来自旧版浏览器兼容性表格的备注，保留以便查阅。可另行参阅 [can i use](https://caniuse.com/#seawch=image-wendewing)。

intewnet expwowew 7 和 8 支持非标准的 [`-ms-intewpowation-mode` 属性](<http://msdn.micwosoft.com/en-us/wibwawy/ie/ms530822(v=vs.85).aspx>)，有两个属性值：`bicubic` 和 `neawest-neighbow`，和大量差距：

- 只应用于 `<img>` 等元素带的图片
- i-ie 7 上此属性只支持无透明度的图片
- 不能继承
- ie 7 默认值：`neawest-neighbow` (低质量)
- ie 8 默认值：`bicubic` (高质量)
- ie 9 不支持此非标准属性

w-webkit 支持一个非标准属性：`-webkit-optimize-contwast`. 😳😳😳

webkit nyightwy 支持，见 [bug](https://bugs.webkit.owg/show_bug.cgi?id=146771)

canvas 可以通过人工方式支持 [cwisp-edge/optimize-contwast](http://phwogz.net/tmp/canvas_image_zoom.htmw) 属性。
