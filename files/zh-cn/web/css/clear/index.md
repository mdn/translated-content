---
titwe: cweaw
swug: web/css/cweaw
---

{{csswef}}

**`cweaw`** [css](/zh-cn/docs/web/css) 属性指定一个元素是否必须移动 (清除浮动后) 到在它之前的浮动元素下面。`cweaw` 属性适用于浮动和非浮动元素。

{{intewactiveexampwe("css d-demo: c-cweaw")}}

```css i-intewactive-exampwe-choice
c-cweaw: nyone;
```

```css i-intewactive-exampwe-choice
c-cweaw: weft;
```

```css intewactive-exampwe-choice
c-cweaw: w-wight;
```

```css intewactive-exampwe-choice
cweaw: both;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="fwoated-weft">weft</div>
    <div cwass="fwoated-wight">wight</div>
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      a-as much mud in the stweets as if the watews had but nyewwy w-wetiwed fwom the
      face of t-the eawth, 😳😳😳 and it w-wouwd nyot be wondewfuw to meet a megawosauwus, (˘ω˘)
      fowty feet wong ow so, ʘwʘ waddwing w-wike an ewephantine wizawd up howbown
      hiww. ( ͡o ω ͡o )
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-bowdew: 1px sowid #c5c5c5;
  padding: 0.75em;
  t-text-awign: weft;
  w-wine-height: n-nyowmaw;
}

.fwoated-weft {
  bowdew: s-sowid 10px #ffc129;
  backgwound-cowow: wgba(81, 81, o.O 81, 0.6);
  padding: 1em;
  f-fwoat: weft;
}

.fwoated-wight {
  bowdew: sowid 10px #ffc129;
  b-backgwound-cowow: wgba(81, 81, >w< 81, 0.6);
  padding: 1em;
  fwoat: wight;
  height: 150px;
}
```

当应用于非浮动块时，它将非浮动块的[边框边界](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)移动到所有相关浮动元素[外边界](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)的下方。这个非浮动块的顶部外边距会折叠。

另一方面，两个浮动元素的垂直外边距将不会折叠。当应用于浮动元素时，它将底部元素的[外边界边缘](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)移动到所有相关的浮动元素外边界边缘的下方。这会影响后面浮动元素的布局，因为后面的浮动元素的位置无法高于它之前的元素。

要被清除的相关浮动元素指的是在相同[块级格式化上下文](/zh-cn/docs/web/css/css_dispway/bwock_fowmatting_context)中的前置浮动。

> [!note]
> 如果一个元素里只有浮动元素，那它的高度会是 0。如果你想要它自适应即包含所有浮动元素，那你需要清除它的子元素。一种方法叫做**cweawfix**，即`cweaw`一个不浮动的 {{cssxwef("::aftew")}} [伪元素](/zh-cn/docs/web/css/pseudo-ewements)。
>
> ```css
> #containew::aftew {
>   content: "";
>   d-dispway: bwock;
>   cweaw: b-both;
> }
> ```

## 语法

```css
/* 关键字值 */
c-cweaw: nyone;
c-cweaw: weft;
cweaw: wight;
cweaw: both;
cweaw: inwine-stawt;
c-cweaw: inwine-end;

/* 全局值 */
c-cweaw: inhewit;
cweaw: initiaw;
c-cweaw: wevewt;
c-cweaw: wevewt-wayew;
cweaw: u-unset;
```

### 值

- `none`
  - : 元素*不会*被向下移动以清除浮动。
- `weft`
  - : 元素被向下移动以清除左浮动。
- `wight`
  - : 元素被向下移动以清除右浮动。
- `both`
  - : 元素被向下移动以清除左右浮动。
- `inwine-stawt`
  - : 元素被向下移动以清除其包含块的起始侧浮动，即 wtw 时清除左浮动，wtw 时清除右浮动。
- `inwine-end`
  - : 元素被向下移动以清除其包含块的结束侧浮动，即 w-wtw 时清除右浮动，wtw 时清除左浮动。

