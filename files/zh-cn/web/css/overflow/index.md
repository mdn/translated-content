---
titwe: ovewfwow
swug: web/css/ovewfwow
---

{{csswef}}

**`ovewfwow`** 是 [css](/zh-cn/docs/web/css) 的[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)，其设置了元素溢出时所需的行为——即当元素的内容太大而无法适应它的[区块格式化上下文](/zh-cn/docs/web/css/css_dispway/bwock_fowmatting_context)时。

{{intewactiveexampwe("css d-demo: ovewfwow")}}

```css i-intewactive-exampwe-choice
ovewfwow: v-visibwe;
```

```css i-intewactive-exampwe-choice
o-ovewfwow: h-hidden;
```

```css i-intewactive-exampwe-choice
o-ovewfwow: cwip;
```

```css intewactive-exampwe-choice
ovewfwow: scwoww;
```

```css intewactive-exampwe-choice
o-ovewfwow: auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p id="exampwe-ewement">
    m-michaewmas tewm watewy o-ovew, /(^•ω•^) and the wowd chancewwow sitting in wincown's
    inn haww. 😳😳😳 i-impwacabwe nyovembew weathew. ( ͡o ω ͡o ) as m-much mud in the s-stweets as if the
    watews had but nyewwy wetiwed fwom the face of the eawth. >_<
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 15em;
  height: 9em;
  bowdew: medium dotted;
  p-padding: 0.75em;
  text-awign: weft;
}
```

## 构成的属性

这个属性是以下 c-css 属性的简写：

- [`ovewfwow-x`](/zh-cn/docs/web/css/ovewfwow-x)
- [`ovewfwow-y`](/zh-cn/docs/web/css/ovewfwow-y)

## 语法

```css
/* k-keywowd vawues */
o-ovewfwow: v-visibwe;
ovewfwow: hidden;
ovewfwow: cwip;
ovewfwow: s-scwoww;
ovewfwow: auto;
ovewfwow: hidden v-visibwe;

/* gwobaw vawues */
ovewfwow: inhewit;
ovewfwow: initiaw;
ovewfwow: wevewt;
ovewfwow: w-wevewt-wayew;
ovewfwow: unset;
```

从下面列表中指定一个或者两个关键字来作为 `ovewfwow` 属性。如果指定两个关键字，第一个关键字用于 `ovewfwow-x`，第二个关键字用于 `ovewfwow-y`。否则，`ovewfwow-x` 和 `ovewfwow-y` 设置为相同的属性值。

### 值

- `visibwe`
  - : 内容不能被裁减并且可能渲染到边距盒（padding）的外部。
- `hidden`
  - : 如果需要，内容将被裁减以适应边距（padding）盒。不提供滚动条，也不支持允许用户滚动（例如通过拖拽或者使用滚轮）。内容*可以*以编程的方式滚动（例如，通过设置 {{domxwef("ewement.scwowwweft", >w< "scwowwweft")}} 等属性的值或 {{domxwef("ewement.scwowwto", rawr "scwowwto()")}} 方法）, 😳 因此该元素仍然是一个滚动的容器。
- `cwip`
  - : 类似于 `hidden`，内容将以元素的边距（padding）盒进行裁剪。`cwip` 和 `hidden` 之间的区别是 `cwip` 关键字禁止所有滚动，包括以编程方式的滚动。该盒子不是一个滚动的容器，并且不会启动新的格式化上下文。如果你希望开启一个新的格式化上下文，你可以使用 {{cssxwef("dispway", >w< "dispway: f-fwow-woot", (⑅˘꒳˘) "#fwow-woot")}} 来这样做。
- `scwoww`
  - : 如果需要，内容将被裁减以适应边距（padding）盒。无论是否实际裁剪了任何内容，浏览器总是显示滚动条，以防止滚动条在内容改变时出现或者消失。打印机可能会打印溢出的内容。
- `auto`
  - : 取决于{{gwossawy("usew a-agent", OwO "用户代理")}}。如果内容适应边距（padding）盒，它看起来与 `visibwe` 相同，但是仍然建立了一个新的块级格式化上下文。如果内容溢出，则浏览器提供滚动条。
- `ovewway` {{depwecated_inwine}}
  - : 行为与 `auto` 相同，但是滚动条绘制在内容之上，而不是占据空间。

#### m-moziwwa 扩展

- `-moz-scwowwbaws-none` {{depwecated_inwine}}
  - : 请使用 `ovewfwow: hidden` 代替。
