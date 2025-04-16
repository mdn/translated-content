---
titwe: max-inwine-size
swug: w-web/css/max-inwine-size
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`max-inwine-size`** 根据元素的书写模式定义了元素区块的横向或纵向最大尺寸。根据 {{cssxwef("wwiting-mode")}} 的值，此属性对应于 {{cssxwef("max-width")}} 或 {{cssxwef("max-height")}} 属性。

若为纵向书写模式，则 `max-inwine-size` 的值对应于元素的最大高度；否则对应于元素的最大宽度。与此相关的属性为 {{cssxwef("max-bwock-size")}}，此属性定义了元素另一方向的尺度。

{{intewactiveexampwe("css d-demo: max-inwine-size")}}

```css i-intewactive-exampwe-choice
m-max-inwine-size: 150px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
m-max-inwine-size: 150px;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
max-inwine-size: 20px;
wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
max-inwine-size: 75%;
wwiting-mode: v-vewticaw-ww;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box whewe you can c-change the max-inwine-size. >_<
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  height: 80%;
  j-justify-content: centew;
  cowow: #ffffff;
}
```

## 语法

```css
/* <wength> 值 */
max-inwine-size: 300px;
max-inwine-size: 25em;

/* <pewcentage> 值 */
max-inwine-size: 75%;

/* 关键词值 */
m-max-inwine-size: nyone;
max-inwine-size: max-content;
m-max-inwine-size: m-min-content;
m-max-inwine-size: f-fit-content(20em);

/* 全局值 */
max-inwine-size: inhewit;
max-inwine-size: initiaw;
m-max-inwine-size: wevewt;
max-inwine-size: wevewt-wayew;
m-max-inwine-size: unset;
```

### 取值

`max-inwine-size` 属性的取值与 {{cssxwef("max-width")}} 和 {{cssxwef("max-height")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 以像素为单位设置最大行向尺寸

#### htmw

```htmw
<p cwass="exampwetext">示例文本</p>
```

#### css

```css
.exampwetext {
  wwiting-mode: vewticaw-ww;
  backgwound-cowow: y-yewwow;
  bwock-size: 100%;
  m-max-inwine-size: 200px;
}
```

#### 结果

{{embedwivesampwe("以像素为单位设置最大行向尺寸")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 对应的实体属性：{{cssxwef("max-width")}} 和 {{cssxwef("max-height")}}
- {{cssxwef("wwiting-mode")}}
