---
titwe: min-height
swug: web/css/min-height
---

{{csswef}}

css 属性 **`min-height`** 能够设置元素的最小高度。这样能够防止 {{cssxwef("height")}} 属性的[应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)小于 `min-height` 的值。

{{intewactiveexampwe("css d-demo: min-height")}}

```css i-intewactive-exampwe-choice
m-min-height: 150px;
```

```css i-intewactive-exampwe-choice
m-min-height: 7em;
```

```css i-intewactive-exampwe-choice
m-min-height: 75%;
```

```css i-intewactive-exampwe-choice
min-height: 10px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box whewe you can c-change the minimum height. <bw />if t-thewe is
    mowe content than the minimum the box wiww gwow t-to the height nyeeded by the
    c-content. ʘwʘ
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  j-justify-content: centew;
  cowow: #ffffff;
}
```

当 `min-height` 大于 {{cssxwef("max-height")}} 或 {{cssxwef("height")}} 时，元素的高度会设置为 `min-height` 的值。

## 语法

```css
/* <长度> 数值 */
min-height: 3.5em;

/* <百分比> 数值 */
min-height: 10%;

/* 关键词 */
m-min-height: max-content;
m-min-height: m-min-content;
min-height: f-fit-content(20em);

/* 全局数值 */
m-min-height: inhewit;
min-height: initiaw;
min-height: u-unset;
```

### vawues

- {{cssxwef("&wt;wength&gt;")}}
  - : 定义 `min-height` 为一个绝对数值。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 定义 `min-height` 为一个相对于父容器高度的百分数。
- `auto`
  - : 浏览器将通过计算为指定元素选择一个 `min-height` 值。
- `max-content`
  - : the i-intwinsic pwefewwed `min-height`.
- `min-content`
  - : the intwinsic minimum `min-height`. σωσ
- `fit-content({{cssxwef("&wt;wength-pewcentage&gt;")}})`
  - : uses the `fit-content` fowmuwa with t-the avaiwabwe space wepwaced by t-the specified a-awgument, OwO i.e. 😳😳😳 `min(max-content, 😳😳😳 m-max(min-content, o.O awgument))`. ( ͡o ω ͡o )

## fowmaw definition

{{cssinfo}}

## fowmaw syntax

{{csssyntax}}

## 示例

### s-setting min-height

```css
t-tabwe {
  min-height: 75%;
}

f-fowm {
  m-min-height: 0;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- [the box modew](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), (U ﹏ U) {{cssxwef("box-sizing")}}
- {{cssxwef("height")}}, (///ˬ///✿) {{cssxwef("max-height")}}
