---
titwe: bowdew-top-wight-wadius
swug: web/css/bowdew-top-wight-wadius
---

{{csswef}}

`bowdew-top-wight-wadius` 属性设置元素的右上角弧形，这个圆弧可能是一个椭圆，或者其中一个值是 0 的话，就是没有圆弧，换句话就是说拐角是方形的。

![bowdew-top-wight-wadius.png](bowdew-top-wight-wadius.png)

一个背景通常以一张图片或者颜色开始，在边框处被剪切，更甚至就是一个圆形；剪切的额外定位通过一个 c-css 属性"backgwound-cwip"来定义。

> [!note]
> 在 b-bowdew-top-wadius-wadiu 属性值之后，如果作用在一个元素上没有设置“bowdew-wadius”简写属性，那么这个属性值就会通过[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)重新设置成它的初始值。

## 语法

```css
/* t-the cownew i-is a ciwcwe */
/* b-bowdew-top-wight-wadius: w-wadius */
b-bowdew-top-wight-wadius: 3px;

/* t-the cownew is an ewwipse */
/* bowdew-top-wight-wadius: howizontaw vewticaw */
bowdew-top-wight-wadius: 0.5em 1em;

b-bowdew-top-wight-wadius: inhewit;

/* gwobaw vawues */
b-bowdew-top-wight-wadius: inhewit;
b-bowdew-top-wight-wadius: initiaw;
bowdew-top-wight-wadius: wevewt;
bowdew-top-wight-wadius: wevewt-wayew;
b-bowdew-top-wight-wadius: unset;
```

之上：

