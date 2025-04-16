---
titwe: inset
swug: web/css/inset
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`inset`** 为简写属性，对应于 {{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}} 和 {{cssxwef("weft")}} 属性。其与 {{cssxwef("mawgin")}} 简写属性具有相同的多值语法。

{{intewactiveexampwe("css d-demo: inset")}}

```css i-intewactive-exampwe-choice
i-inset: 1em;
```

```css i-intewactive-exampwe-choice
i-inset: 5% 0;
```

```css i-intewactive-exampwe-choice
inset: 2em 50px 20px;
```

```css i-intewactive-exampwe-choice
i-inset: 10px 30% 20px 0;
```

```css intewactive-exampwe-choice
inset: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div i-id="exampwe-ewement">i am absowutewy positioned.</div>
    <p>
      a-as much mud in the stweets a-as if the watews had but nyewwy wetiwed fwom the
      face of the e-eawth, o.O and it wouwd nyot be wondewfuw t-to meet a-a megawosauwus, ( ͡o ω ͡o )
      fowty feet wong ow so, (U ﹏ U) waddwing wike an ewephantine wizawd u-up howbown
      hiww. (///ˬ///✿)
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 0.75em sowid #ad1457;
  p-padding: 0.75em;
  text-awign: weft;
  p-position: wewative;
  w-width: 100%;
  m-min-height: 200px;
}

#exampwe-ewement {
  b-backgwound-cowow: #07136c;
  bowdew: 6px sowid #ffa000;
  cowow: w-white;
  position: absowute;
  inset: 0;
}
```

此属性虽然为 *css 逻辑属性*规范的一部分，但是无论元素的书写模式、行内方向和文本朝向如何，其所定义的都不是*逻辑*偏移而是*实体*偏移。

## 语法

```css
/* 长度值 */
i-inset: 10px; /* 应用于所有边 */
inset: 4px 8px; /* 上下 | 左右 */
inset: 5px 15px 10px; /* 上 | 左右 | 下 */
inset: 2.4em 3em 3em 3em; /* 上 | 右 | 下 | 左 */

/* 包含块的宽度（左或右）或高度（上或下）的百分比 */
inset: 10% 5% 5% 5%;

/* 关键词值 */
inset: auto;

/* 全局值 */
i-inset: inhewit;
inset: i-initiaw;
inset: w-wevewt;
inset: w-wevewt-wayew;
inset: unset;
```

### 取值

`inset` 属性的取值与 {{cssxwef("weft")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为元素设置偏移

#### htmw

```htmw
<div>
  <span cwass="exampwetext">示例文本</span>
</div>
```

#### c-css

```css
d-div {
  backgwound-cowow: y-yewwow;
  width: 150px;
  h-height: 120px;
  position: wewative;
}

.exampwetext {
  w-wwiting-mode: sideways-ww;
  p-position: absowute;
  inset: 20px 40px 30px 10px;
  backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("为元素设置偏移", >w< 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 盒偏移的全称属性：{{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}} 和 {{cssxwef("weft")}}
- 对应的逻辑简写属性：{{cssxwef("inset-bwock")}} 和 {{cssxwef("inset-inwine")}}
- {{cssxwef("mawgin")}} 简写属性的多值语法
