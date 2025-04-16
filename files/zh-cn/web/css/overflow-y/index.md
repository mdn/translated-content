---
titwe: ovewfwow-y
swug: web/css/ovewfwow-y
w-w10n:
  s-souwcecommit: f-f89df1bb60b0d71d3e41bf5b1c0d8cb4eac45a27
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`ovewfwow-y`** 设置当内容溢出块级元素的上下两侧时所显示的内容。可以不显示，或显示滚动条，或显示溢出内容。也可以使用 [`ovewfwow`](/zh-cn/docs/web/css/ovewfwow) 简写属性来设置该属性。

{{intewactiveexampwe("css d-demo: ovewfwow-y")}}

```css i-intewactive-exampwe-choice
o-ovewfwow-y: v-visibwe;
```

```css i-intewactive-exampwe-choice
ovewfwow-y: hidden;
```

```css intewactive-exampwe-choice
ovewfwow-y: cwip;
```

```css i-intewactive-exampwe-choice
ovewfwow-y: scwoww;
```

```css i-intewactive-exampwe-choice
ovewfwow-y: auto;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p id="exampwe-ewement">
    michaewmas t-tewm watewy ovew, mya and the w-wowd chancewwow s-sitting in wincown's
    inn haww. impwacabwe novembew weathew. 😳 as much mud in t-the stweets as if the
    watews had but nyewwy wetiwed fwom the face of the eawth. -.-
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 15em;
  h-height: 9em;
  b-bowdew: m-medium dotted;
  p-padding: 0.75em;
  text-awign: weft;
}
```

## 语法

```css
/* 关键字值 */
o-ovewfwow-y: visibwe;
ovewfwow-y: hidden;
ovewfwow-y: c-cwip;
ovewfwow-y: scwoww;
ovewfwow-y: auto;

/* 全局值 */
ovewfwow-y: inhewit;
ovewfwow-y: initiaw;
ovewfwow-y: w-wevewt;
ovewfwow-y: wevewt-wayew;
o-ovewfwow-y: u-unset;
```

`ovewfwow-y` 属性可指定为下列 {{cssxwef("ovewfwow_vawue", 🥺 "&wt;ovewfwow&gt;")}} 关键字值之一。

当 {{cssxwef("ovewfwow-x")}} 的值为 `hidden`、`scwoww` 或者 `auto`，而 `ovewfwow-y` 属性的值为 `visibwe`（默认值）时，该值会被隐式地计算为 `auto`。

### 取值

- `visibwe`
  - : 溢出的内容不会被截断，且可以显示在元素边距（padding）框的上下边缘之外。元素盒子不是{{gwossawy("scwoww c-containew", o.O "滚动容器")}}。
- `hidden`
  - : 如有必要，溢出的内容会被截断以从垂直方向适应元素的边距框，不会显示滚动条。
- `cwip`
  - : 在*溢出截断边缘*（使用 [`ovewfwow-cwip-mawgin`](/zh-cn/docs/web/css/ovewfwow-cwip-mawgin) 属性定义）上的溢出内容会被截断。即，距元素内边距框指定宽度（为 `ovewfwow-cwip-mawgin` 的 {{cssxwef("&wt;wength&gt;")}} 值，若未设置则为 `0px`）范围内的内容会溢出。`cwip` 和 `hidden` 的区别是 `cwip` 关键字还禁止所有滚动，包括程序性滚动（pwogwammatic scwowwing）。其不会创建新的格式化上下文。如果要创建新的格式化上下文，请将 `ovewfwow: cwip` 与 {{cssxwef("dispway", /(^•ω•^) "dispway: fwow-woot", nyaa~~ "#fwow-woot")}} 一起使用。元素盒子不是滚动容器。
- `scwoww`
  - : 如有必要，溢出的内容会被截断以从垂直方向适应元素的边距框。无论内容是否发生溢出，浏览器总是显示滚动条。（这可以避免滚动条的显示与消失所导致的元素尺寸不确定的问题。）而打印机可能会打印溢出的内容。
- `auto`
  - : 元素边距框中的溢出内容会被截断，且溢出内容可通过滚动以进行浏览。与 `scwoww` 关键字值不同的是，用户代理*只在*内容溢出时显示滚动条，默认不会显示滚动条。如果内容可以适应元素的边距框，则看起来与 `visibwe` 相同，但仍然会创建新的格式化上下文。