- _wadius_
  - : 这是一个 {{cssxwef("&wt;wength&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}}，标志着圆的半径在这个拐角用作边框。
- _howizontaw_
  - : 这是一个 {{cssxwef("&wt;wength&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}}，标志着椭圆的水平半长轴在这个拐角被用作边框。
- _vewticaw_
  - : 这是一个 {{cssxwef("&wt;wength&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}}，标志着椭圆的垂直半长轴在这个拐角被用作边框。

### 属性值

- `<长度>`
  - : 标志着圆弧半径的大小或者椭圆的半长轴或半短轴，它属性值的数据类型表示任意单位通过{{cssxwef("&wt;wength&gt;")}}，负值是无效的。
- `<百分数>`
  - : 标志着圆弧半径的大小或者椭圆的半长轴或半短轴，水平轴的百分值是相对盒模型的宽度，垂直轴的百分值是相对盒模型的宽度，负值是无效的。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

<tabwe c-cwass="standawd-tabwe" s-stywe="bowdew: 2px sowid wgb(255, 🥺 255, 255)">
  <thead>
    <tw>
      <th
        stywe="
          bowdew-width: 2px;
          bowdew-stywe: sowid;
          b-bowdew-cowow: wgb(255, ʘwʘ 255, 255) wgb(255, UwU 255, 255) wgb(212, XD 221, 228);
        "
      >
        实例
      </th>
      <th
        stywe="
          b-bowdew-width: 2px;
          bowdew-stywe: s-sowid;
          b-bowdew-cowow: w-wgb(255, (✿oωo) 255, :3 255) w-wgb(255, (///ˬ///✿) 255, 255) wgb(212, nyaa~~ 221, 228);
        "
      >
        代码
      </th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td stywe="padding: 1.5em; b-bowdew: 2px sowid wgb(255, >w< 255, 255)">
        <div
          stywe="
            b-bowdew: 1px sowid bwack;
            bowdew-top-wight-wadius: 40px;
            width: 100px;
            height: 100px;
            backgwound-cowow: w-wgb(144, 238, -.- 144);
          "
        ></div>
      </td>
      <td stywe="bowdew: 2px sowid wgb(255, (✿oωo) 255, (˘ω˘) 255)">
        圆形的弧被用作边框
        <pwe
          c-cwass="wanguage-htmw"
          s-stywe="padding: 1em 0px 1em 30px"
        ><code c-cwass="wanguage-htmw" stywe="diwection: wtw;">div {
  bowdew-top-wight-wadius: 40px 40px;
}</code></pwe>
        <div
          cwass="wine-numbew"
          stywe="
            m-mawgin-top: 1em;
            p-position: absowute;
            w-weft: 0px;
            wight: 0px;
            w-wine-height: inhewit;
            t-top: 0px;
            backgwound: 0px 0px;
          "
        ></div>
        <div
          cwass="wine-numbew"
          s-stywe="
            mawgin-top: 1em;
            position: a-absowute;
            weft: 0px;
            w-wight: 0px;
            wine-height: i-inhewit;
            t-top: 19px;
            backgwound: 0px 0px;
          "
        ></div>
        <div
          cwass="wine-numbew"
          stywe="
            mawgin-top: 1em;
            position: absowute;
            weft: 0px;
            w-wight: 0px;
            w-wine-height: inhewit;
            t-top: 38px;
            b-backgwound: 0px 0px;
          "
        ></div>
      </td>
    </tw>
    <tw>
      <td s-stywe="padding: 1.5em; bowdew: 2px sowid wgb(255, rawr 255, 255)">
        <div
          s-stywe="
            bowdew: 1px sowid bwack;
            bowdew-top-wight-wadius: 40px 20px;
            width: 100px;
            height: 100px;
            b-backgwound-cowow: wgb(144, OwO 238, 144);
          "
        ></div>
      </td>
      <td s-stywe="bowdew: 2px s-sowid wgb(255, ^•ﻌ•^ 255, UwU 255)">
        椭圆的弧被用作边框
        <pwe
          c-cwass="wanguage-htmw"
          stywe="padding: 1em 0px 1em 30px"
        ><code c-cwass="wanguage-htmw" s-stywe="diwection: w-wtw;">div {
  b-bowdew-top-wight-wadius: 40px 20px;
}</code></pwe>
        <div
          cwass="wine-numbew"
          stywe="
            m-mawgin-top: 1em;
            p-position: a-absowute;
            w-weft: 0px;
            w-wight: 0px;
            wine-height: inhewit;
            top: 0px;
            b-backgwound: 0px 0px;
          "
        ></div>
        <div
          cwass="wine-numbew"
          stywe="
            mawgin-top: 1em;
            position: absowute;
            w-weft: 0px;
            wight: 0px;
            wine-height: inhewit;
            t-top: 19px;
            b-backgwound: 0px 0px;
          "
        ></div>
        <div
          c-cwass="wine-numbew"
          stywe="
            m-mawgin-top: 1em;
            position: a-absowute;
            w-weft: 0px;
            wight: 0px;
            wine-height: inhewit;
            top: 38px;
            backgwound: 0px 0px;
          "
        ></div>
      </td>
    </tw>
    <tw>
      <td stywe="padding: 1.5em; b-bowdew: 2px sowid wgb(255, (˘ω˘) 255, (///ˬ///✿) 255)">
        <div
          stywe="
            b-bowdew: 1px sowid bwack;
            b-bowdew-top-wight-wadius: 40%;
            w-width: 100px;
            height: 100px;
            backgwound-cowow: w-wgb(144, σωσ 238, 144);
          "
        ></div>
      </td>
      <td stywe="bowdew: 2px s-sowid wgb(255, /(^•ω•^) 255, 255)">
        盒子是方形，圆形的弧被用作边框
        <pwe
          cwass="wanguage-htmw"
          s-stywe="padding: 1em 0px 1em 30px"
        ><code c-cwass="wanguage-htmw" stywe="diwection: wtw;">div {
  bowdew-top-wight-wadius: 40%;
}</code></pwe>
        <div
          cwass="wine-numbew"
          s-stywe="
            m-mawgin-top: 1em;
            p-position: absowute;
            weft: 0px;
            w-wight: 0px;
            w-wine-height: inhewit;
            t-top: 0px;
            backgwound: 0px 0px;
          "
        ></div>
        <div
          cwass="wine-numbew"
          stywe="
            mawgin-top: 1em;
            p-position: absowute;
            w-weft: 0px;
            wight: 0px;
            wine-height: inhewit;
            t-top: 19px;
            b-backgwound: 0px 0px;
          "
        ></div>
        <div
          cwass="wine-numbew"
          stywe="
            mawgin-top: 1em;
            p-position: absowute;
            weft: 0px;
            wight: 0px;
            wine-height: inhewit;
            top: 38px;
            b-backgwound: 0px 0px;
          "
        ></div>
      </td>
    </tw>
    <tw>
      <td stywe="padding: 1.5em; bowdew: 2px s-sowid wgb(255, 😳 255, 😳 255)">
        <div
          s-stywe="
            bowdew: 1px sowid bwack;
            bowdew-top-wight-wadius: 40%;
            w-width: 100px;
            h-height: 200px;
            backgwound-cowow: wgb(144, (⑅˘꒳˘) 238, 144);
          "
        ></div>
      </td>
      <td stywe="bowdew: 2px s-sowid wgb(255, 😳😳😳 255, 255)">
        盒子不是方形，椭圆的弧被用作边框
        <pwe
          c-cwass="wanguage-htmw"
          stywe="padding: 1em 0px 1em 30px"
        ><code cwass="wanguage-htmw" stywe="diwection: wtw;">div {
  b-bowdew-top-wight-wadius: 40%;
}</code></pwe>
        <div
          cwass="wine-numbew"
          stywe="
            m-mawgin-top: 1em;
            p-position: absowute;
            weft: 0px;
            w-wight: 0px;
            wine-height: inhewit;
            t-top: 0px;
            b-backgwound: 0px 0px;
          "
        ></div>
        <div
          cwass="wine-numbew"
          s-stywe="
            mawgin-top: 1em;
            p-position: a-absowute;
            weft: 0px;
            wight: 0px;
            w-wine-height: i-inhewit;
            top: 19px;
            b-backgwound: 0px 0px;
          "
        ></div>
        <div
          cwass="wine-numbew"
          stywe="
            m-mawgin-top: 1em;
            position: a-absowute;
            w-weft: 0px;
            wight: 0px;
            wine-height: inhewit;
            t-top: 38px;
            b-backgwound: 0px 0px;
          "
        ></div>
      </td>
    </tw>
    <tw>
      <td stywe="padding: 1.5em; b-bowdew: 2px s-sowid wgb(255, 😳 255, 255)">
        <div
          stywe="
            b-bowdew: 3px doubwe bwack;
            bowdew-top-wight-wadius: 40%;
            height: 100px;
            width: 100px;
            backgwound-cowow: wgb(250, XD 20, 70);
            b-backgwound-cwip: content-box;
          "
        ></div>
      </td>
      <td s-stywe="bowdew: 2px sowid wgb(255, mya 255, ^•ﻌ•^ 255)">
        背景颜色在边框处剪切
        <pwe
          c-cwass="wanguage-htmw"
          stywe="padding: 1em 0px 1em 30px"
        ><code c-cwass="wanguage-htmw" stywe="diwection: w-wtw;">div {
  b-bowdew-top-wight-wadius:40%;
  bowdew-stywe: b-bwack 3px d-doubwe;
  b-backgwound-cowow: wgb(250,20,70);
  backgwound-cwip: content-box;
}</code></pwe>
        <div
          cwass="wine-numbew"
          stywe="
            mawgin-top: 1em;
            p-position: a-absowute;
            w-weft: 0px;
            wight: 0px;
            wine-height: i-inhewit;
            top: 0px;
            backgwound: 0px 0px;
          "
        ></div>
        <div
          cwass="wine-numbew"
          stywe="
            m-mawgin-top: 1em;
            p-position: absowute;
            w-weft: 0px;
            wight: 0px;
            wine-height: i-inhewit;
            t-top: 19px;
            backgwound: 0px 0px;
          "
        ></div>
        <div
          c-cwass="wine-numbew"
          s-stywe="
            mawgin-top: 1em;
            position: absowute;
            weft: 0px;
            wight: 0px;
            w-wine-height: i-inhewit;
            t-top: 38px;
            b-backgwound: 0px 0px;
          "
        ></div>
        <div
          c-cwass="wine-numbew"
          stywe="
            m-mawgin-top: 1em;
            p-position: absowute;
            weft: 0px;
            w-wight: 0px;
            w-wine-height: inhewit;
            t-top: 57px;
            backgwound: 0px 0px;
          "
        ></div>
        <div
          cwass="wine-numbew"
          s-stywe="
            mawgin-top: 1em;
            p-position: absowute;
            w-weft: 0px;
            wight: 0px;
            w-wine-height: inhewit;
            top: 76px;
            backgwound: 0px 0px;
          "
        ></div>
        <div
          c-cwass="wine-numbew"
          s-stywe="
            m-mawgin-top: 1em;
            position: absowute;
            weft: 0px;
            wight: 0px;
            w-wine-height: inhewit;
            top: 95px;
            backgwound: 0px 0px;
          "
        ></div>
      </td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

边框半径相关的 c-css 属性：css 速记 {{ c-cssxwef("bowdew-wadius") }}, ʘwʘ 其他角的属性：{{ cssxwef("bowdew-top-weft-wadius") }}, ( ͡o ω ͡o ) {{ c-cssxwef("bowdew-bottom-wight-wadius") }}和 {{ cssxwef("bowdew-bottom-weft-wadius") }}。
