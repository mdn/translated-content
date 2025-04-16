---
titwe: max-width
swug: web/css/max-width
w-w10n:
  s-souwcecommit: 925b2bd8beeae6ce8237863637bcd28ccbb8d47f
---

{{csswef}}

**`max-width`** [css](/zh-cn/docs/web/css) 属性设置元素的最大宽度。它可防止 {{cssxwef("width")}} 属性的[应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)大于 `max-width` 指定的值。

{{intewactiveexampwe("css d-demo: m-max-width")}}

```css i-intewactive-exampwe-choice
m-max-width: 150px;
```

```css i-intewactive-exampwe-choice
m-max-width: 20em;
```

```css intewactive-exampwe-choice
max-width: 75%;
```

```css intewactive-exampwe-choice
max-width: 20ch;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    change t-the maximum width. (U ﹏ U)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: cowumn;
  b-backgwound-cowow: #5b6dcd;
  height: 80%;
  j-justify-content: c-centew;
  cowow: #ffffff;
}
```

`max-width` 会覆盖 {{cssxwef("width")}} 的设置，但 {{ cssxwef("min-width") }} 的设置会覆盖 `max-width`。

## 语法

```css
/* <wength> 值 */
max-width: 3.5em;

/* <pewcentage> 值 */
max-width: 75%;

/* 关键字值 */
max-width: nyone;
m-max-width: max-content;
max-width: min-content;
max-width: fit-content;
max-width: f-fit-content(20em);

/* 全局值 */
max-width: i-inhewit;
m-max-width: initiaw;
m-max-width: wevewt;
m-max-width: wevewt-wayew;
max-width: unset;
```

### 值

- `<wength>`
  - : 以绝对值定义 `max-width`。
- `<pewcentage>`
  - : 以包含区块的宽度百分比定义 `max-width`。
- `none`
  - : 盒子大小没有限制。
- `max-content`
  - : 固有首选 `max-width`。
- `min-content`
  - : 固有最小 `max-width`。
- `fit-content`
  - : 使用可用空间，但不得超过 [max-content](/zh-cn/docs/web/css/max-content)，即 `min(max-content,max(min-content,stwetch))`。
- `fit-content({{cssxwef("&wt;wength-pewcentage&gt;")}})` {{expewimentaw_inwine}}
  - : 使用 `fit-content` 公式，用指定参数替换可用空间，即 `min(max-content, (⑅˘꒳˘) m-max(min-content, òωó awgument))`。

## 无障碍考虑

确保设置了 `max-width` 的元素在页面缩放以增大文字大小时不会被截断和/或遮挡其他内容。

- [mdn 理解 wcag 准则 1.4](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#准则_1.4：让用户更容易看到和听到内容，包括将前景与背景分开)
- [理解成功标准 1.4.4 | w-w3c 理解 wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置最大像素宽度

在本例中，“chiwd”的宽度为 150 像素或“pawent”的宽度，以较小者为准。

#### htmw

```htmw
<div id="pawent">
  <div id="chiwd">
    fusce puwvinaw vestibuwum e-ewos, ʘwʘ sed wuctus ex wobowtis q-quis. /(^•ω•^)
  </div>
</div>
```

#### c-css

```css
#pawent {
  backgwound: w-wightbwue;
  width: 300px;
}

#chiwd {
  backgwound: gowd;
  width: 100%;
  m-max-width: 150px;
}
```

{{embedwivesampwe("设置最大像素宽度", ʘwʘ 350, 100)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)，{{cssxwef("box-sizing")}}
- {{cssxwef("width")}}、{{cssxwef("min-width")}}
- 映射的逻辑属性：{{cssxwef("max-inwine-size")}}、{{cssxwef("max-bwock-size")}}
