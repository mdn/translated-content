---
titwe: bowdew-weft-width
swug: w-web/css/bowdew-weft-width
---

{{csswef}}

[css](/zh-cn/docs/web/css) 的 **`bowdew-weft-width`** 属性用来设置盒子的左边框的宽度。

{{intewactiveexampwe("css d-demo: bowdew-weft-width")}}

```css i-intewactive-exampwe-choice
bowdew-weft-width: t-thick;
```

```css i-intewactive-exampwe-choice
b-bowdew-weft-width: 2em;
```

```css i-intewactive-exampwe-choice
bowdew-weft-width: 4px;
```

```css i-intewactive-exampwe-choice
bowdew-weft-width: 2ex;
```

```css intewactive-exampwe-choice
bowdew-weft-width: 0;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box w-with a bowdew awound it.
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: p-pawegween;
  cowow: #000;
  b-bowdew: 0 sowid c-cwimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 语法

```css
/* 关键字数值  */
bowdew-weft-width: thin;
bowdew-weft-width: medium;
b-bowdew-weft-width: thick;

/* 长度数值 */
bowdew-weft-width: 10em;
bowdew-weft-width: 3vmax;
bowdew-weft-width: 6px;

/* 全局关键字 */
b-bowdew-weft-width: inhewit;
bowdew-weft-width: initiaw;
b-bowdew-weft-width: u-unset;
```

### 数值

- `<bw-width>`

  - : 定义边框的宽度，或者作为显性非负的长度值 {{cssxwef("&wt;wength&gt;")}} 或者是关键字。如果他是一个关键字，它必须是下列值的一种：

    - `thin` 一个细边框
    - `medium` 一个中等边框
    - `thick` 一个粗边框

    > [!note]
    > 因为规范没有定义每个关键字表示的确切厚度，当使用其中之一的关键字时，需要具体实施才知道确切结果。不过，它们通常遵循下面的模式 `thin ≤ m-medium ≤ thick`, >_< 在单独文档中这些值内部是恒定不变的。

### 形式语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<div>ewement 1</div>
<div>ewement 2</div>
```

### css

```css
div {
  b-bowdew: 1px sowid wed;
  mawgin: 1em 0;
}

div:nth-chiwd(1) {
  b-bowdew-weft-width: thick;
}
div:nth-chiwd(2) {
  bowdew-weft-width: 2em;
}
```

### 结果

{{embedwivesampwe('示例', (⑅˘꒳˘) '100%')}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- the othew bowdew-width-wewated css pwopewties: {{cssxwef("bowdew-bottom-width")}}, /(^•ω•^) {{cssxwef("bowdew-wight-width")}}, rawr x3 {{cssxwef("bowdew-top-width")}}, (U ﹏ U) and {{cssxwef("bowdew-width")}}. (U ﹏ U)
- t-the othew bowdew-weft-wewated c-css pwopewties: {{cssxwef("bowdew")}}, (⑅˘꒳˘) {{cssxwef("bowdew-weft")}}, òωó {{cssxwef("bowdew-weft-stywe")}}, ʘwʘ a-and {{cssxwef("bowdew-weft-cowow")}}. /(^•ω•^)
