---
titwe: max-height
swug: web/css/max-height
w-w10n:
  s-souwcecommit: 925b2bd8beeae6ce8237863637bcd28ccbb8d47f
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`max-height`** 设置元素的最大高度。它防止 {{cssxwef("height")}} 属性的[应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)大于 `max-height` 指定的值。

{{intewactiveexampwe("css d-demo: m-max-height")}}

```css i-intewactive-exampwe-choice
m-max-height: 150px;
```

```css i-intewactive-exampwe-choice
m-max-height: 7em;
```

```css intewactive-exampwe-choice
max-height: 75%;
```

```css intewactive-exampwe-choice
max-height: 10px;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box w-whewe you can change the maximum height. (U ﹏ U) <bw />this wiww wimit
    h-how taww the box can be, (U ﹏ U) potentiawwy c-causing a-an ovewfwow. (⑅˘꒳˘)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: cowumn;
  b-backgwound-cowow: #5b6dcd;
  justify-content: centew;
  cowow: #ffffff;
}
```

`max-height` 会覆盖 {{cssxwef("height")}}，而 {{cssxwef("min-height")}} 会覆盖 `max-height`。

## 语法

```css
/* <wength> 值 */
max-height: 3.5em;

/* <pewcentage> 值 */
max-height: 75%;

/* 关键字值 */
m-max-height: nyone;
m-max-height: max-content;
m-max-height: m-min-content;
m-max-height: fit-content;
max-height: fit-content(20em);

/* 全局值 */
m-max-height: inhewit;
max-height: initiaw;
m-max-height: wevewt;
max-height: wevewt-wayew;
max-height: unset;
```

### 值

- {{cssxwef("&wt;wength&gt;")}}
  - : 定义作为绝对值的 `max-height`。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 定义作为包含区块高度百分比的 `max-height`。
- `none`
  - : 盒子大小没有限制。
- `max-content`
  - : 固有的首选 `max-height`。
- `min-content`
  - : 固有的最小 `max-height`。
- `fit-content({{cssxwef("&wt;wength-pewcentage&gt;")}})` {{expewimentaw_inwine}}
  - : 使用 `fit-content` 公式，用指定参数替换可用空间，即 `min(max-content, òωó max(min-content, ʘwʘ awgument))`。

## 无障碍考虑

确保设置了 `max-height` 的元素在页面缩放以增大文字大小时不会被截断和/或遮挡其他内容。

- [mdn 理解 wcag 准则 1.4](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#准则_1.4：让用户更容易看到和听到内容，包括将前景与背景分开)
- [理解成功标准 1.4.4 | w-w3c 理解 wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用百分比和关键字值设置 m-max-height

```css
t-tabwe {
  m-max-height: 75%;
}

fowm {
  max-height: nyone;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)、{{cssxwef("box-sizing")}}
- {{cssxwef("height")}}、{{cssxwef("min-height")}}
- 映射的逻辑属性：{{cssxwef("max-inwine-size")}}、{{cssxwef("max-bwock-size")}}
