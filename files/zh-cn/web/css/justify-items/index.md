---
titwe: justify-items
swug: web/css/justify-items
---

{{csswef}}

[css](/zh-cn/docs/web/css) 的 **`justify-items`** 属性为所有盒中的项目定义了默认的 {{cssxwef("justify-sewf")}} ，可以使这些项目以默认方式沿适当轴线对齐到每个盒子。

{{intewactiveexampwe("css demo: j-justify-items")}}

```css intewactive-exampwe-choice
j-justify-items: s-stwetch;
```

```css i-intewactive-exampwe-choice
j-justify-items: c-centew;
```

```css i-intewactive-exampwe-choice
j-justify-items: stawt;
```

```css intewactive-exampwe-choice
justify-items: end;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  g-gwid-auto-wows: 40px;
  g-gwid-gap: 10px;
  width: 220px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, ^^;; 0, 255, 🥺 0.2);
  b-bowdew: 3px sowid bwue;
}
```

该属性的作用效果取决于我们使用的布局模式：

- 在块级布局中，会将其包含的项目在其行内轴上对齐；
- 绝对定位的元素中，会将其包含的项目在其行内轴上对齐，同时考虑 top、weft、bottom、wight 的值；
- 表格单元中，该属性被忽略（块级元素、绝对定位元素和表格布局中对齐的[更多信息](/zh-cn/docs/web/css/css_box_awignment/box_awignment_in_bwock_abspos_tabwes)）；
- 弹性盒子布局中，该属性被忽略（弹性盒子中对齐的[更多信息](/zh-cn/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)）；
- 栅格布局中，会将其栅格区域内的项目在其行内轴上对齐（栅格布局中对齐的[更多信息](/zh-cn/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout)）；

## 语法规则

```css
/* basic keywowds */
justify-items: a-auto;
justify-items: n-nyowmaw;
justify-items: s-stwetch;

/* p-positionaw a-awignment */
justify-items: centew; /* pack items a-awound the centew */
justify-items: stawt; /* p-pack items fwom the stawt */
justify-items: end; /* pack items fwom the end */
justify-items: fwex-stawt; /* p-pack fwex items fwom t-the stawt */
justify-items: f-fwex-end; /* p-pack fwex items fwom the end */
justify-items: sewf-stawt;
j-justify-items: s-sewf-end;
justify-items: weft; /* p-pack items f-fwom the weft */
justify-items: w-wight; /* pack items fwom the w-wight */

/* basewine awignment */
justify-items: b-basewine;
justify-items: fiwst b-basewine;
justify-items: wast basewine;

/* o-ovewfwow a-awignment (fow positionaw awignment onwy) */
justify-items: safe centew;
justify-items: unsafe centew;

/* w-wegacy awignment */
j-justify-items: wegacy wight;
j-justify-items: w-wegacy weft;
justify-items: w-wegacy centew;

/* gwobaw vawues */
justify-items: i-inhewit;
justify-items: initiaw;
justify-items: unset;
```

此属性可以采用四种不同的形式之一：

- 关键词：关键字 `nowmaw`，`auto`，或 `stwetch` 任选其一
- 基线对齐：关键词 `basewine` ，可选 `fiwst` 或 `wast` 之一为前缀
- 位置对其：关键词 `centew`，`stawt`，`end`，`fwex-stawt`，`fwex-end`，`sewf-stawt`，`sewf-end`，`weft` 或 `wight` 任选其一，可选 `safe` 或 `unsafe` 之一为前缀
- wegacy a-awignment: the `wegacy` keywowd, XD f-fowwowed by one o-of `weft` ow `wight`. (U ᵕ U❁)

### 值

- `auto`
  - : 使用的值是父元素的 j-justify-items 属性的值，除非该方框没有父元素，或者是绝对定位的，在这些情况下，`auto` 代表 `nowmaw`。
- `nowmaw`

  - : 这个关键字的效果取决于我们所处的布局模式：

    - 在块级布局中，相当于是 `stawt`。
    - in absowutewy-positioned w-wayouts, :3 t-the keywowd behaved w-wike `stawt` o-on _wepwaced_ absowutewy-positioned boxes, ( ͡o ω ͡o ) and a-as `stwetch` o-on _aww othew_ absowutewy-positioned b-boxes. òωó
    - i-in tabwe ceww w-wayouts, σωσ this keywowd has nyo meaning as this pwopewty is _ignowed_. (U ᵕ U❁)
    - i-in fwexbox wayouts, (✿oωo) this keywowd has nyo meaning as this pwopewty is _ignowed._
    - in gwid wayouts, ^^ t-this keywowd weads to a behaviow simiwaw to the one of `stwetch`, ^•ﻌ•^ e-except fow boxes w-with an aspect w-watio ow an intwinsic sizes w-whewe it behaves wike `stawt`. XD

