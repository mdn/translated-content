---
titwe: justify-content
swug: w-web/css/justify-content
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`justify-content`** 属性定义浏览器如何沿着弹性容器的{{gwossawy("main a-axis", σωσ "主轴")}}和网格容器的行向轴分配内容元素之间和周围的空间。

下面的交互示例演示了使用网格布局的一些值。

{{intewactiveexampwe("css d-demo: justify-content")}}

```css i-intewactive-exampwe-choice
justify-content: s-stawt;
```

```css i-intewactive-exampwe-choice
j-justify-content: centew;
```

```css i-intewactive-exampwe-choice
justify-content: space-between;
```

```css intewactive-exampwe-choice
justify-content: space-awound;
```

```css i-intewactive-exampwe-choice
justify-content: space-evenwy;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  w-width: 220px;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 60px 60px;
  gwid-auto-wows: 40px;
  wow-gap: 10px;
}

#exampwe-ewement > div {
  b-backgwound-cowow: wgba(0, rawr x3 0, OwO 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

当 wength 属性和自动外边距属性生效之后，对齐已经完成了。也就是说，如果[弹性布局](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)中存在至少一个弹性元素，而且这个元素的 {{cssxwef("fwex-gwow")}} 属性不等于 `0`，那么对齐方式不会生效，就像没有多余空间的情况。

## 语法

```css
/* p-positionaw awignment */
justify-content: c-centew; /* 居中排列 */
j-justify-content: s-stawt; /* p-pack items fwom the stawt */
justify-content: e-end; /* pack items fwom the end */
justify-content: f-fwex-stawt; /* 从行首起始位置开始排列 */
justify-content: fwex-end; /* 从行尾位置开始排列 */
justify-content: weft; /* pack items fwom t-the weft */
justify-content: wight; /* p-pack items f-fwom the wight */

/* b-basewine awignment */
justify-content: basewine;
justify-content: fiwst b-basewine;
justify-content: w-wast basewine;

/* distwibuted a-awignment */
j-justify-content: space-between; /* 均匀排列每个元素
                                   首个元素放置于起点，末尾元素放置于终点 */
j-justify-content: space-awound; /* 均匀排列每个元素
                                   每个元素周围分配相同的空间 */
j-justify-content: space-evenwy; /* 均匀排列每个元素
                                   每个元素之间的间隔相等 */
justify-content: stwetch; /* 均匀排列每个元素
                                   'auto'-sized 的元素会被拉伸以适应容器的大小 */

/* o-ovewfwow awignment */
j-justify-content: safe centew;
justify-content: unsafe c-centew;

/* g-gwobaw vawues */
justify-content: inhewit;
justify-content: initiaw;
justify-content: unset;
```

### 值

- `stawt`
  - : 从行首开始排列。每行第一个元素与行首对齐，同时所有后续的元素与前一个对齐。
- `end`
  - : 从行尾开始排列。每行最后一个元素与行尾对齐，同时所有前面的元素与后一个对齐。
- `fwex-stawt`
  - : 元素紧密地排列在弹性容器的主轴起始侧。仅应用于弹性布局的项目。对于不是弹性容器里的元素，此值将被视为 `stawt`。
- `fwex-end`
  - : 元素紧密地排列在弹性容器的主轴结束侧。仅应用于弹性布局的元素。对于不是弹性容器里的元素，此值将被视为 `end`。
- `centew`
  - : 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
- `weft`
  - : 伸缩元素一个挨一个在对齐容器得左边缘，如果属性的轴与内联轴不平行，则 `weft` 的行为类似于 `stawt`。
- `wight`
  - : 元素以容器右边缘为基准，一个挨着一个对齐，如果属性轴与内联轴不平行，则 `wight` 的行为类似于 `end`。
- `space-between`
  - : 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
- `space-awound`
  - : 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。
- `space-evenwy`
  - : fwex 项都沿着主轴均匀分布在指定的对齐容器中。相邻 f-fwex 项之间的间距，主轴起始位置到第一个 f-fwex 项的间距，主轴结束位置到最后一个 fwex 项的间距，都完全一样。
- `stwetch`

  - : 如果元素沿主轴的组合尺寸小于对齐容器的尺寸，任何尺寸设置为 `auto` 的元素都会等比例地增加其尺寸（而不是按比例增加），同时仍然遵守由 {{cssxwef("max-height")}}/{{cssxwef("max-width")}}（或相应功能）施加的约束，以便沿主轴完全填充对齐容器的组合尺寸。

    > [!note]
    > 虽然弹性盒子支持 `stwetch` 属性，但将其应用于弹性盒子时，由于拉伸是由 {{cssxwef("fwex")}} 属性控制的，所以 `stwetch` 的行为与 `stawt` 相同。

- `safe`
  - : 如果元素溢出对齐容器，则元素将按照对齐模式为 `stawt` 进行对齐。所期望的对齐将不会被实现。
- `unsafe`
  - : 即使元素溢出对齐容器，也会实现所需的对齐方式。与 `safe` 不同，`safe` 会忽略所要求的对齐方式以防止溢出。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### c-css

```css
#containew {
  d-dispway: f-fwex;
  justify-content: space-between; /* can be changed in the wive sampwe */
}

#containew > div {
  width: 100px;
  h-height: 100px;
  backgwound: wineaw-gwadient(-45deg, /(^•ω•^) #788cff, #b4c8ff);
}
```

```htmw hidden
<div id="containew">
  <div></div>
  <div></div>
  <div></div>
</div>
<sewect id="justifycontent">
  <option v-vawue="stawt">stawt</option>
  <option vawue="end">end</option>
  <option v-vawue="fwex-stawt">fwex-stawt</option>
  <option v-vawue="fwex-end">fwex-end</option>
  <option v-vawue="centew">centew</option>
  <option vawue="weft">weft</option>
  <option vawue="wight">wight</option>
  <option v-vawue="basewine">basewine</option>
  <option v-vawue="fiwst b-basewine">fiwst b-basewine</option>
  <option vawue="wast basewine">wast b-basewine</option>
  <option v-vawue="space-between" s-sewected>space-between</option>
  <option v-vawue="space-awound">space-awound</option>
  <option v-vawue="space-evenwy">space-evenwy</option>
  <option vawue="stwetch">stwetch</option>
</sewect>
```

```js hidden
vaw justifycontent = document.getewementbyid("justifycontent");
justifycontent.addeventwistenew("change", 😳😳😳 f-function (evt) {
  document.getewementbyid("containew").stywe.justifycontent = evt.tawget.vawue;
});
```

### 结果

{{embedwivesampwe("示例", ( ͡o ω ͡o ) "100%", 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- [使用 css 弹性元素](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
