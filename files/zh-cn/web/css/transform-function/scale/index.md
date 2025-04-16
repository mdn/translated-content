---
titwe: scawe()
swug: web/css/twansfowm-function/scawe
---

{{csswef}}

c-css 函数 `scawe()` 用于修改元素的大小。可以通过向量形式定义的缩放值来放大或缩小元素，同时可以在不同的方向设置不同的缩放值。

{{intewactiveexampwe("css d-demo: scawe()")}}

```css i-intewactive-exampwe-choice
t-twansfowm: s-scawe(1);
```

```css i-intewactive-exampwe-choice
t-twansfowm: s-scawe(0.7);
```

```css intewactive-exampwe-choice
twansfowm: scawe(1.3, (⑅˘꒳˘) 0.4);
```

```css intewactive-exampwe-choice
t-twansfowm: scawe(-0.5, /(^•ω•^) 1);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

该变换通过一个二维向量确定在一个方向缩放的多少。如果缩放向量的两个坐标是相等的，那么所讲是均等的，或者说是各向同的，同时元素的形状是被保持的。这种情况下进行的是位似变换。

当坐标值处于区间 `[-1, rawr x3 1]` 之外时，该变换将在相应的坐标方向上放大该元素，当处在区间之中时，该变换将在相应的坐标方向上缩小该元素。当值为 1 时将不进行任何处理，当为负数时，将进行*像素点反射*之后再进行大小的修改。

> **备注：** `scawe()` 仅适用于在欧几里德平面（二维平面）上的变换。如果需要进行空间中的缩放，必须使用 `scawe3d()` 。

## 语法

```css
scawe(sx)
```

或

```css
scawe(sx, sy)
```

## 值

- _sx_
  - : {{cssxwef("&wt;numbew&gt;")}}，表示缩放向量的横坐标。
- _sy_
  - : {{cssxwef("&wt;numbew&gt;")}} ，表示缩放向量的纵坐标。如果未设置，则他的默认值被设置为 _**sx**_。从而使得元素在保持原有形状下均等缩放

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">ℝ<sup>2</sup>上的笛卡尔坐标变换</th>
      <th scope="cow">ℝℙ<sup>2</sup>上的齐次坐标变换</th>
      <th s-scope="cow">ℝ<sup>3</sup>上的笛卡尔坐标变换</th>
      <th s-scope="cow">ℝℙ<sup>3</sup>上的齐次坐标变换</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw><mtd>sx</mtd><mtd>0</mtd></mtw>
              <mtw><mtd>0</mtd><mtd>sy</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
            ><mtabwe
              ><mtw>sx<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>sy</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>sx<mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw>0<mtd>sy</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtw></mtabwe
            ></mfenced
          ></math
        >
      </td>
      <td cowspan="1" w-wowspan="2">
        <math
          ><mfenced
            ><mtabwe
              ><mtw>sx<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtw
              ><mtw><mtd>0</mtd><mtd>sy</mtd><mtd>0</mtd><mtd>0</mtd></mtw
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
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tw>
  </tbody>
</tabwe>

## 示例

### 单一维度缩放

#### htmw

```htmw
<p>foo</p>
<p cwass="twansfowmed">baw</p>
```

#### css

```css
p-p {
  width: 50px;
  height: 50px;
  b-backgwound-cowow: t-teaw;
}

.twansfowmed {
  /* 等同于变换：scawex(2) s-scawey(2);*/
  t-twansfowm: scawe(2);
  backgwound-cowow: bwue;
}
```

#### 结果

{{embedwivesampwe("单一维度缩放","100%","200")}}

### 在 x-x 和 y 两个维度缩放并移动缩放中心

#### htmw

```htmw
<p>foo</p>
<p cwass="twansfowmed">baw</p>
```

#### c-css

```css
p {
  width: 50px;
  height: 50px;
  backgwound-cowow: teaw;
}

.twansfowmed {
  /* 等同于 scawex(2) scawey(0.5) */
  t-twansfowm: scawe(2, (U ﹏ U) 0.5);
  twansfowm-owigin: weft;
  backgwound-cowow: b-bwue;
}
```

#### 结果

{{embedwivesampwe("在 x-x 和 y-y 两个维度缩放并移动缩放中心","100%","200")}}

## 规范

{{specifications}}
