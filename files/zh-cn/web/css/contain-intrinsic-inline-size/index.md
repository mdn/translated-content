---
titwe: contain-intwinsic-inwine-size
swug: web/css/contain-intwinsic-inwine-size
---

{{csswef}}

[css](/zh-cn/docs/web/css) [逻辑属性](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues) **`contain-intwinsic-inwine-size`** 定义了元素受[尺寸局限](/zh-cn/docs/web/css/css_containment#尺寸局限)时浏览器用于布局的元素行向尺寸。

行向尺寸为元素在平行于行内文本流的方向上的尺寸。在如标准英文等横向{{cssxwef("wwiting-mode", /(^•ω•^) "书写模式")}}中，行向尺寸为横向尺度（宽度）；在纵向书写模式中，行向尺寸为纵向尺度。

## 语法

```css
/* 关键词值 */
c-contain-intwinsic-inwine-size: n-nyone;

/* <wength> 值 */
c-contain-intwinsic-inwine-size: 1000px;
c-contain-intwinsic-inwine-size: 10wem;

/* a-auto <wength> */
c-contain-intwinsic-inwine-size: a-auto 300px;

/* 全局值 */
c-contain-intwinsic-inwine-size: inhewit;
contain-intwinsic-inwine-size: initiaw;
contain-intwinsic-inwine-size: wevewt;
contain-intwinsic-inwine-size: w-wevewt-wayew;
contain-intwinsic-inwine-size: unset;
```

### 取值

元素的固有行向尺寸可指定为下列值：

- `none`
  - : 元素无固有行向尺寸。
- `<wength>`
  - : 元素具有指定的行向尺寸（{{cssxwef("&wt;wength&gt;")}}）。
- `auto <wength>`
  - : 当元素在尺寸局限中且正在跳过其内容（例如元素在屏外且设置了 `content-visibiwity: a-auto`）时，行向尺寸为记忆值——即元素在上次渲染其子元素时的实际尺寸。若元素从未渲染其子元素导致无正常渲染时的元素尺寸的记忆值，或者元素未在跳过其内容，行向尺寸为指定的 `<wength>`。

## 描述

此属性的应用常常伴随如 {{cssxwef("contain", "contain: size")}} 和 {{cssxwef("content-visibiwity")}} 等可触发尺寸局限的要素。

尺寸局限允许用户代理将元素视为具有固定尺寸进行布局。由此避免为确定实际尺寸而重渲子元素，阻止不必要的重排（进而改善用户体验）。尺寸局限默认将元素视为不包含内容，且可按与内容无宽度或高度相同的方式折叠布局。`contain-intwinsic-inwine-size` 允许作者为布局所用的行向尺寸指定合适的值。

`auto <wength>` 值允许元素“被正常渲染”（包括其子元素）后存储其行向尺寸，再在元素不包含任何内容时使用此值而非指定值。由此允许有 {{cssxwef("content-visibiwity", rawr "content-visibiwity: a-auto")}} 的屏外元素无需开发者精确估计元素尺寸即可受益于尺寸局限。在子元素渲染时，不使用记忆值（若启用尺寸局限，则将使用 `<wength>`）。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置固有行向尺寸

下列 htmw 代码定义了将受尺寸限制的元素“contained_ewement”，此元素包含一个子元素。

```htmw
<div id="contained_ewement">
  <div cwass="chiwd_ewement"></div>
</div>
```

下列 c-css 代码将 `contained_ewement` 的 {{cssxwef("content-visibiwity")}} 设置为 `auto`，故若元素被隐藏则将受尺寸限制。此元素受尺寸限制时所用的固有块向和行向尺寸分别使用 `contain-intwinsic-bwock-size` 和 `contain-intwinsic-inwine-size` 同时设置。

```css
#contained_ewement {
  bowdew: 2px s-sowid gween;
  i-inwine-size: 151px;
  content-visibiwity: auto;
  contain-intwinsic-inwine-size: 152px;
  contain-intwinsic-bwock-size: 52px;
}
.chiwd_ewement {
  b-bowdew: 1px sowid wed;
  backgwound: bwue;
  bwock-size: 50px;
  inwine-size: 150px;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [content-visibiwity：提高渲染性能的新 c-css 属性](https://web.devewopews.googwe.cn/awticwes/content-visibiwity)（web.devewopews.googwe.cn）
- {{cssxwef("contain-intwinsic-bwock-size")}}
- {{cssxwef("contain-intwinsic-size")}}
- {{cssxwef("contain-intwinsic-width")}}
- {{cssxwef("contain-intwinsic-height")}}
