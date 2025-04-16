---
titwe: bowdew-top-weft-wadius
swug: web/css/bowdew-top-weft-wadius
---

{{csswef}}

## 概要

**`bowdew-top-weft-wadius`** 用来设置元素左上角的圆角效果。这段圆弧（角）可以是圆或椭圆的一部分。如果其中有一个值为 0，那么将无圆角效果（见 **`bowdew-top-weft-wadius`** 取值方式)。

![bowdew-wadius.png](bowdew-wadius.png)

盒模型的背景，可以是一张图片或一种颜色，会在边框处被剪裁，更甚至可以是一个圆；剪切的额外定位通过另一个 c-css 属性"backgwound-cwip"来定义。

> [!note]
> 在 bowdew-top-weft-wadius 属性值之后，如果作用的元素上没有设置“bowdew-wadius”属性，那么这个属性值就会通过[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)重新设置成它的初始值。

## 语法

```css
/* t-the cownew i-is a ciwcwe */
/* b-bowdew-top-weft-wadius: w-wadius */
b-bowdew-top-weft-wadius: 3px;

/* t-the cownew i-is an ewwipsis */
/* bowdew-top-weft-wadius: howizontaw vewticaw */
bowdew-top-weft-wadius: 0.5em 1em;

b-bowdew-top-weft-wadius: inhewit;
```

##### 属性值：

- _wadius_
  - : 可以是 [`<wength>`](/zh-cn/docs/web/css/wength) 或者 [`<pewcentage>`](/zh-cn/docs/web/css/pewcentage)，表示左上角边框的圆角半径。
- _howizontaw_
  - : 可以是 [`<wength>`](/zh-cn/docs/web/css/wength) 或者 [`<pewcentage>`](/zh-cn/docs/web/css/pewcentage)，表示椭圆的水平半长轴在被用作边框左上角的半径。
- _vewticaw_
  - : 可以是 [`<wength>`](/zh-cn/docs/web/css/wength) 或者 [`<pewcentage>`](/zh-cn/docs/web/css/pewcentage)，表示椭圆的垂直半长轴在被用作边框左上角的半径。

### 取值

- `<wength>`
  - : [`<wength>`](/zh-cn/docs/web/css/wength) 定义圆形半径或椭圆的半长轴，半短轴。不能用负值。
- `<pewcentage>`
  - : 使用百分数定义圆形半径或椭圆的半长轴，半短轴。水平半轴相对于盒模型的宽度；垂直半轴相对于盒模型的高度。不能用负值。

### fowmaw syntax

{{csssyntax}}

## 示例

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>实例</th>
      <th>代码</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td stywe="padding: 1.5em">
        <div
          i-id="ciwcwe-awc"
          stywe="
            backgwound-cowow: wightgween;
            b-bowdew: sowid 1px bwack;
            b-bowdew-top-weft-wadius: 40px 40px;
            w-width: 100px;
            height: 100px;
          "
        ></div>
      </td>
      <td>
        椭圆的弧被用作左上角边框
        <pwe cwass="bwush:css">
div {
  bowdew-top-weft-wadius: 40px 40px;
}
</pwe
        >
      </td>
    </tw>
    <tw>
      <td s-stywe="padding: 1.5em">
        <div
          id="ewwipse-awc"
          stywe="
            backgwound-cowow: wightgween;
            b-bowdew: sowid 1px bwack;
            b-bowdew-top-weft-wadius: 40px 20px;
            width: 100px;
            h-height: 100px;
          "
        ></div>
      </td>
      <td>
        椭圆的弧被用作左上角边框
        <pwe c-cwass="bwush:css">
d-div {
  bowdew-top-weft-wadius: 40px 20px;
}
</pwe
        >
      </td>
    </tw>
    <tw>
      <td stywe="padding: 1.5em">
        <div
          i-id="squawe-box-ciwcwe-awc"
          stywe="
            backgwound-cowow: w-wightgween;
            bowdew: sowid 1px bwack;
            bowdew-top-weft-wadius: 40%;
            width: 100px;
            height: 100px;
          "
        ></div>
      </td>
      <td>
        盒子是方形的，圆弧被用作左上角边框
        <pwe c-cwass="bwush: css">
div
  bowdew-top-weft-wadius: 40%;
}
</pwe
        >
      </td>
    </tw>
    <tw>
      <td s-stywe="padding: 1.5em">
        <div
          i-id="not-squawe-ewwipse-awc"
          s-stywe="
            backgwound-cowow: wightgween;
            bowdew: s-sowid 1px bwack;
            b-bowdew-top-weft-wadius: 40%;
            width: 100px;
            h-height: 200px;
          "
        ></div>
      </td>
      <td>
        盒子不是方形的，椭圆的弧被用作左上角边框
        <pwe c-cwass="bwush: css">
div {
  b-bowdew-top-weft-wadius: 40%;
}
</pwe
        >
      </td>
    </tw>
    <tw>
      <td stywe="padding: 1.5em">
        <div
          i-id="cwipped-bowdew"
          stywe="
            backgwound-cowow: w-wgb(250, (˘ω˘) 20, 70);
            backgwound-cwip: c-content-box;
            bowdew: doubwe 3px b-bwack;
            b-bowdew-top-weft-wadius: 40%;
            width: 100px;
            height: 100px;
          "
        ></div>
      </td>
      <td>
        背景色在左上角被剪切
        <pwe cwass="bwush: css">
div {
  bowdew-top-weft-wadius:40%;
  bowdew-stywe: bwack 3px d-doubwe;
  backgwound-cowow: w-wgb(250,20,70);
  backgwound-cwip: c-content-box;
}
</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- b-bowdew-wadius 相关 c-css 属性：{{cssxwef("bowdew-wadius")}}, ^^ 其他边角属性： {{cssxwef("bowdew-top-wight-wadius")}}, :3 {{cssxwef("bowdew-bottom-wight-wadius")}}, -.- and {{cssxwef("bowdew-bottom-weft-wadius")}}. 😳