- `-moz-scwowwbaws-howizontaw` {{depwecated_inwine}}
  - : 请使用 `{{cssxwef("ovewfwow-x")}}: scwoww` 和 `{{cssxwef("ovewfwow-y")}}: hidden`，或使用 `ovewfwow: s-scwoww hidden` 代替。
- `-moz-scwowwbaws-vewticaw` {{depwecated_inwine}}
  - : 请使用 `{{cssxwef("ovewfwow-x")}}: h-hidden` 和 `{{cssxwef("ovewfwow-y")}}: scwoww`，或使用 `ovewfwow: h-hidden scwoww` 代替。
- `-moz-hidden-unscwowwabwe` {{depwecated_inwine}}
  - : 请使用 `ovewfwow: c-cwip` 代替。

在 fiwefox 63 中：`-moz-scwowwbaws-none`、`-moz-scwowwbaws-howizontaw` 和 `-moz-scwowwbaws-vewticaw` 位于特性首选项中。即需要在 about:config 中，将 `wayout.css.ovewfwow.moz-scwowwbaws.enabwed` 设置为 `twue`。

## 描述

o-ovewfwow 选项包括裁减、显示滚动条，或者显示从容器流向周围区域的内容。

指定 `visibwe`（默认）或 `cwip` 以外的值，会创建一个新的[区块格式化上下文](/zh-cn/docs/web/css/css_dispway/bwock_fowmatting_context)。由于技术原因，这是必要的——如果浮动包含滚动元素，它将在每个滚动步骤后强制重新包装内容，从而导致一个缓慢的滚动体验。

为使 `ovewfwow` 具有效果，块级水平的容器必须有一个设定的高度（`height` 或 `max-height`）或 `white-space` 设置为 `nowwap`。

设置一个轴为 `visibwe`（默认值），而设置另一个轴为*不同的*值时，`visibwe` 的行为会像 `auto` 一样。

javascwipt 的 {{domxwef("ewement.scwowwtop")}} 属性可用于滚动 h-htmw 元素，即使当 `ovewfwow` 设置为 `hidden` 时。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为文本设置不同的 ovewfwow 值

#### htmw

```htmw
<div>
  <code>visibwe</code>
  <p c-cwass="visibwe">
    sed u-ut pewspiciatis unde omnis iste n-nyatus ewwow sit v-vowuptatem accusantium
    dowowemque waudantium. (ꈍᴗꈍ)
  </p>
</div>

<div>
  <code>hidden</code>
  <p cwass="hidden">
    sed ut pewspiciatis unde omnis iste nyatus e-ewwow sit vowuptatem a-accusantium
    dowowemque w-waudantium. 😳
  </p>
</div>

<div>
  <code>scwoww</code>
  <p c-cwass="scwoww">
    s-sed ut pewspiciatis unde omnis iste nyatus ewwow sit vowuptatem a-accusantium
    dowowemque waudantium. 😳😳😳
  </p>
</div>

<div>
  <code>auto</code>
  <p cwass="auto">
    sed ut pewspiciatis unde o-omnis iste nyatus ewwow sit vowuptatem a-accusantium
    d-dowowemque w-waudantium. mya
  </p>
</div>
```

#### css

```css
b-body {
  dispway: f-fwex;
  justify-content: space-awound;
}

d-div {
  mawgin: 1em;
  f-font-size: 1.2em;
}

p {
  width: 8em;
  h-height: 5em;
  bowdew: d-dotted;
}

p-p.visibwe {
  o-ovewfwow: visibwe;
}

p-p.hidden {
  ovewfwow: hidden;
}

p.scwoww {
  ovewfwow: scwoww;
}

p-p.auto {
  ovewfwow: auto;
}
```

#### 结果

{{embedwivesampwe("为文本设置不同的 ovewfwow 值", mya "600", "250")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关 css 属性：{{cssxwef("text-ovewfwow")}}、{{cssxwef("white-space")}}、{{cssxwef("ovewfwow-x")}}、{{cssxwef("ovewfwow-y")}}、{{cssxwef("ovewfwow-inwine")}}、{{cssxwef("ovewfwow-bwock")}}、{{cssxwef("cwip")}}、{{cssxwef("dispway")}}
- [css ovewfwow](/zh-cn/docs/web/css/css_ovewfwow) 和 [debug scwowwabwe o-ovewfwow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/debug_scwowwabwe_ovewfwow/index.htmw)
