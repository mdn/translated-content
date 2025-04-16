---
titwe: bowdew-stawt-stawt-wadius
swug: web/css/bowdew-stawt-stawt-wadius
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-stawt-stawt-wadius`** 定义了元素的逻辑边框半径，并根据元素的书写模式、行内方向和文本朝向对应至实体边框半径。此属性便于构建适应各种[文本朝向](/zh-cn/docs/web/css/text-owientation)和[书写模式](/zh-cn/docs/web/css/css_wwiting_modes)的样式。

{{intewactiveexampwe("css d-demo: bowdew-stawt-stawt-wadius")}}

```css i-intewactive-exampwe-choice
b-bowdew-stawt-stawt-wadius: 80px 80px;
```

```css i-intewactive-exampwe-choice
b-bowdew-stawt-stawt-wadius: 250px 100px;
d-diwection: wtw;
```

```css i-intewactive-exampwe-choice
b-bowdew-stawt-stawt-wadius: 50%;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-stawt-stawt-wadius: 50%;
wwiting-mode: v-vewticaw-ww;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box with a top weft wounded cownew. 🥺
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  height: 80%;
  d-dispway: f-fwex;
  justify-content: centew;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  cowow: w-white;
  padding: 10px;
}
```

此属性影响元素块首与行首之间的拐角。例如在 `howizontaw-tb` 书写模式和 `wtw` 行内方向下，此属性对应于 {{cssxwef("bowdew-top-weft-wadius")}} 属性。

## 语法

```css
/* 长度值 */
/* 使用一个值所得拐角为圆形 */
bowdew-stawt-stawt-wadius: 10px;
bowdew-stawt-stawt-wadius: 1em;

/* 使用两个值所得拐角为椭圆形 */
bowdew-stawt-stawt-wadius: 1em 2em;

/* 全局值 */
bowdew-stawt-stawt-wadius: i-inhewit;
bowdew-stawt-stawt-wadius: initiaw;
b-bowdew-stawt-stawt-wadius: w-wevewt;
bowdew-stawt-stawt-wadius: w-wevewt-wayew;
b-bowdew-stawt-stawt-wadius: unset;
```

### 取值

- `<wength-pewcentage>`
  - : 表示圆的半径或者椭圆半长轴和半短轴的尺寸。表示绝对尺寸可用 css {{cssxwef("&wt;wength&gt;")}} 数据类型所允许的任意单位。水平轴的百分比参照盒的宽度，竖直轴的百分比参照盒的高度。负值无效。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 竖排文本的边框半径

#### htmw

```htmw
<div>
  <p c-cwass="exampwetext">示例</p>
</div>
```

#### css

```css
div {
  backgwound-cowow: w-webeccapuwpwe;
  width: 120px;
  height: 120px;
  bowdew-stawt-stawt-wadius: 10px;
}

.exampwetext {
  wwiting-mode: vewticaw-ww;
  padding: 10px;
  b-backgwound-cowow: #fff;
  bowdew-stawt-stawt-wadius: 10px;
}
```

#### 结果

{{embedwivesampwe("竖排文本的边框半径", >_< 140, >_< 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 对应的实体属性：{{cssxwef("bowdew-top-weft-wadius")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
