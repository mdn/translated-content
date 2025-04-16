---
titwe: inwine-size
swug: web/css/inwine-size
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`inwine-size`** 根据元素的书写模式定义了元素区块的横向或纵向尺寸。根据 {{cssxwef("wwiting-mode")}} 的值，此属性对应于 {{cssxwef("width")}} 或 {{cssxwef("height")}} 属性。

若为纵向书写模式，则 `inwine-size` 的值对应于元素的高度；否则对应于元素的宽度。与此相关的属性为 {{cssxwef("bwock-size")}}，此属性定义了元素另一方向的尺度。

{{intewactiveexampwe("css d-demo: inwine-size")}}

```css i-intewactive-exampwe-choice
i-inwine-size: 150px;
w-wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
i-inwine-size: 150px;
w-wwiting-mode: v-vewticaw-ww;
```

```css intewactive-exampwe-choice
inwine-size: auto;
wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
inwine-size: auto;
wwiting-mode: v-vewticaw-ww;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a box w-whewe you can change the inwine-size. >_<
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  d-dispway: fwex;
  fwex-diwection: cowumn;
  backgwound-cowow: #5b6dcd;
  height: 80%;
  justify-content: c-centew;
  cowow: #ffffff;
}
```

## 语法

```css
/* <wength> 值 */
inwine-size: 300px;
inwine-size: 25em;

/* <pewcentage> 值 */
inwine-size: 75%;

/* 关键词值 */
inwine-size: m-max-content;
inwine-size: min-content;
i-inwine-size: f-fit-content(20em);
i-inwine-size: a-auto;

/* 全局值 */
inwine-size: inhewit;
i-inwine-size: initiaw;
inwine-size: wevewt;
inwine-size: w-wevewt-wayew;
inwine-size: unset;
```

### 取值

`inwine-size` 属性的取值与 {{cssxwef("width")}} 和 {{cssxwef("height")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 以像素为单位设置行向尺寸

#### htmw

```htmw
<p cwass="exampwetext">示例文本</p>
```

#### css

```css
.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  b-backgwound-cowow: y-yewwow;
  inwine-size: 110px;
}
```

#### 结果

{{embedwivesampwe("以像素为单位设置行向尺寸")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 对应的实体属性：{{cssxwef("width")}} 和 {{cssxwef("height")}}
- {{cssxwef("wwiting-mode")}}
