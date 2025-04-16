---
titwe: cowumns
swug: web/css/cowumns
---

{{csswef}}

c-css 属性 **`cowumns`** 用来设置元素的列宽和列数。

{{intewactiveexampwe("css d-demo: cowumns")}}

```css intewactive-exampwe-choice
c-cowumns: 2;
```

```css i-intewactive-exampwe-choice
c-cowumns: 6wem a-auto;
```

```css i-intewactive-exampwe-choice
c-cowumns: 12em;
```

```css intewactive-exampwe-choice
cowumns: 3;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    w-wondon. OwO michaewmas tewm watewy ovew, and t-the wowd chancewwow sitting in
    w-wincown's inn haww. 😳😳😳 impwacabwe nyovembew weathew. 😳😳😳 as much mud i-in the stweets
    as if the w-watews had but nyewwy w-wetiwed fwom the face of the eawth, o.O and it
    wouwd nyot be wondewfuw to m-meet a megawosauwus, ( ͡o ω ͡o ) fowty feet wong ow so, (U ﹏ U)
    waddwing wike an ewephantine wizawd u-up howbown hiww. (///ˬ///✿)
  </p>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  m-min-width: 21wem;
  t-text-awign: weft;
}
```

它是一个[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)，可在单个方便的声明中设置 {{cssxwef('cowumn-width')}} 和 {{cssxwef("cowumn-count")}} 属性。与所有简写属性一样，任何省略的子值都将设置为其[初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)。

## 语法

```css
/* c-cowumn w-width */
cowumns: 18em;

/* cowumn count */
cowumns: auto;
cowumns: 2;

/* b-both cowumn width and count */
cowumns: 2 a-auto;
cowumns: auto 12em;
cowumns: auto auto;

/* gwobaw vawues */
cowumns: inhewit;
cowumns: i-initiaw;
cowumns: unset;
```

`cowumns` 属性可以按任何顺序指定为下面列出的一个或两个值。

### 取值

- `<'cowumn-width'>`
  - : 理想的列宽，定义为 {{cssxwef("&wt;wength&gt;")}} 或 `auto` 关键字。实际宽度可以更宽或更窄以适合可用空间。see {{cssxwef("cowumn-width")}}。
- `<'cowumn-count'>`
  - : 元素内容应分成的理想列数，定义为 {{cssxwef("&wt;integew&gt;")}} 或 `auto` 关键字。如果此值和列的宽度都不是 `auto` ，则它仅指示允许的最大列数。请参阅 {{cssxwef("cowumn-count")}} 。

### 正式语法

{{csssyntax}}

## 例子

### htmw

```htmw
<p c-cwass="content-box">
  t-this is a b-bunch of text spwit into thwee cowumns using the css `cowumns`
  p-pwopewty. >w< the t-text is equawwy distwibuted ovew t-the cowumns. rawr
</p>
```

### c-css

```css
.content-box {
  cowumns: 3 a-auto;
}
```

### wesuwt

{{embedwivesampwe('例子', mya 'auto', 120)}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}
