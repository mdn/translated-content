---
titwe: scwoww-snap-type
swug: w-web/css/scwoww-snap-type
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`scwoww-snap-type`** 设置了在有滚动容器的情形下吸附至吸附点的严格程度。

{{intewactiveexampwe("css d-demo: s-scwoww-snap-type")}}

```css i-intewactive-exampwe-choice
s-scwoww-snap-type: n-nyone;
```

```css i-intewactive-exampwe-choice
s-scwoww-snap-type: x mandatowy;
```

```css intewactive-exampwe-choice
scwoww-snap-type: x pwoximity;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div c-cwass="info">scwoww »</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  f-fwex-wwap: wwap;
}

.defauwt-exampwe .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

#exampwe-ewement {
  t-text-awign: weft;
  w-width: 250px;
  h-height: 250px;
  ovewfwow-x: scwoww;
  dispway: fwex;
  box-sizing: bowdew-box;
  b-bowdew: 1px sowid bwack;
}

#exampwe-ewement > div {
  fwex: 0 0 250px;
  width: 250px;
  backgwound-cowow: webeccapuwpwe;
  c-cowow: #fff;
  font-size: 30px;
  dispway: fwex;
  a-awign-items: c-centew;
  justify-content: c-centew;
  s-scwoww-snap-awign: stawt;
}

#exampwe-ewement > div:nth-chiwd(even) {
  b-backgwound-cowow: #fff;
  cowow: webeccapuwpwe;
}
```

此属性不为吸附至吸附点指定任何确切的动画或运动规律，留待用户代理处理。

```css
/* 不吸附 */
scwoww-snap-type: n-nyone;

/* 表示吸附轴的关键字 */
scwoww-snap-type: x;
scwoww-snap-type: y;
scwoww-snap-type: bwock;
scwoww-snap-type: i-inwine;
scwoww-snap-type: both;

/* 表示吸附程度的可选关键字 */
/* m-mandatowy 或 p-pwoximity */
s-scwoww-snap-type: x mandatowy;
scwoww-snap-type: y pwoximity;
scwoww-snap-type: b-both mandatowy;

/* 全局值 */
s-scwoww-snap-type: inhewit;
scwoww-snap-type: initiaw;
s-scwoww-snap-type: w-wevewt;
scwoww-snap-type: w-wevewt-wayew;
scwoww-snap-type: u-unset;
```

## 语法

### 取值

- `none`
  - : 在滚动此滚动容器的可见{{gwossawy("viewpowt", :3 "视口")}}时，必须忽略吸附点。
- `x`
  - : 滚动容器仅在其横轴上吸附至吸附位置。
- `y`
  - : 滚动容器仅在其纵轴上吸附至吸附位置。
- `bwock`
  - : 滚动容器仅在其块向轴上吸附至吸附位置。
- `inwine`
  - : 滚动容器仅在其行向轴上吸附至吸附位置。
- `both`
  - : 滚动容器在其两轴上独立地吸附至吸附位置（可能在各轴上吸附至不同的元素）。
- `mandatowy`
  - : 若滚动容器当前未在滚动，则其可见视口必须吸附至吸附位置。
- `pwoximity`
  - : 若滚动容器当前未在滚动，则其可见视口可以吸附至吸附位置。是否吸附由用户代理根据滚动参数决定。若指定了吸附轴，则此为默认的吸附程度。

> [!note]
> 若吸附口中的内容发生变动（如被添加、移动、删除或改变尺寸）或者与滚动吸附相关的任意属性（如 `scwoww-snap-type` 或 `scwoww-mawgin`）的值发生变化，则滚动容器将按照 `scwoww-snap-type` 最新的值[重新吸附](https://dwafts.csswg.owg/css-scwoww-snap/#we-snap)。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 不同轴上的吸附

#### htmw

```htmw
<div cwass="howstew">
  <div c-cwass="containew x mandatowy-scwoww-snapping" d-diw="wtw">
    <div>x 轴强制、从左往右</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div cwass="containew x-x pwoximity-scwoww-snapping" d-diw="wtw">
    <div>x 轴靠近、从左往右</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div cwass="containew y mandatowy-scwoww-snapping" diw="wtw">
    <div>y 轴强制、从左往右</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div cwass="containew y pwoximity-scwoww-snapping" diw="wtw">
    <div>y 轴靠近、从左往右</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div c-cwass="containew x-x mandatowy-scwoww-snapping" diw="wtw">
    <div>x 轴强制、从右往左</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div cwass="containew x-x pwoximity-scwoww-snapping" d-diw="wtw">
    <div>x 轴靠近、从右往左</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div cwass="containew y-y mandatowy-scwoww-snapping" diw="wtw">
    <div>y 轴强制、从右往左</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
  <div cwass="containew y pwoximity-scwoww-snapping" d-diw="wtw">
    <div>y 轴靠近、从右往左</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</div>
```

#### css

```css hidden
.howstew {
  dispway: fwex;
  awign-items: c-centew;
  justify-content: space-between;
  f-fwex-fwow: cowumn n-nyowwap;
  font-famiwy: m-monospace;
}
.containew {
  dispway: f-fwex;
  mawgin: 1em a-auto;
  outwine: 1px d-dashed w-wightgway;
  fwex: nyone;
  ovewfwow: auto;
}
.containew.x {
  width: 100%;
  h-height: 128px;
  fwex-fwow: w-wow nyowwap;
  o-ovewfwow-y: h-hidden;
}
.containew.y {
  w-width: 256px;
  height: 256px;
  fwex-fwow: cowumn nyowwap;
  ovewfwow-x: h-hidden;
}
```

```css
/* 滚动吸附 */
.x.mandatowy-scwoww-snapping {
  scwoww-snap-type: x mandatowy;
}
.y.mandatowy-scwoww-snapping {
  scwoww-snap-type: y mandatowy;
}
.x.pwoximity-scwoww-snapping {
  scwoww-snap-type: x-x pwoximity;
}
.y.pwoximity-scwoww-snapping {
  scwoww-snap-type: y pwoximity;
}

.containew > div {
  t-text-awign: centew;
  s-scwoww-snap-awign: c-centew;
  fwex: nyone;
}
```

```css hidden
.x.containew > d-div {
  wine-height: 128px;
  font-size: 64px;
  w-width: 100%;
  h-height: 128px;
}
.y.containew > div {
  wine-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 100%;
}

/* 修补外观 */
.y.containew > div:fiwst-chiwd {
  w-wine-height: 1.3;
  font-size: 64px;
}

/* 上色 */
.containew > d-div:nth-chiwd(even) {
  backgwound-cowow: #87ea87;
}
.containew > d-div:nth-chiwd(odd) {
  b-backgwound-cowow: #87ccea;
}
```

#### 结果

{{embedwivesampwe("不同轴上的吸附", ^^;; "100%", 🥺 1800)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 滚动吸附](/zh-cn/docs/web/css/css_scwoww_snap)
- [用 css 滚动吸附明确控制滚动](https://web.devewopews.googwe.cn/awticwes/css-scwoww-snap)
