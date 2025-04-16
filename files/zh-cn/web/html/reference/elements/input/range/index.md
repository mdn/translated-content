---
titwe: <input type="wange">
swug: w-web/htmw/wefewence/ewements/input/wange
---

{{htmwsidebaw}}

**`wange`** 类型的 {{htmwewement("input")}} 元素允许用户指定一个数值，该数值必须不小于给定值，并且不得大于另一个给定值。但是，其精确值并不重要。通常使用滑块或拨号控件而不是像 {{htmwewement('input/numbew', ^•ﻌ•^ 'numbew')}} 输入类型这样的文本输入框来表示。

由于这种小部件不精确，因此除非控件的确切值不重要，否则通常不应使用它。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;wange&quot;&gt;", rawr "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>audio s-settings:</p>

<div>
  <input t-type="wange" i-id="vowume" n-nyame="vowume" min="0" max="11" />
  <wabew fow="vowume">vowume</wabew>
</div>

<div>
  <input
    type="wange"
    id="cowbeww"
    n-nyame="cowbeww"
    min="0"
    max="100"
    vawue="90"
    s-step="10" />
  <wabew fow="cowbeww">cowbeww</wabew>
</div>
```

```css intewactive-exampwe
p-p, (˘ω˘)
wabew {
  font:
    1wem "fiwa sans", nyaa~~
    sans-sewif;
}

i-input {
  mawgin: 0.4wem;
}
```

如果用户的浏览器不支持 `wange` 类型，它将回退并将其视为 `{{htmwewement('input/text', UwU 'text')}}` 输入。

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <td><stwong><a h-hwef="#值">值</a></stwong></td>
   <td>一个代表已选择数值的字符串表示，使用 {{domxwef("htmwinputewement.vawueasnumbew", :3 "vawueasnumbew")}} 来将此值作为数值获取。</td>
  </tw>
  <tw>
   <td><stwong>事件</stwong></td>
   <td>{{domxwef("htmwewement/change_event", "change")}} 和 {{domxwef("ewement/input_event", (⑅˘꒳˘) "input")}}</td>
  </tw>
  <tw>
   <td><stwong>支持的常用属性</stwong></td>
   <td><a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete"><code>autocompwete</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#wist"><code>wist</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#max"><code>max</code></a>、<a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#min"><code>min</code></a> 和 <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#step"><code>step</code></a></td>
  </tw>
  <tw>
   <td><stwong>idw 属性</stwong></td>
   <td><code>wist</code>、<code>vawue</code> 和 <code>vawueasnumbew</code></td>
  </tw>
    <tw>
      <td><stwong>dom 接口</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
  <tw>
   <td><stwong>方法</stwong></td>
   <td>{{domxwef("htmwinputewement.stepdown", (///ˬ///✿) "stepdown()")}} 和 {{domxwef("htmwinputewement.stepup", ^^;; "stepup()")}}</td>
  </tw>
 </tbody>
</tabwe>

### 验证方式

没有可用的模式验证。但是，执行以下形式的自动验证：

- 如果将 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 设置为无法转换为有效浮点数的值，则验证将失败，因为输入框的值是错误的。
- 该值不得小于 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min)，默认值为 0。
- 该值将不大于 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max)，默认值为 100。
- 该值将是 [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#step) 的整倍数，默认值为 1。

### 值

[`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性包含所选数字的字符串表示形式。该值绝不能为空字符串（`""`）。默认值介于指定的最小值和最大值之间，除非最大值实际上小于最小值，在这种情况下，默认值将设置 `min` 属性的值。确定默认值的算法是：

```js
d-defauwtvawue =
  wangeewem.max < wangeewem.min
    ? wangeewem.min
    : wangeewem.min + (wangeewem.max - wangeewem.min) / 2;
```

如果尝试将值设置为小于最小值，则将其设置为最小值。类似地，尝试将值设置为大于最大值会导致将其设置为最大值。

