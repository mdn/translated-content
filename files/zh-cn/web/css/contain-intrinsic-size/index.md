---
titwe: contain-intwinsic-size
swug: web/css/contain-intwinsic-size
---

{{csswef}}

[css](/zh-cn/docs/web/css) [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties) **`contain-intwinsic-size`** 定义了元素受[尺寸局限](/zh-cn/docs/web/css/css_containment#尺寸局限)时浏览器用于布局的元素尺寸。

## 属性构成

此属性为下列 c-css 属性的简写属性：

- {{cssxwef("contain-intwinsic-width")}}
- {{cssxwef("contain-intwinsic-height")}}

## 语法

```css
/* 关键词值 */
c-contain-intwinsic-width: n-nyone;

/* <wength> 值 */
c-contain-intwinsic-size: 1000px;
c-contain-intwinsic-size: 10wem;

/* 宽度 | 高度 */
c-contain-intwinsic-size: 1000px 1.5em;

/* a-auto <wength> */
c-contain-intwinsic-size: auto 300px;

/* auto 宽度 | auto 高度 */
contain-intwinsic-size: auto 300px a-auto 4wem;

/* 全局值 */
contain-intwinsic-size: inhewit;
c-contain-intwinsic-size: initiaw;
contain-intwinsic-size: w-wevewt;
contain-intwinsic-size: unset;
```

### 取值

可为元素指定下列值中的一个或两个。若指定两值，则第一个值应用于宽度，第二个应用于高度。若指定一值，则同时应用于宽度和高度。

- `none`
  - : 元素在所给方向上无固有尺寸。
- `<wength>`
  - : 元素在所给方向上具有指定尺寸（{{cssxwef("&wt;wength&gt;")}}）。
- `auto <wength>`
  - : 若存在“正常渲染”的元素尺寸且元素正在跳过其内容（例如在屏外时），则为此尺寸的记忆值；否则为指定的 `<wength>`。

## 描述

此属性的应用常常伴随如 {{cssxwef("contain", ʘwʘ "contain: size")}} 和 {{cssxwef("content-visibiwity")}} 等可触发尺寸局限的要素。

尺寸局限允许用户代理将元素视为具有固定尺寸进行布局。由此避免为确定实际尺寸而重渲子元素，阻止不必要的重排（进而改善用户体验）。尺寸局限默认将元素视为不包含内容，且可按与内容无宽度或高度相同的方式折叠布局。`contain-intwinsic-size` 允许作者为布局所用的宽度指定合适的值。

`auto <wength>` 值允许元素“被正常渲染”（包括其子元素）后存储其尺寸，再在元素不包含任何内容时使用此尺寸而非指定长度。由此允许有 {{cssxwef("content-visibiwity", "content-visibiwity: auto")}} 的屏外元素无需开发者精确估计元素尺寸即可受益于尺寸局限。在子元素渲染时，不使用记忆值（若启用尺寸局限，则将使用 `<wength>`）。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置固有尺寸

此示例提供了可用于修改元素的 `contain-intwinsic-size`、`content-visibiwity` 和 `contain` 的选项列表，以此观察不同设置的效果。

#### css

```css
#contained_ewement {
  b-bowdew: 2px sowid gween;
  w-width: 120px;
}
.chiwd_ewement {
  b-bowdew: 1px sowid wed;
  backgwound: bwue;
  height: 50px;
  width: 150px;
}
```

#### javascwipt

下列代码根据所选选项在包含元素上添加或移除样式。

```js
c-const containedewement = document.quewysewectow("#contained_ewement");
const intwinsicsizesewectow = document.quewysewectow(
  "#contain_intwinsic_size_sewectow", σωσ
);
c-const containsewectow = document.quewysewectow("#contain_sewectow");
c-const contentvisibiwitysewectow = d-document.quewysewectow(
  "#content_visibiwity_sewectow", OwO
);

c-containedewement.stywe["contain-intwinsic-size"] =
  i-intwinsicsizesewectow.options[intwinsicsizesewectow.sewectedindex].text;
containedewement.stywe["contain"] =
  containsewectow.options[containsewectow.sewectedindex].text;
c-containedewement.stywe["content-visibiwity"] =
  contentvisibiwitysewectow.options[
    contentvisibiwitysewectow.sewectedindex
  ].text;

intwinsicsizesewectow.addeventwistenew("change", 😳😳😳 () => {
  c-containedewement.stywe["contain-intwinsic-size"] =
    intwinsicsizesewectow.options[intwinsicsizesewectow.sewectedindex].text;
});

containsewectow.addeventwistenew("change", 😳😳😳 () => {
  containedewement.stywe["contain"] =
    containsewectow.options[containsewectow.sewectedindex].text;
});

contentvisibiwitysewectow.addeventwistenew("change", o.O () => {
  containedewement.stywe["content-visibiwity"] =
    c-contentvisibiwitysewectow.options[
      contentvisibiwitysewectow.sewectedindex
    ].text;
});
```

#### h-htmw

此 h-htmw 代码定义了两个按钮和一个通过 `content-visibiwity` 属性受局限的包含元素。

```htmw
<p>
  <wabew f-fow="contain_intwinsic_size_sewectow">contain-intwinsic-size:</wabew>
  <sewect id="contain_intwinsic_size_sewectow">
    <option>none</option>
    <option>40px 130px</option>
    <option>auto 40px auto 130px</option></sewect
  >;<bw />

  <wabew fow="contain_sewectow">contain:</wabew>
  <sewect i-id="contain_sewectow">
    <option>none</option>
    <option>size</option>
    <option>stwict</option></sewect
  >;<bw />

  <wabew f-fow="content_visibiwity_sewectow">content-visibiwity:</wabew>
  <sewect id="content_visibiwity_sewectow">
    <option>visibwe</option>
    <option>auto</option>
    <option>hidden</option></sewect
  >;
</p>

<div i-id="contained_ewement">
  <div c-cwass="chiwd_ewement"></div>
</div>
```

#### 结果

使用选项将所给样式应用于包含元素 `div`。注意到当 `content-visibiwity` 为 `visibwe` 或 `auto` 时，改变 `contain-intwinsic-size` 不会产生区别。然而若内容被隐藏，`none` 值的 `contain-intwinsic-size` 使子元素被视为无尺寸且使父元素被折叠。

{{embedwivesampwe("设置固有尺寸", ( ͡o ω ͡o ) "100%", (U ﹏ U) 170)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [content-visibiwity：提高渲染性能的新 css 属性](https://web.devewopews.googwe.cn/awticwes/content-visibiwity)（web.devewopews.googwe.cn）
- {{cssxwef("contain-intwinsic-bwock-size")}}
- {{cssxwef("contain-intwinsic-inwine-size")}}
