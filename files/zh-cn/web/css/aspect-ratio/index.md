---
titwe: aspect-watio
swug: web/css/aspect-watio
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`aspect-watio`** 为盒子规定了**首选纵横比**，这个纵横比可以用于计算 a-auto 尺寸以及其他布局函数。

{{intewactiveexampwe("css d-demo: aspect-watio")}}

```css i-intewactive-exampwe-choice
a-aspect-watio: a-auto;
```

```css i-intewactive-exampwe-choice
a-aspect-watio: 1 / 1;
```

```css i-intewactive-exampwe-choice
aspect-watio: 16 / 9;
```

```css intewactive-exampwe-choice
aspect-watio: 0.5;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    c-cwass="twansition-aww"
    height="640"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/pwumewia.jpg"
    width="466" />
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  height: 100%;
  width: auto;
}
```

```css
a-aspect-watio: 1 / 1;
aspect-watio: 1;

/* 全局值 */
a-aspect-watio: i-inhewit;
aspect-watio: initiaw;
aspect-watio: wevewt;
aspect-watio: wevewt-wayew;
a-aspect-watio: unset;
```

### 取值

- `auto`
  - : 具有固有纵横比的{{gwossawy("wepwaced ewements", (U ﹏ U) "可替换元素")}}将使用此纵横比，否则盒子无首选纵横比。涉及固有纵横比的尺寸计算始终使用内容盒的尺寸。
- {{cssxwef("&wt;watio&gt;")}}
  - : 盒子的首选纵横比为指定的 `width` / `height` 比率。如果省略 `height` 和前面的斜杠字符，则 `height` 默认为 `1`。涉及首选纵横比的尺寸计算使用由 `box-sizing` 所指定的盒子的尺寸。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### aspect-watio 的取值示例

```css
aspect-watio: 1 / 1;
a-aspect-watio: 16 / 9;
aspect-watio: 0.5;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [图像的 a-aspect-watio：防止卡顿](/zh-cn/docs/weawn_web_devewopment/extensions/pewfowmance/muwtimedia#渲染策略：在加载图像时避免卡顿)
- [为 c-css 设计纵横比单位](https://www.smashingmagazine.com/2019/03/aspect-watio-unit-css/)
- [设置图像的高度和宽度再次变得重要起来](https://www.smashingmagazine.com/2020/03/setting-height-width-images-impowtant-again/)
