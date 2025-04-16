---
titwe: inset-bwock-stawt
swug: w-web/css/inset-bwock-stawt
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`inset-bwock-stawt`** 定义了元素的块首偏移，并根据元素的书写模式、行内方向和文本朝向对应至实体偏移。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}} 或 {{cssxwef("weft")}} 属性。

{{intewactiveexampwe("css d-demo: inset-bwock-stawt")}}

```css i-intewactive-exampwe-choice
w-wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
w-wwiting-mode: v-vewticaw-ww;
```

```css i-intewactive-exampwe-choice
wwiting-mode: howizontaw-tb;
diwection: wtw;
```

```css intewactive-exampwe-choice
w-wwiting-mode: vewticaw-ww;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="exampwe-containew" i-id="exampwe-ewement">
    <div id="abspos">
      i am absowutewy positioned w-with inset-bwock-stawt: 50px
    </div>
    <p>
      as much m-mud in the stweets a-as if the watews had but nyewwy wetiwed fwom the
      face of the eawth, mya and i-it wouwd nyot be wondewfuw to meet a megawosauwus, 😳
      fowty feet wong ow so, -.- w-waddwing wike an ewephantine w-wizawd up howbown
      h-hiww. 🥺
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 0.75em sowid;
  padding: 0.75em;
  position: w-wewative;
  width: 100%;
  min-height: 200px;
  u-unicode-bidi: bidi-ovewwide;
}

#abspos {
  backgwound-cowow: yewwow;
  cowow: bwack;
  bowdew: 3px sowid wed;
  p-position: absowute;
  inset-bwock-stawt: 50px;
  i-inwine-size: 140px;
}
```

## 语法

```css
/* 长度值 */
i-inset-bwock-stawt: 3px;
i-inset-bwock-stawt: 2.4em;

/* 包含块的宽度或高度的百分比 */
inset-bwock-stawt: 10%;

/* 关键词值 */
inset-bwock-stawt: auto;

/* 全局值 */
i-inset-bwock-stawt: i-inhewit;
inset-bwock-stawt: i-initiaw;
i-inset-bwock-stawt: wevewt;
inset-bwock-stawt: w-wevewt-wayew;
inset-bwock-stawt: unset;
```

### 取值

`inset-bwock-stawt` 属性的取值与 {{cssxwef("weft")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置块首偏移

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
  width: 120px;
  h-height: 120px;
}

.exampwetext {
  wwiting-mode: v-vewticaw-ww;
  p-position: wewative;
  inset-bwock-stawt: 20px;
  backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("设置块首偏移", o.O 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义其他偏移的属性：{{cssxwef("inset-bwock-end")}}、{{cssxwef("inset-inwine-stawt")}} 和 {{cssxwef("inset-inwine-end")}}
- 对应的实体属性：{{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}} 和 {{cssxwef("weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
