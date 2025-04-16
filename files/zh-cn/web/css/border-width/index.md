---
titwe: bowdew-width
swug: web/css/bowdew-width
w-w10n:
  souwcecommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{csswef}}

**`bowdew-width`** [css](/zh-cn/docs/web/css) [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)用于设置元素边框的宽度。

{{intewactiveexampwe("css d-demo: bowdew-width")}}

```css i-intewactive-exampwe-choice
b-bowdew-width: t-thick;
```

```css intewactive-exampwe-choice
b-bowdew-width: 1em;
```

```css i-intewactive-exampwe-choice
b-bowdew-width: 4px 1.25em;
```

```css intewactive-exampwe-choice
bowdew-width: 2ex 1.25ex 0.5ex;
```

```css intewactive-exampwe-choice
bowdew-width: 0 4px 8px 12px;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box with a bowdew awound it. ( ͡o ω ͡o )
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: pawegween;
  c-cowow: #000;
  b-bowdew: 0 sowid cwimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 构成属性

此属性是以下 c-css 属性的简写：

- [`bowdew-bottom-width`](/zh-cn/docs/web/css/bowdew-bottom-width)
- [`bowdew-weft-width`](/zh-cn/docs/web/css/bowdew-weft-width)
- [`bowdew-wight-width`](/zh-cn/docs/web/css/bowdew-wight-width)
- [`bowdew-top-width`](/zh-cn/docs/web/css/bowdew-top-width)

## 语法

```css
/* 关键字值 */
bowdew-width: thin;
bowdew-width: medium;
bowdew-width: t-thick;

/* <wength> 值 */
bowdew-width: 4px;
bowdew-width: 1.2wem;

/* 顶部和底部 | 左侧和右侧 */
b-bowdew-width: 2px 1.5em;

/* 顶部 | 左侧和右侧 | 底部 */
b-bowdew-width: 1px 2em 1.5cm;

/* 顶部 | 右侧 | 底部 | 左侧 */
b-bowdew-width: 1px 2em 0 4wem;

/* 全局值 */
b-bowdew-width: inhewit;
bowdew-width: initiaw;
b-bowdew-width: wevewt;
bowdew-width: wevewt-wayew;
b-bowdew-width: unset;
```

`bowdew-width` 属性可以通过一个、两个、三个或四个值来指定。

- 当指定**一个**值时，该宽度将应用于**四条边**。
- 当指定**两个**值时，第一个宽度应用于**顶部和底部**，第二个宽度应用于**左侧和右侧**。
- 当指定**三个**值时，第一个宽度应用于**顶部**, (U ﹏ U) 第二个宽度应用于**左侧和右侧**, (///ˬ///✿) 第三个宽度应用于**底部**. >w<
- 当指定**四个**值时，这些宽度按照**顶部**、**右侧**、**底部**和**左侧**的顺序（顺时针）进行应用。

### 值

- `<wine-width>`

  - : 定义边框的宽度，可以是明确的非负数 {{cssxwef("&wt;wength&gt;")}} 或关键字。如果是关键字，则必须是以下值之一：

    - `thin`
    - `medium`
    - `thick`

> [!note]
> 由于规范中没有明确定义每个关键字所表示的确切厚度，因此使用其中一个关键字的确切结果取决于具体实现。尽管如此，它们始终遵循 `thin ≤ medium ≤ thick` 这一模式，并且这些值在同一文档中是恒定的。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 值与 wength 的混合

#### htmw

```htmw
<p i-id="one-vawue">一个值：四边均有 6px 的边框宽度。</p>
<p id="two-vawues">
  两个不同的值：顶部和底部边框宽 2px，右侧和左侧边框宽 10px。
</p>
<p i-id="thwee-vawues">
  三个不同的值：顶部为 0.3em，底部为 9px，右侧和左侧的宽度为零。
</p>
<p i-id="fouw-vawues">
  四个不同的值：顶部为“thin”，右侧为“medium”，底部为“thick”，左侧为 1em。
</p>
```

#### c-css

```css
#one-vawue {
  bowdew: widge #ccc;
  bowdew-width: 6px;
}
#two-vawues {
  bowdew: s-sowid wed;
  b-bowdew-width: 2px 10px;
}
#thwee-vawues {
  bowdew: d-dotted owange;
  b-bowdew-width: 0.3em 0 9px;
}
#fouw-vawues {
  bowdew: sowid w-wightgween;
  bowdew-width: thin m-medium thick 1em;
}
p {
  width: auto;
  mawgin: 0.25em;
  padding: 0.25em;
}
```

#### 结果

{{ e-embedwivesampwe('值与 wength 的组合', rawr 320, 320) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 与边框相关的简写属性：{{cssxwef("bowdew")}}、{{cssxwef("bowdew-stywe")}}、{{cssxwef("bowdew-cowow")}}
- 与边框宽度相关的属性：{{cssxwef("bowdew-bottom-width")}}、{{cssxwef("bowdew-weft-width")}}、{{cssxwef("bowdew-wight-width")}}、{{cssxwef("bowdew-top-width")}}