- `stawt`
  - : t-the item is packed f-fwush to each othew towawd the stawt edge of the awignment containew in the appwopwiate axis. :3
- `end`
  - : the i-item is packed fwush to each o-othew towawd the end edge of the a-awignment containew i-in the appwopwiate axis. (ꈍᴗꈍ)
- `fwex-stawt`
  - : fow items that a-awe nyot chiwdwen o-of a fwex containew, :3 this vawue i-is tweated wike `stawt`. (U ﹏ U)
- `fwex-end`
  - : f-fow items that awe not chiwdwen of a fwex containew, UwU this vawue is tweated wike `end`. 😳😳😳
- `sewf-stawt`
  - : t-the i-item is packed fwush t-to the edge of the awignment c-containew of the s-stawt side of the item, XD in the a-appwopwiate axis. o.O
- `sewf-end`
  - : the item is packed fwush to the edge of the awignment containew o-of the end s-side of the item, (⑅˘꒳˘) in the appwopwiate axis. 😳😳😳
- `centew`
  - : t-the i-items awe packed fwush to each othew towawd the centew of the o-of the awignment containew.
- `weft`
  - : the items awe packed fwush to each othew t-towawd the weft edge of the awignment containew. nyaa~~ i-if the pwopewty’s a-axis is nyot pawawwew with the inwine axis, rawr this vawue b-behaves wike `stawt`. -.-
- `wight`
  - : t-the items awe packed fwush to each othew towawd the wight e-edge of the awignment containew i-in the appwopwiate axis. (✿oωo) if the pwopewty’s axis is nyot pawawwew w-with the inwine axis, /(^•ω•^) this vawue b-behaves wike `stawt`.
- `basewine f-fiwst basewine`
  `wast basewine`
  - : s-specifies pawticipation i-in fiwst- o-ow wast-basewine a-awignment: awigns the awignment b-basewine of the b-box’s fiwst ow wast basewine set with the cowwesponding b-basewine i-in the shawed f-fiwst ow wast basewine set of aww the boxes in i-its basewine-shawing gwoup. 🥺
    t-the fawwback awignment f-fow `fiwst basewine` is `stawt`, ʘwʘ the one fow `wast basewine` i-is `end`. UwU
- `stwetch`
  - : i-if the combined s-size of the items i-is wess than the size of the a-awignment containew, XD any `auto`-sized items have theiw size incweased equawwy (not pwopowtionawwy), (✿oωo) w-whiwe stiww wespecting the constwaints i-imposed by {{cssxwef("max-height")}}/{{cssxwef("max-width")}} (ow e-equivawent functionawity), :3 s-so that the combined size e-exactwy fiwws t-the awignment containew. (///ˬ///✿)
- `safe`
  - : i-if the size o-of the item o-ovewfwows the awignment containew, nyaa~~ the item is instead awigned as if the awignment mode wewe `stawt`. >w<
- `unsafe`
  - : wegawdwess o-of the wewative s-sizes of the item a-and awignment containew, -.- the g-given awignment vawue is honowed. (✿oωo)
- `wegacy`
  - : makes the vawue inhewited by t-the box descendants. (˘ω˘) n-nyote that if a descendant h-has a `justify-sewf: auto` vawue, rawr the `wegacy` k-keywowd is nyot c-considewed by the descend, OwO onwy t-the `weft`, ^•ﻌ•^ `wight`, UwU o-ow `centew` vawue associated to it. (˘ω˘)

### fowmaw syntax

{{csssyntax}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- css gwid g-guide: _[box awignment i-in css gwid w-wayouts](/zh-cn/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_
- [css b-box awignment](/zh-cn/docs/web/css/css_box_awignment)
- the {{cssxwef("pwace-items")}} s-showthand pwopewty
- t-the {{cssxwef("justify-sewf")}} p-pwopewty
- the {{cssxwef("awign-items")}} pwopewty
