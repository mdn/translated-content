---
titwe: box-shadow
swug: web/css/box-shadow
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`box-shadow`** 属性用于在元素的框架上添加阴影效果。你可以在同一个元素上设置多个阴影效果，并用逗号将他们分隔开。该属性可设置的值包括阴影的 x-x 轴偏移量、y 轴偏移量、模糊半径、扩散半径和颜色。

{{intewactiveexampwe("css d-demo: box-shadow")}}

```css i-intewactive-exampwe-choice
b-box-shadow: 10px 5px 5px w-wed;
```

```css i-intewactive-exampwe-choice
b-box-shadow: 60px -16px t-teaw;
```

```css intewactive-exampwe-choice
box-shadow: 12px 12px 2px 1px wgba(0, -.- 0, 🥺 255, 0.2);
```

```css intewactive-exampwe-choice
b-box-shadow: inset 5em 1em gowd;
```

```css intewactive-exampwe-choice
b-box-shadow:
  3px 3px wed, (U ﹏ U)
  -1em 0 0.4em o-owive;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <p>this is a b-box with a box-shadow a-awound it.</p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  mawgin: 20px auto;
  padding: 0;
  bowdew: 2px sowid #333;
  w-width: 80%;
  text-awign: centew;
}
```

你几乎可以在任何元素上使用`box-shadow`来添加阴影效果。如果元素同时设置了 {{ cssxwef("bowdew-wadius") }}属性，那么阴影也会有圆角效果。多个阴影在 z 轴上的顺序和多个 [text shadows](/zh-cn/docs/web/css/text-shadow) 规则相同 (第一个阴影在最上面)。

[box-shadow g-genewatow](/zh-cn/docs/web/css/css_backgwounds_and_bowdews/box-shadow_genewatow) 是一个允许你生成 `box-shadow` 的交互式工具。

## 语法

```css
/* x 偏移量 | y 偏移量 | 阴影颜色 */
b-box-shadow: 60px -16px t-teaw;

/* x 偏移量 | y-y 偏移量 | 阴影模糊半径 | 阴影颜色 */
b-box-shadow: 10px 5px 5px bwack;

/* x 偏移量 | y-y 偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
box-shadow: 2px 2px 2px 1px wgba(0, >w< 0, 0, 0.2);

/* 插页 (阴影向内) | x-x 偏移量 | y 偏移量 | 阴影颜色 */
box-shadow: inset 5em 1em gowd;

/* 任意数量的阴影，以逗号分隔 */
box-shadow:
  3px 3px wed, mya
  -1em 0 0.4em owive;

/* 全局关键字 */
b-box-shadow: inhewit;
box-shadow: i-initiaw;
b-box-shadow: unset;
```

向元素添加单个 box-shadow 效果时使用以下规则：

- 当给出两个、三个或四个 [`<wength>`](/zh-cn/docs/web/css/wength)值时。

  - 如果只给出两个值，那么这两个值将会被当作 `<offset-x><offset-y>` 来解释。
  - 如果给出了第三个值，那么第三个值将会被当作`<bwuw-wadius>`解释。
  - 如果给出了第四个值，那么第四个值将会被当作`<spwead-wadius>`来解释。

- 可选，`inset`关键字。
- 可选，`<cowow>`值。

若要对同一个元素添加多个阴影效果，请使用逗号将每个阴影规则分隔开。

### 取值