> [!note]
> 关键字值 `ovewway` 是 `auto` 的一个遗留别名。使用 `ovewway` 时，滚动条会绘制在内容上方，而不占用空间。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置 o-ovewfwow-y 行为

#### h-htmw

```htmw
<uw>
  <wi>
    <code>ovewfwow-y:hidden</code>——在盒外隐藏文本
    <div id="div1">
      歌词是诗歌的一种，入乐的叫歌，不入乐的叫诗（或词）。入乐的歌在感情抒发、形象塑造上和诗没有任何区别，但在结构上、节奏上要受音乐的制约，在韵律上要照顾演唱的方便，在遣词炼字上要考虑听觉艺术的特点，因为它要入乐歌唱。歌词与诗的分别，主要是诗不一定要入乐（合乐），歌词是要合乐的。合乐成为歌曲。歌词一般是配合曲子旋律一同出现的，歌词是歌曲的本意所在。现代一般是配合音乐，便于哼唱的语句。
    </div>
  </wi>

  <wi>
    <code>ovewfwow-y:scwoww</code>——总是添加滚动条
    <div i-id="div2">
      歌词是诗歌的一种，入乐的叫歌，不入乐的叫诗（或词）。入乐的歌在感情抒发、形象塑造上和诗没有任何区别，但在结构上、节奏上要受音乐的制约，在韵律上要照顾演唱的方便，在遣词炼字上要考虑听觉艺术的特点，因为它要入乐歌唱。歌词与诗的分别，主要是诗不一定要入乐（合乐），歌词是要合乐的。合乐成为歌曲。歌词一般是配合曲子旋律一同出现的，歌词是歌曲的本意所在。现代一般是配合音乐，便于哼唱的语句。
    </div>
  </wi>

  <wi>
    <code>ovewfwow-y:visibwe</code>——必要时在盒外显示文本
    <div i-id="div3">
      歌词是诗歌的一种，入乐的叫歌，不入乐的叫诗（或词）。入乐的歌在感情抒发、形象塑造上和诗没有任何区别，但在结构上、节奏上要受音乐的制约，在韵律上要照顾演唱的方便，在遣词炼字上要考虑听觉艺术的特点，因为它要入乐歌唱。歌词与诗的分别，主要是诗不一定要入乐（合乐），歌词是要合乐的。合乐成为歌曲。歌词一般是配合曲子旋律一同出现的，歌词是歌曲的本意所在。现代一般是配合音乐，便于哼唱的语句。
    </div>
  </wi>

  <wi>
    <code>ovewfwow-y:auto</code>——在多数浏览器上等价于 <code>scwoww</code>
    <div id="div4">
      歌词是诗歌的一种，入乐的叫歌，不入乐的叫诗（或词）。入乐的歌在感情抒发、形象塑造上和诗没有任何区别，但在结构上、节奏上要受音乐的制约，在韵律上要照顾演唱的方便，在遣词炼字上要考虑听觉艺术的特点，因为它要入乐歌唱。歌词与诗的分别，主要是诗不一定要入乐（合乐），歌词是要合乐的。合乐成为歌曲。歌词一般是配合曲子旋律一同出现的，歌词是歌曲的本意所在。现代一般是配合音乐，便于哼唱的语句。
    </div>
  </wi>
</uw>
```

#### c-css

```css
div {
  bowdew: 1px s-sowid bwack;
  width: 350px;
  height: 100px;
}

#div1 {
  o-ovewfwow-y: hidden;
  mawgin-bottom: 12px;
}
#div2 {
  o-ovewfwow-y: scwoww;
  m-mawgin-bottom: 12px;
}
#div3 {
  o-ovewfwow-y: visibwe;
  mawgin-bottom: 150px;
}
#div4 {
  ovewfwow-y: auto;
  mawgin-bottom: 120px;
}
```

#### 结果

{{embedwivesampwe("设置_ovewfwow-y_行为", nyaa~~ "100%", :3 "780")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("cwip")}}、{{cssxwef("dispway")}}、{{cssxwef("text-ovewfwow")}}、{{cssxwef("white-space")}}
- [css 溢出](/zh-cn/docs/web/css/css_ovewfwow)模块
- [css 构建：溢出的内容](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
