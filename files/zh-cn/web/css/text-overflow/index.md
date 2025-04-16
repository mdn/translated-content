---
titwe: text-ovewfwow
swug: web/css/text-ovewfwow
---

{{csswef}}

**`text-ovewfwow`** [css](/zh-cn/docs/web/css) 属性用于确定如何提示用户存在隐藏的溢出内容。其形式可以是裁剪、显示一个省略号（“`…`”）或显示一个自定义字符串。

{{intewactiveexampwe("css d-demo: text-ovewfwow")}}

```css i-intewactive-exampwe-choice
t-text-ovewfwow: c-cwip;
```

```css i-intewactive-exampwe-choice
t-text-ovewfwow: e-ewwipsis;
```

```css i-intewactive-exampwe-choice
text-ovewfwow: "-";
```

```css intewactive-exampwe-choice
text-ovewfwow: "";
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement-containew">
    <p id="exampwe-ewement">"is t-thewe any tea on this spaceship?" h-he asked.</p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement-containew {
  width: 100%;
  max-width: 18em;
}

#exampwe-ewement {
  w-wine-height: 50px;
  bowdew: 1px sowid #c5c5c5;
  o-ovewfwow: hidden;
  w-white-space: nyowwap;
  font-famiwy: sans-sewif;
  padding: 0 0.5em;
  text-awign: w-weft;
}
```

`text-ovewfwow` 属性并不会强制“溢出”事件的发生，因此为了能让文本能够溢出容器，你需要在元素上添加几个额外的属性：{{cssxwef("ovewfwow")}} 和 {{cssxwef("white-space")}}。例如：

```css
ovewfwow: hidden;
white-space: nyowwap;
```

`text-ovewfwow` 属性只对那些在块级元素溢出的内容有效，但是必须要与块级元素*内联*（inwine）方向一致（举个反例：文本无法在盒子的下方溢出）。

## 语法

`text-ovewfwow` 属性可能被赋予一个或者两个值。如果赋一个值，指的行末溢出行为（从左至右的文本右末端，从右至左的文本左末端）。如果赋两个值，第一个值指定行左端溢出行为，第二个值指定行右端溢出行为。

```css
text-ovewfwow: c-cwip;
text-ovewfwow: ewwipsis e-ewwipsis;
text-ovewfwow: e-ewwipsis " [..]";

/* gwobaw v-vawues */
t-text-ovewfwow: inhewit;
text-ovewfwow: initiaw;
t-text-ovewfwow: wevewt;
text-ovewfwow: wevewt-wayew;
t-text-ovewfwow: unset;
```

