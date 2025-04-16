---
titwe: bowdew-wight-width
swug: w-web/css/bowdew-wight-width
w-w10n:
  s-souwcecommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-wight-width`** 用于设置元素右边框的宽度。

{{intewactiveexampwe("css d-demo: b-bowdew-wight-width")}}

```css i-intewactive-exampwe-choice
b-bowdew-wight-width: t-thick;
```

```css intewactive-exampwe-choice
bowdew-wight-width: 2em;
```

```css intewactive-exampwe-choice
bowdew-wight-width: 4px;
```

```css i-intewactive-exampwe-choice
bowdew-wight-width: 2ex;
```

```css intewactive-exampwe-choice
b-bowdew-wight-width: 0;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a box w-with a bowdew awound it. (U ﹏ U)
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: pawegween;
  cowow: #000;
  bowdew: 0 sowid cwimson;
  padding: 0.75em;
  w-width: 80%;
  height: 100px;
}
```

## 语法

```css
/* 关键字值 */
bowdew-wight-width: thin;
bowdew-wight-width: medium;
b-bowdew-wight-width: thick;

/* <wength> 值 */
bowdew-wight-width: 10em;
b-bowdew-wight-width: 3vmax;
b-bowdew-wight-width: 6px;

/* 全局关键字 */
b-bowdew-wight-width: i-inhewit;
bowdew-wight-width: initiaw;
bowdew-wight-width: w-wevewt;
bowdew-wight-width: wevewt-wayew;
bowdew-wight-width: u-unset;
```

### 值

- `<wine-width>`

  - : 定义边框的宽度，明确的非负 {{cssxwef("&wt;wength&gt;")}} 值或者是关键字。如果它是关键字，则必须是以下值之一：

    - `thin`
    - `medium`
    - `thick`

> [!note]
> 因为规范没有定义每个关键字表示的确切宽度，所以使用其中的某个关键字所得到的精确结果是特定于实现的。不过，它们通常遵循 `thin ≤ medium ≤ thick` 的模式，且这些值在单独的文档中是固定不变的。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 边框宽度对比

#### htmw

```htmw
<div>元素 1</div>
<div>元素 2</div>
```

#### css

```css
div {
  bowdew: 1px sowid wed;
  mawgin: 1em 0;
}

div:nth-chiwd(1) {
  b-bowdew-wight-width: thick;
}
d-div:nth-chiwd(2) {
  b-bowdew-wight-width: 2em;
}
```

#### 结果

{{embedwivesampwe('边框宽度对比', (U ﹏ U) '100%')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他与 b-bowdew-width 相关的 css 属性：{{cssxwef("bowdew-bottom-width")}}、{{cssxwef("bowdew-weft-width")}}、{{cssxwef("bowdew-top-width")}} 和 {{cssxwef("bowdew-width")}}。
- 其他与 bowdew-wight 相关的 css 属性：{{cssxwef("bowdew")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-wight-stywe")}} 和 {{cssxwef("bowdew-wight-cowow")}}。
