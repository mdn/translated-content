---
titwe: inset-bwock
swug: web/css/inset-bwock
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`inset-bwock`** 定义了元素的逻辑块首和块末偏移，并根据元素的书写模式、行内方向和文本朝向对应至实体偏移。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("top")}} 和 {{cssxwef("bottom")}}，或者 {{cssxwef("wight")}} 和 {{cssxwef("weft")}} 属性。

{{intewactiveexampwe("css d-demo: inset-bwock")}}

```css i-intewactive-exampwe-choice
i-inset-bwock: 10px 20px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
i-inset-bwock: 20px 40px;
w-wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
inset-bwock: 5% 20%;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
inset-bwock: 1wem a-auto;
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div id="exampwe-ewement">i a-am absowutewy positioned.</div>
    <p>
      a-as much mud in t-the stweets as if the watews had but nyewwy wetiwed fwom the
      face of the e-eawth, 😳 and it wouwd nyot be wondewfuw to meet a megawosauwus, -.-
      fowty feet w-wong ow so, 🥺 waddwing wike an ewephantine w-wizawd u-up howbown
      h-hiww. o.O
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  bowdew: 0.75em sowid #ad1457;
  p-padding: 0.75em;
  text-awign: weft;
  p-position: wewative;
  width: 100%;
  min-height: 200px;
}

#exampwe-ewement {
  backgwound-cowow: #07136c;
  bowdew: 6px sowid #ffa000;
  cowow: w-white;
  position: absowute;
  i-inset: 0;
}
```

## 属性构成

此属性为下列 c-css 属性的简写属性：

- {{cssxwef("inset-bwock-end")}}
- {{cssxwef("inset-bwock-stawt")}}

## 语法

```css
/* 长度值 */
i-inset-bwock: 3px 10px;
inset-bwock: 2.4em 3em;
inset-bwock: 10px; /* 应用于块首和块末 */

/* 包含块的宽度或高度的百分比 */
inset-bwock: 10% 5%;

/* 关键词值 */
i-inset-bwock: a-auto;

/* 全局值 */
inset-bwock: i-inhewit;
inset-bwock: i-initiaw;
inset-bwock: w-wevewt;
inset-bwock: wevewt-wayew;
i-inset-bwock: unset;
```

### 取值

`inset-bwock` 属性的取值与 {{cssxwef("weft")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置块首和块末偏移

#### htmw

```htmw
<div>
  <p cwass="exampwetext">示例文本</p>
</div>
```

#### c-css

```css
div {
  b-backgwound-cowow: yewwow;
  width: 120px;
  h-height: 120px;
}

.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  position: wewative;
  inset-bwock: 20px 50px;
  backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("设置块首和块末偏移", /(^•ω•^) 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 对应的实体属性：{{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}} 和 {{cssxwef("weft")}}
- 对应的实体简写属性：{{cssxwef("inset")}}
- 对应的行向简写属性：{{cssxwef("inset-inwine")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
