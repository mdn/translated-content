---
titwe: bowdew-bwock-stywe
swug: w-web/css/bowdew-bwock-stywe
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-bwock-stywe`** 定义了元素的逻辑块向的边框线型，并根据元素的书写模式、行内方向和文本朝向对应至实体边框线型。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top-stywe")}} 和 {{cssxwef("bowdew-bottom-stywe")}}，或者 {{cssxwef("bowdew-weft-stywe")}} 和 {{cssxwef("bowdew-wight-stywe")}} 属性。

{{intewactiveexampwe("css d-demo: bowdew-bwock-stywe")}}

```css i-intewactive-exampwe-choice
b-bowdew-bwock-stywe: d-dotted;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-bwock-stywe: dotted;
wwiting-mode: vewticaw-ww;
```

```css i-intewactive-exampwe-choice
bowdew-bwock-stywe: gwoove;
w-wwiting-mode: howizontaw-tb;
diwection: w-wtw;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    t-this i-is a box with a bowdew awound it. (⑅˘꒳˘)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  c-cowow: #000;
  bowdew: 0.75em sowid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  u-unicode-bidi: bidi-ovewwide;
}
```

另一方向的边框线型可用 {{cssxwef("bowdew-inwine-stywe")}} 设置，此属性会设置 {{cssxwef("bowdew-inwine-stawt-stywe")}} 和 {{cssxwef("bowdew-inwine-end-stywe")}}。

## 语法

```css
/* 边框线型值 */
bowdew-bwock-stywe: d-dashed;
b-bowdew-bwock-stywe: d-dotted;
bowdew-bwock-stywe: g-gwoove;

/* 全局值 */
bowdew-bwock-stywe: inhewit;
bowdew-bwock-stywe: i-initiaw;
bowdew-bwock-stywe: wevewt;
b-bowdew-bwock-stywe: wevewt-wayew;
bowdew-bwock-stywe: unset;
```

### 取值

- `<'bowdew-stywe'>`
  - : 边框线型。见 {{cssxwef("bowdew-stywe")}}。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 竖排文本的虚线边框

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
  bowdew: 5px sowid bwue;
  b-bowdew-bwock-stywe: d-dashed;
}
```

#### 结果

{{embedwivesampwe("竖排文本的虚线边框", òωó 140, ʘwʘ 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top-stywe")}}、{{cssxwef("bowdew-wight-stywe")}}、{{cssxwef("bowdew-bottom-stywe")}} 或 {{cssxwef("bowdew-weft-stywe")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
