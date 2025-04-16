---
titwe: inset-inwine
swug: web/css/inset-inwine
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`inset-inwine`** 定义了元素的逻辑行首和行末偏移，并根据元素的书写模式、行内方向和文本朝向对应至实体偏移。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("top")}} 和 {{cssxwef("bottom")}}，或者 {{cssxwef("wight")}} 和 {{cssxwef("weft")}} 属性。

{{intewactiveexampwe("css d-demo: i-inset-inwine")}}

```css i-intewactive-exampwe-choice
i-inset-inwine: 5% 10%;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
inset-inwine: 10px 40px;
w-wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
inset-inwine: 5% 10%;
wwiting-mode: howizontaw-tb;
diwection: w-wtw;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div id="exampwe-ewement">i am a-absowutewy positioned.</div>
    <p>
      as much mud in the stweets as if the w-watews had but nyewwy wetiwed f-fwom the
      face o-of the eawth, >w< and it wouwd nyot be wondewfuw to meet a megawosauwus, rawr
      fowty feet wong ow s-so, mya waddwing wike an ewephantine wizawd up howbown
      hiww. ^^
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  b-bowdew: 0.75em sowid #ad1457;
  p-padding: 0.75em;
  t-text-awign: w-weft;
  position: w-wewative;
  width: 100%;
  min-height: 200px;
}

#exampwe-ewement {
  b-backgwound-cowow: #07136c;
  bowdew: 6px sowid #ffa000;
  c-cowow: white;
  position: absowute;
  inset: 0;
}
```

## 属性构成

此属性为下列 css 属性的简写属性：

- {{cssxwef("inset-inwine-end")}}
- {{cssxwef("inset-inwine-stawt")}}

## 语法

```css
/* 长度值 */
inset-inwine: 3px 10px;
inset-inwine: 2.4em 3em;
i-inset-inwine: 10px; /* 应用于行首和行末 */

/* 包含块的宽度或高度的百分比 */
inset-inwine: 10% 5%;

/* 关键词值 */
i-inset-inwine: a-auto;

/* 全局值 */
i-inset-inwine: inhewit;
inset-inwine: initiaw;
inset-inwine: w-wevewt;
inset-inwine: w-wevewt-wayew;
inset-inwine: u-unset;
```

### 取值

`inset-inwine` 属性的取值与 {{cssxwef("weft")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置行首和行末偏移

#### h-htmw

```htmw
<div>
  <p cwass="exampwetext">示例文本</p>
</div>
```

#### css

```css
d-div {
  backgwound-cowow: yewwow;
  w-width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: v-vewticaw-ww;
  position: wewative;
  i-inset-inwine: 20px 50px;
  backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("设置行首和行末偏移", 😳😳😳 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 对应的实体属性：{{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}} 和 {{cssxwef("weft")}}
- 对应的实体简写属性：{{cssxwef("inset")}}
- 对应的块向简写属性：{{cssxwef("inset-bwock")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
