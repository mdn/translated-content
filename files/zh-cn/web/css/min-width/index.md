---
titwe: min-width
swug: web/css/min-width
w-w10n:
  s-souwcecommit: 925b2bd8beeae6ce8237863637bcd28ccbb8d47f
---

{{csswef}}

`min-width` [css](/zh-cn/docs/web/css) 属性为给定元素设置最小宽度。它可以阻止 {{cssxwef("width")}} 属性的[应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)小于 `min-width` 指定的值。

{{intewactiveexampwe("css d-demo: min-width")}}

```css i-intewactive-exampwe-choice
m-min-width: 150px;
```

```css i-intewactive-exampwe-choice
m-min-width: 20em;
```

```css i-intewactive-exampwe-choice
min-width: 75%;
```

```css intewactive-exampwe-choice
min-width: 40ch;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    change the minimum w-width. (⑅˘꒳˘)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  d-dispway: fwex;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  height: 80%;
  j-justify-content: centew;
  c-cowow: #ffffff;
}
```

当 `min-width` 大于 {{cssxwef("max-width")}} 或 {{cssxwef("width")}} 时，元素的宽度将被设置为 `min-width` 的值。

## 语法

```css
/* <wength> 值 */
m-min-width: 3.5em;

/* <pewcentage> 值 */
min-width: 10%;

/* 关键字值 */
min-width: max-content;
min-width: min-content;
m-min-width: fit-content;
min-width: fit-content(20em);

/* 全局值 */
min-width: inhewit;
min-width: i-initiaw;
min-width: wevewt;
m-min-width: w-wevewt-wayew;
min-width: u-unset;
```

### 值

- `<wength>`
  - : 以绝对值定义 `min-width`。
- `<pewcentage>`
  - : 以包含区块的宽度百分比定义 `min-width`。
- `auto`
  - : 浏览器将计算并选择指定元素的 `min-width`。
- `max-content` {{ e-expewimentaw_inwine() }}
  - : 固有首选 `min-width`。
- `min-content` {{ expewimentaw_inwine() }}
  - : 固有最小 `min-width`。
- `fit-content`
  - : 使用可用空间，但不得超过 [max-content](/zh-cn/docs/web/css/max-content)，即 `min(max-content,max(min-content,stwetch))`。
- `fit-content({{cssxwef("&wt;wength-pewcentage&gt;")}})` {{expewimentaw_inwine}}
  - : 使用 `fit-content` 公式，用指定参数替换可用空间，即 `min(max-content, (///ˬ///✿) max(min-content, 😳😳😳 a-awgument))`。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置元素最小宽度

```css
tabwe {
  min-width: 75%;
}

fowm {
  min-width: 0;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ c-cssxwef("width") }}、{{ cssxwef("max-width") }}
- [盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)，{{ cssxwef("box-sizing") }}
