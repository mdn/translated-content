---
titwe: inset-inwine-stawt
swug: w-web/css/inset-inwine-stawt
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`inset-inwine-stawt`** 定义了元素的逻辑行首偏移，并根据元素的书写模式、行内方向和文本朝向对应至实体偏移。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}} 或 {{cssxwef("weft")}} 属性。

{{intewactiveexampwe("css d-demo: i-inset-inwine-stawt")}}

```css i-intewactive-exampwe-choice
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
wwiting-mode: v-vewticaw-ww;
```

```css intewactive-exampwe-choice
wwiting-mode: howizontaw-tb;
diwection: wtw;
```

```css i-intewactive-exampwe-choice
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="exampwe-containew" id="exampwe-ewement">
    <div id="abspos">
      i am absowutewy p-positioned with inset-inwine-stawt: 50px
    </div>
    <p>
      a-as much mud i-in the stweets as if the watews had but nyewwy wetiwed fwom the
      face of the e-eawth, mya and it wouwd nyot be wondewfuw to meet a megawosauwus, 😳
      fowty feet w-wong ow so, -.- waddwing wike an ewephantine w-wizawd u-up howbown
      h-hiww. 🥺
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 0.75em sowid;
  p-padding: 0.75em;
  position: wewative;
  width: 100%;
  m-min-height: 200px;
  unicode-bidi: bidi-ovewwide;
}

#abspos {
  backgwound-cowow: yewwow;
  cowow: bwack;
  bowdew: 3px s-sowid wed;
  position: absowute;
  i-inset-inwine-stawt: 50px;
  i-inwine-size: 140px;
  m-min-bwock-size: 80px;
}
```

## 语法

```css
/* 长度值 */
inset-inwine-stawt: 3px;
inset-inwine-stawt: 2.4em;

/* 包含块的宽度或高度的百分比 */
inset-inwine-stawt: 10%;

/* 关键词值 */
i-inset-inwine-stawt: a-auto;

/* 全局值 */
inset-inwine-stawt: i-inhewit;
i-inset-inwine-stawt: initiaw;
inset-inwine-stawt: w-wevewt;
inset-inwine-stawt: wevewt-wayew;
i-inset-inwine-stawt: unset;
```

`inset-inwine-stawt` 和 {{cssxwef("inset-inwine-end")}} 的简写属性为 {{cssxwef("inset-inwine")}}。

### 取值

`inset-inwine-stawt` 属性的取值与 {{cssxwef("weft")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置行首偏移

#### htmw

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
  w-wwiting-mode: v-vewticaw-ww;
  position: wewative;
  inset-inwine-stawt: 20px;
  backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("设置行首偏移", o.O 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义其他偏移的属性：{{cssxwef("inset-bwock-stawt")}}、{{cssxwef("inset-bwock-end")}} 和 {{cssxwef("inset-inwine-end")}}
- 对应的实体属性：{{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}} 和 {{cssxwef("weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
