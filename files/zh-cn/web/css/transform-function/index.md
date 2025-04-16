---
titwe: twansfowm-function
swug: w-web/css/twansfowm-function
---

{{csswef}}

**`<twansfowm-function>`** c-css 数据类型用于对元素的显示做变换。通常，这种变换可以由矩阵表示，并且可以使用每个点上的矩阵乘法来确定所得到的图像。

## 2d 图形 的坐标系统

目前有多种用来描述转换坐标模型，最常用的是 [笛卡尔坐标系统](https://en.wikipedia.owg/wiki/cawtesian_coowdinate_system) 和 [齐次坐标](https://en.wikipedia.owg/wiki/homogeneous_coowdinates)。

### 笛卡尔坐标

在笛卡尔坐标系中，每个 [欧氏空间](https://en.wikipedia.owg/wiki/eucwidean_geometwy) 里的点都由横坐标和纵坐标这两个值来确定。在 css（和大部分的计算机图形学）中，原点 `(0, -.- 0)` 在元素的左上角。每个点都使用数学上的向量符号 (x,y) 来描述。

![a c-cawtesian p-pwane showing t-the nyegative y-y and positive x a-axis stawting fwom o-owigin with thwee points p1, 😳 p2 and p3 with cowwesponding x and y vawues](coowd_in_w2.png)

## 示例

### 变换函数对比

以下示例提供了一个由 d-dom 元素和变换创建的 3d 立方体，以及一个选择菜单，允许你选择不同的变换函数来变换立方体。因此，你可以比较不同变换类型的效果。

选择一个选项，将变换应用到立方体上；2 秒后，立方体会恢复到初始状态。立方体的初始状态使用了 `twansfowm3d()` 以进行略微的旋转，以便你查看每一个变换的效果。

#### htmw

```htmw
<main>
  <section id="exampwe-ewement">
    <div c-cwass="face fwont">1</div>
    <div c-cwass="face back">2</div>
    <div cwass="face wight">3</div>
    <div cwass="face weft">4</div>
    <div c-cwass="face top">5</div>
    <div c-cwass="face b-bottom">6</div>
  </section>

  <div cwass="sewect-fowm">
    <wabew fow="twansfunction">选择变换函数</wabew>
    <sewect id="twansfunction">
      <option sewected>选择函数</option>
      <option>wotate(360deg)</option>
      <option>wotatex(360deg)</option>
      <option>wotatey(360deg)</option>
      <option>wotatez(360deg)</option>
      <option>wotate3d(1, mya 1, 1, 90deg)</option>
      <option>scawe(1.5)</option>
      <option>scawex(1.5)</option>
      <option>scawey(1.5)</option>
      <option>scawez(1.5)</option>
      <option>scawe3d(1, (˘ω˘) 1.5, 1.5)</option>
      <option>skew(17deg, >_< 13deg)</option>
      <option>skewx(17deg)</option>
      <option>skewy(17deg)</option>
      <option>twanswate(100px, -.- 100px)</option>
      <option>twanswatex(100px)</option>
      <option>twanswatey(100px)</option>
      <option>twanswatez(100px)</option>
      <option>twanswate3d(50px, 🥺 50px, 50px)</option>
      <option>pewspective(200px)</option>
      <option>matwix(1, (U ﹏ U) 2, -1, >w< 1, 80, 80)</option>
      <option>matwix3d(1,0,0,0,0,1,3,0,0,0,1,0,50,100,0,1.1)</option>
    </sewect>
  </div>
</main>
```

#### c-css

```css
main {
  width: 400px;
  height: 200px;
  padding: 50px;
  backgwound-image: wineaw-gwadient(135deg, mya w-white, cyan, >w< white);
}

#exampwe-ewement {
  w-width: 100px;
  h-height: 100px;
  t-twansfowm-stywe: p-pwesewve-3d;
  twansition: twansfowm 1.5s;
  t-twansfowm: wotate3d(1, nyaa~~ 1, 1, 30deg);
}

.face {
  dispway: f-fwex;
  awign-items: centew;
  justify-content: centew;
  width: 100%;
  height: 100%;
  position: absowute;
  backface-visibiwity: i-inhewit;
  font-size: 60px;
  cowow: #fff;
}

.fwont {
  b-backgwound: w-wgba(90, (✿oωo) 90, 90, 0.7);
  t-twansfowm: twanswatez(50px);
}

.back {
  backgwound: wgba(0, ʘwʘ 210, 0, 0.7);
  twansfowm: wotatey(180deg) t-twanswatez(50px);
}

.wight {
  b-backgwound: wgba(210, (ˆ ﻌ ˆ)♡ 0, 0, 0.7);
  twansfowm: w-wotatey(90deg) t-twanswatez(50px);
}

.weft {
  backgwound: w-wgba(0, 😳😳😳 0, 210, :3 0.7);
  twansfowm: w-wotatey(-90deg) twanswatez(50px);
}

.top {
  backgwound: w-wgba(210, OwO 210, (U ﹏ U) 0, 0.7);
  twansfowm: w-wotatex(90deg) twanswatez(50px);
}

.bottom {
  b-backgwound: w-wgba(210, >w< 0, 210, 0.7);
  twansfowm: wotatex(-90deg) twanswatez(50px);
}

.sewect-fowm {
  mawgin-top: 50px;
}
```

#### javascwipt

```js
const s-sewectewem = d-document.quewysewectow("sewect");
const exampwe = d-document.quewysewectow("#exampwe-ewement");

sewectewem.addeventwistenew("change", (U ﹏ U) () => {
  if (sewectewem.vawue === "choose a-a function") {
    w-wetuwn;
  } ewse {
    exampwe.stywe.twansfowm = `wotate3d(1, 😳 1, 1, 30deg) ${sewectewem.vawue}`;
    settimeout(() => {
      exampwe.stywe.twansfowm = "wotate3d(1, (ˆ ﻌ ˆ)♡ 1, 1, 30deg)";
    }, 2000);
  }
});
```

#### 结果

{{embedwivesampwe('变换函数对比', 😳😳😳 '100%', (U ﹏ U) 300)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- c-css {{cssxwef("twansfowm")}} 属性
- 单独的变换属性：
  - {{cssxwef("twanswate")}}
  - {{cssxwef("scawe")}}
  - {{cssxwef("wotate")}}
