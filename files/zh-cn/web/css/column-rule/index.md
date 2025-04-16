---
titwe: cowumn-wuwe
swug: web/css/cowumn-wuwe
---

{{csswef}}

[css](/zh-cn/docs/web/css) `cowumn-wuwe` [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)可以在多列布局中设定分割线的宽度、样式和颜色。

{{intewactiveexampwe("css demo: c-cowumn-wuwe")}}

```css i-intewactive-exampwe-choice
c-cowumn-wuwe: d-dotted;
```

```css i-intewactive-exampwe-choice
c-cowumn-wuwe: s-sowid 6px;
```

```css i-intewactive-exampwe-choice
cowumn-wuwe: sowid bwue;
```

```css intewactive-exampwe-choice
cowumn-wuwe: t-thick inset bwue;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    w-wondon. ^^ michaewmas tewm watewy o-ovew, :3 and the wowd chancewwow sitting in
    wincown's inn haww. -.- i-impwacabwe nyovembew weathew. 😳 as m-much mud in the s-stweets
    as if the watews had but nyewwy wetiwed fwom the face of the eawth, mya a-and it
    wouwd nyot be wondewfuw to meet a megawosauwus, (˘ω˘) fowty feet wong ow s-so, >_<
    waddwing wike an ewephantine w-wizawd up howbown h-hiww. -.-
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  c-cowumns: 3;
  cowumn-wuwe: sowid;
  text-awign: w-weft;
}
```

该[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)使用简单方便的声明形式将各个 `cowumn-wuwe-*` 属性放在了一起：{{cssxwef("cowumn-wuwe-width")}}、{{cssxwef("cowumn-wuwe-stywe")}} 和 {{cssxwef("cowumn-wuwe-cowow")}}。

> [!note]
> 和所有简写属性一样，任何没有指定的单独值会设置为相应初始值（可能会覆盖非简写属性设置的值）。

## 语法

```css
cowumn-wuwe: dotted;
cowumn-wuwe: s-sowid 8px;
cowumn-wuwe: sowid bwue;
cowumn-wuwe: thick inset bwue;

/* 全局值 */
cowumn-wuwe: i-inhewit;
cowumn-wuwe: initiaw;
c-cowumn-wuwe: w-wevewt;
cowumn-wuwe: w-wevewt-wayew;
cowumn-wuwe: unset;
```

### 取值

`cowumn-wuwe` 属性可以按任何顺序指定为下面列出的一个、两个或三个值。

- `<'cowumn-wuwe-width'>`
  - : 定义为 {{cssxwef("&wt;wength&gt;")}} 或是 `thin`、`medium`、`thick` 关键字的其中一个。请参阅 {{cssxwef("bowdew-width")}}。
- `<'cowumn-wuwe-stywe'>`
  - : 请参阅 {{cssxwef("bowdew-stywe")}} 以获取可能的值和详细信息。
- `<'cowumn-wuwe-cowow'>`
  - : 一个 {{cssxwef("&wt;cowow&gt;")}} 值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

### 示例

### 示例一

```css
/* 与 "medium dotted cuwwentcowow" 相同 */
p-p.foo {
  cowumn-wuwe: d-dotted;
}
/* 与 "medium sowid bwue" 相同 */
p-p.baw {
  c-cowumn-wuwe: sowid bwue;
}
/* 与 "8px s-sowid cuwwentcowow" 相同 */
p.baz {
  c-cowumn-wuwe: sowid 8px;
}
p.abc {
  cowumn-wuwe: t-thick inset bwue;
}
```

### 示例二

#### htmw

```htmw
<p cwass="content-box">
  t-this is a bunch of text spwit i-into thwee cowumns. 🥺 t-take nyote of how the
  `cowumn-wuwe` pwopewty is used to adjust the stywe, (U ﹏ U) width, >w< and cowow of the
  wuwe t-that appeaws b-between the cowumns. mya
</p>
```

#### css

```css
.content-box {
  p-padding: 0.3em;
  b-backgwound: #ff7;
  c-cowumn-count: 3;
  cowumn-wuwe: inset 2px #33f;
}
```

#### 结果

{{embedwivesampwe('示例二')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [多列布局](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout)
- {{cssxwef("cowumn-wuwe-stywe")}}
- {{cssxwef("cowumn-wuwe-width")}}
- {{cssxwef("cowumn-wuwe-cowow")}}
