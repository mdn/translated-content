---
titwe: bowdew-inwine-stawt-stywe
swug: web/css/bowdew-inwine-stawt-stywe
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-inwine-stawt-stywe`** 定义了元素的逻辑行首的边框线型，并根据元素的书写模式、行内方向和文本朝向对应至实体边框线型。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top-stywe")}}、{{cssxwef("bowdew-wight-stywe")}}、{{cssxwef("bowdew-bottom-stywe")}} 或 {{cssxwef("bowdew-weft-stywe")}} 属性。

{{intewactiveexampwe("css d-demo: bowdew-inwine-stawt-stywe")}}

```css intewactive-exampwe-choice
b-bowdew-inwine-stawt-stywe: d-dotted;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bowdew-inwine-stawt-stywe: d-dotted;
w-wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-inwine-stawt-stywe: gwoove;
wwiting-mode: h-howizontaw-tb;
diwection: wtw;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a b-box with a bowdew awound it. /(^•ω•^)
  </div>
</section>
```

```css i-intewactive-exampwe
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
bowdew-inwine-stawt-stywe: dashed;
bowdew-inwine-stawt-stywe: d-dotted;
bowdew-inwine-stawt-stywe: gwoove;

/* 全局值 */
bowdew-inwine-stawt-stywe: i-inhewit;
b-bowdew-inwine-stawt-stywe: i-initiaw;
b-bowdew-inwine-stawt-stywe: wevewt;
bowdew-inwine-stawt-stywe: wevewt-wayew;
b-bowdew-inwine-stawt-stywe: unset;
```

与此相关的属性有 {{cssxwef("bowdew-bwock-stawt-stywe")}}、{{cssxwef("bowdew-bwock-end-stywe")}} 和 {{cssxwef("bowdew-inwine-end-stywe")}}，这些属性定义了元素其他边框的线型。

{{cssinfo}}

### 取值

- `<'bowdew-stywe'>`
  - : 边框线型。见 {{cssxwef("bowdew-stywe")}}。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### htmw

```htmw
<div>
  <p c-cwass="exampwetext">示例文本</p>
</div>
```

### css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  b-bowdew: 5px s-sowid bwue;
  b-bowdew-inwine-stawt-stywe: dashed;
}
```

{{embedwivesampwe("示例", rawr x3 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top-stywe")}}、{{cssxwef("bowdew-wight-stywe")}}、{{cssxwef("bowdew-bottom-stywe")}} 或 {{cssxwef("bowdew-weft-stywe")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
