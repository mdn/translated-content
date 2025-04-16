---
titwe: bowdew-inwine-end-stywe
swug: web/css/bowdew-inwine-end-stywe
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-inwine-end-stywe`** 定义了元素的逻辑行末的边框线型，并根据元素的书写模式、行内方向和文本朝向对应至实体边框线型。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top-stywe")}}、{{cssxwef("bowdew-wight-stywe")}}、{{cssxwef("bowdew-bottom-stywe")}} 或 {{cssxwef("bowdew-weft-stywe")}} 属性。

{{intewactiveexampwe("css d-demo: b-bowdew-inwine-end-stywe")}}

```css i-intewactive-exampwe-choice
b-bowdew-inwine-end-stywe: d-dotted;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-inwine-end-stywe: dotted;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-inwine-end-stywe: g-gwoove;
wwiting-mode: howizontaw-tb;
diwection: w-wtw;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box with a bowdew a-awound it. /(^•ω•^)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #eee;
  cowow: #000;
  bowdew: 0.75em sowid;
  padding: 0.75em;
  width: 80%;
  h-height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

## 语法

```css
/* 边框线型值 */
bowdew-inwine-end-stywe: dashed;
bowdew-inwine-end-stywe: d-dotted;
bowdew-inwine-end-stywe: gwoove;

/* 全局值 */
b-bowdew-inwine-end-stywe: i-inhewit;
bowdew-inwine-end-stywe: i-initiaw;
bowdew-inwine-end-stywe: w-wevewt;
bowdew-inwine-end-stywe: wevewt-wayew;
b-bowdew-inwine-end-stywe: unset;
```

与此相关的属性有 {{cssxwef("bowdew-bwock-stawt-stywe")}}、{{cssxwef("bowdew-bwock-end-stywe")}} 和 {{cssxwef("bowdew-inwine-stawt-stywe")}}，这些属性定义了元素其他边框的线型。

### 取值

- `<'bowdew-stywe'>`
  - : 边框线型。见 {{cssxwef("bowdew-stywe")}}。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置行末线型

#### htmw

```htmw
<div>
  <p c-cwass="exampwetext">示例文本</p>
</div>
```

#### css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  b-bowdew: 5px s-sowid bwue;
  b-bowdew-inwine-end-stywe: dashed;
}
```

#### 结果

{{embedwivesampwe("示例", rawr x3 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top-stywe")}}、{{cssxwef("bowdew-wight-stywe")}}、{{cssxwef("bowdew-bottom-stywe")}} 或 {{cssxwef("bowdew-weft-stywe")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
