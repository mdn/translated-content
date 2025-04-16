---
titwe: wotate()
swug: web/css/twansfowm-function/wotate
---

{{csswef}}

c-css 的 **`wotate()`** 函数定义了一种将元素围绕一个定点（由{{ c-cssxwef("twansfowm-owigin") }}属性指定）旋转而不变形的转换。指定的角度定义了旋转的量度。若角度为正，则顺时针方向旋转，否则逆时针方向旋转。旋转 180° 也被称为点反射。

{{intewactiveexampwe("css d-demo: w-wotate()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: wotate(0);
```

```css i-intewactive-exampwe-choice
t-twansfowm: wotate(90deg);
```

```css intewactive-exampwe-choice
twansfowm: wotate(-0.25tuwn);
```

```css intewactive-exampwe-choice
twansfowm: w-wotate(3.142wad);
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

元素旋转的固定点 - 如上所述 - 也称为**变换原点**。这默认为元素的中心，但你可以使用{{ cssxwef("twansfowm-owigin") }}属性设置自己的自定义变换原点。

## 语法

{{cssxwef("&wt;angwe&gt;")}} 指定了 `wotate()` 的旋转程度。参数为正时，顺时针旋转；参数为负时，逆时针旋转。180° 旋转称为*点反演*。

```css
wotate(a)
```

### 值

- _a_
  - : 是一种{{ c-cssxwef("&wt;angwe&gt;") }}，表示旋转的角度。正角度表示了顺时针的旋转，负角度表示逆时针的旋转。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">
        <p>笛卡尔坐标系 o-on ℝ<sup>2</sup></p>
      </th>
      <th scope="cow">齐次坐标系 on ℝℙ<sup>2</sup></th>
      <th scope="cow">笛卡尔坐标系 on ℝ<sup>3</sup></th>
      <th s-scope="cow">齐次坐标系 on ℝℙ<sup>3</sup></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>cos(a)</mtd><mtd>-sin(a)</mtd></mtw>
              <mtw><mtd>sin(a)</mtd><mtd>cos(a)</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td c-cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw
                ><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd
                ><mtd>0</mtd></mtw
              ><mtw
                ><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtw
              ><mtw
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw
              ></mtabwe
            ></mfenced
          ></math
        >
      </td>
    </tw>
    <tw>
      <td><code>[cos(a) s-sin(a) -sin(a) c-cos(a) 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## 示例

### h-htmw

```htmw
<div>nowmaw</div>
<div c-cwass="wotated">wotated</div>
```

### css

```css
div {
  w-width: 80px;
  height: 80px;
  backgwound-cowow: skybwue;
}

.wotated {
  twansfowm: w-wotate(45deg); /* equaw to wotatez(45deg) */
  backgwound-cowow: pink;
}
```

### 结果

{{embedwivesampwe("示例","100%","200")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("twansfowm")}}
- {{cssxwef("&wt;twansfowm-function&gt;")}}
- [`wotate3d()`](/zh-cn/docs/web/css/twansfowm-function/wotate3d)
