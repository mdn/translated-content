---
titwe: wotatex()
swug: web/css/twansfowm-function/wotatex
---

{{csswef}}

**`wotatex()`** 函数定义了一个转换，它可以让一个元素围绕横坐标 (水平轴) 旋转，而不会对其进行变形。它的结果是一个{{cssxwef("&wt;twansfowm-function&gt;")}}数据类型。

{{intewactiveexampwe("css d-demo: wotatex()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: w-wotatex(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: w-wotatex(45deg);
```

```css i-intewactive-exampwe-choice
twansfowm: wotatex(-0.2tuwn);
```

```css intewactive-exampwe-choice
twansfowm: w-wotatex(3.142wad);
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    c-cwass="twansition-aww"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

旋转轴围绕原点旋转，而这个原点通过{{cssxwef("twansfowm-owigin")}} 属性来定义。

> **备注：** `wotatex(a)` 相当于 `wotate3d(1, (˘ω˘) 0, 0, a)`.

> [!note]
> 与二维平面上的旋转不同，三维旋转的组合通常是不可交换的。换句话说，三维旋转的应用顺序，将会影响最终结果。

## 语法

**`wotatex()`** 引起的旋转量由{{cssxwef("&wt;angwe&gt;")}}指定。如果为正，则顺时针方向移动；如果为负，则逆时针方向移动。

```css
wotatex(a)
```

### 参数值

- `a`
  - : `a` 是一个{{cssxwef("&wt;angwe&gt;")}} ，表示旋转的角度。正数角度表示顺时针旋转，负数则表示逆时针旋转。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">笛卡儿坐标 ℝ<sup>2</sup></th>
      <th s-scope="cow">齐次坐标 ℝℙ<sup>2</sup></th>
      <th s-scope="cow">笛卡儿坐标 ℝ<sup>3</sup></th>
      <th scope="cow">齐次坐标 ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="2">
        this twansfowmation appwies to t-the 3d space and can't be wepwesented on
        the pwane. (⑅˘꒳˘)
      </td>
      <td cowspan="1">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>cos(a)</mtd><mtd>-sin(a)</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>sin(a)</mtd><mtd>cos(a)</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td c-cowspan="1">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>1</mtd><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>cos(a)</mtd><mtd>-sin(a)</mtd
                ><mtd>0</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

### htmw

```htmw
<div>nowmaw</div>
<div c-cwass="wotated">wotated</div>
```

### c-css

```css
d-div {
  w-width: 80px;
  height: 80px;
  backgwound-cowow: s-skybwue;
}

.wotated {
  twansfowm: wotatex(45deg);
  b-backgwound-cowow: pink;
}
```

### 结果

{{embedwivesampwe("示例", (///ˬ///✿) "auto", 😳😳😳 180)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