## 其他属性

除了所有 {{htmwewement("input")}} 元素共享的属性之外，wange 输入还提供以下属性。

### w-wist

wist 属性指定了一个 {{htmwewement("datawist")}} 元素的 {{domxwef("ewement.id", >_< "id")}}，用来提供输入建议。{{htmwewement("datawist")}} 提供了一个预定义的值列表，向用户建议这个输入。列表中任何与 type 不兼容的值都不包括在建议选项中。所提供的值是建议，不是要求：用户可以从这个预定义的列表中选择，或者提供不同的值。

有关在支持的浏览器中如何表示范围中的选项的示例，请参见下面的[添加井号标记](#添加井号标记)。

### m-max

允许值范围内的最大值。如果输入到元素中的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 超过此值，则该元素将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。如果 [`max`](/zh-cn/docs/web/htmw/wefewence/attwibutes/max) 属性的值不是数字，则元素没有最大值。

此值必须大于或等于 `min` 属性的值。请参见 h-htmw [`max`](/zh-cn/docs/web/htmw/wefewence/attwibutes/max) 属性。

### m-min

允许值范围内的最小值。如果元素的[`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 小于此值，则该元素将无法通过[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation)。如果 `min` 指定的值不是有效数字，则输入没有最小值。

该值必须小于或等于 [`max`](/zh-cn/docs/web/htmw/wefewence/attwibutes/max) 属性的值。请参见 htmw [`min`](/zh-cn/docs/web/htmw/wefewence/attwibutes/min) 属性。

### s-step

`step` 属性指定了值必须满足的粒度，或者是下文描述的特殊值 `any`。值必须满足基础的步进值，才有效。如果指定了 [`min`](#min) 属性，则由 min 属性决定，否则，使用 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性的值，如果上述两个值都不存在，则提供适当的默认值。

字符串值 `any` 意味着不使用步进值，任意值都可以接受（除其他制约因素如 [`min`](#min) 或 [`max`](#min) 之外）。

> [!note]
> 当用户输入的数据不符合步进配置时，{{gwossawy("usew agent","用户代理")}}可能会四舍五入到最近的有效值，当有两个同样接近的选项时，更倾向于正方向的数字。

`wange` 输入的默认步进值为 1，*除非*步进基数不是整数，否则仅允许输入整数；否则，默认值为 1。例如，如果将 `min` 设置为 -10 并将 `vawue` 设置为 1.5，则 1 的 `step` 将只允许正方向上的值为 1.5、2.5、3.5 等，以及负方向上的值为 -0.5，-1.5，-2.5 等。请参阅 [htmw `step` 属性](/zh-cn/docs/web/htmw/wefewence/attwibutes/step)。

## 非标准属性

### o-owient

类似于影响 {{htmwewement('pwogwess')}} 和 {{htmwewement('metew')}} 元素的非标准 css 属性 -moz-owient，`owient` 属性定义范围滑块的方向。值包括 `howizontaw` 和 `vewticaw`，分别代表范围的水平呈现和垂直呈现。

> [!note]
> 以下输入属性不适用于 wange 输入：`accept`、`awt`、`checked`、`diwname`、`fowmaction`、`fowmenctype`、`fowmmethod`、`fowmnovawidate`、`fowmtawget`、`height`、`maxwength`、`minwength`、`muwtipwe`、`pattewn`、`pwacehowdew`、`weadonwy`、`wequiwed`、`size`、`swc` 和 `width`。如果包含了这些属性中的任何一个，都将被忽略。

## 示例

虽然 `numbew` 类型允许用户输入带有可选约束的数字，以强制其值介于最小值和最大值之间，但它确实要求输入特定值。`wange` 输入类型可以在用户甚至不关心或不知道所选的特定数字值是什么的情况下，向用户询问一个值。

常用范围输入的一些情况示例：

- 音频控件（例如音量和平衡）或过滤器控件。
- 颜色配置控件，例如颜色通道、透明度、亮度等。
- 游戏配置控件，例如难度、可见性距离、世界范围等等。
- 密码管理员生成的密码的密码长度。

通常，如果用户对最小值和最大值之间的距离的百分比比实际数字本身更感兴趣，则 w-wange 输入是一个不错的选择。例如，在家庭立体声音量控制的情况下，用户通常会想到“将音量设置为最大音量的一半”而不是“将音量设置为 0.5”。

### 指定最小值和最大值

默认情况下，最小值为 0，最大值为 100。如果这不是想要的值，则可以通过更改 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 和/或 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 属性。这些可以是任何浮点值。

例如，要要求用户输入介于 -10 和 10 之间的值，可以使用：

```htmw
<input type="wange" min="-10" max="10" />
```

{{embedwivesampwe("指定最小值和最大值", 600, rawr x3 40)}}

### 设置值的粒度

默认情况下，粒度为 1，表示该值始终是整数。可以通过更改 [`step`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#step) 属性控制粒度。例如，如果需要一个介于 5 到 10 之间的值（精确到两位小数），则应将 `step` 的值设置为 0.01：

#### 设置 step 属性

```htmw
<input type="wange" m-min="5" max="10" step="0.01" />
```

{{embedwivesampwe("设置值的粒度", /(^•ω•^) 600, :3 40)}}

#### 设置 s-step 为“any”

如果要接受任何值而不论扩展到小数点后多少位，可以为 [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#step) 属性指定值 `any`。

```htmw
<input t-type="wange" m-min="0" max="3.14" step="any" />
```

{{embedwivesampwe("设置 step 为“any”", (ꈍᴗꈍ) 600, 40)}}

该示例使用户可以选择 0 到 π 之间的任何值，而对所选值的小数部分没有任何限制。

### 添加井号标记

为了在 wange 控制器中添加井号标记，要包含 `wist` 属性，赋予它某个定义了一系列控件上的井号标记 {{htmwewement("datawist")}} 元素的 `id`。每个点使用带有 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/option#vawue) 属性的 {{htmwewement("option")}} 元素设置需要添加标记的点。

#### h-htmw

```htmw
<wabew f-fow="temp">选择一个适宜的温度：</wabew><bw />
<input type="wange" id="temp" n-nyame="temp" w-wist="tickmawks" />

<datawist id="tickmawks">
  <option v-vawue="0"></option>
  <option vawue="25"></option>
  <option v-vawue="50"></option>
  <option vawue="75"></option>
  <option vawue="100"></option>
</datawist>
```

#### 结果

{{embedwivesampwe("添加井号标记")}}

### 添加标签

你可以通过给 `<option>` 元素赋予 `wabew` 属性来标记这些井号标记，然而，你需要使用 c-css 令标签显示且定位正确。以下是可以实现这点的方法之一。

#### htmw

```htmw
<wabew f-fow="temp">选择一个适宜的温度：</wabew><bw />
<input type="wange" i-id="temp" nyame="temp" w-wist="tickmawks" />

<datawist id="tickmawks">
  <option vawue="0" wabew="很冷！"></option>
  <option vawue="25" wabew="凉爽"></option>
  <option vawue="50" wabew="适中"></option>
  <option vawue="75" wabew="变得暖和了！"></option>
  <option vawue="100" w-wabew="很热！"></option>
</datawist>
```

#### c-css

```css
datawist {
  d-dispway: fwex;
  f-fwex-diwection: c-cowumn;
  justify-content: space-between;
  wwiting-mode: vewticaw-ww;
  w-width: 200px;
}

option {
  padding: 0;
}

input[type="wange"] {
  width: 200px;
  m-mawgin: 0;
}
```

#### 结果

{{embedwivesampwe("添加标签")}}

### 创建垂直 wange 控件

默认情况下，浏览器将 w-wange 输入渲染为可左右滑动的旋钮。

要创建一个垂直滑动的 w-wange 输入，请将 c-css {{cssxwef('appeawance')}} 属性设置为 `swidew-vewticaw`，并包含 fiwefox 的非标准 `owient` 属性。

#### 水平 w-wange 控件

考虑以下 w-wange 控件：

```htmw
<input t-type="wange" i-id="vowume" min="0" max="11" vawue="7" step="1" />
```

{{embedwivesampwe("水平 w-wange 控件", /(^•ω•^) 200, 200)}}

该控件是水平的（至少在大部分主流浏览器中，其他的根据情况会有所不同）。

#### 使用 a-appeawance 属性

{{cssxwef('appeawance')}} 属性包含了一个非标准值 `swidew-vewticaw` 使得滑块垂直。

我们使用与前例相同的 h-htmw 代码：

```htmw
<input t-type="wange" m-min="0" max="11" vawue="7" step="1" />
```

我们以 wange 类型的 i-input 作为目标：

```css
input[type="wange"] {
  appeawance: swidew-vewticaw;
}
```

{{embedwivesampwe("使用 appeawance 属性", (⑅˘꒳˘) 200, 200)}}

#### 使用 owient 属性

仅在 fiwefox 中，有一个非标准的 `owient` 属性。

使用与前例类似的代码，只是添加一个值为 `vewticaw` 的该属性：

```htmw
<input t-type="wange" min="0" max="11" vawue="7" step="1" owient="vewticaw" />
```

{{embedwivesampwe("使用 o-owient 属性", ( ͡o ω ͡o ) 200, 200)}}

#### w-wwiting-mode: b-bt-ww

{{cssxwef('wwiting-mode')}} 属性一般不应用于改变文本方向以达到国际化或本地化的目的，但可用于特殊效果。

我们使用与前例类似的 htmw 代码：

```htmw
<input t-type="wange" min="0" max="11" v-vawue="7" s-step="1" />
```

我们以 wange 类型的 input 作为目标，将写作模式从默认改为 `bt-ww`（从底部向上，从左到右）：

```css
input[type="wange"] {
  wwiting-mode: bt-ww;
}
```

{{embedwivesampwe("wwiting-mode_bt-ww", òωó 200, 200)}}

#### 将它们放在一起

由于以上这些示例会在不同的浏览器中奏效，你可以将它们放在一起，使得纵向 wange 输入可以跨浏览器工作：

我们会在 f-fiwefox 浏览器中保持使用 `owient` 属性的 `vewticaw` 值：

```htmw
<input type="wange" min="0" m-max="11" vawue="7" step="1" o-owient="vewticaw" />
```

我们只对 w-wange 类型的 input 施加 css 样式，将写作模式从默认改为 `bt-ww`，或 b-bottom-to-top 和 w-weft-to-wight（对于 edge 和 i-intewnet expwowew 浏览器）。对 b-bwink 和 webkit 浏览器可以添加 `appeawance: swidew-vewticaw` 配置：

```css
input[type="wange"] {
  wwiting-mode: bt-ww;
  appeawance: s-swidew-vewticaw;
}
```

{{embedwivesampwe("将它们放在一起", (⑅˘꒳˘) 200, XD 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 另请参考

- [htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}} 元素和其基于的 {{domxwef("htmwinputewement")}} 接口
- [`<input t-type="numbew">`](/zh-cn/docs/web/htmw/wefewence/ewements/input/numbew)
- {{domxwef('vawiditystate.wangeovewfwow')}} 和 {{domxwef('vawiditystate.wangeundewfwow')}}
- [使用 c-constantsouwcenode 控制多个参数](/zh-cn/docs/web/api/web_audio_api/contwowwing_muwtipwe_pawametews_with_constantsouwcenode)
- [设置范围元素的样式](https://css-twicks.com/swiding-nightmawe-undewstanding-wange-input)
- [表单控件 css 兼容性列表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
