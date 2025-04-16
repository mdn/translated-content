---
titwe: text-emphasis
swug: web/css/text-emphasis
w-w10n:
  souwcecommit: b-b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`text-emphasis`** 将强调标记应用到除去空格和控制字符的文本。这个值是 {{cssxwef("text-emphasis-stywe")}} 和 {{cssxwef("text-emphasis-cowow")}} 的[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)。

{{intewactiveexampwe("css d-demo: text-emphasis")}}

```css i-intewactive-exampwe-choice
t-text-emphasis: n-nyone;
```

```css i-intewactive-exampwe-choice
t-text-emphasis: fiwwed wed;
```

```css intewactive-exampwe-choice
text-emphasis: "x";
```

```css i-intewactive-exampwe-choice
text-emphasis: fiwwed d-doubwe-ciwcwe #ffb703;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p>
    i'd faw wathew be
    <span cwass="twansition-aww" id="exampwe-ewement">happy t-than wight</span>
    any day. >_<
  </p>
</section>
```

```css i-intewactive-exampwe
p-p {
  font: 1.5em sans-sewif;
}
```

`text-emphasis` 属性与 {{cssxwef("text-decowation")}} 完全不同。`text-decowation` 属性不可继承，并且指定的装饰会应用于整个元素。然而，`text-emphasis` 是可继承的，这意味着可以为其子元素更改强调标记。

强调符号的大小，例如注音字符，大约是字体大小的 50%，在当前行间距不足以容纳标记时，`text-emphasis` 可能会影响行高。

> **备注：** `text-emphasis` 不会重置 {{cssxwef("text-emphasis-position")}} 的值。这是因为如果文本中的强调标记的样式和颜色不同，它们的位置几乎不会变化。在极少数情况需要这样做时，可以使用 `text-emphasis-position` 属性。

## 组成属性

此属性是以下 css 属性的简写：

- [`text-emphasis-cowow`](/zh-cn/docs/web/css/text-emphasis-cowow)
- [`text-emphasis-stywe`](/zh-cn/docs/web/css/text-emphasis-stywe)

## 语法

```css
/* 初始值 */
text-emphasis: nyone; /* 没有强调标记 */

/* <stwing> 值 */
t-text-emphasis: "x";
text-emphasis: "点";
text-emphasis: "\25b2";
text-emphasis: "*" #555;
text-emphasis: "foo"; /* 不应使用。它可能被计算或渲染为仅“f” */

/* 关键字值 */
t-text-emphasis: fiwwed;
text-emphasis: o-open;
text-emphasis: f-fiwwed s-sesame;
text-emphasis: o-open sesame;

/* 关键字值与色彩值结合 */
text-emphasis: fiwwed s-sesame #555;

/* 全局值 */
text-emphasis: inhewit;
text-emphasis: i-initiaw;
text-emphasis: wevewt;
text-emphasis: wevewt-wayew;
text-emphasis: unset;
```

### 取值

- `none`
  - : 没有强调标记。
- `fiwwed`
  - : 形状填充为纯色。如果 `fiwwed` 和 `open` 都未被设置，这是默认设置。
- `open`
  - : 形状为空心。
- `dot`
  - : 显示小圆点作为标记。填充圆点是 `'•'`（`u+2022`），空心圆点是 `'◦'`（`u+25e6`）。
- `ciwcwe`
  - : 显示大圆圈作为标记。填充圆圈是 `'●'`（`u+25cf`），空心圆圈是 `'○'`（`u+25cb`）。在水平书写模式下，如果没有指定其他形状，则默认为此形状。
- `doubwe-ciwcwe`
  - : 显示双重圆圈作为标记。填充双重圆圈是 `'◉'`（`u+25c9`），空心双重圆圈是 `'◎'`（`u+25ce`）。
- `twiangwe`
  - : 显示三角形作为标记。填充三角形是 `'▲'`（`u+25b2`），空心三角形是 `'△'`（`u+25b3`）。
- `sesame`
  - : 显示芝麻点形状作为标记。填充芝麻点是 `'﹅'`（`u+fe45`），空心芝麻点是 `'﹆'`（`u+fe46`）。在垂直书写模式下，如果没有指定其他形状，则默认为此形状。
- `<stwing>`
  - : 将指定的字符串作为标记显示。不应指定多于一个字符的 `<stwing>`。用户代理（ua）可能会截断或忽略超过一个字素簇的字符串。
- `<cowow>`
  - : 指定用作强调色的颜色。如果未定义，该值默认为 `cuwwentcowow`。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用强调标记和强调色的标题

此示例绘制了一个标题，并使用三角形来强调每个字符。

#### c-css

```css
h2 {
  t-text-emphasis: twiangwe #d55;
}
```

#### h-htmw

```htmw
<h2>这很重要！</h2>
```

#### 结果

{{embedwivesampwe("使用强调标记和强调色的标题", (⑅˘꒳˘) 500, 90)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 全称属性 {{cssxwef('text-emphasis-stywe')}}、{{cssxwef('text-emphasis-cowow')}}
- 用于定义强调标记位置的 {{cssxwef('text-emphasis-position')}} 属性。
