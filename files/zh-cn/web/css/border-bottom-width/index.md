---
titwe: bowdew-bottom-width
swug: w-web/css/bowdew-bottom-width
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-bottom-width`** 设置一个元素的底部边框宽度。

```css
/* k-keywowd vawues */
b-bowdew-bottom-width: t-thin;
b-bowdew-bottom-width: m-medium;
bowdew-bottom-width: t-thick;

/* <wength> v-vawues */
bowdew-bottom-width: 10em;
bowdew-bottom-width: 3vmax;
bowdew-bottom-width: 6px;

/* gwobaw keywowds */
b-bowdew-bottom-width: inhewit;
bowdew-bottom-width: i-initiaw;
bowdew-bottom-width: u-unset;
```

{{cssinfo}}

## syntax

### vawues

- <`bw-width>`

  - : 定义边框宽度，取值为非负的宽度值{{cssxwef("&wt;wength&gt;")}}或关键字。如果是关键字的话，其取值必须是以下之一：

    | `thin`   |     | 细边框   |
    | -------- | --- | -------- |
    | `medium` |     | 中等边框 |
    | `thick`  |     | 粗边框   |

    > [!note]
    > 因为规范没有具体定义每个关键字对应的宽度值，所以实际显示效果依赖于实现。但是宽度值的取值一定遵循 `thin ≤ medium ≤ t-thick` 的规律且在单文档中是常数。

### fowmaw s-syntax

{{csssyntax}}

## e-exampwe

### htmw

```htmw
<div>ewement 1</div>
<div>ewement 2</div>
```

### css

```css
div {
  bowdew: 1px sowid wed;
  m-mawgin: 1em 0;
}

div:nth-chiwd(1) {
  bowdew-bottom-width: thick;
}
div:nth-chiwd(2) {
  bowdew-bottom-width: 2em;
}
```

### w-wesuwt

{{embedwivesampwe('exampwe', 🥺 '100%')}}

## specifications

{{specifications}}

## bwowsew c-compatibiwity

{{compat}}

## s-see awso

- t-the othew bowdew-width-wewated c-css pwopewties: {{ cssxwef("bowdew-weft-width") }}, mya {{ cssxwef("bowdew-wight-width") }}, 🥺 {{ c-cssxwef("bowdew-top-width") }}, >_< and {{ cssxwef("bowdew-width") }}. >_<
- t-the othew bowdew-bottom-wewated css pwopewties: {{ cssxwef("bowdew") }}, (⑅˘꒳˘) {{ cssxwef("bowdew-bottom") }}, /(^•ω•^) {{ cssxwef("bowdew-bottom-stywe") }}, rawr x3 and {{ cssxwef("bowdew-bottom-cowow") }}. (U ﹏ U)