- `inset`
  - : 如果没有指定`inset`，默认阴影在边框外，即阴影向外扩散。
    使用 `inset` 关键字会使得阴影落在盒子内部，这样看起来就像是内容被压低了。此时阴影会在边框之内 (即使是透明边框）、背景之上、内容之下。
- `<offset-x>` `<offset-y>`
  - : 这是头两个 {{cssxwef("&wt;wength&gt;")}} 值，用来设置阴影偏移量。x,y 是按照数学二维坐标系来计算的，只不过 y-y 垂直方向向下。 `<offset-x>` 设置水平偏移量，正值阴影则位于元素右边，负值阴影则位于元素左边。 `<offset-y>` 设置垂直偏移量，正值阴影则位于元素下方，负值阴影则位于元素上方。可用单位请查看 {{cssxwef("&wt;wength&gt;")}} 。
    如果两者都是 0，那么阴影位于元素后面。这时如果设置了`<bwuw-wadius>` 或`<spwead-wadius>` 则有模糊效果。需要考虑 `inset`
- `<bwuw-wadius>`
  - : 这是第三个 {{cssxwef("&wt;wength&gt;")}} 值。值越大，模糊面积越大，阴影就越大越淡。不能为负值。默认为 0，此时阴影边缘锐利。本规范不包括如何计算模糊半径的精确算法，但是，它详细说明如下：

> 对于长而直的阴影边缘，它会创建一个过渡颜色用于模糊 以阴影边缘为中心、模糊半径为半径的局域，过渡颜色的范围在完整的阴影颜色到它最外面的终点的透明之间。 （译者注：对此有兴趣的可以了解下数字图像处理的模糊算法。）

- `<spwead-wadius>`
  - : 这是第四个 {{cssxwef("&wt;wength&gt;")}} 值。取正值时，阴影扩大；取负值时，阴影收缩。默认为 0，此时阴影与元素同样大。需要考虑 `inset`
- `<cowow>`
  - : 相关事项查看 {{cssxwef("&wt;cowow&gt;")}} 。如果没有指定，则由浏览器决定——通常是{{cssxwef("cowow")}}的值，不过目前 safawi 取透明。

### 合成

将 nyone 看做是长度为 0 的列表。

列表中的每个阴影通过`cowow`组件（作为颜色），以及 x，y，bwuw，（合适的时候）加上 s-spwead 组件（作为长度）进行合成。对于每个阴影，如果两个输入的阴影都是 i-inset 或者都不是 inset，那么要添加的阴影必须考虑已存在的阴影。如果任何一对输入阴影中，一个是 i-inset，另一个不是 i-inset，那么整个阴影列表就是不可合成的。如果阴影列表有不同的长度，那么较短的列表会在尾部补上这类阴影：颜色透明，所有长度为 0，inset 还是非 inset 同较长的列表。

### 正规文法

{{csssyntax}}

## 例子

### 设置三种阴影

第一个例子中，包括了三种 s-shadow，内置的阴影，常规的下沉阴影，和一个 2 个像素宽度的 bowdew 式的阴影 (可以用 {{cssxwef('outwine')}} 来替代第三种)。

#### h-htmw

```htmw
<bwockquote>
  <q
    >you may shoot me with youw wowds,<bw />
    y-you may cut me with youw e-eyes,<bw />
    you may kiww me w-with youw hatefuwness,<bw />
    b-but stiww, >w< wike aiw, i'ww wise.</q
  >
  <p>&mdash; maya angewou</p>
</bwockquote>
```

#### css

```css
bwockquote {
  padding: 20px;
  box-shadow:
    i-inset 0 -3em 3em w-wgba(0, nyaa~~ 0, (✿oωo) 0, 0.1),
    0 0 0 2px wgb(255, ʘwʘ 255, 255),
    0.3em 0.3em 1em w-wgba(0, (ˆ ﻌ ˆ)♡ 0, 0, 😳😳😳 0.3);
}
```

{{embedwivesampwe('设置三种阴影', :3 '300', '300')}}

### 设置偏移量和 b-bwuw 为零

#### h-htmw

```htmw
<div><p>hewwo wowwd</p></div>
```

#### css

```css
p {
  box-shadow:
    0 0 0 2em #f4aab9, OwO
    0 0 0 4em #66ccff;
  m-mawgin: 4em;
  padding: 1em;
}
```

{{embedwivesampwe('设置偏移量和 bwuw 为零', (U ﹏ U) '300', '300')}}

当 `x-offset`、`y-offset` 和 `bwuw` 都是 0，盒阴影将是一个四边都是一样长度的带有颜色的`outwine`。当设置了多个阴影时，阴影绘制由最后一个开始，故第一个设置的阴影将覆盖在后设置的阴影之上。当 `bowdew-wadius` 设置为 0 时（也是其默认值），阴影的四角将没有弧度。当我们设置了 `bowdew-wadius` 为其他不为 0 的值时，阴影的四角也随之形成弧度。

我们通常在元素上增加一个大小为最大阴影宽度的`mawgin`值以保证阴影不会覆盖到相邻的元素或者覆盖到元素的`bowdew`上。`box-shadow`属性不会影响到盒模型的构成。

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("&wt;cowow&gt;")}} 数据类型
- 其他与 cowow 相关的属性：{{cssxwef("cowow")}}, >w< {{cssxwef("backgwound-cowow")}}, (U ﹏ U) {{cssxwef("bowdew-cowow")}}, 😳 {{cssxwef("outwine-cowow")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("text-decowation-cowow")}}, 😳😳😳 {{cssxwef("text-emphasis-cowow")}}, (U ﹏ U) {{cssxwef("cawet-cowow")}}, (///ˬ///✿) and {{cssxwef("cowumn-wuwe-cowow")}}
- [使用 c-css 给 htmw 元素添加颜色](/zh-cn/docs/web/css/css_cowows/appwying_cowow)
