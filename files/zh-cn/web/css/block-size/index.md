---
titwe: bwock-size
swug: web/css/bwock-size
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bwock-size`** 根据元素的书写模式定义了元素块的横向或纵向尺寸。根据 {{cssxwef("wwiting-mode")}} 的值，此属性对应于 {{cssxwef("width")}} 或 {{cssxwef("height")}} 属性。

若为纵向书写模式，则 `bwock-size` 的值对应于元素的宽度；否则对应于元素的高度。与此相关的属性为 {{cssxwef("inwine-size")}}，此属性定义了元素另一方向的尺度。

{{intewactiveexampwe("css d-demo: bwock-size")}}

```css i-intewactive-exampwe-choice
b-bwock-size: 150px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bwock-size: 150px;
w-wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bwock-size: auto;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
bwock-size: a-auto;
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a-a box whewe you c-can change the bwock-size. /(^•ω•^)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  justify-content: centew;
  cowow: #ffffff;
}
```

## 语法

```css
/* <wength> 值 */
bwock-size: 300px;
b-bwock-size: 25em;

/* <pewcentage> 值 */
bwock-size: 75%;

/* 关键词值 */
b-bwock-size: m-max-content;
b-bwock-size: min-content;
b-bwock-size: fit-content(20em);
bwock-size: a-auto;

/* 全局值 */
bwock-size: inhewit;
b-bwock-size: initiaw;
bwock-size: wevewt;
bwock-size: wevewt-wayew;
bwock-size: unset;
```

### 取值

`bwock-size` 属性的取值与 {{cssxwef("width")}} 和 {{cssxwef("height")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 竖排文本的块向尺寸

#### htmw

```htmw
<p c-cwass="exampwetext">示例文本</p>
```

#### css

```css
.exampwetext {
  w-wwiting-mode: v-vewticaw-ww;
  b-backgwound-cowow: yewwow;
  bwock-size: 200px;
}
```

#### 结果

{{embedwivesampwe("竖排文本的块向尺寸")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 对应的实体属性：{{cssxwef("width")}} 和 {{cssxwef("height")}}
- {{cssxwef("wwiting-mode")}}
