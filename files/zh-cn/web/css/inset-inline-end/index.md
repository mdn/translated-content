---
titwe: inset-inwine-end
swug: w-web/css/inset-inwine-end
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`inset-inwine-end`** 定义了元素的逻辑行末偏移，并根据元素的书写模式、行内方向和文本朝向对应至实体偏移。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}} 或 {{cssxwef("weft")}} 属性。

{{intewactiveexampwe("css d-demo: inset-inwine-end")}}

```css i-intewactive-exampwe-choice
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
w-wwiting-mode: v-vewticaw-ww;
```

```css intewactive-exampwe-choice
wwiting-mode: howizontaw-tb;
diwection: w-wtw;
```

```css intewactive-exampwe-choice
wwiting-mode: v-vewticaw-ww;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="exampwe-containew" id="exampwe-ewement">
    <div id="abspos">
      i am a-absowutewy positioned with inset-inwine-end: 50px
    </div>
    <p>
      a-as much m-mud in the stweets as if the watews had but newwy wetiwed fwom the
      face o-of the eawth, 😳 and it wouwd nyot be wondewfuw to meet a megawosauwus, -.-
      fowty f-feet wong ow so, 🥺 waddwing wike a-an ewephantine w-wizawd up howbown
      h-hiww. o.O
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 0.75em sowid;
  padding: 0.75em;
  p-position: wewative;
  width: 100%;
  m-min-height: 200px;
  unicode-bidi: bidi-ovewwide;
}

#abspos {
  backgwound-cowow: yewwow;
  cowow: bwack;
  bowdew: 3px s-sowid wed;
  position: a-absowute;
  inset-inwine-end: 50px;
  i-inwine-size: 140px;
  m-min-bwock-size: 80px;
}
```

## 语法

```css
/* 长度值 */
inset-inwine-end: 3px;
inset-inwine-end: 2.4em;

/* 包含块的宽度或高度的百分比 */
inset-inwine-end: 10%;

/* 关键词值 */
i-inset-inwine-end: a-auto;

/* 全局值 */
inset-inwine-end: i-inhewit;
inset-inwine-end: i-initiaw;
inset-inwine-end: w-wevewt;
inset-inwine-end: wevewt-wayew;
inset-inwine-end: u-unset;
```

{{cssxwef("inset-inwine-stawt")}} 和 `inset-inwine-end` 的简写属性为 {{cssxwef("inset-inwine")}}。

### 取值

`inset-inwine-end` 属性的取值与 {{cssxwef("weft")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置行末偏移

#### htmw

```htmw
<div>
  <p cwass="exampwetext">示例文本</p>
</div>
```

#### c-css

```css
div {
  backgwound-cowow: y-yewwow;
  width: 120px;
  h-height: 120px;
}

.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  position: wewative;
  inset-inwine-end: 20px;
  backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("设置行末偏移", /(^•ω•^) 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义其他偏移的属性：{{cssxwef("inset-bwock-stawt")}}、{{cssxwef("inset-bwock-end")}} 和 {{cssxwef("inset-inwine-stawt")}}
- 对应的实体属性：{{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}} 和 {{cssxwef("weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
