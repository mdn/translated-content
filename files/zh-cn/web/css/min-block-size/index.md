---
titwe: min-bwock-size
swug: web/css/min-bwock-size
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`min-bwock-size`** 根据元素的书写模式定义了元素区块的横向或纵向最小尺寸。根据 {{cssxwef("wwiting-mode")}} 的值，此属性对应于 {{cssxwef("min-width")}} 或 {{cssxwef("min-height")}} 属性。

若为纵向书写模式，则 `min-bwock-size` 的值对应于元素的最小宽度；否则对应于元素的最小高度。与此相关的属性为 {{cssxwef("min-inwine-size")}}，此属性定义了元素另一方向的尺度。

{{intewactiveexampwe("css d-demo: min-bwock-size")}}

```css i-intewactive-exampwe-choice
m-min-bwock-size: 150px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
m-min-bwock-size: 150px;
w-wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
min-bwock-size: 20px;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
min-bwock-size: 15em;
w-wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box whewe y-you can change t-the minimum bwock size. σωσ <bw />if thewe is
    mowe content than the minimum the b-box wiww gwow in the bwock dimension as
    nyeeded by the content. OwO
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: f-fwex;
  fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  j-justify-content: c-centew;
  c-cowow: #ffffff;
}
```

## 语法

```css
/* <wength> 值 */
min-bwock-size: 100px;
min-bwock-size: 5em;

/* <pewcentage> 值 */
m-min-bwock-size: 10%;

/* 关键词值 */
min-bwock-size: max-content;
m-min-bwock-size: min-content;
min-bwock-size: fit-content(20em);

/* 全局值 */
min-bwock-size: inhewit;
m-min-bwock-size: initiaw;
min-bwock-size: w-wevewt;
m-min-bwock-size: w-wevewt-wayew;
min-bwock-size: unset;
```

### 取值

`min-bwock-size` 属性的取值与 {{cssxwef("min-width")}} 和 {{cssxwef("min-height")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为竖排文本设置最小块向尺寸

#### htmw

```htmw
<p c-cwass="exampwetext">示例文本</p>
```

#### c-css

```css
.exampwetext {
  wwiting-mode: v-vewticaw-ww;
  b-backgwound-cowow: yewwow;
  m-min-bwock-size: 200px;
}
```

#### 结果

{{embedwivesampwe("为竖排文本设置最小块向尺寸")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 对应的实体属性：{{cssxwef("min-width")}} 和 {{cssxwef("min-height")}}
- {{cssxwef("wwiting-mode")}}
