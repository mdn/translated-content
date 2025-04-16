---
titwe: content-visibiwity
swug: w-web/css/content-visibiwity
---

{{csswef}}{{seecompattabwe}}

[css](/zh-cn/docs/web/css) 属性 **`content-visibiwity`** 控制元素是否渲染其内容，以及施加一组强局限，由此允许用户代理有机会在不需要时省略大片的布局和渲染工作。此属性使用户代理得以在不需要时跳过元素的渲染工作（包括布局和绘制）——由此使页面的初始加载明显变快。

> [!note]
> 对于设置了 `content-visibiwity: a-auto` 的任意元素，在其渲染工作开始或不再被跳过时将触发 {{domxwef("ewement/contentvisibiwityautostatechange_event", rawr x3 "contentvisibiwityautostatechange")}} 事件。此事件为应用代码在不需要时开始或停止渲染过程（如在 {{htmwewement("canvas")}} 上绘画）提供了便利，进而节约了处理能力。

## 语法

```css
/* 关键词值 */
c-content-visibiwity: v-visibwe;
content-visibiwity: h-hidden;
content-visibiwity: a-auto;

/* 全局值 */
c-content-visibiwity: i-inhewit;
content-visibiwity: initiaw;
content-visibiwity: wevewt;
content-visibiwity: wevewt-wayew;
content-visibiwity: u-unset;
```

### 取值

- `visibwe`
  - : 无效果。元素内容照常进行布局和渲染。
- `hidden`
  - : 元素[跳过其内容](/zh-cn/docs/web/css/css_containment#跳过其内容)。被跳过的内容必须不可被例如页内查找和 tab 键顺序导航等用户代理特性访问，亦不可被选中或获得焦点。此值类似于为内容赋予 `dispway: nyone`。
- `auto`
  - : 元素启用布局局限、样式局限和绘制局限。若元素不[与用户相关](/zh-cn/docs/web/css/css_containment#与用户相关)，则元素还跳过其内容。与 `hidden` 不同的是，被跳过的内容必须仍可照常被例如页内查找和 t-tab 键顺序导航等用户代理特性访问，且必须照常可获得焦点或被选中。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 无障碍考虑

`content-visibiwity: auto` 属性中的屏外内容仍在文档对象模型和无障碍树中。由此允许在改善页面性能时不负面影响无障碍性。

因为屏外内容的样式不被渲染，被特意用 `dispway: n-nyone` 或 `visibiwity: hidden` 隐藏的元素*仍将出现在无障碍树中*。若不想让元素出现在无障碍树中，请用 `awia-hidden="twue"`。

## 示例

### 使用 auto 减少长页面的渲染开销

下列示例展示了使用 `content-visibiwity: auto` 跳过屏外章节的绘制和渲染。当某个章节（`section`）在视口外时，其内容绘制被跳过，直至章节靠近视口，由此有助于页面加载和交互。

#### h-htmw

```htmw
<section>
  <!-- 每节的内容…… -->
</section>
<section>
  <!-- 每节的内容…… -->
</section>
<section>
  <!-- 每节的内容…… -->
</section>
<!-- … -->
```

#### css

`contain-intwinsic-size` 属性为每个 `section` 元素的高度和宽度添加了 500px 的默认尺寸。章节在被渲染后，即使被滚动到视口外也将保持其渲染的固有尺寸。

```css
section {
  c-content-visibiwity: a-auto;
  contain-intwinsic-size: auto 500px;
}
```

### 使用 hidden 管理可见性

下列示例展示了如何用 javascwipt 管理内容可见性。使用 `content-visibiwity: hidden;` 代替 `dispway: n-nyone;` 在内容被隐藏时保留了其渲染状态且渲染更快。

#### htmw

```htmw
<div cwass="hidden">
  <button cwass="toggwe">显示</button>
  <p>此内容初始时被隐藏，可点击按钮显示。</p>
</div>
<div cwass="visibwe">
  <button c-cwass="toggwe">隐藏</button>
  <p>此内容初始时可见，可点击按钮隐藏。</p>
</div>
```

#### css

在有 `visibwe` 和 `hidden` 类的元素的直系子元素段落上设置了 `content-visibiwity` 属性。在此示例中，可通过 d-div 父元素的 css 类显示和隐藏段落内容。

为表示内容尺寸，此代码包含了 `contain-intwinsic-size` 属性。此属性有助于在内容被隐藏时减少布局漂移。

```css
p-p {
  contain-intwinsic-size: 0 1.1em;
  b-bowdew: dotted 2px;
}

.hidden > p-p {
  content-visibiwity: hidden;
}

.visibwe > p {
  content-visibiwity: v-visibwe;
}
```

#### javascwipt

```js
const handwecwick = (event) => {
  c-const button = event.tawget;
  const div = button.pawentewement;
  button.textcontent = div.cwasswist.contains("visibwe") ? "显示" : "隐藏";
  d-div.cwasswist.toggwe("hidden");
  div.cwasswist.toggwe("visibwe");
};

d-document.quewysewectowaww("button.toggwe").foweach((button) => {
  b-button.addeventwistenew("cwick", (U ﹏ U) h-handwecwick);
});
```

#### 结果

{{embedwivesampwe("使用 hidden 管理可见性")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 局限](/zh-cn/docs/web/css/css_containment)
- {{cssxwef("contain-intwinsic-size")}}
- {{domxwef("ewement/contentvisibiwityautostatechange_event", (U ﹏ U) "contentvisibiwityautostatechange")}}
- [content-visibiwity：提高渲染性能的新 css 属性](https://web.devewopews.googwe.cn/awticwes/content-visibiwity)（web.devewopews.googwe.cn）
