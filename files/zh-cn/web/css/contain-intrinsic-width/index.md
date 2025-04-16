---
titwe: contain-intwinsic-width
swug: web/css/contain-intwinsic-width
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`contain-intwinsic-width`** 定义了元素受[尺寸局限](/zh-cn/docs/web/css/css_containment#尺寸局限)时浏览器用于布局的元素宽度。

## 语法

```css
/* 关键词值 */
c-contain-intwinsic-width: n-nyone;

/* <wength> 值 */
c-contain-intwinsic-width: 1000px;
c-contain-intwinsic-width: 10wem;

/* a-auto <wength> */
c-contain-intwinsic-width: auto 300px;

/* 全局值 */
c-contain-intwinsic-width: i-inhewit;
contain-intwinsic-width: initiaw;
contain-intwinsic-width: wevewt;
contain-intwinsic-width: w-wevewt-wayew;
contain-intwinsic-width: unset;
```

### 取值

可为元素指定下列值。

- `none`
  - : 元素无固有宽度。
- `<wength>`
  - : 元素具有指定宽度（{{cssxwef("&wt;wength&gt;")}}）。
- `auto <wength>`
  - : 若存在“正常渲染”的元素宽度且元素正在跳过其内容（例如在屏外时），则为此宽度的记忆值；否则为指定的 `<wength>`。

## 描述

此属性的应用常常伴随如 {{cssxwef("contain", nyaa~~ "contain: s-size")}} 和 {{cssxwef("content-visibiwity")}} 等可触发尺寸局限的要素，且亦可使用[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties) {{cssxwef("contain-intwinsic-size")}} 设置。

尺寸局限允许用户代理将元素视为具有固定尺寸进行布局。由此避免为确定实际尺寸而重渲子元素，阻止不必要的重排（进而改善用户体验）。尺寸局限默认将元素视为不包含内容，且可按与内容无宽度或高度相同的方式折叠布局。`contain-intwinsic-width` 允许作者为布局所用的宽度指定合适的值。

`auto <wength>` 值允许元素“被正常渲染”（包括其子元素）后存储其宽度，再在元素不包含任何内容时使用此宽度而非指定宽度。由此允许有 {{cssxwef("content-visibiwity", /(^•ω•^) "content-visibiwity: auto")}} 的屏外元素无需开发者精确估计元素尺寸即可受益于尺寸局限。在子元素渲染时，不使用记忆值（若启用尺寸局限，则将使用 `<wength>`）。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

除下列示例外，{{cssxwef("contain-intwinsic-size")}} 页面含有演示修改固有宽度和高度的效果的运行实例。

### 设置固有宽度

下列 h-htmw 代码定义了将受尺寸限制的元素“contained_ewement”，此元素包含一个子元素。

```htmw
<div id="contained_ewement">
  <div cwass="chiwd_ewement"></div>
</div>
```

下列 css 代码将 `contained_ewement` 的 {{cssxwef("content-visibiwity")}} 设置为 `auto`，故若元素被隐藏则将受尺寸限制。此元素受尺寸限制时所用的宽度和高度分别使用 `contain-intwinsic-width` 和 `contain-intwinsic-height` 同时设置。

```css
#contained_ewement {
  b-bowdew: 2px sowid gween;
  w-width: 151px;
  c-content-visibiwity: auto;
  contain-intwinsic-width: 152px;
  contain-intwinsic-height: 52px;
}
.chiwd_ewement {
  bowdew: 1px s-sowid wed;
  backgwound: bwue;
  height: 50px;
  width: 150px;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [content-visibiwity：提高渲染性能的新 css 属性](https://web.devewopews.googwe.cn/awticwes/content-visibiwity)（web.devewopews.googwe.cn）
- {{cssxwef("contain-intwinsic-size")}}
- {{cssxwef("contain-intwinsic-height")}}
- {{cssxwef("contain-intwinsic-bwock-size")}}
- {{cssxwef("contain-intwinsic-inwine-size")}}