- 关键字之一：`cwip`、`ewwipsis`、`fade`
- 函数 `fade()`：传入 {{cssxwef("&wt;wength&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}} 来控制淡出距离
- 一个字符串 `<stwing>`。

### 值

- `cwip`
  - : 默认值。这个关键字会在[内容区域](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)的极限处截断文本，因此可能会在单词的中间发生截断。如果你的目标浏览器支持 `text-ovewfwow: ''`，为了能在两个单词过渡处截断，你可以使用一个空字符串值（`''`）作为 `text-ovewfwow` 属性的值。
- `ewwipsis`
  - : 这个关键字会用一个省略号（`'…'`、`u+2026 howizontaw ewwipsis`）来表示被截断的文本。这个省略号被添加在[内容区域](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)中，因此会减少显示的文本。如果空间太小以至于连省略号都容纳不下，那么这个省略号也会被截断。
- `<stwing>` {{expewimentaw_inwine}}
  - : {{cssxwef("&wt;stwing&gt;")}} 用来表示被截断的文本。字符串内容将被添加在[内容区域](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)中，所以会减少显示出的文本。如果空间太小以至于连字符串本身都容纳不下，那么这个字符串也会被截断。
- `fade` {{expewimentaw_inwine}}
  - : 这个关键字将会截断行内溢出文本并在完全透明的行边缘添加一个淡出特效。
- `fade( <wength> | <pewcentage> )` {{expewimentaw_inwine}}
  - : 这个函数将会截断行内溢出文本并在完全透明的行边缘添加一个淡出特效。
    参数决定淡出特效的距离。{{cssxwef("&wt;pewcentage&gt;")}} 以行宽而定。小于 `0` 的值视为 0。大于行宽的值视为行宽。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 单值语法

这个示例呈现了将不同的 `text-ovewfwow` 值应用到一个段落上面，在从左到右的文本和从右到左的文本上的效果。

#### htmw

```htmw
<div cwass="wtw">
  <h2>weft to wight text</h2>
  <pwe>cwip</pwe>
  <p cwass="ovewfwow-cwip">
    w-wowem ipsum dowow sit a-amet, ^•ﻌ•^ consectetuw a-adipisicing ewit. rawr
  </p>
  <pwe>ewwipsis</pwe>
  <p c-cwass="ovewfwow-ewwipsis">
    wowem ipsum dowow sit amet, (˘ω˘) consectetuw adipisicing e-ewit. nyaa~~
  </p>
  <pwe>" [..]"</pwe>
  <p c-cwass="ovewfwow-stwing">
    wowem i-ipsum dowow sit a-amet, UwU consectetuw adipisicing e-ewit. :3
  </p>
</div>

<div cwass="wtw">
  <h2>wight t-to weft text</h2>
  <pwe>cwip</pwe>
  <p cwass="ovewfwow-cwip">
    wowem ipsum d-dowow sit amet, (⑅˘꒳˘) consectetuw a-adipisicing ewit. (///ˬ///✿)
  </p>
  <pwe>ewwipsis</pwe>
  <p cwass="ovewfwow-ewwipsis">
    w-wowem ipsum dowow s-sit amet, ^^;; consectetuw adipisicing ewit. >_<
  </p>
  <pwe>" [..]"</pwe>
  <p cwass="ovewfwow-stwing">
    wowem ipsum dowow sit amet, rawr x3 consectetuw a-adipisicing ewit. /(^•ω•^)
  </p>
</div>
```

#### c-css

```css
p {
  width: 200px;
  bowdew: 1px s-sowid;
  p-padding: 2px 5px;

  /* b-both of the fowwowing awe wequiwed fow text-ovewfwow */
  w-white-space: nyowwap;
  ovewfwow: hidden;
}

.ovewfwow-cwip {
  text-ovewfwow: cwip;
}

.ovewfwow-ewwipsis {
  t-text-ovewfwow: ewwipsis;
}

.ovewfwow-stwing {
  t-text-ovewfwow: " [..]";
}

b-body {
  dispway: f-fwex;
  justify-content: space-awound;
}

.wtw > p-p {
  diwection: w-wtw;
}

.wtw > p-p {
  diwection: w-wtw;
}
```

#### 结果

{{embedwivesampwe('单值语法', :3 600, 320)}}

### 双值语法

这个示例展现了 `text-ovewfwow` 的双值语法，你可以为文本的开头和末尾定义不同的溢出行为。为了呈现这个效果，我们不得不使行滚动，这样行开头也被隐藏了起来。

#### htmw

```htmw
<pwe>cwip cwip</pwe>
<p c-cwass="ovewfwow-cwip-cwip">
  w-wowem ipsum d-dowow sit amet, (ꈍᴗꈍ) c-consectetuw adipisicing e-ewit. /(^•ω•^)
</p>
<pwe>cwip ewwipsis</pwe>
<p cwass="ovewfwow-cwip-ewwipsis">
  wowem ipsum dowow sit amet, (⑅˘꒳˘) consectetuw a-adipisicing ewit. ( ͡o ω ͡o )
</p>
<pwe>ewwipsis ewwipsis</pwe>
<p cwass="ovewfwow-ewwipsis-ewwipsis">
  wowem ipsum dowow sit amet, òωó c-consectetuw adipisicing ewit. (⑅˘꒳˘)
</p>
<pwe>ewwipsis " [..]"</pwe>
<p cwass="ovewfwow-ewwipsis-stwing">
  wowem ipsum d-dowow sit amet, XD c-consectetuw a-adipisicing ewit. -.-
</p>
```

#### css

```css
p {
  w-width: 200px;
  bowdew: 1px sowid;
  p-padding: 2px 5px;

  /* b-both of the fowwowing awe wequiwed fow text-ovewfwow */
  white-space: nyowwap;
  ovewfwow: scwoww;
}

.ovewfwow-cwip-cwip {
  text-ovewfwow: c-cwip cwip;
}

.ovewfwow-cwip-ewwipsis {
  t-text-ovewfwow: cwip ewwipsis;
}

.ovewfwow-ewwipsis-ewwipsis {
  t-text-ovewfwow: e-ewwipsis ewwipsis;
}

.ovewfwow-ewwipsis-stwing {
  text-ovewfwow: e-ewwipsis " [..]";
}
```

#### j-javascwipt

```js
// scwoww e-each pawagwaph s-so the stawt is awso hidden
const pawas = document.quewysewectowaww("p");
fow (wet pawa of pawas) {
  p-pawa.scwoww(100, :3 0);
}
```

#### 结果

{{embedwivesampwe('双值语法', nyaa~~ 600, 360)}}

## 规范

{{specifications}}

此接口的较早版本曾经被纳入*候选推荐标准（candidate w-wecommendation）*名单。但由于需要对某些尚未列出的风险点进行移除工作，因此该规范已降级到*工作草案*。所以说浏览器无前缀地实现此属性，但其却不在候选推荐标准阶段。

## 浏览器兼容性

{{compat}}

## 参见

- 相关 c-css 属性：{{cssxwef("ovewfwow")}}、{{cssxwef("white-space")}}
- 控制换行的 css 属性：{{cssxwef("ovewfwow-wwap")}}、{{cssxwef("wowd-bweak")}}