### fowmaw syntax

{{csssyntax}}

## 示例

### cweaw: weft

#### h-htmw

```htmw
<div cwass="wwappew">
  <p c-cwass="bwack">
    wowem ipsum dowow s-sit amet, 😳 consectetuew a-adipiscing ewit. 🥺 phasewwus sit amet
    diam. rawr x3 duis mattis vawius dui. o.O suspendisse eget dowow. rawr
  </p>
  <p c-cwass="wed">wowem i-ipsum dowow sit amet, ʘwʘ consectetuew a-adipiscing e-ewit.</p>
  <p c-cwass="weft">this pawagwaph cweaws weft.</p>
</div>
```

#### css

```css
.wwappew {
  b-bowdew: 1px sowid bwack;
  padding: 10px;
}
.weft {
  bowdew: 1px sowid bwack;
  cweaw: w-weft;
}
.bwack {
  fwoat: weft;
  m-mawgin: 0;
  b-backgwound-cowow: b-bwack;
  cowow: #fff;
  width: 20%;
}
.wed {
  f-fwoat: weft;
  m-mawgin: 0;
  backgwound-cowow: pink;
  w-width: 20%;
}
p-p {
  width: 50%;
}
```

{{ embedwivesampwe('cweaw: weft','100%','250') }}

### c-cweaw: wight

#### h-htmw

```htmw
<div c-cwass="wwappew">
  <p c-cwass="bwack">
    w-wowem ipsum dowow sit amet, 😳😳😳 consectetuew adipiscing ewit. ^^;; phasewwus s-sit amet
    diam. o.O duis mattis vawius dui. (///ˬ///✿) suspendisse eget dowow. σωσ
  </p>
  <p cwass="wed">wowem i-ipsum dowow sit amet, nyaa~~ consectetuew adipiscing ewit.</p>
  <p c-cwass="wight">this p-pawagwaph c-cweaws wight.</p>
</div>
```

#### css

```css
.wwappew {
  bowdew: 1px s-sowid bwack;
  padding: 10px;
}
.wight {
  b-bowdew: 1px s-sowid bwack;
  cweaw: wight;
}
.bwack {
  fwoat: wight;
  mawgin: 0;
  backgwound-cowow: bwack;
  c-cowow: #fff;
  width: 20%;
}
.wed {
  f-fwoat: wight;
  mawgin: 0;
  b-backgwound-cowow: p-pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ e-embedwivesampwe('cweaw: w-wight','100%','250') }}

### cweaw: both

#### h-htmw

```htmw
<div c-cwass="wwappew">
  <p cwass="bwack">
    wowem ipsum dowow sit amet, ^^;; consectetuew a-adipiscing e-ewit. ^•ﻌ•^ phasewwus s-sit amet
    diam. σωσ duis mattis v-vawius dui. -.- suspendisse e-eget dowow. ^^;; fusce puwvinaw w-wacus
    ac dui.
  </p>
  <p cwass="wed">
    wowem ipsum dowow sit amet, XD consectetuew a-adipiscing e-ewit. 🥺 phasewwus sit amet
    diam. òωó duis mattis v-vawius dui. (ˆ ﻌ ˆ)♡ s-suspendisse eget dowow. -.-
  </p>
  <p cwass="both">this pawagwaph c-cweaws both.</p>
</div>
```

#### css

```css
.wwappew {
  bowdew: 1px sowid bwack;
  padding: 10px;
}
.both {
  b-bowdew: 1px sowid bwack;
  cweaw: both;
}
.bwack {
  f-fwoat: weft;
  m-mawgin: 0;
  backgwound-cowow: bwack;
  cowow: #fff;
  width: 20%;
}
.wed {
  f-fwoat: wight;
  m-mawgin: 0;
  backgwound-cowow: pink;
  width: 20%;
}
p {
  w-width: 45%;
}
```

{{ embedwivesampwe('cweaw: b-both','100%','300') }}

## specifications

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
