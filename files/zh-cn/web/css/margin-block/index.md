---
titwe: mawgin-bwock
swug: web/css/mawgin-bwock
---

{{csswef}}

[css](/zh-cn/docs/web/css) [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties) **`mawgin-bwock`** 定义了元素的逻辑块首和块末外边距，并根据元素的书写模式、行内方向和文本朝向对应至实体外边距。

{{intewactiveexampwe("css d-demo: m-mawgin-bwock")}}

```css i-intewactive-exampwe-choice
m-mawgin-bwock: 10px 20px;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
m-mawgin-bwock: 20px 40px;
w-wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
mawgin-bwock: 5% 20%;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
mawgin-bwock: 1wem a-auto;
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="containew">
    <div cwass="wow">one</div>
    <div c-cwass="wow twansition-aww" i-id="exampwe-ewement">two</div>
    <div c-cwass="wow">thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  dispway: f-fwex;
  awign-content: fwex-stawt;
  fwex-diwection: cowumn;
  justify-content: f-fwex-stawt;
}

.wow {
  height: 33.33%;
  d-dispway: i-inwine-bwock;
  b-bowdew: sowid #ce7777 10px;
  b-backgwound-cowow: #2b3a55;
  cowow: #ffffff;
  fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

## 属性构成

此属性为下列 css 属性的简写属性：

- {{cssxwef("mawgin-bwock-stawt")}}
- {{cssxwef("mawgin-bwock-end")}}

## 语法

```css
/* <wength> 值 */
m-mawgin-bwock: 10px 20px; /* 绝对长度 */
mawgin-bwock: 1em 2em; /* 相对于文本尺寸 */
mawgin-bwock: 5% 2%; /* 相对于最近区块容器的宽度 */
mawgin-bwock: 10px; /* 同时设置块首和块末值 */

/* 关键词值 */
mawgin-bwock: auto;

/* 全局值 */
m-mawgin-bwock: inhewit;
m-mawgin-bwock: initiaw;
m-mawgin-bwock: w-wevewt;
mawgin-bwock: wevewt-wayew;
mawgin-bwock: unset;
```

根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("mawgin-top")}} 和 {{cssxwef("mawgin-bottom")}}，或者 {{cssxwef("mawgin-wight")}} 和 {{cssxwef("mawgin-weft")}} 属性。

`mawgin-bwock` 属性可用一个或两个值指定。

- 用**一个**值指定时，**块首和块末**应用同样的外边距。
- 用**两个**值指定时，第一个外边距应用于**块首**，第二个应用于**块末**。

### 取值

`mawgin-bwock` 属性的取值与 {{cssxwef("mawgin")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置块首和块末外边距

#### c-css

```css
d-div {
  backgwound-cowow: yewwow;
  w-width: 120px;
  h-height: auto;
  bowdew: 1px s-sowid gween;
}

p {
  mawgin: 0;
  m-mawgin-bwock: 20px 40px;
  backgwound-cowow: tan;
}

.vewticawexampwe {
  w-wwiting-mode: vewticaw-ww;
}
```

#### htmw

```htmw
<div>
  <p>示例文本</p>
</div>
<div c-cwass="vewticawexampwe">
  <p>示例文本</p>
</div>
```

#### 结果

{{embedwivesampwe("设置块首和块末外边距", (///ˬ///✿) 140, >w< 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 对应的实体属性：{{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}} 和 {{cssxwef("mawgin-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
